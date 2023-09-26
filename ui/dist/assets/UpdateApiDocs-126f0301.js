import{S as Mt,i as Ht,s as Rt,C as B,O as x,N as Dt,e as r,w as b,b as f,c as he,f as g,g as i,h as s,m as ye,x as U,P as Be,Q as yt,k as qt,R as Pt,n as Lt,t as ce,a as pe,o,d as ke,p as Nt,r as ge,u as At,y as ee}from"./index-85973318.js";import{S as jt}from"./SdkTabs-e4e63b06.js";import{F as Ft}from"./FieldsQueryParam-a0e20743.js";function kt(c,e,t){const n=c.slice();return n[8]=e[t],n}function gt(c,e,t){const n=c.slice();return n[8]=e[t],n}function vt(c,e,t){const n=c.slice();return n[13]=e[t],n}function wt(c){let e;return{c(){e=r("p"),e.innerHTML=`<em>Note that in case of a password change all previously issued tokens for the current record
                will be automatically invalidated and if you want your user to remain signed in you need to
                reauthenticate manually after the update call.</em>`},m(t,n){i(t,e,n)},d(t){t&&o(e)}}}function Tt(c){let e;return{c(){e=r("p"),e.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",g(e,"class","txt-hint txt-sm txt-right")},m(t,n){i(t,e,n)},d(t){t&&o(e)}}}function Ct(c){let e,t,n,u,m,d,p,y,w,S,v,$,L,I,D,J,N;return{c(){e=r("tr"),e.innerHTML='<td colspan="3" class="txt-hint">Auth fields</td>',t=f(),n=r("tr"),n.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>username</span></div></td> <td><span class="label">String</span></td> <td>The username of the auth record.</td>',u=f(),m=r("tr"),m.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>email</span></div></td> <td><span class="label">String</span></td> <td>The auth record email address.
                    <br/>
                    This field can be updated only by admins or auth records with &quot;Manage&quot; access.
                    <br/>
                    Regular accounts can update their email by calling &quot;Request email change&quot;.</td>`,d=f(),p=r("tr"),p.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>emailVisibility</span></div></td> <td><span class="label">Boolean</span></td> <td>Whether to show/hide the auth record email when fetching the record data.</td>',y=f(),w=r("tr"),w.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>oldPassword</span></div></td> <td><span class="label">String</span></td> <td>Old auth record password.
                    <br/>
                    This field is required only when changing the record password. Admins and auth records with
                    &quot;Manage&quot; access can skip this field.</td>`,S=f(),v=r("tr"),v.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>New auth record password.</td>',$=f(),L=r("tr"),L.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>New auth record password confirmation.</td>',I=f(),D=r("tr"),D.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>Indicates whether the auth record is verified or not.
                    <br/>
                    This field can be set only by admins or auth records with &quot;Manage&quot; access.</td>`,J=f(),N=r("tr"),N.innerHTML='<td colspan="3" class="txt-hint">Schema fields</td>'},m(k,_){i(k,e,_),i(k,t,_),i(k,n,_),i(k,u,_),i(k,m,_),i(k,d,_),i(k,p,_),i(k,y,_),i(k,w,_),i(k,S,_),i(k,v,_),i(k,$,_),i(k,L,_),i(k,I,_),i(k,D,_),i(k,J,_),i(k,N,_)},d(k){k&&(o(e),o(t),o(n),o(u),o(m),o(d),o(p),o(y),o(w),o(S),o(v),o($),o(L),o(I),o(D),o(J),o(N))}}}function Et(c){let e;return{c(){e=r("span"),e.textContent="Optional",g(e,"class","label label-warning")},m(t,n){i(t,e,n)},d(t){t&&o(e)}}}function Bt(c){let e;return{c(){e=r("span"),e.textContent="Required",g(e,"class","label label-success")},m(t,n){i(t,e,n)},d(t){t&&o(e)}}}function It(c){var m;let e,t=((m=c[13].options)==null?void 0:m.maxSelect)>1?"ids":"id",n,u;return{c(){e=b("User "),n=b(t),u=b(".")},m(d,p){i(d,e,p),i(d,n,p),i(d,u,p)},p(d,p){var y;p&1&&t!==(t=((y=d[13].options)==null?void 0:y.maxSelect)>1?"ids":"id")&&U(n,t)},d(d){d&&(o(e),o(n),o(u))}}}function Jt(c){var m;let e,t=((m=c[13].options)==null?void 0:m.maxSelect)>1?"ids":"id",n,u;return{c(){e=b("Relation record "),n=b(t),u=b(".")},m(d,p){i(d,e,p),i(d,n,p),i(d,u,p)},p(d,p){var y;p&1&&t!==(t=((y=d[13].options)==null?void 0:y.maxSelect)>1?"ids":"id")&&U(n,t)},d(d){d&&(o(e),o(n),o(u))}}}function Ut(c){let e,t,n,u,m;return{c(){e=b("File object."),t=r("br"),n=b(`
                        Set to `),u=r("code"),u.textContent="null",m=b(" to delete already uploaded file(s).")},m(d,p){i(d,e,p),i(d,t,p),i(d,n,p),i(d,u,p),i(d,m,p)},p:ee,d(d){d&&(o(e),o(t),o(n),o(u),o(m))}}}function Vt(c){let e;return{c(){e=b("URL address.")},m(t,n){i(t,e,n)},p:ee,d(t){t&&o(e)}}}function zt(c){let e;return{c(){e=b("Email address.")},m(t,n){i(t,e,n)},p:ee,d(t){t&&o(e)}}}function Kt(c){let e;return{c(){e=b("JSON array or object.")},m(t,n){i(t,e,n)},p:ee,d(t){t&&o(e)}}}function Qt(c){let e;return{c(){e=b("Number value.")},m(t,n){i(t,e,n)},p:ee,d(t){t&&o(e)}}}function Wt(c){let e;return{c(){e=b("Plain text value.")},m(t,n){i(t,e,n)},p:ee,d(t){t&&o(e)}}}function St(c,e){let t,n,u,m,d,p=e[13].name+"",y,w,S,v,$=B.getFieldValueType(e[13])+"",L,I,D,J;function N(C,O){return C[13].required?Bt:Et}let k=N(e),_=k(e);function A(C,O){if(C[13].type==="text")return Wt;if(C[13].type==="number")return Qt;if(C[13].type==="json")return Kt;if(C[13].type==="email")return zt;if(C[13].type==="url")return Vt;if(C[13].type==="file")return Ut;if(C[13].type==="relation")return Jt;if(C[13].type==="user")return It}let j=A(e),T=j&&j(e);return{key:c,first:null,c(){t=r("tr"),n=r("td"),u=r("div"),_.c(),m=f(),d=r("span"),y=b(p),w=f(),S=r("td"),v=r("span"),L=b($),I=f(),D=r("td"),T&&T.c(),J=f(),g(u,"class","inline-flex"),g(v,"class","label"),this.first=t},m(C,O){i(C,t,O),s(t,n),s(n,u),_.m(u,null),s(u,m),s(u,d),s(d,y),s(t,w),s(t,S),s(S,v),s(v,L),s(t,I),s(t,D),T&&T.m(D,null),s(t,J)},p(C,O){e=C,k!==(k=N(e))&&(_.d(1),_=k(e),_&&(_.c(),_.m(u,m))),O&1&&p!==(p=e[13].name+"")&&U(y,p),O&1&&$!==($=B.getFieldValueType(e[13])+"")&&U(L,$),j===(j=A(e))&&T?T.p(e,O):(T&&T.d(1),T=j&&j(e),T&&(T.c(),T.m(D,null)))},d(C){C&&o(t),_.d(),T&&T.d()}}}function Ot(c,e){let t,n=e[8].code+"",u,m,d,p;function y(){return e[7](e[8])}return{key:c,first:null,c(){t=r("button"),u=b(n),m=f(),g(t,"class","tab-item"),ge(t,"active",e[1]===e[8].code),this.first=t},m(w,S){i(w,t,S),s(t,u),s(t,m),d||(p=At(t,"click",y),d=!0)},p(w,S){e=w,S&4&&n!==(n=e[8].code+"")&&U(u,n),S&6&&ge(t,"active",e[1]===e[8].code)},d(w){w&&o(t),d=!1,p()}}}function $t(c,e){let t,n,u,m;return n=new Dt({props:{content:e[8].body}}),{key:c,first:null,c(){t=r("div"),he(n.$$.fragment),u=f(),g(t,"class","tab-item"),ge(t,"active",e[1]===e[8].code),this.first=t},m(d,p){i(d,t,p),ye(n,t,null),s(t,u),m=!0},p(d,p){e=d;const y={};p&4&&(y.content=e[8].body),n.$set(y),(!m||p&6)&&ge(t,"active",e[1]===e[8].code)},i(d){m||(ce(n.$$.fragment,d),m=!0)},o(d){pe(n.$$.fragment,d),m=!1},d(d){d&&o(t),ke(n)}}}function Yt(c){var ct,pt,ut,ft;let e,t,n=c[0].name+"",u,m,d,p,y,w,S,v=c[0].name+"",$,L,I,D,J,N,k,_,A,j,T,C,O,ue,Ie,fe,G,Je,ve,me=c[0].name+"",we,Ue,Te,Ve,Ce,te,Se,le,Oe,ne,$e,V,De,ze,z,Me,F=[],Ke=new Map,He,ae,Re,K,qe,Qe,se,Q,Pe,We,Le,Ye,M,Ge,X,Xe,Ze,xe,Ne,et,Ae,tt,je,lt,nt,Z,Fe,ie,Ee,W,oe,E=[],at=new Map,st,de,H=[],it=new Map,Y,R=c[6]&&wt();A=new jt({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${c[4]}');

...

// example update data
const data = ${JSON.stringify(Object.assign({},c[3],B.dummyCollectionSchemaData(c[0])),null,4)};

const record = await pb.collection('${(ct=c[0])==null?void 0:ct.name}').update('RECORD_ID', data);
    `,dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${c[4]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(Object.assign({},c[3],B.dummyCollectionSchemaData(c[0])),null,2)};

final record = await pb.collection('${(pt=c[0])==null?void 0:pt.name}').update('RECORD_ID', body: body);
    ,`,curl:`
    curl \\
        --request PATCH \\
        --header "Content-Type: application/json" \\
        --header "Authorization: ${((ut=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:ut.token)||"<AUTH TOKEN>"}" \\
        --data '${JSON.stringify(Object.assign({id:"$RECORD_ID"},c[3],B.dummyCollectionSchemaData(c[0])))}' \\
        ${c[4]}/api/collections/things/records
    `}});let q=c[5]&&Tt(),P=c[6]&&Ct(),be=x((ft=c[0])==null?void 0:ft.schema);const ot=l=>l[13].name;for(let l=0;l<be.length;l+=1){let a=vt(c,be,l),h=ot(a);Ke.set(h,F[l]=St(h,a))}X=new Dt({props:{content:"?expand=relField1,relField2.subRelField21"}}),Z=new Ft({});let _e=x(c[2]);const dt=l=>l[8].code;for(let l=0;l<_e.length;l+=1){let a=gt(c,_e,l),h=dt(a);at.set(h,E[l]=Ot(h,a))}let re=x(c[2]);const rt=l=>l[8].code;for(let l=0;l<re.length;l+=1){let a=kt(c,re,l),h=rt(a);it.set(h,H[l]=$t(h,a))}return{c(){e=r("h3"),t=b("Update ("),u=b(n),m=b(")"),d=f(),p=r("div"),y=r("p"),w=b("Update a single "),S=r("strong"),$=b(v),L=b(" record."),I=f(),D=r("p"),D.innerHTML=`Body parameters could be sent as <code>application/json</code> or
        <code>multipart/form-data</code>.`,J=f(),N=r("p"),N.innerHTML=`File upload is supported only via <code>multipart/form-data</code>.
        <br/>
        For more info and examples you could check the detailed
        <a href="https://pocketbase.io/docs/files-handling/" target="_blank" rel="noopener noreferrer">Files upload and handling docs
        </a>.`,k=f(),R&&R.c(),_=f(),he(A.$$.fragment),j=f(),T=r("h6"),T.textContent="API details",C=f(),O=r("div"),ue=r("strong"),ue.textContent="PATCH",Ie=f(),fe=r("div"),G=r("p"),Je=b("/api/collections/"),ve=r("strong"),we=b(me),Ue=b("/records/"),Te=r("strong"),Te.textContent=":id",Ve=f(),q&&q.c(),Ce=f(),te=r("div"),te.textContent="Path parameters",Se=f(),le=r("table"),le.innerHTML='<thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to update.</td></tr></tbody>',Oe=f(),ne=r("div"),ne.textContent="Body Parameters",$e=f(),V=r("table"),De=r("thead"),De.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr>',ze=f(),z=r("tbody"),P&&P.c(),Me=f();for(let l=0;l<F.length;l+=1)F[l].c();He=f(),ae=r("div"),ae.textContent="Query parameters",Re=f(),K=r("table"),qe=r("thead"),qe.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',Qe=f(),se=r("tbody"),Q=r("tr"),Pe=r("td"),Pe.textContent="expand",We=f(),Le=r("td"),Le.innerHTML='<span class="label">String</span>',Ye=f(),M=r("td"),Ge=b(`Auto expand relations when returning the updated record. Ex.:
                `),he(X.$$.fragment),Xe=b(`
                Supports up to 6-levels depth nested relations expansion. `),Ze=r("br"),xe=b(`
                The expanded relations will be appended to the record under the
                `),Ne=r("code"),Ne.textContent="expand",et=b(" property (eg. "),Ae=r("code"),Ae.textContent='"expand": {"relField1": {...}, ...}',tt=b(`). Only
                the relations that the user has permissions to `),je=r("strong"),je.textContent="view",lt=b(" will be expanded."),nt=f(),he(Z.$$.fragment),Fe=f(),ie=r("div"),ie.textContent="Responses",Ee=f(),W=r("div"),oe=r("div");for(let l=0;l<E.length;l+=1)E[l].c();st=f(),de=r("div");for(let l=0;l<H.length;l+=1)H[l].c();g(e,"class","m-b-sm"),g(p,"class","content txt-lg m-b-sm"),g(T,"class","m-b-xs"),g(ue,"class","label label-primary"),g(fe,"class","content"),g(O,"class","alert alert-warning"),g(te,"class","section-title"),g(le,"class","table-compact table-border m-b-base"),g(ne,"class","section-title"),g(V,"class","table-compact table-border m-b-base"),g(ae,"class","section-title"),g(K,"class","table-compact table-border m-b-lg"),g(ie,"class","section-title"),g(oe,"class","tabs-header compact combined left"),g(de,"class","tabs-content"),g(W,"class","tabs")},m(l,a){i(l,e,a),s(e,t),s(e,u),s(e,m),i(l,d,a),i(l,p,a),s(p,y),s(y,w),s(y,S),s(S,$),s(y,L),s(p,I),s(p,D),s(p,J),s(p,N),s(p,k),R&&R.m(p,null),i(l,_,a),ye(A,l,a),i(l,j,a),i(l,T,a),i(l,C,a),i(l,O,a),s(O,ue),s(O,Ie),s(O,fe),s(fe,G),s(G,Je),s(G,ve),s(ve,we),s(G,Ue),s(G,Te),s(O,Ve),q&&q.m(O,null),i(l,Ce,a),i(l,te,a),i(l,Se,a),i(l,le,a),i(l,Oe,a),i(l,ne,a),i(l,$e,a),i(l,V,a),s(V,De),s(V,ze),s(V,z),P&&P.m(z,null),s(z,Me);for(let h=0;h<F.length;h+=1)F[h]&&F[h].m(z,null);i(l,He,a),i(l,ae,a),i(l,Re,a),i(l,K,a),s(K,qe),s(K,Qe),s(K,se),s(se,Q),s(Q,Pe),s(Q,We),s(Q,Le),s(Q,Ye),s(Q,M),s(M,Ge),ye(X,M,null),s(M,Xe),s(M,Ze),s(M,xe),s(M,Ne),s(M,et),s(M,Ae),s(M,tt),s(M,je),s(M,lt),s(se,nt),ye(Z,se,null),i(l,Fe,a),i(l,ie,a),i(l,Ee,a),i(l,W,a),s(W,oe);for(let h=0;h<E.length;h+=1)E[h]&&E[h].m(oe,null);s(W,st),s(W,de);for(let h=0;h<H.length;h+=1)H[h]&&H[h].m(de,null);Y=!0},p(l,[a]){var mt,bt,_t,ht;(!Y||a&1)&&n!==(n=l[0].name+"")&&U(u,n),(!Y||a&1)&&v!==(v=l[0].name+"")&&U($,v),l[6]?R||(R=wt(),R.c(),R.m(p,null)):R&&(R.d(1),R=null);const h={};a&25&&(h.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${l[4]}');

...

// example update data
const data = ${JSON.stringify(Object.assign({},l[3],B.dummyCollectionSchemaData(l[0])),null,4)};

const record = await pb.collection('${(mt=l[0])==null?void 0:mt.name}').update('RECORD_ID', data);
    `),a&25&&(h.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${l[4]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(Object.assign({},l[3],B.dummyCollectionSchemaData(l[0])),null,2)};

final record = await pb.collection('${(bt=l[0])==null?void 0:bt.name}').update('RECORD_ID', body: body);
    ,`),a&25&&(h.curl=`
    curl \\
        --request PATCH \\
        --header "Content-Type: application/json" \\
        --header "Authorization: ${((_t=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:_t.token)||"<AUTH TOKEN>"}" \\
        --data '${JSON.stringify(Object.assign({id:"$RECORD_ID"},l[3],B.dummyCollectionSchemaData(l[0])))}' \\
        ${l[4]}/api/collections/things/records
    `),A.$set(h),(!Y||a&1)&&me!==(me=l[0].name+"")&&U(we,me),l[5]?q||(q=Tt(),q.c(),q.m(O,null)):q&&(q.d(1),q=null),l[6]?P||(P=Ct(),P.c(),P.m(z,Me)):P&&(P.d(1),P=null),a&1&&(be=x((ht=l[0])==null?void 0:ht.schema),F=Be(F,a,ot,1,l,be,Ke,z,yt,St,null,vt)),a&6&&(_e=x(l[2]),E=Be(E,a,dt,1,l,_e,at,oe,yt,Ot,null,gt)),a&6&&(re=x(l[2]),qt(),H=Be(H,a,rt,1,l,re,it,de,Pt,$t,null,kt),Lt())},i(l){if(!Y){ce(A.$$.fragment,l),ce(X.$$.fragment,l),ce(Z.$$.fragment,l);for(let a=0;a<re.length;a+=1)ce(H[a]);Y=!0}},o(l){pe(A.$$.fragment,l),pe(X.$$.fragment,l),pe(Z.$$.fragment,l);for(let a=0;a<H.length;a+=1)pe(H[a]);Y=!1},d(l){l&&(o(e),o(d),o(p),o(_),o(j),o(T),o(C),o(O),o(Ce),o(te),o(Se),o(le),o(Oe),o(ne),o($e),o(V),o(He),o(ae),o(Re),o(K),o(Fe),o(ie),o(Ee),o(W)),R&&R.d(),ke(A,l),q&&q.d(),P&&P.d();for(let a=0;a<F.length;a+=1)F[a].d();ke(X),ke(Z);for(let a=0;a<E.length;a+=1)E[a].d();for(let a=0;a<H.length;a+=1)H[a].d()}}}function Gt(c,e,t){let n,u,m,{collection:d}=e,p=200,y=[],w={};const S=v=>t(1,p=v.code);return c.$$set=v=>{"collection"in v&&t(0,d=v.collection)},c.$$.update=()=>{var v,$;c.$$.dirty&1&&t(6,n=(d==null?void 0:d.type)==="auth"),c.$$.dirty&1&&t(5,u=(d==null?void 0:d.updateRule)===null),c.$$.dirty&1&&t(2,y=[{code:200,body:JSON.stringify(B.dummyCollectionRecord(d),null,2)},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to update record.",
                  "data": {
                    "${($=(v=d==null?void 0:d.schema)==null?void 0:v[0])==null?void 0:$.name}": {
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
            `},{code:404,body:`
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}]),c.$$.dirty&1&&(d.type==="auth"?t(3,w={username:"test_username_update",emailVisibility:!1,password:"87654321",passwordConfirm:"87654321",oldPassword:"12345678"}):t(3,w={}))},t(4,m=B.getApiExampleUrl(Nt.baseUrl)),[d,p,y,w,m,u,n,S]}class el extends Mt{constructor(e){super(),Ht(this,e,Gt,Yt,Rt,{collection:0})}}export{el as default};
