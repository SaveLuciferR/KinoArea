'use client';

import Link from 'next/link';
import type { LinkMyselfProps } from './LinkMyself.props';
import { LinkAppearance } from './LinkMyself.props';
import style from './LinkMyself.module.scss';
import Button from '@/component/element/Button/Button';
import { ButtonColor, ButtonSize } from '@/component/element/Button/Button.props';


const LinkMyself = ({ Image, withImage, appearance, children, ...props }: LinkMyselfProps) => {

	if (appearance === LinkAppearance.button) {
		return (
			<Link className={`${style.link}`} {...props}>
				<Button color={ButtonColor.secondary} size={ButtonSize.big}>{children}</Button>
			</Link>
		);
	}

	return (
		<Link
			className={`${style.link} ${style[appearance]} ${withImage ? style.with_image : ''}`} {...props}>
			<span>{children}</span>
			{Image}
		</Link>
	);
};

export default LinkMyself;