(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),i=(r(0),r(187));const a={title:"Getting Started"},s={unversionedId:"persistence/sequelize/getting-started",id:"persistence/sequelize/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The @nestjs-query/query-sequelize package provides an implementation of @nestjs-query/core QueryService.",source:"@site/docs/persistence/sequelize/getting-started.md",permalink:"/nestjs-query/docs/persistence/sequelize/getting-started",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/sequelize/getting-started.md",sidebar:"docs",previous:{title:"Services",permalink:"/nestjs-query/docs/persistence/services"},next:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/sequelize/custom-service"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Docs",id:"docs",children:[]}],o={rightToc:c};function u({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-sequelize")," package provides an implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"@nestjs-query/core")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/nestjs-query/docs/concepts/services"}),"QueryService"),"."),Object(i.b)("p",null,"This package is built using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://sequelize.org/"}),"sequelize")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.nestjs.com/techniques/database#sequelize-integration"}),"@nestjs/sequelize"),". If you are unfamiliar with them I suggest you read their documentation first."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/nestjs-query/docs/introduction/install#nestjs-queryquery-sequelize"}),"Installation Docs")),Object(i.b)("h2",{id:"docs"},"Docs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Read the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/nestjs-query/docs/persistence/services"}),"QueryService docs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/nestjs-query/docs/persistence/sequelize/custom-service"}),"Custom Service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/nestjs-query/docs/persistence/sequelize/serialization"}),"Serialization")," - How to serialize ",Object(i.b)("inlineCode",{parentName:"li"},"sequelize")," models. ")))}u.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||a;return r?i.a.createElement(m,c(c({ref:t},u),{},{components:r})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);