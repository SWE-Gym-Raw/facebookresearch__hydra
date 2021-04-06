(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{265:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return u})),n.d(e,"default",(function(){return d}));var r=n(3),i=n(8),o=(n(0),n(277)),a=n(284),c={id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},s={unversionedId:"tutorials/structured_config/intro",id:"tutorials/structured_config/intro",isDocsHomePage:!1,title:"Introduction to Structured Configs",description:"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the Basic Tutorial.",source:"@site/docs/tutorials/structured_config/0_intro.md",slug:"/tutorials/structured_config/intro",permalink:"/docs/next/tutorials/structured_config/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/0_intro.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1617667175,formattedLastUpdatedAt:"4/5/2021",sidebar_label:"Introduction to Structured Configs",sidebar:"docs",previous:{title:"Tab completion",permalink:"/docs/next/tutorials/basic/running_your_app/tab_completion"},next:{title:"Minimal example",permalink:"/docs/next/tutorials/structured_config/minimal_example"}},u=[],l={toc:u};function d(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the ",Object(o.b)("a",{parentName:"p",href:"/docs/next/tutorials/basic/your_first_app/simple_cli"},"Basic Tutorial"),".\nThe examples in this tutorial are available ",Object(o.b)(a.b,{to:"examples/tutorials/structured_configs",mdxType:"GithubLink"},"here"),"."),Object(o.b)("p",null,"Structured Configs use Python ",Object(o.b)("a",{parentName:"p",href:"https://docs.python.org/3.7/library/dataclasses.html"},"dataclasses")," to\ndescribe your configuration structure and types. They enable:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Runtime type checking")," as you compose or mutate your config "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Static type checking")," when using static type checkers (mypy, PyCharm, etc.)")),Object(o.b)("h4",{id:"structured-configs-supports"},"Structured Configs supports:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Primitive types (",Object(o.b)("inlineCode",{parentName:"li"},"int"),", ",Object(o.b)("inlineCode",{parentName:"li"},"bool"),", ",Object(o.b)("inlineCode",{parentName:"li"},"float"),", ",Object(o.b)("inlineCode",{parentName:"li"},"str"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Enums"),") "),Object(o.b)("li",{parentName:"ul"},"Nesting of Structured Configs"),Object(o.b)("li",{parentName:"ul"},"Containers (List and Dict) containing primitives or Structured Configs"),Object(o.b)("li",{parentName:"ul"},"Optional fields")),Object(o.b)("h4",{id:"structured-configs-limitations"},"Structured Configs Limitations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Union")," types are not supported (except ",Object(o.b)("inlineCode",{parentName:"li"},"Optional"),")"),Object(o.b)("li",{parentName:"ul"},"User methods are not supported")),Object(o.b)("h4",{id:"there-are-two-primary-patterns-for-using-structured-configs"},"There are two primary patterns for using Structured configs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As a ",Object(o.b)("a",{parentName:"li",href:"/docs/next/tutorials/structured_config/minimal_example"},"config"),", in place of configuration files (often a starting place)"),Object(o.b)("li",{parentName:"ul"},"As a ",Object(o.b)("a",{parentName:"li",href:"/docs/next/tutorials/structured_config/schema"},"config schema")," validating configuration files (better for complex use cases)")),Object(o.b)("p",null,"With both patterns, you still get everything Hydra has to offer (config composition, Command line overrides etc).\nThis tutorial covers both. ","*",Object(o.b)("strong",{parentName:"p"},"Read it in order"),"*","."),Object(o.b)("p",null,"Hydra supports OmegaConf's Structured Configs via the ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigStore")," API.\nThis tutorial does not assume any knowledge of them.\nIt is recommended that you visit the ",Object(o.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html",target:"_blank"},"OmegaConf Structured Configs page")," to learn more later."))}d.isMDXComponent=!0},277:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=i.a.createContext({}),l=function(t){var e=i.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=l(t.components);return i.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},p=i.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=l(n),p=r,b=d["".concat(a,".").concat(p)]||d[p]||f[p]||o;return n?i.a.createElement(b,c(c({ref:e},u),{},{components:n})):i.a.createElement(b,c({ref:e},u))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},278:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}))},279:function(t,e,n){"use strict";var r=n(0),i=n.n(r),o=n(11),a=n(278),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(280),l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};e.a=function(t){var e,n,d,f=t.isNavLink,p=t.to,b=t.href,g=t.activeClassName,m=t.isActive,v=t["data-noBrokenLinkCheck"],h=t.autoAddBaseUrl,O=void 0===h||h,y=l(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,D=Object(r.useContext)(s),w=p||b,C=Object(a.a)(w),x=null==w?void 0:w.replace("pathname://",""),A=void 0!==x?(n=x,O&&function(t){return t.startsWith("/")}(n)?j(n):n):void 0,P=Object(r.useRef)(!1),N=f?o.e:o.c,V=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!V&&C&&window.docusaurus.prefetch(A),function(){V&&d&&d.disconnect()}}),[A,V,C]);var _=null!==(e=null==A?void 0:A.startsWith("#"))&&void 0!==e&&e,k=!A||!C||_;return A&&C&&!_&&!v&&D.collectLink(A),k?i.a.createElement("a",Object.assign({href:A},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},y)):i.a.createElement(N,Object.assign({},y,{onMouseEnter:function(){P.current||(window.docusaurus.preload(A),P.current=!0)},innerRef:function(t){var e,n;V&&t&&C&&(e=t,n=function(){window.docusaurus.prefetch(A)},(d=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),n())}))}))).observe(e))},to:A||""},f&&{isActive:m,activeClassName:g}))}},280:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var r=n(10),i=n(278);function o(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return e+n;var l=n.startsWith(e)?n:e+n.replace(/^\//,"");return u?t+l:l}(o,n,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},281:function(t,e,n){try{t.exports=n(282)}catch(i){var r={};t.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},282:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDocVersionSuggestions=e.useActiveDocContext=e.useActiveVersion=e.useLatestVersion=e.useVersions=e.useActivePluginAndVersion=e.useActivePlugin=e.useDocsData=e.useAllDocsData=void 0;var r=n(23),i=n(38),o=n(283);e.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},e.useDocsData=function(t){return i.usePluginData("docusaurus-plugin-content-docs",t)},e.useActivePlugin=function(t){void 0===t&&(t={});var n=e.useAllDocsData(),i=r.useLocation().pathname;return o.getActivePlugin(n,i,t)},e.useActivePluginAndVersion=function(t){void 0===t&&(t={});var n=e.useActivePlugin(t),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,i)}},e.useVersions=function(t){return e.useDocsData(t).versions},e.useLatestVersion=function(t){var n=e.useDocsData(t);return o.getLatestVersion(n)},e.useActiveVersion=function(t){var n=e.useDocsData(t),i=r.useLocation().pathname;return o.getActiveVersion(n,i)},e.useActiveDocContext=function(t){var n=e.useDocsData(t),i=r.useLocation().pathname;return o.getActiveDocContext(n,i)},e.useDocVersionSuggestions=function(t){var n=e.useDocsData(t),i=r.useLocation().pathname;return o.getDocVersionSuggestions(n,i)}},283:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDocVersionSuggestions=e.getActiveDocContext=e.getActiveVersion=e.getLatestVersion=e.getActivePlugin=void 0;var r=n(23);e.getActivePlugin=function(t,e,n){void 0===n&&(n={});var i=Object.entries(t).find((function(t){t[0];var n=t[1];return!!r.matchPath(e,{path:n.path,exact:!1,strict:!1})})),o=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+e+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(t).map((function(t){return t.path})).join(", "));return o},e.getLatestVersion=function(t){return t.versions.find((function(t){return t.isLast}))},e.getActiveVersion=function(t,n){var i=e.getLatestVersion(t);return[].concat(t.versions.filter((function(t){return t!==i})),[i]).find((function(t){return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})}))},e.getActiveDocContext=function(t,n){var i,o,a=e.getActiveVersion(t,n),c=null==a?void 0:a.docs.find((function(t){return!!r.matchPath(n,{path:t.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(i=c.id,o={},t.versions.forEach((function(t){t.docs.forEach((function(e){e.id===i&&(o[t.name]=e)}))})),o):{}}},e.getDocVersionSuggestions=function(t,n){var r=e.getLatestVersion(t),i=e.getActiveDocContext(t,n),o=i.activeVersion!==r;return{latestDocSuggestion:o?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},284:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var r=n(3),i=n(0),o=n.n(i),a=n(279),c=n(10),s=n(281);function u(t){return o.a.createElement(a.a,Object(r.a)({},t,{to:(e=t.to,i=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+e),target:"_blank"}));var e,n,i}function l(t){var e,n=null!==(e=t.text)&&void 0!==e?e:"Example";return o.a.createElement(u,t,o.a.createElement("span",null,"\xa0"),o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);