<template>
  <div>
    <my-icon icon-name="icon-a-014-books" @click="handleClick" />
    <my-button>点击</my-button>
  </div>
</template>
<script setup lang="ts">
const handleClick = () => {
  alert("click");
};
</script>
