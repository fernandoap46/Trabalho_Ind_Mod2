// quando a pagina carregar execute o comando abaixo atraves do evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){

  // atribuindo evento de click ao botão
  // peguando o valor de text
  // Atribua o resultado a variavel resultado para devolver ao html o resuldado da função
  let codar = document.querySelector('#encript').addEventListener('click', function(){
    let texto = document.querySelector('#texto').value
    document.querySelector('#resultado').innerHTML = Encrypt(texto)
  })

  let decodar = document.querySelector('#decrypt').addEventListener('click', function(){
    let texto = document.querySelector('#texto').value
    document.querySelector('#resultado').innerHTML = Decrypt(texto)
  })

  // método codifica uma string para a base 64.

  function Encrypt(txt){
    let dec = btoa(txt)
    return dec
  }

  function Decrypt(txt){
    let dec = atob(txt)
    return dec
  }
  // Função altera o valor do display, acessando sua caracteriste atraves de um evento de click
  function esconder1(){
    
    document.querySelectorAll('.container1').forEach(function(el) {
      el.style.display = 'none';
    });
    
    document.querySelectorAll('.container2').forEach(function(el) {
      el.style.display = 'grid';
    });
  }
  // adicionando o evento de click ao botão, quando ele é acionado esconde a classe container1 e mostra container2
  document.getElementById("btn1").addEventListener("click", esconder1);

  // Função altera o valor do display quan a tela diminuir
  function esconder1b(){
    
    document.querySelectorAll('.container1').forEach(function(el) {
      el.style.display = 'none';
    });
  
    document.querySelectorAll('.container2').forEach(function(el) {
      el.style.display = 'flex';
    });
  }
  // adicionando o evento de click ao botão, quando ele é acionado esconde a classe container1 e mostra container2
  document.getElementById("btn1b").addEventListener("click", esconder1b);

  function esconder2(){
    
    document.querySelectorAll('.container1').forEach(function(el) {
      el.style.display = 'none';
    });
    
    document.querySelectorAll('.container3').forEach(function(el) {
      el.style.display = 'grid';
    });
  }
    // adicionando o evento de click ao botão, quando ele é acionado esconde a classe container1 e mostra container2
  document.getElementById("btn2").addEventListener("click", esconder2);

  function esconder2b(){
    
    document.querySelectorAll('.container1').forEach(function(el) {
      el.style.display = 'none';
    });
  
    document.querySelectorAll('.container3').forEach(function(el) {
      el.style.display = 'flex';
    });
  }
  // adicionando o evento de click ao botão, quando ele é acionado esconde a classe container1 e mostra container2
  document.getElementById("btn2b").addEventListener("click", esconder2b);
})

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  
  const transformIntoLetters = charcodesArray => String.fromCharCode.apply(this, charcodesArray);
  
  const showResultOnPage = (resultMessage, method) => {
    return document.getElementById('results').innerHTML = `
    <div id="p-group">
      <p class="result-fixed-message w-100">Esta é a sua mensagem ${method}:</p>
      <p class="result-text w-100">${resultMessage}</p>
    </div>`;
  };
  
  const clearTextArea = () => { 
    document.getElementById('message-box').value = '';
    enableButtons();
    addTextAreaRows();
  };

  // Comando atrelado aos botões de liga e descila do container 1
  // Utilização de Jquery que atraves do evento de click, liga e desliga o desplay mas preserva seu espaço para não prejudiicar o leyout
  
  $(document).ready(function(){
    $(".on").click(function(){
      $(".cabecalho").css("visibility", "visible");
    });
  });
  $(document).ready(function(){
    $(".off").click(function(){
      $(".cabecalho").css("visibility", "hidden");
    });
  });

// -----------------------------------liga e desliga padrão 64 bits
$(document).ready(function(){
    $(".on2").click(function(){
      $(".caixatexto").css("visibility", "visible");
    });
  });
  $(document).ready(function(){
    $(".off2").click(function(){
      $(".caixatexto").css("visibility", "hidden");
    });
  });
  // -----------------------------------liga e desliga padrão Cira de cesar
$(document).ready(function(){
  $(".on3").click(function(){
    $(".caixatexto3").css("visibility", "visible");
    $(".offset").css("visibility", "visible");
  });
});
$(document).ready(function(){
  $(".off3").click(function(){
    $(".caixatexto3").css("visibility", "hidden");
    $(".offset").css("visibility", "hidden");
  });
});

// atrela a atualização da pagina ao evento de click do botão reset
// por padrão apena o container 2 e 3 estão como none assim com este comando volta para o inicio do programa ativando o container 1 

$('.reset').click(function() {
  location.reload();
});       

//---------------------------------------------------------------------------- inclusão cifra de cesar

//Acessando as variaveis

const buttonCipher = document.getElementById("buttonCipher");
const buttonDecipher = document.getElementById("buttonDecipher");
buttonCipher.addEventListener("click", cipherTextReturn);
buttonDecipher.addEventListener("click", decipherTextReturn);

function cipherTextReturn(e) {
    //impede o recarregamento de caracteristicas padrões de navegador
     e.preventDefault()
    //lendo o valor do Numero incerido no input
     const offset = Number(document.getElementById("offset").value); 
    //  Pegando o valor da string da textarea
     const string = document.getElementById('text-insert').value; 
    //  parametros
     const resultCipher = cipher.encode(offset, string);    
     const shownResult = document.getElementById("result-show")
    // mensagem de erro
     let mensageError = 'Digite uma mensagem, e selecione um deslocamento.'
     
     window.scrollBy(0, window.innerHeight)
    //  Verificação da condição de erro, fazendo o comparativo das informações recebidas
     if (offset,string == null && offset,string == undefined && offset,string == 0){
       shownResult.classList.add('error');
      //  retorno do erro no html quando as caracteristicas acima forem true
       return shownResult.innerHTML = mensageError;
     }else {
      // Caso contrario retorne o resultado no html
     shownResult.classList.remove('error')
     shownResult.classList.add('result')
      //definindo o lugar (answers que esta no index.html) e colocando o resultado no HTML (innerHTML)
     return shownResult.innerHTML = resultCipher; 
     }
}
//  repetimos o processo mais agora para sescriptografar
function decipherTextReturn(e) {
    e.preventDefault();
    const offset = Number(document.getElementById("offset").value)
    const string = document.getElementById("text-insert").value
    const resultDecipher = cipher.decode(offset, string);
    const shownResult = document.getElementById("result-show")
    
    let mensageError = 'Digite uma mensagem, e selecione um deslocamento.'
      
    window.scrollBy(0, window.innerHeight)
    if (offset,string == null && offset,string == undefined && offset,string == 0){
      shownResult.classList.add('error');
      return shownResult.innerHTML = mensageError;
    } else {
    shownResult.classList.remove('error')
    shownResult.classList.add('result')
    return shownResult.innerHTML = resultDecipher;
    }
  }

//-----------------------Criando funções que ezecução a codificação---------------------

//Mensagem de erro 
const cipher = {
    encode: function (offset, string) {
      if (!offset) {
        throw new TypeError()     
      }
      //variavel da resposta
      let textCode = "";    
       //loop para continuar enquanto houver letras
      for (let i = 0; i < string.length; i++) {    
        //transforma o alfabeto padrao para o ASC (numero)
        let cifrar = string.charCodeAt(i);    
        //ler apenas de A a Z maiusculas
        if (cifrar >= 65 && cifrar <= 90) {   
          //calculo do deslocamento para cifrar
          textCode += String.fromCharCode((cifrar - 65 + offset) % 26 + 65);     
          //String.fromCharCode transforma o ASC em letra
          } else if (cifrar >= 97 && cifrar <= 122) {     // minusculas
          textCode += String.fromCharCode((cifrar - 97 + offset) % 26 + 97);
  
        } else{
          textCode += string.charAt(i);
        }
      }
      return textCode; //retorna o resultado da cifra
    },
  
    decode: function (offset, string) {
      if (!offset) { //negação ! 
        throw new TypeError();
      }
  
      let textDecode = "";
  
      for (let i = 0; i < string.length; i++) {
  
        let decifra = string.charCodeAt(i);
  
        if (decifra >= 65 && decifra <= 90) {
          textDecode += String.fromCharCode(((decifra + 65 - offset) % 26) + 65);
  
        } else if (decifra >= 97 && decifra <= 122) {
          textDecode += String.fromCharCode(
           ((decifra - 122 - offset) % 26) + 122); 
  
        } else { //pega todos os caracteres que não forem letra maiuscula ou minuscula
          textDecode += string.charAt(i); 
        }
      }
      return textDecode;
    },
};
