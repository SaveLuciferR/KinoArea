import styles from './IndexPage.module.scss';
import Slider from '@/component/element/Slider/Slider';
import { SliderType } from '@/component/element/Slider/Slider.props';
import MovieCard from '@/component/element/Card/MovieCard/MovieCard';

const IndexExpectedNovelties = () => {

	const slides = [
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
	];

	return (
		<div className={styles.block}>
			<Slider
				type={SliderType.headingControls}
				slides={slides}
				withHeading={true}
				title={'Ожидаемые новинки'}
			/>
		</div>
	);
};

export default IndexExpectedNovelties;