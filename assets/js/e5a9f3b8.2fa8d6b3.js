"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[5150],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=m(n),c=o,d=u["".concat(s,".").concat(c)]||u[c]||g[c]||r;return n?i.createElement(d,l(l({ref:t},p),{},{components:n})):i.createElement(d,l({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2859:function(e,t,n){n.r(t),n.d(t,{default:function(){return g},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return m}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],a={},s={unversionedId:"component/logx",id:"component/logx",isDocsHomePage:!1,title:"logx",description:"logx configurations",source:"@site/docs/component/logx.md",sourceDirName:"component",slug:"/component/logx",permalink:"/docs/component/logx",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/component/logx.md",version:"current",lastUpdatedAt:1677743481,formattedLastUpdatedAt:"3/2/2023",frontMatter:{},sidebar:"docs",previous:{title:"index",permalink:"/docs/component/components"},next:{title:"Index",permalink:"/docs/advance/advance"}},m=[{value:"logx configurations",id:"logx-configurations",children:[]},{value:"Logging methods",id:"logging-methods",children:[]},{value:"Integrating with third-party logging libs",id:"integrating-with-third-party-logging-libs",children:[]},{value:"Write the logs to specific stores",id:"write-the-logs-to-specific-stores",children:[]},{value:"Filtering sensitive fields",id:"filtering-sensitive-fields",children:[]},{value:"More examples",id:"more-examples",children:[]}],p={toc:m};function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"logx-configurations"},"logx configurations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type LogConf struct {\n    ServiceName         string `json:",optional"`\n    Mode                string `json:",default=console,options=[console,file,volume]"`\n    Encoding            string `json:",default=json,options=[json,plain]"`\n    TimeFormat          string `json:",optional"`\n    Path                string `json:",default=logs"`\n    Level               string `json:",default=info,options=[info,error,severe]"`\n    Compress            bool   `json:",optional"`\n    KeepDays            int    `json:",optional"`\n    StackCooldownMillis int    `json:",default=100"`\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ServiceName"),": set the service name, optional. on ",(0,r.kt)("inlineCode",{parentName:"li"},"volume")," mode, the name is used to generate the log files. Within ",(0,r.kt)("inlineCode",{parentName:"li"},"rest/zrpc")," services, the name will be set to the name of ",(0,r.kt)("inlineCode",{parentName:"li"},"rest")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"zrpc")," automatically."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Mode"),": the mode to output the logs, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"console"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"console")," mode writes the logs to ",(0,r.kt)("inlineCode",{parentName:"li"},"stdout/stderr"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file")," mode writes the logs to the files specified by ",(0,r.kt)("inlineCode",{parentName:"li"},"Path"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"volume")," mode is used in docker, to write logs into mounted volumes."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Encoding"),": indicates how to encode the logs, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"json"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"json")," mode writes the logs in json format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plain")," mode writes the logs with plain text, with terminal color enabled."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TimeFormat"),": customize the time format, optional. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"2006-01-02T15:04:05.000Z07:00"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Path"),": set the log path, default to ",(0,r.kt)("inlineCode",{parentName:"li"},"logs"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Level"),": the logging level to filter logs. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"info"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info"),", all logs are written."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"info")," logs are suppressed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"severe"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"info")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"error")," logs are suppressed, only ",(0,r.kt)("inlineCode",{parentName:"li"},"severe")," logs are written."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Compress"),": whether or not to compress log files, only works with ",(0,r.kt)("inlineCode",{parentName:"li"},"file")," mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KeepDays"),": how many days that the log files are kept, after the given days, the outdated files will be deleted automatically. It has no effect on ",(0,r.kt)("inlineCode",{parentName:"li"},"console")," mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StackCooldownMillis"),": how many milliseconds to rewrite stacktrace again. It\u2019s used to avoid stacktrace flooding.")),(0,r.kt)("h2",{id:"logging-methods"},"Logging methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Logger interface {\n    // Error logs a message at error level.\n    Error(...interface{})\n    // Errorf logs a message at error level.\n    Errorf(string, ...interface{})\n    // Errorv logs a message at error level.\n    Errorv(interface{})\n    // Errorw logs a message at error level.\n    Errorw(string, ...LogField)\n    // Info logs a message at info level.\n    Info(...interface{})\n    // Infof logs a message at info level.\n    Infof(string, ...interface{})\n    // Infov logs a message at info level.\n    Infov(interface{})\n    // Infow logs a message at info level.\n    Infow(string, ...LogField)\n    // Slow logs a message at slow level.\n    Slow(...interface{})\n    // Slowf logs a message at slow level.\n    Slowf(string, ...interface{})\n    // Slowv logs a message at slow level.\n    Slowv(interface{})\n    // Sloww logs a message at slow level.\n    Sloww(string, ...LogField)\n    // WithContext returns a new logger with the given context.\n    WithContext(context.Context) Logger\n    // WithDuration returns a new logger with the given duration.\n    WithDuration(time.Duration) Logger\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Info"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Slow"),": write any kind of messages into logs, with like ",(0,r.kt)("inlineCode",{parentName:"li"},"fmt.Sprint(\u2026)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Errorf"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Infof"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Slowf"),": write messages with given format into logs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Errorv"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Infov"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Slowv"),": write any kind of messages into logs, with json marshalling to encode them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Errorw"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Infow"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Sloww"),": write the string message with given ",(0,r.kt)("inlineCode",{parentName:"li"},"key:value")," fields."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WithContext"),": inject the given ctx into the log messages, typically used to log ",(0,r.kt)("inlineCode",{parentName:"li"},"trace-id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"span-id"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WithDuration"),": write elapsed duration into the log messages, with key ",(0,r.kt)("inlineCode",{parentName:"li"},"duration"),".")),(0,r.kt)("h2",{id:"integrating-with-third-party-logging-libs"},"Integrating with third-party logging libs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"zap",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"implementation: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-contrib/blob/main/logx/zapx/zap.go"},"https://github.com/zeromicro/zero-contrib/blob/main/logx/zapx/zap.go")),(0,r.kt)("li",{parentName:"ul"},"usage example: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-examples/blob/main/logx/zaplog/main.go"},"https://github.com/zeromicro/zero-examples/blob/main/logx/zaplog/main.go")))),(0,r.kt)("li",{parentName:"ul"},"logrus",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"implementation: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-contrib/blob/main/logx/logrusx/logrus.go"},"https://github.com/zeromicro/zero-contrib/blob/main/logx/logrusx/logrus.go")),(0,r.kt)("li",{parentName:"ul"},"usage example: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/zero-examples/blob/main/logx/logrus/main.go"},"https://github.com/zeromicro/zero-examples/blob/main/logx/logrus/main.go"))))),(0,r.kt)("p",null,"For more libs, please implement and PR to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-contrib"},"https://github.com/zeromicro/zero-contrib")),(0,r.kt)("h2",{id:"write-the-logs-to-specific-stores"},"Write the logs to specific stores"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"logx")," defined two interfaces to let you customize ",(0,r.kt)("inlineCode",{parentName:"p"},"logx")," to write logs into any stores."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logx.NewWriter(w io.Writer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logx.SetWriter(writer logx.Writer)"))),(0,r.kt)("p",null,"For example, if we want to write the logs into kafka instead of console or files, we can do it like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type KafkaWriter struct {\n    Pusher *kq.Pusher\n}\n\nfunc NewKafkaWriter(pusher *kq.Pusher) *KafkaWriter {\n    return &KafkaWriter{\n        Pusher: pusher,\n    }\n}\n\nfunc (w *KafkaWriter) Write(p []byte) (n int, err error) {\n    // writing log with newlines, trim them.\n    if err := w.Pusher.Push(strings.TrimSpace(string(p))); err != nil {\n        return 0, err\n    }\n\n    return len(p), nil\n}\n\nfunc main() {\n    pusher := kq.NewPusher([]string{"localhost:9092"}, "go-zero")\n    defer pusher.Close()\n\n    writer := logx.NewWriter(NewKafkaWriter(pusher))\n    logx.SetWriter(writer)\n  \n    // more code\n}\n')),(0,r.kt)("p",null,"Complete code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/blob/main/logx/tokafka/main.go"},"https://github.com/zeromicro/zero-examples/blob/main/logx/tokafka/main.go")),(0,r.kt)("h2",{id:"filtering-sensitive-fields"},"Filtering sensitive fields"),(0,r.kt)("p",null,"If we need to prevent the ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," fields from logging, we can do it like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type (\n    Message struct {\n        Name     string\n        Password string\n        Message  string\n    }\n\n    SensitiveLogger struct {\n        logx.Writer\n    }\n)\n\nfunc NewSensitiveLogger(writer logx.Writer) *SensitiveLogger {\n    return &SensitiveLogger{\n        Writer: writer,\n    }\n}\n\nfunc (l *SensitiveLogger) Info(msg interface{}, fields ...logx.LogField) {\n    if m, ok := msg.(Message); ok {\n        l.Writer.Info(Message{\n            Name:     m.Name,\n            Password: "******",\n            Message:  m.Message,\n        }, fields...)\n    } else {\n        l.Writer.Info(msg, fields...)\n    }\n}\n\nfunc main() {\n    // setup logx to make sure originalWriter not nil,\n    // the injected writer is only for filtering, like a middleware.\n\n    originalWriter := logx.Reset()\n    writer := NewSensitiveLogger(originalWriter)\n    logx.SetWriter(writer)\n\n    logx.Infov(Message{\n        Name:     "foo",\n        Password: "shouldNotAppear",\n        Message:  "bar",\n    })\n  \n    // more code\n}\n')),(0,r.kt)("p",null,"Complete code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/blob/main/logx/filterfields/main.go"},"https://github.com/zeromicro/zero-examples/blob/main/logx/filterfields/main.go")),(0,r.kt)("h2",{id:"more-examples"},"More examples"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/tree/main/logx"},"https://github.com/zeromicro/zero-examples/tree/main/logx")))}g.isMDXComponent=!0}}]);