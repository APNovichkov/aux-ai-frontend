(this["webpackJsonpaux-ai"]=this["webpackJsonpaux-ai"]||[]).push([[0],{39:function(e,c,s){},40:function(e,c,s){},70:function(e,c,s){"use strict";s.r(c);var a=s(0),t=s.n(a),i=s(7),n=s.n(i),o=(s(39),s(12)),r=s(4),l=(s(40),s(3)),d=s(18),j=s.n(d),h="https://aux-io-api.dev.novichkov.dev",m=function(e){return"".concat(h,"/get-file/").concat(e)},b=function(e){return"".concat(h,"/").concat(e,"/sample")},x=s(1),u=function(e){var c=e.toPlay,s=e.composer,t=e.url;return Object(a.useEffect)((function(){console.log("From Sample Player");var e=document.getElementById("".concat(s,"Audio"));c?e.play():e.pause()}),[c]),Object(x.jsx)("audio",{id:"".concat(s,"Audio"),className:"sample-audio-player",children:Object(x.jsx)("source",{src:t})})},p=function(e){var c=Object(a.useState)("chopin"),s=Object(l.a)(c,2),t=s[0],i=s[1],n=Object(a.useState)(!1),r=Object(l.a)(n,2),d=r[0],j=r[1],h=function(e){console.log("Handling composer click: ",e),j(e!==t||!d),i(e)};return Object(x.jsx)("div",{className:"home-wrapper",children:Object(x.jsxs)("div",{className:"home",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-1"}),Object(x.jsxs)("div",{className:"col-md-10",children:[Object(x.jsxs)("div",{className:"hero-text text-center",children:["AI Generated Music in the Style of"," ",Object(x.jsxs)("span",{className:"blue-text word",children:[Object(x.jsx)("span",{children:"Chopin"}),Object(x.jsx)("span",{children:"Tchaikovsky"}),Object(x.jsx)("span",{children:"Rachmaninov"})]})]}),Object(x.jsx)("div",{className:"hero-action",children:Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(x.jsx)(o.b,{to:"/create",className:"compose-button hero-action-item",children:"Go Create"})})})]}),Object(x.jsx)("div",{className:"col-md-1"})]}),Object(x.jsxs)("div",{className:"composers-wrapper text-center",children:[Object(x.jsxs)("div",{className:"composers",children:[Object(x.jsx)("span",{className:"fas fa-user"})," Composers"]}),Object(x.jsx)("div",{className:"composers-description",children:"The behind the scenes Deep Learning model was trained on musical pieces of these composers, focusing on the piano part in the training MIDI files. Click each card to hear a sample of what the model generated."}),Object(x.jsx)("div",{className:"composer-list-wrapper",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-2"}),Object(x.jsx)("div",{className:"col-md-8",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-xl-4",children:[Object(x.jsxs)("div",{onClick:function(){return h("chopin")},className:"composer-item",children:[d&&"chopin"===t?Object(x.jsx)("span",{className:"far fa-stop-circle"}):Object(x.jsx)("span",{className:"far fa-play-circle"})," ","Chopin"]}),Object(x.jsx)(u,{toPlay:"chopin"===t&&d,composer:"chopin",url:b("chopin")})]}),Object(x.jsxs)("div",{className:"col-xl-4",children:[Object(x.jsxs)("div",{onClick:function(){return h("rachmaninov")},className:"composer-item",children:[d&&"rachmaninov"===t?Object(x.jsx)("span",{className:"far fa-stop-circle"}):Object(x.jsx)("span",{className:"far fa-play-circle"})," ","Rachmaninov"]}),Object(x.jsx)(u,{toPlay:"rachmaninov"===t&&d,composer:"rachmaninov",url:b("rachmaninov")})]}),Object(x.jsxs)("div",{className:"col-xl-4",children:[Object(x.jsxs)("div",{onClick:function(){return h("tchaikovsky")},className:"composer-item",children:[d&&"tchaikovsky"===t?Object(x.jsx)("span",{className:"far fa-stop-circle"}):Object(x.jsx)("span",{className:"far fa-play-circle"})," ","Tchaikovsky"]}),Object(x.jsx)(u,{toPlay:"tchaikovsky"===t&&d,composer:"tchaikovsky",url:b("tchaikovsky")})]})]})}),Object(x.jsx)("div",{className:"col-md-2"})]})})]})]})})},O=s(34),v=(s(69),function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"loading-card-overlay"}),Object(x.jsx)("div",{className:"loading-card-wrapper",children:Object(x.jsxs)("div",{className:"loading-card",children:[Object(x.jsx)("div",{className:"header",children:"Generating Your Song"}),Object(x.jsx)("div",{className:"description",children:"This will take a couple of seconds, please be patient!"}),Object(x.jsx)("div",{className:"animation",children:Object(x.jsx)("div",{className:"loading-gif",children:Object(x.jsx)("span",{className:"fas fa-music"})})})]})})]})}),N=function(e){var c=Object(a.useState)("chopin"),s=Object(l.a)(c,2),t=s[0],i=s[1],n=Object(a.useState)(250),o=Object(l.a)(n,2),r=o[0],d=o[1],b=Object(a.useState)(""),u=Object(l.a)(b,2),p=u[0],N=u[1],f=Object(a.useState)(!1),g=Object(l.a)(f,2),y=g[0],w=g[1],k=function(e){console.log("Generating music"),N(null),w(!0),j.a.get(function(e,c){return"".concat(h,"/generate?composerName=").concat(e,"&numNotes=").concat(c,"&rand=").concat(Math.floor(1e3*Math.random()))}(t,r)).then((function(e){console.log("res: ",e.data),N(e.data.song_id),w(!1)})).catch((function(e){console.log("err: ",e),w(!1)}))};return Object(x.jsx)("div",{className:"create-wrapper",children:Object(x.jsxs)("div",{className:"create text-center",children:[Object(x.jsxs)("div",{className:"composer-prompt-wrapper",children:[Object(x.jsxs)("div",{className:"composer-prompt",children:["Choose a ",Object(x.jsx)("span",{className:"blue-text",children:"Composer"})]}),Object(x.jsx)("div",{className:"composer-choices",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-2"}),Object(x.jsx)("div",{className:"col-md-8",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-xl-4",children:Object(x.jsx)("div",{onClick:function(){return i("chopin")},className:"composer-choice ".concat("chopin"===t&&"selected"),children:"Chopin"})}),Object(x.jsx)("div",{className:"col-xl-4",children:Object(x.jsx)("div",{onClick:function(){return i("rachmaninov")},className:"composer-choice ".concat("rachmaninov"===t&&"selected"),children:"Rachmaninov"})}),Object(x.jsx)("div",{className:"col-xl-4",children:Object(x.jsx)("div",{onClick:function(){return i("tchaikovsky")},className:"composer-choice ".concat("tchaikovsky"===t&&"selected"),children:"Tchaikovsky"})})]})}),Object(x.jsx)("div",{className:"col-md-2"})]})})]}),Object(x.jsxs)("div",{className:"num-notes-prompt-wrapper text-center",children:[Object(x.jsx)("div",{className:"num-notes-prompt",children:"Choose # of Notes to Generate"}),Object(x.jsx)("div",{className:"current-number-of-notes",children:r}),Object(x.jsx)("div",{className:"num-notes-slider-wrapper",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-3"}),Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsx)("div",{className:"num-notes-slider",children:Object(x.jsx)(O.a,{min:100,max:400,onChange:d,railStyle:{backgroundColor:"#000D6F",height:"6px"},dotStyle:{backgroundColor:"#439dec",border:"1px solid #000D6F"},activeDotStyle:{backgroundColor:"#439dec",border:"1px solid #000D6F"},handleStyle:[{backgroundColor:"#ffffff",border:"3px solid #000D6F",height:"18px",width:"18px"}],trackStyle:[{backgroundColor:"#439dec",height:"6px"}],defaultValue:250})})}),Object(x.jsx)("div",{className:"col-md-3"})]})})]}),p&&Object(x.jsxs)("div",{className:"player-wrapper",children:[Object(x.jsx)("div",{className:"header",children:"Here is your unique song!"}),Object(x.jsx)("audio",{controls:!0,className:"audio-element",children:Object(x.jsx)("source",{src:m(p)})})]}),Object(x.jsx)("div",{className:"generate-button-wrapper ",children:Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(x.jsx)("div",{onClick:function(e){return k()},className:"generate-button",children:"Generate"})})}),y&&Object(x.jsx)(v,{})]})})},f=function(e){return Object(x.jsxs)("div",{className:"about-us-wrapper",children:[Object(x.jsxs)("div",{className:"about-us-title-wrapper text-center",children:[Object(x.jsx)("div",{className:"about-us-title",children:"What is Aux.ai?"}),Object(x.jsx)("div",{className:"about-us-subtitle",children:"Our Story"})]}),Object(x.jsx)("div",{className:"about-us-main-text-wrapper text-center",children:Object(x.jsxs)("div",{className:"about-us-main-text",children:["Aux.ai was born when I first saw the ",Object(x.jsx)("a",{href:"https://www.youtube.com/watch?v=3UwLhqcZqxc",children:"Travis Scott AI"})," video. I was fascinated by what was possible with AI, and having studied Data Science and Deep Learning at my university, I wanted to take a shot at this problem."," ",Object(x.jsxs)("span",{className:"about-us-main-text-highlight",children:[" ","Aux.ai lets you generate music of different lengths in the style of different composers and play the result right in the application."]})," ","The model which Aux.ai is based on is an LSTM model, and has 2 LSTM layers, 1 Attention layer, and 2 Dense layers. The model was trained on hundreds MIDI music files of different pieces by Chopin, Rachmaninov and Tchaikovsky. This is the first version of this project, and I am looking into using a true attention model in the future, as well as adding more composers and styles!",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"I hope you get the chance to check out the project, and if you want, support its development.",Object(x.jsx)("br",{}),"Happy Creating!! \ud83d\ude80"]})}),Object(x.jsxs)("div",{className:"about-us-team-wrapper",children:[Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("div",{className:"about-us-team-title",children:"About the Team"}),Object(x.jsx)("div",{className:"about-us-team-subtitle",children:"Who Builds Aux.ai"})]}),Object(x.jsxs)("div",{className:"about-us-andrey d-flex justify-content-center align-items-center",children:[Object(x.jsx)("img",{src:"/assets/images/Profile_picture.jpg",className:"about-us-andrey-img",alt:"andrey-image"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"about-us-andrey-title",children:"Andrey Novichkov"}),Object(x.jsx)("div",{className:"about-us-andrey-subtitle",children:"Full-Stack Software Engineer"}),Object(x.jsxs)("div",{className:"d-flex justify-content-left",children:[Object(x.jsx)("a",{href:"https://www.github.com/APNovichkov",className:"about-us-andrey-link",children:Object(x.jsx)("span",{className:"fab fa-github"})}),Object(x.jsx)("a",{href:"https://www.linkedin.com/in/andrey-novichkov/",className:"about-us-andrey-link",children:Object(x.jsx)("span",{className:"fab fa-linkedin"})}),Object(x.jsx)("a",{href:"https://www.makeschool.com/portfolio/andrey-novichkov",className:"about-us-andrey-link",children:"Portfolio"})]})]})]})]})]})},g=function(e){return Object(x.jsx)("div",{className:"navbar-wrapper",children:Object(x.jsx)("div",{className:"aux-navbar",children:Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(x.jsx)("div",{className:"logo-wrapper",children:Object(x.jsx)(o.b,{to:"/",children:Object(x.jsx)("img",{src:"/assets/images/logo.png"})})}),Object(x.jsx)("div",{className:"links-wrapper",children:Object(x.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Object(x.jsx)(o.b,{to:"/about",children:Object(x.jsx)("div",{className:"link",children:"about"})}),Object(x.jsx)("a",{href:"https://github.com/APNovichkov/aux-ai-api",children:Object(x.jsx)("div",{className:"link",children:"github"})}),Object(x.jsx)("a",{href:"https://www.buymeacoffee.com/andreynovichkov",children:Object(x.jsx)("div",{className:"link",children:"support"})})]})})]})})})},y=function(e){return Object(x.jsx)("div",{className:"footer-wrapper",children:Object(x.jsx)("div",{className:"aux-footer",children:Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(x.jsx)("div",{className:"logo-wrapper",children:Object(x.jsx)("img",{src:"/assets/images/logo.png"})}),Object(x.jsx)("div",{className:"copyright-text",children:"Copyright 2021"})]})})})};var w=function(){return Object(x.jsx)("div",{className:"app-wrapper",children:Object(x.jsx)(o.a,{children:Object(x.jsx)(r.c,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{}),Object(x.jsxs)("div",{className:"app-content",children:[Object(x.jsx)(r.a,{path:"/",exact:!0,component:p}),Object(x.jsx)(r.a,{path:"/create",exact:!0,component:N}),Object(x.jsx)(r.a,{path:"/about",exact:!0,component:f})]}),Object(x.jsx)(y,{})]})})})})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,71)).then((function(c){var s=c.getCLS,a=c.getFID,t=c.getFCP,i=c.getLCP,n=c.getTTFB;s(e),a(e),t(e),i(e),n(e)}))};n.a.render(Object(x.jsx)(t.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),k()}},[[70,1,2]]]);
//# sourceMappingURL=main.5f61899b.chunk.js.map