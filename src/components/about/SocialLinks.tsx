import React from 'react';
import { Button, Flex, IconButton } from '@/once-ui/components';
import styles from '@/components/about/about.module.scss';
import { social } from '@/app/resources/content';

export const SocialLinks = () =>
	social.length > 0 ? (
		<Flex className={styles.blockAlign} paddingTop='20' paddingBottom='8' gap='8' wrap style={{ justifyContent: 'center', width: '100%' }}>
			{social.map(
				(item) =>
					item.link && (
						<React.Fragment key={item.name}>
							<Button className='s-flex-hide' href={item.link} prefixIcon={item.icon} label={item.name} size='s' variant='secondary' />
							<IconButton className='s-flex-show' size='l' href={item.link} icon={item.icon} variant='secondary' />
						</React.Fragment>
					),
			)}
		</Flex>
	) : null;
