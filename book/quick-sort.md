# QuickSort

O QuickSort é um algoritmo de ordenação rápido e eficientes, por consequência, é um dos algoritmos mais utilizados. Uma curiosidade, é que ele foi inventado por Hoare para ordenar palavras de um dicionário inglês-russo.

Este algoritmo utiliza-se da técnica de dividir e conquistar (Divide and Conquer), ou seja, a ideia por trás deste algoritmo é reduzir o problema em subproblemas até encontrar um problema que possa ser resolvido. Por essa característica, a implementação mais comum do algoritmo é a forma recursiva.

## Implementação

```Javascript
const QuickSort = (data, left, right) =>{
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
        QuickSort(data, left, j); 
    }
    if (i < right) {
        QuickSort(data, i, right); 
    }
    return data;
}
```

```Javascript
> const data = [3,2,1,5,6,4,7,3,5,8,5,35,7454,4,64,745,34];
> QuickSort(data, 0, data.length-1)
[ 1, 2, 3, 3, 4, 4, 5, 5, 5, 6, 7, 8, 34, 35, 64, 745, 7454 ]
```



