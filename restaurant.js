const { mongerInventory } = require("./fishMonger.js");

const fishMenu = (maxPrice) => {
  const chefFish = mongerInventory(maxPrice);

  const formattedItems = chefFish.map(
    (fish) => `<h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>`,
  );
  const menuItems = `<h1>Menu</h1>
<article class="menu">
    ${formattedItems.join(`\n\n    `)}
</article>`;

  return menuItems;
};

module.exports = { fishMenu };
