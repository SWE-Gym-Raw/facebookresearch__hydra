"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7914],{15680:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>u});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),u=function(e){return function(n){var r=c(n.components);return a.createElement(e,l({},n,{components:r}))}},c=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=t,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(b,o(o({ref:n},s),{},{components:r})):a.createElement(b,o({ref:n},s))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},49595:(e,n,r)=>{r.d(n,{A:()=>p,C:()=>s});var a=r(58168),t=r(96540),l=r(75489),i=r(44586),o=r(74098);function p(e){return t.createElement(l.default,(0,a.A)({},e,{to:(n=e.to,p=(0,o.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==p?void 0:p.name)?r:"current"]+n),target:"_blank"}));var n,r,p}function s(e){var n,r=null!=(n=e.text)?n:"Example (Click Here)";return t.createElement(p,e,t.createElement("span",null,"\xa0"),t.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example (Click Here)"}))}},26960:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var a=r(58168),t=r(98587),l=(r(96540),r(15680)),i=r(49595),o=["components"],p={id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},s=void 0,u={unversionedId:"plugins/joblib_launcher",id:"version-1.1/plugins/joblib_launcher",title:"Joblib Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.1/plugins/joblib_launcher.md",sourceDirName:"plugins",slug:"/plugins/joblib_launcher",permalink:"/docs/1.1/plugins/joblib_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/plugins/joblib_launcher.md",tags:[],version:"1.1",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",frontMatter:{id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},sidebar:"version-1.1/docs",previous:{title:"Colorlog plugin",permalink:"/docs/1.1/plugins/colorlog"},next:{title:"Ray Launcher plugin",permalink:"/docs/1.1/plugins/ray_launcher"}},c=[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3}],d={toc:c};function m(e){var n=e.components,r=(0,t.A)(e,o);return(0,l.mdx)("wrapper",(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://pypi.org/project/hydra-joblib-launcher/"},(0,l.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-joblib-launcher",alt:"PyPI"})),"\n",(0,l.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-joblib-launcher",alt:"PyPI - License"}),"\n",(0,l.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-joblib-launcher",alt:"PyPI - Python Version"}),"\n",(0,l.mdx)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-joblib-launcher"},(0,l.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-joblib-launcher.svg",alt:"PyPI - Downloads"})),(0,l.mdx)(i.C,{text:"Example application",to:"plugins/hydra_joblib_launcher/example",mdxType:"ExampleGithubLink"}),(0,l.mdx)(i.C,{text:"Plugin source",to:"plugins/hydra_joblib_launcher",mdxType:"ExampleGithubLink"})),(0,l.mdx)("p",null,"The Joblib Launcher plugin provides a launcher for parallel tasks based on ",(0,l.mdx)("a",{parentName:"p",href:"https://joblib.readthedocs.io/en/latest/parallel.html"},(0,l.mdx)("inlineCode",{parentName:"a"},"Joblib.Parallel")),"."),(0,l.mdx)("h3",{id:"installation"},"Installation"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-joblib-launcher --upgrade\n")),(0,l.mdx)("h3",{id:"usage"},"Usage"),(0,l.mdx)("p",null,"Once installed, add ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/launcher=joblib")," to your command line. Alternatively, override ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/launcher: joblib\n")),(0,l.mdx)("p",null,"By default, process-based parallelism using all available CPU cores is used. By overriding the default configuration, it is e.g. possible limit the number of parallel executions."),(0,l.mdx)("p",null,"The JobLibLauncherConf backing the config is defined ",(0,l.mdx)(i.A,{to:"plugins/hydra_joblib_launcher/hydra_plugins/hydra_joblib_launcher/config.py",mdxType:"GithubLink"},"here"),":"),(0,l.mdx)("p",null,"You can discover the Joblib Launcher parameters with:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=joblib --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"joblib","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\n_target_: hydra_plugins.hydra_joblib_launcher.joblib_launcher.JoblibLauncher\nn_jobs: 10\nbackend: null\nprefer: processes\nrequire: null\nverbose: 0\ntimeout: null\npre_dispatch: 2*n_jobs\nbatch_size: auto\ntemp_folder: null\nmax_nbytes: null\nmmap_mode: r\n")),(0,l.mdx)("p",null,"There are several standard approaches for configuring plugins. Check ",(0,l.mdx)("a",{parentName:"p",href:"/docs/1.1/patterns/configuring_plugins"},"this page")," for more information."),(0,l.mdx)("p",null,"See ",(0,l.mdx)("a",{parentName:"p",href:"https://joblib.readthedocs.io/en/latest/parallel.html"},(0,l.mdx)("inlineCode",{parentName:"a"},"Joblib.Parallel")," documentation")," for full details about the parameters above."),(0,l.mdx)("div",{class:"alert alert--info",role:"alert"},"NOTE: The only supported JobLib backend is Loky (process-based parallelism)."),(0,l.mdx)("br",null),(0,l.mdx)("p",null,"An ",(0,l.mdx)(i.A,{to:"plugins/hydra_joblib_launcher/example",mdxType:"GithubLink"},"example application")," using this launcher is provided in the plugin repository."),(0,l.mdx)("p",null,"Starting the app with ",(0,l.mdx)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will launch five parallel executions:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --multirun task=1,2,3,4,5\n[HYDRA] Joblib.Parallel(n_jobs=-1,verbose=0,timeout=None,pre_dispatch=2*n_jobs,batch_size=auto,temp_folder=None,max_nbytes=None,mmap_mode=r,backend=loky) is launching 5 jobs\n[HYDRA] Launching jobs, sweep output dir : multirun/2020-02-18/10-00-00\n[__main__][INFO] - Process ID 14336 executing task 2 ...\n[__main__][INFO] - Process ID 14333 executing task 1 ...\n[__main__][INFO] - Process ID 14334 executing task 3 ...\n[__main__][INFO] - Process ID 14335 executing task 4 ...\n[__main__][INFO] - Process ID 14337 executing task 5 ...\n")))}m.isMDXComponent=!0}}]);