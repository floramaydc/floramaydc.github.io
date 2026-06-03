import{E as I,a as $}from"./jspdf.plugin.autotable.BNWpDLH5.js";import"./preload-helper.BlTxHScW.js";function i(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function g(n,t,l){const d=i(t),r=l?i(l):"";n.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900">
      <p class="m-0 text-sm font-semibold break-words">${d}</p>
      ${r?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${r}</p>`:""}
    </div>
  `}function E(n){const t=String(n||"").trim();if(!t)return"The audit request failed.";const l=t.replace(/^audit failed:\s*/i,""),r=l.split(/browser logs?:/i)[0].trim()||l,e=r.toLowerCase();return e.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":e.includes("timeout")||e.includes("timed out")?"The audit timed out before the page finished loading.":e.includes("err_name_not_resolved")||e.includes("dns")?"The URL could not be resolved.":e.includes("net::err_")||e.includes("failed to fetch")?"The audit could not reach that URL.":r.length>220?`${r.slice(0,217)}...`:r}function S(n,t=10){return(Array.isArray(n?.findings)?n.findings:[]).slice(0,t).map((d,r)=>({...d,annotationId:r+1}))}function f(n){return n?`${n.x}, ${n.y}, ${n.width} × ${n.height}`:""}function L(n){const t=n?.summary||{},l=S(n,10),d=Array.isArray(n?.inventory)?n.inventory:[],r=n?.screenshot,e=["# Accessibility Audit","",`- URL: ${n?.url||""}`,`- Timestamp: ${n?.timestamp||""}`,`- Elements: ${t.totalElements??0}`,`- Findings: ${t.totalFindings??0}`,`- Critical: ${t.critical??0}`,`- Serious: ${t.serious??0}`,`- Moderate: ${t.moderate??0}`,`- Minor: ${t.minor??0}`,"","## Method","","- Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.","- Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.","- Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.","","## Annotations",""];return l.length===0?e.push("No annotated findings to review.",""):l.forEach(s=>{e.push(`### Annotation ${s.annotationId} - ${s?.rule||"Finding"}`,"",`- Severity: ${s?.severity||""}`,`- Element: ${s?.elementId||""}`,`- Selector: ${s?.selector||""}`,`- Bounding box: ${f(s?.boundingBox)}`,`- Why it matters: ${s?.whyItMatters||""}`,`- Suggested fix: ${s?.suggestedFix||""}`,"")}),e.push("## Findings"),l.length===0?e.push("","No issues found."):(e.push("","| Annotation | Severity | Rule | Element | Selector | BBox |","|---|---|---|---|---|---|"),l.forEach(s=>{e.push(`| ${s.annotationId} | ${s?.severity||""} | ${s?.rule||"Finding"} | ${s?.elementId||""} | ${s?.selector||""} | ${f(s?.boundingBox)} |`)})),e.push("","## Screenshot",""),r?.data?e.push(`![Annotated page screenshot](data:${r.mimeType||"image/png"};base64,${r.data})`):e.push("Screenshot unavailable."),e.push("","## Element Inventory","","| ID | Type | Text | Role | Selector |","|---|---|---|---|---|"),d.slice(0,20).forEach(s=>{e.push(`| ${s?.id||""} | ${s?.type||""} | ${s?.text||""} | ${s?.role||""} | ${s?.selector||""} |`)}),e.push("","## M.ai Context","","```json",JSON.stringify(n?.maiContext||{},null,2),"```"),e.join(`
`)}function B(n){const t=new I({orientation:"portrait",unit:"pt",format:"letter"}),l=n?.summary||{},d=S(n,10),r=Array.isArray(n?.inventory)?n.inventory:[],e=n?.screenshot,s=`accessibility-audit-${new URL(n.url).hostname}-${new Date(n.timestamp||Date.now()).toISOString().slice(0,10)}`,u=t.internal.pageSize.getWidth(),a=40,p=u-a*2;let o=48;if(t.setFont("helvetica","bold"),t.setFontSize(18),t.text("Accessibility Audit by M.ai",a,o),o+=18,t.setFont("helvetica","normal"),t.setFontSize(10),t.text(`URL: ${n.url}`,a,o),o+=14,t.text(`Timestamp: ${n.timestamp||""}`,a,o),o+=18,e?.data){t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Annotated screenshot",a,o),o+=10;const c=Number(e.width||1),y=Number(e.height||1),b=Math.max(220,Math.round(p*(y/c)));t.addImage(`data:${e.mimeType||"image/png"};base64,${e.data}`,"PNG",a,o,p,b);const k=p/c,A=b/y;t.setDrawColor(204,51,51),t.setLineWidth(1),d.forEach(h=>{if(!h?.boundingBox)return;const v=a+h.boundingBox.x*k,w=o+h.boundingBox.y*A,F=h.boundingBox.width*k,T=h.boundingBox.height*A;F>0&&T>0&&(t.rect(v,w,F,T),t.setFillColor(122,74,42),t.circle(v+8,w+8,8,"F"),t.setTextColor(255,255,255),t.setFont("helvetica","bold"),t.setFontSize(8),t.text(String(h.annotationId),v+8,w+10.5,{align:"center"}),t.setTextColor(0,0,0))}),o+=b+18}$(t,{startY:o,margin:{left:a,right:a},head:[["Elements","Findings","Critical","Serious","Moderate","Minor"]],body:[[String(l.totalElements??0),String(l.totalFindings??0),String(l.critical??0),String(l.serious??0),String(l.moderate??0),String(l.minor??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),o=t.lastAutoTable.finalY+18,t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Annotations",a,o),o+=8,d.length===0?(t.setFont("helvetica","normal"),t.setFontSize(10),t.text("No issues found.",a,o+12)):$(t,{startY:o,margin:{left:a,right:a},head:[["Annotation","Severity","Rule","Element","Selector","BBox"]],body:d.map(c=>[String(c.annotationId),String(c?.severity||""),String(c?.rule||""),String(c?.elementId||""),String(c?.selector||""),f(c?.boundingBox)]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:24},1:{cellWidth:52},2:{cellWidth:120},3:{cellWidth:54},4:{cellWidth:170},5:{cellWidth:88}}}),o=t.lastAutoTable?t.lastAutoTable.finalY+18:o+32,t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Element inventory",a,o),o+=8,r.length>0&&$(t,{startY:o,margin:{left:a,right:a},head:[["ID","Type","Text","Role","Selector"]],body:r.slice(0,20).map(c=>[String(c?.id||""),String(c?.type||""),String(c?.text||""),String(c?.role||""),String(c?.selector||"")]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:70},1:{cellWidth:48},2:{cellWidth:150},3:{cellWidth:56},4:{cellWidth:192}}}),o=t.lastAutoTable?t.lastAutoTable.finalY+18:o+32,t.setFont("helvetica","bold"),t.setFontSize(14),t.text("M.ai context",a,o),o+=8,t.setFont("helvetica","normal"),t.setFontSize(9);const m=JSON.stringify(n?.maiContext||{},null,2),x=t.splitTextToSize(m,u-a*2);t.text(x,a,o+12),t.save(`${s}.pdf`)}function R(n,t){const l=t?.summary||{},d=S(t,10),r=Array.isArray(t?.inventory)?t.inventory:[];let e=`
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
  `;if(e+=`
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
  `,t?.screenshot?.data){const s=t.screenshot,u=Number(s.width||1),a=Number(s.height||1),p=d.filter(o=>o?.boundingBox).map(o=>{const m=o.boundingBox,x=m.x/u*100,c=m.y/a*100,y=m.width/u*100,b=m.height/a*100;return`
          <div class="absolute border-2 border-red-600/90 bg-red-600/10" title="${i(o.rule||"")}" style="left:${x}%; top:${c}%; width:${y}%; height:${b}%;"></div>
          <div class="absolute z-10" style="left:${x}%; top:${c}%; transform: translate(-50%, -50%);">
            <div class="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-accent text-xs font-bold text-white shadow-lg shadow-black/20">${i(o.annotationId)}</div>
          </div>
        `}).join("");e+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${s.mimeType||"image/png"};base64,${s.data}"
            alt="Annotated audit screenshot"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${p}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,d.forEach(o=>{e+=`
        <article id="annotation-${i(o.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">${i(o.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${i((o?.severity||"").toUpperCase())}</p>
              <h4 class="mt-1 font-serif text-base">${i(o?.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Element</dt>
              <dd class="mt-1 text-ink">${i(o?.elementId||"n/a")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${i(o?.whyItMatters||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${i(o?.suggestedFix||"")}</dd>
            </div>
          </dl>
        </article>
      `}),e+=`
          </div>
        </div>
      </div>
    `}else e+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No issues found.</p>';e+=`
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
  `,d.forEach(s=>{const u=s?.elementId||"n/a",a=s?.selector||"n/a";e+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${i(s.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase">${i((s?.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${i(s?.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${i(u)}</td>
        <td class="py-3 pr-3 text-muted">${i(a)}</td>
        <td class="py-3 pr-3 text-muted">${i(f(s?.boundingBox))}</td>
      </tr>
    `}),e+="</tbody></table></div>",d.length>10&&(e+=`<p class="mt-3 text-xs text-muted">... and ${i(d.length-10)} more annotated findings</p>`),e+=`
      <div class="mt-6 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Method</h4>
        <ul class="mt-3 space-y-2 text-sm text-muted">
          <li>Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.</li>
          <li>Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.</li>
          <li>Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.</li>
        </ul>
      </div>
    </section>
  `,e+=`
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
  `,r.slice(0,8).forEach(s=>{e+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${i(s?.id||"")}</td>
        <td class="py-3 pr-3">${i(s?.type||"")}</td>
        <td class="py-3 pr-3 text-muted">${i(s?.text||"")}</td>
        <td class="py-3 pr-3 text-muted">${i(s?.role||"")}</td>
        <td class="py-3 pr-3 text-muted">${i(s?.selector||"")}</td>
      </tr>
    `}),e+="</tbody></table></div>",r.length>8&&(e+=`<p class="mt-3 text-xs text-muted">... and ${i(r.length-8)} more elements</p>`),e+="</details>",e+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,n.innerHTML=e,n.querySelectorAll("[data-export-format]").forEach(s=>{s.addEventListener("click",()=>{const u=s.getAttribute("data-export-format");if(u==="pdf")B(t);else if(u==="md"){const a=L(t),p=`accessibility-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`,o=new Blob([a],{type:"text/markdown;charset=utf-8"}),m=document.createElement("a");m.href=URL.createObjectURL(o),m.download=`${p}.md`,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL(m.href)}})})}function U(){const n=document.getElementById("ask-mai"),t=n?.dataset.auditApiUrl||"",l=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),d=window.__AUDIT_API_URL||t||(l?"http://localhost:3000/api/audit":`${window.location.origin}/api/audit`),r=document.getElementById("audit-url"),e=document.getElementById("run-audit-btn"),s=document.getElementById("result-container");!n||!r||!e||!s||(window.location.hash==="#ask-mai"&&requestAnimationFrame(()=>{n.scrollIntoView({block:"start"})}),e.addEventListener("click",async()=>{const u=r.value.trim();if(!u){g(s,"Please enter a URL.");return}try{new URL(u.startsWith("http")?u:"https://"+u)}catch{g(s,"Please enter a valid URL.");return}e.disabled=!0,e.textContent="Running audit...",s.innerHTML="";try{const a=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:u})});if(!a.ok){let o=null;try{o=await a.json()}catch{o=null}g(s,E(o?.error),o?.hint||"Please try again in a moment.");return}const p=await a.json();R(s,p)}catch{g(s,"Unable to contact the audit service.","Check your connection and retry. If this persists, the API may be temporarily unavailable.")}finally{e.disabled=!1,e.textContent="Start audit"}}))}export{U as initializeAccessibilityAuditTool};
