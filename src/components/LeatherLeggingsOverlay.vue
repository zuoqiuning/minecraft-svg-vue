<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <rect x="4" y="7"   fill="rgba(52,33,21,1.00)" stroke="rgba(52,33,21,1.00)" stroke-width="0.1"/>
  <rect x="10" y="7" width="2" height="1" fill="rgba(52,33,21,1.00)" stroke="rgba(52,33,21,1.00)" stroke-width="0.1"/>
  <rect x="3" y="8" width="1" height="1" fill="rgba(52,33,21,1.00)" stroke="rgba(52,33,21,1.00)" stroke-width="0.1"/>
  <rect x="4" y="8" width="1" height="1" fill="rgba(149,94,59,1.00)" stroke="rgba(149,94,59,1.00)" stroke-width="0.1"/>
  <rect x="5" y="8" width="1" height="1" fill="rgba(114,72,46,1.00)" stroke="rgba(114,72,46,1.00)" stroke-width="0.1"/>
  <rect x="6" y="8" width="1" height="1" fill="rgba(33,21,13,1.00)" stroke="rgba(33,21,13,1.00)" stroke-width="0.1"/>
  <rect x="9" y="8" width="1" height="1" fill="rgba(52,33,21,1.00)" stroke="rgba(52,33,21,1.00)" stroke-width="0.1"/>
  <rect x="10" y="8" width="1" height="1" fill="rgba(149,94,59,1.00)" stroke="rgba(149,94,59,1.00)" stroke-width="0.1"/>
  <rect x="11" y="8" width="1" height="1" fill="rgba(114,72,46,1.00)" stroke="rgba(114,72,46,1.00)" stroke-width="0.1"/>
  <rect x="12" y="8" width="1" height="1" fill="rgba(33,21,13,1.00)" stroke="rgba(33,21,13,1.00)" stroke-width="0.1"/>
  <rect x="3" y="9" width="1" height="1" fill="rgba(52,33,21,1.00)" stroke="rgba(52,33,21,1.00)" stroke-width="0.1"/>
  <rect x="4" y="9" width="2" height="1" fill="rgba(114,72,46,1.00)" stroke="rgba(114,72,46,1.00)" stroke-width="0.1"/>
  <rect x="6" y="9" width="1" height="1" fill="rgba(33,21,13,1.00)" stroke="rgba(33,21,13,1.00)" stroke-width="0.1"/>
  <rect x="9" y="9" width="1" height="1" fill="rgba(52,33,21,1.00)" stroke="rgba(52,33,21,1.00)" stroke-width="0.1"/>
  <rect x="10" y="9" width="2" height="1" fill="rgba(114,72,46,1.00)" stroke="rgba(114,72,46,1.00)" stroke-width="0.1"/>
  <rect x="12" y="9" width="1" height="1" fill="rgba(33,21,13,1.00)" stroke="rgba(33,21,13,1.00)" stroke-width="0.1"/>
  <rect x="4" y="10" width="2" height="1" fill="rgba(52,33,21,1.00)" stroke="rgba(52,33,21,1.00)" stroke-width="0.1"/>
  <rect x="10" y="10" width="2" height="1" fill="rgba(52,33,21,1.00)" stroke="rgba(52,33,21,1.00)" stroke-width="0.1"/>
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'LeatherLeggingsOverlay', inheritAttrs: false });
const attrs = useAttrs();
</script>
