(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4746:function(t,e,r){t.exports=r.p+"img/about-me-photo.25dc89b2.png"},5179:function(t,e,r){},"52ec":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{attrs:{app:"",color:"white","hide-on-scroll":""}},[r("v-tabs",{attrs:{color:"rgb(233, 171, 0)",centered:"","show-arrows":""},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},t._l(t.tabs,(function(e){return r("v-tab",{key:e.id,on:{click:function(r){return t.scrollTo(e.id)}}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),r("v-content",[r("v-responsive",[r("div",{attrs:{id:"home"}},[r("div",{directives:[{name:"intersect",rawName:"v-intersect.quiet",value:t.onIntersect,expression:"onIntersect",modifiers:{quiet:!0}}]}),r("home-view",{attrs:{viewWorkFn:t.scrollTo}})],1),r("div",{attrs:{id:"about-me"}},[r("div",{directives:[{name:"intersect",rawName:"v-intersect.quiet",value:t.onIntersect,expression:"onIntersect",modifiers:{quiet:!0}}]}),r("about-me-view")],1),r("div",{attrs:{id:"projects"}},[r("div",{directives:[{name:"intersect",rawName:"v-intersect.quiet",value:t.onIntersect,expression:"onIntersect",modifiers:{quiet:!0}}]}),r("projects-view")],1)])],1),r("v-footer",{staticClass:"indigo lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[t._v("More content will be displayed here")])],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{src:r("c518"),height:"700",id:"intro"}},[a("h2",{staticClass:"intro-1"},[t._v(" HELLO, I'M ")]),a("h1",{staticClass:"intro-2"},[t._v(" SHAWN HU ")]),a("h3",{staticClass:"intro-3"},[t._v(" A Hopeful Computer Science Student ")]),a("div",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[a("v-btn",{staticStyle:{margin:"20px"},attrs:{rounded:"",width:"150px",color:"rgb(255, 187, 0)",depressed:""},on:{click:function(e){return t.viewWorkFn("#projects")}}},[t._v(" VIEW MY WORK ")])],1)])},s=[],c={props:{viewWorkFn:Function}},l=c,u=(r("bf31"),r("2877")),d=r("6544"),p=r.n(d),b=r("8336"),f=r("8b9c"),v=Object(u["a"])(l,i,s,!1,null,"15ebfcae",null),h=v.exports;p()(v,{VBtn:b["a"],VParallax:f["a"]});var m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-page"},[a("v-row",[a("v-col",[a("h1",{staticClass:"about-title"},[t._v("About Me")])])],1),a("v-row",{staticStyle:{"padding-right":"50px","padding-left":"50px"}},[a("v-col",[a("v-img",{staticStyle:{width:"300px",margin:"auto"},attrs:{src:r("4746")}})],1),a("v-col",{attrs:{"align-self":"center"}},[a("p",{staticClass:"about-content"},[t._v(" Hi there, my name is Yingxiaoyang Hu, but you can call me Shawn. "),a("br"),a("br"),t._v(" Who Am I? "),a("br"),a("br"),t._v(" Other than my name, I've been called many things, a dreamer, an ambitious person, and most recently, an entrepreneur. However, my proudest title would have to be a "),a("strong",[t._v("problem solver")]),t._v(". As a computer science student at the University of Toronto, this could not have been a better compliment. "),a("br"),a("br"),t._v(" The purpose of this website is to provide an overview of who I am and what I have done. I will also be updating it with new projects. Please feel free to explore and make any suggestions you have. "),a("br"),a("br"),t._v(" Hopefully, my work will intrigue you. 😀 ")])])],1)],1)},g=[],w=(r("69d8"),r("62ad")),y=r("adda"),_=r("0fd9"),x={},T=Object(u["a"])(x,m,g,!1,null,"081d0e9b",null),I=T.exports;p()(T,{VCol:w["a"],VImg:y["a"],VRow:_["a"]});var j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"projects-page",attrs:{fluid:""}},[r("v-row",[r("v-col",[r("h1",{staticClass:"projects-title"},[t._v("Projects")])])],1),r("v-row",t._l(t.allCardInfo,(function(t){return r("v-col",{key:t.title},[r("project-card",{attrs:{cardInfo:t}})],1)})),1)],1)},C=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"480","min-width":"200"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.cardInfo.imgSrc}}),r("v-card-title",[t._v(t._s(t.cardInfo.title))]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(t.cardInfo.description))])]),r("v-card-actions",[r("v-btn",{attrs:{color:"rgb(255, 187, 0)",text:"",href:t.cardInfo.repoLink}},[t._v(" Visit Repository ")])],1)],1)},V=[],O={props:{cardInfo:Object}},S=O,P=r("b0af"),H=r("99d9"),F=Object(u["a"])(S,k,V,!1,null,null,null),M=F.exports;p()(F,{VBtn:b["a"],VCard:P["a"],VCardActions:H["a"],VCardText:H["b"],VCardTitle:H["c"],VImg:y["a"]});var A={data:function(){return{allCardInfo:[{title:"UofT Course Tools",description:"Unifying UofT's course data, and using it to build tools such as a course guide and timetable planner.",imgSrc:"https://raw.githubusercontent.com/UTM-Hacklab/UofTCourseTools/master/packages/docs/course-guide/figma_pic.png",repoLink:"https://github.com/UTM-Hacklab/UofTCourseTools"},{title:"Flappy Bird",description:"You may be thinking, is this ugly thing worth putting on the website? But get this, I made it in assembly. 🤪",imgSrc:"https://raw.githubusercontent.com/TheFatPanda97/flappybird/master/gameplay.PNG",repoLink:"https://github.com/TheFatPanda97/flappybird"},{title:"Shawn's Portfolio",description:"The repository that contains the source file I used to build this website. He didn't use webflow or wix? What is he, insane? (Vue masterace)",imgSrc:"https://raw.githubusercontent.com/TheFatPanda97/personal-website/master/src/assets/intro-background.png",repoLink:"https://github.com/TheFatPanda97/personal-website"},{title:"Isomo",description:"The repository that contains the source file I used to build this website. He didn't use webflow or wix? What is he, insane? (Vue masterace)",imgSrc:"../assets/about-me-photo.png",repoLink:"https://github.com/TheFatPanda97/personal-website"}]}},components:{"project-card":M}},U=A,W=(r("b0bc"),r("a523")),E=Object(u["a"])(U,j,C,!1,null,"1b255bf8",null),L=E.exports;p()(E,{VCol:w["a"],VContainer:W["a"],VRow:_["a"]});var $={data:function(){return{selectedTab:0,tabs:[{id:"#home",name:"Home"},{id:"#about-me",name:"About Me"},{id:"#projects",name:"Projects"}],options:{duration:500,easing:"easeOutCubic"}}},components:{"home-view":h,"about-me-view":I,"projects-view":L},methods:{scrollTo:function(t){for(var e=0;e<this.tabs.length;e++)if(this.tabs[e].id==t){this.selectedTab=e;break}this.$vuetify.goTo(t,this.options)},onIntersect:function(t){if(t[0].isIntersecting)for(var e="#"+t[0].target.parentNode.id,r=0;r<this.tabs.length;r++)if(this.tabs[r].id==e)return void(this.selectedTab=r)}}},q=$,N=r("7496"),B=r("40dc"),R=r("a75b"),Y=r("553a"),J=r("6b53"),G=r("71a3"),K=r("fe57"),z=r("269a"),D=r.n(z),Q=r("90a2"),X=Object(u["a"])(q,n,o,!1,null,null,null),Z=X.exports;p()(X,{VApp:N["a"],VAppBar:B["a"],VContent:R["a"],VFooter:Y["a"],VResponsive:J["a"],VTab:G["a"],VTabs:K["a"]}),D()(X,{Intersect:Q["a"]});var tt=r("f309");a["a"].use(tt["a"]);var et=new tt["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:et,render:function(t){return t(Z)}}).$mount("#app")},"69d8":function(t,e,r){"use strict";var a=r("5179"),n=r.n(a);n.a},a11f:function(t,e,r){},b0bc:function(t,e,r){"use strict";var a=r("a11f"),n=r.n(a);n.a},bf31:function(t,e,r){"use strict";var a=r("52ec"),n=r.n(a);n.a},c518:function(t,e,r){t.exports=r.p+"img/intro-background.776470cf.png"}});
//# sourceMappingURL=app.4694df47.js.map