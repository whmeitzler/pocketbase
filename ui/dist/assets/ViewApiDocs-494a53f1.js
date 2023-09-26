import{S as st,i as ot,s as at,N as nt,O as V,e as o,w as h,b as f,c as W,f as b,g as r,h as l,m as X,x as $e,P as We,Q as it,k as rt,R as dt,n as ct,t as j,a as L,o as d,d as Y,C as Xe,p as pt,r as Z,u as ut}from"./index-85973318.js";import{S as mt}from"./SdkTabs-e4e63b06.js";import{F as ft}from"./FieldsQueryParam-a0e20743.js";function Ye(a,n,s){const i=a.slice();return i[6]=n[s],i}function Ze(a,n,s){const i=a.slice();return i[6]=n[s],i}function et(a){let n;return{c(){n=o("p"),n.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",b(n,"class","txt-hint txt-sm txt-right")},m(s,i){r(s,n,i)},d(s){s&&d(n)}}}function tt(a,n){let s,i,$;function p(){return n[5](n[6])}return{key:a,first:null,c(){s=o("button"),s.textContent=`${n[6].code} `,b(s,"class","tab-item"),Z(s,"active",n[2]===n[6].code),this.first=s},m(c,m){r(c,s,m),i||($=ut(s,"click",p),i=!0)},p(c,m){n=c,m&20&&Z(s,"active",n[2]===n[6].code)},d(c){c&&d(s),i=!1,$()}}}function lt(a,n){let s,i,$,p;return i=new nt({props:{content:n[6].body}}),{key:a,first:null,c(){s=o("div"),W(i.$$.fragment),$=f(),b(s,"class","tab-item"),Z(s,"active",n[2]===n[6].code),this.first=s},m(c,m){r(c,s,m),X(i,s,null),l(s,$),p=!0},p(c,m){n=c,(!p||m&20)&&Z(s,"active",n[2]===n[6].code)},i(c){p||(j(i.$$.fragment,c),p=!0)},o(c){L(i.$$.fragment,c),p=!1},d(c){c&&d(s),Y(i)}}}function bt(a){var ze,Ge,Je;let n,s,i=a[0].name+"",$,p,c,m,w,C,ee,z=a[0].name+"",te,ve,le,R,ne,A,se,v,G,ye,J,E,we,oe,K=a[0].name+"",ae,Ce,ie,Re,re,I,de,q,ce,B,pe,O,ue,Oe,H,T,me,Te,fe,Fe,_,De,P,Ee,Pe,Se,be,Ae,he,Ie,qe,Be,_e,He,Ne,S,ke,N,ge,F,M,y=[],Me=new Map,xe,x,k=[],Ue=new Map,D;R=new mt({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[3]}');

        ...

        const record = await pb.collection('${(ze=a[0])==null?void 0:ze.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        final record = await pb.collection('${(Ge=a[0])==null?void 0:Ge.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    ,`,curl:`curl \\
        --header "Content-Type: application/json" \\
        --request GET \\
        --header "Authorization: ${((Je=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:Je.token)||"<AUTH TOKEN>"}" \\
        ${a[3]}/api/collections/things/records/$RECORD_ID
    `}});let g=a[1]&&et();P=new nt({props:{content:"?expand=relField1,relField2.subRelField"}}),S=new ft({});let Q=V(a[4]);const je=e=>e[6].code;for(let e=0;e<Q.length;e+=1){let t=Ze(a,Q,e),u=je(t);Me.set(u,y[e]=tt(u,t))}let U=V(a[4]);const Le=e=>e[6].code;for(let e=0;e<U.length;e+=1){let t=Ye(a,U,e),u=Le(t);Ue.set(u,k[e]=lt(u,t))}return{c(){n=o("h3"),s=h("View ("),$=h(i),p=h(")"),c=f(),m=o("div"),w=o("p"),C=h("Fetch a single "),ee=o("strong"),te=h(z),ve=h(" record."),le=f(),W(R.$$.fragment),ne=f(),A=o("h6"),A.textContent="API details",se=f(),v=o("div"),G=o("strong"),G.textContent="GET",ye=f(),J=o("div"),E=o("p"),we=h("/api/collections/"),oe=o("strong"),ae=h(K),Ce=h("/records/"),ie=o("strong"),ie.textContent=":id",Re=f(),g&&g.c(),re=f(),I=o("div"),I.textContent="Path Parameters",de=f(),q=o("table"),q.innerHTML='<thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to view.</td></tr></tbody>',ce=f(),B=o("div"),B.textContent="Query parameters",pe=f(),O=o("table"),ue=o("thead"),ue.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',Oe=f(),H=o("tbody"),T=o("tr"),me=o("td"),me.textContent="expand",Te=f(),fe=o("td"),fe.innerHTML='<span class="label">String</span>',Fe=f(),_=o("td"),De=h(`Auto expand record relations. Ex.:
                `),W(P.$$.fragment),Ee=h(`
                Supports up to 6-levels depth nested relations expansion. `),Pe=o("br"),Se=h(`
                The expanded relations will be appended to the record under the
                `),be=o("code"),be.textContent="expand",Ae=h(" property (eg. "),he=o("code"),he.textContent='"expand": {"relField1": {...}, ...}',Ie=h(`).
                `),qe=o("br"),Be=h(`
                Only the relations to which the request user has permissions to `),_e=o("strong"),_e.textContent="view",He=h(" will be expanded."),Ne=f(),W(S.$$.fragment),ke=f(),N=o("div"),N.textContent="Responses",ge=f(),F=o("div"),M=o("div");for(let e=0;e<y.length;e+=1)y[e].c();xe=f(),x=o("div");for(let e=0;e<k.length;e+=1)k[e].c();b(n,"class","m-b-sm"),b(m,"class","content txt-lg m-b-sm"),b(A,"class","m-b-xs"),b(G,"class","label label-primary"),b(J,"class","content"),b(v,"class","alert alert-info"),b(I,"class","section-title"),b(q,"class","table-compact table-border m-b-base"),b(B,"class","section-title"),b(O,"class","table-compact table-border m-b-base"),b(N,"class","section-title"),b(M,"class","tabs-header compact combined left"),b(x,"class","tabs-content"),b(F,"class","tabs")},m(e,t){r(e,n,t),l(n,s),l(n,$),l(n,p),r(e,c,t),r(e,m,t),l(m,w),l(w,C),l(w,ee),l(ee,te),l(w,ve),r(e,le,t),X(R,e,t),r(e,ne,t),r(e,A,t),r(e,se,t),r(e,v,t),l(v,G),l(v,ye),l(v,J),l(J,E),l(E,we),l(E,oe),l(oe,ae),l(E,Ce),l(E,ie),l(v,Re),g&&g.m(v,null),r(e,re,t),r(e,I,t),r(e,de,t),r(e,q,t),r(e,ce,t),r(e,B,t),r(e,pe,t),r(e,O,t),l(O,ue),l(O,Oe),l(O,H),l(H,T),l(T,me),l(T,Te),l(T,fe),l(T,Fe),l(T,_),l(_,De),X(P,_,null),l(_,Ee),l(_,Pe),l(_,Se),l(_,be),l(_,Ae),l(_,he),l(_,Ie),l(_,qe),l(_,Be),l(_,_e),l(_,He),l(H,Ne),X(S,H,null),r(e,ke,t),r(e,N,t),r(e,ge,t),r(e,F,t),l(F,M);for(let u=0;u<y.length;u+=1)y[u]&&y[u].m(M,null);l(F,xe),l(F,x);for(let u=0;u<k.length;u+=1)k[u]&&k[u].m(x,null);D=!0},p(e,[t]){var Ke,Qe,Ve;(!D||t&1)&&i!==(i=e[0].name+"")&&$e($,i),(!D||t&1)&&z!==(z=e[0].name+"")&&$e(te,z);const u={};t&9&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        const record = await pb.collection('${(Ke=e[0])==null?void 0:Ke.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `),t&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final record = await pb.collection('${(Qe=e[0])==null?void 0:Qe.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    ,`),t&8&&(u.curl=`curl \\
        --header "Content-Type: application/json" \\
        --request GET \\
        --header "Authorization: ${((Ve=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:Ve.token)||"<AUTH TOKEN>"}" \\
        ${e[3]}/api/collections/things/records/$RECORD_ID
    `),R.$set(u),(!D||t&1)&&K!==(K=e[0].name+"")&&$e(ae,K),e[1]?g||(g=et(),g.c(),g.m(v,null)):g&&(g.d(1),g=null),t&20&&(Q=V(e[4]),y=We(y,t,je,1,e,Q,Me,M,it,tt,null,Ze)),t&20&&(U=V(e[4]),rt(),k=We(k,t,Le,1,e,U,Ue,x,dt,lt,null,Ye),ct())},i(e){if(!D){j(R.$$.fragment,e),j(P.$$.fragment,e),j(S.$$.fragment,e);for(let t=0;t<U.length;t+=1)j(k[t]);D=!0}},o(e){L(R.$$.fragment,e),L(P.$$.fragment,e),L(S.$$.fragment,e);for(let t=0;t<k.length;t+=1)L(k[t]);D=!1},d(e){e&&(d(n),d(c),d(m),d(le),d(ne),d(A),d(se),d(v),d(re),d(I),d(de),d(q),d(ce),d(B),d(pe),d(O),d(ke),d(N),d(ge),d(F)),Y(R,e),g&&g.d(),Y(P),Y(S);for(let t=0;t<y.length;t+=1)y[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function ht(a,n,s){let i,$,{collection:p}=n,c=200,m=[];const w=C=>s(2,c=C.code);return a.$$set=C=>{"collection"in C&&s(0,p=C.collection)},a.$$.update=()=>{a.$$.dirty&1&&s(1,i=(p==null?void 0:p.viewRule)===null),a.$$.dirty&3&&p!=null&&p.id&&(m.push({code:200,body:JSON.stringify(Xe.dummyCollectionRecord(p),null,2)}),i&&m.push({code:403,body:`
                    {
                      "code": 403,
                      "message": "Only admins can access this action.",
                      "data": {}
                    }
                `}),m.push({code:404,body:`
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))},s(3,$=Xe.getApiExampleUrl(pt.baseUrl)),[p,i,c,$,m,w]}class $t extends st{constructor(n){super(),ot(this,n,ht,bt,at,{collection:0})}}export{$t as default};
