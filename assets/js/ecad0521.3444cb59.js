"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1978],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>p});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){return function(t){var n=d(t.components);return i.createElement(e,a({},t,{components:n}))}},d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(f,c(c({ref:t},l),{},{components:n})):i.createElement(f,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49595:(e,t,n)=>{n.d(t,{A:()=>s,C:()=>l});var i=n(58168),r=n(96540),a=n(75489),o=n(44586),c=n(74098);function s(e){return r.createElement(a.default,(0,i.A)({},e,{to:(t=e.to,s=(0,c.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function l(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return r.createElement(s,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},52050:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var i=n(58168),r=n(98587),a=(n(96540),n(15680)),o=n(49595),c=["components"],s={id:"unit_testing",title:"Hydra in Unit Tests"},l=void 0,p={unversionedId:"advanced/unit_testing",id:"version-1.1/advanced/unit_testing",title:"Hydra in Unit Tests",description:"Use initialize(), initializeconfigmodule() or initializeconfigdir() in conjunction with compose()",source:"@site/versioned_docs/version-1.1/advanced/unit_testing.md",sourceDirName:"advanced",slug:"/advanced/unit_testing",permalink:"/docs/1.1/advanced/unit_testing",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/unit_testing.md",tags:[],version:"1.1",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",frontMatter:{id:"unit_testing",title:"Hydra in Unit Tests"},sidebar:"version-1.1/docs",previous:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/1.1/advanced/jupyter_notebooks"},next:{title:"Introduction",permalink:"/docs/1.1/experimental/intro"}},d=[],m={toc:d};function u(e){var t=e.components,n=(0,r.A)(e,c);return(0,a.mdx)("wrapper",(0,i.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Use ",(0,a.mdx)("inlineCode",{parentName:"p"},"initialize()"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"initialize_config_module()")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"initialize_config_dir()")," in conjunction with ",(0,a.mdx)("inlineCode",{parentName:"p"},"compose()"),"\nto compose configs inside your unit tests.",(0,a.mdx)("br",{parentName:"p"}),"\n","Be sure to read the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/1.1/advanced/compose_api"},"Compose API documentation"),"."),(0,a.mdx)("p",null,"The Hydra example application contains an ",(0,a.mdx)(o.A,{to:"examples/advanced/hydra_app_example/tests/test_example.py",mdxType:"GithubLink"},"example test"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Testing example with initialize()"',title:'"Testing',example:!0,with:!0,'initialize()"':!0},'from hydra import initialize, compose\n# 1. initialize will add config_path the config search path within the context\n# 2. The module with your configs should be importable. \n#    it needs to have a __init__.py (can be empty).\n# 3. THe config path is relative to the file calling initialize (this file)\ndef test_with_initialize() -> None:\n    with initialize(config_path="../hydra_app/conf"):\n        # config is relative to a module\n        cfg = compose(config_name="config", overrides=["app.user=test_user"])\n        assert cfg == {\n            "app": {"user": "test_user", "num1": 10, "num2": 20},\n            "db": {"host": "localhost", "port": 3306},\n        }\n')),(0,a.mdx)("p",null,"For an idea about how to modify Hydra's search path when using ",(0,a.mdx)("inlineCode",{parentName:"p"},"compose")," in\nunit tests, see the page on\n",(0,a.mdx)("a",{parentName:"p",href:"/docs/1.1/advanced/search_path#overriding-hydrasearchpath-config"},"overriding the ",(0,a.mdx)("inlineCode",{parentName:"a"},"hydra.searchpath")," config"),"."))}u.isMDXComponent=!0}}]);