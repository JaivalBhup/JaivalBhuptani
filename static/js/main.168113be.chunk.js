(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(t,e,i){},23:function(t,e,i){},24:function(t,e,i){},32:function(t,e,i){"use strict";i.r(e);var a=i(0),s=(i(1),i(13)),n=i.n(s),c=i(7),l=(i(21),i(11)),o=(i(6),i(14)),r=i.n(o),h=i(10);var p=function(t){var e=[];function i(e,i,a,s,n){this.x=e,this.y=i,this.size=a,this.xSpeed=s,this.ySpeed=n,this.show=function(){t.fill("rgb(39,106,251)"),t.ellipse(this.x,this.y,this.size,this.size)},this.update=function(){(this.x>t.width||this.x<0)&&(this.xSpeed*=-1),(this.y>t.height||this.y<0)&&(this.ySpeed*=-1),this.x+=this.xSpeed,this.y+=this.ySpeed,this.show()},this.connect=function(e){var i,a=Object(h.a)(e);try{for(a.s();!(i=a.n()).done;){var s=i.value,n=t.dist(this.x,this.y,s.x,s.y);n<=130&&n>10&&(t.strokeWeight(10/n),t.stroke("rgb(39,106,251)"),t.line(this.x,this.y,s.x,s.y))}}catch(c){a.e(c)}finally{a.f()}}}t.setup=function(){var a=t.createCanvas(window.innerWidth,window.innerHeight);a.position(0,0),a.style("z-index","-1"),t.background("rgb(28,34,55)");for(var s=0;s<150;s++){var n=new i(t.random(t.width),t.random(t.height),t.random(1,3),t.random(-.5,.5),t.random(-.5,.5));e.push(n)}var c,l=Object(h.a)(e);try{for(l.s();!(c=l.n()).done;){c.value.show()}}catch(o){l.e(o)}finally{l.f()}},t.draw=function(){t.background("rgb(28,34,55)"),e.forEach((function(t,i){t.update(),t.connect(e.slice(i))}))}};var d=function(t){var e=t.img,i=t.topLine,s=t.headLine,n=t.description;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.a,{sketch:p}),Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"home-row",style:{display:"flex",flexDirection:"row"},children:[Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("div",{className:"img-wrapper",children:Object(a.jsx)("img",{src:e,className:"profile im",alt:"nn"})}),Object(a.jsxs)("div",{className:"text-wrapper",children:[Object(a.jsx)("div",{className:"top-line",children:i}),Object(a.jsxs)("h1",{className:"heading",children:[s," "]}),Object(a.jsx)("p",{className:"title",children:n}),Object(a.jsx)("a",{href:"https://github.com/JaivalBhup",children:Object(a.jsx)("i",{class:"fab fa-github fa-2x"})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/Jaivalbhup/",children:Object(a.jsx)("i",{class:"fab fa-linkedin fa-2x"})}),Object(a.jsx)("a",{href:"mailto:jaivalbhuptani1406@gmail.com",children:Object(a.jsx)("i",{class:"fas fa-envelope fa-2x"})})]})]}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("div",{className:"logo-wrapper",children:Object(a.jsxs)("div",{className:"img-row",children:[Object(a.jsxs)("div",{className:"img-col",children:[Object(a.jsx)("img",{className:"logo im",alt:"ani",src:"swift.svg"}),Object(a.jsx)("img",{className:"logo im",alt:"ani",src:"structure.svg"})]}),Object(a.jsxs)("div",{className:"img-col",children:[Object(a.jsx)("img",{className:"logo im",alt:"ani",src:"java.svg"}),Object(a.jsx)("img",{className:"logo im",alt:"ani",src:"python.svg"})]})]})})})]})}),Object(a.jsx)("div",{className:"home-row",children:Object(a.jsx)("a",{className:"div-link",href:"#projects",children:Object(a.jsx)("div",{className:"foot",children:"Scroll Down for Projects"})})})]})]})};var j=function(){return Object(a.jsx)("div",{class:"footer",children:Object(a.jsx)("p",{children:"\xa9 2021 Jaival Bhuptani"})})},b=(i(23),["btn-primary","btn-outline"]),m=["btn-md","btn-lrg","btn-mob"],g=["primary","red","green"],u=function(t){var e=t.children,i=t.type,s=t.onClick,n=t.buttonStyle,c=t.buttonSize,l=t.buttonColor,o=b.includes(n)?n:b[0],r=m.includes(c)?c:m[0],h=g.includes(l)?l:g[0];return Object(a.jsx)("button",{className:"btn ".concat(o," ").concat(r," ").concat(h),onClick:s,type:i,children:e})};i(24);var x=function(t){var e=t.img,i=t.img2,s=t.img3,n=t.imgStart,c=t.topLine,l=t.headLine,o=t.lightText,r=t.description,h=t.subtitle,p=t.buttonLabel,d=t.location,j=t.lightBg;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{id:"projects",className:j?"proj":"proj darkBg",children:Object(a.jsx)("div",{className:"proj-container",children:Object(a.jsxs)("div",{className:"proj-home-row",style:{display:"flex",flexDirection:"start"===n?"row-reverse":"row"},children:[Object(a.jsx)("div",{className:"proj-col",children:Object(a.jsxs)("div",{className:"proj-text-wrapper",children:[Object(a.jsx)("div",{className:"proj-top-line",children:c}),Object(a.jsx)("h1",{className:"proj-heading",children:l}),Object(a.jsx)("p",{className:o?"proj-title":"proj-title dark-text",children:r}),Object(a.jsx)("p",{className:o?"proj-subtitle":"proj-subtitle dark-text",children:h}),Object(a.jsx)("a",{href:d,children:Object(a.jsx)(u,{buttonStyle:"btn-outline",buttonSize:"btn-lrg",buttonColor:"primary",children:p})})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"proj-img-wrapper",children:[Object(a.jsx)("img",{src:e,alt:"proj-img",className:"proj-im"}),Object(a.jsx)("img",{src:i,alt:"proj-img",className:"proj-im",style:{display:""===i?"none":"inline-block"}}),Object(a.jsx)("img",{src:s,alt:"proj-img",className:"proj-im",style:{display:""===s?"none":"inline-block"}})]})})]})})})})},f={img:"profile.jpeg",topLine:"Hi, I am",headLine:"Jaival Bhuptani",description:"Software Developer | Back-end developer | iOS Application Developer."},v=[{img:"algo.jpeg",img2:"",img3:"",imgStart:"start",topLine:"Algorithm Visulizer",headLine:"React",lightText:!1,description:"An Algorithm visulizer that provides in-depth demonstration of most used Pathfinding Algorithms.",subtitle:"",buttonLabel:"View Site",location:"https://jaivalbhup.github.io/AlgorithmVisualizer-React",lightBg:!0},{img:"webc.jpg",img2:"",img3:"",imgStart:"",topLine:"WebChat",headLine:"Django | React | REST Framework",lightText:!0,description:"This is a Chat applications where you can chat with a group of people. You can Create rooms and invite people. I have created my own APIs for this application.",subtitle:"",buttonLabel:"GitHub",location:"https://jaivalbhup.github.io/Django-React-ChatApp",lightBg:!1},{img:"hp.png",img2:"",img3:"",imgStart:"start",topLine:"House Party",headLine:"Django | React | Spotify API | REST Framework",lightText:!1,description:"A fullstack web application that let you collaborate and control the music in a room. It uses soptify API to play, pause and skip the song.",subtitle:"",buttonLabel:"Github",location:"https://github.com/JaivalBhup/HouseParty",lightBg:!0},{img:"fc1.PNG",img2:"fc2.PNG",img3:"fc3.PNG",imgStart:"",topLine:"Flash Checkout",headLine:"Swift | Firebase",lightText:!0,description:"This application is an solution to the Future of retail challenge. This application can make your shopping experience as easy as making a bread. No need of waiting in long lines of checkout just scan the item directly from the shelf and pay on the go.",subtitle:"",buttonLabel:"Github",location:"https://github.com/JaivalBhup/LevelOrderBinaryTreePrintingC",lightBg:!1},{img:"stb1.PNG",img2:"stb2.PNG",img3:"stb3.PNG",imgStart:"start",topLine:"SplitTheBill",headLine:"Swift | FireBase",lightText:!1,description:"A Bill splitting app that can store events and contributors and can settle up the bill equally between all contributors. Contributors can add bills for the events and the app manages all the bills. Data is stored and fetched from firebase's realtime firestore. It uses firebase authentication. ",subtitle:"",buttonLabel:"Github",location:"https://github.com/JaivalBhup/SplitTheBillApp-iOS-Swift/tree/FireBase",lightBg:!0},{img:"tdl2.jpeg",img2:"tdl1.jpeg",img3:"",imgStart:"",topLine:"ToDoList",headLine:"Swift | Realm",lightText:!0,description:"A productivity app to keep track of day to day routine any manage schedule.",subtitle:"",buttonLabel:"Github",location:"https://github.com/JaivalBhup/SplitTheBillApp-iOS-Swift",lightBg:!1}];var O=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,Object(l.a)({},f)),v.map((function(t){return Object(a.jsx)(x,Object(l.a)({},t))})),Object(a.jsx)(j,{})]})};var y=function(){return Object(a.jsx)(c.a,{children:Object(a.jsx)(O,{})})};n.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))},6:function(t,e,i){}},[[32,1,2]]]);
//# sourceMappingURL=main.168113be.chunk.js.map