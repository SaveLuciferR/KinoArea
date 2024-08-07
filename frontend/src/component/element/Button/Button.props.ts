import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import LinkMyself from '@/component/element/LinkMyself/LinkMyself';
import { LinkProps } from 'next/link';

export enum ButtonColor {
	primary = 'primary',
	secondary = 'secondary',
	pageColor = 'page-color',
	borderPrimary = 'border-primary',
	borderSecondary = 'border-secondary',
	withoutBackground = 'without'
}

export enum ButtonSize {
	none = 'none',
	big = 'big',
	medium = 'medium',
	small = 'small'
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	color: ButtonColor;
	size: ButtonSize;
	isActive?: boolean
	// isLink: boolean;
}