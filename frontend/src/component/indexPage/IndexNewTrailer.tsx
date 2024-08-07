import styles from '@/component/indexPage/IndexPage.module.scss';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import LinkMyself from '@/component/element/LinkMyself/LinkMyself';
import { LinkAppearance } from '@/component/element/LinkMyself/LinkMyself.props';
import { IoIosArrowRoundForward } from 'react-icons/io';
import VideoPlayer from '@/component/element/VidioPlayer/VideoPlayer';
import SocialList from '@/component/element/SocialList/SocialList';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import Slider from '@/component/element/Slider/Slider';
import { SliderType } from '@/component/element/Slider/Slider.props';
import TrailerCard from '@/component/element/Card/TrailerCard/TrailerCard';

const IndexNewTrailer = () => {

	const newTrailerComponents = [
		<TrailerCard />,
		<TrailerCard />,
		<TrailerCard />,
		<TrailerCard />,
		<TrailerCard />,
		<TrailerCard />,
		<TrailerCard />,
		<TrailerCard />
	];

	return (
		<div className={styles.block}>
			<div className={styles.index__header}>
				<Heading type={HeadingType.h1} size={HeadingSize.page}>Новые трейлеры</Heading>
				<LinkMyself Image={<IoIosArrowRoundForward size={40} />} withImage={true}
							appearance={LinkAppearance.static} href={'/'}>Все трейлеры</LinkMyself>
			</div>
			<div>
				<VideoPlayer />
				<div className={styles.index__footer_trailer}>
					<div className={styles.index__footer_trailer_title}>
						<Heading type={HeadingType.h2} size={HeadingSize.footer}>Джокер</Heading>
						<SocialList />
					</div>
					<div className={styles.index__footer_trailer_like}>
						<div className={styles.index__footer_trailer_like_item}>
							<Button isActive={true} color={ButtonColor.pageColor} size={ButtonSize.small}>
								<AiFillLike size={20} />
							</Button>
							<p>32 332</p>
						</div>
						<div className={styles.index__footer_trailer_like_item}>
							<Button color={ButtonColor.pageColor} size={ButtonSize.small}>
								<AiFillDislike size={20} />
							</Button>
							<p>523</p>
						</div>
					</div>
				</div>
				<Slider slides={newTrailerComponents}
						type={SliderType.scroll} />
			</div>
		</div>
	);
};

export default IndexNewTrailer;
