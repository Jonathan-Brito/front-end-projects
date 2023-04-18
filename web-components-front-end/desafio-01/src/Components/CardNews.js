class CardNews extends HTMLElement {
    construtor(){
        super();

        const shadow = this.attachShadow({mode: "open" });
        shadow.innerHTML = "<h1>Hello World</h1>";
    }
}

customElements.define("card-news", CardNews);