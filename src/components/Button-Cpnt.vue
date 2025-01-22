<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <div class="button rainbow-normal flx flx-center" style="user-select: none" @click="emit('click')">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
