webpackJsonp([6],{271:function(t,e,n){var a=n(1)(n(312),n(313),!1,function(t){n(310)},null,null);t.exports=a.exports},290:function(t,e,n){var a=n(1)(n(293),n(299),!1,function(t){n(291)},null,null);t.exports=a.exports},291:function(t,e,n){var a=n(292);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(5)("30655c00",a,!0,{})},292:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"",""])},293:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),o=n(294),r=n.n(o);e.default={components:{InfoOverlay:r.a},name:"default-layout",data:function(){return{lang:a.a}}}},294:function(t,e,n){var a=n(1)(n(297),n(298),!1,function(t){n(295)},"data-v-f33fe81a",null);t.exports=a.exports},295:function(t,e,n){var a=n(296);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(5)("12092a98",a,!0,{})},296:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.info-overlay[data-v-f33fe81a]{width:50px;height:50px;background-color:#2c3e50;position:fixed;bottom:15px;right:16px;border-radius:100%;-webkit-box-shadow:0 0 14px 0 rgba(0,0,0,.75);box-shadow:0 0 14px 0 rgba(0,0,0,.75)}.info-overlay--button[data-v-f33fe81a]{color:#fff;cursor:pointer;text-align:center;position:relative;top:0;font-size:1.5em;padding:8px 0 7px;z-index:10;background:#2c3e50;border-radius:100%}.info-overlay--container[data-v-f33fe81a]{position:relative}.info-overlay--content[data-v-f33fe81a]{-webkit-transition:width .2s,height .2s;transition:width .2s,height .2s;width:0;height:0;position:absolute;bottom:25px;right:27px;background:#fff;border-radius:4px;overflow:hidden;-webkit-box-shadow:0 0 14px 0 rgba(0,0,0,.75);box-shadow:0 0 14px 0 rgba(0,0,0,.75);background:url("/images/tic-tac-toe.png")}.info-overlay--content .row[data-v-f33fe81a]{margin-left:0;margin-right:0;background:#ffffff63}.info-overlay--open[data-v-f33fe81a]{width:20em;height:25em;overflow:auto}',""])},297:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"info-overlay",data:function(){return{open:!1}},methods:{toggleInfoOverlay:function(){this.open=!this.open,this.open?this.$refs.content.classList.add("info-overlay--open"):this.$refs.content.classList.remove("info-overlay--open")}}}},298:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info-overlay"},[e("div",{staticClass:"info-overlay--container"},[e("p",{staticClass:"info-overlay--button",on:{click:this.toggleInfoOverlay}},[e("i",{staticClass:"fas fa-question"})]),this._v(" "),e("div",{ref:"content",staticClass:"info-overlay--content"},[this._m(0)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("h3",{staticClass:"info-overlay--title"},[t._v("What's this about, then?")]),t._v(" "),n("p",[t._v("\n                        This site serves as both my personal site & my playground for new technologies.\n                    ")]),t._v(" "),n("p",[t._v("\n                        As you can probably tell, site design is not one of my strong points. But I'm always trying to keep up-to-date with new web technologies.\n                    ")]),t._v(" "),n("p",[t._v("Here's a few technologies in use/powering this site:-")]),t._v(" "),n("ul",[n("li",[t._v("Ubuntu 16.04 (Xenial)")]),t._v(" "),n("li",[t._v("Nginx 1.14")]),t._v(" "),n("li",[t._v("Google PageSpeed NGX")]),t._v(" "),n("li",[t._v("PHP 7.1.16")]),t._v(" "),n("li",[t._v("WebP Images*")]),t._v(" "),n("li",[t._v("Laravel 5.6.17")]),t._v(" "),n("li",[t._v("ServiceWorker*^")]),t._v(" "),n("li",[t._v("VueJS")])]),t._v(" "),n("p",[t._v("\n                        * - Based on browser compatibility\n                    ")]),t._v(" "),n("p",[t._v("\n                        ^ - Used for offline site availability & allows the contact form to work offline.\n                    ")])])])}]}},299:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("navbar",[n("template",{slot:"left-links"},[n("navbar-link",{attrs:{href:"/about",icon:"user"}},[t._v(t._s(t.lang.get("navbar.about")))]),t._v(" "),n("navbar-link",{attrs:{href:"/posts",icon:"pencil"}},[t._v(t._s(t.lang.get("navbar.blog")))]),t._v(" "),n("navbar-link",{attrs:{href:"/music",icon:"music"}},[t._v(t._s(t.lang.get("navbar.music")))]),t._v(" "),n("navbar-link",{attrs:{href:"/photography",icon:"camera-retro"}},[t._v(t._s(t.lang.get("navbar.photography")))]),t._v(" "),n("navbar-link",{attrs:{href:"/contact",icon:"inbox"}},[t._v(t._s(t.lang.get("navbar.contact")))])],1),t._v(" "),n("template",{slot:"right-links"},[n("auth-button",[n("li",{staticClass:"dropdown-submenu"},[n("router-link",{attrs:{to:"/dashboard"}},[n("i",{staticClass:"glyphicon glyphicon-flash"}),t._v(" Dashboard")]),t._v(" "),n("router-link",{attrs:{to:"/dashboard/settings"}},[n("i",{staticClass:"glyphicon glyphicon-cog"}),t._v(" Settings")])],1)]),t._v(" "),n("language-selector")],1)],2),t._v(" "),n("transition",{attrs:{name:"fade"}},[t._t("default")],2),t._v(" "),n("info-overlay")],1)])},staticRenderFns:[]}},310:function(t,e,n){var a=n(311);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(5)("39403f37",a,!0,{})},311:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".placeholder-row{margin-left:0!important;margin-right:0!important}",""])},312:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(138),o=n.n(a),r=n(4),i=n(290),s=n.n(i),l=n(6),c=n(7);function u(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(o,r){try{var i=e[o](r),s=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})}}e.default={components:{DefaultLayout:s.a},beforeMount:function(){this.load()},data:function(){return{Store:c.a,lang:r.a}},methods:{load:function(){this.header(),this.summary(),this.knowledge()},header:function(){var t=u(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/about/header");case 2:this.Store.content.header=t.sent.data;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),summary:function(){var t=u(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/about/summary");case 2:this.Store.content.summary=t.sent.data;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),knowledge:function(){var t=u(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/about/knowledge");case 2:this.Store.content.knowledge=t.sent.data;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},313:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("default-layout",[n("div",[n("header-image",{attrs:{name:"Joshua Welford",image:"me-min.jpg",background:"cover.jpg"}}),t._v(" "),n("about-summary",{attrs:{title:"Summary",content:t.Store.content.summary.content}}),t._v(" "),n("div",{attrs:{id:"knowledge"}},[n("about-languages",{attrs:{"show-title":""}},t._l(t.Store.content.knowledge,function(t){return n("about-language",{attrs:{language:t.language,years:t.years,content:t.content}})}))],1),t._v(" "),n("experience-set",[n("experience",{attrs:{from:"Mar 2018",to:"Present",role:"Web Developer",location:"RightMessage—Remote",link:"https://rightmessage.com"}},[t._v("\n                "+t._s(t.lang.get("experience.rm"))+"\n                "),n("hr")]),t._v(" "),n("experience",{attrs:{from:"Feb 2018",to:"Mar 2018",role:"PHP Developer",location:"Netsells—York",link:"https://netsells.co.uk"}},[t._v("\n                "+t._s(t.lang.get("experience.netsells"))+"\n                "),n("hr")]),t._v(" "),n("experience",{attrs:{from:"Oct 2017",to:"Feb 2018",role:"Web Developer",location:"VIA Creative—Middlesbrough",link:"https://viacreative.co.uk"}},[t._v("\n                "+t._s(t.lang.get("experience.via"))+"\n                "),n("hr")]),t._v(" "),n("experience",{attrs:{from:"Mar 2017",to:"Jul 2017",role:"PHP Developer",location:"Leadbyte—Middlesbrough",link:"https://leadbyte.co.uk"}},[t._v("\n                "+t._s(t.lang.get("experiences.leadbyte"))+"\n                "),n("hr")]),t._v(" "),n("experience",{attrs:{from:"Aug 2016",to:"Feb 2017",role:"PHP Developer",location:"Better Brand Agency—Middlesbrough",link:"https://www.betterbrandagency.com/"}},[t._v("\n                "+t._s(t.lang.get("experiences.better"))+"\n                "),n("hr")]),t._v(" "),n("experience",{attrs:{from:"Sept 2013",to:"June 2016",role:"Web Developer",location:"Gbiz IT Ltd—Marske-By-The-Sea",link:"https://gbizit.co.uk"}},[t._v("\n                "+t._s(t.lang.get("experiences.gbizit"))+"\n            ")])],1),t._v(" "),n("education-set",[n("education")],1),t._v(" "),n("div",{staticClass:"row",attrs:{id:"interests"}},[n("a",{attrs:{name:"interests"}}),t._v(" "),n("div",{staticClass:"col-md-12"},[n("h2",{staticClass:"noselect"},[t._v(t._s(t.lang.get("interests.title"))+" "),n("a",{staticClass:"part-link",attrs:{href:"#interests"}},[n("i",{staticClass:"glyphicon glyphicon-link"})])]),t._v(" "),n("p",{staticStyle:{"text-align":"justify"}},[t._v(t._s(t.lang.get("interests")))])])])],1)])},staticRenderFns:[]}}});