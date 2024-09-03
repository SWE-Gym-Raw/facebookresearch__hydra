"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7249],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>p});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){return function(t){var n=d(t.components);return a.createElement(e,i({},t,{components:n}))}},d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67600:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(58168),r=n(98587),i=(n(96540),n(15680)),o=["components"],s={id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},l=void 0,c={unversionedId:"patterns/instantiate_objects/overview",id:"version-1.0/patterns/instantiate_objects/overview",title:"Instantiating objects with Hydra",description:"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.",source:"@site/versioned_docs/version-1.0/patterns/instantiate_objects/overview.md",sourceDirName:"patterns/instantiate_objects",slug:"/patterns/instantiate_objects/overview",permalink:"/docs/1.0/patterns/instantiate_objects/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/patterns/instantiate_objects/overview.md",tags:[],version:"1.0",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",frontMatter:{id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},sidebar:"version-1.0/docs",previous:{title:"Config Store API",permalink:"/docs/1.0/tutorials/structured_config/config_store"},next:{title:"Config files example",permalink:"/docs/1.0/patterns/instantiate_objects/config_files"}},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.A)(e,o);return(0,i.mdx)("wrapper",(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),(0,i.mdx)("p",null,"Hydra provides ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.utils.call()")," (and its alias ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.utils.instantiate()"),") for instantiating objects and calling functions. Prefer ",(0,i.mdx)("inlineCode",{parentName:"p"},"instantiate")," for creating objects and ",(0,i.mdx)("inlineCode",{parentName:"p"},"call")," for invoking functions."),(0,i.mdx)("p",null,"Call/instantiate supports:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Class names : Call the ",(0,i.mdx)("inlineCode",{parentName:"li"},"__init__")," method"),(0,i.mdx)("li",{parentName:"ul"},"Callables like functions, static functions, class methods and objects")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def call(config: Any, *args: Any, **kwargs: Any) -> Any:\n    """\n    :param config: An object describing what to call and what params to use.\n                   Must have a _target_ field.\n    :param args: optional positional parameters pass-through\n    :param kwargs: optional named parameters pass-through\n    :return: the return value from the specified class or method\n    """\n    ...\n\n# Alias for call\ninstantiate = call\n')),(0,i.mdx)("p",null,"The config passed to these functions must have a key called ",(0,i.mdx)("inlineCode",{parentName:"p"},"_target_"),", with the value of a fully qualified class name, class method, static method or callable.",(0,i.mdx)("br",{parentName:"p"}),"\n","Any additional parameters are passed as keyword arguments to the target."),(0,i.mdx)("p",null,"For example, your application may have a User class that looks like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="user.py"',title:'"user.py"'},"class User:\n  name: str\n  age : int\n  \n  def __init__(self, name: str, age: int):\n    self.name = name\n    self.age = age\n")),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Config"',title:'"Config"'},"bond:\n  _target_: user.User\n  name: Bond\n  age: 7\n"))),(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Instantiation"',title:'"Instantiation"'},'user : User = instantiate(cfg.bond)\nassert isinstance(user, user.User)\nassert user.name == "Bond"\nassert user.age == 7\n')))),(0,i.mdx)("p",null,"For convenience, instantiate/call returns ",(0,i.mdx)("inlineCode",{parentName:"p"},"None")," when receiving ",(0,i.mdx)("inlineCode",{parentName:"p"},"None")," as input."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"assert instantiate(None) is None\n")))}m.isMDXComponent=!0}}]);