import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={`${styles.footer} glass`}>
            <p>&copy; {new Date().getFullYear()} Gourmet Bites. Built for the Premium Plan.</p>
        </footer>
    );
}
