<!--
 * @Description: 
 * @Date: 2025-05-15 19:47:11
 * @LastEditTime: 2025-05-16 15:11:22
-->
<template>
  <div>
    <svg :class="'icon ' + svgClass" aria-hidden="true" @click="handleClick">
      <use :xlink:href="'#' + iconName"></use>
    </svg>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  iconName: {
    type: String;
    required: true;
  };
  svgClass: {
    type: String;
    default: "";
  };
}>();
const emit = defineEmits(["handleClick"]);
const handleClick = () => {
  emit("handleClick");
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}
</style>
