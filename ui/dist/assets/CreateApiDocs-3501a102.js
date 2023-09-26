import{S as At,i as Lt,s as Nt,C as V,O as ne,N as Pt,e as o,w as _,b as u,c as _e,f as g,g as r,h as n,m as he,x,P as Fe,Q as vt,k as jt,R as Ft,n as Rt,t as ue,a as fe,o as d,d as ke,p as wt,r as ye,u as Bt,y as ae}from"./index-00865822.js";import{S as Dt}from"./SdkTabs-2ae3cd6f.js";import{F as Jt}from"./FieldsQueryParam-2c1e264a.js";function $t(i,e,t){const a=i.slice();return a[8]=e[t],a}function St(i,e,t){const a=i.slice();return a[8]=e[t],a}function Ct(i,e,t){const a=i.slice();return a[13]=e[t],a}function Tt(i){let e;return{c(){e=o("p"),e.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",g(e,"class","txt-hint txt-sm txt-right")},m(t,a){r(t,e,a)},d(t){t&&d(e)}}}function Ot(i){let e,t,a,f,m,c,p,y,C,T,w,H,B,E,A,U,R,F,$,D,O,v,b;function q(h,S){var ee,Q;return(Q=(ee=h[0])==null?void 0:ee.options)!=null&&Q.requireEmail?Vt:It}let K=q(i),L=K(i);return{c(){e=o("tr"),e.innerHTML='<td colspan="3" class="txt-hint">Auth fields</td>',t=u(),a=o("tr"),a.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>username</span></div></td> <td><span class="label">String</span></td> <td>The username of the auth record.
                    <br/>
                    If not set, it will be auto generated.</td>`,f=u(),m=o("tr"),c=o("td"),p=o("div"),L.c(),y=u(),C=o("span"),C.textContent="email",T=u(),w=o("td"),w.innerHTML='<span class="label">String</span>',H=u(),B=o("td"),B.textContent="Auth record email address.",E=u(),A=o("tr"),A.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>emailVisibility</span></div></td> <td><span class="label">Boolean</span></td> <td>Whether to show/hide the auth record email when fetching the record data.</td>',U=u(),R=o("tr"),R.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>Auth record password.</td>',F=u(),$=o("tr"),$.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>Auth record password confirmation.</td>',D=u(),O=o("tr"),O.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>Indicates whether the auth record is verified or not.
                    <br/>
                    This field can be set only by admins or auth records with &quot;Manage&quot; access.</td>`,v=u(),b=o("tr"),b.innerHTML='<td colspan="3" class="txt-hint">Schema fields</td>',g(p,"class","inline-flex")},m(h,S){r(h,e,S),r(h,t,S),r(h,a,S),r(h,f,S),r(h,m,S),n(m,c),n(c,p),L.m(p,null),n(p,y),n(p,C),n(m,T),n(m,w),n(m,H),n(m,B),r(h,E,S),r(h,A,S),r(h,U,S),r(h,R,S),r(h,F,S),r(h,$,S),r(h,D,S),r(h,O,S),r(h,v,S),r(h,b,S)},p(h,S){K!==(K=q(h))&&(L.d(1),L=K(h),L&&(L.c(),L.m(p,y)))},d(h){h&&(d(e),d(t),d(a),d(f),d(m),d(E),d(A),d(U),d(R),d(F),d($),d(D),d(O),d(v),d(b)),L.d()}}}function It(i){let e;return{c(){e=o("span"),e.textContent="Optional",g(e,"class","label label-warning")},m(t,a){r(t,e,a)},d(t){t&&d(e)}}}function Vt(i){let e;return{c(){e=o("span"),e.textContent="Required",g(e,"class","label label-success")},m(t,a){r(t,e,a)},d(t){t&&d(e)}}}function Et(i){let e;return{c(){e=o("span"),e.textContent="Optional",g(e,"class","label label-warning")},m(t,a){r(t,e,a)},d(t){t&&d(e)}}}function Ut(i){let e;return{c(){e=o("span"),e.textContent="Required",g(e,"class","label label-success")},m(t,a){r(t,e,a)},d(t){t&&d(e)}}}function zt(i){var m;let e,t=((m=i[13].options)==null?void 0:m.maxSelect)===1?"id":"ids",a,f;return{c(){e=_("Relation record "),a=_(t),f=_(".")},m(c,p){r(c,e,p),r(c,a,p),r(c,f,p)},p(c,p){var y;p&1&&t!==(t=((y=c[13].options)==null?void 0:y.maxSelect)===1?"id":"ids")&&x(a,t)},d(c){c&&(d(e),d(a),d(f))}}}function Kt(i){let e,t,a,f,m;return{c(){e=_("File object."),t=o("br"),a=_(`
                        Set to `),f=o("code"),f.textContent="null",m=_(" to delete already uploaded file(s).")},m(c,p){r(c,e,p),r(c,t,p),r(c,a,p),r(c,f,p),r(c,m,p)},p:ae,d(c){c&&(d(e),d(t),d(a),d(f),d(m))}}}function Qt(i){let e;return{c(){e=_("URL address.")},m(t,a){r(t,e,a)},p:ae,d(t){t&&d(e)}}}function Wt(i){let e;return{c(){e=_("Email address.")},m(t,a){r(t,e,a)},p:ae,d(t){t&&d(e)}}}function Yt(i){let e;return{c(){e=_("JSON array or object.")},m(t,a){r(t,e,a)},p:ae,d(t){t&&d(e)}}}function Gt(i){let e;return{c(){e=_("Number value.")},m(t,a){r(t,e,a)},p:ae,d(t){t&&d(e)}}}function Xt(i){let e;return{c(){e=_("Plain text value.")},m(t,a){r(t,e,a)},p:ae,d(t){t&&d(e)}}}function qt(i,e){let t,a,f,m,c,p=e[13].name+"",y,C,T,w,H=V.getFieldValueType(e[13])+"",B,E,A,U;function R(b,q){return b[13].required?Ut:Et}let F=R(e),$=F(e);function D(b,q){if(b[13].type==="text")return Xt;if(b[13].type==="number")return Gt;if(b[13].type==="json")return Yt;if(b[13].type==="email")return Wt;if(b[13].type==="url")return Qt;if(b[13].type==="file")return Kt;if(b[13].type==="relation")return zt}let O=D(e),v=O&&O(e);return{key:i,first:null,c(){t=o("tr"),a=o("td"),f=o("div"),$.c(),m=u(),c=o("span"),y=_(p),C=u(),T=o("td"),w=o("span"),B=_(H),E=u(),A=o("td"),v&&v.c(),U=u(),g(f,"class","inline-flex"),g(w,"class","label"),this.first=t},m(b,q){r(b,t,q),n(t,a),n(a,f),$.m(f,null),n(f,m),n(f,c),n(c,y),n(t,C),n(t,T),n(T,w),n(w,B),n(t,E),n(t,A),v&&v.m(A,null),n(t,U)},p(b,q){e=b,F!==(F=R(e))&&($.d(1),$=F(e),$&&($.c(),$.m(f,m))),q&1&&p!==(p=e[13].name+"")&&x(y,p),q&1&&H!==(H=V.getFieldValueType(e[13])+"")&&x(B,H),O===(O=D(e))&&v?v.p(e,q):(v&&v.d(1),v=O&&O(e),v&&(v.c(),v.m(A,null)))},d(b){b&&d(t),$.d(),v&&v.d()}}}function Mt(i,e){let t,a=e[8].code+"",f,m,c,p;function y(){return e[7](e[8])}return{key:i,first:null,c(){t=o("button"),f=_(a),m=u(),g(t,"class","tab-item"),ye(t,"active",e[2]===e[8].code),this.first=t},m(C,T){r(C,t,T),n(t,f),n(t,m),c||(p=Bt(t,"click",y),c=!0)},p(C,T){e=C,T&8&&a!==(a=e[8].code+"")&&x(f,a),T&12&&ye(t,"active",e[2]===e[8].code)},d(C){C&&d(t),c=!1,p()}}}function Ht(i,e){let t,a,f,m;return a=new Pt({props:{content:e[8].body}}),{key:i,first:null,c(){t=o("div"),_e(a.$$.fragment),f=u(),g(t,"class","tab-item"),ye(t,"active",e[2]===e[8].code),this.first=t},m(c,p){r(c,t,p),he(a,t,null),n(t,f),m=!0},p(c,p){e=c;const y={};p&8&&(y.content=e[8].body),a.$set(y),(!m||p&12)&&ye(t,"active",e[2]===e[8].code)},i(c){m||(ue(a.$$.fragment,c),m=!0)},o(c){fe(a.$$.fragment,c),m=!1},d(c){c&&d(t),ke(a)}}}function Zt(i){var ot,rt,dt,ct,pt,ut,ft;let e,t,a=i[0].name+"",f,m,c,p,y,C,T,w=i[0].name+"",H,B,E,A,U,R,F,$,D,O,v,b,q,K,L,h,S,ee,Q=i[0].name+"",ge,Re,Be,ve,ie,we,W,$e,De,z,Se,Je,Ce,J=[],Ie=new Map,Te,se,Oe,Y,qe,Ve,oe,G,Me,Ee,He,Ue,M,ze,te,Ke,Qe,We,Pe,Ye,Ae,Ge,Xe,Ze,Le,xe,et,le,Ne,re,je,X,de,I=[],tt=new Map,lt,ce,N=[],nt=new Map,Z;$=new Dt({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${i[5]}');

...

// example create data
const data = ${JSON.stringify(Object.assign({},i[4],V.dummyCollectionSchemaData(i[0])),null,4)};

const record = await pb.collection('${(ot=i[0])==null?void 0:ot.name}').create(data);
`+(i[1]?`
// (optional) send an email verification request
await pb.collection('${(rt=i[0])==null?void 0:rt.name}').requestVerification('test@example.com');
`:""),dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${i[5]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(Object.assign({},i[4],V.dummyCollectionSchemaData(i[0])),null,2)};

final record = await pb.collection('${(dt=i[0])==null?void 0:dt.name}').create(body: body);
`+(i[1]?`
// (optional) send an email verification request
await pb.collection('${(ct=i[0])==null?void 0:ct.name}').requestVerification('test@example.com');
`:"")+",",curl:`
curl \\
    --request POST \\
    --header "Content-Type: application/json" \\
    --header "Authorization: ${((pt=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:pt.token)||"<AUTH TOKEN>"}" \\
    --data '${JSON.stringify(Object.assign({},i[4],V.dummyCollectionSchemaData(i[0])))}' \\
    ${i[5]}/api/collections/${(ut=i[0])==null?void 0:ut.id}/records
`}});let j=i[6]&&Tt(),P=i[1]&&Ot(i),me=ne((ft=i[0])==null?void 0:ft.schema);const at=l=>l[13].name;for(let l=0;l<me.length;l+=1){let s=Ct(i,me,l),k=at(s);Ie.set(k,J[l]=qt(k,s))}te=new Pt({props:{content:"?expand=relField1,relField2.subRelField"}}),le=new Jt({});let be=ne(i[3]);const it=l=>l[8].code;for(let l=0;l<be.length;l+=1){let s=St(i,be,l),k=it(s);tt.set(k,I[l]=Mt(k,s))}let pe=ne(i[3]);const st=l=>l[8].code;for(let l=0;l<pe.length;l+=1){let s=$t(i,pe,l),k=st(s);nt.set(k,N[l]=Ht(k,s))}return{c(){e=o("h3"),t=_("Create ("),f=_(a),m=_(")"),c=u(),p=o("div"),y=o("p"),C=_("Create a new "),T=o("strong"),H=_(w),B=_(" record."),E=u(),A=o("p"),A.innerHTML=`Body parameters could be sent as <code>application/json</code> or
        <code>multipart/form-data</code>.`,U=u(),R=o("p"),R.innerHTML=`File upload is supported only via <code>multipart/form-data</code>.
        <br/>
        For more info and examples you could check the detailed
        <a href="https://pocketbase.io/docs/files-handling/" target="_blank" rel="noopener noreferrer">Files upload and handling docs
        </a>.`,F=u(),_e($.$$.fragment),D=u(),O=o("h6"),O.textContent="API details",v=u(),b=o("div"),q=o("strong"),q.textContent="POST",K=u(),L=o("div"),h=o("p"),S=_("/api/collections/"),ee=o("strong"),ge=_(Q),Re=_("/records"),Be=u(),j&&j.c(),ve=u(),ie=o("div"),ie.textContent="Body Parameters",we=u(),W=o("table"),$e=o("thead"),$e.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr>',De=u(),z=o("tbody"),Se=o("tr"),Se.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br/>
                If not set, it will be auto generated.</td>`,Je=u(),P&&P.c(),Ce=u();for(let l=0;l<J.length;l+=1)J[l].c();Te=u(),se=o("div"),se.textContent="Query parameters",Oe=u(),Y=o("table"),qe=o("thead"),qe.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',Ve=u(),oe=o("tbody"),G=o("tr"),Me=o("td"),Me.textContent="expand",Ee=u(),He=o("td"),He.innerHTML='<span class="label">String</span>',Ue=u(),M=o("td"),ze=_(`Auto expand relations when returning the created record. Ex.:
                `),_e(te.$$.fragment),Ke=_(`
                Supports up to 6-levels depth nested relations expansion. `),Qe=o("br"),We=_(`
                The expanded relations will be appended to the record under the
                `),Pe=o("code"),Pe.textContent="expand",Ye=_(" property (eg. "),Ae=o("code"),Ae.textContent='"expand": {"relField1": {...}, ...}',Ge=_(`).
                `),Xe=o("br"),Ze=_(`
                Only the relations to which the request user has permissions to `),Le=o("strong"),Le.textContent="view",xe=_(" will be expanded."),et=u(),_e(le.$$.fragment),Ne=u(),re=o("div"),re.textContent="Responses",je=u(),X=o("div"),de=o("div");for(let l=0;l<I.length;l+=1)I[l].c();lt=u(),ce=o("div");for(let l=0;l<N.length;l+=1)N[l].c();g(e,"class","m-b-sm"),g(p,"class","content txt-lg m-b-sm"),g(O,"class","m-b-xs"),g(q,"class","label label-primary"),g(L,"class","content"),g(b,"class","alert alert-success"),g(ie,"class","section-title"),g(W,"class","table-compact table-border m-b-base"),g(se,"class","section-title"),g(Y,"class","table-compact table-border m-b-base"),g(re,"class","section-title"),g(de,"class","tabs-header compact combined left"),g(ce,"class","tabs-content"),g(X,"class","tabs")},m(l,s){r(l,e,s),n(e,t),n(e,f),n(e,m),r(l,c,s),r(l,p,s),n(p,y),n(y,C),n(y,T),n(T,H),n(y,B),n(p,E),n(p,A),n(p,U),n(p,R),r(l,F,s),he($,l,s),r(l,D,s),r(l,O,s),r(l,v,s),r(l,b,s),n(b,q),n(b,K),n(b,L),n(L,h),n(h,S),n(h,ee),n(ee,ge),n(h,Re),n(b,Be),j&&j.m(b,null),r(l,ve,s),r(l,ie,s),r(l,we,s),r(l,W,s),n(W,$e),n(W,De),n(W,z),n(z,Se),n(z,Je),P&&P.m(z,null),n(z,Ce);for(let k=0;k<J.length;k+=1)J[k]&&J[k].m(z,null);r(l,Te,s),r(l,se,s),r(l,Oe,s),r(l,Y,s),n(Y,qe),n(Y,Ve),n(Y,oe),n(oe,G),n(G,Me),n(G,Ee),n(G,He),n(G,Ue),n(G,M),n(M,ze),he(te,M,null),n(M,Ke),n(M,Qe),n(M,We),n(M,Pe),n(M,Ye),n(M,Ae),n(M,Ge),n(M,Xe),n(M,Ze),n(M,Le),n(M,xe),n(oe,et),he(le,oe,null),r(l,Ne,s),r(l,re,s),r(l,je,s),r(l,X,s),n(X,de);for(let k=0;k<I.length;k+=1)I[k]&&I[k].m(de,null);n(X,lt),n(X,ce);for(let k=0;k<N.length;k+=1)N[k]&&N[k].m(ce,null);Z=!0},p(l,[s]){var mt,bt,_t,ht,kt,yt,gt;(!Z||s&1)&&a!==(a=l[0].name+"")&&x(f,a),(!Z||s&1)&&w!==(w=l[0].name+"")&&x(H,w);const k={};s&51&&(k.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${l[5]}');

...

// example create data
const data = ${JSON.stringify(Object.assign({},l[4],V.dummyCollectionSchemaData(l[0])),null,4)};

const record = await pb.collection('${(mt=l[0])==null?void 0:mt.name}').create(data);
`+(l[1]?`
// (optional) send an email verification request
await pb.collection('${(bt=l[0])==null?void 0:bt.name}').requestVerification('test@example.com');
`:"")),s&51&&(k.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${l[5]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(Object.assign({},l[4],V.dummyCollectionSchemaData(l[0])),null,2)};

final record = await pb.collection('${(_t=l[0])==null?void 0:_t.name}').create(body: body);
`+(l[1]?`
// (optional) send an email verification request
await pb.collection('${(ht=l[0])==null?void 0:ht.name}').requestVerification('test@example.com');
`:"")+","),s&49&&(k.curl=`
curl \\
    --request POST \\
    --header "Content-Type: application/json" \\
    --header "Authorization: ${((kt=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:kt.token)||"<AUTH TOKEN>"}" \\
    --data '${JSON.stringify(Object.assign({},l[4],V.dummyCollectionSchemaData(l[0])))}' \\
    ${l[5]}/api/collections/${(yt=l[0])==null?void 0:yt.id}/records
`),$.$set(k),(!Z||s&1)&&Q!==(Q=l[0].name+"")&&x(ge,Q),l[6]?j||(j=Tt(),j.c(),j.m(b,null)):j&&(j.d(1),j=null),l[1]?P?P.p(l,s):(P=Ot(l),P.c(),P.m(z,Ce)):P&&(P.d(1),P=null),s&1&&(me=ne((gt=l[0])==null?void 0:gt.schema),J=Fe(J,s,at,1,l,me,Ie,z,vt,qt,null,Ct)),s&12&&(be=ne(l[3]),I=Fe(I,s,it,1,l,be,tt,de,vt,Mt,null,St)),s&12&&(pe=ne(l[3]),jt(),N=Fe(N,s,st,1,l,pe,nt,ce,Ft,Ht,null,$t),Rt())},i(l){if(!Z){ue($.$$.fragment,l),ue(te.$$.fragment,l),ue(le.$$.fragment,l);for(let s=0;s<pe.length;s+=1)ue(N[s]);Z=!0}},o(l){fe($.$$.fragment,l),fe(te.$$.fragment,l),fe(le.$$.fragment,l);for(let s=0;s<N.length;s+=1)fe(N[s]);Z=!1},d(l){l&&(d(e),d(c),d(p),d(F),d(D),d(O),d(v),d(b),d(ve),d(ie),d(we),d(W),d(Te),d(se),d(Oe),d(Y),d(Ne),d(re),d(je),d(X)),ke($,l),j&&j.d(),P&&P.d();for(let s=0;s<J.length;s+=1)J[s].d();ke(te),ke(le);for(let s=0;s<I.length;s+=1)I[s].d();for(let s=0;s<N.length;s+=1)N[s].d()}}}function xt(i,e,t){let a,f,m,{collection:c}=e;window.APIClient=wt;let p=200,y=[],C={};const T=w=>t(2,p=w.code);return i.$$set=w=>{"collection"in w&&t(0,c=w.collection)},i.$$.update=()=>{var w,H;i.$$.dirty&1&&t(1,a=c.type==="auth"),i.$$.dirty&1&&t(6,f=(c==null?void 0:c.createRule)===null),i.$$.dirty&1&&t(3,y=[{code:200,body:JSON.stringify(V.dummyCollectionRecord(c),null,2)},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to create record.",
                  "data": {
                    "${(H=(w=c==null?void 0:c.schema)==null?void 0:w[0])==null?void 0:H.name}": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `},{code:403,body:`
                {
                  "code": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `}]),i.$$.dirty&2&&(a?t(4,C={username:"test_username",email:"test@example.com",emailVisibility:!0,password:"12345678",passwordConfirm:"12345678"}):t(4,C={}))},t(5,m=V.getApiExampleUrl(wt.baseUrl)),[c,a,p,y,C,m,f,T]}class nl extends At{constructor(e){super(),Lt(this,e,xt,Zt,Nt,{collection:0})}}export{nl as default};
