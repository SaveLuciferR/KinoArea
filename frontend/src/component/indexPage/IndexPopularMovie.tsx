import styles from '@/component/indexPage/IndexPage.module.scss';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import Slider from '@/component/element/Slider/Slider';
import { SliderType } from '@/component/element/Slider/Slider.props';
import MovieCard from '@/component/element/Card/MovieCard/MovieCard';
import React from 'react';


const IndexPopularMovie = () => {

	const popularMovieComponents: React.ReactNode[] = [
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />,
		<MovieCard />
	];

	console.log(popularMovieComponents);

	return (
		<div className={styles.block}>
			<div className={styles.index__header}>
				<Heading type={HeadingType.h1} size={HeadingSize.page}>Популярные фильмы</Heading>
				<div className={styles.index__hr}></div>
				<nav className={styles.index__nav}>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>Всё время</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>2024</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>2023</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>2022</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>2021</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>2020</Button>
					<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>2019</Button>
				</nav>
			</div>
			<Slider
				slides={popularMovieComponents}
				type={SliderType.controls}
				withHeading={false}
			/>
		</div>
	);
};

export default IndexPopularMovie;