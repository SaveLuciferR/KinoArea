import styles from './Header.module.scss';
import Logo from '@/component/Logo/Logo';
import SocialList from '@/component/SocialList/SocialList';
import LinkMyself from '@/component/LinkMyself/LinkMyself';
import { LinkAppearance } from '@/component/LinkMyself/LinkMyself.props';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={'container'}>
				<div className={styles.header__inner}>
					<dvi className={styles.header__logo}>
						<Logo />
						<SocialList />
					</dvi>
					<nav className={styles.header__nav}>
						<LinkMyself appearance={LinkAppearance.static} href={'/'}>Афиша</LinkMyself>
						<LinkMyself appearance={LinkAppearance.static} href={'/'}>Медиа</LinkMyself>
						<LinkMyself appearance={LinkAppearance.static} href={'/'}>Фильмы</LinkMyself>
						<LinkMyself appearance={LinkAppearance.static} href={'/'}>Актёры</LinkMyself>
						<LinkMyself appearance={LinkAppearance.static} href={'/'}>Новости</LinkMyself>
						<LinkMyself appearance={LinkAppearance.static} href={'/'}>Подборка</LinkMyself>
						<LinkMyself appearance={LinkAppearance.static} href={'/'}>Категории</LinkMyself>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;