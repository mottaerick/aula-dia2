import Head from 'next/head';
import { Contador } from '../components/Contador';
import styles from '../styles/Home.module.css';
import { Like } from '../components/Like';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      Olá turma!
      <Link href="/lista">Atibvidade</Link>
      <Contador valorInicial={1} />
      <Contador valorInicial={10} />
    </div>
  );
}
