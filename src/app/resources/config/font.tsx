import localFont from 'next/font/local';
export const font = localFont({
	src: [
		{
			path: '../../../../public/fonts/Inter-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../../public/fonts/Inter-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-primary',
	display: 'swap',
});
