function selectionSort(a) {
    var i;
    for (i = 0; i < a.length - 1; i++) {
        var minIndex = min(a, i, a.length - 1);
        trocar(a, i, minIndex);
    }
}

//retorna o índice do menor valor de a entre i e j
function min(a, i, j) {
    var minIndex = i;
    var k;
    for (k = i + 1; k <= j; k++) {
        if (a[minIndex] > a[k]) {
            minIndex = k;
        }
    }
    return minIndex;
}

//troca os elementos da posição i e j
function trocar(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

//selection sort versão "linguiça": tudo num único módulo
function selectionSortSausage(a) {
    var i;
    for (i = 0; i < a.length - 1; i++) {
        var minIndex = i;
        for (k = i + 1; k < a.length; k++) {
            if (a[minIndex] > a[k]) {
                minIndex = k;
            }
        }
        var temp = a[i];
        a[i] = a[minIndex];
        a[minIndex] = temp;
    }
}