'use client';

import Link from 'next/link';
import type { LinkMyselfProps } from './LinkMyself.props';
import style from './LinkMyself.module.scss';


const LinkMyself = ({ appearance, children, ...props }: LinkMyselfProps) => {

	return (
		<Link className={`${style.link} ${style[appearance]}`} {...props}>{children}</Link>
	);
};

export default LinkMyself;