$('#btn').click(function(e){
    e.preventDefault();

    var u_nome = $('#inputNome').val();
    if (u_nome == 'BomBom' || u_nome == 'bombom') {
      Swal.fire({
          title: 'Parabens você acertou a charada! Sua recompensa é',
          text: '01010110 01101111 01100011 11101010',
          icon: 'success',
      });
    } else {
        Swal.fire({
          title: 'Tente de novo!!',
          text: 'Ta quase lá',
          icon: 'error',
      });
    }
    console.log(u_nome);

    // $.ajax({
    //     url: base_url + '/php/inserir.php',
    //     method: 'POST',
    //     data: {name: u_nome, email:u_email, telefone:u_telefone, mensagem:u_msg},
    //     dataType: 'json'
    // }).done(function(result){
    //     Swal.fire({
    //         title: 'Agradecemos o contato e responderemos em breve!',
    //         text: 'Clique no botão para fechar a solicitação',
    //         icon: 'success',
    //     })

    //     $('#inputNome').val('');
    //     $('#inputEmail').val('');
    //     $('#inputTelefone').val('');
    //     $('#inputTextarea').val('');
    //     //console.log(result);

    // });

});