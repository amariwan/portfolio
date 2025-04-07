export const mailchimp = {
	action: 'https://url/subscribe/post?parameters',
	effects: {
		mask: {
			cursor: true,
			x: 100,
			y: 0,
			radius: 100,
		},
		gradient: {
			display: true,
			x: 100,
			y: 50,
			width: 100,
			height: 100,
			tilt: -45,
			colorStart: 'accent-background-strong',
			colorEnd: 'static-transparent',
			opacity: 100,
		},
		dots: {
			display: true,
			size: 24,
			color: 'brand-on-background-weak',
			opacity: 100,
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
	},
};
