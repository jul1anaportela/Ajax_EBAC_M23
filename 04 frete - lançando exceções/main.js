$(Document).ready(function() {
    $('#cep').mask('00000-000')

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        //const endpoint = `https://viacep.com.br/ws/${cep}/json/resposta`; //adicionando erro para fazer tratamento
        const botao = $(this)

        // condição do botão de lupa -- passar o $(this) é a mesma coisa que: $('#btn-buscar-cep')
        $(botao).find('i').addClass('d-none')
        $(botao).find('span').removeClass('d-none')

        // fazendo a chamada
        fetch(endpoint)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
        })
        .catch(function(erro){
            alert(erro)
        })
        .finally(function() {
            setTimeout(function() {
                $(botao).find('i').removeClass('d-none')
                $(botao).find('span').addClass('d-none')
            }, 1000)
        })
    })

    // Lançando Exceções
    $('#fomulario-pedido').submit(function(evento){
        evento.preventDefault();

        if ($('#nome').val().length == 0) {
            throw new Error('O campo nome não pode ficar vazio');
        }
    })
})