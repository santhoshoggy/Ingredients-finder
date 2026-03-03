"use client";

import { useState, useEffect } from 'react';
import { Food } from '../data/foods';
import FoodCard from './FoodCard';
import AddFoodModal from './AddFoodModal';
import styles from './Gallery.module.css';

export default function Gallery() {
    const [foods, setFoods] = useState<Food[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const res = await fetch('/api/foods');
                if (res.ok) {
                    const data = await res.json();
                    setFoods(data.reverse());
                }
            } catch (err) {
                console.error("Failed to fetch foods", err);
            } finally {
                setLoading(false);
            }
        };

        fetchFoods();

        const handleOpen = () => setIsModalOpen(true);
        window.addEventListener('open-add-modal', handleOpen);
        return () => window.removeEventListener('open-add-modal', handleOpen);
    }, []);

    const handleAddFood = async (newFood: Food) => {
        try {
            const res = await fetch('/api/foods', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newFood)
            });
            if (res.ok) {
                const addedFood = await res.json();
                setFoods([addedFood, ...foods]);
            }
        } catch (err) {
            console.error("Failed to add food", err);
        }
    };

    return (
        <section className={styles.section} aria-labelledby="gallery-title">
            <div className={styles.header}>
                <h2 id="gallery-title" className={styles.title}>
                    <span className="gradient-text">Discover Premium Recipes</span>
                </h2>
                <p className={styles.subtitle}>
                    Explore our handpicked selection of gourmet dishes, visually stunning and rich in flavor.
                </p>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>Loading recipes...</div>
            ) : (
                <div className={styles.gridContainer}>
                    {foods.map((food, index) => (
                        <FoodCard key={`${food.id}-${index}`} food={food} />
                    ))}
                </div>
            )}

            <AddFoodModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddFood}
            />
        </section>
    );
}
