import{j as l}from"./jsx-runtime.DKcz5_Pg.js";import{r as P}from"./index.CaUodXNB.js";import"./_commonjsHelpers.Cpj98o6Y.js";function F(e,a){let r;if(a===void 0)for(const c of e)c!=null&&(r<c||r===void 0&&c>=c)&&(r=c);else{let c=-1;for(let f of e)(f=a(f,++c,e))!=null&&(r<f||r===void 0&&f>=f)&&(r=f)}return r}function ce(e,a){let r;if(a===void 0)for(const c of e)c!=null&&(r>c||r===void 0&&c>=c)&&(r=c);else{let c=-1;for(let f of e)(f=a(f,++c,e))!=null&&(r>f||r===void 0&&f>=f)&&(r=f)}return r}function T(e,a){let r=0;if(a===void 0)for(let c of e)(c=+c)&&(r+=c);else{let c=-1;for(let f of e)(f=+a(f,++c,e))&&(r+=f)}return r}function X(e,a){return e.sourceLinks.length?e.depth:a-1}function C(e){return function(){return e}}function H(e,a){return z(e.source,a.source)||e.index-a.index}function O(e,a){return z(e.target,a.target)||e.index-a.index}function z(e,a){return e.y0-a.y0}function M(e){return e.value}function fe(e){return e.index}function de(e){return e.nodes}function ue(e){return e.links}function G(e,a){const r=e.get(a);if(!r)throw new Error("missing: "+a);return r}function V({nodes:e}){for(const a of e){let r=a.y0,c=r;for(const f of a.sourceLinks)f.y0=r+f.width/2,r+=f.width;for(const f of a.targetLinks)f.y1=c+f.width/2,c+=f.width}}function ge(){let e=0,a=0,r=1,c=1,f=24,x=8,h,y=fe,u=X,p,v,b=de,w=ue,E=6;function g(){const t={nodes:b.apply(null,arguments),links:w.apply(null,arguments)};return J(t),Q(t),_(t),ee(t),ne(t),V(t),t}g.update=function(t){return V(t),t},g.nodeId=function(t){return arguments.length?(y=typeof t=="function"?t:C(t),g):y},g.nodeAlign=function(t){return arguments.length?(u=typeof t=="function"?t:C(t),g):u},g.nodeSort=function(t){return arguments.length?(p=t,g):p},g.nodeWidth=function(t){return arguments.length?(f=+t,g):f},g.nodePadding=function(t){return arguments.length?(x=h=+t,g):x},g.nodes=function(t){return arguments.length?(b=typeof t=="function"?t:C(t),g):b},g.links=function(t){return arguments.length?(w=typeof t=="function"?t:C(t),g):w},g.linkSort=function(t){return arguments.length?(v=t,g):v},g.size=function(t){return arguments.length?(e=a=0,r=+t[0],c=+t[1],g):[r-e,c-a]},g.extent=function(t){return arguments.length?(e=+t[0][0],r=+t[1][0],a=+t[0][1],c=+t[1][1],g):[[e,a],[r,c]]},g.iterations=function(t){return arguments.length?(E=+t,g):E};function J({nodes:t,links:s}){for(const[o,n]of t.entries())n.index=o,n.sourceLinks=[],n.targetLinks=[];const i=new Map(t.map((o,n)=>[y(o,n,t),o]));for(const[o,n]of s.entries()){n.index=o;let{source:d,target:m}=n;typeof d!="object"&&(d=n.source=G(i,d)),typeof m!="object"&&(m=n.target=G(i,m)),d.sourceLinks.push(n),m.targetLinks.push(n)}if(v!=null)for(const{sourceLinks:o,targetLinks:n}of t)o.sort(v),n.sort(v)}function Q({nodes:t}){for(const s of t)s.value=s.fixedValue===void 0?Math.max(T(s.sourceLinks,M),T(s.targetLinks,M)):s.fixedValue}function _({nodes:t}){const s=t.length;let i=new Set(t),o=new Set,n=0;for(;i.size;){for(const d of i){d.depth=n;for(const{target:m}of d.sourceLinks)o.add(m)}if(++n>s)throw new Error("circular link");i=o,o=new Set}}function ee({nodes:t}){const s=t.length;let i=new Set(t),o=new Set,n=0;for(;i.size;){for(const d of i){d.height=n;for(const{source:m}of d.targetLinks)o.add(m)}if(++n>s)throw new Error("circular link");i=o,o=new Set}}function te({nodes:t}){const s=F(t,n=>n.depth)+1,i=(r-e-f)/(s-1),o=new Array(s);for(const n of t){const d=Math.max(0,Math.min(s-1,Math.floor(u.call(null,n,s))));n.layer=d,n.x0=e+d*i,n.x1=n.x0+f,o[d]?o[d].push(n):o[d]=[n]}if(p)for(const n of o)n.sort(p);return o}function re(t){const s=ce(t,i=>(c-a-(i.length-1)*h)/T(i,M));for(const i of t){let o=a;for(const n of i){n.y0=o,n.y1=o+n.value*s,o=n.y1+h;for(const d of n.sourceLinks)d.width=d.value*s}o=(c-o+h)/(i.length+1);for(let n=0;n<i.length;++n){const d=i[n];d.y0+=o*(n+1),d.y1+=o*(n+1)}oe(i)}}function ne(t){const s=te(t);h=Math.min(x,(c-a)/(F(s,i=>i.length)-1)),re(s);for(let i=0;i<E;++i){const o=Math.pow(.99,i),n=Math.max(1-o,(i+1)/E);ae(s,o,n),ie(s,o,n)}}function ie(t,s,i){for(let o=1,n=t.length;o<n;++o){const d=t[o];for(const m of d){let j=0,k=0;for(const{source:L,value:I}of m.targetLinks){let $=I*(m.layer-L.layer);j+=se(L,m)*$,k+=$}if(!(k>0))continue;let N=(j/k-m.y0)*s;m.y0+=N,m.y1+=N,D(m)}p===void 0&&d.sort(z),R(d,i)}}function ae(t,s,i){for(let o=t.length,n=o-2;n>=0;--n){const d=t[n];for(const m of d){let j=0,k=0;for(const{target:L,value:I}of m.sourceLinks){let $=I*(L.layer-m.layer);j+=le(m,L)*$,k+=$}if(!(k>0))continue;let N=(j/k-m.y0)*s;m.y0+=N,m.y1+=N,D(m)}p===void 0&&d.sort(z),R(d,i)}}function R(t,s){const i=t.length>>1,o=t[i];W(t,o.y0-h,i-1,s),A(t,o.y1+h,i+1,s),W(t,c,t.length-1,s),A(t,a,0,s)}function A(t,s,i,o){for(;i<t.length;++i){const n=t[i],d=(s-n.y0)*o;d>1e-6&&(n.y0+=d,n.y1+=d),s=n.y1+h}}function W(t,s,i,o){for(;i>=0;--i){const n=t[i],d=(n.y1-s)*o;d>1e-6&&(n.y0-=d,n.y1-=d),s=n.y0-h}}function D({sourceLinks:t,targetLinks:s}){if(v===void 0){for(const{source:{sourceLinks:i}}of s)i.sort(O);for(const{target:{targetLinks:i}}of t)i.sort(H)}}function oe(t){if(v===void 0)for(const{sourceLinks:s,targetLinks:i}of t)s.sort(O),i.sort(H)}function se(t,s){let i=t.y0-(t.sourceLinks.length-1)*h/2;for(const{target:o,width:n}of t.sourceLinks){if(o===s)break;i+=n+h}for(const{source:o,width:n}of s.targetLinks){if(o===t)break;i-=n}return i}function le(t,s){let i=s.y0-(s.targetLinks.length-1)*h/2;for(const{source:o,width:n}of s.targetLinks){if(o===t)break;i+=n+h}for(const{target:o,width:n}of t.sourceLinks){if(o===s)break;i-=n}return i}return g}const Z=1120,q=430,me="Violations",he=.42,pe=.58,B=e=>new Intl.NumberFormat("en-US").format(e),Y=e=>`${e.toLocaleString("en-US",{maximumFractionDigits:1})}%`,K=(e,a)=>Math.max(1,e/a*100);function xe(e){const a=[e.stats.incoming.websites>0?{label:"From Websites",value:K(e.stats.incoming.websites,e.stats.pageviews)}:null,e.stats.incoming.directEntries>0?{label:"Direct Entries",value:K(e.stats.incoming.directEntries,e.stats.pageviews)}:null].filter(Boolean),r=Math.max(4,e.stats.outgoing.exits/Math.max(1,e.stats.outgoing.internalPages+e.stats.outgoing.exits)*100),c=[...e.incoming,...a],f=[...e.outgoing,{label:"Exits",value:r}],x=`${e.label}:center`,h=[...c.map((u,p)=>({id:`${e.label}:source:${p}`,name:u.label,side:"source",targetLayer:0,emphasis:u.emphasis})),{id:x,name:me,side:"center",targetLayer:1},...f.map((u,p)=>({id:`${e.label}:target:${p}`,name:u.label,side:"target",targetLayer:2,emphasis:u.emphasis}))],y=[...c.map((u,p)=>({source:`${e.label}:source:${p}`,target:x,value:u.value,emphasis:"emphasis"in u?u.emphasis:!1})),...f.map((u,p)=>({source:x,target:`${e.label}:target:${p}`,value:u.value,emphasis:"emphasis"in u?u.emphasis:u.label==="Exits"}))];return ge().nodeId(u=>u.id).nodeWidth(9).nodePadding(8).nodeAlign((u,p)=>u.targetLayer??X(u,p)).extent([[180,28],[Z-180,q-28]])({nodes:h.map(u=>({...u})),links:y.map(u=>({...u}))})}function S({label:e,value:a}){return l.jsxs("li",{children:[l.jsx("strong",{children:B(a)})," ",e]})}function be({period:e}){return l.jsxs("div",{className:"rf-center",children:[l.jsx("div",{className:"rf-center-head",children:e.centerTitle}),l.jsxs("div",{className:"rf-center-body",children:[l.jsxs("p",{className:"rf-pageviews",children:[B(e.stats.pageviews)," pageviews"]}),l.jsxs("div",{className:"rf-stat-grid",children:[l.jsxs("div",{className:"rf-stat-group",children:[l.jsx("p",{children:"Incoming traffic"}),l.jsxs("ul",{children:[l.jsx(S,{label:"from internal pages",value:e.stats.incoming.internalPages}),l.jsx(S,{label:"from websites",value:e.stats.incoming.websites}),l.jsx(S,{label:"direct entries",value:e.stats.incoming.directEntries})]})]}),l.jsxs("div",{className:"rf-stat-group rf-stat-group--out",children:[l.jsx("p",{children:"Outgoing traffic"}),l.jsxs("ul",{children:[l.jsx(S,{label:"to internal pages",value:e.stats.outgoing.internalPages}),l.jsx(S,{label:"exits",value:e.stats.outgoing.exits})]})]})]})]}),l.jsxs("div",{className:"rf-reloads",children:[B(e.stats.pageReloads)," page reloads"]})]})}function U(e,a){return a+(e-a)*he}function ye(e){if(typeof e.source!="object"||typeof e.target!="object")return"";const a=e.source,r=e.target,c=a.side==="center",f=r.side==="center",x=((a.y0??0)+(a.y1??0))/2,h=((r.y0??0)+(r.y1??0))/2,y=a.x1??0,u=r.x0??0,p=c?U(e.y0??0,x):e.y0??0,v=f?U(e.y1??0,h):e.y1??0,b=(u-y)*.5;return`M ${y} ${p} C ${y+b} ${p}, ${u-b} ${v}, ${u} ${v}`}function ve(e){const a=typeof e.source=="object"&&e.source.side==="center"||typeof e.target=="object"&&e.target.side==="center";return Math.max(1,(e.width??1)*(a?pe:1))}function we({period:e}){const a=xe(e);return l.jsxs("article",{className:"rf-card","aria-label":`${e.label} traffic flow`,children:[l.jsx("h3",{className:"rf-date",children:e.label}),l.jsxs("div",{className:"rf-visual",children:[l.jsxs("svg",{className:"rf-sankey",viewBox:`0 0 ${Z} ${q}`,role:"img","aria-label":`${e.label} Sankey diagram for PacBot traffic`,children:[l.jsx("g",{className:"rf-links",children:a.links.map((r,c)=>l.jsx("path",{className:`rf-link${r.emphasis?" is-emphasis":""}`,d:ye(r)??void 0,strokeWidth:ve(r),children:l.jsx("title",{children:`${typeof r.source=="object"?r.source.name:"Source"} to ${typeof r.target=="object"?r.target.name:"Target"}: ${Y(r.value)}`})},`${e.label}-link-${c}`))}),l.jsx("g",{className:"rf-nodes",children:a.nodes.map(r=>{const c=r.side==="center",f=r.side==="target",x=c?((r.x0??0)+(r.x1??0))/2:f?(r.x0??0)-10:(r.x1??0)+10,h=((r.y0??0)+(r.y1??0))/2;return l.jsxs("g",{className:`rf-node rf-node--${r.side}${r.emphasis?" is-emphasis":""}`,children:[!c&&l.jsx("rect",{x:r.x0,y:r.y0,width:(r.x1??0)-(r.x0??0),height:Math.max(2,(r.y1??0)-(r.y0??0)),rx:"3"}),!c&&l.jsxs(l.Fragment,{children:[l.jsx("text",{x,y:h-5,textAnchor:f?"end":"start",className:"rf-node-label",children:r.name}),l.jsx("text",{x,y:h+9,textAnchor:f?"end":"start",className:"rf-node-value",children:Y(r.value??0)})]})]},r.id)})})]}),l.jsx(be,{period:e})]})]})}function Le({periods:e,title:a,caption:r}){const[c,f]=P.useState(0),[x,h]=P.useState(!1),y=e[c]??e[0],u=e.length>1,p=()=>{f(b=>(b+1)%e.length)},v=()=>{h(b=>!b)};return P.useEffect(()=>{if(!u||x)return;const b=window.setInterval(p,5e3);return()=>window.clearInterval(b)},[u,x]),y?l.jsxs("figure",{className:"rf not-prose",children:[a&&l.jsx("div",{className:"rf-header",children:l.jsx("h3",{children:a})}),l.jsx("div",{className:"rf-stage",children:l.jsx(we,{period:y},y.label)}),l.jsxs("figcaption",{className:"nf-meta","aria-live":"polite",children:[u&&l.jsxs("div",{className:"nf-meta-controls",children:[l.jsxs("button",{type:"button",className:"nf-play",onClick:v,"aria-pressed":x,"aria-label":x?"Resume walkthrough":"Pause walkthrough",children:[l.jsxs("svg",{className:"nf-ico-pause",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[l.jsx("rect",{x:"6",y:"5",width:"4",height:"14",rx:"1"}),l.jsx("rect",{x:"14",y:"5",width:"4",height:"14",rx:"1"})]}),l.jsx("svg",{className:"nf-ico-play",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:l.jsx("path",{d:"M8 5.2v13.6a.8.8 0 0 0 1.22.68l10.9-6.8a.8.8 0 0 0 0-1.36L9.22 4.52A.8.8 0 0 0 8 5.2Z"})})]}),l.jsx("div",{className:"nf-dots",role:"tablist","aria-label":"Walkthrough steps",children:e.map((b,w)=>l.jsx("button",{type:"button","data-i":w,className:`nf-dot${w===c?" is-active":""}`,onClick:()=>f(w),role:"tab","aria-selected":w===c,"aria-label":`Step ${w+1} of ${e.length}: ${b.label}`},b.label))})]}),r?l.jsx("p",{className:"nf-caption",children:r}):null]}),l.jsx("style",{children:`
        .rf {
          box-sizing: border-box;
          width: min(100%, 72rem);
          margin: 2.5rem auto;
          color: rgb(var(--c-ink));
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
          min-height: 22rem;
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
          mix-blend-mode: screen;
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
            width: calc(100vw - 1rem);
          }

          .rf-carousel-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .rf-controls {
            width: 100%;
            justify-content: space-between;
          }

          .rf-visual {
            aspect-ratio: auto;
            min-height: 32rem;
          }

          .rf-sankey {
            height: 19rem;
          }

          .rf-center {
            top: auto;
            bottom: 0.25rem;
            width: calc(100% - 1rem);
            transform: translateX(-50%);
          }

          .rf-stat-group--out {
            text-align: left;
          }

          .rf-node-label {
            font-size: 11px;
          }

          .rf-node-value {
            font-size: 10px;
          }
        }
      `})]}):null}export{Le as default};
