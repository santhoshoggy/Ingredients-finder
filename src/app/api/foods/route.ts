import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { foods as defaultFoods } from '@/data/foods';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        let dbFoods = await prisma.food.findMany();

        if (dbFoods.length === 0) {
            // Seed DB
            for (const f of defaultFoods) {
                await prisma.food.create({
                    data: {
                        id: f.id,
                        title: f.title,
                        description: f.description,
                        image: f.image,
                        ingredients: JSON.stringify(f.ingredients),
                        recipe: JSON.stringify(f.recipe)
                    }
                });
            }
            dbFoods = await prisma.food.findMany();
        }

        // Parse JSON strings back to arrays
        const parsedFoods = dbFoods.map((f: any) => ({
            ...f,
            ingredients: JSON.parse(f.ingredients),
            recipe: JSON.parse(f.recipe)
        }));

        return NextResponse.json(parsedFoods);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to fetch foods' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { id, title, description, image, ingredients, recipe } = body;

        const newFood = await prisma.food.create({
            data: {
                id,
                title,
                description,
                image,
                ingredients: JSON.stringify(ingredients),
                recipe: JSON.stringify(recipe)
            }
        });

        const parsedFood = {
            ...newFood,
            ingredients: JSON.parse(newFood.ingredients),
            recipe: JSON.parse(newFood.recipe)
        };

        return NextResponse.json(parsedFood);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to add food' }, { status: 500 });
    }
}
