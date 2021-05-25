// Вторая секция
$(function () {
    $(window).scroll(function () {
        $('.capabilities').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeftBig");
            }
        });
    });
    $(window).scroll(function () {
        $('.one').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInDown");
            }
        });
    });
    $(window).scroll(function () {
        $('.two').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
    $(window).scroll(function () {
        $('.three').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});

// Третья секция
$(function () {
    // $(window).scroll(function () {
    //     $('.capabilities').each(function () {
    //         var imagePos = $(this).offset().top;

    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow + 650) {
    //             $(this).addClass("flipInX");
    //         }
    //     });
    // });
    $(window).scroll(function () {
        $('.input').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeftBig");
            }
        });
    });
});
//    Нажатие на кнопку
const btn = document.getElementById('btn');

btn.onclick = function (e) {
	e.preventDefault();
	const text = document.querySelector('p.intro');
	text.classList.add('colorText');
	}

