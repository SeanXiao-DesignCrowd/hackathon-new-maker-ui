<script setup lang="ts">
import { ref } from 'vue'

const themes = ['light', 'dark', 'black', 'luxury', 'cyberpunk']

const currentTheme = ref('light')
const showSuccessAlert = ref(false)
const successAlertContent = ref('')
const showInfoAlert = ref(false)
const infoAlertContent = ref('')

const toggleSuccessAlert = (content: string) => {
  showSuccessAlert.value = true
  successAlertContent.value = content
  setTimeout(() => {
    showSuccessAlert.value = false
    successAlertContent.value = ''
  }, 1000)
}

const toggleInfoAlert = (content: string) => {
  showInfoAlert.value = true
  infoAlertContent.value = content
  setTimeout(() => {
    showInfoAlert.value = false
    infoAlertContent.value = ''
  }, 1000)
}

const updateTheme = (theme: string) => {
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
  <div class="h-screen" :data-theme="currentTheme">
    <nav class="navbar bg-base-300">
      <div class="flex-1">
        <div class="breadcrumbs text-lg">
          <ul>
            <li>
              <a><img src="@/assets/logo.svg" alt="Logo" class="p-2" /></a>
            </li>
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

    <div id="alerts" class="absolute top-22 w-full">
      <div v-if="showSuccessAlert" role="alert" class="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ successAlertContent }}</span>
      </div>

      <div v-if="showInfoAlert" role="alert" class="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ infoAlertContent }}</span>
      </div>
    </div>

    <main class="p-4 w-full flex gap-4">
      <div class="left-side-container flex flex-col flex-grow gap-4 items-center">
        <div id="maker-canvas" class="hero border-4 border-dashed" style="height: 600px">
          <div class="hero-content text-center">
            <h1 class="text-5xl font-bold">this is the canvas</h1>
          </div>
        </div>

        <div id="maker-bottom-container" class="rounded-box bg-base-200 absolute bottom-4">
          <div class="hero-content text-center">
            <button class="btn btn-primary w-36" @click="toggleSuccessAlert('Your logo is saved!')">
              Save progress
            </button>
            <button
              class="btn btn-secondary w-36"
              @click="toggleInfoAlert('Your logo is downloading...')"
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <div class="right-side-container flex-grow">
        <div id="tabs" class="flex flex-col"></div>
        <div class="rounded-box bg-base-200 p-4">Sidebar</div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
