import styles from './page.module.scss';
import Heading from '@/component/element/Heading/Heading';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import { HeadingType } from '@/component/element/Heading/Heading.props';
import IndexNewMovie from '@/component/indexPage/IndexNewMovie';
import IndexNewTrailer from '@/component/indexPage/IndexNewTrailer';
import IndexPopularMovie from '@/component/indexPage/IndexPopularMovie';
import IndexPopularPerson from '@/component/indexPage/IndexPopularPerson';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={'container'}>
				<div className={styles.main__inner}>
					<IndexNewMovie />
					<IndexNewTrailer />
					<IndexPopularMovie />
					{/*<IndexPopularPerson />*/}
				</div>
			</div>
		</main>
	);
}
