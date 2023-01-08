<script lang="ts">
	import Chit from './Chit.svelte';
	import { ChitStore } from '../stores/store';
	import { onDestroy, onMount } from 'svelte';
	type Chits = {
		id: number;
		author: string;
		handle: string;
		content: string;
		likes: number;
	}[];
	let all: Chits;
	const unsub = ChitStore.subscribe((data) => (all = data));
	onMount(() => {
		ChitStore.loadData();
	});
	onDestroy(() => {
		unsub();
	});
</script>

<div class="all-chits">
	{#each all as item (item.id)}
		<Chit
			likes={item.likes}
			id={item.id}
			author={item.author}
			handle={item.handle}
			content={item.content}
		/>
	{/each}
</div>
