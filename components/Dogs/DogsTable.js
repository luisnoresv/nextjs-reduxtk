import React from 'react';
import Image from 'next/image';
import styles from '@styles/Home.module.css';

function DogsTable({ data }) {
	return (
		<div className={styles.row} style={{ textAlign: 'center' }}>
			<table style={{ width: '100%' }}>
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
	);
}

export default DogsTable;
