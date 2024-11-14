<script setup lang="ts">
import { ref } from 'vue'
import { TABS } from './constants/constants'
import Text from './components/SiderBar/SbText.vue'

const themes = ['light', 'dark', 'black', 'luxury', 'cyberpunk']

const currentTheme = ref('light')
const showSuccessAlert = ref(false)
const successAlertContent = ref('')
const showDownloadingToast = ref(false)
const downloadingToastContent = ref('')
const currentTab = ref(TABS.TEXT)

const toggleSuccessAlert = (content: string) => {
  showSuccessAlert.value = true
  successAlertContent.value = content
  setTimeout(() => {
    showSuccessAlert.value = false
    successAlertContent.value = ''
  }, 1000)
}

const toggleDownloadingToast = (content: string) => {
  showDownloadingToast.value = true
  downloadingToastContent.value = content
  setTimeout(() => {
    showDownloadingToast.value = false
    downloadingToastContent.value = ''
  }, 3000)
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

    <div id="alerts" class="absolute top-22 w-full z-[1]">
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
    </div>

    <div v-if="showDownloadingToast" class="toast">
      <div class="alert alert-info">
        <span>{{ downloadingToastContent }}</span>
      </div>
    </div>

    <main class="p-6 w-full flex gap-6">
      <div class="left-side-container flex flex-col flex-grow w-2/3 gap-6 items-center h-full">
        <div id="maker-canvas" class="hero border-4 border-dashed border-base-300">
          <div class="hero-content text-center">
            <img src="@/assets/radiohead-logo.png" alt="Canvas" :style="{ height: '66vh' }" />
          </div>
        </div>

        <div id="maker-bottom-container" class="hero position-absolute border-6">
          <div class="hero-content text-center flex gap-16 rounded-box bg-base-200">
            <button class="btn btn-primary w-36" @click="toggleSuccessAlert('Your logo is saved!')">
              Save progress
            </button>
            <button
              class="btn btn-secondary w-36"
              @click="toggleDownloadingToast('Your logo is downloading...')"
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <div class="right-side-container flex-grow w-1/3" :style="{ height: '80vh' }">
        <div role="tablist" class="tabs tabs-lifted">
          <a
            role="tab"
            class="tab"
            :class="{
              'tab-active': currentTab === TABS.TEXT,
              '!bg-base-200': currentTab === TABS.TEXT,
            }"
            @click="currentTab = TABS.TEXT"
            >Text</a
          >
          <a
            role="tab"
            class="tab"
            :class="{
              'tab-active': currentTab === TABS.SHAPE,
              '!bg-base-200': currentTab === TABS.SHAPE,
            }"
            @click="currentTab = TABS.SHAPE"
            >Shape</a
          >
          <a
            role="tab"
            class="tab"
            :class="{
              'tab-active': currentTab === TABS.LAYOUT,
              '!bg-base-200': currentTab === TABS.LAYOUT,
            }"
            @click="currentTab = TABS.LAYOUT"
            >Layout</a
          >
        </div>
        <div
          class="bg-base-200 p-4 h-full border border-t-0 border-base-300"
          :class="{
            'rounded-b-lg': currentTheme !== 'black' && currentTheme !== 'cyberpunk',
          }"
        >
          <div v-if="currentTab === TABS.TEXT">
            <Text />
          </div>
          <div v-if="currentTab === TABS.SHAPE">
            <shape />
          </div>
          <div v-if="currentTab === TABS.LAYOUT">
            <layout />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
