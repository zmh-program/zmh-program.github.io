(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7077:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4954)}])},8886:function(e,t,a){"use strict";a.d(t,{z:function(){return c}});var s=a(1527),r=a(959),n=a(6230),i=a(2808),l=a(9259);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:a,variant:r,size:i,asChild:c=!1,...d}=e,u=c?n.g7:"button";return(0,s.jsx)(u,{className:(0,l.cn)(o({variant:r,size:i,className:a})),ref:t,...d})});c.displayName="Button"},9259:function(e,t,a){"use strict";a.d(t,{cn:function(){return n}});var s=a(6259),r=a(9014);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}},4954:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var s=a(1527),r=a(5285),n=a.n(r),i=a(3128),l=a.n(i),o=a(8886),c=a(8904),d=a(1014),u=a(959);let m=e=>{let{content:t,className:a,style:r,id:n,typingDelayTick:i,typingSpeed:l,keyboardSeed:o,keyboardStay:c,keyboardKey:d}=e,[m,f]=u.useState(i?-i:0),[h,p]=u.useState(!1);return u.useEffect(()=>{let e=setInterval(()=>{var a;f(a=>a>=t.length+(null!=c?c:0)?(p(!1),clearInterval(e),a):a+1),p(!((a=null!=o?o:0)<=0)&&0===Math.floor(Math.random()*a))},null!=l?l:100);return()=>{clearInterval(e),p(!1)}},[]),(0,s.jsxs)("p",{className:a,style:r,id:n,children:[t.slice(0,m),h&&(null!=d?d:"|")]})};var f=function(e){let{title:t,subtitle:a,tags:r}=e;return(0,s.jsxs)("div",{className:"inline-flex flex-col text-center mt-6 mb-4 select-none",children:[(0,s.jsx)("span",{className:"text-2xl underline underline-offset-4 underline-thickness-2",children:t}),(0,s.jsx)("span",{className:"mt-1 text-lg opacity-80",children:a}),r&&(0,s.jsx)("div",{className:"flex flex-row flex-wrap max-w-[60vw] mt-4 justify-center",children:r.map((e,t)=>(0,s.jsx)("span",{className:"text-xs bg-muted rounded px-2 py-1 m-1 whitespace-nowrap select-none cursor-pointer hover:bg-muted-hover transition-all",children:e},t))})]})},h=a(757),p=a(9259);let x=h.fC,g=h.xz,b=u.forwardRef((e,t)=>{let{className:a,align:r="center",sideOffset:n=4,...i}=e;return(0,s.jsx)(h.VY,{ref:t,align:r,sideOffset:n,className:(0,p.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...i})});b.displayName=h.VY.displayName;var v=a(7924);let w=u.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(v.fC,{ref:t,className:(0,p.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...r})});w.displayName=v.fC.displayName;let j=u.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(v.Ee,{ref:t,className:(0,p.cn)("aspect-square h-full w-full",a),...r})});j.displayName=v.Ee.displayName;let N=u.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(v.NY,{ref:t,className:(0,p.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...r})});N.displayName=v.NY.displayName;var y=a(1747),k=function(e){let{name:t,description:a,avatar:r,avatarFallback:n,contact:i}=e,l=i.startsWith("www");return(0,s.jsxs)(x,{children:[(0,s.jsx)(g,{asChild:!0,children:(0,s.jsx)(o.z,{className:"p-0 h-fit",variant:"link",children:t})}),(0,s.jsx)(b,{className:"w-62",children:(0,s.jsxs)("div",{className:"flex justify-between space-x-4 select-none",children:[(0,s.jsxs)(w,{children:[(0,s.jsx)(j,{src:r}),(0,s.jsx)(N,{children:n})]}),(0,s.jsxs)("div",{className:"space-y-1 flex flex-col justify-start pr-2",children:[(0,s.jsx)("h4",{className:"text-sm font-semibold text-start",children:t}),(0,s.jsx)("p",{className:"text-sm",children:a}),(0,s.jsxs)("div",{className:"flex items-center pt-2",children:[(0,s.jsx)(y.Z,{className:"mr-2 h-4 w-4 opacity-70"}),(0,s.jsx)("span",{className:(0,p.cn)("text-xs text-muted-foreground",l&&"cursor-pointer hover:underline"),onClick:()=>{if(l){window.open("https://".concat(i),"_blank");return}},children:i})]})]})]})})]})},D=a(3700),C=a.n(D),S=a(7838);let z=["from-blue-500 to-purple-500","from-green-500 to-yellow-500","from-red-500 to-orange-500","from-pink-500 to-purple-500","from-green-500 to-teal-500","from-red-500 to-pink-500","from-yellow-500 to-orange-500","from-blue-500 to-indigo-500"];function G(e){let{idx:t,title:a,description:r,tags:n,link:i,avatar:l,stars:o}=e,c=z[t%z.length];return(0,s.jsx)(C(),{href:i,target:"_blank",children:(0,s.jsxs)("div",{className:(0,p.cn)("relative group flex flex-col w-full h-full","bg-background-hover hover:bg-background-active focus:bg-background-active transition-all","rounded-lg shadow-md border cursor-pointer overflow-hidden"),children:[(0,s.jsx)("div",{className:(0,p.cn)("h-8 w-full bg-gradient-to-r blur-1",c)}),(0,s.jsx)("div",{className:"bg-background-hover shadow transition-all select-none rounded-full p-1.5 absolute top-4 right-4",children:(0,s.jsx)("img",{loading:"lazy",src:"/project/".concat(l),alt:a,className:"rounded-full w-10 h-10"})}),(0,s.jsxs)("div",{className:"flex flex-col p-6 pb-4 grow",children:[(0,s.jsxs)("h3",{className:"flex flex-row items-center text-lg font-bold",children:[a,o&&(0,s.jsxs)("span",{className:"w-fit flex flex-row items-center border text-xs text-secondary ml-1.5 rounded-md px-1.5 py-0.5 whitespace-nowrap",children:[(0,s.jsx)(S.Z,{className:"w-3 h-3 mr-1.5"}),o]})]}),(0,s.jsx)("p",{className:"text-sm text-secondary mt-1.5 line-clamp-2 mb-auto",children:r}),(0,s.jsx)("div",{className:"mt-4 flex flex-wrap gap-2",children:n.map((e,t)=>(0,s.jsx)("span",{className:(0,p.cn)("text-xs bg-muted border rounded px-1.5 py-1 mr-0.5 mb-0.5 whitespace-nowrap select-none cursor-pointer hover:bg-muted-hover transition-all","group-hover:bg-muted-hover group-focus:bg-muted-hover group-active:bg-muted-hover"),children:e},t))})]})]})})}var T=function(e){let{data:t}=e;return(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 max-w-[min(80vw,860px)] mx-auto lg:px-4",children:t.map((e,t)=>(0,s.jsx)(G,{idx:t,...e},t))})};function P(){return(0,s.jsxs)("main",{className:n().className,children:[(0,s.jsxs)("div",{className:"relative w-full h-full select-none",children:[(0,s.jsx)(l(),{src:"/background.webp",alt:"background",layout:"fill",className:"top-0 left-0 w-full h-full object-cover filter brightness-90 animate-scale-down"}),(0,s.jsxs)("div",{className:"absolute flex flex-col items-center top-[40%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]",children:[(0,s.jsx)("div",{className:"w-fit h-fit",children:(0,s.jsx)(l(),{width:80,height:80,src:"/avatar.webp",alt:"avatar",className:"saturate-150 rounded-md border-4 border-[#ffffff2f]"})}),(0,s.jsx)("div",{className:"mt-8",children:(0,s.jsx)(m,{content:"Nothing is impossible.",className:"text-xl rounded-md whitespace-nowrap bg-[#ffffff1f] px-2.5 py-2 backdrop-blur-sm text-white",typingSpeed:150,keyboardSeed:2,keyboardStay:2})})]}),(0,s.jsx)("div",{className:"absolute bottom-[10%] left-[50%] transform translate-x-[-50%]",children:(0,s.jsx)(o.z,{variant:"outline",size:"icon",className:"rounded-full animate-bounce animate-2s",onClick:()=>{let e=document.getElementById("section");null==e||e.scrollIntoView({behavior:"smooth"})},"aria-label":"scroll down",children:(0,s.jsx)(c.Z,{className:"w-4 h-4"})})})]}),(0,s.jsxs)("div",{id:"section",className:"w-full h-fit bg-background pt-4 pb-6",children:[(0,s.jsx)(_,{}),(0,s.jsx)(E,{}),(0,s.jsx)(I,{})]})]})}function _(){return(0,s.jsxs)("div",{className:"inline-flex flex-col items-center justify-center w-full h-fit pt-8 pb-20",children:[(0,s.jsx)(f,{title:"About",subtitle:"关于",tags:["INTJ","CTO","全栈开发","开源爱好者"]}),(0,s.jsxs)("div",{className:"text-md mt-2 text-center max-w-[60vw] leading-8",children:["我是"," ",(0,s.jsx)(k,{name:"@zmh-program",description:"Nothing is impossible.",avatar:"/avatar.webp",avatarFallback:"ZM",contact:"LightXi CTO"}),"，全栈开发者，热爱创新，喜爱创造。",(0,s.jsx)("br",{}),"目前担任"," ",(0,s.jsx)(k,{name:"晞云",description:"珠海市晞云云科技有限公司",avatar:"/lightxi.webp",avatarFallback:"X",contact:"www.lightxi.com"})," ","CTO，致力于创新并提供优质的产品。",(0,s.jsx)("br",{}),"生于 2009 年，七年编程生涯，感慨万千。"]}),(0,s.jsxs)("div",{className:"stats mt-6 flex flex-col max-w-[80vw]",children:[(0,s.jsx)("img",{src:"https://stats.deeptrain.net/user/zmh-program",alt:"Zmh-Program's Github Stats"}),(0,s.jsx)("img",{className:"mt-2",src:"https://stats.deeptrain.net/user/Deeptrain-Community",alt:"Deeptrain's Github Stats"})]})]})}function E(){return(0,s.jsxs)("div",{className:"inline-flex flex-col items-center justify-center w-full h-fit pt-12 pb-20 bg-[#ffffff07]",children:[(0,s.jsx)(f,{title:"Projects",subtitle:"我的项目"}),(0,s.jsx)(T,{data:[{title:"Chat Nio",avatar:"chatnio.png",description:"\uD83D\uDE80 功能强大 设计精美 易于使用的 AIGC 一站式解决方案",tags:["K8s","Go","React","TypeScript","WebSocket","PWA","Tauri","AIGC"],link:"https://chatnio.com",stars:"2k+"},{title:"FyStart",avatar:"fystart.webp",description:"\uD83C\uDF4F 极目起始页, 简洁高效的开源起始页, 为您提供干净的搜索体验, 支持智能搜索建议、断网离线访问等高级功能",tags:["Go","Vue","PWA","Service Worker"],link:"https://github.com/Deeptrain-Community/fystart"},{title:"Code Statistic",avatar:"stats.webp",description:" ⚡ 动态生成你的 GitHub 统计卡片！支持 用户/组织/仓库/贡献者/PR/Issue/Release 卡片, 明暗主题切换等功能",tags:["PHP","Go","JavaScript","SVG","GitHub"],link:"https://stats.deeptrain.net"},{title:"Light Notes",avatar:"lightnotes.ico",description:"\uD83D\uDCDD 一个极简、美观、多端同步的轻量化在线便签, 支持 Markdown 语法, 支持多设备同步, 支持匿名便签",tags:["Go","Vue","Serverless"],link:"https://notes.lightxi.com"},{title:"Web ChatGPT QQ Bot",avatar:"webchatgpt.webp",description:"\uD83E\uDD16 图形化界面一键配置 ChatGPT Mirai QQ Bot，内置终端，文件上传，监控，鉴权，自定义设置，检测 Docker 容器状态等功能",tags:["Python","Vue","Mirai","Electron","Docker"],link:"https://github.com/zmh-program/web-chatgpt-qq-bot"},{title:"Lyrify",avatar:"lyrify.webp",description:"\uD83D\uDD0D 聚合翻译平台, 结合多种翻译引擎, 提供翻译结果对比等功能",tags:["Next.js","TypeScript","Tailwind CSS"],link:"https://github.com/SIPC/Lyrify"},{title:"Kylin Go",avatar:"kylingo.webp",description:"\uD83D\uDC09 一款基于 Golang 编写的跨平台的编程语言。支持国际化 AST Transformer。面相过程，脚本语言。",tags:["Go","AST","Lexer","Interpreter"],link:"https://github.com/zmh-program/kylin-go"},{title:"Vokkot",avatar:"vokkot.webp",description:"\uD83D\uDCE6 [WIP] 你的下一代文件存储分发系统, 为开发者提供简单、高效、安全的文件存储和分发服务",tags:["Rust","Next.js","S3","CDN"],link:"https://github.com/zmh-program/vokkot"}]})]})}function I(){return(0,s.jsxs)("div",{className:"footer mt-4 text-center text-sm",children:[(0,s.jsx)("div",{className:"mb-2 text-secondary",children:(0,s.jsxs)(C(),{href:"/donate",children:[(0,s.jsx)(d.Z,{className:"w-4 h-4 inline-block mr-1"}),"捐助"]})}),(0,s.jsx)("div",{className:"mb-2 text-secondary",children:(0,s.jsxs)("a",{href:"https://beian.miit.gov.cn",target:"_blank",children:[(0,s.jsx)(l(),{src:"/gov.webp",alt:"beian",width:14,height:14,className:"inline-block mr-1"}),"鲁ICP备2022034318号-1"]})}),(0,s.jsxs)("div",{children:["\xa9 2021-present"," ",(0,s.jsx)(k,{name:"@zmh-program",description:"Nothing is impossible.",avatar:"/avatar.webp",avatarFallback:"ZM",contact:"LightXi CTO"}),". All rights reserved."]})]})}}},function(e){e.O(0,[352,818,888,774,179],function(){return e(e.s=7077)}),_N_E=e.O()}]);