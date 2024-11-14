<script setup lang="ts">
import { ref } from 'vue'

const fontSpacing = ref(40)
const isCurved = ref(false)

const handleFontSpacingChange = (value: number) => {
  fontSpacing.value = value
}

const toggleCurved = () => {
  isCurved.value = !isCurved.value
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <div class="label text-2xl font-bold">Edit Text</div>
      <button class="btn btn-accent btn-sm w-36">Add text</button>
    </div>
    <div class="divider divider-neutralm m-0" />
    <div class="flex flex-col gap-6 items-center justify-center">
      <input type="text" placeholder="Logo Text Here" class="input input-bordered w-full" />

      <div id="text-spacing" class="flex gap-4 w-full justify-between">
        <div class="label w-24">Spacing</div>
        <div class="flex items-center w-full">
          <input
            type="range"
            min="0"
            max="100"
            v-model="fontSpacing"
            @change="handleFontSpacingChange(fontSpacing)"
            class="range range-accent"
          />
        </div>
        <input
          type="number"
          min="0"
          max="100"
          v-model="fontSpacing"
          class="input input-bordered w-16"
        />
      </div>

      <div class="form-control flex justify-between w-full">
        <label class="label cursor-pointer">
          <span class="label-text-lg">Curved Text</span>
          <input
            type="checkbox"
            class="toggle toggle-accent"
            :checked="isCurved"
            @change="toggleCurved"
          />
        </label>
      </div>
    </div>
  </div>
</template>
