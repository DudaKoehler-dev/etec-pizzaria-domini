const buttonEnviar = document.querySelector('button.botao-enviar')

buttonEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    const tamanho = `Tamanho da pizza: ${document.querySelector('input[name="pizza-size"]:checked').value} \n` 

    const pizzaFlavor = document.querySelectorAll('input[name="pizza-flavor"]:checked')

    const pizzaAcomp = document.querySelectorAll('input[name="pizza-extra"]:checked')

    const pizzaDrinks = document.querySelectorAll('input[name="bebida"]:checked')

    const borda = `Borda recheada: ${document.querySelector('input[name="pizza-border"]:checked').value}` 

    let sabores = 'Sabores:\n'

    let acompanhamentos = 'Acompanhamentos:\n'

    let bebidas = "Bebidas:\n"

    for(let i = 0; i < pizzaFlavor.length; i++){
        sabores = sabores + `${pizzaFlavor[i].value}\n`
    }

    for(let i = 0; i < pizzaAcomp.length; i++){
       acompanhamentos = acompanhamentos + `${pizzaAcomp[i].value}\n`
    }

    for(let i = 0; i < pizzaDrinks.length; i++){
        bebidas = bebidas + `${pizzaDrinks[i].value}\n`
    }

    if(confirm(`${tamanho}\n${sabores}\n${acompanhamentos}\n${bebidas}\n${borda}`)){
        window.location.href = '../pagina-pagamento/index.html'
    }
})

