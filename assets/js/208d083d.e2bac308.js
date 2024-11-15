"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3828],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){return function(t){var n=c(t.components);return r.createElement(e,o({},t,{components:n}))}},c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72852:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(58168),a=n(98587),o=(n(96540),n(15680)),i=["components"],s={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},l=void 0,p={unversionedId:"tutorials/basic/running_your_app/multi-run",id:"version-1.1/tutorials/basic/running_your_app/multi-run",title:"Multi-run",description:"Sometimes you want to run the same application with multiple different configurations.",source:"@site/versioned_docs/version-1.1/tutorials/basic/running_your_app/2_multirun.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/multi-run",permalink:"/docs/1.1/tutorials/basic/running_your_app/multi-run",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/basic/running_your_app/2_multirun.md",tags:[],version:"1.1",lastUpdatedBy:"Shicong Huang",lastUpdatedAt:1731710197,formattedLastUpdatedAt:"11/15/2024",sidebarPosition:2,frontMatter:{id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},sidebar:"version-1.1/docs",previous:{title:"Putting it all together",permalink:"/docs/1.1/tutorials/basic/your_first_app/composition"},next:{title:"Output/Working directory",permalink:"/docs/1.1/tutorials/basic/running_your_app/working_directory"}},u=[{value:"Additional sweep types",id:"additional-sweep-types",children:[],level:3},{value:"Sweeper",id:"sweeper",children:[],level:3},{value:"Launcher",id:"launcher",children:[],level:3}],c={toc:u};function d(e){var t=e.components,n=(0,a.A)(e,i);return(0,o.mdx)("wrapper",(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Sometimes you want to run the same application with multiple different configurations.",(0,o.mdx)("br",{parentName:"p"}),"\n","E.g. running a performance test on each of the databases with each of the schemas."),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--multirun")," (",(0,o.mdx)("inlineCode",{parentName:"p"},"-m"),") flag and pass a comma separated list specifying the values for each dimension you want to sweep."),(0,o.mdx)("p",null,"The following sweeps over all combinations of the dbs and schemas."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py -m db=mysql,postgresql schema=warehouse,support,school"',title:'"$',python:!0,"my_app.py":!0,"-m":!0,db:"mysql,postgresql",schema:'warehouse,support,school"'},"[2021-01-20 17:25:03,317][HYDRA] Launching 6 jobs locally\n[2021-01-20 17:25:03,318][HYDRA]        #0 : db=mysql schema=warehouse\n[2021-01-20 17:25:03,458][HYDRA]        #1 : db=mysql schema=support\n[2021-01-20 17:25:03,602][HYDRA]        #2 : db=mysql schema=school\n[2021-01-20 17:25:03,755][HYDRA]        #3 : db=postgresql schema=warehouse\n[2021-01-20 17:25:03,895][HYDRA]        #4 : db=postgresql schema=support\n[2021-01-20 17:25:04,040][HYDRA]        #5 : db=postgresql schema=school\n")),(0,o.mdx)("p",null,"The printed configurations have been omitted for brevity."),(0,o.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Hydra composes configs lazily at job launching time. If you change code or configs after launching a job/sweep, the final\ncomposed configs might be impacted."))),(0,o.mdx)("h3",{id:"additional-sweep-types"},"Additional sweep types"),(0,o.mdx)("p",null,"Hydra supports other kinds of sweeps, e.g:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"x=range(1,10)                  # 1-9\nschema=glob(*)                 # warehouse,support,school\nschema=glob(*,exclude=w*)      # support,school\n")),(0,o.mdx)("p",null,"See the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.1/advanced/override_grammar/extended"},"Extended Override syntax")," for details."),(0,o.mdx)("h3",{id:"sweeper"},"Sweeper"),(0,o.mdx)("p",null,"The default sweeping logic is built into Hydra. Additional sweepers are available as plugins.\nFor example, the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.1/plugins/ax_sweeper"},"Ax Sweeper")," can automatically find the best parameter combination!"),(0,o.mdx)("h3",{id:"launcher"},"Launcher"),(0,o.mdx)("p",null,"By default, Hydra runs your multi-run jobs locally and serially.\nOther launchers are available as plugins for launching in parallel and on different clusters. For example, the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.1/plugins/joblib_launcher"},"JobLib Launcher"),"\ncan execute the different parameter combinations in parallel on your local machine using multi-processing."))}d.isMDXComponent=!0}}]);