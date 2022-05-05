<template>
  <div class="contianer mt-20 mx-auto mb-12 flex flex-col items-center">
    <h4 class="text-4xl font-bold text-center">Your order is on it's way</h4>
    <p class="text-2xl text-center">Thanks for patronizing us, we hope to see you next time</p>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    // If the customer has not paid
    if (!store.state.paid) {
      return redirect("/cart");
    }
  },
};
</script>
