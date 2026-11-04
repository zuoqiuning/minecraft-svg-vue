<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <rect x="6" y="8"   fill="rgba(255,255,255,1.00)" stroke="rgba(255,255,255,1.00)" stroke-width="0.1"/>
  <rect x="8" y="8" width="2" height="1" fill="rgba(154,154,154,1.00)" stroke="rgba(154,154,154,1.00)" stroke-width="0.1"/>
  <rect x="10" y="8" width="1" height="1" fill="rgba(99,99,99,1.00)" stroke="rgba(99,99,99,1.00)" stroke-width="0.1"/>
  <rect x="5" y="9" width="1" height="1" fill="rgba(99,99,99,1.00)" stroke="rgba(99,99,99,1.00)" stroke-width="0.1"/>
  <rect x="7" y="9" width="1" height="1" fill="rgba(255,255,255,1.00)" stroke="rgba(255,255,255,1.00)" stroke-width="0.1"/>
  <rect x="8" y="9" width="2" height="1" fill="rgba(197,197,197,1.00)" stroke="rgba(197,197,197,1.00)" stroke-width="0.1"/>
  <rect x="10" y="9" width="1" height="1" fill="rgba(154,154,154,1.00)" stroke="rgba(154,154,154,1.00)" stroke-width="0.1"/>
  <rect x="11" y="9" width="1" height="1" fill="rgba(99,99,99,1.00)" stroke="rgba(99,99,99,1.00)" stroke-width="0.1"/>
  <rect x="5" y="10" width="1" height="1" fill="rgba(154,154,154,1.00)" stroke="rgba(154,154,154,1.00)" stroke-width="0.1"/>
  <rect x="7" y="10" width="1" height="1" fill="rgba(255,255,255,1.00)" stroke="rgba(255,255,255,1.00)" stroke-width="0.1"/>
  <rect x="8" y="10" width="1" height="1" fill="rgba(170,170,170,1.00)" stroke="rgba(170,170,170,1.00)" stroke-width="0.1"/>
  <rect x="9" y="10" width="2" height="1" fill="rgba(197,197,197,1.00)" stroke="rgba(197,197,197,1.00)" stroke-width="0.1"/>
  <rect x="11" y="10" width="1" height="1" fill="rgba(154,154,154,1.00)" stroke="rgba(154,154,154,1.00)" stroke-width="0.1"/>
  <rect x="5" y="11" width="1" height="1" fill="rgba(154,154,154,1.00)" stroke="rgba(154,154,154,1.00)" stroke-width="0.1"/>
  <rect x="6" y="11" width="2" height="1" fill="rgba(197,197,197,1.00)" stroke="rgba(197,197,197,1.00)" stroke-width="0.1"/>
  <rect x="8" y="11" width="1" height="1" fill="rgba(148,148,148,1.00)" stroke="rgba(148,148,148,1.00)" stroke-width="0.1"/>
  <rect x="9" y="11" width="1" height="1" fill="rgba(197,197,197,1.00)" stroke="rgba(197,197,197,1.00)" stroke-width="0.1"/>
  <rect x="11" y="11" width="1" height="1" fill="rgba(166,166,166,1.00)" stroke="rgba(166,166,166,1.00)" stroke-width="0.1"/>
  <rect x="5" y="12" width="1" height="1" fill="rgba(99,99,99,1.00)" stroke="rgba(99,99,99,1.00)" stroke-width="0.1"/>
  <rect x="6" y="12" width="1" height="1" fill="rgba(154,154,154,1.00)" stroke="rgba(154,154,154,1.00)" stroke-width="0.1"/>
  <rect x="7" y="12" width="1" height="1" fill="rgba(197,197,197,1.00)" stroke="rgba(197,197,197,1.00)" stroke-width="0.1"/>
  <rect x="8" y="12" width="1" height="1" fill="rgba(166,166,166,1.00)" stroke="rgba(166,166,166,1.00)" stroke-width="0.1"/>
  <rect x="9" y="12" width="1" height="1" fill="rgba(154,154,154,1.00)" stroke="rgba(154,154,154,1.00)" stroke-width="0.1"/>
  <rect x="11" y="12" width="1" height="1" fill="rgba(99,99,99,1.00)" stroke="rgba(99,99,99,1.00)" stroke-width="0.1"/>
  <rect x="6" y="13" width="1" height="1" fill="rgba(99,99,99,1.00)" stroke="rgba(99,99,99,1.00)" stroke-width="0.1"/>
  <rect x="7" y="13" width="2" height="1" fill="rgba(154,154,154,1.00)" stroke="rgba(154,154,154,1.00)" stroke-width="0.1"/>
  <rect x="10" y="13" width="1" height="1" fill="rgba(99,99,99,1.00)" stroke="rgba(99,99,99,1.00)" stroke-width="0.1"/>
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'PotionOverlay', inheritAttrs: false });
const attrs = useAttrs();
</script>
