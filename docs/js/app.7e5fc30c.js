(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1231:function(t,e,a){},4746:function(t,e,a){t.exports=a.p+"img/about-me-photo.25dc89b2.png"},"52ec":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white","hide-on-scroll":""}},[a("v-tabs",{attrs:{color:"rgb(233, 171, 0)",centered:"","show-arrows":""},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},t._l(t.tabs,(function(e){return a("v-tab",{key:e.id,on:{click:function(a){return t.scrollTo(e.id)}}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),a("v-content",[a("v-responsive",[a("div",{attrs:{id:"home"}},[a("div",{directives:[{name:"intersect",rawName:"v-intersect.quiet",value:t.onIntersect,expression:"onIntersect",modifiers:{quiet:!0}}]}),a("home-view",{attrs:{viewWorkFn:t.scrollTo}})],1),a("div",{attrs:{id:"about-me"}},[a("div",{directives:[{name:"intersect",rawName:"v-intersect.quiet",value:t.onIntersect,expression:"onIntersect",modifiers:{quiet:!0}}]}),a("about-me-view")],1),a("div",{attrs:{id:"projects"}},[a("div",{directives:[{name:"intersect",rawName:"v-intersect.quiet",value:t.onIntersect,expression:"onIntersect",modifiers:{quiet:!0}}]}),a("projects-view")],1)])],1),a("v-footer",{attrs:{flat:"",tile:"",padless:"",app:""}},[a("v-card",{staticClass:"text-center",attrs:{flat:"",tile:"",width:"100%",color:"rgb(255, 187, 0)"}},[a("v-card-text",t._l(t.icons,(function(e){return a("v-btn",{key:e.name,staticClass:"mx-4",attrs:{icon:"",color:"black",href:e.link}},[a("v-icon",{attrs:{large:""}},[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-parallax",{attrs:{src:a("c518"),height:"700",id:"intro"}},[r("h2",{staticClass:"intro-1"},[t._v(" HELLO, I'M ")]),r("h1",{staticClass:"intro-2"},[t._v(" SHAWN HU ")]),r("h3",{staticClass:"intro-3"},[t._v(" A Hopeful Computer Science Student ")]),r("div",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[r("v-btn",{staticStyle:{margin:"20px"},attrs:{rounded:"",width:"150px",color:"rgb(255, 187, 0)",depressed:""},on:{click:function(e){return t.viewWorkFn("#projects")}}},[t._v(" VIEW MY WORK ")])],1)])},s=[],c={props:{viewWorkFn:Function}},l=c,u=(a("bf31"),a("2877")),p=a("6544"),d=a.n(p),h=a("8336"),b=a("8b9c"),v=Object(u["a"])(l,o,s,!1,null,"15ebfcae",null),m=v.exports;d()(v,{VBtn:h["a"],VParallax:b["a"]});var f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about-page"},[r("v-row",[r("v-col",[r("h1",{staticClass:"about-title"},[t._v("About Me")])])],1),r("v-row",{staticStyle:{"padding-right":"50px","padding-left":"50px"}},[r("v-col",[r("v-img",{staticStyle:{width:"300px",margin:"auto"},attrs:{src:a("4746")}})],1),r("v-col",{attrs:{"align-self":"center"}},[r("p",{staticClass:"about-content"},[t._v(" Hi there, my name is Yingxiaoyang Hu, but you can call me Shawn. "),r("br"),r("br"),t._v(" Who Am I? "),r("br"),r("br"),t._v(" Other than my name, I've been called many other things, a dreamer, an ambitious person, and most recently, an entrepreneur. However, my proudest title would have to be a "),r("strong",[t._v("problem solver")]),t._v(". As a computer science student at the University of Toronto, this could not have been a better compliment. "),r("br"),r("br"),t._v(" The purpose of this website is to provide an overview of who I am and what I have done. I will also be updating it with new projects. Please feel free to explore and make any suggestions you have. "),r("br"),r("br"),t._v(" Hopefully, my work will intrigue you. 😀 ")])])],1)],1)},g=[],w=(a("c38c"),a("62ad")),y=a("adda"),T=a("0fd9"),_={},k=Object(u["a"])(_,f,g,!1,null,"51d5c637",null),x=k.exports;d()(k,{VCol:w["a"],VImg:y["a"],VRow:T["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"projects-page",attrs:{fluid:""}},[a("v-row",[a("v-col",[a("h1",{staticClass:"projects-title"},[t._v("Projects")])])],1),a("v-row",{attrs:{justify:"center"}},t._l(t.allCardInfo,(function(t){return a("v-col",{key:t.title,attrs:{xs:"1",sm:"5",md:"6",lg:"4",xl:"9"}},[a("project-card",{attrs:{cardInfo:t}})],1)})),1)],1)},j=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto"},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.cardInfo.imgSrc}}),a("v-card-title",[t._v(t._s(t.cardInfo.title))]),a("v-card-text",{staticClass:"text--primary"},[a("div",[t._v(t._s(t.cardInfo.description))])]),a("v-card-actions",[a("v-btn",{attrs:{color:"rgb(255, 187, 0)",text:"",href:t.cardInfo.repoLink}},[t._v(" Visit Repository ")])],1)],1)},V=[],P={props:{cardInfo:Object}},S=P,O=a("b0af"),F=a("99d9"),W=Object(u["a"])(S,I,V,!1,null,null,null),A=W.exports;d()(W,{VBtn:h["a"],VCard:O["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VImg:y["a"]});var H={data:function(){return{allCardInfo:[{title:"UofT Course Tools",description:"We are unifying UofT's course data, and using it to build tools such as a course guide and timetable planner.",imgSrc:"https://raw.githubusercontent.com/UTM-Hacklab/UofTCourseTools/master/packages/docs/course-guide/figma_pic.png",repoLink:"https://github.com/UTM-Hacklab/UofTCourseTools"},{title:"Shawn's Portfolio",description:"The repository that contains the source file I used to build this website. He didn't use webflow or wix? What is he, insane?",imgSrc:"https://raw.githubusercontent.com/TheFatPanda97/personal-website/master/src/assets/intro-background.png",repoLink:"https://github.com/TheFatPanda97/personal-website"},{title:"Flappy Bird",description:"You may be thinking, why is this ugly thing on the website? But get this, I made it in assembly. 🤪",imgSrc:"https://raw.githubusercontent.com/TheFatPanda97/flappybird/master/gameplay.PNG",repoLink:"https://github.com/TheFatPanda97/flappybird"},{title:"Isomo",description:"A startup aiming to eliminate the biases (e.g. Race, gender) in the hiring process. On this platform, only your skills matter.",imgSrc:"https://raw.githubusercontent.com/TheFatPanda97/personal-website/master/src/assets/network.jpg",repoLink:"https://github.com/TheFatPanda97/isomo"},{title:"Fight Club",description:"Do you love Naruto and Mortal Kombat? Well this is a fighting game where Anime characters fight each other.",imgSrc:"https://raw.githubusercontent.com/TheFatPanda97/Fight-Club/master/main-menu.PNG",repoLink:"https://github.com/TheFatPanda97/Fight-Club"},{title:"Skip The Wait",description:"A hackathon project me and a few friends built attempting to solve the wait time issue at hospitals.",imgSrc:"https://raw.githubusercontent.com/TheFatPanda97/Skip-The-Wait/master/dashboard.PNG",repoLink:"https://github.com/TheFatPanda97/Skip-The-Wait"}]}},components:{"project-card":A}},M=H,L=(a("828d"),a("a523")),N=Object(u["a"])(M,C,j,!1,null,"656513ab",null),U=N.exports;d()(N,{VCol:w["a"],VContainer:L["a"],VRow:T["a"]});var E={data:function(){return{selectedTab:0,tabs:[{id:"#home",name:"Home"},{id:"#about-me",name:"About Me"},{id:"#projects",name:"Projects"}],options:{duration:500,easing:"easeOutCubic"},icons:[{name:"mdi-github",link:"https://github.com/TheFatPanda97"},{name:"mdi-linkedin",link:"https://www.linkedin.com/in/shawn-hu/"}]}},components:{"home-view":m,"about-me-view":x,"projects-view":U},methods:{scrollTo:function(t){for(var e=0;e<this.tabs.length;e++)if(this.tabs[e].id==t){this.selectedTab=e;break}this.$vuetify.goTo(t,this.options)},onIntersect:function(t){if(t[0].isIntersecting)for(var e="#"+t[0].target.parentNode.id,a=0;a<this.tabs.length;a++)if(this.tabs[a].id==e)return void(this.selectedTab=a)}}},$=E,q=a("7496"),B=a("40dc"),R=a("a75b"),G=a("553a"),Y=a("132d"),J=a("6b53"),K=a("71a3"),D=a("fe57"),z=a("269a"),Q=a.n(z),X=a("90a2"),Z=Object(u["a"])($,n,i,!1,null,null,null),tt=Z.exports;d()(Z,{VApp:q["a"],VAppBar:B["a"],VBtn:h["a"],VCard:O["a"],VCardText:F["b"],VContent:R["a"],VFooter:G["a"],VIcon:Y["a"],VResponsive:J["a"],VTab:K["a"],VTabs:D["a"]}),Q()(Z,{Intersect:X["a"]});var et=a("f309");r["a"].use(et["a"]);var at=new et["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:at,render:function(t){return t(tt)}}).$mount("#app")},"828d":function(t,e,a){"use strict";var r=a("ea84"),n=a.n(r);n.a},bf31:function(t,e,a){"use strict";var r=a("52ec"),n=a.n(r);n.a},c38c:function(t,e,a){"use strict";var r=a("1231"),n=a.n(r);n.a},c518:function(t,e,a){t.exports=a.p+"img/intro-background.776470cf.png"},ea84:function(t,e,a){}});
//# sourceMappingURL=app.7e5fc30c.js.map