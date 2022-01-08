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
