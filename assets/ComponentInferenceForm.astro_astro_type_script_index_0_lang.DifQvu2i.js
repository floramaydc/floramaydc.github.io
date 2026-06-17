import{E as U}from"./jspdf.es.min.HRF70t-r.js";function p(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function q(t){return t==="high"?"bg-red-50 text-red-700 border border-red-200":t==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function j(t){return t==="high"?"bg-red-700":t==="medium"?"bg-orange-700":"bg-emerald-700"}function G(t){return t==="high"?"text-red-700":t==="medium"?"text-orange-600":"text-emerald-700"}function L(t){return Array.isArray(t?.mappedComponents)?t.mappedComponents:[]}function _(t,o){return o?`npm i ${t}@${o}`:`npm i ${t}`}function N(t,o){return`import { ${t} } from '${o}';`}function D(t,o){const m=t?.designSystem,f=L(t),e=t?.summary||{},d=Array.isArray(t?.findings)?t.findings:[],r=[];if(m&&f.length>0)r.push(`Refactor this design to use ${m.label} components.`),o&&r.push(`Source Figma node: ${o}`),r.push(""),r.push("Component replacements (each maps a detected region to its curated component):"),f.forEach((n,g)=>{const s=Number.isInteger(n.nodeRef)&&n.nodeRef>0?`Ref #${n.nodeRef}`:"Whole design",b=n.label?` ("${n.label}")`:"";r.push(`${g+1}. ${s}${b} — detected as a ${n.pattern}. Use ${m.label} ${n.component}.`,`   Install: ${_(n.npm,n.version)}`,`   Import:  ${N(n.importName,n.npm)}`,n.note?`   Note:    ${n.note}`:"",`   Docs:    ${n.docs}`)});else{r.push("Refactor this design into accessible, reusable components."),o&&r.push(`Source Figma node: ${o}`),r.push("");const n=Array.isArray(e.detectedComponents)?e.detectedComponents:[];n.length>0?(r.push("Components to build (each maps a detected region to a generic pattern):"),n.forEach((s,b)=>{const u=Number.isInteger(s.nodeRef)&&s.nodeRef>0?`Ref #${s.nodeRef}`:"Whole design",c=s.label?` ("${s.label}")`:"";r.push(`${b+1}. ${u}${c} — implement as a ${s.pattern} component.`)})):e.detectedPattern&&r.push(`Implement this as a ${e.detectedPattern} component.`);const g=t?.componentMapping?.generic;g&&r.push("",`Generic pattern guidance: ${g}`)}return d.length>0&&(r.push("","Fix these while implementing:"),d.forEach(n=>{r.push(`${n.number}. [${n.severity}/${n.category}] ${n.title}: ${n.recommendation||n.issue||""}`.trimEnd())})),r.push("","Preserve existing content and behavior; use semantic, accessible components with proper structure (frames/auto-layout over raw groups) and wire up keyboard focus and ARIA."),r.filter(n=>n!=="").join(`
`)}function F(t,o,m){t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words">${p(o)}</p>
      ${m?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${p(m)}</p>`:""}
    </div>
  `}function V(t){return t===401?"Your Figma sign-in expired or was declined. Sign in again to scan.":t===422?"Check the link points to a frame you can open, and that it includes a node-id.":t===429?"Inference is busy right now. Please retry in a minute or two.":t===402?"The monthly inference budget is used up. It resets next month.":t===502||t===503||t===504?"The inference engine is temporarily unavailable. Please try again shortly.":"Please try again in a moment. If it keeps failing, the engine may be temporarily unavailable."}function Y(t){const o=["Reading the Figma layer & component tree","Inferring the component pattern","Evaluating structure and accessibility","Placing numbered findings on the frame"];let m=0;const f=()=>{const d=o.map((r,n)=>{const g=n===m;return`<li class="flex items-center gap-2 text-sm ${g?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${g?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${p(r)}</li>`}).join("");t.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running inference</p>
        <p class="mt-2 mb-0 text-xs text-muted">This usually takes 10-30 seconds.</p>
        <ul class="mt-3 space-y-2">${d}</ul>
      </div>
    `};f();const e=window.setInterval(()=>{m=(m+1)%o.length,f()},1600);return{stop(){window.clearInterval(e)}}}function J(t){return t.map(o=>{const m=Math.min(100,Math.max(0,(o.anchor?.x??.5)*100)),f=Math.min(100,Math.max(0,(o.anchor?.y??.5)*100));return`
        <div class="absolute z-10" style="left:${m}%; top:${f}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-paper ${j(o.severity)} text-xs font-bold text-white shadow-lg shadow-black/30">${p(o.number)}</div>
        </div>
      `}).join("")}function K(t,o,m){const f=t?.summary||{},e=Array.isArray(t?.findings)?t.findings:[],d=t?.componentMapping||{},r=t?.metadata||{},n=["# Figma Component Inference","",`- Generated: ${t?.generatedAt||""}`,m?`- Figma node: ${m}`:"","","## Summary","",`- Detected pattern: ${f.detectedPattern||"Unknown"}`,`- Confidence: ${f.confidence??0}%`,`- Risk: ${f.risk||"medium"}`,f.note?`- Note: ${f.note}`:"",""],g=Array.isArray(f.detectedComponents)?f.detectedComponents:[];g.length>1&&(n.push("## Components detected",""),g.forEach(c=>{n.push(`- ${c.pattern||"Unknown"}${c.label?` — ${c.label}`:""} (${c.confidence??0}%)`)}),n.push("")),n.push("## Findings",""),e.length===0?n.push("No issues inferred.",""):e.forEach(c=>{n.push(`### ${c.number}. ${c.title||"Finding"}`,"",`- Category: ${c.category}  ·  Severity: ${c.severity}  ·  Zone: ${c.zone}`,`- Current structure: ${c.currentStructure||""}`,`- Issue: ${c.issue||""}`,`- Recommendation: ${c.recommendation||""}`,`- Why it matters: ${c.why||""}`,"")}),n.push("## Suggested component mapping","",`- Generic: ${d.generic||"n/a"}`,d.designSystem?`- Design system: ${d.designSystem}`:"- Design system: (no design-system context provided)","");const s=t?.designSystem,b=L(t);s&&b.length>0&&(n.push(`## ${s.label} component mapping`,"",`Curated mapping · catalog ${s.catalogVersion||""}`.trim(),"","| Detected | Pattern | Component | Install | Import | Docs |","| --- | --- | --- | --- | --- | --- |"),b.forEach(c=>{const i=(c.label||"—").replace(/\|/g,"\\|");n.push(`| ${i} | ${c.pattern} | ${c.component} | \`${_(c.npm,c.version)}\` | \`${N(c.importName,c.npm)}\` | ${c.docs} |`)}),n.push(""));const u=D(t,m);return u&&n.push("## AI instruction","","```text",u,"```",""),n.push("## Audit metadata","",`- Nodes analyzed: ${r.nodesAnalyzed??0}`,`- Components inferred: ${r.componentsInferred??0}`,`- Potential issues: ${r.potentialIssues??e.length}`,"","## Annotated frame","",o?`![Annotated frame](${o})`:"Image unavailable.","","## M.ai context","","```json",JSON.stringify({summary:f,findings:e,componentMapping:d,designSystem:s||null,mappedComponents:b,metadata:r},null,2),"```"),n.filter(c=>c!=="").join(`
`).replace(/\n{3,}/g,`

`)}function X(t,o){const m=t?.summary||{},f=Array.isArray(t?.findings)?t.findings:[],e=new U({orientation:"portrait",unit:"pt",format:"letter"}),d=40,r=e.internal.pageSize.getWidth(),n=e.internal.pageSize.getHeight(),g=r-d*2;let s=48;e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Figma Component Inference by M.ai",d,s),s+=20,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`Detected pattern: ${m.detectedPattern||"Unknown"}  ·  Confidence: ${m.confidence??0}%  ·  Risk: ${m.risk||"medium"}`,d,s),s+=16;const b=Array.isArray(m.detectedComponents)?m.detectedComponents:[];if(b.length>1&&(e.setTextColor(90),b.forEach(i=>{e.text(`• ${i.pattern||"Unknown"}${i.label?` — ${i.label}`:""} (${i.confidence??0}%)`,d,s),s+=12}),s+=4,e.setTextColor(0)),m.note){e.setTextColor(90);const i=e.splitTextToSize(String(m.note),g);e.text(i,d,s),s+=i.length*12+4,e.setTextColor(0)}if(o)try{const i=e.getImageProperties(o),$=g,a=i.height/i.width*$,l=Math.min(a,320),h=i.width/i.height*l;e.addImage(o,"PNG",d,s,Math.min($,h),l),s+=Math.min(a,l)+16}catch{}e.setFont("helvetica","bold"),e.setFontSize(13),e.text("Findings",d,s),s+=16,e.setFontSize(10),f.forEach(i=>{const $=[`${i.number}. ${i.title||"Finding"}  [${i.severity}/${i.category}]`,`Current: ${i.currentStructure||""}`,`Issue: ${i.issue||""}`,`Recommendation: ${i.recommendation||""}`,`Why: ${i.why||""}`],a=e.splitTextToSize($.join(`
`),g),l=a.length*12+10;s+l>n-d&&(e.addPage(),s=48),e.setFont("helvetica","bold"),e.text(a.slice(0,1),d,s),e.setFont("helvetica","normal"),e.setTextColor(70),e.text(a.slice(1),d,s+12),e.setTextColor(0),s+=l});const u=t?.designSystem,c=L(t);u&&c.length>0&&(s+60>n-d&&(e.addPage(),s=48),e.setFont("helvetica","bold"),e.setFontSize(13),e.text(`${u.label} component mapping`,d,s),s+=16,e.setFontSize(10),c.forEach(i=>{const a=[`${Number.isInteger(i.nodeRef)&&i.nodeRef>0?`#${i.nodeRef} `:""}${i.label||"—"} (${i.pattern}) → ${i.component}`,`Install: ${_(i.npm,i.version)}`,`Import: ${N(i.importName,i.npm)}`,`Docs: ${i.docs}`],l=e.splitTextToSize(a.join(`
`),g),h=l.length*12+8;s+h>n-d&&(e.addPage(),s=48),e.setFont("helvetica","bold"),e.text(l.slice(0,1),d,s),e.setFont("helvetica","normal"),e.setTextColor(70),e.text(l.slice(1),d,s+12),e.setTextColor(0),s+=h}));{const i=D(t,"");if(i){s+40>n-d&&(e.addPage(),s=48),e.setFont("helvetica","bold"),e.setFontSize(13),e.text("AI instruction",d,s),s+=16,e.setFont("helvetica","normal"),e.setFontSize(9),e.setTextColor(70);const $=e.splitTextToSize(i,g);for(let a=0;a<$.length;a++)s>n-d&&(e.addPage(),s=48),e.text($[a],d,s),s+=11;e.setTextColor(0),e.setFontSize(10)}}e.save(`figma-component-inference-${new Date(t?.generatedAt||Date.now()).toISOString().slice(0,10)}.pdf`)}function Z(t,o,m,f){const e=o?.summary||{},d=Array.isArray(o?.findings)?o.findings:[],r=o?.componentMapping||{},n=o?.metadata||{},g=o?.designSystem,s=L(o),b=D(o,f);let u=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl text-ink">Summary</h3>
      <div class="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <p class="mb-1 text-xs text-muted">Detected pattern</p>
          <p class="m-0 text-xl font-bold text-ink">${p(e.detectedPattern||"Unknown")}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Confidence</p>
          <p class="m-0 text-xl font-bold text-ink">${p(e.confidence??0)}%</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Risk</p>
          <p class="m-0 text-xl font-bold ${G(e.risk||"medium")}">${p((e.risk||"medium").toUpperCase())}</p>
        </div>
      </div>
      ${e.note?`<p class="mt-4 mb-0 text-sm text-muted">${p(e.note)}</p>`:""}
    </div>
  `;const c=Array.isArray(e.detectedComponents)?e.detectedComponents:[];c.length>1&&(u+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl text-ink">Components detected</h3>
        <p class="mt-1 mb-0 text-sm text-muted">Each region the agent could classify in this selection. Scan a single component for the sharpest read.</p>
        <ul class="mt-4 space-y-2">
    `,c.forEach(a=>{u+=`
        <li class="flex items-baseline justify-between gap-4 rounded border border-ink/5 bg-paper px-4 py-2 text-sm dark:bg-cream/5">
          <span class="min-w-0">
            <span class="font-semibold text-ink">${p(a.pattern||"Unknown")}</span>
            ${a.label?`<span class="ml-2 text-muted">${p(a.label)}</span>`:""}
          </span>
          <span class="shrink-0 text-xs text-muted">${p(a.confidence??0)}%</span>
        </li>
      `}),u+="</ul></div>");const i=typeof m=="string"&&m.startsWith("data:");if(u+='<div class="mb-6 space-y-6">',i&&(u+=`
    <div>
      <h4 class="mt-0 font-serif text-lg text-ink">Annotated frame</h4>
      <div class="mt-3 relative overflow-hidden rounded border border-ink/10 bg-white dark:bg-ink/5">
        <img src="${p(m)}" alt="Your frame with numbered inference findings" class="block h-auto w-full" />
        <div class="pointer-events-none absolute inset-0">${J(d)}</div>
      </div>
      <p class="mt-2 text-xs text-muted">Each numbered pin maps to the matching finding, placed on the real node it refers to.</p>
    </div>
    `),u+=`
    <div>
      <h4 class="mt-0 font-serif text-lg text-ink">Findings</h4>
      <div class="mt-3 space-y-3">
  `,d.length===0?u+='<p class="rounded bg-emerald-50 p-4 text-emerald-800">No structural or accessibility issues were inferred.</p>':d.forEach(a=>{u+=`
        <article id="ci-finding-${p(a.number)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${j(a.severity)} text-sm font-bold text-white">${p(a.number)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">
                <span class="rounded px-1.5 py-0.5 text-[10px] tracking-wider ${q(a.severity)}">${p((a.severity||"").toUpperCase())}</span>
                <span class="ml-1 text-muted">${p(a.category||"")}</span>
              </p>
              <h5 class="mt-1 font-serif text-base text-ink">${p(a.title||"Finding")}</h5>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Current structure</dt>
              <dd class="mt-1 text-ink">${p(a.currentStructure||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Issue</dt>
              <dd class="mt-1 text-muted">${p(a.issue||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Recommendation</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${p(a.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${p(a.why||"")}</dd>
            </div>
          </dl>
        </article>
      `}),u+="</div></div></div>",u+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper p-5 dark:bg-cream/5">
      <h4 class="mt-0 font-serif text-lg">Suggested component mapping</h4>
      <dl class="mt-3 space-y-2 text-sm">
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">Generic recommendation</dt>
          <dd class="mt-1 text-ink">${p(r.generic||"n/a")}</dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">Design system</dt>
          <dd class="mt-1 text-muted">${r.designSystem?p(r.designSystem):"No design-system context provided — generic patterns only."}</dd>
        </div>
      </dl>
    </div>
  `,g&&s.length>0){const a=s.map(l=>{const h=Number.isInteger(l.nodeRef)&&l.nodeRef>0?`#${l.nodeRef}`:"—";return`
        <tr class="border-t border-ink/10 align-top">
          <td class="py-2 pr-3 text-ink">${p(l.label||"—")}<span class="ml-1 text-xs text-muted">${p(h)}</span></td>
          <td class="py-2 pr-3 text-muted">${p(l.pattern)}</td>
          <td class="py-2 pr-3 font-semibold text-ink">${p(l.component)}</td>
          <td class="py-2 pr-3"><code class="text-xs">${p(_(l.npm,l.version))}</code></td>
          <td class="py-2"><a href="${p(l.docs)}" target="_blank" rel="noopener noreferrer" class="text-accent underline">Docs</a></td>
        </tr>
      `}).join("");u+=`
      <div class="mb-6 rounded border border-accent/30 bg-paper p-5 dark:bg-cream/5">
        <div class="flex items-center justify-between gap-3">
          <h4 class="mt-0 font-serif text-lg">${p(g.label)} component mapping</h4>
          <span class="text-xs text-muted">Curated${g.catalogVersion?` · ${p(g.catalogVersion)}`:""}</span>
        </div>
        <p class="mt-1 text-xs text-muted">Each detected region mapped to its real ${p(g.label)} component, package, and docs — from a curated catalog, not a guess.</p>
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
            <tbody>${a}</tbody>
          </table>
        </div>
      </div>
    `}b&&(u+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper p-5 dark:bg-cream/5">
        <div class="flex items-center justify-between gap-3">
          <h4 class="mt-0 font-serif text-lg">AI instruction</h4>
          <button type="button" data-ci-copy-ai class="rounded border border-ink/20 px-3 py-1.5 text-xs font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Copy AI instruction</button>
        </div>
        <p class="mt-1 text-xs text-muted">Paste this into your AI coding agent to drive the refactor systematically.</p>
        <pre class="mt-3 max-h-72 overflow-auto rounded bg-ink/5 p-3 text-xs leading-relaxed text-ink dark:bg-paper/10"><code>${p(b)}</code></pre>
      </div>
    `),u+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/60 p-4 text-sm text-muted dark:bg-cream/5">
      <p class="m-0">
        Nodes analyzed: <span class="font-semibold text-ink">${p(n.nodesAnalyzed??0)}</span>
        · Components inferred: <span class="font-semibold text-ink">${p(n.componentsInferred??0)}</span>
        · Potential issues: <span class="font-semibold text-ink">${p(n.potentialIssues??d.length)}</span>
      </p>
    </div>
  `,u+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ci-export="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Download Markdown</button>
      <button type="button" data-ci-export="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Download PDF</button>
      <button type="button" data-ci-copy-context class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Copy M.ai context</button>
      <button type="button" data-mai-open data-mai-source="component_inference_handoff" aria-haspopup="dialog" aria-controls="mai-panel" class="rounded bg-accent px-4 py-2 text-sm font-semibold text-paper hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Ask M.ai</button>
    </div>
  `,t.innerHTML=u;const $=["## M.ai context","","```json",JSON.stringify({summary:e,findings:d,componentMapping:r,designSystem:g||null,mappedComponents:s,metadata:n},null,2),"```"].join(`
`);t.querySelector('[data-ci-export="md"]')?.addEventListener("click",()=>{const a=K(o,m,f),l=new Blob([a],{type:"text/markdown;charset=utf-8"}),h=document.createElement("a");h.href=URL.createObjectURL(l),h.download=`figma-component-inference-${new Date(o?.generatedAt||Date.now()).toISOString().slice(0,10)}.md`,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(h.href)}),t.querySelector('[data-ci-export="pdf"]')?.addEventListener("click",()=>X(o,m)),t.querySelector("[data-ci-copy-context]")?.addEventListener("click",a=>{const l=a.currentTarget;navigator.clipboard?.writeText($).then(()=>{const h=l.textContent;l.textContent="Copied",window.setTimeout(()=>{l.textContent=h},1500)},()=>{})}),t.querySelector("[data-ci-copy-ai]")?.addEventListener("click",a=>{const l=a.currentTarget;navigator.clipboard?.writeText(b).then(()=>{const h=l.textContent;l.textContent="Copied",window.setTimeout(()=>{l.textContent=h},1500)},()=>{})})}function Q(){const t=document.getElementById("component-inference-tool"),o=document.getElementById("inference-figma-url"),m=document.getElementById("inference-design-system-select"),f=document.getElementById("inference-design-system-other-wrap"),e=document.getElementById("inference-design-system"),d=document.getElementById("inference-library"),r=document.getElementById("run-inference-btn"),n=document.getElementById("inference-result-container");if(!t||!o||!r||!n)return;if(m&&f){const w=()=>{const x=m.value==="__other__";f.hidden=!x};m.addEventListener("change",w),w()}const g=(t.dataset.inferenceApiUrl||"").replace(/\/+$/,""),s=t.dataset.figmaOauthUrl||"",b=1800*1e3;let u="",c=0;const i=()=>u!==""&&Date.now()<c,$=()=>{c=Date.now()+b},a=()=>{u="",c=0},l=(w,x)=>window.dispatchEvent(new CustomEvent("site:track",{detail:{name:w,params:x}}));let h=!1;o.addEventListener("focus",()=>{h||(h=!0,l("tool_engage",{tool:"inference"}))});function O(){return new Promise((w,x)=>{if(!s){x(new Error("Sign-in is not configured."));return}const E=s+(s.includes("?")?"&":"?")+"return="+encodeURIComponent(window.location.origin),P=560,R=720,A=Math.max(0,Math.round(window.screenX+(window.outerWidth-P)/2)),z=Math.max(0,Math.round(window.screenY+(window.outerHeight-R)/2)),C=window.open(E,"figma-oauth",`width=${P},height=${R},left=${A},top=${z},menubar=no,toolbar=no,location=yes`);if(!C){x(new Error("The sign-in popup was blocked. Allow popups for this site and try again."));return}let k=!1,y=null;const S=()=>{window.removeEventListener("message",M),window.removeEventListener("storage",T);try{y?.close()}catch{}window.clearInterval(B),window.clearTimeout(H)},I=v=>{if(!(!v||typeof v!="object"||v.source!=="figma-inference-oauth")&&!k){k=!0,S();try{C.close()}catch{}v.status==="success"&&v.token?w(String(v.token)):x(new Error(v.message||"Figma sign-in did not complete."))}},M=v=>I(v.data),T=v=>{if(!(v.key!=="figma-inference-oauth"||!v.newValue))try{I(JSON.parse(v.newValue))}catch{}};window.addEventListener("message",M),window.addEventListener("storage",T);try{y=new BroadcastChannel("figma-inference-oauth"),y.onmessage=v=>I(v.data)}catch{y=null}const B=window.setInterval(()=>{C.closed&&!k&&window.setTimeout(()=>{k||(k=!0,S(),x(new Error("Sign-in was cancelled.")))},500)},600),H=window.setTimeout(()=>{if(!k){k=!0,S();try{C.close()}catch{}x(new Error("Sign-in timed out. Please try again."))}},18e4)})}async function W(w){const x=m?.value||"",E=x&&x!=="__other__"?x:"",P=x==="__other__"&&e?.value.trim()||"",R=d?.value.trim()||"",A={token:u,figmaUrl:w};E&&(A.designSystemId=E),P&&(A.designSystem=P),R&&(A.componentLibrary=R);const z=Y(n);l("inference_run",{tool:"inference"});try{const C=new AbortController,k=window.setTimeout(()=>C.abort(),9e4),y=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A),signal:C.signal});if(window.clearTimeout(k),!y.ok){let T=null;try{T=await y.json()}catch{T=null}y.status===401?a():$(),l("inference_error",{tool:"inference",http_status:y.status}),F(n,T?.error||"The inference request failed.",T?.error?void 0:V(y.status));return}const S=await y.json(),I=S?.report||S,M=typeof S?.imageDataUrl=="string"?S.imageDataUrl:"";l("inference_complete",{tool:"inference",findings:Array.isArray(I?.findings)?I.findings.length:0}),$(),Z(n,I,M,w)}catch(C){const k=String(C?.message||"").toLowerCase(),y=C?.name==="AbortError"||k.includes("aborted");l("inference_error",{tool:"inference",reason:y?"timeout":"network"}),F(n,y?"Inference took too long to finish.":"Unable to reach the inference engine.",y?"The engine may be busy. Please retry in a minute.":"Check your connection and retry.")}finally{z.stop()}}r.addEventListener("click",async()=>{const w=o.value.trim();if(!w){F(n,"Paste a Figma frame link first.","In Figma: select a frame → right-click → Copy/Paste as → Copy link to selection."),o.focus();return}if(!/figma\.com/i.test(w)){F(n,"That does not look like a Figma link.","Paste a https://www.figma.com/design/… link that includes a node-id."),o.focus();return}if(typeof navigator<"u"&&!navigator.onLine){F(n,"You appear to be offline.","Reconnect to the internet, then scan again.");return}r.disabled=!0;const x=r.textContent;try{i()||(a(),r.textContent="Waiting for Figma sign-in…",u=await O()),$(),r.textContent="Scanning…",await W(w)}catch(E){l("inference_error",{tool:"inference",reason:"oauth"}),F(n,E?.message||"Figma sign-in failed.","You can try signing in again.")}finally{r.disabled=!1,r.textContent=x||"Start scan"}})}Q();
