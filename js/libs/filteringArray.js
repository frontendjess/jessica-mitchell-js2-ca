export const filteringAnArray = (array, filterString) => {
	return array.filter((arrayElement) => {
		if (arrayElement.title.toLowerCase().includes(filterString)) {
			return true;
		}
	});
};

// delete this file if not using as import
