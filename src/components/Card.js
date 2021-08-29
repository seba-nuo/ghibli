import styles from './Card.module.css'

function Card({ title, description }) {

  return (
    <section className={styles.section}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
    </section>
  );
}

export default Card;
