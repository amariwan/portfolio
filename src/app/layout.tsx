import '@/once-ui/styles/index.scss';
import '@/once-ui/tokens/index.scss';

import { RootLayoutProps } from './types';
import classNames from 'classnames';

import { Footer, Header, RouteGuard } from '@/components';
import { baseURL, font, effects, style, person, home } from '@/app/resources';

import { Background, Column, Flex, ToastProvider } from '@/once-ui/components';

export async function generateMetadata() {
	return {
		metadataBase: new URL(`https://${baseURL}`),
		title: home.title,
		description: home.description,
		openGraph: {
			title: `${person.firstName}'s Portfolio`,
			description: 'Portfolio website showcasing my work.',
			url: baseURL,
			siteName: `${person.firstName}'s Portfolio`,
			locale: 'de_DE',
			type: 'website',
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
	};
}

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<Flex
			as='html'
			lang='de'
			background='page'
			data-neutral={style.neutral}
			data-brand={style.brand}
			data-accent={style.accent}
			data-solid={style.solid}
			data-solid-style={style.solidStyle}
			data-theme={style.theme}
			data-border={style.border}
			data-surface={style.surface}
			data-transition={style.transition}
			className={classNames(font.variable)}
		>
			<ToastProvider>
				<Column style={{ minHeight: '100vh' }} as='body' fillWidth margin='0' padding='0'>
					<Background
						mask={{
							cursor: effects.mask.cursor,
							x: effects.mask.x,
							y: effects.mask.y,
							radius: effects.mask.radius,
						}}
						gradient={{
							display: effects.gradient.display,
							x: effects.gradient.x,
							y: effects.gradient.y,
							width: typeof effects.gradient.width === 'number' ? effects.gradient.width : parseInt(effects.gradient.width, 10),
							height: typeof effects.gradient.height === 'number' ? effects.gradient.height : parseInt(effects.gradient.height, 10),
							tilt: effects.gradient.tilt,
							colorStart: effects.gradient.colorStart,
							colorEnd: effects.gradient.colorEnd,
							opacity: effects.gradient.opacity,
						}}
						dots={{
							display: effects.dots.display,
							color: effects.dots.color,
							size: effects.dots.size as any,
							opacity: effects.dots.opacity,
						}}
						grid={{
							display: effects.grid.display,
							color: effects.grid.color,
							width: typeof effects.gradient.width === 'string' ? effects.gradient.width : `${effects.gradient.width}`,
							height: typeof effects.gradient.height === 'string' ? effects.gradient.height : `${effects.gradient.height}`,
							opacity: effects.grid.opacity,
						}}
						lines={{
							display: effects.lines.display,
							opacity: effects.lines.opacity,
						}}
					/>
					<Flex fillWidth minHeight='16'></Flex>
					<Header />
					<Flex position='relative' zIndex={0} fillWidth paddingY='l' paddingX='l' horizontal='center' flex={1}>
						<Flex horizontal='center' fillWidth minHeight='0'>
							<RouteGuard>{children}</RouteGuard>
						</Flex>
					</Flex>
					<Footer />
				</Column>
			</ToastProvider>
		</Flex>
	);
}
