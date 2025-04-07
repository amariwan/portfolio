import type { Config } from 'postcss-load-config';
import postcssGlobalData from '@csstools/postcss-global-data';
import postcssCustomMedia from 'postcss-custom-media';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

export default {
	plugins: [
		[
			postcssGlobalData,
			{
				files: ['src/once-ui/styles/breakpoints.scss'],
			},
		],
		postcssCustomMedia(),
		postcssFlexbugsFixes(),
		[
			postcssPresetEnv,
			{
				autoprefixer: {
					flexbox: 'no-2009',
				},
				stage: 3,
				features: {
					'custom-properties': false,
				},
			},
		],
		[
			cssnano,
			{
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						},
						normalizeUrl: false,
						reduceIdents: false,
						zindex: false,
					},
				],
			},
		],
	],
};
