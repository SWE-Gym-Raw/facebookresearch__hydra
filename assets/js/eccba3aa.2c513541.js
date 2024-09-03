"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5086],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>c});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){return function(t){var r=d(t.components);return n.createElement(e,a({},t,{components:r}))}},d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(r),u=o,f=c["".concat(i,".").concat(u)]||c[u]||m[u]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75537:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(58168),o=r(98587),a=(r(96540),r(15680)),i=["components"],l={id:"release",title:"Release process",sidebar_label:"Release process"},p=void 0,s={unversionedId:"development/release",id:"version-0.11/development/release",title:"Release process",description:"The release process may be automated in the future.",source:"@site/versioned_docs/version-0.11/development/release.md",sourceDirName:"development",slug:"/development/release",permalink:"/docs/0.11/development/release",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/development/release.md",tags:[],version:"0.11",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",frontMatter:{id:"release",title:"Release process",sidebar_label:"Release process"},sidebar:"version-0.11/docs",previous:{title:"Contributing",permalink:"/docs/0.11/development/contributing"}},c=[],d={toc:c};function u(e){var t=e.components,r=(0,o.A)(e,i);return(0,a.mdx)("wrapper",(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The release process may be automated in the future."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Checkout master"),(0,a.mdx)("li",{parentName:"ul"},"Update the Hydra version in ",(0,a.mdx)("inlineCode",{parentName:"li"},"hydra/__init__.py")),(0,a.mdx)("li",{parentName:"ul"},"Update NEWS.md with towncrier"),(0,a.mdx)("li",{parentName:"ul"},"Create a pip package for hydra-core: ",(0,a.mdx)("inlineCode",{parentName:"li"},"python setup.py sdist bdist_wheel")),(0,a.mdx)("li",{parentName:"ul"},"Upload pip package: ",(0,a.mdx)("inlineCode",{parentName:"li"},"python -m twine upload dist/*")),(0,a.mdx)("li",{parentName:"ul"},"Optional - Release plugins that needs to depend on new version of Hydra"),(0,a.mdx)("li",{parentName:"ul"},"Bump repo version")),(0,a.mdx)("p",null,"Announce release:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Release on GitHub"),(0,a.mdx)("li",{parentName:"ul"},"Announce on Twitter and Zulip")))}u.isMDXComponent=!0}}]);