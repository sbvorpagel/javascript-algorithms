export const recursive = (value) => {
	if (value === 0) {  
		return 1;
    } else if (value === 1) {
		return 1;
    } else {
		return value*recursive(value-1);
    } 
}