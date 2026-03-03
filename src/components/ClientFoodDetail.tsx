"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Food } from '../data/foods';
import styles from '../app/food/[id]/page.module.css';

export default function ClientFoodDetail({ id, defaultFoods }: { id: string, defaultFoods: Food[] }) {
    const [food, setFood] = useState<Food | null | undefined>(undefined);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const res = await fetch('/api/foods');
                if (res.ok) {
                    const allFoods: Food[] = await res.json();
                    const found = allFoods.find((f) => f.id === id);
                    if (found) {
                        setFood(found);
                        return;
                    }
                }
            } catch (err) {
                console.error("Failed to fetch from API", err);
            }

            // Fallback to defaults
            const foundFallback = defaultFoods.find((f) => f.id === id);
            setFood(foundFallback || null);
        };

        fetchFood();
    }, [id, defaultFoods]);

    if (food === undefined) {
        return <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading recipe...</div>;
    }

    if (food === null) {
        return (
            <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
                <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>404 - Recipe Not Found</h1>
                <p style={{ marginBottom: '2rem' }}>We could not find the recipe you were looking for.</p>
                <Link href="/" className={styles.backLink}>&larr; Return Home</Link>
            </div>
        );
    }

    return (
        <article className={styles.container}>
            <div className={styles.navigation}>
                <Link href="/" className={styles.backLink} aria-label="Back Home">
                    &larr; Back Home
                </Link>
            </div>

            <div className={`${styles.contentWrapper} glass`}>
                <div className={styles.imageHeader}>
                    <Image
                        src={food.image}
                        alt={food.title}
                        fill
                        className={styles.heroImage}
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    <div className={styles.heroOverlay}>
                        <h1 className={styles.title}>{food.title}</h1>
                    </div>
                </div>

                <div className={styles.details}>
                    <p className={styles.description}>{food.description}</p>

                    <div className={styles.grid}>
                        <section className={styles.section} aria-labelledby="ingredients-heading">
                            <h2 id="ingredients-heading" className={styles.sectionTitle}>
                                <span className="gradient-text">Ingredients</span>
                            </h2>
                            <ul className={styles.list}>
                                {food.ingredients.map((item, index) => (
                                    <li key={index} className={styles.listItem}>
                                        <span className={styles.bullet}>&#x2022;</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles.section} aria-labelledby="recipe-heading">
                            <h2 id="recipe-heading" className={styles.sectionTitle}>
                                <span className="gradient-text">Recipe Steps</span>
                            </h2>
                            <ol className={styles.orderedList}>
                                {food.recipe.map((step, index) => (
                                    <li key={index} className={styles.stepItem}>
                                        <span className={styles.stepNumber}>{index + 1}</span>
                                        <p className={styles.stepText}>{step}</p>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    );
}
