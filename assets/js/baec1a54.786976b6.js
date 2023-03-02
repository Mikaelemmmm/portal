"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[2779],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1598:function(e,n,t){t.r(n),t.d(n,{default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={},c={unversionedId:"develop/naming-spec",id:"develop/naming-spec",isDocsHomePage:!1,title:"Naming Rules",description:"In any language development, there are some naming conventions in the language field, good",source:"@site/docs/develop/naming-spec.md",sourceDirName:"develop",slug:"/develop/naming-spec",permalink:"/docs/develop/naming-spec",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/develop/naming-spec.md",version:"current",lastUpdatedAt:1677743481,formattedLastUpdatedAt:"3/2/2023",frontMatter:{},sidebar:"docs",previous:{title:"Development Rules",permalink:"/docs/develop/dev-specification"},next:{title:"Coding Rules",permalink:"/docs/develop/coding-spec"}},s=[{value:"Specification suggestion",id:"specification-suggestion",children:[]},{value:"Naming guidelines",id:"naming-guidelines",children:[]},{value:"File naming guidelines",id:"file-naming-guidelines",children:[]},{value:"Variable naming convention reference",id:"variable-naming-convention-reference",children:[]},{value:"Function and constant naming convention",id:"function-and-constant-naming-convention",children:[]}],u={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In any language development, there are some naming conventions in the language field, good"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reduce code reading costs"),(0,r.kt)("li",{parentName:"ul"},"Reduce maintenance difficulty"),(0,r.kt)("li",{parentName:"ul"},"Reduce code complexity")),(0,r.kt)("h2",{id:"specification-suggestion"},"Specification suggestion"),(0,r.kt)("p",null,"In our actual development, many developers may transfer from one language to another language field. After switching to another language,\nWe will all retain the programming habits of the old language. Here, what I suggest is that although some previous specifications of different languages may be the same,\nBut we'd better be familiar with some official demos to gradually adapt to the programming specifications of the current language, rather than directly migrating the programming specifications of the original language."),(0,r.kt)("h2",{id:"naming-guidelines"},"Naming guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the distance between the definition and the last use of the variable name is short, the short name looks better."),(0,r.kt)("li",{parentName:"ul"},"Variable naming should try to describe its content, not type"),(0,r.kt)("li",{parentName:"ul"},"Constant naming should try to describe its value, not how to use this value"),(0,r.kt)("li",{parentName:"ul"},"When encountering for, if and other loops or branches, single letter names are recommended to identify parameters and return values"),(0,r.kt)("li",{parentName:"ul"},"It is recommended to use words to name method, interface, type, and package"),(0,r.kt)("li",{parentName:"ul"},"The package name is also part of the naming, please use it as much as possible"),(0,r.kt)("li",{parentName:"ul"},"Use a consistent naming style")),(0,r.kt)("h2",{id:"file-naming-guidelines"},"File naming guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All lowercase"),(0,r.kt)("li",{parentName:"ul"},"Avoid underscores (_) except for unit test"),(0,r.kt)("li",{parentName:"ul"},"The file name should not be too long")),(0,r.kt)("h2",{id:"variable-naming-convention-reference"},"Variable naming convention reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initial lowercase"),(0,r.kt)("li",{parentName:"ul"},"Hump naming"),(0,r.kt)("li",{parentName:"ul"},"See the name to know the meaning, avoid pinyin instead of English"),(0,r.kt)("li",{parentName:"ul"},"It is not recommended including an underscore (_)"),(0,r.kt)("li",{parentName:"ul"},"It is not recommended including numbers")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scope of application")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Local variables"),(0,r.kt)("li",{parentName:"ul"},"Function parameter output, input parameter")),(0,r.kt)("h2",{id:"function-and-constant-naming-convention"},"Function and constant naming convention"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Camel case naming"),(0,r.kt)("li",{parentName:"ul"},"The first letter of the exported must be capitalized"),(0,r.kt)("li",{parentName:"ul"},"The first letter must be lowercase if it cannot be exported"),(0,r.kt)("li",{parentName:"ul"},"Avoid the combination of all uppercase and underscore (_)")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If it is a go-zero code contribution, you must strictly follow this naming convention"))),(0,r.kt)("h1",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dave.cheney.net/practical-go/presentations/gophercon-singapore-2019.html#_simplicity"},"Practical Go: Real world advice for writing maintainable Go programs"))))}m.isMDXComponent=!0}}]);