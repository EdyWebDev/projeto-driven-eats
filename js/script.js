
let nomePrato = ""
let nomeBebida = ""
let nomeSobremesa = ""
let valorPrato = 0
let valorBebida = 0
let valorSobremesa = 0
let total = 0
let msgPrato = ""
let msgBebida = ""
let msgSobremesa = ""
let totalFormat = 0


function selecionarPrato(pedido) {
    nomePrato = pedido.innerHTML
       
    const pratoSelecionado = document.querySelector(".prato .selecionado")

    if (pratoSelecionado) {
        pratoSelecionado.classList.remove("selecionado")
        pratoSelecionado.querySelector(".bi").classList.add("escondido")
    }

    pedido.classList.add("selecionado")
    pedido.querySelector(".bi").classList.remove("escondido")

    const prato = pedido.querySelector(".item").innerText
    const valor = parseFloat(pedido.querySelector(".preco").innerText)

    msgPrato = prato

    document.querySelector(".item-prato").innerText = `${prato}`
    document.querySelector(".valor-prato").innerText = `R$ ${valor}`

    total += valor
    
    verificarSelecao()
}

function selecionarBebida(pedido) {
    nomeBebida = pedido.innerHTML

    const bebidaSelecinada = document.querySelector(".bebida .selecionado")

    if (bebidaSelecinada !== null) {
        bebidaSelecinada.classList.remove("selecionado")
        bebidaSelecinada.querySelector(".bi").classList.add("escondido")
    }

    pedido.classList.add("selecionado")
    pedido.querySelector(".bi").classList.remove("escondido")

    const bebida = pedido.querySelector(".item").innerText
    const valor = parseFloat(pedido.querySelector(".preco").innerText)

    msgBebida = bebida

    document.querySelector(".item-bebida").innerText = `${bebida}`
    document.querySelector(".valor-bebida").innerText = `R$ ${valor}`

    total += valor

    verificarSelecao()
}

function  selecionarSobremesa(pedido) {
    nomeSobremesa = pedido.innerHTML
    const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado")

    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado")
        sobremesaSelecionada.querySelector(".bi").classList.add("escondido")
    }

    pedido.classList.add("selecionado")
    pedido.querySelector(".bi").classList.remove("escondido")

    const sobremesa = pedido.querySelector(".item").innerText
    const valor = parseFloat(pedido.querySelector(".preco").innerText)

    msgSobremesa = sobremesa

    document.querySelector(".item-sobremesa").innerText = `${sobremesa}`
    document.querySelector(".valor-sobremesa").innerText = `R$ ${valor}`

    total += valor

    verificarSelecao()
}


function verificarSelecao() {
    const botao = document.querySelector(".enviar");

    if (nomePrato && nomeBebida && nomeSobremesa) {
        botao.disabled = false;
        botao.classList.add("btn-selecionado")
        botao.innerHTML = `Fechar Pedido`
    } else {
        botao.disabled = true
    }
}

function finalizarPedido() {
    document.querySelector(".pedido").classList.remove("escondido")
    totalFormat = total.toFixed(2)
    document.querySelector(".total-pedido").innerText = `TOTAL `
    document.querySelector(".valor-pedido").innerText = `R$ ${totalFormat}`
}

function cancelarPedido() {
    document.querySelector(".pedido").classList.add("escondido")
}

function enviarMensagem() {
    const numero = "5566981114268"
    const msg = `Olá gostaria de fazer o pedido: \n- Prato: ${msgPrato}, \n- Bebida: ${msgBebida} \n- Sobremesa: ${msgSobremesa} \nTOTAL: R$ ${totalFormat}`
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`
    window.location.href = url
}
