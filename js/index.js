import {
	saveToLocalStorage,
	getStorageItem,
} from './libs/localStorageHelpers.js';

let articles = document.querySelector('.articles');

const baseUrl = '';

async function getArticles(url) {
	try {
		const response = await fetch('http://localhost:1337/articles');
		const jsonResult = await response.json();
		const res = jsonResult;

		res.forEach((element) => {
			articles.innerHTML += `
                <div class="card text-white bg-dark mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Written by ${element.author}</h6>
                        <p class="card-text">${element.summary}</p>
                        <i class="far fa-heart" data-id="${element.id}" data-title="${element.title}" data-author="${element.author}"></i>
                    </div>
                </div>
            `;
		});
	} catch (error) {
	} finally {
	}
}

getArticles(baseUrl);

let likes = document.querySelectorAll('.fa-heart');

likes.forEach((element) => {
	element.onclick = function () {
		element.classList.toggle('fas');
		console.log(element);
		console.log('this ran');
	};
});
