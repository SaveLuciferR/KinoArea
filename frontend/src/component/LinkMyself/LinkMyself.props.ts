import React from 'react';
import { LinkProps } from 'next/link';

export enum LinkAppearance {
	static = 'static',
	button = 'button',
	base = 'base'
}

export interface LinkMyselfProps extends LinkProps {
	appearance: LinkAppearance;
}