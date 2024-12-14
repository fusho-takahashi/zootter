import{a as J}from"./chunk-BWKZS2ZY.js";import{E as b,b as y,c as q,h as Z}from"./chunk-HQ3KQCWE.js";import{A as N,Ab as B,Ca as U,G as L,K as M,M as v,Mb as V,Nb as G,O as x,T as O,Xa as d,Z as I,aa as P,ba as D,da as w,f as T,fa as g,ga as u,ib as z,jb as H,nc as Y,p as c,q as A,u as m,ua as k,ub as W,wb as $,wc as R,za as S,zb as j}from"./chunk-T223ME74.js";var nt=["*"],C;function ot(){if(C===void 0&&(C=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(C=i.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return C}function p(i){return ot()?.createHTML(i)||i}function K(i){return Error(`Unable to find icon with the name "${i}"`)}function it(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Q(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function X(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var l=class{url;svgText;options;svgElement;constructor(r,t,e){this.url=r,this.svgText=t,this.options=e}},st=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new l(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let s=this._sanitizer.sanitize(d.HTML,n);if(!s)throw X(n);let a=p(s);return this._addSvgIconConfig(t,e,new l("",a,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new l(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(d.HTML,e);if(!o)throw X(e);let s=p(o);return this._addSvgIconSetConfig(t,new l("",s,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(d.RESOURCE_URL,t);if(!e)throw Q(t);let n=this._cachedIconsByUrl.get(e);return n?c(E(n)):this._loadSvgIconFromConfig(new l(t,null)).pipe(I(o=>this._cachedIconsByUrl.set(e,o)),m(o=>E(o)))}getNamedSvgIcon(t,e=""){let n=tt(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(e);return s?this._getSvgFromIconSetConfigs(t,s):A(K(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?c(E(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(m(e=>E(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return c(n);let o=e.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(L(a=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(d.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(h)),c(null)})));return N(o).pipe(m(()=>{let s=this._extractIconWithNameFromAnySet(t,e);if(!s)throw K(t);return s}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,t,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(I(e=>t.svgText=e),m(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?c(null):this._fetchIcon(t).pipe(I(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,n);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),n);let a=this._svgElementFromString(p("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(p("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){let{name:s,value:a}=n[o];s!=="id"&&e.setAttribute(s,a)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw it();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let s=this._sanitizer.sanitize(d.RESOURCE_URL,e);if(!s)throw Q(e);let a=this._inProgressUrlFetches.get(s);if(a)return a;let f=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(m(h=>p(h)),x(()=>this._inProgressUrlFetches.delete(s)),O());return this._inProgressUrlFetches.set(s,f),f}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(tt(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return rt(o)?new l(o.url,null,o.options):new l(o,null)}}static \u0275fac=function(e){return new(e||i)(g(q,8),g(Z),g(R,8),g(S))};static \u0275prov=P({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function E(i){return i.cloneNode(!0)}function tt(i,r){return i+":"+r}function rt(i){return!!(i.url&&i.options)}var at=new w("MAT_ICON_DEFAULT_OPTIONS"),ct=new w("mat-icon-location",{providedIn:"root",factory:lt});function lt(){let i=u(R),r=i?i.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}var et=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ut=et.map(i=>`[${i}]`).join(", "),ft=/^url\(['"]?#(.*?)['"]?\)$/,Mt=(()=>{class i{_elementRef=u(U);_iconRegistry=u(st);_location=u(ct);_errorHandler=u(S);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName;_svgNamespace;_previousPath;_elementsWithExternalReferences;_currentIconFetch=T.EMPTY;constructor(){let t=u(new k("aria-hidden"),{optional:!0}),e=u(at,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(s=>{o.setAttribute(s.name,`url('${t}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ut),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)et.forEach(s=>{let a=e[o],f=a.getAttribute(s),h=f?f.match(ft):null;if(h){let _=n.get(a);_||(_=[],n.set(a,_)),_.push({name:s,value:h[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(M(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=z({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&($("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),B(n.color?"mat-"+n.color:""),j("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Y],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[W],ngContentSelectors:nt,decls:1,vars:0,template:function(e,n){e&1&&(V(),G(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}return i})(),xt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=H({type:i});static \u0275inj=D({imports:[b,b]})}return i})();var F=[{id:"mammal",name:"\u54FA\u4E73\u985E",description:"\u30D2\u30C8\u3068\u3044\u3063\u3057\u3087\u3060\u3088\uFF01",createdAt:"2024-11-30T15:00:00Z",animals:["araiguma","cheetah","kaba","kuma","lion","ookami","usagi","zou"]},{id:"bird",name:"\u9CE5\u985E",description:"\u7A7A\u3092\u98DB\u3076\u3053\u3068\u304C\u3067\u304D\u308B\u3088\uFF01",createdAt:"2024-11-30T15:00:00Z",animals:["duck","niwatori"]},{id:"herbivore",name:"\u8349\u98DF\u52D5\u7269",description:"\u8349\u3092\u98DF\u3079\u308B\u306E\u304C\u3060\u3044\u3059\u304D\uFF01",createdAt:"2024-11-30T15:00:00Z",animals:["usagi","zou"]},{id:"carnivore",name:"\u8089\u98DF\u52D5\u7269",description:"\u3053\u308F\u304C\u3089\u308C\u308B\u3051\u3069\u3001\u3084\u3055\u3057\u3044\u3093\u3060\u3088\uFF01",createdAt:"2024-11-30T15:00:00Z",animals:["cheetah","lion","ookami"]},{id:"omnivore",name:"\u96D1\u98DF\u52D5\u7269",description:"\u306A\u3093\u3067\u3082\u305F\u3079\u3061\u3083\u3046\u3088\uFF01",createdAt:"2024-11-30T15:00:00Z",animals:["araiguma","duck","kaba","kuma","niwatori"]}];function ht(){return c({lists:F}).pipe(v(500))}function mt(i){let r=F.find(t=>t.id===i);if(r!==void 0)return c({id:r.id,name:r.name,animals:r.animals,description:r.description}).pipe(v(500));throw new y({status:404,statusText:"Not Found"})}function dt(i,r,t){let e=F.find(o=>o.id===i)?.animals,n=J.filter(o=>e?.includes(o.authorId));if(n!==void 0)return c({offset:r,limit:t,totalCount:n.length,posts:n.slice(r,r+t)}).pipe(v(500));throw new y({status:404,statusText:"Not Found"})}var Wt={getLists:ht,getListDetail:mt,getListPosts:dt};export{Wt as a,Mt as b,xt as c};
