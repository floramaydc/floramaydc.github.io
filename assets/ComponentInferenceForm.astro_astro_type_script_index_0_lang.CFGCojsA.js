import{E as O}from"./jspdf.es.min.HRF70t-r.js";function r(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function j(t){return t==="high"?"bg-red-50 text-red-700 border border-red-200":t==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function P(t){return t==="high"?"bg-red-700":t==="medium"?"bg-orange-700":"bg-emerald-700"}function B(t){return t==="high"?"text-red-700":t==="medium"?"text-orange-600":"text-emerald-700"}function I(t,i,s){t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words">${r(i)}</p>
      ${s?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${r(s)}</p>`:""}
    </div>
  `}function W(t){return t===401?"Your Figma sign-in expired or was declined. Sign in again to scan.":t===422?"Check the link points to a frame you can open, and that it includes a node-id.":t===429?"Inference is busy right now. Please retry in a minute or two.":t===402?"The monthly inference budget is used up. It resets next month.":t===502||t===503||t===504?"The inference engine is temporarily unavailable. Please try again shortly.":"Please try again in a moment. If it keeps failing, the engine may be temporarily unavailable."}function _(t){const i=["Reading the Figma layer & component tree","Inferring the component pattern","Evaluating structure and accessibility","Placing numbered findings on the frame"];let s=0;const m=()=>{const n=i.map((g,u)=>{const o=u===s;return`<li class="flex items-center gap-2 text-sm ${o?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${o?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${r(g)}</li>`}).join("");t.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running inference</p>
        <p class="mt-2 mb-0 text-xs text-muted">This usually takes 10-30 seconds.</p>
        <ul class="mt-3 space-y-2">${n}</ul>
      </div>
    `};m();const e=window.setInterval(()=>{s=(s+1)%i.length,m()},1600);return{stop(){window.clearInterval(e)}}}function H(t){return t.map(i=>{const s=Math.min(100,Math.max(0,(i.anchor?.x??.5)*100)),m=Math.min(100,Math.max(0,(i.anchor?.y??.5)*100));return`
        <div class="absolute z-10" style="left:${s}%; top:${m}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-paper ${P(i.severity)} text-xs font-bold text-white shadow-lg shadow-black/30">${r(i.number)}</div>
        </div>
      `}).join("")}function U(t,i,s){const m=t?.summary||{},e=Array.isArray(t?.findings)?t.findings:[],n=t?.componentMapping||{},g=t?.metadata||{},u=["# Figma Component Inference","",`- Generated: ${t?.generatedAt||""}`,s?`- Figma node: ${s}`:"","","## Summary","",`- Detected pattern: ${m.detectedPattern||"Unknown"}`,`- Confidence: ${m.confidence??0}%`,`- Risk: ${m.risk||"medium"}`,m.note?`- Note: ${m.note}`:"","","## Findings",""];return e.length===0?u.push("No issues inferred.",""):e.forEach(o=>{u.push(`### ${o.number}. ${o.title||"Finding"}`,"",`- Category: ${o.category}  ·  Severity: ${o.severity}  ·  Zone: ${o.zone}`,`- Current structure: ${o.currentStructure||""}`,`- Issue: ${o.issue||""}`,`- Recommendation: ${o.recommendation||""}`,`- Why it matters: ${o.why||""}`,"")}),u.push("## Suggested component mapping","",`- Generic: ${n.generic||"n/a"}`,n.designSystem?`- Design system: ${n.designSystem}`:"- Design system: (no design-system context provided)","","## Audit metadata","",`- Nodes analyzed: ${g.nodesAnalyzed??0}`,`- Components inferred: ${g.componentsInferred??0}`,`- Potential issues: ${g.potentialIssues??e.length}`,"","## Annotated frame","",i?`![Annotated frame](${i})`:"Image unavailable.","","## M.ai context","","```json",JSON.stringify({summary:m,findings:e,componentMapping:n,metadata:g},null,2),"```"),u.filter(o=>o!=="").join(`
`).replace(/\n{3,}/g,`

`)}function q(t,i){const s=t?.summary||{},m=Array.isArray(t?.findings)?t.findings:[],e=new O({orientation:"portrait",unit:"pt",format:"letter"}),n=40,g=e.internal.pageSize.getWidth(),u=e.internal.pageSize.getHeight(),o=g-n*2;let a=48;if(e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Figma Component Inference by M.ai",n,a),a+=20,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`Detected pattern: ${s.detectedPattern||"Unknown"}  ·  Confidence: ${s.confidence??0}%  ·  Risk: ${s.risk||"medium"}`,n,a),a+=16,s.note){e.setTextColor(90);const d=e.splitTextToSize(String(s.note),o);e.text(d,n,a),a+=d.length*12+4,e.setTextColor(0)}if(i)try{const d=e.getImageProperties(i),c=o,p=d.height/d.width*c,l=Math.min(p,320),w=d.width/d.height*l;e.addImage(i,"PNG",n,a,Math.min(c,w),l),a+=Math.min(p,l)+16}catch{}e.setFont("helvetica","bold"),e.setFontSize(13),e.text("Findings",n,a),a+=16,e.setFontSize(10),m.forEach(d=>{const c=[`${d.number}. ${d.title||"Finding"}  [${d.severity}/${d.category}]`,`Current: ${d.currentStructure||""}`,`Issue: ${d.issue||""}`,`Recommendation: ${d.recommendation||""}`,`Why: ${d.why||""}`],p=e.splitTextToSize(c.join(`
`),o),l=p.length*12+10;a+l>u-n&&(e.addPage(),a=48),e.setFont("helvetica","bold"),e.text(p.slice(0,1),n,a),e.setFont("helvetica","normal"),e.setTextColor(70),e.text(p.slice(1),n,a+12),e.setTextColor(0),a+=l}),e.save(`figma-component-inference-${new Date(t?.generatedAt||Date.now()).toISOString().slice(0,10)}.pdf`)}function Y(t,i,s,m){const e=i?.summary||{},n=Array.isArray(i?.findings)?i.findings:[],g=i?.componentMapping||{},u=i?.metadata||{};let o=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl text-ink">Summary</h3>
      <div class="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <p class="mb-1 text-xs text-muted">Detected pattern</p>
          <p class="m-0 text-xl font-bold text-ink">${r(e.detectedPattern||"Unknown")}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Confidence</p>
          <p class="m-0 text-xl font-bold text-ink">${r(e.confidence??0)}%</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Risk</p>
          <p class="m-0 text-xl font-bold ${B(e.risk||"medium")}">${r((e.risk||"medium").toUpperCase())}</p>
        </div>
      </div>
      ${e.note?`<p class="mt-4 mb-0 text-sm text-muted">${r(e.note)}</p>`:""}
    </div>
  `;const a=typeof s=="string"&&s.startsWith("data:");o+='<div class="mb-6 space-y-6">',a&&(o+=`
    <div>
      <h4 class="mt-0 font-serif text-lg text-ink">Annotated frame</h4>
      <div class="mt-3 relative overflow-hidden rounded border border-ink/10 bg-white dark:bg-ink/5">
        <img src="${r(s)}" alt="Your frame with numbered inference findings" class="block h-auto w-full" />
        <div class="pointer-events-none absolute inset-0">${H(n)}</div>
      </div>
      <p class="mt-2 text-xs text-muted">Each numbered pin maps to the matching finding, placed on the real node it refers to.</p>
    </div>
    `),o+=`
    <div>
      <h4 class="mt-0 font-serif text-lg text-ink">Findings</h4>
      <div class="mt-3 space-y-3">
  `,n.length===0?o+='<p class="rounded bg-emerald-50 p-4 text-emerald-800">No structural or accessibility issues were inferred.</p>':n.forEach(c=>{o+=`
        <article id="ci-finding-${r(c.number)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${P(c.severity)} text-sm font-bold text-white">${r(c.number)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">
                <span class="rounded px-1.5 py-0.5 text-[10px] tracking-wider ${j(c.severity)}">${r((c.severity||"").toUpperCase())}</span>
                <span class="ml-1 text-muted">${r(c.category||"")}</span>
              </p>
              <h5 class="mt-1 font-serif text-base text-ink">${r(c.title||"Finding")}</h5>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Current structure</dt>
              <dd class="mt-1 text-ink">${r(c.currentStructure||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Issue</dt>
              <dd class="mt-1 text-muted">${r(c.issue||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Recommendation</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${r(c.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${r(c.why||"")}</dd>
            </div>
          </dl>
        </article>
      `}),o+="</div></div></div>",o+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper p-5 dark:bg-cream/5">
      <h4 class="mt-0 font-serif text-lg">Suggested component mapping</h4>
      <dl class="mt-3 space-y-2 text-sm">
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">Generic recommendation</dt>
          <dd class="mt-1 text-ink">${r(g.generic||"n/a")}</dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">Design system</dt>
          <dd class="mt-1 text-muted">${g.designSystem?r(g.designSystem):"No design-system context provided — generic patterns only."}</dd>
        </div>
      </dl>
    </div>
  `,o+=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/60 p-4 text-sm text-muted dark:bg-cream/5">
      <p class="m-0">
        Nodes analyzed: <span class="font-semibold text-ink">${r(u.nodesAnalyzed??0)}</span>
        · Components inferred: <span class="font-semibold text-ink">${r(u.componentsInferred??0)}</span>
        · Potential issues: <span class="font-semibold text-ink">${r(u.potentialIssues??n.length)}</span>
      </p>
    </div>
  `,o+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ci-export="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Download Markdown</button>
      <button type="button" data-ci-export="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Download PDF</button>
      <button type="button" data-ci-copy-context class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Copy M.ai context</button>
      <button type="button" data-mai-open data-mai-source="component_inference_handoff" aria-haspopup="dialog" aria-controls="mai-panel" class="rounded bg-accent px-4 py-2 text-sm font-semibold text-paper hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Ask M.ai</button>
    </div>
  `,t.innerHTML=o;const d=["## M.ai context","","```json",JSON.stringify({summary:e,findings:n,componentMapping:g,metadata:u},null,2),"```"].join(`
`);t.querySelector('[data-ci-export="md"]')?.addEventListener("click",()=>{const c=U(i,s,m),p=new Blob([c],{type:"text/markdown;charset=utf-8"}),l=document.createElement("a");l.href=URL.createObjectURL(p),l.download=`figma-component-inference-${new Date(i?.generatedAt||Date.now()).toISOString().slice(0,10)}.md`,document.body.appendChild(l),l.click(),l.remove(),URL.revokeObjectURL(l.href)}),t.querySelector('[data-ci-export="pdf"]')?.addEventListener("click",()=>q(i,s)),t.querySelector("[data-ci-copy-context]")?.addEventListener("click",c=>{const p=c.currentTarget;navigator.clipboard?.writeText(d).then(()=>{const l=p.textContent;p.textContent="Copied",window.setTimeout(()=>{p.textContent=l},1500)},()=>{})})}function G(){const t=document.getElementById("component-inference-tool"),i=document.getElementById("inference-figma-url"),s=document.getElementById("inference-design-system"),m=document.getElementById("inference-library"),e=document.getElementById("run-inference-btn"),n=document.getElementById("inference-result-container");if(!t||!i||!e||!n)return;const g=(t.dataset.inferenceApiUrl||"").replace(/\/+$/,""),u=t.dataset.figmaOauthUrl||"",o=1800*1e3;let a="",d=0;const c=()=>a!==""&&Date.now()<d,p=()=>{d=Date.now()+o},l=()=>{a="",d=0},w=(y,h)=>window.dispatchEvent(new CustomEvent("site:track",{detail:{name:y,params:h}}));let M=!1;i.addEventListener("focus",()=>{M||(M=!0,w("tool_engage",{tool:"inference"}))});function R(){return new Promise((y,h)=>{if(!u){h(new Error("Sign-in is not configured."));return}const S=u+(u.includes("?")?"&":"?")+"return="+encodeURIComponent(window.location.origin),C=560,F=720,$=Math.max(0,Math.round(window.screenX+(window.outerWidth-C)/2)),T=Math.max(0,Math.round(window.screenY+(window.outerHeight-F)/2)),f=window.open(S,"figma-oauth",`width=${C},height=${F},left=${$},top=${T},menubar=no,toolbar=no,location=yes`);if(!f){h(new Error("The sign-in popup was blocked. Allow popups for this site and try again."));return}let x=!1,v=null;const E=()=>{window.removeEventListener("message",L),window.removeEventListener("storage",A);try{v?.close()}catch{}window.clearInterval(D),window.clearTimeout(N)},k=b=>{if(!(!b||typeof b!="object"||b.source!=="figma-inference-oauth")&&!x){x=!0,E();try{f.close()}catch{}b.status==="success"&&b.token?y(String(b.token)):h(new Error(b.message||"Figma sign-in did not complete."))}},L=b=>k(b.data),A=b=>{if(!(b.key!=="figma-inference-oauth"||!b.newValue))try{k(JSON.parse(b.newValue))}catch{}};window.addEventListener("message",L),window.addEventListener("storage",A);try{v=new BroadcastChannel("figma-inference-oauth"),v.onmessage=b=>k(b.data)}catch{v=null}const D=window.setInterval(()=>{f.closed&&!x&&window.setTimeout(()=>{x||(x=!0,E(),h(new Error("Sign-in was cancelled.")))},500)},600),N=window.setTimeout(()=>{if(!x){x=!0,E();try{f.close()}catch{}h(new Error("Sign-in timed out. Please try again."))}},18e4)})}async function z(y){const h=s?.value.trim()||"",S=m?.value.trim()||"",C={token:a,figmaUrl:y};h&&(C.designSystem=h),S&&(C.componentLibrary=S);const F=_(n);w("inference_run",{tool:"inference"});try{const $=new AbortController,T=window.setTimeout(()=>$.abort(),9e4),f=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C),signal:$.signal});if(window.clearTimeout(T),!f.ok){let k=null;try{k=await f.json()}catch{k=null}f.status===401?l():p(),w("inference_error",{tool:"inference",http_status:f.status}),I(n,k?.error||"The inference request failed.",k?.error?void 0:W(f.status));return}const x=await f.json(),v=x?.report||x,E=typeof x?.imageDataUrl=="string"?x.imageDataUrl:"";w("inference_complete",{tool:"inference",findings:Array.isArray(v?.findings)?v.findings.length:0}),p(),Y(n,v,E,y)}catch($){const T=String($?.message||"").toLowerCase(),f=$?.name==="AbortError"||T.includes("aborted");w("inference_error",{tool:"inference",reason:f?"timeout":"network"}),I(n,f?"Inference took too long to finish.":"Unable to reach the inference engine.",f?"The engine may be busy. Please retry in a minute.":"Check your connection and retry.")}finally{F.stop()}}e.addEventListener("click",async()=>{const y=i.value.trim();if(!y){I(n,"Paste a Figma frame link first.","In Figma: select a frame → right-click → Copy/Paste as → Copy link to selection."),i.focus();return}if(!/figma\.com/i.test(y)){I(n,"That does not look like a Figma link.","Paste a https://www.figma.com/design/… link that includes a node-id."),i.focus();return}if(typeof navigator<"u"&&!navigator.onLine){I(n,"You appear to be offline.","Reconnect to the internet, then scan again.");return}e.disabled=!0;const h=e.textContent;try{c()||(l(),e.textContent="Waiting for Figma sign-in…",a=await R()),p(),e.textContent="Scanning…",await z(y)}catch(S){w("inference_error",{tool:"inference",reason:"oauth"}),I(n,S?.message||"Figma sign-in failed.","You can try signing in again.")}finally{e.disabled=!1,e.textContent=h||"Start scan"}})}G();
