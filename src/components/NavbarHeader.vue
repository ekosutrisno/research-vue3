<template>
  <!-- Header -->
  <nav class="w-full bg-white shadow-sm border-b p-4 sticky top-0 z-20">
    <div class="flex items-center justify-between max-w-screen-xl mx-auto">
      <div class="flex items-center space-x-4">
        <div class="text-2xl font-semibold text-purple-600">
          Exo<span class="text-purple-400">Property</span>
        </div>
        <div class="relative hidden lg:block">
          <input
            type="text"
            placeholder="Location..."
            class="py-2 pl-24 pr-8 bg-gray-100 rounded focus-within:outline-none"
          />
          <div
            class="absolute font-semibold top-1 left-1 p-1 rounded bg-white inline-flex items-center space-x-3"
          >
            <span class="pl-2"> {{ option }} </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 absolute right-2 top-2 text-gray-400 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="lg:inline-flex hidden items-center space-x-2">
          <button
            @click="setOptionValue('Buy')"
            class="py-2 px-3 font-medium rounded text-gray-400 hover:bg-gray-100"
          >
            Buy
          </button>
          <button
            @click="setOptionValue('Sell')"
            class="py-2 px-3 font-medium rounded text-gray-400 hover:bg-gray-100"
          >
            Sell
          </button>
          <button
            @click="setOptionValue('Rent')"
            class="py-2 px-3 font-medium rounded text-gray-400 hover:bg-gray-100"
          >
            Rent
          </button>
          <button
            @click="setOptionValue('Help?')"
            class="py-2 px-3 font-medium rounded text-gray-400 hover:bg-gray-100"
          >
            Help Center
          </button>
        </div>
      </div>
      <div class="inline-flex items-centere space-x-3">
        <button class="font-semibold focus:outline-none hidden lg:block">
          Rent Real Estate
        </button>
        <button
          class="py-2 px-3 font-medium rounded inline-flex items-center space-x-4 bg-gray-50 border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <img
            class="rounded-full w-6 h-6"
            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-128.png"
            alt="avatar"
          />
        </button>
      </div>
    </div>
  </nav>
  <!-- End Header -->
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const dataState = reactive({
      option: "Rent",
    });

    const setOptionValue = (val: any) => {
      dataState.option = val;
    };

    return {
      ...toRefs(dataState),
      setOptionValue,
    };
  },
});
</script>