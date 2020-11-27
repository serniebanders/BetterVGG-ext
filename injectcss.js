let styleSheet = window.document.createElement("style");
styleSheet["type"] = "text/css";
styleSheet.textContent = `
div.msg-chat.msg-user > a.user:after {
    content: attr(data-pronouns);
}

.chat-emote-widepeepoSad {
background-image: url(https://cdn.frankerfacez.com/emoticon/303899/1);
height:32px;
width:80px;
margin-top: -9px !important;
background-repeat: no-repeat;
}
.chat-emote-KEKWait,.chat-emote-peepoWeen,.chat-emote-4WeirdW,.chat-emote-pepePoint,.chat-emote-SUGOI,.chat-emote-peepoHey,.chat-emote-Sadge,.chat-emote-blobDance,.chat-emote-KEKW,.chat-emote-FeelsStrongMan,.chat-emote-KKonaW,.chat-emote-modCheck,.chat-emote-peepoSnow,.chat-emote-PogO,.chat-emote-HYPERPOGO,.chat-emote-PepeLa,.chat-emote-peepoClap,.chat-emote-monkaW,.chat-emote-ItalianHands,.chat-emote-catJAM,.chat-emote-PogU {
background-size: 32px 32px;
width:32px;
height:32px;
margin-top: -24px !important;
background-repeat: no-repeat;
}
.chat-emote-peepoWeird{
background-image: url(https://cdn.frankerfacez.com/emoticon/243682/1);
height:23px;
width:32px;
margin-top: -9px !important;
background-repeat: no-repeat;
}
.chat-emote-KEKWait{
background-image: url(https://cdn.betterttv.net/emote/5fb6a1b2c242076f1a04d3c8/1x);
}
.chat-emote-peepoWeen{
background-image: url(https://cdn.betterttv.net/emote/5f747148ce8bc74a942400dc/1x);
}
.chat-emote-4WeirdW{
background-image: url(https://cdn.frankerfacez.com/emoticon/325413/1);
}
.chat-emote-pepePoint{
background-image: url(https://cdn.frankerfacez.com/emoticon/377799/1);
}
.chat-emote-SUGOI {
background-image: url(https://cdn.betterttv.net/emote/5f7f6ddde016be4a882f5db5/1x);
}
.chat-emote-peepoHey{
background-image: url(https://cdn.betterttv.net/emote/5c0e1a3c6c146e7be4ff5c0c/1x);
}
.chat-emote-Sadge{
background-image: url(https://cdn.betterttv.net/emote/5f3296f23212445d6fb3daaf/1x);
}
.chat-emote-blobDance{
background-image: url(https://cdn.betterttv.net/emote/5de265d260bd0702dc510c5e/1x);
}
.chat-emote-KEKW {
background-image: url(https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/1x);
}
.chat-emote-FeelsStrongMan {
background-image: url(https://cdn.betterttv.net/emote/58facc4aaffae60eac088397/1x);
}
.chat-emote-KKonaW{
background-image: url(https://cdn.betterttv.net/emote/598215f47e71d43314a80ad2/1x);
}
.chat-emote-catJAM {
background-image: url(https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/1x);
}
.chat-emote-modCheck {
background-image: url(https://cdn.betterttv.net/emote/5eed985cf91de70dea5b94e8/1x);
}
.chat-emote-Kappa{
background-size: 29px 32px;
width:29px;
height:32px;
margin-top:-24px !important;
background-repeat: no-repeat;
background-image: url(https://www.twitch.tv/creatorcamp/assets/uploads/kappa.png);
}
.chat-emote-Kapp {
background-size: 17px 32px;
width:17px;
height:32px;
margin-top:-24px !important;
background-repeat: no-repeat;
background-image: url(https://cdn.frankerfacez.com/emoticon/218860/1);
}
.chat-emote-peepoSnow {
background-image: url(https://cdn.betterttv.net/emote/5f91c1486f583802e38974aa/1x);
}
.chat-emote-PogO {
background-image: url(https://cdn.frankerfacez.com/emoticon/401202/1);
}
.chat-emote-HYPERPOGO {
background-image: url(https://cdn.betterttv.net/emote/5f16839065fe924464ee2c29/1x);
}
.chat-emote-ItalianHands {
background-image: url(https://cdn.betterttv.net/emote/5b22d9205ea9d964f400068e/1x);
}
.chat-emote-PepeLa {
background-image: url(https://cdn.frankerfacez.com/emoticon/355871/1);
}
.chat-emote-monkaW {
background-image: url(https://cdn.betterttv.net/emote/59ca6551b27c823d5b1fd872/1x);
}
.chat-emote-peepoClap {
background-image: url(https://cdn.betterttv.net/emote/5d38aaa592fc550c2d5996b8/1x);
}
.chat-emote-peepoWow {
background-size: 32px 22px;
width:32px;
height:22px;
margin-top:-14px !important;
background-repeat: no-repeat;
background-image: url(https://cdn.frankerfacez.com/emoticon/280448/1);
}
.chat-emote-FeelsOkayMan {
background-size: 32px 31px;
width:32px;
height:31px;
margin-top:-24px !important;
background-repeat: no-repeat;
background-image: url(https://cdn.frankerfacez.com/emoticon/145947/1);
}
.chat-emote-PogU {
background-image: url(https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/1x);
}
    `;
window.document.head.appendChild(styleSheet);
