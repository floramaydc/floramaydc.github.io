import{j as l}from"./jsx-runtime.DKcz5_Pg.js";import{r as C}from"./index.CaUodXNB.js";import"./_commonjsHelpers.Cpj98o6Y.js";function H(e,a){let c;if(a===void 0)for(const f of e)f!=null&&(c<f||c===void 0&&f>=f)&&(c=f);else{let f=-1;for(let n of e)(n=a(n,++f,e))!=null&&(c<n||c===void 0&&n>=n)&&(c=n)}return c}function ce(e,a){let c;if(a===void 0)for(const f of e)f!=null&&(c>f||c===void 0&&f>=f)&&(c=f);else{let f=-1;for(let n of e)(n=a(n,++f,e))!=null&&(c>n||c===void 0&&n>=n)&&(c=n)}return c}function P(e,a){let c=0;if(a===void 0)for(let f of e)(f=+f)&&(c+=f);else{let f=-1;for(let n of e)(n=+a(n,++f,e))&&(c+=n)}return c}function Z(e,a){return e.sourceLinks.length?e.depth:a-1}function z(e){return function(){return e}}function O(e,a){return I(e.source,a.source)||e.index-a.index}function G(e,a){return I(e.target,a.target)||e.index-a.index}function I(e,a){return e.y0-a.y0}function T(e){return e.value}function fe(e){return e.index}function de(e){return e.nodes}function ue(e){return e.links}function V(e,a){const c=e.get(a);if(!c)throw new Error("missing: "+a);return c}function Y({nodes:e}){for(const a of e){let c=a.y0,f=c;for(const n of a.sourceLinks)n.y0=c+n.width/2,c+=n.width;for(const n of a.targetLinks)n.y1=f+n.width/2,f+=n.width}}function ge(){let e=0,a=0,c=1,f=1,n=24,x=8,h,y=fe,u=Z,p,v,w=de,j=ue,b=6;function g(){const t={nodes:w.apply(null,arguments),links:j.apply(null,arguments)};return J(t),Q(t),_(t),ee(t),ne(t),Y(t),t}g.update=function(t){return Y(t),t},g.nodeId=function(t){return arguments.length?(y=typeof t=="function"?t:z(t),g):y},g.nodeAlign=function(t){return arguments.length?(u=typeof t=="function"?t:z(t),g):u},g.nodeSort=function(t){return arguments.length?(p=t,g):p},g.nodeWidth=function(t){return arguments.length?(n=+t,g):n},g.nodePadding=function(t){return arguments.length?(x=h=+t,g):x},g.nodes=function(t){return arguments.length?(w=typeof t=="function"?t:z(t),g):w},g.links=function(t){return arguments.length?(j=typeof t=="function"?t:z(t),g):j},g.linkSort=function(t){return arguments.length?(v=t,g):v},g.size=function(t){return arguments.length?(e=a=0,c=+t[0],f=+t[1],g):[c-e,f-a]},g.extent=function(t){return arguments.length?(e=+t[0][0],c=+t[1][0],a=+t[0][1],f=+t[1][1],g):[[e,a],[c,f]]},g.iterations=function(t){return arguments.length?(b=+t,g):b};function J({nodes:t,links:s}){for(const[o,r]of t.entries())r.index=o,r.sourceLinks=[],r.targetLinks=[];const i=new Map(t.map((o,r)=>[y(o,r,t),o]));for(const[o,r]of s.entries()){r.index=o;let{source:d,target:m}=r;typeof d!="object"&&(d=r.source=V(i,d)),typeof m!="object"&&(m=r.target=V(i,m)),d.sourceLinks.push(r),m.targetLinks.push(r)}if(v!=null)for(const{sourceLinks:o,targetLinks:r}of t)o.sort(v),r.sort(v)}function Q({nodes:t}){for(const s of t)s.value=s.fixedValue===void 0?Math.max(P(s.sourceLinks,T),P(s.targetLinks,T)):s.fixedValue}function _({nodes:t}){const s=t.length;let i=new Set(t),o=new Set,r=0;for(;i.size;){for(const d of i){d.depth=r;for(const{target:m}of d.sourceLinks)o.add(m)}if(++r>s)throw new Error("circular link");i=o,o=new Set}}function ee({nodes:t}){const s=t.length;let i=new Set(t),o=new Set,r=0;for(;i.size;){for(const d of i){d.height=r;for(const{source:m}of d.targetLinks)o.add(m)}if(++r>s)throw new Error("circular link");i=o,o=new Set}}function te({nodes:t}){const s=H(t,r=>r.depth)+1,i=(c-e-n)/(s-1),o=new Array(s);for(const r of t){const d=Math.max(0,Math.min(s-1,Math.floor(u.call(null,r,s))));r.layer=d,r.x0=e+d*i,r.x1=r.x0+n,o[d]?o[d].push(r):o[d]=[r]}if(p)for(const r of o)r.sort(p);return o}function re(t){const s=ce(t,i=>(f-a-(i.length-1)*h)/P(i,T));for(const i of t){let o=a;for(const r of i){r.y0=o,r.y1=o+r.value*s,o=r.y1+h;for(const d of r.sourceLinks)d.width=d.value*s}o=(f-o+h)/(i.length+1);for(let r=0;r<i.length;++r){const d=i[r];d.y0+=o*(r+1),d.y1+=o*(r+1)}oe(i)}}function ne(t){const s=te(t);h=Math.min(x,(f-a)/(H(s,i=>i.length)-1)),re(s);for(let i=0;i<b;++i){const o=Math.pow(.99,i),r=Math.max(1-o,(i+1)/b);ae(s,o,r),ie(s,o,r)}}function ie(t,s,i){for(let o=1,r=t.length;o<r;++o){const d=t[o];for(const m of d){let L=0,k=0;for(const{source:$,value:M}of m.targetLinks){let E=M*(m.layer-$.layer);L+=se($,m)*E,k+=E}if(!(k>0))continue;let N=(L/k-m.y0)*s;m.y0+=N,m.y1+=N,F(m)}p===void 0&&d.sort(I),A(d,i)}}function ae(t,s,i){for(let o=t.length,r=o-2;r>=0;--r){const d=t[r];for(const m of d){let L=0,k=0;for(const{target:$,value:M}of m.sourceLinks){let E=M*($.layer-m.layer);L+=le(m,$)*E,k+=E}if(!(k>0))continue;let N=(L/k-m.y0)*s;m.y0+=N,m.y1+=N,F(m)}p===void 0&&d.sort(I),A(d,i)}}function A(t,s){const i=t.length>>1,o=t[i];D(t,o.y0-h,i-1,s),W(t,o.y1+h,i+1,s),D(t,f,t.length-1,s),W(t,a,0,s)}function W(t,s,i,o){for(;i<t.length;++i){const r=t[i],d=(s-r.y0)*o;d>1e-6&&(r.y0+=d,r.y1+=d),s=r.y1+h}}function D(t,s,i,o){for(;i>=0;--i){const r=t[i],d=(r.y1-s)*o;d>1e-6&&(r.y0-=d,r.y1-=d),s=r.y0-h}}function F({sourceLinks:t,targetLinks:s}){if(v===void 0){for(const{source:{sourceLinks:i}}of s)i.sort(G);for(const{target:{targetLinks:i}}of t)i.sort(O)}}function oe(t){if(v===void 0)for(const{sourceLinks:s,targetLinks:i}of t)s.sort(G),i.sort(O)}function se(t,s){let i=t.y0-(t.sourceLinks.length-1)*h/2;for(const{target:o,width:r}of t.sourceLinks){if(o===s)break;i+=r+h}for(const{source:o,width:r}of s.targetLinks){if(o===t)break;i-=r}return i}function le(t,s){let i=s.y0-(s.targetLinks.length-1)*h/2;for(const{source:o,width:r}of s.targetLinks){if(o===t)break;i+=r+h}for(const{target:o,width:r}of t.sourceLinks){if(o===s)break;i-=r}return i}return g}const q=1120,B=430,me="Violations",he=.42,pe=.58,R=e=>new Intl.NumberFormat("en-US").format(e),K=e=>`${e.toLocaleString("en-US",{maximumFractionDigits:1})}%`,U=(e,a)=>Math.max(1,e/a*100);function xe(e){const a=[e.stats.incoming.websites>0?{label:"From Websites",value:U(e.stats.incoming.websites,e.stats.pageviews)}:null,e.stats.incoming.directEntries>0?{label:"Direct Entries",value:U(e.stats.incoming.directEntries,e.stats.pageviews)}:null].filter(Boolean),c=Math.max(4,e.stats.outgoing.exits/Math.max(1,e.stats.outgoing.internalPages+e.stats.outgoing.exits)*100),f=[...e.incoming,...a],n=[...e.outgoing,{label:"Exits",value:c}],x=`${e.label}:center`,h=[...f.map((u,p)=>({id:`${e.label}:source:${p}`,name:u.label,side:"source",targetLayer:0,emphasis:u.emphasis})),{id:x,name:me,side:"center",targetLayer:1},...n.map((u,p)=>({id:`${e.label}:target:${p}`,name:u.label,side:"target",targetLayer:2,emphasis:u.emphasis}))],y=[...f.map((u,p)=>({source:`${e.label}:source:${p}`,target:x,value:u.value,emphasis:"emphasis"in u?u.emphasis:!1})),...n.map((u,p)=>({source:x,target:`${e.label}:target:${p}`,value:u.value,emphasis:"emphasis"in u?u.emphasis:u.label==="Exits"}))];return ge().nodeId(u=>u.id).nodeWidth(9).nodePadding(8).nodeAlign((u,p)=>u.targetLayer??Z(u,p)).extent([[180,28],[q-180,B-28]])({nodes:h.map(u=>({...u})),links:y.map(u=>({...u}))})}function S({label:e,value:a}){return l.jsxs("li",{children:[l.jsx("strong",{children:R(a)})," ",e]})}function be({period:e}){return l.jsxs("div",{className:"rf-center",children:[l.jsx("div",{className:"rf-center-head",children:e.centerTitle}),l.jsxs("div",{className:"rf-center-body",children:[l.jsxs("p",{className:"rf-pageviews",children:[R(e.stats.pageviews)," pageviews"]}),l.jsxs("div",{className:"rf-stat-grid",children:[l.jsxs("div",{className:"rf-stat-group",children:[l.jsx("p",{children:"Incoming traffic"}),l.jsxs("ul",{children:[l.jsx(S,{label:"from internal pages",value:e.stats.incoming.internalPages}),l.jsx(S,{label:"from websites",value:e.stats.incoming.websites}),l.jsx(S,{label:"direct entries",value:e.stats.incoming.directEntries})]})]}),l.jsxs("div",{className:"rf-stat-group rf-stat-group--out",children:[l.jsx("p",{children:"Outgoing traffic"}),l.jsxs("ul",{children:[l.jsx(S,{label:"to internal pages",value:e.stats.outgoing.internalPages}),l.jsx(S,{label:"exits",value:e.stats.outgoing.exits})]})]})]})]}),l.jsxs("div",{className:"rf-reloads",children:[R(e.stats.pageReloads)," page reloads"]})]})}function X(e,a){return a+(e-a)*he}function ye(e){if(typeof e.source!="object"||typeof e.target!="object")return"";const a=e.source,c=e.target,f=a.side==="center",n=c.side==="center",x=((a.y0??0)+(a.y1??0))/2,h=((c.y0??0)+(c.y1??0))/2,y=a.x1??0,u=c.x0??0,p=f?X(e.y0??0,x):e.y0??0,v=n?X(e.y1??0,h):e.y1??0,w=(u-y)*.5;return`M ${y} ${p} C ${y+w} ${p}, ${u-w} ${v}, ${u} ${v}`}function ve(e){const a=typeof e.source=="object"&&e.source.side==="center"||typeof e.target=="object"&&e.target.side==="center";return Math.max(1,(e.width??1)*(a?pe:1))}function we({period:e,compact:a}){const c=xe(e),f=a?`110 0 900 ${B}`:`0 0 ${q} ${B}`;return l.jsxs("article",{className:"rf-card","aria-label":`${e.label} traffic flow`,children:[l.jsx("h3",{className:"rf-date",children:e.label}),l.jsxs("div",{className:"rf-visual",children:[l.jsxs("svg",{className:"rf-sankey",viewBox:f,role:"img","aria-label":`${e.label} Sankey diagram for PacBot traffic`,children:[l.jsx("g",{className:"rf-links",children:c.links.map((n,x)=>l.jsx("path",{className:`rf-link${n.emphasis?" is-emphasis":""}`,d:ye(n)??void 0,strokeWidth:ve(n),children:l.jsx("title",{children:`${typeof n.source=="object"?n.source.name:"Source"} to ${typeof n.target=="object"?n.target.name:"Target"}: ${K(n.value)}`})},`${e.label}-link-${x}`))}),l.jsx("g",{className:"rf-nodes",children:c.nodes.map(n=>{const x=n.side==="center",h=n.side==="target",y=x?((n.x0??0)+(n.x1??0))/2:h?(n.x0??0)-10:(n.x1??0)+10,u=((n.y0??0)+(n.y1??0))/2;return l.jsxs("g",{className:`rf-node rf-node--${n.side}${n.emphasis?" is-emphasis":""}`,children:[!x&&l.jsx("rect",{x:n.x0,y:n.y0,width:(n.x1??0)-(n.x0??0),height:Math.max(2,(n.y1??0)-(n.y0??0)),rx:"3"}),!x&&l.jsxs(l.Fragment,{children:[l.jsx("text",{x:y,y:u-5,textAnchor:h?"end":"start",className:"rf-node-label",children:n.name}),l.jsx("text",{x:y,y:u+9,textAnchor:h?"end":"start",className:"rf-node-value",children:K(n.value??0)})]})]},n.id)})})]}),l.jsx(be,{period:e})]})]})}function Ne({periods:e,title:a,caption:c}){const[f,n]=C.useState(0),[x,h]=C.useState(!1),[y,u]=C.useState(!1),p=e[f]??e[0],v=e.length>1,w=()=>{n(b=>(b+1)%e.length)},j=()=>{h(b=>!b)};return C.useEffect(()=>{if(!v||x)return;const b=window.setInterval(w,5e3);return()=>window.clearInterval(b)},[v,x]),C.useEffect(()=>{const b=window.matchMedia("(max-width: 620px)"),g=()=>u(b.matches);return g(),b.addEventListener("change",g),()=>b.removeEventListener("change",g)},[]),p?l.jsxs("figure",{className:"rf not-prose",children:[a&&l.jsx("div",{className:"rf-header",children:l.jsx("h3",{children:a})}),l.jsx("div",{className:"rf-stage",children:l.jsx(we,{period:p,compact:y},p.label)}),l.jsxs("figcaption",{className:"nf-meta","aria-live":"polite",children:[v&&l.jsxs("div",{className:"nf-meta-controls",children:[l.jsxs("button",{type:"button",className:"nf-play",onClick:j,"aria-pressed":x,"aria-label":x?"Resume walkthrough":"Pause walkthrough",children:[l.jsxs("svg",{className:"nf-ico-pause",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[l.jsx("rect",{x:"6",y:"5",width:"4",height:"14",rx:"1"}),l.jsx("rect",{x:"14",y:"5",width:"4",height:"14",rx:"1"})]}),l.jsx("svg",{className:"nf-ico-play",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:l.jsx("path",{d:"M8 5.2v13.6a.8.8 0 0 0 1.22.68l10.9-6.8a.8.8 0 0 0 0-1.36L9.22 4.52A.8.8 0 0 0 8 5.2Z"})})]}),l.jsx("div",{className:"nf-dots",role:"tablist","aria-label":"Walkthrough steps",children:e.map((b,g)=>l.jsx("button",{type:"button","data-i":g,className:`nf-dot${g===f?" is-active":""}`,onClick:()=>n(g),role:"tab","aria-selected":g===f,"aria-label":`Step ${g+1} of ${e.length}: ${b.label}`},b.label))})]}),c?l.jsx("p",{className:"nf-caption",children:c}):null]}),l.jsx("style",{children:`
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
      `})]}):null}export{Ne as default};
