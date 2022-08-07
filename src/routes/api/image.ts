// import type { RequestHandler } from '@sveltejs/kit';
import { createCanvas } from 'canvas';
// import { Buffer } from 'node:buffer';
import { Blob } from 'node:buffer';

export async function POST({ request, url }: { request: Request; url: URL }) {
	const { background, text, font } = await request.json();

	const canvas = createCanvas(1920, 1080);
	const ctx = canvas.getContext('2d');

	ctx.font = '100px sans-serif';
	ctx.fillText(text, 100, 100);

	const img = canvas.toBuffer('image/png');
	const b64 = Buffer.from(img).toString('base64');
	// const blob = await new Blob([img], { type: 'image/webp' });
	// const file = new File([blob], 'image.webp', { type: 'image/webp', lastModified: Date.now() });
	// const imageURL = URL.createObjectURL(blob);

	return {
		status: 200,
		headers: {
			'content-type': 'application/json',
			'access-control-allow-origin': '*'
		},
		body: { b64 }
	};
}
