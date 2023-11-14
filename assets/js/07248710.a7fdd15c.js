"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[2196],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return o?n.createElement(m,a(a({ref:t},p),{},{components:o})):n.createElement(m,a({ref:t},p))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3714:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const r={sidebar_position:2,description:"A multitudinal and communal plan"},a="Approach",s={unversionedId:"approach/approach",id:"approach/approach",title:"Approach",description:"A multitudinal and communal plan",source:"@site/docs/approach/approach.mdx",sourceDirName:"approach",slug:"/approach/",permalink:"/docs/approach/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/approach/approach.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"A multitudinal and communal plan"},sidebar:"tutorialSidebar",previous:{title:"Cloud Native Operational Excellence (CNOE)",permalink:"/docs/intro/"},next:{title:"Personas",permalink:"/docs/approach/personas"}},l={},c=[{value:"Pluggability and Extensibility",id:"pluggability-and-extensibility",level:2},{value:"Powered by but not limited to Kubernetes",id:"powered-by-but-not-limited-to-kubernetes",level:2},{value:"Building Patterns and Tooling",id:"building-patterns-and-tooling",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"approach"},"Approach"),(0,i.kt)("p",null,"CNOE takes a multitudinal and communal approach toward solving problems faced by DevOps teams. In order to address selection challenges within the fragmented and complex ecosystem of CNCF DevOps tooling, CNOE seeks community consensus on the categorical subdivision of delivery needs based on the size and scale of its users. This involves defining categories of tools deemed necessary for a successful DevOps strategy, as seen by the cohorts of users and based on the size of the company, the nature of the operation, and the type of workload. CNOE then endorses a set of tools in each category that when configured together, can deliver the top-of-the-line DevOps experience."),(0,i.kt)("h2",{id:"pluggability-and-extensibility"},"Pluggability and Extensibility"),(0,i.kt)("p",null,"Splitting a DevOps delivery strategy into subcategories with logical boundaries requires for CNOE to allow pluggability and extensibility for tools within each category. This means that CNOE needs to ensure and facilitate integration of tools from one category with tools from another category as part of its delivery pipeline. As a concrete example, assuming that users will have the option to choose between Tekton or Argo Workflows for their CI and Weaveworks Flux or Argo CD for their CD, any combination of tools from the two categories should effectively work within the context of CNOE. This helps reduce fragmentation while providing options for adoption. On the other hand, a list of CNOE-endorsed tools that fit the defined logical DevOps boundaries is aimed at better right-tooling of the delivery pipelines. This in turn reduces the complexity in selecting the right tools for the job and enabling CNOE users to get a compliant delivery pipeline up and running as quickly as possible."),(0,i.kt)("h2",{id:"powered-by-but-not-limited-to-kubernetes"},"Powered by but not limited to Kubernetes"),(0,i.kt)("p",null,"As discussed earlier, CNOE aims at simplifying selection, integration, and operation of DevOps tools available within the CNCF ecosystem. A question that may arise is whether CNOE assumes strong dependency to Kubernetes. Our take is that, while modern CNCF tools require Kubernetes to run on, they do not have to orchestrate resources and deployments against Kubernetes. This means that while users of CNOE assume dependency to Kubernetes for the operation of CNOE tool set, their workload does not need to be tied to Kubernetes. Within this context, using CNOE to deploy to discrete cloud platforms such as AWS Elastic Containers Service (ECS) or GCP Cloud Functions is a totally fair game."),(0,i.kt)("h2",{id:"building-patterns-and-tooling"},"Building Patterns and Tooling"),(0,i.kt)("p",null,'For seamless transition into a CNOE-compliant delivery pipeline, CNOE will aim at delivering "packaging specifications", "templating mechanisms", as well as "deployer technologies", an example of which is enabled via the ',(0,i.kt)("a",{parentName:"p",href:"reference-implementation/idpbuilder"},"idpBuilder tool")," we have released. The combination of templates, specifications, and deployers allow for bundling and then unpacking of CNOE recommended tools into a user's DevOps environment. This enables teams to share and deliver components that are deemed to be the best tools for the job."),(0,i.kt)("p",null,"Modernizing a delivery pipeline according to CNOE guidelines then becomes the practice of devising a migration plan from the old set of tools used by an organization into the new set of tools endorsed by CNOE. This is another area where a community approach to endorsing, adhering to, and executing on CNOE-compliant delivery pipelines will be critical. For it to succeed, CNOE relies on commitments and contributions from its community members to develop and contribute migration plans and tools that empower transitioning from the legacy environments to the new environments."))}u.isMDXComponent=!0}}]);