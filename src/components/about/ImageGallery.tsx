// src/components/about/ImageGallery.tsx
import { Flex, SmartImage } from '@/once-ui/components';

interface Image {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface ImageGalleryProps {
	images: Image[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => (
	<Flex fillWidth paddingTop='m' paddingLeft='40' wrap gap='12'>
		{images.map((image, index) => (
			<Flex key={index} border='neutral-medium' radius='m' minWidth={image.width} height={image.height}>
				<SmartImage enlarge radius='m' sizes={image.width.toString()} alt={image.alt} src={image.src} />
			</Flex>
		))}
	</Flex>
);
