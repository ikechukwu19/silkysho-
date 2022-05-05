<template>
  <div class="container fixed top-0 left-0 right-0 z-50">
    <nav class="flex w-full justify-between text-lg mt-4">
      <div class="font-bold flex justify-center items-center">
        <span class="material-icons text-[#0c588f] text-4xl lg:text-5xl">
          shopping_bag
        </span>
        <span class="font-semibold text-xl lg:text-3xl">SILKY SHOP</span>
      </div>
      <ul class="flex text-2xl font-light">
        <NuxtLink to="/">
          <li class="lg:mx-1.5 hidden lg:block cursor-pointer">Home</li>
        </NuxtLink>
        <li class="lg:mx-1.5 hidden lg:block">Contact</li>
        <li class="lg:mx-1.5 hidden lg:block">Address</li>
        <NuxtLink to="/cart">
          <li class="lg:mx-1.5 mb-[-20px] relative">
            <span class="material-icons"> shopping_cart </span>
          </li>
          <span
            class="absolute top-0 right-0 font-light text-[14px] bg-[#C30E11] p-[2px] mt-[2px] text-white rounded-[50%] w-[20px] h-[20px] flex items-center justify-center"
            v-if="quantity !== 0"
            >{{ quantity }}</span
          >
        </NuxtLink>
      </ul>
    </nav>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    quantity() {
      return this.$store.state.quantity;
    },
  },
};
</script>
