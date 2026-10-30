```javascript
document.addEventListener("DOMContentLoaded", function () {
    // MENU PARA CELULAR
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("open");

            const menuAberto = navbar.classList.contains("open");

            menuToggle.setAttribute("aria-expanded", String(menuAberto));
            menuToggle.textContent = menuAberto ? "✕" : "☰";
        });

        // Fecha o menu depois de clicar em um link
        const linksMenu = navbar.querySelectorAll("a");

        linksMenu.forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            });
        });
    }

    // ANIMAÇÃO DOS ELEMENTOS AO APARECER NA TELA
    const elementosAnimados = document.querySelectorAll(
        ".instrument-card, .part-card, .fact-box, .comparison-card"
    );

    const movimentoReduzido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if ("IntersectionObserver" in window && !movimentoReduzido) {
        elementosAnimados.forEach(function (elemento) {
            elemento.classList.add("reveal");
        });

        const observador = new IntersectionObserver(
            function (entradas, observer) {
                entradas.forEach(function (entrada) {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visible");
                        observer.unobserve(entrada.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        elementosAnimados.forEach(function (elemento) {
            observador.observe(elemento);
        });
    }

    // DESTACA O LINK DA SEÇÃO ATUAL NO MENU
    const secoes = document.querySelectorAll("main section[id]");
    const linksNavegacao = document.querySelectorAll(
        '#navbar a[href^="#"]'
    );

    if ("IntersectionObserver" in window && secoes.length > 0) {
        const observadorSecoes = new IntersectionObserver(
            function (entradas) {
                entradas.forEach(function (entrada) {
                    if (entrada.isIntersecting) {
                        const idSecao = entrada.target.id;

                        linksNavegacao.forEach(function (link) {
                            const destino = link.getAttribute("href");

                            if (destino === "#" + idSecao) {
                                link.classList.add("active");
                            } else {
                                link.classList.remove("active");
                            }
                        });
                    }
                });
            },
            {
                rootMargin: "-30% 0px -60% 0px"
            }
        );

        secoes.forEach(function (secao) {
            observadorSecoes.observe(secao);
        });
    }

    // ANO AUTOMÁTICO NO RODAPÉ, CASO EXISTA O ELEMENTO
    const anoAtual = document.getElementById("ano-atual");

    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }

    console.log("DARK MUSIC carregado com sucesso!");
});
```