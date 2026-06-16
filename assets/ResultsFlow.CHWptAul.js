import{j as i}from"./jsx-runtime.DKcz5_Pg.js";import{r as z}from"./index.CaUodXNB.js";import"./_commonjsHelpers.Cpj98o6Y.js";function H(e,a){let c;if(a===void 0)for(const f of e)f!=null&&(c<f||c===void 0&&f>=f)&&(c=f);else{let f=-1;for(let n of e)(n=a(n,++f,e))!=null&&(c<n||c===void 0&&n>=n)&&(c=n)}return c}function fe(e,a){let c;if(a===void 0)for(const f of e)f!=null&&(c>f||c===void 0&&f>=f)&&(c=f);else{let f=-1;for(let n of e)(n=a(n,++f,e))!=null&&(c>n||c===void 0&&n>=n)&&(c=n)}return c}function T(e,a){let c=0;if(a===void 0)for(let f of e)(f=+f)&&(c+=f);else{let f=-1;for(let n of e)(n=+a(n,++f,e))&&(c+=n)}return c}function J(e,a){return e.sourceLinks.length?e.depth:a-1}function I(e){return function(){return e}}function G(e,a){return M(e.source,a.source)||e.index-a.index}function V(e,a){return M(e.target,a.target)||e.index-a.index}function M(e,a){return e.y0-a.y0}function B(e){return e.value}function de(e){return e.index}function ge(e){return e.nodes}function ue(e){return e.links}function K(e,a){const c=e.get(a);if(!c)throw new Error("missing: "+a);return c}function Y({nodes:e}){for(const a of e){let c=a.y0,f=c;for(const n of a.sourceLinks)n.y0=c+n.width/2,c+=n.width;for(const n of a.targetLinks)n.y1=f+n.width/2,f+=n.width}}function me(){let e=0,a=0,c=1,f=1,n=24,x=8,m,b=de,u=J,p,y,v=ge,N=ue,j=6;function d(){const t={nodes:v.apply(null,arguments),links:N.apply(null,arguments)};return w(t),_(t),ee(t),te(t),ie(t),Y(t),t}d.update=function(t){return Y(t),t},d.nodeId=function(t){return arguments.length?(b=typeof t=="function"?t:I(t),d):b},d.nodeAlign=function(t){return arguments.length?(u=typeof t=="function"?t:I(t),d):u},d.nodeSort=function(t){return arguments.length?(p=t,d):p},d.nodeWidth=function(t){return arguments.length?(n=+t,d):n},d.nodePadding=function(t){return arguments.length?(x=m=+t,d):x},d.nodes=function(t){return arguments.length?(v=typeof t=="function"?t:I(t),d):v},d.links=function(t){return arguments.length?(N=typeof t=="function"?t:I(t),d):N},d.linkSort=function(t){return arguments.length?(y=t,d):y},d.size=function(t){return arguments.length?(e=a=0,c=+t[0],f=+t[1],d):[c-e,f-a]},d.extent=function(t){return arguments.length?(e=+t[0][0],c=+t[1][0],a=+t[0][1],f=+t[1][1],d):[[e,a],[c,f]]},d.iterations=function(t){return arguments.length?(j=+t,d):j};function w({nodes:t,links:l}){for(const[s,r]of t.entries())r.index=s,r.sourceLinks=[],r.targetLinks=[];const o=new Map(t.map((s,r)=>[b(s,r,t),s]));for(const[s,r]of l.entries()){r.index=s;let{source:g,target:h}=r;typeof g!="object"&&(g=r.source=K(o,g)),typeof h!="object"&&(h=r.target=K(o,h)),g.sourceLinks.push(r),h.targetLinks.push(r)}if(y!=null)for(const{sourceLinks:s,targetLinks:r}of t)s.sort(y),r.sort(y)}function _({nodes:t}){for(const l of t)l.value=l.fixedValue===void 0?Math.max(T(l.sourceLinks,B),T(l.targetLinks,B)):l.fixedValue}function ee({nodes:t}){const l=t.length;let o=new Set(t),s=new Set,r=0;for(;o.size;){for(const g of o){g.depth=r;for(const{target:h}of g.sourceLinks)s.add(h)}if(++r>l)throw new Error("circular link");o=s,s=new Set}}function te({nodes:t}){const l=t.length;let o=new Set(t),s=new Set,r=0;for(;o.size;){for(const g of o){g.height=r;for(const{source:h}of g.targetLinks)s.add(h)}if(++r>l)throw new Error("circular link");o=s,s=new Set}}function re({nodes:t}){const l=H(t,r=>r.depth)+1,o=(c-e-n)/(l-1),s=new Array(l);for(const r of t){const g=Math.max(0,Math.min(l-1,Math.floor(u.call(null,r,l))));r.layer=g,r.x0=e+g*o,r.x1=r.x0+n,s[g]?s[g].push(r):s[g]=[r]}if(p)for(const r of s)r.sort(p);return s}function ne(t){const l=fe(t,o=>(f-a-(o.length-1)*m)/T(o,B));for(const o of t){let s=a;for(const r of o){r.y0=s,r.y1=s+r.value*l,s=r.y1+m;for(const g of r.sourceLinks)g.width=g.value*l}s=(f-s+m)/(o.length+1);for(let r=0;r<o.length;++r){const g=o[r];g.y0+=s*(r+1),g.y1+=s*(r+1)}se(o)}}function ie(t){const l=re(t);m=Math.min(x,(f-a)/(H(l,o=>o.length)-1)),ne(l);for(let o=0;o<j;++o){const s=Math.pow(.99,o),r=Math.max(1-s,(o+1)/j);oe(l,s,r),ae(l,s,r)}}function ae(t,l,o){for(let s=1,r=t.length;s<r;++s){const g=t[s];for(const h of g){let L=0,k=0;for(const{source:S,value:P}of h.targetLinks){let E=P*(h.layer-S.layer);L+=le(S,h)*E,k+=E}if(!(k>0))continue;let $=(L/k-h.y0)*l;h.y0+=$,h.y1+=$,O(h)}p===void 0&&g.sort(M),W(g,o)}}function oe(t,l,o){for(let s=t.length,r=s-2;r>=0;--r){const g=t[r];for(const h of g){let L=0,k=0;for(const{target:S,value:P}of h.sourceLinks){let E=P*(S.layer-h.layer);L+=ce(h,S)*E,k+=E}if(!(k>0))continue;let $=(L/k-h.y0)*l;h.y0+=$,h.y1+=$,O(h)}p===void 0&&g.sort(M),W(g,o)}}function W(t,l){const o=t.length>>1,s=t[o];F(t,s.y0-m,o-1,l),D(t,s.y1+m,o+1,l),F(t,f,t.length-1,l),D(t,a,0,l)}function D(t,l,o,s){for(;o<t.length;++o){const r=t[o],g=(l-r.y0)*s;g>1e-6&&(r.y0+=g,r.y1+=g),l=r.y1+m}}function F(t,l,o,s){for(;o>=0;--o){const r=t[o],g=(r.y1-l)*s;g>1e-6&&(r.y0-=g,r.y1-=g),l=r.y0-m}}function O({sourceLinks:t,targetLinks:l}){if(y===void 0){for(const{source:{sourceLinks:o}}of l)o.sort(V);for(const{target:{targetLinks:o}}of t)o.sort(G)}}function se(t){if(y===void 0)for(const{sourceLinks:l,targetLinks:o}of t)l.sort(V),o.sort(G)}function le(t,l){let o=t.y0-(t.sourceLinks.length-1)*m/2;for(const{target:s,width:r}of t.sourceLinks){if(s===l)break;o+=r+m}for(const{source:s,width:r}of l.targetLinks){if(s===t)break;o-=r}return o}function ce(t,l){let o=l.y0-(l.targetLinks.length-1)*m/2;for(const{source:s,width:r}of l.targetLinks){if(s===t)break;o+=r+m}for(const{target:s,width:r}of t.sourceLinks){if(s===l)break;o-=r}return o}return d}const Q=1120,R=430,he="Violations",pe=.42,xe=.58,A=e=>new Intl.NumberFormat("en-US").format(e),U=e=>`${e.toLocaleString("en-US",{maximumFractionDigits:1})}%`,X=(e,a)=>Math.max(1,e/a*100);function be(e){const a=[e.stats.incoming.websites>0?{label:"From Websites",value:X(e.stats.incoming.websites,e.stats.pageviews)}:null,e.stats.incoming.directEntries>0?{label:"Direct Entries",value:X(e.stats.incoming.directEntries,e.stats.pageviews)}:null].filter(Boolean),c=Math.max(4,e.stats.outgoing.exits/Math.max(1,e.stats.outgoing.internalPages+e.stats.outgoing.exits)*100),f=[...e.incoming,...a],n=[...e.outgoing,{label:"Exits",value:c}],x=`${e.label}:center`,m=[...f.map((u,p)=>({id:`${e.label}:source:${p}`,name:u.label,side:"source",targetLayer:0,emphasis:u.emphasis})),{id:x,name:he,side:"center",targetLayer:1},...n.map((u,p)=>({id:`${e.label}:target:${p}`,name:u.label,side:"target",targetLayer:2,emphasis:u.emphasis}))],b=[...f.map((u,p)=>({source:`${e.label}:source:${p}`,target:x,value:u.value,emphasis:"emphasis"in u?u.emphasis:!1})),...n.map((u,p)=>({source:x,target:`${e.label}:target:${p}`,value:u.value,emphasis:"emphasis"in u?u.emphasis:u.label==="Exits"}))];return me().nodeId(u=>u.id).nodeWidth(9).nodePadding(8).nodeAlign((u,p)=>u.targetLayer??J(u,p)).extent([[180,28],[Q-180,R-28]])({nodes:m.map(u=>({...u})),links:b.map(u=>({...u}))})}function C({label:e,value:a}){return i.jsxs("li",{children:[i.jsx("strong",{children:A(a)})," ",e]})}function ye({period:e}){return i.jsxs("div",{className:"rf-center",children:[i.jsx("div",{className:"rf-center-head",children:e.centerTitle}),i.jsxs("div",{className:"rf-center-body",children:[i.jsxs("p",{className:"rf-pageviews",children:[A(e.stats.pageviews)," pageviews"]}),i.jsxs("div",{className:"rf-stat-grid",children:[i.jsxs("div",{className:"rf-stat-group",children:[i.jsx("p",{children:"Incoming traffic"}),i.jsxs("ul",{children:[i.jsx(C,{label:"from internal pages",value:e.stats.incoming.internalPages}),i.jsx(C,{label:"from websites",value:e.stats.incoming.websites}),i.jsx(C,{label:"direct entries",value:e.stats.incoming.directEntries})]})]}),i.jsxs("div",{className:"rf-stat-group rf-stat-group--out",children:[i.jsx("p",{children:"Outgoing traffic"}),i.jsxs("ul",{children:[i.jsx(C,{label:"to internal pages",value:e.stats.outgoing.internalPages}),i.jsx(C,{label:"exits",value:e.stats.outgoing.exits})]})]})]})]}),i.jsxs("div",{className:"rf-reloads",children:[A(e.stats.pageReloads)," page reloads"]})]})}function Z(e,a){return a+(e-a)*pe}function we(e){if(typeof e.source!="object"||typeof e.target!="object")return"";const a=e.source,c=e.target,f=a.side==="center",n=c.side==="center",x=((a.y0??0)+(a.y1??0))/2,m=((c.y0??0)+(c.y1??0))/2,b=a.x1??0,u=c.x0??0,p=f?Z(e.y0??0,x):e.y0??0,y=n?Z(e.y1??0,m):e.y1??0,v=(u-b)*.5;return`M ${b} ${p} C ${b+v} ${p}, ${u-v} ${y}, ${u} ${y}`}function ve(e){const a=typeof e.source=="object"&&e.source.side==="center"||typeof e.target=="object"&&e.target.side==="center";return Math.max(1,(e.width??1)*(a?xe:1))}function q({period:e,compact:a}){const c=be(e),f=a?`110 0 900 ${R}`:`0 0 ${Q} ${R}`;return i.jsxs("article",{className:"rf-card","aria-label":`${e.label} traffic flow`,children:[i.jsx("h3",{className:"rf-date",children:e.label}),i.jsxs("div",{className:"rf-visual",children:[i.jsxs("svg",{className:"rf-sankey",viewBox:f,role:"img","aria-label":`${e.label} Sankey diagram for PacBot traffic`,children:[i.jsx("g",{className:"rf-links",children:c.links.map((n,x)=>i.jsx("path",{className:`rf-link${n.emphasis?" is-emphasis":""}`,d:we(n)??void 0,strokeWidth:ve(n),children:i.jsx("title",{children:`${typeof n.source=="object"?n.source.name:"Source"} to ${typeof n.target=="object"?n.target.name:"Target"}: ${U(n.value)}`})},`${e.label}-link-${x}`))}),i.jsx("g",{className:"rf-nodes",children:c.nodes.map(n=>{const x=n.side==="center",m=n.side==="target",b=x?((n.x0??0)+(n.x1??0))/2:m?(n.x0??0)-10:(n.x1??0)+10,u=((n.y0??0)+(n.y1??0))/2;return i.jsxs("g",{className:`rf-node rf-node--${n.side}${n.emphasis?" is-emphasis":""}`,children:[!x&&i.jsx("rect",{x:n.x0,y:n.y0,width:(n.x1??0)-(n.x0??0),height:Math.max(2,(n.y1??0)-(n.y0??0)),rx:"3"}),!x&&i.jsxs(i.Fragment,{children:[i.jsx("text",{x:b,y:u-5,textAnchor:m?"end":"start",className:"rf-node-label",children:n.name}),i.jsx("text",{x:b,y:u+9,textAnchor:m?"end":"start",className:"rf-node-value",children:U(n.value??0)})]})]},n.id)})})]}),i.jsx(ye,{period:e})]})]})}function Le({periods:e,title:a,caption:c,layout:f="carousel"}){const[n,x]=z.useState(0),[m,b]=z.useState(!1),[u,p]=z.useState(!1),y=e[n]??e[0],v=e.length>1,N=()=>{x(d=>(d+1)%e.length)},j=()=>{b(d=>!d)};return z.useEffect(()=>{if(!v||m)return;const d=window.setInterval(N,5e3);return()=>window.clearInterval(d)},[v,m]),z.useEffect(()=>{const d=window.matchMedia("(max-width: 620px)"),w=()=>p(d.matches);return w(),d.addEventListener("change",w),()=>d.removeEventListener("change",w)},[]),y?f==="grid"?i.jsxs("figure",{className:"rf rf--grid not-prose",children:[a&&i.jsx("div",{className:"rf-header",children:i.jsx("h3",{children:a})}),i.jsx("div",{className:"rf-grid",children:e.map(d=>i.jsx(q,{period:d,compact:!1},d.label))}),c?i.jsx("figcaption",{className:"nf-meta",children:i.jsx("p",{className:"nf-caption",children:c})}):null,i.jsx("style",{children:`
          .rf--grid { width: 100%; max-width: none; margin: 0; }
          .rf--grid .rf-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: clamp(0.75rem, 1.6vw, 1.5rem);
            width: 100%;
          }
          .rf--grid .rf-card { margin: 0; }
          /* In a 2-up grid each card is ~half width, so the 1120/430 aspect
             ratio already yields a short Sankey. Drop the 22rem floor that the
             single web card needs — otherwise the grid is locked ~858px tall
             and clips the bottom row on shorter desktops. Cap by viewport
             height too so a wide-but-short slide still fits two rows. */
          .rf--grid .rf-visual {
            min-height: 0;
            max-height: 30vh;
          }
          /* Mobile: the four static cards become a horizontal swipe carousel
             (contained scroll — never the page) so the frozen grid reflows to
             one Sankey per view instead of stacking too tall. Each card is
             slightly under full width so the next one PEEKS in — the universal
             "swipe for more" affordance — and centre snap keeps it framed. */
          @media (max-width: 760px) {
            .rf--grid .rf-grid {
              grid-template-columns: none;
              grid-auto-flow: column;
              grid-auto-columns: 86%;
              gap: 0.6rem;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              scroll-padding-inline: 7%;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
            }
            .rf--grid .rf-grid::-webkit-scrollbar { display: none; }
            .rf--grid .rf-card { scroll-snap-align: center; }
          }
        `})]}):i.jsxs("figure",{className:"rf not-prose",children:[a&&i.jsx("div",{className:"rf-header",children:i.jsx("h3",{children:a})}),i.jsx("div",{className:"rf-stage",children:i.jsx(q,{period:y,compact:u},y.label)}),i.jsxs("figcaption",{className:"nf-meta","aria-live":"polite",children:[v&&i.jsxs("div",{className:"nf-meta-controls",children:[i.jsxs("button",{type:"button",className:"nf-play",onClick:j,"aria-pressed":m,"aria-label":m?"Resume walkthrough":"Pause walkthrough",children:[i.jsxs("svg",{className:"nf-ico-pause",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[i.jsx("rect",{x:"6",y:"5",width:"4",height:"14",rx:"1"}),i.jsx("rect",{x:"14",y:"5",width:"4",height:"14",rx:"1"})]}),i.jsx("svg",{className:"nf-ico-play",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M8 5.2v13.6a.8.8 0 0 0 1.22.68l10.9-6.8a.8.8 0 0 0 0-1.36L9.22 4.52A.8.8 0 0 0 8 5.2Z"})})]}),i.jsx("div",{className:"nf-dots",role:"tablist","aria-label":"Walkthrough steps",children:e.map((d,w)=>i.jsx("button",{type:"button","data-i":w,className:`nf-dot${w===n?" is-active":""}`,onClick:()=>x(w),role:"tab","aria-selected":w===n,"aria-label":`Step ${w+1} of ${e.length}: ${d.label}`},d.label))})]}),c?i.jsx("p",{className:"nf-caption",children:c}):null]}),i.jsx("style",{children:`
        .rf {
          box-sizing: border-box;
          width: min(100%, 72rem);
          margin: 2.5rem auto;
          color: rgb(var(--c-ink));
        }

        /* The case study sits in a ~768px reading column, which crams the
           Sankey's horizontal flows. On wider screens let this one figure
           break out of the column — centred on the viewport, up to 60rem — so
           the flows get real width. Scoped to the web figure (not the deck
           grid) and gated to ≥1024px so mobile/tablet stay in the column. */
        @media (min-width: 1024px) {
          .rf:not(.rf--grid) {
            width: min(92vw, 60rem);
            position: relative;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .rf-header {
          margin: 0 0 1rem;
          max-width: 48rem;
        }

        .rf-header h3 {
          margin: 0;
          font-family: "Libre Baskerville", Georgia, serif;
          font-size: clamp(1.3rem, 2.4vw, 2rem);
          line-height: 1.18;
        }

        .rf-header p {
          margin: 0.75rem 0 0;
          color: rgb(var(--c-muted));
          font-size: 0.95rem;
          line-height: 1.55;
        }

        .rf-stage {
          width: 100%;
          max-width: 64rem;
          margin-inline: auto;
        }

        .rf-meta {
          width: 100%;
          max-width: 64rem;
          margin-inline: auto;
          padding-top: 1rem;
          display: grid;
          gap: 0.85rem;
          color: rgb(var(--c-muted));
        }

        .rf-meta-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.9rem;
        }

        .rf-card-controls {
          display: none;
        }

        @media (min-width: 520px) {
          .rf-card-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
          }
        }

        .rf-card-controls .rf-controls {
          gap: 0.5rem;
        }

        .rf-card-controls .rf-control--toggle {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          padding: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }

        .rf-carousel-meta {
          display: none;
          color: rgb(var(--c-muted));
          font-size: 0.86rem;
          text-align: center;
        }

        .rf-carousel-meta span {
          display: block;
          line-height: 1.3;
        }

        @media (min-width: 640px) {
          .rf-carousel-meta {
            display: block;
          }
        }

        .rf-carousel-count {
          margin: 0;
          color: rgb(var(--c-muted));
          font-size: 0.82rem;
          font-weight: 700;
        }

        .rf-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
        }

        .rf-card {
          min-width: 0;
          width: 100%;
          max-width: 100%;
          margin-inline: auto;
          overflow: hidden;
          border: 1px solid rgb(var(--c-ink) / 0.12);
          border-radius: 0.5rem;
          background: rgb(var(--c-paper));
          padding: clamp(0.75rem, 1.5vw, 1rem);
          box-shadow: 0 0.5rem 1.25rem rgb(var(--c-ink) / 0.06);
        }

        .rf-control {
          width: 2.5rem;
          height: 2.5rem;
          border: 1px solid rgb(var(--c-ink) / 0.16);
          border-radius: 50%;
          background: rgb(var(--c-paper));
          color: rgb(var(--c-ink));
          font: inherit;
          font-size: 1.1rem;
          line-height: 1;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .rf-caption {
          margin: 0;
          color: rgb(var(--c-muted));
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Walkthrough-style controls (nf- prefix) */
        .nf-meta {
          width: 100%;
          max-width: 64rem;
          margin-inline: auto;
          padding-top: 0.5rem;
          display: flex;
          gap: 0.75rem;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        .nf-meta-controls {
          display: flex;
          gap: 0.6rem;
          align-items: center;
          justify-content: flex-start;
        }

        .nf-play {
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          border: 1px solid rgb(var(--c-ink) / 0.12);
          background: rgb(var(--c-paper));
          display: inline-grid;
          place-items: center;
          padding: 0;
          cursor: pointer;
        }

        .nf-play .nf-ico-pause { display: inline-block; }
        .nf-play .nf-ico-play { display: none; }
        .nf-play[aria-pressed="true"] .nf-ico-pause { display: none; }
        .nf-play[aria-pressed="true"] .nf-ico-play { display: inline-block; }

        .nf-dots {
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
        }

        .nf-dot {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 999px;
          border: 1px solid rgb(var(--c-ink) / 0.18);
          background: rgb(var(--c-paper));
          padding: 0;
        }

        .nf-dot.is-active {
          background: rgb(var(--c-accent));
          border-color: rgb(var(--c-accent));
        }

        .nf-caption {
          margin: 0;
          color: rgb(var(--c-muted));
          font-size: 0.82rem;
          line-height: 1.3;
          margin-left: 0.5rem;
        }

        .rf-control:hover {
          border-color: rgb(var(--c-ink) / 0.3);
          background: rgb(var(--c-ink) / 0.06);
          color: rgb(var(--c-ink));
        }

        .rf-control:focus-visible,
        .rf-dot:focus-visible {
          outline: 2px solid rgb(var(--c-accent));
          outline-offset: 3px;
        }

        .rf-dots {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }

        .rf-dot {
          width: 0.65rem;
          height: 0.65rem;
          flex: none;
          border: 1px solid rgb(var(--c-ink) / 0.22);
          border-radius: 9999px;
          background: rgb(var(--c-paper));
          cursor: pointer;
          padding: 0;
        }

        .rf-dot.is-active {
          border-color: rgb(var(--c-accent));
          background: rgb(var(--c-accent));
        }

        .rf-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgb(var(--c-ink) / 0.12);
          border-radius: 0.5rem;
          background: rgb(var(--c-paper));
          padding: clamp(0.75rem, 1.5vw, 1rem);
          box-shadow: 0 0.5rem 1.25rem rgb(var(--c-ink) / 0.06);
        }

        .rf-date {
          margin: 0 0 0.55rem;
          text-align: center;
          font-family: "Libre Baskerville", Georgia, serif;
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          line-height: 1.2;
        }

        .rf-visual {
          position: relative;
          width: min(100%, 1120px);
          margin-inline: auto;
          aspect-ratio: 1120 / 430;
          min-height: 15rem;
          overflow: hidden;
        }

        .rf-sankey {
          display: block;
          width: 100%;
          max-width: 1120px;
          height: 100%;
          margin-inline: auto;
          overflow: hidden;
        }

        .rf-link {
          fill: none;
          stroke: rgb(var(--c-teal) / 0.22);
          stroke-linecap: butt;
          mix-blend-mode: multiply;
        }

        html.dark .rf-link {
          mix-blend-mode: normal;
          stroke: rgb(var(--c-teal));
        }

        html.dark .rf-link.is-emphasis {
          stroke: rgb(var(--c-accent));
        }

        .rf-link.is-emphasis {
          stroke: rgb(var(--c-accent) / 0.45);
        }

        .rf-node rect {
          fill: rgb(var(--c-teal) / 0.6);
        }

        .rf-node.is-emphasis rect {
          fill: rgb(var(--c-accent) / 0.8);
        }

        html.dark .rf-node rect {
          fill: rgb(var(--c-teal));
        }

        html.dark .rf-node.is-emphasis rect {
          fill: rgb(var(--c-accent));
        }

        .rf-node--center rect {
          fill: rgb(var(--c-ink) / 0.18);
        }

        .rf-node-label,
        .rf-node-value {
          font-family: Almarai, system-ui, sans-serif;
          paint-order: stroke;
          stroke: rgb(var(--c-paper));
          stroke-width: 5px;
          stroke-linejoin: round;
        }

        .rf-node-label {
          fill: rgb(var(--c-ink));
          font-size: 12px;
          font-weight: 700;
        }

        .rf-node-value {
          fill: rgb(var(--c-teal));
          font-size: 11px;
          font-weight: 700;
        }

        .rf-center {
          position: absolute;
          z-index: 2;
          left: 50%;
          top: 50%;
          width: min(14rem, 28%);
          transform: translate(-50%, -50%);
          overflow: hidden;
          border: 1px solid rgb(var(--c-ink) / 0.12);
          border-radius: 0.35rem;
          background: rgb(var(--c-paper) / 0.96);
          box-shadow:
            0 0.65rem 0 rgb(var(--c-cream) / 0.75),
            0 0.7rem 1.5rem rgb(var(--c-ink) / 0.1);
          font-size: clamp(0.54rem, 0.72vw, 0.66rem);
          backdrop-filter: blur(3px);
        }

        .rf-center-head {
          border-bottom: 1px solid rgb(var(--c-ink) / 0.1);
          background: rgb(var(--c-cream) / 0.52);
          color: rgb(var(--c-accent));
          padding: 0.48rem 0.6rem;
          font-weight: 700;
        }

        .rf-center-body {
          padding: 0.5rem 0.6rem 0.35rem;
        }

        .rf-pageviews {
          margin: 0 0 0.5rem;
          color: rgb(var(--c-ink));
          font-size: clamp(0.66rem, 0.9vw, 0.78rem);
          font-weight: 700;
        }

        .rf-stat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.35rem;
        }

        .rf-stat-group--out {
          text-align: right;
        }

        .rf-stat-group p,
        .rf-stat-group ul {
          margin: 0;
        }

        .rf-stat-group p {
          font-weight: 700;
        }

        .rf-stat-group ul {
          list-style: none;
          padding: 0;
          color: rgb(var(--c-muted));
          line-height: 1.25;
        }

        .rf-stat-group strong {
          color: rgb(var(--c-ink));
        }

        .rf-reloads {
          margin-top: 0.2rem;
          background: rgb(var(--c-cream) / 0.78);
          padding: 0.3rem 0.45rem;
          text-align: center;
          font-weight: 700;
        }

        @media (max-width: 980px) {
          .rf-card {
            width: 100%;
            margin-inline: auto;
          }
        }

        @media (max-width: 620px) {
          .rf {
            width: 100%;
            max-width: 100%;
            margin-inline: auto;
          }

          .rf-card {
            padding: 0.35rem;
          }

          .rf-date {
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
          }

          .rf-carousel-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .rf-controls {
            width: 100%;
            justify-content: space-between;
          }

          .nf-meta {
            padding-inline: 0.35rem;
          }

          .nf-play {
            width: 40px;
            height: 40px;
          }

          .nf-caption {
            flex-basis: 100%;
            margin-left: 0;
          }

          .rf-visual {
            aspect-ratio: auto;
            height: clamp(14rem, 58vw, 18rem);
            min-height: 0;
          }

          .rf-sankey {
            height: 100%;
          }

          .rf-center {
            left: 50%;
            top: 50%;
            width: min(12rem, 34%);
            transform: translate(-50%, -50%);
            font-size: clamp(0.48rem, 1.75vw, 0.58rem);
          }

          .rf-center-head {
            padding: 0.38rem 0.48rem;
          }

          .rf-center-body {
            padding: 0.42rem 0.48rem 0.3rem;
          }

          .rf-pageviews {
            font-size: clamp(0.58rem, 2vw, 0.68rem);
          }

          .rf-reloads {
            padding: 0.25rem 0.35rem;
          }

          .rf-stat-group--out {
            text-align: right;
          }

          .rf-node-label {
            font-size: 11px;
          }

          .rf-node-value {
            font-size: 10px;
          }
        }
      `})]}):null}export{Le as default};
