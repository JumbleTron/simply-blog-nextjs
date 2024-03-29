import Image from 'next/image'

export function useMDXComponents(components) {
	return {
		h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
		img: (props) => (
			<Image
				alt="image-text-alt"
				sizes="100vw"
				style={{ width: '100%', height: 'auto' }}
				{...props}
			/>
		),
		...components,
	}
}
