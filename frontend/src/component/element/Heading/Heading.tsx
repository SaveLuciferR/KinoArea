import { HeadingProps, HeadingType } from '@/component/element/Heading/Heading.props';
import styles from './Heading.module.scss';

const Heading = ({type, size, children, ...props }: HeadingProps) => {

	// const getClassesName = (): string => {
	// 	let cs = styles.heading;
	//
	// 	return cs;
	// };

	switch (type) {
		case HeadingType.h1:
			return (
				<h1 className={`${styles.heading} ${styles[size]}`} {...props}>{children}</h1>
			);
		case HeadingType.h2:
			return (
				<h2 className={`${styles.heading} ${styles[size]}`} {...props}>{children}</h2>
			);
		case HeadingType.h3:
			return (
				<h3 className={`${styles.heading} ${styles[size]}`} {...props}>{children}</h3>
			);
		case HeadingType.h4:
			return (
				<h4 className={`${styles.heading} ${styles[size]}`} {...props}>{children}</h4>
			);
		case HeadingType.h5:
			return (
				<h5 className={`${styles.heading} ${styles[size]}`} {...props}>{children}</h5>
			);
		case HeadingType.h6:
			return (
				<h6 className={`${styles.heading} ${styles[size]}`} {...props}>{children}</h6>
			);
		default:
			return (<></>);

	}
};

export default Heading;