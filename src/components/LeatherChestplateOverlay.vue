<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'LeatherChestplateOverlay', inheritAttrs: false });
const attrs = useAttrs();
</script>
