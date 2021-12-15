import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href='https://nextjs.org'>Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by editing{' '}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<Link href='/counter'>
						<a className={styles.card}>
							<h2>Counter Page</h2>
							<p>Redux Toolkit (Synchronous)</p>
						</a>
					</Link>

					<Link href='/breakingBad'>
						<a className={styles.card}>
							<h2>Breaking Bad Page</h2>
							<p>Redux Toolkit (ThunkApi)</p>
						</a>
					</Link>

					<Link href='/dogs'>
						<a className={styles.card}>
							<h2>Dogs Page</h2>
							<p>RTK Query</p>
						</a>
					</Link>

					<Link href='/swr'>
						<a className={styles.card}>
							<h2>SWR(Hook)</h2>
							<p>Fetching data with SWR</p>
						</a>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
