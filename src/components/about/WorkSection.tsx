import { Column, Flex, Heading, Text } from '@/once-ui/components';
import { ImageGallery } from '@/components/about/ImageGallery';
import { about } from '@/app/resources/content';

export const WorkSection = () =>
	about.work.display ? (
		<>
			<Heading as='h2' id={about.work.title} variant='display-strong-s' marginBottom='m'>
				{about.work.title}
			</Heading>
			<Column fillWidth gap='l' marginBottom='40'>
				{about.work.experiences.map((experience, index) => (
					<Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
						<Flex fillWidth style={{ justifyContent: 'space-between', alignItems: 'end' }} marginBottom='4'>
							<Text id={experience.company} variant='heading-strong-l'>
								{experience.company}
							</Text>
							<Text variant='heading-default-xs' onBackground='neutral-weak'>
								{experience.timeframe}
							</Text>
						</Flex>
						<Text variant='body-default-s' onBackground='brand-weak' marginBottom='m'>
							{experience.role}
						</Text>
						<Column as='ul' gap='16'>
							{experience.achievements &&
								experience.achievements.map((achievement, idx) => (
									<Text as='li' variant='body-default-m' key={`${experience.company}-${idx}`}>
										{achievement}
									</Text>
								))}
						</Column>
						{experience.images && experience.images.length > 0 && <ImageGallery images={experience.images} />}
					</Column>
				))}
			</Column>
		</>
	) : null;
