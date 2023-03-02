"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[8412],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),s=o,f=d["".concat(l,".").concat(s)]||d[s]||m[s]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2792:function(e,n,t){t.r(n),t.d(n,{default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},l={unversionedId:"develop/coding-spec",id:"develop/coding-spec",isDocsHomePage:!1,title:"\u7f16\u7801\u89c4\u8303",description:"import",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/develop/coding-spec.md",sourceDirName:"develop",slug:"/develop/coding-spec",permalink:"/cn/docs/develop/coding-spec",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/develop/coding-spec.md",version:"current",lastUpdatedAt:1677743481,formattedLastUpdatedAt:"3/2/2023",frontMatter:{},sidebar:"docs",previous:{title:"\u547d\u540d\u89c4\u8303",permalink:"/cn/docs/develop/naming-spec"},next:{title:"api\u914d\u7f6e",permalink:"/cn/docs/configuration/api"}},p=[{value:"import",id:"import",children:[]},{value:"\u51fd\u6570\u8fd4\u56de",id:"\u51fd\u6570\u8fd4\u56de",children:[]},{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",children:[]},{value:"\u51fd\u6570\u4f53\u7f16\u7801",id:"\u51fd\u6570\u4f53\u7f16\u7801",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"import"},"import"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5355\u884cimport\u4e0d\u5efa\u8bae\u7528\u5706\u62ec\u53f7\u5305\u88f9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6309\u7167",(0,a.kt)("inlineCode",{parentName:"p"},"\u5b98\u65b9\u5305"),"\uff0cNEW LINE\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u5f53\u524d\u5de5\u7a0b\u5305"),"\uff0cNEW LINE\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5305"),"\u987a\u5e8f\u5f15\u5165"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "string"\n\n    "greet/user/internal/config"\n\n    "google.golang.org/grpc"\n)\n')))),(0,a.kt)("h2",{id:"\u51fd\u6570\u8fd4\u56de"},"\u51fd\u6570\u8fd4\u56de"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u907f\u514d\u975e\u6307\u9488\u8fd4\u56de"),(0,a.kt)("li",{parentName:"ul"},"\u9075\u5faa\u6709\u6b63\u5e38\u503c\u8fd4\u56de\u5219\u4e00\u5b9a\u65e0error\uff0c\u6709error\u5219\u4e00\u5b9a\u65e0\u6b63\u5e38\u503c\u8fd4\u56de\u7684\u539f\u5219")),(0,a.kt)("h2",{id:"\u9519\u8bef\u5904\u7406"},"\u9519\u8bef\u5904\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6709error\u5fc5\u987b\u5904\u7406\uff0c\u5982\u679c\u4e0d\u80fd\u5904\u7406\u5c31\u5fc5\u987b\u629b\u51fa\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d\u4e0b\u5212\u7ebf(_)\u63a5\u6536error")),(0,a.kt)("h2",{id:"\u51fd\u6570\u4f53\u7f16\u7801"},"\u51fd\u6570\u4f53\u7f16\u7801"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5efa\u8bae\u4e00\u4e2ablock\u7ed3\u675f\u7a7a\u4e00\u884c\uff0c\u5982if\u3001for\u7b49"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main (){\n    if x==1{\n        // do something\n    }\n\n    fmt.println("xxx")\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"return\u524d\u7a7a\u4e00\u884c"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func getUser(id string)(string,error){\n    ....\n\n    return "xx",nil\n}\n')))))}m.isMDXComponent=!0}}]);