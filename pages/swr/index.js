import Head from 'next/head';
import Link from 'next/link';
import useSWR, { useSWRConfig } from 'swr';
import styles from '@styles/Home.module.css';

import DogsTable from '@components/Dogs/DogsTable';

function SWRPage() {
	const { cache, mutate, ...extraConfig } = useSWRConfig();

	console.info('SWR-useSWRConfig - Cache', cache);
	console.info('SWR-useSWRConfig - mutate', mutate);

	const fetcher = (url) =>
		fetch(url, { headers: { 'x-api-key': process.env.DOG_API_KEY } }).then(
			(res) => res.json()
		);

	const { data, error } = useSWR(
		`${process.env.DOG_API_BASE_URL}/breeds?limit=10`,
		fetcher
	);

	return (
		<div className='App'>
			<Head>
				<title>Dogs Page</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.row}>
				<h1 className={styles.title}>Dogs API Demo</h1>
			</div>
			<div className={styles.row}>
				<h2 className={styles.description}>
					The information is handle with SWR
				</h2>
			</div>
			<div className={styles.row} style={{ textAlign: 'center' }}>
				<h4>
					<code className={styles.code}>pages/swr/index.js</code>
				</h4>
				<Link href='/'>
					<a style={{ fontSize: '2rem' }} className='App-link'>
						Back to Index
					</a>
				</Link>
			</div>
			{/* <div className={styles.row} style={{ textAlign: 'center' }}>
				<p className={styles.description}>Dogs to Fetch</p>
				<select
					value={dogsQy}
					onChange={(e) => setDogsQy(Number(e.target.value))}>
					<option value='5'>5</option>
					<option value='10'>10</option>
					<option value='15'>15</option>
					<option value='20'>20</option>
				</select>
			</div> */}
			{error && (
				<div className={styles.row} style={{ textAlign: 'center' }}>
					failed to load
				</div>
			)}
			{!data && (
				<div className={styles.row} style={{ textAlign: 'center' }}>
					loading...
				</div>
			)}

			{data && data.length > 0 && (
				<>
					<div className={styles.row} style={{ textAlign: 'center' }}>
						<div
							className={styles.card}
							style={{ textAlign: 'center', width: '100%' }}>
							<span className={styles.description}>
								Number of dogs fetched : {data.length}
							</span>
						</div>
					</div>{' '}
					<DogsTable data={data} />
				</>
			)}
		</div>
	);
}

export default SWRPage;
