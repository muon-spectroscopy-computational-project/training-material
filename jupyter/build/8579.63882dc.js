"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8579,3694],{88579:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var a=o(52657),n=o(13815),r=o(10537),i=o(1047),s=o(89876),l=o(48369),c=o(19621),d=o(92541),u=o(75550),p=o(11195),m=o(81734),g=o(74547),h=o(28877),b=o(4498),y=o(12198),f=o(90157),w=o(62471),_=o.n(w);const j=new RegExp("/(lab|notebooks|edit|consoles)\\/?");class v extends y.WebrtcProvider{constructor(e){super(`${e.room}${e.path}`,e.ymodel.ydoc,v.yProviderOptions(e)),this._initialRequest=null,this.awareness=e.ymodel.awareness;const t=`#${(0,b.jS)("--usercolor",(0,s.getRandomColor)().slice(1))}`,o=(0,b.jS)("--username",(0,s.getAnonymousUserName)()),a=this.awareness.getLocalState();a&&!a.name&&this.awareness.setLocalStateField("user",{name:o,color:t})}setPath(){}requestInitialContent(){if(this._initialRequest)return this._initialRequest.promise;let e=!1;return this._initialRequest=new g.PromiseDelegate,this.on("synced",(t=>{this._initialRequest&&(this._initialRequest.resolve(t.synced),e=!0)})),setTimeout((()=>{!e&&this._initialRequest&&this._initialRequest.resolve(!1)}),1e3),this._initialRequest.promise}putInitializedState(){}acquireLock(){return Promise.resolve(0)}releaseLock(e){}}var I;!function(e){e.yProviderOptions=function(e){return{signaling:e.signalingUrls&&e.signalingUrls.length?e.signalingUrls:["wss://signaling.yjs.dev","wss://y-webrtc-signaling-eu.herokuapp.com","wss://y-webrtc-signaling-us.herokuapp.com"],password:null,awareness:new f.GL(e.ymodel.ydoc),maxConns:20+Math.floor(15*Math.random()),filterBcConns:!0,peerOpts:{}}}}(v||(v={})),function(e){e.about="application:about",e.docmanagerDownload="docmanager:download",e.filebrowserDownload="filebrowser:download",e.copyShareableLink="filebrowser:share-main"}(I||(I={}));const C=[{id:"@jupyterlite/application-extension:about",autoStart:!0,requires:[d.ITranslator],optional:[n.ICommandPalette,c.IMainMenu],activate:(e,t,o,a)=>{const{commands:r}=e,i=t.load("jupyterlab"),s=i.__("Help");r.addCommand(I.about,{label:i.__("About %1",e.name),execute:()=>{const t=i.__("Version %1",e.version),o=_().createElement("span",{className:"jp-About-version-info"},_().createElement("span",{className:"jp-About-version"},t)),a=_().createElement("span",{className:"jp-About-header"},_().createElement("div",{className:"jp-About-header-info"},_().createElement(p.liteWordmark.react,{height:"auto",width:"196px"}),o)),r=_().createElement("span",{className:"jp-About-externalLinks"},_().createElement("a",{href:"https://github.com/jupyterlite/jupyterlite/graphs/contributors",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat"},i.__("CONTRIBUTOR LIST")),_().createElement("a",{href:"https://github.com/jupyterlite/jupyterlite",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat"},i.__("JUPYTERLITE ON GITHUB"))),s=_().createElement("span",{className:"jp-About-copyright"},i.__("© 2021 JupyterLite Contributors")),l=_().createElement("div",{className:"jp-About-body"},r,s);return(0,n.showDialog)({title:a,body:l,buttons:[n.Dialog.createButton({label:i.__("Dismiss"),className:"jp-About-button jp-mod-reject jp-mod-styled"})]})}}),o&&o.addItem({command:I.about,category:s}),a&&a.helpMenu.addGroup([{command:I.about}],0)}},{id:"@jupyterlite/application-extension:docprovider",provides:s.IDocumentProviderFactory,activate:e=>{const t=(0,b.jS)("--room","").trim(),o=window.location.host,a="true"===r.PageConfig.getOption("collaborative")&&t,n=JSON.parse(r.PageConfig.getOption("fullWebRtcSignalingUrls")||"null"),i=`${o}-${t||g.UUID.uuid4()}`;return e=>a?new v({room:i,...e,...n&&n.length?{signalingUrls:n}:{}}):new s.ProviderMock}},{id:"@jupyterlite/application-extension:download",autoStart:!0,requires:[d.ITranslator,i.IDocumentManager],optional:[n.ICommandPalette,l.IFileBrowserFactory],activate:(e,t,o,a,r)=>{const i=t.load("jupyterlab"),{commands:s,serviceManager:l,shell:c}=e,{contents:d}=l,p=()=>{const{currentWidget:e}=c;return!(!e||!o.contextForWidget(e))},g=(e,t)=>{const o=document.createElement("a");o.href=`data:text/json;charset=utf-8,${encodeURIComponent(e)}`,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)},h=async e=>{const t=await d.get(e,{content:!0});return"notebook"===t.type||-1!==t.mimetype.indexOf("json")?JSON.stringify(t.content,null,2):t.content};s.addCommand(I.docmanagerDownload,{label:i.__("Download"),caption:i.__("Download the file to your computer"),isEnabled:p,execute:async()=>{const e=c.currentWidget;if(!p()||!e)return;const t=o.contextForWidget(e);if(!t)return(0,n.showDialog)({title:i.__("Cannot Download"),body:i.__("No context found for current widget!"),buttons:[n.Dialog.okButton({label:i.__("OK")})]});const a=await h(t.path);g(a,t.path)}});const b=i.__("File Operations");if(a&&a.addItem({command:I.docmanagerDownload,category:b}),r){const{tracker:e}=r;s.addCommand(I.filebrowserDownload,{execute:async()=>{const t=e.currentWidget;t&&(0,m.toArray)(t.selectedItems()).forEach((async e=>{if("directory"===e.type)return;const t=await h(e.path);g(t,e.name)}))},icon:u.downloadIcon.bindprops({stylesheet:"menuItem"}),label:i.__("Download")})}}},{id:"@jupyterlite/application-extension:logo",optional:[a.ILabShell],autoStart:!0,activate:(e,t)=>{if(!t)return;const o=new h.Widget;p.liteIcon.element({container:o.node,elementPosition:"center",margin:"2px 2px 2px 8px",height:"auto",width:"16px"}),o.id="jp-MainLogo",t.add(o,"top",{rank:0})}},{id:"@jupyterlite/application-extension:notify-commands",autoStart:!0,optional:[a.ILabShell],activate:(e,t)=>{t&&t.layoutModified.connect((()=>{e.commands.notifyCommandChanged()}))}},{id:"@jupyterlite/application-extension:opener",autoStart:!0,requires:[a.IRouter,i.IDocumentManager],activate:(e,t,o)=>{const{commands:a}=e,n="router:tree";a.addCommand(n,{execute:n=>{var i;const s=n,{request:l,search:c}=s;if(null!==(i=l.match(j))&&void 0!==i&&!i)return;const d=new URLSearchParams(c).getAll("path");if(!d)return;const u=d.map((e=>decodeURIComponent(e)));e.restored.then((()=>{const e=r.PageConfig.getOption("retroPage"),[n]=u;switch(e){case"consoles":return void a.execute("console:create",{path:n});case"notebooks":return void o.open(n,"Notebook",void 0,{ref:"_noref"});case"edit":return void o.open(n,"Editor",void 0,{ref:"_noref"});default:{u.forEach((e=>o.open(e)));const e=new URL(r.URLExt.join(r.PageConfig.getBaseUrl(),l));e.searchParams.delete("path");const{pathname:a,search:n}=e;t.navigate(`${a}${n}`,{skipRouting:!0});break}}}))}}),t.register({command:n,pattern:j})}},{id:"@jupyterlite/application-extension:share-file",requires:[l.IFileBrowserFactory,d.ITranslator],autoStart:!0,activate:(e,t,o)=>{const a=o.load("jupyterlab"),{commands:i}=e,{tracker:s}=t,l=(0,b.jS)("--room","").trim(),c="true"===r.PageConfig.getOption("collaborative")&&l;i.addCommand(I.copyShareableLink,{execute:()=>{const e=s.currentWidget;if(!e)return;const t=new URL(r.URLExt.join(r.PageConfig.getBaseUrl(),"lab"));(0,m.toArray)((0,m.filter)(e.selectedItems(),(e=>"directory"!==e.type))).forEach((e=>{t.searchParams.append("path",e.path)})),c&&t.searchParams.append("room",l),n.Clipboard.copyToSystem(t.href)},isVisible:()=>!!s.currentWidget&&(0,m.toArray)(s.currentWidget.selectedItems()).length>=1,icon:u.linkIcon.bindprops({stylesheet:"menuItem"}),label:a.__("Copy Shareable Link")})}}]}}]);
//# sourceMappingURL=8579.63882dc.js.map