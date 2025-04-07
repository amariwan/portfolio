import { render, screen } from '@testing-library/react';
import Home, { generateMetadata } from '../page'; // Relative Pfad von __tests__ zu page.jsx
import { home, about, person, newsletter } from '@/app/resources/content';

jest.mock('@/once-ui/components', () => ({
	Heading: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
	Flex: ({ children, ...props }) => <div {...props}>{children}</div>,
	Text: ({ children, ...props }) => <p {...props}>{children}</p>,
	Button: ({ children, ...props }) => <button {...props}>{children}</button>,
	RevealFx: ({ children, ...props }) => <div {...props}>{children}</div>,
	Column: ({ children, ...props }) => <div {...props}>{children}</div>,
	Container: ({ children, ...props }) => <div {...props}>{children}</div>, // Added missing mock
}));
jest.mock('@components/work/Projects', () => {
	return function Projects({ range = [1, 1] }) {
		return <div data-testid='projects'>Projects {range.join('-')}</div>; // Simplified range handling
	};
});

jest.mock('@components/blog/Posts', () => {
	return function Posts({ range = [1, 2] }) {
		const rangeText = Array.isArray(range) ? range.join('-') : '';
		return <div data-testid='posts'>Posts {rangeText}</div>;
	};
});
jest.mock('@/components/Mailchimp', () => {
	return function Mailchimp({ newsletter }) {
		return <div data-testid='mailchimp'>{newsletter?.title || 'Default Newsletter Title'}</div>; // Added fallback for title
	};
});

describe('Home Component', () => {
	describe('generateMetadata', () => {
		it('should generate correct metadata', async () => {
			const metadata = await generateMetadata();
			expect(metadata).toEqual({
				title: home.title,
				description: home.description,
				openGraph: {
					title: home.title,
					description: home.description,
					type: 'website',
					url: expect.any(String),
					images: [
						{
							url: expect.stringContaining('/og?title='),
							alt: home.title,
						},
					],
				},
				twitter: {
					card: 'summary_large_image',
					title: home.title,
					description: home.description,
					images: [expect.stringContaining('/og?title=')],
				},
			});
		});
	});

	describe('Home rendering', () => {
		beforeEach(() => {
			render(<Home />);
		});

		it('should render headline', () => {
			expect(screen.getByText(home.headline)).toBeInTheDocument();
		});

		it('should render subline', () => {
			expect(screen.getByText(home.subline)).toBeInTheDocument();
		});

		it('should render about button', () => {
			const button = screen.getByText(about.title);
			expect(button).toBeInTheDocument();
			expect(button.closest('a') || button.closest('button')).toHaveAttribute('href', '/about');
		});

		it('should render projects components', () => {
			const projects = screen.getAllByTestId('projects');
			expect(projects).toHaveLength(1); // Adjusted to match the mocked behavior
			expect(projects[0]).toHaveTextContent('Projects 1-1');
		});

		it('should render blog section when route exists', () => {
			expect(screen.getByText('Latest from the blog')).toBeInTheDocument();
			expect(screen.getByTestId('posts')).toHaveTextContent('Posts 1-2');
		});

		it('should render Mailchimp when newsletter.display is true', () => {
			if (newsletter.display) {
				expect(screen.getByTestId('mailchimp')).toBeInTheDocument();
				expect(screen.getByTestId('mailchimp')).toHaveTextContent(newsletter.title);
			}
		});

		it('should render schema.org script', () => {
			const script = document.querySelector('script[type="application/ld+json"]');
			expect(script).toBeInTheDocument();
			const schema = JSON.parse(script.textContent);
			expect(schema['@type']).toBe('WebPage');
			expect(schema.name).toBe(home.title);
		});
	});
});

// Setup für Async Server Components und Navigation
jest.mock('next/navigation', () => ({
	useRouter: () => ({
		push: jest.fn(),
	}),
}));

// Mock für baseURL und routes
jest.mock('@/app/resources/content', () => ({
	home: {
		title: 'Test Title',
		description: 'Test Description',
		headline: 'Mock Headline',
		subline: 'Mock Subline',
	},
	about: {
		title: 'About Me',
		avatar: { display: true },
	},
	person: {
		name: 'Test Person',
		avatar: '/avatar.jpg',
	},
	newsletter: {
		display: true,
		title: 'Test Newsletter',
	},
}));
