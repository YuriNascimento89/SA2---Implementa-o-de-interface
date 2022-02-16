$(document).ready(function(){

    $("#barras").click(function(){
        $("menu").toggleClass("#menu-ativo") //faz a mudança entre if e else. tudo que está no codigo abaixo.
    })
})

$(document).ready(function(){
    $("#carrosel img:eq(0)").addClass("banner-ativo").show()

})

setInterval(slide,1000)
function slide(){


    if($(".banner-ativo").next().lenght){
        $(".banner.ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-ativo").removeClass().hide()
        $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    }
    }

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
