<script setup lang="ts">
import { ref } from 'vue'
import { TABS, THEMES } from './constants/constants'
import Text from './components/SiderBar/SbText.vue'
import Shape from './components/SiderBar/SbShape.vue'
import Layout from './components/SiderBar/SbLayout.vue'

const themes = [...THEMES, 'sean']

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
  }, 2000)
}

const toggleDownloadingToast = (content: string) => {
  showDownloadingToast.value = true
  downloadingToastContent.value = content
  setTimeout(() => {
    showDownloadingToast.value = false
    downloadingToastContent.value = ''
  }, 2000)
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
  <div class="h-screen w-screen" :data-theme="currentTheme">
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
        <button class="btn btn-neutral m-2" onclick="logout_modal.show()">Log out</button>
        <dialog id="logout_modal" class="modal">
          <div class="modal-box">
            <h3 class="text-2xl font-bold">No!</h3>
            <p class="py-4 text-lg">There is no escape from this!</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn text-lg">Fair enough</button>
              </form>
            </div>
          </div>
        </dialog>
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

    <main class="p-6 w-full flex gap-6 h-full" :style="{ height: 'calc(100vh - 88px)' }">
      <div
        class="left-side-container flex flex-col flex-grow h-full w-2/3 gap-4 items-center justify-between"
      >
        <ul class="menu menu-horizontal bg-base-200 rounded-box">
          <li>
            <a class="tooltip" data-tip="Reset">
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Arrow / Arrow_Reload_02">
                  <path
                    id="Vector"
                    d="M14 16H19V21M10 8H5V3M19.4176 9.0034C18.8569 7.61566 17.9181 6.41304 16.708 5.53223C15.4979 4.65141 14.0652 4.12752 12.5723 4.02051C11.0794 3.9135 9.58606 4.2274 8.2627 4.92661C6.93933 5.62582 5.83882 6.68254 5.08594 7.97612M4.58203 14.9971C5.14272 16.3848 6.08146 17.5874 7.29157 18.4682C8.50169 19.3491 9.93588 19.8723 11.4288 19.9793C12.9217 20.0863 14.4138 19.7725 15.7371 19.0732C17.0605 18.374 18.1603 17.3175 18.9131 16.0239"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a class="tooltip" data-tip="Undo">
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Arrow / Arrow_Undo_Up_Left">
                  <path
                    id="Vector"
                    d="M7 13L3 9M3 9L7 5M3 9H16C18.7614 9 21 11.2386 21 14C21 16.7614 18.7614 19 16 19H11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a class="tooltip" data-tip="Redo">
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Arrow / Arrow_Undo_Up_Right">
                  <path
                    id="Vector"
                    d="M17 13L21 9M21 9L17 5M21 9H8C5.23858 9 3 11.2386 3 14C3 16.7614 5.23858 19 8 19H13"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>
        <div
          id="maker-canvas"
          class="hero border-4 border-dashed border-base-300 bg-base-200 flex-grow"
        >
          <div class="hero-content text-center">
            <img
              src="@/assets/radiohead-logo.png"
              alt="Canvas"
              :style="{ minHeight: '50vh', maxHeight: '60vh' }"
            />
          </div>
        </div>

        <div id="maker-bottom-container" class="hero">
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

      <div class="right-side-container flex flex-col flex-grow h-full w-1/3">
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
            <Shape />
          </div>
          <div v-if="currentTab === TABS.LAYOUT">
            <Layout />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
