'use client';

import styles from './MovieCard.module.scss';
import Image from 'next/image';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import MinimalInfo from '@/component/element/MinimalInfo/MinimalInfo';
import { useState } from 'react';
import LinkMyself from '@/component/element/LinkMyself/LinkMyself';
import { LinkAppearance } from '@/component/element/LinkMyself/LinkMyself.props';
import RatingMovieCard from '@/component/element/Rating/MovieCard/RatingMovieCard';
import Card from '@/component/element/Card/Card';

const MovieCard = () => {

	return (
		<div className={styles.card}>
			<Card willBeHover={true} componentAfterHover={
				<LinkMyself withImage={false} href={'/asd'} appearance={LinkAppearance.button}>
					Карточка фильма
				</LinkMyself>
			}>
				<Image src={'/assets/test-image/movie-image.jpg'} alt={'movie-card'} width={340} height={500} />
				<RatingMovieCard value={8.75} isPercent={false} />
			</Card>
			<div className={styles.info}>
				<Heading type={HeadingType.h2} size={HeadingSize.card}>Джокер</Heading>
				<MinimalInfo information={['Драма, Криминал, Триллер']} />
			</div>
		</div>
	);
};

export default MovieCard;