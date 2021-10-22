import { saveToLocalStorage, getStorageItem } from './localStorageHelpers.js';

export function getExistingFavorites() {
	const favs = getStorageItem('favorites');

	console.log('Existing fav articles', favs);
}

export function saveFavorites(favs) {
	saveToLocalStorage('favorites', favs);
}
