<script lang="ts">
	import { ChitStore } from '../stores/store';
	let text: string;
	type Chits = {
		id: number;
		author: string;
		handle: string;
		content: string;
		likes: number;
	};

	const createText = () => {
		let newChit: Chits = {
			id: 4,
			author: 'hello',
			handle: '@hello',
			content: text,
			likes: 0
		};
		ChitStore.addNewChat(newChit);
	};
</script>

<div class="chit-entry">
	<textarea bind:value={text} placeholder="Say something..." />
	<button class="btn-send fa-solid fa-location-arrow" on:click={createText} />
</div>

<style>
	.chit-entry {
		border: 1px solid #62676d22;
		display: flex;
		flex-direction: row;
		padding: 10px 20px;
		font-weight: lighter;
		background-color: #282c34;
		box-shadow: 0px 0px 20px #1d2025;
		margin-top: 30px;
		justify-content: space-between;
		align-items: center;
	}

	.chit-entry textarea {
		display: block;
		flex-basis: 90%;
		background-color: #282c34;
		color: #dce4ec;
		font-size: smaller;
		padding: 10px;
		border: 1px solid #dce4ec22;
	}

	.chit-entry .btn-send {
		flex-basis: 20px;
		text-align: right;
		background-color: inherit;
		border: none;
		color: #dce4ec;
		cursor: pointer;
	}
</style>
