import { getStorageItem } from './libs/localStorageHelpers.js';
import message from './components/message.js';
import renderHTMLToTheDom from './libs/displayHTML.js';

const favorites = getStorageItem('favorites');

if (favorites.length === 0) {
	message('nofavorites', `No favorite articles selected`, '.articles');
}

let HTML = '';
favorites.forEach((element) => {
	HTML += `
        <div class="card text-white bg-dark mb-3">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Written by ${element.author}</h6>
                <i class="fa fa-heart" data-id="${element.id}" data-title="${element.title}" data-author="${element.author}"></i>
            </div>
        </div>
    `;
});

renderHTMLToTheDom(HTML, '.articles');

const clearButton = document.querySelector('.clearbutton');
clearButton.onclick = function () {
	localStorage.clear();
	message('nofavorites', `No favorite articles selected`, '.articles');
};
