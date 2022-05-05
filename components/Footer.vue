<template>
  <footer
    class="w-full bg-[#000] text-white flex flex-col items-center justify-between justify-around"
  >
    <div class="mt-8">
      <ul
        class="flex flex-col lg:flex-row text-center justify-between gap-7 text-xl font-light cursor-pointer"
      >
        <NuxtLink to="/">
          <li>HOME</li>
        </NuxtLink>
        <li>CONTACTS</li>
        <li>ABOUT US</li>
        <li>ADDRESS</li>
      </ul>
    </div>
    <div class="text-4xl gap-56 font-bold mt-8 cursor-pointer">
      <span><i class="bx bxl-facebook-square" style="color: #4266ce"></i></span>
      <span><i class="bx bxl-twitter" style="color: #1584c1"></i></span>
      <span><i class="bx bxl-instagram-alt" style="color: #e0bb5d"></i></span>
      <span><i class="bx bxl-github" style="color: #d8d3c7"></i></span>
    </div>
    <div class="text-sm mx-7 font-thin my-8">
      copyright <i class="bx bx-copyright"></i> all rights reserved
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
