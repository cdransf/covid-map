import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>COVID occurence map</title>
                <meta
                    name="description"
                    content="COVID occurence map by location."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}></main>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default Home;
