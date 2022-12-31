import fg from 'fast-glob'
import matter from 'gray-matter'

const sidebarItemMap = (source) => {
  if (!Array.isArray(source)) return '参数需要为数组'

  return source.map(file => {
    const { data, path } = matter.read(file)
    return {
      text: data.title,
      link: path.slice(4)
    }
  })
}

const guideFiles = fg.sync('docs/guide/**/*.md')
const guideItems = sidebarItemMap(guideFiles)

const practiceFiles = fg.sync('docs/practice/**/*.md')
const practiceItems = sidebarItemMap(practiceFiles)

export const sidebarArr = [
  {
    text: '引导',
    items: [...guideItems],
  },
  {
    text: '练习记录',
    items: [...practiceItems],
  }
]
