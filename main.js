$(document).ready(function(){

    caixaDesmarcada = 'caixa_desmarcada.png'
    caixaMarcada = 'caixa_marcada.png'

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');

        $(`<img class="imagem-caixa" src="caixa_desmarcada.png" alt="Caixa desmarcada"><span class="word">${nomeTarefa}</span>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nome-tarefa').val('');
    });

    $('ul').on('click', '.imagem-caixa', function() {
        var currentSrc = $(this).attr('src');
        if (currentSrc == caixaDesmarcada) {
            $(this).attr('src', caixaMarcada);
            $(this).siblings('.word').addClass('line-through');
        } else {
            $(this).attr('src', caixaDesmarcada);
            $(this).siblings('.word').removeClass('line-through');
        }

    });
});