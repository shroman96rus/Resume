// let slideIndex = 1;
// showSlides(slideIndex);

document.querySelectorAll(".portfolio-item__slideshow-container").forEach(element => {
    element.querySelectorAll(".slideshow-container__mySlides")[0].classList.add("slide-visible");
});
document.querySelectorAll(".portfolio-item__dots").forEach(element => {
    element.querySelectorAll(".dots__dot")[0].classList.add("active");
});

function EditDetails(e, currslider) {
    let details = e.target.closest(".content-flex__portfolio-item").querySelector(".portfolio-item__details");
    let detailsTitle = details.querySelector(".details__title").innerText = currslider.querySelector(".mySlides__text").innerText;
    let detailcontent = details.querySelector(".details__content");
    // console.log(details)
    // console.log(detailsTitle)
    // console.log(detailcontent)
    switch (detailsTitle) {
        case "Мониторинг аварий":
            detailcontent.innerText = "Мониторинг аварий позволяет в режиме реального времени просматривать аварии на БС. Информация отображается в табличном виде и может быть отфильтрована по технологиям. Также сверху присутствует строка поиска.";
            break;
        case "Работа с оптимизациями":
            detailcontent.innerText = "При помощи библиотеки Selenium Web Driver программа позволяет создать заявку на оптимизацию. При этом создается скриншот задания, парсится текст задания, далее заявка создается на сайте NOC и отправляется письмо на эл. почту с описанием задания и прикрепленном скриншоте из задания";
            break;
        case "Детальный просмотр статуса аварий":
            detailcontent.innerText = "Позволяет отображать статус работы секторов, тип и серийный номер RRU смонтированных на БС, температуру на TCU, а также адресс БС, информацию по допуску и данные арендодателя на выбранной БС. Также к данной странице программы есть доступ из меню Справочник БС";
            break;
        case "Подключение к BaseBand по SSH":
            detailcontent.innerText = "Осуществляет подключение к выбранному BB и позволяет как выводить информацию по секторам так и вводить комманды через предоставленное поле ввода. Также присутствуют горячие клавиши для наиболее часто использующихся комманд";
            break;
        case "Закрытие заявок TT в системе Servise Desk":
            detailcontent.innerText = "При помощи библиотеки Selenium Web Driver осуществляется подключение к Servise Desk. Затем выбрав перечень заявок необходимых для закрытия, программа в автоматическом режиме пытается закрыть каждую из них";
            break;
        case "Формарование отчета по закрытым авариям":
            detailcontent.innerText = "Программа позволяет сформировать отчет за выбранный период времени, на выбранных БС, отображающий все аварии, которые были на выбранных БС за выбранный промежуток времени. Отчет формируется в формате CVS ";
            break;
        case "Создание заявки для РТК в системе NOC":
            detailcontent.innerText = "При помощи библиотеки Selenium Web Driver программа позволяет создать и отправить заявку в РТК. Для удобства пользователя реализована возможность выбрать тип заявки (АВР по умолчанию, ППР при выборе соответствующего флага), также в окне создания заявки отображается все активные аварии на БС, а также перечень дополнительных работ если таковые есть";
            break;

        default:
            break;
    }


}

document.querySelector('.portfolio__content-flex').addEventListener('click', function(e) {

    if (e.target.className.includes('slideshow-container__prev')) {
        let sliders = e.target.parentNode.querySelectorAll(".slideshow-container__mySlides");
        let dots = e.target.parentNode.querySelectorAll(".dots__dot");
        //console.log(e.currentTarget.parentNode);
        for (let i = 0; i < sliders.length; i++) {
            if (sliders[i].className.includes("slide-visible")) {
                sliders[i].classList.remove("slide-visible");

                if (i < 1) {
                    sliders[sliders.length - 1].classList.add("slide-visible");
                    dots[sliders.length - 1].classList.add('active');
                    dots[i].classList.remove('active');
                    EditDetails(e, sliders[sliders.length - 1]);
                    return;
                }
                if (i > 0 && i < sliders.length) {
                    sliders[i - 1].classList.add("slide-visible");
                    dots[i - 1].classList.add('active');
                    dots[i].classList.remove('active');
                    EditDetails(e, sliders[i - 1]);
                    return;
                }
            }
        }
    }

    if (e.target.className.includes('slideshow-container__next')) {
        let sliders = e.target.parentNode.querySelectorAll(".slideshow-container__mySlides");
        let dots = e.target.parentNode.querySelectorAll(".dots__dot");
        //console.log(e.currentTarget.parentNode);
        for (let i = 0; i < sliders.length; i++) {
            if (sliders[i].className.includes("slide-visible")) {
                sliders[i].classList.remove("slide-visible");

                if (i >= sliders.length - 1) {
                    sliders[0].classList.add("slide-visible");
                    dots[0].classList.add('active');
                    dots[i].classList.remove('active');
                    EditDetails(e, sliders[0]);
                    return;
                } else {
                    sliders[i + 1].classList.add("slide-visible");
                    dots[i + 1].classList.add('active');
                    dots[i].classList.remove('active');
                    EditDetails(e, sliders[i + 1]);
                }
                return;
            }
        }
    }

    if (e.target.className.includes('dots__dot')) {
        let sliders = e.target.parentNode.parentNode.querySelectorAll(".slideshow-container__mySlides");
        const choiseSlider = e.target.getAttribute("number");
        const choiseDots = e.target.parentNode.querySelectorAll('.dots__dot');

        for (let i = 0; i < sliders.length; i++) {
            if (sliders[i].className.includes("slide-visible")) {
                sliders[i].classList.remove("slide-visible");
                sliders[choiseSlider - 1].classList.add("slide-visible");
                e.target.classList.add('active');
                choiseDots[i].classList.remove('active');
                EditDetails(e, sliders[choiseSlider - 1]);
                return;
            }
        }
    }

    if (e.target.localName == "img") {
        document.querySelector("body").classList.add("body-block");
        document.querySelector(".image-modal").classList.add("image-modal--active");

        let gettingImages = e.target.cloneNode(true);
        console.log(gettingImages);
        let divImageModal = document.createElement("div");
        divImageModal.className = "image-modal__slideshow";
        divImageModal.append(gettingImages);
        document.querySelector(".image-modal__content").append(divImageModal);

    }


});

document.querySelector('.image-modal__wrap').addEventListener('click', function(e) {

    if (e.target.className == "image-modal__wrap" || e.target.className == "image-modal__close") {
        document.querySelector("body").classList.remove("body-block");
        document.querySelector(".image-modal").classList.remove("image-modal--active");
        document.querySelector(".image-modal__content div").remove();
    }
});