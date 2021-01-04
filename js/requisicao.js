$(document).ready(function(){
    $("#buscaCEP").click(function(){
       var cep =  $("input[name=c_cep]").val();
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            type: "GET",
            success: function(response){
                if(response.erro != true){
                    $("#cep").html(`<p>
                        Logradouro: ${response.logradouro}<br>
                        Bairro: ${response.bairro}<br>
                        Localidade: ${response.localidade}<br>
                        UF: ${response.uf}
                    </p>`);
                }else{ this.error(); }
            },error: function() {
                $("#cep").val('');
                $("#cep").html(`<p>Não encontrado!</p>`);
            }
        });
    });
});
