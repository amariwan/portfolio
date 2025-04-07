export interface TeamMember {
	name: string;
	role: string;
	avatar: string;
	linkedIn: string;
}

export interface Metadata {
	title: string;
	publishedAt: string;
	summary: string;
	image?: string;
	images: string[];
	tag?: string;
	team: TeamMember[];
	link?: string;
}

export interface MDXContent {
	metadata: Metadata;
	content: string;
}

export interface MDXData extends MDXContent {
	slug: string;
}
