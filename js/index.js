import {
	saveToLocalStorage,
	getStorageItem,
} from './libs/localStorageHelpers.js';

let articles = document.querySelector('.articles');

const baseUrl = '';

async function getArticles(url) {
	try {
		console.log('hi');

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
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            `;
		});
	} catch (error) {
	} finally {
	}
}

getArticles(baseUrl);
