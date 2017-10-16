module.exports = (data, left, right) =>{
	const pivotidx = (left + right) / 2; 
	const pivot = parseInt(data[pivotidx.toFixed()]);  
	let i = left;
	let j = right;
	let tmp;
	while (i <= j) {
		while (parseInt(data[i]) < pivot) i++;
		while (parseInt(data[j]) > pivot) j--;
		if (i <= j) {
			tmp = data[i];
			data[i] = data[j];
			data[j] = tmp;
			i++;
			j--;
		}
	}
    
    if (left < j) { 
        quickSort(data, left, j); 
    }
    if (i < right) {
        quickSort(data, i, right); 
    }
	return data;
}