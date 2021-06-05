<template>
  <div>
    <button
      class="
        py-1
        px-3
        text-white
        font-semibold
        rounded
        bg-gradient-to-r
        from-purple-600
        to-purple-500
        border
      "
      @click="showSingle"
      v-tooltip:bottom
    >
      Show single picture.
    </button>
    <button
      class="
        py-1
        px-3
        text-white
        font-semibold
        rounded
        bg-gradient-to-r
        from-purple-600
        to-purple-500
        border
      "
      @click="showMultiple"
    >
      Show a group of pictures.
    </button>

    <!-- all props & events -->
    <VueEasyLightbox
      scrollDisabled
      escDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></VueEasyLightbox>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

interface LightBixState {
  imgs: string | string[];
  visible: boolean;
  index: number;
}

export default defineComponent({
  components: {
    VueEasyLightbox,
  },
  setup() {
    const state = reactive<LightBixState>({
      imgs: "", // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
    });

    const show = () => {
      state.visible = true;
    };
    const handleHide = () => {
      state.visible = false;
    };

    const showSingle = () => {
      // state.imgs =
      //   "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
      state.imgs =
        "https://play.min.io/exo-drive/Profile%20Page.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20210605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210605T035043Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=66fd87ebb6aa53136c9d67e63d9e7c3a1a51532b5099cbfce979ecd1ce4427cc";
      // or
      //   state.imgs = {
      //     title: 'this is a placeholder',
      //     src: 'http://via.placeholder.com/350x150'
      //   }
      show();
    };
    const showMultiple = () => {
      state.imgs = [
        "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1560200353-ce0a76b1d438?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ];
      // or
      //   state.imgs = [
      //     { title: 'test img', src: 'http://via.placeholder.com/350x150' },
      //     'http://via.placeholder.com/350x150'
      //   ]
      // allow mixing

      state.index = 1; // index of imgList
      show();
    };

    return {
      ...toRefs(state),
      handleHide,
      showSingle,
      showMultiple,
    };
  },
});
</script>

<style scoped>
</style>