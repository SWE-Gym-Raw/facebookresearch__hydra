(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{269:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(8),a=(n(0),n(269)),i={id:"composition",title:"Config composition",sidebar_label:"Config composition"},s={unversionedId:"tutorial/composition",id:"version-0.11/tutorial/composition",isDocsHomePage:!1,title:"Config composition",description:"As software gets more complex, we resort to modularity and composition to keep it manageable.",source:"@site/versioned_docs/version-0.11/tutorial/5_composition.md",slug:"/tutorial/composition",permalink:"/docs/0.11/tutorial/composition",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/5_composition.md",version:"0.11",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1621480952,formattedLastUpdatedAt:"5/20/2021",sidebar_label:"Config composition",sidebar:"version-0.11/docs",previous:{title:"Defaults",permalink:"/docs/0.11/tutorial/defaults"},next:{title:"Multi-run",permalink:"/docs/0.11/tutorial/multi-run"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As software gets more complex, we resort to modularity and composition to keep it manageable.\nWe can do the same with configs: suppose we want our working example to support multiple databases, with\nmultiple schemas per database, and different UIs. We wouldn't write a separate class\nfor each permutation of db, schema and UI, so we shouldn't write separate configs either. We use\nthe same solution in configuration as in writing the underlying software: composition. "),Object(a.b)("p",null,"To do this in Hydra, we first add a ",Object(a.b)("inlineCode",{parentName:"p"},"schema")," and a ",Object(a.b)("inlineCode",{parentName:"p"},"ui")," config group:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 postgresql.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 schema\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 school.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 support.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 warehouse.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 ui\n\u2502\xa0\xa0     \u251c\u2500\u2500 full.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 view.yaml\n\u2514\u2500\u2500 my_app.py\n")),Object(a.b)("p",null,"With these configs, we already have 12 possible combinations. Without composition we would need 12 separate configs,\nand a single change (such as renaming ",Object(a.b)("inlineCode",{parentName:"p"},"db.user")," to ",Object(a.b)("inlineCode",{parentName:"p"},"db.username"),") would need to be done separately in every one of them. "),Object(a.b)("p",null,"This is a maintainability nightmare -- but composition can come to the rescue."),Object(a.b)("p",null,"Configuration file: ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - db: mysql\n  - ui: full\n  - schema: school\n")),Object(a.b)("p",null,"The defaults are ordered:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If there are two configurations that defines the same value, the second one would win. "),Object(a.b)("li",{parentName:"ul"},"If two configurations are contributing to the same dictionary the result would be the combined dictionary.")),Object(a.b)("p",null,"When running this, we will compose a configuration with ",Object(a.b)("inlineCode",{parentName:"p"},"mysql"),", ",Object(a.b)("inlineCode",{parentName:"p"},"full")," ui and the ",Object(a.b)("inlineCode",{parentName:"p"},"school")," database schema (which we are seeing for the first time here):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\nschema:\n  database: school\n  tables:\n  - fields:\n    - name: string\n    - class: int\n    name: students\n  - fields:\n    - profession: string\n    - time: data\n    - class: int\n    name: exams\nui:\n  windows:\n    create_db: true\n    view: true\n")),Object(a.b)("p",null,"In much the same way you can compose any of the other 11 configurations by adding appropriate overrides such as ",Object(a.b)("inlineCode",{parentName:"p"},"db=postgresql"),"."))}p.isMDXComponent=!0}}]);