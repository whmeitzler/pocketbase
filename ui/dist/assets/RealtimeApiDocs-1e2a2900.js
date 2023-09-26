import{S as de,i as he,s as $e,N as ge,C as w,e as p,w as I,b as l,c as le,f as u,g as s,h as y,m as be,x as fe,t as pe,a as ue,o as n,d as me,p as ve}from"./index-85973318.js";import{S as _e}from"./SdkTabs-e4e63b06.js";function Se(t){var N,P,A,U,H,J,q,B,j,L,W,z,K,M,G;let i,m,a=t[0].name+"",b,d,O,h,R,$,D,c,E,g,C,f,k,v,T,r,_;return c=new _e({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t[1]}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(N=t[0])==null?void 0:N.name} record
        pb.collection('${(P=t[0])==null?void 0:P.name}').subscribe('*', function (e) {
            console.log(e.action);
            console.log(e.record);
        });

        // Subscribe to changes only in the specified record
        pb.collection('${(A=t[0])==null?void 0:A.name}').subscribe('RECORD_ID', function (e) {
            console.log(e.action);
            console.log(e.record);
        });

        // Unsubscribe
        pb.collection('${(U=t[0])==null?void 0:U.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${(H=t[0])==null?void 0:H.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${(J=t[0])==null?void 0:J.name}').unsubscribe(); // remove all subscriptions in the collection
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t[1]}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(q=t[0])==null?void 0:q.name} record
        pb.collection('${(B=t[0])==null?void 0:B.name}').subscribe('*', (e) {
            print(e.action);
            print(e.record);
        });

        // Subscribe to changes only in the specified record
        pb.collection('${(j=t[0])==null?void 0:j.name}').subscribe('RECORD_ID', (e) {
            print(e.action);
            print(e.record);
        });

        // Unsubscribe
        pb.collection('${(L=t[0])==null?void 0:L.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${(W=t[0])==null?void 0:W.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${(z=t[0])==null?void 0:z.name}').unsubscribe(); // remove all subscriptions in the collection
    ,`,curl:`
    
    curl \\
        --request GET \\
        --header "Content-Type: application/json" \\
        --header "Authorization: ${((K=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:K.token)||"<AUTH TOKEN>"}" \\
        ${t[1]}/api/realtime

    
    #Then set the subscription    
    curl \\
        --request POST \\
        --header "Content-Type: application/json" \\
        --data '${JSON.stringify({clientId:"$CLIENT_ID",subscriptions:[(M=t[0])==null?void 0:M.id]})}' \\
        --header "Authorization: ${((G=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:G.token)||"<AUTH TOKEN>"}" \\
        ${t[1]}/api/realtime
    `}}),r=new ge({props:{content:JSON.stringify({action:"create",record:w.dummyCollectionRecord(t[0])},null,2).replace('"action": "create"','"action": "create" // create, update or delete')}}),{c(){i=p("h3"),m=I("Realtime ("),b=I(a),d=I(")"),O=l(),h=p("div"),h.innerHTML=`<p>Subscribe to realtime changes via Server-Sent Events (SSE).</p> <p>Events are sent for <strong>create</strong>, <strong>update</strong>
        and <strong>delete</strong> record operations (see &quot;Event data format&quot; section below).</p>`,R=l(),$=p("div"),$.innerHTML=`<div class="icon"><i class="ri-information-line"></i></div> <div class="contet"><p><strong>You could subscribe to a single record or to an entire collection.</strong></p> <p>When you subscribe to a <strong>single record</strong>, the collection&#39;s
            <strong>ViewRule</strong> will be used to determine whether the subscriber has access to receive the
            event message.</p> <p>When you subscribe to an <strong>entire collection</strong>, the collection&#39;s
            <strong>ListRule</strong> will be used to determine whether the subscriber has access to receive the
            event message.</p></div>`,D=l(),le(c.$$.fragment),E=l(),g=p("h6"),g.textContent="API details",C=l(),f=p("div"),f.innerHTML='<strong class="label label-primary">SSE</strong> <div class="content"><p>/api/realtime</p></div>',k=l(),v=p("div"),v.textContent="Event data format",T=l(),le(r.$$.fragment),u(i,"class","m-b-sm"),u(h,"class","content txt-lg m-b-sm"),u($,"class","alert alert-info m-t-10 m-b-sm"),u(g,"class","m-b-xs"),u(f,"class","alert"),u(v,"class","section-title")},m(e,o){s(e,i,o),y(i,m),y(i,b),y(i,d),s(e,O,o),s(e,h,o),s(e,R,o),s(e,$,o),s(e,D,o),be(c,e,o),s(e,E,o),s(e,g,o),s(e,C,o),s(e,f,o),s(e,k,o),s(e,v,o),s(e,T,o),be(r,e,o),_=!0},p(e,[o]){var Y,F,Q,X,Z,x,ee,te,oe,se,ne,ie,ae,ce,re;(!_||o&1)&&a!==(a=e[0].name+"")&&fe(b,a);const S={};o&3&&(S.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[1]}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(Y=e[0])==null?void 0:Y.name} record
        pb.collection('${(F=e[0])==null?void 0:F.name}').subscribe('*', function (e) {
            console.log(e.action);
            console.log(e.record);
        });

        // Subscribe to changes only in the specified record
        pb.collection('${(Q=e[0])==null?void 0:Q.name}').subscribe('RECORD_ID', function (e) {
            console.log(e.action);
            console.log(e.record);
        });

        // Unsubscribe
        pb.collection('${(X=e[0])==null?void 0:X.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${(Z=e[0])==null?void 0:Z.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${(x=e[0])==null?void 0:x.name}').unsubscribe(); // remove all subscriptions in the collection
    `),o&3&&(S.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[1]}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(ee=e[0])==null?void 0:ee.name} record
        pb.collection('${(te=e[0])==null?void 0:te.name}').subscribe('*', (e) {
            print(e.action);
            print(e.record);
        });

        // Subscribe to changes only in the specified record
        pb.collection('${(oe=e[0])==null?void 0:oe.name}').subscribe('RECORD_ID', (e) {
            print(e.action);
            print(e.record);
        });

        // Unsubscribe
        pb.collection('${(se=e[0])==null?void 0:se.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${(ne=e[0])==null?void 0:ne.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${(ie=e[0])==null?void 0:ie.name}').unsubscribe(); // remove all subscriptions in the collection
    ,`),o&3&&(S.curl=`
    
    curl \\
        --request GET \\
        --header "Content-Type: application/json" \\
        --header "Authorization: ${((ae=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:ae.token)||"<AUTH TOKEN>"}" \\
        ${e[1]}/api/realtime

    
    #Then set the subscription    
    curl \\
        --request POST \\
        --header "Content-Type: application/json" \\
        --data '${JSON.stringify({clientId:"$CLIENT_ID",subscriptions:[(ce=e[0])==null?void 0:ce.id]})}' \\
        --header "Authorization: ${((re=JSON.parse(localStorage.getItem("pb_admin_auth")))==null?void 0:re.token)||"<AUTH TOKEN>"}" \\
        ${e[1]}/api/realtime
    `),c.$set(S);const V={};o&1&&(V.content=JSON.stringify({action:"create",record:w.dummyCollectionRecord(e[0])},null,2).replace('"action": "create"','"action": "create" // create, update or delete')),r.$set(V)},i(e){_||(pe(c.$$.fragment,e),pe(r.$$.fragment,e),_=!0)},o(e){ue(c.$$.fragment,e),ue(r.$$.fragment,e),_=!1},d(e){e&&(n(i),n(O),n(h),n(R),n($),n(D),n(E),n(g),n(C),n(f),n(k),n(v),n(T)),me(c,e),me(r,e)}}}function Oe(t,i,m){let a,{collection:b}=i;return t.$$set=d=>{"collection"in d&&m(0,b=d.collection)},m(1,a=w.getApiExampleUrl(ve.baseUrl)),[b,a]}class Ee extends de{constructor(i){super(),he(this,i,Oe,Se,$e,{collection:0})}}export{Ee as default};
