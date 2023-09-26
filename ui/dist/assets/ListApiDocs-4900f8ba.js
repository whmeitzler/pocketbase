import{S as sl,i as nl,s as ol,e as t,b as s,E as il,f as a,g as u,u as al,y as Kt,o as m,w,h as e,N as Ft,O as et,c as tt,m as lt,x as kt,P as Qt,Q as rl,k as cl,R as dl,n as pl,t as Be,a as Ge,d as st,T as fl,C as vt,p as ul,r as Lt}from"./index-00865822.js";import{S as ml}from"./SdkTabs-2ae3cd6f.js";function hl(r){let n,o,i;return{c(){n=t("span"),n.textContent="Show details",o=s(),i=t("i"),a(n,"class","txt"),a(i,"class","ri-arrow-down-s-line")},m(f,h){u(f,n,h),u(f,o,h),u(f,i,h)},d(f){f&&(m(n),m(o),m(i))}}}function bl(r){let n,o,i;return{c(){n=t("span"),n.textContent="Hide details",o=s(),i=t("i"),a(n,"class","txt"),a(i,"class","ri-arrow-up-s-line")},m(f,h){u(f,n,h),u(f,o,h),u(f,i,h)},d(f){f&&(m(n),m(o),m(i))}}}function Vt(r){let n,o,i,f,h,d,b,C,$,g,p,Z,Ce,Ue,P,je,H,ie,S,ee,nt,G,U,ot,re,$e,te,ke,at,ce,de,le,N,ze,ye,y,se,ve,Je,Fe,j,ne,Le,Ke,Ae,F,pe,Te,it,fe,rt,I,Oe,oe,Se,R,ue,ct,z,Re,Qe,Ee,dt,q,Ve,J,me,pt,M,ft,B,ut,O,Pe,K,he,mt,be,ht,x,Ne,ae,qe,bt,De,We,Q,ge,gt,He,_t,_e,wt,V,we,xt,xe,Xe,W,Ye,L,X,E,Ie,Ct,Y,v,Me;return{c(){n=t("p"),n.innerHTML=`The syntax basically follows the format
        <code><span class="txt-success">OPERAND</span> <span class="txt-danger">OPERATOR</span> <span class="txt-success">OPERAND</span></code>, where:`,o=s(),i=t("ul"),f=t("li"),f.innerHTML=`<code class="txt-success">OPERAND</code> - could be any of the above field literal, string (single
            or double quoted), number, null, true, false`,h=s(),d=t("li"),b=t("code"),b.textContent="OPERATOR",C=w(` - is one of:
            `),$=t("br"),g=s(),p=t("ul"),Z=t("li"),Ce=t("code"),Ce.textContent="=",Ue=s(),P=t("span"),P.textContent="Equal",je=s(),H=t("li"),ie=t("code"),ie.textContent="!=",S=s(),ee=t("span"),ee.textContent="NOT equal",nt=s(),G=t("li"),U=t("code"),U.textContent=">",ot=s(),re=t("span"),re.textContent="Greater than",$e=s(),te=t("li"),ke=t("code"),ke.textContent=">=",at=s(),ce=t("span"),ce.textContent="Greater than or equal",de=s(),le=t("li"),N=t("code"),N.textContent="<",ze=s(),ye=t("span"),ye.textContent="Less than",y=s(),se=t("li"),ve=t("code"),ve.textContent="<=",Je=s(),Fe=t("span"),Fe.textContent="Less than or equal",j=s(),ne=t("li"),Le=t("code"),Le.textContent="~",Ke=s(),Ae=t("span"),Ae.textContent=`Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,F=s(),pe=t("li"),Te=t("code"),Te.textContent="!~",it=s(),fe=t("span"),fe.textContent=`NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,rt=s(),I=t("li"),Oe=t("code"),Oe.textContent="?=",oe=s(),Se=t("em"),Se.textContent="Any/At least one of",R=s(),ue=t("span"),ue.textContent="Equal",ct=s(),z=t("li"),Re=t("code"),Re.textContent="?!=",Qe=s(),Ee=t("em"),Ee.textContent="Any/At least one of",dt=s(),q=t("span"),q.textContent="NOT equal",Ve=s(),J=t("li"),me=t("code"),me.textContent="?>",pt=s(),M=t("em"),M.textContent="Any/At least one of",ft=s(),B=t("span"),B.textContent="Greater than",ut=s(),O=t("li"),Pe=t("code"),Pe.textContent="?>=",K=s(),he=t("em"),he.textContent="Any/At least one of",mt=s(),be=t("span"),be.textContent="Greater than or equal",ht=s(),x=t("li"),Ne=t("code"),Ne.textContent="?<",ae=s(),qe=t("em"),qe.textContent="Any/At least one of",bt=s(),De=t("span"),De.textContent="Less than",We=s(),Q=t("li"),ge=t("code"),ge.textContent="?<=",gt=s(),He=t("em"),He.textContent="Any/At least one of",_t=s(),_e=t("span"),_e.textContent="Less than or equal",wt=s(),V=t("li"),we=t("code"),we.textContent="?~",xt=s(),xe=t("em"),xe.textContent="Any/At least one of",Xe=s(),W=t("span"),W.textContent=`Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,Ye=s(),L=t("li"),X=t("code"),X.textContent="?!~",E=s(),Ie=t("em"),Ie.textContent="Any/At least one of",Ct=s(),Y=t("span"),Y.textContent=`NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,v=s(),Me=t("p"),Me.innerHTML=`To group and combine several expressions you could use brackets
        <code>(...)</code>, <code>&amp;&amp;</code> (AND) and <code>||</code> (OR) tokens.`,a(b,"class","txt-danger"),a(Ce,"class","filter-op svelte-1w7s5nw"),a(P,"class","txt"),a(ie,"class","filter-op svelte-1w7s5nw"),a(ee,"class","txt"),a(U,"class","filter-op svelte-1w7s5nw"),a(re,"class","txt"),a(ke,"class","filter-op svelte-1w7s5nw"),a(ce,"class","txt"),a(N,"class","filter-op svelte-1w7s5nw"),a(ye,"class","txt"),a(ve,"class","filter-op svelte-1w7s5nw"),a(Fe,"class","txt"),a(Le,"class","filter-op svelte-1w7s5nw"),a(Ae,"class","txt"),a(Te,"class","filter-op svelte-1w7s5nw"),a(fe,"class","txt"),a(Oe,"class","filter-op svelte-1w7s5nw"),a(Se,"class","txt-hint"),a(ue,"class","txt"),a(Re,"class","filter-op svelte-1w7s5nw"),a(Ee,"class","txt-hint"),a(q,"class","txt"),a(me,"class","filter-op svelte-1w7s5nw"),a(M,"class","txt-hint"),a(B,"class","txt"),a(Pe,"class","filter-op svelte-1w7s5nw"),a(he,"class","txt-hint"),a(be,"class","txt"),a(Ne,"class","filter-op svelte-1w7s5nw"),a(qe,"class","txt-hint"),a(De,"class","txt"),a(ge,"class","filter-op svelte-1w7s5nw"),a(He,"class","txt-hint"),a(_e,"class","txt"),a(we,"class","filter-op svelte-1w7s5nw"),a(xe,"class","txt-hint"),a(W,"class","txt"),a(X,"class","filter-op svelte-1w7s5nw"),a(Ie,"class","txt-hint"),a(Y,"class","txt")},m(A,k){u(A,n,k),u(A,o,k),u(A,i,k),e(i,f),e(i,h),e(i,d),e(d,b),e(d,C),e(d,$),e(d,g),e(d,p),e(p,Z),e(Z,Ce),e(Z,Ue),e(Z,P),e(p,je),e(p,H),e(H,ie),e(H,S),e(H,ee),e(p,nt),e(p,G),e(G,U),e(G,ot),e(G,re),e(p,$e),e(p,te),e(te,ke),e(te,at),e(te,ce),e(p,de),e(p,le),e(le,N),e(le,ze),e(le,ye),e(p,y),e(p,se),e(se,ve),e(se,Je),e(se,Fe),e(p,j),e(p,ne),e(ne,Le),e(ne,Ke),e(ne,Ae),e(p,F),e(p,pe),e(pe,Te),e(pe,it),e(pe,fe),e(p,rt),e(p,I),e(I,Oe),e(I,oe),e(I,Se),e(I,R),e(I,ue),e(p,ct),e(p,z),e(z,Re),e(z,Qe),e(z,Ee),e(z,dt),e(z,q),e(p,Ve),e(p,J),e(J,me),e(J,pt),e(J,M),e(J,ft),e(J,B),e(p,ut),e(p,O),e(O,Pe),e(O,K),e(O,he),e(O,mt),e(O,be),e(p,ht),e(p,x),e(x,Ne),e(x,ae),e(x,qe),e(x,bt),e(x,De),e(p,We),e(p,Q),e(Q,ge),e(Q,gt),e(Q,He),e(Q,_t),e(Q,_e),e(p,wt),e(p,V),e(V,we),e(V,xt),e(V,xe),e(V,Xe),e(V,W),e(p,Ye),e(p,L),e(L,X),e(L,E),e(L,Ie),e(L,Ct),e(L,Y),u(A,v,k),u(A,Me,k)},d(A){A&&(m(n),m(o),m(i),m(v),m(Me))}}}function gl(r){let n,o,i,f,h;function d(g,p){return g[0]?bl:hl}let b=d(r),C=b(r),$=r[0]&&Vt();return{c(){n=t("button"),C.c(),o=s(),$&&$.c(),i=il(),a(n,"class","btn btn-sm btn-secondary m-t-10")},m(g,p){u(g,n,p),C.m(n,null),u(g,o,p),$&&$.m(g,p),u(g,i,p),f||(h=al(n,"click",r[1]),f=!0)},p(g,[p]){b!==(b=d(g))&&(C.d(1),C=b(g),C&&(C.c(),C.m(n,null))),g[0]?$||($=Vt(),$.c(),$.m(i.parentNode,i)):$&&($.d(1),$=null)},i:Kt,o:Kt,d(g){g&&(m(n),m(o),m(i)),C.d(),$&&$.d(g),f=!1,h()}}}function _l(r,n,o){let i=!1;function f(){o(0,i=!i)}return[i,f]}class wl extends sl{constructor(n){super(),nl(this,n,_l,gl,ol,{})}}function Wt(r,n,o){const i=r.slice();return i[7]=n[o],i}function Xt(r,n,o){const i=r.slice();return i[7]=n[o],i}function Yt(r,n,o){const i=r.slice();return i[12]=n[o],i[14]=o,i}function Zt(r){let n;return{c(){n=t("p"),n.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",a(n,"class","txt-hint txt-sm txt-right")},m(o,i){u(o,n,i)},d(o){o&&m(n)}}}function el(r){let n,o=r[12]+"",i,f=r[14]<r[4].length-1?", ":"",h;return{c(){n=t("code"),i=w(o),h=w(f)},m(d,b){u(d,n,b),e(n,i),u(d,h,b)},p(d,b){b&16&&o!==(o=d[12]+"")&&kt(i,o),b&16&&f!==(f=d[14]<d[4].length-1?", ":"")&&kt(h,f)},d(d){d&&(m(n),m(h))}}}function tl(r,n){let o,i,f;function h(){return n[6](n[7])}return{key:r,first:null,c(){o=t("button"),o.textContent=`${n[7].code} `,a(o,"type","button"),a(o,"class","tab-item"),Lt(o,"active",n[2]===n[7].code),this.first=o},m(d,b){u(d,o,b),i||(f=al(o,"click",h),i=!0)},p(d,b){n=d,b&36&&Lt(o,"active",n[2]===n[7].code)},d(d){d&&m(o),i=!1,f()}}}function ll(r,n){let o,i,f,h;return i=new Ft({props:{content:n[7].body}}),{key:r,first:null,c(){o=t("div"),tt(i.$$.fragment),f=s(),a(o,"class","tab-item"),Lt(o,"active",n[2]===n[7].code),this.first=o},m(d,b){u(d,o,b),lt(i,o,null),e(o,f),h=!0},p(d,b){n=d,(!h||b&36)&&Lt(o,"active",n[2]===n[7].code)},i(d){h||(Be(i.$$.fragment,d),h=!0)},o(d){Ge(i.$$.fragment,d),h=!1},d(d){d&&m(o),st(i)}}}function xl(r){var Ot,St,Rt,Et,Pt,Nt,qt,Dt;let n,o,i=r[0].name+"",f,h,d,b,C,$,g,p=r[0].name+"",Z,Ce,Ue,P,je,H,ie,S,ee,nt,G,U,ot,re,$e=r[0].name+"",te,ke,at,ce,de,le,N,ze,ye,y,se,ve,Je,Fe,j,ne,Le,Ke,Ae,F,pe,Te,it,fe,rt,I,Oe,oe,Se,R,ue,ct,z,Re,Qe,Ee,dt,q,Ve,J,me,pt,M,ft,B,ut,O,Pe,K,he,mt,be,ht,x,Ne,ae,qe,bt,De,We,Q,ge,gt,He,_t,_e,wt,V,we,xt,xe,Xe,W,Ye,L,X,E=[],Ie=new Map,Ct,Y,v=[],Me=new Map,A;P=new ml({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${r[3]}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${(Ot=r[0])==null?void 0:Ot.name}').getList(1, 50, {
            filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${(St=r[0])==null?void 0:St.name}').getFullList({
            sort: '-created',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${(Rt=r[0])==null?void 0:Rt.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${r[3]}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${(Et=r[0])==null?void 0:Et.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${(Pt=r[0])==null?void 0:Pt.name}').getFullList(
          sort: '-created',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${(Nt=r[0])==null?void 0:Nt.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    ,`,curl:`curl \\
        --header "Content-Type: application/json" \\
        --request GET \\
        --header "Authorization: ${((qt=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:qt.token)||"<AUTH TOKEN>"}" \\
        ${r[3]}/api/collections/${(Dt=r[0])==null?void 0:Dt.id}/records/$RECORD_ID?page=1&perPage=5
    `}});let k=r[1]&&Zt();oe=new Ft({props:{content:`
                        // DESC by created and ASC by id
                        ?sort=-created,id
                    `}});let Ze=et(r[4]),T=[];for(let l=0;l<Ze.length;l+=1)T[l]=el(Yt(r,Ze,l));B=new Ft({props:{content:`
                        ?filter=(id='abc' && created>'2022-01-01')
                    `}}),O=new wl({}),ae=new Ft({props:{content:"?expand=relField1,relField2.subRelField"}});let yt=et(r[5]);const At=l=>l[7].code;for(let l=0;l<yt.length;l+=1){let c=Xt(r,yt,l),_=At(c);Ie.set(_,E[l]=tl(_,c))}let $t=et(r[5]);const Tt=l=>l[7].code;for(let l=0;l<$t.length;l+=1){let c=Wt(r,$t,l),_=Tt(c);Me.set(_,v[l]=ll(_,c))}return{c(){n=t("h3"),o=w("List/Search ("),f=w(i),h=w(")"),d=s(),b=t("div"),C=t("p"),$=w("Fetch a paginated "),g=t("strong"),Z=w(p),Ce=w(" records list, supporting sorting and filtering."),Ue=s(),tt(P.$$.fragment),je=s(),H=t("h6"),H.textContent="API details",ie=s(),S=t("div"),ee=t("strong"),ee.textContent="GET",nt=s(),G=t("div"),U=t("p"),ot=w("/api/collections/"),re=t("strong"),te=w($e),ke=w("/records"),at=s(),k&&k.c(),ce=s(),de=t("div"),de.textContent="Query parameters",le=s(),N=t("table"),ze=t("thead"),ze.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',ye=s(),y=t("tbody"),se=t("tr"),se.innerHTML='<td>page</td> <td><span class="label">Number</span></td> <td>The page (aka. offset) of the paginated list (default to 1).</td>',ve=s(),Je=t("tr"),Je.innerHTML='<td>perPage</td> <td><span class="label">Number</span></td> <td>Specify the max returned records per page (default to 30).</td>',Fe=s(),j=t("tr"),ne=t("td"),ne.textContent="sort",Le=s(),Ke=t("td"),Ke.innerHTML='<span class="label">String</span>',Ae=s(),F=t("td"),pe=w("Specify the records order attribute(s). "),Te=t("br"),it=w(`
                Add `),fe=t("code"),fe.textContent="-",rt=w(" / "),I=t("code"),I.textContent="+",Oe=w(` (default) in front of the attribute for DESC / ASC order.
                Ex.:
                `),tt(oe.$$.fragment),Se=s(),R=t("p"),ue=t("strong"),ue.textContent="Supported record sort fields:",ct=s(),z=t("br"),Re=s(),Qe=t("code"),Qe.textContent="@random",Ee=w(`,
                    `);for(let l=0;l<T.length;l+=1)T[l].c();dt=s(),q=t("tr"),Ve=t("td"),Ve.textContent="filter",J=s(),me=t("td"),me.innerHTML='<span class="label">String</span>',pt=s(),M=t("td"),ft=w(`Filter the returned records. Ex.:
                `),tt(B.$$.fragment),ut=s(),tt(O.$$.fragment),Pe=s(),K=t("tr"),he=t("td"),he.textContent="expand",mt=s(),be=t("td"),be.innerHTML='<span class="label">String</span>',ht=s(),x=t("td"),Ne=w(`Auto expand record relations. Ex.:
                `),tt(ae.$$.fragment),qe=w(`
                Supports up to 6-levels depth nested relations expansion. `),bt=t("br"),De=w(`
                The expanded relations will be appended to each individual record under the
                `),We=t("code"),We.textContent="expand",Q=w(" property (eg. "),ge=t("code"),ge.textContent='"expand": {"relField1": {...}, ...}',gt=w(`).
                `),He=t("br"),_t=w(`
                Only the relations to which the request user has permissions to `),_e=t("strong"),_e.textContent="view",wt=w(" will be expanded."),V=s(),we=t("tr"),we.innerHTML=`<td id="query-page">fields</td> <td><span class="label">String</span></td> <td>Comma separated string of the fields to return in the JSON response
                <em>(by default returns all fields)</em>.
                <br/>
                Use <code>*</code> to target all keys from the specific depth level.
                <br/>
                For example: <code>?fields=*,expand.author.name</code></td>`,xt=s(),xe=t("tr"),xe.innerHTML=`<td id="query-page">skipTotal</td> <td><span class="label">Boolean</span></td> <td>If it is set the total counts query will be skipped and the response fields
                <code>totalItems</code> and <code>totalPages</code> will have <code>-1</code> value.
                <br/>
                This could drastically speed up the search queries when the total counters are not needed or cursor
                based pagination is used.
                <br/>
                For optimization purposes, it is set by default for the
                <code>getFirstListItem()</code>
                and
                <code>getFullList()</code> SDKs methods.</td>`,Xe=s(),W=t("div"),W.textContent="Responses",Ye=s(),L=t("div"),X=t("div");for(let l=0;l<E.length;l+=1)E[l].c();Ct=s(),Y=t("div");for(let l=0;l<v.length;l+=1)v[l].c();a(n,"class","m-b-sm"),a(b,"class","content txt-lg m-b-sm"),a(H,"class","m-b-xs"),a(ee,"class","label label-primary"),a(G,"class","content"),a(S,"class","alert alert-info"),a(de,"class","section-title"),a(N,"class","table-compact table-border m-b-base"),a(W,"class","section-title"),a(X,"class","tabs-header compact combined left"),a(Y,"class","tabs-content"),a(L,"class","tabs")},m(l,c){u(l,n,c),e(n,o),e(n,f),e(n,h),u(l,d,c),u(l,b,c),e(b,C),e(C,$),e(C,g),e(g,Z),e(C,Ce),u(l,Ue,c),lt(P,l,c),u(l,je,c),u(l,H,c),u(l,ie,c),u(l,S,c),e(S,ee),e(S,nt),e(S,G),e(G,U),e(U,ot),e(U,re),e(re,te),e(U,ke),e(S,at),k&&k.m(S,null),u(l,ce,c),u(l,de,c),u(l,le,c),u(l,N,c),e(N,ze),e(N,ye),e(N,y),e(y,se),e(y,ve),e(y,Je),e(y,Fe),e(y,j),e(j,ne),e(j,Le),e(j,Ke),e(j,Ae),e(j,F),e(F,pe),e(F,Te),e(F,it),e(F,fe),e(F,rt),e(F,I),e(F,Oe),lt(oe,F,null),e(F,Se),e(F,R),e(R,ue),e(R,ct),e(R,z),e(R,Re),e(R,Qe),e(R,Ee);for(let _=0;_<T.length;_+=1)T[_]&&T[_].m(R,null);e(y,dt),e(y,q),e(q,Ve),e(q,J),e(q,me),e(q,pt),e(q,M),e(M,ft),lt(B,M,null),e(M,ut),lt(O,M,null),e(y,Pe),e(y,K),e(K,he),e(K,mt),e(K,be),e(K,ht),e(K,x),e(x,Ne),lt(ae,x,null),e(x,qe),e(x,bt),e(x,De),e(x,We),e(x,Q),e(x,ge),e(x,gt),e(x,He),e(x,_t),e(x,_e),e(x,wt),e(y,V),e(y,we),e(y,xt),e(y,xe),u(l,Xe,c),u(l,W,c),u(l,Ye,c),u(l,L,c),e(L,X);for(let _=0;_<E.length;_+=1)E[_]&&E[_].m(X,null);e(L,Ct),e(L,Y);for(let _=0;_<v.length;_+=1)v[_]&&v[_].m(Y,null);A=!0},p(l,[c]){var Ht,It,Mt,Bt,Gt,Ut,jt,zt;(!A||c&1)&&i!==(i=l[0].name+"")&&kt(f,i),(!A||c&1)&&p!==(p=l[0].name+"")&&kt(Z,p);const _={};if(c&9&&(_.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${l[3]}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${(Ht=l[0])==null?void 0:Ht.name}').getList(1, 50, {
            filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${(It=l[0])==null?void 0:It.name}').getFullList({
            sort: '-created',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${(Mt=l[0])==null?void 0:Mt.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `),c&9&&(_.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${l[3]}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${(Bt=l[0])==null?void 0:Bt.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${(Gt=l[0])==null?void 0:Gt.name}').getFullList(
          sort: '-created',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${(Ut=l[0])==null?void 0:Ut.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    ,`),c&9&&(_.curl=`curl \\
        --header "Content-Type: application/json" \\
        --request GET \\
        --header "Authorization: ${((jt=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:jt.token)||"<AUTH TOKEN>"}" \\
        ${l[3]}/api/collections/${(zt=l[0])==null?void 0:zt.id}/records/$RECORD_ID?page=1&perPage=5
    `),P.$set(_),(!A||c&1)&&$e!==($e=l[0].name+"")&&kt(te,$e),l[1]?k||(k=Zt(),k.c(),k.m(S,null)):k&&(k.d(1),k=null),c&16){Ze=et(l[4]);let D;for(D=0;D<Ze.length;D+=1){const Jt=Yt(l,Ze,D);T[D]?T[D].p(Jt,c):(T[D]=el(Jt),T[D].c(),T[D].m(R,null))}for(;D<T.length;D+=1)T[D].d(1);T.length=Ze.length}c&36&&(yt=et(l[5]),E=Qt(E,c,At,1,l,yt,Ie,X,rl,tl,null,Xt)),c&36&&($t=et(l[5]),cl(),v=Qt(v,c,Tt,1,l,$t,Me,Y,dl,ll,null,Wt),pl())},i(l){if(!A){Be(P.$$.fragment,l),Be(oe.$$.fragment,l),Be(B.$$.fragment,l),Be(O.$$.fragment,l),Be(ae.$$.fragment,l);for(let c=0;c<$t.length;c+=1)Be(v[c]);A=!0}},o(l){Ge(P.$$.fragment,l),Ge(oe.$$.fragment,l),Ge(B.$$.fragment,l),Ge(O.$$.fragment,l),Ge(ae.$$.fragment,l);for(let c=0;c<v.length;c+=1)Ge(v[c]);A=!1},d(l){l&&(m(n),m(d),m(b),m(Ue),m(je),m(H),m(ie),m(S),m(ce),m(de),m(le),m(N),m(Xe),m(W),m(Ye),m(L)),st(P,l),k&&k.d(),st(oe),fl(T,l),st(B),st(O),st(ae);for(let c=0;c<E.length;c+=1)E[c].d();for(let c=0;c<v.length;c+=1)v[c].d()}}}function Cl(r,n,o){let i,f,h,{collection:d}=n,b=200,C=[];const $=g=>o(2,b=g.code);return r.$$set=g=>{"collection"in g&&o(0,d=g.collection)},r.$$.update=()=>{r.$$.dirty&1&&o(4,i=vt.getAllCollectionIdentifiers(d)),r.$$.dirty&1&&o(1,f=(d==null?void 0:d.listRule)===null),r.$$.dirty&3&&d!=null&&d.id&&(C.push({code:200,body:JSON.stringify({page:1,perPage:30,totalPages:1,totalItems:2,items:[vt.dummyCollectionRecord(d),vt.dummyCollectionRecord(d)]},null,2)}),C.push({code:400,body:`
                {
                  "code": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `}),f&&C.push({code:403,body:`
                    {
                      "code": 403,
                      "message": "Only admins can access this action.",
                      "data": {}
                    }
                `}))},o(3,h=vt.getApiExampleUrl(ul.baseUrl)),[d,f,b,h,i,C,$]}class yl extends sl{constructor(n){super(),nl(this,n,Cl,xl,ol,{collection:0})}}export{yl as default};
