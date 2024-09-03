"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3249],{55047:(e,t,a)=>{a.d(t,{A:()=>f});var l=a(98587),n=a(96540),r=a(20053),s=a(43601),i=a(75489);const m="sidebar_q+wC",o="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",d="sidebarItem_cjdF",u="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs";var p=a(21312);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.default)(m,"thin-scrollbar"),"aria-label":(0,p.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.default)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(i.default,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];const f=function(e){var t=e.sidebar,a=e.toc,i=e.children,m=(0,l.A)(e,h),o=t&&t.items.length>0;return n.createElement(s.A,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,r.default)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},35898:(e,t,a)=>{a.d(t,{A:()=>C});var l=a(96540),n=a(20053),r=a(15680),s=a(21312),i=a(75489),m=a(86025),o=a(36888),c=a(50210),d=a.n(c),u=a(1335);const g="blogPostTitle_d4p0",p="blogPostData_-Im+",v="blogPostDetailsFull_xD8n";var h=a(5465);const f="tags_NBRY",b="tag_F03v";function E(e){var t=e.tags;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(s.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.default)(f,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return l.createElement("li",{key:a,className:b},l.createElement(h.A,{name:t,permalink:a}))}))))}const N="image_9q7L";const _=function(e){var t=e.author,a=t.name,n=t.title,r=t.url,s=t.imageURL;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(i.default,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:N,src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i.default,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},k="authorCol_8c0z";function P(e){var t=e.authors,a=e.assets;return 0===t.length?null:l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return l.createElement("div",{className:(0,n.default)("col col--6",k),key:t},l.createElement(_,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}const C=function(e){var t,a,c,h,f=(c=(0,o.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return c(t,(0,s.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,m.useBaseUrlUtils)().withBaseUrl,N=e.children,_=e.frontMatter,k=e.assets,C=e.metadata,T=e.truncated,L=e.isBlogPostPage,A=void 0!==L&&L,w=C.date,y=C.formattedDate,x=C.permalink,I=C.tags,H=C.readingTime,B=C.title,U=C.editUrl,M=C.authors,F=null!=(t=k.image)?t:_.image,R=!A&&T,O=I.length>0;return l.createElement("article",{className:A?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=A?"h1":"h2",l.createElement("header",null,l.createElement(h,{className:g,itemProp:"headline"},A?B:l.createElement(i.default,{itemProp:"url",to:x},B)),l.createElement("div",{className:(0,n.default)(p,"margin-vert--md")},l.createElement("time",{dateTime:w,itemProp:"datePublished"},y),void 0!==H&&l.createElement(l.Fragment,null," \xb7 ",f(H))),l.createElement(P,{authors:M,assets:k}))),F&&l.createElement("meta",{itemProp:"image",content:b(F,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.MDXProvider,{components:d()},N)),(O||T)&&l.createElement("footer",{className:(0,n.default)("row docusaurus-mt-lg",(a={},a[v]=A,a))},O&&l.createElement("div",{className:(0,n.default)("col",{"col--9":R})},l.createElement(E,{tags:I})),A&&U&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.default,{editUrl:U})),R&&l.createElement("div",{className:(0,n.default)("col text--right",{"col--3":O})},l.createElement(i.default,{to:C.permalink,"aria-label":"Read more about "+B},l.createElement("b",null,l.createElement(s.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},32359:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(96540),n=a(8139),r=a(55047),s=a(35898),i=a(21312),m=a(75489);const o=function(e){var t=e.nextItem,a=e.prevItem;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.translate)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.default,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.default,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.default,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.default,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(36888),d=a(23498);const u=function(e){var t,a=e.content,i=e.sidebar,m=a.frontMatter,u=a.assets,g=a.metadata,p=g.title,v=g.description,h=g.nextItem,f=g.prevItem,b=g.date,E=g.tags,N=g.authors,_=m.hide_table_of_contents,k=m.keywords,P=m.toc_min_heading_level,C=m.toc_max_heading_level,T=null!=(t=u.image)?t:m.image;return l.createElement(r.A,{wrapperClassName:c.ThemeClassNames.wrapper.blogPages,pageClassName:c.ThemeClassNames.page.blogPostPage,sidebar:i,toc:!_&&a.toc&&a.toc.length>0?l.createElement(d.default,{toc:a.toc,minHeadingLevel:P,maxHeadingLevel:C}):void 0},l.createElement(n.default,{title:p,description:v,keywords:k,image:T},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:b}),N.some((function(e){return e.url}))&&l.createElement("meta",{property:"article:author",content:N.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&l.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),l.createElement(s.A,{frontMatter:m,assets:u,metadata:g,isBlogPostPage:!0},l.createElement(a,null)),(h||f)&&l.createElement(o,{nextItem:h,prevItem:f}))}},1335:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(96540),n=a(21312),r=a(58168),s=a(98587),i=a(20053);const m="iconEdit_mS5F";var o=["className"];const c=function(e){var t=e.className,a=(0,s.A)(e,o);return l.createElement("svg",(0,r.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.default)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var d=a(36888);function u(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.ThemeClassNames.common.editThisPage},l.createElement(c,null),l.createElement(n.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},23498:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(58168),n=a(98587),r=a(96540),s=a(20053),i=a(36888),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,l=e.linkClassName,n=e.isChild;return t.length?r.createElement("ul",{className:n?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function c(e){var t=e.toc,a=e.className,s=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,n.A)(e,m),f=(0,i.useThemeConfig)(),b=null!=p?p:f.tableOfContents.minHeadingLevel,E=null!=v?v:f.tableOfContents.maxHeadingLevel,N=(0,i.useTOCFilter)({toc:t,minHeadingLevel:b,maxHeadingLevel:E}),_=(0,r.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:b,maxHeadingLevel:E}}),[d,g,b,E]);return(0,i.useTOCHighlight)(_),r.createElement(o,(0,l.A)({toc:N,className:s,linkClassName:d},h))}const d="tableOfContents_vrFS";var u=["className"];const g=function(e){var t=e.className,a=(0,n.A)(e,u);return r.createElement("div",{className:(0,s.default)(d,"thin-scrollbar",t)},r.createElement(c,(0,l.A)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5465:(e,t,a)=>{a.d(t,{A:()=>o});var l=a(96540),n=a(20053),r=a(75489);const s="tag_WK-t",i="tagRegular_LXbV",m="tagWithCount_S5Zl";const o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return l.createElement(r.default,{href:a,className:(0,n.default)(s,(t={},t[i]=!c,t[m]=c,t))},o,c&&l.createElement("span",null,c))}}}]);