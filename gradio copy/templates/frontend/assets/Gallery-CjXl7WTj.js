import{I as le,C as et}from"./Index-BXfYA563.js";import{B as tt}from"./BlockLabel-CR_JnqLq.js";import{E as lt}from"./Empty-CEggepS0.js";import{S as nt}from"./ShareButton-ZdEp2dZh.js";import{D as it}from"./Download-DVtk-Jv3.js";import{a as oe,M as me}from"./Minimize-X5PPawdt.js";import{I as Te}from"./Image-Bsh8Umrh.js";import{P as De}from"./Play-B0Q0U1Qz.js";import{I as Re}from"./IconButtonWrapper-Cbc1cIwN.js";import"./index-6jqsFzvP.js";/* empty css                                             */import{M as rt}from"./ModifyUpload-rVpOlAnG.js";import{I as fe}from"./Image-BBdpp_gM.js";/* empty css                                                   */import{V as se}from"./Video-HiNqX51L.js";import{u as ot}from"./Blocks-C2CgG-Bp.js";import"./Community-CC3ywblm.js";import"./svelte/svelte.js";import"./Undo-CpmTQw3B.js";import"./DownloadLink-BVP5imSI.js";import"./file-url-DoRRNcdi.js";import"./hls-CnVhpNcu.js";import"./Button-BEa7U3jO.js";var he=Object.prototype.hasOwnProperty;function ge(n,e,l){for(l of n.keys())if(Q(l,e))return l}function Q(n,e){var l,t,i;if(n===e)return!0;if(n&&e&&(l=n.constructor)===e.constructor){if(l===Date)return n.getTime()===e.getTime();if(l===RegExp)return n.toString()===e.toString();if(l===Array){if((t=n.length)===e.length)for(;t--&&Q(n[t],e[t]););return t===-1}if(l===Set){if(n.size!==e.size)return!1;for(t of n)if(i=t,i&&typeof i=="object"&&(i=ge(e,i),!i)||!e.has(i))return!1;return!0}if(l===Map){if(n.size!==e.size)return!1;for(t of n)if(i=t[0],i&&typeof i=="object"&&(i=ge(e,i),!i)||!Q(t[1],e.get(i)))return!1;return!0}if(l===ArrayBuffer)n=new Uint8Array(n),e=new Uint8Array(e);else if(l===DataView){if((t=n.byteLength)===e.byteLength)for(;t--&&n.getInt8(t)===e.getInt8(t););return t===-1}if(ArrayBuffer.isView(n)){if((t=n.byteLength)===e.byteLength)for(;t--&&n[t]===e[t];);return t===-1}if(!l||typeof n=="object"){t=0;for(l in n)if(he.call(n,l)&&++t&&!he.call(e,l)||!(l in e)||!Q(n[l],e[l]))return!1;return Object.keys(e).length===t}}return n!==n&&e!==e}async function ft(n){return n?`<div style="display: flex; flex-wrap: wrap; gap: 16px">${(await Promise.all(n.map(async([l,t])=>l===null||!l.url?"":await ot(l.url)))).map(l=>`<img src="${l}" style="height: 400px" />`).join("")}</div>`:""}const{SvelteComponent:st,add_render_callback:ut,append:D,attr:E,binding_callbacks:re,bubble:be,check_outros:M,create_component:I,destroy_component:z,destroy_each:Ae,detach:B,element:U,empty:ue,ensure_array_like:te,flush:L,globals:at,group_outros:N,init:ct,insert:T,is_function:_t,listen:Y,mount_component:q,noop:Me,run_all:mt,safe_not_equal:ht,set_data:Ne,set_style:V,space:R,text:Ue,toggle_class:A,transition_in:h,transition_out:d}=window.__gradio__svelte__internal,{window:Ce}=at,{createEventDispatcher:gt,onMount:bt}=window.__gradio__svelte__internal,{tick:dt}=window.__gradio__svelte__internal;function de(n,e,l){const t=n.slice();return t[47]=e[l],t[49]=l,t}function pe(n,e,l){const t=n.slice();return t[50]=e[l],t[51]=e,t[49]=l,t}function we(n){let e,l;return e=new tt({props:{show_label:n[2],Icon:Te,label:n[3]||"Gallery"}}),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i[0]&4&&(r.show_label=t[2]),i[0]&8&&(r.label=t[3]||"Gallery"),e.$set(r)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function pt(n){let e,l,t,i,r,s,b,f,m=n[21]&&n[7]&&ke(n),u=n[12]&&qe(n);s=new Re({props:{$$slots:{default:[It]},$$scope:{ctx:n}}});let g=te(n[15]),c=[];for(let a=0;a<g.length;a+=1)c[a]=Be(de(n,g,a));const v=a=>d(c[a],1,1,()=>{c[a]=null});return{c(){e=U("div"),m&&m.c(),l=R(),t=U("div"),i=U("div"),u&&u.c(),r=R(),I(s.$$.fragment),b=R();for(let a=0;a<c.length;a+=1)c[a].c();E(i,"class","grid-container svelte-17j4qub"),V(i,"--grid-cols",n[4]),V(i,"--grid-rows",n[5]),V(i,"--object-fit",n[8]),V(i,"height",n[6]),A(i,"pt-6",n[2]),E(t,"class","grid-wrap svelte-17j4qub"),A(t,"minimal",n[13]==="minimal"),A(t,"fixed-height",n[13]!=="minimal"&&(!n[6]||n[6]=="auto")),A(t,"hidden",n[16]),E(e,"class","gallery-container")},m(a,p){T(a,e,p),m&&m.m(e,null),D(e,l),D(e,t),D(t,i),u&&u.m(i,null),D(i,r),q(s,i,null),D(i,b);for(let w=0;w<c.length;w+=1)c[w]&&c[w].m(i,null);n[42](e),f=!0},p(a,p){a[21]&&a[7]?m?(m.p(a,p),p[0]&2097280&&h(m,1)):(m=ke(a),m.c(),h(m,1),m.m(e,l)):m&&(N(),d(m,1,1,()=>{m=null}),M()),a[12]?u?(u.p(a,p),p[0]&4096&&h(u,1)):(u=qe(a),u.c(),h(u,1),u.m(i,r)):u&&(N(),d(u,1,1,()=>{u=null}),M());const w={};if(p[0]&35328|p[1]&2097152&&(w.$$scope={dirty:p,ctx:a}),s.$set(w),p[0]&32770){g=te(a[15]);let k;for(k=0;k<g.length;k+=1){const _=de(a,g,k);c[k]?(c[k].p(_,p),h(c[k],1)):(c[k]=Be(_),c[k].c(),h(c[k],1),c[k].m(i,null))}for(N(),k=g.length;k<c.length;k+=1)v(k);M()}(!f||p[0]&16)&&V(i,"--grid-cols",a[4]),(!f||p[0]&32)&&V(i,"--grid-rows",a[5]),(!f||p[0]&256)&&V(i,"--object-fit",a[8]),(!f||p[0]&64)&&V(i,"height",a[6]),(!f||p[0]&4)&&A(i,"pt-6",a[2]),(!f||p[0]&8192)&&A(t,"minimal",a[13]==="minimal"),(!f||p[0]&8256)&&A(t,"fixed-height",a[13]!=="minimal"&&(!a[6]||a[6]=="auto")),(!f||p[0]&65536)&&A(t,"hidden",a[16])},i(a){if(!f){h(m),h(u),h(s.$$.fragment,a);for(let p=0;p<g.length;p+=1)h(c[p]);f=!0}},o(a){d(m),d(u),d(s.$$.fragment,a),c=c.filter(Boolean);for(let p=0;p<c.length;p+=1)d(c[p]);f=!1},d(a){a&&B(e),m&&m.d(),u&&u.d(),z(s),Ae(c,a),n[42](null)}}}function wt(n){let e,l;return e=new lt({props:{unpadded_box:!0,size:"large",$$slots:{default:[Et]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i[1]&2097152&&(r.$$scope={dirty:i,ctx:t}),e.$set(r)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function ke(n){let e,l,t,i,r,s,b,f,m,u,g,c;l=new Re({props:{$$slots:{default:[kt]},$$scope:{ctx:n}}});const v=[$t,vt],a=[];function p($,j){return"image"in $[21]?0:1}r=p(n),s=a[r]=v[r](n);let w=n[21]?.caption&&Ie(n),k=te(n[15]),_=[];for(let $=0;$<k.length;$+=1)_[$]=ze(pe(n,k,$));const Z=$=>d(_[$],1,1,()=>{_[$]=null});return{c(){e=U("button"),I(l.$$.fragment),t=R(),i=U("button"),s.c(),b=R(),w&&w.c(),f=R(),m=U("div");for(let $=0;$<_.length;$+=1)_[$].c();E(i,"class","media-button svelte-17j4qub"),V(i,"height","calc(100% - "+(n[21].caption?"80px":"60px")+")"),E(i,"aria-label","detailed view of selected image"),E(m,"class","thumbnails scroll-hide svelte-17j4qub"),E(m,"data-testid","container_el"),E(e,"class","preview svelte-17j4qub"),A(e,"minimal",n[13]==="minimal")},m($,j){T($,e,j),q(l,e,null),D(e,t),D(e,i),a[r].m(i,null),D(e,b),w&&w.m(e,null),D(e,f),D(e,m);for(let C=0;C<_.length;C+=1)_[C]&&_[C].m(m,null);n[37](m),u=!0,g||(c=[Y(i,"click",function(){_t("image"in n[21]?n[34]:null)&&("image"in n[21]?n[34]:null).apply(this,arguments)}),Y(e,"keydown",n[23])],g=!0)},p($,j){n=$;const C={};j[0]&2182146|j[1]&2097152&&(C.$$scope={dirty:j,ctx:n}),l.$set(C);let G=r;if(r=p(n),r===G?a[r].p(n,j):(N(),d(a[G],1,1,()=>{a[G]=null}),M(),s=a[r],s?s.p(n,j):(s=a[r]=v[r](n),s.c()),h(s,1),s.m(i,null)),(!u||j[0]&2097152)&&V(i,"height","calc(100% - "+(n[21].caption?"80px":"60px")+")"),n[21]?.caption?w?w.p(n,j):(w=Ie(n),w.c(),w.m(e,f)):w&&(w.d(1),w=null),j[0]&303106){k=te(n[15]);let y;for(y=0;y<k.length;y+=1){const X=pe(n,k,y);_[y]?(_[y].p(X,j),h(_[y],1)):(_[y]=ze(X),_[y].c(),h(_[y],1),_[y].m(m,null))}for(N(),y=k.length;y<_.length;y+=1)Z(y);M()}(!u||j[0]&8192)&&A(e,"minimal",n[13]==="minimal")},i($){if(!u){h(l.$$.fragment,$),h(s);for(let j=0;j<k.length;j+=1)h(_[j]);u=!0}},o($){d(l.$$.fragment,$),d(s),_=_.filter(Boolean);for(let j=0;j<_.length;j+=1)d(_[j]);u=!1},d($){$&&B(e),z(l),a[r].d(),w&&w.d(),Ae(_,$),n[37](null),g=!1,mt(c)}}}function ve(n){let e,l;return e=new le({props:{Icon:it,label:n[11]("common.download")}}),e.$on("click",n[32]),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i[0]&2048&&(r.label=t[11]("common.download")),e.$set(r)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function $e(n){let e,l;return e=new le({props:{Icon:n[16]?oe:me,label:n[16]?"Exit full screen":"View in full screen"}}),e.$on("click",n[25]),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i[0]&65536&&(r.Icon=t[16]?oe:me),i[0]&65536&&(r.label=t[16]?"Exit full screen":"View in full screen"),e.$set(r)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function je(n){let e,l;return e=new le({props:{Icon:oe,label:"Exit full screen"}}),e.$on("click",n[25]),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p:Me,i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function ye(n){let e,l;return e=new le({props:{Icon:et,label:"Close"}}),e.$on("click",n[33]),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p:Me,i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function kt(n){let e,l,t,i,r,s=n[10]&&ve(n),b=n[14]&&!n[16]&&$e(n),f=n[14]&&n[16]&&je(n),m=!n[16]&&ye(n);return{c(){s&&s.c(),e=R(),b&&b.c(),l=R(),f&&f.c(),t=R(),m&&m.c(),i=ue()},m(u,g){s&&s.m(u,g),T(u,e,g),b&&b.m(u,g),T(u,l,g),f&&f.m(u,g),T(u,t,g),m&&m.m(u,g),T(u,i,g),r=!0},p(u,g){u[10]?s?(s.p(u,g),g[0]&1024&&h(s,1)):(s=ve(u),s.c(),h(s,1),s.m(e.parentNode,e)):s&&(N(),d(s,1,1,()=>{s=null}),M()),u[14]&&!u[16]?b?(b.p(u,g),g[0]&81920&&h(b,1)):(b=$e(u),b.c(),h(b,1),b.m(l.parentNode,l)):b&&(N(),d(b,1,1,()=>{b=null}),M()),u[14]&&u[16]?f?(f.p(u,g),g[0]&81920&&h(f,1)):(f=je(u),f.c(),h(f,1),f.m(t.parentNode,t)):f&&(N(),d(f,1,1,()=>{f=null}),M()),u[16]?m&&(N(),d(m,1,1,()=>{m=null}),M()):m?(m.p(u,g),g[0]&65536&&h(m,1)):(m=ye(u),m.c(),h(m,1),m.m(i.parentNode,i))},i(u){r||(h(s),h(b),h(f),h(m),r=!0)},o(u){d(s),d(b),d(f),d(m),r=!1},d(u){u&&(B(e),B(l),B(t),B(i)),s&&s.d(u),b&&b.d(u),f&&f.d(u),m&&m.d(u)}}}function vt(n){let e,l;return e=new se({props:{src:n[21].video.url,"data-testid":"detailed-video",alt:n[21].caption||"",loading:"lazy",loop:!1,is_stream:!1,muted:!1,controls:!0}}),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i[0]&2097152&&(r.src=t[21].video.url),i[0]&2097152&&(r.alt=t[21].caption||""),e.$set(r)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function $t(n){let e,l;return e=new fe({props:{"data-testid":"detailed-image",src:n[21].image.url,alt:n[21].caption||"",title:n[21].caption||null,class:n[21].caption&&"with-caption",loading:"lazy"}}),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i[0]&2097152&&(r.src=t[21].image.url),i[0]&2097152&&(r.alt=t[21].caption||""),i[0]&2097152&&(r.title=t[21].caption||null),i[0]&2097152&&(r.class=t[21].caption&&"with-caption"),e.$set(r)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Ie(n){let e,l=n[21].caption+"",t;return{c(){e=U("caption"),t=Ue(l),E(e,"class","caption svelte-17j4qub")},m(i,r){T(i,e,r),D(e,t)},p(i,r){r[0]&2097152&&l!==(l=i[21].caption+"")&&Ne(t,l)},d(i){i&&B(e)}}}function jt(n){let e,l,t,i;return e=new De({}),t=new se({props:{src:n[50].video.url,title:n[50].caption||null,is_stream:!1,"data-testid":"thumbnail "+(n[49]+1),alt:"",loading:"lazy",loop:!1}}),{c(){I(e.$$.fragment),l=R(),I(t.$$.fragment)},m(r,s){q(e,r,s),T(r,l,s),q(t,r,s),i=!0},p(r,s){const b={};s[0]&32768&&(b.src=r[50].video.url),s[0]&32768&&(b.title=r[50].caption||null),t.$set(b)},i(r){i||(h(e.$$.fragment,r),h(t.$$.fragment,r),i=!0)},o(r){d(e.$$.fragment,r),d(t.$$.fragment,r),i=!1},d(r){r&&B(l),z(e,r),z(t,r)}}}function yt(n){let e,l;return e=new fe({props:{src:n[50].image.url,title:n[50].caption||null,"data-testid":"thumbnail "+(n[49]+1),alt:"",loading:"lazy"}}),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i[0]&32768&&(r.src=t[50].image.url),i[0]&32768&&(r.title=t[50].caption||null),e.$set(r)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function ze(n){let e,l,t,i,r,s=n[49],b,f,m;const u=[yt,jt],g=[];function c(w,k){return"image"in w[50]?0:1}l=c(n),t=g[l]=u[l](n);const v=()=>n[35](e,s),a=()=>n[35](null,s);function p(){return n[36](n[49])}return{c(){e=U("button"),t.c(),i=R(),E(e,"class","thumbnail-item thumbnail-small svelte-17j4qub"),E(e,"aria-label",r="Thumbnail "+(n[49]+1)+" of "+n[15].length),A(e,"selected",n[1]===n[49]&&n[13]!=="minimal")},m(w,k){T(w,e,k),g[l].m(e,null),D(e,i),v(),b=!0,f||(m=Y(e,"click",p),f=!0)},p(w,k){n=w;let _=l;l=c(n),l===_?g[l].p(n,k):(N(),d(g[_],1,1,()=>{g[_]=null}),M(),t=g[l],t?t.p(n,k):(t=g[l]=u[l](n),t.c()),h(t,1),t.m(e,i)),(!b||k[0]&32768&&r!==(r="Thumbnail "+(n[49]+1)+" of "+n[15].length))&&E(e,"aria-label",r),s!==n[49]&&(a(),s=n[49],v()),(!b||k[0]&8194)&&A(e,"selected",n[1]===n[49]&&n[13]!=="minimal")},i(w){b||(h(t),b=!0)},o(w){d(t),b=!1},d(w){w&&B(e),g[l].d(),a(),f=!1,m()}}}function qe(n){let e,l,t;return l=new rt({props:{i18n:n[11]}}),l.$on("clear",n[38]),{c(){e=U("div"),I(l.$$.fragment),E(e,"class","icon-button svelte-17j4qub")},m(i,r){T(i,e,r),q(l,e,null),t=!0},p(i,r){const s={};r[0]&2048&&(s.i18n=i[11]),l.$set(s)},i(i){t||(h(l.$$.fragment,i),t=!0)},o(i){d(l.$$.fragment,i),t=!1},d(i){i&&B(e),z(l)}}}function Ee(n){let e,l,t;return l=new nt({props:{i18n:n[11],value:n[15],formatter:ft}}),l.$on("share",n[39]),l.$on("error",n[40]),{c(){e=U("div"),I(l.$$.fragment),E(e,"class","icon-button svelte-17j4qub")},m(i,r){T(i,e,r),q(l,e,null),t=!0},p(i,r){const s={};r[0]&2048&&(s.i18n=i[11]),r[0]&32768&&(s.value=i[15]),l.$set(s)},i(i){t||(h(l.$$.fragment,i),t=!0)},o(i){d(l.$$.fragment,i),t=!1},d(i){i&&B(e),z(l)}}}function It(n){let e,l,t=n[9]&&Ee(n);return{c(){t&&t.c(),e=ue()},m(i,r){t&&t.m(i,r),T(i,e,r),l=!0},p(i,r){i[9]?t?(t.p(i,r),r[0]&512&&h(t,1)):(t=Ee(i),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(N(),d(t,1,1,()=>{t=null}),M())},i(i){l||(h(t),l=!0)},o(i){d(t),l=!1},d(i){i&&B(e),t&&t.d(i)}}}function zt(n){let e,l,t,i;return e=new De({}),t=new se({props:{src:n[47].video.url,title:n[47].caption||null,is_stream:!1,"data-testid":"thumbnail "+(n[49]+1),alt:"",loading:"lazy",loop:!1}}),{c(){I(e.$$.fragment),l=R(),I(t.$$.fragment)},m(r,s){q(e,r,s),T(r,l,s),q(t,r,s),i=!0},p(r,s){const b={};s[0]&32768&&(b.src=r[47].video.url),s[0]&32768&&(b.title=r[47].caption||null),t.$set(b)},i(r){i||(h(e.$$.fragment,r),h(t.$$.fragment,r),i=!0)},o(r){d(e.$$.fragment,r),d(t.$$.fragment,r),i=!1},d(r){r&&B(l),z(e,r),z(t,r)}}}function qt(n){let e,l;return e=new fe({props:{alt:n[47].caption||"",src:typeof n[47].image=="string"?n[47].image:n[47].image.url,loading:"lazy"}}),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i[0]&32768&&(r.alt=t[47].caption||""),i[0]&32768&&(r.src=typeof t[47].image=="string"?t[47].image:t[47].image.url),e.$set(r)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Le(n){let e,l=n[47].caption+"",t;return{c(){e=U("div"),t=Ue(l),E(e,"class","caption-label svelte-17j4qub")},m(i,r){T(i,e,r),D(e,t)},p(i,r){r[0]&32768&&l!==(l=i[47].caption+"")&&Ne(t,l)},d(i){i&&B(e)}}}function Be(n){let e,l,t,i,r,s,b,f,m;const u=[qt,zt],g=[];function c(p,w){return"image"in p[47]?0:1}l=c(n),t=g[l]=u[l](n);let v=n[47].caption&&Le(n);function a(){return n[41](n[49])}return{c(){e=U("button"),t.c(),i=R(),v&&v.c(),r=R(),E(e,"class","thumbnail-item thumbnail-lg svelte-17j4qub"),E(e,"aria-label",s="Thumbnail "+(n[49]+1)+" of "+n[15].length),A(e,"selected",n[1]===n[49])},m(p,w){T(p,e,w),g[l].m(e,null),D(e,i),v&&v.m(e,null),D(e,r),b=!0,f||(m=Y(e,"click",a),f=!0)},p(p,w){n=p;let k=l;l=c(n),l===k?g[l].p(n,w):(N(),d(g[k],1,1,()=>{g[k]=null}),M(),t=g[l],t?t.p(n,w):(t=g[l]=u[l](n),t.c()),h(t,1),t.m(e,i)),n[47].caption?v?v.p(n,w):(v=Le(n),v.c(),v.m(e,r)):v&&(v.d(1),v=null),(!b||w[0]&32768&&s!==(s="Thumbnail "+(n[49]+1)+" of "+n[15].length))&&E(e,"aria-label",s),(!b||w[0]&2)&&A(e,"selected",n[1]===n[49])},i(p){b||(h(t),b=!0)},o(p){d(t),b=!1},d(p){p&&B(e),g[l].d(),v&&v.d(),f=!1,m()}}}function Et(n){let e,l;return e=new Te({}),{c(){I(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Lt(n){let e,l,t,i,r,s,b;ut(n[31]);let f=n[2]&&we(n);const m=[wt,pt],u=[];function g(c,v){return c[0]==null||c[15]==null||c[15].length===0?0:1}return l=g(n),t=u[l]=m[l](n),{c(){f&&f.c(),e=R(),t.c(),i=ue()},m(c,v){f&&f.m(c,v),T(c,e,v),u[l].m(c,v),T(c,i,v),r=!0,s||(b=Y(Ce,"resize",n[31]),s=!0)},p(c,v){c[2]?f?(f.p(c,v),v[0]&4&&h(f,1)):(f=we(c),f.c(),h(f,1),f.m(e.parentNode,e)):f&&(N(),d(f,1,1,()=>{f=null}),M());let a=l;l=g(c),l===a?u[l].p(c,v):(N(),d(u[a],1,1,()=>{u[a]=null}),M(),t=u[l],t?t.p(c,v):(t=u[l]=m[l](c),t.c()),h(t,1),t.m(i.parentNode,i))},i(c){r||(h(f),h(t),r=!0)},o(c){d(f),d(t),r=!1},d(c){c&&(B(e),B(i)),f&&f.d(c),u[l].d(c),s=!1,b()}}}function Bt(n,e,l){let t,i,r,{show_label:s=!0}=e,{label:b}=e,{value:f=null}=e,{columns:m=[2]}=e,{rows:u=void 0}=e,{height:g="auto"}=e,{preview:c}=e,{allow_preview:v=!0}=e,{object_fit:a="cover"}=e,{show_share_button:p=!1}=e,{show_download_button:w=!1}=e,{i18n:k}=e,{selected_index:_=null}=e,{interactive:Z}=e,{_fetch:$}=e,{mode:j="normal"}=e,{show_fullscreen_button:C=!0}=e,G=!1,y;const X=gt();let J=!0,O=null,ne=f;_==null&&c&&f?.length&&(_=0);let ie=_;function ae(o){const S=o.target,F=o.offsetX,W=S.offsetWidth/2;F<W?l(1,_=t):l(1,_=i)}function Se(o){switch(o.code){case"Escape":o.preventDefault(),l(1,_=null);break;case"ArrowLeft":o.preventDefault(),l(1,_=t);break;case"ArrowRight":o.preventDefault(),l(1,_=i);break}}let H=[],P;async function Ve(o){if(typeof o!="number"||(await dt(),H[o]===void 0))return;H[o]?.focus();const{left:S,width:F}=P.getBoundingClientRect(),{left:x,width:W}=H[o].getBoundingClientRect(),K=x-S+W/2-F/2+P.scrollLeft;P&&typeof P.scrollTo=="function"&&P.scrollTo({left:K<0?0:K,behavior:"smooth"})}let ce=0;async function _e(o,S){let F;try{F=await $(o)}catch(K){if(K instanceof TypeError){window.open(o,"_blank","noreferrer");return}throw K}const x=await F.blob(),W=URL.createObjectURL(x),ee=document.createElement("a");ee.href=W,ee.download=S,ee.click(),URL.revokeObjectURL(W)}bt(()=>{document.addEventListener("fullscreenchange",()=>{l(16,G=!!document.fullscreenElement)})});const Oe=async()=>{G?await document.exitFullscreen():await y.requestFullscreen()};function Pe(){l(20,ce=Ce.innerHeight)}const Fe=()=>{const o="image"in r?r?.image:r?.video;if(o==null)return;const{url:S,orig_name:F}=o;S&&_e(S,F??"image")},Ge=()=>l(1,_=null),He=o=>ae(o);function We(o,S){re[o?"unshift":"push"](()=>{H[S]=o,l(18,H)})}const Xe=o=>l(1,_=o);function Je(o){re[o?"unshift":"push"](()=>{P=o,l(19,P)})}const Ke=()=>l(0,f=[]);function Qe(o){be.call(this,n,o)}function Ye(o){be.call(this,n,o)}const Ze=o=>l(1,_=o);function xe(o){re[o?"unshift":"push"](()=>{y=o,l(17,y)})}return n.$$set=o=>{"show_label"in o&&l(2,s=o.show_label),"label"in o&&l(3,b=o.label),"value"in o&&l(0,f=o.value),"columns"in o&&l(4,m=o.columns),"rows"in o&&l(5,u=o.rows),"height"in o&&l(6,g=o.height),"preview"in o&&l(26,c=o.preview),"allow_preview"in o&&l(7,v=o.allow_preview),"object_fit"in o&&l(8,a=o.object_fit),"show_share_button"in o&&l(9,p=o.show_share_button),"show_download_button"in o&&l(10,w=o.show_download_button),"i18n"in o&&l(11,k=o.i18n),"selected_index"in o&&l(1,_=o.selected_index),"interactive"in o&&l(12,Z=o.interactive),"_fetch"in o&&l(27,$=o._fetch),"mode"in o&&l(13,j=o.mode),"show_fullscreen_button"in o&&l(14,C=o.show_fullscreen_button)},n.$$.update=()=>{n.$$.dirty[0]&268435457&&l(28,J=f==null||f.length===0?!0:J),n.$$.dirty[0]&1&&l(15,O=f==null?null:f.map(o=>"video"in o?{video:o.video,caption:o.caption}:"image"in o?{image:o.image,caption:o.caption}:{})),n.$$.dirty[0]&872415235&&(Q(ne,f)||(J?(l(1,_=c&&f?.length?0:null),l(28,J=!1)):l(1,_=_!=null&&f!=null&&_<f.length?_:null),X("change"),l(29,ne=f))),n.$$.dirty[0]&32770&&(t=((_??0)+(O?.length??0)-1)%(O?.length??0)),n.$$.dirty[0]&32770&&(i=((_??0)+1)%(O?.length??0)),n.$$.dirty[0]&1073774594&&_!==ie&&(l(30,ie=_),_!==null&&X("select",{index:_,value:O?.[_]})),n.$$.dirty[0]&130&&v&&Ve(_),n.$$.dirty[0]&32770&&l(21,r=_!=null&&O!=null?O[_]:null)},[f,_,s,b,m,u,g,v,a,p,w,k,Z,j,C,O,G,y,H,P,ce,r,ae,Se,_e,Oe,c,$,J,ne,ie,Pe,Fe,Ge,He,We,Xe,Je,Ke,Qe,Ye,Ze,xe]}class el extends st{constructor(e){super(),ct(this,e,Bt,Lt,ht,{show_label:2,label:3,value:0,columns:4,rows:5,height:6,preview:26,allow_preview:7,object_fit:8,show_share_button:9,show_download_button:10,i18n:11,selected_index:1,interactive:12,_fetch:27,mode:13,show_fullscreen_button:14},null,[-1,-1])}get show_label(){return this.$$.ctx[2]}set show_label(e){this.$$set({show_label:e}),L()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),L()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),L()}get columns(){return this.$$.ctx[4]}set columns(e){this.$$set({columns:e}),L()}get rows(){return this.$$.ctx[5]}set rows(e){this.$$set({rows:e}),L()}get height(){return this.$$.ctx[6]}set height(e){this.$$set({height:e}),L()}get preview(){return this.$$.ctx[26]}set preview(e){this.$$set({preview:e}),L()}get allow_preview(){return this.$$.ctx[7]}set allow_preview(e){this.$$set({allow_preview:e}),L()}get object_fit(){return this.$$.ctx[8]}set object_fit(e){this.$$set({object_fit:e}),L()}get show_share_button(){return this.$$.ctx[9]}set show_share_button(e){this.$$set({show_share_button:e}),L()}get show_download_button(){return this.$$.ctx[10]}set show_download_button(e){this.$$set({show_download_button:e}),L()}get i18n(){return this.$$.ctx[11]}set i18n(e){this.$$set({i18n:e}),L()}get selected_index(){return this.$$.ctx[1]}set selected_index(e){this.$$set({selected_index:e}),L()}get interactive(){return this.$$.ctx[12]}set interactive(e){this.$$set({interactive:e}),L()}get _fetch(){return this.$$.ctx[27]}set _fetch(e){this.$$set({_fetch:e}),L()}get mode(){return this.$$.ctx[13]}set mode(e){this.$$set({mode:e}),L()}get show_fullscreen_button(){return this.$$.ctx[14]}set show_fullscreen_button(e){this.$$set({show_fullscreen_button:e}),L()}}export{el as default};
//# sourceMappingURL=Gallery-CjXl7WTj.js.map