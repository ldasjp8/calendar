(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{371:function(t,e,n){"use strict";n.r(e);n(53),n(26);var l={props:{header:{type:String,default:""},links:{type:Array,default:function(){return[]}},u:{type:String,default:""},description:{type:String,default:""},top:{type:Boolean,default:!1},linkLabel:{type:Object,default:function(){return null}},langLabel:{type:Object,default:function(){return null}}},data:function(){return{drawer:!1}},computed:{isMobile:function(){return!!["xs","sm"].includes(this.$vuetify.breakpoint.name)}}},r=n(86),o=n(115),v=n.n(o),c=n(676),_=n(663),d=n(552),m=n(657),f=n(560),h=n(561),k=n(540),x=n(363),y=n(577),w=n(673),L=n(664),V=n(567),$=n(367),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:"",temporary:!0},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",{attrs:{exact:"",to:t.localePath({name:"index",query:{u:t.u}})}},[n("v-list-item-content",[n("span",[t._v(t._s(t.$t("index"))+" ")])])],1),t._v(" "),t.u?n("v-list-item",{attrs:{exact:"",to:t.localePath({name:"stats",query:{u:t.u}})}},[n("v-list-item-content",[n("span",[t._v(t._s(t.$t("stats"))+" ")])])],1):t._e(),t._v(" "),n("v-subheader",[n("small",[t.linkLabel?[t._v("\n            "+t._s(t.linkLabel[t.$i18n.locale])+"\n          ")]:[t._v("\n            "+t._s(t.$t("links"))+"\n          ")]],2)]),t._v(" "),t._l(t.links,(function(e,l){return[n("v-list-item",{key:l,attrs:{target:"_blank",href:e.value}},[n("v-list-item-title",[t._v(t._s(e.label)+"\n            "),n("v-icon",[t._v("mdi-exit-to-app")])],1)],1)]})),t._v(" "),n("v-subheader",[n("small",[t._v(t._s(t.$t("language")))])]),t._v(" "),n("v-list-item",{attrs:{exact:"",to:t.switchLocalePath("ja")}},[n("v-list-item-title",[t._v("日本語")])],1),t._v(" "),n("v-list-item",{attrs:{exact:"",to:t.switchLocalePath("en")}},[n("v-list-item-title",[t._v("English")])],1)],2)],1),t._v(" "),n("v-app-bar",{attrs:{color:"primary",dark:"",flat:""}},[t.isMobile?n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),t._v(" "),n("v-toolbar-title",[n("nuxt-link",{staticStyle:{color:"inherit"},attrs:{to:t.localePath({name:"index",query:{u:t.u}})}},[t._v(t._s(t.header||t.$t("calendar_search")))])],1),t._v(" "),n("v-spacer"),t._v(" "),t.isMobile?t._e():n("v-toolbar-items",[n("v-btn",{attrs:{exact:"",text:"",to:t.localePath({name:"index",query:{u:t.u}})}},[t._v("\n        "+t._s(t.$t("index"))+"\n      ")]),t._v(" "),t.u?n("v-btn",{attrs:{exact:"",text:"",to:t.localePath({name:"stats",query:{u:t.u}})}},[t._v("\n        "+t._s(t.$t("stats"))+"\n      ")]):t._e(),t._v(" "),t.links&&t.links.length>0?n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",text:""}},"v-btn",r,!1),l),[t.linkLabel?[t._v("\n              "+t._s(t.linkLabel[t.$i18n.locale])+"\n            ")]:[t._v("\n              "+t._s(t.$t("links"))+"\n            ")]],2)]}}],null,!1,3257324355)},[t._v(" "),n("v-list",[t._l(t.links,(function(e,l){return[n("v-list-item",{key:l,attrs:{target:"_blank",href:e.value}},[n("v-list-item-title",[t._v(t._s(e.label)+"\n                "),n("v-icon",[t._v("mdi-exit-to-app")])],1)],1)]}))],2)],1):t._e(),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[t.langLabel?[n("v-btn",t._g({attrs:{depressed:"",text:""}},l),[t._v("\n              "+t._s(t.langLabel[t.$i18n.locale])+"\n            ")])]:[n("v-btn",t._g({attrs:{depressed:"",icon:""}},l),[n("v-icon",[t._v("mdi-translate")])],1)]]}}],null,!1,152100283)},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{exact:"",to:t.switchLocalePath("ja")}},[n("v-list-item-title",[t._v("日本語")])],1),t._v(" "),n("v-list-item",{attrs:{exact:"",to:t.switchLocalePath("en")}},[n("v-list-item-title",[t._v("English")])],1)],1)],1)],1)],1),t._v(" "),t.top?n("v-container",{staticClass:"mt-5"},[t._v(t._s(t.description))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAppBar:c.a,VAppBarNavIcon:_.a,VBtn:d.a,VContainer:m.a,VIcon:f.a,VList:h.a,VListItem:k.a,VListItemContent:x.a,VListItemTitle:x.b,VMenu:y.a,VNavigationDrawer:w.a,VSpacer:L.a,VSubheader:V.a,VToolbarItems:$.a,VToolbarTitle:$.b})}}]);