import{E as D}from"./jspdf.es.min.HRF70t-r.js";function a(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function N(t){return t==="high"?"bg-red-50 text-red-700 border border-red-200":t==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function P(t){return t==="high"?"bg-red-700":t==="medium"?"bg-orange-700":"bg-emerald-700"}function O(t){return t==="high"?"text-red-700":t==="medium"?"text-orange-600":"text-emerald-700"}function I(t,s,r){t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words">${a(s)}</p>
      ${r?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${a(r)}</p>`:""}
    </div>
  `}function B(t){return t===401?"Your Figma sign-in expired or was declined. Sign in again to scan.":t===422?"Check the link points to a frame you can open, and that it includes a node-id.":t===429?"Inference is busy right now. Please retry in a minute or two.":t===402?"The monthly inference budget is used up. It resets next month.":t===502||t===503||t===504?"The inference engine is temporarily unavailable. Please try again shortly.":"Please try again in a moment. If it keeps failing, the engine may be temporarily unavailable."}function W(t){const s=["Reading the Figma layer & component tree","Inferring the component pattern","Evaluating structure and accessibility","Placing numbered findings on the frame"];let r=0;const u=()=>{const i=s.map((p,m)=>{const d=m===r;return`<li class="flex items-center gap-2 text-sm ${d?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${d?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${a(p)}</li>`}).join("");t.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running inference</p>
        <p class="mt-2 mb-0 text-xs text-muted">This usually takes 10-30 seconds.</p>
        <ul class="mt-3 space-y-2">${i}</ul>
      </div>
    `};u();const e=window.setInterval(()=>{r=(r+1)%s.length,u()},1600);return{stop(){window.clearInterval(e)}}}function _(t){return t.map(s=>{const r=Math.min(100,Math.max(0,(s.anchor?.x??.5)*100)),u=Math.min(100,Math.max(0,(s.anchor?.y??.5)*100));return`
        <div class="absolute z-10" style="left:${r}%; top:${u}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-paper ${P(s.severity)} text-xs font-bold text-white shadow-lg shadow-black/30">${a(s.number)}</div>
        </div>
      `}).join("")}function H(t,s,r){const u=t?.summary||{},e=Array.isArray(t?.findings)?t.findings:[],i=t?.componentMapping||{},p=t?.metadata||{},m=["# Figma Component Inference","",`- Generated: ${t?.generatedAt||""}`,r?`- Figma node: ${r}`:"","","## Summary","",`- Detected pattern: ${u.detectedPattern||"Unknown"}`,`- Confidence: ${u.confidence??0}%`,`- Risk: ${u.risk||"medium"}`,u.note?`- Note: ${u.note}`:"",""],d=Array.isArray(u.detectedComponents)?u.detectedComponents:[];return d.length>1&&(m.push("## Components detected",""),d.forEach(n=>{m.push(`- ${n.pattern||"Unknown"}${n.label?` — ${n.label}`:""} (${n.confidence??0}%)`)}),m.push("")),m.push("## Findings",""),e.length===0?m.push("No issues inferred.",""):e.forEach(n=>{m.push(`### ${n.number}. ${n.title||"Finding"}`,"",`- Category: ${n.category}  ·  Severity: ${n.severity}  ·  Zone: ${n.zone}`,`- Current structure: ${n.currentStructure||""}`,`- Issue: ${n.issue||""}`,`- Recommendation: ${n.recommendation||""}`,`- Why it matters: ${n.why||""}`,"")}),m.push("## Suggested component mapping","",`- Generic: ${i.generic||"n/a"}`,i.designSystem?`- Design system: ${i.designSystem}`:"- Design system: (no design-system context provided)","","## Audit metadata","",`- Nodes analyzed: ${p.nodesAnalyzed??0}`,`- Components inferred: ${p.componentsInferred??0}`,`- Potential issues: ${p.potentialIssues??e.length}`,"","## Annotated frame","",s?`![Annotated frame](${s})`:"Image unavailable.","","## M.ai context","","```json",JSON.stringify({summary:u,findings:e,componentMapping:i,metadata:p},null,2),"```"),m.filter(n=>n!=="").join(`
`).replace(/\n{3,}/g,`

`)}function q(t,s){const r=t?.summary||{},u=Array.isArray(t?.findings)?t.findings:[],e=new D({orientation:"portrait",unit:"pt",format:"letter"}),i=40,p=e.internal.pageSize.getWidth(),m=e.internal.pageSize.getHeight(),d=p-i*2;let n=48;e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Figma Component Inference by M.ai",i,n),n+=20,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`Detected pattern: ${r.detectedPattern||"Unknown"}  ·  Confidence: ${r.confidence??0}%  ·  Risk: ${r.risk||"medium"}`,i,n),n+=16;const w=Array.isArray(r.detectedComponents)?r.detectedComponents:[];if(w.length>1&&(e.setTextColor(90),w.forEach(c=>{e.text(`• ${c.pattern||"Unknown"}${c.label?` — ${c.label}`:""} (${c.confidence??0}%)`,i,n),n+=12}),n+=4,e.setTextColor(0)),r.note){e.setTextColor(90);const c=e.splitTextToSize(String(r.note),d);e.text(c,i,n),n+=c.length*12+4,e.setTextColor(0)}if(s)try{const c=e.getImageProperties(s),o=d,g=c.height/c.width*o,l=Math.min(g,320),F=c.width/c.height*l;e.addImage(s,"PNG",i,n,Math.min(o,F),l),n+=Math.min(g,l)+16}catch{}e.setFont("helvetica","bold"),e.setFontSize(13),e.text("Findings",i,n),n+=16,e.setFontSize(10),u.forEach(c=>{const o=[`${c.number}. ${c.title||"Finding"}  [${c.severity}/${c.category}]`,`Current: ${c.currentStructure||""}`,`Issue: ${c.issue||""}`,`Recommendation: ${c.recommendation||""}`,`Why: ${c.why||""}`],g=e.splitTextToSize(o.join(`
`),d),l=g.length*12+10;n+l>m-i&&(e.addPage(),n=48),e.setFont("helvetica","bold"),e.text(g.slice(0,1),i,n),e.setFont("helvetica","normal"),e.setTextColor(70),e.text(g.slice(1),i,n+12),e.setTextColor(0),n+=l}),e.save(`figma-component-inference-${new Date(t?.generatedAt||Date.now()).toISOString().slice(0,10)}.pdf`)}function Y(t,s,r,u){const e=s?.summary||{},i=Array.isArray(s?.findings)?s.findings:[],p=s?.componentMapping||{},m=s?.metadata||{};let d=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl text-ink">Summary</h3>
      <div class="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <p class="mb-1 text-xs text-muted">Detected pattern</p>
          <p class="m-0 text-xl font-bold text-ink">${a(e.detectedPattern||"Unknown")}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Confidence</p>
          <p class="m-0 text-xl font-bold text-ink">${a(e.confidence??0)}%</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Risk</p>
          <p class="m-0 text-xl font-bold ${O(e.risk||"medium")}">${a((e.risk||"medium").toUpperCase())}</p>
        </div>
      </div>
      ${e.note?`<p class="mt-4 mb-0 text-sm text-muted">${a(e.note)}</p>`:""}
    </div>
  `;const n=Array.isArray(e.detectedComponents)?e.detectedComponents:[];n.length>1&&(d+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl text-ink">Components detected</h3>
        <p class="mt-1 mb-0 text-sm text-muted">Each region the agent could classify in this selection. Scan a single component for the sharpest read.</p>
        <ul class="mt-4 space-y-2">
    `,n.forEach(o=>{d+=`
        <li class="flex items-baseline justify-between gap-4 rounded border border-ink/5 bg-paper px-4 py-2 text-sm dark:bg-cream/5">
          <span class="min-w-0">
            <span class="font-semibold text-ink">${a(o.pattern||"Unknown")}</span>
            ${o.label?`<span class="ml-2 text-muted">${a(o.label)}</span>`:""}
          </span>
          <span class="shrink-0 text-xs text-muted">${a(o.confidence??0)}%</span>
        </li>
      `}),d+="</ul></div>");const w=typeof r=="string"&&r.startsWith("data:");d+='<div class="mb-6 space-y-6">',w&&(d+=`
    <div>
      <h4 class="mt-0 font-serif text-lg text-ink">Annotated frame</h4>
      <div class="mt-3 relative overflow-hidden rounded border border-ink/10 bg-white dark:bg-ink/5">
        <img src="${a(r)}" alt="Your frame with numbered inference findings" class="block h-auto w-full" />
        <div class="pointer-events-none absolute inset-0">${_(i)}</div>
      </div>
      <p class="mt-2 text-xs text-muted">Each numbered pin maps to the matching finding, placed on the real node it refers to.</p>
    </div>
    `),d+=`
    <div>
      <h4 class="mt-0 font-serif text-lg text-ink">Findings</h4>
      <div class="mt-3 space-y-3">
  `,i.length===0?d+='<p class="rounded bg-emerald-50 p-4 text-emerald-800">No structural or accessibility issues were inferred.</p>':i.forEach(o=>{d+=`
        <article id="ci-finding-${a(o.number)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${P(o.severity)} text-sm font-bold text-white">${a(o.number)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">
                <span class="rounded px-1.5 py-0.5 text-[10px] tracking-wider ${N(o.severity)}">${a((o.severity||"").toUpperCase())}</span>
                <span class="ml-1 text-muted">${a(o.category||"")}</span>
              </p>
              <h5 class="mt-1 font-serif text-base text-ink">${a(o.title||"Finding")}</h5>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Current structure</dt>
              <dd class="mt-1 text-ink">${a(o.currentStructure||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Issue</dt>
              <dd class="mt-1 text-muted">${a(o.issue||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Recommendation</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${a(o.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${a(o.why||"")}</dd>
            </div>
          </dl>
        </article>
      `}),d+="</div></div></div>",d+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper p-5 dark:bg-cream/5">
      <h4 class="mt-0 font-serif text-lg">Suggested component mapping</h4>
      <dl class="mt-3 space-y-2 text-sm">
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">Generic recommendation</dt>
          <dd class="mt-1 text-ink">${a(p.generic||"n/a")}</dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">Design system</dt>
          <dd class="mt-1 text-muted">${p.designSystem?a(p.designSystem):"No design-system context provided — generic patterns only."}</dd>
        </div>
      </dl>
    </div>
  `,d+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/60 p-4 text-sm text-muted dark:bg-cream/5">
      <p class="m-0">
        Nodes analyzed: <span class="font-semibold text-ink">${a(m.nodesAnalyzed??0)}</span>
        · Components inferred: <span class="font-semibold text-ink">${a(m.componentsInferred??0)}</span>
        · Potential issues: <span class="font-semibold text-ink">${a(m.potentialIssues??i.length)}</span>
      </p>
    </div>
  `,d+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ci-export="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Download Markdown</button>
      <button type="button" data-ci-export="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Download PDF</button>
      <button type="button" data-ci-copy-context class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Copy M.ai context</button>
      <button type="button" data-mai-open data-mai-source="component_inference_handoff" aria-haspopup="dialog" aria-controls="mai-panel" class="rounded bg-accent px-4 py-2 text-sm font-semibold text-paper hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Ask M.ai</button>
    </div>
  `,t.innerHTML=d;const c=["## M.ai context","","```json",JSON.stringify({summary:e,findings:i,componentMapping:p,metadata:m},null,2),"```"].join(`
`);t.querySelector('[data-ci-export="md"]')?.addEventListener("click",()=>{const o=H(s,r,u),g=new Blob([o],{type:"text/markdown;charset=utf-8"}),l=document.createElement("a");l.href=URL.createObjectURL(g),l.download=`figma-component-inference-${new Date(s?.generatedAt||Date.now()).toISOString().slice(0,10)}.md`,document.body.appendChild(l),l.click(),l.remove(),URL.revokeObjectURL(l.href)}),t.querySelector('[data-ci-export="pdf"]')?.addEventListener("click",()=>q(s,r)),t.querySelector("[data-ci-copy-context]")?.addEventListener("click",o=>{const g=o.currentTarget;navigator.clipboard?.writeText(c).then(()=>{const l=g.textContent;g.textContent="Copied",window.setTimeout(()=>{g.textContent=l},1500)},()=>{})})}function G(){const t=document.getElementById("component-inference-tool"),s=document.getElementById("inference-figma-url"),r=document.getElementById("inference-design-system"),u=document.getElementById("inference-library"),e=document.getElementById("run-inference-btn"),i=document.getElementById("inference-result-container");if(!t||!s||!e||!i)return;const p=(t.dataset.inferenceApiUrl||"").replace(/\/+$/,""),m=t.dataset.figmaOauthUrl||"",d=1800*1e3;let n="",w=0;const c=()=>n!==""&&Date.now()<w,o=()=>{w=Date.now()+d},g=()=>{n="",w=0},l=(y,h)=>window.dispatchEvent(new CustomEvent("site:track",{detail:{name:y,params:h}}));let F=!1;s.addEventListener("focus",()=>{F||(F=!0,l("tool_engage",{tool:"inference"}))});function R(){return new Promise((y,h)=>{if(!m){h(new Error("Sign-in is not configured."));return}const C=m+(m.includes("?")?"&":"?")+"return="+encodeURIComponent(window.location.origin),S=560,A=720,$=Math.max(0,Math.round(window.screenX+(window.outerWidth-S)/2)),T=Math.max(0,Math.round(window.screenY+(window.outerHeight-A)/2)),f=window.open(C,"figma-oauth",`width=${S},height=${A},left=${$},top=${T},menubar=no,toolbar=no,location=yes`);if(!f){h(new Error("The sign-in popup was blocked. Allow popups for this site and try again."));return}let x=!1,v=null;const E=()=>{window.removeEventListener("message",M),window.removeEventListener("storage",L);try{v?.close()}catch{}window.clearInterval(U),window.clearTimeout(j)},k=b=>{if(!(!b||typeof b!="object"||b.source!=="figma-inference-oauth")&&!x){x=!0,E();try{f.close()}catch{}b.status==="success"&&b.token?y(String(b.token)):h(new Error(b.message||"Figma sign-in did not complete."))}},M=b=>k(b.data),L=b=>{if(!(b.key!=="figma-inference-oauth"||!b.newValue))try{k(JSON.parse(b.newValue))}catch{}};window.addEventListener("message",M),window.addEventListener("storage",L);try{v=new BroadcastChannel("figma-inference-oauth"),v.onmessage=b=>k(b.data)}catch{v=null}const U=window.setInterval(()=>{f.closed&&!x&&window.setTimeout(()=>{x||(x=!0,E(),h(new Error("Sign-in was cancelled.")))},500)},600),j=window.setTimeout(()=>{if(!x){x=!0,E();try{f.close()}catch{}h(new Error("Sign-in timed out. Please try again."))}},18e4)})}async function z(y){const h=r?.value.trim()||"",C=u?.value.trim()||"",S={token:n,figmaUrl:y};h&&(S.designSystem=h),C&&(S.componentLibrary=C);const A=W(i);l("inference_run",{tool:"inference"});try{const $=new AbortController,T=window.setTimeout(()=>$.abort(),9e4),f=await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S),signal:$.signal});if(window.clearTimeout(T),!f.ok){let k=null;try{k=await f.json()}catch{k=null}f.status===401?g():o(),l("inference_error",{tool:"inference",http_status:f.status}),I(i,k?.error||"The inference request failed.",k?.error?void 0:B(f.status));return}const x=await f.json(),v=x?.report||x,E=typeof x?.imageDataUrl=="string"?x.imageDataUrl:"";l("inference_complete",{tool:"inference",findings:Array.isArray(v?.findings)?v.findings.length:0}),o(),Y(i,v,E,y)}catch($){const T=String($?.message||"").toLowerCase(),f=$?.name==="AbortError"||T.includes("aborted");l("inference_error",{tool:"inference",reason:f?"timeout":"network"}),I(i,f?"Inference took too long to finish.":"Unable to reach the inference engine.",f?"The engine may be busy. Please retry in a minute.":"Check your connection and retry.")}finally{A.stop()}}e.addEventListener("click",async()=>{const y=s.value.trim();if(!y){I(i,"Paste a Figma frame link first.","In Figma: select a frame → right-click → Copy/Paste as → Copy link to selection."),s.focus();return}if(!/figma\.com/i.test(y)){I(i,"That does not look like a Figma link.","Paste a https://www.figma.com/design/… link that includes a node-id."),s.focus();return}if(typeof navigator<"u"&&!navigator.onLine){I(i,"You appear to be offline.","Reconnect to the internet, then scan again.");return}e.disabled=!0;const h=e.textContent;try{c()||(g(),e.textContent="Waiting for Figma sign-in…",n=await R()),o(),e.textContent="Scanning…",await z(y)}catch(C){l("inference_error",{tool:"inference",reason:"oauth"}),I(i,C?.message||"Figma sign-in failed.","You can try signing in again.")}finally{e.disabled=!1,e.textContent=h||"Start scan"}})}G();
