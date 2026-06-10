import{E as L}from"./jspdf.es.min.HRF70t-r.js";import{a as A}from"./jspdf.plugin.autotable.CbV6WxIO.js";function l(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function v(n,t,i){const c=l(t),r=i?l(i):"";n.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words">${c}</p>
      ${r?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${r}</p>`:""}
    </div>
  `}function R(n,t){const i=String(t||"").toLowerCase();return n===429?"The service is currently busy. Please retry in about 30-60 seconds.":n===502||n===503||n===504?"The audit service is temporarily unavailable or under maintenance. Please try again shortly.":n===408?"The page took too long to load. Retry once, then test a lighter page to confirm connectivity.":n===422||i.includes("could not reach")||i.includes("could not be resolved")?"Verify that the page is public, not login-gated, and not blocking automated browsers.":"Please try again in a moment. If this keeps happening, the audit service may be temporarily unavailable."}function w(n){const t=Math.floor(n/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function C(n){const t=["Connecting to M.ai audit service","Loading the page for analysis","Running accessibility checks and collecting evidence","Packaging your report"],i=Date.now();let c=0;const r=()=>{const e=w(Date.now()-i),m=t.map((a,p)=>{const o=p===c;return`<li class="flex items-center gap-2 text-sm ${o?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${o?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${l(a)}</li>`}).join("");n.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <div class="flex items-baseline justify-between gap-2">
          <p class="m-0 text-sm font-semibold text-ink">Running your audit</p>
          <p class="m-0 text-xs tabular-nums text-muted" aria-label="Elapsed time">${e}</p>
        </div>
        <p class="mt-2 mb-0 text-xs text-muted">This can take 10-60 seconds depending on page size and network conditions.</p>
        <ul class="mt-3 space-y-2">${m}</ul>
        <p class="mt-3 mb-0 text-xs text-muted">If this takes unusually long, the service may be busy or in maintenance. We'll show a clear message if that happens.</p>
      </div>
    `};r();const s=window.setInterval(r,1e3);return{elapsed(){return Date.now()-i},stop(){window.clearInterval(s)}}}function M(n){const t=String(n||"").trim();if(!t)return"The audit request failed.";const i=t.replace(/^audit failed:\s*/i,""),r=i.split(/browser logs?:/i)[0].trim()||i,s=r.toLowerCase();return s.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":s.includes("timeout")||s.includes("timed out")?"The audit timed out before the page finished loading.":s.includes("err_name_not_resolved")||s.includes("dns")?"The URL could not be resolved.":s.includes("net::err_")||s.includes("failed to fetch")?"The audit could not reach that URL.":r.length>220?`${r.slice(0,217)}...`:r}const I={critical:0,serious:1,moderate:2,minor:3};function T(n,t=10){return[...Array.isArray(n?.findings)?n.findings:[]].sort((c,r)=>(I[c?.severity]??4)-(I[r?.severity]??4)).slice(0,t).map((c,r)=>({...c,annotationId:r+1}))}function $(n){return n?`${n.x}, ${n.y}, ${n.width} × ${n.height}`:""}function P(n){const t=n?.summary||{},i=T(n,10),c=Array.isArray(n?.inventory)?n.inventory:[],r=n?.screenshot,s=["# Accessibility Audit","",`- URL: ${n?.url||""}`,`- Timestamp: ${n?.timestamp||""}`,`- Elements: ${t.totalElements??0}`,`- Findings: ${t.totalFindings??0}`,`- Critical: ${t.critical??0}`,`- Serious: ${t.serious??0}`,`- Moderate: ${t.moderate??0}`,`- Minor: ${t.minor??0}`,"","## Method","","- Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.","- Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.","- Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.","","## Annotations",""];return i.length===0?s.push("No annotated findings to review.",""):i.forEach(e=>{s.push(`### Annotation ${e.annotationId} - ${e?.rule||"Finding"}`,"",`- Severity: ${e?.severity||""}`,`- Element: ${e?.elementId||""}`,`- Selector: ${e?.selector||""}`,`- Bounding box: ${$(e?.boundingBox)}`,`- Why it matters: ${e?.whyItMatters||""}`,`- Suggested fix: ${e?.suggestedFix||""}`,"")}),s.push("## Findings"),i.length===0?s.push("","No issues found."):(s.push("","| Annotation | Severity | Rule | Element | Selector | BBox |","|---|---|---|---|---|---|"),i.forEach(e=>{s.push(`| ${e.annotationId} | ${e?.severity||""} | ${e?.rule||"Finding"} | ${e?.elementId||""} | ${e?.selector||""} | ${$(e?.boundingBox)} |`)})),s.push("","## Screenshot",""),r?.data?s.push(`![Annotated page screenshot](data:${r.mimeType||"image/png"};base64,${r.data})`):s.push("Screenshot unavailable."),s.push("","## Element Inventory","","| ID | Type | Text | Role | Selector |","|---|---|---|---|---|"),c.slice(0,20).forEach(e=>{s.push(`| ${e?.id||""} | ${e?.type||""} | ${e?.text||""} | ${e?.role||""} | ${e?.selector||""} |`)}),s.push("","## M.ai Context","","```json",JSON.stringify(n?.maiContext||{},null,2),"```"),s.join(`
`)}function B(n){const t=new L({orientation:"portrait",unit:"pt",format:"letter"}),i=n?.summary||{},c=T(n,10),r=Array.isArray(n?.inventory)?n.inventory:[],s=n?.screenshot,e=`accessibility-audit-${new URL(n.url).hostname}-${new Date(n.timestamp||Date.now()).toISOString().slice(0,10)}`,m=t.internal.pageSize.getWidth(),a=40,p=m-a*2;let o=48;if(t.setFont("helvetica","bold"),t.setFontSize(18),t.text("Accessibility Audit by M.ai",a,o),o+=18,t.setFont("helvetica","normal"),t.setFontSize(10),t.text(`URL: ${n.url}`,a,o),o+=14,t.text(`Timestamp: ${n.timestamp||""}`,a,o),o+=18,s?.data){t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Annotated screenshot",a,o),o+=10;const d=Number(s.width||1),h=Number(s.height||1),g=Math.max(220,Math.round(p*(h/d)));t.addImage(`data:${s.mimeType||"image/png"};base64,${s.data}`,"PNG",a,o,p,g);const y=p/d,f=g/h;t.setDrawColor(204,51,51),t.setLineWidth(1),c.forEach(x=>{if(!x?.boundingBox)return;const k=a+x.boundingBox.x*y,S=o+x.boundingBox.y*f,E=x.boundingBox.width*y,F=x.boundingBox.height*f;E>0&&F>0&&(t.rect(k,S,E,F),t.setFillColor(122,74,42),t.circle(k+8,S+8,8,"F"),t.setTextColor(255,255,255),t.setFont("helvetica","bold"),t.setFontSize(8),t.text(String(x.annotationId),k+8,S+10.5,{align:"center"}),t.setTextColor(0,0,0))}),o+=g+18}A(t,{startY:o,margin:{left:a,right:a},head:[["Elements","Findings","Critical","Serious","Moderate","Minor"]],body:[[String(i.totalElements??0),String(i.totalFindings??0),String(i.critical??0),String(i.serious??0),String(i.moderate??0),String(i.minor??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),o=t.lastAutoTable.finalY+18,t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Annotations",a,o),o+=8,c.length===0?(t.setFont("helvetica","normal"),t.setFontSize(10),t.text("No issues found.",a,o+12)):A(t,{startY:o,margin:{left:a,right:a},head:[["Annotation","Severity","Rule","Element","Selector","BBox"]],body:c.map(d=>[String(d.annotationId),String(d?.severity||""),String(d?.rule||""),String(d?.elementId||""),String(d?.selector||""),$(d?.boundingBox)]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:24},1:{cellWidth:52},2:{cellWidth:120},3:{cellWidth:54},4:{cellWidth:170},5:{cellWidth:88}}}),o=t.lastAutoTable?t.lastAutoTable.finalY+18:o+32,t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Element inventory",a,o),o+=8,r.length>0&&A(t,{startY:o,margin:{left:a,right:a},head:[["ID","Type","Text","Role","Selector"]],body:r.slice(0,20).map(d=>[String(d?.id||""),String(d?.type||""),String(d?.text||""),String(d?.role||""),String(d?.selector||"")]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:70},1:{cellWidth:48},2:{cellWidth:150},3:{cellWidth:56},4:{cellWidth:192}}}),o=t.lastAutoTable?t.lastAutoTable.finalY+18:o+32,t.setFont("helvetica","bold"),t.setFontSize(14),t.text("M.ai context",a,o),o+=8,t.setFont("helvetica","normal"),t.setFontSize(9);const u=JSON.stringify(n?.maiContext||{},null,2),b=t.splitTextToSize(u,m-a*2);t.text(b,a,o+12),t.save(`${e}.pdf`)}function W(n,t){const i=t?.summary||{},c=T(t,10),r=Array.isArray(t?.inventory)?t.inventory:[];let s=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="mb-1 text-xs text-muted">Elements</p>
          <p class="m-0 text-xl font-bold">${l(i.totalElements??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${l(i.totalFindings??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Critical</p>
          <p class="m-0 text-xl font-bold text-red-700">${l(i.critical??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Serious</p>
          <p class="m-0 text-xl font-bold text-orange-600">${l(i.serious??0)}</p>
        </div>
      </div>
    </div>
  `;if(s+=`
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
  `,t?.screenshot?.data){const e=t.screenshot,m=Number(e.width||1),a=Number(e.height||1),p=c.filter(o=>o?.boundingBox).map(o=>{const u=o.boundingBox,b=u.x/m*100,d=u.y/a*100,h=u.width/m*100,g=u.height/a*100;return`
          <div class="absolute border-2 border-red-600/90 bg-red-600/10" title="${l(o.rule||"")}" style="left:${b}%; top:${d}%; width:${h}%; height:${g}%;"></div>
          <div class="absolute z-10" style="left:${b}%; top:${d}%; transform: translate(-50%, -50%);">
            <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${l(o.annotationId)}</div>
          </div>
        `}).join("");s+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${e.mimeType||"image/png"};base64,${e.data}"
            alt="Annotated audit screenshot"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${p}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,c.forEach(o=>{s+=`
        <article id="annotation-${l(o.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-paper">${l(o.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${l((o?.severity||"").toUpperCase())}</p>
              <h4 class="mt-1 font-serif text-base">${l(o?.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Element</dt>
              <dd class="mt-1 text-ink">${l(o?.elementId||"n/a")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${l(o?.whyItMatters||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${l(o?.suggestedFix||"")}</dd>
            </div>
          </dl>
        </article>
      `}),s+=`
          </div>
        </div>
      </div>
    `}else s+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No issues found.</p>';s+=`
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
  `,c.forEach(e=>{const m=e?.elementId||"n/a",a=e?.selector||"n/a";s+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${l(e.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase">${l((e?.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${l(e?.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${l(m)}</td>
        <td class="py-3 pr-3 text-muted">${l(a)}</td>
        <td class="py-3 pr-3 text-muted">${l($(e?.boundingBox))}</td>
      </tr>
    `}),s+="</tbody></table></div>",c.length>10&&(s+=`<p class="mt-3 text-xs text-muted">... and ${l(c.length-10)} more annotated findings</p>`),s+=`
      <div class="mt-6 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Method</h4>
        <ul class="mt-3 space-y-2 text-sm text-muted">
          <li>Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.</li>
          <li>Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.</li>
          <li>Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.</li>
        </ul>
      </div>
    </section>
  `,s+=`
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
  `,r.slice(0,8).forEach(e=>{s+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${l(e?.id||"")}</td>
        <td class="py-3 pr-3">${l(e?.type||"")}</td>
        <td class="py-3 pr-3 text-muted">${l(e?.text||"")}</td>
        <td class="py-3 pr-3 text-muted">${l(e?.role||"")}</td>
        <td class="py-3 pr-3 text-muted">${l(e?.selector||"")}</td>
      </tr>
    `}),s+="</tbody></table></div>",r.length>8&&(s+=`<p class="mt-3 text-xs text-muted">... and ${l(r.length-8)} more elements</p>`),s+="</details>",s+=`
    <div class="mt-6 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-4">
      ${t._elapsedMs!=null?`<p class="mr-auto m-0 text-xs text-muted tabular-nums">Completed in ${w(t._elapsedMs)}</p>`:""}
      <button type="button" data-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,n.innerHTML=s,n.querySelectorAll("[data-export-format]").forEach(e=>{e.addEventListener("click",()=>{const m=e.getAttribute("data-export-format");if(m==="pdf")B(t);else if(m==="md"){const a=P(t),p=`accessibility-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`,o=new Blob([a],{type:"text/markdown;charset=utf-8"}),u=document.createElement("a");u.href=URL.createObjectURL(o),u.download=`${p}.md`,document.body.appendChild(u),u.click(),u.remove(),URL.revokeObjectURL(u.href)}})})}function U(){const n=document.getElementById("ask-mai"),t=n?.dataset.auditApiUrl||"",i=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),c=window.__AUDIT_API_URL||t||(i?"http://localhost:3000/api/audit":`${window.location.origin}/api/audit`),r=document.getElementById("audit-url"),s=document.getElementById("run-audit-btn"),e=document.getElementById("result-container");if(!n||!r||!s||!e)return;window.location.hash==="#ask-mai"&&requestAnimationFrame(()=>{n.scrollIntoView({block:"start"})});let m=!1;r.addEventListener("focus",()=>{m||(m=!0,window.dispatchEvent(new CustomEvent("site:track",{detail:{name:"tool_engage",params:{tool:"accessibility"}}})))},{once:!1}),s.addEventListener("click",async()=>{const a=r.value.trim();if(!a){v(e,"Please enter a URL.");return}if(typeof navigator<"u"&&!navigator.onLine){v(e,"You appear to be offline.","Reconnect to the internet, then run the audit again.");return}try{new URL(a.startsWith("http")?a:"https://"+a)}catch{v(e,"Please enter a valid URL.");return}s.disabled=!0,s.textContent="Running audit...";const p=C(e),o=(u,b)=>window.dispatchEvent(new CustomEvent("site:track",{detail:{name:u,params:b}}));o("audit_run",{tool:"accessibility"});try{const u=new AbortController,b=window.setTimeout(()=>u.abort(),9e4),d=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:a}),signal:u.signal});if(window.clearTimeout(b),!d.ok){let y=null;try{y=await d.json()}catch{y=null}const f=M(y?.error),x=w(p.elapsed());o("audit_error",{tool:"accessibility",http_status:d.status}),v(e,f,`${y?.hint||R(d.status,f)} (after ${x})`);return}const h=await d.json(),g=p.elapsed();o("audit_complete",{tool:"accessibility",finding_count:h?.summary?.totalFindings??null,elapsed_ms:g}),W(e,{...h,_elapsedMs:g})}catch(u){const b=String(u?.message||"").toLowerCase(),d=u?.name==="AbortError"||b.includes("aborted"),h=w(p.elapsed());o("audit_error",{tool:"accessibility",reason:d?"timeout":"network"}),v(e,d?"This audit took too long to finish.":"Unable to contact the audit service.",d?`The service may be busy right now. Please retry in a minute. (after ${h})`:`Check your connection and retry. If this persists, the API may be temporarily unavailable. (after ${h})`)}finally{p.stop(),s.disabled=!1,s.textContent="Start audit"}})}U();
