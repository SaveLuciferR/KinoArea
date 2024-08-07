import React from 'react';

export enum SliderType {
	scroll = 'scroll',
	controls = 'controls'
}

export type SliderProps = {
	type: SliderType;
	slides: React.ReactNode[];
}