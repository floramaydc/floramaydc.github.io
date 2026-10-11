import{E as O}from"./jspdf.es.min.iptNDT6D.js";import{r as Y,a as W}from"./inspect-picker.C78l_t6T.js";import{a as q}from"./mai-component-registry.CA_Vpkg3.js";import"./preload-helper.BlTxHScW.js";function o(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function T(s,e,i){const l=o(e),r=i?o(i):"";s.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words">${l}</p>
      ${r?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${r}</p>`:""}
    </div>
  `}function V(s,e){const i=String(e||"").toLowerCase();return s===429?"The service is currently busy. Please retry in about 30-60 seconds.":s===502||s===503||s===504?"The audit service is temporarily unavailable or under maintenance. Please try again shortly.":s===408?"The page took too long to load. Retry once, then test a lighter page to confirm connectivity.":s===422||i.includes("could not reach")||i.includes("could not be resolved")?"Verify that the page is public, not login-gated, and not blocking automated browsers.":"Please try again in a moment. If this keeps happening, the audit service may be temporarily unavailable."}function C(s){const e=Math.floor(s/1e3);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function J(s){const e=["Connecting to M.ai audit service","Loading the page for analysis","Running accessibility checks and collecting evidence","Packaging your report"],i=Date.now();let l=0;const r=()=>{const t=C(Date.now()-i),d=e.map((c,m)=>{const a=m===l;return`<li class="flex items-center gap-2 text-sm ${a?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${a?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${o(c)}</li>`}).join("");s.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <div class="flex items-baseline justify-between gap-2">
          <p class="m-0 text-sm font-semibold text-ink">Running your audit</p>
          <p class="m-0 text-xs tabular-nums text-muted" aria-label="Elapsed time">${t}</p>
        </div>
        <p class="mt-2 mb-0 text-xs text-muted">This can take 10-60 seconds depending on page size and network conditions.</p>
        <ul class="mt-3 space-y-2">${d}</ul>
        <p class="mt-3 mb-0 text-xs text-muted">If this takes unusually long, the service may be busy or in maintenance. We'll show a clear message if that happens.</p>
      </div>
    `};r();const n=window.setInterval(r,1e3);return{elapsed(){return Date.now()-i},stop(){window.clearInterval(n)}}}function G(s){const e=String(s||"").trim();if(!e)return"The audit request failed.";const i=e.replace(/^audit failed:\s*/i,""),r=i.split(/browser logs?:/i)[0].trim()||i,n=r.toLowerCase();return n.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":n.includes("timeout")||n.includes("timed out")?"The audit timed out before the page finished loading.":n.includes("err_name_not_resolved")||n.includes("dns")?"The URL could not be resolved.":n.includes("net::err_")||n.includes("failed to fetch")?"The audit could not reach that URL.":r.length>220?`${r.slice(0,217)}...`:r}const N={critical:0,serious:1,moderate:2,minor:3};function P(s,e=10){return[...Array.isArray(s?.findings)?s.findings:[]].sort((l,r)=>(N[l?.severity]??4)-(N[r?.severity]??4)).slice(0,e).map((l,r)=>({...l,annotationId:r+1}))}function M(s){return s?`${s.x}, ${s.y}, ${s.width} × ${s.height}`:""}function X(s){const e=s?.summary||{},i=P(s,10),l=Array.isArray(s?.inventory)?s.inventory:[],r=s?.screenshot,n=["# Accessibility Audit","",`- URL: ${s?.url||""}`,`- Timestamp: ${s?.timestamp||""}`];if(s?.mode==="scoped"&&s?.scope){const t=Array.isArray(s.scope.selections)?s.scope.selections:[];t.length>1?(n.push(`- Scope: ${t.length} selected elements`),t.forEach((d,c)=>{n.push(`  ${c+1}. ${d?.type||"element"}: ${d?.name||""} (${d?.selector||""})`)}),n.push("- Note: This report covers only the selected elements. Run a full page audit for comprehensive results.")):n.push(`- Scope: ${s.scope.type||"component"}: ${s.scope.name||""}`,`- Scope selector: ${s.scope.selector||""}`,"- Note: This report covers only the scoped component. Run a full page audit for comprehensive results.")}return n.push(`- Elements: ${e.totalElements??0}`,`- Findings: ${e.totalFindings??0}`,`- Critical: ${e.critical??0}`,`- Serious: ${e.serious??0}`,`- Moderate: ${e.moderate??0}`,`- Minor: ${e.minor??0}`,"","## Method","","- Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.","- Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.","- Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.","","## Annotations",""),i.length===0?n.push("No annotated findings to review.",""):i.forEach(t=>{n.push(`### Annotation ${t.annotationId} - ${t?.rule||"Finding"}`,"",`- Severity: ${t?.severity||""}`,`- Element: ${t?.elementId||""}`,`- Selector: ${t?.selector||""}`,`- Bounding box: ${M(t?.boundingBox)}`,`- Why it matters: ${t?.whyItMatters||""}`,`- Suggested fix: ${t?.suggestedFix||""}`,"")}),n.push("## Findings"),i.length===0?n.push("","No issues found."):(n.push("","| Annotation | Severity | Rule | Element | Selector | BBox |","|---|---|---|---|---|---|"),i.forEach(t=>{n.push(`| ${t.annotationId} | ${t?.severity||""} | ${t?.rule||"Finding"} | ${t?.elementId||""} | ${t?.selector||""} | ${M(t?.boundingBox)} |`)})),n.push("","## Screenshot",""),r?.data?n.push(`![Annotated page screenshot](data:${r.mimeType||"image/png"};base64,${r.data})`):n.push("Screenshot unavailable."),n.push("","## Element Inventory","","| ID | Type | Text | Role | Selector |","|---|---|---|---|---|"),l.slice(0,20).forEach(t=>{n.push(`| ${t?.id||""} | ${t?.type||""} | ${t?.text||""} | ${t?.role||""} | ${t?.selector||""} |`)}),n.push("","## M.ai Context","","```json",JSON.stringify(s?.maiContext||{},null,2),"```"),n.join(`
`)}function K(s){const e=new O({orientation:"portrait",unit:"pt",format:"letter"}),i=s?.summary||{},l=P(s,10),r=Array.isArray(s?.inventory)?s.inventory:[],n=s?.screenshot,t=`accessibility-audit-${new URL(s.url).hostname}-${new Date(s.timestamp||Date.now()).toISOString().slice(0,10)}`,d=e.internal.pageSize.getWidth(),c=40,m=d-c*2;let a=48;if(e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Accessibility Audit by M.ai",c,a),a+=18,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`URL: ${s.url}`,c,a),a+=14,e.text(`Timestamp: ${s.timestamp||""}`,c,a),a+=18,n?.data){e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Annotated screenshot",c,a),a+=10;const p=Number(n.width||1),$=Number(n.height||1),b=Math.max(220,Math.round(m*($/p)));e.addImage(`data:${n.mimeType||"image/png"};base64,${n.data}`,"PNG",c,a,m,b);const f=m/p,g=b/$;e.setDrawColor(204,51,51),e.setLineWidth(1),l.forEach(h=>{if(!h?.boundingBox)return;const S=c+h.boundingBox.x*f,w=a+h.boundingBox.y*g,R=h.boundingBox.width*f,F=h.boundingBox.height*g;R>0&&F>0&&(e.rect(S,w,R,F),e.setFillColor(122,74,42),e.circle(S+8,w+8,8,"F"),e.setTextColor(255,255,255),e.setFont("helvetica","bold"),e.setFontSize(8),e.text(String(h.annotationId),S+8,w+10.5,{align:"center"}),e.setTextColor(0,0,0))}),a+=b+18}W(e,{startY:a,margin:{left:c,right:c},head:[["Elements","Findings","Critical","Serious","Moderate","Minor"]],body:[[String(i.totalElements??0),String(i.totalFindings??0),String(i.critical??0),String(i.serious??0),String(i.moderate??0),String(i.minor??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),a=e.lastAutoTable.finalY+18,e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Annotations",c,a),a+=8,l.length===0?(e.setFont("helvetica","normal"),e.setFontSize(10),e.text("No issues found.",c,a+12)):W(e,{startY:a,margin:{left:c,right:c},head:[["Annotation","Severity","Rule","Element","Selector","BBox"]],body:l.map(p=>[String(p.annotationId),String(p?.severity||""),String(p?.rule||""),String(p?.elementId||""),String(p?.selector||""),M(p?.boundingBox)]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:24},1:{cellWidth:52},2:{cellWidth:120},3:{cellWidth:54},4:{cellWidth:170},5:{cellWidth:88}}}),a=e.lastAutoTable?e.lastAutoTable.finalY+18:a+32,e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Element inventory",c,a),a+=8,r.length>0&&W(e,{startY:a,margin:{left:c,right:c},head:[["ID","Type","Text","Role","Selector"]],body:r.slice(0,20).map(p=>[String(p?.id||""),String(p?.type||""),String(p?.text||""),String(p?.role||""),String(p?.selector||"")]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:70},1:{cellWidth:48},2:{cellWidth:150},3:{cellWidth:56},4:{cellWidth:192}}}),a=e.lastAutoTable?e.lastAutoTable.finalY+18:a+32,e.setFont("helvetica","bold"),e.setFontSize(14),e.text("M.ai context",c,a),a+=8,e.setFont("helvetica","normal"),e.setFontSize(9);const y=JSON.stringify(s?.maiContext||{},null,2),A=e.splitTextToSize(y,d-c*2);e.text(A,c,a+12),e.save(`${t}.pdf`)}function Q(s,e){const i=e?.summary||{},l=P(e,10),r=Array.isArray(e?.inventory)?e.inventory:[];let n=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="mb-1 text-xs text-muted">Elements</p>
          <p class="m-0 text-xl font-bold">${o(i.totalElements??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${o(i.totalFindings??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Critical</p>
          <p class="m-0 text-xl font-bold text-red-700">${o(i.critical??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Serious</p>
          <p class="m-0 text-xl font-bold text-orange-600">${o(i.serious??0)}</p>
        </div>
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
          Reference annotations are designed to read like the spec example: a visible marker, a note, and a matching evidence row.
        </div>
      </div>
  `,e?.screenshot?.data){const t=e.screenshot,d=Number(t.width||1),c=Number(t.height||1),m=l.filter(a=>a?.boundingBox).map(a=>{const y=a.boundingBox,A=y.x/d*100,p=y.y/c*100,$=y.width/d*100,b=y.height/c*100;return`
          <div class="absolute border-2 border-red-600/90 bg-red-600/10" title="${o(a.rule||"")}" style="left:${A}%; top:${p}%; width:${$}%; height:${b}%;"></div>
          <div class="absolute z-10" style="left:${A}%; top:${p}%; transform: translate(-50%, -50%);">
            <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${o(a.annotationId)}</div>
          </div>
        `}).join("");n+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${t.mimeType||"image/png"};base64,${t.data}"
            alt="Annotated audit screenshot"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${m}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,l.forEach(a=>{n+=`
        <article id="annotation-${o(a.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-paper">${o(a.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${o((a?.severity||"").toUpperCase())}</p>
              <h4 class="mt-1 font-serif text-base">${o(a?.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Element</dt>
              <dd class="mt-1 text-ink">${o(a?.elementId||"n/a")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${o(a?.whyItMatters||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${o(a?.suggestedFix||"")}</dd>
            </div>
          </dl>
        </article>
      `}),n+=`
          </div>
        </div>
      </div>
    `}else n+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No issues found.</p>';n+=`
      <div class="mt-6 overflow-x-auto">
        <table class="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr class="border-b border-ink/10 text-xs uppercase tracking-widest text-muted">
              <th class="py-2 pr-3 font-semibold">Annotation</th>
              <th class="py-2 pr-3 font-semibold">Severity</th>
              <th class="py-2 pr-3 font-semibold">Rule</th>
              <th class="py-2 pr-3 font-semibold">Element</th>
              <th class="py-2 pr-3 font-semibold">Selector</th>
              <th class="py-2 pr-3 font-semibold">Bounding box</th>
            </tr>
          </thead>
          <tbody>
  `,l.forEach(t=>{const d=t?.elementId||"n/a",c=t?.selector||"n/a";n+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${o(t.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase">${o((t?.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${o(t?.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${o(d)}</td>
        <td class="py-3 pr-3 text-muted">${o(c)}</td>
        <td class="py-3 pr-3 text-muted">${o(M(t?.boundingBox))}</td>
      </tr>
    `}),n+="</tbody></table></div>",l.length>10&&(n+=`<p class="mt-3 text-xs text-muted">... and ${o(l.length-10)} more annotated findings</p>`),n+=`
      <div class="mt-6 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Method</h4>
        <ul class="mt-3 space-y-2 text-sm text-muted">
          <li>Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.</li>
          <li>Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.</li>
          <li>Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.</li>
        </ul>
      </div>
    </section>
  `,n+=`
    <details class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <summary class="cursor-pointer font-serif text-xl">Element inventory</summary>
      <p class="mt-2 text-sm text-muted">A trimmed list of the page structure that the PDF also includes as an appendix.</p>
      <div class="mt-4 overflow-x-auto">
        <table class="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr class="border-b border-ink/10 text-xs uppercase tracking-widest text-muted">
              <th class="py-2 pr-3 font-semibold">ID</th>
              <th class="py-2 pr-3 font-semibold">Type</th>
              <th class="py-2 pr-3 font-semibold">Text</th>
              <th class="py-2 pr-3 font-semibold">Role</th>
              <th class="py-2 pr-3 font-semibold">Selector</th>
            </tr>
          </thead>
          <tbody>
  `,r.slice(0,8).forEach(t=>{n+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${o(t?.id||"")}</td>
        <td class="py-3 pr-3">${o(t?.type||"")}</td>
        <td class="py-3 pr-3 text-muted">${o(t?.text||"")}</td>
        <td class="py-3 pr-3 text-muted">${o(t?.role||"")}</td>
        <td class="py-3 pr-3 text-muted">${o(t?.selector||"")}</td>
      </tr>
    `}),n+="</tbody></table></div>",r.length>8&&(n+=`<p class="mt-3 text-xs text-muted">... and ${o(r.length-8)} more elements</p>`),n+="</details>",n+=`
    <div class="mt-6 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-4">
      ${e._elapsedMs!=null?`<p class="mr-auto m-0 text-xs text-muted tabular-nums">Completed in ${C(e._elapsedMs)}</p>`:""}
      <button type="button" data-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,s.innerHTML=n,z(s,e)}function z(s,e){s.querySelectorAll("[data-export-format]").forEach(i=>{i.addEventListener("click",()=>{const l=i.getAttribute("data-export-format");if(l==="pdf")K(e);else if(l==="md"){const r=X(e),n=`accessibility-audit-${new URL(e.url).hostname}-${new Date(e.timestamp||Date.now()).toISOString().slice(0,10)}`,t=new Blob([r],{type:"text/markdown;charset=utf-8"}),d=document.createElement("a");d.href=URL.createObjectURL(t),d.download=`${n}.md`,document.body.appendChild(d),d.click(),d.remove(),URL.revokeObjectURL(d.href)}})})}function Z(s,e){let i="";if(s?.data){const l=Number(s.width||1),r=Number(s.height||1),n=e.filter(t=>t?.boundingBox).map(t=>{const d=t.boundingBox,c=d.x/l*100,m=d.y/r*100,a=d.width/l*100,y=d.height/r*100;return`
          <div class="absolute border-2 border-red-600/90 bg-red-600/10" title="${o(t.rule||"")}" style="left:${c}%; top:${m}%; width:${a}%; height:${y}%;"></div>
          <div class="absolute z-10" style="left:${c}%; top:${m}%; transform: translate(-50%, -50%);">
            <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${o(t.annotationId)}</div>
          </div>
        `}).join("");i+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${s.mimeType||"image/png"};base64,${s.data}"
            alt="Annotated component screenshot"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${n}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,e.forEach(t=>{i+=`
        <article id="annotation-${o(t.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-paper">${o(t.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${o((t?.severity||"").toUpperCase())}</p>
              <h4 class="mt-1 font-serif text-base">${o(t?.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Element</dt>
              <dd class="mt-1 text-ink">${o(t?.elementId||"n/a")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${o(t?.whyItMatters||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${o(t?.suggestedFix||"")}</dd>
            </div>
          </dl>
        </article>
      `}),i+=`
          </div>
        </div>
      </div>
    `}else e.length===0&&(i+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No issues found in this component.</p>');return e.length>0&&(i+=`
      <div class="mt-6 overflow-x-auto">
        <table class="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr class="border-b border-ink/10 text-xs uppercase tracking-widest text-muted">
              <th class="py-2 pr-3 font-semibold">Annotation</th>
              <th class="py-2 pr-3 font-semibold">Severity</th>
              <th class="py-2 pr-3 font-semibold">Rule</th>
              <th class="py-2 pr-3 font-semibold">Element</th>
              <th class="py-2 pr-3 font-semibold">Selector</th>
              <th class="py-2 pr-3 font-semibold">Bounding box</th>
            </tr>
          </thead>
          <tbody>
    `,e.forEach(l=>{const r=l?.elementId||"n/a",n=l?.selector||"n/a";i+=`
        <tr class="border-b border-ink/5 align-top last:border-b-0">
          <td class="py-3 pr-3 text-muted">${o(l.annotationId)}</td>
          <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase">${o((l?.severity||"").toUpperCase())}</span></td>
          <td class="py-3 pr-3 font-medium">${o(l?.rule||"Finding")}</td>
          <td class="py-3 pr-3 text-muted">${o(r)}</td>
          <td class="py-3 pr-3 text-muted">${o(n)}</td>
          <td class="py-3 pr-3 text-muted">${o(M(l?.boundingBox))}</td>
        </tr>
      `}),i+="</tbody></table></div>"),i}function ee(s){return`${o(s?.critical??0)} critical · ${o(s?.serious??0)} serious · ${o(s?.moderate??0)} moderate · ${o(s?.minor??0)} minor`}function te(s,e,i){const l=e?.scope||{},r=e?.summary||{},n=e?.relatedSummary||{},t=P(e,999),d=Array.isArray(e?.relatedFindings)?e.relatedFindings:[],c=!!l?.matchAll&&(l?.instanceCount??1)>1,m=Array.isArray(l?.selections)?l.selections:[],a=m.length>1,y=a?`${o(m.length)} selected elements`:`${o(l?.type||"component")}: ${o(l?.name||"selected component")}`,A=a?`<ul class="mt-3 mb-0 flex flex-wrap gap-2">${m.map((b,f)=>`<li class="flex items-center gap-1.5 rounded bg-cream px-2 py-1 text-xs text-ink dark:bg-ink/20"><span class="flex h-4 min-w-[1rem] items-center justify-center rounded-sm bg-accent px-1 text-[10px] font-bold text-paper">${f+1}</span>${o(b?.name||b?.type||"element")}</li>`).join("")}</ul>`:"";let p=`
    <div class="mb-4 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <p class="m-0 text-xs font-semibold uppercase tracking-widest text-muted">Scoped audit</p>
      <h3 class="mt-1 mb-0 font-serif text-xl">${y}</h3>
      ${c?`<p class="mt-2 mb-0 text-sm text-muted">Audited all ${o(l.instanceCount)} instances on the page.</p>`:""}
      ${A}
    </div>
  `;if(p+=`
    <div class="mb-6 rounded border border-accent/40 bg-accent/[0.06] p-4">
      <p class="m-0 text-sm text-ink">This audit covers <strong>only the selected ${a?"elements":"component"}</strong>. Run a full page audit for comprehensive results.</p>
      <button type="button" data-audit-full-page class="mt-3 rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Run full page audit
      </button>
    </div>
  `,p+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">${a?"Selection summary":"Component summary"}</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="mb-1 text-xs text-muted">Elements</p>
          <p class="m-0 text-xl font-bold">${o(r.totalElements??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${o(r.totalFindings??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Critical</p>
          <p class="m-0 text-xl font-bold text-red-700">${o(r.critical??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Serious</p>
          <p class="m-0 text-xl font-bold text-orange-600">${o(r.serious??0)}</p>
        </div>
      </div>
    </div>
  `,p+=`
    <section class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Annotations</h3>
      <p class="mt-2 text-sm text-muted">Numbered markers on the cropped component match the cards and the findings table below.</p>
      ${Z(e?.screenshot,t)}
  `,c){const b=new Map;t.forEach(g=>{const h=Number.isInteger(g?.scopeInstanceIndex)?g.scopeInstanceIndex:0;b.has(h)||b.set(h,[]),b.get(h).push(g)});const f=Array.from(b.keys()).sort((g,h)=>g-h).map(g=>{const h=b.get(g),S=h.map(w=>`<li class="py-1">#${o(w.annotationId)} · <span class="font-semibold uppercase">${o((w?.severity||"").toUpperCase())}</span> — ${o(w?.rule||"Finding")}</li>`).join("");return`
          <details class="rounded border border-ink/10 bg-paper p-3 dark:bg-cream/5">
            <summary class="cursor-pointer text-sm font-semibold text-ink">Instance ${o(g+1)} — ${o(h.length)} finding(s)</summary>
            <ul class="mt-2 list-none pl-0 text-sm text-muted">${S}</ul>
          </details>
        `}).join("");p+=`
      <div class="mt-6">
        <h4 class="font-serif text-lg">Per-instance breakdown</h4>
        <p class="mt-1 text-sm text-muted">Each instance is listed separately. Expand to see its findings.</p>
        <div class="mt-3 space-y-2">${f}</div>
      </div>
    `}p+=`
      <div class="mt-6 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Method</h4>
        <ul class="mt-3 space-y-2 text-sm text-muted">
          <li>Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.</li>
          <li>Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.</li>
          <li>Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.</li>
        </ul>
      </div>
    </section>
  `;const $=n.totalFindings??d.length;if($>0){const b=d.slice(0,25).map(f=>`
        <tr class="border-b border-ink/5 align-top last:border-b-0">
          <td class="py-2 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase">${o((f?.severity||"").toUpperCase())}</span></td>
          <td class="py-2 pr-3 font-medium">${o(f?.rule||"Finding")}</td>
          <td class="py-2 pr-3 text-muted">${o(f?.selector||"n/a")}</td>
        </tr>
      `).join("");p+=`
      <details class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <summary class="cursor-pointer font-serif text-xl">We also found ${o($)} finding(s) elsewhere on the page</summary>
        <p class="mt-2 text-sm text-muted">These are outside your selected component: ${ee(n)}. Scope keeps this report focused — run a full page audit to act on them.</p>
        <div class="mt-4 overflow-x-auto">
          <table class="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr class="border-b border-ink/10 text-xs uppercase tracking-widest text-muted">
                <th class="py-2 pr-3 font-semibold">Severity</th>
                <th class="py-2 pr-3 font-semibold">Rule</th>
                <th class="py-2 pr-3 font-semibold">Selector</th>
              </tr>
            </thead>
            <tbody>${b}</tbody>
          </table>
        </div>
        ${d.length>25?`<p class="mt-3 text-xs text-muted">... and ${o(d.length-25)} more outside your scope</p>`:""}
        <button type="button" data-audit-full-page class="mt-4 rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
          Audit the entire page
        </button>
      </details>
    `}else p+='<p class="mb-6 rounded border border-ink/10 bg-paper/80 p-4 text-sm text-muted dark:bg-cream/5">No issues found outside your selection.</p>';p+=`
    <div class="mt-6 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-4">
      ${e._elapsedMs!=null?`<p class="mr-auto m-0 text-xs text-muted tabular-nums">Completed in ${C(e._elapsedMs)}</p>`:""}
      <button type="button" data-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,s.innerHTML=p,s.querySelectorAll("[data-audit-full-page]").forEach(b=>{b.addEventListener("click",()=>i())}),z(s,e)}function se(){const s=document.getElementById("ask-mai"),e=s?.dataset.auditApiUrl||"",i=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),l=window.__AUDIT_API_URL||(i?"http://localhost:3000/api/audit":e||`${window.location.origin}/api/audit`),r=document.getElementById("audit-url"),n=document.getElementById("run-audit-btn"),t=document.getElementById("result-container"),d=document.getElementById("audit-scope-panel"),c=document.getElementById("audit-mode-help"),m=document.getElementById("audit-mode-toggle");if(!s||!r||!n||!t)return;window.location.hash==="#ask-mai"&&requestAnimationFrame(()=>{s.scrollIntoView({block:"start"})});const a=(u,x)=>window.dispatchEvent(new CustomEvent("site:track",{detail:{name:u,params:x}})),y={full:"Scans the whole page and reports every finding.",scoped:"Find a component first, then audit just that piece. We'll still flag anything we notice elsewhere."},A={full:"Start audit",scoped:"Find components"},p=()=>m?.checked?"scoped":"full",$=u=>{c&&(c.textContent=y[u]),n.textContent=A[u]},b=u=>{m&&(m.checked=u==="scoped"),$(u)};m&&m.addEventListener("change",()=>{$(p()),d&&(d.innerHTML=""),t.innerHTML=""}),$(p());let f=!1;r.addEventListener("focus",()=>{f||(f=!0,a("tool_engage",{tool:"accessibility"}))},{once:!1});const g=()=>{const u=r.value.trim();if(!u||typeof navigator<"u"&&!navigator.onLine)return null;try{return new URL(u.startsWith("http")?u:`https://${u}`).href}catch{return null}},h=()=>{const u=r.value.trim();if(!u)return T(t,"Please enter a URL."),null;if(typeof navigator<"u"&&!navigator.onLine)return T(t,"You appear to be offline.","Reconnect to the internet, then run the audit again."),null;try{new URL(u.startsWith("http")?u:"https://"+u)}catch{return T(t,"Please enter a valid URL."),null}return u};async function S(u,x){const v=x.loadingContainer||t,L=n.textContent||"";n.disabled=!0,n.textContent=x.runningLabel;const E=J(v);try{const I=new AbortController,U=window.setTimeout(()=>I.abort(),9e4);let k;try{k=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u),signal:I.signal})}finally{window.clearTimeout(U)}if(!k.ok){let _=null;try{_=await k.json()}catch{_=null}const j=G(_?.error),H=C(E.elapsed());return a("audit_error",{tool:"accessibility",http_status:k.status}),T(v,j,`${_?.hint||V(k.status,j)} (after ${H})`),!1}const B=await k.json();return x.onSuccess(B,E.elapsed()),!0}catch(I){const U=String(I?.message||"").toLowerCase(),k=I?.name==="AbortError"||U.includes("aborted"),B=C(E.elapsed());return a("audit_error",{tool:"accessibility",reason:k?"timeout":"network"}),T(v,k?"This audit took too long to finish.":"Unable to contact the audit service.",k?`The service may be busy right now. Please retry in a minute. (after ${B})`:`Check your connection and retry. If this persists, the API may be temporarily unavailable. (after ${B})`),!1}finally{E.stop(),n.disabled=!1,n.textContent=L}}async function w(u){return d&&(d.innerHTML=""),a("audit_run",{tool:"accessibility",scope:"full"}),S({url:u},{runningLabel:"Running audit...",onSuccess:(x,v)=>{a("audit_complete",{tool:"accessibility",scope:"full",finding_count:x?.summary?.totalFindings??null,elapsed_ms:v}),Q(t,{...x,_elapsedMs:v})}})}async function R(u,x){const v=Array.isArray(x?.selectors)?x.selectors.length:1;return a("audit_run",{tool:"accessibility",scope:"scoped",match_all:!!x?.matchAll,selection_count:v}),S({url:u,mode:"scoped",scope:x,includeRelated:!0},{runningLabel:v>1?`Auditing ${v} elements...`:"Auditing component...",onSuccess:(L,E)=>{a("audit_complete",{tool:"accessibility",scope:"scoped",finding_count:L?.summary?.totalFindings??null,related_count:L?.relatedSummary?.totalFindings??null,elapsed_ms:E}),te(t,{...L,_elapsedMs:E},()=>{b("full"),w(u),s.scrollIntoView({block:"start"})})}})}async function F(u){return a("audit_run",{tool:"accessibility",scope:"inventory"}),t.innerHTML="",S({url:u,mode:"inventory"},{runningLabel:"Finding components...",loadingContainer:d||t,onSuccess:x=>Y(d||t,x,v=>R(u,v))})}n.addEventListener("click",async()=>{const u=h();u&&(p()==="scoped"?await F(u):await w(u))});const D=q({id:"accessibility-audit.run-current",label:()=>p()==="scoped"?"Find auditable components at the entered URL":"Run a full accessibility audit of the entered URL",available:()=>!!g()&&!n.disabled,state:()=>`${p()}:${g()||"missing"}`,run:async()=>{const u=h();return u?(p()==="scoped"?await F(u):await w(u))?{ok:!0}:{ok:!1,error:"execution_error"}:{ok:!1,error:"capability_missing"}}});window.addEventListener("pagehide",D,{once:!0})}se();
