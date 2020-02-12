const lighthouse = require('lighthouse')
const chromeLauncher = require('chrome-launcher')

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher
    .launch({ chromeFlags: opts.chromeFlags })
    .then((chrome) => {
      opts.port = chrome.port
      return lighthouse(url, opts, config).then((results) => {
        // use results.lhr for the JS-consumable output
        // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
        // use results.report for the HTML/JSON/CSV output as a string
        // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
        return chrome.kill().then(() => results.lhr)
      })
    })
}

const opts = {
  chromeFlags: ['--show-paint-rects']
}

// Usage:
launchChromeAndRunLighthouse('https://movies-series-guide.firebaseapp.com/movies', opts).then((results) => {
  console.log({ results })
  // Use results!
})
