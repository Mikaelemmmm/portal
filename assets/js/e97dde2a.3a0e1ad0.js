"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[2908],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?l.createElement(k,o(o({ref:t},p),{},{components:n})):l.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},239:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],i={},s={unversionedId:"goctl/other",id:"goctl/other",isDocsHomePage:!1,title:"More Commands",description:"* goctl docker",source:"@site/docs/goctl/other.md",sourceDirName:"goctl",slug:"/goctl/other",permalink:"/docs/goctl/other",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/goctl/other.md",version:"current",lastUpdatedAt:1677743481,formattedLastUpdatedAt:"3/2/2023",frontMatter:{},sidebar:"goctl",previous:{title:"Template Operation",permalink:"/docs/goctl/template-cmd"},next:{title:"Goctl Commands",permalink:"/docs/goctl/commands"}},c=[{value:"goctl docker",id:"goctl-docker",children:[{value:"Prepare",id:"prepare",children:[]},{value:"Dockerfile note",id:"dockerfile-note",children:[]},{value:"Multi-stage build",id:"multi-stage-build",children:[]},{value:"Dockerfile writing process",id:"dockerfile-writing-process",children:[]},{value:"goctl docker summary",id:"goctl-docker-summary",children:[]}]},{value:"goctl kube",id:"goctl-kube",children:[{value:"Have a trouble to write K8S deployment files?",id:"have-a-trouble-to-write-k8s-deployment-files",children:[]}]},{value:"Create service image",id:"create-service-image",children:[]},{value:"\u5b8c\u6574 K8S Deployment file writing process",id:"\u5b8c\u6574-k8s-deployment-file-writing-process",children:[{value:"goctl kube summary",id:"goctl-kube-summary",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"goctl docker"),(0,r.kt)("li",{parentName:"ul"},"goctl kube")),(0,r.kt)("h2",{id:"goctl-docker"},"goctl docker"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"goctl docker")," can quickly generate a Dockerfile to help developers/operations and maintenance personnel speed up the deployment pace and reduce deployment complexity."),(0,r.kt)("h3",{id:"prepare"},"Prepare"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"docker install")),(0,r.kt)("h3",{id:"dockerfile-note"},"Dockerfile note"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose the simplest mirror: For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"alpine"),", the entire mirror is about 5M"),(0,r.kt)("li",{parentName:"ul"},"Set mirror time zone")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"RUN apk add --no-cache tzdata\nENV TZ Asia/Shanghai\n")),(0,r.kt)("h3",{id:"multi-stage-build"},"Multi-stage build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Otherwise, an executable file will be built in the first stage of construction to ensure that the build process is independent of the host"),(0,r.kt)("li",{parentName:"ul"},"The second stage uses the output of the first stage as input to construct the final minimalist image")),(0,r.kt)("h3",{id:"dockerfile-writing-process"},"Dockerfile writing process"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First install the goctl tool")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ GO111MODULE=on GOPROXY=https://goproxy.cn/,direct go get -u github.com/zeromicro/go-zero/tools/goctl\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a hello service under the greet project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api new hello\n")),(0,r.kt)("p",null,"The file structure is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"greet\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u2514\u2500\u2500 service\n    \u2514\u2500\u2500 hello\n        \u251c\u2500\u2500 Dockerfile\n        \u251c\u2500\u2500 etc\n        \u2502   \u2514\u2500\u2500 hello-api.yaml\n        \u251c\u2500\u2500 hello.api\n        \u251c\u2500\u2500 hello.go\n        \u2514\u2500\u2500 internal\n            \u251c\u2500\u2500 config\n            \u2502   \u2514\u2500\u2500 config.go\n            \u251c\u2500\u2500 handler\n            \u2502   \u251c\u2500\u2500 hellohandler.go\n            \u2502   \u2514\u2500\u2500 routes.go\n            \u251c\u2500\u2500 logic\n            \u2502   \u2514\u2500\u2500 hellologic.go\n            \u251c\u2500\u2500 svc\n            \u2502   \u2514\u2500\u2500 servicecontext.go\n            \u2514\u2500\u2500 types\n                \u2514\u2500\u2500 types.go\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate a ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"hello")," directory")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl docker -go hello.go\n")),(0,r.kt)("p",null,"Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'    FROM golang:alpine AS builder\n    LABEL stage=gobuilder\n    ENV CGO_ENABLED 0\n    ENV GOOS linux\n    ENV GOPROXY https://goproxy.cn,direct\n    WORKDIR /build/zero\n    ADD go.mod .\n    ADD go.sum .\n    RUN go mod download\n    COPY . .\n    COPY service/hello/etc /app/etc\n    RUN go build -ldflags="-s -w" -o /app/hello service/hello/hello.go\n    FROM alpine\n    RUN apk update --no-cache\n    RUN apk add --no-cache ca-certificates\n    RUN apk add --no-cache tzdata\n    ENV TZ Asia/Shanghai\n    WORKDIR /app\n    COPY --from=builder /app/hello /app/hello\n    COPY --from=builder /app/etc /app/etc\n    CMD ["./hello", "-f", "etc/hello-api.yaml"]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To ",(0,r.kt)("inlineCode",{parentName:"li"},"build")," mirror in the ",(0,r.kt)("inlineCode",{parentName:"li"},"greet")," directory")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker build -t hello:v1 -f service/hello/Dockerfile .\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View mirror")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"hello v1 5455f2eaea6b 7 minutes ago 18.1MB\n")),(0,r.kt)("p",null,"It can be seen that the mirror size is about 18M."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it -p 8888:8888 hello:v1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://localhost:8888/from/you\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Thu, 10 Dec 2020 06:03:02 GMT\nContent-Length: 14\n{"message":""}\n')),(0,r.kt)("h3",{id:"goctl-docker-summary"},"goctl docker summary"),(0,r.kt)("p",null,"The goctl tool greatly simplifies the writing of Dockerfile files, provides best practices out of the box, and supports template customization."),(0,r.kt)("h2",{id:"goctl-kube"},"goctl kube"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"goctl kube")," provides the function of quickly generating a ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," deployment file, which can speed up the deployment progress of developers/operations and maintenance personnel and reduce deployment complexity."),(0,r.kt)("h3",{id:"have-a-trouble-to-write-k8s-deployment-files"},"Have a trouble to write K8S deployment files?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"K8S yaml")," has a lot of parameters, need to write and check?"),(0,r.kt)("li",{parentName:"ul"},"How to set the number of retained rollback versions?"),(0,r.kt)("li",{parentName:"ul"},"How to detect startup success, how to detect live?"),(0,r.kt)("li",{parentName:"ul"},"How to allocate and limit resources?"),(0,r.kt)("li",{parentName:"ul"},"How to set the time zone? Otherwise, the print log is GMT standard time"),(0,r.kt)("li",{parentName:"ul"},"How to expose services for other services to call?"),(0,r.kt)("li",{parentName:"ul"},"How to configure horizontal scaling based on CPU and memory usage?")),(0,r.kt)("p",null,"First, you need to know that you have these knowledge points, and secondly, it is not easy to understand all these knowledge points, and again, it is still easy to make mistakes every time you write!"),(0,r.kt)("h2",{id:"create-service-image"},"Create service image"),(0,r.kt)("p",null,"For demonstration, here we take the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis:6-alpine")," image as an example."),(0,r.kt)("h2",{id:"\u5b8c\u6574-k8s-deployment-file-writing-process"},"\u5b8c\u6574 K8S Deployment file writing process"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First install the ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl")," tool")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ GO111MODULE=on GOPROXY=https://goproxy.cn/,direct go get -u github.com/zeromicro/go-zero/tools/goctl\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One-click generation of K8S deployment files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl kube deploy -name redis -namespace adhoc -image redis:6-alpine -o redis.yaml -port 6379\n")),(0,r.kt)("p",null,"The generated ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," file is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: redis\n  namespace: adhoc\n  labels:\n    app: redis\nspec:\n  replicas: 3\n  revisionHistoryLimit: 5\n  selector:\n    matchLabels:\n      app: redis\n  template:\n    metadata:\n      labels:\n        app: redis\n    spec:\n      containers:\n      - name: redis\n        image: redis:6-alpine\n        lifecycle:\n          preStop:\n            exec:\n              command: ["sh","-c","sleep 5"]\n        ports:\n        - containerPort: 6379\n        readinessProbe:\n          tcpSocket:\n            port: 6379\n          initialDelaySeconds: 5\n          periodSeconds: 10\n        livenessProbe:\n          tcpSocket:\n            port: 6379\n          initialDelaySeconds: 15\n          periodSeconds: 20\n        resources:\n          requests:\n            cpu: 500m\n            memory: 512Mi\n          limits:\n            cpu: 1000m\n            memory: 1024Mi\n        volumeMounts:\n        - name: timezone\n          mountPath: /etc/localtime\n      volumes:\n        - name: timezone\n          hostPath:\n            path: /usr/share/zoneinfo/Asia/Shanghai\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: redis-svc\n  namespace: adhoc\nspec:\n  ports:\n    - port: 6379\n  selector:\n    app: redis\n---\napiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: redis-hpa-c\n  namespace: adhoc\n  labels:\n    app: redis-hpa-c\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: redis\n  minReplicas: 3\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      targetAverageUtilization: 80\n---\napiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: redis-hpa-m\n  namespace: adhoc\n  labels:\n    app: redis-hpa-m\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: redis\n  minReplicas: 3\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: memory\n      targetAverageUtilization: 80\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy the service, if the ",(0,r.kt)("inlineCode",{parentName:"li"},"adhoc")," namespace does not exist, please create it through ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl create namespace adhoc"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl apply -f redis.yaml\ndeployment.apps/redis created\nservice/redis-svc created\nhorizontalpodautoscaler.autoscaling/redis-hpa-c created\nhorizontalpodautoscaler.autoscaling/redis-hpa-m created\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View service permission status")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get all -n adhoc\nNAME                         READY   STATUS    RESTARTS   AGE\npod/redis-585bc66876-5ph26   1/1     Running   0          6m5s\npod/redis-585bc66876-bfqxz   1/1     Running   0          6m5s\npod/redis-585bc66876-vvfc9   1/1     Running   0          6m5s\nNAME                TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE\nservice/redis-svc   ClusterIP   172.24.15.8   <none>        6379/TCP   6m5s\nNAME                    READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/redis   3/3     3            3           6m6s\nNAME                               DESIRED   CURRENT   READY   AGE\nreplicaset.apps/redis-585bc66876   3         3         3       6m6s\nNAME                                              REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE\nhorizontalpodautoscaler.autoscaling/redis-hpa-c   Deployment/redis   0%/80%    3         10        3          6m6s\nhorizontalpodautoscaler.autoscaling/redis-hpa-m   Deployment/redis   0%/80%    3         10        3          6m6s\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl run -i --tty --rm cli --image=redis:6-alpine -n adhoc -- sh\n/data # redis-cli -h redis-svc\nredis-svc:6379> set go-zero great\nOK\nredis-svc:6379> get go-zero\n"great"\n')),(0,r.kt)("h3",{id:"goctl-kube-summary"},"goctl kube summary"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"goctl")," tool greatly simplifies the writing of K8S yaml files, provides best practices out of the box, and supports template customization."),(0,r.kt)("h1",{id:"guess-you-wants"},"Guess you wants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com"},"Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/home/"},"K8s"))))}u.isMDXComponent=!0}}]);