"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[186],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=n,d=h["".concat(l,".").concat(p)]||h[p]||m[p]||a;return r?o.createElement(d,i(i({ref:t},u),{},{components:r})):o.createElement(d,i({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6036:function(e,t,r){r.r(t),r.d(t,{default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l={unversionedId:"blog/showcase/metric",id:"blog/showcase/metric",isDocsHomePage:!1,title:"Microservice metrics monitoring based on prometheus",description:"After a service goes live, we often need to monitor the service so that we can find problems early and make targeted optimizations, which can be divided into various forms, such as log monitoring, call chain monitoring, metrics monitoring, and so on. Through metrics monitoring, we can clearly observe the trend of service indicators and understand the operation status of the service, which plays a very important role in ensuring the stability of the service.",source:"@site/docs/blog/showcase/metric.md",sourceDirName:"blog/showcase",slug:"/blog/showcase/metric",permalink:"/docs/blog/showcase/metric",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/showcase/metric.md",version:"current",lastUpdatedAt:1677743481,formattedLastUpdatedAt:"3/2/2023",frontMatter:{},sidebar:"blog",previous:{title:"Develop a travel system using go-zero go-zero-looklook",permalink:"/docs/blog/showcase/go-zero-looklook"},next:{title:"Online Communication on October 3,2020",permalink:"/docs/blog/share/online-exchange"}},c=[{value:"Architecture of Prometheus",id:"architecture-of-prometheus",children:[]},{value:"go-zero prometheus-based service metrics monitoring",id:"go-zero-prometheus-based-service-metrics-monitoring",children:[]},{value:"go-zero monitoring metrics type",id:"go-zero-monitoring-metrics-type",children:[]},{value:"grafana visual interface",id:"grafana-visual-interface",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After a service goes live, we often need to monitor the service so that we can find problems early and make targeted optimizations, which can be divided into various forms, such as log monitoring, call chain monitoring, metrics monitoring, and so on. Through metrics monitoring, we can clearly observe the trend of service indicators and understand the operation status of the service, which plays a very important role in ensuring the stability of the service."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"prometheus")," is an open source system monitoring and alerting tool that supports the powerful query language PromQL allowing users to select and aggregate time series data in real time, time series data is actively pulled by the server through the HTTP protocol to obtain, but also through the intermediate gateway to push time series data. Monitoring targets can be obtained through static profiles or service discovery"),(0,a.kt)("h2",{id:"architecture-of-prometheus"},"Architecture of Prometheus"),(0,a.kt)("p",null,"The overall architecture of Prometheus and the ecosystem components are shown in the following figure."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/prometheus.png",alt:"prometheus"})),(0,a.kt)("p",null,"Prometheus Server pulls monitoring metrics directly from monitoring targets or indirectly through push gateways. It stores all grabbed sample data locally and executes a set of rules on this data to aggregate and record new time series of existing data or generate alerts. Monitoring data can be visualized via ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," or other tools"),(0,a.kt)("h2",{id:"go-zero-prometheus-based-service-metrics-monitoring"},"go-zero prometheus-based service metrics monitoring"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero"},"go-zero")," framework integrates prometheus-based service metrics monitoring, and we use the following go-zero official example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro"},"shorturl")," /go-zero/blob/master/doc/shorturl.md) to demonstrate how service metrics are collected and monitored."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first step requires Prometheus to be installed first, please refer to ",(0,a.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"official documentation")," for installation steps"),(0,a.kt)("li",{parentName:"ul"},"go-zero does not open prometheus monitoring by default, open the way is very simple, just need to add the following configuration in the shorturl-api.yaml file, where Host for Prometheus Server address is required configuration, Port port is not filled default 9091, Path for the path used to pull metrics default for / metrics")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"Prometheus:\n  Host: 127.0.0.1\n  Port: 9091\n  Path: /metrics\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edit the prometheus configuration file prometheus.yml, add the following configuration, and create targets.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"- job_name: 'file_ds'\n    file_sd_configs:\n    - files:\n      - targets.json\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edit the targets.json file, where targets is the target address for the shorturl configuration, and add a few default tags")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'[\n    {\n        "targets": ["127.0.0.1:9091"],\n        "labels": {\n            "job": "shorturl-api",\n            "app": "shorturl-api",\n            "env": "test",\n            "instance": "127.0.0.1:8888"\n        }\n    }\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start the prometheus service, listening on port 9090 by default")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"prometheus --config.file=prometheus.yml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type ",(0,a.kt)("a",{parentName:"li",href:"http://127.0.0.1:9090/"},"http://127.0.0.1:9090/")," in the browser and click Status -> Targets to see the Job with the status Up and the Lables bar with the default labels we configured")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/prom_up.png",alt:"Job status is Up"})),(0,a.kt)("p",null,"Through the above steps we have completed the configuration of prometheus metrics monitoring collection for the shorturl service, in order to demonstrate the simplicity of our manual configuration, in the actual production environment is generally used to regularly update the configuration file or service discovery to configure the monitoring targets, space is limited here not to expand the explanation, interested students please check the relevant documentation on their own"),(0,a.kt)("h2",{id:"go-zero-monitoring-metrics-type"},"go-zero monitoring metrics type"),(0,a.kt)("p",null,"go-zero currently adds monitoring of request metrics to the http middleware and rpc interceptor."),(0,a.kt)("p",null,"The main two dimensions are request time consumption and request error. The request time consumption uses the Histogram metric type to define multiple Buckets to facilitate subdivision statistics, the request error uses the Counter type, and the path tag is added to the http metric and the method tag is added to the rpc metric for subdivision monitoring."),(0,a.kt)("p",null,"Next, we demonstrate how to view the monitoring metrics."),(0,a.kt)("p",null,"First, execute the following command multiple times at the command line"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'curl -i "http://localhost:8888/shorten?url=http://www.xiaoheiban.cn"\n')),(0,a.kt)("p",null,'Open Prometheus and switch to the Graph interface, enter the command {path="/shorten"} in the input box to view the monitoring metrics, as follows'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/panel.png",alt:"Query Panel"})),(0,a.kt)("p",null,"We filter the metrics with the path of /shorten by ProQL syntax query, the result shows the metric name and the value of the metric, where the code value in the http_server_requests_code_total metric is the status code of http, 200 indicates a successful request, http_server_requests The _duration_ms_bucket shows the statistics of different bucket results, and we can also see that all the indicators are added to the default indicators we configured."),(0,a.kt)("p",null,"The Console interface mainly shows the results of the query metrics, and the Graph interface provides us with a simple graphical display interface, in the actual production environment we generally use Grafana for graphical display"),(0,a.kt)("h2",{id:"grafana-visual-interface"},"grafana visual interface"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/"},"grafana")," is a visualization tool, powerful, supports multiple data sources Prometheus, Elasticsearch, Graphite, etc., installation is relatively simple please refer to ","[official documentation]","(",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/docs/"},"https://grafana.com/docs/")," grafana/latest/), grafana default port 3000, after installation and then browser enter http://localhost:3000/, the default account and password are admin"),(0,a.kt)("p",null,"The following demonstrates how to visualize the interface based on the above indicators."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the left sidebar Configuration->Data Source->Add data source to add the data source, where the HTTP URL is the address of the data source")),(0,a.kt)("p",null,"The HTTP URL is the address of the data source",(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/datasource.png",alt:"datasource"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the left sidebar to add a dashboard, then add Variables to facilitate filtering for different tags, such as adding app variables to filter different services")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/variables.png",alt:"variables"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the dashboard and click Add panel in the upper right corner to add a panel to count the qps of the interface in the path dimension")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/qps.png",alt:"qps"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The final result is shown below, you can filter different services by service name, the panel shows the trend of qps for path as /shorten")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/qps_panel.png",alt:"qps panel"})),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The above demonstrates the simple process of prometheus+grafana based service metrics monitoring in go-zero, and the production environment can do different dimensions of monitoring and analysis according to the actual scenario. Now go-zero's monitoring metrics are mainly for http and rpc, which is obviously still insufficient for the overall monitoring of services, such as monitoring of container resources, monitoring of dependent mysql, redis and other resources, and monitoring of custom metrics, etc. go-zero will continue to optimize in this area. Hope this article can bring you help!"))}m.isMDXComponent=!0}}]);