// document.addEventListener('DOMContentLoaded', function(){
//     //recuperando o botão
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
//         // AJAX - Asynchronous Javascript and XML
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         //montar a chamada http - chamada do AJAX
//         xhttp.open('GET', endpoint);
//         xhttp.send();
    

        
//     })
// })

// Escrevendo o mesmo trecho de código acima com o JQuery
$(Document).ready(function() {
    $('#cep').mask('00000-000')

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this)

        // condição do botão de lupa -- passar o $(this) é a mesma coisa que: $('#btn-buscar-cep')
        $(botao).find('i').addClass('d-none')
        $(botao).find('span').removeClass('d-none')

        // fazendo a chamada
        $.ajax(endpoint).done(function(resposta) {
            console.log(resposta)
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco)

            // adicionando um tempo para ver a animação
            setTimeout(function() {
                $(botao).find('i').removeClass('d-none')
                $(botao).find('span').addClass('d-none')
            }, 1000);

        })
    })
})