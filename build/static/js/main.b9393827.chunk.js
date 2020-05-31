(this["webpackJsonpvirtual-list"]=this["webpackJsonpvirtual-list"]||[]).push([[0],{16:function(e,t,n){e.exports=n(26)},21:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(10),u=n.n(s),c=(n(21),n(1)),o=n.n(c),i=n(2),l=n(3),d=n(4),f=n(5),p=(n(23),function(e){var t=e.onClick;return a.a.createElement("label",{className:"switch"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,onClick:t}),a.a.createElement("span",{className:"slider round"}))}),m=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t)switch(e){case"primary":return"#2196f3";case"primary2":return"#0b7dda";case"background":return"#1A1A1B";case"background2":return"#596273";case"error":return"#ea0027"}else switch(e){case"primary":return"#2196f3";case"primary2":return"#0b7dda";case"background":case"background2":return"#ffffff";case"error":return"#ea0027"}},h=n(11),k=n(12);function b(e,t,n){var r="";if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),r="; expires="+a.toUTCString()}document.cookie=e+"="+(t||"")+r+"; path=/"}function v(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var a=n[r];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return null}var g=function(){function e(){Object(h.a)(this,e),this.basePath="https://warm-plateau-84344.herokuapp.com/",this.token=v("token"),this.refreshToken=v("refreshToken")}return Object(k.a)(e,[{key:"GetIsAuthorized",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.token){e.next=17;break}return e.next=4,this.ValidateToken();case 4:if(!e.sent.message){e.next=8;break}return e.abrupt("return",!0);case 8:return console.log("Refresh token has been used"),e.t0=console,e.next=12,this.UseRefreshToken();case 12:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.abrupt("return",!1);case 15:e.next=18;break;case 17:return e.abrupt("return",!1);case 18:e.next=24;break;case 20:return e.prev=20,e.t2=e.catch(0),console.log(e.t2),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,this,[[0,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"GetResponse",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r,a,s,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>2&&void 0!==u[2]?u[2]:null,a=this.basePath+n,s=this.token,e.abrupt("return",new Promise((function(e,n){var u=new XMLHttpRequest;u.open(t,a),u.onload=function(){e(u.response)},u.onerror=function(){n({status:this.status,statusText:u.statusText})},s&&u.setRequestHeader("Authorization","bearer "+s),null!=r?(u.setRequestHeader("Content-Type","application/json;charset=UTF-8"),u.send(JSON.stringify(r))):u.send()})));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"GetUserLists",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/lists",e.t0=JSON,e.next=4,this.GetResponse("GET","user/lists");case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"GetListContent",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="listitems?listId="+t,e.t0=JSON,e.next=4,this.GetResponse("GET",n);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"ValidateToken",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"token/validate",e.t0=JSON,e.next=4,this.GetResponse("GET","token/validate");case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"UseRefreshToken",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/token/refresh",e.t0=JSON,e.next=4,this.GetResponse("POST","user/token/refresh",{refreshToken:this.refreshToken});case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"DeleteListItem",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="listitems?listId="+t+"&itemId="+n,e.t0=JSON,e.next=4,this.GetResponse("DELETE",r);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"AddListItem",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"listitems",e.t0=JSON,e.next=4,this.GetResponse("POST","listitems",{listId:t,itemName:n,itemDescription:r});case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"Login",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=null,r=t.includes("@")?{email:t,username:"",password:n}:{email:"",username:t,password:n},"user/token",e.t0=JSON,e.next=7,this.GetResponse("POST","user/token",r);case 7:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 11:return e.prev=11,e.t2=e.catch(0),e.abrupt("return",{success:!1,message:"Unknown communication error when trying to perform login"});case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"CreateUser",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n,r,a){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/create",s={email:t,username:n,displayName:r,password:a},e.t0=JSON,e.next=5,this.GetResponse("POST","user/create",s);case 5:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"GetUserIdByUserName",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="userid/?userName="+t,e.t0=JSON,e.next=4,this.GetResponse("GET",n);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"ShareList",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"list/share",r={listId:t,userId:n},e.t0=JSON,e.next=5,this.GetResponse("POST","list/share",r);case 5:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function O(){var e=Object(d.a)(["\n  color: ",";\n"]);return O=function(){return e},e}function w(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return w=function(){return e},e}function x(){var e=Object(d.a)(["\n  display: inline-block;\n  text-align: center;\n  background-color: ",';\n  color: #ffffff;\n  font-family: "Open Sans", sans-serif;\n  font-style: normal;\n  font-size: 1.5em;\n  margin: 0.5em 0;\n  padding: 0.5em;\n  border: none;\n  :focus {\n    background-color: ',";\n    outline: none;\n  }\n  :hover {\n    background-color: ",";\n  }\n"]);return x=function(){return e},e}function y(){var e=Object(d.a)(["\n  color: ",';\n  font-family: "Open Sans", sans-serif;\n  font-style: normal;\n  font-size: 1.5em;\n  margin-bottom: 0.5em;\n  margin-right: 0.5em;\n']);return y=function(){return e},e}function E(){var e=Object(d.a)(["\n  display: flex;\n  border-width: 1px;\n  padding: 0.5em 0.25em;\n  width: 90%;\n  border-radius: 5px;\n  font-size: 1em;\n  background-color: ",";\n  ","\n"]);return E=function(){return e},e}function j(){var e=Object(d.a)(["\n  margin: 0.5em 0;\n"]);return j=function(){return e},e}function M(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  padding: 1em;\n  margin: 1em 0;\n  min-width: 15em;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n"]);return M=function(){return e},e}function S(){var e=Object(d.a)(["\n  display: flex;\n"]);return S=function(){return e},e}function T(){var e=Object(d.a)(["\n  display: flex;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  flex-direction: row;\n"]);return T=function(){return e},e}function C(){var e=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  min-height: 100vh;\n  background-color: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return C=function(){return e},e}var G=f.a.div(C(),(function(e){return m("background",e.darkMode)})),N=f.a.div(T()),R=f.a.div(S()),J=f.a.div(M(),(function(e){return m("background",e.darkMode)})),I=f.a.div(j()),U=f.a.input(E(),(function(e){return m("background2",e.darkMode)}),(function(e){return e.failed&&"\n  border-bottom-width: 2px;\n  border-bottom-color: ".concat(m("error"),";\n  ")})),L=f.a.div(y(),(function(e){return m("primary",e.darkMode)})),P=f.a.button(x(),(function(e){return m("primary",e.darkMode)}),(function(e){return m("primary2",e.darkMode)}),(function(e){return m("primary2",e.darkMode)})),D=f.a.div(w()),A=f.a.div(O(),m("error")),z=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1],u=Object(r.useState)(!1),c=Object(l.a)(u,2),d=c[0],f=c[1],m=Object(r.useState)(!1),h=Object(l.a)(m,2),k=h[0],v=h[1],O=Object(r.useState)(!1),w=Object(l.a)(O,2),x=w[0],y=w[1],E=Object(r.useState)(""),j=Object(l.a)(E,2),M=j[0],S=j[1],T=Object(r.useState)(!1),C=Object(l.a)(T,2),z=C[0],B=C[1],q=Object(r.useState)(""),H=Object(l.a)(q,2),V=H[0],W=H[1],F=Object(r.useState)(!1),X=Object(l.a)(F,2),$=X[0],K=X[1],Q=Object(r.useState)(""),Y=Object(l.a)(Q,2),Z=Y[0],_=Y[1],ee=Object(r.useState)(""),te=Object(l.a)(ee,2),ne=te[0],re=te[1],ae=Object(r.useState)(new g),se=Object(l.a)(ae,2),ue=se[0],ce=se[1],oe=Object(r.useState)(""),ie=Object(l.a)(oe,2),le=ie[0],de=ie[1],fe=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(M,V),e.next=3,ue.Login(M,V);case 3:if(!(t=e.sent).success){e.next=13;break}return b("token",t.token,100),b("tokenDate",Date.now(),100),b("refreshToken",t.refreshToken,100),ce(new g),e.next=11,me();case 11:e.next=16;break;case 13:B(!0),K(!0),de(t.message);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V!==Z&&(alert("Passwords don't match"),W(""),_("")),ne.includes("@")&&ne.includes(".")){e.next=4;break}return alert("That doesn't look like a valid email address"),e.abrupt("return");case 4:return e.next=6,ue.CreateUser(ne,M,M,V);case 6:if((t=e.sent).success){e.next=12;break}return alert(t.message),e.abrupt("return");case 12:alert("successfully created user");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){y(!0),f(!1)};return a.a.createElement(G,{darkMode:n},a.a.createElement(N,null,a.a.createElement(L,{darkMode:n},"Dark theme"),a.a.createElement(p,{onClick:function(){s(!n)}})),a.a.createElement(R,null,!d&&!k&&!x&&a.a.createElement("div",null,a.a.createElement(J,{darkMode:n},a.a.createElement(P,{darkMode:n,onClick:function(){f(!0)}},"login"),a.a.createElement(P,{darkMode:n,onClick:function(){v(!0)}},"register"))),d&&a.a.createElement("div",null,a.a.createElement(J,{darkMode:n},a.a.createElement(I,null,a.a.createElement(L,{darkMode:n},"email/username:"),a.a.createElement(U,{darkMode:n,value:M,failed:z,onChange:function(e){return S(e.target.value)}})),a.a.createElement(I,null,a.a.createElement(L,{darkMode:n},"password:"),a.a.createElement(U,{type:"password",darkMode:n,value:V,failed:$,onChange:function(e){return W(e.target.value)}})),a.a.createElement(A,null,le)),a.a.createElement(J,{darkMode:n},a.a.createElement(D,null,a.a.createElement(P,{darkMode:n,onClick:function(){f(!1)}},"back"),a.a.createElement(P,{darkMode:n,onClick:function(){fe()}},"login")))),k&&a.a.createElement("div",null,a.a.createElement(J,{darkMode:n},a.a.createElement(I,null,a.a.createElement(L,{darkMode:n},"email:"),a.a.createElement(U,{darkMode:n,value:ne,onChange:function(e){return re(e.target.value)}})),a.a.createElement(I,null,a.a.createElement(L,{darkMode:n},"username:"),a.a.createElement(U,{darkMode:n,value:M,onChange:function(e){return S(e.target.value)}})),a.a.createElement(I,null,a.a.createElement(L,{darkMode:n},"password:"),a.a.createElement(U,{type:"password",darkMode:n,value:V,onChange:function(e){return W(e.target.value)}})),a.a.createElement(I,null,a.a.createElement(L,{darkMode:n},"repeat password:"),a.a.createElement(U,{type:"password",darkMode:n,value:Z,onChange:function(e){return _(e.target.value)}}))),a.a.createElement(J,{darkMode:n},a.a.createElement(D,null,a.a.createElement(P,{darkMode:n,onClick:function(){v(!1)}},"back"),a.a.createElement(P,{darkMode:n,onClick:function(){pe()}},"register")))),x&&a.a.createElement("p",null,"successfully logged in")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b9393827.chunk.js.map