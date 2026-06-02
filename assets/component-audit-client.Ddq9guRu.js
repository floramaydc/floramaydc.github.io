import{E as F,a as v}from"./jspdf.plugin.autotable.BNWpDLH5.js";import"./preload-helper.BlTxHScW.js";function i(o){return String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function g(o,t,r){const d=i(t),l=r?i(r):"";o.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900">
      <p class="m-0 text-sm font-semibold break-words">${d}</p>
      ${l?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${l}</p>`:""}
    </div>
  `}function R(o){const t=String(o||"").trim();if(!t)return"The audit request failed.";const r=t.replace(/^component audit failed:\s*/i,""),l=r.split(/browser logs?:/i)[0].trim()||r,s=l.toLowerCase();return s.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":s.includes("timeout")||s.includes("timed out")?"The audit timed out before the page finished loading.":s.includes("err_name_not_resolved")||s.includes("dns")?"The URL could not be resolved.":s.includes("net::err_")||s.includes("failed to fetch")?"The audit could not reach that URL.":l.length>220?`${l.slice(0,217)}...`:l}function $(o,t=10){return(Array.isArray(o?.findings)?o.findings:[]).slice(0,t).map((d,l)=>({...d,annotationId:d?.annotationId??l+1}))}function A(o){return o?`${o.x}, ${o.y}, ${o.width} × ${o.height}`:""}function I(o,t,r){return o.filter(d=>d?.boundingBox).map(d=>{const l=d.boundingBox,s=l.x/t*100,m=l.y/r*100,e=l.width/t*100,n=l.height/r*100;return`
        <div class="absolute ${B(d.severity)}" title="${i(d.rule||"")}" style="left:${s}%; top:${m}%; width:${e}%; height:${n}%;"></div>
        <div class="absolute z-10" style="left:${s}%; top:${m}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-accent text-xs font-bold text-white shadow-lg shadow-black/20">${i(d.annotationId)}</div>
        </div>
      `}).join("")}function T(o){return o==="high"?"text-red-700":o==="medium"?"text-orange-600":"text-emerald-700"}function L(o){return o==="high"?"bg-red-50 text-red-700 border border-red-200":o==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function B(o){return o==="high"?"border-2 border-red-500/90 bg-red-500/10":o==="medium"?"border-2 border-orange-400/90 bg-orange-400/10":"border border-emerald-400/60"}function U(o){const t=o?.summary||{},r=$(o,10),d=Array.isArray(o?.inventory)?o.inventory:[],l=Object.entries(t.componentDistribution||{}).map(([e,n])=>`  - ${e}: ${n}`).join(`
`),s=["# Component Audit","",`- URL: ${o?.url||""}`,`- Library context: ${o?.libraryContext||"Fluent"}`,`- Timestamp: ${o?.timestamp||""}`,`- Total components: ${t.totalComponents??0}`,`- Custom: ${t.customComponentCount??0}  Native: ${t.nativeComponentCount??0}  Fluent: ${t.fluentComponentCount??0}`,`- Risk — High: ${t.riskSummary?.high??0}  Medium: ${t.riskSummary?.medium??0}  Low: ${t.riskSummary?.low??0}`,"","## Component distribution","",l||"  (none)","","## Method","","- Observe: visit the page, capture screenshot, extract DOM inventory.","- Inventory: build a typed component list with source detection and confidence scores.","- Annotate: apply the Fluent rule pack to flag risky implementations.","- Recommend: map each finding to the appropriate Fluent component with explanation.","","## Annotations",""];r.length===0?s.push("No risky implementations found.",""):r.forEach(e=>{s.push(`### Annotation ${e.annotationId} — ${e.rule||"Finding"}`,"",`- Risk: ${e.severity}`,`- Component type: ${e.componentType}`,`- Selector: ${e.selector||""}`,`- Bounding box: ${A(e.boundingBox)}`,`- Evidence: ${e.evidence||""}`,`- Recommendation: ${e.recommendation||""}`,`- Fluent alternative: ${e.fluentAlternative||"n/a"}`,`- Package: ${e.fluentPackage||""}`,`- Benefits: ${(e.benefits||[]).join(", ")}`,`- Explanation: ${e.explanation||""}`,"")}),s.push("## Findings",""),r.length===0?s.push("No issues found."):(s.push("| # | Risk | Rule | Type | Selector | Fluent Alternative |","|---|---|---|---|---|---|"),r.forEach(e=>{s.push(`| ${e.annotationId} | ${e.severity} | ${e.rule} | ${e.componentType} | ${e.selector||""} | ${e.fluentAlternative||"n/a"} |`)})),s.push("","## Screenshot","");const m=o?.screenshot;return m?.data?s.push(`![Component audit screenshot](data:${m.mimeType||"image/png"};base64,${m.data})`):s.push("Screenshot unavailable."),s.push("","## Component Inventory","","| ID | Type | Source | Risk | Confidence | Text | Selector |","|---|---|---|---|---|---|---|"),d.slice(0,30).forEach(e=>{s.push(`| ${e?.id||""} | ${e?.componentType||""} | ${e?.possibleSource||""} | ${e?.risk||""} | ${e?.confidence??""}% | ${e?.visibleText||""} | ${e?.selector||""} |`)}),s.push("","## M.ai Context","","```json",JSON.stringify(o?.maiContext||{},null,2),"```"),s.join(`
`)}function E(o){const t=new F({orientation:"portrait",unit:"pt",format:"letter"}),r=o?.summary||{},d=$(o,10),l=Array.isArray(o?.inventory)?o.inventory:[],s=o?.screenshot,m=`component-audit-${new URL(o.url).hostname}-${new Date(o.timestamp||Date.now()).toISOString().slice(0,10)}`,e=t.internal.pageSize.getWidth(),n=40,p=e-n*2;let a=48;if(t.setFont("helvetica","bold"),t.setFontSize(18),t.text("Component Audit by M.ai",n,a),a+=18,t.setFont("helvetica","normal"),t.setFontSize(10),t.text(`URL: ${o.url}`,n,a),a+=14,t.text(`Library context: ${o.libraryContext||"Fluent"}`,n,a),a+=14,t.text(`Timestamp: ${o.timestamp||""}`,n,a),a+=18,v(t,{startY:a,margin:{left:n,right:n},head:[["Total","Custom","Native","Fluent","High Risk","Medium Risk"]],body:[[String(r.totalComponents??0),String(r.customComponentCount??0),String(r.nativeComponentCount??0),String(r.fluentComponentCount??0),String(r.riskSummary?.high??0),String(r.riskSummary?.medium??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),a=t.lastAutoTable.finalY+18,s?.data){t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Screenshot with annotations",n,a),a+=10;const c=Number(s.width||1),u=Number(s.height||1),h=Math.max(220,Math.round(p*(u/c)));t.addImage(`data:${s.mimeType||"image/png"};base64,${s.data}`,"PNG",n,a,p,h);const k=p/c,w=h/u;d.forEach(b=>{if(!b.boundingBox)return;const y=n+b.boundingBox.x*k,f=a+b.boundingBox.y*w,S=b.boundingBox.width*k,C=b.boundingBox.height*w;if(S>0&&C>0){const x=b.severity==="high";t.setDrawColor(x?204:234,x?51:88,x?51:12),t.setLineWidth(1),t.rect(y,f,S,C),t.setFillColor(x?122:160,x?40:80,x?40:10),t.circle(y+8,f+8,8,"F"),t.setTextColor(255,255,255),t.setFont("helvetica","bold"),t.setFontSize(8),t.text(String(b.annotationId),y+8,f+10.5,{align:"center"}),t.setTextColor(0,0,0)}}),a+=h+18}t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Annotations",n,a),a+=8,d.length===0?(t.setFont("helvetica","normal"),t.setFontSize(10),t.text("No risky implementations found.",n,a+12),a+=30):(v(t,{startY:a,margin:{left:n,right:n},head:[["#","Risk","Rule","Type","Fluent Alternative","Selector"]],body:d.map(c=>[String(c.annotationId),String(c.severity||""),String(c.rule||""),String(c.componentType||""),String(c.fluentAlternative||"n/a"),String(c.selector||"")]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:20},1:{cellWidth:46},2:{cellWidth:100},3:{cellWidth:70},4:{cellWidth:110},5:{cellWidth:166}}}),a=t.lastAutoTable.finalY+18),t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Component inventory",n,a),a+=8,v(t,{startY:a,margin:{left:n,right:n},head:[["ID","Type","Source","Risk","Conf.","Text","Selector"]],body:l.slice(0,25).map(c=>[String(c?.id||""),String(c?.componentType||""),String(c?.possibleSource||""),String(c?.risk||""),`${c?.confidence??""}%`,String(c?.visibleText||"").substring(0,30),String(c?.selector||"").substring(0,60)]),styles:{fontSize:7,cellPadding:2,valign:"top"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:38},1:{cellWidth:52},2:{cellWidth:44},3:{cellWidth:34},4:{cellWidth:28},5:{cellWidth:80},6:{cellWidth:236}}}),t.save(`${m}.pdf`)}function M(o,t){const r=t?.summary||{},d=$(t,10),l=Array.isArray(t?.inventory)?t.inventory:[],s=r.componentDistribution||{},m=d.length;let e=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <div>
          <p class="mb-1 text-xs text-muted">Components</p>
          <p class="m-0 text-xl font-bold">${i(r.totalComponents??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${i(m)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">High Risk</p>
          <p class="m-0 text-xl font-bold text-red-700">${i(r.riskSummary?.high??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Medium Risk</p>
          <p class="m-0 text-xl font-bold text-orange-600">${i(r.riskSummary?.medium??0)}</p>
        </div>
      </div>
      <div class="mt-5 rounded border border-ink/10 bg-paper p-4 text-sm text-muted dark:bg-cream/5">
        <p class="m-0">
          Source mix: <span class="font-semibold text-ink">${i(r.customComponentCount??0)}</span> custom,
          <span class="font-semibold text-ink">${i(r.nativeComponentCount??0)}</span> native,
          <span class="font-semibold text-ink">${i(r.fluentComponentCount??0)}</span> Fluent.
        </p>
      </div>
    </div>
  `;if(e+=`
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
  `,t?.screenshot?.data){const n=t.screenshot,p=Number(n.width||1),a=Number(n.height||1),c=I(d,p,a);e+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${i(n.mimeType||"image/png")};base64,${n.data}"
            alt="Component audit screenshot with annotations"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${c}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,d.forEach(u=>{L(u.severity),e+=`
        <article id="ca-annotation-${i(u.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">${i(u.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${i((u.severity||"").toUpperCase())} RISK</p>
              <h4 class="mt-1 font-serif text-base">${i(u.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Component</dt>
              <dd class="mt-1 text-ink">${i(u.componentType||"n/a")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${i(u.evidence||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${i(u.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Fluent alternative</dt>
              <dd class="mt-1 text-muted">${i(u.fluentAlternative||"n/a")}</dd>
            </div>
            ${u.fluentAlternative?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Package</dt>
              <dd class="mt-1 font-mono text-xs text-accent">${i(u.fluentPackage||"")}</dd>
            </div>`:""}
          </dl>
        </article>
      `}),e+="</div></div></div>"}else d.length===0&&(e+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No risky implementations found.</p>');e+=`
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
  `,d.forEach(n=>{e+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${i(n.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase ${T(n.severity||"")}">${i((n.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${i(n.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${i(n.componentType||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${i(n.selector||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${i(A(n.boundingBox))}</td>
      </tr>
    `}),e+="</tbody></table></div>",d.length>10&&(e+=`<p class="mt-3 text-xs text-muted">... and ${i(d.length-10)} more annotated findings</p>`),e+=`
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
  `,e+=`
    <details class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <summary class="cursor-pointer font-serif text-xl">Component inventory (${i(l.length)})</summary>
      <p class="mt-2 text-sm text-muted">All detected components with source, risk, and confidence score.</p>
      ${Object.keys(s).length?`
      <div class="mt-4 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Component distribution</h4>
        <div class="mt-3 flex flex-wrap gap-2">
          ${Object.entries(s).sort((n,p)=>p[1]-n[1]).map(([n,p])=>`
              <span class="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-xs text-muted">
                <span class="font-semibold text-ink">${i(p)}</span>
                ${i(n)}
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
  `,l.slice(0,30).forEach(n=>{e+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-2 pr-3 text-muted text-xs">${i(n?.id||"")}</td>
        <td class="py-2 pr-3 text-xs">${i(n?.componentType||"")}</td>
        <td class="py-2 pr-3 text-xs text-muted">${i(n?.possibleSource||"")}</td>
        <td class="py-2 pr-3 text-xs ${T(n?.risk||"")}">${i((n?.risk||"").toUpperCase())}</td>
        <td class="py-2 pr-3 text-xs text-muted">${i(n?.confidence??"")}%</td>
        <td class="py-2 pr-3 text-xs text-muted">${i((n?.visibleText||"").substring(0,40))}</td>
        <td class="py-2 pr-3 text-xs text-muted">${i((n?.selector||"").substring(0,60))}</td>
      </tr>
    `}),e+="</tbody></table></div>",l.length>30&&(e+=`<p class="mt-3 text-xs text-muted">... and ${i(l.length-30)} more components</p>`),e+="</details>",e+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ca-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-ca-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,o.innerHTML=e,o.querySelectorAll("[data-ca-export-format]").forEach(n=>{n.addEventListener("click",()=>{const p=n.getAttribute("data-ca-export-format");if(p==="pdf")E(t);else if(p==="md"){const a=U(t),c=`component-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`,u=new Blob([a],{type:"text/markdown;charset=utf-8"}),h=document.createElement("a");h.href=URL.createObjectURL(u),h.download=`${c}.md`,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(h.href)}})})}function j(){const o=document.getElementById("component-audit-tool"),t=o?.dataset.componentAuditApiUrl||"",r=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),d=window.__COMPONENT_AUDIT_API_URL||t||(r?"http://localhost:3000/api/component-audit":`${window.location.origin}/api/component-audit`),l=document.getElementById("component-audit-url"),s=document.getElementById("run-component-audit-btn"),m=document.getElementById("component-result-container");!o||!l||!s||!m||(window.location.hash==="#component-audit-tool"&&requestAnimationFrame(()=>{o.scrollIntoView({block:"start"})}),s.addEventListener("click",async()=>{const e=l.value.trim();if(!e){g(m,"Please enter a URL.");return}try{new URL(e.startsWith("http")?e:"https://"+e)}catch{g(m,"Please enter a valid URL.");return}s.disabled=!0,s.textContent="Running audit…",m.innerHTML="";try{const n=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})});if(!n.ok){let a=null;try{a=await n.json()}catch{a=null}g(m,R(a?.error),a?.hint||"Please try again in a moment.");return}const p=await n.json();M(m,p)}catch{g(m,"Unable to contact the audit service.","Check your connection and retry. If this persists, the API may be temporarily unavailable.")}finally{s.disabled=!1,s.textContent="Run Audit"}}))}export{j as initializeComponentAuditTool};
