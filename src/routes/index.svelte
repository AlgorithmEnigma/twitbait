<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const response = await fetch('/api/image', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'access-control-allow-origin': '*'
			},
			body: JSON.stringify({
				background: 'gradient',
				text: 'Website'
			})
		});

		const json = await response.json();
		const b64 = json.b64;
		// const imageURL = image.imageURL;
		return {
			status: response.status,
			props: { b64 }
		};
	}
</script>

<script lang="ts">
	export let b64: string;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<img src="data:image/webp;base64,{b64}" alt="" />

<style>
	.img {
		width: 100%;
		height: auto;
	}
</style>
