import{E as W,a as R}from"./jspdf.plugin.autotable.BNWpDLH5.js";import"./preload-helper.BlTxHScW.js";const S={ink:[48,54,54],muted:[90,99,98],line:[229,227,220]},D=72;function m(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function A(t,n,c){const e=m(n),d=c?m(c):"";t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900">
      <p class="m-0 text-sm font-semibold break-words">${e}</p>
      ${d?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${d}</p>`:""}
    </div>
  `}function M(t){const n=String(t||"").trim();if(!n)return"The audit request failed.";const c=n.replace(/^audit failed:\s*/i,""),d=c.split(/browser logs?:/i)[0].trim()||c,o=d.toLowerCase();return o.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":o.includes("timeout")||o.includes("timed out")?"The audit timed out before the page finished loading.":o.includes("err_name_not_resolved")||o.includes("dns")?"The URL could not be resolved.":o.includes("net::err_")||o.includes("failed to fetch")?"The audit could not reach that URL.":d.length>220?`${d.slice(0,217)}...`:d}function E(t,n=10){return(Array.isArray(t?.findings)?t.findings:[]).slice(0,n).map((e,d)=>({...e,annotationId:d+1}))}function P(t){return t?`${t.x}, ${t.y}, ${t.width} × ${t.height}`:""}function f(t){return String(t??"").replace(/\bMicrosoft\b/gi,"platform").trim()}async function B(){try{if(typeof document>"u")return null;"fonts"in document&&await document.fonts.load("400 54px 'Ballet'");const t=document.createElement("canvas"),n=t.getContext("2d");return n?(t.width=420,t.height=110,n.clearRect(0,0,t.width,t.height),n.fillStyle="#303636",n.font="400 54px 'Ballet'",n.textBaseline="alphabetic",n.fillText("Flora May",4,78),t.toDataURL("image/png")):null}catch{return null}}function U(t){const n=new Date(t||Date.now());return Number.isNaN(n.getTime())?t||"":n.toLocaleString(void 0,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function N(t,n,c,e){if(e){t.addImage(e,"PNG",n-2,c-47,182,46);return}t.setFont("times","italic"),t.setFontSize(30),t.setTextColor(...S.ink),t.text("Flora May",n,c)}function I(t,n,c,e,d){const o=t;typeof o.textWithLink=="function"?o.textWithLink(n,e,d,{url:c}):t.text(n,e,d)}function H(t,n,c){const e=t.internal.pageSize.getWidth(),d=1600,o=360,s=e/d,u=Math.max(1,c-n)/o,i=[{start:[-20,80],curves:[[200,40,380,140,560,110],[740,80,900,180,1080,150],[1260,120,1440,200,1620,170]]},{start:[-20,108],curves:[[220,68,400,168,580,138],[760,108,920,208,1100,178],[1280,148,1460,228,1620,198]]},{start:[-20,136],curves:[[200,96,380,196,560,166],[740,136,900,236,1080,206],[1260,176,1440,256,1620,226]]},{start:[-20,164],curves:[[220,124,400,224,580,194],[760,164,920,264,1100,234],[1280,204,1460,284,1620,254]]},{start:[-20,192],curves:[[200,152,380,252,560,222],[740,192,900,292,1080,262],[1260,232,1440,312,1620,282]]},{start:[-20,220],curves:[[220,180,400,280,580,250],[760,220,920,320,1100,290],[1280,260,1460,340,1620,310]]},{start:[-20,248],curves:[[200,208,380,308,560,278],[740,248,900,348,1080,318],[1260,288,1440,368,1620,338]]},{start:[-20,276],curves:[[220,236,400,336,580,306],[760,276,920,376,1100,346],[1280,316,1460,396,1620,366]]},{start:[-20,304],curves:[[200,264,380,364,560,334],[740,304,900,404,1080,374],[1260,344,1440,424,1620,394]]},{start:[-20,332],curves:[[220,292,400,392,580,362],[760,332,920,432,1100,402],[1280,372,1460,452,1620,422]]}];t.setFillColor(255,255,255),t.rect(0,0,e,c,"F"),t.setDrawColor(214,214,214),t.setLineWidth(.3),i.forEach(p=>{let r=p.start[0],h=p.start[1];const l=p.curves.map(y=>{const[x,g,v,w,$,T]=y,L=[(x-r)*s,(g-h)*u,(v-r)*s,(w-h)*u,($-r)*s,(T-h)*u];return r=$,h=T,L});t.lines(l,p.start[0]*s,n+p.start[1]*u,[1,1],"S",!1)})}function F(t){return t.internal.pageSize.getHeight()-D}function O(t,n,c,e){const d=F(t);return n+c<=d?n:(t.addPage(),e)}async function Y(t){const n=new Image;return n.src=t,await n.decode(),n}async function j(t,n,c,e,d,o,s,a){const u=await Y(n),i=Math.max(220,Math.round(s*(e/c))),p=e/i;let r=o,h=0,l=i;for(;l>.5;){const y=F(t);let x=y-r;x<80&&(t.addPage(),r=a,x=y-r,t.setDrawColor(...S.line),t.setLineDashPattern?.([3,3],0),t.line(a,r,t.internal.pageSize.getWidth()-a,r),t.setLineDashPattern?.([],0),r+=10,t.setFont("helvetica","normal"),t.setFontSize(9),t.setTextColor(...S.muted),t.text("Screenshot (continued)",a,r),r+=10,x=y-r);const g=Math.min(l,x),v=Math.max(1,Math.round(g*p)),w=document.createElement("canvas");w.width=c,w.height=v;const $=w.getContext("2d");if(!$)break;$.drawImage(u,0,h,c,v,0,0,c,v),t.addImage(w.toDataURL("image/png"),"PNG",d,r,s,g),h+=v,l-=g,r+=g,l>.5&&(t.setDrawColor(...S.line),t.setLineDashPattern?.([3,3],0),t.line(a,Math.min(r+4,F(t)),t.internal.pageSize.getWidth()-a,Math.min(r+4,F(t))),t.setLineDashPattern?.([],0))}return t.setTextColor(0,0,0),r}function _(t,n,c){return H(t,20,120),N(t,n,68,c),140}function G(t,n,c,e){const d=t.getNumberOfPages(),o=t.internal.pageSize.getWidth(),s=t.internal.pageSize.getHeight();for(let a=1;a<=d;a+=1){t.setPage(a),t.setDrawColor(...S.line),t.setLineWidth(.8),t.line(c,s-36,o-c,s-36),t.setFont("helvetica","normal"),t.setFontSize(8),t.setTextColor(...S.muted);const u=s-30;let i=c;I(t,"https://floramaydc.com","https://floramaydc.com",i,u),i+=t.getTextWidth("https://floramaydc.com")+8,t.text("·",i,u),i+=t.getTextWidth("·")+8,I(t,"https://linkedin.com/in/floramaydelacruz","https://linkedin.com/in/floramaydelacruz",i,u),i+=t.getTextWidth("https://linkedin.com/in/floramaydelacruz")+8,t.text("·",i,u),i+=t.getTextWidth("·")+8,I(t,"https://instagram.com/floramaydc","https://instagram.com/floramaydc",i,u),t.text(`${f(n)} · Page ${a} of ${d}`,o-c,s-30,{align:"right"})}t.setTextColor(0,0,0)}function J(t){const n=t?.summary||{},c=E(t,10),e=Array.isArray(t?.inventory)?t.inventory:[],d=t?.screenshot,o=["# Accessibility Audit","",`- URL: ${t?.url||""}`,`- Timestamp: ${t?.timestamp||""}`,`- Elements: ${n.totalElements??0}`,`- Findings: ${n.totalFindings??0}`,`- Critical: ${n.critical??0}`,`- Serious: ${n.serious??0}`,`- Moderate: ${n.moderate??0}`,`- Minor: ${n.minor??0}`,"","## Method","","- Accessibility Annotation Playbook: capture intent, label states, and preserve focus order.","- Accessibility Compliance Baseline Playbook: validate contrast, reflow, focus, and shell primitives.","- Accessibility Audit Ops Playbook: keep the scan, evidence, and follow-up in one repeatable format.","","## Annotations",""];return c.length===0?o.push("No annotated findings to review.",""):c.forEach(s=>{o.push(`### Annotation ${s.annotationId} - ${s?.rule||"Finding"}`,"",`- Severity: ${s?.severity||""}`,`- Element: ${s?.elementId||""}`,`- Selector: ${s?.selector||""}`,`- Bounding box: ${P(s?.boundingBox)}`,`- Why it matters: ${s?.whyItMatters||""}`,`- Suggested fix: ${s?.suggestedFix||""}`,"")}),o.push("## Findings"),c.length===0?o.push("","No issues found."):(o.push("","| Annotation | Severity | Rule | Element | Selector | BBox |","|---|---|---|---|---|---|"),c.forEach(s=>{o.push(`| ${s.annotationId} | ${s?.severity||""} | ${s?.rule||"Finding"} | ${s?.elementId||""} | ${s?.selector||""} | ${P(s?.boundingBox)} |`)})),o.push("","## Screenshot",""),d?.data?o.push(`![Annotated page screenshot](data:${d.mimeType||"image/png"};base64,${d.data})`):o.push("Screenshot unavailable."),o.push("","## Element Inventory","","| ID | Type | Text | Role | Selector |","|---|---|---|---|---|"),e.slice(0,20).forEach(s=>{o.push(`| ${s?.id||""} | ${s?.type||""} | ${s?.text||""} | ${s?.role||""} | ${s?.selector||""} |`)}),o.push("","## M.ai Context","","```json",JSON.stringify(t?.maiContext||{},null,2),"```"),o.join(`
`).replace(/\bMicrosoft\b/gi,"platform")}async function q(t,n){const c=`accessibility-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`;if(n)try{const b=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({report:t})});if(b.ok){const C=await b.blob(),k=document.createElement("a");k.href=URL.createObjectURL(C),k.download=`${c}.pdf`,document.body.appendChild(k),k.click(),k.remove(),URL.revokeObjectURL(k.href);return}}catch{}const e=new W({orientation:"portrait",unit:"pt",format:"letter"}),d=t?.summary||{},o=E(t,10),s=Array.isArray(t?.inventory)?t.inventory:[],a=t?.screenshot,u=e.internal.pageSize.getWidth(),i=40,p=u-i*2,r=await B(),h={left:i,right:i,bottom:72};let l=_(e,i,r);e.setFont("times","bold"),e.setFontSize(17),e.setTextColor(...S.ink),e.text("Accessibility Audit Report",i,l),l+=16,e.setFont("helvetica","normal"),e.setFontSize(9),e.setTextColor(...S.muted);const x=e.splitTextToSize("Accessibility issues annotated with evidence and prioritized remediation guidance.",p);e.text(x,i,l),l+=x.length*11+4;const g=`URL: ${f(t.url||"")}`,v=e.splitTextToSize(g,p);if(e.text(v,i,l),l+=v.length*11,e.text(`Generated: ${U(t.timestamp||"")}`,i,l),l+=16,e.setTextColor(0,0,0),a?.data){l=O(e,l,70,i),e.setFont("times","bold"),e.setFontSize(14),e.text("Annotated screenshot",i,l),l+=10;const b=Number(a.width||1),C=Number(a.height||1),k=`data:${a.mimeType||"image/png"};base64,${a.data}`;l=await j(e,k,b,C,i,l,p,i),l+=16}R(e,{startY:l,margin:h,head:[["Elements","Findings","Critical","Serious","Moderate","Minor"]],body:[[String(d.totalElements??0),String(d.totalFindings??0),String(d.critical??0),String(d.serious??0),String(d.moderate??0),String(d.minor??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),l=e.lastAutoTable.finalY+18,e.setFont("times","bold"),e.setFontSize(14),e.text("Annotations",i,l),l+=8,o.length===0?(e.setFont("helvetica","normal"),e.setFontSize(10),e.text("No issues found.",i,l+12)):R(e,{startY:l,margin:h,head:[["Annotation","Severity","Rule","Element","Selector","BBox"]],body:o.map(b=>[String(b.annotationId),f(b?.severity||""),f(b?.rule||""),f(b?.elementId||""),f(b?.selector||""),P(b?.boundingBox)]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:24},1:{cellWidth:52},2:{cellWidth:120},3:{cellWidth:54},4:{cellWidth:170},5:{cellWidth:88}}}),o.length>0&&e.lastAutoTable?l=e.lastAutoTable.finalY+18:l+=32,e.setFont("times","bold"),e.setFontSize(14),e.text("Element inventory",i,l),l+=8,s.length>0&&R(e,{startY:l,margin:h,head:[["ID","Type","Text","Role","Selector"]],body:s.slice(0,20).map(b=>[f(b?.id||""),f(b?.type||""),f(b?.text||""),f(b?.role||""),f(b?.selector||"")]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:70},1:{cellWidth:48},2:{cellWidth:150},3:{cellWidth:56},4:{cellWidth:192}}}),s.length>0&&e.lastAutoTable?l=e.lastAutoTable.finalY+18:l+=32,e.setFont("times","bold"),e.setFontSize(14),e.text("M.ai context",i,l),l+=8,e.setFont("helvetica","normal"),e.setFontSize(9);const w=f(JSON.stringify(t?.maiContext||{},null,2)),$=e.splitTextToSize(w,u-i*2),T=e.internal.pageSize.getHeight(),L=Math.max(1,Math.floor((T-78-(l+12))/11)),z=$.slice(0,L);e.text(z,i,l+12),$.length>z.length&&(e.setFont("helvetica","italic"),e.setFontSize(8),e.setTextColor(90,99,98),e.text("Context truncated in PDF for readability. Full data remains in Markdown export.",i,T-82),e.setTextColor(0,0,0)),G(e,"Accessibility Audit",i),e.save(`${c}.pdf`)}function V(t,n,c){const e=n?.summary||{},d=E(n,10),o=Array.isArray(n?.inventory)?n.inventory:[];let s=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="mb-1 text-xs text-muted">Elements</p>
          <p class="m-0 text-xl font-bold">${m(e.totalElements??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${m(e.totalFindings??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Critical</p>
          <p class="m-0 text-xl font-bold text-red-700">${m(e.critical??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Serious</p>
          <p class="m-0 text-xl font-bold text-orange-600">${m(e.serious??0)}</p>
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
  `,n?.screenshot?.data){const a=n.screenshot,u=Number(a.width||1),i=Number(a.height||1),p=d.filter(r=>r?.boundingBox).map(r=>{const h=r.boundingBox,l=h.x/u*100,y=h.y/i*100,x=h.width/u*100,g=h.height/i*100;return`
          <div class="absolute border-2 border-red-600/90 bg-red-600/10" title="${m(r.rule||"")}" style="left:${l}%; top:${y}%; width:${x}%; height:${g}%;"></div>
          <div class="absolute z-10" style="left:${l}%; top:${y}%; transform: translate(-50%, -50%);">
            <div class="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-accent text-xs font-bold text-white shadow-lg shadow-black/20">${m(r.annotationId)}</div>
          </div>
        `}).join("");s+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${a.mimeType||"image/png"};base64,${a.data}"
            alt="Annotated audit screenshot"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${p}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,d.forEach(r=>{s+=`
        <article id="annotation-${m(r.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">${m(r.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${m((r?.severity||"").toUpperCase())}</p>
              <h4 class="mt-1 font-serif text-base">${m(r?.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Element</dt>
              <dd class="mt-1 text-ink">${m(r?.elementId||"n/a")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${m(r?.whyItMatters||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${m(r?.suggestedFix||"")}</dd>
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
  `,d.forEach(a=>{const u=a?.elementId||"n/a",i=a?.selector||"n/a";s+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${m(a.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase">${m((a?.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${m(a?.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${m(u)}</td>
        <td class="py-3 pr-3 text-muted">${m(i)}</td>
        <td class="py-3 pr-3 text-muted">${m(P(a?.boundingBox))}</td>
      </tr>
    `}),s+="</tbody></table></div>",d.length>10&&(s+=`<p class="mt-3 text-xs text-muted">... and ${m(d.length-10)} more annotated findings</p>`),s+=`
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
  `,o.slice(0,8).forEach(a=>{s+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${m(a?.id||"")}</td>
        <td class="py-3 pr-3">${m(a?.type||"")}</td>
        <td class="py-3 pr-3 text-muted">${m(a?.text||"")}</td>
        <td class="py-3 pr-3 text-muted">${m(a?.role||"")}</td>
        <td class="py-3 pr-3 text-muted">${m(a?.selector||"")}</td>
      </tr>
    `}),s+="</tbody></table></div>",o.length>8&&(s+=`<p class="mt-3 text-xs text-muted">... and ${m(o.length-8)} more elements</p>`),s+="</details>",s+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,t.innerHTML=s,t.querySelectorAll("[data-export-format]").forEach(a=>{a.addEventListener("click",async()=>{const u=a.getAttribute("data-export-format");if(u==="pdf")await q(n,c);else if(u==="md"){const i=J(n),p=`accessibility-audit-${new URL(n.url).hostname}-${new Date(n.timestamp||Date.now()).toISOString().slice(0,10)}`,r=new Blob([i],{type:"text/markdown;charset=utf-8"}),h=document.createElement("a");h.href=URL.createObjectURL(r),h.download=`${p}.md`,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(h.href)}})})}function Q(){const t=document.getElementById("ask-mai"),n=t?.dataset.auditApiUrl||"",c=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),e=window.__AUDIT_API_URL||(c?"http://localhost:3000/api/audit":n||`${window.location.origin}/api/audit`),d=e.replace(/\/api\/audit\/?$/,"/api/audit/pdf"),o=document.getElementById("audit-url"),s=document.getElementById("run-audit-btn"),a=document.getElementById("result-container");!t||!o||!s||!a||(window.location.hash==="#ask-mai"&&requestAnimationFrame(()=>{t.scrollIntoView({block:"start"})}),s.addEventListener("click",async()=>{const u=o.value.trim();if(!u){A(a,"Please enter a URL.");return}try{new URL(u.startsWith("http")?u:"https://"+u)}catch{A(a,"Please enter a valid URL.");return}s.disabled=!0,s.textContent="Running audit...",a.innerHTML="";try{const i=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:u})});if(!i.ok){let r=null;try{r=await i.json()}catch{r=null}A(a,M(r?.error),r?.hint||"Please try again in a moment.");return}const p=await i.json();V(a,p,d)}catch{A(a,"Unable to contact the audit service.","Check your connection and retry. If this persists, the API may be temporarily unavailable.")}finally{s.disabled=!1,s.textContent="Run Audit"}}))}export{Q as initializeAccessibilityAuditTool};
