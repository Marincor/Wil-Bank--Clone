( () => { const Slider = () => {
  const slider = document.querySelector("[data-slider__conteudo]");
  const botaoEsquerdo = document.querySelector("[data-botao__esquerdo]");
  const botaoDireito = document.querySelector("[data-botao__direito]");

  const lista = [firstImage, secondImage, thirdImage];

  slider.innerHTML = lista[0];

  botaoEsquerdo.addEventListener("click", tarefaBotaoEsquerdo);
  botaoDireito.addEventListener("click", tarefaBotaoDireito);

  function tarefaBotaoEsquerdo() {
    if (slider.innerHTML == lista[0]) {
      lista.map((item) => {
        slider.innerHTML = lista[2];
      });
    } else if (slider.innerHTML == lista[2]) {
      lista.map((item) => {
        slider.innerHTML = lista[1];
      });
    } else {
      lista.map((item) => {
        slider.innerHTML = lista[0];
      });
    }
  }

  function tarefaBotaoDireito() {
    if (slider.innerHTML == lista[0]) {
      lista.map((item) => {
        slider.innerHTML = lista[1];
      });
    } else if (slider.innerHTML == lista[1]) {
      lista.map((item) => {
        slider.innerHTML = lista[2];
      });
    } else {
      lista.map((item) => {
        slider.innerHTML = lista[0];
      });
    }
  }





};

const firstImage = `<a href="/"><img src="./assets/IMG/img1.png" alt="" class="image1 slider__image"></a>`;

const secondImage = `<a href="/"><img src="./assets/IMG/img2.png" alt="" class="image2 slider__image"></a>`;

const thirdImage = `<a href="/"><img src="./assets/IMG/img3.png" alt="" class="image3 slider__image"></a>`;

Slider();
 } ) ()



