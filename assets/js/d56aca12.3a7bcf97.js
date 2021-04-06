(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(8),r=(n(0),n(277)),o=n(284),l={id:"optuna_sweeper",title:"Optuna Sweeper plugin",sidebar_label:"Optuna Sweeper plugin"},c={unversionedId:"plugins/optuna_sweeper",id:"plugins/optuna_sweeper",isDocsHomePage:!1,title:"Optuna Sweeper plugin",description:"PyPI",source:"@site/docs/plugins/optuna_sweeper.md",slug:"/plugins/optuna_sweeper",permalink:"/docs/next/plugins/optuna_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/optuna_sweeper.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1617667175,formattedLastUpdatedAt:"4/5/2021",sidebar_label:"Optuna Sweeper plugin",sidebar:"docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/next/plugins/nevergrad_sweeper"},next:{title:"Hydra's command line flags",permalink:"/docs/next/advanced/hydra-command-line-flags"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example 1: Single-Objective Optimization",id:"example-1-single-objective-optimization",children:[]},{value:"Sampler configuration",id:"sampler-configuration",children:[]},{value:"Search space configuration",id:"search-space-configuration",children:[{value:"Configuring through commandline override",id:"configuring-through-commandline-override",children:[]},{value:"Configuring through config file",id:"configuring-through-config-file",children:[]}]},{value:"Example 2:  Multi-Objective Optimization",id:"example-2--multi-objective-optimization",children:[]}],p={toc:s};function u(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://pypi.org/project/hydra-optuna-sweeper/"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-optuna-sweeper",alt:"PyPI"})),"\n",Object(r.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-optuna-sweeper",alt:"PyPI - License"}),"\n",Object(r.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-optuna-sweeper",alt:"PyPI - Python Version"}),"\n",Object(r.b)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-optuna-sweeper"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-optuna-sweeper.svg",alt:"PyPI - Downloads"})),Object(r.b)(o.a,{text:"Example application",to:"plugins/hydra_optuna_sweeper/example",mdxType:"ExampleGithubLink"}),Object(r.b)(o.a,{text:"Plugin source",to:"plugins/hydra_optuna_sweeper",mdxType:"ExampleGithubLink"})),Object(r.b)("p",null,"This plugin enables Hydra applications to utilize ",Object(r.b)("a",{parentName:"p",href:"https://optuna.org"},"Optuna")," for the optimization of the parameters of experiments."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"This plugin requires ",Object(r.b)("inlineCode",{parentName:"p"},"hydra-core>=1.1.0"),". Currently, only the pre-release version is available.\nPlease install it with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"pip install --pre hydra-core\n")),Object(r.b)("p",null,"You can install the plugin via pip:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-optuna-sweeper --upgrade\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"Please set ",Object(r.b)("inlineCode",{parentName:"p"},"hydra/sweeper")," to ",Object(r.b)("inlineCode",{parentName:"p"},"optuna")," in your config file."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/sweeper: optuna\n")),Object(r.b)("p",null,"Alternatively, add ",Object(r.b)("inlineCode",{parentName:"p"},"hydra/sweeper=optuna")," option to your command line."),Object(r.b)("p",null,"The default configuration is ",Object(r.b)(o.b,{to:"plugins/hydra_optuna_sweeper/hydra_plugins/hydra_optuna_sweeper/config.py",mdxType:"GithubLink"},"here"),"."),Object(r.b)("h2",{id:"example-1-single-objective-optimization"},"Example 1: Single-Objective Optimization"),Object(r.b)("p",null,"We include an example in this directory. ",Object(r.b)("inlineCode",{parentName:"p"},"example/sphere.py")," implements a simple benchmark function to be minimized."),Object(r.b)("p",null,"You can discover the Optuna sweeper parameters with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="python example/sphere.py hydra/sweeper=optuna --cfg hydra -p hydra.sweeper"',title:'"python',"example/sphere.py":!0,"hydra/sweeper":"optuna","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0},"# @package hydra.sweeper\nsampler:\n  _target_: optuna.samplers.TPESampler\n  seed: 123\n  consider_prior: true\n  prior_weight: 1.0\n  consider_magic_clip: true\n  consider_endpoints: false\n  n_startup_trials: 10\n  n_ei_candidates: 24\n  multivariate: false\n  warn_independent_sampling: true\n_target_: hydra_plugins.hydra_optuna_sweeper.optuna_sweeper.OptunaSweeper\ndirection: minimize\nstorage: null\nstudy_name: sphere\nn_trials: 20\nn_jobs: 1\nsearch_space:\n  x:\n    type: float\n    low: -5.5\n    high: 5.5\n    step: 0.5\n  'y':\n    type: categorical\n    choices:\n    - -5\n    - 0\n    - 5\n")),Object(r.b)("p",null,"The function decorated with ",Object(r.b)("inlineCode",{parentName:"p"},"@hydra.main()")," returns a float which we want to minimize, the minimum is 0 and reached for:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"x: 0\ny: 0\n")),Object(r.b)("p",null,"To run optimization, clone the code and run the following command in the ",Object(r.b)("inlineCode",{parentName:"p"},"plugins/hydra_optuna_sweeper")," directory:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun\n")),Object(r.b)("p",null,"You can also override the search space parametrization:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=interval(-5.0, 5.0)' 'y=interval(0, 10)'\n")),Object(r.b)("h2",{id:"sampler-configuration"},"Sampler configuration"),Object(r.b)("p",null,"This plugin supports Optuna's ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/samplers.html"},"samplers"),".\nYou can change the sampler by overriding ",Object(r.b)("inlineCode",{parentName:"p"},"hydra/sweeper/sampler")," or change sampler settings within ",Object(r.b)("inlineCode",{parentName:"p"},"hydra.sweeper.sampler"),"."),Object(r.b)("h2",{id:"search-space-configuration"},"Search space configuration"),Object(r.b)("p",null,"This plugin supports Optuna's ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/distributions.html"},"distributions")," to configure search spaces. They can be defined either through commandline override or config file."),Object(r.b)("h3",{id:"configuring-through-commandline-override"},"Configuring through commandline override"),Object(r.b)("p",null,"Hydra provides a override parser that support rich syntax. Please refer to ",Object(r.b)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/basic"},"OverrideGrammer/Basic")," and ",Object(r.b)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/extended"},"OverrideGrammer/Extended")," for details."),Object(r.b)("h4",{id:"interval-override"},"Interval override"),Object(r.b)("p",null,"By default, ",Object(r.b)("inlineCode",{parentName:"p"},"interval")," is converted to ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.UniformDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"UniformDistribution")),". You can use ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"IntUniformDistribution")),", ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.LogUniformDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"LogUniformDistribution"))," or ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntLogUniformDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"IntLogUniformDistribution"))," by casting the interval to ",Object(r.b)("inlineCode",{parentName:"p"},"int")," and tagging it with ",Object(r.b)("inlineCode",{parentName:"p"},"log"),"."),Object(r.b)("details",null,Object(r.b)("summary",null,"Example for interval override"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=int(interval(-5.0, 5.0))' 'y=tag(log, interval(1, 10))'\n")),Object(r.b)("p",null,"The output is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Directions: ['minimize']\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #0 : x=-3 y=1.6859762540733367\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #1 : x=1 y=5.237816870668193\n...\n[HYDRA] Best parameters: {'x': 0, 'y': 1.0929184723430116}\n[HYDRA] Best value: 1.1944707871885822\n"))),Object(r.b)("h4",{id:"range-override"},"Range override"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"range")," is converted to ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"IntUniformDistribution")),". If you apply ",Object(r.b)("inlineCode",{parentName:"p"},"shuffle")," to ",Object(r.b)("inlineCode",{parentName:"p"},"range"),", ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"CategoricalDistribution"))," is used instead."),Object(r.b)("details",null,Object(r.b)("summary",null,"Example for range override"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=range(-5.0, 5.0)' 'y=shuffle(range(-5, 5))'\n")),Object(r.b)("p",null,"The output is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Directions: ['minimize']\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #0 : x=-3 y=-4\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #1 : x=1 y=-1\n...\n[HYDRA] Best parameters: {'x': 0, 'y': -1}\n[HYDRA] Best value: 1.0\n"))),Object(r.b)("h4",{id:"choice-override"},"Choice override"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"choice")," is converted to ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"CategoricalDistribution")),"."),Object(r.b)("details",null,Object(r.b)("summary",null,"Example for choice override"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=choice(-5.0, 0.0, 5.0)' 'y=choice(0, 1, 2, 3, 4, 5)'\n")),Object(r.b)("p",null,"The output is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Directions: ['minimize']\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #0 : x=5.0 y=5\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #1 : x=5.0 y=2\n...\n[HYDRA] Best parameters: {'x': 0.0, 'y': 0}\n[HYDRA] Best value: 0.0\n"))),Object(r.b)("h3",{id:"configuring-through-config-file"},"Configuring through config file"),Object(r.b)("h4",{id:"int-parameters"},"Int parameters"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"int")," parameters can be defined with the following fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type"),": ",Object(r.b)("inlineCode",{parentName:"li"},"int")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"low"),": lower bound"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"high"),": upper bound"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"step"),": discretization step (optional)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"log"),": if ",Object(r.b)("inlineCode",{parentName:"li"},"true"),", space is converted to the log domain")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"log")," is ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", the parameter is mapped to ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"IntUniformDistribution")),". Otherwise, the parameter is mapped to ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntLogUniformDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"IntLogUniformDistribution")),". Please note that ",Object(r.b)("inlineCode",{parentName:"p"},"step")," can not be set if ",Object(r.b)("inlineCode",{parentName:"p"},"log=true"),"."),Object(r.b)("h4",{id:"float-parameters"},"Float parameters"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"float")," parameters can be defined with the following fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type"),": ",Object(r.b)("inlineCode",{parentName:"li"},"float")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"low"),": lower bound"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"high"),": upper bound"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"step"),": discretization step"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"log"),": if ",Object(r.b)("inlineCode",{parentName:"li"},"true"),", space is converted to the log domain")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"log")," is ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", the parameter is mapped to ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.UniformDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"UniformDistribution"))," or ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.DiscreteUniformDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"DiscreteUniformDistribution"))," depending on the presence or absence of the ",Object(r.b)("inlineCode",{parentName:"p"},"step")," field, respectively. Otherwise, the parameter is mapped to ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.LogUniformDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"LogUniformDistribution")),". Please note that ",Object(r.b)("inlineCode",{parentName:"p"},"step")," can not be set if ",Object(r.b)("inlineCode",{parentName:"p"},"log=true"),"."),Object(r.b)("h4",{id:"categorical-parameters"},"Categorical parameters"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"categorical")," parameters can be defined with the following fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type"),": ",Object(r.b)("inlineCode",{parentName:"li"},"categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"choices"),": a list of parameter value candidates")),Object(r.b)("p",null,"The parameters are mapped to ",Object(r.b)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"},Object(r.b)("inlineCode",{parentName:"a"},"CategoricalDistribution")),"."),Object(r.b)("h2",{id:"example-2--multi-objective-optimization"},"Example 2:  Multi-Objective Optimization"),Object(r.b)("p",null,"In the same directory, ",Object(r.b)("inlineCode",{parentName:"p"},"example/multi-objective.py")," implements a simple benchmark function, which has two objective values. We want to minimize two objectives simultaneously."),Object(r.b)("p",null,"You can discover the Optuna sweeper parameters with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"python example/multi-objective.py hydra/sweeper=optuna --cfg hydra -p hydra.sweeper\n")),Object(r.b)("details",null,Object(r.b)("summary",null,"Configuration of the multi-objective optimization example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"# @package hydra.sweeper\nsampler:\n  _target_: optuna.samplers.NSGAIISampler\n  seed: 123\n  population_size: 50\n  mutation_prob: null\n  crossover_prob: 0.9\n  swapping_prob: 0.5\n  constraints_func: null\n_target_: hydra_plugins.hydra_optuna_sweeper.optuna_sweeper.OptunaSweeper\ndirection:\n- minimize\n- minimize\nstorage: null\nstudy_name: multi-objective\nn_trials: 20\nn_jobs: 1\nsearch_space:\n  x:\n    type: float\n    low: 0\n    high: 5\n    step: 0.5\n  'y':\n    type: float\n    low: 0\n    high: 3\n    step: 0.5\n"))),Object(r.b)("p",null,"To run the optimization, use the following command in the ",Object(r.b)("inlineCode",{parentName:"p"},"plugins/hydra_optuna_sweeper")," directory:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-commandline"},"python example/multi-objective.py --multirun\n")),Object(r.b)("p",null,"For problems with trade-offs between two different objectives, there may be no single solution that simultaneously minimizes both objectives. Instead, we obtained a set of solutions, namely ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pareto_efficiency"},"Pareto optimal solutions"),", that show the best trade-offs possible between the objectives. In the following figure, the blue dots show the Pareto optimal solutions in the optimization results."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Pareto-optimal solutions",src:n(358).default})))}u.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},278:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},279:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(11),o=n(278),l=n(7),c=Object(a.createContext)({collectLink:function(){}}),s=n(280),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){var t,n,u,b=e.isNavLink,d=e.to,m=e.href,h=e.activeClassName,g=e.isActive,f=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,j=void 0===O||O,v=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,N=Object(a.useContext)(c),w=d||m,D=Object(o.a)(w),C=null==w?void 0:w.replace("pathname://",""),x=void 0!==C?(n=C,j&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,_=Object(a.useRef)(!1),A=b?r.e:r.c,P=l.default.canUseIntersectionObserver;Object(a.useEffect)((function(){return!P&&D&&window.docusaurus.prefetch(x),function(){P&&u&&u.disconnect()}}),[x,P,D]);var E=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,S=!x||!D||E;return x&&D&&!E&&!f&&N.collectLink(x),S?i.a.createElement("a",Object.assign({href:x},w&&!D&&{target:"_blank",rel:"noopener noreferrer"},v)):i.a.createElement(A,Object.assign({},v,{onMouseEnter:function(){_.current||(window.docusaurus.preload(x),_.current=!0)},innerRef:function(e){var t,n;P&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(x)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:x||""},b&&{isActive:g,activeClassName:h}))}},280:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(10),i=n(278);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,l=void 0!==o&&o,c=r.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},281:function(e,t,n){try{e.exports=n(282)}catch(i){var a={};e.exports={useAllDocsData:function(){return a},useActivePluginAndVersion:function(){}}}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(23),i=n(38),r=n(283);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=a.useLocation().pathname;return r.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:r.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return r.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getDocVersionSuggestions(n,i)}},283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),r=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!r&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return r},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,r,o=t.getActiveVersion(e,n),l=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:l,alternateDocVersions:l?(i=l.id,r={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(r[e.name]=t)}))})),r):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),r=i.activeVersion!==a;return{latestDocSuggestion:r?null==i?void 0:i.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:r?a:void 0}}},284:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return p}));var a=n(3),i=n(0),r=n.n(i),o=n(279),l=n(10),c=n(281);function s(e){return r.a.createElement(o.a,Object(a.a)({},e,{to:(t=e.to,i=Object(c.useActiveVersion)(),Object(l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function p(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return r.a.createElement(s,e,r.a.createElement("span",null,"\xa0"),r.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},358:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/multi_objective_result-398b4421a2661ec72d7c323762472ad5.png"}}]);