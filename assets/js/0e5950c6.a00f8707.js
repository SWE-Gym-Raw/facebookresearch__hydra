"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2735],{3905:function(e,r,t){t.r(r),t.d(r,{MDXContext:function(){return u},MDXProvider:function(){return l},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){return function(r){var t=p(r.components);return n.createElement(e,i({},r,{components:t}))}},p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=p(t),l=o,h=s["".concat(a,".").concat(l)]||s[l]||f[l]||i;return t?n.createElement(h,c(c({ref:r},u),{},{components:t})):n.createElement(h,c({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},41419:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return l}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={id:"changes_to_job_working_dir",title:"Changes to job's runtime working directory",hide_title:!0},d=void 0,u={unversionedId:"upgrades/1.1_to_1.2/changes_to_job_working_dir",id:"upgrades/1.1_to_1.2/changes_to_job_working_dir",title:"Changes to job's runtime working directory",description:"Hydra 1.2 introduces hydra.job.chdir. This config allows users to specify whether Hydra should change the runtime working",source:"@site/docs/upgrades/1.1_to_1.2/changes_to_job_working_dir.md",sourceDirName:"upgrades/1.1_to_1.2",slug:"/upgrades/1.1_to_1.2/changes_to_job_working_dir",permalink:"/docs/next/upgrades/1.1_to_1.2/changes_to_job_working_dir",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/upgrades/1.1_to_1.2/changes_to_job_working_dir.md",tags:[],version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1650911383,formattedLastUpdatedAt:"4/25/2022",frontMatter:{id:"changes_to_job_working_dir",title:"Changes to job's runtime working directory",hide_title:!0},sidebar:"docs",previous:{title:"Changes to @hydra.main() and hydra.initialize()",permalink:"/docs/next/upgrades/1.1_to_1.2/changes_to_hydra_main_config_path"},next:{title:"Changes to configuring sweeper's search space",permalink:"/docs/next/upgrades/1.1_to_1.2/changes_to_sweeper_config"}},s=[],p={toc:s};function l(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra 1.2 introduces ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.chdir"),". This config allows users to specify whether Hydra should change the runtime working\ndirectory to the job's output directory.\n",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.chdir")," will default to ",(0,i.mdx)("inlineCode",{parentName:"p"},"False"),' if version_base is set to >= "1.2" (or None),\nor otherwise will use the old behavior and default to ',(0,i.mdx)("inlineCode",{parentName:"p"},"True"),", with a warning being issued if ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.chdir")," is not set."),(0,i.mdx)("p",null,"If you want to keep the old Hydra behavior, please set ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.chdir=True")," explicitly for your application."),(0,i.mdx)("p",null,"For more information about ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.chdir"),",\nsee ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/tutorials/basic/running_your_app/working_directory#disable-changing-current-working-dir-to-jobs-output-dir"},"Output/Working directory"),"\nand ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/configure_hydra/job#hydrajobchdir"},"Job Configuration - hydra.job.chdir"),"."))}l.isMDXComponent=!0}}]);