// src/components/about/IntroSection.tsx
import { Avatar, Column, Flex, Heading, Icon, IconButton, Tag, Text } from '@/once-ui/components';
import styles from '@/components/about/about.module.scss';
import { SocialLinks } from '@/components/about/SocialLinks';
import { person, about } from '@/app/resources/content';

export const IntroSection = () => (
	<>
		{about.avatar.display && (
			<Column className={styles.avatar} minWidth='160' paddingX='l' paddingBottom='xl' gap='m' flex={3} style={{ justifyContent: 'center' }}>
				<Avatar src={person.avatar} size='xl' />
				<Flex gap='8' style={{ alignItems: 'center' }}>
					<Icon onBackground='accent-weak' name='globe' />
					{person.location}
				</Flex>
				{person.languages.length > 0 && (
					<Flex wrap gap='8'>
						{person.languages.map((language, index) => (
							<Tag key={index} size='l'>
								{language}
							</Tag>
						))}
					</Flex>
				)}
			</Column>
		)}
		<Column
			id={about.intro.title}
			fillWidth
			minHeight='160'
			vertical='center' // Anpassung hier statt alignItems="center"
			marginBottom='32'
		>
			{about.calendar.display && (
				<Flex fitWidth border='brand-alpha-medium' className={styles.blockAlign} style={{ backdropFilter: 'blur(var(--static-space-1))', alignItems: 'center' }} background='brand-alpha-weak' radius='full' padding='4' gap='8' marginBottom='m'>
					<Icon paddingLeft='12' name='calendar' onBackground='brand-weak' />
					<Flex paddingX='8'>Schedule a call</Flex>
					<IconButton href={about.calendar.link} data-border='rounded' variant='secondary' icon='chevronRight' />
				</Flex>
			)}
			<Heading className={styles.textAlign} variant='display-strong-xl'>
				{person.name}
			</Heading>
			<Text className={styles.textAlign} variant='display-default-xs' onBackground='neutral-weak'>
				{person.role}
			</Text>
			<SocialLinks />
			{about.intro.display && (
				<Column textVariant='body-default-l' fillWidth gap='m' marginBottom='xl'>
					{about.intro.description}
				</Column>
			)}
		</Column>
	</>
);
