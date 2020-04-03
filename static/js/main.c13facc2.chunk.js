(this["webpackJsonp@sahtivahti/app"]=this["webpackJsonp@sahtivahti/app"]||[]).push([[0],{111:function(e,t,a){e.exports=a(141)},141:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(11),i=a.n(l),o=a(8),u=a(42),s=a(30),m=a(3),p=a(83),d=a(202),E=a(210),f=a(207),h=a(203),b=a(204),v=a(39),g=a(185),y=a(200),w=a(205),x=a(192),O=a(92),j=a.n(O),C=a(93),S=a.n(C),k=a(181),R=a(81),N=function(){return c.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",c.a.createElement(k.a,{color:"inherit",href:"https://github.com/sahtivahti"},"Sahtivahti")," ",(new Date).getFullYear(),"."," ","Version"," ",R.version)},B=function(e){var t=e.size||"normal";return c.a.createElement(v.a,{component:"h2",variant:{small:"h6",normal:"h5"}[t],color:"primary",gutterBottom:!0},e.children)},F=a(208),z=a(98),I=Object(p.a)((function(e){return Object(F.a)({paper:{padding:e.spacing(2)}})})),A=function(e){var t=I();return c.a.createElement(z.a,{className:t.paper},e.children)},W=function(){return c.a.createElement(A,null,c.a.createElement(B,null,"Recent Brew"),"No recent brew :(")},T=a(182),q=a(183),H=a(184),P=a(86),U=a.n(P),D=a(87),J=a.n(D),Q=a(88),_=a.n(Q),L=a(89),V=a.n(L),G=a(21),M=a(6),X=a.n(M),Y=a(97),$=a(84),K=a.n($),Z=function(){return window.history.replaceState({},document.title,window.location.pathname)},ee=c.a.createContext(),te=function(){return Object(r.useContext)(ee)},ae={baseurl:window.location.origin.indexOf("localhost")>=0?window.location.origin:"https://sahtivahti.github.io/app"},ne=function(){var e=te().logout;return c.a.createElement("div",null,c.a.createElement(T.a,{button:!0,component:G.b,to:"/"},c.a.createElement(q.a,null,c.a.createElement(U.a,null)),c.a.createElement(H.a,{primary:"Dashboard"})),c.a.createElement(T.a,{button:!0,component:G.b,to:"/recipes"},c.a.createElement(q.a,null,c.a.createElement(J.a,null)),c.a.createElement(H.a,{primary:"Recipes"})),c.a.createElement(T.a,{button:!0,component:G.b,to:"/brew"},c.a.createElement(q.a,null,c.a.createElement(_.a,null)),c.a.createElement(H.a,{primary:"Brew"})),c.a.createElement(g.a,null),c.a.createElement(T.a,{button:!0,onClick:function(){return e({returnTo:ae.baseurl})}},c.a.createElement(q.a,null,c.a.createElement(V.a,null)),c.a.createElement(H.a,{primary:"Logout"})))},re=a(36),ce=a(33),le=a(90),ie=function e(t){Object(ce.a)(this,e),this.id="",this.name="",this.author=void 0,this.style=void 0,this.batchSize=0,this.createdAt=null,this.updatedAt=null,this.hops=[],this.fermentables=[],this.ibu=void 0,this.color=void 0,this.abv=void 0,this.colorName=void 0,Object.assign(this,t)},oe=a(91),ue=a.n(oe),se=function e(t){Object(ce.a)(this,e),this.id="",this.name="",this.quantity=0,this.time=0,Object.assign(this,t)},me=function e(t){Object(ce.a)(this,e),this.id="",this.name="",this.quantity=0,this.color=0,Object.assign(this,t)},pe=new(function(){function e(){Object(ce.a)(this,e),this.client=null}return Object(le.a)(e,[{key:"getRecipes",value:function(){var e,t;return X.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,X.a.awrap(this.createClient());case 2:return e=a.sent,a.next=5,X.a.awrap(e.get("/recipes"));case 5:return t=a.sent,a.abrupt("return",t.data.map((function(e){return new ie(e)})));case 7:case"end":return a.stop()}}),null,this)}},{key:"createRecipe",value:function(e){var t,a;return X.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.a.awrap(this.createClient());case 2:return t=n.sent,n.next=5,X.a.awrap(t.post("/recipes",e));case 5:return a=n.sent,n.abrupt("return",new ie(a.data));case 7:case"end":return n.stop()}}),null,this)}},{key:"updateRecipe",value:function(e){var t,a;return X.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.a.awrap(this.createClient());case 2:return t=n.sent,e.batchSize=+e.batchSize,n.next=6,X.a.awrap(t.put("/recipes/"+e.id,e));case 6:return a=n.sent,n.abrupt("return",new ie(a.data));case 8:case"end":return n.stop()}}),null,this)}},{key:"getRecipeDetailsById",value:function(e){var t,a;return X.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.a.awrap(this.createClient());case 2:return t=n.sent,n.next=5,X.a.awrap(t.get("/recipes/"+e));case 5:return a=n.sent,n.abrupt("return",new ie(a.data));case 7:case"end":return n.stop()}}),null,this)}},{key:"removeRecipeById",value:function(e){var t;return X.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,X.a.awrap(this.createClient());case 2:return t=a.sent,a.next=5,X.a.awrap(t.delete("/recipes/"+e));case 5:case"end":return a.stop()}}),null,this)}},{key:"addHopToRecipe",value:function(e,t){var a,n;return X.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,X.a.awrap(this.createClient());case 2:return a=r.sent,e.quantity=+e.quantity,r.next=6,X.a.awrap(a.post("/recipes/"+t+"/hop",e));case 6:return n=r.sent,r.abrupt("return",new se(n.data));case 8:case"end":return r.stop()}}),null,this)}},{key:"removeHopFromRecipe",value:function(e,t){var a,n;return X.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,X.a.awrap(this.createClient());case 2:return a=r.sent,r.next=5,X.a.awrap(a.delete("/recipes/"+t+"/hop/"+e));case 5:return n=r.sent,r.abrupt("return",new se(n.data));case 7:case"end":return r.stop()}}),null,this)}},{key:"addFermentableToRecipe",value:function(e,t){var a,n;return X.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,X.a.awrap(this.createClient());case 2:return a=r.sent,e.quantity=+e.quantity,e.color=+e.color,r.next=7,X.a.awrap(a.post("/recipes/"+t+"/fermentable",e));case 7:return n=r.sent,r.abrupt("return",new me(n.data));case 9:case"end":return r.stop()}}),null,this)}},{key:"removeFermentableFromRecipe",value:function(e,t){var a,n;return X.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,X.a.awrap(this.createClient());case 2:return a=r.sent,r.next=5,X.a.awrap(a.delete("/recipes/"+t+"/fermentable/"+e));case 5:return n=r.sent,r.abrupt("return",new me(n.data));case 7:case"end":return r.stop()}}),null,this)}},{key:"createClient",value:function(){var e;return X.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.client){t.next=5;break}return t.next=3,X.a.awrap(X.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.awrap(n.getTokenSilently());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})));case 3:e=t.sent,this.client=ue.a.create({baseURL:"https://rlylkxiomh.execute-api.eu-west-1.amazonaws.com/prod",headers:{Authorization:"Bearer ".concat(e)}});case 5:return t.abrupt("return",Promise.resolve(this.client));case 6:case"end":return t.stop()}}),null,this)}}]),e}()),de=a(193),Ee=a(194),fe=a(195),he=a(196),be=a(197),ve=a(198),ge=a(191),ye=a(186),we=a(187),xe=a(188),Oe=a(189),je=a(206),Ce=a(190),Se=function(e){var t=Object(r.useState)(),a=Object(o.a)(t,2),n=a[0],l=a[1],i=Object(r.useState)(),u=Object(o.a)(i,2),s=u[0],m=u[1],p=Object(r.useState)(!1),d=Object(o.a)(p,2),E=d[0],f=d[1],h=te().user;return s?c.a.createElement(re.a,{to:"/recipes/".concat(s)}):c.a.createElement(ye.a,{open:e.open,onClose:function(){return e.onClose()},"aria-labelledby":"form-dialog-title"},c.a.createElement(we.a,{id:"form-dialog-title"},"Create new recipe"),c.a.createElement(xe.a,null,c.a.createElement(Oe.a,null,"Please give a name for your new recipe"),c.a.createElement(je.a,{autoFocus:!0,margin:"dense",id:"name",label:"Recipe name",type:"text",fullWidth:!0,onChange:function(e){return l(e.target.value)}})),c.a.createElement(Ce.a,null,c.a.createElement(ge.a,{onClick:function(){return e.onClose()},color:"primary"},"Cancel"),c.a.createElement(ge.a,{onClick:function(){var e,t;return X.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=new ie({name:n,author:h.email}),f(!0),a.next=4,X.a.awrap(pe.createRecipe(e));case 4:t=a.sent,f(!1),m(t.id);case 7:case"end":return a.stop()}}))},disabled:!n||E,color:"primary"},"Save")))},ke=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(ge.a,{color:"primary",onClick:function(){return n(!0)}},"New recipe"),c.a.createElement(Se,{open:a,onClose:function(){n(!1)}}))},Re=function(e){return c.a.createElement(x.a,{container:!0,direction:"column",alignContent:"center",alignItems:"center"},c.a.createElement(x.a,{item:!0},c.a.createElement(v.a,{variant:"h1",color:"textSecondary"},"\xaf\\_(\u30c4)_/\xaf")),c.a.createElement("br",null),c.a.createElement(x.a,{item:!0},c.a.createElement(v.a,{variant:"h5",color:"textSecondary"},"Hoops! ",e.text)))},Ne=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(!1),i=Object(o.a)(l,2),u=i[0],s=i[1],m=Object(re.h)().url;return Object(r.useEffect)((function(){!function(){var e;X.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,X.a.awrap(pe.getRecipes());case 3:e=t.sent,n(e),s(!1);case 6:case"end":return t.stop()}}))}()}),[]),u?c.a.createElement(A,null,c.a.createElement(de.a,null)):c.a.createElement(A,null,c.a.createElement(x.a,{container:!0,direction:"row",alignContent:"space-between"},c.a.createElement(x.a,{item:!0,xs:!0},c.a.createElement(B,null,"My recipes")),c.a.createElement(x.a,{item:!0},c.a.createElement(ke,null))),0===a.length&&c.a.createElement(Re,{text:"There are no recipes yet!"}),a.length>0&&c.a.createElement(Ee.a,null,c.a.createElement(fe.a,null,c.a.createElement(he.a,null,c.a.createElement(be.a,null,"Name"),c.a.createElement(be.a,null,"Author"))),c.a.createElement(ve.a,null,a.map((function(e){return c.a.createElement(he.a,{key:e.id},c.a.createElement(be.a,null,c.a.createElement(G.b,{to:"".concat(m,"/").concat(e.id)},e.name)),c.a.createElement(be.a,null,e.author))})))))},Be=function(){return c.a.createElement("div",null,"Brew")},Fe=a(209),ze=a(211),Ie=Object(p.a)((function(e){return{popover:{padding:e.spacing(2)}}})),Ae=function(){var e=te().user,t=c.a.useState(null),a=Object(o.a)(t,2),n=a[0],r=a[1],l=Ie(),i=Boolean(n),u=i?"profile-popover":void 0;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(e){r(e.currentTarget)}},c.a.createElement(Fe.a,{alt:e.name,src:e.picture})),c.a.createElement(ze.a,{id:u,open:i,anchorEl:n,onClose:function(){r(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},c.a.createElement("div",{className:l.popover},c.a.createElement(B,null,"Profile"),c.a.createElement(v.a,null,"Name: ",e.name),c.a.createElement(v.a,null,"Email: ",e.email))))},We=a(199),Te=a(46),qe=a.n(Te),He=function(e){var t=e.open,a=e.onClose,n=e.text;return c.a.createElement("div",null,c.a.createElement(ye.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},c.a.createElement(we.a,{id:"alert-dialog-title"},"Confirm"),c.a.createElement(xe.a,null,c.a.createElement(Oe.a,{id:"alert-dialog-description"},n)),c.a.createElement(Ce.a,null,c.a.createElement(ge.a,{onClick:function(){return a(!1)},color:"primary"},"Cancel"),c.a.createElement(ge.a,{onClick:function(){return a(!0)},color:"primary",autoFocus:!0},"Ok"))))},Pe=function(e){var t=e.recipeId,a=Object(r.useState)(!1),n=Object(o.a)(a,2),l=n[0],i=n[1],u=Object(r.useState)(!1),s=Object(o.a)(u,2),m=s[0],p=s[1],d=Object(r.useState)(!1),E=Object(o.a)(d,2),f=E[0],h=E[1];return m?c.a.createElement(re.a,{to:"/recipes"}):c.a.createElement(c.a.Fragment,null,c.a.createElement(ge.a,{color:"secondary",onClick:function(){i(!0)}},f?c.a.createElement(de.a,{size:24}):c.a.createElement(We.a,null,c.a.createElement(qe.a,null)),"Remove this recipe"),c.a.createElement(He,{text:"Do you really want to remove this recipe?",open:l,onClose:function(e){return X.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(i(!1),e){a.next=3;break}return a.abrupt("return");case 3:return h(!0),a.next=6,X.a.awrap(pe.removeRecipeById(t));case 6:h(!1),p(!0);case 8:case"end":return a.stop()}}))}}))},Ue=a(65),De=a.n(Ue),Je=function(e){var t,a,n=e.recipe,r="Created "+De()(n.createdAt||void 0).fromNow(),l="never updated";return(null===(t=n.createdAt)||void 0===t?void 0:t.toString())!==(null===(a=n.updatedAt)||void 0===a?void 0:a.toString())&&(l="updated "+De()(n.updatedAt||void 0).fromNow()),c.a.createElement(v.a,{variant:"body2"},r,", ",l)},Qe=a(50),_e=a(201),Le=function(e){var t=Object(r.useState)(),a=Object(o.a)(t,2),n=a[0],l=a[1],i=Object(r.useState)(),u=Object(o.a)(i,2),s=u[0],m=u[1],p=Object(r.useState)(),d=Object(o.a)(p,2),E=d[0],f=d[1];return c.a.createElement(ye.a,{open:e.open,onClose:function(){return e.onClose()},"aria-labelledby":"form-dialog-title"},c.a.createElement(we.a,{id:"form-dialog-title"},"Add hop"),c.a.createElement(xe.a,null,c.a.createElement(Oe.a,null,"Please fill required fields"),c.a.createElement(je.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,onChange:function(e){return l(e.target.value)}}),c.a.createElement(je.a,{type:"number",margin:"dense",id:"quantity",label:"Quantity (g)",fullWidth:!0,onChange:function(e){return m(+e.target.value)}}),c.a.createElement(je.a,{type:"number",margin:"dense",id:"time",label:"Time from boil end (minutes)",fullWidth:!0,onChange:function(e){return f(+e.target.value)}})),c.a.createElement(Ce.a,null,c.a.createElement(ge.a,{onClick:function(){return e.onClose()},color:"primary"},"Cancel"),c.a.createElement(ge.a,{onClick:function(){var t=new se({name:n,quantity:s,time:E});e.onClose(t)},disabled:!n||!s,color:"primary"},"Save")))},Ve=function(e){var t=e.recipe,a=e.onHopAdded,n=e.onHopRemoved,l=Object(r.useState)(!1),i=Object(o.a)(l,2),u=i[0],s=i[1],m=Object(r.useState)([]),p=Object(o.a)(m,2),d=p[0],E=p[1];return c.a.createElement(A,null,c.a.createElement(x.a,{container:!0,direction:"row"},c.a.createElement(x.a,{item:!0,xs:!0},c.a.createElement(B,{size:"small"},"Hops")),c.a.createElement(x.a,{item:!0},c.a.createElement(ge.a,{color:"primary",onClick:function(){return X.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0);case 1:case"end":return e.stop()}}))}},"New hop"))),c.a.createElement(Ee.a,null,c.a.createElement(fe.a,null,c.a.createElement(he.a,null,c.a.createElement(be.a,null,"Name"),c.a.createElement(be.a,null,"Quantity (g)"),c.a.createElement(be.a,null,"Time (min)"),c.a.createElement(be.a,{padding:"checkbox"}))),c.a.createElement(ve.a,null,t.hops.sort((function(e,t){return t.time-e.time})).map((function(e,a){return c.a.createElement(he.a,{key:a},c.a.createElement(be.a,{component:"th"},e.name),c.a.createElement(be.a,null,e.quantity.toFixed(2)),c.a.createElement(be.a,null,e.time),c.a.createElement(be.a,null,c.a.createElement(y.a,{size:"small",onClick:(r=a,function(){var e;return X.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return");case 2:return e=t.hops[r],E([].concat(Object(Qe.a)(d),[e.id])),a.next=6,X.a.awrap(pe.removeHopFromRecipe(e.id,t.id));case 6:d.splice(d.indexOf(e.id),1),E(Object(Qe.a)(d)),n(e);case 9:case"end":return a.stop()}}))})},d.indexOf(e.id)>=0?c.a.createElement(de.a,{size:24}):c.a.createElement(qe.a,null))));var r}))),c.a.createElement(_e.a,null,c.a.createElement(he.a,null,c.a.createElement(be.a,null,"Total"),c.a.createElement(be.a,null,t.hops.reduce((function(e,t){return e+t.quantity}),0).toFixed(2)),c.a.createElement(be.a,null,"-"),c.a.createElement(be.a,null,"-")))),c.a.createElement(Le,{open:u,onClose:function(e){var n;return X.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(s(!1),e&&t){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,X.a.awrap(pe.addHopToRecipe(e,t.id));case 5:n=r.sent,a(n);case 7:case"end":return r.stop()}}))}}))},Ge=function(e){var t=Object(r.useState)(),a=Object(o.a)(t,2),n=a[0],l=a[1],i=Object(r.useState)(),u=Object(o.a)(i,2),s=u[0],m=u[1],p=Object(r.useState)(),d=Object(o.a)(p,2),E=d[0],f=d[1];return c.a.createElement(ye.a,{open:e.open,onClose:function(){return e.onClose()},"aria-labelledby":"form-dialog-title"},c.a.createElement(we.a,{id:"form-dialog-title"},"Add fermentable"),c.a.createElement(xe.a,null,c.a.createElement(Oe.a,null,"Please fill required fields"),c.a.createElement(je.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,onChange:function(e){return l(e.target.value)}}),c.a.createElement(je.a,{type:"number",margin:"dense",id:"quantity",label:"Quantity (kg)",fullWidth:!0,onChange:function(e){return m(+e.target.value)}}),c.a.createElement(je.a,{type:"number",margin:"dense",id:"color",label:"Color (EBC)",fullWidth:!0,onChange:function(e){return f(+e.target.value)}})),c.a.createElement(Ce.a,null,c.a.createElement(ge.a,{onClick:function(){return e.onClose()},color:"primary"},"Cancel"),c.a.createElement(ge.a,{onClick:function(){var t=new me({name:n,quantity:s,color:E});e.onClose(t)},disabled:!n||!s,color:"primary"},"Save")))},Me=function(e){var t=e.recipe,a=e.onFermentableAdded,n=e.onFermentableRemoved,l=Object(r.useState)(!1),i=Object(o.a)(l,2),u=i[0],s=i[1],m=Object(r.useState)([]),p=Object(o.a)(m,2),d=p[0],E=p[1];return c.a.createElement(A,null,c.a.createElement(x.a,{container:!0,direction:"row"},c.a.createElement(x.a,{item:!0,xs:!0},c.a.createElement(B,{size:"small"},"Fermentables")),c.a.createElement(x.a,{item:!0},c.a.createElement(ge.a,{color:"primary",onClick:function(){return X.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0);case 1:case"end":return e.stop()}}))}},"New fermentable"))),c.a.createElement(Ee.a,null,c.a.createElement(fe.a,null,c.a.createElement(he.a,null,c.a.createElement(be.a,null,"Name"),c.a.createElement(be.a,null,"Quantity (kg)"),c.a.createElement(be.a,null,"Color (EBC)"),c.a.createElement(be.a,{padding:"checkbox"}))),c.a.createElement(ve.a,null,t.fermentables.sort((function(e,t){return t.quantity-e.quantity})).map((function(e,a){return c.a.createElement(he.a,{key:a},c.a.createElement(be.a,{component:"th"},e.name),c.a.createElement(be.a,null,e.quantity.toFixed(2)),c.a.createElement(be.a,null,e.color),c.a.createElement(be.a,null,c.a.createElement(y.a,{size:"small",onClick:(r=a,function(){var e;return X.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return");case 2:return e=t.fermentables[r],E([].concat(Object(Qe.a)(d),[e.id])),a.next=6,X.a.awrap(pe.removeFermentableFromRecipe(e.id,t.id));case 6:d.splice(d.indexOf(e.id),1),E(Object(Qe.a)(d)),n(e);case 9:case"end":return a.stop()}}))})},d.indexOf(e.id)>=0?c.a.createElement(de.a,{size:24}):c.a.createElement(qe.a,null))));var r}))),c.a.createElement(_e.a,null,c.a.createElement(he.a,null,c.a.createElement(be.a,null,"Total"),c.a.createElement(be.a,null,t.fermentables.reduce((function(e,t){return e+t.quantity}),0).toFixed(2)),c.a.createElement(be.a,null,"-"),c.a.createElement(be.a,null,"-")))),c.a.createElement(Ge,{open:u,onClose:function(e){var n;return X.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(s(!1),e&&t){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,X.a.awrap(pe.addFermentableToRecipe(e,t.id));case 5:n=r.sent,a(n);case 7:case"end":return r.stop()}}))}}))},Xe=a(212),Ye=function(e){var t=e.recipe;return c.a.createElement(x.a,{container:!0,spacing:1},c.a.createElement(x.a,{item:!0},c.a.createElement(Xe.a,{label:c.a.createElement("span",null,c.a.createElement("b",null,"ABV: "),t.abv)})),c.a.createElement(x.a,{item:!0},c.a.createElement(Xe.a,{label:c.a.createElement("span",null,c.a.createElement("b",null,"Color: "),t.color," (",t.colorName,")")})),c.a.createElement(x.a,{item:!0},c.a.createElement(Xe.a,{label:c.a.createElement("span",null,c.a.createElement("b",null,"IBU: "),t.ibu)})))},$e=Object(p.a)((function(e){return Object(F.a)({root:{"& .MuiTextField-root":{margin:e.spacing(1),marginLeft:0}}})})),Ke=function(){var e=Object(re.g)().id,t=$e(),a=Object(r.useState)(!0),n=Object(o.a)(a,2),l=n[0],i=n[1],m=Object(r.useState)(),p=Object(o.a)(m,2),d=p[0],E=p[1],f=Object(r.useState)(!1),h=Object(o.a)(f,2),b=h[0],g=h[1],y=function(e){return function(t){E(new ie(Object(s.a)({},d,Object(u.a)({},e,t.target.value))))}};return Object(r.useEffect)((function(){!function(){var t;X.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(i(!0),e){a.next=3;break}return a.abrupt("return");case 3:return a.next=5,X.a.awrap(pe.getRecipeDetailsById(e));case 5:t=a.sent,E(t),i(!1);case 8:case"end":return a.stop()}}))}()}),[e]),l?c.a.createElement(de.a,null):d?c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,{container:!0,direction:"row",alignContent:"space-between",alignItems:"flex-start",spacing:2},c.a.createElement(x.a,{item:!0},c.a.createElement(B,null,'Editing recipe "',d.name,'"')),c.a.createElement(x.a,{item:!0,xs:12,md:6},c.a.createElement(Ye,{recipe:d})),c.a.createElement(x.a,{item:!0,container:!0,xs:3,justify:"flex-end"},c.a.createElement(Pe,{recipeId:d.id}))),c.a.createElement(Je,{recipe:d}),c.a.createElement("br",null),c.a.createElement(x.a,{container:!0,spacing:2},c.a.createElement(x.a,{item:!0,xs:12,md:6},c.a.createElement(A,null,c.a.createElement(B,{size:"small"},"Basics"),c.a.createElement("form",{className:t.root},c.a.createElement(je.a,{id:"name",onChange:y("name"),value:d.name,label:"Name",fullWidth:!0}),c.a.createElement(je.a,{id:"author",value:d.author,label:"Author",disabled:!0,fullWidth:!0}),c.a.createElement(je.a,{id:"style",value:d.style,onChange:y("style"),label:"Style",fullWidth:!0}),c.a.createElement(je.a,{id:"batchSize",type:"number",value:d.batchSize,onChange:y("batchSize"),label:"Batch size (l)",fullWidth:!0})),c.a.createElement(x.a,{container:!0,direction:"row",justify:"flex-end"},c.a.createElement(ge.a,{variant:"contained",color:"primary",onClick:function(){var e,t;return X.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return g(!0),a.next=3,X.a.awrap(pe.updateRecipe(d));case 3:e=a.sent,t=JSON.parse(JSON.stringify(e)),E(Object(s.a)({},d,{},t)),g(!1);case 7:case"end":return a.stop()}}))},disabled:b},"Save")))),c.a.createElement(x.a,{item:!0,xs:12,md:6},c.a.createElement(Ve,{recipe:d,onHopAdded:function(e){null===d||void 0===d||d.hops.push(e),d&&E(Object(s.a)({},d,{hops:d.hops}))},onHopRemoved:function(e){if(d){var t=d.hops.findIndex((function(t){return t.id===e.id}));d.hops.splice(t,1),E(Object(s.a)({},d,{hops:d.hops}))}}})),c.a.createElement(x.a,{item:!0,xs:12,md:6},c.a.createElement(Me,{recipe:d,onFermentableAdded:function(e){d&&(d.fermentables.push(e),E(Object(s.a)({},d,{fermentables:d.fermentables})))},onFermentableRemoved:function(e){if(d){var t=d.fermentables.findIndex((function(t){return t.id===e.id}));d.fermentables.splice(t,1),E(Object(s.a)({},d,{fermentables:d.fermentables}))}}})))):c.a.createElement(v.a,null,"Can't load recipe :/")},Ze=Object(p.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(u.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},fixedHeight:{height:240}}})),et=function(){var e=Ze(),t=c.a.useState(!0),a=Object(o.a)(t,2),n=a[0],r=a[1];return c.a.createElement("div",{className:e.root},c.a.createElement(d.a,null),c.a.createElement(h.a,{position:"absolute",className:Object(m.a)(e.appBar,n&&e.appBarShift)},c.a.createElement(b.a,{className:e.toolbar},c.a.createElement(y.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},className:Object(m.a)(e.menuButton,n&&e.menuButtonHidden)},c.a.createElement(j.a,null)),c.a.createElement(v.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Sahtivahti"),c.a.createElement(Ae,null))),c.a.createElement(E.a,{variant:"permanent",classes:{paper:Object(m.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},c.a.createElement("div",{className:e.toolbarIcon},c.a.createElement(y.a,{onClick:function(){r(!1)}},c.a.createElement(S.a,null))),c.a.createElement(g.a,null),c.a.createElement(ne,null),c.a.createElement(g.a,null)),c.a.createElement("main",{className:e.content},c.a.createElement("div",{className:e.appBarSpacer}),c.a.createElement(w.a,{maxWidth:"lg",className:e.container},c.a.createElement(x.a,{container:!0,spacing:3},c.a.createElement(x.a,{item:!0,xs:12},c.a.createElement(re.d,null,c.a.createElement(re.b,{exact:!0,path:"/recipes"},c.a.createElement(Ne,null)),c.a.createElement(re.b,{path:"/recipes/:id"},c.a.createElement(Ke,null)),c.a.createElement(re.b,{path:"/brew"},c.a.createElement(Be,null)),c.a.createElement(re.b,{path:"/"},c.a.createElement(W,null))))),c.a.createElement(f.a,{pt:4},c.a.createElement(N,null)))))},tt=a(96),at=a.n(tt),nt=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(24),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},submit:{margin:e.spacing(3,0,2)}}}));function rt(){var e=nt(),t=te().loginWithRedirect;return c.a.createElement(w.a,{component:"main",maxWidth:"xs"},c.a.createElement(d.a,null),c.a.createElement("div",{className:e.paper},c.a.createElement(Fe.a,{className:e.avatar},c.a.createElement(at.a,null)),c.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign in to Sahtivahti"),c.a.createElement(ge.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:t},"Sign In")),c.a.createElement(f.a,{mt:8},c.a.createElement(N,null)))}var ct=function(){var e=te(),t=e.isAuthenticated;return e.loading?c.a.createElement("div",null):c.a.createElement("div",null,c.a.createElement(G.a,null,!t&&c.a.createElement(rt,null),t&&c.a.createElement(et,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var lt={domain:"sahtivahti.eu.auth0.com",clientId:"ASuV7V1Uw16A5wQiebQBJgxiz4vnph13",audience:"https://api.sahtivahti.fi",redirectUri:ae.baseurl};i.a.render(c.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,l=void 0===a?Z:a,i=Object(Y.a)(e,["children","onRedirectCallback"]),u=Object(r.useState)(),s=Object(o.a)(u,2),m=s[0],p=s[1],d=Object(r.useState)(),E=Object(o.a)(d,2),f=E[0],h=E[1],b=Object(r.useState)(),v=Object(o.a)(b,2),g=v[0],y=v[1],w=Object(r.useState)(!0),x=Object(o.a)(w,2),O=x[0],j=x[1];Object(r.useEffect)((function(){!function(){var e,t,a,r,c;X.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,X.a.awrap(K()(i));case 2:if(e=o.sent,y(e),n=e,!window.location.search.includes("code=")){o.next=11;break}return o.next=8,X.a.awrap(e.handleRedirectCallback());case 8:t=o.sent,a=t.appState,l(a);case 11:return o.next=13,X.a.awrap(e.isAuthenticated());case 13:if(r=o.sent,p(r),!r){o.next=20;break}return o.next=18,X.a.awrap(e.getUser());case 18:c=o.sent,h(c);case 20:j(!1);case 21:case"end":return o.stop()}}))}()}),[]);return c.a.createElement(ee.Provider,{value:{isAuthenticated:m,user:f,loading:O,handleRedirectCallback:function(){var e;return X.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.next=3,X.a.awrap(g.handleRedirectCallback());case 3:return t.next=5,X.a.awrap(g.getUser());case 5:e=t.sent,j(!1),p(!0),h(e);case 9:case"end":return t.stop()}}))},getIdTokenClaims:function(){return g.getIdTokenClaims.apply(g,arguments)},loginWithRedirect:function(){return g.loginWithRedirect.apply(g,arguments)},getTokenSilently:function(){return g.getTokenSilently.apply(g,arguments)},logout:function(){return g.logout.apply(g,arguments)}}},t)}),{domain:lt.domain,client_id:lt.clientId,redirect_uri:lt.redirectUri,audience:lt.audience,logout:!0},c.a.createElement(ct,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e){e.exports=JSON.parse('{"name":"@sahtivahti/app","homepage":"https://sahtivahti.github.io/app","version":"0.0.9","private":true,"dependencies":{"@auth0/auth0-spa-js":"^1.6.0","@material-ui/core":"^4.8.1","@material-ui/icons":"^4.5.1","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","@types/jest":"^24.0.0","@types/node":"^12.0.0","@types/react":"^16.9.0","@types/react-dom":"^16.9.0","@types/react-router-dom":"^5.1.3","axios":"^0.19.0","gh-pages":"^2.2.0","moment":"^2.24.0","react":"^16.12.0","react-dom":"^16.12.0","react-router-dom":"^5.1.2","react-scripts":"3.3.0","typescript":"~3.7.2"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')}},[[111,1,2]]]);
//# sourceMappingURL=main.c13facc2.chunk.js.map