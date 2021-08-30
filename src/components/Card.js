import styles from './Card.module.css'

function Card({ title, release_date, rt_score, director, producer, description }) {

  return (
    <section className={styles.section}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.data}>Release date: {release_date}</p>
        <p className={styles.data}>Score: {rt_score}</p>
        <p className={styles.data}>Director: {director}</p>
        <p className={styles.data}>Producer: {producer}</p>
        <p className={styles.description}>{description}</p>
    </section>
  );
}

export default Card;
