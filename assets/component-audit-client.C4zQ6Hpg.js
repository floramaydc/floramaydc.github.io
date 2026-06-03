import{E as B,a as R}from"./jspdf.plugin.autotable.BNWpDLH5.js";import"./preload-helper.BlTxHScW.js";const w={accent:[0,0,0],ink:[48,54,54],muted:[90,99,98],line:[229,227,220]};function d(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function F(t,o,c){const e=d(o),a=c?d(c):"";t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900">
      <p class="m-0 text-sm font-semibold break-words">${e}</p>
      ${a?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${a}</p>`:""}
    </div>
  `}function U(t){const o=String(t||"").trim();if(!o)return"The audit request failed.";const c=o.replace(/^component audit failed:\s*/i,""),a=c.split(/browser logs?:/i)[0].trim()||c,i=a.toLowerCase();return i.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":i.includes("timeout")||i.includes("timed out")?"The audit timed out before the page finished loading.":i.includes("err_name_not_resolved")||i.includes("dns")?"The URL could not be resolved.":i.includes("net::err_")||i.includes("failed to fetch")?"The audit could not reach that URL.":a.length>220?`${a.slice(0,217)}...`:a}function A(t,o=10){return(Array.isArray(t?.findings)?t.findings:[]).slice(0,o).map((e,a)=>({...e,annotationId:e?.annotationId??a+1}))}function P(t){return t?`${t.x}, ${t.y}, ${t.width} × ${t.height}`:""}function b(t){return String(t??"").replace(/\bMicrosoft\b/gi,"platform").trim()}async function M(){try{if(typeof document>"u")return null;"fonts"in document&&await document.fonts.load("400 54px 'Ballet'");const t=document.createElement("canvas"),o=t.getContext("2d");return o?(t.width=420,t.height=110,o.clearRect(0,0,t.width,t.height),o.fillStyle="#303636",o.font="400 54px 'Ballet'",o.textBaseline="alphabetic",o.fillText("Flora May",4,78),t.toDataURL("image/png")):null}catch{return null}}function D(t){const o=new Date(t||Date.now());return Number.isNaN(o.getTime())?t||"":o.toLocaleString(void 0,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function E(t,o,c,e){if(e){t.addImage(e,"PNG",o-2,c-47,182,46);return}t.setFont("times","italic"),t.setFontSize(30),t.setTextColor(...w.ink),t.text("Flora May",o,c)}function C(t,o,c,e,a){const i=t;typeof i.textWithLink=="function"?i.textWithLink(o,e,a,{url:c}):t.text(o,e,a)}function N(t,o,c){const e=t.internal.pageSize.getWidth(),a=1600,i=360,u=e/a,r=Math.max(1,c-o)/i,n=[{start:[-20,80],curves:[[200,40,380,140,560,110],[740,80,900,180,1080,150],[1260,120,1440,200,1620,170]]},{start:[-20,108],curves:[[220,68,400,168,580,138],[760,108,920,208,1100,178],[1280,148,1460,228,1620,198]]},{start:[-20,136],curves:[[200,96,380,196,560,166],[740,136,900,236,1080,206],[1260,176,1440,256,1620,226]]},{start:[-20,164],curves:[[220,124,400,224,580,194],[760,164,920,264,1100,234],[1280,204,1460,284,1620,254]]},{start:[-20,192],curves:[[200,152,380,252,560,222],[740,192,900,292,1080,262],[1260,232,1440,312,1620,282]]},{start:[-20,220],curves:[[220,180,400,280,580,250],[760,220,920,320,1100,290],[1280,260,1460,340,1620,310]]},{start:[-20,248],curves:[[200,208,380,308,560,278],[740,248,900,348,1080,318],[1260,288,1440,368,1620,338]]},{start:[-20,276],curves:[[220,236,400,336,580,306],[760,276,920,376,1100,346],[1280,316,1460,396,1620,366]]},{start:[-20,304],curves:[[200,264,380,364,560,334],[740,304,900,404,1080,374],[1260,344,1440,424,1620,394]]},{start:[-20,332],curves:[[220,292,400,392,580,362],[760,332,920,432,1100,402],[1280,372,1460,452,1620,422]]}];t.setFillColor(255,255,255),t.rect(0,0,e,c,"F"),t.setDrawColor(214,214,214),t.setLineWidth(.3),n.forEach(p=>{let h=p.start[0],x=p.start[1];const l=p.curves.map(m=>{const[y,g,S,T,f,v]=m,$=[(y-h)*u,(g-x)*r,(S-h)*u,(T-x)*r,(f-h)*u,(v-x)*r];return h=f,x=v,$});t.lines(l,p.start[0]*u,o+p.start[1]*r,[1,1],"S",!1)})}function z(t,o,c,e,a,i){return N(t,20,120),E(t,a,68,i),t.setFont("helvetica","bold"),t.setFontSize(17),t.setTextColor(...w.ink),t.text(o,a,140),160}function O(t,o,c,e){const a=t.getNumberOfPages(),i=t.internal.pageSize.getWidth(),u=t.internal.pageSize.getHeight();for(let s=1;s<=a;s+=1){t.setPage(s),t.setDrawColor(...w.line),t.setLineWidth(.8),t.line(c,u-36,i-c,u-36),e?t.addImage(e,"PNG",c-2,u-40,96,26):(t.setFont("times","italic"),t.setFontSize(12),t.setTextColor(...w.accent),t.text("Flora May",c,u-22)),t.setFont("helvetica","normal"),t.setFontSize(8),t.setTextColor(...w.muted);const r=u-30;let n=c+104;C(t,"Website","https://floramaydc.com",n,r),n+=t.getTextWidth("Website")+8,t.text("·",n,r),n+=t.getTextWidth("·")+8,C(t,"LinkedIn","https://linkedin.com/in/floramaydelacruz",n,r),n+=t.getTextWidth("LinkedIn")+8,t.text("·",n,r),n+=t.getTextWidth("·")+8,C(t,"Instagram","https://instagram.com/floramaydc",n,r),n+=t.getTextWidth("Instagram")+8,t.text("·",n,r),n+=t.getTextWidth("·")+8,C(t,"GitHub","https://github.com/floramaydc",n,r),t.text(b(o)+" · Page "+s+" of "+a,i-c,u-30,{align:"right"})}t.setTextColor(0,0,0)}function j(t,o,c){return t.filter(e=>e?.boundingBox).map(e=>{const a=e.boundingBox,i=a.x/o*100,u=a.y/c*100,s=a.width/o*100,r=a.height/c*100;return`
        <div class="absolute ${Y(e.severity)}" title="${d(e.rule||"")}" style="left:${i}%; top:${u}%; width:${s}%; height:${r}%;"></div>
        <div class="absolute z-10" style="left:${i}%; top:${u}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-accent text-xs font-bold text-white shadow-lg shadow-black/20">${d(e.annotationId)}</div>
        </div>
      `}).join("")}function I(t){return t==="high"?"text-red-700":t==="medium"?"text-orange-600":"text-emerald-700"}function H(t){return t==="high"?"bg-red-50 text-red-700 border border-red-200":t==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function Y(t){return t==="high"?"border-2 border-red-500/90 bg-red-500/10":t==="medium"?"border-2 border-orange-400/90 bg-orange-400/10":"border border-emerald-400/60"}function _(t){const o=t?.summary||{},c=A(t,10),e=Array.isArray(t?.inventory)?t.inventory:[],a=Object.entries(o.componentDistribution||{}).map(([s,r])=>`  - ${s}: ${r}`).join(`
`),i=["# Component Audit","",`- URL: ${t?.url||""}`,`- Library context: ${t?.libraryContext||"Fluent"}`,`- Timestamp: ${t?.timestamp||""}`,`- Total components: ${o.totalComponents??0}`,`- Custom: ${o.customComponentCount??0}  Native: ${o.nativeComponentCount??0}  Fluent: ${o.fluentComponentCount??0}`,`- Risk — High: ${o.riskSummary?.high??0}  Medium: ${o.riskSummary?.medium??0}  Low: ${o.riskSummary?.low??0}`,"","## Component distribution","",a||"  (none)","","## Method","","- Observe: visit the page, capture screenshot, extract DOM inventory.","- Inventory: build a typed component list with source detection and confidence scores.","- Annotate: apply the Fluent rule pack to flag risky implementations.","- Recommend: map each finding to the appropriate Fluent component with explanation.","","## Annotations",""];c.length===0?i.push("No risky implementations found.",""):c.forEach(s=>{i.push(`### Annotation ${s.annotationId} — ${s.rule||"Finding"}`,"",`- Risk: ${s.severity}`,`- Component type: ${s.componentType}`,`- Selector: ${s.selector||""}`,`- Bounding box: ${P(s.boundingBox)}`,`- Evidence: ${s.evidence||""}`,`- Recommendation: ${s.recommendation||""}`,`- Fluent alternative: ${s.fluentAlternative||"n/a"}`,`- Package: ${s.fluentPackage||""}`,`- Benefits: ${(s.benefits||[]).join(", ")}`,`- Explanation: ${s.explanation||""}`,"")}),i.push("## Findings",""),c.length===0?i.push("No issues found."):(i.push("| # | Risk | Rule | Type | Selector | Fluent Alternative |","|---|---|---|---|---|---|"),c.forEach(s=>{i.push(`| ${s.annotationId} | ${s.severity} | ${s.rule} | ${s.componentType} | ${s.selector||""} | ${s.fluentAlternative||"n/a"} |`)})),i.push("","## Screenshot","");const u=t?.screenshot;return u?.data?i.push(`![Component audit screenshot](data:${u.mimeType||"image/png"};base64,${u.data})`):i.push("Screenshot unavailable."),i.push("","## Component Inventory","","| ID | Type | Source | Risk | Confidence | Text | Selector |","|---|---|---|---|---|---|---|"),e.slice(0,30).forEach(s=>{i.push(`| ${s?.id||""} | ${s?.componentType||""} | ${s?.possibleSource||""} | ${s?.risk||""} | ${s?.confidence??""}% | ${s?.visibleText||""} | ${s?.selector||""} |`)}),i.push("","## M.ai Context","","```json",JSON.stringify(t?.maiContext||{},null,2),"```"),i.join(`
`).replace(/\bMicrosoft\b/gi,"platform")}async function G(t,o){const c=`component-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`;if(o)try{const m=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({report:t})});if(m.ok){const y=await m.blob(),g=document.createElement("a");g.href=URL.createObjectURL(y),g.download=`${c}.pdf`,document.body.appendChild(g),g.click(),g.remove(),URL.revokeObjectURL(g.href);return}}catch{}const e=new B({orientation:"portrait",unit:"pt",format:"letter"}),a=t?.summary||{},i=A(t,10),u=Array.isArray(t?.inventory)?t.inventory:[],s=t?.screenshot,r=e.internal.pageSize.getWidth(),n=40,p=r-n*2,h=await M(),x={left:n,right:n,bottom:72};let l=z(e,"Component Audit Report",t.url,t.timestamp||"",n,h);if(e.setFont("helvetica","normal"),e.setFontSize(9),e.setTextColor(...w.muted),e.text("Report URL:",n,l),C(e,"Open audited page",String(t.url||""),n+52,l),l+=14,e.text(`Generated: ${D(t.timestamp||"")}`,n,l),l+=14,e.text(`Library context: ${b(t.libraryContext||"Fluent")}`,n,l),l+=8,e.setTextColor(0,0,0),R(e,{startY:l,margin:x,head:[["Total","Custom","Native","Fluent","High Risk","Medium Risk"]],body:[[String(a.totalComponents??0),String(a.customComponentCount??0),String(a.nativeComponentCount??0),String(a.fluentComponentCount??0),String(a.riskSummary?.high??0),String(a.riskSummary?.medium??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),l=e.lastAutoTable.finalY+18,s?.data){e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Screenshot with annotations",n,l),l+=10;const m=Number(s.width||1),y=Number(s.height||1),g=Math.max(220,Math.round(p*(y/m)));e.addImage(`data:${s.mimeType||"image/png"};base64,${s.data}`,"PNG",n,l,p,g);const S=p/m,T=g/y;i.forEach(f=>{if(!f.boundingBox)return;const v=n+f.boundingBox.x*S,$=l+f.boundingBox.y*T,L=f.boundingBox.width*S,W=f.boundingBox.height*T;if(L>0&&W>0){const k=f.severity==="high";e.setDrawColor(k?204:234,k?51:88,k?51:12),e.setLineWidth(1),e.rect(v,$,L,W),e.setFillColor(k?122:160,k?40:80,k?40:10),e.circle(v+8,$+8,8,"F"),e.setTextColor(255,255,255),e.setFont("helvetica","bold"),e.setFontSize(8),e.text(String(f.annotationId),v+8,$+10.5,{align:"center"}),e.setTextColor(0,0,0)}}),l+=g+18}e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Annotations",n,l),l+=8,i.length===0?(e.setFont("helvetica","normal"),e.setFontSize(10),e.text("No risky implementations found.",n,l+12),l+=30):(R(e,{startY:l,margin:x,head:[["#","Risk","Rule","Type","Fluent Alternative","Selector"]],body:i.map(m=>[String(m.annotationId),b(m.severity||""),b(m.rule||""),b(m.componentType||""),b(m.fluentAlternative||"n/a"),b(m.selector||"")]),styles:{fontSize:8,cellPadding:3,valign:"top"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:20},1:{cellWidth:46},2:{cellWidth:100},3:{cellWidth:70},4:{cellWidth:110},5:{cellWidth:166}}}),l=e.lastAutoTable.finalY+18),e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Component inventory",n,l),l+=8,R(e,{startY:l,margin:x,head:[["ID","Type","Source","Risk","Conf.","Text","Selector"]],body:u.slice(0,25).map(m=>[b(m?.id||""),b(m?.componentType||""),b(m?.possibleSource||""),b(m?.risk||""),`${m?.confidence??""}%`,b(m?.visibleText||"").substring(0,30),b(m?.selector||"").substring(0,60)]),styles:{fontSize:7,cellPadding:2,valign:"top"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:38},1:{cellWidth:52},2:{cellWidth:44},3:{cellWidth:34},4:{cellWidth:28},5:{cellWidth:80},6:{cellWidth:236}}}),O(e,"Component Audit",n,h),e.save(`${c}.pdf`)}function q(t,o,c){const e=o?.summary||{},a=A(o,10),i=Array.isArray(o?.inventory)?o.inventory:[],u=e.componentDistribution||{},s=a.length;let r=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <div>
          <p class="mb-1 text-xs text-muted">Components</p>
          <p class="m-0 text-xl font-bold">${d(e.totalComponents??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${d(s)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">High Risk</p>
          <p class="m-0 text-xl font-bold text-red-700">${d(e.riskSummary?.high??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Medium Risk</p>
          <p class="m-0 text-xl font-bold text-orange-600">${d(e.riskSummary?.medium??0)}</p>
        </div>
      </div>
      <div class="mt-5 rounded border border-ink/10 bg-paper p-4 text-sm text-muted dark:bg-cream/5">
        <p class="m-0">
          Source mix: <span class="font-semibold text-ink">${d(e.customComponentCount??0)}</span> custom,
          <span class="font-semibold text-ink">${d(e.nativeComponentCount??0)}</span> native,
          <span class="font-semibold text-ink">${d(e.fluentComponentCount??0)}</span> Fluent.
        </p>
      </div>
    </div>
  `;if(r+=`
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
  `,o?.screenshot?.data){const n=o.screenshot,p=Number(n.width||1),h=Number(n.height||1),x=j(a,p,h);r+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${d(n.mimeType||"image/png")};base64,${n.data}"
            alt="Component audit screenshot with annotations"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${x}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,a.forEach(l=>{H(l.severity),r+=`
        <article id="ca-annotation-${d(l.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">${d(l.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${d((l.severity||"").toUpperCase())} RISK</p>
              <h4 class="mt-1 font-serif text-base">${d(l.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Component</dt>
              <dd class="mt-1 text-ink">${d(l.componentType||"n/a")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${d(l.evidence||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${d(l.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Fluent alternative</dt>
              <dd class="mt-1 text-muted">${d(l.fluentAlternative||"n/a")}</dd>
            </div>
            ${l.fluentAlternative?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Package</dt>
              <dd class="mt-1 font-mono text-xs text-accent">${d(l.fluentPackage||"")}</dd>
            </div>`:""}
          </dl>
        </article>
      `}),r+="</div></div></div>"}else a.length===0&&(r+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No risky implementations found.</p>');r+=`
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
  `,a.forEach(n=>{r+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${d(n.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase ${I(n.severity||"")}">${d((n.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${d(n.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${d(n.componentType||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${d(n.selector||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${d(P(n.boundingBox))}</td>
      </tr>
    `}),r+="</tbody></table></div>",a.length>10&&(r+=`<p class="mt-3 text-xs text-muted">... and ${d(a.length-10)} more annotated findings</p>`),r+=`
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
  `,r+=`
    <details class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <summary class="cursor-pointer font-serif text-xl">Component inventory (${d(i.length)})</summary>
      <p class="mt-2 text-sm text-muted">All detected components with source, risk, and confidence score.</p>
      ${Object.keys(u).length?`
      <div class="mt-4 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Component distribution</h4>
        <div class="mt-3 flex flex-wrap gap-2">
          ${Object.entries(u).sort((n,p)=>p[1]-n[1]).map(([n,p])=>`
              <span class="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-xs text-muted">
                <span class="font-semibold text-ink">${d(p)}</span>
                ${d(n)}
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
  `,i.slice(0,30).forEach(n=>{r+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-2 pr-3 text-muted text-xs">${d(n?.id||"")}</td>
        <td class="py-2 pr-3 text-xs">${d(n?.componentType||"")}</td>
        <td class="py-2 pr-3 text-xs text-muted">${d(n?.possibleSource||"")}</td>
        <td class="py-2 pr-3 text-xs ${I(n?.risk||"")}">${d((n?.risk||"").toUpperCase())}</td>
        <td class="py-2 pr-3 text-xs text-muted">${d(n?.confidence??"")}%</td>
        <td class="py-2 pr-3 text-xs text-muted">${d((n?.visibleText||"").substring(0,40))}</td>
        <td class="py-2 pr-3 text-xs text-muted">${d((n?.selector||"").substring(0,60))}</td>
      </tr>
    `}),r+="</tbody></table></div>",i.length>30&&(r+=`<p class="mt-3 text-xs text-muted">... and ${d(i.length-30)} more components</p>`),r+="</details>",r+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ca-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-ca-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,t.innerHTML=r,t.querySelectorAll("[data-ca-export-format]").forEach(n=>{n.addEventListener("click",async()=>{const p=n.getAttribute("data-ca-export-format");if(p==="pdf")await G(o,c);else if(p==="md"){const h=_(o),x=`component-audit-${new URL(o.url).hostname}-${new Date(o.timestamp||Date.now()).toISOString().slice(0,10)}`,l=new Blob([h],{type:"text/markdown;charset=utf-8"}),m=document.createElement("a");m.href=URL.createObjectURL(l),m.download=`${x}.md`,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL(m.href)}})})}function K(){const t=document.getElementById("component-audit-tool"),o=t?.dataset.componentAuditApiUrl||"",c=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),e=window.__COMPONENT_AUDIT_API_URL||(c?"http://localhost:3000/api/component-audit":o||`${window.location.origin}/api/component-audit`),a=e.replace(/\/api\/component-audit\/?$/,"/api/component-audit/pdf"),i=document.getElementById("component-audit-url"),u=document.getElementById("run-component-audit-btn"),s=document.getElementById("component-result-container");!t||!i||!u||!s||(window.location.hash==="#component-audit-tool"&&requestAnimationFrame(()=>{t.scrollIntoView({block:"start"})}),u.addEventListener("click",async()=>{const r=i.value.trim();if(!r){F(s,"Please enter a URL.");return}try{new URL(r.startsWith("http")?r:"https://"+r)}catch{F(s,"Please enter a valid URL.");return}u.disabled=!0,u.textContent="Running audit…",s.innerHTML="";try{const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:r})});if(!n.ok){let h=null;try{h=await n.json()}catch{h=null}F(s,U(h?.error),h?.hint||"Please try again in a moment.");return}const p=await n.json();q(s,p,a)}catch{F(s,"Unable to contact the audit service.","Check your connection and retry. If this persists, the API may be temporarily unavailable.")}finally{u.disabled=!1,u.textContent="Run Audit"}}))}export{K as initializeComponentAuditTool};
