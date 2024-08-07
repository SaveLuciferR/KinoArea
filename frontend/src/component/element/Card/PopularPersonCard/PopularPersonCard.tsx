import Card from '@/component/element/Card/Card';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import styles from './PopularPersonCard.module.scss';
import Image from 'next/image';


const PopularPersonCard = () => {
	return (
		<div className={styles.card}>
			<Card
				componentAfterHover={
					<Button color={ButtonColor.secondary} size={ButtonSize.big}>Карточка персоны</Button>
				}
				willBeHover={true}>
				<Image src={'./assets/test-image/Person_Jason_Statham.jpg'} alt={'jason'} />
				<p>

				</p>
			</Card>
		</div>
	);
};

export default PopularPersonCard;