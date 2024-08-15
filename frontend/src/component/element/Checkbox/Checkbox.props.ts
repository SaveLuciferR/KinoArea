import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export enum CheckboxAppearance {
	footer = 'footer'
}

export interface CheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLElement>, HTMLElement> {
	appearance: CheckboxAppearance;

}