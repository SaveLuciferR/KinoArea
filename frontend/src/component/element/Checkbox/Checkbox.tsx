import styles from './Checkbox.module.scss';
import { CheckboxProps } from '@/component/element/Checkbox/Checkbox.props';

const Checkbox = ({ children, appearance, ...props }: CheckboxProps) => {

	//TODO не доработан, нет стилей

	return (
		<label className={`${styles.checkbox__wrapper}`}>
			<input className={`${styles.checkbox}`} type={'checkbox'} {...props} />
			<span aria-hidden={true}>{children}</span>
		</label>
	);
};

export default Checkbox;