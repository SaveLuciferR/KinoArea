import styles from '@/component/indexPage/IndexPage.module.scss';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import BoxOfficeCard from '@/component/element/Card/BoxOffice/BoxOfficeCard';


const IndexBoxOfficeReceipts = () => {
	return (
		<div className={styles.block}>
			<div className={styles.index__header}>
				<Heading type={HeadingType.h1} size={HeadingSize.page}>Кассовые сборы</Heading>
				<p className={styles.subtext}>13 марта - 15 марта</p>
				<div className={styles.index__hr}></div>
				<nav className={styles.index__nav}>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>Россия</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>Весь мир</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>США и Канада</Button>
				</nav>
			</div>
			<div className={styles.box_office}>
				<BoxOfficeCard />
				<BoxOfficeCard />
				<BoxOfficeCard />
				<BoxOfficeCard />
				<BoxOfficeCard />
			</div>
		</div>
	);
};

export default IndexBoxOfficeReceipts;