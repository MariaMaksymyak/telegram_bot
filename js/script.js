
// https://api.telegram.org/botTOKEN/getUpdates


$('#button').on('click', function(e){
    e.preventDefault();
    let name = $('#name').val().trim();
    let email = $('#email').val().trim();

    if(name == ""){
        $('#error-name').text('Enter your name');
        return false
    }else if(email == ""){
        $('#error-email').text('Enter your email');
        return false

    }
    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'email': email, 'name': name}, 
        dataType: 'html',
        beforeSend: function(){
            $('#button').prop('disabled', true)
        },
        success: function(){

            $('.modal-overlay').fadeIn();
                 $('#name').val('');
            $('#email').val('');
            $('#error-email').text('');
            $('#error-name').text('');
            $('#button').prop('disabled', false)
        }
    })
})