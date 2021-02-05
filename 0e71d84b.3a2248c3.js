(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{268:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n.n(r);function a(e){var t=Object(r.useRef)(null),n=Object(r.useRef)("undefined"!=typeof document?document.createElement("script"):null);return Object(r.useEffect)((function(){t.current.appendChild(n.current)}),[]),Object(r.useEffect)((function(){for(var t in e)e.hasOwnProperty(t)&&(n.current[t]=e[t])})),o.a.createElement("div",{ref:t})}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(268)),i=n(284),c={id:"tab_completion",title:"Tab completion",sidebar_label:"Tab completion"},l={unversionedId:"tutorial/tab_completion",id:"version-0.11/tutorial/tab_completion",isDocsHomePage:!1,title:"Tab completion",description:"You can enable shell TAB completion, for example:",source:"@site/versioned_docs/version-0.11/tutorial/7_tab_completion.md",slug:"/tutorial/tab_completion",permalink:"/docs/0.11/tutorial/tab_completion",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/7_tab_completion.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1612489607,sidebar_label:"Tab completion",sidebar:"version-0.11/docs",previous:{title:"Multi-run",permalink:"/docs/0.11/tutorial/multi-run"},next:{title:"Output/Working directory",permalink:"/docs/0.11/tutorial/working_directory"}},p=[],u={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can enable shell TAB completion, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'eval "$(python my_app.py -sc install=SHELL_NAME)"\n')),Object(a.b)("p",null,"Get the exact command to install the completion from ",Object(a.b)("inlineCode",{parentName:"p"},"--hydra-help"),"."),Object(a.b)("p",null,"Replace SHELL_NAME by your shell name, currently, only Bash is supported and we are relying on the community to implement completion plugins for additional shells."),Object(a.b)("p",null,"Tab completion can complete config groups, configuration nodes and values and also paths if they start with ",Object(a.b)("inlineCode",{parentName:"p"},".")," or ",Object(a.b)("inlineCode",{parentName:"p"},"/"),"."),Object(a.b)("p",null,"See this short video demonstration of tab completion:"),Object(a.b)(i.a,{id:"asciicast-272604",src:"https://asciinema.org/a/272604.js",async:!0,mdxType:"Script"}))}s.isMDXComponent=!0}}]);