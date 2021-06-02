<template>
  <div class="font-semibold">Welcome in HOME</div>
  <button v-tooltip:top.tooltip="'Eko Sutrisno makan di kantin'">Top</button>
  <button v-tooltip:bottom.tooltip="'Eko Sutrisno makan di kantin'">
    Bottom
  </button>
  <button v-tooltip:left.tooltip="'Eko Sutrisno makan di kantin'">Left</button>
  <button v-tooltip:right.tooltip="'Eko Sutrisno makan di kantin'">
    Right
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>