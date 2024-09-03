"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1572],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>s});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){return function(n){var t=m(n.components);return a.createElement(e,r({},n,{components:t}))}},m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=m(t),u=i,g=s["".concat(l,".").concat(u)]||s[u]||c[u]||r;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},49595:(e,n,t)=>{t.d(n,{A:()=>d,C:()=>p});var a=t(58168),i=t(96540),r=t(75489),l=t(44586),o=t(74098);function d(e){return i.createElement(r.default,(0,a.A)({},e,{to:(n=e.to,d=(0,o.useActiveVersion)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==d?void 0:d.name)?t:"current"]+n),target:"_blank"}));var n,t,d}function p(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return i.createElement(d,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},86629:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>c,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=t(58168),i=t(98587),r=(t(96540),t(15680)),l=t(49595),o=["components"],d={id:"develop",title:"Plugin development",sidebar_label:"Plugin development"},p=void 0,s={unversionedId:"advanced/plugins/develop",id:"version-1.1/advanced/plugins/develop",title:"Plugin development",description:"If you develop plugins, please join the Plugin developer announcement chat channel.",source:"@site/versioned_docs/version-1.1/advanced/plugins/develop.md",sourceDirName:"advanced/plugins",slug:"/advanced/plugins/develop",permalink:"/docs/1.1/advanced/plugins/develop",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/plugins/develop.md",tags:[],version:"1.1",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",frontMatter:{id:"develop",title:"Plugin development",sidebar_label:"Plugin development"},sidebar:"version-1.1/docs",previous:{title:"Plugins Overview",permalink:"/docs/1.1/advanced/plugins/overview"},next:{title:"Application packaging",permalink:"/docs/1.1/advanced/app_packaging"}},m=[{value:"Plugin discovery process",id:"plugin-discovery-process",children:[],level:2},{value:"Getting started",id:"getting-started",children:[],level:2}],u={toc:m};function c(e){var n=e.components,t=(0,i.A)(e,o);return(0,r.mdx)("wrapper",(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"If you develop plugins, please join the ",(0,r.mdx)("a",{href:"https://hydra-framework.zulipchat.com/#narrow/stream/233935-Hydra-plugin.20dev.20announcements"},"Plugin developer announcement chat channel"),"."))),(0,r.mdx)("p",null,"When developing Hydra plugins, keep the following things in mind:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Hydra plugins can be either a standalone Python package, or a part of your existing Python package.\nIn both cases - They should be in the namespace module ",(0,r.mdx)("inlineCode",{parentName:"li"},"hydra_plugins")," (This is a top level module, Your plugin will ",(0,r.mdx)("strong",{parentName:"li"},"NOT")," be discovered if you place it in ",(0,r.mdx)("inlineCode",{parentName:"li"},"mylib.hydra_plugins"),")."),(0,r.mdx)("li",{parentName:"ul"},"Do ",(0,r.mdx)("strong",{parentName:"li"},"NOT")," place an ",(0,r.mdx)("inlineCode",{parentName:"li"},"__init__.py")," file in ",(0,r.mdx)("inlineCode",{parentName:"li"},"hydra_plugins")," (doing so may break other installed Hydra plugins).")),(0,r.mdx)("h2",{id:"plugin-discovery-process"},"Plugin discovery process"),(0,r.mdx)("p",null,"The plugin discovery process runs whenever Hydra starts. During plugin discovery, Hydra scans for plugins in all the submodules of ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra_plugins"),". Hydra will import each module and look for plugins defined in that module.\nAny module under ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra_plugins")," that is slow to import will slow down the startup of ",(0,r.mdx)("strong",{parentName:"p"},"ALL")," Hydra applications.\nPlugins with expensive imports can exclude individual files from Hydra's plugin discovery process by prefixing them with ",(0,r.mdx)("inlineCode",{parentName:"p"},"_")," (but not ",(0,r.mdx)("inlineCode",{parentName:"p"},"__"),").\nFor example, the file ",(0,r.mdx)("inlineCode",{parentName:"p"},"_my_plugin_lib.py")," would not be imported and scanned, while ",(0,r.mdx)("inlineCode",{parentName:"p"},"my_plugin_lib.py")," would be."),(0,r.mdx)("h2",{id:"getting-started"},"Getting started"),(0,r.mdx)("p",null,"The best way to get started developing a Hydra plugin is to base your new plugin on one of the example plugins:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Copy the subtree of the relevant ",(0,r.mdx)(l.A,{to:"examples/plugins",mdxType:"GithubLink"},"example plugin")," into a standalone project."),(0,r.mdx)("li",{parentName:"ul"},"Edit ",(0,r.mdx)("inlineCode",{parentName:"li"},"setup.py"),", rename the plugin module, for example from ",(0,r.mdx)("inlineCode",{parentName:"li"},"hydra_plugins.example_xyz_plugin")," to ",(0,r.mdx)("inlineCode",{parentName:"li"},"hydra_plugins.my_xyz_plugin"),"."),(0,r.mdx)("li",{parentName:"ul"},"Install the new plugin (Run this in the plugin directory: ",(0,r.mdx)("inlineCode",{parentName:"li"},"pip install -e ."),")"),(0,r.mdx)("li",{parentName:"ul"},"Run the included example app and make sure that the plugin is discovered:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ python example/my_app.py --info plugins\nInstalled Hydra Plugins\n***********************\n        ...\n        Launcher:\n        ---------\n                MyLauncher\n        ...\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Run the example application to see that that your plugin is doing something."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"[Optional]")," If you want the plugin be embedded in your existing application/library, move the ",(0,r.mdx)("inlineCode",{parentName:"li"},"hydra_plugins")," directory\nand make sure that it's included as a namespace module in your final Python package. See the ",(0,r.mdx)("inlineCode",{parentName:"li"},"setup.py"),"\nfile included with the example plugin for hints (typically this involves using ",(0,r.mdx)("inlineCode",{parentName:"li"},'find_namespace_packages(include=["hydra_plugins.*"])'),")."),(0,r.mdx)("li",{parentName:"ul"},"Hack on your plugin, Ensure that the recommended tests and any tests you want to add are passing.")))}c.isMDXComponent=!0}}]);