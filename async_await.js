let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

// async&await

async function kitchen() {
  try {
    // time taken to perform this 1 task
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop closed");
  }
}

kitchen();
