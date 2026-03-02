"use client";

import { useState, useEffect } from 'react';
import { foods as initialFoods, Food } from '../data/foods';
import FoodCard from './FoodCard';
import AddFoodModal from './AddFoodModal';
import styles from './Gallery.module.css';

export default function Gallery() {
    const [foods, setFoods] = useState<Food[]>(initialFoods);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddFood = (newFood: Food) => {
        setFoods([newFood, ...foods]);
    };

    useEffect(() => {
        const handleOpen = () => setIsModalOpen(true);
        window.addEventListener('open-add-modal', handleOpen);
        return () => window.removeEventListener('open-add-modal', handleOpen);
    }, []);

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

            <div className={styles.gridContainer}>
                {foods.map((food, index) => (
                    <FoodCard key={`${food.id}-${index}`} food={food} />
                ))}
            </div>

            <AddFoodModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddFood}
            />
        </section>
    );
}
