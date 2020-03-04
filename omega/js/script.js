"use strict";
//Funçao inicializadora
//(Não obrigatoria quando no fim da pagina)
   // $(document).ready(function(){

        // ativar o slider
        $(".slider").slick({
            autoplay:true,
            autoplaySpeed: 4500,
            arrows:false,
            dots:true
        });


   // });

   $("#telefone").mask("(00) 0000-0000")


/* script para o contador de caracteres */
var spanMaximo=$("#maximo");
var bCaracteres=$("#caracteres")
var textMensagem=$("#mensagem")

//determinando a qtd de caracteres
var quantidade = 300

//evento para detectar entrada (digitaçao) no campo
textMensagem.on("input",function(){
    // Captura em tempo real
    // console.log(textMensagem.val())
    var conteudo= textMensagem.val();
//criando contagem regressiva
    var contagem = quantidade - conteudo.length
    console.log(contagem)

    bCaracteres.text(contagem);

    if(contagem ==0){
        spanMaximo.css("color","red")
    } else{
        spanMaximo.css("color","black")
    }
})

