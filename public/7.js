webpackJsonp([7],{227:function(e,t,n){var r=n(1)(n(247),n(248),null,null,null);e.exports=r.exports},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.default={beforeRouteEnter:function(e,t,n){n(r.a.auth.authenticated?function(e){e.$router.push("/dashboard")}:function(e){e.$router.push("/login")})}}},248:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("login-panel",{attrs:{"use-ajax":""}})],1)},staticRenderFns:[]}}});