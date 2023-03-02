"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[8067],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=m(t),u=r,s=k["".concat(p,".").concat(u)]||k[u]||c[u]||l;return t?a.createElement(s,i(i({ref:n},d),{},{components:t})):a.createElement(s,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9777:function(e,n,t){t.r(n),t.d(n,{default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={title:"\u6570\u636e\u7684\u6d41\u5904\u7406\u5229\u5668",authors:"kevwan"},p={unversionedId:"blog/concurrency/fx",id:"blog/concurrency/fx",isDocsHomePage:!1,title:"fx",description:"fx\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u6d41\u5904\u7406\u7ec4\u4ef6\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/blog/concurrency/fx.md",sourceDirName:"blog/concurrency",slug:"/blog/concurrency/fx",permalink:"/cn/docs/blog/concurrency/fx",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/blog/concurrency/fx.md",version:"current",lastUpdatedAt:1677743481,formattedLastUpdatedAt:"3/2/2023",frontMatter:{title:"\u6570\u636e\u7684\u6d41\u5904\u7406\u5229\u5668",authors:"kevwan"},sidebar:"blog",previous:{title:"logx",permalink:"/cn/docs/blog/tool/logx"},next:{title:"\u901a\u8fc7MapReduce\u964d\u4f4e\u670d\u52a1\u54cd\u5e94\u65f6\u95f4",permalink:"/cn/docs/blog/concurrency/mapreduce"}},m=[{value:"\u6574\u4f53API",id:"\u6574\u4f53api",children:[]},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u7b80\u5355\u5206\u6790\u4e00\u4e0b",id:"\u7b80\u5355\u5206\u6790\u4e00\u4e0b",children:[{value:"Walk()",id:"walk",children:[]},{value:"Tail()",id:"tail",children:[]},{value:"\u6d41\u53d8\u6362\u8bbe\u8ba1",id:"\u6d41\u53d8\u6362\u8bbe\u8ba1",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],d={toc:m};function c(e){var n=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fx"),"\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u6d41\u5904\u7406\u7ec4\u4ef6\u3002\n\u5b83\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"MapReduce")," \u7c7b\u4f3c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"fx")," \u4e5f\u6709\u4e00\u4e2a\u5e76\u53d1\u5904\u7406\u51fd\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Parallel(fn, options)"),"\u3002\u4f46\u540c\u65f6\uff0c\u5b83\u53c8\u4e0d\u4ec5\u4ec5\u662f\u5e76\u53d1\u5904\u7406\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"From(chan)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Map(fn)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Filter(fn)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Reduce(fn)"),"\u7b49\uff0c\u4ece\u6570\u636e\u6e90\u8bfb\u5165\u6d41\uff0c\u5904\u7406\u6d41\u6570\u636e\uff0c\u6700\u540e\u805a\u5408\u6d41\u6570\u636e\u3002\u8fd9\u662f\u4e0d\u662f\u6709\u70b9\u50cfJava Lambda\uff1f\u5982\u679c\u4f60\u4ee5\u524d\u662f\u4e2aJava\u5f00\u53d1\u8005\uff0c\u770b\u5230\u8fd9\u4e2a\u5c31\u80fd\u660e\u767d\u57fa\u672c\u7684\u8bbe\u8ba1\u3002"),(0,l.kt)("h2",{id:"\u6574\u4f53api"},"\u6574\u4f53API"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u4e86\u89e3\u4e00\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"fx")," \u662f\u5982\u4f55\u6574\u4f53\u6784\u5efa\u7684\u3002\n",(0,l.kt)("img",{alt:"dc500acd526d40aabfe4f53cf5bd180a_tplv-k3u1fbpfcp-zoom-1.png",src:t(4845).Z})),(0,l.kt)("p",null,"\u6807\u8bb0\u7684\u90e8\u5206\u662f\u6574\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"fx"),"\u4e2d\u6700\u91cd\u8981\u7684\u90e8\u5206\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ece\u8bf8\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"From(fn)")," \u7b49API\u4e2d\uff0c\u4ea7\u751f\u4e00\u4e2a\u6570\u636e\u6d41 ",(0,l.kt)("inlineCode",{parentName:"li"},"Stream")," \u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u7528\u4e8e\u8f6c\u6362\u3001\u805a\u5408\u548c\u8bc4\u4f30 ",(0,l.kt)("inlineCode",{parentName:"li"},"Stream")," \u7684API\u96c6\u5408")),(0,l.kt)("p",null,"\u6240\u4ee5\u5217\u51fa\u76ee\u524d\u652f\u6301\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Stream API"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Distinct(fn)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728fn\u4e2d\u9009\u62e9\u4e00\u4e2a\u7279\u5b9a\u7684\u9879\u76ee\u7c7b\u578b\uff0c\u5e76\u5c06\u5176\u53bb\u6389\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Filter(fn, option)")),(0,l.kt)("td",{parentName:"tr",align:null},"fn\u6307\u5b9a\u7279\u5b9a\u7684\u89c4\u5219\uff0c\u7b26\u5408\u89c4\u5219\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"element")," \u88ab\u4f20\u9012\u5230\u4e0b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"stream"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Group(fn)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636efn\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"stream")," \u4e2d\u7684\u5143\u7d20\u88ab\u5206\u4e3a\u4e0d\u540c\u7684\u7ec4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Head(num)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u51fa ",(0,l.kt)("inlineCode",{parentName:"td"},"stream")," \u4e2d\u7684\u524dn\u4e2a\u5143\u7d20\uff0c\u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"stream"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Map(fn, option)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u6bcf\u4e2a\u5143\u7d20\u8f6c\u6362\u4e3a\u53e6\u4e00\u4e2a\u5bf9\u5e94\u7684\u5143\u7d20\uff0c\u5e76\u5c06\u5176\u4f20\u9012\u7ed9\u4e0b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"stream"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Merge()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u6240\u6709\u7684ele\u5408\u5e76\u6210\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"slice"),"\uff0c\u5e76\u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"stream"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Reverse()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53cd\u8f6c ",(0,l.kt)("inlineCode",{parentName:"td"},"stream")," \u4e2d\u7684\u5143\u7d20\u3002","[\u4f7f\u7528\u53cc\u6307\u9488]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Sort(fn)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636e fn \u5bf9 ",(0,l.kt)("inlineCode",{parentName:"td"},"stream")," \u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tail(num)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u51fa ",(0,l.kt)("inlineCode",{parentName:"td"},"stream")," \u7684\u6700\u540e n \u4e2a\u5143\u7d20\uff0c\u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"stream"),"\u3002","[\u4f7f\u7528\u4e00\u4e2a\u53cc\u94fe\u8868]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Walk(fn, option)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06fn\u5e94\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"source")," \u7684\u6bcf\u4e2a\u5143\u7d20\u3002\u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"stream"))))),(0,l.kt)("p",null,"\u4e0d\u518d\u751f\u6210\u4e00\u4e2a\u65b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"stream"),"\uff0c\u505a\u6700\u540e\u7684\u8bc4\u4f30\u64cd\u4f5c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ForAll(fn)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636efn\u5904\u7406",(0,l.kt)("inlineCode",{parentName:"td"},"stream"),"\uff0c\u4e0d\u518d\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"td"},"stream")," ","[\u8bc4\u4f30\u64cd\u4f5c]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ForEach(fn)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"td"},"stream")," \u4e2d\u7684\u6240\u6709\u5143\u7d20\u8fdb\u884cfn","[\u6c42\u503c\u64cd\u4f5c]"," !")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Parallel(fn, option)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u65f6\u5bf9\u6bcf\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"element")," \u5e94\u7528\u7ed9\u5b9a\u7684fn\u548c\u7ed9\u5b9a\u6570\u91cf\u7684worker","[\u6c42\u503c\u64cd\u4f5c]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Reduce(fn)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u76f4\u63a5\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"td"},"stream")," ","[\u8bc4\u4f30\u64cd\u4f5c]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Done()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u505a\u4efb\u4f55\u4e8b\u60c5\uff0c\u7b49\u5f85\u6240\u6709\u64cd\u4f5c\u5b8c\u6210")))),(0,l.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'result := make(map[string]string)\nfx.From(func(source chan<- interface{}) {\n  for _, item := range data {\n    source <- item\n  }\n}).Walk(func(item interface{}, pipe chan<- interface{}) {\n  each := item.(*model.ClassData)\n\n  class, err := l.rpcLogic.GetClassInfo()\n  if err != nil {\n    l.Errorf("get class %s failed: %s", each.ClassId, err.Error())\n    return\n  }\n  \n  students, err := l.rpcLogic.GetUsersInfo(class.ClassId)\n  if err != nil {\n    l.Errorf("get students %s failed: %s", each.ClassId, err.Error())\n    return\n  }\n\n  pipe <- &classObj{\n    classId: each.ClassId\n    studentIds: students\n  }\n}).ForEach(func(item interface{}) {\n    o := item.(*classObj)\n    result[o.classId] = o.studentIds\n})\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"From()"),"\u4ece\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"slice")," \u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"stream"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Walk()")," \u63a5\u6536\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"stream"),"\uff0c\u5bf9\u6d41\u4e2d\u7684\u6bcf\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"ele")," \u8fdb\u884c\u8f6c\u6362\u548c\u91cd\u7ec4\uff0c\u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"stream"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6700\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"stream")," \u7684\u8f93\u51fa\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"fmt.Println"),"\uff09\uff0c\u5b58\u50a8\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"map,slice"),"\uff09\u548c\u6301\u4e45\u5316\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"db\u64cd\u4f5c"),"\uff09\u7531 ",(0,l.kt)("inlineCode",{parentName:"li"},"evaluation operation")," \u5b8c\u6210\u3002")),(0,l.kt)("h2",{id:"\u7b80\u5355\u5206\u6790\u4e00\u4e0b"},"\u7b80\u5355\u5206\u6790\u4e00\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fx")," \u4e2d\u7684\u51fd\u6570\u547d\u540d\u662f\u6709\u8bed\u4e49\u7684\u3002\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u8981\u77e5\u9053\u4e1a\u52a1\u903b\u8f91\u9700\u8981\u4ec0\u4e48\u6837\u7684\u8f6c\u6362\uff0c\u5e76\u8c03\u7528\u5339\u914d\u7684\u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u4e0b\u9762\u662f\u5bf9\u51e0\u4e2a\u6bd4\u8f83\u5178\u578b\u7684\u51fd\u6570\u7684\u7b80\u8981\u5206\u6790\u3002"),(0,l.kt)("h3",{id:"walk"},"Walk()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Walk()")," \u662f\u7531\u6574\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"fx")," \u7684\u591a\u4e2a\u51fd\u6570\u4f5c\u4e3a\u5e95\u5c42\u5b9e\u73b0\u7684\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"Map()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Filter()")," \u7b49\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u672c\u8d28\u662f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Walk()")," \u8d1f\u8d23\u5c06\u4f20\u9012\u7684\u51fd\u6570\u540c\u65f6\u5e94\u7528\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\u6d41")," \u7684\u6bcf\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"ele"),"\uff0c\u5e76\u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"stream"),"\u3002"),(0,l.kt)("p",null,"\u6309\u7167\u6e90\u4ee3\u7801\uff0c\u5b83\u88ab\u5206\u4e3a\u4e24\u4e2a\u5b50\u51fd\u6570\uff1a\u6309 ",(0,l.kt)("inlineCode",{parentName:"p"},"worker")," \u81ea\u5b9a\u4e49\u8ba1\u6570\uff0c\u9ed8\u8ba4\u8ba1\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"worker"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// Custom workers\nfunc (p Stream) walkLimited(fn WalkFunc, option *rxOptions) Stream {\n    pipe := make(chan interface{}, option.workers)\n\n    go func() {\n        var wg sync.WaitGroup\n    // channel<- If the set number of workers is reached, the channel is blocked, so as to control the number of concurrency.\n    // Simple goroutine pool\n        pool := make(chan lang.PlaceholderType, option.workers)\n\n        for {\n      // Each for loop will open a goroutine. If it reaches the number of workers, it blocks\n            pool <- lang.Placeholder\n            item, ok := <-p.source\n            if !ok {\n                <-pool\n                break\n            }\n            // Use WaitGroup to ensure the integrity of task completion\n            wg.Add(1)\n            threading.GoSafe(func() {\n                defer func() {\n                    wg.Done()\n                    <-pool\n                }()\n\n                fn(item, pipe)\n            })\n        }\n\n        wg.Wait()\n        close(pipe)\n    }()\n\n    return Range(pipe)\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"buffered channel")," \u4f5c\u4e3a\u5e76\u53d1\u961f\u5217\uff0c\u9650\u5236\u5e76\u53d1\u7684\u6570\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"waitgroup"),"\u6765\u4fdd\u8bc1\u4efb\u52a1\u5b8c\u6210\u7684\u5b8c\u6574\u6027")),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"walkUnlimited()"),"\uff1a\u4e5f\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"waitgroup"),"\u8fdb\u884c\u5e76\u53d1\u63a7\u5236\uff0c\u56e0\u4e3a\u6ca1\u6709\u81ea\u5b9a\u4e49\u7684\u5e76\u53d1\u9650\u5236\uff0c\u6240\u4ee5\u6ca1\u6709\u5176\u4ed6 ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," \u8fdb\u884c\u5e76\u53d1\u63a7\u5236\u3002"),(0,l.kt)("h3",{id:"tail"},"Tail()"),(0,l.kt)("p",null,"\u4ecb\u7ecd\u8fd9\u4e2a\u4e3b\u8981\u662f\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"ring"),"\u662f\u4e00\u4e2a\u53cc\u94fe\u8868\uff0c\u7b80\u5355\u7684\u7b97\u6cd5\u8fd8\u662f\u5f88\u6709\u610f\u601d\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (p Stream) Tail(n int64) Stream {\n    source := make(chan interface{})\n\n    go func() {\n        ring := collection.NewRing(int(n))\n    // Sequence insertion, the order of the source is consistent with the order of the ring\n        for item := range p.source {\n            ring.Add(item)\n        }\n    // Take out all the items in the ring\n        for _, item := range ring.Take() {\n            source <- item\n        }\n        close(source)\n    }()\n\n    return Range(source)\n}\n")),(0,l.kt)("p",null,"\u81f3\u4e8e\u4e3a\u4ec0\u4e48 ",(0,l.kt)("inlineCode",{parentName:"p"},"Tail()")," \u53ef\u4ee5\u53d6\u51fa\u6e90\u5934\u7684\u6700\u540en\u4e2a\uff0c\u8fd9\u5c31\u7559\u7ed9\u5927\u5bb6\u53bb\u5fae\u8c03\u4e86\u3002\u4e0b\u9762\u662f\u6211\u7684\u7406\u89e3\u3002\n",(0,l.kt)("img",{alt:"f93c621571074e44a2d403aa25e7db6f_tplv-k3u1fbpfcp-zoom-1.png",src:t(521).Z})),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5047\u8bbe\u6709\u4ee5\u4e0b\u60c5\u51b5\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Tail(5)"),"\u3002"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u6c34\u6d41\u5927\u5c0f")," \uff1a7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u73af\u7684\u5927\u5c0f"),"\uff1a5")))),(0,l.kt)("p",null,"\u8fd9\u91cc\u4f60\u53ef\u4ee5\u4f7f\u7528\u62c9\u5f00\u73af\u5f62\u94fe\u8868\u7684\u65b9\u6cd5\uff0c\u6b64\u65f6\uff0c\u7528\u5bf9\u79f0\u8f74\u9664\u4ee5\u5168\u957f\uff0c\u7ffb\u8f6c\u591a\u4f59\u7684\u5143\u7d20\uff0c\u4ee5\u4e0b\u5143\u7d20\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Tail(5)")," \u9700\u8981\u7684\u90e8\u5206\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u4f7f\u7528\u56fe\u8868\u662f\u4e3a\u4e86\u66f4\u6e05\u6670\u7684\u8868\u73b0\uff0c\u4f46\u5927\u5bb6\u4e5f\u5e94\u8be5\u770b\u4e00\u4e0b\u4ee3\u7801\u3002\u8981\u6d4b\u8bd5\u7684\u7b97\u6cd5 "))),(0,l.kt)("h3",{id:"\u6d41\u53d8\u6362\u8bbe\u8ba1"},"\u6d41\u53d8\u6362\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u5206\u6790\u6574\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"fx"),"\uff0c\u4f60\u4f1a\u53d1\u73b0\uff0c\u6574\u4f53\u8bbe\u8ba1\u9075\u5faa\u4e00\u4e2a\u8bbe\u8ba1\u6a21\u677f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (p Stream) Transform(fn func(item interface{}) interface{}) Stream {\n    // make channel\n    source := make(chan interface{})\n    // goroutine worker\n    go func() {\n        // transform\n        for item := range p.source {\n            ...\n            source <- item\n            ...\n        }\n        ...\n        // Close the input, but still can output from this stream. Prevent memory leaks\n        close(source)\n    }()\n    // channel -> stream\n    return Range(source)\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channel")," \u4f5c\u4e3a\u6d41\u7684\u5bb9\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"li"},"goroutine")," \u6765\u8f6c\u6362 ",(0,l.kt)("inlineCode",{parentName:"li"},"source"),"\uff0c\u805a\u5408\uff0c\u5e76\u53d1\u9001\u81f3 ",(0,l.kt)("inlineCode",{parentName:"li"},"channel"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u5904\u7406\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"close(outputStream)"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channel -> stream"),"\u3002")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u8fd9\u5c31\u7ed3\u675f\u4e86\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"fx")," \u7684\u57fa\u672c\u4ecb\u7ecd\u3002\u5982\u679c\u4f60\u5bf9\u5176\u4ed6\u7684API\u6e90\u4ee3\u7801\u611f\u5174\u8da3\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4e0a\u9762\u7684API\u5217\u8868\u9010\u4e00\u9605\u8bfb\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u4e5f\u5efa\u8bae\u4f60\u770b\u4e00\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"java stream"),"\u7684API\uff0c\u4f60\u53ef\u4ee5\u5bf9\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"stream call")," \u6709\u66f4\u6df1\u7684\u4e86\u89e3\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"go-zero"),"\u4e2d\u8fd8\u6709\u8bb8\u591a\u6709\u7528\u7684\u7ec4\u4ef6\u5de5\u5177\u3002\u826f\u597d\u7684\u4f7f\u7528\u5de5\u5177\u5c06\u5927\u5927\u6709\u52a9\u4e8e\u63d0\u9ad8\u670d\u52a1\u6027\u80fd\u548c\u5f00\u53d1\u6548\u7387\u3002\u5e0c\u671b\u8fd9\u7bc7\u6587\u7ae0\u80fd\u7ed9\u4f60\u5e26\u6765\u4e00\u4e9b\u6536\u83b7\u3002"))}c.isMDXComponent=!0},4845:function(e,n,t){n.Z=t.p+"assets/images/dc500acd526d40aabfe4f53cf5bd180a_tplv-k3u1fbpfcp-zoom-1-5a890ca41e4e08d7758d7f941448b4c9.png"},521:function(e,n,t){n.Z=t.p+"assets/images/f93c621571074e44a2d403aa25e7db6f_tplv-k3u1fbpfcp-zoom-1-c61eee8473d6291e89b875a397440eb2.png"}}]);