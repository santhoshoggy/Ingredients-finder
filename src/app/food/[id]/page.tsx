import { foods } from '../../../data/foods';
import { Metadata } from 'next';
import ClientFoodDetail from '../../../components/ClientFoodDetail';

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const params = await props.params;
    const food = foods.find((f) => f.id === params.id);

    if (!food) {
        return { title: 'Recipe | Ingredients-finder' };
    }

    return {
        title: `${food.title} | Ingredients-finder`,
        description: food.description,
    };
}

export async function generateStaticParams() {
    return foods.map((food) => ({
        id: food.id,
    }));
}

export default async function FoodDetail(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;

    // We let the client component manage finding the recipe so that
    // custom recipes added via LocalStorage won't trigger server-side 404s.
    return <ClientFoodDetail id={params.id} defaultFoods={foods} />;
}
