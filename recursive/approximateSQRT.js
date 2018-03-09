const aSQRT = (num, precision, intervalA, intervalB) => {
	if (intervalA === undefined) {
		intervalA = 0;
	}
	if (intervalB === undefined) {
		intervalB = num/2;
	}
	const m = (intervalA + intervalB) / 2;
	if ((intervalB - intervalA) <= precision) {
		return intervalA;
	}
	if ((m*m) > num) {
		return aSQRT(num, precision, intervalA, m);
	} else {
		return aSQRT(num, precision, m, intervalB);
	}
}

// console.log(aSQRT(10, 0.00001)); // 3.1622695922851562
// console.log(aSQRT(25, 0.00001)); // 4.999995231628418
