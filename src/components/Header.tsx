"use client";

import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={`${styles.header} glass`}>
            <nav className={styles.nav} aria-label="Main Navigation">
                <Link href="/" className={styles.logo} aria-label="Gourmet Bites Home">
                    <span className="gradient-text">Gourmet Bites</span>
                </Link>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Gallery</Link>
                    <button
                        className={styles.addButton}
                        onClick={() => window.dispatchEvent(new Event('open-add-modal'))}
                        aria-label="Add New Recipe"
                    >
                        + Add Recipe
                    </button>
                </div>
            </nav>
        </header>
    );
}
