"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[999],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),h=n,d=s["".concat(l,".").concat(h)]||s[h]||m[h]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2449:function(e,t,r){r.r(t),r.d(t,{default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"DB caching mechanism",authors:"kevwan"},l={unversionedId:"blog/cache/cache",id:"blog/cache/cache",isDocsHomePage:!1,title:"DB caching mechanism",description:"QueryRowIndex",source:"@site/docs/blog/cache/cache.md",sourceDirName:"blog/cache",slug:"/blog/cache/cache",permalink:"/docs/blog/cache/cache",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/cache/cache.md",version:"current",lastUpdatedAt:1677743481,formattedLastUpdatedAt:"3/2/2023",frontMatter:{title:"DB caching mechanism",authors:"kevwan"},sidebar:"blog",previous:{title:"Token Limit",permalink:"/docs/blog/governance/tokenlimit"},next:{title:"go-zero cache design for persistence layer cache",permalink:"/docs/blog/cache/redis-cache"}},u=[{value:"QueryRowIndex",id:"queryrowindex",children:[]}],p={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"queryrowindex"},"QueryRowIndex"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No query criteria to Primary mapping cache",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Goes to DB for row records via query criteria, then",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"}," write the cache of Primary to row records to redis ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"}," save the query condition to Primary mapping to redis ")," and ",(0,o.kt)("em",{parentName:"li"}," the framework's Take method does it automatically ")))),(0,o.kt)("li",{parentName:"ul"},"possible expiration order",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Query condition to Primary mapping cache not expired",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Primary to row record cache not expired",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Direct return of cached row records"))),(0,o.kt)("li",{parentName:"ul"},"Primary to row record cache is expired",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Get row records from Primary to DB and write to cache",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The problem at this point is that the cache of the query condition to Primary may be about to expire, and a query within a short time will trigger another database query"),(0,o.kt)("li",{parentName:"ul"},"To avoid this problem, you can make the ",(0,o.kt)("strong",{parentName:"li"},"bold part above")," the first expiration time slightly longer than the second, for example, 5 seconds"))))))),(0,o.kt)("li",{parentName:"ul"},"The cache of the query condition to Primary mapping has expired, regardless of whether the cache of Primary to row records has expired",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The query condition to Primary mapping is re-fetched, and the new Primary to row record cache is automatically written during the fetching process, so that the expiration time for both caches is just set"))))))),(0,o.kt)("li",{parentName:"ul"},"Cache with query condition to Primary mapping",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Cache without Primary to row record",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Query to row records via Primary to DB and write to cache"))),(0,o.kt)("li",{parentName:"ul"},"Cache with Primary to row records",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Return cached results directly")))))))}m.isMDXComponent=!0}}]);