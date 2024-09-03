"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1046],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){return function(t){var n=m(t.components);return r.createElement(e,o({},t,{components:n}))}},m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49595:(e,t,n)=>{n.d(t,{A:()=>p,C:()=>s});var r=n(58168),a=n(96540),o=n(75489),i=n(44586),l=n(74098);function p(e){return a.createElement(o.default,(0,r.A)({},e,{to:(t=e.to,p=(0,l.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==p?void 0:p.name)?n:"current"]+t),target:"_blank"}));var t,n,p}function s(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return a.createElement(p,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},67298:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var r=n(58168),a=n(98587),o=(n(96540),n(15680)),i=n(49595),l=["components"],p={id:"config_file",title:"Specifying a config file"},s=void 0,c={unversionedId:"tutorials/basic/your_first_app/config_file",id:"version-1.3/tutorials/basic/your_first_app/config_file",title:"Specifying a config file",description:"It can get tedious to type all those command line arguments.",source:"@site/versioned_docs/version-1.3/tutorials/basic/your_first_app/2_config_file.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/config_file",permalink:"/docs/1.3/tutorials/basic/your_first_app/config_file",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.3/tutorials/basic/your_first_app/2_config_file.md",tags:[],version:"1.3",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",sidebarPosition:2,frontMatter:{id:"config_file",title:"Specifying a config file"},sidebar:"docs",previous:{title:"A simple command-line application",permalink:"/docs/1.3/tutorials/basic/your_first_app/simple_cli"},next:{title:"Using the config object",permalink:"/docs/1.3/tutorials/basic/your_first_app/using_config"}},m=[],d={toc:m};function u(e){var t=e.components,n=(0,a.A)(e,l);return(0,o.mdx)("wrapper",(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(i.C,{to:"examples/tutorials/basic/your_first_hydra_app/2_config_file",mdxType:"ExampleGithubLink"}),(0,o.mdx)("p",null,"It can get tedious to type all those command line arguments.\nYou can solve it by creating a configuration file next to my_app.py.\nHydra configuration files are yaml files and should have the .yaml file extension."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"db: \n  driver: mysql\n  user: omry\n  password: secret\n")),(0,o.mdx)("p",null,"Specify the config name by passing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_name")," parameter to the ",(0,o.mdx)("strong",{parentName:"p"},"@hydra.main()")," decorator.\nNote that you should omit the ",(0,o.mdx)("strong",{parentName:"p"},".yaml")," extension.\nHydra also needs to know where to find your config. Specify the directory containing it relative to the application by passing ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path"),": "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py" {4}',title:'"my_app.py"',"{4}":!0},'from omegaconf import DictConfig, OmegaConf\nimport hydra\n\n@hydra.main(version_base=None, config_path=".", config_name="config")\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),(0,o.mdx)("p",null,"You can override values in the loaded config from the command line.",(0,o.mdx)("br",{parentName:"p"}),"\n","Note the lack of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"+")," prefix."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-5}","{4-5}":!0},"$ python my_app.py db.user=root db.password=1234\ndb:\n  driver: mysql\n  user: root\n  password: 1234\n")),(0,o.mdx)("p",null,"Use ",(0,o.mdx)("inlineCode",{parentName:"p"},"++")," to override a config value if it's already in the config, or add it otherwise.\ne.g:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"# Override an existing item\n$ python my_app.py ++db.password=1234\n\n# Add a new item\n$ python my_app.py ++db.timeout=5\n")),(0,o.mdx)("p",null,"You can enable ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.3/tutorials/basic/running_your_app/tab_completion"},"tab completion")," for your Hydra applications."))}u.isMDXComponent=!0}}]);