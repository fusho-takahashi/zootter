import{a as U,b as N}from"./chunk-U6D7DC65.js";import{a as b}from"./chunk-BWKZS2ZY.js";import"./chunk-HQ3KQCWE.js";import{$a as P,Fb as w,Gb as A,Hb as f,Jb as _,Kb as E,M as x,aa as n,ac as F,dc as S,e as m,ga as s,ib as c,na as j,oa as D,p as L,pc as I,rb as d,t as l,xb as v}from"./chunk-T223ME74.js";var i=class t{posts=d([]);totalPostCount=d(0);loading=d(!1);updatePosts=o=>this.posts.update(e=>[...e,...o]);setTotalPostCount=o=>this.totalPostCount.set(o);loadingStart=()=>this.loading.set(!0);loadingEnd=()=>this.loading.set(!1);state={posts:this.posts.asReadonly(),postCount:I(()=>this.posts().length),loading:this.loading.asReadonly(),isAllLoaded:I(()=>this.posts().length>=this.totalPostCount())};static \u0275fac=function(e){return new(e||t)};static \u0275prov=n({token:t,factory:t.\u0275fac})};function k(t,o){return L({offset:t,limit:o,totalCount:b.length,posts:b.slice(t,t+o)}).pipe(x(500))}var g={getPosts:k};var a=class t{store=s(i);execute(){return m(this,null,function*(){this.store.loadingStart();try{let o=yield l(g.getPosts(0,10));this.store.updatePosts(o.posts),this.store.setTotalPostCount(o.totalCount)}finally{this.store.loadingEnd()}})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=n({token:t,factory:t.\u0275fac})};var p=class t{store=s(i);execute(){return m(this,null,function*(){let o=this.store.state.postCount();this.store.loadingStart();let e=yield l(g.getPosts(o,10));this.store.updatePosts(e.posts),this.store.setTotalPostCount(e.totalCount),this.store.loadingEnd()})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=n({token:t,factory:t.\u0275fac})};function O(){return[a,p]}function R(){return{init:s(a),loadMore:s(p)}}var h=class t{usecases=R();state=s(i).state;ngOnInit(){this.usecases.init.execute()}loadMore(){this.usecases.loadMore.execute()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=c({type:t,selectors:[["app-timeline"]],features:[S([O(),i])],decls:5,vars:3,consts:[[3,"posts"],[3,"loadMore","isLoading","isAllLoaded"]],template:function(e,r){if(e&1){let y=_();F(0)(1)(2),f(3,"app-post-list",0),w(4,"app-load-more",1),E("loadMore",function(){return j(y),D(r.loadMore())}),A()}if(e&2){let y=r.state.posts(),M=r.state.loading(),V=r.state.isAllLoaded();P(3),v("posts",y),P(),v("isLoading",M)("isAllLoaded",V)}},dependencies:[N,U],styles:["[_nghost-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}"],changeDetection:0})};var C=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=c({type:t,selectors:[["app-home-page"]],decls:1,vars:0,template:function(e,r){e&1&&f(0,"app-timeline")},dependencies:[h],styles:["[_nghost-%COMP%]{display:block;height:100%}"],changeDetection:0})};var jt=[{path:"",component:C}];export{jt as default};
