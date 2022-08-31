const iframe = document.querySelector('.dc-iframe')

const dateEl = document.querySelector('#dhd-date')
console.dir(dateEl)
dateEl.addEventListener('change', e => {
  let date = e.target.value + ''
  date &&= date.replace(/-/g, '')
  date ||= 'basic/desc'
  console.log(date);

  iframe.setAttribute('src', `./daily/${date}.html`)
})

const dateClearEl = document.querySelector('.dhd-clear')
dateClearEl.addEventListener('click', e => {
  dateEl.value = ''
  iframe.setAttribute('src', `./daily/basic/desc.html`)
})
