import Card from '@/component/element/Card/Card';
import LinkMyself from '@/component/element/LinkMyself/LinkMyself';
import { LinkAppearance } from '@/component/element/LinkMyself/LinkMyself.props';
import Image from 'next/image';
import styles from './BlogSmallCard.module.scss';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';


const BlogSmallCard = () => {
	return (
		<div className={styles.card}>
			<Card willBeHover={true} componentAfterHover={
				<LinkMyself withImage={false} href={'/asd'} appearance={LinkAppearance.button}>
					Читать новость
				</LinkMyself>
			}>
				<Image src={'/assets/test-image/Blog_test_1.jpg'} alt={'movie-card'} sizes={'100%'}
					   style={{ width: '100%', height: 'auto' }} width={250} height={185} />

				<p className={styles.stat}>12 Апр 2024</p>
				<div className={styles.info}>
					<Heading type={HeadingType.h2} size={HeadingSize.card}>
						Не время умирать. Перенос релиза фильма.
					</Heading>
				</div>
			</Card>
		</div>
	);
};

export default BlogSmallCard;