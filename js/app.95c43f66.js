(function(e){function t(t){for(var o,r,i=t[0],s=t[1],l=t[2],p=0,u=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(u.length)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},c={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/firzok.github.io/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1441:function(e,t,n){},"14b1":function(e,t,n){"use strict";n("ab22")},"1dd9":function(e,t,n){},2925:function(e,t,n){e.exports=n.p+"img/tukl.23591074.svg"},3361:function(e,t,n){},"3a58":function(e,t,n){"use strict";n("b59b")},4485:function(e,t,n){"use strict";n("a338")},4530:function(e,t,n){},"51e0":function(e,t,n){},5505:function(e,t,n){"use strict";n("1dd9")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=Object(o["createElementVNode"])("div",{class:"cursor"},null,-1);function a(e,t,n,a,r,i){var s=Object(o["resolveComponent"])("Sidebar"),l=Object(o["resolveComponent"])("Main");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(s),Object(o["createVNode"])(l),c])}var r={class:"sidebar"},i=["src"],s={class:"links"},l=Object(o["createTextVNode"])("Welcome"),d=Object(o["createTextVNode"])("Intro"),p=Object(o["createTextVNode"])("About"),u=Object(o["createTextVNode"])("Skills"),b=Object(o["createTextVNode"])("Education"),m=Object(o["createTextVNode"])("Work Experience"),f=Object(o["createTextVNode"])("Contact");function v(e,t,c,a,v,j){var O=Object(o["resolveComponent"])("SidebarLink");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("img",{class:"firzok",src:n("62e9"),alt:"Firzok",href:"/"},null,8,i),Object(o["createElementVNode"])("nav",s,[Object(o["createVNode"])(O,{scrollTo:"welcome"},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),Object(o["createVNode"])(O,{scrollTo:"intro"},{default:Object(o["withCtx"])((function(){return[d]})),_:1}),Object(o["createVNode"])(O,{scrollTo:"about"},{default:Object(o["withCtx"])((function(){return[p]})),_:1}),Object(o["createVNode"])(O,{scrollTo:"skills"},{default:Object(o["withCtx"])((function(){return[u]})),_:1}),Object(o["createVNode"])(O,{scrollTo:"education"},{default:Object(o["withCtx"])((function(){return[b]})),_:1}),Object(o["createVNode"])(O,{scrollTo:"workExperience"},{default:Object(o["withCtx"])((function(){return[m]})),_:1}),Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])((function(){return[f]})),_:1})])])}var j=["href"];function O(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["link",{active:r.isActive()}])},[Object(o["createElementVNode"])("a",{href:"#".concat(n.scrollTo)},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],8,j)],2)}var h={name:"SidebarLink",components:{},props:{scrollTo:{type:String,required:!0,description:"id of the section to scroll to."}},methods:{isActive:function(){var e=document.querySelector('section[id="'.concat(this.scrollTo,'"]'));if(!e)return!1;var t=e.getBoundingClientRect();return console.log(t&&t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)),t&&t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}}},g=(n("85fc"),n("d959")),y=n.n(g);const k=y()(h,[["render",O],["__scopeId","data-v-7572f105"]]);var w=k,E={name:"Sidebar",components:{SidebarLink:w},methods:{scrollTo:function(e){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"end"})}}};n("aa8b");const N=y()(E,[["render",v],["__scopeId","data-v-1c997436"]]);var V=N,S={ref:"appRef",id:"container",class:"main"},I={class:"components"},x={ref:"welcomeRef",style:{height:"6000px",position:"relative"}},B={style:{height:"auto",position:"relative"}},C={style:{height:"500px",position:"relative"}},T={style:{height:"1100px",position:"relative"}},_={style:{height:"800px",position:"relative"}},A={style:{height:"2100px",position:"relative"}},L={style:{height:"2000px",position:"relative"}};function M(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Welcome"),s=Object(o["resolveComponent"])("Intro"),l=Object(o["resolveComponent"])("About"),d=Object(o["resolveComponent"])("Skills"),p=Object(o["resolveComponent"])("Education"),u=Object(o["resolveComponent"])("WorkExperience"),b=Object(o["resolveComponent"])("Contact");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",S,[Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("div",x,[Object(o["createVNode"])(i,{proportion:c.proportion},null,8,["proportion"])],512),Object(o["createElementVNode"])("div",B,[Object(o["createVNode"])(s,{proportion:c.proportion},null,8,["proportion"])]),Object(o["createElementVNode"])("div",C,[Object(o["createVNode"])(l,{proportion:c.proportion},null,8,["proportion"])]),Object(o["createElementVNode"])("div",T,[Object(o["createVNode"])(d,{proportion:c.proportion},null,8,["proportion"])]),Object(o["createElementVNode"])("div",_,[Object(o["createVNode"])(p,{proportion:c.proportion},null,8,["proportion"])]),Object(o["createElementVNode"])("div",A,[Object(o["createVNode"])(u,{proportion:c.proportion},null,8,["proportion"])]),Object(o["createElementVNode"])("div",L,[Object(o["createVNode"])(b,{proportion:c.proportion},null,8,["proportion"])])])],512)}var D=function(e){return Object(o["pushScopeId"])("data-v-58d73a77"),e=e(),Object(o["popScopeId"])(),e},P={id:"welcome",class:"welcome",ref:"welcomeColorChange"},z={class:"animated-title"},W={class:"text-top"},R=D((function(){return Object(o["createElementVNode"])("span",null,"Hi",-1)})),H=D((function(){return Object(o["createElementVNode"])("span",null,"I am Firzok",-1)})),F=[R,H],G={class:"text-bottom"};function U(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",P,[Object(o["createElementVNode"])("div",z,[Object(o["createElementVNode"])("div",W,[Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])(a.welcomeSectionInterpolator.topText(n.proportion))},F,4)]),Object(o["createElementVNode"])("div",G,[Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])(a.welcomeSectionInterpolator.bottomText(n.proportion))}," Welcome to my world. ",4)])])],512)}n("a9e3"),n("d3b7"),n("159b");var J={topText:function(e){return e<1.4?{"animation-delay":"calc(".concat(e," * -1.5s)")}:{opacity:2*(1.9-e),"animation-delay":"calc(".concat(e," * -1.5s)"),transform:"scale(".concat(e," - 4)")}},bottomText:function(e){return e>1&&e<1.8||e>1.8?{"animation-delay":"calc(".concat(e-1," * -1s)")}:void 0}},X={highlights:function(e){return e>2&&e<4||e>2.4?{"animation-delay":"calc(".concat(e-2," * -1.5s)")}:void 0},bottomText:function(e){return e>1&&e<2.4?{"animation-delay":"calc(".concat(e-1," * -1s)")}:e>2.4?{opacity:2*(1.8-e),transform:"scaleX(".concat(e,")"),"animation-delay":"calc(".concat(-2*e,")")}:void 0}},q={title:function(e){if(e>2.1&&e<=2.7)return{transform:"translateX(".concat(100*(5.4-2*e),"%)")}}},Y={title:function(e){if(e>2.5&&e<=3)return{transform:"translateX(".concat(250*(3-e),"%)")}}},K={title:function(e){if(e>2.75&&e<=3.3)return{transform:"translateX(".concat(222.2*(3.3-e),"%)")}}},$={title:function(e){if(e>2.41&&e<=3.95)return{transform:"translateX(".concat(227.27*(3.95-e),"%)")}}},Q=n("2c28"),Z={name:"Welcome",props:{proportion:{type:Number,default:0}},data:function(){return{welcomeSectionInterpolator:J}},setup:function(){var e=Object(o["ref"])(null),t=Object(Q["useElementVisibility"])(e),n=function(){var e=function(e){e.forEach((function(e){e.target.classList.toggle("is-inViewport",e.isIntersecting)}))},t=new IntersectionObserver(e),n={},o=document.querySelector(".text-highlights > div");t.observe(o,n)};return Object(o["onMounted"])((function(){document.addEventListener("DOMContentLoaded",n)})),{welcomeColorChange:e,welcomeIsVisible:t,handleContentLoaded:n}},methods:{checkActive:function(e,t,n){return e>t&&e<n}}};n("8c71");const ee=y()(Z,[["render",U],["__scopeId","data-v-58d73a77"]]);var te=ee,ne={id:"contact",ref:"contactSection",class:"contact"},oe={class:"title-row"},ce=Object(o["createStaticVNode"])('<div class="list" data-v-57c6c789><div class="contact" data-v-57c6c789><a href="mailto:firzok.nadeem@gmail.com" data-v-57c6c789>Email</a></div><div class="contact" data-v-57c6c789><a href="https://www.linkedin.com/in/firzok-nadeem/" data-v-57c6c789>LinkedIn</a></div><div class="contact" data-v-57c6c789><a href="https://github.com/firzok" data-v-57c6c789>GitHub</a></div><div class="contact" data-v-57c6c789><a href="https://www.facebook.com/Firzoknadeem" data-v-57c6c789>Facebook</a></div><div class="contact" data-v-57c6c789><a href="https://www.instagram.com/ifirzok/" data-v-57c6c789>Instagram</a></div><div class="contact" data-v-57c6c789><a href="https://twitter.com/Firzok" data-v-57c6c789>Twitter</a></div></div>',1);function ae(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",ne,[Object(o["createElementVNode"])("div",oe,[Object(o["createElementVNode"])("div",{class:"title",style:Object(o["normalizeStyle"])(a.contactSectionInterpolator.title(n.proportion))}," Get in touch ",4)]),ce],512)}var re={name:"contact",components:{},props:{proportion:{type:Number,default:0}},data:function(){return{contactSectionInterpolator:$}},setup:function(){},methods:{},watch:{}};n("14b1");const ie=y()(re,[["render",ae],["__scopeId","data-v-57c6c789"]]);var se=ie,le={id:"workExperience",ref:"workExperienceSection",class:"workExperience"},de={class:"title-row"},pe={class:"list"};function ue(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Work");return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",le,[Object(o["createElementVNode"])("div",de,[Object(o["createElementVNode"])("div",{class:"title",style:Object(o["normalizeStyle"])(a.workExperienceSectionInterpolator.title(n.proportion))}," Work Experience ",4)]),Object(o["createElementVNode"])("div",pe,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.workExperiences,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(i,Object(o["mergeProps"])({class:"work"},e,{key:e.id}),null,16)})),128))])],512)}n("a4d3"),n("e01a");var be=function(e){return Object(o["pushScopeId"])("data-v-644a17c8"),e=e(),Object(o["popScopeId"])(),e},me={class:"work"},fe={class:"visible"},ve={class:"position-line"},je={class:"position"},Oe=be((function(){return Object(o["createElementVNode"])("span",{class:"seperator"},"at",-1)})),he={class:"company"},ge={class:"secondary-line"},ye={class:"start"},ke=be((function(){return Object(o["createElementVNode"])("span",null," - ",-1)})),we={class:"end"},Ee=be((function(){return Object(o["createElementVNode"])("span",{class:"seperator"}," - ",-1)})),Ne={class:"location"},Ve={class:"details"},Se={key:0,class:"description"},Ie={key:1,class:"description"},xe={key:0,class:"accomplishments"},Be={class:"description"},Ce=Object(o["createTextVNode"])(" Accomplishments: "),Te={key:1,class:"tools"},_e={class:"description"},Ae=Object(o["createTextVNode"])(" Tools and Technologies used: ");function Le(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",me,[Object(o["createElementVNode"])("div",fe,[Object(o["createElementVNode"])("div",ve,[Object(o["createElementVNode"])("span",je,Object(o["toDisplayString"])(n.position),1),Oe,Object(o["createElementVNode"])("span",he,Object(o["toDisplayString"])(n.company),1)]),Object(o["createElementVNode"])("div",ge,[Object(o["createElementVNode"])("span",ye,Object(o["toDisplayString"])(n.start),1),ke,Object(o["createElementVNode"])("span",we,Object(o["toDisplayString"])(n.end),1),Ee,Object(o["createElementVNode"])("span",Ne,Object(o["toDisplayString"])(n.location),1)])]),Object(o["createElementVNode"])("div",Ve,[n.description.length>1?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",Se,[Object(o["createTextVNode"])(" As a "+Object(o["toDisplayString"])(n.position)+" at "+Object(o["toDisplayString"])(n.company)+", my day to day tasks were: ",1),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.description,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:t,class:"lines"},Object(o["toDisplayString"])(t+1)+". "+Object(o["toDisplayString"])(e),1)})),128))])):Object(o["createCommentVNode"])("",!0),1===n.description.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",Ie,Object(o["toDisplayString"])(n.description[0]),1)):Object(o["createCommentVNode"])("",!0)]),n.accomplishment?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",xe,[Object(o["createElementVNode"])("span",Be,[Ce,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.accomplishment,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:t,class:"lines"},Object(o["toDisplayString"])(t+1)+". "+Object(o["toDisplayString"])(e),1)})),128))])])):Object(o["createCommentVNode"])("",!0),n.toolsUsed?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Te,[Object(o["createElementVNode"])("span",_e,[Ae,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.toolsUsed,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:t,class:"lines"},Object(o["toDisplayString"])(t+1)+". "+Object(o["toDisplayString"])(e),1)})),128))])])):Object(o["createCommentVNode"])("",!0)])}var Me={name:"work",components:{},props:{position:{type:String,default:"Position"},company:{type:String,default:"Company"},companyLink:{type:String,default:"/"},start:{type:String,default:"2019"},end:{type:String,default:"2020"},location:{type:String,default:"Location"},description:{type:function(){return[String]},default:function(){return["Description"]}},accomplishment:{type:function(){return[String]},default:void 0},toolsUsed:{type:function(){return[String]},default:void 0,description:"Array of strings"},companyLogoPath:{type:String,default:void 0}},data:function(){},setup:function(){},methods:{},watch:{}};n("d43c");const De=y()(Me,[["render",Le],["__scopeId","data-v-644a17c8"]]);var Pe=De,ze={name:"workExperience",components:{Work:Pe},props:{proportion:{type:Number,default:0}},data:function(){return{workExperienceSectionInterpolator:K,workExperiences:[{id:1,position:"Software Engineer",company:"Proto",companyLink:"https://www.proto.cx/",start:"09.2020",end:"09.2021",location:"Remote/Canada",description:["Developing frontend components for Proto using Vue.","Writing unit tests for Frontend components using Jest.","Backend development using Python."],accomplishment:["Achieved ~80% reduction in website loading by optimizing code."],toolsUsed:["Vue.js","Jest","Python","Gitlab","Docker"]},{id:2,position:"Software Engineer",company:"Automotive Artificial Intelligence",companyLink:"https://www.automotive-ai.com/",start:"07.2019",end:"09.2020",location:"Islamabad, Pakistan",description:["Creating reusable components using Vue.","Integrate new 3D objects in the Analyzer e.g Cars or Trucks using Three.js.","Writing test cases for frontend using Jest.","Creating microservices using Python.","Writing Frontend components for the product using React."],accomplishment:["Optimized and refactored the codebase and achieved ~20% overall improvement."],toolsUsed:["Vue.js","React","Python","C++","GitHub","Docker","AWS"]},{id:3,position:"Software Engineer Intern",company:"Automotive Artificial Intelligence",companyLink:"https://www.automotive-ai.com/",start:"01.2019",end:"02.2019",location:"Islamabad, Pakistan",description:["At AAI I was part of the Platform Developer Team. Here, I along with a team of 5 other interns successfully developed a Rule-based Traffic Simulator for self-driving cars."],accomplishment:["Developed a renderer on PyGame in Python","Developed a Rule-based Traffic Simulator using Python"],toolsUsed:["Python","C++","PyGame","GitHub"]},{id:4,position:"Software Engineer Intern",company:"Bentley Systems",companyLink:"https://www.bentley.com/",start:"06.2018",end:"08.2018",location:"Islamabad, Pakistan",description:["At AAI I was part of the iModel JS Team. Here I was assigned to work on Microsoft Rush."],accomplishment:["Integrated Microsoft Rush as a Package Manager for Node Applications in the iModel JS team.","Wrote Python automation scripts that generated Graphs based on the tests entered and passed by different developers."],toolsUsed:["Python","Javascript","Node","GitHub"]}]}},setup:function(){},methods:{},watch:{}};n("3a58");const We=y()(ze,[["render",ue],["__scopeId","data-v-3fb9b9c0"]]);var Re=We,He=n("e5d6"),Fe=n.n(He),Ge={id:"intro",class:"intro",ref:"introChangeColor"},Ue=Object(o["createStaticVNode"])('<div class="animate" data-v-660ad913><div class="text-top" data-v-660ad913> I build digital products to make life easier. </div><div class="text-middle" data-v-660ad913>I am a</div><div class="text-highlights" data-v-660ad913><div data-v-660ad913><span class="highlight" data-v-660ad913>Software Engineer</span><span data-v-660ad913>Developer</span><span data-v-660ad913>UX/UI Designer</span><span data-v-660ad913>Freelancer</span><span data-v-660ad913>Student</span></div></div><img src="'+Fe.a+'" alt="Coding screen" data-v-660ad913></div>',1),Je=[Ue];function Xe(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",Ge,Je,512)}var qe={name:"Intro",components:{},props:{proportion:{type:Number,default:0}},data:function(){return{secondSectionInterpolator:X}},setup:function(){var e=Object(o["ref"])(null),t=Object(Q["useElementVisibility"])(e),n=function(){console.log("introIsVisible",t.value);var e=function(e){e.forEach((function(e){e.target.classList.toggle("is-inViewport",e.isIntersecting)}))},n=new IntersectionObserver(e),o={},c=document.querySelector(".text-highlights > div");n.observe(c,o)};return Object(o["onMounted"])((function(){document.addEventListener("DOMContentLoaded",n)})),{introChangeColor:e,introIsVisible:t,handleHighlightsAnimation:n}}};n("fe57");const Ye=y()(qe,[["render",Xe],["__scopeId","data-v-660ad913"]]);var Ke=Ye,$e=function(e){return Object(o["pushScopeId"])("data-v-bedb22f8"),e=e(),Object(o["popScopeId"])(),e},Qe={id:"about",ref:"aboutSection",class:"about"},Ze=$e((function(){return Object(o["createElementVNode"])("div",{class:"about-text"},[Object(o["createElementVNode"])("span",{id:"aboutText"}),Object(o["createElementVNode"])("div",{class:"console-underscore",id:"console"},"_")],-1)})),et=[Ze];function tt(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",Qe,et,512)}var nt={name:"About",components:{},props:{proportion:{type:Number,default:0}},data:function(){return{secondSectionInterpolator:X,intervalId:0,i:0,txt:"I am a Software Engineer based in Germany.             National and international customers have relied              on me for the development, design, and management               of their digital products. I am currently pursuing                my Master's degree. My fast learning ability gives                 me an edge over my competition. I am known for                  thinking outside the box, resolving bottlenecks,                   and always delivering greater than expected. "}},setup:function(){var e=Object(o["ref"])(null),t=Object(Q["useElementVisibility"])(e);return{aboutSection:e,aboutIsVisible:t}},methods:{typeText:function(){this.i<this.txt.length&&(document.getElementById("aboutText").innerHTML+=this.txt.charAt(this.i)),this.i+=1}},watch:{aboutIsVisible:function(e){var t=this;if(e&0===this.intervalId){var n=40;this.intervalId=setInterval((function(){return t.typeText()}),n),setInterval((function(){!0===e?(document.getElementById("console").className="console-underscore hidden",e=!1):(document.getElementById("console").className="console-underscore",e=!0)}),400)}}}};n("5505");const ot=y()(nt,[["render",tt],["__scopeId","data-v-bedb22f8"]]);var ct=ot,at=n("2925"),rt=n.n(at),it=n("a8a1"),st=n.n(it),lt={id:"education",ref:"educationSection",class:"education"},dt={class:"title-row"},pt={class:"list"},ut=Object(o["createStaticVNode"])('<span class="title" data-v-39b90851>Masters</span><div class="details" data-v-39b90851><div class="text-details" data-v-39b90851><span class="name" data-v-39b90851>Computer Science</span><span class="duration" data-v-39b90851>2020 - Now</span><span class="specialisation" data-v-39b90851>Specialisation 1: Software Engineering</span><span class="specialisation" data-v-39b90851>Specialisation 2: Network and Distributed Systems</span></div><div class="image" data-v-39b90851><a href="https://www.uni-kl.de/" target="_blank" data-v-39b90851><img src="'+rt.a+'" data-v-39b90851></a></div></div>',2),bt=[ut],mt=Object(o["createStaticVNode"])('<span class="title" data-v-39b90851>Bachelors</span><div class="details" data-v-39b90851><div class="text-details" data-v-39b90851><span class="name" data-v-39b90851>Computer Science</span><span class="duration" data-v-39b90851>2015 - 2019</span><span class="duration" data-v-39b90851>CGPA: 3.49/4</span></div><div class="image" data-v-39b90851><a href="http://nu.edu.pk/" target="_blank" data-v-39b90851><img src="'+st.a+'" data-v-39b90851></a></div></div>',2),ft=[mt];function vt(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",lt,[Object(o["createElementVNode"])("div",dt,[Object(o["createElementVNode"])("div",{class:"title",style:Object(o["normalizeStyle"])(a.educationSectionInterpolator.title(n.proportion))}," My Education ",4)]),Object(o["createElementVNode"])("div",pt,[Object(o["createElementVNode"])("div",{class:"degree",ref:"master",onMouseover:t[0]||(t[0]=function(){return r.showMasters&&r.showMasters.apply(r,arguments)})},bt,544),Object(o["createElementVNode"])("div",{class:"degree right",ref:"bachelor",onMouseover:t[1]||(t[1]=function(){return r.showBachelors&&r.showBachelors.apply(r,arguments)})},ft,544)])],512)}var jt={name:"Education",components:{},props:{proportion:{type:Number,default:0}},data:function(){return{educationSectionInterpolator:Y}},setup:function(){var e=Object(o["ref"])(null),t=Object(o["ref"])(null);return{bachelor:e,master:t}},methods:{showBachelors:function(){this.bachelor.classList.add("degree-active")},showMasters:function(){this.master.classList.add("degree-active")}},watch:{}};n("d8cc");const Ot=y()(jt,[["render",vt],["__scopeId","data-v-39b90851"]]);var ht=Ot,gt=function(e){return Object(o["pushScopeId"])("data-v-451b553e"),e=e(),Object(o["popScopeId"])(),e},yt={id:"skills",ref:"skillsSection",class:"skills"},kt={class:"title-row"},wt=gt((function(){return Object(o["createElementVNode"])("div",{class:"mini-text"},[Object(o["createTextVNode"])(" These are just some of my most"),Object(o["createElementVNode"])("br"),Object(o["createTextVNode"])(" significant skills ")],-1)})),Et={class:"skills-container"};function Nt(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Skill");return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",yt,[Object(o["createElementVNode"])("div",kt,[Object(o["createElementVNode"])("div",{class:"title",style:Object(o["normalizeStyle"])(a.skillsSectionInterpolator.title(n.proportion))}," MY SKILLS ",4),wt]),Object(o["createElementVNode"])("div",Et,[Object(o["createVNode"])(i,{title:"react.js",description:"I use react.js for web apps which require a lot of reactivity."}),Object(o["createVNode"])(i,{title:"vue.js",description:"I use vue.js for the same as react but I love it more."}),Object(o["createVNode"])(i,{title:"nuxt.js",description:"A vue.js framework for static site rendering."}),Object(o["createVNode"])(i,{title:"javascript",description:"I use this to handle interactions and visual effects."}),Object(o["createVNode"])(i,{title:"html/css",description:"I use these to bring my designs to browser."}),Object(o["createVNode"])(i,{title:"node.js",description:"I use it for server apps and prototyping."}),Object(o["createVNode"])(i,{title:"express",description:"A framework for writing backend on node.js"}),Object(o["createVNode"])(i,{title:"python",description:"I use it for scripting and backend server apps."}),Object(o["createVNode"])(i,{title:"c++",description:"I use C++ for building fast libraries."}),Object(o["createVNode"])(i,{title:"ux/ui",description:"It helps my designs be more meaningul and relevant."}),Object(o["createVNode"])(i,{title:"photoshop",description:"I use photoshop for photo editing."}),Object(o["createVNode"])(i,{title:"lightroom",description:"I use lightroom for photo editing too."})])],512)}var Vt=function(e){return Object(o["pushScopeId"])("data-v-1455f0f0"),e=e(),Object(o["popScopeId"])(),e},St={class:"skill"},It={class:"title"},xt={class:"description"},Bt=Vt((function(){return Object(o["createElementVNode"])("div",{class:"skill-line"},null,-1)}));function Ct(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",St,[Object(o["createElementVNode"])("div",It,Object(o["toDisplayString"])(n.title),1),Object(o["createElementVNode"])("div",xt,Object(o["toDisplayString"])(n.description),1),Bt])}var Tt={name:"Skill",components:{},props:{proportion:{type:Number,default:0},title:{type:String,default:"Skill"},description:{type:String,default:"Description"}},data:function(){return{skillsSectionInterpolator:q}},setup:function(){},methods:{},watch:{}};n("4485");const _t=y()(Tt,[["render",Ct],["__scopeId","data-v-1455f0f0"]]);var At=_t,Lt={name:"Skills",components:{Skill:At},props:{proportion:{type:Number,default:0}},data:function(){return{skillsSectionInterpolator:q}},setup:function(){},methods:{},watch:{}};n("c46e");const Mt=y()(Lt,[["render",Nt],["__scopeId","data-v-451b553e"]]);var Dt=Mt,Pt={name:"Main",components:{Skills:Dt,Contact:se,About:ct,Intro:Ke,Welcome:te,Education:ht,WorkExperience:Re},setup:function(){var e=Object(o["ref"])(null),t=Object(o["ref"])(null),n=Object(o["ref"])(0);function c(){var o=e.value.getBoundingClientRect(),c=t.value.getBoundingClientRect();n.value=(window.scrollY-o.y)/c.height,console.log("proportion",n.value)}return Object(o["provide"])("proportion",n.value),Object(o["onMounted"])((function(){document.addEventListener("scroll",c)})),Object(o["onUnmounted"])((function(){document.removeEventListener("scroll",c)})),{appRef:e,welcomeRef:t,proportion:n}},methods:{}};n("c954");const zt=y()(Pt,[["render",M],["__scopeId","data-v-4e9d340d"]]);var Wt=zt,Rt={name:"App",components:{Main:Wt,Sidebar:V},setup:function(){var e=function(e){var t=document.querySelector(".cursor");t.style.top=e.clientY+"px",t.style.left=e.clientX+"px"};return Object(o["onMounted"])((function(){document.addEventListener("mousemove",e)})),Object(o["onUnmounted"])((function(){document.removeEventListener("mousemove",e)})),{handleMouseMove:e}},methods:{}};n("6bf5");const Ht=y()(Rt,[["render",a]]);var Ft=Ht;Object(o["createApp"])(Ft).mount("#app")},"61a3":function(e,t,n){},"62e9":function(e,t,n){e.exports=n.p+"img/firzok.1fa2ed99.png"},"6bf5":function(e,t,n){"use strict";n("793f")},"793f":function(e,t,n){},"85fc":function(e,t,n){"use strict";n("1441")},"8c71":function(e,t,n){"use strict";n("4530")},"9ae8":function(e,t,n){},a1c4:function(e,t,n){},a338:function(e,t,n){},a8a1:function(e,t,n){e.exports=n.p+"img/nu.16978b3c.png"},aa8b:function(e,t,n){"use strict";n("b831")},ab22:function(e,t,n){},b59b:function(e,t,n){},b831:function(e,t,n){},c46e:function(e,t,n){"use strict";n("9ae8")},c954:function(e,t,n){"use strict";n("3361")},d43c:function(e,t,n){"use strict";n("61a3")},d8cc:function(e,t,n){"use strict";n("a1c4")},e5d6:function(e,t,n){e.exports=n.p+"img/codeScreen1.093fff28.png"},fe57:function(e,t,n){"use strict";n("51e0")}});
//# sourceMappingURL=app.95c43f66.js.map