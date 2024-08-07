import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	componentAfterHover: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
	willBeHover: boolean;
}