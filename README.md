# Gerador da Sequência de Fibonacci em JavaScript

Este projeto contém uma função em JavaScript que gera a sequência de Fibonacci até o número de termos especificado. A sequência de Fibonacci é uma série de números onde cada número é a soma dos dois anteriores, começando com 0 e 1.

## Como funciona

A função `fibonacci(numeros)` recebe um argumento `numeros`, que determina quantos números da sequência de Fibonacci devem ser gerados. A função inicia um array vazio e o preenche com a sequência até atingir o número desejado de termos.

1. Se `i` for 0, o número inicial da sequência é 0.
2. Se `i` for 1, o segundo número da sequência é 1.
3. Para os próximos números, a função calcula a soma dos dois números anteriores e os adiciona ao array.

### Exemplo

```javascript
function fibonacci(numeros) {
    let array = [];
  
    for (let i = 0; i < numeros; i++) {
        if (i === 0) {
            array.push(0);
        } else if (i === 1) {
            array.push(1);
        } else {
            array.push(array[i - 1] + array[i - 2]);
        }
    }
    return array;
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
