import { Effects } from './types';

export const effects: Effects = {
	mask: {
		cursor: false,
		x: 0,
		y: 0,
		radius: 80,
	},
	gradient: {
		display: true,
		x: 50,
		y: 0,
		width: '100%',
		height: '100%',
		tilt: 0,
		colorStart: 'brand-background-strong',
		colorEnd: 'static-transparent',
		opacity: 50,
	},
	dots: {
		display: true,
		size: 2,
		color: 'brand-on-background-weak',
		opacity: 20,
	},
	lines: {
		display: true,
		color: 'neutral-alpha-weak',
		opacity: 100,
	},
	grid: {
		display: true,
		color: 'neutral-alpha-weak',
		opacity: 100,
	},
};

const style: React.CSSProperties = {
	width: effects.gradient.width,
	height: effects.gradient.height,
	opacity: effects.gradient.opacity,
};
