// selecionando as classes e id que vou acessar
const boxtexto = document.getElementById('boxtexto')
const box1 =document.getElementById('box1')
const span =document.querySelector('span')
const box2 =document.getElementById('box2')
// cancelando o comportamento padrão dos elementos na pagina
// boxtexto.addEventListener('submit', (e) =>{
//     e.preventDefault()
// quando eu clicar no meu botão garante que execute a função
//     checkInputs()
// })
// esta função receberá meu input e processara as informações digitadas nele
function checkInputs(){
    // box1value e a criação de uma variavel e estou atrelando a ela o valor do box1 em seguida
    // o .trim retira os espaços desnecessários digitados pelo usuário
    const box1Value = box1.value.trim()

    // criando a condição de validação
    if(box1Value === '') {
        // mostrar erro
        // adicionar a classe erro
            // adicionando os parametros primeiro a classe depois a mensagem
    errodedigitacao(box1, 'Preencha sem numeros' )
    }
    else{
        // adicionar classe de sucesso
       acertodedigitacao(box2, 'está ok!') 
    }

}
// criando a função de erro que vou chamar dentro da minha validação
    // entre parenteses adicionar os parametros de input e mensagem a ser mostrada
function errodedigitacao(input, mensagem) {
    // criando a variavel que recebera a informação para validação
        // aqui estou colocando a minha div do html boxtexto dentro da minha variavel box1Control
    const box1Control = input.parentElement;

    const span1 = box1Control.querySelector('span')

    span1.innerText = mensagem

    box1Control.className = 'boxtexto error'



}
function acertodedigitacao(input) {
    // criando a variavel que recebera a informação para validação
        // aqui estou colocando a minha div do html boxtexto dentro da minha variavel box1Control
    const box2Control = input.parentElement;

    const h2s = box1Control.querySelector('h2')

    h2s.innerText = mensagem

    box2Control.className = 'boxtexto1 acerto'



}