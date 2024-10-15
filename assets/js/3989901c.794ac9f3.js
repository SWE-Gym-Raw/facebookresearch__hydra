"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3065],{15680:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>u,MDXProvider:()=>s,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>p});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){return function(r){var t=c(r.components);return n.createElement(e,i({},r,{components:t}))}},c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=c(t),s=o,y=p["".concat(a,".").concat(s)]||p[s]||m[s]||i;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},49595:(e,r,t)=>{t.d(r,{A:()=>d,C:()=>u});var n=t(58168),o=t(96540),i=t(75489),a=t(44586),l=t(74098);function d(e){return o.createElement(i.default,(0,n.A)({},e,{to:(r=e.to,d=(0,l.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==d?void 0:d.name)?t:"current"]+r),target:"_blank"}));var r,t,d}function u(e){var r,t=null!=(r=e.text)?r:"Example (Click Here)";return o.createElement(d,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},73924:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var n=t(58168),o=t(98587),i=(t(96540),t(15680)),a=t(49595),l=["components"],d={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},u=void 0,p={unversionedId:"tutorials/basic/running_your_app/working_directory",id:"version-1.1/tutorials/basic/running_your_app/working_directory",title:"Output/Working directory",description:"Hydra solves the problem of your needing to specify a new output directory for each run, by",source:"@site/versioned_docs/version-1.1/tutorials/basic/running_your_app/3_working_directory.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/working_directory",permalink:"/docs/1.1/tutorials/basic/running_your_app/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/basic/running_your_app/3_working_directory.md",tags:[],version:"1.1",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1729009259,formattedLastUpdatedAt:"10/15/2024",sidebarPosition:3,frontMatter:{id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},sidebar:"version-1.1/docs",previous:{title:"Multi-run",permalink:"/docs/1.1/tutorials/basic/running_your_app/multi-run"},next:{title:"Logging",permalink:"/docs/1.1/tutorials/basic/running_your_app/logging"}},c=[{value:"Changing or disabling the output subdir",id:"changing-or-disabling-the-output-subdir",children:[],level:3},{value:"Original working directory",id:"original-working-directory",children:[],level:3}],s={toc:c};function m(e){var r=e.components,t=(0,o.A)(e,l);return(0,i.mdx)("wrapper",(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)(a.C,{to:"examples/tutorials/basic/running_your_hydra_app/3_working_directory",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that working directory."),(0,i.mdx)("p",null,"The working directory is used to:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),(0,i.mdx)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),(0,i.mdx)("p",null,"Every time you run the app, a new working directory is created:"),(0,i.mdx)("p",null,"Python file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_app.py")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import os\nimport hydra\nfrom omegaconf import DictConfig\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),(0,i.mdx)("p",null,"Let's take a look at one of the working directories:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),(0,i.mdx)("p",null,"We have the Hydra output directory (",(0,i.mdx)("inlineCode",{parentName:"p"},".hydra")," by default), and the application log file.\nInside the Hydra output directory we have:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),(0,i.mdx)("p",null,"And in the main output directory:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),(0,i.mdx)("h3",{id:"changing-or-disabling-the-output-subdir"},"Changing or disabling the output subdir"),(0,i.mdx)("p",null,"You can change the ",(0,i.mdx)("inlineCode",{parentName:"p"},".hydra")," subdirectory name by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.output_subdir"),".\nYou can disable its creation by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.output_subdir")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"null"),". "),(0,i.mdx)("h3",{id:"original-working-directory"},"Original working directory"),(0,i.mdx)("p",null,"You can still access the original working directory via ",(0,i.mdx)("inlineCode",{parentName:"p"},"get_original_cwd()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"to_absolute_path()")," in ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.utils"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'from hydra.utils import get_original_cwd, to_absolute_path\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    print(f"Current working directory : {os.getcwd()}")\n    print(f"Orig working directory    : {get_original_cwd()}")\n    print(f"to_absolute_path(\'foo\')   : {to_absolute_path(\'foo\')}")\n    print(f"to_absolute_path(\'/foo\')  : {to_absolute_path(\'/foo\')}")\n\nif __name__ == "__main__":\n    my_app()\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python examples/tutorial/8_working_directory/original_cwd.py"',title:'"$',python:!0,'examples/tutorial/8_working_directory/original_cwd.py"':!0},"Current working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path('foo')    : /Users/omry/dev/hydra/foo\nto_absolute_path('/foo')   : /foo\n")),(0,i.mdx)("p",null,"The name of the generated working directories can be ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.1/configure_hydra/workdir"},"customized"),"."))}m.isMDXComponent=!0}}]);