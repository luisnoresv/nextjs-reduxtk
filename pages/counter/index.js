import Image from 'next/image';
import Link from 'next/link';
// import logo from '/logo.svg';
import { Counter } from '@components/Counter/Counter';

function CounterPage() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Image
					src='/logo.svg'
					className='App-logo'
					alt='logo'
					width={450}
					height={450}
				/>
				<Counter />
				<Link href='/'>
					<a className='App-link'>Back to Index</a>
				</Link>
				<span>
					<span>Learn </span>
					<a
						className='App-link'
						href='https://reactjs.org/'
						target='_blank'
						rel='noopener noreferrer'>
						React
					</a>
					<span>, </span>
					<a
						className='App-link'
						href='https://redux.js.org/'
						target='_blank'
						rel='noopener noreferrer'>
						Redux
					</a>
					<span>, </span>
					<a
						className='App-link'
						href='https://redux-toolkit.js.org/'
						target='_blank'
						rel='noopener noreferrer'>
						Redux Toolkit
					</a>
					,<span> and </span>
					<a
						className='App-link'
						href='https://react-redux.js.org/'
						target='_blank'
						rel='noopener noreferrer'>
						React Redux
					</a>
				</span>
			</header>
		</div>
	);
}

export default CounterPage;
