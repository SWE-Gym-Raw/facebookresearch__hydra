(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(269)),o=n(276),c={id:"search_path",title:"Config Search Path"},s={unversionedId:"advanced/search_path",id:"advanced/search_path",isDocsHomePage:!1,title:"Config Search Path",description:"The Config Search Path is a list of paths that Hydra searches in order to find configs. It is similar to",source:"@site/docs/advanced/search_path.md",slug:"/advanced/search_path",permalink:"/docs/next/advanced/search_path",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/search_path.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1621480952,formattedLastUpdatedAt:"5/20/2021",sidebar:"docs",previous:{title:"Packages",permalink:"/docs/next/advanced/overriding_packages"},next:{title:"Instantiating objects with Hydra",permalink:"/docs/next/advanced/instantiate_objects/overview"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Config Search Path is a list of paths that Hydra searches in order to find configs. It is similar to\nthe Python ",Object(r.b)("inlineCode",{parentName:"p"},"PYTHONPATH"),". "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When a config is requested, The first matching config in the search path is used."),Object(r.b)("li",{parentName:"ul"},"Each search path element has a schema prefix such as ",Object(r.b)("inlineCode",{parentName:"li"},"file://")," or ",Object(r.b)("inlineCode",{parentName:"li"},"pkg://")," that corresponds to a ",Object(r.b)("inlineCode",{parentName:"li"},"ConfigSourcePlugin"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"file://")," points to a file system path. It can either be an absolute path or a relative path.\nRelative path will be resolved to absolute based on the current working dir. Path separator is ",Object(r.b)("inlineCode",{parentName:"li"},"/")," on all Operating\nSystems."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pkg://")," points to an importable Python module, with ",Object(r.b)("inlineCode",{parentName:"li"},".")," being the separator. ",Object(r.b)("inlineCode",{parentName:"li"},"__init__.py")," files are needed in\ndirectories for Python to treat them as packages.")))),Object(r.b)("p",null,"You can inspect the search path and the configurations loaded by Hydra via the ",Object(r.b)("inlineCode",{parentName:"p"},"--info")," flag:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py --info searchpath\n")),Object(r.b)("p",null,"There are a few ways to modify the config search path, enabling Hydra to access configuration in\ndifferent locations.\nUse a combination of the methods described below:"),Object(r.b)("h4",{id:"using-hydramain"},"Using ",Object(r.b)("inlineCode",{parentName:"h4"},"@hydra.main()")),Object(r.b)("p",null,"Using the  ",Object(r.b)("inlineCode",{parentName:"p"},"config_path")," parameter ",Object(r.b)("inlineCode",{parentName:"p"},"@hydra.main()"),".  The ",Object(r.b)("inlineCode",{parentName:"p"},"config_path")," is relative to location of the Python script."),Object(r.b)("h4",{id:"overriding-hydrasearchpath-config"},"Overriding ",Object(r.b)("inlineCode",{parentName:"h4"},"hydra.searchpath")," config"),Object(r.b)(o.a,{text:"Example application",to:"examples/advanced/config_search_path",mdxType:"ExampleGithubLink"}),Object(r.b)("p",null,"In some cases you may want to add multiple locations to the search path.\nFor example, an app may want to read the configs from an additional Python module or\nan additional directory on the file system.",Object(r.b)("br",{parentName:"p"}),"\n","Configure this using ",Object(r.b)("inlineCode",{parentName:"p"},"hydra.searchpath")," in your primary config or your command line."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"hydra.searchpath can ",Object(r.b)("strong",{parentName:"p"},"only")," be configured in the primary config. Attempting  to configure it in other configs will result in an error."))),Object(r.b)("p",null,"In this example, we add a second config directory - ",Object(r.b)("inlineCode",{parentName:"p"},"additional_conf"),", next to the first config directory:"),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--4"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 __init__.py\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 dataset\n\u2502\xa0\xa0     \u2514\u2500\u2500 cifar10.yaml\n\u251c\u2500\u2500 additonal_conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u2514\u2500\u2500 dataset\n\u2502\xa0\xa0     \u2514\u2500\u2500 imagenet.yaml\n\u2514\u2500\u2500 my_app.py\n"))),Object(r.b)("div",{className:"col  col--8"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n')))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"conf/config.yaml")," is the primary config for ",Object(r.b)("inlineCode",{parentName:"p"},"my_app.py"),", config groups ",Object(r.b)("inlineCode",{parentName:"p"},"cifar10")," and ",Object(r.b)("inlineCode",{parentName:"p"},"imagenet")," are\nunder different folders.\nWe can add ",Object(r.b)("inlineCode",{parentName:"p"},"additonal_conf")," to  ",Object(r.b)("inlineCode",{parentName:"p"},"hydra.searchpath")," for Hydra to discover ",Object(r.b)("inlineCode",{parentName:"p"},"dataset/imagenet"),"."),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--7"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - dataset: cifar10\n\nhydra:\n  searchpath:\n    - pkg://additonal_conf\n    # You can also use file based schema:\n    # - file:///etc/my_app\n    # - file://${oc.env:HOME}/.my_app\n"))),Object(r.b)("div",{className:"col  col--5"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py output"',title:'"my_app.py','output"':!0},"dataset:\n  name: cifar10\n  path: /datasets/cifar10\n\n\n\n\n\n\n")))),Object(r.b)("p",null,"Overriding ",Object(r.b)("inlineCode",{parentName:"p"},"dataset=imagenet")," from the commandline:"),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="command line override"',title:'"command',line:!0,'override"':!0},"python my_app.py dataset=imagenet\n\n\n"))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py output"',title:'"my_app.py','output"':!0},"dataset:\n  name: imagenet\n  path: /datasets/imagenet\n")))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"hydra.searchpath")," can be defined or overridden via the command line as well:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="command line override"',title:'"command',line:!0,'override"':!0},"python my_app.py 'hydra.searchpath=[pkg://additonal_conf]'\n")),Object(r.b)("h4",{id:"overriding---config-dir-from-the-command-line"},"Overriding ",Object(r.b)("inlineCode",{parentName:"h4"},"--config-dir")," from the command line"),Object(r.b)("p",null,"This is a less flexible alternative to ",Object(r.b)("inlineCode",{parentName:"p"},"hydra.searchpath"),".\nSee this ",Object(r.b)("a",{parentName:"p",href:"/docs/advanced/hydra-command-line-flags"},"page")," for more info."),Object(r.b)("h4",{id:"creating-a-searchpathplugin"},"Creating a ",Object(r.b)("inlineCode",{parentName:"h4"},"SearchPathPlugin")),Object(r.b)(o.a,{text:"ExampleSearchPathPlugin",to:"examples/plugins/example_searchpath_plugin/",mdxType:"ExampleGithubLink"}),Object(r.b)("p",null,"Framework authors may want to add their configs to the search path automatically once their package is installed,\neliminating the need for any actions from the users.\nThis can be achieved using a ",Object(r.b)("inlineCode",{parentName:"p"},"SearchPathPlugin"),". Check the example plugin linked above for more details."))}p.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},270:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},271:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(11),o=n(270),c=n(7),s=Object(a.createContext)({collectLink:function(){}}),l=n(272),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,b=e.to,m=e.href,f=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,O=void 0===v||v,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(l.b)().withBaseUrl,N=Object(a.useContext)(s),w=b||m,_=Object(o.a)(w),C=null==w?void 0:w.replace("pathname://",""),P=void 0!==C?(n=C,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,x=Object(a.useRef)(!1),D=d?r.e:r.c,A=c.default.canUseIntersectionObserver;Object(a.useEffect)((function(){return!A&&_&&window.docusaurus.prefetch(P),function(){A&&p&&p.disconnect()}}),[P,A,_]);var k=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,V=!P||!_||k;return P&&_&&!k&&!g&&N.collectLink(P),V?i.a.createElement("a",Object.assign({href:P},w&&!_&&{target:"_blank",rel:"noopener noreferrer"},y)):i.a.createElement(D,Object.assign({},y,{onMouseEnter:function(){x.current||(window.docusaurus.preload(P),x.current=!0)},innerRef:function(e){var t,n;A&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(P)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:P||""},d&&{isActive:h,activeClassName:f}))}},272:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(10),i=n(270);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,c=void 0!==o&&o,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},273:function(e,t,n){try{e.exports=n(274)}catch(i){var a={};e.exports={useAllDocsData:function(){return a},useActivePluginAndVersion:function(){}}}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(23),i=n(38),r=n(275);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=a.useLocation().pathname;return r.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:r.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return r.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getDocVersionSuggestions(n,i)}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),r=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!r&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return r},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,r,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(i=c.id,r={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(r[e.name]=t)}))})),r):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),r=i.activeVersion!==a;return{latestDocSuggestion:r?null==i?void 0:i.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:r?a:void 0}}},276:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(3),i=n(0),r=n.n(i),o=n(271),c=n(10),s=n(273);function l(e){return r.a.createElement(o.a,Object(a.a)({},e,{to:(t=e.to,i=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function u(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return r.a.createElement(l,e,r.a.createElement("span",null,"\xa0"),r.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);