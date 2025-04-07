// src/components/about/TechnicalSection.tsx
import { Column, Heading, Text } from '@/once-ui/components';
import { ImageGallery } from '@/components/about/ImageGallery';
import { about } from '@/app/resources/content';

export const TechnicalSection = () =>
	about.technical.display ? (
		<>
			<Heading as='h2' id={about.technical.title} variant='display-strong-s' marginBottom='40'>
				{about.technical.title}
			</Heading>
			<Column fillWidth gap='l'>
				{about.technical.skills.map((skill, index) => (
					<Column key={`${skill.title}-${index}`} fillWidth gap='4'>
						<Text variant='heading-strong-l'>{skill.title}</Text>
						<Text variant='body-default-m' onBackground='neutral-weak'>
							{skill.description}
						</Text>
						{skill.images && skill.images.length > 0 && <ImageGallery images={skill.images} />}
					</Column>
				))}
			</Column>
		</>
	) : null;
