export const filteringAnArray = (array, filterString) => {
	return array.filter((arrayElement) => {
		return arrayElement.title.toLowerCase().startsWith(filterString);
	});
};
