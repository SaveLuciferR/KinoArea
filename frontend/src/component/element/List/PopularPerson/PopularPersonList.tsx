import styles from './PopularPersonList.module.scss';
import PopularPersonListElement from '@/component/element/ListElement/PopularPerson/PopularPersonListElement';

const PopularPersonList = () => {
	return (
		<div className={styles.list}>
			<PopularPersonListElement />
			<PopularPersonListElement />
			<PopularPersonListElement />
			<PopularPersonListElement />
		</div>
	);
};

export default PopularPersonList;