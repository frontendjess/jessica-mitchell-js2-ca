import {
	saveToLocalStorage,
	getStorageItem,
} from './libs/localStorageHelpers.js';

import fetchData from './libs/fetchData.js';

import renderHTMLToTheDom from './libs/displayHTML.js';

// const articles = document.querySelector('.articles');
const search = document.querySelector('.search');

const favorites = getStorageItem('favorites');

const data = await fetchData('http://localhost:1337/articles');
let articlesToRender = data;

function fetchArticles() {
	// articles.innerHTML = '';
	let HTML = '';

	articlesToRender.forEach((element) => {
		// articles.innerHTML += `
		//         <div class="card text-white bg-dark mb-3">
		//             <div class="card-body">
		//                 <h5 class="card-title">${element.title}</h5>
		//                 <h6 class="card-subtitle mb-2 text-muted">Written by ${element.author}</h6>
		//                 <p class="card-text">${element.summary}</p>
		//                 <i class="far fa-heart" data-id="${element.id}" data-title="${element.title}" data-author="${element.author}"></i>
		//             </div>
		//         </div>
		//     `;

		let cssClass = '';

		const doesObjectExist = favorites.find(function (fav) {
			console.log('fav', fav);

			return parseInt(fav.id) === element.id;
		});

		console.log('doesObjectExist', doesObjectExist);

		if (doesObjectExist) {
			cssClass = 'fa';
		} else {
			cssClass = 'far';
		}

		HTML += `
            <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Written by ${element.author}</h6>
                    <p class="card-text">${element.summary}</p>
                    <i class="${cssClass} fa-heart" data-id="${element.id}" data-title="${element.title}" data-author="${element.author}"></i>
                </div>
            </div>
        `;
	});

	renderHTMLToTheDom(HTML, '.articles');

	let likes = document.querySelectorAll('.fa-heart');
	// console.log('likes', likes);

	likes.forEach((element) => {
		element.onclick = function () {
			element.classList.toggle('fas');
			console.log(element);

			console.log(element.dataset.id);
			console.log(element.dataset.title);
			console.log(element.dataset.author);

			// storing local storage to an object
			let localStorageObject = {
				id: element.dataset.id,
				title: element.dataset.title,
				author: element.dataset.author,
			};

			// add to local storage
			let favorites = getStorageItem('favorites');
			// look for if something is in the array
			let isInStorage = favorites.find(
				(articleObject) => articleObject.id === localStorageObject.id
			);

			console.log('isInStorage', isInStorage);

			if (isInStorage === undefined) {
				favorites.push(localStorageObject);
				saveToLocalStorage('favorites', favorites);
			} else {
				let removedElementArray = favorites.filter(
					(articleObject) => articleObject.id !== localStorageObject.id
				);

				saveToLocalStorage('favorites', removedElementArray);
			}
		};
	});
}

fetchArticles();

search.onkeyup = function () {
	// console.log(search.value);

	const searchValue = event.target.value.trim().toLowerCase();

	const filteredArticles = data.filter(function (article) {
		if (article.title.toLowerCase().includes(searchValue)) {
			return true;
		}
	});

	console.log(filteredArticles);

	articlesToRender = filteredArticles;

	// getArticles();
	fetchArticles();
};

//
