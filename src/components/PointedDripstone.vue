<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <rect x="4" y="0"   fill="rgba(115,84,80,1.00)" stroke="rgba(115,84,80,1.00)" stroke-width="0.1"/>
  <rect x="6" y="0" width="4" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="10" y="0" width="1" height="1" fill="rgba(146,121,101,1.00)" stroke="rgba(146,121,101,1.00)" stroke-width="0.1"/>
  <rect x="11" y="0" width="1" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="4" y="1" width="1" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="5" y="1" width="2" height="1" fill="rgba(115,84,80,1.00)" stroke="rgba(115,84,80,1.00)" stroke-width="0.1"/>
  <rect x="7" y="1" width="2" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="9" y="1" width="2" height="1" fill="rgba(146,121,101,1.00)" stroke="rgba(146,121,101,1.00)" stroke-width="0.1"/>
  <rect x="5" y="2" width="2" height="1" fill="rgba(115,84,80,1.00)" stroke="rgba(115,84,80,1.00)" stroke-width="0.1"/>
  <rect x="7" y="2" width="4" height="1" fill="rgba(146,121,101,1.00)" stroke="rgba(146,121,101,1.00)" stroke-width="0.1"/>
  <rect x="5" y="3" width="1" height="1" fill="rgba(115,84,80,1.00)" stroke="rgba(115,84,80,1.00)" stroke-width="0.1"/>
  <rect x="6" y="3" width="1" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="7" y="3" width="1" height="1" fill="rgba(146,121,101,1.00)" stroke="rgba(146,121,101,1.00)" stroke-width="0.1"/>
  <rect x="8" y="3" width="3" height="1" fill="rgba(160,141,113,1.00)" stroke="rgba(160,141,113,1.00)" stroke-width="0.1"/>
  <rect x="5" y="4" width="2" height="1" fill="rgba(115,84,80,1.00)" stroke="rgba(115,84,80,1.00)" stroke-width="0.1"/>
  <rect x="7" y="4" width="1" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="8" y="4" width="2" height="1" fill="rgba(146,121,101,1.00)" stroke="rgba(146,121,101,1.00)" stroke-width="0.1"/>
  <rect x="10" y="4" width="1" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="6" y="5" width="1" height="1" fill="rgba(115,84,80,1.00)" stroke="rgba(115,84,80,1.00)" stroke-width="0.1"/>
  <rect x="7" y="5" width="3" height="1" fill="rgba(146,121,101,1.00)" stroke="rgba(146,121,101,1.00)" stroke-width="0.1"/>
  <rect x="6" y="6" width="1" height="1" fill="rgba(115,84,80,1.00)" stroke="rgba(115,84,80,1.00)" stroke-width="0.1"/>
  <rect x="7" y="6" width="3" height="1" fill="rgba(160,141,113,1.00)" stroke="rgba(160,141,113,1.00)" stroke-width="0.1"/>
  <rect x="6" y="7" width="1" height="1" fill="rgba(115,84,80,1.00)" stroke="rgba(115,84,80,1.00)" stroke-width="0.1"/>
  <rect x="7" y="7" width="1" height="1" fill="rgba(146,121,101,1.00)" stroke="rgba(146,121,101,1.00)" stroke-width="0.1"/>
  <rect x="8" y="7" width="2" height="1" fill="rgba(160,141,113,1.00)" stroke="rgba(160,141,113,1.00)" stroke-width="0.1"/>
  <rect x="7" y="8" width="1" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="8" y="8" width="2" height="1" fill="rgba(146,121,101,1.00)" stroke="rgba(146,121,101,1.00)" stroke-width="0.1"/>
  <rect x="7" y="9" width="1" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="8" y="9" width="1" height="1" fill="rgba(146,121,101,1.00)" stroke="rgba(146,121,101,1.00)" stroke-width="0.1"/>
  <rect x="9" y="9" width="1" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="7" y="10" width="1" height="1" fill="rgba(131,99,86,1.00)" stroke="rgba(131,99,86,1.00)" stroke-width="0.1"/>
  <rect x="8" y="10" width="1" height="1" fill="rgba(146,121,101,1.00)" stroke="rgba(146,121,101,1.00)" stroke-width="0.1"/>
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'PointedDripstone', inheritAttrs: false });
const attrs = useAttrs();
</script>
