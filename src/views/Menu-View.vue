<script setup>

import { switchThemeMode } from '@/toolbag/StyleHelper.js'
import { onMounted, ref } from 'vue'
import { Timer } from '@/toolbag/lib1236cx4tyyy.js'
import ButtonCpnt from '@/components/Button-Cpnt.vue'

let menuFish = ref()
let menuSuancai = ref()
let menuUnderscore = ref()

onMounted(() => {
})

function setCharAt(str, index, char) {
  if (index < 0 || index >= str.length) {
    return str
  }
  return str.substring(0, index) + char + str.substring(index + 1)
}

const randStr = '!@#$%*()-=+{}[]?/~'

let str = 'Suancai'
let tt = -1
let lastIdx = -1
let timer = new Timer().timeMs(1000).callback((t) => {
  let v = t.num / t.den
  v = Math.floor(v * 50)
  if (v > tt) {
    let idx = Math.floor(Math.random() * str.length)
    if (idx === lastIdx) {
      idx = (idx + 1) % str.length
    }
    lastIdx = idx
    str = setCharAt(str, idx, randStr[Math.floor(Math.random() * randStr.length)])
    menuSuancai.value.innerText = str
  }
  tt = v
})

let glitching = false

function beginGlitch() {
  if (glitching) {
    return
  }
  glitching = true
  str = 'Suancai'
  menuUnderscore.value.style.visibility = 'hidden'
  menuUnderscore.value.classList.remove('twinkle-code')
  timer.run().then(() => {
    let template = 'Suancai'
    let idx = -1
    let itv = setInterval(() => {
      if (idx < template.length) {
        menuSuancai.value.innerText = setCharAt(
          setCharAt(menuSuancai.value.innerHTML, idx, template.charAt(idx)),
          idx + 1,
          '_'
        )
        idx++
        if (idx >= template.length) {
          menuUnderscore.value.style.visibility = 'visible'
        }
      } else {
        clearInterval(itv)
        glitching = false
        menuUnderscore.value.classList.add('twinkle-code')
      }
    }, 200)
  })
}

function switchTheme() {
  switchThemeMode()
  window.postMessage('canvas:switch')
}

function openGithub() {
  window.open('https://github.com/suricsun', '_blank')
}

/**
 * 使用的开源代码
 */
function openCodeCredit() {

}
</script>

<template>
  <div class="fill-x" style="display: flex;flex-direction: column;justify-content: center;">
    <div style="height: 4em">

    </div>
    <div class="fill-x flx-x flx-center"
         style="user-select: none;">
      <div class="flx-x" style="justify-content: space-between;width: 60%">
        <div class="flx-x f-size-2 flx-center"
             style="font-weight: bold;user-select: none;font-family: 'Cascadia Mono',serif"
             @mouseenter="beginGlitch" @click="beginGlitch">
          <div style="width: fit-content;height: fit-content">
            <div class="flx flx-x flx-center">
              <div ref="menuSuancai" class="gradient-text" style="width: fit-content;height: fit-content;">
                Suancai
              </div>
              <div ref="menuUnderscore" class="gradient-text twinkle-code"
                   style="width: fit-content;height: fit-content;">
                _
              </div>
              <div ref="menuFish" id="menu-fish" class="rotate" style="width: fit-content;height: fit-content;">
                🦈
              </div>
            </div>
            <div class="gradient-text f-size-0d5 flx flx-center"
                 style="width: fit-content;height: fit-content;font-family: 'Smiley Sans',serif;font-weight: normal">
              酸菜鱼
            </div>
          </div>
        </div>
        <div class="flx-x" style="user-select: none;">
          <ButtonCpnt @click="openCodeCredit" style="width: 1.5em;height: 1.5em">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 width="100%" height="100%" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </ButtonCpnt>
          <ButtonCpnt @click="openGithub" style="width: 1.5em;height: 1.5em">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clip-rule="evenodd" />
            </svg>
          </ButtonCpnt>
          <ButtonCpnt @click="switchTheme" style="width: 1.5em;height: 1.5em">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 width="100%" height="100%" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z" />
            </svg>
          </ButtonCpnt>
        </div>
      </div>
    </div>
    <div style="height: 2em">

    </div>
  </div>
</template>

<style scoped>
@keyframes rotate-kf {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes twinkle-code-kf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.gradient-text {
  animation: gradient-text-kf 20s ease-in-out infinite alternate;
}

.twinkle-code {
  animation: twinkle-code-kf .5s ease-in-out infinite alternate-reverse,
  gradient-text-kf 20s ease-in-out infinite alternate;;
}

@keyframes gradient-text-kf {
  0% {
    color: #ff8080;
  }
  10% {
    color: #ffc080;
  }
  20% {
    color: #ffee7e;
  }
  30% {
    color: #d4ff80;
  }
  40% {
    color: #a2ff83;
  }
  50% {
    color: #7fffdd;
  }
  60% {
    color: #81f0ff;
  }
  70% {
    color: #8187ff;
  }
  80% {
    color: #bc86ff;
  }
  90% {
    color: #f175c6;
  }
  100% {
    color: #ff849b;
  }
}

.rotate {
  animation: rotate-kf 2s linear infinite reverse;
}
</style>

