const foods = [
  {
    _id: "5f82ff8e26ddee1464e11ee1",
    name: "Burger",
    price: 80,
    category: {
      _id: "5f6c9ad2e31dcd10b875aefb",
      name: "FastFood",
      __v: 0,
    },
    productImage: "http://localhost:3002/uploads/burger.jpg",
    __v: 0,
  },
  {
    _id: "5f82ffba26ddee1464e11ee2",
    name: "Pizza",
    price: 120,
    category: {
      _id: "5f6c9ad2e31dcd10b875aefb",
      name: "FastFood",
      __v: 0,
    },
    productImage: "http://localhost:3002/uploads/pizza_fresca.jpg",
    __v: 0,
  },
  {
    _id: "5f82ffe326ddee1464e11ee3",
    name: "Family Combo",
    price: 350,
    category: {
      _id: "5f6c9ad2e31dcd10b875aefb",
      name: "FastFood",
      __v: 0,
    },
    productImage: "http://localhost:3002/uploads/family pac.jpg",
    __v: 0,
  },
  {
    _id: "5f83003026ddee1464e11ee4",
    name: "Chicken Pi",
    price: 350,
    category: {
      _id: "5f6c9ad2e31dcd10b875aefb",
      name: "FastFood",
      __v: 0,
    },
    productImage: "http://localhost:3002/uploads/chicken pi.jpg",
    __v: 0,
  },
  {
    _id: "5f83005a26ddee1464e11ee5",
    name: "French Fry",
    price: 50,
    category: {
      _id: "5f6c9ad2e31dcd10b875aefb",
      name: "FastFood",
      __v: 0,
    },
    productImage: "http://localhost:3002/uploads/french fry.jpg",
    __v: 0,
  },
  {
    _id: "5f83009e26ddee1464e11ee6",
    name: "Chicken Fry",
    price: 50,
    category: {
      _id: "5f6c9ad2e31dcd10b875aefb",
      name: "FastFood",
      __v: 0,
    },
    productImage: "http://localhost:3002/uploads/chicken fry.jpg",
    __v: 0,
  },
  {
    _id: "5f8300b826ddee1464e11ee7",
    name: "Couple Combo",
    price: 50,
    category: {
      _id: "5f6c9ad2e31dcd10b875aefb",
      name: "FastFood",
      __v: 0,
    },
    productImage: "http://localhost:3002/uploads/full combo.jpg",
    __v: 0,
  },
  {
    _id: "5f8300d026ddee1464e11ee8",
    name: "Hot Dog",
    price: 80,
    category: {
      _id: "5f6c9ad2e31dcd10b875aefb",
      name: "FastFood",
      __v: 0,
    },
    productImage: "http://localhost:3002/uploads/hot dog.jpg",
    __v: 0,
  },
];

export function getFoods() {
  return foods;
}
