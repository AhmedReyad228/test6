"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[188],{2188:(T,x,c)=>{c.r(x),c.d(x,{ProductsComponent:()=>V});var g=c(6814),_=c(9686),C=c(1120),p=c(95),d=c(6787),e=c(4769);function l(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function m(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function M(i,a){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,l,4,2,"a",10),e.YNc(2,m,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function w(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))})("click",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function Z(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function D(i,a){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,w,6,5,"a",10),e.YNc(2,Z,7,5,"ng-container",15),e.qZA()),2&i){const t=a.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function U(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function E(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function S(i,a){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,U,4,2,"a",10),e.YNc(2,E,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function N(i,a){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,M,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,D,3,6,"li",7),e.YNc(5,S,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class I{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let n in this.instances[a.id])a[n]!==this.instances[a.id][n]&&(this.instances[a.id][n]=a[n],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let n=this.instances[a];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);return t}}const O=Number.MAX_SAFE_INTEGER;let F=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let v=n.id||this.service.defaultId();return this.state[v]?this.state[v].slice:t}let u,h,s=n.totalItems&&n.totalItems!==t.length,r=this.createInstance(t,n),o=r.id,f=r.itemsPerPage,b=this.service.register(r);if(!s&&t instanceof Array){if(f=+f||O,u=(r.currentPage-1)*f,h=u+f,this.stateIsIdentical(o,t,u,h))return this.state[o].slice;{let L=t.slice(u,h);return this.saveState(o,t,L,u,h),this.service.change.emit(o),L}}return b&&this.service.change.emit(o),this.saveState(o,t,t,u,h),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const s=["itemsPerPage","currentPage"].filter(r=>!(r in t));if(0<s.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${s.join(", ")}`)}saveState(t,n,s,r,o){this.state[t]={collection:n,size:n.length,slice:s,start:r,end:o}}stateIsIdentical(t,n,s,r){let o=this.state[t];return!(!o||o.size!==n.length||o.start!==s||o.end!==r)&&o.slice.every((h,f)=>h===n[s+f])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(I,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),H=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(s=>{this.id===s&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,s,r){r=+r;let o=[];const u=Math.max(Math.ceil(s/n),1),h=Math.ceil(r/2),f=t<=h,b=u-h<t,v=!f&&!b;let L=r<u,P=1;for(;P<=u&&P<=r;){let k,y=this.calculatePageNumber(P,t,r,u);k=L&&(2===P&&(v||b)||P===r-1&&(v||f))?"...":y,o.push({label:k,value:y}),P++}return o}calculatePageNumber(t,n,s,r){let o=Math.ceil(s/2);return t===s?r:1===t?t:s<r?r-o<n?r-s+t:o<n?n-o+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(I),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function A(i){return!!i&&"false"!==i}let B=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=A(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=A(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=A(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(r){return n.pageChange.emit(r)})("pageBoundsCorrection",function(r){return n.pageBoundsCorrection.emit(r)}),e.TgZ(2,"nav",2),e.YNc(3,N,6,8,"ul",3),e.qZA()()),2&t){const s=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&s.pages.length<=1))}},dependencies:[H,g.O5,g.sg,g.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),R=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[I],imports:[[g.ez]]}),i})();var J=c(6247),Y=c(6286),z=c(2425),j=c(9196);function $(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"span",20),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw();return e.KtG(r.addTowish(s._id))}),e._UZ(1,"i",21),e.qZA()}}function Q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"span",20),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw();return e.KtG(r.removeProduct(s._id))}),e._UZ(1,"i",22),e.qZA()}}function W(i,a){if(1&i&&e._UZ(0,"i",23),2&i){const t=a.$implicit,n=e.oxw().$implicit;e.ekj("rating-color",n.ratingsAverage>=t)}}const q=function(i){return["/Ecommerce/details",i]},K=function(){return[1,2,3,4,5]};function G(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7),e.YNc(2,$,2,0,"span",8),e.YNc(3,Q,2,0,"span",8),e.TgZ(4,"div",9)(5,"div",10),e._UZ(6,"img",11),e.qZA(),e.TgZ(7,"h5",12),e._uU(8),e.qZA(),e.TgZ(9,"h4",13),e._uU(10),e.ALo(11,"termtext"),e.qZA(),e.TgZ(12,"div",14)(13,"span",15),e._uU(14),e.ALo(15,"currency"),e.qZA(),e.TgZ(16,"div"),e.YNc(17,W,1,2,"i",16),e.TgZ(18,"span",17),e._uU(19),e.qZA()()()(),e.TgZ(20,"button",18,19),e.NdJ("click",function(){const r=e.CHM(t).$implicit,o=e.MAs(21),u=e.oxw();return e.KtG(u.addToCart(r._id,o))}),e._uU(22," +Add To Cart "),e.qZA()()()}if(2&i){const t=a.$implicit,n=e.oxw();e.xp6(2),e.Q6J("ngIf",!n.wishListData.includes(t._id)),e.xp6(1),e.Q6J("ngIf",n.wishListData.includes(t._id)),e.xp6(1),e.Q6J("routerLink",e.VKq(16,q,t._id)),e.xp6(2),e.Q6J("src",t.imageCover,e.LSH)("alt",t.title),e.xp6(2),e.Oqu(t.category.name),e.xp6(2),e.hij(" ",e.xi3(11,10,t.title,2)," "),e.xp6(4),e.Oqu(e.xi3(15,13,t.price,"USD")),e.xp6(3),e.Q6J("ngForOf",e.DdM(18,K)),e.xp6(2),e.Oqu(t.ratingsAverage)}}const X=function(i,a,t){return{id:"productPaginate",itemsPerPage:i,currentPage:a,totalItems:t}};let V=(()=>{class i{constructor(t,n,s,r,o){this._ProductAPIService=t,this._CartService=n,this._ToastrService=s,this._Renderer2=r,this._WishlistService=o,this.products=[],this.searchTerm="",this.wishListData=[],this.pageSize=0,this.currentPage=1,this.total=0}ngOnInit(){this._ProductAPIService.getProducts().subscribe({next:t=>{this.products=t.data,this.pageSize=t.metadata.limit,this.currentPage=t.metadata.currentPage,this.total=t.results},error:t=>{console.log(t)}}),this._WishlistService.getUserWishList().subscribe({next:t=>{const n=t.data.map(s=>s._id);this.wishListData=n}})}addToCart(t,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.addProduct(t).subscribe({next:s=>{this._ToastrService.success(s.message),this._Renderer2.removeAttribute(n,"disabled"),this._CartService.cartNumber.next(s.numOfCartItems)},error:s=>{this._Renderer2.removeAttribute(n,"disabled")}})}pageChanged(t){this._ProductAPIService.getProducts(t).subscribe({next:n=>{this.products=n.data,this.pageSize=n.metadata.limit,this.currentPage=n.metadata.currentPage,this.total=n.results},error:n=>{console.log(n)}})}addTowish(t){this._WishlistService.addToWishList(t).subscribe({next:n=>{this._ToastrService.success(n.message),this.wishListData=n.data,this._WishlistService.wishNum.next(n.data.length)},error:n=>{console.log(n)}})}removeProduct(t){this._WishlistService.removeProduct(t).subscribe({next:n=>{this._ToastrService.success(n.message),this.wishListData=n.data,this._WishlistService.wishNum.next(n.data.length)},error:n=>{console.log(n)}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(J.j),e.Y36(Y.N),e.Y36(z._W),e.Y36(e.Qsj),e.Y36(j.M))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-products"]],standalone:!0,features:[e.jDz],decls:8,vars:16,consts:[[1,"my-4"],["type","search","placeholder","Search...",1,"form-control","mx-auto","mb-4","w-50",3,"ngModel","ngModelChange"],[1,"row","g-4","justify-content-center"],["class","col-md-2",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-4"],["id","productPaginate","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-md-2"],[1,"product","position-relative"],[3,"click",4,"ngIf"],[1,"cursor-pointer",3,"routerLink"],[1,"p-2"],[1,"w-100",3,"src","alt"],[1,"h6","mt-1","text-danger"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"font-sm"],["class","fas fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"btn-main","mx-auto","d-block","w-100",3,"click"],["addTo",""],[3,"click"],[1,"fa-regular","fa-heart","heart"],[1,"fa-solid","fa-heart","heart2"],[1,"fas","fa-star"]],template:function(n,s){1&n&&(e.TgZ(0,"section",0)(1,"input",1),e.NdJ("ngModelChange",function(o){return s.searchTerm=o}),e.qZA(),e.TgZ(2,"div",2),e.YNc(3,G,23,19,"div",3),e.ALo(4,"paginate"),e.ALo(5,"search"),e.qZA(),e.TgZ(6,"div",4)(7,"pagination-controls",5),e.NdJ("pageChange",function(o){return s.pageChanged(o)})("pageBoundsCorrection",function(o){return s.pageChanged(o)}),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("ngModel",s.searchTerm),e.xp6(2),e.Q6J("ngForOf",e.xi3(4,6,e.xi3(5,9,s.products,s.searchTerm),e.kEZ(12,X,s.pageSize,s.currentPage,s.total))),e.xp6(4),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0))},dependencies:[g.ez,g.sg,g.O5,g.H9,_.Y,C.rH,p.u5,p.Fj,p.JJ,p.On,d.C,R,F,B],styles:[".product[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%]{transform:translateY(0)}"]})}return i})()},6286:(T,x,c)=>{c.d(x,{N:()=>p});var g=c(5619),_=c(4769),C=c(9862);let p=(()=>{class d{constructor(l){this._HttpClient=l,this.cartNumber=new g.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/cart"}addProduct(l){return this._HttpClient.post(this.baseUrl,{productId:l})}getUserCart(){return this._HttpClient.get(this.baseUrl)}updateCart(l,m){return this._HttpClient.put(this.baseUrl+`/${l}`,{count:m})}removeProduct(l){return this._HttpClient.delete(this.baseUrl+`/${l}`)}clearUserCart(){return this._HttpClient.delete(this.baseUrl)}checkoutToPay(l,m){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${l}?url=https://github.com`,{shippingAddress:m})}static#e=this.\u0275fac=function(m){return new(m||d)(_.LFG(C.eN))};static#t=this.\u0275prov=_.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},6247:(T,x,c)=>{c.d(x,{j:()=>C});var g=c(4769),_=c(9862);let C=(()=>{class p{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(e=1){return this._HttpClient.get(this.baseUrl+`products?page=${e}`)}productDetails(e){return this._HttpClient.get(this.baseUrl+`products/${e}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getSpecificCategory(e){return this._HttpClient.get(this.baseUrl+`categories/${e}`)}getBrands(){return this._HttpClient.get(this.baseUrl+"brands")}static#e=this.\u0275fac=function(l){return new(l||p)(g.LFG(_.eN))};static#t=this.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},9196:(T,x,c)=>{c.d(x,{M:()=>p});var g=c(5619),_=c(4769),C=c(9862);let p=(()=>{class d{constructor(l){this._HttpClient=l,this.wishNum=new g.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/wishlist"}addToWishList(l){return this._HttpClient.post(this.baseUrl,{productId:l})}getUserWishList(){return this._HttpClient.get(this.baseUrl)}removeProduct(l){return this._HttpClient.delete(this.baseUrl+`/${l}`)}static#e=this.\u0275fac=function(m){return new(m||d)(_.LFG(C.eN))};static#t=this.\u0275prov=_.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()}}]);