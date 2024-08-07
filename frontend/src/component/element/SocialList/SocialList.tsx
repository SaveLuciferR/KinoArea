import styles from './SocialList.module.scss';
import LinkMyself from '@/component/element/LinkMyself/LinkMyself';
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialVkontakte } from 'react-icons/sl';
import { LinkAppearance } from '@/component/element/LinkMyself/LinkMyself.props';

const SocialList = () => {
	return (
		<div className={styles.social_list}>
			<LinkMyself withImage={false} href={'/about'} appearance={LinkAppearance.base}><SlSocialVkontakte size={16}/></LinkMyself>
			<LinkMyself withImage={false} href={'/about'} appearance={LinkAppearance.base}><SlSocialInstagram size={16}/></LinkMyself>
			<LinkMyself withImage={false} href={'/about'} appearance={LinkAppearance.base}><SlSocialFacebook size={16}/></LinkMyself>
			<LinkMyself withImage={false} href={'/about'} appearance={LinkAppearance.base}><SlSocialTwitter size={16}/></LinkMyself>
		</div>
	);
};

export default SocialList;