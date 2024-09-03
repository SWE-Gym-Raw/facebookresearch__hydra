"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6578],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>o,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>s});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){return function(n){var t=p(n.components);return a.createElement(e,l({},n,{components:t}))}},p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,c=s["".concat(d,".").concat(u)]||s[u]||g[u]||l;return t?a.createElement(c,i(i({ref:n},o),{},{components:t})):a.createElement(c,i({ref:n},o))}));function x(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,d=new Array(l);d[0]=c;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var o=2;o<l;o++)d[o]=t[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},53036:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>m,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(58168),r=t(98587),l=(t(96540),t(15680)),d=["components"],i={id:"extended",sidebar_label:"Extended Override syntax",hide_title:!0},m=void 0,o={unversionedId:"advanced/override_grammar/extended",id:"version-1.0/advanced/override_grammar/extended",title:"extended",description:"Extended Override syntax",source:"@site/versioned_docs/version-1.0/advanced/override_grammar/extended.md",sourceDirName:"advanced/override_grammar",slug:"/advanced/override_grammar/extended",permalink:"/docs/1.0/advanced/override_grammar/extended",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/advanced/override_grammar/extended.md",tags:[],version:"1.0",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1725373483,formattedLastUpdatedAt:"9/3/2024",frontMatter:{id:"extended",sidebar_label:"Extended Override syntax",hide_title:!0},sidebar:"version-1.0/docs",previous:{title:"Basic Override syntax",permalink:"/docs/1.0/advanced/override_grammar/basic"},next:{title:"Overriding packages",permalink:"/docs/1.0/advanced/overriding_packages"}},s=[{value:"Extended Override syntax",id:"extended-override-syntax",children:[],level:2},{value:"Sweeps",id:"sweeps",children:[{value:"Choice sweep",id:"choice-sweep",children:[],level:3},{value:"Glob choice sweep",id:"glob-choice-sweep",children:[],level:3},{value:"Range sweep",id:"range-sweep",children:[],level:3},{value:"Interval sweep",id:"interval-sweep",children:[],level:3},{value:"Tag",id:"tag",children:[],level:3}],level:2},{value:"Reordering lists and sweeps",id:"reordering-lists-and-sweeps",children:[{value:"sort",id:"sort",children:[],level:3},{value:"shuffle",id:"shuffle",children:[],level:3}],level:2},{value:"Type casting",id:"type-casting",children:[{value:"Casting string to bool",id:"casting-string-to-bool",children:[],level:4},{value:"Casting lists",id:"casting-lists",children:[],level:4},{value:"Casting dicts",id:"casting-dicts",children:[],level:4},{value:"Casting ranges",id:"casting-ranges",children:[],level:4},{value:"Conversion matrix",id:"conversion-matrix",children:[],level:3}],level:2}],p={toc:s};function u(e){var n=e.components,t=(0,r.A)(e,d);return(0,l.mdx)("wrapper",(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"extended-override-syntax"},"Extended Override syntax"),(0,l.mdx)("p",null,"Hydra Overrides supports functions.\nWhen calling a function, one can optionally name parameters. This is following the Python\nconvention of naming parameters."),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Example function"',title:'"Example','function"':!0},"def func(a:int, b:str) -> bool:\n    ...\n\n\n"))),(0,l.mdx)("div",{className:"col  col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Calling function"',title:'"Calling','function"':!0},"func(10,foo)     # Positional only\nfunc(a=10,b=foo) # Named only\nfunc(10,b=foo)   # Mixed\nfunc(a=10,foo)   # Error\n")))),(0,l.mdx)("p",null,"Note the lack of quotes in the examples above. Despite some similarities, this is ",(0,l.mdx)("strong",{parentName:"p"},"not Python"),"."),(0,l.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"Hydra supports very specific functions. If you would like to have\nanother function added, please file an issue and explain the use case."))),(0,l.mdx)("h2",{id:"sweeps"},"Sweeps"),(0,l.mdx)("p",null,"Sweep overrides are used by Sweepers to determine what to do. For example,\none can instruct the Basic Sweeper to sweep over all combinations of the\nranges ",(0,l.mdx)("inlineCode",{parentName:"p"},"num1=range(0,3)")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"num2=range(0,3)")," - resulting in ",(0,l.mdx)("inlineCode",{parentName:"p"},"9")," jobs, each getting a\ndifferent pair of numbers from ",(0,l.mdx)("inlineCode",{parentName:"p"},"0"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"1")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"2"),"."),(0,l.mdx)("h3",{id:"choice-sweep"},"Choice sweep"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def choice(\n    *args: Union[str, int, float, bool, Dict[Any, Any], List[Any], ChoiceSweep]\n) -> ChoiceSweep:\n    """\n    A choice sweep over the specified values\n    """\n')),(0,l.mdx)("p",null,"Choice sweeps are the most common sweeps.\nA choice sweep is described in one of two equivalent forms."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"db=mysql,postgresql          # a comma separated list of two or more elements. \ndb=choice(mysql,postgresql)  # choice\n")),(0,l.mdx)("h3",{id:"glob-choice-sweep"},"Glob choice sweep"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def glob(\n    include: Union[List[str], str], exclude: Optional[Union[List[str], str]] = None\n) -> Glob:\n    """\n    A glob selects from all options in the config group.\n    inputs are in glob format. e.g: *, foo*, *foo.\n    :param include: a string or a list of strings to use as include globs\n    :param exclude: a string or a list of strings to use as exclude globs\n    :return: A Glob object\n    """\n')),(0,l.mdx)("p",null,"Assuming the config group ",(0,l.mdx)("strong",{parentName:"p"},"schema")," with the options ",(0,l.mdx)("strong",{parentName:"p"},"school"),", ",(0,l.mdx)("strong",{parentName:"p"},"support")," and ",(0,l.mdx)("strong",{parentName:"p"},"warehouse"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"schema=glob(*)                                # school,support,warehouse\nschema=glob(*,exclude=support)                # school,warehouse\nschema=glob([s*,w*],exclude=school)           # support,warehouse\n")),(0,l.mdx)("h3",{id:"range-sweep"},"Range sweep"),(0,l.mdx)("p",null,"Unlike Python, Hydra's range can be used with both integer and floating-point numbers.\nIn both cases, the range represents a discrete list of values."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def range(\n    start: Union[int, float], stop: Union[int, float], step: Union[int, float] = 1\n) -> RangeSweep:\n    """\n    Range is defines a sweeep over a range of integer or floating-point values.\n    For a positive step, the contents of a range r are determined by the formula\n     r[i] = start + step*i where i >= 0 and r[i] < stop.\n    For a negative step, the contents of the range are still determined by the formula\n     r[i] = start + step*i, but the constraints are i >= 0 and r[i] > stop.\n    """\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"num=range(0,5)                        # 0,1,2,3,4\nnum=range(0,5,2)                      # 0,2,4\nnum=range(0,10,3.3)                   # 0.0,3.3,6.6,9.9\n")),(0,l.mdx)("h3",{id:"interval-sweep"},"Interval sweep"),(0,l.mdx)("p",null,"An interval sweep represents all the floating point value between two values.\nThis is used by optimizing sweepers like Ax and Nevergrad. The basic sweeper does not support interval."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def interval(start: Union[int, float], end: Union[int, float]) -> IntervalSweep:\n    """\n    A continuous interval between two floating point values.\n    value=interval(x,y) is interpreted as x <= value < y\n    """\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"interval(1.0,5.0)  # 1.0 <= x < 5.0\ninterval(1,5)      # 1.0 <= x < 5.0, auto-cast to floats\n")),(0,l.mdx)("h3",{id:"tag"},"Tag"),(0,l.mdx)("p",null,"With tags you can add arbitrary metadata to a sweep. The metadata can be used by advanced sweepers."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def tag(*args: Union[str, Union[Sweep]], sweep: Optional[Sweep] = None) -> Sweep:\n    """\n    Tags the sweep with a list of string tags.\n    """\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"tag(log,interval(0,1))          # 1.0 <= x < 1.0, tags=[log]\ntag(foo,bar,interval(0,1))      # 1.0 <= x < 1.0, tags=[foo,bar]\n")),(0,l.mdx)("h2",{id:"reordering-lists-and-sweeps"},"Reordering lists and sweeps"),(0,l.mdx)("h3",{id:"sort"},"sort"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def sort(\n    *args: Union[ElementType, ChoiceSweep, RangeSweep],\n    sweep: Optional[Union[ChoiceSweep, RangeSweep]] = None,\n    list: Optional[List[Any]] = None,\n    reverse: bool = False,\n) -> Any:\n    """\n    Sort an input list or sweep.\n    reverse=True reverses the order\n    """\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"# sweep\nsort(1,3,2)                         # ChoiceSweep(1,2,3)\nsort(1,3,2,reverse=true)            # ChoiceSweep(3,2,1)\nsort(choice(1,2,3))                 # ChoiceSweep(1,2,3)\nsort(sweep=choice(1,2,3))           # ChoiceSweep(1,2,3)\nsort(choice(1,2,3),reverse=true)    # ChoiceSweep(3,2,1)\nsort(range(10,1))                   # range in ascending order\nsort(range(1,10),reverse=true)      # range in descending order\n\n# lists\nsort([1,3,2])                       # [1,2,3]\nsort(list=[1,3,2])                  # [1,2,3]\nsort(list=[1,3,2], reverse=true)    # [3,2,1]\n\n# single value returned as is\nsort(1)                             # 1\n")),(0,l.mdx)("h3",{id:"shuffle"},"shuffle"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Signature"',title:'"Signature"'},'def shuffle(\n    *args: Union[ElementType, ChoiceSweep, RangeSweep],\n    sweep: Optional[Union[ChoiceSweep, RangeSweep]] = None,\n    list: Optional[List[Any]] = None,\n) -> Union[List[Any], ChoiceSweep, RangeSweep]:\n    """\n    Shuffle input list or sweep (does not support interval)\n    """\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Examples"',title:'"Examples"'},"shuffle(a,b,c)                                       # shuffled a,b,c\nshuffle(choice(a,b,c)), shuffle(sweep=choice(a,b,c)) # shuffled choice(a,b,c)\nshuffle(range(1,10))                                 # shuffled range(1,10)\nshuffle([a,b,c]), shuffle(list=[a,b,c])              # shuffled list [a,b,c] \n")),(0,l.mdx)("h2",{id:"type-casting"},"Type casting"),(0,l.mdx)("p",null,"You can cast values and sweeps to ",(0,l.mdx)("inlineCode",{parentName:"p"},"int"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"float"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"bool")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"str"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Example"',title:'"Example"'},"int(3.14)                  # 3 (int)\nint(value=3.14)            # 3 (int)\nfloat(10)                  # 10.0 (float)\nstr(10)                    # \"10\" (str)\nbool(1)                    # true (bool)\nfloat(range(1,10))         # range(1.0,10.0)\nstr([1,2,3])               # ['1','2','3']\nstr({a:10})                # {a:'10'}\n")),(0,l.mdx)("p",null,"Below are pseudo code snippets that illustrates the differences between Python's casting and Hydra's casting."),(0,l.mdx)("h4",{id:"casting-string-to-bool"},"Casting string to bool"),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"def bool(value: Any) -> bool:\n    if isinstance(value, str):\n        return len(value) > 0\n    else:\n        return bool(value)\n\n\n\n\n"))),(0,l.mdx)("div",{className:"col  col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra"',title:'"Hydra"'},'def bool(s: str) -> bool:\n    if isinstance(value, str):\n        if value.lower() == "false":\n            return False\n        elif value.lower() == "true":\n            return True\n        else:\n            raise ValueError()\n    return bool(value)\n')))),(0,l.mdx)("h4",{id:"casting-lists"},"Casting lists"),(0,l.mdx)("p",null,"Casting lists results in a list where each element is recursively cast.\nFailure to cast an element in the list fails the cast of the list."),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"def cast_int(value: Any):\n    if isinstance(value, list):\n        raise TypeError()\n    else:\n        return int(v)\n\n\n"))),(0,l.mdx)("div",{className:"col  col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra"',title:'"Hydra"'},"def cast_int(value: Any):\n    if isinstance(v, list):\n        return list(map(cast_int, v))\n    else:\n        return int(v)\n\n\n")))),(0,l.mdx)("h4",{id:"casting-dicts"},"Casting dicts"),(0,l.mdx)("p",null,"Casting dicts results in a dict where values are recursively cast, but keys are unchanged.\nFailure to cast a value in the dict fails the cast of the entire dict."),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"def cast_int(value: Any):\n    if isinstance(value, dict):\n        raise TypeError()\n    else:\n        return int(v)\n\n\n"))),(0,l.mdx)("div",{className:"col  col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra"',title:'"Hydra"'},"def cast_int(value: Any):\n    if isinstance(value, dict):\n        return apply_to_values(\n            value, cast_int\n        )\n    else:\n        return int(v)\n")))),(0,l.mdx)("h4",{id:"casting-ranges"},"Casting ranges"),(0,l.mdx)("p",null,"Ranges can be cast to float or int, resulting in start, stop and step being cast and thus the range elements being cast."),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"def cast_int(value: Any):\n    if isinstance(value, RangeSweep):\n        raise TypeError()\n    else:\n        return int(v)\n\n\n\n\n"))),(0,l.mdx)("div",{className:"col  col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra"',title:'"Hydra"'},"def cast_int(value: Any):\n    if isinstance(value, RangeSweep):\n        return RangeSweep(\n            start=cast_int(value.start),\n            stop=cast_int(value.stop),\n            step=cast_int(value.step),\n        )\n    else:\n        return int(v)\n")))),(0,l.mdx)("h3",{id:"conversion-matrix"},"Conversion matrix"),(0,l.mdx)("p",null,"Below is the conversion matrix from various inputs to all supported types.\nInput are grouped by type."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"int()"),(0,l.mdx)("th",{parentName:"tr",align:null},"float()"),(0,l.mdx)("th",{parentName:"tr",align:null},"str()"),(0,l.mdx)("th",{parentName:"tr",align:null},"bool()"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"10"),(0,l.mdx)("td",{parentName:"tr",align:null},"10"),(0,l.mdx)("td",{parentName:"tr",align:null},"10.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c10\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"true")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"0"),(0,l.mdx)("td",{parentName:"tr",align:null},"0"),(0,l.mdx)("td",{parentName:"tr",align:null},"0.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c0\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"false")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"10.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"10"),(0,l.mdx)("td",{parentName:"tr",align:null},"10.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c10.0\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"true")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"0.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"0"),(0,l.mdx)("td",{parentName:"tr",align:null},"0.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c0.0\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"false")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"inf"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"inf"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u2018inf\u2019"),(0,l.mdx)("td",{parentName:"tr",align:null},"true")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"nan"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"nan"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u2018nan\u2019"),(0,l.mdx)("td",{parentName:"tr",align:null},"true")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"1e6"),(0,l.mdx)("td",{parentName:"tr",align:null},"1,000,000"),(0,l.mdx)("td",{parentName:"tr",align:null},"1e6"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u20181000000.0\u2019"),(0,l.mdx)("td",{parentName:"tr",align:null},"true")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"foo"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"foo"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c\u201d (empty string)"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c10\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"10"),(0,l.mdx)("td",{parentName:"tr",align:null},"10.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c10\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c10.0\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"10.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c10.0\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"\u201ctrue\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201ctrue\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"true")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"\u201cfalse\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201cfalse\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"false")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c","[1,2,3]","\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c","[1,2,3]","\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c{a:10}\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201c{a:10}\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"true"),(0,l.mdx)("td",{parentName:"tr",align:null},"1"),(0,l.mdx)("td",{parentName:"tr",align:null},"1.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201ctrue\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"true")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"false"),(0,l.mdx)("td",{parentName:"tr",align:null},"0"),(0,l.mdx)("td",{parentName:"tr",align:null},"0.0"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u201cfalse\u201d"),(0,l.mdx)("td",{parentName:"tr",align:null},"false")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[]")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"[0,1,2]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[0,1,2]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[0.0,1.0,2.0]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[\u201c0\u201d,\u201d1\u201d,\u201d2\u201d]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[false,true,true]")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"[1,","[2]","]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[1,","[2]","]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[1.0,","[2.0]","]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[\u201c1\u201d,","[\u201c2\u201d]","]"),(0,l.mdx)("td",{parentName:"tr",align:null},"[true,","[true]","]")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"[a,1]"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"[\u201ca\u201d,\u201d1\u201d]"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"{}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{}")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"{a:10}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{a:10}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{a:10.0}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{a:\u201d10\u201d}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{a: true}")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"{a:","[0,1,2]","}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{a:","[0,1,2]","}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{a:","[0.0,1.0,2.-]","}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{a:","[\u201c0\u201d,\u201d1\u201d,\u201d2\u201d]","}"),(0,l.mdx)("td",{parentName:"tr",align:null},"{a:","[false,true,true]","}")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"{a:10,b:xyz}"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"{a:\u201d10\u201d,b:\u201dxyz\u201d}"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"choice(0,1)"),(0,l.mdx)("td",{parentName:"tr",align:null},"choice(0,1)"),(0,l.mdx)("td",{parentName:"tr",align:null},"choice(0.0,1.0)"),(0,l.mdx)("td",{parentName:"tr",align:null},"choice(\u201c0\u201d,\u201c1\u201d)"),(0,l.mdx)("td",{parentName:"tr",align:null},"choice(false,true)")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"choice(a,b)"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"choice(\u201ca\u201d,\u201db\u201d)"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"choice(1,a)"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"choice(\u201c1\u201d,\u201da\u201d)"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"interval(1.0, 2.0)"),(0,l.mdx)("td",{parentName:"tr",align:null},"interval(1, 2)"),(0,l.mdx)("td",{parentName:"tr",align:null},"interval(1.0, 2.0)"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"interval(1, 2)"),(0,l.mdx)("td",{parentName:"tr",align:null},"interval(1, 2)"),(0,l.mdx)("td",{parentName:"tr",align:null},"interval(1.0, 2.0)"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"range(1,10)"),(0,l.mdx)("td",{parentName:"tr",align:null},"range(1,10)"),(0,l.mdx)("td",{parentName:"tr",align:null},"range(1.0,10.0)"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"range(1.0, 10.0)"),(0,l.mdx)("td",{parentName:"tr",align:null},"range(1,10)"),(0,l.mdx)("td",{parentName:"tr",align:null},"range(1.0,10.0)"),(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"error")))))}u.isMDXComponent=!0}}]);