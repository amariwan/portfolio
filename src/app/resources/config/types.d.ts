import { opacity } from '@once-ui/interfaces';

export interface Effects {
	mask: {
		cursor: boolean;
		x: number;
		y: number;
		radius: number;
	};
	gradient: GradientProps;
	dots: {
		display: boolean;
		size: number;
		color: string;
		opacity: opacity;
	};
	lines: {
		display: boolean;
		color: string;
		opacity: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
	};
	grid: {
		display: boolean;
		color: string;
		opacity: opacity;
	};
}
export interface GradientProps {
	display: boolean;
	x: number;
	y: number;
	width: string | number;
	height: string | number;
	tilt: number;
	colorStart: string;
	colorEnd: string;
	opacity: opacity;
}
