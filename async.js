let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

// async

async function kitchen() {
  try {
    // fake problem
    await abc;
  } catch (error) {
    console.log("abc does not exist");
  } finally {
    console.log("Runs code anyways");
  }
}

kitchen();
