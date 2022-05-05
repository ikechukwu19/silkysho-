<template>
  <div class="flex flex-col justify-center items-center lg:block">
    <div
      class="mt-56 lg:mx-8 grid grid-cols-1 gap-4 gap-y-11 mb-40 lg:grid-cols-3 md:grid-cols-2"
    >
      <div
        class="lg:h-[416px] lg:w-[272px] relative rounded-md shadow-md sm:hidden  lg:block w-[400px]  mb-[20px]"
        v-for="(product, index) in products"
        :key="index"
      >
        <div>
          <img
            :src="product.image"
            alt="product img"
            class="object-cover rounded-md"
            loading="lazy"
          />
        </div>
        <div
          class="absolute bottom-0 left-0 flex backdrop-blur-xl bg-white/30 w-full justify-between px-[10px] rounded-b-md py-[20px]"
        >
          <div class="flex flex-col">
            <span class="text-xl font-bold">{{ product.name }}</span>
            <span class="font-normal">&#8358;{{ product.price }}</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div>
              <span for="input">Qty:</span>
              <input
                type="number"
                max="20"
                min="1"
                id="input"
                v-model="qty"
                class="w-[full] border-none px-[6px] py-[3px] outline-none rounded-sm bg-transparent"
              />
            </div>
            <button
              class="bg-[#000] text-white px-[20px] py-[6px] m-[10px] rounded-sm hover:bg-[#333] font-thin text-lg flex justify-between items-center"
              @click="addToCart(product.id)"
            >
              <span class="material-icons mr-[5px]"> add_shopping_cart </span>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "Product",
  data() {
    return {
      qty: 1,
    };
  },
  methods: {
    addToCart(id) {
      const selected = this.products.filter((product) => product.id == id);
      const item = [];
      selected.forEach((select) =>
        item.push({ ...select, qty: this.qty, cartid: uuidv4() })
      );
      this.$store.commit("addToCart", item);
      this.$store.commit("addTotal");
      this.$store.commit("increment");
      this.qty = 1;
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style></style>
