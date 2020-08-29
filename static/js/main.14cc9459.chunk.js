(this["webpackJsonpvirtual-list"]=this["webpackJsonpvirtual-list"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(12),i=n.n(s),o=(n(24),n(2)),c=n.n(o),u=n(3),l=n(9),p=n(4),d=n(8),m=n(13),f={primary:"#374785",primary2:"#40539e",background:"#a8d0e6",background2:"#ffffff",error:"#ea0027",text:"black"},h=p.a.div.withConfig({displayName:"Blocks__Information",componentId:"i4npe1-0"})(["display:flex;flex-direction:column;background-color:",";margin:0.5em 0;padding:1em;"],f.background),g=p.a.div.withConfig({displayName:"Blocks__InputAndTextContainer",componentId:"i4npe1-1"})(["margin:0.25em 0;"]),v=p.a.input.withConfig({displayName:"Blocks__Input",componentId:"i4npe1-2"})(["max-width:20em;width:100%;height:3.5em;padding:18px 18px;display:block;border:0px;border-radius:8px;box-sizing:border-box;color:#5f6670;font-family:Rubik;background-color:#f7f7f9;text-align:center;font-size:1.2em;resize:none;margin-left:auto;margin-right:auto;margin-top:10px;"]),w=p.a.div.withConfig({displayName:"Blocks__Text",componentId:"i4npe1-3"})(["color:",';font-family:"Open Sans",sans-serif;font-style:normal;font-size:1.5em;margin-bottom:0.5em;margin-right:0.5em;'],f.primary),k=p.a.button.withConfig({displayName:"Blocks__Button",componentId:"i4npe1-4"})(["width:100%;display:inline-block;text-align:center;background-color:",';color:#ffffff;font-family:"Rubik",sans-serif;font-weight:400;font-size:1.1375rem;margin-top:9px;padding:18px;border:none;border-radius:2.25rem;:focus{background-color:',";}:hover{background-color:",";}"],f.primary,f.primary2,f.primary2),b=p.a.div.withConfig({displayName:"Blocks__ErrorMessage",componentId:"i4npe1-5"})(["color:",";"],f.error),y=function(e){var t=e.updateSuperState;return a.a.createElement("div",null,a.a.createElement(h,null,a.a.createElement(k,{onClick:function(){t({currentState:"loggingIn"})}},"login"),a.a.createElement(k,{onClick:function(){t({currentState:"registering"})}},"create account")))},x=function(e){var t=e.states,n=e.updateSuperState,r=e.State,s=e.handleKeyPress,i=e.login;return a.a.createElement("div",null,a.a.createElement(h,null,a.a.createElement(g,null,a.a.createElement(v,{placeholder:"username/email",value:t.username,failed:t.usernameFailed,autoComplete:"username",onChange:function(e){return n({username:e.target.value})}})),a.a.createElement(g,null,a.a.createElement(v,{placeholder:"password",type:"password",value:t.password,failed:t.passwordFailed,autoComplete:"password",onChange:function(e){return n({password:e.target.value})},onKeyPress:function(e){return s(e.key)}})),a.a.createElement(b,null,t.error)),a.a.createElement(h,null,a.a.createElement(k,{onClick:function(){n({currentState:r.none,username:"",password:"",usernameFailed:!1,passwordFailed:!1,error:""})}},"back"),a.a.createElement(k,{type:"submit",onClick:function(){i()}},"login")))},E=n(17),O=n(18);function I(e,t,n){var r="";if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),r="; expires="+a.toUTCString()}document.cookie=e+"="+(t||"")+r+"; path=/"}function S(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var a=n[r];" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null}function N(e){document.cookie=e+"=; Max-Age=-99999999;"}var C=function(){function e(){Object(E.a)(this,e),this.basePath="https://warm-plateau-84344.herokuapp.com/",this.token=S("token"),this.refreshToken=S("refreshToken")}return Object(O.a)(e,[{key:"GetIsAuthorized",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.token){e.next=17;break}return e.next=4,this.ValidateToken();case 4:if(!e.sent.message){e.next=8;break}return e.abrupt("return",!0);case 8:return console.log("Refresh token has been used"),e.t0=console,e.next=12,this.UseRefreshToken();case 12:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.abrupt("return",!1);case 15:e.next=18;break;case 17:return e.abrupt("return",!1);case 18:e.next=24;break;case 20:return e.prev=20,e.t2=e.catch(0),console.log(e.t2),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,this,[[0,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"GetResponse",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){var r,a,s,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:null,this.token=S("token"),a=this.basePath+n,s=this.token,e.abrupt("return",new Promise((function(e,n){var i=new XMLHttpRequest;i.open(t,a),i.onload=function(){e(i.response)},i.onerror=function(){n({status:this.status,statusText:i.statusText})},s&&i.setRequestHeader("Authorization","bearer "+s),null!=r?(i.setRequestHeader("Content-Type","application/json;charset=UTF-8"),i.send(JSON.stringify(r))):i.send()})));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"GetUserLists",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/lists",e.t0=JSON,e.next=4,this.GetResponse("GET","user/lists");case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"AddList",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/lists",e.t0=JSON,e.next=4,this.GetResponse("POST","user/lists",{listName:t});case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"DeleteList",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="list/remove?listId="+t,e.t0=JSON,e.next=4,this.GetResponse("DELETE",n);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"RenameList",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"list/rename",e.t0=JSON,e.next=4,this.GetResponse("POST","list/rename",{listId:t,newName:n});case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"CloneList",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"list/clone",e.t0=JSON,e.next=4,this.GetResponse("POST","list/clone",{listId:t,newName:n});case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"GetListContent",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="listitems?listId="+t,e.t0=JSON,e.next=4,this.GetResponse("GET",n);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"ValidateToken",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"token/validate",e.t0=JSON,e.next=4,this.GetResponse("GET","token/validate");case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"UseRefreshToken",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/token/refresh",e.t0=JSON,e.next=4,this.GetResponse("POST","user/token/refresh",{refreshToken:this.refreshToken});case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"DeleteListItem",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="listitems?listId="+t+"&itemId="+n,e.t0=JSON,e.next=4,this.GetResponse("DELETE",r);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"AddListItem",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"listitems",e.t0=JSON,e.next=4,this.GetResponse("POST","listitems",{listId:t,itemName:n,itemDescription:r});case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"Login",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=null,r=t.includes("@")?{email:t,username:"",password:n}:{email:"",username:t,password:n},"user/token",e.t0=JSON,e.next=7,this.GetResponse("POST","user/token",r);case 7:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 11:return e.prev=11,e.t2=e.catch(0),e.abrupt("return",{success:!1,message:"Unknown communication error when trying to perform login"});case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"CreateUser",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n,r,a){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user/create",s={email:t,username:n,displayName:r,password:a},e.t0=JSON,e.next=5,this.GetResponse("POST","user/create",s);case 5:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"GetUserIdByUserName",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="userid/?userName="+t,e.t0=JSON,e.next=4,this.GetResponse("GET",n);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"ShareList",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"list/share",r={listId:t,userId:n},e.t0=JSON,e.next=5,this.GetResponse("POST","list/share",r);case 5:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),L=function(e){var t=e.width,n=e.height,r=e.color;return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 0 20 20"},a.a.createElement("title",null,"add"),a.a.createElement("path",{d:"M16 9h-5V4H9v5H4v2h5v5h2v-5h5V9z",fill:r}))},j={none:"none",loggingIn:"loggingIn",registering:"registering",loggedIn:"loggedIn"},T=p.a.div.withConfig({displayName:"App__Body",componentId:"sc-1yhcetn-0"})(["display:flex;flex:1;min-height:100vh;background-color:",";flex-direction:column;justify-content:center;align-items:center;"],f.background),_=p.a.div.withConfig({displayName:"App__Content",componentId:"sc-1yhcetn-1"})(["display:flex;"]),R=Object(p.a)(k).withConfig({displayName:"App__LogoutButton",componentId:"sc-1yhcetn-2"})(["font-size:1em;"]),G=p.a.div.withConfig({displayName:"App__LogoutButtonContainer",componentId:"sc-1yhcetn-3"})(["display:flex;position:absolute;top:1em;left:1em;flex-direction:row;"]),F=p.a.button.withConfig({displayName:"App__AddButton",componentId:"sc-1yhcetn-4"})(["display:flex;align-self:center;padding:0;border:0;border-radius:5px;"]),A=p.a.input.withConfig({displayName:"App__RenamingList",componentId:"sc-1yhcetn-5"})(["width:100%;display:inline-block;text-align:center;background-color:",';color:#ffffff;font-family:"Open Sans",sans-serif;font-style:normal;font-size:1.5em;margin:0.25em 0;padding:0.5em 0;border:none;border-radius:3px;'],f.primary),B=p.a.div.withConfig({displayName:"App__ListContainer",componentId:"sc-1yhcetn-6"})(["display:flex;flex-direction:row;"]),J=Object(p.a)(k).withConfig({displayName:"App__ListButton",componentId:"sc-1yhcetn-7"})(["border-top-right-radius:0;border-bottom-right-radius:0;"]),P=Object(p.a)(k).withConfig({displayName:"App__OpenContextMenuButton",componentId:"sc-1yhcetn-8"})(["display:flex;width:10%;border-top-left-radius:0;border-bottom-left-radius:0;padding:0;"]),D=Object(p.a)(d.a).withConfig({displayName:"App__ListContextMenu",componentId:"sc-1yhcetn-9"})(["background-color:",";box-shadow:0px 0px 6px 0px rgba(0,0,0,0.75);"],f.background),z=Object(p.a)(d.c).withConfig({displayName:"App__ListContextMenuItem",componentId:"sc-1yhcetn-10"})(["padding:1em;user-select:none;cursor:pointer;:hover{background-color:",";}:focus{outline:none;}"],f.primary2),U=p.a.p.withConfig({displayName:"App__ThreeDots",componentId:"sc-1yhcetn-11"})(["transform:rotate(90deg);white-space:nowrap;display:block;margin:0;padding:0.5em;"]),M=function(){var e=Object(r.useState)({currentState:j.none,username:"",usernameFailed:!1,password:"",passwordFailed:!1,password2:"",email:"",emailFailed:!1,error:"",emailError:"",addingList:!1,newListName:"",renameId:null,renameName:""}),t=Object(l.a)(e,2),n=t[0],s=t[1];function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.currentState,r=void 0===t?n.currentState:t,a=e.username,i=void 0===a?n.username:a,o=e.usernameFailed,c=void 0===o?n.usernameFailed:o,u=e.password,l=void 0===u?n.password:u,p=e.passwordFailed,d=void 0===p?n.passwordFailed:p,m=e.password2,f=void 0===m?n.password2:m,h=e.email,g=void 0===h?n.email:h,v=e.emailFailed,w=void 0===v?n.emailFailed:v,k=e.error,b=void 0===k?n.error:k,y=e.emailError,x=void 0===y?n.emailError:y,E=e.addingList,O=void 0===E?n.addingList:E,I=e.newListName,S=void 0===I?n.newListName:I,N=e.renameId,C=void 0===N?n.renameId:N,L=e.renameName,j=void 0===L?n.renameName:L;s({currentState:r,username:i,usernameFailed:c,password:l,passwordFailed:d,password2:f,email:g,emailFailed:w,error:b,emailError:x,addingList:O,newListName:S,renameId:C,renameName:j})}var o=Object(r.useState)(null),p=Object(l.a)(o,2),E=p[0],O=p[1],M=Object(r.useState)(new C),K=Object(l.a)(M,1)[0];window.onload=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.GetIsAuthorized();case 2:if(!e.sent){e.next=6;break}return e.next=5,X();case 5:i({currentState:j.loggedIn});case 6:case"end":return e.stop()}}),e)})));var H=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.Login(n.username,n.password);case 2:if(!(t=e.sent).success){e.next=12;break}return I("token",t.token,100),I("tokenDate",Date.now(),100),I("refreshToken",t.refreshToken,100),e.next=9,X();case 9:i({currentState:j.loggedIn}),e.next=13;break;case 12:i({usernameFailed:!0,passwordFailed:!0,error:t.message});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.password!==n.password2&&alert("Passwords don't match"),n.email.includes("@")&&n.email.includes(".")){e.next=4;break}return i({emailError:"That doesn't look like a valid email address",emailFailed:!0}),e.abrupt("return");case 4:return e.next=6,K.CreateUser(n.email,n.username,n.username,n.password);case 6:if((t=e.sent).success){e.next=12;break}return alert(t.message),e.abrupt("return");case 12:alert("successfully created user");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.AddList(n.newListName);case 2:if((t=e.sent).success){e.next=8;break}return alert(t.message),e.abrupt("return");case 8:i({newListName:"",addingList:!1}),X();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.DeleteList(t);case 2:(n=e.sent).success||alert(n.message),X();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.GetUserLists();case 2:(t=e.sent).success?O(t.message):alert("Fel n\xe4r listor sk\xf6lle laddas: "+t.message+"\nTOKEN: "+S("token"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.RenameList(n.renameId,n.renameName);case 2:return(t=e.sent).success||alert(t.message),e.next=6,X();case 6:i({renameId:null});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e){"Enter"===e&&(n.currentState===j.loggingIn&&H(),n.currentState===j.registering&&V())};return Object(r.useEffect)((function(){n.renameId&&document.getElementById(n.renameId).select()}),[n.renameId]),a.a.createElement(T,null,n.currentState===j.loggedIn&&a.a.createElement(G,null,a.a.createElement(R,{onClick:function(){i({currentState:j.none}),N("token"),N("tokenDate"),N("refreshToken")}},"sign out")),a.a.createElement(_,null,n.currentState===j.none&&a.a.createElement(y,{updateSuperState:i}),n.currentState===j.loggingIn&&a.a.createElement(x,{states:n,updateSuperState:i,State:j,handleKeyPress:$,login:H}),n.currentState===j.registering&&a.a.createElement("div",null,a.a.createElement(h,null,a.a.createElement(g,null,a.a.createElement(w,null,"email:"),a.a.createElement(v,{value:n.email,failed:n.emailFailed,onChange:function(e){return i({email:e.target.value})}}),a.a.createElement(b,null,n.emailError)),a.a.createElement(g,null,a.a.createElement(w,null,"username:"),a.a.createElement(v,{value:n.username,onChange:function(e){return i({username:e.target.value})}})),a.a.createElement(g,null,a.a.createElement(w,null,"password:"),a.a.createElement(v,{type:"password",value:n.password,onChange:function(e){return i({password:e.target.value})}})),a.a.createElement(g,null,a.a.createElement(w,null,"repeat password:"),a.a.createElement(v,{type:"password",value:n.password2,onChange:function(e){return i({password2:e.target.value})},onKeyPress:function(e){return $(e.key)}}))),a.a.createElement(h,null,a.a.createElement(k,{onClick:function(){i({currentState:j.none})}},"back"),a.a.createElement(k,{onClick:function(){V()}},"register"))),n.currentState===j.loggedIn&&a.a.createElement(a.a.Fragment,null,!n.addingList&&a.a.createElement(h,null,E.length>1&&E.map((function(e){return a.a.createElement(a.a.Fragment,{key:"addinglist mapping ".concat(e.listid,"+").concat(e.listname)},n.renameId===e.listid&&a.a.createElement(A,{id:n.renameId,value:n.renameName,onChange:function(e){return i({renameName:e.target.value})},onKeyPress:function(e){return $(e.key)},onBlur:Y}),n.renameId!==e.listid&&a.a.createElement(d.b,{key:e.listid,id:e.listid.toString()},a.a.createElement(B,null,a.a.createElement(J,null,e.listname),a.a.createElement(P,{onClick:function(t){return function(e,t){var n=e.clientX,r=e.clientY;console.log(n,r,e),Object(m.showMenu)({position:{x:n,y:r},target:e.target,id:t})}(t,e.listid.toString())}},a.a.createElement(U,null,"..."))),a.a.createElement(D,{id:e.listid.toString()},a.a.createElement(z,{onClick:function(){return t=e.listid,void i({renameName:e.listname,renameId:t});var t}},"Rename"),a.a.createElement(z,{onClick:function(){return W(e.listid)}},"Delete"))))})),a.a.createElement(F,{onClick:function(){i({addingList:!0})}},a.a.createElement(L,{width:"60",height:"60",color:f.primary}))),n.addingList&&a.a.createElement(h,null,a.a.createElement(g,null,a.a.createElement(w,null,"List name:"),a.a.createElement(v,{value:n.newListName,onChange:function(e){return i({newListName:e.target.value})}}),a.a.createElement(k,{onClick:function(){q()}},"add"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.14cc9459.chunk.js.map