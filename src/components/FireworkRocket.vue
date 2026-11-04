<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <rect x="8" y="2"   fill="rgba(185,41,41,1.00)" stroke="rgba(185,41,41,1.00)" stroke-width="0.1"/>
  <rect x="7" y="3" width="1" height="1" fill="rgba(153,41,41,1.00)" stroke="rgba(153,41,41,1.00)" stroke-width="0.1"/>
  <rect x="8" y="3" width="1" height="1" fill="rgba(214,42,42,1.00)" stroke="rgba(214,42,42,1.00)" stroke-width="0.1"/>
  <rect x="9" y="3" width="1" height="1" fill="rgba(109,23,23,1.00)" stroke="rgba(109,23,23,1.00)" stroke-width="0.1"/>
  <rect x="6" y="4" width="1" height="1" fill="rgba(153,41,41,1.00)" stroke="rgba(153,41,41,1.00)" stroke-width="0.1"/>
  <rect x="7" y="4" width="1" height="1" fill="rgba(185,41,41,1.00)" stroke="rgba(185,41,41,1.00)" stroke-width="0.1"/>
  <rect x="8" y="4" width="1" height="1" fill="rgba(153,41,41,1.00)" stroke="rgba(153,41,41,1.00)" stroke-width="0.1"/>
  <rect x="9" y="4" width="2" height="1" fill="rgba(109,23,23,1.00)" stroke="rgba(109,23,23,1.00)" stroke-width="0.1"/>
  <rect x="6" y="5" width="2" height="1" fill="rgba(185,41,41,1.00)" stroke="rgba(185,41,41,1.00)" stroke-width="0.1"/>
  <rect x="8" y="5" width="2" height="1" fill="rgba(153,41,41,1.00)" stroke="rgba(153,41,41,1.00)" stroke-width="0.1"/>
  <rect x="10" y="5" width="1" height="1" fill="rgba(132,27,27,1.00)" stroke="rgba(132,27,27,1.00)" stroke-width="0.1"/>
  <rect x="7" y="6" width="2" height="1" fill="rgba(178,204,209,1.00)" stroke="rgba(178,204,209,1.00)" stroke-width="0.1"/>
  <rect x="9" y="6" width="1" height="1" fill="rgba(132,27,27,1.00)" stroke="rgba(132,27,27,1.00)" stroke-width="0.1"/>
  <rect x="7" y="7" width="1" height="1" fill="rgba(244,244,244,1.00)" stroke="rgba(244,244,244,1.00)" stroke-width="0.1"/>
  <rect x="8" y="7" width="1" height="1" fill="rgba(185,41,41,1.00)" stroke="rgba(185,41,41,1.00)" stroke-width="0.1"/>
  <rect x="9" y="7" width="1" height="1" fill="rgba(153,41,41,1.00)" stroke="rgba(153,41,41,1.00)" stroke-width="0.1"/>
  <rect x="7" y="8" width="2" height="1" fill="rgba(185,41,41,1.00)" stroke="rgba(185,41,41,1.00)" stroke-width="0.1"/>
  <rect x="9" y="8" width="1" height="1" fill="rgba(178,204,209,1.00)" stroke="rgba(178,204,209,1.00)" stroke-width="0.1"/>
  <rect x="7" y="9" width="1" height="1" fill="rgba(185,41,41,1.00)" stroke="rgba(185,41,41,1.00)" stroke-width="0.1"/>
  <rect x="8" y="9" width="1" height="1" fill="rgba(244,244,244,1.00)" stroke="rgba(244,244,244,1.00)" stroke-width="0.1"/>
  <rect x="9" y="9" width="1" height="1" fill="rgba(178,204,209,1.00)" stroke="rgba(178,204,209,1.00)" stroke-width="0.1"/>
  <rect x="7" y="10" width="2" height="1" fill="rgba(244,244,244,1.00)" stroke="rgba(244,244,244,1.00)" stroke-width="0.1"/>
  <rect x="9" y="10" width="1" height="1" fill="rgba(153,41,41,1.00)" stroke="rgba(153,41,41,1.00)" stroke-width="0.1"/>
  <rect x="7" y="11" width="1" height="1" fill="rgba(244,244,244,1.00)" stroke="rgba(244,244,244,1.00)" stroke-width="0.1"/>
  <rect x="8" y="11" width="1" height="1" fill="rgba(185,41,41,1.00)" stroke="rgba(185,41,41,1.00)" stroke-width="0.1"/>
  <rect x="9" y="11" width="1" height="1" fill="rgba(153,41,41,1.00)" stroke="rgba(153,41,41,1.00)" stroke-width="0.1"/>
  <rect x="7" y="12" width="2" height="1" fill="rgba(185,41,41,1.00)" stroke="rgba(185,41,41,1.00)" stroke-width="0.1"/>
  <rect x="9" y="12" width="1" height="1" fill="rgba(178,204,209,1.00)" stroke="rgba(178,204,209,1.00)" stroke-width="0.1"/>
  <rect x="12" y="12" width="2" height="1" fill="rgba(45,20,9,1.00)" stroke="rgba(45,20,9,1.00)" stroke-width="0.1"/>
  <rect x="7" y="13" width="1" height="1" fill="rgba(185,41,41,1.00)" stroke="rgba(185,41,41,1.00)" stroke-width="0.1"/>
  <rect x="8" y="13" width="1" height="1" fill="rgba(45,20,9,1.00)" stroke="rgba(45,20,9,1.00)" stroke-width="0.1"/>
  <rect x="9" y="13" width="1" height="1" fill="rgba(178,204,209,1.00)" stroke="rgba(178,204,209,1.00)" stroke-width="0.1"/>
  <rect x="11" y="13" width="1" height="1" fill="rgba(45,20,9,1.00)" stroke="rgba(45,20,9,1.00)" stroke-width="0.1"/>
  <rect x="9" y="14" width="2" height="1" fill="rgba(45,20,9,1.00)" stroke="rgba(45,20,9,1.00)" stroke-width="0.1"/>
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'FireworkRocket', inheritAttrs: false });
const attrs = useAttrs();
</script>
