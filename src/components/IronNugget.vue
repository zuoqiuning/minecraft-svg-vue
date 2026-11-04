<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <rect x="6" y="5"   fill="rgba(88,95,104,1.00)" stroke="rgba(88,95,104,1.00)" stroke-width="0.1"/>
  <rect x="5" y="6" width="1" height="1" fill="rgba(88,95,104,1.00)" stroke="rgba(88,95,104,1.00)" stroke-width="0.1"/>
  <rect x="6" y="6" width="1" height="1" fill="rgba(186,200,218,1.00)" stroke="rgba(186,200,218,1.00)" stroke-width="0.1"/>
  <rect x="7" y="6" width="1" height="1" fill="rgba(217,223,231,1.00)" stroke="rgba(217,223,231,1.00)" stroke-width="0.1"/>
  <rect x="8" y="6" width="3" height="1" fill="rgba(88,95,104,1.00)" stroke="rgba(88,95,104,1.00)" stroke-width="0.1"/>
  <rect x="4" y="7" width="1" height="1" fill="rgba(88,95,104,1.00)" stroke="rgba(88,95,104,1.00)" stroke-width="0.1"/>
  <rect x="5" y="7" width="1" height="1" fill="rgba(217,223,231,1.00)" stroke="rgba(217,223,231,1.00)" stroke-width="0.1"/>
  <rect x="6" y="7" width="2" height="1" fill="rgba(242,242,242,1.00)" stroke="rgba(242,242,242,1.00)" stroke-width="0.1"/>
  <rect x="8" y="7" width="1" height="1" fill="rgba(217,223,231,1.00)" stroke="rgba(217,223,231,1.00)" stroke-width="0.1"/>
  <rect x="9" y="7" width="2" height="1" fill="rgba(162,176,190,1.00)" stroke="rgba(162,176,190,1.00)" stroke-width="0.1"/>
  <rect x="11" y="7" width="1" height="1" fill="rgba(57,60,64,1.00)" stroke="rgba(57,60,64,1.00)" stroke-width="0.1"/>
  <rect x="4" y="8" width="1" height="1" fill="rgba(88,95,104,1.00)" stroke="rgba(88,95,104,1.00)" stroke-width="0.1"/>
  <rect x="5" y="8" width="1" height="1" fill="rgba(242,242,242,1.00)" stroke="rgba(242,242,242,1.00)" stroke-width="0.1"/>
  <rect x="6" y="8" width="2" height="1" fill="rgba(217,223,231,1.00)" stroke="rgba(217,223,231,1.00)" stroke-width="0.1"/>
  <rect x="8" y="8" width="1" height="1" fill="rgba(162,176,190,1.00)" stroke="rgba(162,176,190,1.00)" stroke-width="0.1"/>
  <rect x="9" y="8" width="2" height="1" fill="rgba(115,141,141,1.00)" stroke="rgba(115,141,141,1.00)" stroke-width="0.1"/>
  <rect x="11" y="8" width="1" height="1" fill="rgba(57,60,64,1.00)" stroke="rgba(57,60,64,1.00)" stroke-width="0.1"/>
  <rect x="4" y="9" width="1" height="1" fill="rgba(88,95,104,1.00)" stroke="rgba(88,95,104,1.00)" stroke-width="0.1"/>
  <rect x="5" y="9" width="1" height="1" fill="rgba(189,202,219,1.00)" stroke="rgba(189,202,219,1.00)" stroke-width="0.1"/>
  <rect x="6" y="9" width="2" height="1" fill="rgba(186,200,218,1.00)" stroke="rgba(186,200,218,1.00)" stroke-width="0.1"/>
  <rect x="8" y="9" width="3" height="1" fill="rgba(57,60,64,1.00)" stroke="rgba(57,60,64,1.00)" stroke-width="0.1"/>
  <rect x="5" y="10" width="3" height="1" fill="rgba(57,60,64,1.00)" stroke="rgba(57,60,64,1.00)" stroke-width="0.1"/>
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'IronNugget', inheritAttrs: false });
const attrs = useAttrs();
</script>
