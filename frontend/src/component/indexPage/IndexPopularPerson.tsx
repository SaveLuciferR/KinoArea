import styles from './IndexPage.module.scss';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import PopularPersonCard from '@/component/element/Card/PopularPersonCard/PopularPersonCard';
import PopularPersonList from '@/component/element/List/PopularPerson/PopularPersonList';

const IndexPopularPerson = () => {
	return (
		<div className={styles.block}>
			<div className={styles.index__header}>
				<Heading type={HeadingType.h1} size={HeadingSize.page}>Популярные персоны</Heading>
				<nav className={styles.index__nav}>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>За год</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>За месяц</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>За неделю</Button>
				</nav>
			</div>
			<div className={styles.popular__person}>
				<PopularPersonCard />
				<PopularPersonCard />
				<PopularPersonList />
			</div>
		</div>
	);
};

export default IndexPopularPerson;