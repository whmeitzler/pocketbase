import{S as Ie,i as Pe,s as Ae,O as U,e as r,w as $,b as k,c as Te,f as m,g as u,h as i,m as Oe,x as ee,P as $e,Q as Se,k as Be,R as qe,n as Ne,t as te,a as le,o as f,d as we,C as He,p as Le,r as j,u as Me,N as Ue}from"./index-00865822.js";import{S as je}from"./SdkTabs-2ae3cd6f.js";function De(a,l,s){const o=a.slice();return o[6]=l[s],o}function Ee(a,l,s){const o=a.slice();return o[6]=l[s],o}function Ce(a){let l;return{c(){l=r("p"),l.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",m(l,"class","txt-hint txt-sm txt-right")},m(s,o){u(s,l,o)},d(s){s&&f(l)}}}function ye(a,l){let s,o,h;function d(){return l[5](l[6])}return{key:a,first:null,c(){s=r("button"),s.textContent=`${l[6].code} `,m(s,"class","tab-item"),j(s,"active",l[2]===l[6].code),this.first=s},m(n,p){u(n,s,p),o||(h=Me(s,"click",d),o=!0)},p(n,p){l=n,p&20&&j(s,"active",l[2]===l[6].code)},d(n){n&&f(s),o=!1,h()}}}function Re(a,l){let s,o,h,d;return o=new Ue({props:{content:l[6].body}}),{key:a,first:null,c(){s=r("div"),Te(o.$$.fragment),h=k(),m(s,"class","tab-item"),j(s,"active",l[2]===l[6].code),this.first=s},m(n,p){u(n,s,p),Oe(o,s,null),i(s,h),d=!0},p(n,p){l=n,(!d||p&20)&&j(s,"active",l[2]===l[6].code)},i(n){d||(te(o.$$.fragment,n),d=!0)},o(n){le(o.$$.fragment,n),d=!1},d(n){n&&f(s),we(o)}}}function ze(a){var fe,me,_e,be;let l,s,o=a[0].name+"",h,d,n,p,D,E,z,q=a[0].name+"",K,se,J,C,F,O,Q,g,N,ae,H,T,oe,G,L=a[0].name+"",V,ne,W,ie,X,w,Y,I,Z,P,x,y,A,v=[],ce=new Map,re,S,_=[],de=new Map,R;C=new je({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[3]}');

        ...

        await pb.collection('${(fe=a[0])==null?void 0:fe.name}').delete('RECORD_ID');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        await pb.collection('${(me=a[0])==null?void 0:me.name}').delete('RECORD_ID');
    ,`,curl:`curl \\
        --request DELETE \\
        --header "Content-Type: application/json" \\
        --header "Authorization: ${((_e=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:_e.token)||"<AUTH TOKEN>"}" \\
        ${a[3]}/api/collections/${(be=a[0])==null?void 0:be.id}/records/$RECORD_ID
    `}});let b=a[1]&&Ce(),M=U(a[4]);const pe=e=>e[6].code;for(let e=0;e<M.length;e+=1){let t=Ee(a,M,e),c=pe(t);ce.set(c,v[e]=ye(c,t))}let B=U(a[4]);const ue=e=>e[6].code;for(let e=0;e<B.length;e+=1){let t=De(a,B,e),c=ue(t);de.set(c,_[e]=Re(c,t))}return{c(){l=r("h3"),s=$("Delete ("),h=$(o),d=$(")"),n=k(),p=r("div"),D=r("p"),E=$("Delete a single "),z=r("strong"),K=$(q),se=$(" record."),J=k(),Te(C.$$.fragment),F=k(),O=r("h6"),O.textContent="API details",Q=k(),g=r("div"),N=r("strong"),N.textContent="DELETE",ae=k(),H=r("div"),T=r("p"),oe=$("/api/collections/"),G=r("strong"),V=$(L),ne=$("/records/"),W=r("strong"),W.textContent=":id",ie=k(),b&&b.c(),X=k(),w=r("div"),w.textContent="Path parameters",Y=k(),I=r("table"),I.innerHTML='<thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody>',Z=k(),P=r("div"),P.textContent="Responses",x=k(),y=r("div"),A=r("div");for(let e=0;e<v.length;e+=1)v[e].c();re=k(),S=r("div");for(let e=0;e<_.length;e+=1)_[e].c();m(l,"class","m-b-sm"),m(p,"class","content txt-lg m-b-sm"),m(O,"class","m-b-xs"),m(N,"class","label label-primary"),m(H,"class","content"),m(g,"class","alert alert-danger"),m(w,"class","section-title"),m(I,"class","table-compact table-border m-b-base"),m(P,"class","section-title"),m(A,"class","tabs-header compact combined left"),m(S,"class","tabs-content"),m(y,"class","tabs")},m(e,t){u(e,l,t),i(l,s),i(l,h),i(l,d),u(e,n,t),u(e,p,t),i(p,D),i(D,E),i(D,z),i(z,K),i(D,se),u(e,J,t),Oe(C,e,t),u(e,F,t),u(e,O,t),u(e,Q,t),u(e,g,t),i(g,N),i(g,ae),i(g,H),i(H,T),i(T,oe),i(T,G),i(G,V),i(T,ne),i(T,W),i(g,ie),b&&b.m(g,null),u(e,X,t),u(e,w,t),u(e,Y,t),u(e,I,t),u(e,Z,t),u(e,P,t),u(e,x,t),u(e,y,t),i(y,A);for(let c=0;c<v.length;c+=1)v[c]&&v[c].m(A,null);i(y,re),i(y,S);for(let c=0;c<_.length;c+=1)_[c]&&_[c].m(S,null);R=!0},p(e,[t]){var he,ke,ge,ve;(!R||t&1)&&o!==(o=e[0].name+"")&&ee(h,o),(!R||t&1)&&q!==(q=e[0].name+"")&&ee(K,q);const c={};t&9&&(c.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(he=e[0])==null?void 0:he.name}').delete('RECORD_ID');
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${(ke=e[0])==null?void 0:ke.name}').delete('RECORD_ID');
    ,`),t&9&&(c.curl=`curl \\
        --request DELETE \\
        --header "Content-Type: application/json" \\
        --header "Authorization: ${((ge=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:ge.token)||"<AUTH TOKEN>"}" \\
        ${e[3]}/api/collections/${(ve=e[0])==null?void 0:ve.id}/records/$RECORD_ID
    `),C.$set(c),(!R||t&1)&&L!==(L=e[0].name+"")&&ee(V,L),e[1]?b||(b=Ce(),b.c(),b.m(g,null)):b&&(b.d(1),b=null),t&20&&(M=U(e[4]),v=$e(v,t,pe,1,e,M,ce,A,Se,ye,null,Ee)),t&20&&(B=U(e[4]),Be(),_=$e(_,t,ue,1,e,B,de,S,qe,Re,null,De),Ne())},i(e){if(!R){te(C.$$.fragment,e);for(let t=0;t<B.length;t+=1)te(_[t]);R=!0}},o(e){le(C.$$.fragment,e);for(let t=0;t<_.length;t+=1)le(_[t]);R=!1},d(e){e&&(f(l),f(n),f(p),f(J),f(F),f(O),f(Q),f(g),f(X),f(w),f(Y),f(I),f(Z),f(P),f(x),f(y)),we(C,e),b&&b.d();for(let t=0;t<v.length;t+=1)v[t].d();for(let t=0;t<_.length;t+=1)_[t].d()}}}function Ke(a,l,s){let o,h,{collection:d}=l,n=204,p=[];const D=E=>s(2,n=E.code);return a.$$set=E=>{"collection"in E&&s(0,d=E.collection)},a.$$.update=()=>{a.$$.dirty&1&&s(1,o=(d==null?void 0:d.deleteRule)===null),a.$$.dirty&3&&d!=null&&d.id&&(p.push({code:204,body:`
                null
            `}),p.push({code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to delete record. Make sure that the record is not part of a required relation reference.",
                  "data": {}
                }
            `}),o&&p.push({code:403,body:`
                    {
                      "code": 403,
                      "message": "Only admins can access this action.",
                      "data": {}
                    }
                `}),p.push({code:404,body:`
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))},s(3,h=He.getApiExampleUrl(Le.baseUrl)),[d,o,n,h,p,D]}class Qe extends Ie{constructor(l){super(),Pe(this,l,Ke,ze,Ae,{collection:0})}}export{Qe as default};