<template>
  <img class="filter" :src="src" />
</template>

<script>
export default {
  name: "Bg",
  props: ["src"],
  mounted: () => {
    var image = document.querySelectorAll(".filter");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 1.2,
      overflow: false,
      delay: 0.4,
      transition: "none",
    });
  },
};
</script>

<style>
.filter {
  width: 100%;
}
</style>
