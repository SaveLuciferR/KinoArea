import styles from './RatingMovieCard.module.scss';
import { RatingMovieCardProps } from './RatingMovieCard.props'
import { useEffect, useState } from 'react';


const RatingMovieCard = ({value, isPercent}: RatingMovieCardProps) => {

	const [color, setColor] = useState('warning');
	const [text, setText] = useState('');

	useEffect(() => {
		setText(value.toString());
		if (isPercent) {
			setText(prevState => prevState += '%');

			if (value <= 40) {
				setColor('danger');
			}
			else if (value <= 70) {
				setColor('warning');
			}
			else {
				setColor('good');
			}
		}
		else {
			if (value <= 5) {
				setColor('danger');
			}
			else if (value <= 7) {
				setColor('warning');
			}
			else {
				setColor('good');
			}
		}

	}, [value, isPercent])

	return (
		<div className={styles.rating} style={{backgroundColor: `var(--${color})`}}>
			<p className={styles.rating__text}>{text}</p>
		</div>
	);
}

export default RatingMovieCard;