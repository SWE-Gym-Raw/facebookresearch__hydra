"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1370],{15680:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>u});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),u=function(e){return function(n){var r=d(n.components);return a.createElement(e,o({},n,{components:r}))}},d=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(r),m=t,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return r?a.createElement(f,i(i({ref:n},p),{},{components:r})):a.createElement(f,i({ref:n},p))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18640:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=r(58168),t=r(98587),o=(r(96540),r(15680)),l=["components"],i={id:"flow-launcher",title:"Flow Launcher"},c=void 0,p={unversionedId:"fb/flow-launcher",id:"fb/flow-launcher",title:"Flow Launcher",description:"The Flow Launcher plugin provides a way to launch application via flow.",source:"@site/docs/fb/flow-launcher.md",sourceDirName:"fb",slug:"/fb/flow-launcher",permalink:"/docs/fb/flow-launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/fb/flow-launcher.md",tags:[],version:"current",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",frontMatter:{id:"flow-launcher",title:"Flow Launcher"}},u=[{value:"Dependency",id:"dependency",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:u};function m(e){var n=e.components,r=(0,t.A)(e,l);return(0,o.mdx)("wrapper",(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The Flow Launcher plugin provides a way to launch application via ",(0,o.mdx)("inlineCode",{parentName:"p"},"flow"),"."),(0,o.mdx)("h2",{id:"dependency"},"Dependency"),(0,o.mdx)("p",null,"To use the Flow Launcher, add the following to your ",(0,o.mdx)("inlineCode",{parentName:"p"},"TARGETS")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-commandline"},"//github/facebookresearch/hydra/plugins/hydra_flow_launcher:hydra_flow_launcher\n")),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("p",null,"Add hydra/launcher=flow to your command line. Alternatively, override hydra/launcher in your config:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-commandline"},"defaults:\n  - hydra/launcher: flow\n")),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"Discover Flow Launcher's config"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ buck run @mode/opt  //path:my_app -- --cfg hydra -p hydra.launcher"',title:'"$',buck:!0,run:!0,"@mode/opt":!0,"":!0,"//path:my_app":!0,"--":!0,"--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"\n# @package hydra.launcher\n_target_: hydra_plugins.flow_launcher_plugin.flow_launcher.FlowLauncher\nmode: flow\nowner: ${oc.env:USER}\nentitlement: gpu_pnb_fair\npkg_version: fblearner.flow.canary:19e63cbf9945467281cf681bc8902c50\ndriver_path: ''\nresource_requirements:\n  gpu: 0\n  cpu: 1\n  memory: 10g\n  region: null\n  capabilities: []\n  percent_cpu: null\nrun_as_secure_group: fair_research_and_engineering\nretries: 2\ntags: []\n"))),(0,o.mdx)("p",null,"The Launcher currently support both ",(0,o.mdx)("inlineCode",{parentName:"p"},"par")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"xar")," style. You can override ",(0,o.mdx)("inlineCode",{parentName:"p"},"resource_requirements")," just like how you would via ",(0,o.mdx)("inlineCode",{parentName:"p"},"flow-cli"),"."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Flow launcher only supports ",(0,o.mdx)("inlineCode",{parentName:"p"},"@mode/opt"),"."))),(0,o.mdx)("p",null,"To run the example application:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-commandline"},"buck run @mode/opt  //github/facebookresearch/hydra/plugins/hydra_flow_launcher/example:my_app -- --multirun\n")))}m.isMDXComponent=!0}}]);