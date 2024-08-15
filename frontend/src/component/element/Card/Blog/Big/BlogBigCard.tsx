import LinkMyself from '@/component/element/LinkMyself/LinkMyself';
import { LinkAppearance } from '@/component/element/LinkMyself/LinkMyself.props';
import Image from 'next/image';
import Card from '@/component/element/Card/Card';
import styles from './BlogBigCard.module.scss';
import { FaRegComment, FaRegEye } from 'react-icons/fa';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';


const BlogBigCard = () => {
	return (
		<div className={styles.card}>
			<Card willBeHover={true} componentAfterHover={
				<LinkMyself withImage={false} href={'/asd'} appearance={LinkAppearance.button}>
					Читать новость
				</LinkMyself>
			}>
				<Image src={'/assets/test-image/Blog_test_1.jpg'} alt={'movie-card'} sizes={'100%'}
					   style={{ width: '100%', height: 'auto' }} width={1100} height={850} />
				<div className={styles.stat}>
					<p className>12 Апр 2024</p>
					<div className={styles.stat_element}>
						<FaRegEye size={20} />
						<span>242</span>
					</div>
					<div className={styles.stat_element}>
						<FaRegComment size={20} />
						<span>14</span>
					</div>
				</div>
				<div className={styles.info}>
					<Heading type={HeadingType.h2} size={HeadingSize.card}>
						Не время умирать. Перенос релиза фильма.
					</Heading>
					<p>
						Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
						стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный
						печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
						образцов.
					</p>
				</div>
			</Card>
		</div>
	);
};

export default BlogBigCard;