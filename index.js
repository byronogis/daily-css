const iframe = document.querySelector('.dc-iframe')

const dateEl = document.querySelector('#date')
dateEl.addEventListener('change', e => {
  let date = e.target.value + ''
  date &&= date.replace(/-/g, '')
  console.log(date);

  iframe.setAttribute('src', `./daily/${date}.html`)
})