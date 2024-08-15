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
				<Image src={'/assets/test-image/The_Joker_Poster_1.jpg'} alt={'movie-card'} sizes={'100%'}
					   style={{ width: '100%', height: 'auto' }} width={150} height={500} />
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