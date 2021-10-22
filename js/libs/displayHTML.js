export default function renderHTMLToTheDom(html, domElm) {
	// remember to clear HTML in the DOM first since we are appending
	document.querySelector(domElm).innerHTML += html;
}
