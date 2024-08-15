import styles from './page.module.scss';
import Heading from '@/component/element/Heading/Heading';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import { HeadingType } from '@/component/element/Heading/Heading.props';
import IndexNewMovie from '@/component/indexPage/IndexNewMovie';
import IndexNewTrailer from '@/component/indexPage/IndexNewTrailer';
import IndexPopularMovie from '@/component/indexPage/IndexPopularMovie';
import IndexPopularPerson from '@/component/indexPage/IndexPopularPerson';
import IndexPopularBlog from '@/component/indexPage/IndexPopularBlog';
import IndexExpectedNovelties from '@/component/indexPage/IndexExpectedNovelties';
import IndexBoxOfficeReceipts from '@/component/indexPage/IndexBoxOfficeReceipts';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={'container'}>
				<div className={styles.main__inner}>
					<IndexNewMovie />
					<IndexNewTrailer />
					<IndexPopularMovie />
					<IndexPopularPerson />
					<IndexPopularBlog />
				</div>
			</div>
			<div className={'page-dark'}>
				<div className={'container'}>
					<div className={styles.main__inner}>
						<IndexExpectedNovelties />
						<IndexBoxOfficeReceipts />
					</div>
				</div>
			</div>
		</main>
	);
}
