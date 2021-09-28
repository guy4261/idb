"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8134:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>u});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={id:"commands",title:"Commands"},s=void 0,d={unversionedId:"commands",id:"commands",isDocsHomePage:!1,title:"Commands",description:"iOS Target Manipulation",source:"@site/docs/commands.mdx",sourceDirName:".",slug:"/commands",permalink:"/docs/commands",tags:[],version:"current",frontMatter:{id:"commands",title:"Commands"},sidebar:"docs",previous:{title:"Development",permalink:"/docs/development"},next:{title:"FBSimulatorControl",permalink:"/docs/fbsimulatorcontrol"}},p=[{value:"iOS Target Manipulation",id:"ios-target-manipulation",children:[{value:"Specifying which iOS Target to run against",id:"specifying-which-ios-target-to-run-against",children:[]},{value:"Disconnect a target",id:"disconnect-a-target",children:[]},{value:"List connected targets",id:"list-connected-targets",children:[]},{value:"Boot a simulator",id:"boot-a-simulator",children:[]},{value:"Describe a target",id:"describe-a-target",children:[]},{value:"General arguments",id:"general-arguments",children:[]}]},{value:"Apps",id:"apps",children:[{value:"List apps",id:"list-apps",children:[]},{value:"Install an app",id:"install-an-app",children:[]},{value:"Launch an app",id:"launch-an-app",children:[]},{value:"Kill a running app",id:"kill-a-running-app",children:[]},{value:"Uninstalling an app",id:"uninstalling-an-app",children:[]}]},{value:"Tests",id:"tests",children:[{value:"Install a test bundle",id:"install-a-test-bundle",children:[]},{value:"List installed tests",id:"list-installed-tests",children:[]},{value:"List tests inside a bundle",id:"list-tests-inside-a-bundle",children:[]},{value:"Running tests",id:"running-tests",children:[]}]},{value:"File commands",id:"file-commands",children:[{value:"Copying files into a container",id:"copying-files-into-a-container",children:[]},{value:"Copying files out of a container",id:"copying-files-out-of-a-container",children:[]},{value:"Moving files within the container",id:"moving-files-within-the-container",children:[]},{value:"Make a new directory",id:"make-a-new-directory",children:[]},{value:"Remove a path on a target",id:"remove-a-path-on-a-target",children:[]},{value:"List a path on a target",id:"list-a-path-on-a-target",children:[]}]},{value:"Debug an app",id:"debug-an-app",children:[{value:"Starting a debug session",id:"starting-a-debug-session",children:[]},{value:"Stop a debug session",id:"stop-a-debug-session",children:[]},{value:"Information about a debug session",id:"information-about-a-debug-session",children:[]}]},{value:"Interact",id:"interact",children:[{value:"Tap",id:"tap",children:[]},{value:"Swipe",id:"swipe",children:[]},{value:"Press a button",id:"press-a-button",children:[]},{value:"Inputting text",id:"inputting-text",children:[]}]},{value:"Accessibility info",id:"accessibility-info",children:[{value:"Describe the whole screen",id:"describe-the-whole-screen",children:[]},{value:"Describe a point",id:"describe-a-point",children:[]}]},{value:"Misc",id:"misc",children:[{value:"Reset Idb",id:"reset-idb",children:[]},{value:"Focus a simulators window",id:"focus-a-simulators-window",children:[]},{value:"Install a .dylib",id:"install-a-dylib",children:[]},{value:"Instruments",id:"instruments",children:[]},{value:"Record a video",id:"record-a-video",children:[]},{value:"Log",id:"log",children:[]},{value:"Open a url",id:"open-a-url",children:[]},{value:"Clear the keychain",id:"clear-the-keychain",children:[]},{value:"Set a simulators location",id:"set-a-simulators-location",children:[]},{value:"Add media",id:"add-media",children:[]},{value:"Approve",id:"approve",children:[]},{value:"Add contacts",id:"add-contacts",children:[]}]},{value:"Crash logs",id:"crash-logs",children:[{value:"List crash logs",id:"list-crash-logs",children:[]},{value:"Fetch a crash log",id:"fetch-a-crash-log",children:[]},{value:"Delete crash logs",id:"delete-crash-logs",children:[]}]},{value:"Companion Commands",id:"companion-commands",children:[{value:"Starting a <code>gRPC</code> Server",id:"starting-a-grpc-server",children:[]},{value:"Starting a notifier",id:"starting-a-notifier",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ios-target-manipulation"},"iOS Target Manipulation"),(0,l.kt)("h3",{id:"specifying-which-ios-target-to-run-against"},"Specifying which iOS Target to run against"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"idb")," maintains local state of iOS Targets that it is aware of. This state can be modified or bypassed. The ",(0,l.kt)("inlineCode",{parentName:"p"},"idb")," leans heavily on the ",(0,l.kt)("inlineCode",{parentName:"p"},"idb_companion")," in order to process requests. As such all commands that manipulate iOS Targets requires a companion to service them."),(0,l.kt)("p",null,"If you can pass the location of the companion in each call, then there is no need to modify this internal state. All ",(0,l.kt)("inlineCode",{parentName:"p"},"idb")," commands can be prefixed with the ",(0,l.kt)("inlineCode",{parentName:"p"},"IDB_COMPANION")," environment variable, which will directly address a given companion"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Run a describe command against a companion running on the loopback interface\n# on TCP Port 10882\nIDB_COMPANION=localhost:10882 idb describe\n# This can also be a path to a domain socket that the companion is running on\nIDB_COMPANION=/tmp/idb_companion_domain_sock idb describe\n")),(0,l.kt)("p",null,"Addressing via a UDID instead of the companion address is achieved by ",(0,l.kt)("inlineCode",{parentName:"p"},"connect"),"ing a companion, so that this knowledge persists over invocations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb connect COMPANION_HOST COMPANION_PORT\n")),(0,l.kt)("p",null,"Alternatively, pass a UDID instead of an address to transparently start a companion for the provided UDID in the background:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb connect TARGET_UDID\n")),(0,l.kt)("p",null,"Manual companion creation can be entirely bypassed by providing a UDID to command invocations. This will transparently start a companion in the background if one is not yet created for the provided UDID. Further invocations for this UDID will use the same companion from the first invocation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb describe --udid TARGET_UDID\n")),(0,l.kt)("h3",{id:"disconnect-a-target"},"Disconnect a target"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb disconnect COMPANION_HOST COMPANION_PORT\nidb disconnect TARGET_UDID\n")),(0,l.kt)("p",null,"The opposite of ",(0,l.kt)("inlineCode",{parentName:"p"},"connect"),". This will not terminate the companion backing this target"),(0,l.kt)("h3",{id:"list-connected-targets"},"List connected targets"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"idb")," is aware of the companions that you have manually connected, as well as other iOS targets that do not yet have companions. This can be shown with ",(0,l.kt)("inlineCode",{parentName:"p"},"list-targets"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb list-targets\n")),(0,l.kt)("p",null,"The output will show which targets do and don't have companions associated with them."),(0,l.kt)("h3",{id:"boot-a-simulator"},"Boot a simulator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb --boot UDID\n")),(0,l.kt)("p",null,"This will only apply to iOS Simulators."),(0,l.kt)("h3",{id:"describe-a-target"},"Describe a target"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb describe\n")),(0,l.kt)("p",null,"Returns metadata about the specified target, including:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UDID"),(0,l.kt)("li",{parentName:"ul"},"Name"),(0,l.kt)("li",{parentName:"ul"},"Screen dimensions and density"),(0,l.kt)("li",{parentName:"ul"},"State (booted/...)"),(0,l.kt)("li",{parentName:"ul"},"Type (simulator/device)"),(0,l.kt)("li",{parentName:"ul"},"iOS version"),(0,l.kt)("li",{parentName:"ul"},"Architecture"),(0,l.kt)("li",{parentName:"ul"},"Information about its companion")),(0,l.kt)("h3",{id:"general-arguments"},"General arguments"),(0,l.kt)("p",null,"In addition to arguments that are relevant to specific commands, there are other optional arguments that apply to all commands."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--udid UDID"),(0,l.kt)("td",{parentName:"tr",align:null},"UDID of the target"),(0,l.kt)("td",{parentName:"tr",align:null},"If only one target is connected it'll use that one")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--log {DEBUG,INFO,WARNING,ERROR,CRITICAL}"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the log level"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--json"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON structured output where applicable"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"apps"},"Apps"),(0,l.kt)("h3",{id:"list-apps"},"List apps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb list-apps\n")),(0,l.kt)("p",null,"Lists the targets installed applications and their metadata, including:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bundle ID"),(0,l.kt)("li",{parentName:"ul"},"Name"),(0,l.kt)("li",{parentName:"ul"},"Install type (user, system)"),(0,l.kt)("li",{parentName:"ul"},"Architectures"),(0,l.kt)("li",{parentName:"ul"},"Running status"),(0,l.kt)("li",{parentName:"ul"},"Debuggable status")),(0,l.kt)("h3",{id:"install-an-app"},"Install an app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb install /path/to/testApp.app\n")),(0,l.kt)("p",null,"Installs the given ",(0,l.kt)("inlineCode",{parentName:"p"},".app")," or ",(0,l.kt)("inlineCode",{parentName:"p"},".ipa"),". The app target architecture should match that of the target."),(0,l.kt)("h3",{id:"launch-an-app"},"Launch an app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb launch com.apple.Maps\n")),(0,l.kt)("p",null,"Any environment variables that are prefixed with IDB_ will be set on the launched app, with that prefix removed."),(0,l.kt)("p",null,"Custom launch arguments can also be provided by appending them to the end of the command."),(0,l.kt)("p",null,"By default ",(0,l.kt)("inlineCode",{parentName:"p"},"idb launch")," will fail if the app is already running, this can be overruled with ",(0,l.kt)("inlineCode",{parentName:"p"},"-f/--foreground-if-running"),"."),(0,l.kt)("p",null,"To tail the output of the launched process, provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"-w/--wait-for")," flag. The ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," of the app will be streamed back until the app exits. When running in this mode, the app will be killed when sending a ",(0,l.kt)("inlineCode",{parentName:"p"},"SIGTERM")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"idb")," cli, for example with ",(0,l.kt)("inlineCode",{parentName:"p"},"^C")," in a shell."),(0,l.kt)("h3",{id:"kill-a-running-app"},"Kill a running app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb terminate com.apple.Maps\n")),(0,l.kt)("p",null,"Kills an app with the given Bundle ID. If the app is not running, or there is no app installed for the given Bundle ID, this will fail"),(0,l.kt)("h3",{id:"uninstalling-an-app"},"Uninstalling an app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb uninstall com.foo.bar\n")),(0,l.kt)("p",null,"Removes an app from the target by Bundle ID."),(0,l.kt)("h2",{id:"tests"},"Tests"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"idb")," exposes test execution primitives via binaries and has a number of modes of operation. ",(0,l.kt)("a",{parentName:"p",href:"test-execution"},"Go here for more details about how ",(0,l.kt)("inlineCode",{parentName:"a"},"idb")," approaches Test Execution.")),(0,l.kt)("h3",{id:"install-a-test-bundle"},"Install a test bundle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb xctest install testApp.app/Plugins/testAppTests.xctest\n")),(0,l.kt)("p",null,'Before a test can be run through idb it must first be installed on the target. This performs a "relocation" process, so that the test bundle can be invoked multiple times in different modes of execution.'),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},".xctest")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".xctestrun")," files can be installed with this command."),(0,l.kt)("h3",{id:"list-installed-tests"},"List installed tests"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb xctest list\n")),(0,l.kt)("p",null,"Lists all of the tests installed on a target."),(0,l.kt)("h3",{id:"list-tests-inside-a-bundle"},"List tests inside a bundle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb xctest list-bundle com.facebook.myAppTests\n")),(0,l.kt)("p",null,"Lists all of the individual tests inside a test bundle. This will load the test bundle in the target's runtime and discover all of the tests that can be executed."),(0,l.kt)("h3",{id:"running-tests"},"Running tests"),(0,l.kt)("p",null,"Environment variables that are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"IDB_")," will be passed through to the test run with that prefix removed, also any arguments appended to the end of the idb command will be supplied as arguments to the test run."),(0,l.kt)("p",null,"Please consult the ",(0,l.kt)("a",{parentName:"p",href:"test-execution"},"Test Execution section")," for understanding more about the various modes that are available for running tests"),(0,l.kt)("h2",{id:"file-commands"},"File commands"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"idb file"),' commands allow for managing manipulating files on a target. File operations are applied to "containers", which allow manipulation of different iOS subsystems.'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Switch"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Simulators"),(0,l.kt)("th",{parentName:"tr",align:null},"Devices"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bundle-id")),(0,l.kt)("td",{parentName:"tr",align:null},'Apply file operations to the "Application Container" of the provided Bundle ID. This is otherwise known as the "Application Sandbox"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 (Only for Applications signed with a Developer Profile)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--media")),(0,l.kt)("td",{parentName:"tr",align:null},"The container for Photos/Videos"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--crashes")),(0,l.kt)("td",{parentName:"tr",align:null},"The container for Crash/Diagnostic reports. This can be used to view and pull crash logs from a device"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("p",null,"Not all commands will make sense for each container. For example, crash containers are read only. However, file operations provide a consisent abstraction on top of views of heirarchical data."),(0,l.kt)("h3",{id:"copying-files-into-a-container"},"Copying files into a container"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb file push --bundle-id com.foo.bar src1.jpg src2.jpg dest_1\n")),(0,l.kt)("p",null,"Copies one or more files from the host to the relative destination path within the container."),(0,l.kt)("h3",{id:"copying-files-out-of-a-container"},"Copying files out of a container"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb file pull --bundle-id com.foo.bar src.txt dest.txt\n")),(0,l.kt)("p",null,"Copies a single file from the container to the host."),(0,l.kt)("h3",{id:"moving-files-within-the-container"},"Moving files within the container"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb file mv --bundle-id com.foo.bar src1.jpg src2.jpg dest_1\n")),(0,l.kt)("p",null,"This will move two image files from the root of the container, to a destination subdirectory within the container."),(0,l.kt)("h3",{id:"make-a-new-directory"},"Make a new directory"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb file mkdir --bundle-id com.foo.bar newdir\n")),(0,l.kt)("p",null,"Creates a new folder within the apps data container."),(0,l.kt)("h3",{id:"remove-a-path-on-a-target"},"Remove a path on a target"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb file rm PATH_A PATH_B --bundle-id BUNDLE_ID\n")),(0,l.kt)("p",null,"Removes the specified paths within an apps data container."),(0,l.kt)("p",null,"If a folder is specified to be deleted, all of its contents will be removed recursively."),(0,l.kt)("h3",{id:"list-a-path-on-a-target"},"List a path on a target"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb file ls --bundle-id com.foo.bar directory1 directory2\n")),(0,l.kt)("p",null,"Returns a list of all the files present within one or more directories."),(0,l.kt)("h2",{id:"debug-an-app"},"Debug an app"),(0,l.kt)("h3",{id:"starting-a-debug-session"},"Starting a debug session"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb debugserver start BUNDLE_ID\n")),(0,l.kt)("p",null,"Starts a debug session. The output will be similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"process connect connect://localhost:10881")," and it will be used to start the lldb. In another terminal, type in the command ",(0,l.kt)("inlineCode",{parentName:"p"},"lldb"),", which will start the lldb. There, type the output of the start command to connect the debug server."),(0,l.kt)("h3",{id:"stop-a-debug-session"},"Stop a debug session"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb debugserver stop\n")),(0,l.kt)("p",null,"Stops a running debug session."),(0,l.kt)("h3",{id:"information-about-a-debug-session"},"Information about a debug session"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb debugserver status\n")),(0,l.kt)("p",null,"Display metadata about any running debug sessions."),(0,l.kt)("h2",{id:"interact"},"Interact"),(0,l.kt)("p",null,"For simulators we provide a handful of commands for emulating HID events."),(0,l.kt)("h3",{id:"tap"},"Tap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb ui tap X Y\n")),(0,l.kt)("p",null,"Taps a location on the screen specified in the points coordinate system.\nThe tap duration can be set with ",(0,l.kt)("inlineCode",{parentName:"p"},"--duration")),(0,l.kt)("h3",{id:"swipe"},"Swipe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb ui swipe X_START Y_START X_END Y_END\n")),(0,l.kt)("p",null,"Swipes from the specified start point to the end.\nBy default this will be done by a touch down at the start point, followed by moving 10 points at a time until the end point is reached. The size of each step can be specified with ",(0,l.kt)("inlineCode",{parentName:"p"},"--delta"),"."),(0,l.kt)("h3",{id:"press-a-button"},"Press a button"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb ui button {APPLE_PAY,HOME,LOCK,SIDE_BUTTON,SIRI}\n")),(0,l.kt)("p",null,"Simulates a press of the specified button.\nThe press duration can be set with ",(0,l.kt)("inlineCode",{parentName:"p"},"--duration"),"."),(0,l.kt)("h3",{id:"inputting-text"},"Inputting text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'idb ui text "some text"\n')),(0,l.kt)("p",null,"Types the specified text into the target."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb ui key 4\n")),(0,l.kt)("p",null,"Simulates the press of a key specified by its keycode.\nThe key presses duration can be set with ",(0,l.kt)("inlineCode",{parentName:"p"},"--duration"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb ui key-sequence 4 5 6\n")),(0,l.kt)("p",null,"Inputs multiple key events sequentially."),(0,l.kt)("h2",{id:"accessibility-info"},"Accessibility info"),(0,l.kt)("h3",{id:"describe-the-whole-screen"},"Describe the whole screen"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb ui describe-all\n")),(0,l.kt)("p",null,"Returns a JSON formatted list of all the elements currently on screen, including their bounds and accessibility information."),(0,l.kt)("h3",{id:"describe-a-point"},"Describe a point"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb ui describe-point X Y\n")),(0,l.kt)("p",null,"Returns JSON formatted information about a specific point on the screen, if an element exists there."),(0,l.kt)("h2",{id:"misc"},"Misc"),(0,l.kt)("h3",{id:"reset-idb"},"Reset Idb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb kill\n")),(0,l.kt)("p",null,"idb stores information about available companions in a local file. this command clears these files and kills the idb notifier if one is running."),(0,l.kt)("h3",{id:"focus-a-simulators-window"},"Focus a simulators window"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb focus\n")),(0,l.kt)("p",null,"Brings a simulators window to the foreground."),(0,l.kt)("h3",{id:"install-a-dylib"},"Install a .dylib"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb dylib install test.dylib\n")),(0,l.kt)("p",null,"Installs a ",(0,l.kt)("inlineCode",{parentName:"p"},".dylib")," on the target. This can then be injected into apps on launch."),(0,l.kt)("h3",{id:"instruments"},"Instruments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb instruments TEMPLATE\n")),(0,l.kt)("p",null,"Starts instruments running connected to the target"),(0,l.kt)("h3",{id:"record-a-video"},"Record a video"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb record video OUTPUT_MP4\n")),(0,l.kt)("p",null,"Starts recording the targets screen, outputting the content to the specified path. The recording can be stopped by pressing ",(0,l.kt)("inlineCode",{parentName:"p"},"^C"),"."),(0,l.kt)("h3",{id:"log"},"Log"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb log\n")),(0,l.kt)("p",null,"Tail logs from a target, uses the standard log(1) stream arguments"),(0,l.kt)("h3",{id:"open-a-url"},"Open a url"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb open https://facebook.com\n")),(0,l.kt)("p",null,"Opens the specified URL on the target.\nThis works both with web addresses and URL schemes present on the target."),(0,l.kt)("h3",{id:"clear-the-keychain"},"Clear the keychain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb clear_keychain\n")),(0,l.kt)("p",null,"For simulators idb can clear the entire keychain."),(0,l.kt)("h3",{id:"set-a-simulators-location"},"Set a simulators location"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb set_location LAT LONG\n")),(0,l.kt)("p",null,"Overrides a simulators location to the latitude, longitude pair specified."),(0,l.kt)("h3",{id:"add-media"},"Add media"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb add-media cat.jpg dog.mov\n")),(0,l.kt)("p",null,"Files supplied to this command will be placed in the targets camera roll.\nMost common image and video file formats are supported."),(0,l.kt)("h3",{id:"approve"},"Approve"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb approve com.apple.Maps photos camera\n")),(0,l.kt)("p",null,"For simulators idb can programmatically approve permission for an app.\nCurrently idb can approve:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"photos")," - Permission to view the camera roll"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"camera")," - Permission to access the camera"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contacts")," - Permission to access the targets contacts")),(0,l.kt)("h3",{id:"add-contacts"},"Add contacts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb contacts update db.sqlite\n")),(0,l.kt)("p",null,"For simulators idb can overwrite the simulators contacts db."),(0,l.kt)("h2",{id:"crash-logs"},"Crash logs"),(0,l.kt)("p",null,"idb includes several commands for fetching and managing a targets crash logs."),(0,l.kt)("h3",{id:"list-crash-logs"},"List crash logs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb crash list\n")),(0,l.kt)("p",null,"Fetches a list of crash logs present on the target.\nThe results can be filtered by providing ",(0,l.kt)("inlineCode",{parentName:"p"},"--before/--since/--bundle-id"),"."),(0,l.kt)("h3",{id:"fetch-a-crash-log"},"Fetch a crash log"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb crash show CRASH_NAME\n")),(0,l.kt)("p",null,"Fetches the crash log with the specified name"),(0,l.kt)("h3",{id:"delete-crash-logs"},"Delete crash logs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb crash delete CRASH_NAME\nidb crash delete --before/--since/--all X\n")),(0,l.kt)("p",null,"Deletes crash logs, either specified by name or all those matching the provided filters  ",(0,l.kt)("inlineCode",{parentName:"p"},"--before/--since/--bundle-id/--all"),"."),(0,l.kt)("h2",{id:"companion-commands"},"Companion Commands"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"idb_companion")," is a native Objective-C++ executable that is used to manipulate iOS Simulators & Devices. It implements many of the CRUD-style operations associated with iOS resources and exposes a ",(0,l.kt)("inlineCode",{parentName:"p"},"gRPC")," interface that can be consumed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"idb")," client."),(0,l.kt)("p",null,"When using ",(0,l.kt)("inlineCode",{parentName:"p"},"idb")," for ad-hoc usage, you likely won't need to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"idb_companion")," cli directly as it's wrapped by the ",(0,l.kt)("inlineCode",{parentName:"p"},"idb")," cli. However, it can be used directly if needed."),(0,l.kt)("h3",{id:"starting-a-grpc-server"},"Starting a ",(0,l.kt)("inlineCode",{parentName:"h3"},"gRPC")," Server"),(0,l.kt)("p",null,"To start a companion server for an iOS Simulator or Device that you have running on your machine:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb_companion --udid UDID\n")),(0,l.kt)("p",null,"The companion server will be started for the given UDID. If the given ",(0,l.kt)("inlineCode",{parentName:"p"},"UDID")," cannot be found, the companion launch will fail. ",(0,l.kt)("inlineCode",{parentName:"p"},"UDID"),"s have different formats and the companion will parse it in order to find the appropriate target."),(0,l.kt)("p",null,"There are a number of additional switches for altering companion behaviour. These are documented via ",(0,l.kt)("inlineCode",{parentName:"p"},"idb_companion --help")," and can also be seen in the table below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--udid UDID"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the target device / simulator"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--port PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"The TCP port to start the ",(0,l.kt)("inlineCode",{parentName:"td"},"gRPC")," Server on"),(0,l.kt)("td",{parentName:"tr",align:null},"10882")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--log-file-path PATH"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to write companion logs to"),(0,l.kt)("td",{parentName:"tr",align:null},"Will log to ",(0,l.kt)("inlineCode",{parentName:"td"},"stderr"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--device-set-path PATH"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS Simulator custom device set path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"~/Library/Developer/CoreSimulator/Devices"))))),(0,l.kt)("p",null,"When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"idb")," cli directly on iOS targets local to your Mac you won't need to start companions manually. However, it can be handy to use this for debugging or manually managing companions. You might wish to manually manage companions when exposing a companion over the network to another machine, or if you have an Application built on top of ",(0,l.kt)("inlineCode",{parentName:"p"},"idb")," where you wish to precisely control the lifecycle of the companion and it's logs."),(0,l.kt)("h3",{id:"starting-a-notifier"},"Starting a notifier"),(0,l.kt)("p",null,'The companion can operate in "notifier" mode. This means that all changes in Device & Simulator availability are written out. This is useful for discovering the state of Simulators & Devices over time.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"idb_companion --notify FILE_PATH|stdout\n")),(0,l.kt)("p",null,"It's also used as an implementation detail of how the ",(0,l.kt)("inlineCode",{parentName:"p"},"idb")," cli discovers what targets it can connect to, when the ",(0,l.kt)("inlineCode",{parentName:"p"},"idb")," cli is run on macOS."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," is provided, updates will be written to ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," instead of the provided file path."))}u.isMDXComponent=!0}}]);