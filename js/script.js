let n = 0

function Carrosel(){
    if(n === 0){
        $('#imgCarrosel1').hide
        $('#imgCarrosel2').hide
        $('#imgCarrosel3').hide
        $('#imgCarrosel4').hide
        n+=1
    }else if(n === 1){
        $('#imgCarrosel1').show('slow')
        n+=1
    }else if(n === 2){
        $('#imgCarrosel2').show('slow')
        n+=1
    }else if(n === 3){
        $('#imgCarrosel3').show('slow')
        n+=1
    }else if(n === 4){
        $('#imgCarrosel4').show('slow')
        n+=1
    }else if(n === 5){
        $('#imgCarrosel1').hide('slow')
        $('#imgCarrosel2').hide('slow')
        $('#imgCarrosel3').hide('slow')
        $('#imgCarrosel4').hide('slow')
        n = 0
    }
}

setInterval(Carrosel, 2000)






//$(document).ready(function(){

//    $("#barras").click(function(){
  //      $("menu").toggleClass("#menu-ativo") //faz a mudança entre if e else. tudo que está no codigo abaixo.
    //})
//})

//$(document).ready(function(){
  //  $("#carrosel img:eq(0)").addClass("banner-ativo").show()

//})

//setInterval(slide,1000)
//function slide(){
    
  //  if($(".banner-ativo").next().lenght){
    //    $(".banner.ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    //}else{
      //  $(".banner-ativo").removeClass().hide()
        //$("#carrosel img:eq(0)").addClass("banner-ativo").show()
    //}
    //}
    //setInterval(slide,1000)

      // if($("#menu").hasClass("#menu-ativo")){
       //     $("menu").removeClass("#menu-ativo")
      // }else{
       //    $("#menu").addClass("menu-ativo")
   //    }
   // })
//})
//function mostrarPopup(){
   // window.alert( "Fala Gamer!!!")
//}

let email = document.getElementById("campo-email");

function enviarEmail(){
let emailDigitado = email.value;
console.log(emailDigitado)
}
