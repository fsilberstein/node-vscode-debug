const init = () => {
  document.querySelector('#debug-button').addEventListener('click', () => {
    debugger  // eslint-disable-line
    console.log('you debugged and clicked')
  })
}

if (document.readyState === 'complete') {
  init()
} else {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      init()
    }
  })
}
