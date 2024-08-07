'use client';

import styles from './Card.module.scss';
import { useState } from 'react';
import { CardProps } from '@/component/element/Card/Card.props';


const Card = ({ componentAfterHover, willBeHover, children }: CardProps) => {

	const [hover, setHover] = useState(false);

	return (
		<div
			className={`${styles.card} ${willBeHover && hover ? styles.hover : styles.unhover}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{children}
			<div className={`${styles.card} ${styles.element}`}>
				{componentAfterHover}
			</div>
		</div>
	);
};

export default Card;