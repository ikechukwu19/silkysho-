<template>
  <form
    @submit.prevent="initializePaystack"
    class="container mt-20 lg:mx-auto mb-12 flex flex-col items-center w-[90%] h-[100vh] lg:w-full"
  >
    <div class="flex flex-col lg:w-[50%] mb-[8px] w-full  lg:mx-0">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        v-model="name"
        class="px-[10px] py-[6px] outline-none border"
        required
      />
    </div>
    <div class="flex flex-col lg:w-[50%] mb-[8px] w-full">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        v-model="email"
        class="px-[10px] py-[6px] outline-none border"
        required
      />
    </div>
    <div class="flex flex-col lg:w-[50%] mb-[8px] w-full">
      <label for="textarea">Shipping address</label>
      <textarea
        id="textarea"
        placeholder="Enter your address"
        v-model="address"
        class="px-[10px] py-[6px] outline-none border"
        required
      >
      </textarea>
    </div>
    <button
      class="px-[20px] py-[8px] bg-[#248eef]  rounded-md w-[20%] hover:bg-[#248ebf] inline-block lg:block w-[35%]"
    >
      PAY {{ amount }} 7888798
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      address: "",
    };
  },
  methods: {
    initializePaystack() {
      this.$paystack({
        key: "pk_test_b6b72ff1d9d6f287f3f3c55e9988f628b82e95f0",
        email: this.email,
        amount: this.amount * 100,
        ref: this.reference,
        currency: "NGN",
        callback: () => {
          console.log("payment successful");
          this.$store.commit("completePayment");
          this.$router.push("/order");
        },
        onClose: () => {
          console.log("payment modal closed");
        },
      });
    },
  },
  computed: {
    amount() {
      return this.$store.state.amount;
    },
  },
};
</script>

<style></style>
