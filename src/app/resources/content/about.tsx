import { person } from '.';

export const about = {
	label: 'Über mich',
	title: 'Über mich',
	description: `Lerne ${person.name} kennen, einen ${person.role} aus ${person.location}`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: true,
		link: 'https://cal.com/ababan',
	},
	intro: {
		display: true,
		title: 'Einführung',
		description: (
			<>
				Aland Baban ist ein Full Stack Entwickler mit Sitz in Frechen, Deutschland. Durch seine frühe Begeisterung für IT entwickelte er sich zu einem vielseitigen Entwickler mit Fokus auf WebApps, CyberSecurity, IoT und DevOps. Mit einem fundierten Verständnis von Frontend- und
				Backend-Technologien gestaltet er nutzerzentrierte digitale Lösungen.
				<p>
					Im Laufe meiner Karriere habe ich umfangreiche Erfahrung in der Entwicklung und Gestaltung von Websoftware gesammelt, von einfachen, ansprechenden Landing Pages bis hin zu komplexen und funktionsreichen Progressive Web Applications. Ich finde große Zufriedenheit darin,
					sowohl die logischen als auch die kreativen Aspekte meines Geistes zu nutzen, um Software von höchster Qualität zu erstellen.
				</p>
				<p>
					Die Zusammenarbeit in einem Team von Softwareentwicklern ist für mich besonders erfüllend. Mein Engagement gilt der Bereitstellung innovativer und hochwertiger Produkte, die den Bedürfnissen der Endbenutzer entsprechen. Ich bin eine proaktive, selbstbewusste und
					kommunikative Person, die stets mit Vorfreude in die Zukunft blickt.
				</p>
				<p>
					Ich bin leidenschaftlich daran interessiert, kontinuierlich zu lernen und stets nach neuen und verbesserten Methoden zu suchen, um nahtlose Benutzererfahrungen mit sauberem, effizientem und skalierbarem Code zu erstellen. Für mich ist Arbeit eine endlose Bildungsreise, und
					ich suche stets nach Möglichkeiten, mit denen zusammenzuarbeiten, die bereit sind, ihr Wissen und ihre Expertise zu teilen.
				</p>
				<p>
					Mit meiner Erfahrung als Freelancer und Festangestellter in unterschiedlichen Branchen und Teams bringe ich nicht nur technisches Know-how, sondern auch eine hohe Anpassungsfähigkeit und Verantwortungsbereitschaft mit. Ich arbeite gerne interdisziplinär und liebe es,
					komplexe Herausforderungen in elegante, robuste Systeme zu verwandeln.
				</p>
				<p>Mir ist es wichtig, dass Software nicht nur funktioniert, sondern auch einen echten Mehrwert schafft – sei es durch Performance, Usability oder Ästhetik. Ich schätze Clean Code, Open Source, Testbarkeit und gute Dokumentation.</p>
				<p>Letztendlich ist es mein Hauptziel, schöne und wirkungsvolle Software zusammen mit Personen zu erstellen, die mich inspirieren, mein Bestes zu geben. Abseits des Bildschirms spiele ich Geige und Klavier, erkunde neue Orte und genieße die Gesellschaft von Hunden.</p>
			</>
		),
	},
	philosophy: {
		display: true,
		title: 'Philosophie',
		description: (
			<>
				<p>
					Ich glaube daran, ethischen und moralischen Prinzipien zu folgen, anstatt einfach nur auferlegten Regeln zu gehorchen. Für mich ist es wichtig, integrity zu zeigen und stets zu versuchen, das Richtige zu tun. Ich bin der Meinung, dass das Leben nicht einfach schwarz und weiß
					ist, sondern aus verschiedenen Grautönen besteht. Als vernunftbegabte Wesen halte ich es für unsere Pflicht, uns um die Welt zu kümmern und andere so zu behandeln, wie wir selbst behandelt werden möchten. Diese Philosophie beeinflusst meine Überzeugungen und leitet mein
					Verhalten. Zusammenfassend kann man sagen, dass einige meiner Grundüberzeugungen folgende sind:
				</p>
				<ul>
					<li>Pragmatisch</li>
					<li>Ehrlich</li>
					<li>Respektvoll</li>
					<li>Aufgeschlossen</li>
					<li>Kohärent</li>
				</ul>
			</>
		),
	},
	interests: {
		display: true,
		title: 'Interessen & Hobbys',
		description: (
			<>
				<p>
					Es gibt eine ganze Welt außerhalb der Technologie, aber Programmieren (und darüber zu schreiben) ist mein liebstes Hobby. Ich liebe auch Musik aus einer Vielzahl von Genres, von Volksmusik über Jazz-Klassiker und Disco bis hin zu Videospiel-Soundtracks. Mein
					Lieblingsinstrument ist die Geige, und ich spiele gerne Beethoven. Da das Gehirn ein Teil des Körpers ist, ist es mir wichtig, in Bewegung zu bleiben und meinen Körper zu pflegen. Ich fahre gerne mit dem Fahrrad durch die Stadt und gehe wandern, wenn ich die Gelegenheit
					habe, rauszukommen. Ich mag Strategiespiele und Echtzeit-Strategiespiele. Wissenschaft, Science-Fiction und das Universum faszinieren mich, und ich liebe die Bücher von "The Expanse" und Carl Sagan. Wir sind aus Sternenstaub gemacht.
				</p>
				<ul>
					<li>Neue Orte besuchen</li>
					<li>Menschen treffen</li>
					<li>Neue Erfahrungen machen</li>
					<li>Wandern und Radfahren</li>
					<li>Entwicklung</li>
					<li>Computerspiele</li>
					<li>Geige und Klavier spielen</li>
				</ul>
			</>
		),
	},
	work: {
		display: true,
		title: 'Berufserfahrung',
		experiences: [
			{
				company: 'GWQ Serviceplus AG',
				location: 'Remote',
				link: 'https://www.gwq-serviceplus.de/',
				logo: '/images/work/gwq.svg',
				timeframe: 'Derzeit',
				role: 'Full Stack Developer (Hybrid)',
				techStack: ['Vue.js', 'C#/.NET', 'Docker', 'Keycloak', 'Kubernetes'],
				achievements: [
					'Leitung mehrerer paralleler Projekte im agilen Umfeld (2-Wochen-Sprints)',
					'Migration monolithischer Systeme zu skalierbaren Microservices',
					'Aufbau und Wartung von CI/CD-Pipelines mit Azure DevOps',
					'Optimierung der Performance geschäftskritischer Anwendungen',
					'Enge Zusammenarbeit mit DevOps und QA für Release-Management',
					'Performance-Optimierung geschäftskritischer Prozesse',
					'Containerisierung mit Docker und Verwaltung über Rancher',
				],
				images: [],
			},
			{
				company: 'Tasiomind',
				timeframe: 'Juli 2023 – August 2024',
				role: 'Full Stack Developer (Freelance | Remote)',
				logo: '/images/work/tasiomind.svg',
				link: 'https://tasiomind.com/',
				techStack: ['Vue.js', 'AWS Lambda', 'Go', 'React Native', 'Python', 'GraphQL', 'NestJS', 'C#/.NET'],
				achievements: [
					'Eigenständige Umsetzung mehrerer Projekte gleichzeitig',
					'Skalierung von Anwendungen auf 5.000+ Nutzer',
					'Implementierung moderner Architekturen mit Microservices und Serverless',
					'Verwendung von AWS-Diensten (Lambda, EC2, S3) für flexible Cloud-Lösungen',
					'Entwicklung hybrider mobiler Apps mit Ionic Vue und React Native',
				],
				images: [],
			},
			{
				company: 'GSSD mbH',
				timeframe: 'Dez 2021 – Juli 2023',
				link: 'https://gssd.de/',
				logo: '/images/work/gssd.svg',
				role: 'Fachinformatiker Anwendungsentwicklung (Azubi | Hybrid)',
				techStack: ['React Native', 'Vue.js', 'C#/.NET', 'Node.js', 'Swift', 'Go', 'PHP', 'KnockoutJS'],
				achievements: [
					'Entwicklung von SaaS-Lösungen für interne und externe Kunden',
					'Mitarbeit an UI/UX-Konzepten und Frontend-Architektur',
					'Einsatz von Sequelize für Datenbankmanagement',
					'Erweiterung von Sicherheits-Features im Bereich Netzwerksicherheit',
					'Arbeiten im agilen Team nach Scrum/Kanban',
				],
				images: [],
			},
			{
				company: 'WITT Solutions GmbH',
				timeframe: 'Sep 2020 – Dez 2021',
				link: 'https://witt-solutions.de/',
				logo: '/images/work/witt.svg',
				role: 'Fachinformatiker Anwendungsentwicklung (Azubi | Hybrid)',
				techStack: ['AngularTS', 'Laravel', 'Python', 'SQL', 'MQTT', 'SCADA'],
				achievements: ['Mitarbeit an industriellen IoT- und SCADA-Lösungen', 'Datenbankanbindungen mit SQL/SQLite', 'Entwicklung von Web-Interfaces für Embedded-Systeme', 'Arbeiten mit Netzwerkschnittstellen und MQTT-Protokollen', 'Einsatz von Scrum-Methoden im Projektalltag'],
				images: [],
			},
			{
				company: 'PFITConsult GmbH',
				timeframe: 'Jan 2019 – Sep 2020',
				link: 'https://www.pfitconsult.de/',
				logo: '/images/work/pfit.svg',
				role: 'IoT Entwickler (Vollzeit | Vor Ort)',
				techStack: ['CheckMK', 'ioBroker', 'Zigbee', 'SCADA', 'JavaScript', 'Python'],
				achievements: ['Entwicklung im Bereich CyberSecurity und IoT', 'Integration von Smart-Home-Systemen (Zigbee, Z-Wave)', 'Monitoring-Setups mit CheckMK und Grafana', 'Backend-Scripting für Datenanalysen und Systemchecks', 'Projektarbeit im agilen Umfeld mit Fokus auf Sicherheit'],
				images: [],
			},
			{},
		],
	},
	studies: {
		display: true,
		title: 'Bildung',
		institutions: [
			{
				name: 'OSZ Teltow',
				description: <>Fachinformatiker Anwendungsentwicklung (Abschluss: Jun 2023)</>,
			},
			{
				name: 'OSZ Reichstein',
				description: <>Mittlerer Schulabschluss (Abschluss: Jan 2019)</>,
			},
		],
	},
	technical: {
		display: true,
		title: 'Technische Fähigkeiten',
		skills: [
			{
				title: 'Frontend',
				description: <>Erfahrung mit Next.js, Nuxt, Angular, Vanilla JS, KnockoutJS, jQuery sowie starkem UI/UX-Fokus mit SCSS.</>,
				images: [],
			},
			{
				title: 'Backend & API',
				description: <>NestJS, Express, GraphQL, Python, Golang, Laravel und .NET-Technologien.</>,
				images: [],
			},
			{
				title: 'Mobile & DevOps',
				description: <>App-Entwicklung mit Ionic, ReactNative, Flutter. Nutzung von Docker, Kubernetes, Terraform, Git, AWS & Azure.</>,
				images: [],
			},
			{
				title: 'Datenbanken',
				description: <>Erfahrung mit PostgreSQL, MongoDB, Redis, InfluxDB, TimescaleDB und MySQL.</>,
				images: [],
			},
			{
				title: 'Cloud & Infrastruktur',
				description: <>Erfahrung mit AWS, Azure, Google Cloud und Docker.</>,
				images: [],
			},
			{
				title: 'Testing',
				description: <>Erfahrung mit Jest, Cypress, Playwright, Mocha und Chai.</>,
				images: [],
			},
			{
				title: 'Versionierung',
				description: <>Erfahrung mit Git, GitHub, GitLab und Bitbucket.</>,
				images: [],
			},
			{
				title: 'Sonstiges',
				description: <>Erfahrung mit MQTT, SCADA-Systemen, IoT-Protokollen und Netzwerksicherheit.</>,
				images: [],
			},
		],
	},
};
