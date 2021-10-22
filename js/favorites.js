import { getStorageItem } from './libs/localStorageHelpers.js';

import fetchData from './libs/fetchData.js';

const articles = document.querySelector('.articles');
const favorites = getStorageItem('favorites');

// function fetchFavoriteArticles() {
// 	var i;
// 	for (i = 0; i < localStorage.length; i++) {
// 		console.log(
// 			localStorage.key(i) +
// 				'=[' +
// 				localStorage.getItem(localStorage.key(i)) +
// 				']'
// 		);
// 	}
// }

// fetchFavoriteArticles();

// function fetchFavoriteArticles() {
// 	if (localStorage.key !== null) {
// 		favorites.forEach((element) => {
// 			articles.innerHTML += `
//                 <div class="card text-white bg-dark mb-3">
//                     <div class="card-body">
//                         <h5 class="card-title">${element.title}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted">Written by ${element.author}</h6>
//                         <i class="fa fa-heart" data-id="${element.id}" data-title="${element.title}" data-author="${element.author}"></i>
//                     </div>
//                 </div>
//             `;
// 		});
// 	} else if (localStorage.length === 0) {
// 		articles.innerHTML += `<p>Nothing to show</p>`;
// 	} else {
// 		return [];
// 	}
// }

// fetchFavoriteArticles();

if (favorites.length === 0) {
	articles.innerHTML = `
        <h5 class="nofavorites">No favorite articles selected</h5>
    `;
}

favorites.forEach((element) => {
	articles.innerHTML += `
        <div class="card text-white bg-dark mb-3">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Written by ${element.author}</h6>
                <i class="fa fa-heart" data-id="${element.id}" data-title="${element.title}" data-author="${element.author}"></i>
            </div>
        </div>
    `;
});

const clearButton = document.querySelector('.clearbutton');
clearButton.onclick = function () {
	localStorage.clear();
	articles.innerHTML = `
        <h5 class="nofavorites">No favorite articles selected</h5>
    `;
};
