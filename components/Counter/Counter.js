import Image from 'next/image';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from '@styles/Counter.module.css';
import {
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
	selectCount,
} from '@store/reducers/counterSlice';

import {
	fetchAllCharacters,
	fetchCharacterById,
} from '@store/reducers/breakingBadSlice';
import { useFetchBreadsQuery } from '@store/reducers/dogsApiSlice';

export function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');
	const [dogsQy, setDogsQy] = useState(10);
	const { data = [], isFetching } = useFetchBreadsQuery(dogsQy);

	return (
		<div>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Increment value'
					onClick={() => dispatch(increment())}>
					+
				</button>
				<span className={styles.value}>{count}</span>
				<button
					className={styles.button}
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}>
					-
				</button>
			</div>
			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					className={styles.button}
					onClick={() =>
						dispatch(incrementByAmount(Number(incrementAmount) || 0))
					}>
					Add Amount
				</button>
				<button
					className={styles.asyncButton}
					onClick={() =>
						dispatch(incrementAsync(Number(incrementAmount) || 0))
					}>
					Add Async
				</button>
			</div>
			<div className={styles.row}>
				<button
					className={styles.asyncButton}
					onClick={() => dispatch(fetchAllCharacters())}>
					Fetch Breaking Bad Characters
				</button>
			</div>
			<div className={styles.row}>
				<button
					className={styles.asyncButton}
					onClick={() => dispatch(fetchCharacterById(1))}>
					Fetch One BreakingBad Character
				</button>
			</div>
			<div className={styles.row}>
				<button
					className={styles.asyncButton}
					onClick={() => dispatch(fetchCharacterById(1))}>
					Fetch One BreakingBad Character
				</button>
			</div>
			<div className={styles.row}>
				<p>Dogs to Fetch</p>
				<select
					value={dogsQy}
					onChange={(e) => setDogsQy(Number(e.target.value))}>
					<option value='5'>5</option>
					<option value='10'>10</option>
					<option value='15'>15</option>
					<option value='20'>20</option>
				</select>
			</div>
			<div className={styles.row}>
				<span>Number of dogs fetched : {data.length}</span>
			</div>
			<div className={styles.row}>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Picture</th>
						</tr>
					</thead>
					<tbody>
						{data.map((breed) => (
							<tr key={breed.id}>
								<td>{breed.name}</td>
								<td>
									<Image
										src={breed.image.url}
										className='App-logo'
										alt='logo'
										width={150}
										height={150}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
