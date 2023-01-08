type Chits = {
	id: number;
	author: string;
	handle: string;
	content: string;
	likes: number;
};

import { fetchDB, likeCounter } from '../api';
import { writable } from 'svelte/store';

const addFunctionalityToStore = () => {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		set,
		update,
		addNewChat: (newChat: Chits) => {
			update((e: Chits[]) => [...e, newChat]);
		},
		likesCounter: (id: number) => {
			let newCount = 1;
			update((all: Chits[]) => {
				all.map((item: Chits) => {
					if (item.id == id) {
						item.likes += 1;
						newCount = item.likes;
					}
				});
				likeCounter(id, newCount);
				return all;
			});
		},
		loadData: async () => {
			const data = await fetchDB();
			set(data);
		}
	};
};
export const ChitStore = addFunctionalityToStore();
