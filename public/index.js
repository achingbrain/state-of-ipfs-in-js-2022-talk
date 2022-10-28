import {
  createTerminal
} from 'terminatorator'
import md from './md.js'

import slide0 from './slides/0.md?raw'
import slide1 from './slides/1.md?raw'
import slide2 from './slides/2.md?raw'
import slide3 from './slides/3.md?raw'
import slide4 from './slides/4.md?raw'
import slide5 from './slides/5.md?raw'
import slide6 from './slides/6.md?raw'
import slide7 from './slides/7.md?raw'
import slide8 from './slides/8.md?raw'
import slide9 from './slides/9.md?raw'
import slide10 from './slides/10.md?raw'
import slide11 from './slides/11.md?raw'
import slide12 from './slides/12.md?raw'
import slide13 from './slides/13.md?raw'
import slide14 from './slides/14.md?raw'
import slide15 from './slides/15.md?raw'
import slide16 from './slides/16.md?raw'

createTerminal(document.getElementById('terminal'), {
  welcome: `<pre style="font-family: monospace">
████████ ██   ██ ███████     ███████ ████████  █████  ████████ ███████
   ██    ██   ██ ██          ██         ██    ██   ██    ██    ██
   ██    ███████ █████       ███████    ██    ███████    ██    █████
   ██    ██   ██ ██               ██    ██    ██   ██    ██    ██
   ██    ██   ██ ███████     ███████    ██    ██   ██    ██    ███████


    ██████  ███████     ██ ██████  ███████ ███████     ██ ███    ██
   ██    ██ ██          ██ ██   ██ ██      ██          ██ ████   ██
   ██    ██ █████       ██ ██████  █████   ███████     ██ ██ ██  ██
   ██    ██ ██          ██ ██      ██           ██     ██ ██  ██ ██
    ██████  ██          ██ ██      ██      ███████     ██ ██   ████


            ██ ███████     ██████   ██████  ██████  ██████
            ██ ██               ██ ██  ████      ██      ██
            ██ ███████      █████  ██ ██ ██  █████   █████
       ██   ██      ██     ██      ████  ██ ██      ██
        █████  ███████     ███████  ██████  ███████ ███████
</pre>
<br/>`, // will be printed on start
  theme: 'interlaced', // || 'modern' || 'white' - can be changed at runtime
    // using the `theme` command
  commands: {
    '/usr/local/bin/md': md
  }, // see `Adding custom commands` below
  files: {
    '~/Documents/talks/ipfs-in-js-2022/0.md': {
      content: slide0
    },
    '~/Documents/talks/ipfs-in-js-2022/1.md': {
      content: slide1
    },
    '~/Documents/talks/ipfs-in-js-2022/2.md': {
      content: slide2
    },
    '~/Documents/talks/ipfs-in-js-2022/3.md': {
      content: slide3
    },
    '~/Documents/talks/ipfs-in-js-2022/4.md': {
      content: slide4
    },
    '~/Documents/talks/ipfs-in-js-2022/5.md': {
      content: slide5
    },
    '~/Documents/talks/ipfs-in-js-2022/6.md': {
      content: slide6
    },
    '~/Documents/talks/ipfs-in-js-2022/7.md': {
      content: slide7
    },
    '~/Documents/talks/ipfs-in-js-2022/8.md': {
      content: slide8
    },
    '~/Documents/talks/ipfs-in-js-2022/9.md': {
      content: slide9
    },
    '~/Documents/talks/ipfs-in-js-2022/10.md': {
      content: slide10
    },
    '~/Documents/talks/ipfs-in-js-2022/11.md': {
      content: slide11
    },
    '~/Documents/talks/ipfs-in-js-2022/12.md': {
      content: slide12
    },
    '~/Documents/talks/ipfs-in-js-2022/13.md': {
      content: slide13
    },
    '~/Documents/talks/ipfs-in-js-2022/14.md': {
      content: slide14
    },
    '~/Documents/talks/ipfs-in-js-2022/15.md': {
      content: slide15
    },
    '~/Documents/talks/ipfs-in-js-2022/16.md': {
      content: slide16
    }
  },
  history: 'cli-history', // the localStorage key used to store terminal history
  user: 'alex' // which user to be logged in as
})
