(this["webpackJsonpvirtual-list"]=this["webpackJsonpvirtual-list"]||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(13),u=n.n(s),c=(n(24),n(2)),o=n.n(c),i=n(3),l=n(5),f=n(7),p=n(8),m=n(10),d={primary:"#2196f3",primary2:"#0b7dda",background:"#ffffff",background2:"#ffffff",error:"#ea0027",text:"black"},h=n(14),b=n(15);function v(e,t,n){var r="";if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),r="; expires="+a.toUTCString()}document.cookie=e+"="+(t||"")+r+"; path=/"}function k(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var a=n[r];" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null}function O(e){document.cookie=e+"=; Max-Age=-99999999;"}var g=function(){function e(){Object(h.a)(this,e),this.basePath="https://warm-plateau-84344.herokuapp.com/",this.token=k("token"),this.refreshToken=k("refreshToken")}return Object(b.a)(e,[{key:"GetIsAuthorized",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.token){e.next=17;break}return e.next=4,this.ValidateToken();case 4:if(!e.sent.message){e.next=8;break}return e.abrupt("return",!0);case 8:return console.log("Refresh token has been used"),e.t0=console,e.next=12,this.UseRefreshToken();case 12:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.abrupt("return",!1);case 15:e.next=18;break;case 17:return e.abrupt("return",!1);case 18:e.next=24;break;case 20:return e.prev=20,e.t2=e.catch(0),console.log(e.t2),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,this,[[0,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"GetResponse",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r,a,s,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>2&&void 0!==u[2]?u[2]:null,this.token=k("token"),a=this.basePath+n,s=this.token,e.abrupt("return",new Promise((function(e,n){var u=new XMLHttpRequest;u.open(t,a),u.onload=function(){e(u.response)},u.onerror=function(){n({status:this.status,statusText:u.statusText})},s&&u.setRequestHeader("Authorization","bearer "+s),null!=r?(u.setRequestHeader("Content-Type","application/json;charset=UTF-8"),u.send(JSON.stringify(r))):u.send()})));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"GetUserLists",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/lists",e.t0=JSON,e.next=4,this.GetResponse("GET","user/lists");case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"AddList",value:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/lists",e.t0=JSON,e.next=4,this.GetResponse("POST","user/lists",{listName:t});case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"DeleteList",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="list/remove?listId="+t,e.t0=JSON,e.next=4,this.GetResponse("DELETE",n);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"GetListContent",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="listitems?listId="+t,e.t0=JSON,e.next=4,this.GetResponse("GET",n);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"ValidateToken",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"token/validate",e.t0=JSON,e.next=4,this.GetResponse("GET","token/validate");case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"UseRefreshToken",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/token/refresh",e.t0=JSON,e.next=4,this.GetResponse("POST","user/token/refresh",{refreshToken:this.refreshToken});case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"DeleteListItem",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="listitems?listId="+t+"&itemId="+n,e.t0=JSON,e.next=4,this.GetResponse("DELETE",r);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"AddListItem",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"listitems",e.t0=JSON,e.next=4,this.GetResponse("POST","listitems",{listId:t,itemName:n,itemDescription:r});case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"Login",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=null,r=t.includes("@")?{email:t,username:"",password:n}:{email:"",username:t,password:n},"user/token",e.t0=JSON,e.next=7,this.GetResponse("POST","user/token",r);case 7:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 11:return e.prev=11,e.t2=e.catch(0),e.abrupt("return",{success:!1,message:"Unknown communication error when trying to perform login"});case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"CreateUser",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n,r,a){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/create",s={email:t,username:n,displayName:r,password:a},e.t0=JSON,e.next=5,this.GetResponse("POST","user/create",s);case 5:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"GetUserIdByUserName",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="userid/?userName="+t,e.t0=JSON,e.next=4,this.GetResponse("GET",n);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"ShareList",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"list/share",r={listId:t,userId:n},e.t0=JSON,e.next=5,this.GetResponse("POST","list/share",r);case 5:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),x=function(e){var t=e.width,n=e.height,r=e.color;return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 0 20 20"},a.a.createElement("title",null,"add"),a.a.createElement("path",{d:"M16 9h-5V4H9v5H4v2h5v5h2v-5h5V9z",fill:r}))};function w(){var e=Object(f.a)(["\n  padding: 1em;\n  cursor: pointer;\n  :hover {\n    background-color: ",";\n  }\n  :focus {\n    outline: none;\n  }\n"]);return w=function(){return e},e}function j(){var e=Object(f.a)(["\n  background-color: ",";\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);\n"]);return j=function(){return e},e}function E(){var e=Object(f.a)(["\n  display: flex;\n  align-self: center;\n  padding: 0;\n  border: 0;\n  border-radius: 5px;\n"]);return E=function(){return e},e}function y(){var e=Object(f.a)(["\n  color: ",";\n"]);return y=function(){return e},e}function S(){var e=Object(f.a)(["\n  display: flex;\n  position: absolute;\n  top: 1em;\n  left: 1em;\n  flex-direction: row;\n"]);return S=function(){return e},e}function T(){var e=Object(f.a)(["\n  font-size: 1em;\n"]);return T=function(){return e},e}function C(){var e=Object(f.a)(["\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  background-color: ",';\n  color: #ffffff;\n  font-family: "Open Sans", sans-serif;\n  font-style: normal;\n  font-size: 1.5em;\n  margin: 0.25em 0;\n  padding: 0.5em;\n  border: none;\n  border-radius: 3px;\n  :focus {\n    background-color: ',";\n    outline: none;\n  }\n  :hover {\n    background-color: ",";\n  }\n"]);return C=function(){return e},e}function G(){var e=Object(f.a)(["\n  color: ",';\n  font-family: "Open Sans", sans-serif;\n  font-style: normal;\n  font-size: 1.5em;\n  margin-bottom: 0.5em;\n  margin-right: 0.5em;\n']);return G=function(){return e},e}function R(){var e=Object(f.a)(["\n  color: ",";\n  display: flex;\n  border-width: 1px;\n  padding: 0.5em;\n  border-radius: 5px;\n  font-size: 1em;\n  width: 15em;\n  background-color: ",";\n  ","\n"]);return R=function(){return e},e}function N(){var e=Object(f.a)(["\n  margin: 0.25em 0;\n"]);return N=function(){return e},e}function L(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  margin: 0.5em 0;\n  width: 16em;\n  border-radius: 5px;\n"]);return L=function(){return e},e}function J(){var e=Object(f.a)(["\n  display: flex;\n"]);return J=function(){return e},e}function I(){var e=Object(f.a)(["\n  display: flex;\n  flex: 1;\n  min-height: 100vh;\n  background-color: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return I=function(){return e},e}var D=p.a.div(I(),d.background),U=p.a.div(J()),P=p.a.div(L(),d.background),z=p.a.div(N()),A=p.a.input(R(),d.text,d.background2,(function(e){return e.failed&&"\n  border-bottom-width: 2px;\n  border-bottom-color: ".concat(d.error,";\n  ")})),H=p.a.div(G(),d.primary),B=p.a.button(C(),d.primary,d.primary2,d.primary2),M=Object(p.a)(B)(T()),V=p.a.div(S()),q=p.a.div(y(),d.error),F=p.a.button(E()),W=Object(p.a)(m.a)(j(),d.background),K=Object(p.a)(m.c)(w(),d.primary2),X=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],u=Object(r.useState)(!1),c=Object(l.a)(u,2),f=c[0],p=c[1],h=Object(r.useState)(!1),b=Object(l.a)(h,2),w=b[0],j=b[1],E=Object(r.useState)(""),y=Object(l.a)(E,2),S=y[0],T=y[1],C=Object(r.useState)(!1),G=Object(l.a)(C,2),R=G[0],N=G[1],L=Object(r.useState)(""),J=Object(l.a)(L,2),I=J[0],X=J[1],$=Object(r.useState)(!1),Q=Object(l.a)($,2),Y=Q[0],Z=Q[1],_=Object(r.useState)(""),ee=Object(l.a)(_,2),te=ee[0],ne=ee[1],re=Object(r.useState)(""),ae=Object(l.a)(re,2),se=ae[0],ue=ae[1],ce=Object(r.useState)(!1),oe=Object(l.a)(ce,2),ie=oe[0],le=oe[1],fe=Object(r.useState)(new g),pe=Object(l.a)(fe,1)[0],me=Object(r.useState)(""),de=Object(l.a)(me,2),he=de[0],be=de[1],ve=Object(r.useState)(""),ke=Object(l.a)(ve,2),Oe=ke[0],ge=ke[1],xe=Object(r.useState)(null),we=Object(l.a)(xe,2),je=we[0],Ee=we[1],ye=Object(r.useState)(!1),Se=Object(l.a)(ye,2),Te=Se[0],Ce=Se[1],Ge=Object(r.useState)(""),Re=Object(l.a)(Ge,2),Ne=Re[0],Le=Re[1];window.onload=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.GetIsAuthorized();case 2:if(!e.sent){e.next=8;break}return e.next=5,Pe();case 5:s(!1),p(!1),j(!0);case 8:case"end":return e.stop()}}),e)})));var Je=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(S,I),e.next=3,pe.Login(S,I);case 3:if(!(t=e.sent).success){e.next=15;break}return v("token",t.token,100),v("tokenDate",Date.now(),100),v("refreshToken",t.refreshToken,100),e.next=10,Pe();case 10:s(!1),p(!1),j(!0),e.next=18;break;case 15:N(!0),Z(!0),be(t.message);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I!==te&&(alert("Passwords don't match"),X(""),ne("")),se.includes("@")&&se.includes(".")){e.next=5;break}return ge("That doesn't look like a valid email address"),le(!0),e.abrupt("return");case 5:return e.next=7,pe.CreateUser(se,S,S,I);case 7:if((t=e.sent).success){e.next=13;break}return alert(t.message),e.abrupt("return");case 13:alert("successfully created user");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),De=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.AddList(Ne);case 2:if((t=e.sent).success){e.next=8;break}return alert(t.message),e.abrupt("return");case 8:Le(""),Ce(!1),Pe();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.DeleteList(t);case 2:if((n=e.sent).success){e.next=8;break}return alert(n.message),e.abrupt("return");case 8:Pe();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.GetUserLists();case 2:(t=e.sent).success?Ee(t.message):alert("Fel n\xe4r listor sk\xf6lle laddas: "+t.message+"\nTOKEN: "+k("token"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(D,null,a.a.createElement(V,null,a.a.createElement(M,{onClick:function(){j(!1),O("token"),O("tokenDate"),O("refreshToken")}},"sign out")),a.a.createElement(U,null,!n&&!f&&!w&&a.a.createElement("div",null,a.a.createElement(P,null,a.a.createElement(B,{onClick:function(){s(!0)}},"login"),a.a.createElement(B,{onClick:function(){p(!0)}},"register"))),n&&a.a.createElement("div",null,a.a.createElement(P,null,a.a.createElement(z,null,a.a.createElement(H,null,"email/username:"),a.a.createElement(A,{value:S,failed:R,autoComplete:"username",onChange:function(e){return T(e.target.value)}})),a.a.createElement(z,null,a.a.createElement(H,null,"password:"),a.a.createElement(A,{type:"password",value:I,failed:Y,autoComplete:"password",onChange:function(e){return X(e.target.value)}})),a.a.createElement(q,null,he)),a.a.createElement(P,null,a.a.createElement(B,{onClick:function(){s(!1),T(""),X(""),N(!1),Z(!1),be("")}},"back"),a.a.createElement(B,{type:"submit",onClick:function(){Je()}},"login"))),f&&a.a.createElement("div",null,a.a.createElement(P,null,a.a.createElement(z,null,a.a.createElement(H,null,"email:"),a.a.createElement(A,{value:se,failed:ie,onChange:function(e){return ue(e.target.value)}}),a.a.createElement(q,null,Oe)),a.a.createElement(z,null,a.a.createElement(H,null,"username:"),a.a.createElement(A,{value:S,onChange:function(e){return T(e.target.value)}})),a.a.createElement(z,null,a.a.createElement(H,null,"password:"),a.a.createElement(A,{type:"password",value:I,onChange:function(e){return X(e.target.value)}})),a.a.createElement(z,null,a.a.createElement(H,null,"repeat password:"),a.a.createElement(A,{type:"password",value:te,onChange:function(e){return ne(e.target.value)}}))),a.a.createElement(P,null,a.a.createElement(B,{onClick:function(){p(!1)}},"back"),a.a.createElement(B,{onClick:function(){Ie()}},"register"))),w&&!Te&&a.a.createElement(P,null,je&&je.map((function(e){return a.a.createElement(m.b,{key:e.listid,id:e.listid.toString()},a.a.createElement(B,null,e.listname),a.a.createElement(W,{id:e.listid.toString()},a.a.createElement(K,{data:{foo:"bar"}},"Rename"),a.a.createElement(K,{onClick:function(){return Ue(e.listid)}},"Delete"),a.a.createElement(K,{data:{foo:"bar"}},"Favorite")))})),a.a.createElement(F,{onClick:function(){Ce(!0)}},a.a.createElement(x,{width:"60",height:"60",color:d.primary}))),w&&Te&&a.a.createElement(P,null,a.a.createElement(z,null,a.a.createElement(H,null,"List name:"),a.a.createElement(A,{value:Ne,onChange:function(e){return Le(e.target.value)}}),a.a.createElement(B,{onClick:function(){De()}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a9f5fb93.chunk.js.map