import Image from 'next/image';
import styles from './BoxOfficeCard.module.scss';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import MinimalInfo from '@/component/element/MinimalInfo/MinimalInfo';

const BoxOfficeCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.img}>
				<Image src={'/assets/test-image/The_Joker_Poster_1.jpg'} alt={'joker'} width={100} height={140} />
			</div>
			<div className={styles.info}>
				<Heading type={HeadingType.h2} size={HeadingSize.card}>1. Джокер</Heading>
				<div className={styles.box_office}>
					<MinimalInfo information={['$13 млн']} />
					<p className={styles.last_weak}>$15.1 млн за 4 недели</p>
				</div>
			</div>
		</div>
	);
};

export default BoxOfficeCard;