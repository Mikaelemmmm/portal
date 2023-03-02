"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1014],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=u(r),m=a,d=g["".concat(i,".").concat(m)]||g[m]||s[m]||o;return r?t.createElement(d,l(l({ref:n},p),{},{components:r})):t.createElement(d,l({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3426:function(e,n,r){r.r(n),r.d(n,{default:function(){return s},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],c={title:"\u9632\u6b62\u7f13\u5b58\u51fb\u7a7f\u4e4b\u8fdb\u7a0b\u5185\u5171\u4eab\u8c03\u7528",authors:"kevwan"},i={unversionedId:"blog/concurrency/sharedcalls",id:"blog/concurrency/sharedcalls",isDocsHomePage:!1,title:"\u9632\u6b62\u7f13\u5b58\u51fb\u7a7f\u4e4b\u8fdb\u7a0b\u5185\u5171\u4eab\u8c03\u7528",description:"go-zero\u5fae\u670d\u52a1\u6846\u67b6\u4e2d\u63d0\u4f9b\u4e86\u8bb8\u591a\u5f00\u7bb1\u5373\u7528\u7684\u5de5\u5177\uff0c\u597d\u7684\u5de5\u5177\u4e0d\u4ec5\u80fd\u63d0\u5347\u670d\u52a1\u7684\u6027\u80fd\u800c\u4e14\u8fd8\u80fd\u63d0\u5347\u4ee3\u7801\u7684\u9c81\u68d2\u6027\u907f\u514d\u51fa\u9519\uff0c\u5b9e\u73b0\u4ee3\u7801\u98ce\u683c\u7684\u7edf\u4e00\u65b9\u4fbf\u4ed6\u4eba\u9605\u8bfb\u7b49\u7b49\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/blog/concurrency/sharedcalls.md",sourceDirName:"blog/concurrency",slug:"/blog/concurrency/sharedcalls",permalink:"/cn/docs/blog/concurrency/sharedcalls",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/blog/concurrency/sharedcalls.md",version:"current",lastUpdatedAt:1677743481,formattedLastUpdatedAt:"3/2/2023",frontMatter:{title:"\u9632\u6b62\u7f13\u5b58\u51fb\u7a7f\u4e4b\u8fdb\u7a0b\u5185\u5171\u4eab\u8c03\u7528",authors:"kevwan"},sidebar:"blog",previous:{title:"redis lock",permalink:"/cn/docs/blog/concurrency/redis-lock"},next:{title:"TimingWheel",permalink:"/cn/docs/blog/principle/timing-wheel"}},u=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u5173\u952e\u6e90\u7801\u5206\u6790",id:"\u5173\u952e\u6e90\u7801\u5206\u6790",children:[]},{value:"\u6700\u540e",id:"\u6700\u540e",children:[]}],p={toc:u};function s(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"go-zero\u5fae\u670d\u52a1\u6846\u67b6\u4e2d\u63d0\u4f9b\u4e86\u8bb8\u591a\u5f00\u7bb1\u5373\u7528\u7684\u5de5\u5177\uff0c\u597d\u7684\u5de5\u5177\u4e0d\u4ec5\u80fd\u63d0\u5347\u670d\u52a1\u7684\u6027\u80fd\u800c\u4e14\u8fd8\u80fd\u63d0\u5347\u4ee3\u7801\u7684\u9c81\u68d2\u6027\u907f\u514d\u51fa\u9519\uff0c\u5b9e\u73b0\u4ee3\u7801\u98ce\u683c\u7684\u7edf\u4e00\u65b9\u4fbf\u4ed6\u4eba\u9605\u8bfb\u7b49\u7b49\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u8bb2\u8ff0\u8fdb\u7a0b\u5185\u5171\u4eab\u8c03\u7528\u795e\u5668",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/core/syncx/sharedcalls.go"},"SharedCalls"),"\u3002  "),(0,o.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,o.kt)("p",null,'\u5e76\u53d1\u573a\u666f\u4e0b\uff0c\u53ef\u80fd\u4f1a\u6709\u591a\u4e2a\u7ebf\u7a0b\uff08\u534f\u7a0b\uff09\u540c\u65f6\u8bf7\u6c42\u540c\u4e00\u4efd\u8d44\u6e90\uff0c\u5982\u679c\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u8981\u8d70\u4e00\u904d\u8d44\u6e90\u7684\u8bf7\u6c42\u8fc7\u7a0b\uff0c\u9664\u4e86\u6bd4\u8f83\u4f4e\u6548\u4e4b\u5916\uff0c\u8fd8\u4f1a\u5bf9\u8d44\u6e90\u670d\u52a1\u9020\u6210\u5e76\u53d1\u7684\u538b\u529b\u3002\u4e3e\u4e00\u4e2a\u5177\u4f53\u4f8b\u5b50\uff0c\u6bd4\u5982\u7f13\u5b58\u5931\u6548\uff0c\u591a\u4e2a\u8bf7\u6c42\u540c\u65f6\u5230\u8fbe\u67d0\u670d\u52a1\u8bf7\u6c42\u67d0\u8d44\u6e90\uff0c\u8be5\u8d44\u6e90\u5728\u7f13\u5b58\u4e2d\u5df2\u7ecf\u5931\u6548\uff0c\u6b64\u65f6\u8fd9\u4e9b\u8bf7\u6c42\u4f1a\u7ee7\u7eed\u8bbf\u95eeDB\u505a\u67e5\u8be2\uff0c\u4f1a\u5f15\u8d77\u6570\u636e\u5e93\u538b\u529b\u77ac\u95f4\u589e\u5927\u3002\u800c\u4f7f\u7528SharedCalls\u53ef\u4ee5\u4f7f\u5f97\u540c\u65f6\u591a\u4e2a\u8bf7\u6c42\u53ea\u9700\u8981\u53d1\u8d77\u4e00\u6b21\u62ff\u7ed3\u679c\u7684\u8c03\u7528\uff0c\u5176\u4ed6\u8bf7\u6c42"\u5750\u4eab\u5176\u6210"\uff0c\u8fd9\u79cd\u8bbe\u8ba1\u6709\u6548\u51cf\u5c11\u4e86\u8d44\u6e90\u670d\u52a1\u7684\u5e76\u53d1\u538b\u529b\uff0c\u53ef\u4ee5\u6709\u6548\u9632\u6b62\u7f13\u5b58\u51fb\u7a7f\u3002'),(0,o.kt)("p",null,"\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\uff0c\u5f53\u67d0\u4e2a\u70ed\u70b9key\u7f13\u5b58\u5931\u6548\u540e\uff0c\u591a\u4e2a\u8bf7\u6c42\u4f1a\u540c\u65f6\u4ece\u6570\u636e\u5e93\u52a0\u8f7d\u8be5\u8d44\u6e90\uff0c\u5e76\u4fdd\u5b58\u5230\u7f13\u5b58\uff0c\u5982\u679c\u4e0d\u505a\u9632\u8303\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u88ab\u76f4\u63a5\u6253\u6b7b\u3002\u9488\u5bf9\u8fd9\u79cd\u573a\u666f\uff0cgo-zero\u6846\u67b6\u4e2d\u5df2\u7ecf\u63d0\u4f9b\u4e86\u5b9e\u73b0\uff0c\u5177\u4f53\u53ef\u53c2\u770b",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/core/stores/sqlc/cachedsql.go"},"sqlc"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/core/stores/mongoc/cachedcollection.go"},"mongoc"),"\u7b49\u5b9e\u73b0\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u6f14\u793a\u4ee3\u7801\uff0c\u6211\u4eec\u901a\u8fc7\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u53bb\u83b7\u53d6\u4e00\u4e2aid\u6765\u6a21\u62df\u7f13\u5b58\u7684\u573a\u666f\u3002\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  const round = 5\n  var wg sync.WaitGroup\n  barrier := syncx.NewSingleFlight()\n\n  wg.Add(round)\n  for i := 0; i < round; i++ {\n    // \u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u6267\u884c\n    go func() {\n      defer wg.Done()\n      // \u53ef\u4ee5\u770b\u5230\uff0c\u591a\u4e2a\u7ebf\u7a0b\u5728\u540c\u4e00\u4e2akey\u4e0a\u53bb\u8bf7\u6c42\u8d44\u6e90\uff0c\u83b7\u53d6\u8d44\u6e90\u7684\u5b9e\u9645\u51fd\u6570\u53ea\u4f1a\u88ab\u8c03\u7528\u4e00\u6b21\n      val, err := barrier.Do("once", func() (interface{}, error) {\n        // sleep 1\u79d2\uff0c\u4e3a\u4e86\u8ba9\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u53d6once\u8fd9\u4e2akey\u4e0a\u7684\u6570\u636e\n        time.Sleep(time.Second)\n        // \u751f\u6210\u4e86\u4e00\u4e2a\u968f\u673a\u7684id\n        return stringx.RandId(), nil\n      })\n      if err != nil {\n        fmt.Println(err)\n      } else {\n        fmt.Println(val)\n      }\n    }()\n  }\n\n  wg.Wait()\n}\n')),(0,o.kt)("p",null,"\u8fd0\u884c\uff0c\u6253\u5370\u7ed3\u679c\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"837c577b1008a0db\n837c577b1008a0db\n837c577b1008a0db\n837c577b1008a0db\n837c577b1008a0db\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c\u53ea\u8981\u662f\u540c\u4e00\u4e2akey\u4e0a\u7684\u540c\u65f6\u53d1\u8d77\u7684\u8bf7\u6c42\uff0c\u90fd\u4f1a\u5171\u4eab\u540c\u4e00\u4e2a\u7ed3\u679c\uff0c\u5bf9\u83b7\u53d6DB\u6570\u636e\u8fdb\u7f13\u5b58\u7b49\u573a\u666f\u7279\u522b\u6709\u7528\uff0c\u53ef\u4ee5\u6709\u6548\u9632\u6b62\u7f13\u5b58\u51fb\u7a7f\u3002"),(0,o.kt)("h2",{id:"\u5173\u952e\u6e90\u7801\u5206\u6790"},"\u5173\u952e\u6e90\u7801\u5206\u6790"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SharedCalls interface\u63d0\u4f9b\u4e86Do\u548cDoEx\u4e24\u79cd\u65b9\u6cd5\u7684\u62bd\u8c61"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// SharedCalls\u63a5\u53e3\u63d0\u4f9b\u4e86Do\u548cDoEx\u4e24\u79cd\u65b9\u6cd5\ntype SharedCalls interface {\n  Do(key string, fn func() (interface{}, error)) (interface{}, error)\n  DoEx(key string, fn func() (interface{}, error)) (interface{}, bool, error)\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SharedCalls interface\u7684\u5177\u4f53\u5b9e\u73b0sharedGroup"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// call\u4ee3\u8868\u5bf9\u6307\u5b9a\u8d44\u6e90\u7684\u4e00\u6b21\u8bf7\u6c42\ntype call struct {\n  wg  sync.WaitGroup  // \u7528\u4e8e\u534f\u8c03\u5404\u4e2a\u8bf7\u6c42goroutine\u4e4b\u95f4\u7684\u8d44\u6e90\u5171\u4eab\n  val interface{}     // \u7528\u4e8e\u4fdd\u5b58\u8bf7\u6c42\u7684\u8fd4\u56de\u503c\n  err error           // \u7528\u4e8e\u4fdd\u5b58\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u53d1\u751f\u7684\u9519\u8bef\n}\n\ntype sharedGroup struct {\n  calls map[string]*call\n  lock  sync.Mutex\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"sharedGroup\u7684Do\u65b9\u6cd5"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"key\u53c2\u6570\uff1a\u53ef\u4ee5\u7406\u89e3\u4e3a\u8d44\u6e90\u7684\u552f\u4e00\u6807\u8bc6\u3002"),(0,o.kt)("li",{parentName:"ul"},"fn\u53c2\u6570\uff1a\u771f\u6b63\u83b7\u53d6\u8d44\u6e90\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5904\u7406\u8fc7\u7a0b\u5206\u6790\uff1a")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// \u5f53\u591a\u4e2a\u8bf7\u6c42\u540c\u65f6\u4f7f\u7528Do\u65b9\u6cd5\u8bf7\u6c42\u8d44\u6e90\u65f6\nfunc (g *sharedGroup) Do(key string, fn func() (interface{}, error)) (interface{}, error) {\n  // \u5148\u7533\u8bf7\u52a0\u9501\n  g.lock.Lock()\n\n  // \u6839\u636ekey\uff0c\u83b7\u53d6\u5bf9\u5e94\u7684call\u7ed3\u679c,\u5e76\u7528\u53d8\u91cfc\u4fdd\u5b58\n  if c, ok := g.calls[key]; ok {\n    // \u62ff\u5230call\u4ee5\u540e\uff0c\u91ca\u653e\u9501\uff0c\u6b64\u5904call\u53ef\u80fd\u8fd8\u6ca1\u6709\u5b9e\u9645\u6570\u636e\uff0c\u53ea\u662f\u4e00\u4e2a\u7a7a\u7684\u5185\u5b58\u5360\u4f4d\n    g.lock.Unlock()\n    // \u8c03\u7528wg.Wait\uff0c\u5224\u65ad\u662f\u5426\u6709\u5176\u4ed6goroutine\u6b63\u5728\u7533\u8bf7\u8d44\u6e90\uff0c\u5982\u679c\u963b\u585e\uff0c\u8bf4\u660e\u6709\u5176\u4ed6goroutine\u6b63\u5728\u83b7\u53d6\u8d44\u6e90\n    c.wg.Wait()\n    // \u5f53wg.Wait\u4e0d\u518d\u963b\u585e\uff0c\u8868\u793a\u8d44\u6e90\u83b7\u53d6\u5df2\u7ecf\u7ed3\u675f\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\u7ed3\u679c\n    return c.val, c.err\n  }\n\n  // \u6ca1\u6709\u62ff\u5230\u7ed3\u679c\uff0c\u5219\u8c03\u7528makeCall\u65b9\u6cd5\u53bb\u83b7\u53d6\u8d44\u6e90\uff0c\u6ce8\u610f\u6b64\u5904\u4ecd\u7136\u662f\u9501\u4f4f\u7684\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u53ea\u6709\u4e00\u4e2agoroutine\u53ef\u4ee5\u8c03\u7528makecall\n  c := g.makeCall(key, fn)\n  // \u8fd4\u56de\u8c03\u7528\u7ed3\u679c\n  return c.val, c.err\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"sharedGroup\u7684DoEx\u65b9\u6cd5"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u548cDo\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u53ea\u662f\u8fd4\u56de\u503c\u4e2d\u589e\u52a0\u4e86\u5e03\u5c14\u503c\u8868\u793a\u503c\u662f\u8c03\u7528makeCall\u65b9\u6cd5\u76f4\u63a5\u83b7\u53d6\u7684\uff0c\u8fd8\u662f\u53d6\u7684\u5171\u4eab\u6210\u679c")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (g *sharedGroup) DoEx(key string, fn func() (interface{}, error)) (val interface{}, fresh bool, err error) {\n  g.lock.Lock()\n  if c, ok := g.calls[key]; ok {\n    g.lock.Unlock()\n    c.wg.Wait()\n    return c.val, false, c.err\n  }\n\n  c := g.makeCall(key, fn)\n  return c.val, true, c.err\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"sharedGroup\u7684makeCall\u65b9\u6cd5"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8be5\u65b9\u6cd5\u7531Do\u548cDoEx\u65b9\u6cd5\u8c03\u7528\uff0c\u662f\u771f\u6b63\u53d1\u8d77\u8d44\u6e90\u8bf7\u6c42\u7684\u65b9\u6cd5\u3002")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// \u8fdb\u5165makeCall\u7684\u4e00\u5b9a\u53ea\u6709\u4e00\u4e2agoroutine\uff0c\u56e0\u4e3a\u8981\u62ff\u9501\u9501\u4f4f\u7684\nfunc (g *sharedGroup) makeCall(key string, fn func() (interface{}, error)) *call {\n  // \u521b\u5efacall\u7ed3\u6784\uff0c\u7528\u4e8e\u4fdd\u5b58\u672c\u6b21\u8bf7\u6c42\u7684\u7ed3\u679c\n  c := new(call)\n  // wg\u52a01\uff0c\u7528\u4e8e\u901a\u77e5\u5176\u4ed6\u8bf7\u6c42\u8d44\u6e90\u7684goroutine\u7b49\u5f85\u672c\u6b21\u8d44\u6e90\u83b7\u53d6\u7684\u7ed3\u675f\n  c.wg.Add(1)\n  // \u5c06\u7528\u4e8e\u4fdd\u5b58\u7ed3\u679c\u7684call\u653e\u5165map\u4e2d\uff0c\u4ee5\u4f9b\u5176\u4ed6goroutine\u83b7\u53d6\n  g.calls[key] = c\n  // \u91ca\u653e\u9501\uff0c\u8fd9\u6837\u5176\u4ed6\u8bf7\u6c42\u7684goroutine\u624d\u80fd\u83b7\u53d6call\u7684\u5185\u5b58\u5360\u4f4d\n  g.lock.Unlock()\n\n  defer func() {\n    // delete key first, done later. can't reverse the order, because if reverse,\n    // another Do call might wg.Wait() without get notified with wg.Done()\n    g.lock.Lock()\n    delete(g.calls, key)\n    g.lock.Unlock()\n\n    // \u8c03\u7528wg.Done\uff0c\u901a\u77e5\u5176\u4ed6goroutine\u53ef\u4ee5\u8fd4\u56de\u7ed3\u679c\uff0c\u8fd9\u6837\u672c\u6279\u6b21\u6240\u6709\u8bf7\u6c42\u5b8c\u6210\u7ed3\u679c\u7684\u5171\u4eab\n    c.wg.Done()\n  }()\n\n  // \u8c03\u7528fn\u65b9\u6cd5\uff0c\u5c06\u7ed3\u679c\u586b\u5165\u53d8\u91cfc\u4e2d\n  c.val, c.err = fn()\n  return c\n}\n")))),(0,o.kt)("h2",{id:"\u6700\u540e"},"\u6700\u540e"),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86go-zero\u6846\u67b6\u4e2d\u7684 SharedCalls\u5de5\u5177\uff0c\u5bf9\u5176\u5e94\u7528\u573a\u666f\u548c\u5173\u952e\u4ee3\u7801\u505a\u4e86\u7b80\u5355\u7684\u68b3\u7406\uff0c\u5e0c\u671b\u672c\u7bc7\u6587\u7ae0\u80fd\u7ed9\u5927\u5bb6\u5e26\u6765\u4e00\u4e9b\u6536\u83b7\u3002"))}s.isMDXComponent=!0}}]);