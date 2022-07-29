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
  {
    title: "GMB2100GD-5A",
    img: "watch-5.png",
    price: 600,
    quantity: 0,
    id: 4,
  },
  {
    title: "GA2100HUF-5A",
    img: "watch-6.png",
    price: 140,
    quantity: 0,
    id: 5,
  },
  {
    title: "GMWB5000TVB1",
    img: "watch-7.png",
    price: 1700,
    quantity: 0,
    id: 6,
  },
  {
    title: "MRGB5000BA-1",
    img: "watch-8.png",
    price: 4000,
    quantity: 0,
    id: 7,
  },
  {
    title: "GBD200UU-9",
    img: "watch-9.png",
    price: 150,
    quantity: 0,
    id: 8,
  },
  {
    title: "GA2100NN-1A",
    img: "watch-10.png",
    price: 140,
    quantity: 0,
    id: 9,
  },
  {
    title: "GA2100SR-1A",
    img: "watch-11.png",
    price: 120,
    quantity: 0,
    id: 10,
  },
  {
    title: "GA2100SRS-7A",
    img: "watch-12.png",
    price: 130,
    quantity: 0,
    id: 11,
  },
  {
    title: "GA2100BWP-2A",
    img: "watch-13.png",
    price: 140,
    quantity: 0,
    id: 12,
  },
  {
    title: "GA110BWP-2A",
    img: "watch-14.png",
    price: 160,
    quantity: 0,
    id: 13,
  },
  {
    title: "GA110SR-1A",
    img: "watch-15.png",
    price: 140,
    quantity: 0,
    id: 14,
  },
  {
    title: "GA2200NN-1A",
    img: "watch-16.png",
    price: 160,
    quantity: 0,
    id: 15,
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
