const { boatInventory } = require("./fishingBoat.js");

const mongerInventory = (maxPrice) => {
  const availableFish = boatInventory();
  const mongerFish = [];
  const chefFish = [];

  for (fish of availableFish) {
    if (fish.price <= 7.5 && fish.amount > 9) {
      mongerFish.push(fish);
    }
  }

  for (fish of mongerFish) {
    if (fish.price <= maxPrice) {
      fish.amount = fish.amount / 2;
      chefFish.push(fish);
    }
  }
  return chefFish;
};

module.exports = { mongerInventory };
