import styles from './Logo.module.scss';
import { RiMovie2Line } from 'react-icons/ri';
import { LogoProps } from '@/component/element/Logo/Logo.props';

const Logo = ({appearance}: LogoProps) => {
	return (
		<div className={styles.logo}>
			<RiMovie2Line className={styles.logo__img} size={24}/>
			<h1 className={styles.logo__text}><span className={styles[appearance]}>Kino</span>area</h1>
		</div>
	);
};

export default Logo;