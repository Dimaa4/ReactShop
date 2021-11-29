(this.webpackJsonpshopreact=this.webpackJsonpshopreact||[]).push([[0],{40:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){},63:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),s=c(33),n=c.n(s),i=(c(40),c(4)),d=c(24),o=c(7),l=c.n(o),j=c(12),m=c(9),u=(c(42),c(0)),b=function(e){var t=e.title,c=e.description,r=e.img,a=e.alt,s=e.onClick;return Object(u.jsxs)("div",{className:"infoCart",children:[Object(u.jsx)("img",{alt:a,src:r}),Object(u.jsx)("h1",{children:t}),Object(u.jsx)("h3",{children:c}),Object(u.jsxs)("button",{className:"toOrder",onClick:s,children:[Object(u.jsx)("img",{className:"imgLeft",src:"img/arrow-left.svg",alt:"button"}),Object(u.jsx)("span",{children:"Go shopping! "})]})]})},h=(c(44),c(5)),x=c.n(h),O=function(e){var t=e.item,c=e.removeItemCart;return Object(u.jsxs)("div",{className:"cartItem",children:[Object(u.jsxs)("div",{className:"imgAndName",children:[Object(u.jsx)("img",{className:"cartItemImg",src:t.img,alt:t.name}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:t.name}),Object(u.jsx)("h4",{children:t.price})]})]}),Object(u.jsx)("img",{onClick:function(){c(t)},className:"remove",src:"img/remove.svg",alt:"Remove"})]})},p=function(e){var t=e.onClickClose,c=e.removeItemCart,r=a.a.useState(!1),s=Object(m.a)(r,2),n=s[0],i=s[1],d=a.a.useContext(w),o=d.cartItems,h=d.setCartItems,p=a.a.useState(null),v=Object(m.a)(p,2),g=v[0],f=v[1],I=a.a.useState(!1),k=Object(m.a)(I,2),C=k[0],N=k[1];var y=o.reduce((function(e,t){return e+t.price}),0),S=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),e.next=4,x.a.post("https://619ce80668ebaa001753cd8d.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,f(c.id),o.forEach((function(e){x.a.delete("https://619ce80668ebaa001753cd8d.mockapi.io/cart/".concat(e.id))})),h([]),i(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("ERROR");case 15:N(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"overlay",tabIndex:"0",onClick:function(e){var c=document.querySelector(".overlay");e.target===c&&t()},onKeyDown:function(e){console.log(e),"Escape"===e.code&&t()},children:Object(u.jsxs)("div",{className:"drawer",children:[Object(u.jsxs)("div",{className:"items",children:[Object(u.jsxs)("div",{className:"h1AndX",children:[Object(u.jsx)("h1",{children:"Cart:"}),Object(u.jsx)("img",{alt:"closeCart",onClick:t,src:"img/x-lg.svg"})]}),Object(u.jsx)("hr",{}),0!==o.length?o.map((function(e){return Object(u.jsx)(O,{removeItemCart:c,item:e},e.id)})):n?Object(u.jsx)(b,{title:"Your order is complete!",description:"Your order \u2116".concat(g,". Courier will arrive soon"),img:"./img/orderCompleted.svg",alt:"Order completed",onClick:t}):Object(u.jsx)(b,{title:"Your cart is empty!",description:"Add at least one product to place an order",img:"./img/emptyCart.svg",alt:"Empty Cart",onClick:t})]}),0!==o.length&&Object(u.jsxs)("div",{className:"drawerBottom",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Total "}),Object(u.jsx)("div",{className:"dash"})," ",Object(u.jsxs)("span",{children:[" ",y,"$"]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Bills 5% "}),Object(u.jsx)("div",{className:"dash"})," ",Object(u.jsxs)("span",{children:[.05*y,"$"]})]}),Object(u.jsxs)("button",{disabled:C,onClick:S,className:"toOrder",children:[Object(u.jsx)("span",{children:"To order "})," ",Object(u.jsx)("img",{className:"imgRight",src:"img/arrow-right.svg",alt:"button"})]})]})]})})},v=c(13),g=(c(63),function(e){var t=a.a.useContext(w).cartItems.reduce((function(e,t){return e+t.price}),0);return Object(u.jsxs)("header",{children:[Object(u.jsx)(v.b,{to:"/",children:Object(u.jsxs)("div",{className:"headerLeft",children:[Object(u.jsx)("img",{src:"img/logoShop.svg",className:"logo",alt:"logo"}),Object(u.jsxs)("div",{className:"headerInfo",children:[Object(u.jsx)("h2",{children:"React Shop"}),Object(u.jsx)("p",{children:"Shop of the best products"})]})]})}),Object(u.jsxs)("ul",{className:"headerRight",children:[Object(u.jsxs)("li",{className:"sumOfMoney",onClick:e.onClickCart,children:[Object(u.jsx)("img",{src:"img/cart.svg",className:"svgRight",alt:"cart"}),Object(u.jsxs)("h3",{children:[t,"$"]})]}),Object(u.jsx)("li",{children:Object(u.jsx)(v.b,{to:"/favorites",children:Object(u.jsx)("img",{src:"img/heart.svg",className:"svgRight svgHeart",alt:"account"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(v.b,{to:"/orders",children:Object(u.jsx)("img",{src:"img/account.svg",className:"svgRight svgAccount",alt:"account"})})})]})]})}),f=c(2),I=(c(72),c(35)),k=function(e){var t=e.addItemToLiked,c=e.addItemToCart,r=e.item,s=e.loading,n=void 0!==s&&s,i=a.a.useContext(w),d=i.cartItems,o=i.cardLikedItems,l=function(e){return d.some((function(t){return Number(e)===Number(t.productId)}))},j=function(e){return o.some((function(t){return Number(e)===Number(t.productId)}))};return Object(u.jsx)("div",{className:"card",children:n?Object(u.jsxs)(I.a,{speed:2,width:175,height:323,viewBox:"0 0 175 323",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(u.jsx)("rect",{x:"0",y:"0",rx:"15",ry:"15",width:"175",height:"175"}),Object(u.jsx)("rect",{x:"0",y:"190",rx:"8",ry:"8",width:"175",height:"25"}),Object(u.jsx)("rect",{x:"0",y:"227",rx:"8",ry:"8",width:"120",height:"25"}),Object(u.jsx)("rect",{x:"0",y:"279",rx:"5",ry:"5",width:"80",height:"30"}),Object(u.jsx)("rect",{x:"135",y:"276",rx:"10",ry:"10",width:"33",height:"33"})]}):Object(u.jsxs)(u.Fragment,{children:[t&&Object(u.jsx)("img",{className:"likeSvg",onClick:function(){t(r)},src:j(r.prId)?"img/liked.svg":"img/heart.svg",alt:"like",style:j(r.prId)?{opacity:1,border:0}:{opacity:.4}})," ",Object(u.jsx)("br",{}),Object(u.jsx)("img",{className:"goodImg",src:r.img,alt:r.name})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"m-l-15",children:[Object(u.jsx)("h3",{className:"goodName",children:r.name}),Object(u.jsxs)("div",{className:"priceAndPlus",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"price",children:"Price:"}),Object(u.jsxs)("h4",{children:[r.price,"$"]})]}),c&&Object(u.jsx)("img",{src:l(r.id)?"./img/added.svg":"./img/plus.svg",style:l(r.id)?{opacity:1,border:0}:{opacity:.4},className:"plusSvg",alt:"addToCart",onClick:function(){c(r)}})]})]})]})})},C=function(e){var t=e.addItemToCart,c=e.onChangeInputSearch,s=e.searchValue,n=e.clearInputSearch,d=e.removeItemLiked,o=e.removeItemCart,l=e.addItemToLiked,j=e.loading,m=a.a.useContext(w);return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"contentHeader",children:[Object(u.jsx)("h1",{children:s?'Search by: "'.concat(s,'"'):"All products"}),Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)("input",{onChange:c,type:"text",value:s,placeholder:"Search...",className:"searchInput"}),s&&Object(u.jsx)("img",{alt:"clear search",className:"clearSearchInput",onClick:n,src:"img/x-lg.svg"})]})]}),Object(u.jsx)("div",{className:"cards",children:j?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{loading:!0}),Object(u.jsx)(k,{loading:!0}),Object(u.jsx)(k,{loading:!0}),Object(u.jsx)(k,{loading:!0}),Object(u.jsx)(k,{loading:!0}),Object(u.jsx)(k,{loading:!0}),Object(u.jsx)(k,{loading:!0}),Object(u.jsx)(k,{loading:!0})]}):m.items.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})).map((function(e){return e.prId=e.id,Object(r.createElement)(k,Object(i.a)(Object(i.a)({addItemToLiked:l,removeItemLiked:d,addItemToCart:t,removeItemCart:o,item:e},e),{},{key:e.id}))}))})]})},N=function(e){e.addItemToCart,e.removeItemLiked,e.removeItemCart,e.addItemToLiked;var t=a.a.useState([]),c=Object(m.a)(t,2),s=c[0],n=c[1];return a.a.useEffect((function(){Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://619ce80668ebaa001753cd8d.mockapi.io/orders");case 3:t=e.sent,c=t.data,n(c),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),alert("ERROR");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),console.log(s),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("div",{className:"contentHeader",children:Object(u.jsx)("h1",{children:"Your orders: "})}),Object(u.jsx)("div",{children:s.map((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"order",children:[Object(u.jsxs)("h2",{children:["Order \u2116",e.id," :"]}),Object(u.jsx)("div",{className:"cards",children:e.items.map((function(e){return Object(r.createElement)(k,Object(i.a)(Object(i.a)({item:e},e),{},{key:e.id}))}))})]}),Object(u.jsx)("br",{})]})}))})]})},y=function(e){var t=e.addItemToCart,c=e.removeItemLiked,s=e.removeItemCart,n=e.addItemToLiked,d=a.a.useContext(w);return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("div",{className:"contentHeader",children:Object(u.jsx)("h1",{children:"Your favorites"})}),Object(u.jsx)("div",{className:"cards",children:d.cardLikedItems.map((function(e){return e.prId=e.productId,Object(r.createElement)(k,Object(i.a)(Object(i.a)({addItemToLiked:n,removeItemLiked:c,addItemToCart:t,removeItemCart:s,item:e},e),{},{key:e.id}))}))})]})},w=a.a.createContext({});var S=function(){var e=a.a.useState(!1),t=Object(m.a)(e,2),c=t[0],r=t[1],s=a.a.useState([]),n=Object(m.a)(s,2),o=n[0],b=n[1],h=a.a.useState([]),O=Object(m.a)(h,2),v=O[0],I=O[1],k=a.a.useState([]),S=Object(m.a)(k,2),L=S[0],T=S[1],R=a.a.useState(""),E=Object(m.a)(R,2),A=E[0],Y=E[1],B=a.a.useState(!0),H=Object(m.a)(B,2),$=H[0],q=H[1];function F(e){return P.apply(this,arguments)}function P(){return(P=Object(j.a)(l.a.mark((function e(t){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=o.find((function(e){return Number(t.id)===e.productId})))){e.next=7;break}b((function(e){return e.filter((function(e){return Number(e.productId)!==Number(t.id)}))})),x.a.delete("https://619ce80668ebaa001753cd8d.mockapi.io/cart/".concat(c.id)),e.next=16;break;case 7:return t.productId=t.id,b((function(e){return[].concat(Object(d.a)(e),[t])})),e.next=11,x.a.post("https://619ce80668ebaa001753cd8d.mockapi.io/cart",{name:t.name,price:t.price,img:t.img,productId:t.id});case 11:r=e.sent,a=r.data,console.log(o),b((function(e){return e.map((function(e){return e.productId===a.productId?Object(i.a)(Object(i.a)({},e),{},{id:a.id}):e}))})),console.log(o);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),alert("ERROR");case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}a.a.useEffect((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://619ce80668ebaa001753cd8d.mockapi.io/cart");case 2:return t=e.sent,e.next=5,x.a.get("https://619ce80668ebaa001753cd8d.mockapi.io/liked");case 5:return c=e.sent,e.next=8,x.a.get("https://619ce80668ebaa001753cd8d.mockapi.io/items");case 8:r=e.sent,b(t.data),I(c.data),T(r.data),q(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c?(window.scrollTo(0,0),document.querySelector("body").style.overflow="hidden"):document.querySelector("body").style.overflow="auto";var J=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=v.find((function(e){return Number(t.prId)===Number(e.productId)})),e.prev=1,!c){e.next=8;break}I((function(e){return e.filter((function(e){return Number(e.productId)!==Number(t.prId)}))})),x.a.delete("https://619ce80668ebaa001753cd8d.mockapi.io/liked/".concat(c.id)),console.log(v),e.next=15;break;case 8:return t.productId=t.prId,I((function(e){return[].concat(Object(d.a)(e),[t])})),e.next=12,x.a.post("https://619ce80668ebaa001753cd8d.mockapi.io/liked",{name:t.name,price:t.price,img:t.img,productId:t.id});case 12:r=e.sent,a=r.data,I((function(e){return e.map((function(e){return e.productId===a.productId?Object(i.a)(Object(i.a)({},e),{},{id:a.id}):e}))}));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert("ERROR");case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}();function M(e){b((function(t){return t.filter((function(t){return Number(t.id)!==Number(e.id)}))})),x.a.delete("https://619ce80668ebaa001753cd8d.mockapi.io/cart/".concat(e.id))}return Object(u.jsx)(w.Provider,{value:{items:L,cartItems:o,cardLikedItems:v,setCartItems:b},children:Object(u.jsxs)("div",{children:[c?Object(u.jsx)(p,{removeItemCart:M,onClickClose:function(){r(!1)}}):null,Object(u.jsxs)("div",{className:"conteiner",children:[Object(u.jsx)(g,{onClickCart:function(){r(!0)}}),Object(u.jsx)("hr",{}),Object(u.jsx)(f.a,{path:"/",exact:!0,children:Object(u.jsx)(C,{items:L,addItemToCart:F,onChangeInputSearch:function(e){Y(e.target.value)},searchValue:A,clearInputSearch:function(){Y("")},removeItemCart:M,addItemToLiked:J,cardLikedItems:v,cartItems:o,loading:$})}),Object(u.jsxs)(f.a,{path:"/favorites",children:[" ",Object(u.jsx)(y,{addItemToCart:F,removeItemCart:M,addItemToLiked:J,cartItems:o})," "]}),Object(u.jsx)(f.a,{path:"/orders",children:Object(u.jsx)(N,{addItemToCart:F,removeItemCart:M,addItemToLiked:J})})]})]})})};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v.a,{children:Object(u.jsx)(S,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.1ef87831.chunk.js.map