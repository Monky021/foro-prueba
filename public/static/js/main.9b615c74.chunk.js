(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,n){},59:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(17),c=n.n(r),s=n(3),o=n(15),u=n(38),i=n(2),l="[auth] Revision del estado del inicio de sesion finalizo",p="[auth] login",j="[auth] salir de la app",b="[preguntas] Poner las preguntas en el store",d="[preguntas] Poner las preguntas en el store",f="[preguntas] Poner las preguntas en el store",m="[preguntas] Poner las preguntas en el store",O="[preguntas] Poner las preguntas en el store",x="[preguntas] Poner las preguntas en el store",h="[preguntas] Poner las preguntas en el store",g="[preguntas] Poner las preguntas en el store",v="[Preguntas] a\xf1ade una nueva pregunta al store",y="[pregunta] poner pregunta activa",k="[pregunta] limpiare la pregunta seleccionada",N="[pregunta] actualiza la pregunta",w="[pregunta] eliminar pregunta",E="[respuesta] poner el id de la respuesta en el store ",P="[respuesta] limpiar el id de la respuesta",C="[respuesta] seleccionar isEliminarRespuesta",A="[respuesta] limpiar selecion eliminar la respuesta",S="[ui] el modal se abre",R="[ui] el modal se cierra",T="[ui] el modal se abre para hacer preguntas",L="[ui] el modal se cierra y pone en false las preuntas",I="[ui] el modal se abre para editar pregunta",D="[ui] el modal se abre para confirmar la eliminacion de la pregunta",F="[ui] cambia el estado de eliminar en el store",_="[tematica] cargar tematicas store",H={checking:!0},J=n(16),U={preguntas:[],tematicas:[],preguntasDe:[],preguntasFoto:[],preguntasTec:[],preguntasCrip:[],preguntasNode:[],preguntasReact:[],preguntasRandom:[],preguntaActiva:null,respuestaId:null,esPregunta:!1,esRespuesta:!1,esEditPregunta:!1,esEditRespuesta:!1,esEliminarPregunta:!1,EsEliminarRespuesta:!1},q={modalAbierto:!1},M=Object(o.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(i.a)(Object(i.a)({},e),{},{modalAbierto:!0});case R:return Object(i.a)(Object(i.a)({},e),{},{modalAbierto:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case p:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case j:return{checking:!1};default:return e}},foro:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),{},{preguntas:Object(J.a)(t.payload)});case d:return Object(i.a)(Object(i.a)({},e),{},{preguntasDe:Object(J.a)(t.payload)});case f:return Object(i.a)(Object(i.a)({},e),{},{preguntasFoto:Object(J.a)(t.payload)});case T:return Object(i.a)(Object(i.a)({},e),{},{esPregunta:!0});case L:return Object(i.a)(Object(i.a)({},e),{},{esPregunta:!1});case v:return Object(i.a)(Object(i.a)({},e),{},{preguntas:[].concat(Object(J.a)(e.preguntas),[t.payload])});case y:return Object(i.a)(Object(i.a)({},e),{},{preguntaActiva:t.payload});case k:return Object(i.a)(Object(i.a)({},e),{},{preguntaActiva:null});case I:return Object(i.a)({},e);case D:return Object(i.a)(Object(i.a)({},e),{},{esEliminarPregunta:!0});case F:return Object(i.a)(Object(i.a)({},e),{},{esEliminarPregunta:!1});case N:return Object(i.a)(Object(i.a)({},e),{},{preguntas:e.preguntas.map((function(e){return e.id===t.payload.id?t.payload:e}))});case w:return Object(i.a)(Object(i.a)({},e),{},{preguntas:e.preguntas.filter((function(t){return t.id!==e.preguntaActiva})),preguntaActiva:null});case E:return Object(i.a)(Object(i.a)({},e),{},{respuestaId:t.payload});case P:return Object(i.a)(Object(i.a)({},e),{},{respuestaId:null});case C:return Object(i.a)(Object(i.a)({},e),{},{esEliminarRespuesta:!0});case A:return Object(i.a)(Object(i.a)({},e),{},{esEliminarRespuesta:!1});case _:return Object(i.a)(Object(i.a)({},e),{},{tematicas:Object(J.a)(t.payload)});default:return e}}}),z="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,G=Object(o.d)(M,z(Object(o.a)(u.a))),B=n(21),V=n(7),X=n(4),K=n.n(X),Q=n(8),W=n(6),Y=n.n(W),Z="http://localhost:4040/api/foro",$=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(Z,"/").concat(e);return console.log(a),"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},ee=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(Z,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},te=function(e){return{type:p,payload:e}},ne=function(){return{type:l}},ae=function(){return{type:j}},re=n(14),ce=n(22),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(re.a)(t,2),r=n[0],c=n[1],s=function(){c(e)},o=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object(ce.a)({},t.name,t.value)))};return[r,o,s]},oe=(n(59),n(0)),ue=function(){var e=Object(s.b)(),t=se({nombre:"",password:"",password2:""}),n=Object(re.a)(t,2),a=n[0],r=n[1],c=se({nombre:"",password:""}),o=Object(re.a)(c,2),u=o[0],i=o[1],l=a.nombre,p=a.password,j=a.password2,b=u.nombre,d=u.password;return Object(oe.jsxs)("div",{children:[Object(oe.jsx)("div",{className:"container mt-60",children:Object(oe.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),""===l?Y.a.fire("Error","El nickname es obligatorio","error"):l.trim().length<3?Y.a.fire("Error","El nickname debe tener mas de 2 caracteres","error"):p!==j?Y.a.fire("Error","Las contrase\xf1as deben de coincidir","error"):void e(function(e,t){return function(){var n=Object(Q.a)(K.a.mark((function n(a){var r,c;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,$("usuario",{nombre:e,password:t},"POST");case 2:return r=n.sent,n.next=5,r.json();case 5:if(c=n.sent,!r.ok){n.next=10;break}return n.abrupt("return",Y.a.fire("Buen trabajo","Tu cuenta fue creada, solo te falta iniciar sesion","success"));case 10:return n.abrupt("return",Y.a.fire("Ups...",c.msg,"error"));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(l,p))},children:[Object(oe.jsxs)("div",{className:"form-group",children:[Object(oe.jsx)("label",{children:"Registrar su Nickname"}),Object(oe.jsx)("input",{type:"text",className:"form-control",name:"nombre",value:l,onChange:r}),Object(oe.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Su nickname debe ser unico en el foro para poder ingresar"})]}),Object(oe.jsxs)("div",{className:"form-group",children:[Object(oe.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Contrase\xf1a"}),Object(oe.jsx)("input",{type:"password",className:"form-control",name:"password",value:p,onChange:r}),Object(oe.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"La contrase\xf1a debe ser minimo de 6 digitos"})]}),Object(oe.jsxs)("div",{className:"form-group",children:[Object(oe.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Confirmar contrase\xf1a"}),Object(oe.jsx)("input",{type:"password",className:"form-control",name:"password2",value:j,onChange:r})]}),Object(oe.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Registrar"})]})}),Object(oe.jsx)("hr",{}),Object(oe.jsx)("div",{className:"container mt-60",children:Object(oe.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),""===b?Y.a.fire("Error","El nombre es obligatorio","error"):0===d.trim().length?Y.a.fire("Error","la contrase\xf1a es obligatoria","error"):void e(function(e,t){return function(){var n=Object(Q.a)(K.a.mark((function n(a){var r,c,s,o,u;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,$("auth/login",{nombre:e,password:t},"POST");case 2:return r=n.sent,n.next=5,r.json();case 5:c=n.sent,r.ok?(s=c.data,o=c.token,u=s.dataValues,localStorage.setItem("token",o),a(te({uid:u.id,nombre:u.nombre})),Y.a.fire("Bienvenido","","success")):Y.a.fire("Error",c.msg,"error");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(b,d))},children:[Object(oe.jsxs)("div",{className:"form-group",children:[Object(oe.jsx)("label",{children:"Nickname"}),Object(oe.jsx)("input",{type:"text",className:"form-control",name:"nombre",value:b,onChange:i}),Object(oe.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Su nickname debe ser unico en el foro para poder ingresar"})]}),Object(oe.jsxs)("div",{className:"form-group",children:[Object(oe.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Contrase\xf1a"}),Object(oe.jsx)("input",{type:"password",className:"form-control",name:"password",value:d,onChange:i}),Object(oe.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"La contrase\xf1a debe ser minimo de 6 digitos"})]}),Object(oe.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Entrar al foro"})]})})]})},ie=n(24),le=["isAuthenticated","component"],pe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ie.a)(e,le);return Object(oe.jsx)(V.b,Object(i.a)(Object(i.a)({},a),{},{component:function(e){return t?Object(oe.jsx)(V.a,{to:"/"}):Object(oe.jsx)(n,Object(i.a)({},e))}}))},je=["isAuthenticated","component"],be=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ie.a)(e,je);return Object(oe.jsx)(V.b,Object(i.a)(Object(i.a)({},a),{},{component:function(e){return t?Object(oe.jsx)(n,Object(i.a)({},e)):Object(oe.jsx)(V.a,{to:"/login"})}}))},de=function(e){return{type:b,payload:e}},fe=function(e){return{type:d,payload:e}},me=function(e){return{type:f,payload:e}},Oe=function(e){return{type:m,payload:e}},xe=function(e){return{type:O,payload:e}},he=function(e){return{type:x,payload:e}},ge=function(e){return{type:h,payload:e}},ve=function(e){return{type:g,payload:e}},ye=function(){return{type:T}},ke=function(){return{type:L}},Ne=function(e){return{type:v,payload:e}},we=function(e){return{type:y,payload:e}},Ee=function(e){return{type:N,payload:e}},Pe=function(){return{type:F}},Ce=function(){return{type:w}},Ae=function(e){return{type:E,payload:e}},Se=function(){return{type:P}},Re=function(){return{type:A}},Te=function(e){return{type:_,payload:e}},Le=function(){return{type:S}},Ie=function(){return{type:R}},De=(n(20),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.foro})).tematicas;Object(a.useEffect)((function(){e(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee("tematica");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),n.ok&&t(Te(a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(oe.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light ",children:[Object(oe.jsx)("a",{className:"navbar-brand",href:"/",children:"NuestroForo"}),Object(oe.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(oe.jsx)("span",{className:"navbar-toggler-icon"})}),Object(oe.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:[Object(oe.jsx)("div",{className:"navbar-nav ",children:Object(oe.jsx)("button",{className:"btn btn-primary",onClick:function(){e(Le()),e(ye())},children:" Hacer una pregunta"})}),Object(oe.jsx)("div",{className:"navbar-nav",children:t.map((function(e){return Object(oe.jsxs)("a",{className:"btn btn-outline-primary margin-all",href:"/".concat(e.tematica),children:[" ",e.tematica," "]},e.id)}))}),Object(oe.jsx)("div",{className:"navbar-nav ml-auto",children:Object(oe.jsx)("button",{className:" btn btn-outline-danger",onClick:function(){e((function(e){localStorage.clear(),e(ae()),Y.a.fire(":)","Esperamos volverlo a ver pronto","info")}))},children:" Salir "})})]})]})}),Fe=function(e){var t=e.id,n=e.respuesta,a=Object(s.b)();return Object(oe.jsx)("div",{className:"card",children:Object(oe.jsxs)("div",{className:"card-body",children:[Object(oe.jsx)("p",{className:"card-text",children:n}),Object(oe.jsx)("button",{className:"btn btn-primary margin-all",onClick:function(){a(Le()),a(Ae(t))},children:" Editar respuesta "}),Object(oe.jsx)("button",{className:"btn btn-outline-danger margin-all",onClick:function(){a(Ae(t)),a({type:C}),a(Le())},children:" Eliminar respuesta "})]})})},_e=function(e){var t=e.id,n=e.pregunta,a=void 0===n?"":n,r=e.respuestas,c=void 0===r?[]:r,o=Object(s.b)();return Object(oe.jsx)("div",{className:"container",children:Object(oe.jsx)("div",{className:"card",children:Object(oe.jsxs)("div",{className:"card-body",children:[Object(oe.jsx)("h5",{className:"card-title",children:a}),Object(oe.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:"Respuestas"}),c.map((function(e){return Object(oe.jsx)(Fe,Object(i.a)({},e),e.id)})),Object(oe.jsx)("button",{className:"btn btn-primary margin-all",onClick:function(){o(Le()),o(we(t))},children:" Responder "}),Object(oe.jsx)("button",{className:"btn btn-primary margin-all",onClick:function(){o(Le()),o(ye()),o(we(t))},children:" Editar pregunta "}),Object(oe.jsx)("button",{className:"btn btn-outline-danger margin-all",onClick:function(){o(Le()),o({type:D}),o(we(t))},children:" Eliminar pregunta "})]})})})},He=n(31),Je=n.n(He),Ue={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Je.a.setAppElement("#root");var qe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).modalAbierto,n=Object(s.c)((function(e){return e.foro})),a=n.esPregunta,r=n.preguntaActiva,c=n.esEliminarPregunta,o=n.respuestaId,u=n.esEliminarRespuesta,i=n.tematicas,l=Object(s.c)((function(e){return e.auth})).uid,p=se({pregunta:"",respuesta:"",tematica:1}),j=Object(re.a)(p,3),b=j[0],d=j[1],f=j[2],m=b.pregunta,O=b.respuesta,x=b.tematica,h=function(){f(),e(Ie()),e(Re()),e(ke()),e({type:k}),e(Pe()),e(Se())},g=function(){var t;c&&(e(function(){var e=Object(Q.a)(K.a.mark((function e(t,n){var a,r,c,s;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().foro.preguntaActiva,e.prev=1,e.next=4,ee("pregunta/".concat(a),{},"DELETE");case 4:r=e.sent,c=r.json(),s=c.msg,r.ok&&(t(Ce()),Y.a.fire("Listo",s,"success")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),e(Ie()),e(Pe())),u&&(e((t=o,function(){var e=Object(Q.a)(K.a.mark((function e(n){var a,r,c,s,o,u;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("respuesta/".concat(t),{},"DELETE");case 3:return a=e.sent,e.next=6,a.json();case 6:if(r=e.sent,c=r.msg,!a.ok){e.next=18;break}return e.next=11,ee("pregunta");case 11:return s=e.sent,e.next=14,s.json();case 14:o=e.sent,u=o.preguntas,n(de(u)),Y.a.fire("Listo",c,"success");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}())),e(Ie()),e(Re()))};return Object(oe.jsx)("div",{children:Object(oe.jsx)(Je.a,{isOpen:t,onRequestClose:h,style:Ue,closeTimeoutMS:300,children:c?Object(oe.jsxs)("div",{className:"card",children:[Object(oe.jsx)("p",{className:"card-text",children:" Seguro que quieres eliminar la pregunta?"}),Object(oe.jsx)("button",{type:"button",className:"btn btn-danger",onClick:g,children:"Si"}),Object(oe.jsx)("button",{type:"button",className:"btn btn-lightr",onClick:h,children:"No"})]}):u?Object(oe.jsxs)("div",{className:"card",children:[Object(oe.jsx)("p",{className:"card-text",children:" Seguro que quieres eliminar la Respuesta?"}),Object(oe.jsx)("button",{type:"button",className:"btn btn-danger",onClick:g,children:"Si"}),Object(oe.jsx)("button",{type:"button",className:"btn btn-lightr",onClick:h,children:"No"})]}):Object(oe.jsxs)(oe.Fragment,{children:[a?null!==r?Object(oe.jsx)("h1",{children:" Editar pregunta"}):Object(oe.jsx)("h1",{children:" Nueva Pregunta"}):o?Object(oe.jsx)("h1",{children:" Editar respuesta"}):Object(oe.jsx)("h1",{children:" Nueva respuesta"}),Object(oe.jsx)("hr",{}),Object(oe.jsxs)("form",{className:"container",onSubmit:function(t){if(t.preventDefault(),a){if(""===m)return Y.a.fire("Ups...","La pregunta es obligatoria","error");r?e(function(e,t){return function(){var n=Object(Q.a)(K.a.mark((function n(a){var r,c;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ee("pregunta/".concat(e),{pregunta:t},"PUT");case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,r.ok&&(a(Ee(c)),Y.a.fire("Listo","La pregunta se actualizo satisfactoriamente","success")),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(r,m)):(console.log(x),e(function(e,t,n){return function(){var a=Object(Q.a)(K.a.mark((function a(r){var c,s,o;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ee("pregunta",{pregunta:e,usuarioId:t,tematicaId:n},"POST");case 3:return c=a.sent,a.next=6,c.json();case 6:s=a.sent,o=s.pregunta,c.ok&&(r(Ne(o)),Y.a.fire("Listo","La pregunta se creo satisfactoriamente","success")),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(m,l,x)),f(),e(Ie()),e(ke()))}else{if(""===O)return Y.a.fire("Ups...","La respuesta es obligatoria","error");e(o?function(e,t,n){return function(){var a=Object(Q.a)(K.a.mark((function a(r){var c,s,o;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ee("respuesta/".concat(t),{respuesta:e,idPre:n},"PUT");case 3:if(!a.sent.ok){a.next=14;break}return a.next=7,ee("pregunta");case 7:return c=a.sent,a.next=10,c.json();case 10:s=a.sent,o=s.preguntas,r(de(o)),Y.a.fire("Listo","La respuesta se actualizo satisfactoriamente","success");case 14:a.next=18;break;case 16:a.prev=16,a.t0=a.catch(0);case 18:case"end":return a.stop()}}),a,null,[[0,16]])})));return function(e){return a.apply(this,arguments)}}()}(O,o,r):function(e,t){return function(){var n=Object(Q.a)(K.a.mark((function n(a){var r,c,s;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ee("respuesta",{respuesta:e,preguntaId:t},"POST");case 3:if(!n.sent.ok){n.next=14;break}return n.next=7,ee("pregunta");case 7:return r=n.sent,n.next=10,r.json();case 10:c=n.sent,s=c.preguntas,a(de(s)),Y.a.fire("Listo","La respuesta se creo satisfactoriamente","success");case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(e){return n.apply(this,arguments)}}()}(O,r))}f(),e(Ie()),e(Se())},children:[a&&Object(oe.jsxs)("div",{className:"form-group",children:[Object(oe.jsx)("label",{children:"Pregunta"}),Object(oe.jsx)("input",{type:"text",className:"form-control",placeholder:"Escribir toda la pregunta",name:"pregunta",value:m,onChange:d,autoComplete:"off"}),Object(oe.jsx)("label",{children:"Escojer tematica"}),Object(oe.jsx)("select",{className:"form-control",onChange:d,value:x,name:"tematica",children:i.map((function(e){return Object(oe.jsx)("option",{value:e.id,children:e.tematica},e.id)}))})]}),a?Object(oe.jsx)("hr",{}):Object(oe.jsxs)("div",{className:"form-group",children:[Object(oe.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Respuesta",rows:"5",name:"respuesta",value:O,onChange:d}),Object(oe.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Respuesta con sumo detalle"})]}),Object(oe.jsx)("div",{className:"d-flex justify-content-between",children:Object(oe.jsx)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:"Enviar"})})]})]})})})},Me=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,a,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("pregunta");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.preguntas,n.ok&&t(de(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.foro})).preguntas;return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(De,{}),Object(oe.jsx)("div",{className:"container",children:Object(oe.jsx)("h1",{children:"Foro"})}),t.map((function(e){return Object(oe.jsx)(_e,Object(i.a)({},e),e.id)})),Object(oe.jsx)(qe,{})]})},ze=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,a,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("pregunta?tematica=4");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.preguntas,n.ok&&t(xe(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.foro})).preguntas;return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(De,{}),Object(oe.jsxs)("div",{className:"container",children:[Object(oe.jsx)("h1",{children:"Criptomonedas"}),t.map((function(e){return Object(oe.jsx)(_e,Object(i.a)({},e),e.id)})),Object(oe.jsx)(qe,{})]})]})},Ge=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,a,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("pregunta?tematica=1");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.preguntas,n.ok&&t(fe(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.foro})).preguntas;return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(De,{}),Object(oe.jsxs)("div",{className:"container",children:[Object(oe.jsx)("h1",{children:"Deportes"}),t.map((function(e){return Object(oe.jsx)(_e,Object(i.a)({},e),e.id)})),Object(oe.jsx)(qe,{})]})]})},Be=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,a,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("pregunta?tematica=2");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.preguntas,n.ok&&t(me(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.foro})).preguntas;return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(De,{}),Object(oe.jsxs)("div",{className:"container",children:[Object(oe.jsx)("h1",{children:"Fotografia"}),t.map((function(e){return Object(oe.jsx)(_e,Object(i.a)({},e),e.id)})),Object(oe.jsx)(qe,{})]})]})},Ve=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,a,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("pregunta?tematica=5");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.preguntas,n.ok&&t(he(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.foro})).preguntas;return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(De,{}),Object(oe.jsxs)("div",{className:"container",children:[Object(oe.jsx)("h1",{children:"Node"}),t.map((function(e){return Object(oe.jsx)(_e,Object(i.a)({},e),e.id)})),Object(oe.jsx)(qe,{})]})]})},Xe=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,a,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("pregunta?tematica=6");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.preguntas,n.ok&&t(ge(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.foro})).preguntas;return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(De,{}),Object(oe.jsxs)("div",{className:"container",children:[Object(oe.jsx)("h1",{children:"React"}),t.map((function(e){return Object(oe.jsx)(_e,Object(i.a)({},e),e.id)})),Object(oe.jsx)(qe,{})]})]})},Ke=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,a,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("pregunta?tematica=3");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.preguntas,n.ok&&t(Oe(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.foro})).preguntas;return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(De,{}),Object(oe.jsxs)("div",{className:"container",children:[Object(oe.jsx)("h1",{children:"Tecnologia"}),t.map((function(e){return Object(oe.jsx)(_e,Object(i.a)({},e),e.id)})),Object(oe.jsx)(qe,{})]})]})},Qe=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,a,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("pregunta?tematica=9");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.preguntas,n.ok&&t(ve(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.foro})).preguntas;return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(De,{}),Object(oe.jsxs)("div",{className:"container",children:[Object(oe.jsx)("h1",{children:"Random"}),t.map((function(e){return Object(oe.jsx)(_e,Object(i.a)({},e),e.id)})),Object(oe.jsx)(qe,{})]})]})},We=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,n.ok?(localStorage.setItem("token",a.token),t(te({uid:a.uid,nombre:a.nombre}))):t(ne());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(oe.jsx)("h5",{children:"Espere...."}):Object(oe.jsx)(B.a,{children:Object(oe.jsx)("div",{children:Object(oe.jsxs)(V.d,{children:[Object(oe.jsx)(pe,{exact:!0,path:"/login",component:ue,isAuthenticated:!!r}),Object(oe.jsx)(be,{exact:!0,path:"/",component:Me,isAuthenticated:!!r}),Object(oe.jsx)(be,{path:"/Deportes",component:Ge,isAuthenticated:!!r}),Object(oe.jsx)(be,{exact:!0,path:"/Fotografia",component:Be,isAuthenticated:!!r}),Object(oe.jsx)(be,{exact:!0,path:"/Tecnolog\xeda",component:Ke,isAuthenticated:!!r}),Object(oe.jsx)(be,{exact:!0,path:"/Criptomonedas",component:ze,isAuthenticated:!!r}),Object(oe.jsx)(be,{exact:!0,path:"/NodeJs",component:Ve,isAuthenticated:!!r}),Object(oe.jsx)(be,{exact:!0,path:"/ReactJs",component:Xe,isAuthenticated:!!r}),Object(oe.jsx)(be,{exact:!0,path:"/Random",component:Qe,isAuthenticated:!!r}),Object(oe.jsx)(V.a,{to:"/"})]})})})},Ye=function(){return Object(oe.jsx)(s.a,{store:G,children:Object(oe.jsx)(We,{})})};c.a.render(Object(oe.jsx)(Ye,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.9b615c74.chunk.js.map