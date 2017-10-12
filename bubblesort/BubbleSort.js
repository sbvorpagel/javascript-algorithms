module.exports = data => {
    for (let i = data.length-1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (data[j] > data[j+1]) {
                const aux = data[j];
                data[j] = data[j+1];
                data[j+1] = aux;
            }
        }
    }
    return data;
}