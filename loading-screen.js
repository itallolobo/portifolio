$(document).ready(function() {
    var $images = $('.loading-screen').children('img');
    console.log($images);
    var index = 0;

    // Ocultar todas as imagens inicialmente e definir a posição inicial
    //remove hide class from all images
    $images.removeClass("hide");
    $images.hide().css({
        top: '55%', // Definir a posição inicial para 55%
        opacity: 0 // Definir a opacidade inicial para 0
    });
    function animateImage() {
        $($images[index]).css('top', '55%').show().animate({
            top: '50%', // Mover para a posição original
            opacity: 1 // Efeito de fade-in
        }, 800, 'swing', function() { // Usar 'swing' para um efeito suave
            setTimeout(function() {
                $($images[index]).animate({
                    opacity: 0 // Efeito de fade-out
                }, 500, 'swing', function() { // Usar 'swing' para um efeito suave na saída
                    $(this).hide(); // Ocultar a imagem após a animação
                    index = (index + 1) % $images.length;
                    if (!window.global["isLoaded"]) {
                        setTimeout(animateImage, 200); // Esperar 200ms antes de mostrar a próxima imagem
                    } else {
                        //fade out da tela de loading
                        $(".loading-screen").fadeOut(500, 'swing'); // Adicionando 'swing' ao fade out da tela de loading
                    }
                });
            }, 200); // Tempo visível na tela
        });
    }

    // Iniciar a animação da primeira imagem
    animateImage();
});
