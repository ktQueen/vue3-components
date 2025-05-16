<template>
  <div>
    <my-icon icon-name="icon-a-014-books" @click="handleClick" />
    <my-button name="新增" icon-name="icon-a-014-books" />
  </div>
</template>
<script setup lang="ts">
const handleClick = () => {
  alert("click");
};
</script>
