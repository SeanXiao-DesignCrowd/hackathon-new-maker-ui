<script setup lang="ts"></script>

<template>
  <div class="flex justify-between w-full">
    <div
      class="flex w-52 flex-col gap-4 p-4 border-2 rounded-xl border-base-300 bg-base-100 cursor-pointer"
    >
      <div class="flex items-center gap-4">
        <div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div class="flex flex-col gap-4">
          <div class="skeleton h-4 w-12"></div>
          <div class="skeleton h-4 w-20"></div>
        </div>
      </div>
      <div class="skeleton h-32 w-full"></div>
    </div>

    <div
      class="flex w-52 flex-col gap-4 p-4 border-2 rounded-xl border-base-300 bg-base-100 cursor-pointer"
    >
      <div class="skeleton h-32 w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
  </div>
</template>
