(function(e){function t(t){for(var o,a,i=t[0],s=t[1],l=t[2],p=0,u=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&u.push(c[a][0]),c[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08d3":function(e,t,n){},"1cf3":function(e,t,n){"use strict";n("ef53")},"1d56":function(e,t,n){"use strict";n("98c4")},"23da":function(e,t,n){},"23f8":function(e,t,n){"use strict";n("b88a")},"271e":function(e,t,n){"use strict";n("b760")},2925:function(e,t,n){e.exports=n.p+"img/tukl.23591074.svg"},"2c84":function(e,t,n){"use strict";n("5db3")},"2fb8":function(e,t,n){"use strict";n("08d3")},"49d2":function(e,t,n){},"50cf":function(e,t,n){},"54c8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=Object(o["createElementVNode"])("div",{class:"cursor"},null,-1);function r(e,t,n,r,a,i){var s=Object(o["resolveComponent"])("Sidebar"),l=Object(o["resolveComponent"])("Main");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["app",a.mode])},[Object(o["createVNode"])(s,{onToggleTheme:i.toggleTheme},null,8,["onToggleTheme"]),Object(o["createVNode"])(l),c],2)}var a={class:"sidebar"},i=["src"],s={class:"links"},l=Object(o["createTextVNode"])("Welcome"),d=Object(o["createTextVNode"])("Intro"),p=Object(o["createTextVNode"])("About"),u=Object(o["createTextVNode"])("Skills"),m=Object(o["createTextVNode"])("Education"),b=Object(o["createTextVNode"])("Work Experience"),f=Object(o["createTextVNode"])("Contact");function v(e,t,c,r,v,h){var j=Object(o["resolveComponent"])("SidebarLink"),O=Object(o["resolveComponent"])("ThemeButton");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createElementVNode"])("img",{class:"firzok",src:n("62e9"),alt:"Firzok",href:"/"},null,8,i),Object(o["createElementVNode"])("nav",s,[Object(o["createVNode"])(j,{scrollTo:"welcome"},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),Object(o["createVNode"])(j,{scrollTo:"intro"},{default:Object(o["withCtx"])((function(){return[d]})),_:1}),Object(o["createVNode"])(j,{scrollTo:"about"},{default:Object(o["withCtx"])((function(){return[p]})),_:1}),Object(o["createVNode"])(j,{scrollTo:"skills"},{default:Object(o["withCtx"])((function(){return[u]})),_:1}),Object(o["createVNode"])(j,{scrollTo:"education"},{default:Object(o["withCtx"])((function(){return[m]})),_:1}),Object(o["createVNode"])(j,{scrollTo:"workExperience"},{default:Object(o["withCtx"])((function(){return[b]})),_:1}),Object(o["createVNode"])(j,{scrollTo:"contact"},{default:Object(o["withCtx"])((function(){return[f]})),_:1})]),Object(o["createVNode"])(O,{class:"theme-btn",onToggle:t[0]||(t[0]=function(t){return e.$emit("toggleTheme")})})])}var h=["href"];function j(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["link",{active:a.isActive()}])},[Object(o["createElementVNode"])("a",{href:"#".concat(n.scrollTo)},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],8,h)],2)}var O={name:"SidebarLink",components:{},props:{scrollTo:{type:String,required:!0,description:"id of the section to scroll to."}},methods:{isActive:function(){var e=document.querySelector('section[id="'.concat(this.scrollTo,'"]'));if(!e)return!1;var t=e.getBoundingClientRect();return console.log(t&&t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)),t&&t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}}},g=(n("5f2e"),n("d959")),k=n.n(g);const y=k()(O,[["render",j],["__scopeId","data-v-47f2b4a1"]]);var E=y,w=function(e){return Object(o["pushScopeId"])("data-v-31068f8b"),e=e(),Object(o["popScopeId"])(),e},S={class:"toggle-wrapper"},N={class:"toggle"},V=["checked"],I=w((function(){return Object(o["createElementVNode"])("span",{class:"toggler"},null,-1)}));function x(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",S,[Object(o["createElementVNode"])("label",N,[Object(o["createElementVNode"])("input",{type:"checkbox",checked:"dark-theme"===r.userTheme,onChange:t[0]||(t[0]=function(t){return e.$emit("toggle")})},null,40,V),I])])}var B={mounted:function(){var e=this.getMediaPreference();this.setTheme(e)},data:function(){return{userTheme:"light-theme"}},methods:{toggleTheme:function(){var e=localStorage.getItem("user-theme");"light-theme"===e?this.setTheme("dark-theme"):this.setTheme("light-theme")},setTheme:function(e){localStorage.setItem("user-theme",e),this.userTheme=e,document.documentElement.className=e},getMediaPreference:function(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches;return e?"dark-theme":"light-theme"}}};n("965e");const T=k()(B,[["render",x],["__scopeId","data-v-31068f8b"]]);var C=T,_={name:"Sidebar",components:{ThemeButton:C,SidebarLink:E},methods:{scrollTo:function(e){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"end"})}}};n("f8df");const M=k()(_,[["render",v],["__scopeId","data-v-194e26dc"]]);var L=M,P={ref:"appRef",id:"container",class:"main"},A={class:"components"},D={ref:"welcomeRef",style:{height:"6000px",position:"relative"}},z={style:{height:"auto",position:"relative"}},W={style:{height:"500px",position:"relative"}},R={style:{height:"1100px",position:"relative"}},F={style:{height:"800px",position:"relative"}},H={style:{height:"2100px",position:"relative"}},G={style:{height:"1300px",position:"relative"}};function U(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("Welcome"),s=Object(o["resolveComponent"])("Intro"),l=Object(o["resolveComponent"])("About"),d=Object(o["resolveComponent"])("Skills"),p=Object(o["resolveComponent"])("Education"),u=Object(o["resolveComponent"])("WorkExperience"),m=Object(o["resolveComponent"])("Contact");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",P,[Object(o["createElementVNode"])("div",A,[Object(o["createElementVNode"])("div",D,[Object(o["createVNode"])(i,{proportion:c.proportion},null,8,["proportion"])],512),Object(o["createElementVNode"])("div",z,[Object(o["createVNode"])(s,{proportion:c.proportion},null,8,["proportion"])]),Object(o["createElementVNode"])("div",W,[Object(o["createVNode"])(l,{proportion:c.proportion},null,8,["proportion"])]),Object(o["createElementVNode"])("div",R,[Object(o["createVNode"])(d,{proportion:c.proportion},null,8,["proportion"])]),Object(o["createElementVNode"])("div",F,[Object(o["createVNode"])(p,{proportion:c.proportion},null,8,["proportion"])]),Object(o["createElementVNode"])("div",H,[Object(o["createVNode"])(u,{proportion:c.proportion},null,8,["proportion"])]),Object(o["createElementVNode"])("div",G,[Object(o["createVNode"])(m,{proportion:c.proportion},null,8,["proportion"])])])],512)}var J=function(e){return Object(o["pushScopeId"])("data-v-3d59dc48"),e=e(),Object(o["popScopeId"])(),e},X={id:"welcome",class:"welcome",ref:"welcomeColorChange"},q={class:"animated-title"},Y={class:"text-top"},$=J((function(){return Object(o["createElementVNode"])("span",null,"Hi",-1)})),K=J((function(){return Object(o["createElementVNode"])("span",null,"I am Firzok",-1)})),Q=[$,K],Z={class:"text-bottom"};function ee(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",X,[Object(o["createElementVNode"])("div",q,[Object(o["createElementVNode"])("div",Y,[Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])(r.welcomeSectionInterpolator.topText(n.proportion))},Q,4)]),Object(o["createElementVNode"])("div",Z,[Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])(r.welcomeSectionInterpolator.bottomText(n.proportion))}," Welcome to my world. ",4)])])],512)}n("a9e3"),n("d3b7"),n("159b");var te={topText:function(e){return e<1.4?{"animation-delay":"calc(".concat(e," * -1.5s)")}:{opacity:2*(1.9-e),"animation-delay":"calc(".concat(e," * -1.5s)"),transform:"scale(".concat(e," - 4)")}},bottomText:function(e){return e>1&&e<1.8||e>1.8?{"animation-delay":"calc(".concat(e-1," * -1s)")}:void 0}},ne={highlights:function(e){return e>2&&e<4||e>2.4?{"animation-delay":"calc(".concat(e-2," * -1.5s)")}:void 0},bottomText:function(e){return e>1&&e<2.4?{"animation-delay":"calc(".concat(e-1," * -1s)")}:e>2.4?{opacity:2*(1.8-e),transform:"scaleX(".concat(e,")"),"animation-delay":"calc(".concat(-2*e,")")}:void 0}},oe={title:function(e){if(e>2.1&&e<=2.7)return{transform:"translateX(".concat(100*(5.4-2*e),"%)")}}},ce={title:function(e){if(e>2.5&&e<=3)return{transform:"translateX(".concat(250*(3-e),"%)")}}},re={title:function(e){if(e>2.75&&e<=3.3)return{transform:"translateX(".concat(222.2*(3.3-e),"%)")}}},ae={title:function(e){if(e>2.41&&e<=3.95)return{transform:"translateX(".concat(227.27*(3.95-e),"%)")}}},ie=n("2c28"),se={name:"Welcome",props:{proportion:{type:Number,default:0}},data:function(){return{welcomeSectionInterpolator:te}},setup:function(){var e=Object(o["ref"])(null),t=Object(ie["useElementVisibility"])(e),n=function(){var e=function(e){e.forEach((function(e){e.target.classList.toggle("is-inViewport",e.isIntersecting)}))},t=new IntersectionObserver(e),n={},o=document.querySelector(".text-highlights > div");t.observe(o,n)};return Object(o["onMounted"])((function(){document.addEventListener("DOMContentLoaded",n)})),{welcomeColorChange:e,welcomeIsVisible:t,handleContentLoaded:n}},methods:{checkActive:function(e,t,n){return e>t&&e<n}}};n("a81f");const le=k()(se,[["render",ee],["__scopeId","data-v-3d59dc48"]]);var de=le,pe={id:"contact",ref:"contactSection",class:"contact"},ue={class:"title-row"},me=Object(o["createStaticVNode"])('<div class="list" data-v-3a02ea34><div class="contact" data-v-3a02ea34><a href="mailto:firzok.nadeem@gmail.com" data-v-3a02ea34>Email</a></div><div class="contact" data-v-3a02ea34><a href="https://www.linkedin.com/in/firzok-nadeem/" data-v-3a02ea34>LinkedIn</a></div><div class="contact" data-v-3a02ea34><a href="https://github.com/firzok" data-v-3a02ea34>GitHub</a></div><div class="contact" data-v-3a02ea34><a href="https://www.facebook.com/Firzoknadeem" data-v-3a02ea34>Facebook</a></div><div class="contact" data-v-3a02ea34><a href="https://www.instagram.com/ifirzok/" data-v-3a02ea34>Instagram</a></div><div class="contact" data-v-3a02ea34><a href="https://twitter.com/Firzok" data-v-3a02ea34>Twitter</a></div></div>',1);function be(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",pe,[Object(o["createElementVNode"])("div",ue,[Object(o["createElementVNode"])("div",{class:"title",style:Object(o["normalizeStyle"])(r.contactSectionInterpolator.title(n.proportion))}," Get in touch ",4)]),me],512)}var fe={name:"contact",components:{},props:{proportion:{type:Number,default:0}},data:function(){return{contactSectionInterpolator:ae}},setup:function(){},methods:{},watch:{}};n("23f8");const ve=k()(fe,[["render",be],["__scopeId","data-v-3a02ea34"]]);var he=ve,je={id:"workExperience",ref:"workExperienceSection",class:"workExperience"},Oe={class:"title-row"},ge={class:"list"};function ke(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("Work");return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",je,[Object(o["createElementVNode"])("div",Oe,[Object(o["createElementVNode"])("div",{class:"title",style:Object(o["normalizeStyle"])(r.workExperienceSectionInterpolator.title(n.proportion))}," Work Experience ",4)]),Object(o["createElementVNode"])("div",ge,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.workExperiences,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(i,Object(o["mergeProps"])({class:"work"},e,{key:e.id}),null,16)})),128))])],512)}n("a4d3"),n("e01a");var ye=function(e){return Object(o["pushScopeId"])("data-v-439c1ede"),e=e(),Object(o["popScopeId"])(),e},Ee={class:"work"},we={class:"visible"},Se={class:"position-line"},Ne={class:"position"},Ve=ye((function(){return Object(o["createElementVNode"])("span",{class:"seperator"},"at",-1)})),Ie={class:"company"},xe={class:"secondary-line"},Be={class:"start"},Te=ye((function(){return Object(o["createElementVNode"])("span",null," - ",-1)})),Ce={class:"end"},_e=ye((function(){return Object(o["createElementVNode"])("span",{class:"seperator"}," - ",-1)})),Me={class:"location"},Le={class:"details"},Pe={key:0,class:"description"},Ae={key:1,class:"description"},De={key:0,class:"accomplishments"},ze={class:"description"},We=Object(o["createTextVNode"])(" Accomplishments: "),Re={key:1,class:"tools"},Fe={class:"description"},He=Object(o["createTextVNode"])(" Tools and Technologies used: ");function Ge(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",Ee,[Object(o["createElementVNode"])("div",we,[Object(o["createElementVNode"])("div",Se,[Object(o["createElementVNode"])("span",Ne,Object(o["toDisplayString"])(n.position),1),Ve,Object(o["createElementVNode"])("span",Ie,Object(o["toDisplayString"])(n.company),1)]),Object(o["createElementVNode"])("div",xe,[Object(o["createElementVNode"])("span",Be,Object(o["toDisplayString"])(n.start),1),Te,Object(o["createElementVNode"])("span",Ce,Object(o["toDisplayString"])(n.end),1),_e,Object(o["createElementVNode"])("span",Me,Object(o["toDisplayString"])(n.location),1)])]),Object(o["createElementVNode"])("div",Le,[n.description.length>1?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",Pe,[Object(o["createTextVNode"])(" As a "+Object(o["toDisplayString"])(n.position)+" at "+Object(o["toDisplayString"])(n.company)+", my day to day tasks were: ",1),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.description,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:t,class:"lines"},Object(o["toDisplayString"])(t+1)+". "+Object(o["toDisplayString"])(e),1)})),128))])):Object(o["createCommentVNode"])("",!0),1===n.description.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",Ae,Object(o["toDisplayString"])(n.description[0]),1)):Object(o["createCommentVNode"])("",!0)]),n.accomplishment?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",De,[Object(o["createElementVNode"])("span",ze,[We,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.accomplishment,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:t,class:"lines"},Object(o["toDisplayString"])(t+1)+". "+Object(o["toDisplayString"])(e),1)})),128))])])):Object(o["createCommentVNode"])("",!0),n.toolsUsed?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Re,[Object(o["createElementVNode"])("span",Fe,[He,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.toolsUsed,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:t,class:"lines"},Object(o["toDisplayString"])(t+1)+". "+Object(o["toDisplayString"])(e),1)})),128))])])):Object(o["createCommentVNode"])("",!0)])}var Ue={name:"work",components:{},props:{position:{type:String,default:"Position"},company:{type:String,default:"Company"},companyLink:{type:String,default:"/"},start:{type:String,default:"2019"},end:{type:String,default:"2020"},location:{type:String,default:"Location"},description:{type:function(){return[String]},default:function(){return["Description"]}},accomplishment:{type:function(){return[String]},default:void 0},toolsUsed:{type:function(){return[String]},default:void 0,description:"Array of strings"},companyLogoPath:{type:String,default:void 0}},data:function(){},setup:function(){},methods:{},watch:{}};n("e58b");const Je=k()(Ue,[["render",Ge],["__scopeId","data-v-439c1ede"]]);var Xe=Je,qe={name:"workExperience",components:{Work:Xe},props:{proportion:{type:Number,default:0}},data:function(){return{workExperienceSectionInterpolator:re,workExperiences:[{id:1,position:"Software Engineer",company:"Proto",companyLink:"https://www.proto.cx/",start:"09.2020",end:"09.2021",location:"Remote/Canada",description:["Developing frontend components for Proto using Vue.","Writing unit tests for Frontend components using Jest.","Backend development using Python."],accomplishment:["Achieved ~80% reduction in website loading by optimizing code."],toolsUsed:["Vue.js","Jest","Python","Gitlab","Docker"]},{id:2,position:"Software Engineer",company:"Automotive Artificial Intelligence",companyLink:"https://www.automotive-ai.com/",start:"07.2019",end:"09.2020",location:"Islamabad, Pakistan",description:["Creating reusable components using Vue.","Integrate new 3D objects in the Analyzer e.g Cars or Trucks using Three.js.","Writing test cases for frontend using Jest.","Creating microservices using Python.","Writing Frontend components for the product using React."],accomplishment:["Optimized and refactored the codebase and achieved ~20% overall improvement."],toolsUsed:["Vue.js","React","Python","C++","GitHub","Docker","AWS"]},{id:3,position:"Software Engineer Intern",company:"Automotive Artificial Intelligence",companyLink:"https://www.automotive-ai.com/",start:"01.2019",end:"02.2019",location:"Islamabad, Pakistan",description:["At AAI I was part of the Platform Developer Team. Here, I along with a team of 5 other interns successfully developed a Rule-based Traffic Simulator for self-driving cars."],accomplishment:["Developed a renderer on PyGame in Python","Developed a Rule-based Traffic Simulator using Python"],toolsUsed:["Python","C++","PyGame","GitHub"]},{id:4,position:"Software Engineer Intern",company:"Bentley Systems",companyLink:"https://www.bentley.com/",start:"06.2018",end:"08.2018",location:"Islamabad, Pakistan",description:["At AAI I was part of the iModel JS Team. Here I was assigned to work on Microsoft Rush."],accomplishment:["Integrated Microsoft Rush as a Package Manager for Node Applications in the iModel JS team.","Wrote Python automation scripts that generated Graphs based on the tests entered and passed by different developers."],toolsUsed:["Python","Javascript","Node","GitHub"]}]}},setup:function(){},methods:{},watch:{}};n("f0e1");const Ye=k()(qe,[["render",ke],["__scopeId","data-v-05942a81"]]);var $e=Ye,Ke=n("e5d6"),Qe=n.n(Ke),Ze={id:"intro",class:"intro",ref:"introChangeColor"},et=Object(o["createStaticVNode"])('<div class="animate" data-v-27cbb00e><div class="text-top" data-v-27cbb00e> I build digital products to make life easier. </div><div class="text-middle" data-v-27cbb00e>I am a</div><div class="text-highlights" data-v-27cbb00e><div data-v-27cbb00e><span class="highlight" data-v-27cbb00e>Software Engineer</span><span data-v-27cbb00e>Developer</span><span data-v-27cbb00e>UX/UI Designer</span><span data-v-27cbb00e>Freelancer</span><span data-v-27cbb00e>Student</span></div></div><img src="'+Qe.a+'" alt="Coding screen" data-v-27cbb00e></div>',1),tt=[et];function nt(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",Ze,tt,512)}var ot={name:"Intro",components:{},props:{proportion:{type:Number,default:0}},data:function(){return{secondSectionInterpolator:ne}},setup:function(){var e=Object(o["ref"])(null),t=Object(ie["useElementVisibility"])(e),n=function(){console.log("introIsVisible",t.value);var e=function(e){e.forEach((function(e){e.target.classList.toggle("is-inViewport",e.isIntersecting)}))},n=new IntersectionObserver(e),o={},c=document.querySelector(".text-highlights > div");n.observe(c,o)};return Object(o["onMounted"])((function(){document.addEventListener("DOMContentLoaded",n)})),{introChangeColor:e,introIsVisible:t,handleHighlightsAnimation:n}}};n("8ecc");const ct=k()(ot,[["render",nt],["__scopeId","data-v-27cbb00e"]]);var rt=ct,at=function(e){return Object(o["pushScopeId"])("data-v-533ba291"),e=e(),Object(o["popScopeId"])(),e},it={id:"about",ref:"aboutSection",class:"about"},st=at((function(){return Object(o["createElementVNode"])("div",{class:"about-text"},[Object(o["createElementVNode"])("span",{id:"aboutText"}),Object(o["createElementVNode"])("div",{class:"console-underscore",id:"console"},"_")],-1)})),lt=[st];function dt(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",it,lt,512)}var pt={name:"About",components:{},props:{proportion:{type:Number,default:0}},data:function(){return{secondSectionInterpolator:ne,intervalId:0,i:0,txt:"I am a Software Engineer based in Germany.             National and international customers have relied              on me for the development, design, and management               of their digital products. I am currently pursuing                my Master's degree. My fast learning ability gives                 me an edge over my competition. I am known for                  thinking outside the box, resolving bottlenecks,                   and always delivering greater than expected. "}},setup:function(){var e=Object(o["ref"])(null),t=Object(ie["useElementVisibility"])(e);return{aboutSection:e,aboutIsVisible:t}},methods:{typeText:function(){this.i<this.txt.length&&(document.getElementById("aboutText").innerHTML+=this.txt.charAt(this.i)),this.i+=1}},watch:{aboutIsVisible:function(e){var t=this;if(e&0===this.intervalId){var n=40;this.intervalId=setInterval((function(){return t.typeText()}),n),setInterval((function(){!0===e?(document.getElementById("console").className="console-underscore hidden",e=!1):(document.getElementById("console").className="console-underscore",e=!0)}),400)}}}};n("2c84");const ut=k()(pt,[["render",dt],["__scopeId","data-v-533ba291"]]);var mt=ut,bt=n("2925"),ft=n.n(bt),vt=n("a8a1"),ht=n.n(vt),jt={id:"education",ref:"educationSection"},Ot={class:"title-row"},gt=Object(o["createStaticVNode"])('<span class="title">Masters</span><div class="details"><div class="text-details"><span class="name">Computer Science</span><span class="duration">2020 - Now</span><span class="specialisation">Specialisation 1: Software Engineering</span><span class="specialisation">Specialisation 2: Network and Distributed Systems</span></div><div class="image"><a href="https://www.uni-kl.de/" target="_blank"><img src="'+ft.a+'"></a></div></div>',2),kt=[gt],yt=Object(o["createStaticVNode"])('<span class="title">Bachelors</span><div class="details"><div class="text-details"><span class="name">Computer Science</span><span class="duration">2015 - 2019</span><span class="duration">CGPA: 3.49/4</span></div><div class="image"><a href="http://nu.edu.pk/" target="_blank"><img src="'+ht.a+'"></a></div></div>',2),Et=[yt];function wt(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",jt,[Object(o["createElementVNode"])("div",Ot,[Object(o["createElementVNode"])("div",{class:"title",style:Object(o["normalizeStyle"])(r.educationSectionInterpolator.title(n.proportion))}," My Education ",4)]),Object(o["createElementVNode"])("div",{class:"degree",ref:"master",onMouseover:t[0]||(t[0]=function(){return a.showMasters&&a.showMasters.apply(a,arguments)})},kt,544),Object(o["createElementVNode"])("div",{class:"degree right",ref:"bachelor",onMouseover:t[1]||(t[1]=function(){return a.showBachelors&&a.showBachelors.apply(a,arguments)})},Et,544)],512)}var St={name:"Education",components:{},props:{proportion:{type:Number,default:0}},data:function(){return{educationSectionInterpolator:ce}},setup:function(){var e=Object(o["ref"])(null),t=Object(o["ref"])(null);return{bachelor:e,master:t}},methods:{showBachelors:function(){this.bachelor.classList.add("degree-active")},showMasters:function(){this.master.classList.add("degree-active")}},watch:{}};n("2fb8");const Nt=k()(St,[["render",wt]]);var Vt=Nt,It=function(e){return Object(o["pushScopeId"])("data-v-28972e9c"),e=e(),Object(o["popScopeId"])(),e},xt={id:"skills",ref:"skillsSection",class:"skills"},Bt={class:"title-row"},Tt=It((function(){return Object(o["createElementVNode"])("div",{class:"mini-text"},[Object(o["createTextVNode"])(" These are just some of my most"),Object(o["createElementVNode"])("br"),Object(o["createTextVNode"])(" significant skills ")],-1)})),Ct={class:"skills-container"};function _t(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("Skill");return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",xt,[Object(o["createElementVNode"])("div",Bt,[Object(o["createElementVNode"])("div",{class:"title",style:Object(o["normalizeStyle"])(r.skillsSectionInterpolator.title(n.proportion))}," MY SKILLS ",4),Tt]),Object(o["createElementVNode"])("div",Ct,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.skills,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(i,Object(o["mergeProps"])(e,{key:t}),null,16)})),128))])],512)}var Mt={class:"skill"},Lt={class:"title"},Pt={class:"description"},At=Object(o["createElementVNode"])("div",{class:"skill-line"},null,-1);function Dt(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Mt,[Object(o["createElementVNode"])("div",Lt,Object(o["toDisplayString"])(n.title),1),Object(o["createElementVNode"])("div",Pt,Object(o["toDisplayString"])(n.description),1),At])}var zt={name:"Skill",components:{},props:{proportion:{type:Number,default:0},title:{type:String,default:"Skill"},description:{type:String,default:"Description"}},data:function(){return{skillsSectionInterpolator:oe}},setup:function(){},methods:{},watch:{}};n("271e");const Wt=k()(zt,[["render",Dt]]);var Rt=Wt,Ft={name:"Skills",components:{Skill:Rt},props:{proportion:{type:Number,default:0}},data:function(){return{skillsSectionInterpolator:oe,skills:[{title:"react.js",description:"I use react.js for web apps which require a lot of reactivity."},{title:"vue.js",description:"I use vue.js for the same as react but I love it more."},{title:"nuxt.js",description:"A vue.js framework for static site rendering."},{title:"javascript",description:"I use this to handle interactions and visual effects."},{title:"html/css",description:"I use these to bring my designs to browser."},{title:"node.js",description:"I use it for server apps and prototyping."},{title:"express",description:"A framework for writing backend on node.js"},{title:"python",description:"I use it for scripting and backend server apps."},{title:"c++",description:"I use C++ for building backend libraries."},{title:"ux/ui",description:"It helps my designs be more meaningul and relevant."},{title:"photoshop",description:"I use photoshop for photo editing."},{title:"lightroom",description:"I use lightroom for photo editing too."}]}},setup:function(){},methods:{},watch:{}};n("ce2b");const Ht=k()(Ft,[["render",_t],["__scopeId","data-v-28972e9c"]]);var Gt=Ht,Ut={name:"Main",components:{Skills:Gt,Contact:he,About:mt,Intro:rt,Welcome:de,Education:Vt,WorkExperience:$e},setup:function(){var e=Object(o["ref"])(null),t=Object(o["ref"])(null),n=Object(o["ref"])(0);function c(){var o=e.value.getBoundingClientRect(),c=t.value.getBoundingClientRect();n.value=(window.scrollY-o.y)/c.height,console.log("proportion",n.value)}return Object(o["provide"])("proportion",n.value),Object(o["onMounted"])((function(){document.addEventListener("scroll",c)})),Object(o["onUnmounted"])((function(){document.removeEventListener("scroll",c)})),{appRef:e,welcomeRef:t,proportion:n}},methods:{}};n("1cf3");const Jt=k()(Ut,[["render",U],["__scopeId","data-v-7a9b0270"]]);var Xt=Jt,qt={name:"App",components:{Main:Xt,Sidebar:L},data:function(){return{mode:"dark"}},setup:function(){var e=function(e){var t=document.querySelector(".cursor");t.style.top=e.clientY+"px",t.style.left=e.clientX+"px"};return Object(o["onMounted"])((function(){document.addEventListener("mousemove",e)})),Object(o["onUnmounted"])((function(){document.removeEventListener("mousemove",e)})),{handleMouseMove:e}},methods:{toggleTheme:function(){"dark"===this.mode?this.mode="light":this.mode="dark"}}};n("1d56");const Yt=k()(qt,[["render",r]]);var $t=Yt;Object(o["createApp"])($t).mount("#app")},"5db3":function(e,t,n){},"5f2e":function(e,t,n){"use strict";n("b0d7")},"62e9":function(e,t,n){e.exports=n.p+"img/firzok.1fa2ed99.png"},"657f":function(e,t,n){},"8ecc":function(e,t,n){"use strict";n("657f")},"965e":function(e,t,n){"use strict";n("a5aa")},"98c4":function(e,t,n){},a5aa:function(e,t,n){},a81f:function(e,t,n){"use strict";n("49d2")},a8a1:function(e,t,n){e.exports=n.p+"img/nu.16978b3c.png"},b0d7:function(e,t,n){},b42d:function(e,t,n){},b760:function(e,t,n){},b88a:function(e,t,n){},ce2b:function(e,t,n){"use strict";n("54c8")},e58b:function(e,t,n){"use strict";n("b42d")},e5d6:function(e,t,n){e.exports=n.p+"img/codeScreen1.093fff28.png"},ef53:function(e,t,n){},f0e1:function(e,t,n){"use strict";n("50cf")},f8df:function(e,t,n){"use strict";n("23da")}});
//# sourceMappingURL=app.1a834ad8.js.map