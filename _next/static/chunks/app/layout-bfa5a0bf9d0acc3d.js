(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{15170:function(e,t,n){Promise.resolve().then(n.t.bind(n,58877,23)),Promise.resolve().then(n.bind(n,82935)),Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.t.bind(n,231,23))},82935:function(e,t,n){"use strict";var r=n(57437),i=n(2265),s=n(87420);let o=()=>{let{isActive:e}=(0,s.z)(),[t,n]=(0,i.useState)({x:0,y:0}),[o,a]=(0,i.useState)([]),[c,u]=(0,i.useState)(64),d=()=>({x:Math.ceil(window.innerWidth/c),y:Math.ceil(window.innerHeight/c)}),l=(e,t)=>Array(e*t).fill(0).map(()=>Math.random());return(0,i.useEffect)(()=>{let{x:e,y:t}=d();n({x:e,y:t}),a(l(e,t));let r=()=>{let{x:e,y:t}=d();n({x:e,y:t}),a(l(e,t))};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[c]),(0,r.jsx)("div",{className:"fixed pointer-events-none z-[100] grid",style:{gridTemplateColumns:"repeat(".concat(t.x,", ").concat(c,"px)")},children:o.map((t,n)=>(0,r.jsx)("div",{style:{width:"".concat(c,"px"),height:"".concat(c,"px"),transitionDelay:"".concat(750*t,"ms")},className:"transition-colors ".concat(e?"bg-csred":"transparent")},n))})};t.default=e=>{let{children:t}=e;return(0,r.jsxs)(s.B,{children:[(0,r.jsx)(o,{}),t]})}},87420:function(e,t,n){"use strict";n.d(t,{B:function(){return a},z:function(){return o}});var r=n(57437),i=n(2265);let s=(0,i.createContext)(void 0),o=()=>{let e=(0,i.useContext)(s);if(!e)throw Error("useAnimatedBackground must be used within an AnimatedBackgroundProvider");return e},a=e=>{let{children:t}=e,[n,o]=(0,i.useState)(!1);return(0,r.jsx)(s.Provider,{value:{isActive:n,toggleBackground:()=>{o(!n)}},children:t})}},58877:function(){}},function(e){e.O(0,[404,173,231,971,23,744],function(){return e(e.s=15170)}),_N_E=e.O()}]);