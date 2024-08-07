import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import Image from 'next/image';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import styles from './TrailerCard.module.scss';
import { useState } from 'react';
import Card from '@/component/element/Card/Card';
import { FaPlay } from 'react-icons/fa';


const TrailerCard = () => {

	return (
		<div className={styles.card}>
			<Card willBeHover={true} componentAfterHover={
				<Button color={ButtonColor.withoutBackground} size={ButtonSize.none}>
					<FaPlay size={32} style={{padding: '4px'}}/>
				</Button>
			}>
				<Image src={'/assets/test-image/Mulan_Trailer_Frame.jpg'} alt={'Mulan'} width={450}
					   height={250} />
			</Card>
			<Heading type={HeadingType.h3} size={HeadingSize.card}>Мулан</Heading>
		</div>
	);
};

export default TrailerCard;