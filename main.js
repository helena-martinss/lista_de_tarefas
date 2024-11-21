$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');

        $(`<p>${nomeTarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nome-tarefa').val('');
        
        $('ul li').click(function() {
            $(this).toggleClass('line-through');
        })    
    })
})