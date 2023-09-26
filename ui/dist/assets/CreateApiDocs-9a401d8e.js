import{S as Ht,i as Pt,s as At,C as V,O as ne,N as Mt,e as o,w as _,b as u,c as _e,f as g,g as r,h as n,m as he,x,P as Fe,Q as yt,k as Lt,R as Nt,n as jt,t as ue,a as fe,o as d,d as ke,p as gt,r as ye,u as Ft,y as ae}from"./index-85973318.js";import{S as Rt}from"./SdkTabs-e4e63b06.js";import{F as Bt}from"./FieldsQueryParam-a0e20743.js";function vt(s,e,t){const a=s.slice();return a[8]=e[t],a}function wt(s,e,t){const a=s.slice();return a[8]=e[t],a}function St(s,e,t){const a=s.slice();return a[13]=e[t],a}function $t(s){let e;return{c(){e=o("p"),e.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",g(e,"class","txt-hint txt-sm txt-right")},m(t,a){r(t,e,a)},d(t){t&&d(e)}}}function Ct(s){let e,t,a,f,m,c,p,y,C,T,w,H,B,E,A,U,R,F,S,D,O,v,b;function q(h,$){var ee,Q;return(Q=(ee=h[0])==null?void 0:ee.options)!=null&&Q.requireEmail?Jt:Dt}let K=q(s),L=K(s);return{c(){e=o("tr"),e.innerHTML='<td colspan="3" class="txt-hint">Auth fields</td>',t=u(),a=o("tr"),a.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>username</span></div></td> <td><span class="label">String</span></td> <td>The username of the auth record.
                    <br/>
                    If not set, it will be auto generated.</td>`,f=u(),m=o("tr"),c=o("td"),p=o("div"),L.c(),y=u(),C=o("span"),C.textContent="email",T=u(),w=o("td"),w.innerHTML='<span class="label">String</span>',H=u(),B=o("td"),B.textContent="Auth record email address.",E=u(),A=o("tr"),A.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>emailVisibility</span></div></td> <td><span class="label">Boolean</span></td> <td>Whether to show/hide the auth record email when fetching the record data.</td>',U=u(),R=o("tr"),R.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>Auth record password.</td>',F=u(),S=o("tr"),S.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>Auth record password confirmation.</td>',D=u(),O=o("tr"),O.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>Indicates whether the auth record is verified or not.
                    <br/>
                    This field can be set only by admins or auth records with &quot;Manage&quot; access.</td>`,v=u(),b=o("tr"),b.innerHTML='<td colspan="3" class="txt-hint">Schema fields</td>',g(p,"class","inline-flex")},m(h,$){r(h,e,$),r(h,t,$),r(h,a,$),r(h,f,$),r(h,m,$),n(m,c),n(c,p),L.m(p,null),n(p,y),n(p,C),n(m,T),n(m,w),n(m,H),n(m,B),r(h,E,$),r(h,A,$),r(h,U,$),r(h,R,$),r(h,F,$),r(h,S,$),r(h,D,$),r(h,O,$),r(h,v,$),r(h,b,$)},p(h,$){K!==(K=q(h))&&(L.d(1),L=K(h),L&&(L.c(),L.m(p,y)))},d(h){h&&(d(e),d(t),d(a),d(f),d(m),d(E),d(A),d(U),d(R),d(F),d(S),d(D),d(O),d(v),d(b)),L.d()}}}function Dt(s){let e;return{c(){e=o("span"),e.textContent="Optional",g(e,"class","label label-warning")},m(t,a){r(t,e,a)},d(t){t&&d(e)}}}function Jt(s){let e;return{c(){e=o("span"),e.textContent="Required",g(e,"class","label label-success")},m(t,a){r(t,e,a)},d(t){t&&d(e)}}}function It(s){let e;return{c(){e=o("span"),e.textContent="Optional",g(e,"class","label label-warning")},m(t,a){r(t,e,a)},d(t){t&&d(e)}}}function Vt(s){let e;return{c(){e=o("span"),e.textContent="Required",g(e,"class","label label-success")},m(t,a){r(t,e,a)},d(t){t&&d(e)}}}function Et(s){var m;let e,t=((m=s[13].options)==null?void 0:m.maxSelect)===1?"id":"ids",a,f;return{c(){e=_("Relation record "),a=_(t),f=_(".")},m(c,p){r(c,e,p),r(c,a,p),r(c,f,p)},p(c,p){var y;p&1&&t!==(t=((y=c[13].options)==null?void 0:y.maxSelect)===1?"id":"ids")&&x(a,t)},d(c){c&&(d(e),d(a),d(f))}}}function Ut(s){let e,t,a,f,m;return{c(){e=_("File object."),t=o("br"),a=_(`
                        Set to `),f=o("code"),f.textContent="null",m=_(" to delete already uploaded file(s).")},m(c,p){r(c,e,p),r(c,t,p),r(c,a,p),r(c,f,p),r(c,m,p)},p:ae,d(c){c&&(d(e),d(t),d(a),d(f),d(m))}}}function zt(s){let e;return{c(){e=_("URL address.")},m(t,a){r(t,e,a)},p:ae,d(t){t&&d(e)}}}function Kt(s){let e;return{c(){e=_("Email address.")},m(t,a){r(t,e,a)},p:ae,d(t){t&&d(e)}}}function Qt(s){let e;return{c(){e=_("JSON array or object.")},m(t,a){r(t,e,a)},p:ae,d(t){t&&d(e)}}}function Wt(s){let e;return{c(){e=_("Number value.")},m(t,a){r(t,e,a)},p:ae,d(t){t&&d(e)}}}function Yt(s){let e;return{c(){e=_("Plain text value.")},m(t,a){r(t,e,a)},p:ae,d(t){t&&d(e)}}}function Tt(s,e){let t,a,f,m,c,p=e[13].name+"",y,C,T,w,H=V.getFieldValueType(e[13])+"",B,E,A,U;function R(b,q){return b[13].required?Vt:It}let F=R(e),S=F(e);function D(b,q){if(b[13].type==="text")return Yt;if(b[13].type==="number")return Wt;if(b[13].type==="json")return Qt;if(b[13].type==="email")return Kt;if(b[13].type==="url")return zt;if(b[13].type==="file")return Ut;if(b[13].type==="relation")return Et}let O=D(e),v=O&&O(e);return{key:s,first:null,c(){t=o("tr"),a=o("td"),f=o("div"),S.c(),m=u(),c=o("span"),y=_(p),C=u(),T=o("td"),w=o("span"),B=_(H),E=u(),A=o("td"),v&&v.c(),U=u(),g(f,"class","inline-flex"),g(w,"class","label"),this.first=t},m(b,q){r(b,t,q),n(t,a),n(a,f),S.m(f,null),n(f,m),n(f,c),n(c,y),n(t,C),n(t,T),n(T,w),n(w,B),n(t,E),n(t,A),v&&v.m(A,null),n(t,U)},p(b,q){e=b,F!==(F=R(e))&&(S.d(1),S=F(e),S&&(S.c(),S.m(f,m))),q&1&&p!==(p=e[13].name+"")&&x(y,p),q&1&&H!==(H=V.getFieldValueType(e[13])+"")&&x(B,H),O===(O=D(e))&&v?v.p(e,q):(v&&v.d(1),v=O&&O(e),v&&(v.c(),v.m(A,null)))},d(b){b&&d(t),S.d(),v&&v.d()}}}function Ot(s,e){let t,a=e[8].code+"",f,m,c,p;function y(){return e[7](e[8])}return{key:s,first:null,c(){t=o("button"),f=_(a),m=u(),g(t,"class","tab-item"),ye(t,"active",e[2]===e[8].code),this.first=t},m(C,T){r(C,t,T),n(t,f),n(t,m),c||(p=Ft(t,"click",y),c=!0)},p(C,T){e=C,T&8&&a!==(a=e[8].code+"")&&x(f,a),T&12&&ye(t,"active",e[2]===e[8].code)},d(C){C&&d(t),c=!1,p()}}}function qt(s,e){let t,a,f,m;return a=new Mt({props:{content:e[8].body}}),{key:s,first:null,c(){t=o("div"),_e(a.$$.fragment),f=u(),g(t,"class","tab-item"),ye(t,"active",e[2]===e[8].code),this.first=t},m(c,p){r(c,t,p),he(a,t,null),n(t,f),m=!0},p(c,p){e=c;const y={};p&8&&(y.content=e[8].body),a.$set(y),(!m||p&12)&&ye(t,"active",e[2]===e[8].code)},i(c){m||(ue(a.$$.fragment,c),m=!0)},o(c){fe(a.$$.fragment,c),m=!1},d(c){c&&d(t),ke(a)}}}function Gt(s){var ot,rt,dt,ct,pt,ut;let e,t,a=s[0].name+"",f,m,c,p,y,C,T,w=s[0].name+"",H,B,E,A,U,R,F,S,D,O,v,b,q,K,L,h,$,ee,Q=s[0].name+"",ge,Re,Be,ve,ie,we,W,Se,De,z,$e,Je,Ce,J=[],Ie=new Map,Te,se,Oe,Y,qe,Ve,oe,G,Me,Ee,He,Ue,M,ze,te,Ke,Qe,We,Pe,Ye,Ae,Ge,Xe,Ze,Le,xe,et,le,Ne,re,je,X,de,I=[],tt=new Map,lt,ce,N=[],nt=new Map,Z;S=new Rt({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${s[5]}');

...

// example create data
const data = ${JSON.stringify(Object.assign({},s[4],V.dummyCollectionSchemaData(s[0])),null,4)};

const record = await pb.collection('${(ot=s[0])==null?void 0:ot.name}').create(data);
`+(s[1]?`
// (optional) send an email verification request
await pb.collection('${(rt=s[0])==null?void 0:rt.name}').requestVerification('test@example.com');
`:""),dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${s[5]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(Object.assign({},s[4],V.dummyCollectionSchemaData(s[0])),null,2)};

final record = await pb.collection('${(dt=s[0])==null?void 0:dt.name}').create(body: body);
`+(s[1]?`
// (optional) send an email verification request
await pb.collection('${(ct=s[0])==null?void 0:ct.name}').requestVerification('test@example.com');
`:"")+",",curl:`
curl \\
    --request POST \\
    --header "Content-Type: application/json" \\
    --header "Authorization: ${((pt=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:pt.token)||"<AUTH TOKEN>"}" \\
    --data '${JSON.stringify(Object.assign({},s[4],V.dummyCollectionSchemaData(s[0])))}' \\
    ${s[5]}/api/collections/things/records
`}});let j=s[6]&&$t(),P=s[1]&&Ct(s),me=ne((ut=s[0])==null?void 0:ut.schema);const at=l=>l[13].name;for(let l=0;l<me.length;l+=1){let i=St(s,me,l),k=at(i);Ie.set(k,J[l]=Tt(k,i))}te=new Mt({props:{content:"?expand=relField1,relField2.subRelField"}}),le=new Bt({});let be=ne(s[3]);const it=l=>l[8].code;for(let l=0;l<be.length;l+=1){let i=wt(s,be,l),k=it(i);tt.set(k,I[l]=Ot(k,i))}let pe=ne(s[3]);const st=l=>l[8].code;for(let l=0;l<pe.length;l+=1){let i=vt(s,pe,l),k=st(i);nt.set(k,N[l]=qt(k,i))}return{c(){e=o("h3"),t=_("Create ("),f=_(a),m=_(")"),c=u(),p=o("div"),y=o("p"),C=_("Create a new "),T=o("strong"),H=_(w),B=_(" record."),E=u(),A=o("p"),A.innerHTML=`Body parameters could be sent as <code>application/json</code> or
        <code>multipart/form-data</code>.`,U=u(),R=o("p"),R.innerHTML=`File upload is supported only via <code>multipart/form-data</code>.
        <br/>
        For more info and examples you could check the detailed
        <a href="https://pocketbase.io/docs/files-handling/" target="_blank" rel="noopener noreferrer">Files upload and handling docs
        </a>.`,F=u(),_e(S.$$.fragment),D=u(),O=o("h6"),O.textContent="API details",v=u(),b=o("div"),q=o("strong"),q.textContent="POST",K=u(),L=o("div"),h=o("p"),$=_("/api/collections/"),ee=o("strong"),ge=_(Q),Re=_("/records"),Be=u(),j&&j.c(),ve=u(),ie=o("div"),ie.textContent="Body Parameters",we=u(),W=o("table"),Se=o("thead"),Se.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr>',De=u(),z=o("tbody"),$e=o("tr"),$e.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br/>
                If not set, it will be auto generated.</td>`,Je=u(),P&&P.c(),Ce=u();for(let l=0;l<J.length;l+=1)J[l].c();Te=u(),se=o("div"),se.textContent="Query parameters",Oe=u(),Y=o("table"),qe=o("thead"),qe.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',Ve=u(),oe=o("tbody"),G=o("tr"),Me=o("td"),Me.textContent="expand",Ee=u(),He=o("td"),He.innerHTML='<span class="label">String</span>',Ue=u(),M=o("td"),ze=_(`Auto expand relations when returning the created record. Ex.:
                `),_e(te.$$.fragment),Ke=_(`
                Supports up to 6-levels depth nested relations expansion. `),Qe=o("br"),We=_(`
                The expanded relations will be appended to the record under the
                `),Pe=o("code"),Pe.textContent="expand",Ye=_(" property (eg. "),Ae=o("code"),Ae.textContent='"expand": {"relField1": {...}, ...}',Ge=_(`).
                `),Xe=o("br"),Ze=_(`
                Only the relations to which the request user has permissions to `),Le=o("strong"),Le.textContent="view",xe=_(" will be expanded."),et=u(),_e(le.$$.fragment),Ne=u(),re=o("div"),re.textContent="Responses",je=u(),X=o("div"),de=o("div");for(let l=0;l<I.length;l+=1)I[l].c();lt=u(),ce=o("div");for(let l=0;l<N.length;l+=1)N[l].c();g(e,"class","m-b-sm"),g(p,"class","content txt-lg m-b-sm"),g(O,"class","m-b-xs"),g(q,"class","label label-primary"),g(L,"class","content"),g(b,"class","alert alert-success"),g(ie,"class","section-title"),g(W,"class","table-compact table-border m-b-base"),g(se,"class","section-title"),g(Y,"class","table-compact table-border m-b-base"),g(re,"class","section-title"),g(de,"class","tabs-header compact combined left"),g(ce,"class","tabs-content"),g(X,"class","tabs")},m(l,i){r(l,e,i),n(e,t),n(e,f),n(e,m),r(l,c,i),r(l,p,i),n(p,y),n(y,C),n(y,T),n(T,H),n(y,B),n(p,E),n(p,A),n(p,U),n(p,R),r(l,F,i),he(S,l,i),r(l,D,i),r(l,O,i),r(l,v,i),r(l,b,i),n(b,q),n(b,K),n(b,L),n(L,h),n(h,$),n(h,ee),n(ee,ge),n(h,Re),n(b,Be),j&&j.m(b,null),r(l,ve,i),r(l,ie,i),r(l,we,i),r(l,W,i),n(W,Se),n(W,De),n(W,z),n(z,$e),n(z,Je),P&&P.m(z,null),n(z,Ce);for(let k=0;k<J.length;k+=1)J[k]&&J[k].m(z,null);r(l,Te,i),r(l,se,i),r(l,Oe,i),r(l,Y,i),n(Y,qe),n(Y,Ve),n(Y,oe),n(oe,G),n(G,Me),n(G,Ee),n(G,He),n(G,Ue),n(G,M),n(M,ze),he(te,M,null),n(M,Ke),n(M,Qe),n(M,We),n(M,Pe),n(M,Ye),n(M,Ae),n(M,Ge),n(M,Xe),n(M,Ze),n(M,Le),n(M,xe),n(oe,et),he(le,oe,null),r(l,Ne,i),r(l,re,i),r(l,je,i),r(l,X,i),n(X,de);for(let k=0;k<I.length;k+=1)I[k]&&I[k].m(de,null);n(X,lt),n(X,ce);for(let k=0;k<N.length;k+=1)N[k]&&N[k].m(ce,null);Z=!0},p(l,[i]){var ft,mt,bt,_t,ht,kt;(!Z||i&1)&&a!==(a=l[0].name+"")&&x(f,a),(!Z||i&1)&&w!==(w=l[0].name+"")&&x(H,w);const k={};i&51&&(k.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${l[5]}');

...

// example create data
const data = ${JSON.stringify(Object.assign({},l[4],V.dummyCollectionSchemaData(l[0])),null,4)};

const record = await pb.collection('${(ft=l[0])==null?void 0:ft.name}').create(data);
`+(l[1]?`
// (optional) send an email verification request
await pb.collection('${(mt=l[0])==null?void 0:mt.name}').requestVerification('test@example.com');
`:"")),i&51&&(k.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${l[5]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(Object.assign({},l[4],V.dummyCollectionSchemaData(l[0])),null,2)};

final record = await pb.collection('${(bt=l[0])==null?void 0:bt.name}').create(body: body);
`+(l[1]?`
// (optional) send an email verification request
await pb.collection('${(_t=l[0])==null?void 0:_t.name}').requestVerification('test@example.com');
`:"")+","),i&49&&(k.curl=`
curl \\
    --request POST \\
    --header "Content-Type: application/json" \\
    --header "Authorization: ${((ht=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:ht.token)||"<AUTH TOKEN>"}" \\
    --data '${JSON.stringify(Object.assign({},l[4],V.dummyCollectionSchemaData(l[0])))}' \\
    ${l[5]}/api/collections/things/records
`),S.$set(k),(!Z||i&1)&&Q!==(Q=l[0].name+"")&&x(ge,Q),l[6]?j||(j=$t(),j.c(),j.m(b,null)):j&&(j.d(1),j=null),l[1]?P?P.p(l,i):(P=Ct(l),P.c(),P.m(z,Ce)):P&&(P.d(1),P=null),i&1&&(me=ne((kt=l[0])==null?void 0:kt.schema),J=Fe(J,i,at,1,l,me,Ie,z,yt,Tt,null,St)),i&12&&(be=ne(l[3]),I=Fe(I,i,it,1,l,be,tt,de,yt,Ot,null,wt)),i&12&&(pe=ne(l[3]),Lt(),N=Fe(N,i,st,1,l,pe,nt,ce,Nt,qt,null,vt),jt())},i(l){if(!Z){ue(S.$$.fragment,l),ue(te.$$.fragment,l),ue(le.$$.fragment,l);for(let i=0;i<pe.length;i+=1)ue(N[i]);Z=!0}},o(l){fe(S.$$.fragment,l),fe(te.$$.fragment,l),fe(le.$$.fragment,l);for(let i=0;i<N.length;i+=1)fe(N[i]);Z=!1},d(l){l&&(d(e),d(c),d(p),d(F),d(D),d(O),d(v),d(b),d(ve),d(ie),d(we),d(W),d(Te),d(se),d(Oe),d(Y),d(Ne),d(re),d(je),d(X)),ke(S,l),j&&j.d(),P&&P.d();for(let i=0;i<J.length;i+=1)J[i].d();ke(te),ke(le);for(let i=0;i<I.length;i+=1)I[i].d();for(let i=0;i<N.length;i+=1)N[i].d()}}}function Xt(s,e,t){let a,f,m,{collection:c}=e;window.APIClient=gt;let p=200,y=[],C={};const T=w=>t(2,p=w.code);return s.$$set=w=>{"collection"in w&&t(0,c=w.collection)},s.$$.update=()=>{var w,H;s.$$.dirty&1&&t(1,a=c.type==="auth"),s.$$.dirty&1&&t(6,f=(c==null?void 0:c.createRule)===null),s.$$.dirty&1&&t(3,y=[{code:200,body:JSON.stringify(V.dummyCollectionRecord(c),null,2)},{code:400,body:`
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
            `}]),s.$$.dirty&2&&(a?t(4,C={username:"test_username",email:"test@example.com",emailVisibility:!0,password:"12345678",passwordConfirm:"12345678"}):t(4,C={}))},t(5,m=V.getApiExampleUrl(gt.baseUrl)),[c,a,p,y,C,m,f,T]}class tl extends Ht{constructor(e){super(),Pt(this,e,Xt,Gt,At,{collection:0})}}export{tl as default};
