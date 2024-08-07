import { ButtonProps } from '@/component/element/Button/Button.props';
import style from './Button.module.scss';

const Button = ({ isActive = false, color, size, children, isLink, ...props }: ButtonProps) => {



	return (
		<button className={`${style.button} ${style[size]} ${style[color]} ${isActive ? style.active : ''}`} {...props}>{children}</button>
	);
};

export default Button;