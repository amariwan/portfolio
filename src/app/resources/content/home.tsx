import { InlineCode } from '@/once-ui/components';
import { person } from '.';

export const home = {
	label: 'Home',
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: person.role,
	subline: (
		<>
			Ich bin Aland, ein Full Stack Developer bei <InlineCode>GWQ Serviceplus AG</InlineCode>,
			<br /> und Gründer von <InlineCode>Tasiomind</InlineCode>. Nach Feierabend baue ich Tools, die Menschen das Leben leichter machen – von DevOps bis IoT.
		</>
	),
};
