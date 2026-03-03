import { useState } from 'react';
import { Food } from '../data/foods';
import styles from './AddFoodModal.module.css';

interface AddFoodModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (food: Food) => void;
}

export default function AddFoodModal({ isOpen, onClose, onAdd }: AddFoodModalProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipe, setRecipe] = useState('');

    if (!isOpen) return null;

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description) return;

        const newFood: Food = {
            id: title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
            title,
            description,
            image: image.trim() || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
            ingredients: ingredients.split('\n').filter(i => i.trim() !== ''),
            recipe: recipe.split('\n').filter(i => i.trim() !== ''),
        };

        onAdd(newFood);
        onClose();

        // Reset
        setTitle('');
        setDescription('');
        setImage('');
        setIngredients('');
        setRecipe('');
    };

    return (
        <div className={styles.overlay} onClick={onClose} aria-modal="true" role="dialog" aria-labelledby="modal-title">
            <div className={`${styles.modal} glass`} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close Modal">
                    &times;
                </button>
                <h2 id="modal-title" className={styles.title}>
                    <span className="gradient-text">Add New Recipe</span>
                </h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="title">Recipe Name</label>
                        <input
                            id="title"
                            className={styles.input}
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g., Spicy Tuna Roll"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="description">Short Description</label>
                        <textarea
                            id="description"
                            className={styles.textarea}
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="A brief description of your dish..."
                            rows={2}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="image">Image (URL or Upload)</label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <input
                                id="image"
                                className={styles.input}
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="https://images.unsplash.com/..."
                            />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>OR</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className={styles.input}
                                    style={{ padding: '0.5rem', flex: 1 }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="ingredients">Ingredients (One per line)</label>
                        <textarea
                            id="ingredients"
                            className={styles.textarea}
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            placeholder="2 cups Rice&#10;1 lb Tuna&#10;Nori sheets"
                            rows={3}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="recipe">Recipe Steps (One per line)</label>
                        <textarea
                            id="recipe"
                            className={styles.textarea}
                            value={recipe}
                            onChange={(e) => setRecipe(e.target.value)}
                            placeholder="Cook rice.&#10;Slice tuna.&#10;Roll."
                            rows={4}
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Add Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}
