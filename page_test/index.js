
let menuToggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        menuToggle.onclick = function () {
            menuToggle.classList.toggle("active");
            navigation.classList.toggle("active");
        }

        // change image on click
        function imgSlider(anything) {
            document.querySelector(".fruits").src = anything
        }

        //change background color
        function changeBgColor(color) {
            const bg = document.querySelector('.bg');
            bg.style.background = color;
        }

        // add active class in selected thumbnails
        let el = document.querySelectorAll(".thumb li");
        for (let i = 0; i < el.length; i++) {
            el[i].onclick = function () {
                var c = 0;
                while (c < el.length) {
                    el[c++].className = "check";
                }
                el[i].className = "check active";
            }
        }

        $(document).ready(function () {
            $('.navigation li a').click(function (e) {

                $('.navigation li a').removeClass('active');

                var $this = $(this);
                if (!$this.hasClass('active')) {
                    $this.addClass('active');
                }
            });
        });

        const texts = [
            "Este é o texto da seção maçã", 
            "Este é o texto da seção manga", 
            "Este é o texto da seção melancia", 
            "Este é o texto da seção pitaia", 
            "Este é o texto da seção abacaxi"
        ]

        function getTexto(index) {
            return texts[index]
        }

        function placeText(valor) {
            document.getElementById("texto").innerHTML = getTexto(valor)
        }

        const titles = [
            "Este é o título da seção maçã",
            "Este é o título da seção manga",
            "Este é o título da seção melancia",
            "Este é o título da seção pitaia",
            "Este é o título da seção abacaxi"
        ]

        function getTitle(index) {
            return titles[index]
        }

        function placeTitle(valor) {
            document.getElementById("title").innerHTML = getTitle(valor)
        }

        let tl= gsap.timeline({
            scrollTrigger: {
                trigger: "#section_2",
                start: "top 90%",
                end: "bottom 90%",
                scrub: true,

            }
        });

        tl.from("#img_2", { x: 800, opacity: 0.6, duration: 1})
tl.from(".title_2", { x: -800, duration: 0.6}, "-=-2")
tl.from(".text_2", { scale: 0.3, duration: 0.6}, "-=-2")
        
        let at = gsap.timeline({
            scrollTrigger: {
                trigger: "#section_3",
                start: "top bottom",
                end: "bottom 80%",
                scrub: true
            }
        });

        at.from("#img_3", { scale: 0.5, opacity: 0.6, duration: 0.8})
        at.from(".title_3", { y: -600, duration: 0.6}, "-=-2")
        at.from(".text_3", { scale: 0.4, duration: 0.6}, "-=-2")


        
        
        