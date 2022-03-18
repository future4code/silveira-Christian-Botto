```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    let occurrences = 0
    for (let ii = 0; ii < arrayDeNumeros.length ; ii++) {
        if (arrayDeNumeros[ii] ===numeroEscolhido ) {
        occurrences = occurrences +1
        } 
    }
    let final 
    if (occurrences === 0) {
        final = "Número não encontrado"
    } else {
        final = `O número ${numeroEscolhido} aparece ${occurrences}x`
    }
    return final
}
```