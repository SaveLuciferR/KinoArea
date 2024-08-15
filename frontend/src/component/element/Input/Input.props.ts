import { DetailedHTMLProps, InputHTMLAttributes } from 'react';


export enum InputAppearance {
	footer = 'footer',
}

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLElement>, HTMLElement> {
	appearance: InputAppearance;
}