import styles from '@/component/indexPage/IndexPage.module.scss';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import LinkMyself from '@/component/element/LinkMyself/LinkMyself';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { LinkAppearance } from '@/component/element/LinkMyself/LinkMyself.props';
import BlogBigCard from '@/component/element/Card/Blog/Big/BlogBigCard';
import BlogSmallCard from '@/component/element/Card/Blog/Small/BlogSmallCard';


const IndexPopularBlog = () => {
	return (
		<div className={styles.block}>
			<div className={styles.index__header}>
				<Heading type={HeadingType.h1} size={HeadingSize.page}>Популярные новости</Heading>
				<LinkMyself Image={<IoIosArrowRoundForward size={40} />} withImage={true}
							appearance={LinkAppearance.static} href={'/'}>Все новости</LinkMyself>
			</div>
			<div className={styles.popular__blog}>
				<div className={styles.popular__blog_big}>
					<BlogBigCard />
				</div>
				<div className={styles.popular__blog_small}>
					<BlogSmallCard />
					<BlogSmallCard />
					<BlogSmallCard />
					<BlogSmallCard />
				</div>
			</div>
		</div>
	);
};

export default IndexPopularBlog;