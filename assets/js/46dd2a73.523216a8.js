"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7212],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>c});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){return function(n){var t=p(n.components);return r.createElement(e,a({},n,{components:t}))}},p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,d=c["".concat(i,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7814:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(58168),o=t(98587),a=(t(96540),t(15680)),i=["components"],l={id:"logging",title:"Customizing logging",sidebar_label:"Customizing logging"},g=void 0,s={unversionedId:"configure_hydra/logging",id:"version-1.0/configure_hydra/logging",title:"Customizing logging",description:"Example application",source:"@site/versioned_docs/version-1.0/configure_hydra/logging.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/logging",permalink:"/docs/1.0/configure_hydra/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/configure_hydra/logging.md",tags:[],version:"1.0",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",frontMatter:{id:"logging",title:"Customizing logging",sidebar_label:"Customizing logging"},sidebar:"version-1.0/docs",previous:{title:"Job Configuration",permalink:"/docs/1.0/configure_hydra/job"},next:{title:"Customizing working directory pattern",permalink:"/docs/1.0/configure_hydra/workdir"}},c=[],p={toc:c};function m(e){var n=e.components,t=(0,o.A)(e,i);return(0,a.mdx)("wrapper",(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/configure_hydra/logging"},(0,a.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,a.mdx)("p",null,"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it ",(0,a.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/howto/logging.html"},"here"),".\nThere are two logging configurations, one for Hydra itself and one for the executed jobs."),(0,a.mdx)("p",null,"This example demonstrates how to customize the logging behavior of your Hydra app, by making the following changes\nto the default logging behavior:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Outputs only to stdout (no log file)"),(0,a.mdx)("li",{parentName:"ul"},"Output a simpler log line pattern")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - hydra/job_logging: custom\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/job_logging/custom.yaml"',title:'"hydra/job_logging/custom.yaml"'},"# @package _group_\nversion: 1\nformatters:\n  simple:\n    format: '[%(levelname)s] - %(message)s'\nhandlers:\n  console:\n    class: logging.StreamHandler\n    formatter: simple\n    stream: ext://sys.stdout\nroot:\n  handlers: [console]\n\ndisable_existing_loggers: false\n")),(0,a.mdx)("p",null,"This is what the default logging looks like:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ python my_app.py hydra/job_logging=default\n[2020-08-24 13:43:26,761][__main__][INFO] - Info level message\n")),(0,a.mdx)("p",null,"And this is what the custom logging looks like:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py \n[INFO] - Info level message\n")))}m.isMDXComponent=!0}}]);