import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    try {
        const params = await props.params;

        await prisma.food.delete({
            where: {
                id: params.id
            }
        });

        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ error: 'Failed to delete food' }, { status: 500 });
    }
}
