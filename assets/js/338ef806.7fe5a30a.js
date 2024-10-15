"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3152],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),m=function(e){return function(n){var t=c(n.components);return r.createElement(e,o({},n,{components:t}))}},c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,u=m["".concat(i,".").concat(p)]||m[p]||g[p]||o;return t?r.createElement(u,s(s({ref:n},d),{},{components:t})):r.createElement(u,s({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49595:(e,n,t)=>{t.d(n,{A:()=>l,C:()=>d});var r=t(58168),a=t(96540),o=t(75489),i=t(44586),s=t(74098);function l(e){return a.createElement(o.default,(0,r.A)({},e,{to:(n=e.to,l=(0,s.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==l?void 0:l.name)?t:"current"]+n),target:"_blank"}));var n,t,l}function d(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return a.createElement(l,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},79636:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var r=t(58168),a=t(98587),o=(t(96540),t(15680)),i=t(49595),s=["components"],l={id:"extending_configs",title:"Extending Configs"},d=void 0,m={unversionedId:"patterns/extending_configs",id:"version-1.3/patterns/extending_configs",title:"Extending Configs",description:"A common pattern is to extend an existing config, overriding and/or adding new config values to it.",source:"@site/versioned_docs/version-1.3/patterns/extending_configs.md",sourceDirName:"patterns",slug:"/patterns/extending_configs",permalink:"/docs/1.3/patterns/extending_configs",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.3/patterns/extending_configs.md",tags:[],version:"1.3",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1729009259,formattedLastUpdatedAt:"10/15/2024",frontMatter:{id:"extending_configs",title:"Extending Configs"},sidebar:"docs",previous:{title:"Structured Config schema",permalink:"/docs/1.3/tutorials/structured_config/schema"},next:{title:"Configuring Experiments",permalink:"/docs/1.3/patterns/configuring_experiments"}},c=[{value:"Extending a config from the same config group:",id:"extending-a-config-from-the-same-config-group",children:[],level:4},{value:"Extending a config from another config group:",id:"extending-a-config-from-another-config-group",children:[],level:4}],p={toc:c};function g(e){var n=e.components,t=(0,a.A)(e,s);return(0,o.mdx)("wrapper",(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(i.C,{text:"Example application",to:"examples/patterns/extending_configs",mdxType:"ExampleGithubLink"}),(0,o.mdx)("p",null,"A common pattern is to extend an existing config, overriding and/or adding new config values to it.\nThe extension is done by including the base configuration, and then overriding the chosen values in the current config."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"This page assumes that you are familiar with the contents of ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.3/advanced/defaults_list"},"The Defaults List"),"."))),(0,o.mdx)("h4",{id:"extending-a-config-from-the-same-config-group"},"Extending a config from the same config group:"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql \n\n\n\n\n\n"))),(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0},"defaults:\n  - base_mysql\n\nuser: omry\npassword: secret\nport: 3307\nencoding: utf8\n"))),(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/base_mysql.yaml"',title:'"db/base_mysql.yaml"'},"host: localhost\nport: 3306\nuser: ???\npassword: ???\n\n\n\n")))),(0,o.mdx)("p",null,"Output:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"db:\n  host: localhost   # from db/base_mysql\n  port: 3307        # overridden by db/mysql.yaml \n  user: omry        # populated by db/mysql.yaml\n  password: secret  # populated by db/mysql.yaml\n  encoding: utf8    # added by db/mysql.yaml\n")),(0,o.mdx)("h4",{id:"extending-a-config-from-another-config-group"},"Extending a config from another config group:"),(0,o.mdx)("p",null,"To extend a config from a different config group, include it using an absolute path (/), and override\nthe package to ",(0,o.mdx)("em",{parentName:"p"},"_","here","_"),". (",(0,o.mdx)("em",{parentName:"p"},"_","here","_")," is described in ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.3/advanced/overriding_packages#default-list-package-keywords"},"Packages"),")"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0},"defaults:\n  - /db_schema/base_mysql@_here_\n")),(0,o.mdx)("p",null,"It is otherwise identical to extending a config within the same config group."))}g.isMDXComponent=!0}}]);