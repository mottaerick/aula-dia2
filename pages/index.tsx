import Head from 'next/head';
import { Contador } from '../components/contador';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Olá turmna</h1>
      <Contador valorInicial= {0} />
      <Contador valorInicial= {0} />
    </div>
  );
}
