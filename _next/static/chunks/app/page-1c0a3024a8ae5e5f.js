(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{202:function(e,t,s){Promise.resolve().then(s.bind(s,8856))},8856:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var r=s(7437);let o="https://discord.gg/fmp7p9Ca4y",n=s(357).env.BASE_PATH||"";var a=s(6648),i=s(8956),l=s(2265);let c=Array.from({length:20},(e,t)=>({index:t,x:500*Math.random()-250,y:300*Math.random()-150,delay:2*Math.random(),duration:2+2*Math.random()})),d=e=>{let{x:t,y:s,delay:o,duration:n,isHovered:a}=e;return(0,r.jsx)(i.E.div,{className:"absolute w-2 h-2 bg-discordPurple rounded-sm",initial:"hidden",variants:{hidden:{opacity:0,x:t,y:s,duration:10,delay:o},visible:{opacity:[0,.8,0],x:0,y:0,transition:{duration:2,delay:2*Math.random(),repeat:1/0,repeatType:"loop"}},hover:{opacity:[0,1,0],x:1,y:1,transition:{duration:n,delay:2*Math.random(),repeat:1/0,repeatType:"loop"}}},animate:"visible"})},u=e=>{let{isHovered:t}=e;return window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?null:(0,r.jsx)(r.Fragment,{children:c.map(e=>{let{index:s,x:o,y:n,delay:a,duration:i}=e;return(0,r.jsx)(d,{x:o,y:n,delay:a,duration:i,isHovered:t},s)})})},h=()=>{let[e,t]=(0,l.useState)(null),[s,n]=(0,l.useState)(null);return(0,l.useEffect)(()=>{(async()=>{let e=o.split("/").pop();try{let s=await fetch("https://discord.com/api/v9/invites/".concat(e,"?with_counts=true&with_expiration=true")),r=await s.json();t(r.approximate_member_count),n(r.approximate_presence_count)}catch(e){console.error("Error fetching member count:",e)}})()},[]),(0,r.jsxs)("div",{className:"text-white text-center",title:"There are ".concat(s," members online"),children:[(0,r.jsx)("p",{children:"Join our Discord!"}),null!==e&&(0,r.jsxs)("p",{className:"text-xs text-left text-gray-300",children:[(e=>{if(e<1e3)return e;let t=Math.floor(Math.log(e)/Math.log(1e3));return(e/Math.pow(1e3,t)).toFixed(1)+"kMGTPEZY"[t-1]})(e)," members"]})]})};var m=()=>{let[e,t]=(0,l.useState)(!1);return(0,r.jsxs)("div",{className:"relative flex items-center justify-center",children:[(0,r.jsx)(u,{isHovered:e}),(0,r.jsxs)(i.E.a,{href:o,target:"_blank",className:"px-4 py-2 text-white bg-discordPurple rounded-lg z-10 shadow-lg flex items-center gap-2",whileHover:{scale:1.1},onHoverStart:()=>t(!0),onHoverEnd:()=>t(!1),children:[(0,r.jsx)(a.default,{src:"".concat(n,"/discord.svg"),alt:"Discord logo",width:48,height:40}),(0,r.jsx)(h,{})]})]})},p=s(7420),x=s(6356),g=e=>{let{title:t,description:s,eventURL:o,location:n,date:a}=e,[i,c]=(0,l.useState)(!1);return(0,r.jsx)("div",{className:"bg-csgrey font-space-mono hover:bg-csred transition duration-500 ease-in-out border-2 border-white border-b-0 pt-6 pl-8 pr-8 w-full h-full flex flex-col ",onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:i?(0,r.jsx)("p",{className:"text-white flex items-center p-2",children:s}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"text-csred mb-2",children:"Upcoming event"}),(0,r.jsx)("div",{className:"flex flex-col justify-between h-full",children:(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[(0,r.jsxs)("h1",{style:{maxHeight:"80px",overflow:"hidden",textOverflow:"ellipsis"},className:"text-2xl w-3/4",children:[t.toUpperCase()," "]}),(0,r.jsxs)("p",{className:"mb-2 pt-4",children:[a,", ",n]})]})})]})})},f=e=>{let{text:t,maxHeight:s}=e,[o,n]=(0,l.useState)(!1),a=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=a.current;e&&e.scrollHeight>s&&n(!0)},[t,s]),(0,r.jsxs)("div",{ref:a,style:{maxHeight:"".concat(s,"px"),overflow:"hidden",position:"relative",whiteSpace:"pre-line",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:o?3:"none"},children:[t,o&&(0,r.jsx)("span",{style:{position:"absolute",right:0,bottom:0}})]})},b=e=>{let{title:t,description:s,eventURL:o,location:n,date:a}=e,[i,c]=(0,l.useState)(!1);return(0,r.jsx)("div",{className:"bg-csgrey font-space-mono hover:bg-csred border-t-2 border-r-2 border-white pt-6 pl-8 pr-8 w-full h-full flex flex-col transition duration-500 ease-in-out",onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:i?(0,r.jsx)("p",{className:"text-white flex items-center p-2",children:(0,r.jsx)(f,{text:s,maxHeight:150})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"text-csred mb-2",children:"Upcoming event"}),(0,r.jsx)("div",{className:"flex flex-col justify-between h-full",children:(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[(0,r.jsx)("h1",{className:"text-2xl w-3/4",children:(0,r.jsx)(f,{text:t.toUpperCase(),maxHeight:80})}),(0,r.jsxs)("p",{className:"mb-2 pt-4",style:{maxWidth:"100px"},children:[a," ",(0,r.jsx)("br",{})," ",n]})]})})]})})},v=e=>{let{events:t}=e;return(0,r.jsxs)("div",{className:"grid grid-cols-10 grid-rows-6 gap-0 border-b-2 border-white",children:[(0,r.jsx)("div",{className:"col-span-3 row-span-2 col-start-8 row-start-1",children:(0,r.jsx)(b,{...t[0]})}),(0,r.jsx)("div",{className:"col-span-3 row-span-2 col-start-8 row-start-3",children:(0,r.jsx)(b,{...t[1]})}),(0,r.jsx)("div",{className:"col-span-3 row-span-2 col-start-8 row-start-5",children:(0,r.jsx)(b,{...t[2]})}),(0,r.jsx)("div",{className:"col-span-7 row-span-2 col-start-1 row-start-1",children:(0,r.jsx)(g,{...t[3]})}),(0,r.jsx)("div",{className:"col-span-7 row-span-4 col-start-1 row-start-3",children:(0,r.jsx)(a.default,{width:100,height:100,src:"".concat(n,"/infball.webp"),alt:"Wide CompSoc logo",className:"w-full h-full object-cover border-white border-2 border-b-0"})})]})};let j=[{title:"Infball 2024",description:"Yearly ball in mid-March for all informatics students and lorem ipsum. Soemthing else",location:"The Caves",date:"18.04.2024"},{title:"Hack the Burgh X",description:"Join us for our annual 24-hour hackathon, complete with food, sponsor merch, and many prizes up for grabs.",location:"Nucleus Building",date:"02.03.2024"},{title:"Student-Tech Meetup",description:"Engage with insightful talks from academics and industry experts, and enjoy free pizza!",location:"Informatics Forum",date:"21.11.2024"},{title:"Freshers Week 2024",description:"Join us for Freshers Week 2024, packed with exciting events, including a hike up Arthur's Seat!",location:"Main Campus",date:"12-17.09.2024"}];var w=e=>{let{title:t}=e;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"w-8 h-8 bg-red-500 mr-4"}),(0,r.jsx)("h1",{className:"font-tomorrow text-3xl text-left",children:t})]})},y=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mt-8 w-full",children:[(0,r.jsx)(w,{title:"Flagship events"}),(0,r.jsx)("div",{className:"flex items-center text-blue-500 cursor-pointer",children:(0,r.jsxs)("span",{className:"flex items-center text-white hover:text-csred hover:border-csred transition duration-200 ease-in-out text-xl font-space-mono  border-b-2",children:["ALL EVENTS ",(0,r.jsx)(x.hdK,{})]})})]}),(0,r.jsx)("div",{className:"mt-6 flex justify-center items-center",children:(0,r.jsx)(v,{events:j})})]}),N=e=>{var t;let{question:s,answer:o}=e,[n,a]=(0,l.useState)(!1),i=(0,l.useRef)(null);return(0,r.jsxs)("div",{className:"mb-4 w-full font-space-mono",children:[(0,r.jsxs)("button",{className:"w-full p-4 text-left bg-csred text-white font-space-mono-bold flex justify-between items-center",onClick:()=>a(!n),children:[(0,r.jsx)("span",{children:s}),(0,r.jsx)("span",{className:"text-2xl",children:n?(0,r.jsx)(x.Faw,{}):(0,r.jsx)(x.Yc6,{})})]}),(0,r.jsx)("div",{className:"overflow-hidden transition-all duration-500 ease-in-out",style:{maxHeight:n?"".concat(null===(t=i.current)||void 0===t?void 0:t.scrollHeight,"px"):"0"},children:(0,r.jsx)("div",{ref:i,className:"p-4 bg-cslightgrey text-white border-white border-l-2",children:o})})]})};let S=[{question:"What sort of events does CompSoc run?",answer:"CompSoc runs a variety of events throughout the year, ranging from talks by academics, technical workshops, and a yearly hackathon. We also host plenty of social events, including hikes, barbecues, board game nights, and even a yearly Informatics Ball with a ceilidh."},{question:"What’s the best way to find out what events are happening?",answer:"You can look at the full events calendar here, on our events page. Also, be sure to join our discord server to stay up to date on new events and any changes to event locations or times."},{question:"I don’t know much about Computer Science. Can I still join?",answer:"You can look at the full events calendar here, on our events page. Also, be sure to join our discord server to stay up to date on new events and any changes to event locations or times."},{question:"I’m not a University of Edinburgh student. Can I still join?",answer:"You can look at the full events calendar here, on our events page. Also, be sure to join our discord server to stay up to date on new events and any changes to event locations or times."},{question:"Do I need to get a membership on EUSA to go to events?",answer:"You can look at the full events calendar here, on our events page. Also, be sure to join our discord server to stay up to date on new events and any changes to event locations or times."}];var I=()=>(0,r.jsx)("div",{className:"w-full mx-auto",children:S.map((e,t)=>(0,r.jsx)(N,{question:e.question,answer:e.answer},t))}),C=()=>(0,r.jsxs)("div",{className:"mt-20",children:[(0,r.jsx)(w,{title:"FAQ's"}),(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsx)(I,{})})]});let k=e=>{let{sponsorsList:t,speed:s,direction:o}=e,i=t.sort(()=>Math.random()-.5).map(e=>({id:e.name,img:e.img}));return(0,r.jsx)("div",{className:"inner",children:(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)("section",{style:{"--speed":"".concat(s,"ms"),"--direction":"".concat(o)},children:i.map(e=>{let{id:t,img:s}=e;return(0,r.jsx)("div",{className:"image",children:(0,r.jsx)(a.default,{height:100,width:225,className:"bannerimg",src:"".concat(n,"/sponsors/").concat(s),alt:t})},t)})}),(0,r.jsx)("section",{style:{"--speed":"".concat(s,"ms"),"--direction":"".concat(o)},children:i.map(e=>{let{id:t,img:s}=e;return(0,r.jsx)("div",{className:"image",children:(0,r.jsx)(a.default,{height:100,width:225,className:"bannerimg",src:"".concat(n,"/sponsors/").concat(s),alt:t})},t)})}),(0,r.jsx)("section",{style:{"--speed":"".concat(s,"ms"),"--direction":"".concat(o)},children:i.map(e=>{let{id:t,img:s}=e;return(0,r.jsx)("div",{className:"image",children:(0,r.jsx)(a.default,{height:100,width:225,className:"bannerimg",src:"".concat(n,"/sponsors/").concat(s),alt:t})},t)})})]})})};s(807);let E=[{name:"Addepar",img:"addepar-logo.svg"},{name:"Bloomberg",img:"bloomberg-logo.png"},{name:"Meta",img:"meta-logo.png"},{name:"Google",img:"google-logo.png"},{name:"Jane Street",img:"janestreet-logo.png"},{name:"Marshall Wace",img:"marshallwace-logo.gif"},{name:"Optiver",img:"optiver-logo.png"}];var M=()=>{let[e,t]=(0,l.useState)(!1);return(0,r.jsxs)("div",{className:"relative inline-block w-12 h-12",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[(0,r.jsx)(a.default,{src:"".concat(n,"/heart-static.png"),alt:"Static Icon",layout:"fill",objectFit:"contain",className:"absolute top-0 left-0 transition-opacity duration-300 ".concat(e?"opacity-0":"opacity-100")}),(0,r.jsx)(a.default,{src:"".concat(n,"/heart.gif"),alt:"GIF Icon",layout:"fill",objectFit:"contain",className:"absolute top-0 left-0 transition-opacity duration-300 ".concat(e?"opacity-100":"opacity-0")})]})},G=()=>(0,r.jsxs)("div",{className:"mt-20",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("h1",{className:"font-tomorrow text-3xl text-left",children:"Partner with us"}),(0,r.jsx)("div",{className:"ml-2",children:(0,r.jsx)(M,{})})]}),(0,r.jsxs)("div",{className:"w-4/5 mt-6 font-space-mono",children:[(0,r.jsx)("p",{children:"CompSoc is always looking for new sponsors to support us in all that we do for our members. We would be happy to discuss your company's needs, just send us a message!"}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Meet our 2024 sponsors:"})]}),(0,r.jsxs)("div",{className:"mt-8",children:[(0,r.jsx)(k,{sponsorsList:E,speed:6e4,direction:"normal"}),(0,r.jsx)(k,{sponsorsList:E,speed:6e4,direction:"reverse"})]})]});let A=[{name:"Project Share",description:"A SIG for sharing projects Dolor id do mollit. Excepteur adipisicing velit consectetur veniam aliqua laboris et quis est minim sit in. Deserunt Lorem veniam veniam",websiteURL:"https://projectshare.comp-soc.com/",icon:{src:"/SIGs/projectshare.png",alt:"SIGINT logo",rounded:!1},backgroundColor:"#7816F4",borderColor:"#A971EF"},{name:"SIGINT",description:"A SIG for sharing projects Dolor id do mollit. Excepteur adipisicing velit consectetur veniam aliqua laboris et quis est minim sit in. Deserunt Lorem veniam veniam",websiteURL:"https://sigint.mx/",icon:{src:"/SIGs/sigint.webp",alt:"SIGINT logo",rounded:!1},backgroundColor:"#000000",borderColor:"#666666"},{name:"CCSIG",description:"A SIG for sharing projects",icon:{src:"/SIGs/ccsig.webp",alt:"SIGINT logo",rounded:!1},backgroundColor:"#143D59",borderColor:"#3B6D8F"},{name:"Edinburgh AI",description:"A SIG for sharing projects Dolor id do mollit. Excepteur adipisicing velit consectetur veniam aliqua laboris et quis est minim sit in. Deserunt Lorem veniam veniam",websiteURL:"https://edinburghai.org/",icon:{src:"/SIGs/edinburghai.webp",alt:"Edinburgh AI logo",rounded:!1},backgroundColor:"#CB650F",borderColor:"#E3802D"},{name:"TypeSIG",description:"A SIG for sharing projects",websiteURL:"https://typesig.comp-soc.com/",icon:{src:"/SIGs/typesig.webp",alt:"TypeSIG logo",rounded:!0},backgroundColor:"#018EE0",borderColor:"#8AC4E6"},{name:"Tardis",description:"A SIG for sharing projects",websiteURL:"https://tardisproject.uk/",icon:{src:"/SIGs/tardis.webp",alt:"SIGINT logo",rounded:!1},backgroundColor:"#295085",borderColor:"#3769A6"},{name:"QuantSIG",description:"A SIG for sharing projects",icon:{src:"/SIGs/quantsig.webp",alt:"SIGINT logo",rounded:!1},backgroundColor:"#4B3E4F",borderColor:"#807184"},{name:"GameDevSIG",description:"A SIG for sharing projects",icon:{src:"/SIGs/gamedevsig.webp",alt:"SIGINT logo",rounded:!1},backgroundColor:"#000000",borderColor:"#3CAB98"},{name:"CloudSIG",description:"Cloud Clubs are student-led, student-driven user groups focused on learning about the Cloud via AWS technologies.",websiteURL:"https://www.meetup.com/aws-cloud-club-the-university-of-edinburgh/",icon:{src:"/SIGs/cloudsig.webp",alt:"SIGINT logo",rounded:!1},backgroundColor:"#aaa",borderColor:"#eee"}].sort(()=>Math.random()-.5);var L=s(4566),T=e=>{let{sig:t}=e,[s,o]=(0,l.useState)(!1);return(0,r.jsxs)("div",{className:"p-4 bg-white rounded shadow-md hover:shadow-lg transition duration-300 border-4 w-64 h-96 hover:z-50 transform hover:scale-105",style:{backgroundColor:t.backgroundColor,borderColor:t.borderColor},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[t.websiteURL&&(0,r.jsx)("div",{className:"absolute top-8 right-8 p-2 rounded-full transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 pointer-events-none user-select-none",style:{opacity:s?1:0},children:(0,r.jsx)(L.Z,{height:32,width:32})}),(0,r.jsx)("a",{href:t.websiteURL,target:"_blank",rel:"noreferrer",children:(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[(0,r.jsx)("img",{src:t.icon.src,alt:t.icon.alt,className:"w-24 h-24 mb-12 ".concat(t.icon.rounded?"rounded-full":"rounded-lg")}),(0,r.jsx)("h2",{className:"text-xl font-bold text-white",children:t.name}),(0,r.jsx)("p",{className:" text-white",children:t.description})]})})]})},F=()=>{let e=(0,l.useRef)(null),[t,s]=(0,l.useState)(0),[o,n]=(0,l.useState)({width:0,height:0}),[a,c]=(0,l.useState)([]),[d,u]=(0,l.useState)(!1),h=()=>{c(()=>{let e=Math.ceil(A.length/t),s=A.length%t||t,r=(t-s)*262/2;return A.map((s,n)=>{let a=Math.floor(n/t);return{x:n%t*262+32*Math.random()-16+(a===e-1?r:0)+(o.width-262*t)/2,y:332*Math.floor(n/t)+32*Math.random()-16,rotate:1==t?0:8*Math.random()-4,SIG:s}})})};return(0,l.useEffect)(()=>{let t=()=>{e.current&&(s(Math.floor(e.current.clientWidth/262)||1),n({width:e.current.clientWidth,height:e.current.clientHeight}))},r=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&(setTimeout(()=>u(!0),1e3),r.disconnect())},{root:null,threshold:.01});return e.current&&r.observe(e.current),window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t),e.current&&r.unobserve(e.current)}},[]),(0,l.useEffect)(()=>{t>0&&h()},[t,A]),(0,r.jsx)("div",{className:"relative w-full my-12",ref:e,style:{height:332*Math.ceil(A.length/t)},children:a.map((e,t)=>(0,r.jsx)(i.E.div,{initial:{x:o.width/3+24*t,y:o.height/3},animate:{x:d?e.x:o.width/3+24*t,y:d?e.y:o.height/3,rotate:e.rotate},transition:{duration:.5,delay:.05*t},className:"absolute hover:z-50",children:(0,r.jsx)(T,{sig:e.SIG})},e.SIG.name))})},W=()=>{let[e,t]=(0,l.useState)(0),[s,o]=(0,l.useState)(Array(A.length).fill(null)),n=(e,s)=>{s<A.length&&(o(t=>{let r=[...t];return r[s]=e,r}),t(s+1))};return(0,r.jsxs)("div",{className:"relative w-full my-12 h-96",children:[(0,r.jsx)("div",{className:"absolute w-full h-full flex justify-center items-center",children:A.map((e,t)=>(0,r.jsx)(i.E.div,{className:"absolute",initial:{x:0,y:-5*t,scale:1-.01*t},animate:{x:"left"===s[t]?-1e3:"right"===s[t]?1e3:0,y:-5*t,scale:1-.01*t,rotate:s[t]?50*Math.random()-25:0},exit:{x:"left"===s[t]?-1e3:1e3,rotate:360},transition:{duration:.5},drag:"x",dragConstraints:{left:0,right:0},dragElastic:.9,onDragEnd:(e,s)=>{let{offset:r,velocity:o}=s,a=Math.abs(r.x)*o.x;a>800?n("right",t):a<-800&&n("left",t)},style:{zIndex:A.length-t},children:(0,r.jsx)(T,{sig:e})},t))}),e===A.length&&(0,r.jsx)("button",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-blue-500 text-white rounded",onClick:()=>{t(0),o(Array(A.length).fill(null))},children:"Reset Stack"})]})},H=()=>{let[e,t]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{let e=()=>{t(window.innerWidth<=500)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e)?(0,r.jsx)(W,{}):(0,r.jsx)(F,{})};function _(){let{toggleBackground:e}=(0,p.z)();return(0,r.jsx)("main",{className:"bg-background flex items-center justify-center min-h-screen flex-col p-24",children:(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-between items-center",children:[(0,r.jsx)(a.default,{src:"".concat(n,"/compsoc-long.png"),alt:"Wide CompSoc logo",width:512,height:126,className:"filter drop-shadow-white",style:{filter:"drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.1)) drop-shadow(0px 0px 197.8px rgba(255, 255, 255, 0.1))"}}),(0,r.jsx)(m,{}),(0,r.jsx)("button",{onClick:e,className:"px-4 py-2 text-white bg-blue-500 rounded-lg shadow-lg",children:"TEST: Toggle background"})]}),(0,r.jsx)(H,{}),(0,r.jsx)(y,{}),(0,r.jsx)(C,{}),(0,r.jsx)(G,{})]})})}},7420:function(e,t,s){"use strict";s.d(t,{B:function(){return i},z:function(){return a}});var r=s(7437),o=s(2265);let n=(0,o.createContext)(void 0),a=()=>{let e=(0,o.useContext)(n);if(!e)throw Error("useAnimatedBackground must be used within an AnimatedBackgroundProvider");return e},i=e=>{let{children:t}=e,[s,a]=(0,o.useState)(!1);return(0,r.jsx)(n.Provider,{value:{isActive:s,toggleBackground:()=>{a(!s)}},children:t})}},807:function(){}},function(e){e.O(0,[294,51,173,705,971,23,744],function(){return e(e.s=202)}),_N_E=e.O()}]);