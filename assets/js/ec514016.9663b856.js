"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Handling Upgrades",sidebar_label:"Handling Upgrades",sidebar_position:5,slug:"/ibc/light-clients/upgrades"},l="Handling upgrades",o={unversionedId:"light-clients/developer-guide/upgrades",id:"version-v7.3.x/light-clients/developer-guide/upgrades",title:"Handling Upgrades",description:"It is vital that high-value IBC clients can upgrade along with their underlying chains to avoid disruption to the IBC ecosystem. Thus, IBC client developers will want to implement upgrade functionality to enable clients to maintain connections and channels even across chain upgrades.",source:"@site/versioned_docs/version-v7.3.x/03-light-clients/01-developer-guide/05-upgrades.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/upgrades",permalink:"/v7/ibc/light-clients/upgrades",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:5,frontMatter:{title:"Handling Upgrades",sidebar_label:"Handling Upgrades",sidebar_position:5,slug:"/ibc/light-clients/upgrades"},sidebar:"defaultSidebar",previous:{title:"Handling Updates and Misbehaviour",permalink:"/v7/ibc/light-clients/updates-and-misbehaviour"},next:{title:"Existence/Non-Existence Proofs",permalink:"/v7/ibc/light-clients/proofs"}},s={},c=[{value:"Implementing <code>VerifyUpgradeAndUpdateState</code>",id:"implementing-verifyupgradeandupdatestate",level:2},{value:"Upgrade path",id:"upgrade-path",level:3},{value:"Chain specific vs client specific client parameters",id:"chain-specific-vs-client-specific-client-parameters",level:2},{value:"Security",id:"security",level:2},{value:"Document potential client parameter conflicts during upgrades",id:"document-potential-client-parameter-conflicts-during-upgrades",level:3}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"handling-upgrades"},"Handling upgrades"),(0,i.kt)("p",null,"It is vital that high-value IBC clients can upgrade along with their underlying chains to avoid disruption to the IBC ecosystem. Thus, IBC client developers will want to implement upgrade functionality to enable clients to maintain connections and channels even across chain upgrades."),(0,i.kt)("h2",{id:"implementing-verifyupgradeandupdatestate"},"Implementing ",(0,i.kt)("inlineCode",{parentName:"h2"},"VerifyUpgradeAndUpdateState")),(0,i.kt)("p",null,"The IBC protocol allows client implementations to provide a path to upgrading clients given the upgraded ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState"),", upgraded ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsensusState")," and proofs for each. This path is provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyUpgradeAndUpdateState")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// NOTE: proof heights are not included as upgrade to a new revision is expected to pass only on the last height committed by the current revision. Clients are responsible for ensuring that the planned last height of the current revision is somehow encoded in the proof verification process.\n// This is to ensure that no premature upgrades occur, since upgrade plans committed to by the counterparty may be cancelled or modified before the last planned height.\n// If the upgrade is verified, the upgraded client and consensus states must be set in the client store.\nfunc (cs ClientState) VerifyUpgradeAndUpdateState(\n  ctx sdk.Context,\n  cdc codec.BinaryCodec,\n  store sdk.KVStore,\n  newClient ClientState,\n  newConsState ConsensusState,\n  proofUpgradeClient,\n  proofUpgradeConsState []byte,\n) error\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/02-client-refactor-beta1/modules/light-clients/07-tendermint/upgrade.go#L27"},"Tendermint light client implementation")," as an example for implementation.")),(0,i.kt)("p",null,"It is important to note that light clients ",(0,i.kt)("strong",{parentName:"p"},"must")," handle all management of client and consensus states including the setting of updated ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsensusState")," in the client store. This can include verifying that the submitted upgraded ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState")," is of a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState")," type, that the height of the upgraded client is not greater than the height of the current client (in order to preserve BFT monotonic time), or that certain parameters which should not be changed have not been altered in the upgraded ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState"),"."),(0,i.kt)("p",null,"Developers must ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgUpgradeClient")," does not pass until the last height of the old chain has been committed, and after the chain upgrades, the ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgUpgradeClient")," should pass once and only once on all counterparty clients."),(0,i.kt)("h3",{id:"upgrade-path"},"Upgrade path"),(0,i.kt)("p",null,"Clients should have ",(0,i.kt)("strong",{parentName:"p"},"prior knowledge of the merkle path")," that the upgraded client and upgraded consensus states will use. The height at which the upgrade has occurred should also be encoded in the proof. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Tendermint client implementation accomplishes this by including an ",(0,i.kt)("inlineCode",{parentName:"p"},"UpgradePath")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState")," itself, which is used along with the upgrade height to construct the merkle path under which the client state and consensus state are committed.")),(0,i.kt)("h2",{id:"chain-specific-vs-client-specific-client-parameters"},"Chain specific vs client specific client parameters"),(0,i.kt)("p",null,"Developers should maintain the distinction between client parameters that are uniform across every valid light client of a chain (chain-chosen parameters), and client parameters that are customizable by each individual client (client-chosen parameters); since this distinction is necessary to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZeroCustomFields")," method in the ",(0,i.kt)("a",{parentName:"p",href:"/v7/ibc/light-clients/client-state"},(0,i.kt)("inlineCode",{parentName:"a"},"ClientState")," interface"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Utility function that zeroes out any client customizable fields in client state\n// Ledger enforced fields are maintained while all custom fields are zero values\n// Used to verify upgrades\nfunc (cs ClientState) ZeroCustomFields() ClientState\n")),(0,i.kt)("p",null,"Developers must ensure that the new client adopts all of the new client parameters that must be uniform across every valid light client of a chain (chain-chosen parameters), while maintaining the client parameters that are customizable by each individual client (client-chosen parameters) from the previous version of the client. ",(0,i.kt)("inlineCode",{parentName:"p"},"ZeroCustomFields")," is a useful utility function to ensure only chain specific fields are updated during upgrades."),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("p",null,"Upgrades must adhere to the IBC Security Model. IBC does not rely on the assumption of honest relayers for correctness. Thus users should not have to rely on relayers to maintain client correctness and security (though honest relayers must exist to maintain relayer liveness). While relayers may choose any set of client parameters while creating a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState"),", this still holds under the security model since users can always choose a relayer-created client that suits their security and correctness needs or create a client with their desired parameters if no such client exists."),(0,i.kt)("p",null,"However, when upgrading an existing client, one must keep in mind that there are already many users who depend on this client's particular parameters. ",(0,i.kt)("strong",{parentName:"p"},"We cannot give the upgrading relayer free choice over these parameters once they have already been chosen. This would violate the security model")," since users who rely on the client would have to rely on the upgrading relayer to maintain the same level of security."),(0,i.kt)("p",null,"Thus, developers must make sure that their upgrade mechanism allows clients to upgrade the chain-specified parameters whenever a chain upgrade changes these parameters (examples in the Tendermint client include ",(0,i.kt)("inlineCode",{parentName:"p"},"UnbondingPeriod"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TrustingPeriod"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UpgradePath"),", etc), while ensuring that the relayer submitting the ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgUpgradeClient")," cannot alter the client-chosen parameters that the users are relying upon (examples in Tendermint client include ",(0,i.kt)("inlineCode",{parentName:"p"},"TrustLevel"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MaxClockDrift"),", etc). The previous paragraph discusses how ",(0,i.kt)("inlineCode",{parentName:"p"},"ZeroCustomFields")," helps achieve this."),(0,i.kt)("h3",{id:"document-potential-client-parameter-conflicts-during-upgrades"},"Document potential client parameter conflicts during upgrades"),(0,i.kt)("p",null,"Counterparty clients can upgrade securely by using all of the chain-chosen parameters from the chain-committed ",(0,i.kt)("inlineCode",{parentName:"p"},"UpgradedClient")," and preserving all of the old client-chosen parameters. This enables chains to securely upgrade without relying on an honest relayer, however it can in some cases lead to an invalid final ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState")," if the new chain-chosen parameters clash with the old client-chosen parameter. This can happen in the Tendermint client case if the upgrading chain lowers the ",(0,i.kt)("inlineCode",{parentName:"p"},"UnbondingPeriod")," (chain-chosen) to a duration below that of a counterparty client's ",(0,i.kt)("inlineCode",{parentName:"p"},"TrustingPeriod")," (client-chosen). Such cases should be clearly documented by developers, so that chains know which upgrades should be avoided to prevent this problem. The final upgraded client should also be validated in ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyUpgradeAndUpdateState")," before returning to ensure that the client does not upgrade to an invalid ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState"),"."))}h.isMDXComponent=!0}}]);