export const state = () => ({
  products: [
    {
      name: "hoodie",
      price: 5500,
      image:
        "https://res.cloudinary.com/silkydev/image/upload/v1651662346/silky%20store/hoodieFav_j1d2ls.jpg",
      id: 1,
    },
    {
      name: "belt",
      price: 1500,
      image:
        "https://res.cloudinary.com/silkydev/image/upload/v1651662345/silky%20store/belt_xbspvt.jpg",
      id: 2,
    },
    {
      name: "Pants",
      price: 4500,
      image:
        "https://res.cloudinary.com/silkydev/image/upload/v1651662340/silky%20store/pants_fhadzz.jpg",
      id: 3,
    },
    {
      name: "shirts",
      price: 3500,
      image:
        "https://res.cloudinary.com/silkydev/image/upload/v1651662341/silky%20store/shirts_caozzh.jpg",
      id: 4,
    },
    {
      name: "shoe",
      price: 15000,
      image:
        "https://res.cloudinary.com/silkydev/image/upload/v1651662589/silky%20store/shoe_pxjgcw.jpg",
      id: 5,
    },
    {
      name: "tie",
      price: 1200,
      image:
        "https://res.cloudinary.com/silkydev/image/upload/v1651662350/silky%20store/tie_upkpxg.jpg",
      id: 6,
    },
  ],
  cart: [],
  total: 0,
  quantity: 0,
  amount: 0,
  paid: true,
});

export const mutations = {
  increment(state) {
    state.quantity = state.cart.length;
  },
  completePayment(state) {
    state.paid = true;
    state.quantity = 0;
  },
  addToCart(state, payload) {
    state.cart.push(payload);
  },
  removeFromCart(state, payload) {
    state.cart = state.cart.filter((item) => item[0].cartid !== payload);
  },
  addTotal(state) {
    const items = [];
    state.cart.forEach((item) => items.push(item[0].price * item[0].qty));
    const total = items.reduce((a, b) => a + b);
    const money = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    });
    state.total = money.format(total);
    state.amount = total;
  },
};
