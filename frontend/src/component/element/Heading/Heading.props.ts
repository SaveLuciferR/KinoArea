import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum HeadingType {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6
}

export enum HeadingSize {
	card = 'heading-card',
	page = 'heading-page',
	footer = 'heading-footer'
}

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	type: HeadingType;
	size: HeadingSize;
}