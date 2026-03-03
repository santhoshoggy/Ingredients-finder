"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Food } from '../data/foods';
import styles from './FoodCard.module.css';

interface FoodCardProps {
    food: Food;
    onDelete?: (id: string) => void;
}

export default function FoodCard({ food, onDelete }: FoodCardProps) {
    return (
        <div className={`${styles.card} glass`}>
            {onDelete && (
                <button
                    className={styles.deleteButton}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDelete(food.id); }}
                    aria-label={`Delete ${food.title}`}
                    title="Delete Recipe"
                >
                    &times;
                </button>
            )}
            <Link href={`/food/${food.id}`} className={styles.linkWrapper} aria-label={`View details for ${food.title}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={food.image}
                        alt={food.title}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{food.title}</h3>
                    <p className={styles.description}>{food.description}</p>
                    <span className={`${styles.readMore} gradient-text`}>View Recipe &rarr;</span>
                </div>
            </Link>
        </div>
    );
}
