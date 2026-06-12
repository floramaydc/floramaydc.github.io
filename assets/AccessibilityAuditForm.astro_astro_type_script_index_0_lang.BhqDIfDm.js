import{E as V}from"./jspdf.es.min.HRF70t-r.js";import{a as z}from"./jspdf.plugin.autotable.CbV6WxIO.js";function i(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function M(t,e,l){const r=i(e),d=l?i(l):"";t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words">${r}</p>
      ${d?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${d}</p>`:""}
    </div>
  `}function J(t,e){const l=String(e||"").toLowerCase();return t===429?"The service is currently busy. Please retry in about 30-60 seconds.":t===502||t===503||t===504?"The audit service is temporarily unavailable or under maintenance. Please try again shortly.":t===408?"The page took too long to load. Retry once, then test a lighter page to confirm connectivity.":t===422||l.includes("could not reach")||l.includes("could not be resolved")?"Verify that the page is public, not login-gated, and not blocking automated browsers.":"Please try again in a moment. If this keeps happening, the audit service may be temporarily unavailable."}function R(t){const e=Math.floor(t/1e3);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function X(t){const e=["Connecting to M.ai audit service","Loading the page for analysis","Running accessibility checks and collecting evidence","Packaging your report"],l=Date.now();let r=0;const d=()=>{const s=R(Date.now()-l),c=e.map((u,x)=>{const a=x===r;return`<li class="flex items-center gap-2 text-sm ${a?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${a?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${i(u)}</li>`}).join("");t.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <div class="flex items-baseline justify-between gap-2">
          <p class="m-0 text-sm font-semibold text-ink">Running your audit</p>
          <p class="m-0 text-xs tabular-nums text-muted" aria-label="Elapsed time">${s}</p>
        </div>
        <p class="mt-2 mb-0 text-xs text-muted">This can take 10-60 seconds depending on page size and network conditions.</p>
        <ul class="mt-3 space-y-2">${c}</ul>
        <p class="mt-3 mb-0 text-xs text-muted">If this takes unusually long, the service may be busy or in maintenance. We'll show a clear message if that happens.</p>
      </div>
    `};d();const o=window.setInterval(d,1e3);return{elapsed(){return Date.now()-l},stop(){window.clearInterval(o)}}}function G(t){const e=String(t||"").trim();if(!e)return"The audit request failed.";const l=e.replace(/^audit failed:\s*/i,""),d=l.split(/browser logs?:/i)[0].trim()||l,o=d.toLowerCase();return o.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":o.includes("timeout")||o.includes("timed out")?"The audit timed out before the page finished loading.":o.includes("err_name_not_resolved")||o.includes("dns")?"The URL could not be resolved.":o.includes("net::err_")||o.includes("failed to fetch")?"The audit could not reach that URL.":d.length>220?`${d.slice(0,217)}...`:d}const q={critical:0,serious:1,moderate:2,minor:3};function N(t,e=10){return[...Array.isArray(t?.findings)?t.findings:[]].sort((r,d)=>(q[r?.severity]??4)-(q[d?.severity]??4)).slice(0,e).map((r,d)=>({...r,annotationId:d+1}))}function _(t){return t?`${t.x}, ${t.y}, ${t.width} × ${t.height}`:""}function K(t){const e=t?.summary||{},l=N(t,10),r=Array.isArray(t?.inventory)?t.inventory:[],d=t?.screenshot,o=["# Accessibility Audit","",`- URL: ${t?.url||""}`,`- Timestamp: ${t?.timestamp||""}`];if(t?.mode==="scoped"&&t?.scope){const s=Array.isArray(t.scope.selections)?t.scope.selections:[];s.length>1?(o.push(`- Scope: ${s.length} selected elements`),s.forEach((c,u)=>{o.push(`  ${u+1}. ${c?.type||"element"}: ${c?.name||""} (${c?.selector||""})`)}),o.push("- Note: This report covers only the selected elements. Run a full page audit for comprehensive results.")):o.push(`- Scope: ${t.scope.type||"component"}: ${t.scope.name||""}`,`- Scope selector: ${t.scope.selector||""}`,"- Note: This report covers only the scoped component. Run a full page audit for comprehensive results.")}return o.push(`- Elements: ${e.totalElements??0}`,`- Findings: ${e.totalFindings??0}`,`- Critical: ${e.critical??0}`,`- Serious: ${e.serious??0}`,`- Moderate: ${e.moderate??0}`,`- Minor: ${e.minor??0}`,"","## Method","","- Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.","- Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.","- Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.","","## Annotations",""),l.length===0?o.push("No annotated findings to review.",""):l.forEach(s=>{o.push(`### Annotation ${s.annotationId} - ${s?.rule||"Finding"}`,"",`- Severity: ${s?.severity||""}`,`- Element: ${s?.elementId||""}`,`- Selector: ${s?.selector||""}`,`- Bounding box: ${_(s?.boundingBox)}`,`- Why it matters: ${s?.whyItMatters||""}`,`- Suggested fix: ${s?.suggestedFix||""}`,"")}),o.push("## Findings"),l.length===0?o.push("","No issues found."):(o.push("","| Annotation | Severity | Rule | Element | Selector | BBox |","|---|---|---|---|---|---|"),l.forEach(s=>{o.push(`| ${s.annotationId} | ${s?.severity||""} | ${s?.rule||"Finding"} | ${s?.elementId||""} | ${s?.selector||""} | ${_(s?.boundingBox)} |`)})),o.push("","## Screenshot",""),d?.data?o.push(`![Annotated page screenshot](data:${d.mimeType||"image/png"};base64,${d.data})`):o.push("Screenshot unavailable."),o.push("","## Element Inventory","","| ID | Type | Text | Role | Selector |","|---|---|---|---|---|"),r.slice(0,20).forEach(s=>{o.push(`| ${s?.id||""} | ${s?.type||""} | ${s?.text||""} | ${s?.role||""} | ${s?.selector||""} |`)}),o.push("","## M.ai Context","","```json",JSON.stringify(t?.maiContext||{},null,2),"```"),o.join(`
`)}function Q(t){const e=new V({orientation:"portrait",unit:"pt",format:"letter"}),l=t?.summary||{},r=N(t,10),d=Array.isArray(t?.inventory)?t.inventory:[],o=t?.screenshot,s=`accessibility-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`,c=e.internal.pageSize.getWidth(),u=40,x=c-u*2;let a=48;if(e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Accessibility Audit by M.ai",u,a),a+=18,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`URL: ${t.url}`,u,a),a+=14,e.text(`Timestamp: ${t.timestamp||""}`,u,a),a+=18,o?.data){e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Annotated screenshot",u,a),a+=10;const m=Number(o.width||1),v=Number(o.height||1),f=Math.max(220,Math.round(x*(v/m)));e.addImage(`data:${o.mimeType||"image/png"};base64,${o.data}`,"PNG",u,a,x,f);const A=x/m,w=f/v;e.setDrawColor(204,51,51),e.setLineWidth(1),r.forEach(y=>{if(!y?.boundingBox)return;const T=u+y.boundingBox.x*A,I=a+y.boundingBox.y*w,B=y.boundingBox.width*A,b=y.boundingBox.height*w;B>0&&b>0&&(e.rect(T,I,B,b),e.setFillColor(122,74,42),e.circle(T+8,I+8,8,"F"),e.setTextColor(255,255,255),e.setFont("helvetica","bold"),e.setFontSize(8),e.text(String(y.annotationId),T+8,I+10.5,{align:"center"}),e.setTextColor(0,0,0))}),a+=f+18}z(e,{startY:a,margin:{left:u,right:u},head:[["Elements","Findings","Critical","Serious","Moderate","Minor"]],body:[[String(l.totalElements??0),String(l.totalFindings??0),String(l.critical??0),String(l.serious??0),String(l.moderate??0),String(l.minor??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),a=e.lastAutoTable.finalY+18,e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Annotations",u,a),a+=8,r.length===0?(e.setFont("helvetica","normal"),e.setFontSize(10),e.text("No issues found.",u,a+12)):z(e,{startY:a,margin:{left:u,right:u},head:[["Annotation","Severity","Rule","Element","Selector","BBox"]],body:r.map(m=>[String(m.annotationId),String(m?.severity||""),String(m?.rule||""),String(m?.elementId||""),String(m?.selector||""),_(m?.boundingBox)]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:24},1:{cellWidth:52},2:{cellWidth:120},3:{cellWidth:54},4:{cellWidth:170},5:{cellWidth:88}}}),a=e.lastAutoTable?e.lastAutoTable.finalY+18:a+32,e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Element inventory",u,a),a+=8,d.length>0&&z(e,{startY:a,margin:{left:u,right:u},head:[["ID","Type","Text","Role","Selector"]],body:d.slice(0,20).map(m=>[String(m?.id||""),String(m?.type||""),String(m?.text||""),String(m?.role||""),String(m?.selector||"")]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:70},1:{cellWidth:48},2:{cellWidth:150},3:{cellWidth:56},4:{cellWidth:192}}}),a=e.lastAutoTable?e.lastAutoTable.finalY+18:a+32,e.setFont("helvetica","bold"),e.setFontSize(14),e.text("M.ai context",u,a),a+=8,e.setFont("helvetica","normal"),e.setFontSize(9);const S=JSON.stringify(t?.maiContext||{},null,2),L=e.splitTextToSize(S,c-u*2);e.text(L,u,a+12),e.save(`${s}.pdf`)}function Z(t,e){const l=e?.summary||{},r=N(e,10),d=Array.isArray(e?.inventory)?e.inventory:[];let o=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="mb-1 text-xs text-muted">Elements</p>
          <p class="m-0 text-xl font-bold">${i(l.totalElements??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${i(l.totalFindings??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Critical</p>
          <p class="m-0 text-xl font-bold text-red-700">${i(l.critical??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Serious</p>
          <p class="m-0 text-xl font-bold text-orange-600">${i(l.serious??0)}</p>
        </div>
      </div>
    </div>
  `;if(o+=`
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
  `,e?.screenshot?.data){const s=e.screenshot,c=Number(s.width||1),u=Number(s.height||1),x=r.filter(a=>a?.boundingBox).map(a=>{const S=a.boundingBox,L=S.x/c*100,m=S.y/u*100,v=S.width/c*100,f=S.height/u*100;return`
          <div class="absolute border-2 border-red-600/90 bg-red-600/10" title="${i(a.rule||"")}" style="left:${L}%; top:${m}%; width:${v}%; height:${f}%;"></div>
          <div class="absolute z-10" style="left:${L}%; top:${m}%; transform: translate(-50%, -50%);">
            <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${i(a.annotationId)}</div>
          </div>
        `}).join("");o+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${s.mimeType||"image/png"};base64,${s.data}"
            alt="Annotated audit screenshot"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${x}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,r.forEach(a=>{o+=`
        <article id="annotation-${i(a.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-paper">${i(a.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${i((a?.severity||"").toUpperCase())}</p>
              <h4 class="mt-1 font-serif text-base">${i(a?.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Element</dt>
              <dd class="mt-1 text-ink">${i(a?.elementId||"n/a")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${i(a?.whyItMatters||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${i(a?.suggestedFix||"")}</dd>
            </div>
          </dl>
        </article>
      `}),o+=`
          </div>
        </div>
      </div>
    `}else o+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No issues found.</p>';o+=`
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
  `,r.forEach(s=>{const c=s?.elementId||"n/a",u=s?.selector||"n/a";o+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${i(s.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase">${i((s?.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${i(s?.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${i(c)}</td>
        <td class="py-3 pr-3 text-muted">${i(u)}</td>
        <td class="py-3 pr-3 text-muted">${i(_(s?.boundingBox))}</td>
      </tr>
    `}),o+="</tbody></table></div>",r.length>10&&(o+=`<p class="mt-3 text-xs text-muted">... and ${i(r.length-10)} more annotated findings</p>`),o+=`
      <div class="mt-6 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Method</h4>
        <ul class="mt-3 space-y-2 text-sm text-muted">
          <li>Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.</li>
          <li>Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.</li>
          <li>Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.</li>
        </ul>
      </div>
    </section>
  `,o+=`
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
  `,d.slice(0,8).forEach(s=>{o+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${i(s?.id||"")}</td>
        <td class="py-3 pr-3">${i(s?.type||"")}</td>
        <td class="py-3 pr-3 text-muted">${i(s?.text||"")}</td>
        <td class="py-3 pr-3 text-muted">${i(s?.role||"")}</td>
        <td class="py-3 pr-3 text-muted">${i(s?.selector||"")}</td>
      </tr>
    `}),o+="</tbody></table></div>",d.length>8&&(o+=`<p class="mt-3 text-xs text-muted">... and ${i(d.length-8)} more elements</p>`),o+="</details>",o+=`
    <div class="mt-6 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-4">
      ${e._elapsedMs!=null?`<p class="mr-auto m-0 text-xs text-muted tabular-nums">Completed in ${R(e._elapsedMs)}</p>`:""}
      <button type="button" data-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,t.innerHTML=o,O(t,e)}function O(t,e){t.querySelectorAll("[data-export-format]").forEach(l=>{l.addEventListener("click",()=>{const r=l.getAttribute("data-export-format");if(r==="pdf")Q(e);else if(r==="md"){const d=K(e),o=`accessibility-audit-${new URL(e.url).hostname}-${new Date(e.timestamp||Date.now()).toISOString().slice(0,10)}`,s=new Blob([d],{type:"text/markdown;charset=utf-8"}),c=document.createElement("a");c.href=URL.createObjectURL(s),c.download=`${o}.md`,document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(c.href)}})})}function ee(t,e){let l="";if(t?.data){const r=Number(t.width||1),d=Number(t.height||1),o=e.filter(s=>s?.boundingBox).map(s=>{const c=s.boundingBox,u=c.x/r*100,x=c.y/d*100,a=c.width/r*100,S=c.height/d*100;return`
          <div class="absolute border-2 border-red-600/90 bg-red-600/10" title="${i(s.rule||"")}" style="left:${u}%; top:${x}%; width:${a}%; height:${S}%;"></div>
          <div class="absolute z-10" style="left:${u}%; top:${x}%; transform: translate(-50%, -50%);">
            <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${i(s.annotationId)}</div>
          </div>
        `}).join("");l+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${t.mimeType||"image/png"};base64,${t.data}"
            alt="Annotated component screenshot"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${o}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,e.forEach(s=>{l+=`
        <article id="annotation-${i(s.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-paper">${i(s.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${i((s?.severity||"").toUpperCase())}</p>
              <h4 class="mt-1 font-serif text-base">${i(s?.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Element</dt>
              <dd class="mt-1 text-ink">${i(s?.elementId||"n/a")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${i(s?.whyItMatters||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${i(s?.suggestedFix||"")}</dd>
            </div>
          </dl>
        </article>
      `}),l+=`
          </div>
        </div>
      </div>
    `}else e.length===0&&(l+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No issues found in this component.</p>');return e.length>0&&(l+=`
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
    `,e.forEach(r=>{const d=r?.elementId||"n/a",o=r?.selector||"n/a";l+=`
        <tr class="border-b border-ink/5 align-top last:border-b-0">
          <td class="py-3 pr-3 text-muted">${i(r.annotationId)}</td>
          <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase">${i((r?.severity||"").toUpperCase())}</span></td>
          <td class="py-3 pr-3 font-medium">${i(r?.rule||"Finding")}</td>
          <td class="py-3 pr-3 text-muted">${i(d)}</td>
          <td class="py-3 pr-3 text-muted">${i(o)}</td>
          <td class="py-3 pr-3 text-muted">${i(_(r?.boundingBox))}</td>
        </tr>
      `}),l+="</tbody></table></div>"),l}function te(t){return`${i(t?.critical??0)} critical · ${i(t?.serious??0)} serious · ${i(t?.moderate??0)} moderate · ${i(t?.minor??0)} minor`}function se(t,e,l){const d=(Array.isArray(e?.targets)&&e.targets.length?e.targets:Array.isArray(e?.components)?e.components.map(n=>({selector:n.selector,label:n.label,type:n.type,boundingBox:n.boundingBox,area:(n?.boundingBox?.width||0)*(n?.boundingBox?.height||0)})):[]).filter(n=>n&&typeof n.selector=="string"&&n.selector.trim());if(d.length===0){t.innerHTML=`
      <div class="rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl">No distinct components detected</h3>
        <p class="mt-2 mb-0 text-sm text-muted">We couldn't pick out separate elements on this page. Switch to a quick scan to audit the whole page instead.</p>
      </div>
    `;return}const o=e?.screenshot,s=Number(o?.width||1),c=Number(o?.height||1),u=!!o?.data,x=d.map((n,p)=>({...n,_i:p})),a=new Map,S=(n,p)=>n/(p||1)*100;t.innerHTML=`
    <div class="rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Inspect and pick</h3>
      <p class="mt-2 text-sm text-muted">${u?"Hover the screenshot to highlight an element, then click to add it. Pick as many as you want, then audit them together.":"Choose the elements you want to scope to from the list below."} We&rsquo;ll still flag anything we notice elsewhere on the page.</p>

      ${u?`
      <div data-inspect-canvas class="relative mt-4 overflow-hidden rounded border border-ink/10 bg-paper">
        <img
          src="data:${o.mimeType||"image/png"};base64,${o.data}"
          alt="Screenshot of the page. Use the list below to choose elements to audit."
          class="block h-auto w-full select-none"
          draggable="false"
        />
        <div data-selection-layer class="pointer-events-none absolute inset-0"></div>
        <div data-inspect-overlay class="absolute inset-0 cursor-crosshair" role="presentation">
          <div data-hover-box class="pointer-events-none absolute hidden border-2 border-accent bg-accent/15">
            <span data-hover-label class="absolute left-0 top-full mt-1 hidden max-w-[18rem] truncate whitespace-nowrap rounded bg-ink px-2 py-1 text-xs font-semibold text-paper shadow-lg"></span>
          </div>
        </div>
      </div>
      `:""}

      <div class="mt-4 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-4">
        <p data-selection-count class="m-0 mr-auto text-sm text-muted" aria-live="polite">No elements selected yet.</p>
        <button type="button" data-clear-selection hidden class="rounded border border-ink/20 px-3 py-1.5 text-xs font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Clear</button>
        <button type="button" data-audit-selected disabled class="rounded bg-accent px-4 py-2 text-sm font-semibold text-paper transition-opacity disabled:cursor-not-allowed disabled:opacity-40 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream">Audit selection</button>
      </div>

      <div class="mt-4">
        <p class="m-0 text-xs font-semibold uppercase tracking-widest text-muted">Elements on this page</p>
        <ul data-target-list class="mt-2 max-h-64 space-y-1 overflow-y-auto pr-1">
          ${x.map(n=>`
            <li>
              <button
                type="button"
                data-target="${n._i}"
                aria-pressed="false"
                class="group flex w-full min-w-0 items-center gap-2 rounded border border-ink/10 bg-paper p-2 text-left transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:bg-cream/5"
              >
                <span data-check class="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-ink/30 text-[11px] font-bold text-paper">&nbsp;</span>
                <span class="inline-block shrink-0 rounded bg-cream px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-ink dark:bg-ink/20">${i(n.type||"element")}</span>
                <span class="min-w-0 flex-1 truncate text-sm font-semibold text-ink" title="${i(n.label||"")}">${i(n.label||"Element")}</span>
              </button>
            </li>`).join("")}
        </ul>
      </div>
    </div>
  `;const L=t.querySelector("[data-inspect-overlay]"),m=t.querySelector("[data-hover-box]"),v=t.querySelector("[data-hover-label]"),f=t.querySelector("[data-selection-layer]"),A=t.querySelector("[data-selection-count]"),w=t.querySelector("[data-audit-selected]"),y=t.querySelector("[data-clear-selection]"),T=Array.from(t.querySelectorAll("[data-target]")),I=(n,p)=>{let g=null;for(const h of x){const k=h.boundingBox;if(!k)continue;const C=k.x/s,W=k.y/c,U=(k.x+k.width)/s,Y=(k.y+k.height)/c;if(n<C||n>U||p<W||p>Y)continue;if(!g){g=h;continue}const H=h.zIndex??0,P=g.zIndex??0;if(H!==P){H>P&&(g=h);continue}const j=h.area??k.width*k.height,D=g.area??1/0;(j<D||j===D&&(h.domOrder??0)>(g.domOrder??0))&&(g=h)}return g},B=n=>`left:${S(n.x,s)}%; top:${S(n.y,c)}%; width:${S(n.width,s)}%; height:${S(n.height,c)}%;`,b=()=>{if(!f)return;const n=Array.from(a.values()).filter(p=>p.boundingBox).map((p,g)=>`
        <div class="absolute border-2 border-accent bg-accent/20" style="${B(p.boundingBox)}">
          <span class="absolute left-0 top-0 flex h-5 min-w-[1.25rem] items-center justify-center rounded-br-sm rounded-tl-sm bg-accent px-1 text-[10px] font-bold text-paper">${g+1}</span>
        </div>`).join("");f.innerHTML=n},$=()=>{const n=a.size;A&&(A.textContent=n===0?"No elements selected yet.":`${n} element${n===1?"":"s"} selected.`),w&&(w.disabled=n===0,w.textContent=n<=1?"Audit selection":`Audit ${n} elements`),y&&(y.hidden=n===0)},E=n=>{const p=T[n._i];if(!p)return;const g=a.has(n.selector);p.setAttribute("aria-pressed",g?"true":"false"),p.classList.toggle("border-accent",g),p.classList.toggle("bg-accent/10",g);const h=p.querySelector("[data-check]");h&&(h.classList.toggle("border-accent",g),h.classList.toggle("bg-accent",g),h.classList.toggle("border-ink/30",!g),h.innerHTML=g?"&check;":"&nbsp;")},F=n=>{n&&(a.has(n.selector)?a.delete(n.selector):a.set(n.selector,n),E(n),b(),$())};if(L&&m){let n=null;const p=g=>{const h=L.getBoundingClientRect();return{fx:(g.clientX-h.left)/(h.width||1),fy:(g.clientY-h.top)/(h.height||1)}};L.addEventListener("mousemove",g=>{const{fx:h,fy:k}=p(g);n=I(h,k),n?.boundingBox?(m.style.cssText=B(n.boundingBox),m.classList.remove("hidden"),v&&(v.textContent=`${n.type||"element"}: ${n.label||"element"}`,v.classList.remove("hidden"))):(m.classList.add("hidden"),v&&v.classList.add("hidden"))}),L.addEventListener("mouseleave",()=>{n=null,m.classList.add("hidden"),v&&v.classList.add("hidden")}),L.addEventListener("click",g=>{const{fx:h,fy:k}=p(g);F(I(h,k))})}T.forEach(n=>{n.addEventListener("click",()=>{const p=Number(n.getAttribute("data-target"));F(x[p])})}),y?.addEventListener("click",()=>{a.clear(),T.forEach(n=>{n.setAttribute("aria-pressed","false"),n.classList.remove("border-accent","bg-accent/10");const p=n.querySelector("[data-check]");p&&(p.classList.remove("border-accent","bg-accent"),p.classList.add("border-ink/30"),p.innerHTML="&nbsp;")}),b(),$()}),w?.addEventListener("click",()=>{if(a.size===0)return;const n=Array.from(a.values()).map(p=>({selector:p.selector,name:p.label||p.type||"element",type:p.type||"element"}));l({selectors:n.map(p=>p.selector),selections:n,name:n.length===1?n[0].name:`${n.length} elements`,type:n.length===1?n[0].type:"selection",matchAll:!1})}),$()}function ne(t,e,l){const r=e?.scope||{},d=e?.summary||{},o=e?.relatedSummary||{},s=N(e,999),c=Array.isArray(e?.relatedFindings)?e.relatedFindings:[],u=!!r?.matchAll&&(r?.instanceCount??1)>1,x=Array.isArray(r?.selections)?r.selections:[],a=x.length>1,S=a?`${i(x.length)} selected elements`:`${i(r?.type||"component")}: ${i(r?.name||"selected component")}`,L=a?`<ul class="mt-3 mb-0 flex flex-wrap gap-2">${x.map((f,A)=>`<li class="flex items-center gap-1.5 rounded bg-cream px-2 py-1 text-xs text-ink dark:bg-ink/20"><span class="flex h-4 min-w-[1rem] items-center justify-center rounded-sm bg-accent px-1 text-[10px] font-bold text-paper">${A+1}</span>${i(f?.name||f?.type||"element")}</li>`).join("")}</ul>`:"";let m=`
    <div class="mb-4 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <p class="m-0 text-xs font-semibold uppercase tracking-widest text-muted">Scoped audit</p>
      <h3 class="mt-1 mb-0 font-serif text-xl">${S}</h3>
      ${u?`<p class="mt-2 mb-0 text-sm text-muted">Audited all ${i(r.instanceCount)} instances on the page.</p>`:""}
      ${L}
    </div>
  `;if(m+=`
    <div class="mb-6 rounded border border-accent/40 bg-accent/[0.06] p-4">
      <p class="m-0 text-sm text-ink">This audit covers <strong>only the selected ${a?"elements":"component"}</strong>. Run a full page audit for comprehensive results.</p>
      <button type="button" data-audit-full-page class="mt-3 rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Run full page audit
      </button>
    </div>
  `,m+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">${a?"Selection summary":"Component summary"}</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="mb-1 text-xs text-muted">Elements</p>
          <p class="m-0 text-xl font-bold">${i(d.totalElements??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${i(d.totalFindings??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Critical</p>
          <p class="m-0 text-xl font-bold text-red-700">${i(d.critical??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Serious</p>
          <p class="m-0 text-xl font-bold text-orange-600">${i(d.serious??0)}</p>
        </div>
      </div>
    </div>
  `,m+=`
    <section class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Annotations</h3>
      <p class="mt-2 text-sm text-muted">Numbered markers on the cropped component match the cards and the findings table below.</p>
      ${ee(e?.screenshot,s)}
  `,u){const f=new Map;s.forEach(w=>{const y=Number.isInteger(w?.scopeInstanceIndex)?w.scopeInstanceIndex:0;f.has(y)||f.set(y,[]),f.get(y).push(w)});const A=Array.from(f.keys()).sort((w,y)=>w-y).map(w=>{const y=f.get(w),T=y.map(I=>`<li class="py-1">#${i(I.annotationId)} · <span class="font-semibold uppercase">${i((I?.severity||"").toUpperCase())}</span> — ${i(I?.rule||"Finding")}</li>`).join("");return`
          <details class="rounded border border-ink/10 bg-paper p-3 dark:bg-cream/5">
            <summary class="cursor-pointer text-sm font-semibold text-ink">Instance ${i(w+1)} — ${i(y.length)} finding(s)</summary>
            <ul class="mt-2 list-none pl-0 text-sm text-muted">${T}</ul>
          </details>
        `}).join("");m+=`
      <div class="mt-6">
        <h4 class="font-serif text-lg">Per-instance breakdown</h4>
        <p class="mt-1 text-sm text-muted">Each instance is listed separately. Expand to see its findings.</p>
        <div class="mt-3 space-y-2">${A}</div>
      </div>
    `}m+=`
      <div class="mt-6 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Method</h4>
        <ul class="mt-3 space-y-2 text-sm text-muted">
          <li>Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.</li>
          <li>Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.</li>
          <li>Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.</li>
        </ul>
      </div>
    </section>
  `;const v=o.totalFindings??c.length;if(v>0){const f=c.slice(0,25).map(A=>`
        <tr class="border-b border-ink/5 align-top last:border-b-0">
          <td class="py-2 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase">${i((A?.severity||"").toUpperCase())}</span></td>
          <td class="py-2 pr-3 font-medium">${i(A?.rule||"Finding")}</td>
          <td class="py-2 pr-3 text-muted">${i(A?.selector||"n/a")}</td>
        </tr>
      `).join("");m+=`
      <details class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <summary class="cursor-pointer font-serif text-xl">We also found ${i(v)} finding(s) elsewhere on the page</summary>
        <p class="mt-2 text-sm text-muted">These are outside your selected component: ${te(o)}. Scope keeps this report focused — run a full page audit to act on them.</p>
        <div class="mt-4 overflow-x-auto">
          <table class="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr class="border-b border-ink/10 text-xs uppercase tracking-widest text-muted">
                <th class="py-2 pr-3 font-semibold">Severity</th>
                <th class="py-2 pr-3 font-semibold">Rule</th>
                <th class="py-2 pr-3 font-semibold">Selector</th>
              </tr>
            </thead>
            <tbody>${f}</tbody>
          </table>
        </div>
        ${c.length>25?`<p class="mt-3 text-xs text-muted">... and ${i(c.length-25)} more outside your scope</p>`:""}
        <button type="button" data-audit-full-page class="mt-4 rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
          Audit the entire page
        </button>
      </details>
    `}else m+='<p class="mb-6 rounded border border-ink/10 bg-paper/80 p-4 text-sm text-muted dark:bg-cream/5">No issues found outside your selection.</p>';m+=`
    <div class="mt-6 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-4">
      ${e._elapsedMs!=null?`<p class="mr-auto m-0 text-xs text-muted tabular-nums">Completed in ${R(e._elapsedMs)}</p>`:""}
      <button type="button" data-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,t.innerHTML=m,t.querySelectorAll("[data-audit-full-page]").forEach(f=>{f.addEventListener("click",()=>l())}),O(t,e)}function oe(){const t=document.getElementById("ask-mai"),e=t?.dataset.auditApiUrl||"",l=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),r=window.__AUDIT_API_URL||(l?"http://localhost:3000/api/audit":e||`${window.location.origin}/api/audit`),d=document.getElementById("audit-url"),o=document.getElementById("run-audit-btn"),s=document.getElementById("result-container"),c=document.getElementById("audit-scope-panel"),u=document.getElementById("audit-mode-help"),x=document.getElementById("audit-mode-toggle");if(!t||!d||!o||!s)return;window.location.hash==="#ask-mai"&&requestAnimationFrame(()=>{t.scrollIntoView({block:"start"})});const a=(b,$)=>window.dispatchEvent(new CustomEvent("site:track",{detail:{name:b,params:$}})),S={full:"Scans the whole page and reports every finding.",scoped:"Find a component first, then audit just that piece. We'll still flag anything we notice elsewhere."},L={full:"Start audit",scoped:"Find components"},m=()=>x?.checked?"scoped":"full",v=b=>{u&&(u.textContent=S[b]),o.textContent=L[b]},f=b=>{x&&(x.checked=b==="scoped"),v(b)};x&&x.addEventListener("change",()=>{v(m()),c&&(c.innerHTML=""),s.innerHTML=""}),v(m());let A=!1;d.addEventListener("focus",()=>{A||(A=!0,a("tool_engage",{tool:"accessibility"}))},{once:!1});const w=()=>{const b=d.value.trim();if(!b)return M(s,"Please enter a URL."),null;if(typeof navigator<"u"&&!navigator.onLine)return M(s,"You appear to be offline.","Reconnect to the internet, then run the audit again."),null;try{new URL(b.startsWith("http")?b:"https://"+b)}catch{return M(s,"Please enter a valid URL."),null}return b};async function y(b,$){const E=$.loadingContainer||s,F=o.textContent||"";o.disabled=!0,o.textContent=$.runningLabel;const n=X(E);try{const p=new AbortController,g=window.setTimeout(()=>p.abort(),9e4);let h;try{h=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b),signal:p.signal})}finally{window.clearTimeout(g)}if(!h.ok){let C=null;try{C=await h.json()}catch{C=null}const W=G(C?.error),U=R(n.elapsed());a("audit_error",{tool:"accessibility",http_status:h.status}),M(E,W,`${C?.hint||J(h.status,W)} (after ${U})`);return}const k=await h.json();$.onSuccess(k,n.elapsed())}catch(p){const g=String(p?.message||"").toLowerCase(),h=p?.name==="AbortError"||g.includes("aborted"),k=R(n.elapsed());a("audit_error",{tool:"accessibility",reason:h?"timeout":"network"}),M(E,h?"This audit took too long to finish.":"Unable to contact the audit service.",h?`The service may be busy right now. Please retry in a minute. (after ${k})`:`Check your connection and retry. If this persists, the API may be temporarily unavailable. (after ${k})`)}finally{n.stop(),o.disabled=!1,o.textContent=F}}async function T(b){c&&(c.innerHTML=""),a("audit_run",{tool:"accessibility",scope:"full"}),await y({url:b},{runningLabel:"Running audit...",onSuccess:($,E)=>{a("audit_complete",{tool:"accessibility",scope:"full",finding_count:$?.summary?.totalFindings??null,elapsed_ms:E}),Z(s,{...$,_elapsedMs:E})}})}async function I(b,$){const E=Array.isArray($?.selectors)?$.selectors.length:1;a("audit_run",{tool:"accessibility",scope:"scoped",match_all:!!$?.matchAll,selection_count:E}),await y({url:b,mode:"scoped",scope:$,includeRelated:!0},{runningLabel:E>1?`Auditing ${E} elements...`:"Auditing component...",onSuccess:(F,n)=>{a("audit_complete",{tool:"accessibility",scope:"scoped",finding_count:F?.summary?.totalFindings??null,related_count:F?.relatedSummary?.totalFindings??null,elapsed_ms:n}),ne(s,{...F,_elapsedMs:n},()=>{f("full"),T(b),t.scrollIntoView({block:"start"})})}})}async function B(b){a("audit_run",{tool:"accessibility",scope:"inventory"}),s.innerHTML="",await y({url:b,mode:"inventory"},{runningLabel:"Finding components...",loadingContainer:c||s,onSuccess:$=>se(c||s,$,E=>I(b,E))})}o.addEventListener("click",async()=>{const b=w();b&&(m()==="scoped"?await B(b):await T(b))})}oe();
