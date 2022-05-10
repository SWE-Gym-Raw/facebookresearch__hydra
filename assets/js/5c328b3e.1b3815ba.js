"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7259],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return p},mdx:function(){return y},useMDXComponents:function(){return d},withMDXComponents:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,m=c["".concat(i,".").concat(p)]||c[p]||f[p]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93899:function(e,t,n){n.d(t,{Z:function(){return s},T:function(){return u}});var r=n(87462),a=n(67294),o=n(39960),i=n(52263),l=n(80907);function s(e){return a.createElement(o.default,(0,r.Z)({},e,{to:(t=e.to,s=(0,l.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function u(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return a.createElement(s,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},38657:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(93899),l=["components"],s={id:"defaults",title:"Defaults List"},u=void 0,c={unversionedId:"tutorials/structured_config/defaults",id:"version-1.0/tutorials/structured_config/defaults",title:"Defaults List",description:"You can define a defaults list in your primary Structured Config just like you can in your primary config.yaml file.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/4_defaults.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/defaults",permalink:"/docs/1.0/tutorials/structured_config/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/4_defaults.md",tags:[],version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1652208947,formattedLastUpdatedAt:"5/10/2022",sidebarPosition:4,frontMatter:{id:"defaults",title:"Defaults List"},sidebar:"version-1.0/docs",previous:{title:"Config Groups",permalink:"/docs/1.0/tutorials/structured_config/config_groups"},next:{title:"Structured config schema",permalink:"/docs/1.0/tutorials/structured_config/schema"}},d=[{value:"Requiring users to specify a default list value",id:"requiring-users-to-specify-a-default-list-value",children:[],level:4}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(i.T,{to:"examples/tutorials/structured_configs/4_defaults",mdxType:"ExampleGithubLink"}),(0,o.mdx)("p",null,"You can define a defaults list in your primary Structured Config just like you can in your primary ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml")," file.\nThe example below extends the previous example by adding a defaults list that will load ",(0,o.mdx)("inlineCode",{parentName:"p"},"db=mysql")," by default."),(0,o.mdx)("div",{class:"alert alert--info",role:"alert"},"NOTE: You can still place your defaults list in your primary (YAML) config file (Example in next page)."),(0,o.mdx)("br",null),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:"{11-14,19,25}","{11-14,19,25}":!0},'from omegaconf import MISSING, OmegaConf  # Do not confuse with dataclass.MISSING\n\n@dataclass\nclass MySQLConfig:\n    ...\n\n@dataclass\nclass PostGreSQLConfig:\n    ...\n\ndefaults = [\n    # Load the config "mysql" from the config group "db"\n    {"db": "mysql"}\n]\n\n@dataclass\nclass Config:\n    # this is unfortunately verbose due to @dataclass limitations\n    defaults: List[Any] = field(default_factory=lambda: defaults)\n\n    # Hydra will populate this field based on the defaults list\n    db: Any = MISSING\n\ncs = ConfigStore.instance()\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\ncs.store(name="config", node=Config)\n\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n')),(0,o.mdx)("p",null,"Running ",(0,o.mdx)("inlineCode",{parentName:"p"},"my_app.py")," loads the mysql config option by default:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  ...\n")),(0,o.mdx)("p",null,"You can override the default option via the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql\ndb:\n  driver: postgresql\n  ...\n")),(0,o.mdx)("h4",{id:"requiring-users-to-specify-a-default-list-value"},"Requiring users to specify a default list value"),(0,o.mdx)("p",null,"Set ",(0,o.mdx)("inlineCode",{parentName:"p"},"db")," as ",(0,o.mdx)("inlineCode",{parentName:"p"},"MISSING")," to require the user to specify a value on the command line."),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Defaults list with a missing db"',title:'"Defaults',list:!0,with:!0,a:!0,missing:!0,'db"':!0},'defaults = [\n    {"db": MISSING}\n]\n\n\n'))),(0,o.mdx)("div",{className:"col  col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"$ python my_app.py\nYou must specify 'db', e.g, db=<OPTION>\nAvailable options:\n        mysql\n        postgresql\n")))))}f.isMDXComponent=!0}}]);