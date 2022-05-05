<template>
  <div
    class="mt-20 lg:mx-8 w-full mb-12 flex flex-col items-center justify-center overflow-hidden h-[100vh]"
  >
    <div
      class="w-[40%] h-[40%] flex flex-col items-center justify-center"
      v-if="cart.length == 0"
    >
      <img src="~/assets/images/empty_cart.svg" alt="empty cart" />
      <h3 class="text-xl font-normal text-center mb-[5px]">
        No items in your cart 
      </h3>
      <NuxtLink to="/">
        <button
          class="text-white bg-[#000] rounded-md px-[20px] py-[10px] flex items-center hover:bg-[#333] "
        >
          <span class="material-icons"> arrow_back_ios </span>
          Back to Home 
        </button>
      </NuxtLink>
    </div>
    <table class="table-auto lg:w-[80%] h-3/6 mx-auto w-[90%] h-[100vh]" v-else>
      <thead class="font-bold text-xl border text-left">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody
        class="font-light border text-2xl"
        v-for="(item, index) in cart"
        :key="index"
      >
        <tr class="border ">
          <td class="flex justify-between border-r mx-[4px]">
            {{ item[0].name }}
            <span
              class="material-icons cursor-pointer"
              @click="remove(item[0].cartid)"
            >
              close
            </span>
          </td>
          <td class="border-r mx-[4px]">{{ item[0].price }}</td>
          <td class="border-r mx-[4px]">{{ item[0].qty }}</td>
          <td class="border-r mx-[4px]">{{ item[0].price * item[0].qty }}</td>
        </tr>
      </tbody>

      <span class="text-2xl font-bold">Total: {{ total }}</span>
      <NuxtLink to="/checkout">
        <button
          class="px-[20px] py-[8px] bg-[#248eef] flex items-center justify-center rounded-md"
        >
          CHECKOUT
        </button>
      </NuxtLink>
    </table>
  </div>
</template>

<script>
export default {
  name: "cart",
  methods: {
    remove(id) {
      this.$store.commit("removeFromCart", id);
      this.$store.commit("increment");
      if (this.cart.length != 0) {
        this.$store.commit("addTotal");
      }
    },
    
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.state.total;
    },
    quantity() {
      return this.$store.state.quantity;
    },
    amount() {
      return this.$store.state.amount;
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
  },
};
</script>
