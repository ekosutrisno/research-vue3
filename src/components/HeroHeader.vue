<template>
  <div
    class="bg-gradient-to-b hidden relative h-full py-8 from-purple-300 to-purple-900 lg:flex items-center justify-between"
  >
    <img
      class="absolute inset-0 z-0 opacity-95 object-cover h-full w-full"
      src="../assets/map.png"
    />
    <div
      class="bg-white w-2/6 z-10 rounded-r pl-10 shadow-xl flex justify-between overflow-hidden"
    >
      <div class="py-8">
        <p class="font-semibold">
          <span class="font-bold">240</span> Property Option -
          <span class="font-bold">June 24 - June 25</span>
        </p>
        <p class="text-xl font-semibold text-gray-500">
          Properties in the area:
          <span class="font-bold text-gray-800">New York</span>
        </p>
        <div class="grid grid-cols-2 gap-2 mt-8">
          <button
            class="py-1 px-3 text-gray-600 hover:bg-gray-50 transition font-semibold rounded inline-flex items-center space-x-2 bg-white border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span>Property Type</span>
          </button>
          <button
            class="py-1 px-3 text-gray-600 hover:bg-gray-50 transition font-semibold rounded inline-flex items-center space-x-2 bg-white border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Price Estate</span>
          </button>
          <button
            class="py-1 px-3 text-gray-600 hover:bg-gray-50 transition font-semibold rounded inline-flex items-center space-x-2 bg-white border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
            <span>Square Footage</span>
          </button>
          <button
            class="py-1 px-3 text-gray-600 hover:bg-gray-50 transition font-semibold rounded inline-flex items-center space-x-2 bg-white border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Year Built</span>
          </button>
          <button
            class="py-1 px-3 text-gray-400 font-semibold rounded inline-flex items-center space-x-2 bg-gray-50 border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>Other Filter</span>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-8">
          <button
            class="py-1 px-3 text-white font-semibold rounded bg-gradient-to-r from-purple-600 to-purple-500 border"
          >
            <span>Apply</span>
          </button>
          <button class="py-1 px-3 text-gray-400 font-semibold rounded border">
            <span>Clear</span>
          </button>
        </div>
      </div>
      <div
        class="border-l border-gray-100 cursor-pointer hover:bg-gray-50 h-auto px-2 flex flex-col items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 text-gray-300 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>

    <div class="z-10 absolute right-10 top-8 shadow-md">
      <div class="relative h-10 px-12 bg-white rounded flex items-center">
        <span class="font-semibold text-gray-400"
          >Search while moving the map</span
        >
        <div
          class="absolute font-semibold top-1 left-1 p-1 rounded bg-gray-100 inline-flex items-center space-x-3"
        >
          <span class="text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
    </div>
    <div
      class="z-10 absolute right-10 bottom-8 rounded shadow-md text-gray-500 bg-white flex flex-col"
    >
      <button class="p-1 rounded-t-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <button class="p-1 rounded-t-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 12H6"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
