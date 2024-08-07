import styles from './IndexPage.module.scss';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import MovieCard from '@/component/element/Card/MovieCard/MovieCard';


const IndexNewMovie = () => {
	return (
		<div className={styles.block}>
			<div className={styles.index__header}>
				<Heading type={HeadingType.h1} size={HeadingSize.page}>Сейчас в кино</Heading>
				<div className={styles.index__hr}></div>
				<nav className={styles.index__nav}>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>Все</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>Боевики</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>Приключения</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>Комедии</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>Фантастика</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>Триллеры</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>Драма</Button>
				</nav>
			</div>
			<div className={`${styles.new_movie}`}>
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</div>
			<div className={styles.more_movie}>
				<Button color={ButtonColor.borderSecondary} size={ButtonSize.big}>Все новинки</Button>
			</div>
		</div>
	);
};

export default IndexNewMovie;