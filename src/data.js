let watches = [
  {
    title: "BGD565KRS-7",
    img: "watch-1.png",
    price: 120,
    quantity: 0,
    id: 0,
  },
  {
    title: "EFB700D-2AV",
    img: "watch-2.png",
    price: 129,
    quantity: 0,
    id: 1,
  },
  {
    title: "EFB108D-1AV",
    img: "watch-3.png",
    price: 129,
    quantity: 0,
    id: 2,
  },
  {
    title: "EFB108D-7AV",
    img: "watch-4.png",
    price: 149,
    quantity: 0,
    id: 3,
  },
];

export function getItems() {
  return watches;
}

export function increaseQuantity(id) {
  watches[id].quantity += 1;
}

export function decreaseQuantity(id) {
  watches[id].quantity -= 1;
}
