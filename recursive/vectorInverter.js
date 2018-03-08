const vectorInverter = (vector) => {
	if (vector.length === 1) {
		return vector;
	} else {
		const firstElement = vector.splice(0,1);
		return vectorInverter(vector).concat(firstElement);

	}
}

// console.log(vectorInverter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); - [10, 9, 8,.7. 6. 5. 4. 3. 2. 1]
