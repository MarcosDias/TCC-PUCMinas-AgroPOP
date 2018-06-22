webpackJsonp([5],{"5BXs":function(e,n,i){var a={"./BaseBackOffice":["iObF",3],"./BaseBackOffice.vue":["iObF",3],"./BaseStore":["sqMQ",1],"./BaseStore.vue":["sqMQ",1],"./store/Auth":["wDSJ",2],"./store/Auth.vue":["wDSJ",2],"./store/Home":["94i+",0],"./store/Home.vue":["94i+",0]};function t(e){var n=a[e];return n?i.e(n[1]).then(function(){return i(n[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}t.keys=function(){return Object.keys(a)},t.id="5BXs",e.exports=t},"7hJO":function(e,n){},"7zck":function(e,n){},NHnr:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=i("7+uW"),t={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"App"},t,!1,function(e){i("o8nZ")},null,null).exports,o=i("/ocq"),s=i("Dd8w"),u=i.n(s),d=function(e){var n=e.file,a=e.name,t=e.path,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u()({},r,{component:function(){return i("5BXs")("./"+n)},name:a,path:t})};a.a.use(o.a);var m=d({file:"BaseStore",path:"/"},{children:[d({file:"store/Home",name:"Home",path:""}),d({file:"store/Auth",name:"Auth",path:"login"})]}),l=d({file:"BaseBackOffice",path:"/backoffice/"},{children:[],meta:{requiresLogin:!0}}),c=new o.a({mode:"hash",routes:[m,{path:"*",redirect:"/"},l,{path:"*",redirect:"/backoffice"}]}),k=i("3EgV"),v=i.n(k),f=(i("7zck"),i("7hJO"),i("NYxO")),p=i("bOdI"),g=i.n(p),S=i("Xxa5"),N=i.n(S),h=i("exGp"),b=i.n(h),y=i("u1/p"),w=i("rp1p"),F=i("+dIz");var E,O,I,T,A,D,V,_=new y.a({link:new w.a({uri:(E="https://agropop-api.herokuapp.com/graphql",E)}),cache:new F.a,connectToDevTools:!0}),L=i("meMj"),R=this,B=(O=b()(N.a.mark(function e(n){var i,a=n.commit;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.query({query:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"allCategorias"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nome"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ordem"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subcategorias"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nome"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subcategorias"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nome"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:247,source:{body:"\n      {\n        allCategorias {\n          id\n          nome\n          ordem\n          subcategorias {\n            id\n            nome\n            subcategorias {\n              id\n              nome\n            }\n          }\n        }\n      }\n    ",name:"GraphQL request",locationOffset:{line:1,column:1}}}}});case 2:i=e.sent,a(L.a,i.data.allCategorias);case 4:case"end":return e.stop()}},e,R)})),function(e){return O.apply(this,arguments)}),G=g()({},L.a,B),q=g()({},L.a,function(e){return e.menu}),x=g()({},L.a,function(e,n){e.menu=n}),U=i("mvHQ"),$=i.n(U),C=i("nT+Z"),M=this,H=function(){var e=b()(N.a.mark(function e(n,i){var a,t=n.commit;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.mutate({mutation:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}},{kind:"Argument",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isStaff"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isSuperuser"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:289,source:{body:"\n      mutation($name: String!, $email: String!, $password: String!) {\n        createUser(name: $name, email: $email, password: $password) {\n          user {\n            id\n            email,\n            name,\n            isStaff,\n            isSuperuser\n          }\n        }\n      }\n    ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},variables:i}).catch(function(e){t(C.d)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,M)}));return function(n,i){return e.apply(this,arguments)}}(),J=(T=b()(N.a.mark(function e(n,i){var a,t=n.commit;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.mutate({mutation:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tokenAuth"},arguments:[{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}},{kind:"Argument",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"token"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isStaff"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isSuperuser"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:272,source:{body:"\n      mutation($email: String!, $password: String!) {\n        tokenAuth(email: $email, password: $password) {\n          token\n          user {\n            id\n            email\n            name\n            isStaff\n            isSuperuser\n          }\n        }\n      }\n    ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},variables:i}).catch(function(e){t(C.e)});case 2:a=e.sent,localStorage.setItem("token",a.data.tokenAuth.token),localStorage.setItem("user",$()(a.data.tokenAuth.user)),t(C.f,a.data.tokenAuth);case 6:case"end":return e.stop()}},e,M)})),function(e,n){return T.apply(this,arguments)}),Q=(A=b()(N.a.mark(function e(n){var i=n.commit;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token"),localStorage.removeItem("user"),i(C.g);case 3:case"end":return e.stop()}},e,M)})),function(e){return A.apply(this,arguments)});var j,z,X={actions:(I={},g()(I,C.a,H),g()(I,C.f,J),g()(I,C.g,Q),I),getters:(D={},g()(D,C.c,function(e){return e.isLoggedIn}),g()(D,C.b,function(e){return e.user}),g()(D,C.e,function(e){return e.msgErrorLogin}),D),mutations:(V={},g()(V,C.d,function(e){e.msgErrorCreateUser="Erro, ocorreu um problema no cadastramento, tente novamente!"}),g()(V,C.e,function(e){e.msgErrorLogin="Erro, utilize uma credencial válida!"}),g()(V,C.f,function(e,n){var i=n.token,a=n.user;e.isLoggedIn=!0,e.user=a,e.token=i}),g()(V,C.g,function(e){e.isLoggedIn=!1,e.user=null,e.token=null}),V),namespaced:!0,state:{isLoggedIn:!!localStorage.getItem("token"),token:localStorage.getItem("token"),user:(j="user",z=localStorage.getItem(j),z?JSON.parse(z):null),msgErrorLogin:"",msgErrorCreateUser:""}};a.a.use(f.a);var Z={auth:X},P=new f.a.Store({state:{menu:[]},actions:G,getters:q,mutations:x,modules:Z});a.a.use(v.a,{theme:{primary:"#558B2F",secondary:"#827717",accent:"#e6e600",error:"#f44336",warning:"#ffeb3b",info:"#2196f3",success:"#4caf50"}}),c.beforeEach(function(e,n,i){var a=P;!e.matched.some(function(e){return e.meta.requiresLogin})||a.state.auth.isLoggedIn&&a.state.auth.user&&a.state.auth.user.isStaff?i():i("/")}),a.a.config.productionTip=!1,new a.a({el:"#app",router:c,store:P,components:{App:r},template:"<App/>"})},meMj:function(e,n,i){"use strict";i.d(n,"a",function(){return a});var a="GET_MENU"},"nT+Z":function(e,n,i){"use strict";i.d(n,"a",function(){return a}),i.d(n,"c",function(){return t}),i.d(n,"b",function(){return r}),i.d(n,"f",function(){return o}),i.d(n,"g",function(){return s}),i.d(n,"e",function(){return u}),i.d(n,"d",function(){return d});var a="CREATE_USER",t="IS_LOGGED_IN",r="GET_USER",o="SIGNIN_USER",s="SIGNOUT_USER",u="MSG_ERROR_LOGIN",d="MSG_ERROR_CREATE_USER"},o8nZ:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.35e5cfc8d4b8c316ab66.js.map