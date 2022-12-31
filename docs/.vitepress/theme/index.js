// See https://vitepress.vuejs.org/guide/theme-introduction

import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CodeGroupView from '../../../components/CodeGroupView.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('CodeGroupView', CodeGroupView)
  },
}
