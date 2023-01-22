// fonte https://github.com/Fefeprogrammer/Criptografia

// quando a pagina carregar execute o comando abaixo atraves do evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){

    let codar = document.querySelector('#encript').addEventListener('click', function(){
        let texto = document.querySelector('#texto').value
        document.querySelector('#resultado').innerHTML = Encrypt(texto)
    })

    let decodar = document.querySelector('#decrypt').addEventListener('click', function(){
        let texto = document.querySelector('#texto').value
        document.querySelector('#resultado').innerHTML = Decrypt(texto)
    })


    function Encrypt(txt){
        let dec = btoa(txt)
        return dec
    }

    function Decrypt(txt){
        let dec = atob(txt)
        return dec
    }

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

    
})

// window.onload = () => {
//     document.getElementById('cypher').disabled = true;
//     document.getElementById('decypher').disabled = true;
  
//     document.getElementById('message-box').addEventListener('input', () => {
//       enableButtons(); 
//       addTextAreaRows();
//       clearResults();
//     });
//     document.getElementById('cypher').addEventListener('click', cypher);
//     document.getElementById('decypher').addEventListener('click', decypher);
//   };
  
//   const enableButtons = () => {
//     if (getMessage().trim().length !== 0) {
//       document.getElementById('cypher').disabled = false;
//       document.getElementById('decypher').disabled = false;
//     } else {
//       document.getElementById('cypher').disabled = true;
//       document.getElementById('decypher').disabled = true;
//     }
//   };
  
//   const addTextAreaRows = () => {
//     const txtArea = document.getElementById('message-box');
//     txtArea.style.height = '8vh';
//     txtArea.style.height = txtArea.scrollHeight + 'px';
//   };
  
//   const clearResults = () => {
//     if (document.getElementById('p-group')) 
//       document.getElementById('results').removeChild(document.getElementById('p-group'));
//   };
  
//   const cypher = () => {
//     const cypheredCharCodes = cypherCharcodes(getCharcodesFromMessage());
//     const resultMessage = transformIntoLetters(cypheredCharCodes);
//     const method = 'criptografada';
//     showResultOnPage(resultMessage, method);
//     clearTextArea();
//   };
  
//   const decypher = () => {
//     const decypheredCharCodes = decypherCharcodes(getCharcodesFromMessage());
//     const resultMessage = transformIntoLetters(decypheredCharCodes);
//     const method = 'descriptografada';
//     showResultOnPage(resultMessage, method);
//     clearTextArea();
//   };
  
//   const getMessage = () => document.getElementById('message-box').value;
//   const getCharcodesFromMessage = () => getMessage().split('').map(val => val.charCodeAt());
  
//   const cypherCharcodes = charcodesArray => charcodesArray.map((charCode, i) => {
//     if (charCode > 47 && charCode < 58) {
//       charCode = (charCode - 48 + 33) % 10 + 48;
//     } else if (charCode > 64 && charCode < 91) {
//       charCode = (charCode - 65 + 33) % 26 + 65;
//     } if (charCode > 96 && charCode < 192) {
//       charCode = (charCode - 97 + 33) % 26 + 97;
//     } else if (charCode > 191 && charCode < 222) {
//       charCode = (charCode - 192 + 33) % 30 + 192;
//     } else if (charCode > 221 && charCode <= 255) {
//       charCode = (charCode - 222 + 33) % 34 + 222;
//     } 
//     return charCode;
//   });
  
//   const decypherCharcodes = charcodesArray => charcodesArray.map((charCode, i) => {
//     if (charCode > 47 && charCode < 58) {
//       charCode = (charCode - 57 - 33) % 10 + 57;
//     } else if (charCode > 64 && charCode < 91) {
//       charCode = (charCode - 90 - 33) % 26 + 90;
//     } else if (charCode > 96 && charCode < 192) {
//       charCode = (charCode - 122 - 33) % 26 + 122;
//     } else if (charCode > 191 && charCode < 222) {
//       charCode = (charCode - 221 - 33) % 30 + 221;
//     } else if (charCode > 221 && charCode <= 255) {
//       charCode = (charCode - 255 - 33) % 34 + 255;
//     }
//     return charCode;
//   });
  
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

// -----------------------------------liga e desliga padrão 16 bits
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
// atualiza a pagina para voltar a tela inicial 
$('.reset').click(function() {
  location.reload();
});       

//---------------------------------------------------------------------------- inclusão cifra de cesar
//Pegando a interação com o botão CIFRA


const buttonCipher = document.getElementById("buttonCipher");
const buttonDecipher = document.getElementById("buttonDecipher");

buttonCipher.addEventListener("click", cipherTextReturn);
buttonDecipher.addEventListener("click", decipherTextReturn);

function cipherTextReturn(e) {
     e.preventDefault() //impede o recarregamento auto da página
     const offset = Number(document.getElementById("offset").value); //lendo o valor do Numero do input
     const string = document.getElementById('text-insert').value; //lendo o valor string da textarea
     const resultCipher = cipher.encode(offset, string);    
     const shownResult = document.getElementById("result-show")

     let mensageError = 'Digite uma mensagem, e selecione um deslocamento.'
     
     window.scrollBy(0, window.innerHeight)
     if (offset,string == null && offset,string == undefined && offset,string == 0){
       shownResult.classList.add('error');
       return shownResult.innerHTML = mensageError;
     }else {
     shownResult.classList.remove('error')
     shownResult.classList.add('result')
     return shownResult.innerHTML = resultCipher; //definindo o lugar (answers que esta no index.html) e colocando o resultado no HTML (innerHTML)
     }
}
 
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

//------------------------------------------------------------------------------------------ cipher.js
const cipher = {
    encode: function (offset, string) {
      if (!offset) {
        throw new TypeError()     //Mensagem de erro 
      }
  
      let textCode = "";    //variavel da resposta
  
      for (let i = 0; i < string.length; i++) {     //loop para continuar enquanto houver letras
  
        let cifrar = string.charCodeAt(i);    //transforma o alfabeto padrao para o ASC (numero)
  
        if (cifrar >= 65 && cifrar <= 90) {   //ler apenas de A a Z maiusculas
          textCode += String.fromCharCode((cifrar - 65 + offset) % 26 + 65);     //calculo do deslocamento para cifrar
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
