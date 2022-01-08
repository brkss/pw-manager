chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Background got a message!");

  const url: string = sender.url;
  console.log("URL => ", url);
  // send url to api

  sendResponse({});
});
