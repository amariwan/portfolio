import { about, blog, gallery, work } from '@/app/resources/content';

export const navItems = [
	{ path: '/', icon: 'home', label: '' },
	{ path: '/about', icon: 'person', label: about.label },
	{ path: '/work', icon: 'grid', label: work.label },
	{ path: '/blog', icon: 'book', label: blog.label },
	{ path: '/gallery', icon: 'gallery', label: gallery.label },
];
