import mdx from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = mdx({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: '@mdx-js/react',
	},
});

/**
  * @type {import('next').NextConfig}
  */
const nextConfig: NextConfig = {
	images: {
		unoptimized: true,
	},
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

	compiler: {
		relay: {
			src: './',
			artifactDirectory: './__generated__',
			language: 'typescript',
			eagerEsModules: false,
		},
		styledComponents: {
			displayName: process.env.NODE_ENV === 'development',
			pure: true,
			minify: true,
		},
		removeConsole: process.env.NODE_ENV !== 'development',
	},

	experimental: {
		turbo: {
			rules: {
				'*.mdx': ['@mdx-js/loader'],
			},
			memoryLimit: 4096,
		},
	},
	env: {
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'private, max-age=3600, stale-while-revalidate=60'
					},
				],
			},
		];
	},
};

export default withMDX(nextConfig);
