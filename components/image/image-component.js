class ImageComponent extends HTMLElement {
  static get observedAttributes() {
    return ["tag", "source", "subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <img id="${this.tag}" src="${this.source}" alt="${this.subtitle}">
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        max-width: 100%;
        margin: 20px auto;
        text-align: center;
      }

      :host([size="small"]) {
        max-width: 40%;
      }

      :host([size="medium"]) {
        max-width: 60%;
      }

      :host([size="large"]) {
        max-width: 85%;
      }

      img {
        width: 100%;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("image-component", ImageComponent);
