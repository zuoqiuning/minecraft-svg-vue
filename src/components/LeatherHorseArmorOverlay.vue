<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <rect x="12" y="7"   fill="rgba(52,34,22,1.00)" stroke="rgba(52,34,22,1.00)" stroke-width="0.1"/>
  <rect x="5" y="8" width="1" height="1" fill="rgba(149,101,43,1.00)" stroke="rgba(149,101,43,1.00)" stroke-width="0.1"/>
  <rect x="6" y="8" width="2" height="1" fill="rgba(128,49,0,1.00)" stroke="rgba(128,49,0,1.00)" stroke-width="0.1"/>
  <rect x="8" y="8" width="1" height="1" fill="rgba(149,101,43,1.00)" stroke="rgba(149,101,43,1.00)" stroke-width="0.1"/>
  <rect x="11" y="8" width="1" height="1" fill="rgba(52,34,22,1.00)" stroke="rgba(52,34,22,1.00)" stroke-width="0.1"/>
  <rect x="5" y="9" width="1" height="1" fill="rgba(149,101,43,1.00)" stroke="rgba(149,101,43,1.00)" stroke-width="0.1"/>
  <rect x="6" y="9" width="1" height="1" fill="rgba(112,41,0,1.00)" stroke="rgba(112,41,0,1.00)" stroke-width="0.1"/>
  <rect x="7" y="9" width="1" height="1" fill="rgba(128,49,0,1.00)" stroke="rgba(128,49,0,1.00)" stroke-width="0.1"/>
  <rect x="8" y="9" width="1" height="1" fill="rgba(128,74,21,1.00)" stroke="rgba(128,74,21,1.00)" stroke-width="0.1"/>
  <rect x="9" y="9" width="3" height="1" fill="rgba(52,34,22,1.00)" stroke="rgba(52,34,22,1.00)" stroke-width="0.1"/>
  <rect x="4" y="10" width="1" height="1" fill="rgba(52,34,22,1.00)" stroke="rgba(52,34,22,1.00)" stroke-width="0.1"/>
  <rect x="5" y="10" width="1" height="1" fill="rgba(128,74,21,1.00)" stroke="rgba(128,74,21,1.00)" stroke-width="0.1"/>
  <rect x="6" y="10" width="1" height="1" fill="rgba(128,49,0,1.00)" stroke="rgba(128,49,0,1.00)" stroke-width="0.1"/>
  <rect x="7" y="10" width="1" height="1" fill="rgba(112,41,0,1.00)" stroke="rgba(112,41,0,1.00)" stroke-width="0.1"/>
  <rect x="8" y="10" width="1" height="1" fill="rgba(149,101,43,1.00)" stroke="rgba(149,101,43,1.00)" stroke-width="0.1"/>
  <rect x="9" y="10" width="1" height="1" fill="rgba(52,34,22,1.00)" stroke="rgba(52,34,22,1.00)" stroke-width="0.1"/>
  <rect x="3" y="11" width="2" height="1" fill="rgba(52,34,22,1.00)" stroke="rgba(52,34,22,1.00)" stroke-width="0.1"/>
  <rect x="5" y="11" width="1" height="1" fill="rgba(128,74,21,1.00)" stroke="rgba(128,74,21,1.00)" stroke-width="0.1"/>
  <rect x="6" y="11" width="2" height="1" fill="rgba(112,41,0,1.00)" stroke="rgba(112,41,0,1.00)" stroke-width="0.1"/>
  <rect x="8" y="11" width="1" height="1" fill="rgba(115,66,19,1.00)" stroke="rgba(115,66,19,1.00)" stroke-width="0.1"/>
  <rect x="9" y="11" width="1" height="1" fill="rgba(52,34,22,1.00)" stroke="rgba(52,34,22,1.00)" stroke-width="0.1"/>
  <rect x="5" y="12" width="1" height="1" fill="rgba(115,66,19,1.00)" stroke="rgba(115,66,19,1.00)" stroke-width="0.1"/>
  <rect x="6" y="12" width="2" height="1" fill="rgba(64,24,0,1.00)" stroke="rgba(64,24,0,1.00)" stroke-width="0.1"/>
  <rect x="8" y="12" width="1" height="1" fill="rgba(115,66,19,1.00)" stroke="rgba(115,66,19,1.00)" stroke-width="0.1"/>
  <rect x="9" y="12" width="1" height="1" fill="rgba(52,34,22,1.00)" stroke="rgba(52,34,22,1.00)" stroke-width="0.1"/>
  <rect x="1" y="13" width="12" height="1" fill="rgba(52,34,22,1.00)" stroke="rgba(52,34,22,1.00)" stroke-width="0.1"/>
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'LeatherHorseArmorOverlay', inheritAttrs: false });
const attrs = useAttrs();
</script>
