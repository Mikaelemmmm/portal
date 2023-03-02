"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[9784],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=l,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6667:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={},s={unversionedId:"blog/concurrency/redis-lock",id:"blog/concurrency/redis-lock",isDocsHomePage:!1,title:"Redis Lock",description:"Since it is a lock, the first function that comes to mind is: Anti-repeated clicks, only one request has an effect at a time.",source:"@site/docs/blog/concurrency/redis-lock.md",sourceDirName:"blog/concurrency",slug:"/blog/concurrency/redis-lock",permalink:"/docs/blog/concurrency/redis-lock",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/concurrency/redis-lock.md",version:"current",lastUpdatedAt:1677743481,formattedLastUpdatedAt:"3/2/2023",frontMatter:{},sidebar:"blog",previous:{title:"Stream processing",permalink:"/docs/blog/concurrency/stream"},next:{title:"SharedCalls",permalink:"/docs/blog/concurrency/sharedcalls"}},c=[{value:"example",id:"example",children:[]},{value:"Acquire the lock",id:"acquire-the-lock",children:[]},{value:"Release lock",id:"release-lock",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since it is a lock, the first function that comes to mind is: ",(0,a.kt)("strong",{parentName:"p"},"Anti-repeated clicks, only one request has an effect at a time"),"."),(0,a.kt)("p",null,"Since it is ",(0,a.kt)("inlineCode",{parentName:"p"},"redis"),", it must be exclusive and also have some common features of locks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"High performance"),(0,a.kt)("li",{parentName:"ul"},"No deadlock"),(0,a.kt)("li",{parentName:"ul"},"No lock failure after the node is down")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"go-zero"),", redis ",(0,a.kt)("inlineCode",{parentName:"p"},"set key nx")," can be used to ensure that the write is successful when the key does not exist. ",(0,a.kt)("inlineCode",{parentName:"p"},"px"),' can automatically delete the key after the timeout. "The worst case is that the key is automatically deleted after the timeout, so that there will be no death. lock"'),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'redisLockKey := fmt.Sprintf("%v%v", redisTpl, headId)\n// 1. New redislock\nredisLock := redis.NewRedisLock(redisConn, redisLockKey)\n// 2. Optional operation, set the redislock expiration time\nredisLock.SetExpire(redisLockExpireSeconds)\nif ok, err := redisLock.Acquire(); !ok || err != nil {\n  return nil, errors.New("another user is currently operating, please try again later")\n}\ndefer func() {\n  recover()\n  redisLock.Release()\n}()\n')),(0,a.kt)("p",null,"It is the same as when you use ",(0,a.kt)("inlineCode",{parentName:"p"},"sync.Mutex"),". Lock and unlock, perform your business operations."),(0,a.kt)("h2",{id:"acquire-the-lock"},"Acquire the lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'lockCommand = `if redis.call("GET", KEYS[1]) == ARGV[1] then\n    redis.call("SET", KEYS[1], ARGV[1], "PX", ARGV[2])\n    return "OK"\nelse\n    return redis.call("SET", KEYS[1], ARGV[1], "NX", "PX", ARGV[2])\nend`\n\nfunc (rl *RedisLock) Acquire() (bool, error) {\n    seconds := atomic.LoadUint32(&rl.seconds)\n  // execute luascript\n    resp, err := rl.store.Eval(lockCommand, []string{rl.key}, []string{\n        rl.id, strconv.Itoa(int(seconds)*millisPerSecond + tolerance)})\n    if err == red.Nil {\n        return false, nil\n    } else if err != nil {\n        logx.Errorf("Error on acquiring lock for %s, %s", rl.key, err.Error())\n        return false, err\n    } else if resp == nil {\n        return false, nil\n    }\n\n    reply, ok := resp.(string)\n    if ok && reply == "OK" {\n        return true, nil\n    } else {\n        logx.Errorf("Unknown reply when acquiring lock for %s: %v", rl.key, resp)\n        return false, nil\n    }\n}\n')),(0,a.kt)("p",null,"First introduce several ",(0,a.kt)("inlineCode",{parentName:"p"},"redis")," command options, the following are the added options for the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," command:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ex seconds")," : Set the key expiration time, in s"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"px milliseconds")," : set the key expiration time in milliseconds"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nx")," : When the key does not exist, set the value of the key"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xx")," : When the key exists, the value of the key will be set")),(0,a.kt)("p",null,"The input parameters involved in ",(0,a.kt)("inlineCode",{parentName:"p"},"lua script"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"args"),(0,a.kt)("th",{parentName:"tr",align:null},"example"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"KEYS","[1]"),(0,a.kt)("td",{parentName:"tr",align:null},"key$20201026"),(0,a.kt)("td",{parentName:"tr",align:null},"redis key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ARGV","[1]"),(0,a.kt)("td",{parentName:"tr",align:null},"lmnopqrstuvwxyzABCD"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique ID: random string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ARGV","[2]"),(0,a.kt)("td",{parentName:"tr",align:null},"30000"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the expiration time of the lock")))),(0,a.kt)("p",null,"Then talk about the code features:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Lua"),' script guarantees atomicity "Of course, multiple operations are implemented as one operation in Redis, that is, a single command operation"'),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"set key value px milliseconds nx")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," is unique"),(0,a.kt)("li",{parentName:"ol"},"When locking, first determine whether the ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," is consistent with the previous setting, and modify the expiration time if it is consistent")),(0,a.kt)("h2",{id:"release-lock"},"Release lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'delCommand = `if redis.call("GET", KEYS[1]) == ARGV[1] then\n    return redis.call("DEL", KEYS[1])\nelse\n    return 0\nend`\n\nfunc (rl *RedisLock) Release() (bool, error) {\n    resp, err := rl.store.Eval(delCommand, []string{rl.key}, []string{rl.id})\n    if err != nil {\n        return false, err\n    }\n\n    if reply, ok := resp.(int64); !ok {\n        return false, nil\n    } else {\n        return reply == 1, nil\n    }\n}\n')),(0,a.kt)("p",null,"You only need to pay attention to one point when releasing the lock:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can't release other people's locks, can't release other people's locks, can't release other people's locks")),(0,a.kt)("p",null,"Therefore, you need to first ",(0,a.kt)("inlineCode",{parentName:"p"},"get(key) == value\u300ckey\u300d"),", and then go to ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," if it is true"))}u.isMDXComponent=!0}}]);