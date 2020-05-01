import {
    DOMElements
} from "../data/DOMElements";

class StartGame {
    constructor() {}

    moveMenuUp() {
        document.querySelector("body").style.overflowY = "hidden";
        anime({
            targets: DOMElements.startBoard,
            translateY: [0, -1200],
            duration: 800,
        });

        DOMElements.conteiner.classList.add("show");
    }
}

class ButtonsOnHoverCursor {
    constructor() {}

    buttonsOnHoverCursor() {
        //animation on hover
        DOMElements.buttons = document.querySelectorAll("button");
        DOMElements.buttons.forEach((btn) => {
            btn.addEventListener("mousemove", function (e) {
                const x = e.pageX;
                const y = e.pageY;

                DOMElements.overlay.style.left = x + "px";
                DOMElements.overlay.style.top = y + "px";
                DOMElements.overlay.classList.add("show");
            });

            btn.addEventListener("mouseleave", () =>
                DOMElements.overlay.classList.remove("show")
            );
        });
    }
}

export {
    StartGame,
    ButtonsOnHoverCursor
};