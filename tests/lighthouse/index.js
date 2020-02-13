const lighthouse = require('lighthouse')
const chromeLauncher = require('chrome-launcher')

const launchChromeAndRunLighthouse = async ({
  url = 'https://movies-series-guide.firebaseapp.com/movies',
  opts = { onlyCategories: ['pwa'] },
  config = null,
}) => {
  const { chromeFlags } = opts
  const chrome = await chromeLauncher.launch({ chromeFlags })
  opts.port = chrome.port
  const results = await lighthouse(url, opts, config)
  await chrome.kill()
  const { lhr } = results
  const { audits } = lhr
  console.log(audits)
}

launchChromeAndRunLighthouse({})
