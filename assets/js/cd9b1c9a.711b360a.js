(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(277)),a=n(284),c={id:"dynamic_schema",title:"Dynamic schema with many configs"},s={unversionedId:"tutorials/structured_config/dynamic_schema",id:"version-1.0/tutorials/structured_config/dynamic_schema",isDocsHomePage:!1,title:"Dynamic schema with many configs",description:"In this page we will see how to get runtime type safety for configs with dynamic schema.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/7_dynamic_schema_many_configs.md",slug:"/tutorials/structured_config/dynamic_schema",permalink:"/docs/tutorials/structured_config/dynamic_schema",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/structured_config/7_dynamic_schema_many_configs.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1617667175,formattedLastUpdatedAt:"4/5/2021",sidebar:"version-1.0/docs",previous:{title:"Static schema with many configs",permalink:"/docs/tutorials/structured_config/static_schema"},next:{title:"Config Store API",permalink:"/docs/tutorials/structured_config/config_store"}},u=[],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{to:"examples/tutorials/structured_configs/7_dynamic_schema_many_configs",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"In this page we will see how to get runtime type safety for configs with dynamic schema.\nOur top level config contains a single field - ",Object(i.b)("inlineCode",{parentName:"p"},"db"),", with the type ",Object(i.b)("inlineCode",{parentName:"p"},"DBConfig"),".\nBased on user choice, we would like its type to be either ",Object(i.b)("inlineCode",{parentName:"p"},"MySQLConfig")," or ",Object(i.b)("inlineCode",{parentName:"p"},"PostGreSQLConfig")," at runtime.\nThe two schemas differs: config files that are appropriate for one are inappropriate for the other."),Object(i.b)("p",null,"For each of the two schemas, we have two options - one for prod and one for staging:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory"',title:'"Config','directory"':!0},"\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql_prod.yaml\n    \u251c\u2500\u2500 mysql_staging.yaml\n    \u251c\u2500\u2500 postgresql_prod.yaml\n    \u2514\u2500\u2500 postgresql_staging.yaml\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = MISSING\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    encoding: str = MISSING\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    timeout: int = MISSING\n\n@dataclass\nclass Config:\n    db: DBConfig = MISSING\n\ncs = ConfigStore.instance()\ncs.store(group="schema/db", name="mysql", node=MySQLConfig, package="db")\ncs.store(group="schema/db", name="postgresql", node=PostGreSQLConfig, package="db")\ncs.store(name="config", node=Config)\n\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),Object(i.b)("p",null,"When composing the config, we need to select both the schema and the actual config group option.\nThis is what the defaults list looks like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - schema/db: mysql\n  - db: mysql_staging\n")),Object(i.b)("p",null,"Let's dissect the how we store the schemas into the ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigStore"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'cs.store(group="schema/db", name="mysql", node=MySQLConfig, package="db")\n')),Object(i.b)("p",null,"There are several notable things here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use the group ",Object(i.b)("inlineCode",{parentName:"li"},"schema/db")," and not ",Object(i.b)("inlineCode",{parentName:"li"},"db"),".",Object(i.b)("br",{parentName:"li"}),"Config Groups are mutually exclusive, only one option can be selected from a Config Group. We want to select both the schema and the config.\nStoring all schemas in subgroups of the config group schema is good practice. This also helps in preventing name collisions."),Object(i.b)("li",{parentName:"ul"},"We need to specify the package to be ",Object(i.b)("inlineCode",{parentName:"li"},"db"),".\nBy default, the package for configs stored in the ",Object(i.b)("inlineCode",{parentName:"li"},"ConfigStore")," is ",Object(i.b)("inlineCode",{parentName:"li"},"_group_"),". We want to schematize ",Object(i.b)("inlineCode",{parentName:"li"},"db")," and not ",Object(i.b)("inlineCode",{parentName:"li"},"schema.db")," in the config so we have to override that. ")),Object(i.b)("p",null,"By default, we get the mysql staging config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"db:\n  driver: mysql\n  host: mysql001.staging\n  encoding: utf-8\n")),Object(i.b)("p",null,"We can change both the schema and the config: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py schema/db=postgresql db=postgresql_prod"',title:'"$',python:!0,"my_app.py":!0,"schema/db":"postgresql",db:'postgresql_prod"'},"db:\n  driver: postgresql\n  host: postgresql01.prod\n  timeout: 10\n")),Object(i.b)("p",null,"If we try to use a postgresql config without changing the schema as well we will get an error:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py db=postgresql_prod"',title:'"$',python:!0,"my_app.py":!0,db:'postgresql_prod"'},"Error merging db=postgresql_prod\nKey 'timeout' not in 'MySQLConfig'\n        full_key: db.timeout\n        reference_type=DBConfig\n        object_type=MySQLConfig\n")))}p.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,g=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(g,c(c({ref:t},u),{},{components:n})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},278:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},279:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(11),a=n(278),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(280),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,f=e.to,g=e.href,m=e.activeClassName,b=e.isActive,h=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(r.useContext)(s),_=f||g,C=Object(a.a)(_),D=null==_?void 0:_.replace("pathname://",""),N=void 0!==D?(n=D,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,A=Object(r.useRef)(!1),P=d?i.e:i.c,x=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!x&&C&&window.docusaurus.prefetch(N),function(){x&&p&&p.disconnect()}}),[N,x,C]);var S=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,L=!N||!C||S;return N&&C&&!S&&!h&&w.collectLink(N),L?o.a.createElement("a",Object.assign({href:N},_&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(P,Object.assign({},O,{onMouseEnter:function(){A.current||(window.docusaurus.preload(N),A.current=!0)},innerRef:function(e){var t,n;x&&e&&C&&(t=e,n=function(){window.docusaurus.prefetch(N)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:N||""},d&&{isActive:b,activeClassName:m}))}},280:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(10),o=n(278);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},281:function(e,t,n){try{e.exports=n(282)}catch(o){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),o=n(38),i=n(283);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return i.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getDocVersionSuggestions(n,o)}},283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,i,a=t.getActiveVersion(e,n),c=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(o=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},284:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),o=n(0),i=n.n(o),a=n(279),c=n(10),s=n(281);function u(e){return i.a.createElement(a.a,Object(r.a)({},e,{to:(t=e.to,o=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,o}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(u,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);