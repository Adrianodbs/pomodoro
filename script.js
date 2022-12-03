const acao = document.getElementById('acao')
const pausa = document.getElementById('pausa')
const sessoes = document.getElementById('sessoes')
let segundos

var bell = new Audio('./audio/audio_bell.mp3')
var volta = new Audio('./audio/audio_volta.mp3')
var final = new Audio('./audio/audio_final.mp3')

var lofi = document.getElementById('lofi')
var pause = document.getElementById('pause')
var play = document.getElementById('play')

function iniciar() {
  if (acao.value == 0) {
    document.getElementById('erro_acao').innerHTML = 'Adicione os minutos'
    acao.focus()
  } else if (pausa.value == 0) {
    document.getElementById('erro_pausa').innerHTML = 'Adicione a pausa'
    pausa.focus()
  } else if (sessoes.value == 0) {
    document.getElementById('erro_sessoes').innerHTML = 'Adicione a sessões'
    sessoes.focus()
  } else {
    lofi.play()
    pause.style.setProperty('display', 'block', 'important')

    localStorage.setItem('acao', String(acao.value))
    localStorage.setItem('pausa', String(pausa.value))
    localStorage.setItem('sessoes', String(sessoes.value))

    document
      .getElementById('config')
      .style.setProperty('display', 'none', 'important')

    document
      .getElementById('timer')
      .style.setProperty('display', 'block', 'important')
  }
}
