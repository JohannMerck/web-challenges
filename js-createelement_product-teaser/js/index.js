console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const name2 = "Anemonefish";
const price2 = "15,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const article2 = document.createElement("article");
article2.innerHTML = `  <article class="product">
      <div class="product__body">
        <div class="product__text-container">
          <h2 class="product__name">Queen angelfish</h2>
          <ul class="product__categories">
            <li class="product__category">Freshwater</li>
            <li class="product__category">Large aquarium</li>
            <li class="product__category">Planktion Diet</li>
          </ul>
          <p class="product__description">
          ${description}
          </p>
        </div>
        <div class="product__image-container">
          <img
            class="product__image"
            src="https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640"
            alt=""
          />
        </div>
      </div>
      <footer class="product__footer">
        <span class="product__price">149,99 €</span>
        <button type="button" class="product__buy-button" data-js="secondKauf">Buy</button>
      </footer>
    </article>`;

document.body.append(article2);

const secondBuyButton = document.querySelector('[data-js="secondKauf"]');

secondBuyButton.addEventListener("click", () => {
  console.log(name, price);
});

const firstBuyButton = document.querySelector('[data-js="firstKauf"]');

firstBuyButton.addEventListener("click", () => {
  console.log(name2, price2);
});
