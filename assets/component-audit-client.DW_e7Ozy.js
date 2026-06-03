import{E as R,a as $}from"./jspdf.plugin.autotable.BNWpDLH5.js";import"./preload-helper.BlTxHScW.js";function i(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function y(e,t,a){const d=i(t),c=a?i(a):"";e.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words>${d}</p>
      ${c?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${c}</p>`:""}
    </div>
  `}function F(e,t){const a=String(t||"").toLowerCase();return e===429?"The service is currently busy. Please retry in about 30-60 seconds.":e===502||e===503||e===504?"The audit service is temporarily unavailable or under maintenance. Please try again shortly.":e===408?"The page took too long to load. Retry once, then test a lighter page to confirm connectivity.":e===422||a.includes("could not reach")||a.includes("could not be resolved")?"Verify that the page is public, not login-gated, and not blocking automated browsers.":"Please try again in a moment. If this keeps happening, the audit service may be temporarily unavailable."}function I(e){const t=["Connecting to M.ai audit service","Opening page in a secure browser session","Inspecting component inventory and risks","Packaging your report"];let a=0;const d=()=>{const s=t.map((u,n)=>{const o=n===a;return`<li class="flex items-center gap-2 text-sm ${o?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${o?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${i(u)}</li>`}).join("");e.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running your audit</p>
        <p class="mt-2 mb-0 text-xs text-muted">This can take 10-60 seconds depending on page size and network conditions.</p>
        <ul class="mt-3 space-y-2">${s}</ul>
        <p class="mt-3 mb-0 text-xs text-muted">If this takes unusually long, the service may be busy or in maintenance. We'll show a clear message if that happens.</p>
      </div>
    `};d();const c=window.setInterval(()=>{a=(a+1)%t.length,d()},1800);return{stop(){window.clearInterval(c)}}}function L(e){const t=String(e||"").trim();if(!t)return"The audit request failed.";const a=t.replace(/^component audit failed:\s*/i,""),c=a.split(/browser logs?:/i)[0].trim()||a,s=c.toLowerCase();return s.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":s.includes("timeout")||s.includes("timed out")?"The audit timed out before the page finished loading.":s.includes("err_name_not_resolved")||s.includes("dns")?"The URL could not be resolved.":s.includes("net::err_")||s.includes("failed to fetch")?"The audit could not reach that URL.":c.length>220?`${c.slice(0,217)}...`:c}function k(e,t=10){return(Array.isArray(e?.findings)?e.findings:[]).slice(0,t).map((d,c)=>({...d,annotationId:d?.annotationId??c+1}))}function A(e){return e?`${e.x}, ${e.y}, ${e.width} × ${e.height}`:""}function B(e,t,a){return e.filter(d=>d?.boundingBox).map(d=>{const c=d.boundingBox,s=c.x/t*100,u=c.y/a*100,n=c.width/t*100,o=c.height/a*100;return`
        <div class="absolute ${E(d.severity)}" title="${i(d.rule||"")}" style="left:${s}%; top:${u}%; width:${n}%; height:${o}%;"></div>
        <div class="absolute z-10" style="left:${s}%; top:${u}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${i(d.annotationId)}</div>
        </div>
      `}).join("")}function T(e){return e==="high"?"text-red-700":e==="medium"?"text-orange-600":"text-emerald-700"}function P(e){return e==="high"?"bg-red-50 text-red-700 border border-red-200":e==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function E(e){return e==="high"?"border-2 border-red-500/90 bg-red-500/10":e==="medium"?"border-2 border-orange-400/90 bg-orange-400/10":"border border-emerald-400/60"}function M(e){const t=e?.summary||{},a=k(e,10),d=Array.isArray(e?.inventory)?e.inventory:[],c=Object.entries(t.componentDistribution||{}).map(([n,o])=>`  - ${n}: ${o}`).join(`
`),s=["# Component Audit","",`- URL: ${e?.url||""}`,`- Library context: ${e?.libraryContext||"Fluent"}`,`- Timestamp: ${e?.timestamp||""}`,`- Total components: ${t.totalComponents??0}`,`- Custom: ${t.customComponentCount??0}  Native: ${t.nativeComponentCount??0}  Fluent: ${t.fluentComponentCount??0}`,`- Risk — High: ${t.riskSummary?.high??0}  Medium: ${t.riskSummary?.medium??0}  Low: ${t.riskSummary?.low??0}`,"","## Component distribution","",c||"  (none)","","## Method","","- Observe: visit the page, capture screenshot, extract DOM inventory.","- Inventory: build a typed component list with source detection and confidence scores.","- Annotate: apply the Fluent rule pack to flag risky implementations.","- Recommend: map each finding to the appropriate Fluent component with explanation.","","## Annotations",""];a.length===0?s.push("No risky implementations found.",""):a.forEach(n=>{s.push(`### Annotation ${n.annotationId} — ${n.rule||"Finding"}`,"",`- Risk: ${n.severity}`,`- Component type: ${n.componentType}`,`- Selector: ${n.selector||""}`,`- Bounding box: ${A(n.boundingBox)}`,`- Evidence: ${n.evidence||""}`,`- Recommendation: ${n.recommendation||""}`,`- Fluent alternative: ${n.fluentAlternative||"n/a"}`,`- Package: ${n.fluentPackage||""}`,`- Benefits: ${(n.benefits||[]).join(", ")}`,`- Explanation: ${n.explanation||""}`,"")}),s.push("## Findings",""),a.length===0?s.push("No issues found."):(s.push("| # | Risk | Rule | Type | Selector | Fluent Alternative |","|---|---|---|---|---|---|"),a.forEach(n=>{s.push(`| ${n.annotationId} | ${n.severity} | ${n.rule} | ${n.componentType} | ${n.selector||""} | ${n.fluentAlternative||"n/a"} |`)})),s.push("","## Screenshot","");const u=e?.screenshot;return u?.data?s.push(`![Component audit screenshot](data:${u.mimeType||"image/png"};base64,${u.data})`):s.push("Screenshot unavailable."),s.push("","## Component Inventory","","| ID | Type | Source | Risk | Confidence | Text | Selector |","|---|---|---|---|---|---|---|"),d.slice(0,30).forEach(n=>{s.push(`| ${n?.id||""} | ${n?.componentType||""} | ${n?.possibleSource||""} | ${n?.risk||""} | ${n?.confidence??""}% | ${n?.visibleText||""} | ${n?.selector||""} |`)}),s.push("","## M.ai Context","","```json",JSON.stringify(e?.maiContext||{},null,2),"```"),s.join(`
`)}function U(e){const t=new R({orientation:"portrait",unit:"pt",format:"letter"}),a=e?.summary||{},d=k(e,10),c=Array.isArray(e?.inventory)?e.inventory:[],s=e?.screenshot,u=`component-audit-${new URL(e.url).hostname}-${new Date(e.timestamp||Date.now()).toISOString().slice(0,10)}`,n=t.internal.pageSize.getWidth(),o=40,m=n-o*2;let r=48;if(t.setFont("helvetica","bold"),t.setFontSize(18),t.text("Component Audit by M.ai",o,r),r+=18,t.setFont("helvetica","normal"),t.setFontSize(10),t.text(`URL: ${e.url}`,o,r),r+=14,t.text(`Library context: ${e.libraryContext||"Fluent"}`,o,r),r+=14,t.text(`Timestamp: ${e.timestamp||""}`,o,r),r+=18,$(t,{startY:r,margin:{left:o,right:o},head:[["Total","Custom","Native","Fluent","High Risk","Medium Risk"]],body:[[String(a.totalComponents??0),String(a.customComponentCount??0),String(a.nativeComponentCount??0),String(a.fluentComponentCount??0),String(a.riskSummary?.high??0),String(a.riskSummary?.medium??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),r=t.lastAutoTable.finalY+18,s?.data){t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Screenshot with annotations",o,r),r+=10;const l=Number(s.width||1),p=Number(s.height||1),h=Math.max(220,Math.round(m*(p/l)));t.addImage(`data:${s.mimeType||"image/png"};base64,${s.data}`,"PNG",o,r,m,h);const x=m/l,w=h/p;d.forEach(b=>{if(!b.boundingBox)return;const f=o+b.boundingBox.x*x,v=r+b.boundingBox.y*w,S=b.boundingBox.width*x,C=b.boundingBox.height*w;if(S>0&&C>0){const g=b.severity==="high";t.setDrawColor(g?204:234,g?51:88,g?51:12),t.setLineWidth(1),t.rect(f,v,S,C),t.setFillColor(g?122:160,g?40:80,g?40:10),t.circle(f+8,v+8,8,"F"),t.setTextColor(255,255,255),t.setFont("helvetica","bold"),t.setFontSize(8),t.text(String(b.annotationId),f+8,v+10.5,{align:"center"}),t.setTextColor(0,0,0)}}),r+=h+18}t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Annotations",o,r),r+=8,d.length===0?(t.setFont("helvetica","normal"),t.setFontSize(10),t.text("No risky implementations found.",o,r+12),r+=30):($(t,{startY:r,margin:{left:o,right:o},head:[["#","Risk","Rule","Type","Fluent Alternative","Selector"]],body:d.map(l=>[String(l.annotationId),String(l.severity||""),String(l.rule||""),String(l.componentType||""),String(l.fluentAlternative||"n/a"),String(l.selector||"")]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:20},1:{cellWidth:46},2:{cellWidth:100},3:{cellWidth:70},4:{cellWidth:110},5:{cellWidth:166}}}),r=t.lastAutoTable.finalY+18),t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Component inventory",o,r),r+=8,$(t,{startY:r,margin:{left:o,right:o},head:[["ID","Type","Source","Risk","Conf.","Text","Selector"]],body:c.slice(0,25).map(l=>[String(l?.id||""),String(l?.componentType||""),String(l?.possibleSource||""),String(l?.risk||""),`${l?.confidence??""}%`,String(l?.visibleText||"").substring(0,30),String(l?.selector||"").substring(0,60)]),styles:{fontSize:7,cellPadding:2,valign:"top"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:38},1:{cellWidth:52},2:{cellWidth:44},3:{cellWidth:34},4:{cellWidth:28},5:{cellWidth:80},6:{cellWidth:236}}}),t.save(`${u}.pdf`)}function W(e,t){const a=t?.summary||{},d=k(t,10),c=Array.isArray(t?.inventory)?t.inventory:[],s=a.componentDistribution||{},u=d.length;let n=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <div>
          <p class="mb-1 text-xs text-muted">Components</p>
          <p class="m-0 text-xl font-bold">${i(a.totalComponents??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${i(u)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">High Risk</p>
          <p class="m-0 text-xl font-bold text-red-700">${i(a.riskSummary?.high??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Medium Risk</p>
          <p class="m-0 text-xl font-bold text-orange-600">${i(a.riskSummary?.medium??0)}</p>
        </div>
      </div>
      <div class="mt-5 rounded border border-ink/10 bg-paper p-4 text-sm text-muted dark:bg-cream/5">
        <p class="m-0">
          Source mix: <span class="font-semibold text-ink">${i(a.customComponentCount??0)}</span> custom,
          <span class="font-semibold text-ink">${i(a.nativeComponentCount??0)}</span> native,
          <span class="font-semibold text-ink">${i(a.fluentComponentCount??0)}</span> Fluent.
        </p>
      </div>
    </div>
  `;if(n+=`
    <section class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="mt-0 font-serif text-xl">Annotations</h3>
          <p class="mt-2 text-sm text-muted">Numbered markers on the screenshot match the cards and the findings table below.</p>
        </div>
        <div class="rounded border border-ink/10 bg-paper px-3 py-2 text-xs text-muted dark:bg-cream/5">
          Reference annotations are designed to read like the accessibility audit: a visible marker, a note, and a matching evidence row.
        </div>
      </div>
  `,t?.screenshot?.data){const o=t.screenshot,m=Number(o.width||1),r=Number(o.height||1),l=B(d,m,r);n+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${i(o.mimeType||"image/png")};base64,${o.data}"
            alt="Component audit screenshot with annotations"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${l}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,d.forEach(p=>{P(p.severity),n+=`
        <article id="ca-annotation-${i(p.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-paper">${i(p.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${i((p.severity||"").toUpperCase())} RISK</p>
              <h4 class="mt-1 font-serif text-base">${i(p.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Component</dt>
              <dd class="mt-1 text-ink">${i(p.componentType||"n/a")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${i(p.evidence||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${i(p.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Fluent alternative</dt>
              <dd class="mt-1 text-muted">${i(p.fluentAlternative||"n/a")}</dd>
            </div>
            ${p.fluentAlternative?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Package</dt>
              <dd class="mt-1 font-mono text-xs text-accent">${i(p.fluentPackage||"")}</dd>
            </div>`:""}
          </dl>
        </article>
      `}),n+="</div></div></div>"}else d.length===0&&(n+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No risky implementations found.</p>');n+=`
      <div class="mt-6 overflow-x-auto">
        <table class="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr class="border-b border-ink/10 text-xs uppercase tracking-widest text-muted">
              <th class="py-2 pr-3 font-semibold">Annotation</th>
              <th class="py-2 pr-3 font-semibold">Severity</th>
              <th class="py-2 pr-3 font-semibold">Rule</th>
              <th class="py-2 pr-3 font-semibold">Component</th>
              <th class="py-2 pr-3 font-semibold">Selector</th>
              <th class="py-2 pr-3 font-semibold">Bounding box</th>
            </tr>
          </thead>
          <tbody>
  `,d.forEach(o=>{n+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${i(o.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase ${T(o.severity||"")}">${i((o.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${i(o.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${i(o.componentType||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${i(o.selector||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${i(A(o.boundingBox))}</td>
      </tr>
    `}),n+="</tbody></table></div>",d.length>10&&(n+=`<p class="mt-3 text-xs text-muted">... and ${i(d.length-10)} more annotated findings</p>`),n+=`
      <div class="mt-6 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Method</h4>
        <ul class="mt-3 space-y-2 text-sm text-muted">
          <li>Observe: visit the page, capture screenshot, and extract the DOM inventory.</li>
          <li>Inventory: build a typed component list with source detection and confidence scores.</li>
          <li>Annotate: apply the Fluent rule pack to flag risky implementations.</li>
          <li>Recommend: map each finding to the appropriate Fluent component with explanation and benefits.</li>
        </ul>
      </div>
    </section>
  `,n+=`
    <details class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <summary class="cursor-pointer font-serif text-xl">Component inventory (${i(c.length)})</summary>
      <p class="mt-2 text-sm text-muted">All detected components with source, risk, and confidence score.</p>
      ${Object.keys(s).length?`
      <div class="mt-4 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Component distribution</h4>
        <div class="mt-3 flex flex-wrap gap-2">
          ${Object.entries(s).sort((o,m)=>m[1]-o[1]).map(([o,m])=>`
              <span class="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-xs text-muted">
                <span class="font-semibold text-ink">${i(m)}</span>
                ${i(o)}
              </span>
            `).join("")}
        </div>
      </div>`:""}
      <div class="mt-4 overflow-x-auto">
        <table class="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr class="border-b border-ink/10 text-xs uppercase tracking-widest text-muted">
              <th class="py-2 pr-3 font-semibold">ID</th>
              <th class="py-2 pr-3 font-semibold">Type</th>
              <th class="py-2 pr-3 font-semibold">Source</th>
              <th class="py-2 pr-3 font-semibold">Risk</th>
              <th class="py-2 pr-3 font-semibold">Conf.</th>
              <th class="py-2 pr-3 font-semibold">Text</th>
              <th class="py-2 pr-3 font-semibold">Selector</th>
            </tr>
          </thead>
          <tbody>
  `,c.slice(0,30).forEach(o=>{n+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-2 pr-3 text-muted text-xs">${i(o?.id||"")}</td>
        <td class="py-2 pr-3 text-xs">${i(o?.componentType||"")}</td>
        <td class="py-2 pr-3 text-xs text-muted">${i(o?.possibleSource||"")}</td>
        <td class="py-2 pr-3 text-xs ${T(o?.risk||"")}">${i((o?.risk||"").toUpperCase())}</td>
        <td class="py-2 pr-3 text-xs text-muted">${i(o?.confidence??"")}%</td>
        <td class="py-2 pr-3 text-xs text-muted">${i((o?.visibleText||"").substring(0,40))}</td>
        <td class="py-2 pr-3 text-xs text-muted">${i((o?.selector||"").substring(0,60))}</td>
      </tr>
    `}),n+="</tbody></table></div>",c.length>30&&(n+=`<p class="mt-3 text-xs text-muted">... and ${i(c.length-30)} more components</p>`),n+="</details>",n+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ca-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-ca-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,e.innerHTML=n,e.querySelectorAll("[data-ca-export-format]").forEach(o=>{o.addEventListener("click",()=>{const m=o.getAttribute("data-ca-export-format");if(m==="pdf")U(t);else if(m==="md"){const r=M(t),l=`component-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`,p=new Blob([r],{type:"text/markdown;charset=utf-8"}),h=document.createElement("a");h.href=URL.createObjectURL(p),h.download=`${l}.md`,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(h.href)}})})}function O(){const e=document.getElementById("component-audit-tool"),t=e?.dataset.componentAuditApiUrl||"",a=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),d=window.__COMPONENT_AUDIT_API_URL||t||(a?"http://localhost:3000/api/component-audit":`${window.location.origin}/api/component-audit`),c=document.getElementById("component-audit-url"),s=document.getElementById("run-component-audit-btn"),u=document.getElementById("component-result-container");!e||!c||!s||!u||(window.location.hash==="#component-audit-tool"&&requestAnimationFrame(()=>{e.scrollIntoView({block:"start"})}),s.addEventListener("click",async()=>{const n=c.value.trim();if(!n){y(u,"Please enter a URL.");return}if(typeof navigator<"u"&&!navigator.onLine){y(u,"You appear to be offline.","Reconnect to the internet, then run the audit again.");return}try{new URL(n.startsWith("http")?n:"https://"+n)}catch{y(u,"Please enter a valid URL.");return}s.disabled=!0,s.textContent="Running audit...";const o=I(u);try{const m=new AbortController,r=window.setTimeout(()=>m.abort(),9e4),l=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n}),signal:m.signal});if(window.clearTimeout(r),!l.ok){let h=null;try{h=await l.json()}catch{h=null}const x=L(h?.error);y(u,x,h?.hint||F(l.status,x));return}const p=await l.json();W(u,p)}catch(m){const r=String(m?.message||"").toLowerCase(),l=m?.name==="AbortError"||r.includes("aborted");y(u,l?"This audit took too long to finish.":"Unable to contact the audit service.",l?"The service may be busy right now. Please retry in a minute.":"Check your connection and retry. If this persists, the API may be temporarily unavailable.")}finally{o.stop(),s.disabled=!1,s.textContent="Run Audit"}}))}export{O as initializeComponentAuditTool};
