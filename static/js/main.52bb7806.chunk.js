(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=a(6),i=a.n(s),u=a(13),l=a(10),b=a(4),j=a(8),m=a(23),d=a.n(m).a.create({baseURL:"https://pixabay.com/api",method:"GET",params:{key:"22675248-9d53002fe5bb858ba3591edf9",image_type:"photo",orientation:"horizontal",per_page:"12"}}),h=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/?q=".concat(t,"&page=").concat(a));case 2:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=(a(22),a(1));var g=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(b.a)(a,2),c=r[0],o=r[1];return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c.trim())return j.b.error("Enter the name of the picture!");t(c),o("")},className:"SearchForm",children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0})]})})},p=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL,r=e.handleSelectedImage;return Object(f.jsx)("li",{className:"ImageGalleryItem",children:Object(f.jsx)("img",{src:t,alt:a,onClick:function(){return r(n,a)},className:"ImageGalleryItem-image"})})},O=function(e){var t=e.images,a=e.handleSelectedImage;return Object(f.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(f.jsx)(p,{webformatURL:n,tags:r,largeImageURL:c,handleSelectedImage:a},t)}))})},v=a(24),x=a.n(v),w=(a(70),function(){return Object(f.jsx)("div",{className:"Loading",children:Object(f.jsx)(x.a,{type:"Oval",color:"#00BFFF",height:60,width:60,timeout:2500})})}),S=function(e){var t=e.onClick;return Object(f.jsx)("button",{onClick:t,className:"Button",children:"Load More"})},y=document.querySelector("#modal-root");var k=function(e){var t=e.onClose,a=e.src,r=e.alt;Object(n.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(f.jsx)("div",{className:"Modal",children:Object(f.jsx)("img",{src:a,alt:r})})}),y)};var I=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(b.a)(c,2),s=o[0],m=o[1],d=Object(n.useState)(1),p=Object(b.a)(d,2),v=p[0],x=p[1],y=Object(n.useState)("idle"),I=Object(b.a)(y,2),L=I[0],N=I[1],C=Object(n.useState)(null),E=Object(b.a)(C,2),F=E[0],R=E[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N("pending"),e.next=4,h(a,v);case 4:if(t=e.sent,N("resolved"),t.length){e.next=8;break}return e.abrupt("return",j.b.error("Picture with the name ".concat(a," is not in the catalog")));case 8:m((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),N("rejected"),console.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}a&&function(){e.apply(this,arguments)}()}),[a,v]);var U=s.length>0;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{onSubmit:function(e){a!==e&&(r(e),m([]),x(1))}}),Object(f.jsx)(O,{images:s,handleSelectedImage:function(e,t){R({src:e,tags:t})}}),"pending"===L&&Object(f.jsx)(w,{}),U&&Object(f.jsx)(S,{onClick:function(){x((function(e){return e+1}))}}),F&&Object(f.jsx)(k,{onClose:function(){R(null)},src:F.src,alt:F.tags}),Object(f.jsx)(j.a,{autoClose:2500})]})};a(71);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.52bb7806.chunk.js.map