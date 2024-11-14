<script setup lang="ts">
import { ref } from 'vue'

// Available DaisyUI themes
const themes = ['light', 'dark', 'black', 'luxury', 'cyberpunk']

const currentTheme = ref(localStorage.getItem('theme') || 'light')

const updateTheme = (theme: string) => {
  console.log(theme)
  currentTheme.value = theme
  localStorage.setItem('theme', theme)
}

// Load saved theme on mount
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme && themes.includes(savedTheme)) {
    currentTheme.value = savedTheme
  }
}
</script>

<template>
  <div class="min-h-screen" :data-theme="currentTheme">
    <nav class="navbar bg-base-300">
      <div class="flex-1 gap-2">
        <img src="@/assets/logo.svg" alt="Logo" class="p-2" />
        <div class="breadcrumbs text-lg">
          <ul>
            <li><a>Home</a></li>
            <li><a>Logo</a></li>
            <li>Sean's Logo</li>
          </ul>
        </div>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn m-1 capitalize">{{ currentTheme }}</div>
          <ul
            tabindex="0"
            class="menu dropdown-content bg-base-200 rounded-box z-[1] w-36 p-2 shadow"
          >
            <li v-for="theme in themes" :key="theme" class="capitalize" @click="updateTheme(theme)">
              <a>{{ theme }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container mx-auto p-4"></main>
  </div>
</template>

<style scoped></style>
