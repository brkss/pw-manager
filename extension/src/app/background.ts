chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Background got a message!");
  console.log("message", message);
  console.log("sender : ", sender);

  sendResponse({});
});

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  // use `url` here inside the callback because it's asynchronous!
  console.log("url -> ", url);
});
