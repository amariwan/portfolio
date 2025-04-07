'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Fade, Flex, Line, ToggleButton } from '@/once-ui/components';
import styles from '@/components/Header.module.scss';

import { navItems, routes } from '@/app/resources';

export const Header = () => {
	const pathname = usePathname() ?? '';
	const [theme, setTheme] = useState<string | null>(null);

	// Sync theme on mount (for SSR hydration)
	useEffect(() => {
		const stored = localStorage.getItem('theme');
		const current = stored || document.documentElement.getAttribute('data-theme') || 'light';
		document.documentElement.setAttribute('data-theme', current);
		setTheme(current);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
	};

	const isActive = (path: string) => (path === '/' ? pathname === path : pathname.startsWith(path));

	return (
		<>
			{/* Fade Effects */}
			<Fade hide='s' fillWidth position='fixed' height='80' zIndex={9} />
			<Fade show='s' fillWidth position='fixed' bottom='0' to='top' height='80' zIndex={9} />

			{/* Header Container */}
			<Flex as='header' zIndex={9} fillWidth padding='8' horizontal='center' fitHeight className={styles.position}>
				<Flex fillWidth horizontal='center'>
					<Flex background='surface' border='neutral-medium' radius='m-4' shadow='l' padding='4' horizontal='center'>
						<Flex gap='4' vertical='center' textVariant='body-default-s'>
							{navItems.map(({ path, icon, label }) =>
								routes[path as keyof typeof routes] ? (
									<Flex key={path} gap='2' vertical='center'>
										<ToggleButton className='s-flex-hide' prefixIcon={icon} href={path} label={label} selected={isActive(path)} />
										<ToggleButton className='s-flex-show' prefixIcon={icon} href={path} selected={isActive(path)} />
										{path !== '/gallery' && <Line vert maxHeight='24' />}
									</Flex>
								) : null,
							)}
						</Flex>
					</Flex>
				</Flex>

				{/* Theme Toggle */}
				{theme && <ToggleButton className={styles.toggle} prefixIcon={theme === 'dark' ? 'moonStarsFill' : 'sunFill'} href='#' label={theme === 'dark' ? 'Light Mode' : 'Dark Mode'} selected={false} onClick={toggleTheme} />}
			</Flex>
		</>
	);
};
