<template>
  <!-- Header -->
  <NavbarHeader />
  <!-- End Header -->
  <!-- Hero -->
  <HeroHeader />
  <!-- End Hero -->
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import HeroHeader from "../components/HeroHeader.vue";
import NavbarHeader from "../components/NavbarHeader.vue";

export default defineComponent({
  components: { NavbarHeader, HeroHeader },
  setup() {
    const dataState = reactive({});

    return {
      ...toRefs(dataState),
    };
  },
});
</script>