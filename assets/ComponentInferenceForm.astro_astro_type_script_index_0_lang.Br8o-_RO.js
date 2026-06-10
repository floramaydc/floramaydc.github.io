import{E as A}from"./jspdf.es.min.HRF70t-r.js";function d(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function R(t){return t==="high"?"bg-red-50 text-red-700 border border-red-200":t==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function M(t){return t==="high"?"bg-red-700":t==="medium"?"bg-orange-700":"bg-emerald-700"}function z(t){return t==="high"?"text-red-700":t==="medium"?"text-orange-600":"text-emerald-700"}function S(t,o,r){t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words">${d(o)}</p>
      ${r?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${d(r)}</p>`:""}
    </div>
  `}function j(t){return t===401?"Your Figma sign-in expired or was declined. Sign in again to scan.":t===422?"Check the link points to a frame you can open, and that it includes a node-id.":t===429?"Inference is busy right now. Please retry in a minute or two.":t===402?"The monthly inference budget is used up. It resets next month.":t===502||t===503||t===504?"The inference engine is temporarily unavailable. Please try again shortly.":"Please try again in a moment. If it keeps failing, the engine may be temporarily unavailable."}function B(t){const o=["Reading the Figma layer & component tree","Inferring the component pattern","Evaluating structure and accessibility","Placing numbered findings on the frame"];let r=0;const m=()=>{const i=o.map((p,u)=>{const n=u===r;return`<li class="flex items-center gap-2 text-sm ${n?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${n?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${d(p)}</li>`}).join("");t.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running inference</p>
        <p class="mt-2 mb-0 text-xs text-muted">This usually takes 10-30 seconds.</p>
        <ul class="mt-3 space-y-2">${i}</ul>
      </div>
    `};m();const e=window.setInterval(()=>{r=(r+1)%o.length,m()},1600);return{stop(){window.clearInterval(e)}}}function N(t){return t.map(o=>{const r=Math.min(100,Math.max(0,(o.anchor?.x??.5)*100)),m=Math.min(100,Math.max(0,(o.anchor?.y??.5)*100));return`
        <div class="absolute z-10" style="left:${r}%; top:${m}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-paper ${M(o.severity)} text-xs font-bold text-white shadow-lg shadow-black/30">${d(o.number)}</div>
        </div>
      `}).join("")}function O(t,o,r){const m=t?.summary||{},e=Array.isArray(t?.findings)?t.findings:[],i=t?.componentMapping||{},p=t?.metadata||{},u=["# Figma Component Inference","",`- Generated: ${t?.generatedAt||""}`,r?`- Figma node: ${r}`:"","","## Summary","",`- Detected pattern: ${m.detectedPattern||"Unknown"}`,`- Confidence: ${m.confidence??0}%`,`- Risk: ${m.risk||"medium"}`,m.note?`- Note: ${m.note}`:"","","## Findings",""];return e.length===0?u.push("No issues inferred.",""):e.forEach(n=>{u.push(`### ${n.number}. ${n.title||"Finding"}`,"",`- Category: ${n.category}  ·  Severity: ${n.severity}  ·  Zone: ${n.zone}`,`- Current structure: ${n.currentStructure||""}`,`- Issue: ${n.issue||""}`,`- Recommendation: ${n.recommendation||""}`,`- Why it matters: ${n.why||""}`,"")}),u.push("## Suggested component mapping","",`- Generic: ${i.generic||"n/a"}`,i.designSystem?`- Design system: ${i.designSystem}`:"- Design system: (no design-system context provided)","","## Audit metadata","",`- Nodes analyzed: ${p.nodesAnalyzed??0}`,`- Components inferred: ${p.componentsInferred??0}`,`- Potential issues: ${p.potentialIssues??e.length}`,"","## Annotated frame","",o?`![Annotated frame](${o})`:"Image unavailable.","","## M.ai context","","```json",JSON.stringify({summary:m,findings:e,componentMapping:i,metadata:p},null,2),"```"),u.filter(n=>n!=="").join(`
`).replace(/\n{3,}/g,`

`)}function W(t,o){const r=t?.summary||{},m=Array.isArray(t?.findings)?t.findings:[],e=new A({orientation:"portrait",unit:"pt",format:"letter"}),i=40,p=e.internal.pageSize.getWidth(),u=e.internal.pageSize.getHeight(),n=p-i*2;let a=48;if(e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Figma Component Inference by M.ai",i,a),a+=20,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`Detected pattern: ${r.detectedPattern||"Unknown"}  ·  Confidence: ${r.confidence??0}%  ·  Risk: ${r.risk||"medium"}`,i,a),a+=16,r.note){e.setTextColor(90);const l=e.splitTextToSize(String(r.note),n);e.text(l,i,a),a+=l.length*12+4,e.setTextColor(0)}if(o)try{const l=e.getImageProperties(o),c=n,b=l.height/l.width*c,s=Math.min(b,320),h=l.width/l.height*s;e.addImage(o,"PNG",i,a,Math.min(c,h),s),a+=Math.min(b,s)+16}catch{}e.setFont("helvetica","bold"),e.setFontSize(13),e.text("Findings",i,a),a+=16,e.setFontSize(10),m.forEach(l=>{const c=[`${l.number}. ${l.title||"Finding"}  [${l.severity}/${l.category}]`,`Current: ${l.currentStructure||""}`,`Issue: ${l.issue||""}`,`Recommendation: ${l.recommendation||""}`,`Why: ${l.why||""}`],b=e.splitTextToSize(c.join(`
`),n),s=b.length*12+10;a+s>u-i&&(e.addPage(),a=48),e.setFont("helvetica","bold"),e.text(b.slice(0,1),i,a),e.setFont("helvetica","normal"),e.setTextColor(70),e.text(b.slice(1),i,a+12),e.setTextColor(0),a+=s}),e.save(`figma-component-inference-${new Date(t?.generatedAt||Date.now()).toISOString().slice(0,10)}.pdf`)}function H(t,o,r,m){const e=o?.summary||{},i=Array.isArray(o?.findings)?o.findings:[],p=o?.componentMapping||{},u=o?.metadata||{};let n=`
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
          <p class="m-0 text-xl font-bold ${z(e.risk||"medium")}">${d((e.risk||"medium").toUpperCase())}</p>
        </div>
      </div>
      ${e.note?`<p class="mt-4 mb-0 text-sm text-muted">${d(e.note)}</p>`:""}
    </div>
  `;const a=typeof r=="string"&&r.startsWith("data:");n+='<div class="mb-6 space-y-6">',a&&(n+=`
    <div>
      <h4 class="mt-0 font-serif text-lg text-ink">Annotated frame</h4>
      <div class="mt-3 relative overflow-hidden rounded border border-ink/10 bg-white dark:bg-ink/5">
        <img src="${d(r)}" alt="Your frame with numbered inference findings" class="block h-auto w-full" />
        <div class="pointer-events-none absolute inset-0">${N(i)}</div>
      </div>
      <p class="mt-2 text-xs text-muted">Each numbered pin maps to the matching finding, placed on the real node it refers to.</p>
    </div>
    `),n+=`
    <div>
      <h4 class="mt-0 font-serif text-lg text-ink">Findings</h4>
      <div class="mt-3 space-y-3">
  `,i.length===0?n+='<p class="rounded bg-emerald-50 p-4 text-emerald-800">No structural or accessibility issues were inferred.</p>':i.forEach(c=>{n+=`
        <article id="ci-finding-${d(c.number)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${M(c.severity)} text-sm font-bold text-white">${d(c.number)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">
                <span class="rounded px-1.5 py-0.5 text-[10px] tracking-wider ${R(c.severity)}">${d((c.severity||"").toUpperCase())}</span>
                <span class="ml-1 text-muted">${d(c.category||"")}</span>
              </p>
              <h5 class="mt-1 font-serif text-base text-ink">${d(c.title||"Finding")}</h5>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Current structure</dt>
              <dd class="mt-1 text-ink">${d(c.currentStructure||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Issue</dt>
              <dd class="mt-1 text-muted">${d(c.issue||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Recommendation</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${d(c.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${d(c.why||"")}</dd>
            </div>
          </dl>
        </article>
      `}),n+="</div></div></div>",n+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper p-5 dark:bg-cream/5">
      <h4 class="mt-0 font-serif text-lg">Suggested component mapping</h4>
      <dl class="mt-3 space-y-2 text-sm">
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">Generic recommendation</dt>
          <dd class="mt-1 text-ink">${d(p.generic||"n/a")}</dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">Design system</dt>
          <dd class="mt-1 text-muted">${p.designSystem?d(p.designSystem):"No design-system context provided — generic patterns only."}</dd>
        </div>
      </dl>
    </div>
  `,n+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/60 p-4 text-sm text-muted dark:bg-cream/5">
      <p class="m-0">
        Nodes analyzed: <span class="font-semibold text-ink">${d(u.nodesAnalyzed??0)}</span>
        · Components inferred: <span class="font-semibold text-ink">${d(u.componentsInferred??0)}</span>
        · Potential issues: <span class="font-semibold text-ink">${d(u.potentialIssues??i.length)}</span>
      </p>
    </div>
  `,n+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ci-export="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Download Markdown</button>
      <button type="button" data-ci-export="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Download PDF</button>
      <button type="button" data-ci-copy-context class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Copy M.ai context</button>
      <button type="button" data-mai-open data-mai-source="component_inference_handoff" aria-haspopup="dialog" aria-controls="mai-panel" class="rounded bg-accent px-4 py-2 text-sm font-semibold text-paper hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Ask M.ai</button>
    </div>
  `,t.innerHTML=n;const l=["## M.ai context","","```json",JSON.stringify({summary:e,findings:i,componentMapping:p,metadata:u},null,2),"```"].join(`
`);t.querySelector('[data-ci-export="md"]')?.addEventListener("click",()=>{const c=O(o,r,m),b=new Blob([c],{type:"text/markdown;charset=utf-8"}),s=document.createElement("a");s.href=URL.createObjectURL(b),s.download=`figma-component-inference-${new Date(o?.generatedAt||Date.now()).toISOString().slice(0,10)}.md`,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(s.href)}),t.querySelector('[data-ci-export="pdf"]')?.addEventListener("click",()=>W(o,r)),t.querySelector("[data-ci-copy-context]")?.addEventListener("click",c=>{const b=c.currentTarget;navigator.clipboard?.writeText(l).then(()=>{const s=b.textContent;b.textContent="Copied",window.setTimeout(()=>{b.textContent=s},1500)},()=>{})})}function U(){const t=document.getElementById("component-inference-tool"),o=document.getElementById("inference-figma-url"),r=document.getElementById("inference-design-system"),m=document.getElementById("inference-library"),e=document.getElementById("run-inference-btn"),i=document.getElementById("inference-result-container");if(!t||!o||!e||!i)return;const p=(t.dataset.inferenceApiUrl||"").replace(/\/+$/,""),u=t.dataset.figmaOauthUrl||"";let n="";const a=(s,h)=>window.dispatchEvent(new CustomEvent("site:track",{detail:{name:s,params:h}}));let l=!1;o.addEventListener("focus",()=>{l||(l=!0,a("tool_engage",{tool:"inference"}))});function c(){return new Promise((s,h)=>{if(!u){h(new Error("Sign-in is not configured."));return}const k=u+(u.includes("?")?"&":"?")+"return="+encodeURIComponent(window.location.origin),$=560,T=720,v=Math.max(0,Math.round(window.screenX+(window.outerWidth-$)/2)),C=Math.max(0,Math.round(window.screenY+(window.outerHeight-T)/2)),g=window.open(k,"figma-oauth",`width=${$},height=${T},left=${v},top=${C},menubar=no,toolbar=no,location=yes`);if(!g){h(new Error("The sign-in popup was blocked. Allow popups for this site and try again."));return}let x=!1,y=null;const I=()=>{window.removeEventListener("message",E),window.removeEventListener("storage",F);try{y?.close()}catch{}window.clearInterval(L),window.clearTimeout(P)},w=f=>{if(!(!f||typeof f!="object"||f.source!=="figma-inference-oauth")&&!x){x=!0,I();try{g.close()}catch{}f.status==="success"&&f.token?s(String(f.token)):h(new Error(f.message||"Figma sign-in did not complete."))}},E=f=>w(f.data),F=f=>{if(!(f.key!=="figma-inference-oauth"||!f.newValue))try{w(JSON.parse(f.newValue))}catch{}};window.addEventListener("message",E),window.addEventListener("storage",F);try{y=new BroadcastChannel("figma-inference-oauth"),y.onmessage=f=>w(f.data)}catch{y=null}const L=window.setInterval(()=>{g.closed&&!x&&window.setTimeout(()=>{x||(x=!0,I(),h(new Error("Sign-in was cancelled.")))},500)},600),P=window.setTimeout(()=>{if(!x){x=!0,I();try{g.close()}catch{}h(new Error("Sign-in timed out. Please try again."))}},18e4)})}async function b(s){const h=r?.value.trim()||"",k=m?.value.trim()||"",$={token:n,figmaUrl:s};h&&($.designSystem=h),k&&($.componentLibrary=k);const T=B(i);a("inference_run",{tool:"inference"});try{const v=new AbortController,C=window.setTimeout(()=>v.abort(),9e4),g=await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($),signal:v.signal});if(window.clearTimeout(C),!g.ok){let w=null;try{w=await g.json()}catch{w=null}g.status===401&&(n=""),a("inference_error",{tool:"inference",http_status:g.status}),S(i,w?.error||"The inference request failed.",w?.error?void 0:j(g.status));return}const x=await g.json(),y=x?.report||x,I=typeof x?.imageDataUrl=="string"?x.imageDataUrl:"";a("inference_complete",{tool:"inference",findings:Array.isArray(y?.findings)?y.findings.length:0}),H(i,y,I,s)}catch(v){const C=String(v?.message||"").toLowerCase(),g=v?.name==="AbortError"||C.includes("aborted");a("inference_error",{tool:"inference",reason:g?"timeout":"network"}),S(i,g?"Inference took too long to finish.":"Unable to reach the inference engine.",g?"The engine may be busy. Please retry in a minute.":"Check your connection and retry.")}finally{T.stop(),n=""}}e.addEventListener("click",async()=>{const s=o.value.trim();if(!s){S(i,"Paste a Figma frame link first.","In Figma: select a frame → right-click → Copy/Paste as → Copy link to selection."),o.focus();return}if(!/figma\.com/i.test(s)){S(i,"That does not look like a Figma link.","Paste a https://www.figma.com/design/… link that includes a node-id."),o.focus();return}if(typeof navigator<"u"&&!navigator.onLine){S(i,"You appear to be offline.","Reconnect to the internet, then scan again.");return}e.disabled=!0;const h=e.textContent;try{n||(e.textContent="Waiting for Figma sign-in…",n=await c()),e.textContent="Scanning…",await b(s)}catch(k){a("inference_error",{tool:"inference",reason:"oauth"}),S(i,k?.message||"Figma sign-in failed.","You can try signing in again.")}finally{e.disabled=!1,e.textContent=h||"Start scan"}})}U();
