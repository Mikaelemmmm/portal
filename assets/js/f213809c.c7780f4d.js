"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1431],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?t.createElement(f,s(s({ref:r},p),{},{components:n})):t.createElement(f,s({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8005:function(e,r,n){n.r(r),n.d(r,{default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={},l={unversionedId:"advance/error-handle",id:"advance/error-handle",isDocsHomePage:!1,title:"Error Handling",description:"Error handling is an indispensable part of services. Normally, if a http status code is not in the 2xx series, it can be considered as an http request error.",source:"@site/docs/advance/error-handle.md",sourceDirName:"advance",slug:"/advance/error-handle",permalink:"/docs/advance/error-handle",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/advance/error-handle.md",version:"current",lastUpdatedAt:1677743481,formattedLastUpdatedAt:"3/2/2023",frontMatter:{},sidebar:"docs",previous:{title:"RPC Implement & Call",permalink:"/docs/advance/rpc-call"},next:{title:"Template Modification",permalink:"/docs/advance/template"}},c=[{value:"Business error response format",id:"business-error-response-format",children:[]},{value:"Login of the user APIs",id:"login-of-the-user-apis",children:[]},{value:"Custom error",id:"custom-error",children:[]}],p={toc:c};function u(e){var r=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Error handling is an indispensable part of services. Normally, if a http status code is not in the ",(0,a.kt)("inlineCode",{parentName:"p"},"2xx")," series, it can be considered as an http request error."),(0,a.kt)("p",null,"The error message of a response is returned in plain text. In addition, some other types of errors were defined and retured. Common practice is to pass two fields: ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"msg")," that are used to describe the business processing results, and the response body can be formatted as json."),(0,a.kt)("h2",{id:"business-error-response-format"},"Business error response format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Normal business processing"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 0,\n  "msg": "successful",\n  "data": {\n    ....\n  }\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An error occurred in the business processing "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 10001,\n  "msg": "something wrong"\n}\n')))),(0,a.kt)("h2",{id:"login-of-the-user-apis"},"Login of the user APIs"),(0,a.kt)("p",null,"Previously, when we handled the login logic if the username did not exist, an error was directly returned. Let's try the ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," and pass a username that does not exist to see the result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST \\\n  http://127.0.0.1:8888/user/login \\\n  -H \'content-type: application/json\' \\\n  -d \'{\n    "username":"1",\n    "password":"123456"\n}\'\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 400 Bad Request\nContent-Type: text/plain; charset=utf-8\nX-Content-Type-Options: nosniff\nDate: Tue, 09 Feb 2021 06:38:42 GMT\nContent-Length: 19\n\nUsername does not exist\n")),(0,a.kt)("p",null,"Next we will return it in json format"),(0,a.kt)("h2",{id:"custom-error"},"Custom error"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"First add a ",(0,a.kt)("inlineCode",{parentName:"p"},"baseerror.go")," file in common and fill in the code"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd common\n$ mkdir errorx&&cd errorx\n$ vim baseerror.go\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-goalng"},'package errorx\n\nconst defaultCode = 1001\n\ntype CodeError struct {\n    Code int    `json:"code"`\n    Msg  string `json:"msg"`\n}\n\ntype CodeErrorResponse struct {\n    Code int    `json:"code"`\n    Msg  string `json:"msg"`\n}\n\nfunc NewCodeError(code int, msg string) error {\n    return &CodeError{Code: code, Msg: msg}\n}\n\nfunc NewDefaultError(msg string) error {\n    return NewCodeError(defaultCode, msg)\n}\n\nfunc (e *CodeError) Error() string {\n    return e.Msg\n}\n\nfunc (e *CodeError) Data() *CodeErrorResponse {\n    return &CodeErrorResponse{\n        Code: e.Code,\n        Msg:  e.Msg,\n    }\n}\n\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Replace errors in login logic with CodeError custom errors"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'if len(strings.TrimSpace(req.Username)) == 0 || len(strings.TrimSpace(req.Password)) == 0 {\n        return nil, errorx.NewDefaultError("Invalid parameter")\n    }\n\n    userInfo, err := l.svcCtx.UserModel.FindOneByNumber(req.Username)\n    switch err {\n    case nil:\n    case model.ErrNotFound:\n        return nil, errorx.NewDefaultError("Username does not exist")\n    default:\n        return nil, err\n    }\n\n    if userInfo.Password != req.Password {\n        return nil, errorx.NewDefaultError("User password is incorrect")\n    }\n\n    now := time.Now().Unix()\n    accessExpire := l.svcCtx.Config.Auth.AccessExpire\n    jwtToken, err := l.getJwtToken(l.svcCtx.Config.Auth.AccessSecret, now, l.svcCtx.Config.Auth.AccessExpire, userInfo.Id)\n    if err != nil {\n        return nil, err\n    }\n\n    return &types.LoginReply{\n        Id:           userInfo.Id,\n        Name:         userInfo.Name,\n        Gender:       userInfo.Gender,\n        AccessToken:  jwtToken,\n        AccessExpire: now + accessExpire,\n        RefreshAfter: now + accessExpire/2,\n    }, nil\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use custom errors"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/api/user.go\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    flag.Parse()\n\n    var c config.Config\n    conf.MustLoad(*configFile, &c)\n\n    ctx := svc.NewServiceContext(c)\n    server := rest.MustNewServer(c.RestConf)\n    defer server.Stop()\n\n    handler.RegisterHandlers(server, ctx)\n\n    // Custom error\n    httpx.SetErrorHandler(func(err error) (int, interface{}) {\n        switch e := err.(type) {\n        case *errorx.CodeError:\n            return http.StatusOK, e.Data()\n        default:\n            return http.StatusInternalServerError, nil\n        }\n    })\n\n    fmt.Printf("Starting server at %s:%d...\\n", c.Host, c.Port)\n    server.Start()\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Restart service verification"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -X POST \\\n  http://127.0.0.1:8888/user/login \\\n  -H \'content-type: application/json\' \\\n  -d \'{\n        "username":"1",\n        "password":"123456"\n}\'\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Tue, 09 Feb 2021 06:47:29 GMT\nContent-Length: 40\n\n{"code":1001,"msg":"Username does not exist"}\n')))))}u.isMDXComponent=!0}}]);