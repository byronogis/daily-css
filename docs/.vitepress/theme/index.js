// See https://vitepress.vuejs.org/guide/theme-introduction

import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CodeGroupEffect from '../../../components/CodeGroupEffect.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('CodeGroupEffect', CodeGroupEffect)
  },
}
