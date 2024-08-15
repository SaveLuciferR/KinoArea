import React from 'react';

export enum SliderType {
	scroll = 'scroll',
	controls = 'controls',
	headingControls = 'headingControls',
}

export type SliderProps = {
	type: SliderType;
	slides: React.ReactNode[];
	withHeading: boolean;
	title?: string;
}