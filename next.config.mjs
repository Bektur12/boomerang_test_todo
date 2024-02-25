/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'external-content.duckduckgo.com',
			'skillbox.ru',
			'millerart.ru',
			'img.icons8.com',
		],
	},
}

export default nextConfig
