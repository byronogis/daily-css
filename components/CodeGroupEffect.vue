<script setup>
import { useData } from 'vitepress'
import { ref, onMounted, onUpdated } from 'vue'

const { page } = useData()

const htmlStr = ref()
const cssStr = ref()

const updateView = () => {
  const htmlPre = document.querySelector('.vp-code-group > .blocks > .language-html > pre')
  const cssPre = document.querySelector('.vp-code-group > .blocks > .language-css > pre')
  htmlStr.value = htmlPre.innerText
  cssStr.value = cssPre.innerText
}

onMounted(() => {
  updateView()
})

onUpdated(() => {
  updateView()
})

</script>

<template>
  <div class="container-css" v-html="`<style>${cssStr}</style>`"></div>
  <div class="container-html" v-html="`${htmlStr}`"></div>
</template>
