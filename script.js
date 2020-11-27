let emotes = [
  "peepoWeird",
  "KEKWait",
  "widepeepoSad",
  "Sadge",
  "blobDance",
  "KEKW",
  "FeelsStrongMan",
  "KKonaW",
  "modCheck",
  "Kappa",
  "Kapp",
  "peepoSnow",
  "PogO",
  "HYPERPOGO",
  "PepeLa",
  "peepoClap",
  "peepoWow",
  "monkaW",
  "FeelsOkayMan",
  "ItalianHands",
  "catJAM",
  "PogU",
  "peepoHey",
  "SUGOI",
  "pepePoint",
  "4WeirdW",
  "peepoWeen",
];

let globalPronouns = {};
var insertedEmotes = false;

var mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    mutation.addedNodes.forEach((node) => {
      if (node.querySelectorAll) {
        let nodes = node.querySelectorAll(".msg-user > a.user");
        nodes.forEach((node2) => {
          let username = node2.innerText.trim();
          if (globalPronouns[username] == undefined) {
            chrome.runtime.sendMessage(
              { purpose: "requestPronouns", username },
              (res) => {
                globalPronouns[username] = res.pronouns;
                if (res.pronouns == null) return;
                node2.setAttribute("data-pronouns", " (" + res.pronouns + ")");
              }
            );
          } else {
            node2.setAttribute(
              "data-pronouns",
              " (" + globalPronouns[username] + ")"
            );
          }
        });
        if (!insertedEmotes && node.id == "sub-emotes") {
          node.insertAdjacentHTML(
            "afterend",
            `
<div style="font-weight:900">BetterVGG Emotes</div>
<div class="emote-group" id="sub-emotes">${emotes
              .map(
                (emote) =>
                  '<div class="emote" style="padding: 0.1em;"><span title=' +
                  emote +
                  ' class="chat-emote chat-emote-' +
                  emote +
                  '">' +
                  emote +
                  "</span></div>"
              )
              .join("")}
`
          );
          insertedEmotes = true;
        }
      }
    });
  });
});

/*

    <div class="emote" style="padding: 0.1em;"><span title="peepoHands" class="chat-emote chat-emote-peepoHands">peepoHands</span></div>

    */

mutationObserver.observe(window.document.documentElement, {
  childList: true,
  subtree: true,
});
