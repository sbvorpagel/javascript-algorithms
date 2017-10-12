# Bubble Sort
Bubble sort é um dos métodos de ordenação mais simples para implementação, em contra partida, ele paga o preço na questão performance. Na maioria das vezes, a quantidade de execuções de sua operação básica será `n²`, podendo executar "apenas" `n` vezes quando o conjunto `n` de dados já estiver ordenado.

## Implementação

```Javascript
const BubbleSort = data => {
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
```

```Javascript
> BubbleSort([3,2,1,5,6,4,7,3,5,8,5,35,7454,4,64,745,34])
[ 1, 2, 3, 3, 4, 4, 5, 5, 5, 6, 7, 8, 34, 35, 64, 745, 7454 ]
```