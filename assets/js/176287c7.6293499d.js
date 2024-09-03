"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4510],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>l,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>d});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){return function(t){var r=u(t.components);return n.createElement(e,a({},t,{components:r}))}},u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),l=o,y=d["".concat(i,".").concat(l)]||d[l]||m[l]||a;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},33149:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(58168),o=r(98587),a=(r(96540),r(15680)),i=["components"],s={id:"jupyter_notebooks",title:"Hydra in Jupyter Notebooks"},c=void 0,p={unversionedId:"advanced/jupyter_notebooks",id:"version-1.3/advanced/jupyter_notebooks",title:"Hydra in Jupyter Notebooks",description:"Hydra supports config composition inside Jupyter notebooks via the Compose API.",source:"@site/versioned_docs/version-1.3/advanced/jupyter_notebooks.md",sourceDirName:"advanced",slug:"/advanced/jupyter_notebooks",permalink:"/docs/1.3/advanced/jupyter_notebooks",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.3/advanced/jupyter_notebooks.md",tags:[],version:"1.3",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",frontMatter:{id:"jupyter_notebooks",title:"Hydra in Jupyter Notebooks"},sidebar:"docs",previous:{title:"Decorating the main function",permalink:"/docs/1.3/advanced/decorating_main"},next:{title:"Hydra in Unit Tests",permalink:"/docs/1.3/advanced/unit_testing"}},d=[],u={toc:d};function l(e){var t=e.components,r=(0,o.A)(e,i);return(0,a.mdx)("wrapper",(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Hydra supports config composition inside Jupyter notebooks via the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/1.3/advanced/compose_api"},"Compose API"),".  "),(0,a.mdx)("p",null,"Run the Notebook in a the Binder to see a live demo, or open the Notebook source on GitHub."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/facebookresearch/hydra/main?filepath=examples%252jupyter_notebooks"},(0,a.mdx)("img",{parentName:"a",src:"https://mybinder.org/badge_logo.svg",alt:"Binder"})),"\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra//tree/main/examples/jupyter_notebooks/"},(0,a.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Notebooks%20source-informational",alt:"Notebook source"}))))}l.isMDXComponent=!0}}]);