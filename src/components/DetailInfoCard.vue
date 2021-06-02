<template>
  <div
    class="flex items-center flex-col shadow overflow-hidden rounded-tl-3xl rounded-md bg-white hover:shadow-xl"
  >
    <div class="max-h-56 h-full relative">
      <img
        class="object-cover h-full w-full"
        :src="hotel.imageUrl"
        alt="image-1"
      />
      <div
        @click="hotel.isLike = !hotel.isLike"
        class="bg-gray-800 cursor-pointer absolute w-9 h-9 top-3 bg-opacity-50 text-white left-4 inline-flex items-center justify-center rounded-full"
      >
        <svg
          v-if="hotel.isLike"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>

      <div
        class="absolute bottom-0 right-0 border-t-4 border-l-4 text-white rounded-tl-2xl p-4 bg-gradient-to-br from-purple-300 to-purple-600"
      >
        <span class="font-bold">${{ hotel.propertyBuildingPrice }} /</span>
        <span> night</span>
      </div>
    </div>
    <div class="w-full p-5">
      <div class="flex items-start justify-between w-full">
        <div>
          <h1 class="font-bold text-lg text-gray-800">
            {{ hotel.propertyBuildingName }}
          </h1>
          <p class="text-gray-400 text-sm">
            Entire house in Brooklyn, {{ hotel.propertyBuildingAddress }}
          </p>
        </div>
        <div class="text-gray-400">
          {{ hotel.status ? "rent" : "available" }}
        </div>
      </div>
      <div class="flex items-center border-t border-b space-x-4 p-2 my-3">
        <div class="inline-flex items-center space-x-1.5 font-bold text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span>{{ hotel.badroom }}bd.</span>
        </div>
        <div class="inline-flex items-center space-x-1.5 font-bold text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span>{{ hotel.bathroom }}ba.</span>
        </div>
        <div class="inline-flex items-center space-x-1.5 font-bold text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <span>{{ hotel.sizeSquare }}sqft.</span>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="py-2 px-3 text-gray-700 hover:bg-gray-50 transition font-semibold rounded inline-flex items-center space-x-2 bg-white border"
        >
          <svg
            v-if="hotel.isRare"
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
          <svg
            v-else
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
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
          <span>{{
            hotel.isRare ? "Rare find" : hotel.isSuperHost ? "Superhost" : ""
          }}</span>
        </button>
        <button class="py-2 px-3 text-gray-700 hover:bg-gray-50">
          More details
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EstateProperty } from "../types/InterfaceType";

export default defineComponent({
  props: {
    hotel: {
      type: Object as () => EstateProperty,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>