import * as React from "react";
export const App: React.FC = () => {
  React.useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      // use `url` here inside the callback because it's asynchronous!
      console.log("url => ", url);
    });
  }, []);
  return (
    <div>
      <h2>Hello World !</h2>
    </div>
  );
};
