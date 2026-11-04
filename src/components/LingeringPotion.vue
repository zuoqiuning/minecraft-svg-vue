<template>
  <svg v-bind="$attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <rect x="7" y="5"   fill="rgba(212,109,73,1.00)" stroke="rgba(212,109,73,1.00)" stroke-width="0.1"/>
  <rect x="9" y="5" width="1" height="1" fill="rgba(212,109,73,1.00)" stroke="rgba(212,109,73,1.00)" stroke-width="0.1"/>
  <rect x="7" y="6" width="1" height="1" fill="rgba(151,55,22,1.00)" stroke="rgba(151,55,22,1.00)" stroke-width="0.1"/>
  <rect x="8" y="6" width="1" height="1" fill="rgba(212,229,247,1.00)" stroke="rgba(212,229,247,1.00)" stroke-width="0.1"/>
  <rect x="9" y="6" width="1" height="1" fill="rgba(151,55,22,1.00)" stroke="rgba(151,55,22,1.00)" stroke-width="0.1"/>
  <rect x="6" y="7" width="1" height="1" fill="rgba(179,207,236,1.00)" stroke="rgba(179,207,236,1.00)" stroke-width="0.1"/>
  <rect x="10" y="7" width="1" height="1" fill="rgba(179,207,236,1.00)" stroke="rgba(179,207,236,1.00)" stroke-width="0.1"/>
  <rect x="5" y="8" width="1" height="1" fill="rgba(212,229,247,1.00)" stroke="rgba(212,229,247,1.00)" stroke-width="0.1"/>
  <rect x="7" y="8" width="1" height="1" fill="rgba(179,207,236,1.00)" stroke="rgba(179,207,236,1.00)" stroke-width="0.1"/>
  <rect x="11" y="8" width="1" height="1" fill="rgba(179,207,236,1.00)" stroke="rgba(179,207,236,1.00)" stroke-width="0.1"/>
  <rect x="4" y="9" width="1" height="1" fill="rgba(212,229,247,1.00)" stroke="rgba(212,229,247,1.00)" stroke-width="0.1"/>
  <rect x="6" y="9" width="1" height="1" fill="rgba(179,207,236,1.00)" stroke="rgba(179,207,236,1.00)" stroke-width="0.1"/>
  <rect x="12" y="9" width="1" height="1" fill="rgba(93,143,194,1.00)" stroke="rgba(93,143,194,1.00)" stroke-width="0.1"/>
  <rect x="4" y="10" width="1" height="1" fill="rgba(212,229,247,1.00)" stroke="rgba(212,229,247,1.00)" stroke-width="0.1"/>
  <rect x="6" y="10" width="1" height="1" fill="rgba(179,207,236,1.00)" stroke="rgba(179,207,236,1.00)" stroke-width="0.1"/>
  <rect x="12" y="10" width="1" height="1" fill="rgba(93,143,194,1.00)" stroke="rgba(93,143,194,1.00)" stroke-width="0.1"/>
  <rect x="4" y="11" width="1" height="1" fill="rgba(179,207,236,1.00)" stroke="rgba(179,207,236,1.00)" stroke-width="0.1"/>
  <rect x="10" y="11" width="1" height="1" fill="rgba(139,173,208,1.00)" stroke="rgba(139,173,208,1.00)" stroke-width="0.1"/>
  <rect x="12" y="11" width="1" height="1" fill="rgba(93,143,194,1.00)" stroke="rgba(93,143,194,1.00)" stroke-width="0.1"/>
  <rect x="4" y="12" width="1" height="1" fill="rgba(93,143,194,1.00)" stroke="rgba(93,143,194,1.00)" stroke-width="0.1"/>
  <rect x="10" y="12" width="1" height="1" fill="rgba(139,173,208,1.00)" stroke="rgba(139,173,208,1.00)" stroke-width="0.1"/>
  <rect x="12" y="12" width="1" height="1" fill="rgba(93,143,194,1.00)" stroke="rgba(93,143,194,1.00)" stroke-width="0.1"/>
  <rect x="5" y="13" width="1" height="1" fill="rgba(93,143,194,1.00)" stroke="rgba(93,143,194,1.00)" stroke-width="0.1"/>
  <rect x="9" y="13" width="1" height="1" fill="rgba(139,173,208,1.00)" stroke="rgba(139,173,208,1.00)" stroke-width="0.1"/>
  <rect x="11" y="13" width="1" height="1" fill="rgba(93,143,194,1.00)" stroke="rgba(93,143,194,1.00)" stroke-width="0.1"/>
  <rect x="6" y="14" width="5" height="1" fill="rgba(93,143,194,1.00)" stroke="rgba(93,143,194,1.00)" stroke-width="0.1"/>
</svg>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
defineOptions({ name: 'LingeringPotion', inheritAttrs: false });
const attrs = useAttrs();
</script>
