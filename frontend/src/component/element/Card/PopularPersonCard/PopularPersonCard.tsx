import Card from '@/component/element/Card/Card';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import styles from './PopularPersonCard.module.scss';
import Image from 'next/image';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import MinimalInfo from '@/component/element/MinimalInfo/MinimalInfo';


const PopularPersonCard = () => {

	//TODO: при получении возраста персоны вычислять год или лет

	return (
		<div className={styles.card}>
			<Card
				componentAfterHover={
					<Button color={ButtonColor.secondary} size={ButtonSize.big}>Карточка персоны</Button>
				}
				willBeHover={true}>
				<Image src={'/assets/test-image/Person_Jason_Statham.jpg'} alt={'jason'} width={444} height={444} />

				<div className={styles.position}>
					<MinimalInfo information={['2-е место']} />
				</div>
				<div className={styles.info}>
					<Heading type={HeadingType.h2} size={HeadingSize.card}>Джейсон Стейтем</Heading>
					<Heading type={HeadingType.h3} size={HeadingSize.card}>Jason Statham</Heading>
					<MinimalInfo information={['52 года']} />
				</div>
			</Card>
		</div>
	);
};

export default PopularPersonCard;