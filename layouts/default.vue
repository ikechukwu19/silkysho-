<template class="box-border relative">
  <div class="lg:container overflow-hidden">
    <Nav />
    <nuxt keep-alive />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Silky shop",
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css2?family=Oswald:wght@200;500;600;700&display=swap",
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Get amazing products from the best online shop",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "good products, online store, best prices",
        },
      ],
    };
  },
};
</script>

<style></style>
