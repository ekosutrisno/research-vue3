<template>
  <!-- Header -->
  <NavbarHeader />
  <!-- End Header -->

  <!-- Hero -->
  <HeroHeader />
  <!-- End Hero -->

  <!-- Card Session -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-10">
    <DetailInfoCard
      v-for="hotel in dataProperties"
      :key="hotel.id"
      :hotel="hotel"
    />
  </div>
  <!-- End Card Session -->
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import DetailInfoCard from "../components/DetailInfoCard.vue";
import HeroHeader from "../components/HeroHeader.vue";
import NavbarHeader from "../components/NavbarHeader.vue";
import { useStore } from "../store";
import { EstateProperty } from "../types/InterfaceType";

interface HomeState {
  dataProperties: EstateProperty[];
}

export default defineComponent({
  components: { NavbarHeader, HeroHeader, DetailInfoCard },
  setup() {
    const store = useStore();

    const dataState = reactive<HomeState>({
      dataProperties: store.state.hotel.hotels,
    });

    return {
      ...toRefs(dataState),
    };
  },
});
</script>