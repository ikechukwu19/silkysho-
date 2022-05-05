<template class='font-Roboto box-border relative'>
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
      title: 'Silky shop',
      link: [
        {rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
        {rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css'}
      ]
    }
  }
}
</script>

<style>

</style>