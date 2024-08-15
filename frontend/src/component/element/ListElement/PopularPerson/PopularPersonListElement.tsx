import styles from './PopularPersonListElement.module.scss';
import MinimalInfo from '@/component/element/MinimalInfo/MinimalInfo';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import LinkMyself from '@/component/element/LinkMyself/LinkMyself';
import { LinkAppearance } from '@/component/element/LinkMyself/LinkMyself.props';

const PopularPersonListElement = () => {
	return (
		<div className={styles.element}>
			<div className={styles.info}>
				<LinkMyself appearance={LinkAppearance.base} withImage={false} href={''}>
					<Heading type={HeadingType.h2} size={HeadingSize.card}>Джейсон Стейтем</Heading>
				</LinkMyself>
				<Heading type={HeadingType.h3} size={HeadingSize.card}>Jason Statham</Heading>
				<MinimalInfo information={['52 года']} />
			</div>
			<MinimalInfo information={['3-место']} />
		</div>
	);
};

export default PopularPersonListElement;