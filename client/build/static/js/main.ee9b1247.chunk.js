(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(e,t,a){e.exports=a(546)},278:function(e,t,a){},533:function(e,t,a){},546:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(4),c=a.n(l),i=(a(278),a(60)),o=a(174),u=a.n(o),s=a(243),m=a(23),d=a.n(m),p="login_user",f="register_user",E="auth_user",h="logout_user",y="add_to_cart_user",b="get_cart_items_user",g="remove_cart_item_user",v="on_success_buy_user",O="/api/users";var j=a(27),w=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(l){var c=Object(j.c)(function(e){return e.user}),i=Object(j.b)();return Object(r.useEffect)(function(){i(function(){var e=d.a.get("".concat(O,"/auth")).then(function(e){return e.data});return{type:E,payload:e}}()).then(function(){var e=Object(s.a)(u.a.mark(function e(r){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!r.payload.isAuth;case 2:if(!e.sent){e.next=6;break}t&&l.history.push("/login"),e.next=7;break;case 6:a&&!r.payload.isAdmin?l.history.push("/"):!1===t&&l.history.push("/");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},[i,l.history,c.googleAuth]),n.a.createElement(e,Object.assign({},l,{user:c}))}},x=a(84),S=a(50),P=a(14),_=a(548),k=a(38),D=a(13),I=a(85),C=a(547);var N=function(e){return n.a.createElement("div",null,n.a.createElement(C.a,{autoplay:!0},e.images.map(function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("img",{style:{width:"100%",maxHeight:"150px"},src:"http://localhost:5000/".concat(e),alt:"productImage"}))})))},A=a(551),T=a(557),q=A.a.Panel;var F=function(e){var t=Object(r.useState)([]),a=Object(P.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",null,n.a.createElement(A.a,{defaultActiveKey:["0"]},n.a.createElement(q,{header:"Continents",key:"1"},e.list&&e.list.map(function(t,a){return n.a.createElement(n.a.Fragment,{key:a},n.a.createElement(T.a,{onChange:function(){return function(t){var a=l.indexOf(t),r=Object(S.a)(l);-1===a?r.push(t):r.splice(a,1),c(r),e.handleFilters(r)}(t._id)},type:"checkbox",checked:-1!==l.indexOf(t._id)}),"\xa0\xa0",n.a.createElement("span",null,t.name),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")}))))},B=a(555),R=A.a.Panel;var L=function(e){var t=Object(r.useState)("0"),a=Object(P.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",null,n.a.createElement(A.a,{defaultActiveKey:["0"]},n.a.createElement(R,{header:"price",key:"1"},n.a.createElement(B.a.Group,{onChange:function(t){c(t.target.value),e.handleFilters(t.target.value)},value:l},e.list&&e.list.map(function(e){return n.a.createElement(B.a,{key:e._id,value:"".concat(e._id)},e.name)})))))},M=[{_id:0,name:"Any",array:[]},{_id:1,name:"$0 to $199",array:[0,199]},{_id:2,name:"$200 to $249",array:[200,249]},{_id:3,name:"$250 to $279",array:[250,279]},{_id:4,name:"$280 to $299",array:[280,299]},{_id:5,name:"More than $300",array:[300,15e5]}],$=[{_id:1,name:"Africa"},{_id:2,name:"Europe"},{_id:3,name:"Asia"},{_id:4,name:"North America"},{_id:5,name:"South America"},{_id:6,name:"Australia"},{_id:7,name:"Antarctica"}],z=a(553),U=z.a.Search;var W=function(e){var t=Object(r.useState)(""),a=Object(P.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",null,n.a.createElement(U,{value:l,onChange:function(t){c(t.currentTarget.value),e.refreshFunction(t.currentTarget.value)},placeholder:"Search By Typing..."}))};function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var V=_.a.Meta;var H=function(){var e=Object(r.useState)([]),t=Object(P.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(0),i=Object(P.a)(c,2),o=i[0],u=i[1],s=Object(r.useState)(8),m=Object(P.a)(s,2),p=m[0],f=(m[1],Object(r.useState)()),E=Object(P.a)(f,2),h=E[0],y=E[1],b=Object(r.useState)(""),g=Object(P.a)(b,2),v=g[0],O=g[1],j=Object(r.useState)({continents:[],price:[]}),w=Object(P.a)(j,2),C=w[0],A=w[1];Object(r.useEffect)(function(){T({skip:o,limit:p})},[]);var T=function(e){d.a.post("/api/product/getProducts",e).then(function(t){t.data.success?(e.loadMore?l([].concat(Object(S.a)(a),Object(S.a)(t.data.products))):l(t.data.products),y(t.data.postSize)):alert("Failed to fectch product datas")})},q=a.map(function(e,t){return n.a.createElement(k.a,{lg:6,md:8,xs:24},n.a.createElement(_.a,{hoverable:!0,cover:n.a.createElement("a",{href:"/product/".concat(e._id)}," ",n.a.createElement(N,{images:e.images}))},n.a.createElement(V,{title:e.title,description:"$".concat(e.price)})))}),B=function(e,t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},C);if(a[t]=e,"price"===t){var r=function(e){var t=M,a=[];for(var r in t)t[r]._id===parseInt(e,10)&&(a=t[r].array);return console.log("array",a),a}(e);a[t]=r}console.log(a),function(e){T({skip:0,limit:p,filters:e}),u(0)}(a),A(a)};return n.a.createElement("div",{style:{width:"75%",margin:"3rem auto"}},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",null,"  Let's Travel Anywhere  ",n.a.createElement(D.a,{type:"rocket"}),"  ")),n.a.createElement(I.a,{gutter:[16,16]},n.a.createElement(k.a,{lg:12,xs:24},n.a.createElement(F,{list:$,handleFilters:function(e){return B(e,"continents")}})),n.a.createElement(k.a,{lg:12,xs:24},n.a.createElement(L,{list:M,handleFilters:function(e){return B(e,"price")}}))),n.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",margin:"1rem auto"}},n.a.createElement(W,{refreshFunction:function(e){var t={skip:0,limit:p,filters:C,searchTerm:e};u(0),O(e),T(t)}})),0===a.length?n.a.createElement("div",{style:{display:"flex",height:"300px",justifyContent:"center",alignItems:"center"}},n.a.createElement("h2",null,"No post yet...")):n.a.createElement("div",null,n.a.createElement(I.a,{gutter:[16,16]},q)),n.a.createElement("br",null),n.a.createElement("br",null),h>=p&&n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("button",{onClick:function(){var e=o+p;T({skip:e,limit:p,loadMore:!0,filters:C,searchTerm:v}),u(e)}},"Load More")))},J=a(135),G=a(34),K=a(550),Q=a(549),Y=a(182),Z=K.a.Title;var ee=Object(i.f)(function(e){var t=Object(j.b)(),a=!!localStorage.getItem("rememberMe"),l=Object(r.useState)(""),c=Object(P.a)(l,2),i=c[0],o=c[1],u=Object(r.useState)(a),s=Object(P.a)(u,2),m=s[0],f=s[1],E=function(){f(!m)},h=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return n.a.createElement(J.a,{initialValues:{email:h,password:""},validationSchema:G.object().shape({email:G.string().email("Email is invalid").required("Email is required"),password:G.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout(function(){var r={email:a.email,password:a.password};t(function(e){var t=d.a.post("".concat(O,"/login"),e).then(function(e){return e.data});return{type:p,payload:t}}(r)).then(function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===m?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):o("Check out your Account or Password again")}).catch(function(e){o("Check out your Account or Password again"),setTimeout(function(){o("")},3e3)}),n(!1)},500)}},function(e){var t=e.values,a=e.touched,r=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,o=e.handleBlur,u=e.handleSubmit;return e.handleReset,n.a.createElement("div",{className:"app"},n.a.createElement(Z,{level:2},"Log In"),n.a.createElement("form",{onSubmit:u,style:{width:"350px"}},n.a.createElement(Q.a.Item,{required:!0},n.a.createElement(z.a,{id:"email",prefix:n.a.createElement(D.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:t.email,onChange:c,onBlur:o,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(Q.a.Item,{required:!0},n.a.createElement(z.a,{id:"password",prefix:n.a.createElement(D.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:o,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),i&&n.a.createElement("label",null,n.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},i)),n.a.createElement(Q.a.Item,null,n.a.createElement(T.a,{id:"rememberMe",onChange:E,checked:m},"Remember me"),n.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),n.a.createElement("div",null,n.a.createElement(Y.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:l,onSubmit:u},"Log in")),"Or ",n.a.createElement("a",{href:"/register"},"register now!"))))})}),te=a(100),ae=a.n(te),re={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},ne={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var le=function(e){var t=Object(j.b)();return n.a.createElement(J.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:G.object().shape({name:G.string().required("Name is required"),lastName:G.string().required("Last Name is required"),email:G.string().email("Email is invalid").required("Email is required"),password:G.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:G.string().oneOf([G.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout(function(){var r={email:a.email,password:a.password,name:a.name,lastname:a.lastname,image:"http://gravatar.com/avatar/".concat(ae()().unix(),"?d=identicon")};t(function(e){var t=d.a.post("".concat(O,"/register"),e).then(function(e){return e.data});return{type:f,payload:t}}(r)).then(function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)}),n(!1)},500)}},function(e){var t=e.values,a=e.touched,r=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return e.handleReset,n.a.createElement("div",{className:"app"},n.a.createElement("h2",null,"Sign up"),n.a.createElement(Q.a,Object.assign({style:{minWidth:"375px"}},re,{onSubmit:o}),n.a.createElement(Q.a.Item,{required:!0,label:"Name"},n.a.createElement(z.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:c,onBlur:i,className:r.name&&a.name?"text-input error":"text-input"}),r.name&&a.name&&n.a.createElement("div",{className:"input-feedback"},r.name)),n.a.createElement(Q.a.Item,{required:!0,label:"Last Name"},n.a.createElement(z.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:t.lastName,onChange:c,onBlur:i,className:r.lastName&&a.lastName?"text-input error":"text-input"}),r.lastName&&a.lastName&&n.a.createElement("div",{className:"input-feedback"},r.lastName)),n.a.createElement(Q.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:r.email&&a.email?"error":"success"},n.a.createElement(z.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:c,onBlur:i,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(Q.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:r.password&&a.password?"error":"success"},n.a.createElement(z.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:i,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),n.a.createElement(Q.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},n.a.createElement(z.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:c,onBlur:i,className:r.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),r.confirmPassword&&a.confirmPassword&&n.a.createElement("div",{className:"input-feedback"},r.confirmPassword)),n.a.createElement(Q.a.Item,ne,n.a.createElement(Y.a,{onClick:o,type:"primary",disabled:l},"Submit"))))})},ce=a(552);ce.a.SubMenu,ce.a.ItemGroup;var ie=function(e){return n.a.createElement(ce.a,{mode:e.mode})},oe=a(558);var ue=Object(i.f)(function(e){var t=Object(j.c)(function(e){return e.user});return t.userData&&!t.userData.isAuth?n.a.createElement(ce.a,{mode:e.mode},n.a.createElement(ce.a.Item,{key:"mail"},n.a.createElement("a",{href:"/login"},"Signin")),n.a.createElement(ce.a.Item,{key:"app"},n.a.createElement("a",{href:"/register"},"Signup"))):n.a.createElement(ce.a,{mode:e.mode},n.a.createElement(ce.a.Item,{key:"history"},n.a.createElement("a",{href:"/history"},"History")),n.a.createElement(ce.a.Item,{key:"upload"},n.a.createElement("a",{href:"/product/upload"},"Upload")),n.a.createElement(ce.a.Item,{key:"cart",style:{paddingBottom:3}},n.a.createElement(oe.a,{count:t.userData&&t.userData.cart.length},n.a.createElement("a",{href:"/user/cart",style:{marginRight:-22,color:"#667777"}},n.a.createElement(D.a,{type:"shopping-cart",style:{fontSize:30,marginBottom:3}})))),n.a.createElement(ce.a.Item,{key:"logout"},n.a.createElement("a",{onClick:function(){d.a.get("".concat(O,"/logout")).then(function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")})}},"Logout")))}),se=a(554);a(533);var me=function(){var e=Object(r.useState)(!1),t=Object(P.a)(e,2),a=t[0],l=t[1];return n.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},n.a.createElement("div",{className:"menu__logo"},n.a.createElement("a",{href:"/"},n.a.createElement("span",null,"\ud83c\udf0e")," Just Browsin'")),n.a.createElement("div",{className:"menu__container"},n.a.createElement("div",{className:"menu_left"},n.a.createElement(ie,{mode:"horizontal"})),n.a.createElement("div",{className:"menu_rigth"},n.a.createElement(ue,{mode:"horizontal"})),n.a.createElement(Y.a,{className:"menu__mobile-button",type:"primary",onClick:function(){l(!0)}},n.a.createElement(D.a,{type:"align-right"})),n.a.createElement(se.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){l(!1)},visible:a},n.a.createElement(ie,{mode:"inline"}),n.a.createElement(ue,{mode:"inline"}))))};var de=function(){return n.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},n.a.createElement("p",null," \xa9 Copyright 2020 by GO Lee "))},pe=a(268);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var he=function(e){var t=Object(r.useState)([]),a=Object(P.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(pe.a,{onDrop:function(t){var a=new FormData;a.append("file",t[0]),d.a.post("/api/product/uploadImage",a,{header:{"content-type":"multipart/form-data"}}).then(function(t){t.data.success?(c([].concat(Object(S.a)(l),[t.data.image])),e.refreshFunction([].concat(Object(S.a)(l),[t.data.image]))):alert("Failed to save the Image in Server")})},multiple:!1,maxSize:8e8},function(e){var t=e.getRootProps,a=e.getInputProps;return n.a.createElement("div",Object.assign({style:{width:"300px",height:"240px",border:"1px solid lightgray",display:"flex",alignItems:"center",justifyContent:"center"}},t()),console.log("getRootProps",Ee({},t())),console.log("getInputProps",Ee({},a())),n.a.createElement("input",a()),n.a.createElement(D.a,{type:"plus",style:{fontSize:"3rem"}}))}),n.a.createElement("div",{style:{display:"flex",width:"350px",height:"240px",overflowX:"scroll"}},l.map(function(t,a){return n.a.createElement("div",{onClick:function(){return function(t){var a=l.indexOf(t),r=Object(S.a)(l);r.splice(a,1),c(r),e.refreshFunction(r)}(t)}},n.a.createElement("img",{style:{minWidth:"300px",width:"300px",height:"240px"},src:"http://localhost:5000/".concat(t),alt:"productImg-".concat(a)}))})))},ye=K.a.Title,be=z.a.TextArea,ge=[{key:1,value:"Africa"},{key:2,value:"Europe"},{key:3,value:"Asia"},{key:4,value:"North America"},{key:5,value:"South America"},{key:6,value:"Australia"},{key:7,value:"Antarctica"}];var ve=function(e){var t=Object(r.useState)(""),a=Object(P.a)(t,2),l=a[0],c=a[1],i=Object(r.useState)(""),o=Object(P.a)(i,2),u=o[0],s=o[1],m=Object(r.useState)(0),p=Object(P.a)(m,2),f=p[0],E=p[1],h=Object(r.useState)(1),y=Object(P.a)(h,2),b=y[0],g=y[1],v=Object(r.useState)([]),O=Object(P.a)(v,2),j=O[0],w=O[1],x=function(t){if(t.preventDefault(),!l||!u||!f||!b||!j)return alert("fill all the fields first!");var a={writer:e.user.userData._id,title:l,description:u,price:f,images:j,continents:b};d.a.post("/api/product/uploadProduct",a).then(function(t){t.data.success?(alert("Product Successfully Uploaded"),e.history.push("/")):alert("Failed to upload Product")})};return n.a.createElement("div",{style:{maxWidth:"700px",margin:"2rem auto"}},n.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},n.a.createElement(ye,{level:2}," Upload Travel Product")),n.a.createElement(Q.a,{onSubmit:x},n.a.createElement(he,{refreshFunction:function(e){w(e)}}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Title"),n.a.createElement(z.a,{onChange:function(e){c(e.currentTarget.value)},value:l}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Description"),n.a.createElement(be,{onChange:function(e){s(e.currentTarget.value)},value:u}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Price($)"),n.a.createElement(z.a,{onChange:function(e){E(e.currentTarget.value)},value:f,type:"number"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("select",{onChange:function(e){g(e.currentTarget.value)},value:b},ge.map(function(e){return n.a.createElement("option",{key:e.key,value:e.key},e.value," ")})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(Y.a,{onClick:x},"Submit")))},Oe=a(261),je=a.n(Oe);var we=function(e){var t=Object(r.useState)([]),a=Object(P.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)(function(){if(e.detail.images&&e.detail.images.length>0){var t=[];e.detail.images&&e.detail.images.map(function(e){t.push({original:"http://localhost:5000/".concat(e),thumbnail:"http://localhost:5000/".concat(e)})}),c(t)}},[e.detail]),n.a.createElement("div",null,n.a.createElement(je.a,{items:l}))},xe=a(559);var Se=function(e){var t=Object(r.useState)({}),a=Object(P.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)(function(){c(e.detail)},[e.detail]),n.a.createElement("div",null,n.a.createElement(xe.a,{title:"Product Info"},n.a.createElement(xe.a.Item,{label:"Price"}," ",l.price),n.a.createElement(xe.a.Item,{label:"Sold"},l.sold),n.a.createElement(xe.a.Item,{label:"View"}," ",l.views),n.a.createElement(xe.a.Item,{label:"Description"}," ",l.description)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement(Y.a,{size:"large",shape:"round",type:"danger",onClick:function(){e.addToCart(e.detail._id)}},"Add to Cart")))};var Pe=function(e){var t=Object(j.b)(),a=e.match.params.productId,l=Object(r.useState)([]),c=Object(P.a)(l,2),i=c[0],o=c[1];return Object(r.useEffect)(function(){d.a.get("/api/product/products_by_id?id=".concat(a,"&type=single")).then(function(e){o(e.data[0])})},[]),n.a.createElement("div",{className:"postPage",style:{width:"100%",padding:"3rem 4rem"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("h1",null,i.title)),n.a.createElement("br",null),n.a.createElement(I.a,{gutter:[16,16]},n.a.createElement(k.a,{lg:12,xs:24},n.a.createElement(we,{detail:i})),n.a.createElement(k.a,{lg:12,xs:24},n.a.createElement(Se,{addToCart:function(e){t(function(e){var t=d.a.get("".concat(O,"/addToCart?productId=").concat(e)).then(function(e){return e.data});return{type:y,payload:t}}(e))},detail:i}))))};var _e=function(e){var t=function(e){if(e.length>0){var t=e[0];return"http://localhost:5000/".concat(t)}};return n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Product Image"),n.a.createElement("th",null,"Product Quantity"),n.a.createElement("th",null,"Product Price"),n.a.createElement("th",null,"Remove from Cart"))),n.a.createElement("tbody",null,e.products&&e.products.map(function(a){return n.a.createElement("tr",{key:a._id},n.a.createElement("td",null,n.a.createElement("img",{style:{width:"70px"},alt:"product",src:t(a.images)})),n.a.createElement("td",null,a.quantity," EA"),n.a.createElement("td",null,"$ ",a.price," "),n.a.createElement("td",null,n.a.createElement("button",{onClick:function(){return e.removeItem(a._id)}},"Remove ")," "))}))))},ke=a(556),De=a(86),Ie=a(262),Ce=a(263),Ne=a(269),Ae=a(264),Te=a(270),qe=a(265),Fe=a.n(qe),Be=function(e){function t(){return Object(Ie.a)(this,t),Object(Ne.a)(this,Object(Ae.a)(t).apply(this,arguments))}return Object(Te.a)(t,e),Object(Ce.a)(t,[{key:"render",value:function(){var e=this,t=this.props.toPay;return n.a.createElement(Fe.a,{env:"sandbox",client:{sandbox:"AelMA7rUdxce2INjEX1y9KQ47L4J8Idv7rIROe3if2vnMqsIkIz5FFUvA5g-cZiRCnRl3X2EAZljDxWw",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.onSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"large",color:"blue",shape:"rect",label:"checkout"}})}}]),t}(n.a.Component);var Re=function(e){var t=Object(j.b)(),a=Object(r.useState)(0),l=Object(P.a)(a,2),c=l[0],i=l[1],o=Object(r.useState)(!1),u=Object(P.a)(o,2),s=u[0],m=u[1],p=Object(r.useState)(!1),f=Object(P.a)(p,2),E=f[0],h=f[1];Object(r.useEffect)(function(){var a=[];e.user.userData&&e.user.userData.cart&&e.user.userData.cart.length>0&&(e.user.userData.cart.forEach(function(e){a.push(e.id)}),t(function(e,t){var a=d.a.get("/api/product/products_by_id?id=".concat(e,"&type=array")).then(function(e){return t.forEach(function(t){e.data.forEach(function(a,r){t.id===a._id&&(e.data[r].quantity=t.quantity)})}),e.data});return{type:b,payload:a}}(a,e.user.userData.cart)).then(function(e){e.payload.length>0&&y(e.payload)}))},[e.user.userData]);var y=function(e){var t=0;e.map(function(e){t+=parseInt(e.price,10)*e.quantity}),i(t),m(!0)};return n.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},n.a.createElement("h1",null,"Cart ",n.a.createElement("span",null,"\ud83d\uded2")),n.a.createElement("div",null,n.a.createElement(_e,{products:e.user.cartDetail,removeItem:function(e){t(function(e){var t=d.a.get("/api/users/removeFromCart?_id=".concat(e)).then(function(e){return e.data.cart.forEach(function(t){e.data.cartDetail.forEach(function(a,r){t.id===a._id&&(e.data.cartDetail[r].quantity=t.quantity)})}),e.data});return{type:g,payload:t}}(e)).then(function(e){e.payload.cartDetail.length<=0?m(!1):y(e.payload.cartDetail)})}}),s?n.a.createElement("div",{style:{marginTop:"3rem"}},n.a.createElement("h2",null,"Total amount: $",c," ")):E?n.a.createElement(ke.a,{status:"success",title:"Successfully Purchased Items"}):n.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}},n.a.createElement("br",null),n.a.createElement(De.a,{description:!1}),n.a.createElement("p",null,"Nothing's Added Yet"))),s&&n.a.createElement(Be,{toPay:c,onSuccess:function(a){t(function(e){var t=d.a.post("".concat(O,"/successBuy"),e).then(function(e){return e.data});return{type:v,payload:t}}({cartDetail:e.user.cartDetail,paymentData:a})).then(function(e){e.payload.success&&(h(!0),m(!1))})},transactionError:function(){console.log("Paypal error")},transactionCanceled:function(){console.log("Transaction canceled")}}))};var Le=function(e){return n.a.createElement("div",{style:{width:"80%",margin:"3rem auto"}},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h1",null,"History")),n.a.createElement("br",null),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Payment Id"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Quantity"),n.a.createElement("th",null,"Date of Purchase"))),n.a.createElement("tbody",null,e.user.userData&&e.user.userData.history&&e.user.userData.history.map(function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.id),n.a.createElement("td",null,e.price),n.a.createElement("td",null,e.quantity),n.a.createElement("td",null,e.dateOfPurchase))}))))};var Me=function(){return n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(me,null),n.a.createElement("div",{style:{paddingTop:"75px",minHeight:"calc(100vh - 80px)"}},n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:w(H,null)}),n.a.createElement(i.a,{exact:!0,path:"/login",component:w(ee,!1)}),n.a.createElement(i.a,{exact:!0,path:"/register",component:w(le,!1)}),n.a.createElement(i.a,{exact:!0,path:"/product/upload",component:w(ve,!0)}),n.a.createElement(i.a,{exact:!0,path:"/product/:productId",component:w(Pe,null)}),n.a.createElement(i.a,{exact:!0,path:"/user/cart",component:w(Re,!0)}),n.a.createElement(i.a,{exact:!0,path:"/history",component:w(Le,!0)}))),n.a.createElement(de,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=a(95),ze=a(71);function Ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function We(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ue(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ue(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Xe=Object(ze.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return We({},e,{register:t.payload});case p:return We({},e,{loginSucces:t.payload});case E:return We({},e,{userData:t.payload});case h:return We({},e);case y:return We({},e,{userData:We({},e.userData,{cart:t.payload})});case b:return We({},e,{cartDetail:t.payload});case g:return We({},e,{cartDetail:t.payload.cartDetail,userData:We({},e.userData,{cart:t.payload.cart})});case v:return We({},e,{userData:We({},e.userData,{cart:t.payload.cart}),cartDetail:t.payload.cartDetail});default:return e}}}),Ve=a(266),He=a.n(Ve),Je=a(267),Ge=Object(ze.a)(He.a,Je.a)(ze.d);c.a.render(n.a.createElement(j.a,{store:Ge(Xe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},n.a.createElement($e.a,null,n.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[273,1,2]]]);
//# sourceMappingURL=main.ee9b1247.chunk.js.map