"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9791],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>s});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){return function(n){var t=u(n.components);return r.createElement(e,a({},n,{components:t}))}},u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),s=u(t),d=o,c=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(c,l(l({ref:n},p),{},{components:t})):r.createElement(c,l({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},49595:(e,n,t)=>{t.d(n,{A:()=>g,C:()=>p});var r=t(58168),o=t(96540),a=t(75489),i=t(44586),l=t(74098);function g(e){return o.createElement(a.default,(0,r.A)({},e,{to:(n=e.to,g=(0,l.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==g?void 0:g.name)?t:"current"]+n),target:"_blank"}));var n,t,g}function p(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(g,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},37546:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>m,frontMatter:()=>g,metadata:()=>s,toc:()=>u});var r=t(58168),o=t(98587),a=(t(96540),t(15680)),i=t(49595),l=["components"],g={id:"logging",title:"Logging",sidebar_label:"Logging"},p=void 0,s={unversionedId:"tutorials/basic/running_your_app/logging",id:"version-1.0/tutorials/basic/running_your_app/logging",title:"Logging",description:"People often do not use Python logging due to the setup cost.",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/4_logging.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/logging",permalink:"/docs/1.0/tutorials/basic/running_your_app/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/4_logging.md",tags:[],version:"1.0",lastUpdatedBy:"Shicong Huang",lastUpdatedAt:1731710197,formattedLastUpdatedAt:"11/15/2024",sidebarPosition:4,frontMatter:{id:"logging",title:"Logging",sidebar_label:"Logging"},sidebar:"version-1.0/docs",previous:{title:"Output/Working directory",permalink:"/docs/1.0/tutorials/basic/running_your_app/working_directory"},next:{title:"Debugging",permalink:"/docs/1.0/tutorials/basic/running_your_app/debugging"}},u=[],d={toc:u};function m(e){var n=e.components,t=(0,o.A)(e,l);return(0,a.mdx)("wrapper",(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(i.C,{to:"examples/tutorials/basic/running_your_hydra_app/4_logging/my_app.py",mdxType:"ExampleGithubLink"}),(0,a.mdx)("p",null,"People often do not use Python logging due to the setup cost.\nHydra solves that by configuring the Python logging for you."),(0,a.mdx)("p",null,"By default Hydra logs at the INFO level to both the console and a log file in the automatic working directory."),(0,a.mdx)("p",null,"Example of logging with Hydra:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'import logging\nfrom omegaconf import DictConfig\nimport hydra\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    log.info("Info level message")\n    log.debug("Debug level message")\n\nif __name__ == "__main__":\n    my_app()\n\n$ python my_app.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n\n')),(0,a.mdx)("p",null,"You can enable DEBUG level logging from the command line  by overriding ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra.verbose"),"."),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"hydra.verbose")," can be a Boolean, a String or a List:"),(0,a.mdx)("p",null,"Examples:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=true")," : Sets the log level of ",(0,a.mdx)("strong",{parentName:"li"},"all")," loggers to ",(0,a.mdx)("inlineCode",{parentName:"li"},"DEBUG")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=NAME")," : Sets the log level of the logger ",(0,a.mdx)("inlineCode",{parentName:"li"},"NAME")," to ",(0,a.mdx)("inlineCode",{parentName:"li"},"DEBUG")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=[NAME1,NAME2]"),": Sets the log level of the loggers ",(0,a.mdx)("inlineCode",{parentName:"li"},"NAME1")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"NAME2")," to ",(0,a.mdx)("inlineCode",{parentName:"li"},"DEBUG"))),(0,a.mdx)("p",null,"Example output:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py hydra.verbose=[__main__,hydra]\n[2019-09-29 13:06:00,880] - Installed Hydra Plugins\n[2019-09-29 13:06:00,880] - ***********************\n...\n[2019-09-29 13:06:00,896][__main__][INFO] - Info level message\n[2019-09-29 13:06:00,896][__main__][DEBUG] - Debug level message\n")),(0,a.mdx)("p",null,"You can disable the logging output using by setting ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra/job_logging")," to `disabled'   "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py hydra/job_logging=disabled\n<NO OUTPUT>\n")),(0,a.mdx)("p",null,"Logging can be ",(0,a.mdx)("a",{parentName:"p",href:"/docs/1.0/configure_hydra/logging"},"customized"),"."))}m.isMDXComponent=!0}}]);