"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7088],{15680:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>c});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){return function(n){var r=d(n.components);return t.createElement(e,a({},n,{components:r}))}},d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=o,h=c["".concat(i,".").concat(u)]||c[u]||m[u]||a;return r?t.createElement(h,p(p({ref:n},s),{},{components:r})):t.createElement(h,p({ref:n},s))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},49595:(e,n,r)=>{r.d(n,{A:()=>l,C:()=>s});var t=r(58168),o=r(96540),a=r(75489),i=r(44586),p=r(74098);function l(e){return o.createElement(a.default,(0,t.A)({},e,{to:(n=e.to,l=(0,p.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==l?void 0:l.name)?r:"current"]+n),target:"_blank"}));var n,r,l}function s(e){var n,r=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(l,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example (Click Here)"}))}},43395:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=r(58168),o=r(98587),a=(r(96540),r(15680)),i=r(49595),p=["components"],l={id:"app_help",title:"Customizing Application's help",sidebar_label:"Customizing Application's help"},s=void 0,c={unversionedId:"configure_hydra/app_help",id:"version-1.3/configure_hydra/app_help",title:"Customizing Application's help",description:"Hydra provides two different help options:",source:"@site/versioned_docs/version-1.3/configure_hydra/app_help.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/app_help",permalink:"/docs/1.3/configure_hydra/app_help",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.3/configure_hydra/app_help.md",tags:[],version:"1.3",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",frontMatter:{id:"app_help",title:"Customizing Application's help",sidebar_label:"Customizing Application's help"},sidebar:"docs",previous:{title:"Customizing working directory pattern",permalink:"/docs/1.3/configure_hydra/workdir"},next:{title:"Colorlog plugin",permalink:"/docs/1.3/plugins/colorlog"}},d=[],u={toc:d};function m(e){var n=e.components,r=(0,o.A)(e,p);return(0,a.mdx)("wrapper",(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(i.C,{text:"Example application",to:"examples/configure_hydra/custom_help",mdxType:"ExampleGithubLink"}),(0,a.mdx)("p",null,"Hydra provides two different help options:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"--help")," : Application specific help"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"--hydra-help")," Hydra specific help. ")),(0,a.mdx)("p",null,"Example output of ",(0,a.mdx)("inlineCode",{parentName:"p"},"--help"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --help\n== AwesomeApp ==\n\nThis is AwesomeApp!\nYou can choose a db driver by appending\n== Configuration groups ==\nCompose your configuration from those groups (db=mysql)\n\ndb: mysql, postgresql\n\n\n== Config ==\nThis is the config generated for this run.\nYou can override everything, for example:\npython my_app.py db.user=foo db.pass=bar\n-------\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\n\n-------\n\nPowered by Hydra (https://hydra.cc)\nUse --hydra-help to view Hydra specific help\n")),(0,a.mdx)("p",null,"This output is generated from the following config group option (selected in ",(0,a.mdx)("inlineCode",{parentName:"p"},"config.yaml")," to be used by default): "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/help/my_app_help.yaml"',title:'"hydra/help/my_app_help.yaml"'},"# App name, override to match the name your app is known by\napp_name: AwesomeApp\n\n# Help header, customize to describe your app to your users\nheader: == ${hydra.help.app_name} ==\n\nfooter: |-\n  Powered by Hydra (https://hydra.cc)\n  Use --hydra-help to view Hydra specific help\n\n# Basic Hydra flags:\n#   $FLAGS_HELP\n#\n# Config groups, choose one of:\n#   $APP_CONFIG_GROUPS: All config groups that does not start with hydra/.\n#   $HYDRA_CONFIG_GROUPS: All the Hydra config groups (starts with hydra/)\n#\n# Configuration generated with overrides:\n#   $CONFIG : Generated config\n#\ntemplate: |-\n  ${hydra.help.header}\n\n  This is ${hydra.help.app_name}!\n  You can choose a db driver by appending\n  == Configuration groups ==\n  Compose your configuration from those groups (db=mysql)\n\n  $APP_CONFIG_GROUPS\n\n  == Config ==\n  This is the config generated for this run.\n  You can override everything, for example:\n  python my_app.py db.user=foo db.pass=bar\n  -------\n  $CONFIG\n  -------\n  \n  ${hydra.help.footer}\n")))}m.isMDXComponent=!0}}]);