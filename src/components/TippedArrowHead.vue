<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <rect x="12" y="2"   fill="rgba(217,217,217,1.00)" stroke="rgba(217,217,217,1.00)" stroke-width="0.1"/>
  <rect x="13" y="2" width="1" height="1" fill="rgba(255,255,255,1.00)" stroke="rgba(255,255,255,1.00)" stroke-width="0.1"/>
  <rect x="14" y="2" width="1" height="1" fill="rgba(68,68,68,1.00)" stroke="rgba(68,68,68,1.00)" stroke-width="0.1"/>
  <rect x="10" y="3" width="1" height="1" fill="rgba(192,192,192,1.00)" stroke="rgba(192,192,192,1.00)" stroke-width="0.1"/>
  <rect x="11" y="3" width="1" height="1" fill="rgba(241,241,241,1.00)" stroke="rgba(241,241,241,1.00)" stroke-width="0.1"/>
  <rect x="12" y="3" width="1" height="1" fill="rgba(247,247,247,1.00)" stroke="rgba(247,247,247,1.00)" stroke-width="0.1"/>
  <rect x="13" y="3" width="1" height="1" fill="rgba(217,217,217,1.00)" stroke="rgba(217,217,217,1.00)" stroke-width="0.1"/>
  <rect x="14" y="3" width="1" height="1" fill="rgba(68,68,68,1.00)" stroke="rgba(68,68,68,1.00)" stroke-width="0.1"/>
  <rect x="6" y="4" width="1" height="1" fill="rgba(192,192,192,1.00)" stroke="rgba(192,192,192,1.00)" stroke-width="0.1"/>
  <rect x="7" y="4" width="1" height="1" fill="rgba(247,247,247,1.00)" stroke="rgba(247,247,247,1.00)" stroke-width="0.1"/>
  <rect x="10" y="4" width="1" height="1" fill="rgba(68,68,68,1.00)" stroke="rgba(68,68,68,1.00)" stroke-width="0.1"/>
  <rect x="12" y="4" width="1" height="1" fill="rgba(241,241,241,1.00)" stroke="rgba(241,241,241,1.00)" stroke-width="0.1"/>
  <rect x="13" y="4" width="1" height="1" fill="rgba(68,68,68,1.00)" stroke="rgba(68,68,68,1.00)" stroke-width="0.1"/>
  <rect x="3" y="5" width="1" height="1" fill="rgba(247,247,247,1.00)" stroke="rgba(247,247,247,1.00)" stroke-width="0.1"/>
  <rect x="7" y="5" width="1" height="1" fill="rgba(143,143,143,1.00)" stroke="rgba(143,143,143,1.00)" stroke-width="0.1"/>
  <rect x="11" y="5" width="1" height="1" fill="rgba(68,68,68,1.00)" stroke="rgba(68,68,68,1.00)" stroke-width="0.1"/>
  <rect x="12" y="5" width="1" height="1" fill="rgba(192,192,192,1.00)" stroke="rgba(192,192,192,1.00)" stroke-width="0.1"/>
  <rect x="13" y="5" width="1" height="1" fill="rgba(68,68,68,1.00)" stroke="rgba(68,68,68,1.00)" stroke-width="0.1"/>
  <rect x="0" y="6" width="1" height="1" fill="rgba(217,217,217,1.00)" stroke="rgba(217,217,217,1.00)" stroke-width="0.1"/>
  <rect x="3" y="6" width="1" height="1" fill="rgba(171,171,171,1.00)" stroke="rgba(171,171,171,1.00)" stroke-width="0.1"/>
  <rect x="12" y="6" width="1" height="1" fill="rgba(68,68,68,1.00)" stroke="rgba(68,68,68,1.00)" stroke-width="0.1"/>
  <rect x="9" y="10" width="1" height="1" fill="rgba(192,192,192,1.00)" stroke="rgba(192,192,192,1.00)" stroke-width="0.1"/>
  <rect x="10" y="10" width="1" height="1" fill="rgba(241,241,241,1.00)" stroke="rgba(241,241,241,1.00)" stroke-width="0.1"/>
  <rect x="10" y="11" width="1" height="1" fill="rgba(143,143,143,1.00)" stroke="rgba(143,143,143,1.00)" stroke-width="0.1"/>
  <rect x="8" y="14" width="1" height="1" fill="rgba(217,217,217,1.00)" stroke="rgba(217,217,217,1.00)" stroke-width="0.1"/>
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'TippedArrowHead', inheritAttrs: false });
const attrs = useAttrs();
</script>
