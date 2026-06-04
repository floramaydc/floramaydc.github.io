import{E as I,a as k}from"./jspdf.plugin.autotable.BNWpDLH5.js";import"./preload-helper.BlTxHScW.js";function s(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function y(n,t,a){const p=s(t),d=a?s(a):"";n.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words>${p}</p>
      ${d?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${d}</p>`:""}
    </div>
  `}function A(n,t){const a=String(t||"").toLowerCase();return n===429?"The service is currently busy. Please retry in about 30-60 seconds.":n===502||n===503||n===504?"The audit service is temporarily unavailable or under maintenance. Please try again shortly.":n===408?"The page took too long to load. Retry once, then test a lighter page to confirm connectivity.":n===422||a.includes("could not reach")||a.includes("could not be resolved")?"Verify that the page is public, not login-gated, and not blocking automated browsers.":"Please try again in a moment. If this keeps happening, the audit service may be temporarily unavailable."}function L(n){const t=["Connecting to M.ai audit service","Opening page in a secure browser session","Inspecting component inventory and risks","Packaging your report"];let a=0;const p=()=>{const u=t.map((m,i)=>{const l=i===a;return`<li class="flex items-center gap-2 text-sm ${l?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${l?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${s(m)}</li>`}).join("");n.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running your audit</p>
        <p class="mt-2 mb-0 text-xs text-muted">This can take 10-60 seconds depending on page size and network conditions.</p>
        <ul class="mt-3 space-y-2">${u}</ul>
        <p class="mt-3 mb-0 text-xs text-muted">If this takes unusually long, the service may be busy or in maintenance. We'll show a clear message if that happens.</p>
      </div>
    `};p();const d=window.setInterval(()=>{a=(a+1)%t.length,p()},1800);return{stop(){window.clearInterval(d)}}}function R(n){const t=String(n||"").trim();if(!t)return"The audit request failed.";const a=t.replace(/^component audit failed:\s*/i,""),d=a.split(/browser logs?:/i)[0].trim()||a,u=d.toLowerCase();return u.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":u.includes("timeout")||u.includes("timed out")?"The audit timed out before the page finished loading.":u.includes("err_name_not_resolved")||u.includes("dns")?"The URL could not be resolved.":u.includes("net::err_")||u.includes("failed to fetch")?"The audit could not reach that URL.":d.length>220?`${d.slice(0,217)}...`:d}function w(n,t=10){return(Array.isArray(n?.findings)?n.findings:[]).slice(0,t).map((p,d)=>({...p,annotationId:p?.annotationId??d+1}))}function F(n){return n?`${n.x}, ${n.y}, ${n.width} × ${n.height}`:""}function P(n,t,a){return n.filter(p=>p?.boundingBox).map(p=>{const d=p.boundingBox,u=d.x/t*100,m=d.y/a*100,i=d.width/t*100,l=d.height/a*100;return`
        <div class="absolute ${j(p.severity)}" title="${s(p.rule||"")}" style="left:${u}%; top:${m}%; width:${i}%; height:${l}%;"></div>
        <div class="absolute z-10" style="left:${u}%; top:${m}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${s(p.annotationId)}</div>
        </div>
      `}).join("")}function T(n){return n==="high"?"text-red-700":n==="medium"?"text-orange-600":"text-emerald-700"}function U(n){return n==="high"?"bg-red-50 text-red-700 border border-red-200":n==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function j(n){return n==="high"?"border-2 border-red-500/90 bg-red-500/10":n==="medium"?"border-2 border-orange-400/90 bg-orange-400/10":"border border-emerald-400/60"}function M(n){const t=n?.summary||{},a=w(n,10),p=Array.isArray(n?.inventory)?n.inventory:[],d=n?.fluentMeta||{},u=n?.notice,m=Object.entries(t.componentDistribution||{}).map(([o,e])=>`  - ${o}: ${e}`).join(`
`),i=["# Component Audit","",`- URL: ${n?.url||""}`,`- Library context: ${n?.libraryContext||"Generic"}`,`- Timestamp: ${n?.timestamp||""}`,`- Total components: ${t.totalComponents??0}`,`- Custom: ${t.customComponentCount??0}  Native: ${t.nativeComponentCount??0}  Fluent: ${t.fluentComponentCount??0}`,`- Risk — High: ${t.riskSummary?.high??0}  Medium: ${t.riskSummary?.medium??0}  Low: ${t.riskSummary?.low??0}`];if(u&&i.push("",`> **Note:** ${u}`),d?.detected){const o=d.versionDetected?`\`${d.versionDetected}\` detected${d.versionLatest?` — latest is \`${d.versionLatest}\``:""}${d.isOutdated?" (outdated)":""}`:"version not pinned in script URLs";i.push("","## Fluent fingerprint","",`- \`fui-*\` elements on page: ${d.totalFuiElements??0}`,`- @fluentui/react-components: ${o}`,`- Storybook: ${d.storybookHome||"https://react.fluentui.dev"}`)}i.push("","## Component distribution","",m||"  (none)","","## Method","","- Observe: visit the page, capture screenshot, extract DOM inventory.","- Inventory: build a typed component list with source detection and confidence scores.","- Annotate: apply the Fluent rule pack to flag risky implementations.","- Recommend: map each finding to the appropriate Fluent component with explanation.","","## Annotations",""),a.length===0?i.push("No risky implementations found.",""):a.forEach(o=>{const e=o.detectedProps&&Object.keys(o.detectedProps).length?Object.entries(o.detectedProps).map(([r,b])=>`${r}=${b}`).join(", "):"—";i.push(`### Annotation ${o.annotationId} — ${o.rule||"Finding"}`,"",`- Risk: ${o.severity}`,`- Component type: ${o.componentType}`,`- Fluent component: ${o.fluentComponent?`\`${o.fluentComponent}\``:"—"}`,`- Storybook: ${o.storybookUrl||"—"}`,`- Detected props: ${e}`,`- Selector: ${o.selector||""}`,`- Bounding box: ${F(o.boundingBox)}`,`- Evidence: ${o.evidence||""}`,`- Recommendation: ${o.recommendation||""}`,`- Fluent alternative: ${o.fluentAlternative||"n/a"}`,`- Package: ${o.fluentPackage||""}`,`- Benefits: ${(o.benefits||[]).join(", ")}`,`- Explanation: ${o.explanation||""}`,"")}),i.push("## Findings",""),a.length===0?i.push("No issues found."):(i.push("| # | Risk | Rule | Type | Selector | Fluent Alternative |","|---|---|---|---|---|---|"),a.forEach(o=>{i.push(`| ${o.annotationId} | ${o.severity} | ${o.rule} | ${o.componentType} | ${o.selector||""} | ${o.fluentAlternative||"n/a"} |`)})),i.push("","## Screenshot","");const l=n?.screenshot;return l?.data?i.push(`![Component audit screenshot](data:${l.mimeType||"image/png"};base64,${l.data})`):i.push("Screenshot unavailable."),i.push("","## Component Inventory","","| ID | Type | Fluent | Props | Source | Risk | Conf. | Text | Selector | Docs |","|---|---|---|---|---|---|---|---|---|---|"),p.forEach(o=>{const e=o?.detectedProps&&Object.keys(o.detectedProps).length?Object.entries(o.detectedProps).map(([c,g])=>`${c}=${g}`).join(" "):"—",r=o?.storybookUrl?`[docs](${o.storybookUrl})`:"—",b=String(o?.visibleText||"").replace(/\|/g,"\\|"),h=String(o?.selector||"").replace(/\|/g,"\\|");i.push(`| ${o?.id||""} | ${o?.componentType||""} | ${o?.fluentComponent||"—"} | ${e} | ${o?.possibleSource||""} | ${o?.risk||""} | ${o?.confidence??""}% | ${b} | ${h} | ${r} |`)}),i.push("","## M.ai Context","","```json",JSON.stringify(n?.maiContext||{},null,2),"```"),i.join(`
`)}function D(n){const t=new I({orientation:"landscape",unit:"pt",format:"letter"}),a=n?.summary||{},p=w(n,10),d=Array.isArray(n?.inventory)?n.inventory:[],u=n?.screenshot,m=`component-audit-${new URL(n.url).hostname}-${new Date(n.timestamp||Date.now()).toISOString().slice(0,10)}`,i=t.internal.pageSize.getWidth(),l=40,o=i-l*2;let e=48;if(t.setFont("helvetica","bold"),t.setFontSize(18),t.text("Component Audit by M.ai",l,e),e+=18,t.setFont("helvetica","normal"),t.setFontSize(10),t.text(`URL: ${n.url}`,l,e),e+=14,t.text(`Library context: ${n.libraryContext||"Fluent"}`,l,e),e+=14,t.text(`Timestamp: ${n.timestamp||""}`,l,e),e+=18,k(t,{startY:e,margin:{left:l,right:l},head:[["Total","Custom","Native","Fluent","High Risk","Medium Risk"]],body:[[String(a.totalComponents??0),String(a.customComponentCount??0),String(a.nativeComponentCount??0),String(a.fluentComponentCount??0),String(a.riskSummary?.high??0),String(a.riskSummary?.medium??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),e=t.lastAutoTable.finalY+18,u?.data){t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Screenshot with annotations",l,e),e+=10;const r=Number(u.width||1),b=Number(u.height||1),h=Math.max(220,Math.round(o*(b/r)));t.addImage(`data:${u.mimeType||"image/png"};base64,${u.data}`,"PNG",l,e,o,h);const c=o/r,g=h/b;p.forEach(x=>{if(!x.boundingBox)return;const v=l+x.boundingBox.x*c,$=e+x.boundingBox.y*g,S=x.boundingBox.width*c,C=x.boundingBox.height*g;if(S>0&&C>0){const f=x.severity==="high";t.setDrawColor(f?204:234,f?51:88,f?51:12),t.setLineWidth(1),t.rect(v,$,S,C),t.setFillColor(f?122:160,f?40:80,f?40:10),t.circle(v+8,$+8,8,"F"),t.setTextColor(255,255,255),t.setFont("helvetica","bold"),t.setFontSize(8),t.text(String(x.annotationId),v+8,$+10.5,{align:"center"}),t.setTextColor(0,0,0)}}),e+=h+18}t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Annotations",l,e),e+=8,p.length===0?(t.setFont("helvetica","normal"),t.setFontSize(10),t.text("No risky implementations found.",l,e+12),e+=30):(k(t,{startY:e,margin:{left:l,right:l},head:[["#","Risk","Rule","Type","Fluent component","Fluent alternative","Storybook"]],body:p.map(r=>[String(r.annotationId),String(r.severity||""),String(r.rule||""),String(r.componentType||""),String(r.fluentComponent||"—"),String(r.fluentAlternative||"n/a"),String(r.storybookUrl||"—")]),styles:{fontSize:7.5,cellPadding:3,valign:"top",overflow:"linebreak"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:22},1:{cellWidth:44},2:{cellWidth:110},3:{cellWidth:70},4:{cellWidth:90},5:{cellWidth:110},6:{cellWidth:266}}}),e=t.lastAutoTable.finalY+18),t.setFont("helvetica","bold"),t.setFontSize(14),t.text("Component inventory",l,e),e+=8,k(t,{startY:e,margin:{left:l,right:l},head:[["ID","Type","Fluent","Props","Source","Risk","Conf.","Text","Selector","Storybook"]],body:d.map(r=>{const b=r?.detectedProps&&Object.keys(r.detectedProps).length?Object.entries(r.detectedProps).map(([h,c])=>`${h}=${c}`).join(" "):"—";return[String(r?.id||""),String(r?.componentType||""),String(r?.fluentComponent||"—"),b,String(r?.possibleSource||""),String(r?.risk||""),`${r?.confidence??""}%`,String(r?.visibleText||"").substring(0,40),String(r?.selector||"").substring(0,80),String(r?.storybookUrl||"—")]}),styles:{fontSize:6.5,cellPadding:2,valign:"top",overflow:"linebreak"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:40},1:{cellWidth:54},2:{cellWidth:70},3:{cellWidth:90},4:{cellWidth:44},5:{cellWidth:36},6:{cellWidth:30},7:{cellWidth:96},8:{cellWidth:110},9:{cellWidth:142}}}),t.save(`${m}.pdf`)}function O(n,t){const a=t?.summary||{},p=w(t,10),d=Array.isArray(t?.inventory)?t.inventory:[],u=a.componentDistribution||{},m=p.length;let i=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <div>
          <p class="mb-1 text-xs text-muted">Components</p>
          <p class="m-0 text-xl font-bold">${s(a.totalComponents??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${s(m)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">High Risk</p>
          <p class="m-0 text-xl font-bold text-red-700">${s(a.riskSummary?.high??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Medium Risk</p>
          <p class="m-0 text-xl font-bold text-orange-600">${s(a.riskSummary?.medium??0)}</p>
        </div>
      </div>
      <div class="mt-5 rounded border border-ink/10 bg-paper p-4 text-sm text-muted dark:bg-cream/5">
        <p class="m-0">
          Source mix:
          <span class="font-semibold text-ink">${s(a.customComponentCount??0)}</span> custom,
          <span class="font-semibold text-ink">${s(a.nativeComponentCount??0)}</span> native,
          <span class="font-semibold text-ink">${s(a.fluentComponentCount??0)}</span> Fluent UI,
          <span class="font-semibold text-ink">${s(a.materialComponentCount??0)}</span> Material UI,
          <span class="font-semibold text-ink">${s(a.carbonComponentCount??0)}</span> Carbon.
        </p>
        ${(t?.librariesDetected||[]).length?`
        <p class="mt-3 m-0">
          Detected libraries:
          ${(t.librariesDetected||[]).map(e=>`<span class="ml-1 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${e==="fluent"?"bg-blue-50 text-blue-800 border-blue-200":e==="material"?"bg-indigo-50 text-indigo-800 border-indigo-200":e==="carbon"?"bg-slate-100 text-slate-800 border-slate-300":"bg-cream text-ink border-ink/20"}">${s(e==="fluent"?"Fluent UI":e==="material"?"Material UI":e==="carbon"?"Carbon":e)}</span>`).join("")}
        </p>`:""}
      </div>
    </div>
  `;const l=t?.fluentMeta||{},o=t?.notice;if(o&&(i+=`
      <div class="mb-6 rounded border border-ink/15 bg-cream/40 p-4 text-sm text-ink dark:bg-cream/10">
        <p class="m-0"><strong>Heads up:</strong> ${s(o)}</p>
      </div>
    `),l?.detected){const e=l.versionDetected?`v${s(l.versionDetected)}`:"version unpinned",r=l.versionLatest?`v${s(l.versionLatest)}`:"—",b=l.isOutdated?'<span class="ml-2 inline-flex items-center rounded-full border border-orange-400 px-2 py-0.5 text-xs font-semibold text-orange-700">outdated</span>':"";i+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl">Library fingerprint — Fluent UI</h3>
        <ul class="mt-3 space-y-1 text-sm text-muted">
          <li><span class="text-ink"><code>fui-*</code> elements on page:</span> ${s(l.totalFuiElements??0)}</li>
          <li><span class="text-ink">@fluentui/react-components:</span> ${e} detected · latest ${r}${b}</li>
          <li><span class="text-ink">Storybook:</span> <a class="text-accent underline" href="${s(l.storybookHome||"https://react.fluentui.dev")}" target="_blank" rel="noreferrer noopener">react.fluentui.dev</a></li>
        </ul>
      </div>
    `}if(i+=`
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
  `,t?.screenshot?.data){const e=t.screenshot,r=Number(e.width||1),b=Number(e.height||1),h=P(p,r,b);i+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${s(e.mimeType||"image/png")};base64,${e.data}"
            alt="Component audit screenshot with annotations"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${h}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,p.forEach(c=>{U(c.severity),i+=`
        <article id="ca-annotation-${s(c.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-paper">${s(c.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${s((c.severity||"").toUpperCase())} RISK</p>
              <h4 class="mt-1 font-serif text-base">${s(c.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Component</dt>
              <dd class="mt-1 text-ink">${s(c.componentType||"n/a")}</dd>
            </div>
            ${c.fluentComponent?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Fluent component</dt>
              <dd class="mt-1 text-ink"><code>${s(c.fluentComponent)}</code>${c.storybookUrl?` · <a class="text-accent underline" href="${s(c.storybookUrl)}" target="_blank" rel="noreferrer noopener">Storybook docs</a>`:""}</dd>
            </div>`:""}
            ${c.detectedProps&&Object.keys(c.detectedProps).length?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Detected props</dt>
              <dd class="mt-1 flex flex-wrap gap-1">${Object.entries(c.detectedProps).map(([g,x])=>`<span class="inline-block rounded-full border border-ink/15 px-2 py-0.5 text-[11px] text-muted">${s(g)}=${s(String(x))}</span>`).join("")}</dd>
            </div>`:""}
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${s(c.evidence||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${s(c.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Fluent alternative</dt>
              <dd class="mt-1 text-muted">${s(c.fluentAlternative||"n/a")}</dd>
            </div>
            ${c.fluentAlternative?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Package</dt>
              <dd class="mt-1 font-mono text-xs text-accent">${s(c.fluentPackage||"")}</dd>
            </div>`:""}
          </dl>
        </article>
      `}),i+="</div></div></div>"}else p.length===0&&(i+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No risky implementations found.</p>');i+=`
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
  `,p.forEach(e=>{i+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${s(e.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase ${T(e.severity||"")}">${s((e.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${s(e.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${s(e.componentType||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${s(e.selector||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${s(F(e.boundingBox))}</td>
      </tr>
    `}),i+="</tbody></table></div>",p.length>10&&(i+=`<p class="mt-3 text-xs text-muted">... and ${s(p.length-10)} more annotated findings</p>`),i+=`
      <div class="mt-6 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Method</h4>
        <ul class="mt-3 space-y-2 text-sm text-muted">
          <li>Observe: visit the page, capture screenshot, and extract the DOM inventory.</li>
          <li>Inventory: build a typed component list with source detection — Fluent UI, Material UI, Carbon, native, or custom — plus confidence scores.</li>
          <li>Annotate: apply the Fluent rule pack to flag risky implementations. Material UI and Carbon rule packs are in progress.</li>
          <li>Recommend: map each finding to the appropriate library component with explanation and benefits.</li>
        </ul>
      </div>
    </section>
  `,i+=`
    <details class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <summary class="cursor-pointer font-serif text-xl">Component inventory (${s(d.length)})</summary>
      <p class="mt-2 text-sm text-muted">All detected components with source, risk, and confidence score.</p>
      ${Object.keys(u).length?`
      <div class="mt-4 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Component distribution</h4>
        <div class="mt-3 flex flex-wrap gap-2">
          ${Object.entries(u).sort((e,r)=>r[1]-e[1]).map(([e,r])=>`
              <span class="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-xs text-muted">
                <span class="font-semibold text-ink">${s(r)}</span>
                ${s(e)}
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
              <th class="py-2 pr-3 font-semibold">Fluent</th>
              <th class="py-2 pr-3 font-semibold">Props</th>
              <th class="py-2 pr-3 font-semibold">Source</th>
              <th class="py-2 pr-3 font-semibold">Risk</th>
              <th class="py-2 pr-3 font-semibold">Conf.</th>
              <th class="py-2 pr-3 font-semibold">Text</th>
              <th class="py-2 pr-3 font-semibold">Selector</th>
              <th class="py-2 pr-3 font-semibold">Docs</th>
            </tr>
          </thead>
          <tbody>
  `,d.forEach(e=>{const r=e?.detectedProps?Object.entries(e.detectedProps):[],b=r.length?r.map(([g,x])=>`<span class="mr-1 inline-block rounded-full border border-ink/15 px-2 py-0.5 text-[10px] text-muted">${s(g)}=${s(String(x))}</span>`).join(""):'<span class="text-muted">—</span>',h=e?.storybookUrl?`<a class="text-accent underline" href="${s(e.storybookUrl)}" target="_blank" rel="noreferrer noopener">docs</a>`:'<span class="text-muted">—</span>',c=e?.fluentComponent?`<code class="text-ink">${s(e.fluentComponent)}</code>`:'<span class="text-muted">—</span>';i+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-2 pr-3 text-muted text-xs">${s(e?.id||"")}</td>
        <td class="py-2 pr-3 text-xs">${s(e?.componentType||"")}</td>
        <td class="py-2 pr-3 text-xs">${c}</td>
        <td class="py-2 pr-3 text-xs">${b}</td>
        <td class="py-2 pr-3 text-xs text-muted">${s(e?.possibleSource||"")}</td>
        <td class="py-2 pr-3 text-xs ${T(e?.risk||"")}">${s((e?.risk||"").toUpperCase())}</td>
        <td class="py-2 pr-3 text-xs text-muted">${s(e?.confidence??"")}%</td>
        <td class="py-2 pr-3 text-xs text-muted">${s((e?.visibleText||"").substring(0,40))}</td>
        <td class="py-2 pr-3 text-xs text-muted">${s((e?.selector||"").substring(0,60))}</td>
        <td class="py-2 pr-3 text-xs">${h}</td>
      </tr>
    `}),i+="</tbody></table></div>",i+=`<p class="mt-3 text-xs text-muted">${s(d.length)} components total — the downloadable report preserves the full list.</p>`,i+="</details>",i+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ca-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-ca-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,n.innerHTML=i,n.querySelectorAll("[data-ca-export-format]").forEach(e=>{e.addEventListener("click",()=>{const r=e.getAttribute("data-ca-export-format");if(r==="pdf")D(t);else if(r==="md"){const b=M(t),h=`component-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`,c=new Blob([b],{type:"text/markdown;charset=utf-8"}),g=document.createElement("a");g.href=URL.createObjectURL(c),g.download=`${h}.md`,document.body.appendChild(g),g.click(),g.remove(),URL.revokeObjectURL(g.href)}})})}function W(){const n=document.getElementById("component-audit-tool"),t=n?.dataset.componentAuditApiUrl||"",a=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),p=window.__COMPONENT_AUDIT_API_URL||t||(a?"http://localhost:3000/api/component-audit":`${window.location.origin}/api/component-audit`),d=document.getElementById("component-audit-url"),u=document.getElementById("run-component-audit-btn"),m=document.getElementById("component-result-container");!n||!d||!u||!m||(window.location.hash==="#component-audit-tool"&&requestAnimationFrame(()=>{n.scrollIntoView({block:"start"})}),u.addEventListener("click",async()=>{const i=d.value.trim();if(!i){y(m,"Please enter a URL.");return}if(typeof navigator<"u"&&!navigator.onLine){y(m,"You appear to be offline.","Reconnect to the internet, then run the audit again.");return}try{new URL(i.startsWith("http")?i:"https://"+i)}catch{y(m,"Please enter a valid URL.");return}u.disabled=!0,u.textContent="Running audit...";const l=L(m);try{const o=new AbortController,e=window.setTimeout(()=>o.abort(),9e4),r=await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:i}),signal:o.signal});if(window.clearTimeout(e),!r.ok){let h=null;try{h=await r.json()}catch{h=null}const c=R(h?.error);y(m,c,h?.hint||A(r.status,c));return}const b=await r.json();O(m,b)}catch(o){const e=String(o?.message||"").toLowerCase(),r=o?.name==="AbortError"||e.includes("aborted");y(m,r?"This audit took too long to finish.":"Unable to contact the audit service.",r?"The service may be busy right now. Please retry in a minute.":"Check your connection and retry. If this persists, the API may be temporarily unavailable.")}finally{l.stop(),u.disabled=!1,u.textContent="Run Audit"}}))}export{W as initializeComponentAuditTool};
