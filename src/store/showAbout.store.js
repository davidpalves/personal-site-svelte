import { writable } from 'svelte/store';

function showAboutSection(){
  const { subscribe, update, set } = writable(false);

  return {
    subscribe,
    toggle: () => update(showAbout => !showAbout)
  };
}

const store = showAboutSection()

export default store;