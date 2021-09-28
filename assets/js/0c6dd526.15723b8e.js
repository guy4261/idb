"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),h=l,b=p["".concat(u,".").concat(h)]||p[h]||c[h]||r;return n?i.createElement(b,o(o({ref:t},d),{},{components:n})):i.createElement(b,o({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3589:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>u,metadata:()=>s,toc:()=>d,default:()=>p});var i=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],a={id:"accessibility",title:"Accessibility Automation"},u=void 0,s={unversionedId:"accessibility",id:"accessibility",isDocsHomePage:!1,title:"Accessibility Automation",description:"Introduction",source:"@site/docs/accessibility.mdx",sourceDirName:".",slug:"/accessibility",permalink:"/docs/accessibility",tags:[],version:"current",frontMatter:{id:"accessibility",title:"Accessibility Automation"},sidebar:"docs",previous:{title:"Test Execution",permalink:"/docs/test-execution"},next:{title:"Frequently Asked Questions",permalink:"/docs/faqs"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"<code>idb ui describe-all</code>",id:"idb-ui-describe-all",children:[]},{value:"<code>idb ui describe-point x y</code>",id:"idb-ui-describe-point-x-y",children:[]},{value:"<code>idb ui tap X Y</code>",id:"idb-ui-tap-x-y",children:[]},{value:"<code>idb button BUTTON_NAME</code>",id:"idb-button-button_name",children:[]},{value:"<code>idb text &#39;hello world&#39;</code>",id:"idb-text-hello-world",children:[]}],c={toc:d};function p(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"idb")," offers some new primitives for iOS Simulators that provides access to all accessibility information on an iOS Simulator. Additionally, there are commands for synthesizing input events like tapping on the touch screen."),(0,r.kt)("p",null,"These primitives can be used for a number of scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UI Testing without using ",(0,r.kt)("inlineCode",{parentName:"li"},"XCTest")," based on reading the UI state and then manipulating the touch screen/keyboard."),(0,r.kt)("li",{parentName:"ul"},"Remote access to an iOS Simulator & Screencasting."),(0,r.kt)("li",{parentName:"ul"},"Accessibility auditing by reading the entire Accessibility heirarchy and having heuristic for determining if UI elements are accessible.")),(0,r.kt)("p",null,"All of these commands live under the ",(0,r.kt)("inlineCode",{parentName:"p"},"ui")," subcommand prefix in ",(0,r.kt)("inlineCode",{parentName:"p"},"idb"),"."),(0,r.kt)("h2",{id:"idb-ui-describe-all"},(0,r.kt)("inlineCode",{parentName:"h2"},"idb ui describe-all")),(0,r.kt)("p",null,"Prints the entire UI heirarchy of the iOS Simulator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'idb ui describe-all\n[{"AXFrame":"{{0, 0}, {375, 667}}","AXUniqueId":null,"frame":{"y":0,"x":0,"width":375,"height":667},"role_description":"application","AXLabel":" ","content_required":false,"type":"Application","title":null,"help":null,"custom_actions":[],"AXValue":null,"enabled":true,"role":"AXApplication","subrole":null},{"AXFrame":"{{0, 0}, {375, 667}}","AXUniqueId":null,"frame":{"y":0,"x":0,"width":375,"height":667},"role_description":"group","AXLabel":null,"content_required":false,"type":"Group","title":null,"help":null,"custom_actions":[],"AXValue":null,"enabled":true,"role":"AXGroup","subrole":null},{"AXFrame":"{{21.5, 28}, {72, 87.5}}","AXUniqueId":"Calendar","frame":{"y":28,"x":21.5,"width":72,"height":87.5},"role_description":"button","AXLabel":"Calendar","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"Wednesday, October 14","enabled":true,"role":"AXButton","subrole":null},{"AXFrame":"{{112, 28}, {64, 87.5}}","AXUniqueId":"Photos","frame":{"y":28,"x":112,"width":64,"height":87.5},"role_description":"button","AXLabel":"Photos","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"","enabled":true,"role":"AXButton","subrole":null},{"AXFrame":"{{199, 28}, {64, 87.5}}","AXUniqueId":"Maps","frame":{"y":28,"x":199,"width":64,"height":87.5},"role_description":"button","AXLabel":"Maps","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"","enabled":true,"role":"AXButton","subrole":null},{"AXFrame":"{{277.5, 28}, {81.5, 87.5}}","AXUniqueId":"Reminders","frame":{"y":28,"x":277.5,"width":81.5,"height":87.5},"role_description":"button","AXLabel":"Reminders","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"","enabled":true,"role":"AXButton","subrole":null},{"AXFrame":"{{25, 116}, {64, 87.5}}","AXUniqueId":"News","frame":{"y":116,"x":25,"width":64,"height":87.5},"role_description":"button","AXLabel":"News","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"","enabled":true,"role":"AXButton","subrole":null},{"AXFrame":"{{112, 116}, {64, 87.5}}","AXUniqueId":"Health","frame":{"y":116,"x":112,"width":64,"height":87.5},"role_description":"button","AXLabel":"Health","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"","enabled":true,"role":"AXButton","subrole":null},{"AXFrame":"{{199, 116}, {64, 87.5}}","AXUniqueId":"Wallet","frame":{"y":116,"x":199,"width":64,"height":87.5},"role_description":"button","AXLabel":"Wallet","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"","enabled":true,"role":"AXButton","subrole":null},{"AXFrame":"{{284, 116}, {68.5, 87.5}}","AXUniqueId":"Settings","frame":{"y":116,"x":284,"width":68.5,"height":87.5},"role_description":"button","AXLabel":"Settings","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"","enabled":true,"role":"AXButton","subrole":null},{"AXFrame":"{{146, 546.5}, {83.5, 25}}","AXUniqueId":"Page control","frame":{"y":546.5,"x":146,"width":83.5,"height":25},"role_description":"slider","AXLabel":null,"content_required":false,"type":"Slider","title":null,"help":null,"custom_actions":[],"AXValue":"Page 1 of 2","enabled":true,"role":"AXSlider","subrole":null},{"AXFrame":"{{0, 575}, {375, 92}}","AXUniqueId":null,"frame":{"y":575,"x":0,"width":375,"height":92},"role_description":"group","AXLabel":"Dock","content_required":false,"type":"Group","title":null,"help":null,"custom_actions":[],"AXValue":null,"enabled":true,"role":"AXGroup","subrole":null},{"AXFrame":"{{112, 589}, {64, 64}}","AXUniqueId":"Safari","frame":{"y":589,"x":112,"width":64,"height":64},"role_description":"button","AXLabel":"Safari","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"","enabled":true,"role":"AXButton","subrole":null},{"AXFrame":"{{199, 589}, {64, 64}}","AXUniqueId":"Messages","frame":{"y":589,"x":199,"width":64,"height":64},"role_description":"button","AXLabel":"Messages","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"","enabled":true,"role":"AXButton","subrole":null}]\n')),(0,r.kt)("p",null,"The output here is an example of a fresh iOS Simulator booted into the Home Screen. Each of the App icons is represented as an entry within the heirarchy. Using ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,r.kt)("inlineCode",{parentName:"a"},"jq"))," is an effective way of formatting this output for humans. This output is easily machine-readable being a JSON structure."),(0,r.kt)("h2",{id:"idb-ui-describe-point-x-y"},(0,r.kt)("inlineCode",{parentName:"h2"},"idb ui describe-point x y")),(0,r.kt)("p",null,'Returns the accessibility element at given co-ordinates on the iOS Simulator\'s screen. This is useful for "hit test" style queries, or understanding what is under a screen pointer.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'idb ui describe-point 200 200\n{"AXFrame":"{{199, 116}, {64, 87.5}}","AXUniqueId":"Wallet","frame":{"y":116,"x":199,"width":64,"height":87.5},"role_description":"button","AXLabel":"Wallet","content_required":false,"type":"Button","title":null,"help":null,"custom_actions":["Edit mode","Today"],"AXValue":"","enabled":true,"role":"AXButton","subrole":null}\n')),(0,r.kt)("p",null,'This example shows selection of the "Wallet" app, which is 200 points in x/y from the origin (top-left) of the screen.'),(0,r.kt)("h2",{id:"idb-ui-tap-x-y"},(0,r.kt)("inlineCode",{parentName:"h2"},"idb ui tap X Y")),(0,r.kt)("p",null,"Taps the screen at the given X/Y co-ordinates from the origin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idb ui tap 200 200\n")),(0,r.kt)("p",null,"From the home-screen this will open the Wallet App, as the home screen icon for this app is at these co-ordinates."),(0,r.kt)("h2",{id:"idb-button-button_name"},(0,r.kt)("inlineCode",{parentName:"h2"},"idb button BUTTON_NAME")),(0,r.kt)("p",null,"Simulates a button press on the iOS Simulator. For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idb button LOCK\n")),(0,r.kt)("p",null,"Will send the iOS Simulator to the lockscreen. All button types are available with ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idb ui button --help\nusage: idb ui button [-h] [--duration DURATION] [--udid UDID] [--log {DEBUG,INFO,WARNING,ERROR,CRITICAL}] [--json] {APPLE_PAY,HOME,LOCK,SIDE_BUTTON,SIRI}\npositional arguments:\n  {APPLE_PAY,HOME,LOCK,SIDE_BUTTON,SIRI}\n")),(0,r.kt)("h2",{id:"idb-text-hello-world"},(0,r.kt)("inlineCode",{parentName:"h2"},"idb text 'hello world'")),(0,r.kt)("p",null,"Sends keyboard events to the iOS Simulator. This can be used at any time and are equivalent to sending events via a hardware keyboard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idb text 'hello world'\n")),(0,r.kt)("p",null,"Note that this accepts a single argument, so providing text entry with spaces will require quoting"))}p.isMDXComponent=!0}}]);