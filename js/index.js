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
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}hi</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
