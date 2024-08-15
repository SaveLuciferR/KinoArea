import { InputProps } from '@/component/element/Input/Input.props';
import styles from './Input.module.scss'

const Input = ({ appearance, ...props }: InputProps) => {


	return (
		<input className={`${styles.input} ${styles[appearance]}`} {...props} />
	);
};

export default Input;