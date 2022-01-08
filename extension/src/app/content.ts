chrome.runtime.sendMessage({}, (response) => {
  var checkReady = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(checkReady);

      //const url = null;
      //const passwordPrompt = null;
      //const identPrompt = null;
      console.log("We're in the injected content script!");
    }
  });
});

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  console.log("url =>>", url);
  // use `url` here inside the callback because it's asynchronous!
});
