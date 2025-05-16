<template>
  <div class="my-button">
    <button>
      <!-- v-bind指令来传递所有未被Button组件明确声明的props到内部的Icon组件 -->
      <my-icon v-bind="$attrs" />
      {{ name }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();

// 阻止attrs继续传递到根元素
defineOptions({
  inheritAttrs: false,
});
</script>
<style scoped lang="scss">
.my-button {
  button {
    height: 32px;
    padding: 0 12px;
    display: flex;
    align-items: center;
  }
}
</style>
