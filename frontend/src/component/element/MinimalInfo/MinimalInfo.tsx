import { MinimalInfoProps } from '@/component/element/MinimalInfo/MinimalInfo.props';
import styles from './MinimalInfo.module.scss'

const MinimalInfo = ({ information }: MinimalInfoProps) => {

	const getInformationText = (): string => {
		let text = '';
		if (information && information.length != 0) {
			information.map(item => {
				text += item + ', ';
			});
		}

		return text.replace(/, $/i, '');
	};

	return (
		<p className={styles.minimal_info}>{getInformationText()}</p>
	);
};

export default MinimalInfo;