const cores = document.getElementsByClassName('color')

function adicionaClasseSelected(event) {
  for (let index = 0; index < cores.length; index++) {
    const cor = cores[index]
    if (cor === event.target) {
      cor.classList.add('selected')
    } else {
      cor.classList.remove('selected')
    }
  }
}

function adicionaEventoDeClickNasCores() {
  for (let index = 0; index < cores.length; index++) {
    const cor = cores[index]
    cor.addEventListener('click', adicionaClasseSelected)
  }
}

function mudaCorPixel(event) {
  const corSelecionada = document.querySelector('.selected')
  //foi utilizado o metodo getComputedStyle para pegar o estilo da cor e aplicar no pixel em branco. link da referencia: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
  event.target.style.backgroundColor =
    getComputedStyle(corSelecionada).backgroundColor
}

function adicionaEventoDeClickNosPixels() {
  const pixels = document.getElementsByClassName('pixel')

  for (let index = 0; index < pixels.length; index++) {
    const pixel = pixels[index]
    pixel.addEventListener('click', mudaCorPixel)
  }
}

adicionaEventoDeClickNasCores()
adicionaEventoDeClickNosPixels()

const corAnteriorDoPixel = 'white'
function limpaPixels() {
  const pixels = document.getElementsByClassName('pixel')
  for (let index = 0; index < pixels.length; index++) {
    const corPixel = pixels[index]
    corPixel.style.backgroundColor = corAnteriorDoPixel
  }
}
const clearBoard = document.getElementById('clear-board')
clearBoard.addEventListener('click', limpaPixels)
