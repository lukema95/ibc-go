"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},76298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/apps/interchain-accounts/legacy/integration"},i="Integration",c={unversionedId:"apps/interchain-accounts/legacy/integration",id:"version-v8.0.x/apps/interchain-accounts/legacy/integration",title:"Integration",description:"Deprecation Notice",source:"@site/versioned_docs/version-v8.0.x/02-apps/02-interchain-accounts/10-legacy/02-integration.md",sourceDirName:"02-apps/02-interchain-accounts/10-legacy",slug:"/apps/interchain-accounts/legacy/integration",permalink:"/v8/apps/interchain-accounts/legacy/integration",draft:!1,tags:[],version:"v8.0.x",sidebarPosition:2,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/apps/interchain-accounts/legacy/integration"},sidebar:"defaultSidebar",previous:{title:"Authentication Modules",permalink:"/v8/apps/interchain-accounts/legacy/auth-modules"},next:{title:"Keeper API",permalink:"/v8/apps/interchain-accounts/legacy/keeper-api"}},l={},p=[{value:"Deprecation Notice",id:"deprecation-notice",level:2},{value:"Example integration",id:"example-integration",level:2},{value:"Using submodules exclusively",id:"using-submodules-exclusively",level:2},{value:"Disabling controller chain functionality",id:"disabling-controller-chain-functionality",level:3},{value:"Disabling host chain functionality",id:"disabling-host-chain-functionality",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integration"},"Integration"),(0,o.kt)("h2",{id:"deprecation-notice"},"Deprecation Notice"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This document is deprecated and will be removed in future releases"),"."),(0,o.kt)("admonition",{title:"Synopsis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Learn how to integrate Interchain Accounts host and controller functionality to your chain. The following document only applies for Cosmos SDK chains.")),(0,o.kt)("p",null,"The Interchain Accounts module contains two submodules. Each submodule has its own IBC application. The Interchain Accounts module should be registered as an ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModule")," in the same way all SDK modules are registered on a chain, but each submodule should create its own ",(0,o.kt)("inlineCode",{parentName:"p"},"IBCModule")," as necessary. A route should be added to the IBC router for each submodule which will be used."),(0,o.kt)("p",null,"Chains who wish to support ICS-27 may elect to act as a host chain, a controller chain or both. Disabling host or controller functionality may be done statically by excluding the host or controller module entirely from the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.go")," file or it may be done dynamically by taking advantage of the on-chain parameters which enable or disable the host or controller submodules."),(0,o.kt)("p",null,"Interchain Account authentication modules are the base application of a middleware stack. The controller submodule is the middleware in this stack."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ica-pre-v6.png",src:n(42923).Z,width:"519",height:"546"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note that since ibc-go v6 the channel capability is claimed by the controller submodule and therefore it is not required for authentication modules to claim the capability in the ",(0,o.kt)("inlineCode",{parentName:"p"},"OnChanOpenInit")," callback. Therefore the custom authentication module does not need a scoped keeper anymore.")),(0,o.kt)("h2",{id:"example-integration"},"Example integration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// app.go\n\n// Register the AppModule for the Interchain Accounts module and the authentication module\n// Note: No `icaauth` exists, this must be substituted with an actual Interchain Accounts authentication module\nModuleBasics = module.NewBasicManager(\n  ...\n  ica.AppModuleBasic{},\n  icaauth.AppModuleBasic{},\n  ...\n)\n\n... \n\n// Add module account permissions for the Interchain Accounts module\n// Only necessary for host chain functionality\n// Each Interchain Account created on the host chain is derived from the module account created\nmaccPerms = map[string][]string{\n  ...\n  icatypes.ModuleName:            nil,\n}\n\n...\n\n// Add Interchain Accounts Keepers for each submodule used and the authentication module\n// If a submodule is being statically disabled, the associated Keeper does not need to be added. \ntype App struct {\n  ...\n\n  ICAControllerKeeper icacontrollerkeeper.Keeper\n  ICAHostKeeper       icahostkeeper.Keeper\n  ICAAuthKeeper       icaauthkeeper.Keeper\n\n  ...\n}\n\n...\n\n// Create store keys for each submodule Keeper and the authentication module\nkeys := sdk.NewKVStoreKeys(\n  ...\n  icacontrollertypes.StoreKey,\n  icahosttypes.StoreKey,\n  icaauthtypes.StoreKey,\n  ...\n)\n\n... \n\n// Create the scoped keepers for each submodule keeper and authentication keeper\nscopedICAControllerKeeper := app.CapabilityKeeper.ScopeToModule(icacontrollertypes.SubModuleName)\nscopedICAHostKeeper := app.CapabilityKeeper.ScopeToModule(icahosttypes.SubModuleName)\n\n...\n\n// Create the Keeper for each submodule\napp.ICAControllerKeeper = icacontrollerkeeper.NewKeeper(\n  appCodec, keys[icacontrollertypes.StoreKey], app.GetSubspace(icacontrollertypes.SubModuleName),\n  app.IBCKeeper.ChannelKeeper, // may be replaced with middleware such as ics29 fee\n  app.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n  scopedICAControllerKeeper, app.MsgServiceRouter(),\n)\napp.ICAHostKeeper = icahostkeeper.NewKeeper(\n  appCodec, keys[icahosttypes.StoreKey], app.GetSubspace(icahosttypes.SubModuleName),\n  app.IBCKeeper.ChannelKeeper, // may be replaced with middleware such as ics29 fee\n  app.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n  app.AccountKeeper, scopedICAHostKeeper, app.MsgServiceRouter(),\n)\n\n// Create Interchain Accounts AppModule\nicaModule := ica.NewAppModule(&app.ICAControllerKeeper, &app.ICAHostKeeper)\n\n// Create your Interchain Accounts authentication module\napp.ICAAuthKeeper = icaauthkeeper.NewKeeper(appCodec, keys[icaauthtypes.StoreKey], app.ICAControllerKeeper)\n\n// ICA auth AppModule\nicaAuthModule := icaauth.NewAppModule(appCodec, app.ICAAuthKeeper)\n\n// ICA auth IBC Module\nicaAuthIBCModule := icaauth.NewIBCModule(app.ICAAuthKeeper)\n\n// Create controller IBC application stack and host IBC module as desired\nicaControllerStack := icacontroller.NewIBCMiddleware(icaAuthIBCModule, app.ICAControllerKeeper)\nicaHostIBCModule := icahost.NewIBCModule(app.ICAHostKeeper)\n\n// Register host and authentication routes\nibcRouter.\n  AddRoute(icacontrollertypes.SubModuleName, icaControllerStack).\n  AddRoute(icahosttypes.SubModuleName, icaHostIBCModule).\n  AddRoute(icaauthtypes.ModuleName, icaControllerStack) // Note, the authentication module is routed to the top level of the middleware stack\n\n...\n\n// Register Interchain Accounts and authentication module AppModule's\napp.moduleManager = module.NewManager(\n  ...\n  icaModule,\n  icaAuthModule,\n)\n\n...\n\n// Add fee middleware to begin blocker logic\napp.moduleManager.SetOrderBeginBlockers(\n  ...\n  icatypes.ModuleName,\n  ...\n)\n\n// Add fee middleware to end blocker logic\napp.moduleManager.SetOrderEndBlockers(\n  ...\n  icatypes.ModuleName,\n  ...\n)\n\n// Add Interchain Accounts module InitGenesis logic\napp.moduleManager.SetOrderInitGenesis(\n  ...\n  icatypes.ModuleName,\n  ...\n)\n\n// initParamsKeeper init params keeper and its subspaces\nfunc initParamsKeeper(appCodec codec.BinaryCodec, legacyAmino *codec.LegacyAmino, key, tkey sdk.StoreKey) paramskeeper.Keeper {\n  ...\n  paramsKeeper.Subspace(icahosttypes.SubModuleName)\n  paramsKeeper.Subspace(icacontrollertypes.SubModuleName)\n  ...\n")),(0,o.kt)("h2",{id:"using-submodules-exclusively"},"Using submodules exclusively"),(0,o.kt)("p",null,"As described above, the Interchain Accounts application module is structured to support the ability of exclusively enabling controller or host functionality.\nThis can be achieved by simply omitting either controller or host ",(0,o.kt)("inlineCode",{parentName:"p"},"Keeper")," from the Interchain Accounts ",(0,o.kt)("inlineCode",{parentName:"p"},"NewAppModule")," constructor function, and mounting only the desired submodule via the ",(0,o.kt)("inlineCode",{parentName:"p"},"IBCRouter"),".\nAlternatively, submodules can be enabled and disabled dynamically using ",(0,o.kt)("a",{parentName:"p",href:"/v8/apps/interchain-accounts/parameters"},"on-chain parameters"),"."),(0,o.kt)("p",null,"The following snippets show basic examples of statically disabling submodules using ",(0,o.kt)("inlineCode",{parentName:"p"},"app.go"),"."),(0,o.kt)("h3",{id:"disabling-controller-chain-functionality"},"Disabling controller chain functionality"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Create Interchain Accounts AppModule omitting the controller keeper\nicaModule := ica.NewAppModule(nil, &app.ICAHostKeeper)\n\n// Create host IBC Module\nicaHostIBCModule := icahost.NewIBCModule(app.ICAHostKeeper)\n\n// Register host route\nibcRouter.AddRoute(icahosttypes.SubModuleName, icaHostIBCModule)\n")),(0,o.kt)("h3",{id:"disabling-host-chain-functionality"},"Disabling host chain functionality"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Create Interchain Accounts AppModule omitting the host keeper\nicaModule := ica.NewAppModule(&app.ICAControllerKeeper, nil)\n\n// Create your Interchain Accounts authentication module, setting up the Keeper, AppModule and IBCModule appropriately\napp.ICAAuthKeeper = icaauthkeeper.NewKeeper(appCodec, keys[icaauthtypes.StoreKey], app.ICAControllerKeeper)\nicaAuthModule := icaauth.NewAppModule(appCodec, app.ICAAuthKeeper)\nicaAuthIBCModule := icaauth.NewIBCModule(app.ICAAuthKeeper)\n\n// Create controller IBC application stack\nicaControllerStack := icacontroller.NewIBCMiddleware(icaAuthIBCModule, app.ICAControllerKeeper)\n\n// Register controller and authentication routes\nibcRouter.\n  AddRoute(icacontrollertypes.SubModuleName, icaControllerStack).\n  AddRoute(icaauthtypes.ModuleName, icaControllerStack) // Note, the authentication module is routed to the top level of the middleware stack\n")))}d.isMDXComponent=!0},42923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ica-pre-v6-4d8e6d3ab69d0ba84c9e3c047f0a0aeb.png"}}]);