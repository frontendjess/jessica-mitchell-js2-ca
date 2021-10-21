export const filteringAnArray = (array, filterString) => {
	return array.filter((arrayElement) => {
		return arrayElement.name.toLowerCase().includes(filterString.toLowerCase());
	});
};
