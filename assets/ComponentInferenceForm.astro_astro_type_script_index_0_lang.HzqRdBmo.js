import{E as H}from"./jspdf.es.min.HRF70t-r.js";function d(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function q(t){return t==="high"?"bg-red-50 text-red-700 border border-red-200":t==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function O(t){return t==="high"?"bg-red-700":t==="medium"?"bg-orange-700":"bg-emerald-700"}function V(t){return t==="high"?"text-red-700":t==="medium"?"text-orange-600":"text-emerald-700"}function _(t){return Array.isArray(t?.mappedComponents)?t.mappedComponents:[]}function z(t,i){return i?`npm i ${t}@${i}`:`npm i ${t}`}function N(t,i){return`import { ${t} } from '${i}';`}function j(t,i){const c=t?.designSystem,u=_(t);if(!c||u.length===0)return"";const e=[];return e.push(`Refactor this design to use ${c.label} components.`),i&&e.push(`Source Figma node: ${i}`),e.push(""),e.push("Component replacements (each maps a detected region to its curated component):"),u.forEach((n,g)=>{const a=Number.isInteger(n.nodeRef)&&n.nodeRef>0?`Ref #${n.nodeRef}`:"Whole design",f=n.label?` ("${n.label}")`:"";e.push(`${g+1}. ${a}${f} — detected as a ${n.pattern}. Use ${c.label} ${n.component}.`,`   Install: ${z(n.npm,n.version)}`,`   Import:  ${N(n.importName,n.npm)}`,n.note?`   Note:    ${n.note}`:"",`   Docs:    ${n.docs}`)}),e.push(""),e.push("Preserve existing content and behavior; only swap the underlying components and wire up their props/accessibility per the docs."),e.filter(n=>n!=="").join(`
`)}function A(t,i,c){t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words">${d(i)}</p>
      ${c?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${d(c)}</p>`:""}
    </div>
  `}function Y(t){return t===401?"Your Figma sign-in expired or was declined. Sign in again to scan.":t===422?"Check the link points to a frame you can open, and that it includes a node-id.":t===429?"Inference is busy right now. Please retry in a minute or two.":t===402?"The monthly inference budget is used up. It resets next month.":t===502||t===503||t===504?"The inference engine is temporarily unavailable. Please try again shortly.":"Please try again in a moment. If it keeps failing, the engine may be temporarily unavailable."}function G(t){const i=["Reading the Figma layer & component tree","Inferring the component pattern","Evaluating structure and accessibility","Placing numbered findings on the frame"];let c=0;const u=()=>{const n=i.map((g,a)=>{const f=a===c;return`<li class="flex items-center gap-2 text-sm ${f?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${f?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${d(g)}</li>`}).join("");t.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running inference</p>
        <p class="mt-2 mb-0 text-xs text-muted">This usually takes 10-30 seconds.</p>
        <ul class="mt-3 space-y-2">${n}</ul>
      </div>
    `};u();const e=window.setInterval(()=>{c=(c+1)%i.length,u()},1600);return{stop(){window.clearInterval(e)}}}function J(t){return t.map(i=>{const c=Math.min(100,Math.max(0,(i.anchor?.x??.5)*100)),u=Math.min(100,Math.max(0,(i.anchor?.y??.5)*100));return`
        <div class="absolute z-10" style="left:${c}%; top:${u}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-paper ${O(i.severity)} text-xs font-bold text-white shadow-lg shadow-black/30">${d(i.number)}</div>
        </div>
      `}).join("")}function K(t,i,c){const u=t?.summary||{},e=Array.isArray(t?.findings)?t.findings:[],n=t?.componentMapping||{},g=t?.metadata||{},a=["# Figma Component Inference","",`- Generated: ${t?.generatedAt||""}`,c?`- Figma node: ${c}`:"","","## Summary","",`- Detected pattern: ${u.detectedPattern||"Unknown"}`,`- Confidence: ${u.confidence??0}%`,`- Risk: ${u.risk||"medium"}`,u.note?`- Note: ${u.note}`:"",""],f=Array.isArray(u.detectedComponents)?u.detectedComponents:[];f.length>1&&(a.push("## Components detected",""),f.forEach(o=>{a.push(`- ${o.pattern||"Unknown"}${o.label?` — ${o.label}`:""} (${o.confidence??0}%)`)}),a.push("")),a.push("## Findings",""),e.length===0?a.push("No issues inferred.",""):e.forEach(o=>{a.push(`### ${o.number}. ${o.title||"Finding"}`,"",`- Category: ${o.category}  ·  Severity: ${o.severity}  ·  Zone: ${o.zone}`,`- Current structure: ${o.currentStructure||""}`,`- Issue: ${o.issue||""}`,`- Recommendation: ${o.recommendation||""}`,`- Why it matters: ${o.why||""}`,"")}),a.push("## Suggested component mapping","",`- Generic: ${n.generic||"n/a"}`,n.designSystem?`- Design system: ${n.designSystem}`:"- Design system: (no design-system context provided)","");const s=t?.designSystem,$=_(t);if(s&&$.length>0){a.push(`## ${s.label} component mapping`,"",`Curated mapping · catalog ${s.catalogVersion||""}`.trim(),"","| Detected | Pattern | Component | Install | Import | Docs |","| --- | --- | --- | --- | --- | --- |"),$.forEach(h=>{const p=(h.label||"—").replace(/\|/g,"\\|");a.push(`| ${p} | ${h.pattern} | ${h.component} | \`${z(h.npm,h.version)}\` | \`${N(h.importName,h.npm)}\` | ${h.docs} |`)}),a.push("");const o=j(t,c);o&&a.push("## AI instruction","","```text",o,"```","")}return a.push("## Audit metadata","",`- Nodes analyzed: ${g.nodesAnalyzed??0}`,`- Components inferred: ${g.componentsInferred??0}`,`- Potential issues: ${g.potentialIssues??e.length}`,"","## Annotated frame","",i?`![Annotated frame](${i})`:"Image unavailable.","","## M.ai context","","```json",JSON.stringify({summary:u,findings:e,componentMapping:n,designSystem:s||null,mappedComponents:$,metadata:g},null,2),"```"),a.filter(o=>o!=="").join(`
`).replace(/\n{3,}/g,`

`)}function X(t,i){const c=t?.summary||{},u=Array.isArray(t?.findings)?t.findings:[],e=new H({orientation:"portrait",unit:"pt",format:"letter"}),n=40,g=e.internal.pageSize.getWidth(),a=e.internal.pageSize.getHeight(),f=g-n*2;let s=48;e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Figma Component Inference by M.ai",n,s),s+=20,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`Detected pattern: ${c.detectedPattern||"Unknown"}  ·  Confidence: ${c.confidence??0}%  ·  Risk: ${c.risk||"medium"}`,n,s),s+=16;const $=Array.isArray(c.detectedComponents)?c.detectedComponents:[];if($.length>1&&(e.setTextColor(90),$.forEach(p=>{e.text(`• ${p.pattern||"Unknown"}${p.label?` — ${p.label}`:""} (${p.confidence??0}%)`,n,s),s+=12}),s+=4,e.setTextColor(0)),c.note){e.setTextColor(90);const p=e.splitTextToSize(String(c.note),f);e.text(p,n,s),s+=p.length*12+4,e.setTextColor(0)}if(i)try{const p=e.getImageProperties(i),m=f,r=p.height/p.width*m,l=Math.min(r,320),b=p.width/p.height*l;e.addImage(i,"PNG",n,s,Math.min(m,b),l),s+=Math.min(r,l)+16}catch{}e.setFont("helvetica","bold"),e.setFontSize(13),e.text("Findings",n,s),s+=16,e.setFontSize(10),u.forEach(p=>{const m=[`${p.number}. ${p.title||"Finding"}  [${p.severity}/${p.category}]`,`Current: ${p.currentStructure||""}`,`Issue: ${p.issue||""}`,`Recommendation: ${p.recommendation||""}`,`Why: ${p.why||""}`],r=e.splitTextToSize(m.join(`
`),f),l=r.length*12+10;s+l>a-n&&(e.addPage(),s=48),e.setFont("helvetica","bold"),e.text(r.slice(0,1),n,s),e.setFont("helvetica","normal"),e.setTextColor(70),e.text(r.slice(1),n,s+12),e.setTextColor(0),s+=l});const o=t?.designSystem,h=_(t);if(o&&h.length>0){s+60>a-n&&(e.addPage(),s=48),e.setFont("helvetica","bold"),e.setFontSize(13),e.text(`${o.label} component mapping`,n,s),s+=16,e.setFontSize(10),h.forEach(m=>{const l=[`${Number.isInteger(m.nodeRef)&&m.nodeRef>0?`#${m.nodeRef} `:""}${m.label||"—"} (${m.pattern}) → ${m.component}`,`Install: ${z(m.npm,m.version)}`,`Import: ${N(m.importName,m.npm)}`,`Docs: ${m.docs}`],b=e.splitTextToSize(l.join(`
`),f),L=b.length*12+8;s+L>a-n&&(e.addPage(),s=48),e.setFont("helvetica","bold"),e.text(b.slice(0,1),n,s),e.setFont("helvetica","normal"),e.setTextColor(70),e.text(b.slice(1),n,s+12),e.setTextColor(0),s+=L});const p=j(t,"");if(p){s+40>a-n&&(e.addPage(),s=48),e.setFont("helvetica","bold"),e.setFontSize(13),e.text("AI instruction",n,s),s+=16,e.setFont("helvetica","normal"),e.setFontSize(9),e.setTextColor(70);const m=e.splitTextToSize(p,f);for(let r=0;r<m.length;r++)s>a-n&&(e.addPage(),s=48),e.text(m[r],n,s),s+=11;e.setTextColor(0),e.setFontSize(10)}}e.save(`figma-component-inference-${new Date(t?.generatedAt||Date.now()).toISOString().slice(0,10)}.pdf`)}function Z(t,i,c,u){const e=i?.summary||{},n=Array.isArray(i?.findings)?i.findings:[],g=i?.componentMapping||{},a=i?.metadata||{},f=i?.designSystem,s=_(i),$=j(i,u);let o=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl text-ink">Summary</h3>
      <div class="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <p class="mb-1 text-xs text-muted">Detected pattern</p>
          <p class="m-0 text-xl font-bold text-ink">${d(e.detectedPattern||"Unknown")}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Confidence</p>
          <p class="m-0 text-xl font-bold text-ink">${d(e.confidence??0)}%</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Risk</p>
          <p class="m-0 text-xl font-bold ${V(e.risk||"medium")}">${d((e.risk||"medium").toUpperCase())}</p>
        </div>
      </div>
      ${e.note?`<p class="mt-4 mb-0 text-sm text-muted">${d(e.note)}</p>`:""}
    </div>
  `;const h=Array.isArray(e.detectedComponents)?e.detectedComponents:[];h.length>1&&(o+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl text-ink">Components detected</h3>
        <p class="mt-1 mb-0 text-sm text-muted">Each region the agent could classify in this selection. Scan a single component for the sharpest read.</p>
        <ul class="mt-4 space-y-2">
    `,h.forEach(r=>{o+=`
        <li class="flex items-baseline justify-between gap-4 rounded border border-ink/5 bg-paper px-4 py-2 text-sm dark:bg-cream/5">
          <span class="min-w-0">
            <span class="font-semibold text-ink">${d(r.pattern||"Unknown")}</span>
            ${r.label?`<span class="ml-2 text-muted">${d(r.label)}</span>`:""}
          </span>
          <span class="shrink-0 text-xs text-muted">${d(r.confidence??0)}%</span>
        </li>
      `}),o+="</ul></div>");const p=typeof c=="string"&&c.startsWith("data:");if(o+='<div class="mb-6 space-y-6">',p&&(o+=`
    <div>
      <h4 class="mt-0 font-serif text-lg text-ink">Annotated frame</h4>
      <div class="mt-3 relative overflow-hidden rounded border border-ink/10 bg-white dark:bg-ink/5">
        <img src="${d(c)}" alt="Your frame with numbered inference findings" class="block h-auto w-full" />
        <div class="pointer-events-none absolute inset-0">${J(n)}</div>
      </div>
      <p class="mt-2 text-xs text-muted">Each numbered pin maps to the matching finding, placed on the real node it refers to.</p>
    </div>
    `),o+=`
    <div>
      <h4 class="mt-0 font-serif text-lg text-ink">Findings</h4>
      <div class="mt-3 space-y-3">
  `,n.length===0?o+='<p class="rounded bg-emerald-50 p-4 text-emerald-800">No structural or accessibility issues were inferred.</p>':n.forEach(r=>{o+=`
        <article id="ci-finding-${d(r.number)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${O(r.severity)} text-sm font-bold text-white">${d(r.number)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">
                <span class="rounded px-1.5 py-0.5 text-[10px] tracking-wider ${q(r.severity)}">${d((r.severity||"").toUpperCase())}</span>
                <span class="ml-1 text-muted">${d(r.category||"")}</span>
              </p>
              <h5 class="mt-1 font-serif text-base text-ink">${d(r.title||"Finding")}</h5>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Current structure</dt>
              <dd class="mt-1 text-ink">${d(r.currentStructure||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Issue</dt>
              <dd class="mt-1 text-muted">${d(r.issue||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Recommendation</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${d(r.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${d(r.why||"")}</dd>
            </div>
          </dl>
        </article>
      `}),o+="</div></div></div>",o+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper p-5 dark:bg-cream/5">
      <h4 class="mt-0 font-serif text-lg">Suggested component mapping</h4>
      <dl class="mt-3 space-y-2 text-sm">
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">Generic recommendation</dt>
          <dd class="mt-1 text-ink">${d(g.generic||"n/a")}</dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">Design system</dt>
          <dd class="mt-1 text-muted">${g.designSystem?d(g.designSystem):"No design-system context provided — generic patterns only."}</dd>
        </div>
      </dl>
    </div>
  `,f&&s.length>0){const r=s.map(l=>{const b=Number.isInteger(l.nodeRef)&&l.nodeRef>0?`#${l.nodeRef}`:"—";return`
        <tr class="border-t border-ink/10 align-top">
          <td class="py-2 pr-3 text-ink">${d(l.label||"—")}<span class="ml-1 text-xs text-muted">${d(b)}</span></td>
          <td class="py-2 pr-3 text-muted">${d(l.pattern)}</td>
          <td class="py-2 pr-3 font-semibold text-ink">${d(l.component)}</td>
          <td class="py-2 pr-3"><code class="text-xs">${d(z(l.npm,l.version))}</code></td>
          <td class="py-2"><a href="${d(l.docs)}" target="_blank" rel="noopener noreferrer" class="text-accent underline">Docs</a></td>
        </tr>
      `}).join("");o+=`
      <div class="mb-6 rounded border border-accent/30 bg-paper p-5 dark:bg-cream/5">
        <div class="flex items-center justify-between gap-3">
          <h4 class="mt-0 font-serif text-lg">${d(f.label)} component mapping</h4>
          <span class="text-xs text-muted">Curated${f.catalogVersion?` · ${d(f.catalogVersion)}`:""}</span>
        </div>
        <p class="mt-1 text-xs text-muted">Each detected region mapped to its real ${d(f.label)} component, package, and docs — from a curated catalog, not a guess.</p>
        <div class="mt-3 overflow-x-auto">
          <table class="w-full border-collapse text-sm">
            <thead>
              <tr class="text-left text-xs uppercase tracking-widest text-muted">
                <th class="pb-2 pr-3 font-medium">Detected</th>
                <th class="pb-2 pr-3 font-medium">Pattern</th>
                <th class="pb-2 pr-3 font-medium">Component</th>
                <th class="pb-2 pr-3 font-medium">Install</th>
                <th class="pb-2 font-medium">Reference</th>
              </tr>
            </thead>
            <tbody>${r}</tbody>
          </table>
        </div>
      </div>
    `,$&&(o+=`
        <div class="mb-6 rounded border border-ink/10 bg-paper p-5 dark:bg-cream/5">
          <div class="flex items-center justify-between gap-3">
            <h4 class="mt-0 font-serif text-lg">AI instruction</h4>
            <button type="button" data-ci-copy-ai class="rounded border border-ink/20 px-3 py-1.5 text-xs font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Copy AI instruction</button>
          </div>
          <p class="mt-1 text-xs text-muted">Paste this into your AI coding agent to drive the refactor systematically.</p>
          <pre class="mt-3 max-h-72 overflow-auto rounded bg-ink/5 p-3 text-xs leading-relaxed text-ink dark:bg-paper/10"><code>${d($)}</code></pre>
        </div>
      `)}o+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/60 p-4 text-sm text-muted dark:bg-cream/5">
      <p class="m-0">
        Nodes analyzed: <span class="font-semibold text-ink">${d(a.nodesAnalyzed??0)}</span>
        · Components inferred: <span class="font-semibold text-ink">${d(a.componentsInferred??0)}</span>
        · Potential issues: <span class="font-semibold text-ink">${d(a.potentialIssues??n.length)}</span>
      </p>
    </div>
  `,o+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ci-export="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Download Markdown</button>
      <button type="button" data-ci-export="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Download PDF</button>
      <button type="button" data-ci-copy-context class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Copy M.ai context</button>
      <button type="button" data-mai-open data-mai-source="component_inference_handoff" aria-haspopup="dialog" aria-controls="mai-panel" class="rounded bg-accent px-4 py-2 text-sm font-semibold text-paper hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Ask M.ai</button>
    </div>
  `,t.innerHTML=o;const m=["## M.ai context","","```json",JSON.stringify({summary:e,findings:n,componentMapping:g,designSystem:f||null,mappedComponents:s,metadata:a},null,2),"```"].join(`
`);t.querySelector('[data-ci-export="md"]')?.addEventListener("click",()=>{const r=K(i,c,u),l=new Blob([r],{type:"text/markdown;charset=utf-8"}),b=document.createElement("a");b.href=URL.createObjectURL(l),b.download=`figma-component-inference-${new Date(i?.generatedAt||Date.now()).toISOString().slice(0,10)}.md`,document.body.appendChild(b),b.click(),b.remove(),URL.revokeObjectURL(b.href)}),t.querySelector('[data-ci-export="pdf"]')?.addEventListener("click",()=>X(i,c)),t.querySelector("[data-ci-copy-context]")?.addEventListener("click",r=>{const l=r.currentTarget;navigator.clipboard?.writeText(m).then(()=>{const b=l.textContent;l.textContent="Copied",window.setTimeout(()=>{l.textContent=b},1500)},()=>{})}),t.querySelector("[data-ci-copy-ai]")?.addEventListener("click",r=>{const l=r.currentTarget;navigator.clipboard?.writeText($).then(()=>{const b=l.textContent;l.textContent="Copied",window.setTimeout(()=>{l.textContent=b},1500)},()=>{})})}function Q(){const t=document.getElementById("component-inference-tool"),i=document.getElementById("inference-figma-url"),c=document.getElementById("inference-design-system-select"),u=document.getElementById("inference-design-system-other-wrap"),e=document.getElementById("inference-design-system"),n=document.getElementById("inference-library"),g=document.getElementById("run-inference-btn"),a=document.getElementById("inference-result-container");if(!t||!i||!g||!a)return;if(c&&u){const w=()=>{const x=c.value==="__other__";u.hidden=!x};c.addEventListener("change",w),w()}const f=(t.dataset.inferenceApiUrl||"").replace(/\/+$/,""),s=t.dataset.figmaOauthUrl||"",$=1800*1e3;let o="",h=0;const p=()=>o!==""&&Date.now()<h,m=()=>{h=Date.now()+$},r=()=>{o="",h=0},l=(w,x)=>window.dispatchEvent(new CustomEvent("site:track",{detail:{name:w,params:x}}));let b=!1;i.addEventListener("focus",()=>{b||(b=!0,l("tool_engage",{tool:"inference"}))});function L(){return new Promise((w,x)=>{if(!s){x(new Error("Sign-in is not configured."));return}const E=s+(s.includes("?")?"&":"?")+"return="+encodeURIComponent(window.location.origin),P=560,M=720,F=Math.max(0,Math.round(window.screenX+(window.outerWidth-P)/2)),D=Math.max(0,Math.round(window.screenY+(window.outerHeight-M)/2)),C=window.open(E,"figma-oauth",`width=${P},height=${M},left=${F},top=${D},menubar=no,toolbar=no,location=yes`);if(!C){x(new Error("The sign-in popup was blocked. Allow popups for this site and try again."));return}let k=!1,y=null;const S=()=>{window.removeEventListener("message",R),window.removeEventListener("storage",T);try{y?.close()}catch{}window.clearInterval(B),window.clearTimeout(U)},I=v=>{if(!(!v||typeof v!="object"||v.source!=="figma-inference-oauth")&&!k){k=!0,S();try{C.close()}catch{}v.status==="success"&&v.token?w(String(v.token)):x(new Error(v.message||"Figma sign-in did not complete."))}},R=v=>I(v.data),T=v=>{if(!(v.key!=="figma-inference-oauth"||!v.newValue))try{I(JSON.parse(v.newValue))}catch{}};window.addEventListener("message",R),window.addEventListener("storage",T);try{y=new BroadcastChannel("figma-inference-oauth"),y.onmessage=v=>I(v.data)}catch{y=null}const B=window.setInterval(()=>{C.closed&&!k&&window.setTimeout(()=>{k||(k=!0,S(),x(new Error("Sign-in was cancelled.")))},500)},600),U=window.setTimeout(()=>{if(!k){k=!0,S();try{C.close()}catch{}x(new Error("Sign-in timed out. Please try again."))}},18e4)})}async function W(w){const x=c?.value||"",E=x&&x!=="__other__"?x:"",P=x==="__other__"&&e?.value.trim()||"",M=n?.value.trim()||"",F={token:o,figmaUrl:w};E&&(F.designSystemId=E),P&&(F.designSystem=P),M&&(F.componentLibrary=M);const D=G(a);l("inference_run",{tool:"inference"});try{const C=new AbortController,k=window.setTimeout(()=>C.abort(),9e4),y=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F),signal:C.signal});if(window.clearTimeout(k),!y.ok){let T=null;try{T=await y.json()}catch{T=null}y.status===401?r():m(),l("inference_error",{tool:"inference",http_status:y.status}),A(a,T?.error||"The inference request failed.",T?.error?void 0:Y(y.status));return}const S=await y.json(),I=S?.report||S,R=typeof S?.imageDataUrl=="string"?S.imageDataUrl:"";l("inference_complete",{tool:"inference",findings:Array.isArray(I?.findings)?I.findings.length:0}),m(),Z(a,I,R,w)}catch(C){const k=String(C?.message||"").toLowerCase(),y=C?.name==="AbortError"||k.includes("aborted");l("inference_error",{tool:"inference",reason:y?"timeout":"network"}),A(a,y?"Inference took too long to finish.":"Unable to reach the inference engine.",y?"The engine may be busy. Please retry in a minute.":"Check your connection and retry.")}finally{D.stop()}}g.addEventListener("click",async()=>{const w=i.value.trim();if(!w){A(a,"Paste a Figma frame link first.","In Figma: select a frame → right-click → Copy/Paste as → Copy link to selection."),i.focus();return}if(!/figma\.com/i.test(w)){A(a,"That does not look like a Figma link.","Paste a https://www.figma.com/design/… link that includes a node-id."),i.focus();return}if(typeof navigator<"u"&&!navigator.onLine){A(a,"You appear to be offline.","Reconnect to the internet, then scan again.");return}g.disabled=!0;const x=g.textContent;try{p()||(r(),g.textContent="Waiting for Figma sign-in…",o=await L()),m(),g.textContent="Scanning…",await W(w)}catch(E){l("inference_error",{tool:"inference",reason:"oauth"}),A(a,E?.message||"Figma sign-in failed.","You can try signing in again.")}finally{g.disabled=!1,g.textContent=x||"Start scan"}})}Q();
