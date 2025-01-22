function switchThemeMode() {
  if (document.body.classList.contains('light-mode')) {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
    localStorage.setItem('theme', 'dark-mode')
  } else if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
    localStorage.setItem('theme', 'light-mode')
  } else {
    // * Default
    document.body.classList.add('light-mode')
    localStorage.setItem('theme', 'light-mode')
  }
}

function switchFontStyle(className) {
  document.body.classList.remove('normal-font-size')
  document.body.classList.add(className)
  localStorage.setItem('font', 'normal-font-size')
}

export { switchThemeMode, switchFontStyle }
