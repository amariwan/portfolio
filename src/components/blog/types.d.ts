export interface PostMetadata {
	title: string;
	image?: string;
	publishedAt?: string;
	tag?: string | undefined
}

export interface Post {
	slug: string;
	metadata: PostMetadata;
	content: string;
}

export interface PostProps {
	post: Post;
	thumbnail?: boolean;
}
