(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{371:function(t,e,n){"use strict";n.r(e);var l={props:{header:{type:String,default:""},links:{type:Array,default:function(){return[]}},u:{type:String,default:""},description:{type:String,default:""},top:{type:Boolean,default:!1},linkLabel:{type:Object,default:function(){return null}},langLabel:{type:Object,default:function(){return null}}}},r=n(86),o=n(115),v=n.n(o),c=n(667),_=n(572),d=n(650),f=n(556),m=n(557),y=n(537),h=n(364),k=n(573),x=n(656),L=n(366),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[n("nuxt-link",{staticStyle:{color:"inherit"},attrs:{to:t.localePath({name:"index",query:{u:t.u}})}},[t._v(t._s(t.header||t.$t("calendar_search")))])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{exact:"",text:"",to:t.localePath({name:"index",query:{u:t.u}})}},[t._v("\n        "+t._s(t.$t("index"))+"\n      ")]),t._v(" "),n("v-btn",{attrs:{exact:"",text:"",to:t.localePath({name:"analyze",query:{u:t.u}})}},[t._v("\n        "+t._s(t.$t("analyze"))+"\n      ")]),t._v(" "),t.links&&t.links.length>0?n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",text:""}},"v-btn",r,!1),l),[t.linkLabel?[t._v("\n              "+t._s(t.linkLabel[t.$i18n.locale])+"\n            ")]:[t._v("\n              "+t._s(t.$t("links"))+"\n            ")]],2)]}}],null,!1,3257324355)},[t._v(" "),n("v-list",[t._l(t.links,(function(e,l){return[n("v-list-item",{key:l,attrs:{target:"_blank",href:e.value}},[n("v-list-item-title",[t._v(t._s(e.label)+"\n                "),n("v-icon",[t._v("mdi-exit-to-app")])],1)],1)]}))],2)],1):t._e(),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[t.langLabel?[n("v-btn",t._g({attrs:{depressed:"",text:""}},l),[t._v("\n              "+t._s(t.langLabel[t.$i18n.locale])+"\n            ")])]:[n("v-btn",t._g({attrs:{depressed:"",icon:""}},l),[n("v-icon",[t._v("mdi-translate")])],1)]]}}])},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{exact:"",to:t.switchLocalePath("ja")}},[n("v-list-item-title",[t._v("日本語")])],1),t._v(" "),n("v-list-item",{attrs:{exact:"",to:t.switchLocalePath("en")}},[n("v-list-item-title",[t._v("English")])],1)],1)],1)],1)],1),t._v(" "),t.top?n("v-container",{staticClass:"mt-5"},[t._v(t._s(t.description))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAppBar:c.a,VBtn:_.a,VContainer:d.a,VIcon:f.a,VList:m.a,VListItem:y.a,VListItemTitle:h.b,VMenu:k.a,VSpacer:x.a,VToolbarItems:L.a,VToolbarTitle:L.b})}}]);