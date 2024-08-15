import styles from './Header.module.scss';
import SocialList from '@/component/element/SocialList/SocialList';
import LinkMyself from '@/component/element/LinkMyself/LinkMyself';
import { LinkAppearance } from '@/component/element/LinkMyself/LinkMyself.props';
import { BiSearch } from 'react-icons/bi';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';
import Logo from '@/component/element/Logo/Logo';
import { LogoAppearance } from '@/component/element/Logo/Logo.props';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={'container'}>
				<div className={styles.header__inner}>
					<dvi className={styles.header__logo}>
						<LinkMyself withImage={false} appearance={LinkAppearance.base} href={'/'}>
							<Logo appearance={LogoAppearance.primary} />
						</LinkMyself>
						<SocialList />
					</dvi>
					<nav className={styles.header__nav}>
						<LinkMyself withImage={false} appearance={LinkAppearance.static} href={'/'}>Афиша</LinkMyself>
						<LinkMyself withImage={false} appearance={LinkAppearance.static} href={'/'}>Медиа</LinkMyself>
						<LinkMyself withImage={false} appearance={LinkAppearance.static} href={'/'}>Фильмы</LinkMyself>
						<LinkMyself withImage={false} appearance={LinkAppearance.static} href={'/'}>Актёры</LinkMyself>
						<LinkMyself withImage={false} appearance={LinkAppearance.static} href={'/'}>Новости</LinkMyself>
						<LinkMyself withImage={false} appearance={LinkAppearance.static}
									href={'/'}>Подборка</LinkMyself>
						<LinkMyself withImage={false} appearance={LinkAppearance.static}
									href={'/'}>Категории</LinkMyself>
					</nav>
					<div className={styles.header__buttons}>
						<Button color={ButtonColor.secondary} size={ButtonSize.small}><BiSearch size={16} /></Button>
						<LinkMyself withImage={false} appearance={LinkAppearance.static} href={'/'}>
							<Button color={ButtonColor.primary} size={ButtonSize.big}>Войти</Button>
						</LinkMyself>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;