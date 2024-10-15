"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1713],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){return function(t){var r=p(t.components);return n.createElement(e,i({},t,{components:r}))}},p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85472:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(58168),o=r(98587),i=(r(96540),r(15680)),a=["components"],c={id:"intro",title:"Tutorials intro"},s=void 0,l={unversionedId:"tutorials/intro",id:"version-1.3/tutorials/intro",title:"Tutorials intro",description:"Basic Tutorial",source:"@site/versioned_docs/version-1.3/tutorials/intro.md",sourceDirName:"tutorials",slug:"/tutorials/intro",permalink:"/docs/1.3/tutorials/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.3/tutorials/intro.md",tags:[],version:"1.3",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1729009259,formattedLastUpdatedAt:"10/15/2024",frontMatter:{id:"intro",title:"Tutorials intro"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/1.3/intro"},next:{title:"A simple command-line application",permalink:"/docs/1.3/tutorials/basic/your_first_app/simple_cli"}},u=[{value:"Basic Tutorial",id:"basic-tutorial",children:[],level:3},{value:"Structured configs",id:"structured-configs",children:[],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,o.A)(e,a);return(0,i.mdx)("wrapper",(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h3",{id:"basic-tutorial"},"Basic Tutorial"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.3/tutorials/basic/your_first_app/simple_cli"},"Basic Tutorial")," covers basic Hydra concepts."),(0,i.mdx)("h3",{id:"structured-configs"},"Structured configs"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.3/tutorials/structured_config/intro"},"Structured Configs Tutorial")," shows how to create strongly typed configurations."))}d.isMDXComponent=!0}}]);