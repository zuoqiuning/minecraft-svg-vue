<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <rect x="6" y="2"   fill="rgba(205,205,205,1.00)" stroke="rgba(205,205,205,1.00)" stroke-width="0.1"/>
  <rect x="7" y="2" width="1" height="1" fill="rgba(214,214,214,1.00)" stroke="rgba(214,214,214,1.00)" stroke-width="0.1"/>
  <rect x="8" y="2" width="1" height="1" fill="rgba(210,210,210,1.00)" stroke="rgba(210,210,210,1.00)" stroke-width="0.1"/>
  <rect x="6" y="3" width="1" height="1" fill="rgba(201,201,201,1.00)" stroke="rgba(201,201,201,1.00)" stroke-width="0.1"/>
  <rect x="7" y="3" width="1" height="1" fill="rgba(214,214,214,1.00)" stroke="rgba(214,214,214,1.00)" stroke-width="0.1"/>
  <rect x="8" y="3" width="1" height="1" fill="rgba(205,205,205,1.00)" stroke="rgba(205,205,205,1.00)" stroke-width="0.1"/>
  <rect x="11" y="3" width="1" height="1" fill="rgba(195,195,195,1.00)" stroke="rgba(195,195,195,1.00)" stroke-width="0.1"/>
  <rect x="12" y="3" width="1" height="1" fill="rgba(214,214,214,1.00)" stroke="rgba(214,214,214,1.00)" stroke-width="0.1"/>
  <rect x="13" y="3" width="1" height="1" fill="rgba(205,205,205,1.00)" stroke="rgba(205,205,205,1.00)" stroke-width="0.1"/>
  <rect x="6" y="4" width="1" height="1" fill="rgba(195,195,195,1.00)" stroke="rgba(195,195,195,1.00)" stroke-width="0.1"/>
  <rect x="7" y="4" width="1" height="1" fill="rgba(214,214,214,1.00)" stroke="rgba(214,214,214,1.00)" stroke-width="0.1"/>
  <rect x="8" y="4" width="1" height="1" fill="rgba(201,201,201,1.00)" stroke="rgba(201,201,201,1.00)" stroke-width="0.1"/>
  <rect x="11" y="4" width="1" height="1" fill="rgba(191,191,191,1.00)" stroke="rgba(191,191,191,1.00)" stroke-width="0.1"/>
  <rect x="12" y="4" width="1" height="1" fill="rgba(205,205,205,1.00)" stroke="rgba(205,205,205,1.00)" stroke-width="0.1"/>
  <rect x="13" y="4" width="1" height="1" fill="rgba(201,201,201,1.00)" stroke="rgba(201,201,201,1.00)" stroke-width="0.1"/>
  <rect x="6" y="5" width="1" height="1" fill="rgba(184,184,184,1.00)" stroke="rgba(184,184,184,1.00)" stroke-width="0.1"/>
  <rect x="7" y="5" width="1" height="1" fill="rgba(205,205,205,1.00)" stroke="rgba(205,205,205,1.00)" stroke-width="0.1"/>
  <rect x="8" y="5" width="1" height="1" fill="rgba(201,201,201,1.00)" stroke="rgba(201,201,201,1.00)" stroke-width="0.1"/>
  <rect x="11" y="5" width="1" height="1" fill="rgba(191,191,191,1.00)" stroke="rgba(191,191,191,1.00)" stroke-width="0.1"/>
  <rect x="12" y="5" width="1" height="1" fill="rgba(205,205,205,1.00)" stroke="rgba(205,205,205,1.00)" stroke-width="0.1"/>
  <rect x="13" y="5" width="1" height="1" fill="rgba(201,201,201,1.00)" stroke="rgba(201,201,201,1.00)" stroke-width="0.1"/>
  <rect x="6" y="6" width="1" height="1" fill="rgba(184,184,184,1.00)" stroke="rgba(184,184,184,1.00)" stroke-width="0.1"/>
  <rect x="7" y="6" width="1" height="1" fill="rgba(205,205,205,1.00)" stroke="rgba(205,205,205,1.00)" stroke-width="0.1"/>
  <rect x="8" y="6" width="1" height="1" fill="rgba(184,184,184,1.00)" stroke="rgba(184,184,184,1.00)" stroke-width="0.1"/>
  <rect x="4" y="10" width="1" height="1" fill="rgba(201,201,201,1.00)" stroke="rgba(201,201,201,1.00)" stroke-width="0.1"/>
  <rect x="12" y="10" width="1" height="1" fill="rgba(201,201,201,1.00)" stroke="rgba(201,201,201,1.00)" stroke-width="0.1"/>
  <rect x="4" y="11" width="1" height="1" fill="rgba(195,195,195,1.00)" stroke="rgba(195,195,195,1.00)" stroke-width="0.1"/>
  <rect x="12" y="11" width="1" height="1" fill="rgba(195,195,195,1.00)" stroke="rgba(195,195,195,1.00)" stroke-width="0.1"/>
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'WolfArmorOverlay', inheritAttrs: false });
const attrs = useAttrs();
</script>
