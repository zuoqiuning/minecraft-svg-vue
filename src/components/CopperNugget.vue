<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <rect x="8" y="5"   fill="rgba(156,69,41,1.00)" stroke="rgba(156,69,41,1.00)" stroke-width="0.1"/>
  <rect x="7" y="6" width="1" height="1" fill="rgba(156,69,41,1.00)" stroke="rgba(156,69,41,1.00)" stroke-width="0.1"/>
  <rect x="8" y="6" width="2" height="1" fill="rgba(231,124,86,1.00)" stroke="rgba(231,124,86,1.00)" stroke-width="0.1"/>
  <rect x="10" y="6" width="1" height="1" fill="rgba(156,69,41,1.00)" stroke="rgba(156,69,41,1.00)" stroke-width="0.1"/>
  <rect x="6" y="7" width="1" height="1" fill="rgba(156,69,41,1.00)" stroke="rgba(156,69,41,1.00)" stroke-width="0.1"/>
  <rect x="7" y="7" width="2" height="1" fill="rgba(231,124,86,1.00)" stroke="rgba(231,124,86,1.00)" stroke-width="0.1"/>
  <rect x="9" y="7" width="1" height="1" fill="rgba(252,153,130,1.00)" stroke="rgba(252,153,130,1.00)" stroke-width="0.1"/>
  <rect x="10" y="7" width="1" height="1" fill="rgba(156,69,41,1.00)" stroke="rgba(156,69,41,1.00)" stroke-width="0.1"/>
  <rect x="5" y="8" width="1" height="1" fill="rgba(156,69,41,1.00)" stroke="rgba(156,69,41,1.00)" stroke-width="0.1"/>
  <rect x="6" y="8" width="1" height="1" fill="rgba(252,153,130,1.00)" stroke="rgba(252,153,130,1.00)" stroke-width="0.1"/>
  <rect x="7" y="8" width="1" height="1" fill="rgba(251,195,182,1.00)" stroke="rgba(251,195,182,1.00)" stroke-width="0.1"/>
  <rect x="8" y="8" width="1" height="1" fill="rgba(252,153,130,1.00)" stroke="rgba(252,153,130,1.00)" stroke-width="0.1"/>
  <rect x="9" y="8" width="1" height="1" fill="rgba(231,124,86,1.00)" stroke="rgba(231,124,86,1.00)" stroke-width="0.1"/>
  <rect x="10" y="8" width="1" height="1" fill="rgba(156,69,41,1.00)" stroke="rgba(156,69,41,1.00)" stroke-width="0.1"/>
  <rect x="4" y="9" width="1" height="1" fill="rgba(156,69,41,1.00)" stroke="rgba(156,69,41,1.00)" stroke-width="0.1"/>
  <rect x="5" y="9" width="1" height="1" fill="rgba(231,124,86,1.00)" stroke="rgba(231,124,86,1.00)" stroke-width="0.1"/>
  <rect x="6" y="9" width="1" height="1" fill="rgba(193,90,54,1.00)" stroke="rgba(193,90,54,1.00)" stroke-width="0.1"/>
  <rect x="7" y="9" width="2" height="1" fill="rgba(156,78,49,1.00)" stroke="rgba(156,78,49,1.00)" stroke-width="0.1"/>
  <rect x="9" y="9" width="1" height="1" fill="rgba(193,90,54,1.00)" stroke="rgba(193,90,54,1.00)" stroke-width="0.1"/>
  <rect x="10" y="9" width="1" height="1" fill="rgba(109,52,33,1.00)" stroke="rgba(109,52,33,1.00)" stroke-width="0.1"/>
  <rect x="4" y="10" width="1" height="1" fill="rgba(109,52,33,1.00)" stroke="rgba(109,52,33,1.00)" stroke-width="0.1"/>
  <rect x="5" y="10" width="1" height="1" fill="rgba(193,90,54,1.00)" stroke="rgba(193,90,54,1.00)" stroke-width="0.1"/>
  <rect x="6" y="10" width="2" height="1" fill="rgba(156,78,49,1.00)" stroke="rgba(156,78,49,1.00)" stroke-width="0.1"/>
  <rect x="8" y="10" width="2" height="1" fill="rgba(109,52,33,1.00)" stroke="rgba(109,52,33,1.00)" stroke-width="0.1"/>
  <rect x="5" y="11" width="3" height="1" fill="rgba(109,52,33,1.00)" stroke="rgba(109,52,33,1.00)" stroke-width="0.1"/>
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'CopperNugget', inheritAttrs: false });
const attrs = useAttrs();
</script>
