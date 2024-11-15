"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7821],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>h,mdx:()=>f,useMDXComponents:()=>l,withMDXComponents:()=>s});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){return function(t){var n=l(t.components);return r.createElement(e,i({},t,{components:n}))}},l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(n),h=a,m=s["".concat(o,".").concat(h)]||s[h]||u[h]||i;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4488:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var r=n(58168),a=n(98587),i=(n(96540),n(15680)),o=["components"],c={id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},d=void 0,p={unversionedId:"upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",id:"version-1.1/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()",description:"Prior to Hydra 1.1, @hydra.main() and hydra.initialize() default config path was the directory containing the Python app (calling @hydra.main() or hydra.initialize()).",source:"@site/versioned_docs/version-1.1/upgrades/1.0_to_1.1/hydra_main_config_path.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",permalink:"/docs/1.1/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/1.0_to_1.1/hydra_main_config_path.md",tags:[],version:"1.1",lastUpdatedBy:"Shicong Huang",lastUpdatedAt:1731710197,formattedLastUpdatedAt:"11/15/2024",frontMatter:{id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},sidebar:"version-1.1/docs",previous:{title:"Introduction",permalink:"/docs/1.1/upgrades/intro"},next:{title:"Changes to default composition order",permalink:"/docs/1.1/upgrades/1.0_to_1.1/default_composition_order"}},s=[{value:"Dedicated config directory",id:"dedicated-config-directory",children:[],level:3},{value:"No config directory",id:"no-config-directory",children:[],level:3},{value:"Using the application directory",id:"using-the-application-directory",children:[],level:3}],l={toc:s};function h(e){var t=e.components,n=(0,a.A)(e,o);return(0,i.mdx)("wrapper",(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Prior to Hydra 1.1, ",(0,i.mdx)("strong",{parentName:"p"},"@hydra.main()")," and ",(0,i.mdx)("strong",{parentName:"p"},"hydra.initialize()")," default ",(0,i.mdx)("inlineCode",{parentName:"p"},"config path")," was the directory containing the Python app (calling ",(0,i.mdx)("strong",{parentName:"p"},"@hydra.main()")," or ",(0,i.mdx)("strong",{parentName:"p"},"hydra.initialize()"),")."),(0,i.mdx)("p",null,"This can cause unexpected behavior:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Sibling directories are interpreted as config groups, which can lead to surprising results (See ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/issues/1533"},"#1533"),")."),(0,i.mdx)("li",{parentName:"ul"},"The subtree added automatically can have many files/directories - which will cause ",(0,i.mdx)("strong",{parentName:"li"},"--help")," to be very slow as it's scanning for all config groups/config files (See ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/issues/759"},"#759"),").")),(0,i.mdx)("p",null,"To address these issues, Hydra 1.1 issues a warning if the config_path is not specified.",(0,i.mdx)("br",{parentName:"p"}),"\n","Your options are as follows:"),(0,i.mdx)("h3",{id:"dedicated-config-directory"},"Dedicated config directory"),(0,i.mdx)("p",null,'For applications with config files, specify a directory like "conf" to use a dedicated config directory relative to the application.'),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf")\n# or:\nhydra.initialize(config_path="conf")\n')),(0,i.mdx)("h3",{id:"no-config-directory"},"No config directory"),(0,i.mdx)("p",null,"For applications that do not define config files next to the Python script (typically applications using only Structured Configs), it is recommended that\nyou pass ",(0,i.mdx)("inlineCode",{parentName:"p"},"None")," as the config_path, indicating that no directory should be added to the config search path.\nThis will become the default in Hydra 1.2."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path=None)\n# or:\nhydra.initialize(config_path=None)\n")),(0,i.mdx)("h3",{id:"using-the-application-directory"},"Using the application directory"),(0,i.mdx)("p",null,"Use the directory/module of the Python script.\nThis was the default behavior up to Hydra 1.0.",(0,i.mdx)("br",{parentName:"p"}),"\n","This is not recommended as it can cause the surprising behavior outlined above."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path=".")\n# or:\nhydra.initialize(config_path=".")\n')))}h.isMDXComponent=!0}}]);