chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.purpose == "requestPronouns") {
    fetch("http://178.128.15.23:3000/meta/" + request.username)
      .then((res) => res.json())
      .then((res) => {
        sendResponse(res);
      })
      .catch(() => {
        sendResponse({ pronouns: `Something broke :(` });
      });
  }
  return true;
});
