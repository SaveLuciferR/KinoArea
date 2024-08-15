import styles from './Footer.module.scss';
import Logo from '@/component/element/Logo/Logo';
import Heading from '@/component/element/Heading/Heading';
import { HeadingSize, HeadingType } from '@/component/element/Heading/Heading.props';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import Image from 'next/image';
import Input from '@/component/element/Input/Input';
import { InputAppearance } from '@/component/element/Input/Input.props';
import { LogoAppearance } from '@/component/element/Logo/Logo.props';
import Checkbox from '@/component/element/Checkbox/Checkbox';
import { CheckboxAppearance } from '@/component/element/Checkbox/Checkbox.props';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={'container'}>
				<div className={styles.footer__inner}>
					<div className={styles.email}>
						<Logo appearance={LogoAppearance.secondary} />
						<div className={styles.info}>
							<Heading type={HeadingType.h1} size={HeadingSize.footer}>Подпишись на E-mail
								рассылку</Heading>
							<p>
								Если хотите быть в курсе последних новостей и новинок кино - заполни форму ниже и оформи
								бесплатную E-mail рассылку!
							</p>
							<form className={styles.form}>
								<Input appearance={InputAppearance.footer} placeholder={'Введите свой E-mail адрес'} />
								<Button color={ButtonColor.footer} size={ButtonSize.big}>Подписаться</Button>
								<Checkbox appearance={CheckboxAppearance.footer}>dsds</Checkbox>
							</form>
						</div>
						<Image src={'/assets/test-image/Footer.jpg'} alt={'footer'} sizes={'100%'} width={1440}
							   height={100} style={{ width: '100%', height: 'auto' }} />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;