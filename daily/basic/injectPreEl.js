/**
 * 
 * @param {string} selector 
 * @returns element
 */
function findEl(selector) {
  if (typeof selector !== 'string') return
  return document.querySelector(selector)
}

/**
 * 插入 pre 元素
 * 
 * @param {string[]} sourceSelectors elements that prepare to transform
 * @param {string} targetSelector element that inject target
 */
function injectPreDl(sourceSelectors, targetSelector) {
  if (!Array.isArray(sourceSelectors)) return
  if (!targetSelector || typeof targetSelector !== 'string') return
  sourceSelectors.forEach(selector => {
    const pre = document.createElement('pre')
    const el = findEl(selector)
    pre.innerText = el?.innerHTML
    findEl(targetSelector)?.append(pre)
  })
}