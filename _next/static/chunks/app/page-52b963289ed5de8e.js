(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{10202:function(e,a,t){Promise.resolve().then(t.bind(t,11512))},11512:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return ei}});var n,r,s,i,o=t(57437);let l="https://discord.gg/fmp7p9Ca4y";var m=t(15807),c=t(66648),u=t(53610),d=t(2265);let h=Array.from({length:20},(e,a)=>({index:a,x:500*Math.random()-250,y:300*Math.random()-150,delay:2*Math.random(),duration:2+2*Math.random()})),g=e=>{let{x:a,y:t,delay:n,duration:r,isHovered:s}=e;return(0,o.jsx)(u.E.div,{className:"absolute w-2 h-2 bg-discordPurple rounded-sm",initial:"hidden",variants:{hidden:{opacity:0,x:a,y:t,duration:10,delay:n},visible:{opacity:[0,.8,0],x:0,y:0,transition:{duration:2,delay:2*Math.random(),repeat:1/0,repeatType:"loop"}},hover:{opacity:[0,1,0],x:1,y:1,transition:{duration:r,delay:2*Math.random(),repeat:1/0,repeatType:"loop"}}},animate:"visible"})},p=e=>{let{isHovered:a}=e;return window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?null:(0,o.jsx)(o.Fragment,{children:h.map(e=>{let{index:t,x:n,y:r,delay:s,duration:i}=e;return(0,o.jsx)(g,{x:n,y:r,delay:s,duration:i,isHovered:a},t)})})},E=()=>{let[e,a]=(0,d.useState)(null),[t,n]=(0,d.useState)(null);return(0,d.useEffect)(()=>{(async()=>{let e=l.split("/").pop();try{let t=await fetch("https://discord.com/api/v9/invites/".concat(e,"?with_counts=true&with_expiration=true")),r=await t.json();a(r.approximate_member_count),n(r.approximate_presence_count)}catch(e){console.error("Error fetching member count:",e)}})()},[]),(0,o.jsxs)("div",{className:"text-white text-center",title:"There are ".concat(t," members online"),children:[(0,o.jsx)("p",{children:"Join our Discord!"}),null!==e&&(0,o.jsxs)("p",{className:"text-xs text-left text-gray-300",children:[(e=>{if(e<1e3)return e;let a=Math.floor(Math.log(e)/Math.log(1e3));return(e/Math.pow(1e3,a)).toFixed(1)+"kMGTPEZY"[a-1]})(e)," members"]})]})};var R=()=>{let[e,a]=(0,d.useState)(!1);return(0,o.jsxs)("div",{className:"relative flex items-center justify-center",children:[(0,o.jsx)(p,{isHovered:e}),(0,o.jsxs)(u.E.a,{href:l,target:"_blank",className:"px-4 py-2 text-white bg-discordPurple rounded-lg z-10 shadow-lg flex items-center gap-2",whileHover:{scale:1.1},onHoverStart:()=>a(!0),onHoverEnd:()=>a(!1),children:[(0,o.jsx)(c.default,{src:"".concat(m.O,"/discord.svg"),alt:"Discord logo",width:48,height:40}),(0,o.jsx)(E,{})]})]})},x=t(16356),w=e=>{let{title:a,description:t,eventURL:n,location:r,date:s,upcoming:i}=e,l=(0,d.useRef)(null),[m,c]=(0,d.useState)(0),[u,h]=(0,d.useState)(!1),[g,p]=(0,d.useState)(!1),[E,R]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{let e=()=>{l.current&&c(l.current.offsetHeight)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[g]),(0,d.useEffect)(()=>{let e=()=>{R(window.matchMedia("(max-width: 1023px)").matches)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,o.jsx)("div",{className:"".concat(u?"bg-csred":"bg-csgrey","  font-space-mono transition duration-500 ease-in-out border-2 border-white border-b-0 pt-6 pl-8 pr-8 w-full h-full flex flex-col lg:hover:bg-csred"),onMouseEnter:()=>{E||p(!0)},onMouseLeave:()=>{E||p(!1)},onClick:()=>{E&&(h(!u),console.log(m),p(!g))},style:{marginTop:"0px"},children:g?(0,o.jsx)("p",{className:"text-white flex pl-2 pr-2",style:{height:"".concat(m,"px")},children:t}):(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{ref:l,children:[(0,o.jsx)("h1",{className:"text-csred mb-2",children:i?"Upcoming event":"Past event"}),(0,o.jsx)("div",{className:"flex flex-col justify-between h-full",children:(0,o.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[(0,o.jsxs)("h1",{style:{maxHeight:"80px",overflow:"hidden",textOverflow:"ellipsis"},className:"text-2xl w-3/4",children:[a.toUpperCase()," "]}),(0,o.jsxs)("p",{className:"mb-2 pt-4",children:[s,", ",r]})]})})]})})})},S=e=>{let{title:a,description:t,eventURL:n,location:r,date:s,upcoming:i}=e,[l,m]=(0,d.useState)(!1),c=(0,d.useRef)(null),[u,h]=(0,d.useState)(0);return(0,d.useEffect)(()=>{c.current&&h(c.current.offsetHeight)},[l]),(0,o.jsx)("div",{className:"bg-csgrey font-space-mono hover:bg-csred border-t-2 border-r-2 border-white pt-6 pl-8 pr-8 w-full h-full flex flex-col transition duration-500 ease-in-out",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},children:l?(0,o.jsx)("p",{className:"text-white flex pl-2 pr-2",style:{height:"".concat(u,"px")},children:t}):(0,o.jsxs)("div",{ref:c,children:[(0,o.jsx)("h1",{className:"text-csred mb-2",children:i?"Upcoming event":"Past event"}),(0,o.jsxs)("div",{className:"flex flex-col justify-between",style:{minHeight:"200px"},children:[(0,o.jsx)("div",{children:(0,o.jsx)("h1",{className:"text-2xl w-3/4",children:a.toUpperCase()})}),(0,o.jsx)("div",{className:"mt-auto",children:(0,o.jsxs)("p",{className:"mb-2 pt-4",style:{maxWidth:"150px"},children:[s," ",(0,o.jsx)("br",{})," ",r]})})]})]})})},f=e=>{let{events:a}=e;return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"hidden lg:grid lg:grid-cols-10 lg:grid-rows-6 lg:gap-0 lg:border-b-2 lg:border-white",children:[(0,o.jsx)("div",{className:"col-span-3 row-span-2 col-start-8 row-start-1",children:(0,o.jsx)(S,{...a[1]})}),(0,o.jsx)("div",{className:"col-span-3 row-span-2 col-start-8 row-start-3",children:(0,o.jsx)(S,{...a[2]})}),(0,o.jsx)("div",{className:"col-span-3 row-span-2 col-start-8 row-start-5",children:(0,o.jsx)(S,{...a[3]})}),(0,o.jsx)("div",{className:"col-span-7 row-span-2 col-start-1 row-start-1",children:(0,o.jsx)(w,{...a[0]})}),(0,o.jsx)("div",{className:"col-span-7 row-span-4 col-start-1 row-start-3",children:(0,o.jsx)(c.default,{width:100,height:100,src:"".concat(m.O,"/infball.webp"),alt:"Wide CompSoc logo",className:"w-full h-full object-cover border-white border-2 border-b-0"})})]}),(0,o.jsxs)("div",{className:"lg:hidden flex flex-col space-y-4 mt-0 border-white border-b-2",children:[(0,o.jsx)(w,{...a[0]}),(0,o.jsx)(c.default,{width:100,height:100,src:"".concat(m.O,"/infball.webp"),alt:"Wide CompSoc logo",className:"w-full h-full object-cover border-white border-2 border-b-0",style:{marginTop:"0px"}}),(0,o.jsx)(w,{...a[1]}),(0,o.jsx)(w,{...a[2]}),(0,o.jsx)(w,{...a[3]})]})]})};let j=[{name:"Infball",description:"Yearly ball in spring for all informatics students, complete with a three-course meal and a ceilidh."},{name:"Hack the Burgh",description:"Join us for our annual 24-hour hackathon, complete with food, sponsor merch, and many prizes up for grabs."},{name:"Student Tech Meetup",description:"Engage with insightful talks from academics and industry experts, and enjoy free pizza!"}];async function y(){let e=new Date,a=new Date(e.getFullYear()-1,e.getMonth(),e.getDate()),t=new Date(e.getFullYear(),e.getMonth()+6,e.getDate()),n=new URLSearchParams({key:"AIzaSyAnUQX9d7j3_d5wlJF_PvM02eHOMFbDedw",timeMin:a.toISOString(),timeMax:t.toISOString(),singleEvents:"true",maxResults:"9999"});try{let e=await fetch("".concat("https://www.googleapis.com/calendar/v3/calendars/c_d9ed90437b85f9f70111ed1576450106ba39ca8e46e94051bf53c9aa2c8a3735@group.calendar.google.com/events","?").concat(n.toString()));if(!e.ok)throw Error("Error: ".concat(e.status," ").concat(e.statusText));let a=(await e.json()).items,t=new Date,r=new Date(t);r.setMonth(t.getMonth()+2);let s=e=>e.start.dateTime?new Date(e.start.dateTime):e.start.date?new Date(e.start.date):null,i=a.filter(e=>{let a=s(e);return null!==a&&a>t&&a<=r}),o=a.filter(e=>{let a=s(e);return null!==a&&a<=t});if(0===i.length){let e=a.filter(e=>{let a=s(e);return null!==a&&a>t}).sort((e,a)=>{var t,n;return((null===(t=s(e))||void 0===t?void 0:t.getTime())||0)-((null===(n=s(a))||void 0===n?void 0:n.getTime())||0)})[0];e&&(i=[e])}let l=new Set,m=i.filter(e=>{if(e.summary.includes("STMU")){if(l.has("STMU"))return!1;l.add("STMU")}return!0}),c=o.filter(e=>{if(e.summary.includes("STMU")){if(l.has("STMU"))return!1;l.add("STMU")}return!0});if(m.sort((e,a)=>{var t,n;return((null===(t=s(e))||void 0===t?void 0:t.getTime())||0)-((null===(n=s(a))||void 0===n?void 0:n.getTime())||0)}),c.sort((e,a)=>{var t,n;return((null===(t=s(a))||void 0===t?void 0:t.getTime())||0)-((null===(n=s(e))||void 0===n?void 0:n.getTime())||0)}),m.length>=2)return[...m.slice(0,2),...c.slice(0,2)];if(1===m.length)return[...m,...c.slice(0,3)];return c.slice(0,4)}catch(e){throw console.error("Failed to fetch items:",e),e}}let I=e=>{for(let a of j)if(e.toLowerCase().includes(a.name.toLowerCase()))return a.description;return null},v=e=>{let a=new Date(e),t=String(a.getDate()).padStart(2,"0"),n=String(a.getMonth()+1).padStart(2,"0"),r=a.getFullYear();return"".concat(t,".").concat(n,".").concat(r)},N=(e,a)=>{let t=new Date(e),n=new Date(a),r=String(t.getDate()).padStart(2,"0"),s=String(n.getDate()).padStart(2,"0"),i=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear();return"".concat(r,"-").concat(s,".").concat(i,".").concat(o)},T=()=>{let[e,a]=(0,d.useState)([]),[t,n]=(0,d.useState)(!0),[r,s]=(0,d.useState)(null);return(0,d.useEffect)(()=>{(async()=>{try{let e=(await y()).map(e=>{let a=e.summary;if(a.includes("STMU"))a="Student Tech Meetup";else if(a.toLowerCase().includes("infball")){let t=new Date(e.start.dateTime||e.start.date).getFullYear();a="Infball ".concat(t)}let t=I(a)||e.description,n=e.location?e.location.split(",")[0].trim():" ";return{title:a,description:t||"More details to be announced soon!",eventURL:e.htmlLink,location:n,date:e.start.dateTime?v(e.start.dateTime):N(e.start.date,e.end.date),upcoming:new Date(e.start.dateTime||e.end.date)>new Date}});a(e),n(!1)}catch(e){s("Failed to fetch events"),n(!1)}})()},[]),{events:e,loading:t,error:r}};var b=e=>{let{title:a,customIcon:t}=e;return(0,o.jsxs)("div",{className:"flex items-center gap-4",children:[t||(0,o.jsx)("div",{className:"w-8 h-8 bg-red-500"}),(0,o.jsx)("h1",{className:"font-tomorrow text-3xl text-left",children:a})]})},k=()=>{let{events:e,loading:a,error:t}=T();return a?(0,o.jsx)("div",{children:"Loading events..."}):t?(0,o.jsx)("div",{children:t}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between mt-8 w-full",children:[(0,o.jsx)(b,{title:"Flagship events"}),(0,o.jsx)("div",{className:"flex items-center text-blue-500 cursor-pointer mt-4 lg:mt-0 lg:ml-auto",children:(0,o.jsxs)("span",{className:"flex items-center text-white hover:text-csred hover:border-csred transition duration-200 ease-in-out text-xl font-space-mono border-b-2",children:["ALL EVENTS ",(0,o.jsx)(x.hdK,{})]})})]}),(0,o.jsx)("div",{className:"mt-6 flex justify-center items-center",children:(0,o.jsx)(f,{events:e})})]})},C=e=>{var a;let{question:t,answer:n}=e,[r,s]=(0,d.useState)(!1),i=(0,d.useRef)(null);return(0,o.jsxs)("div",{className:"mb-4 w-full font-space-mono",children:[(0,o.jsxs)("button",{className:"w-full p-4 text-left bg-csred text-white font-space-mono-bold flex justify-between items-center",onClick:()=>s(!r),children:[(0,o.jsx)("span",{children:t}),(0,o.jsx)("span",{className:"text-2xl",children:r?(0,o.jsx)(x.Faw,{}):(0,o.jsx)(x.Yc6,{})})]}),(0,o.jsx)("div",{className:"overflow-hidden transition-all duration-500 ease-in-out",style:{maxHeight:r?"".concat(null===(a=i.current)||void 0===a?void 0:a.scrollHeight,"px"):"0"},children:(0,o.jsx)("div",{ref:i,className:"p-4 bg-cslightgrey text-white border-white border-l-2",children:n})})]})};let A=[{question:"What sort of events does CompSoc run?",answer:"CompSoc runs a variety of events throughout the year, ranging from talks by academics, technical workshops, and a yearly hackathon. We also host plenty of social events, including hikes, barbecues, board game nights, and even a yearly Informatics Ball with a ceilidh."},{question:"What’s the best way to find out what events are happening?",answer:"You can look at the full events calendar here, on our events page. Also, be sure to join our discord server to stay up to date on new events and any changes to event locations or times."},{question:"I don’t know much about Computer Science. Can I still join?",answer:"You can look at the full events calendar here, on our events page. Also, be sure to join our discord server to stay up to date on new events and any changes to event locations or times."},{question:"I’m not a University of Edinburgh student. Can I still join?",answer:"You can look at the full events calendar here, on our events page. Also, be sure to join our discord server to stay up to date on new events and any changes to event locations or times."},{question:"Do I need to get a membership on EUSA to go to events?",answer:"You can look at the full events calendar here, on our events page. Also, be sure to join our discord server to stay up to date on new events and any changes to event locations or times."}];var _=()=>(0,o.jsx)("div",{className:"w-full mx-auto",children:A.map((e,a)=>(0,o.jsx)(C,{question:e.question,answer:e.answer},a))}),D=()=>(0,o.jsxs)("div",{className:"mt-20",children:[(0,o.jsx)(b,{title:"FAQ's"}),(0,o.jsx)("div",{className:"mt-8",children:(0,o.jsx)(_,{})})]});let P=e=>{let{sponsorsList:a,speed:t,direction:n}=e,r=a.sort(()=>Math.random()-.5).map(e=>({id:e.name,img:e.img}));return(0,o.jsx)("div",{className:"inner",children:(0,o.jsxs)("div",{className:"wrapper",children:[(0,o.jsx)("section",{style:{"--speed":"".concat(t,"ms"),"--direction":"".concat(n)},children:r.map(e=>{let{id:a,img:t}=e;return(0,o.jsx)("div",{className:"image",children:(0,o.jsx)(c.default,{height:100,width:225,className:"bannerimg",src:"".concat(m.O,"/sponsors/").concat(t),alt:a})},a)})}),(0,o.jsx)("section",{style:{"--speed":"".concat(t,"ms"),"--direction":"".concat(n)},children:r.map(e=>{let{id:a,img:t}=e;return(0,o.jsx)("div",{className:"image",children:(0,o.jsx)(c.default,{height:100,width:225,className:"bannerimg",src:"".concat(m.O,"/sponsors/").concat(t),alt:a})},a)})}),(0,o.jsx)("section",{style:{"--speed":"".concat(t,"ms"),"--direction":"".concat(n)},children:r.map(e=>{let{id:a,img:t}=e;return(0,o.jsx)("div",{className:"image",children:(0,o.jsx)(c.default,{height:100,width:225,className:"bannerimg",src:"".concat(m.O,"/sponsors/").concat(t),alt:a})},a)})})]})})};t(50807);let L=[{name:"Addepar",img:"addepar-logo.svg"},{name:"Bloomberg",img:"bloomberg-logo.png"},{name:"Meta",img:"meta-logo.png"},{name:"Google",img:"google-logo.png"},{name:"Jane Street",img:"janestreet-logo.png"},{name:"Marshall Wace",img:"marshallwace-logo.gif"},{name:"Optiver",img:"optiver-logo.png"}];var Y=()=>{let[e,a]=(0,d.useState)(!1);return(0,o.jsxs)("div",{className:"relative inline-block w-10 h-10",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[(0,o.jsx)(c.default,{src:"".concat(m.O,"/heart-static.png"),alt:"Static Icon",layout:"fill",objectFit:"contain",className:"absolute top-0 left-0 transition-opacity duration-300 ".concat(e?"opacity-0":"opacity-100")}),(0,o.jsx)(c.default,{src:"".concat(m.O,"/heart.gif"),alt:"GIF Icon",layout:"fill",objectFit:"contain",className:"absolute top-0 left-0 transition-opacity duration-300 ".concat(e?"opacity-100":"opacity-0")})]})},M=()=>{let[e,a]=(0,d.useState)(6e4);return(0,d.useEffect)(()=>{a(window.innerWidth<=768?3e4:6e4)},[]),(0,o.jsxs)("div",{className:"mt-20",children:[(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)(b,{customIcon:(0,o.jsx)(Y,{}),title:"Partner with us"})}),(0,o.jsxs)("div",{className:"w-full lg:w-4/5 mt-6 font-space-mono",children:[(0,o.jsx)("p",{children:"CompSoc is always looking for new sponsors to support us in all that we do for our members. We would be happy to discuss your company's needs, just send us a message!"}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:"Meet our 2024 sponsors:"})]}),(0,o.jsxs)("div",{className:"mt-8",children:[(0,o.jsx)(P,{sponsorsList:L,speed:e,direction:"normal"}),(0,o.jsx)(P,{sponsorsList:L,speed:e,direction:"reverse"})]})]})},O=t(91997),H=t(72166),G=e=>{let{sig:a}=e,[t,n]=(0,d.useState)(!1);return(0,o.jsxs)("div",{className:"font-tomorrow p-4 bg-white rounded shadow-md hover:shadow-lg transition duration-300 border-4 w-60 h-80 hover:z-50 transform hover:scale-105",style:{backgroundColor:a.backgroundColor,borderColor:a.borderColor},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[a.websiteURL&&(0,o.jsx)("div",{className:"absolute top-8 right-8 p-2 rounded-full transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 pointer-events-none user-select-none",style:{opacity:t?1:0},children:(0,o.jsx)(H.default,{height:32,width:32})}),(0,o.jsx)("a",{href:a.websiteURL,target:"_blank",rel:"noreferrer",children:(0,o.jsxs)("div",{className:"flex flex-col h-full",children:[(0,o.jsx)(c.default,{width:100,height:100,src:"".concat(m.O,"/SIGs/").concat(a.icon.src),alt:a.icon.alt,className:"w-24 h-24 mb-12 ".concat(a.icon.rounded?"rounded-full":"rounded-lg")}),(0,o.jsx)("h2",{className:"text-xl font-bold text-white",children:a.name}),(0,o.jsx)("p",{className:" text-white text-sm",children:a.description})]})})]})},F=()=>{let e=(0,d.useRef)(null),[a,t]=(0,d.useState)(0),[n,r]=(0,d.useState)({width:0,height:0}),[s,i]=(0,d.useState)([]),[l,m]=(0,d.useState)(!1),c=()=>{i(()=>{let e=Math.ceil(O.k.length/a),t=O.k.length%a||a,r=(a-t)*182/2;return O.k.map((t,s)=>{let i=Math.floor(s/a);return{x:s%a*182+32*Math.random()-16+(i===e-1?r:0)+(n.width-182*a)/2,y:232*Math.floor(s/a)+32*Math.random()-16-50,rotate:1==a?0:8*Math.random()-4,SIG:t}})})};return(0,d.useEffect)(()=>{let a=()=>{e.current&&(t(Math.floor(e.current.clientWidth/182)||1),r({width:e.current.clientWidth,height:e.current.clientHeight}))},n=new IntersectionObserver(e=>{let[a]=e;a.isIntersecting&&(setTimeout(()=>m(!0),1e3),n.disconnect())},{root:null,threshold:.01});return e.current&&n.observe(e.current),window.addEventListener("resize",a),a(),()=>{window.removeEventListener("resize",a),e.current&&n.unobserve(e.current)}},[]),(0,d.useEffect)(()=>{a>0&&c()},[a,O.k]),(0,o.jsx)("div",{className:"relative w-full my-24",ref:e,style:{height:232*Math.ceil(O.k.length/a)},children:s.map((e,a)=>(0,o.jsx)(u.E.div,{initial:{x:n.width/3+24*a,y:n.height/3},animate:{x:l?e.x:n.width/3+24*a,y:l?e.y:n.height/3,rotate:e.rotate},transition:{duration:.5,delay:.05*a},className:"absolute hover:z-50",children:(0,o.jsx)(G,{sig:e.SIG})},e.SIG.name))})},W=t(95127),U=t(24670),B=()=>{let[e,a]=(0,d.useState)(0),[t,n]=(0,d.useState)(Array(O.k.length).fill(null)),r=(e,t)=>{t<O.k.length&&(n(a=>{let n=[...a];return n[t]=e,n}),a(t+1))};return(0,o.jsx)("div",{className:"relative w-full my-12 h-96",children:(0,o.jsxs)("div",{className:"absolute w-full h-full flex justify-center items-center",children:[O.k.map((e,a)=>(0,o.jsx)(u.E.div,{className:"absolute",initial:{x:0,y:-5*a,scale:1-.01*a},animate:{x:"left"===t[a]?-1e3:"right"===t[a]?1e3:0,y:-5*a,scale:1-.01*a,rotate:t[a]?50*Math.random()-25:0},exit:{x:"left"===t[a]?-1e3:1e3,rotate:360},transition:{duration:.5},drag:"x",dragConstraints:{left:0,right:0},dragElastic:.9,onDragEnd:(e,t)=>{let{offset:n,velocity:s}=t,i=Math.abs(n.x)*s.x;i>800?r("right",a):i<-800&&r("left",a)},style:{zIndex:O.k.length-a},children:(0,o.jsx)(G,{sig:e})},a)),(0,o.jsx)(W.M,{children:e===O.k.length&&(0,o.jsxs)(u.E.div,{className:"m-6 p-4 rounded-sm shadow-md flex flex-col items-center space-y-4 bg-foreground z-10 font-space-mono",initial:{opacity:0,y:5,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:5,scale:.9},transition:{duration:.3},children:[(0,o.jsx)("h1",{className:"font-tomorrow text-xl",children:"Found your match?"}),(0,o.jsx)("p",{children:"Join any of those SIG's events and try it out!"}),(0,o.jsx)("p",{children:"If not, consider creating your own SIG"}),(0,o.jsxs)("button",{className:"p-4 rounded-lg shadow-md flex items-center space-x-2 gap-2 bg-csgrey text-white",onClick:()=>{a(0),n(Array(O.k.length).fill(null))},children:[(0,o.jsx)(U.default,{}),"Reset Stack"]})]})})]})})},K=()=>{let[e,a]=(0,d.useState)(!1);return((0,d.useEffect)(()=>{let e=()=>{a(window.innerWidth<=500)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e)?(0,o.jsx)(B,{}):(0,o.jsx)(F,{})},z=()=>(0,o.jsxs)("div",{className:"mt-40",children:[(0,o.jsx)(b,{title:"Meet our SIGs"}),(0,o.jsx)("div",{className:"w-full lg:w-4/5 mt-6 font-space-mono",children:(0,o.jsx)("p",{children:"Within CompSoc we have several mini-societies known as Special Interest Groups, each focusing on different topics in Computer Science."})}),(0,o.jsx)(K,{})]});let V=(0,o.jsx)(o.Fragment,{children:"Welcome! CompSoc is a society for tech enthusiasts of all levels! Whether you're just starting out or a seasoned coder, you'll find your place here. Our Special Interest Groups (SIGs) offer you the opportunity to dive deep into specific areas of Computer Science and expand your knowledge. Best of all, CompSoc is completely free to join, as are most of our events. Come and be a part of our vibrant community!"});(n=s||(s={})).PRESIDENT="President",n.VICE_PRESIDENT="Vice President",n.SIG_PRESIDENT="SIG President",n.TREASURER="Treasurer",n.SECRETARY="Secretary",n.HACKATHON_SECRETARY="Hackathon Secretary",n.TECHNICAL_SECRETARY="Technical Secretary",n.SOCIAL_SECRETARY="Social Secretary",n.SOCIAL_MEDIA_OFFICER="Social Media Officer",n.GRAPHIC_DESIGNER="Graphic Designer",n.FIRST_YEAR_REP="1st Year Rep",n.SECOND_YEAR_REP="2nd Year Rep",n.THIRD_YEAR_REP="3rd Year Rep",n.FOURTH_YEAR_REP="4th Year Rep",n.OLD_PERSON_REP="Old Person Rep",n.EDI_REP="EDI Rep",(r=i||(i={})).INSTAGRAM="Instagram",r.TWITTER="Twitter",r.GITHUB="GitHub",r.EMAIL="Email",r.WEBSITE="Website",r.LINKEDIN="LinkedIn";let J=[{name:"Vincentas",surname:"Danys",role:s.PRESIDENT,image:"vincentas-1.jpg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/vincent-danys/"}]},{name:"Marton",surname:"Nemeth",role:s.VICE_PRESIDENT,image:"marton-1.jpeg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/marton-csanad-nemeth-165a0822a/"}]},{name:"Elisa",surname:"Fraticelli",role:s.TREASURER,image:"elisa.jpg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/elisa-fraticelli-379626169/"}]},{name:"Godfrey",surname:"Antomarlin",role:s.SECRETARY,image:"godfrey-1.jpeg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/abhijit-godfrey-antomarlin/"}]},{name:"Cat",surname:"M",role:s.TECHNICAL_SECRETARY,image:"cat-1.png",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/caterina-m/"}]},{name:"Anastasia",surname:"Trainor",role:s.SOCIAL_SECRETARY,image:"anastasia-1.png"},{name:"Agam",surname:"Cohen",role:s.SOCIAL_MEDIA_OFFICER,image:"agam-1.png",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/agam-cohen-144427273/"}]},{name:"Lewis",surname:"Simpson",role:s.GRAPHIC_DESIGNER,image:"lewis-1.jpg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/lewis-simpson-05a983302/"}]},{name:"Lucas",surname:"Bruckbauer",role:s.SECOND_YEAR_REP,image:"lucas-1.png",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/lucasbruckbauer/"}]},{name:"Fergus",surname:"White",role:s.THIRD_YEAR_REP,image:"fergus-1.png",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/fergus-white-699546214/"}]},{name:"Tomas",surname:"Maillo",role:s.FOURTH_YEAR_REP,image:"tomas-1.png",links:[{type:i.WEBSITE,url:"https://tomasmaillo.com/"},{type:i.LINKEDIN,url:"https://www.linkedin.com/in/tomas-maillo/"},{type:i.GITHUB,url:"https://github.com/tomasmaillo"},{type:i.TWITTER,url:"https://x.com/tomascodes"}]},{name:"Chris",surname:"Grykiel",role:s.OLD_PERSON_REP},{name:"Charlotte",surname:"Ausel",role:s.EDI_REP,image:"charlotte-1.jpg"}],q=[{name:"Fergus",surname:"White",role:s.PRESIDENT,image:"fergus-1.png",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/fergus-white-699546214/"}]},{name:"Ali",surname:"Abdelaal",role:s.VICE_PRESIDENT,image:"ali-1.png"},{name:"Elisa",surname:"Fraticelli",role:s.TREASURER,image:"elisa.jpg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/elisa-fraticelli-379626169/"}]},{name:"Maya",surname:"Copeland",role:s.SECRETARY,image:"maya-1.png",links:[{type:i.WEBSITE,url:"https://maya.cx"}]},{name:"Adam",surname:"Calvert",role:s.TECHNICAL_SECRETARY,image:"adam-1.png",links:[{type:i.WEBSITE,url:"https://acal17.github.io/"}]},{name:"Charlotte",surname:"Ausel",role:s.SOCIAL_SECRETARY,image:"charlotte-1.jpg"},{name:"Yuto",surname:"Takano",role:s.GRAPHIC_DESIGNER,image:"yuto-1.jpg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/yuto-takano/"}]},{name:"Vincentas",surname:"Danys",role:s.FIRST_YEAR_REP,image:"vincentas-1.jpg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/vincentas-danys-9a28b921b/"}]},{name:"Arin",surname:"Mukhopadhyay",role:s.SECOND_YEAR_REP,image:"arin-1.jpg"},{name:"Tomas",surname:"Maillo",role:s.THIRD_YEAR_REP,image:"tomas-1.png",links:[{type:i.WEBSITE,url:"https://tomasmaillo.com/"}]},{name:"Krzysztof",surname:"Grykiel",role:s.FOURTH_YEAR_REP,image:""},{name:"Jinxuan",surname:"Cui",role:s.OLD_PERSON_REP,image:"jinxuan.jpg",links:[{type:i.WEBSITE,url:"https://www.cjxol.com/"}]}],Q=[{name:"Benjamin",surname:"McConville",role:s.PRESIDENT,links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/benjamin-mcconville-3a1198227"}]},{name:"Krzysztof",surname:"Grykiel",role:s.VICE_PRESIDENT},{name:"Sophie",surname:"Bata-Madden",role:s.TREASURER,image:"sophie-1.png"},{name:"Maya",surname:"Copeland",role:s.SECRETARY,image:"maya-1.png",links:[{type:i.WEBSITE,url:"https://maya.cx"}]},{name:"Jacob",surname:"Walters",role:s.TECHNICAL_SECRETARY,image:"greg-1.png",links:[{type:i.WEBSITE,url:"https://jacobwalte.rs"}]},{name:"Amy",surname:"Yin",role:s.SOCIAL_SECRETARY,image:"amy-1.jpg"},{name:"Margo",surname:"Tsugorka",role:s.GRAPHIC_DESIGNER,image:"margo-1.jpg"},{name:"Fergus",surname:"White",role:s.FIRST_YEAR_REP},{name:"Charlotte",surname:"Ausel",role:s.SECOND_YEAR_REP,image:"charlotte-1.jpg"},{name:"Enes",surname:"Aydogan",role:s.THIRD_YEAR_REP},{name:"Dee",surname:"Yeum",role:s.FOURTH_YEAR_REP},{name:"Siang Jun",surname:"Teo",role:s.OLD_PERSON_REP}],X=[{name:"Artemis",surname:"Livingstone",role:s.PRESIDENT,image:"artemis-1.jpeg",links:[{type:i.GITHUB,url:"https://github.com/social-anthrax"}]},{name:"Aria",surname:"Shrimpton",role:s.VICE_PRESIDENT,image:"aria-1.png",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/oscar-shrimpton-07b62a1a5"}]},{name:"Karthik",surname:"Narayanan",role:s.TREASURER,image:"karthik-1.jpeg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/karthik-narayanan-6ab503202"}]},{name:"Alexandra",surname:"Purcarea",role:s.SECRETARY,image:"alexandra-1.JPEG",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/alexandra-purcarea/"}]},{name:"Yuto",surname:"Takano",role:s.TECHNICAL_SECRETARY,image:"yuto-1.jpg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/yuto-takano/"}]},{name:"Paula",surname:"Sparrow",role:s.SOCIAL_SECRETARY,links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/paula-sparrow-mu%C3%B1oz-270488204"}]},{name:"Callum",surname:"Leask",role:s.GRAPHIC_DESIGNER},{name:"Benjamin",surname:"McConville",role:s.FIRST_YEAR_REP,links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/benjamin-mcconville-3a1198227"}]},{name:"Ashley",surname:"Roberts",role:s.THIRD_YEAR_REP,links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/ashley-roberts-57b028213"}]},{name:"Mikey",surname:"Andrejczuk",role:s.FOURTH_YEAR_REP,links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/michael-andrejczuk/"}]},{name:"Rokas",surname:"Gudavičius",role:s.OLD_PERSON_REP,image:"rokas-1.jpg",links:[{type:i.WEBSITE,url:"https://roxerg.github.io"}]}],Z=[{name:"Alexandra",surname:"Purcarea",role:s.PRESIDENT,image:"alexandra-1.JPEG",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/alexandra-purcarea/"}]},{name:"Tudor",surname:"Finaru",role:s.VICE_PRESIDENT,image:"tudor-1.jpg",links:[{type:i.LINKEDIN,url:"https://www.linkedin.com/in/tudor-finaru-b1239a194/"}]},{name:"Anabel",surname:"Yong",role:s.TREASURER},{name:"Ananya",surname:"Majumdar",role:s.SECRETARY,image:"ananya-1.jpg"},{name:"Samuel",surname:"Macleod",role:s.TECHNICAL_SECRETARY,image:"samuel-1.jpg"},{name:"Daniel",surname:"Kirkman",role:s.SOCIAL_SECRETARY,image:"daniel-1.jpg",links:[{type:i.WEBSITE,url:"https://djkirkman.github.io"}]},{name:"Ryan",surname:"Schuller",role:s.GRAPHIC_DESIGNER,image:"ryan-1.jpg",links:[{type:i.WEBSITE,url:"https://ryanschuller.com"}]},{name:"Artemis",surname:"Livingstone",role:s.FIRST_YEAR_REP},{name:"Advaith",surname:"Sai",role:s.SECOND_YEAR_REP},{name:"Elspeth",surname:"Smith",role:s.THIRD_YEAR_REP,image:"elspeth-1.jpg"},{name:"Rokas",surname:"Gudavičius",role:s.FOURTH_YEAR_REP,image:"rokas-1.jpg",links:[{type:i.WEBSITE,url:"https://roxerg.github.io"}]}],$=[{name:"Kyle",surname:"Cotton",role:s.PRESIDENT,image:"kyle-2.jpg",links:[{type:i.WEBSITE,url:"https://kylecotton.github.io"}]},{name:"Dee",surname:"Yeum",role:s.VICE_PRESIDENT,image:"dee-1.jpg",links:[{type:i.WEBSITE,url:"https://chefyeum.com"}]},{name:"Elspeth",surname:"Smith",role:s.TREASURER,image:"elspeth-1.jpg"},{name:"Lars Thalian",surname:"Morstad",role:s.SECRETARY,image:"lars-1.jpg"},{name:"Patrick",surname:"Kage",role:s.TECHNICAL_SECRETARY,image:"patrick-1.jpg",links:[{type:i.WEBSITE,url:"https://kage.dev"}]},{name:"Lorenzo",surname:"Baldini",role:s.SOCIAL_SECRETARY,image:"lorenzo-1.jpg"},{name:"Ryan",surname:"Schuller",role:s.GRAPHIC_DESIGNER,image:"ryan-1.jpg",links:[{type:i.WEBSITE,url:"https://ryanschuller.com"}]},{name:"Yannik",surname:"Nelson",role:s.SECOND_YEAR_REP,image:"yannik-1.jpg"},{name:"Rokas",surname:"Gudavičius",role:s.THIRD_YEAR_REP,image:"rokas-1.jpg",links:[{type:i.WEBSITE,url:"https://roxerg.github.io"}]},{name:"Tony",surname:"Duggan",role:s.FOURTH_YEAR_REP,image:"tony-1.jpg"}],ee=[{name:"Elspeth",surname:"Smith",role:s.PRESIDENT,image:"elspeth-1.jpg"},{name:"Rokas",surname:"Gudavičius",role:s.VICE_PRESIDENT,image:"rokas-1.jpg",links:[{type:i.WEBSITE,url:"https://roxerg.github.io"}]},{name:"Joao",surname:"Maio",role:s.TREASURER,image:"joao-1.jpg",links:[{type:i.WEBSITE,url:"https://jmaio.github.io/"}]},{name:"Mo",surname:"Javad",role:s.SECRETARY,image:"mo-1.jpg",links:[{type:i.WEBSITE,url:"http://mojavad.com"}]},{name:"Elena",surname:"Lapė",role:s.HACKATHON_SECRETARY,image:"elena-2.jpg",links:[{type:i.WEBSITE,url:"http://elenalape.com"}]},{name:"Patrick",surname:"Kage",role:s.TECHNICAL_SECRETARY,image:"patrick-1.jpg",links:[{type:i.WEBSITE,url:"https://kagelabs.org"}]},{name:"Tony",surname:"Duggan",role:s.SOCIAL_SECRETARY,image:"tony-1.jpg"},{name:"Kyle",surname:"Cotton",role:s.FIRST_YEAR_REP,image:"kyle-1.jpg"},{name:"Dylan",surname:"Oshima",role:s.SECOND_YEAR_REP,image:"dylan-oshima-1.jpg"},{name:"Likhitha",surname:"Sai",role:s.THIRD_YEAR_REP,image:"likhitha-1.jpg"},{name:"Craig",surname:"Snowden",role:s.OLD_PERSON_REP,image:"craig-1.jpg"}],ea=[{name:"Qais",surname:"Patankar",role:s.PRESIDENT,image:"qais-2.jpg",links:[{type:i.WEBSITE,url:"https://qaisjp.com"}]},{name:"Elena",surname:"Lapė",role:s.VICE_PRESIDENT,image:"elena-1.jpg",links:[{type:i.WEBSITE,url:"http://elenalape.com"}]},{name:"Viktorija",surname:"Lukošiūtė",role:s.TREASURER,image:"vik-3.jpg"},{name:"Angus",surname:"Shaw",role:s.SECRETARY,image:"angus-shaw-1.jpg"},{name:"Harry",surname:"Reeder",role:s.TECHNICAL_SECRETARY,image:"harry-1.png",links:[{type:i.WEBSITE,url:"http://harryreeder.co.uk/"}]},{name:"Nicholas",surname:"Lynch",role:s.SOCIAL_SECRETARY,image:"nick-lynch-1.jpg"},{name:"Dylan",surname:"Oshima",role:s.FIRST_YEAR_REP,image:"dylan-oshima-1.jpg"},{name:"Ginte",surname:"Petrulionytė",role:s.SECOND_YEAR_REP,image:"ginte-1.jpg"},{name:"William",surname:"Mathewson",role:s.FOURTH_YEAR_REP,image:"will-1.jpg"},{name:"Kit",surname:"Barnes (c/o Craig Snowden)",role:s.OLD_PERSON_REP,image:"kit-and-craig-1.jpg"}],et=[{name:"Viktorija",surname:"Lukošiūtė",role:s.PRESIDENT,image:""},{name:"Aw Young",surname:"Qingzhuo",role:s.VICE_PRESIDENT,image:""},{name:"Simon",surname:"Vahr",role:s.SECRETARY,image:"",links:[{type:i.WEBSITE,url:"http://vahr.co.uk/"}]},{name:"Martynas",surname:"Grigonis",role:s.TREASURER,image:""},{name:"Joshua",surname:"Green",role:s.TECHNICAL_SECRETARY,image:""},{name:"Susanne",surname:"Koster",role:s.SOCIAL_SECRETARY,image:""},{name:"Qais",surname:"Patankar",role:s.FIRST_YEAR_REP,image:"qais-1.jpg",links:[{type:i.WEBSITE,url:"https://qaisjp.com"}]},{name:"Benedetta",surname:"Mussati",role:s.SECOND_YEAR_REP,image:""},{name:"Vesko",surname:"Stefanov",role:s.THIRD_YEAR_REP,image:""},{name:"James",surname:"Friel",role:s.FOURTH_YEAR_REP,image:""},{name:"Kit",surname:"Barnes",role:s.OLD_PERSON_REP,image:"kit-1.jpg"}],en={2024:J,2023:q,2022:Q,2021:X,2020:Z,2019:$,2018:ee,2017:ea,2016:et,2015:[{name:"Lisa",surname:"Xie",role:s.PRESIDENT,image:""},{name:"William",surname:"Mathewson",role:s.VICE_PRESIDENT,image:""},{name:"Harjyot",surname:"Singh",role:s.SECRETARY,image:""},{name:"Andreea",surname:"Cucu",role:s.TREASURER,image:""},{name:"Joshua",surname:"Green",role:s.TECHNICAL_SECRETARY,image:""},{name:"Craig",surname:"Ross",role:s.SOCIAL_SECRETARY,image:""},{name:"Viktorija",surname:"Lukosiute",role:s.FIRST_YEAR_REP,image:"vik-1.jpg"},{name:"Mihai",surname:"Visuian",role:s.SECOND_YEAR_REP,image:""},{name:"Simon",surname:"Vahr",role:s.THIRD_YEAR_REP,image:"",links:[{type:i.WEBSITE,url:"http://vahr.co.uk/"}]},{name:"Paul",surname:"Scherer",role:s.FOURTH_YEAR_REP,image:""}],2014:[{name:"Lisa",surname:"Xie",role:s.PRESIDENT,image:""},{name:"William",surname:"Mathewson",role:s.VICE_PRESIDENT,image:""},{name:"Harjyot",surname:"Singh",role:s.SECRETARY,image:""},{name:"Andreea",surname:"Cucu",role:s.TREASURER,image:""},{name:"Joshua",surname:"Green",role:s.TECHNICAL_SECRETARY,image:""},{name:"Craig",surname:"Ross",role:s.SOCIAL_SECRETARY,image:""},{name:"Viktorija",surname:"Lukosiute",role:s.FIRST_YEAR_REP,image:"vik-1.jpg"},{name:"Mihai",surname:"Visuian",role:s.SECOND_YEAR_REP,image:""},{name:"Simon",surname:"Vahr",role:s.THIRD_YEAR_REP,image:"",links:[{type:i.WEBSITE,url:"http://vahr.co.uk/"}]},{name:"Paul",surname:"Scherer",role:s.FOURTH_YEAR_REP,image:""}],2013:[{name:"Angus",surname:"Pearson",role:s.PRESIDENT,image:"angusp-1.jpg",links:[{type:i.WEBSITE,url:"http://toaster.cc"}]},{name:"James",surname:"Friel",role:s.VICE_PRESIDENT,image:"james-friel-1.jpg"},{name:"Aseem",surname:"Narang",role:s.SECRETARY,image:""},{name:"Hugh",surname:"McGrade",role:s.TREASURER,image:""},{name:"Rob",surname:"Tully",role:s.TECHNICAL_SECRETARY,image:""},{name:"Hamish",surname:"Hutchings",role:s.SOCIAL_SECRETARY,image:""},{name:"Lisa",surname:"Xie",role:s.SECOND_YEAR_REP,image:""},{name:"Amy",surname:"Gainford",role:s.SECOND_YEAR_REP,image:""},{name:"Lewis",surname:"Barker",role:s.THIRD_YEAR_REP,image:""}]};var er=()=>{let e=Object.keys(en).sort().reverse()[0],a=en[e].find(e=>"President"===e.role);return a?(0,o.jsx)("div",{className:"h-screen flex flex-col justify-center items-center",children:(0,o.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-2 lg:gap-16",children:[(0,o.jsx)("div",{className:"sm:col-span-1 flex flex-col sm:items-end items-start justify-center",children:(0,o.jsxs)("div",{className:"flex flex-col items-left",children:[(0,o.jsx)(c.default,{src:"".concat(m.O,"/team/").concat(a.image)||"/images/hero.jpg",alt:"Headshot of CompSoc's president, ".concat(a.name),width:200,height:200,className:"rounded-full object-cover md:w-48 md:h-48 w-24 h-24"}),(0,o.jsx)("p",{className:"text-xs text-primary opacity-50",children:a.role}),(0,o.jsxs)("h1",{className:"text-left",children:[a.name," ",(0,o.jsxs)("span",{className:"opacity-50",children:[" ",a.surname]})]})]})}),(0,o.jsxs)("div",{className:"sm:col-span-3 font-space-mono",children:[(0,o.jsx)("h2",{className:"text-4xl -translate-x-6 translate-y-2",children:"“"}),(0,o.jsx)("p",{children:V}),(0,o.jsx)("h2",{className:"text-4xl text-right",children:"”"})]})]})}):null},es=()=>(0,o.jsxs)("div",{className:"flex flex-col items-center",children:[(0,o.jsx)(c.default,{src:"".concat(m.O,"/compsoc-short.png"),alt:"CompSoc logo",width:256,height:256,draggable:!1,className:"block md:hidden",style:{filter:"drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.1)) drop-shadow(0px 0px 197.8px rgba(255, 255, 255, 0.1))"}}),(0,o.jsx)(c.default,{src:"".concat(m.O,"/compsoc-long.png"),alt:"CompSoc logo",width:516,height:256,draggable:!1,className:"hidden md:block",style:{filter:"drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.1)) drop-shadow(0px 0px 197.8px rgba(255, 255, 255, 0.1))"}}),(0,o.jsx)("p",{className:"text-gray-400 text-sm md:text-lg text-center mt-4",children:"University of Edinburgh's Technology society"})]});function ei(){return(0,o.jsx)("main",{className:"bg-background flex items-center justify-center min-h-screen flex-col p-4 md:p-24",children:(0,o.jsxs)("div",{className:"w-full",children:[(0,o.jsxs)("div",{className:"flex flex-col justify-between items-center h-96",children:[(0,o.jsx)(es,{}),(0,o.jsx)(R,{})]}),(0,o.jsx)(er,{}),(0,o.jsx)(z,{}),(0,o.jsx)(k,{}),(0,o.jsx)(D,{}),(0,o.jsx)(M,{})]})})}},91997:function(e,a,t){"use strict";t.d(a,{k:function(){return n}});let n=[{name:"Project Share",description:"Share what you are building with others!",websiteURL:"https://projectshare.comp-soc.com/",calendarURL:"c_78e0084b4542572dfbd710bce8243f0e7721a211db4b5567b795d94fce574d18@group.calendar.google.com",icon:{src:"projectshare.png",alt:"ProjectShare logo",rounded:!1},backgroundColor:"#7816F4",borderColor:"#A971EF"},{name:"SIGINT",description:"Cyber Security",websiteURL:"https://sigint.mx/",icon:{src:"sigint.webp",alt:"SIGINT logo",rounded:!1},backgroundColor:"#000000",borderColor:"#666666"},{name:"CCSIG",description:"Competitve Programming",icon:{src:"ccsig.webp",alt:"CCSig logo",rounded:!1},backgroundColor:"#143D59",borderColor:"#3B6D8F"},{name:"Edinburgh AI",description:"Artificial Intelligence",websiteURL:"https://edinburghai.org/",icon:{src:"edinburghai.webp",alt:"Edinburgh AI logo",rounded:!1},backgroundColor:"#CB650F",borderColor:"#E3802D"},{name:"TypeSIG",description:"Type theory and related fields",websiteURL:"https://typesig.comp-soc.com/",icon:{src:"typesig.webp",alt:"TypeSIG logo",rounded:!0},backgroundColor:"#018EE0",borderColor:"#8AC4E6"},{name:"Tardis",description:"Hosting and server maintenance",websiteURL:"https://tardisproject.uk/",icon:{src:"tardis.webp",alt:"Tardis logo",rounded:!1},backgroundColor:"#295085",borderColor:"#3769A6"},{name:"QuantSIG",description:"Quantitative Finance and Algorithmic Trading",icon:{src:"quantsig.webp",alt:"QuantSig logo",rounded:!1},backgroundColor:"#4B3E4F",borderColor:"#807184"},{name:"GameDevSIG",description:"Game Development",icon:{src:"gamedevsig.webp",alt:"GamedevSig logo",rounded:!1},backgroundColor:"#000000",borderColor:"#3CAB98"},{name:"CloudSIG",description:"Cloud Computing and AWS",websiteURL:"https://www.meetup.com/aws-cloud-club-the-university-of-edinburgh/",icon:{src:"cloudsig.webp",alt:"CloudSig logo",rounded:!1},backgroundColor:"#aaa",borderColor:"#eee"}].sort(()=>Math.random()-.5)},15807:function(e,a,t){"use strict";t.d(a,{O:function(){return n}});let n="https://compsoc-edinburgh.github.io/comp-soc.com"},50807:function(){}},function(e){e.O(0,[294,51,173,104,971,23,744],function(){return e(e.s=10202)}),_N_E=e.O()}]);