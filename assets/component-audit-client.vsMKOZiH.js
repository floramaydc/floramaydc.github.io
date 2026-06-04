import{E as L,a as w}from"./jspdf.plugin.autotable.BNWpDLH5.js";import"./preload-helper.BlTxHScW.js";function s(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function k(t,e,i){const m=s(e),p=i?s(i):"";t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words>${m}</p>
      ${p?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${p}</p>`:""}
    </div>
  `}function U(t,e){const i=String(e||"").toLowerCase();return t===429?"The service is currently busy. Please retry in about 30-60 seconds.":t===502||t===503||t===504?"The audit service is temporarily unavailable or under maintenance. Please try again shortly.":t===408?"The page took too long to load. Retry once, then test a lighter page to confirm connectivity.":t===422||i.includes("could not reach")||i.includes("could not be resolved")?"Verify that the page is public, not login-gated, and not blocking automated browsers.":"Please try again in a moment. If this keeps happening, the audit service may be temporarily unavailable."}function P(t){const e=["Connecting to M.ai audit service","Opening page in a secure browser session","Inspecting component inventory and risks","Packaging your report"];let i=0;const m=()=>{const u=e.map((x,r)=>{const c=r===i;return`<li class="flex items-center gap-2 text-sm ${c?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${c?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${s(x)}</li>`}).join("");t.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running your audit</p>
        <p class="mt-2 mb-0 text-xs text-muted">This can take 10-60 seconds depending on page size and network conditions.</p>
        <ul class="mt-3 space-y-2">${u}</ul>
        <p class="mt-3 mb-0 text-xs text-muted">If this takes unusually long, the service may be busy or in maintenance. We'll show a clear message if that happens.</p>
      </div>
    `};m();const p=window.setInterval(()=>{i=(i+1)%e.length,m()},1800);return{stop(){window.clearInterval(p)}}}function A(t){const e=String(t||"").trim();if(!e)return"The audit request failed.";const i=e.replace(/^component audit failed:\s*/i,""),p=i.split(/browser logs?:/i)[0].trim()||i,u=p.toLowerCase();return u.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":u.includes("timeout")||u.includes("timed out")?"The audit timed out before the page finished loading.":u.includes("err_name_not_resolved")||u.includes("dns")?"The URL could not be resolved.":u.includes("net::err_")||u.includes("failed to fetch")?"The audit could not reach that URL.":p.length>220?`${p.slice(0,217)}...`:p}function C(t,e=10){return(Array.isArray(t?.findings)?t.findings:[]).slice(0,e).map((m,p)=>({...m,annotationId:m?.annotationId??p+1}))}function I(t){return t?`${t.x}, ${t.y}, ${t.width} × ${t.height}`:""}function F(t,e,i){return t.filter(m=>m?.boundingBox).map(m=>{const p=m.boundingBox,u=p.x/e*100,x=p.y/i*100,r=p.width/e*100,c=p.height/i*100;return`
        <div class="absolute ${M(m.severity)}" title="${s(m.rule||"")}" style="left:${u}%; top:${x}%; width:${r}%; height:${c}%;"></div>
        <div class="absolute z-10" style="left:${u}%; top:${x}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${s(m.annotationId)}</div>
        </div>
      `}).join("")}function T(t){return t==="high"?"text-red-700":t==="medium"?"text-orange-600":"text-emerald-700"}function R(t){return t==="high"?"bg-red-50 text-red-700 border border-red-200":t==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function M(t){return t==="high"?"border-2 border-red-500/90 bg-red-500/10":t==="medium"?"border-2 border-orange-400/90 bg-orange-400/10":"border border-emerald-400/60"}function j(t){const e=t?.summary||{},i=C(t,10),m=Array.isArray(t?.inventory)?t.inventory:[],p=t?.fluentMeta||{},u=t?.notice,x=Object.entries(e.componentDistribution||{}).map(([n,l])=>`  - ${n}: ${l}`).join(`
`),r=["# Component Audit","",`- URL: ${t?.url||""}`,`- Library context: ${t?.libraryContext||"Generic"}`,`- Timestamp: ${t?.timestamp||""}`,`- Total components: ${e.totalComponents??0}`,`- Custom: ${e.customComponentCount??0}  Native: ${e.nativeComponentCount??0}  Carbon: ${e.carbonComponentCount??0}  Fluent UI: ${e.fluentComponentCount??0}  Material UI: ${e.materialComponentCount??0}`,`- Risk — High: ${e.riskSummary?.high??0}  Medium: ${e.riskSummary?.medium??0}  Low: ${e.riskSummary?.low??0}`];if(u&&r.push("",`> **Note:** ${u}`),p?.detected){const n=p.versionDetected?`\`${p.versionDetected}\` detected${p.versionLatest?` — latest is \`${p.versionLatest}\``:""}${p.isOutdated?" (outdated)":""}`:"version not pinned in script URLs";r.push("","## Fluent fingerprint","",`- \`fui-*\` elements on page: ${p.totalFuiElements??0}`,`- @fluentui/react-components: ${n}`,`- Storybook: ${p.storybookHome||"https://react.fluentui.dev"}`)}r.push("","## Component distribution","",x||"  (none)","","## Method","","- Observe: visit the page, capture screenshot, extract DOM inventory.","- Inventory: build a typed component list with source detection and confidence scores.","- Annotate: apply per-library rule packs (Carbon / Fluent UI / Material UI) to flag risky implementations.","- Recommend: map each finding to the appropriate library component with explanation. Pages with no design system get generic accessibility guidance.","","## Annotations",""),i.length===0?r.push("No risky implementations found.",""):i.forEach(n=>{const l=n.detectedProps&&Object.keys(n.detectedProps).length?Object.entries(n.detectedProps).map(([a,o])=>`${a}=${o}`).join(", "):"—";r.push(`### Annotation ${n.annotationId} — ${n.rule||"Finding"}`,"",`- Risk: ${n.severity}`,`- Component type: ${n.componentType}`,`- Fluent component: ${n.fluentComponent?`\`${n.fluentComponent}\``:"—"}`,`- Storybook: ${n.storybookUrl||"—"}`,`- Detected props: ${l}`,`- Selector: ${n.selector||""}`,`- Bounding box: ${I(n.boundingBox)}`,`- Evidence: ${n.evidence||""}`,`- Recommendation: ${n.recommendation||""}`,`- Library: ${n.libraryLabel||"none detected"}`,`- Suggested component: ${n.recommendedComponent||n.fluentAlternative||"n/a"}`,`- Package: ${n.recommendedPackage||n.fluentPackage||"n/a"}`,`- Benefits: ${(n.benefits||[]).join(", ")}`,`- Explanation: ${n.explanation||""}`,"")}),r.push("## Findings",""),i.length===0?r.push("No issues found."):(r.push("| # | Risk | Rule | Type | Selector | Library | Suggested component |","|---|---|---|---|---|---|---|"),i.forEach(n=>{r.push(`| ${n.annotationId} | ${n.severity} | ${n.rule} | ${n.componentType} | ${n.selector||""} | ${n.libraryLabel||"—"} | ${n.recommendedComponent||n.fluentAlternative||"n/a"} |`)})),r.push("","## Screenshot","");const c=t?.screenshot;return c?.data?r.push(`![Component audit screenshot](data:${c.mimeType||"image/png"};base64,${c.data})`):r.push("Screenshot unavailable."),r.push("","## Component Inventory","","| ID | Type | Library component | Props | Source | Risk | Conf. | Text | Selector | Docs |","|---|---|---|---|---|---|---|---|---|---|"),m.forEach(n=>{const l=n?.detectedProps&&Object.keys(n.detectedProps).length?Object.entries(n.detectedProps).map(([g,h])=>`${g}=${h}`).join(" "):"—",a=n?.storybookUrl?`[docs](${n.storybookUrl})`:"—",o=String(n?.visibleText||"").replace(/\|/g,"\\|"),b=String(n?.selector||"").replace(/\|/g,"\\|");r.push(`| ${n?.id||""} | ${n?.componentType||""} | ${n?.libraryComponentName||n?.fluentComponent||"—"} | ${l} | ${n?.possibleSource||""} | ${n?.risk||""} | ${n?.confidence??""}% | ${o} | ${b} | ${a} |`)}),r.push("","## M.ai Context","","```json",JSON.stringify(t?.maiContext||{},null,2),"```"),r.join(`
`)}function D(t){const e=new L({orientation:"landscape",unit:"pt",format:"letter"}),i=t?.summary||{},m=C(t,10),p=Array.isArray(t?.inventory)?t.inventory:[],u=t?.screenshot,x=`component-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`,r=e.internal.pageSize.getWidth(),c=40,n=r-c*2;let l=48;if(e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Component Audit by M.ai",c,l),l+=18,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`URL: ${t.url}`,c,l),l+=14,e.text(`Library context: ${t.libraryContext||"No design system detected"}`,c,l),l+=14,e.text(`Timestamp: ${t.timestamp||""}`,c,l),l+=18,w(e,{startY:l,margin:{left:c,right:c},head:[["Total","Custom","Native","Carbon","Fluent UI","Material UI","High Risk","Medium Risk"]],body:[[String(i.totalComponents??0),String(i.customComponentCount??0),String(i.nativeComponentCount??0),String(i.carbonComponentCount??0),String(i.fluentComponentCount??0),String(i.materialComponentCount??0),String(i.riskSummary?.high??0),String(i.riskSummary?.medium??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),l=e.lastAutoTable.finalY+18,u?.data){e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Screenshot with annotations",c,l),l+=10;const a=Number(u.width||1),o=Number(u.height||1),b=Math.max(220,Math.round(n*(o/a)));e.addImage(`data:${u.mimeType||"image/png"};base64,${u.data}`,"PNG",c,l,n,b);const g=n/a,h=b/o;m.forEach(d=>{if(!d.boundingBox)return;const y=c+d.boundingBox.x*g,f=l+d.boundingBox.y*h,$=d.boundingBox.width*g,S=d.boundingBox.height*h;if($>0&&S>0){const v=d.severity==="high";e.setDrawColor(v?204:234,v?51:88,v?51:12),e.setLineWidth(1),e.rect(y,f,$,S),e.setFillColor(v?122:160,v?40:80,v?40:10),e.circle(y+8,f+8,8,"F"),e.setTextColor(255,255,255),e.setFont("helvetica","bold"),e.setFontSize(8),e.text(String(d.annotationId),y+8,f+10.5,{align:"center"}),e.setTextColor(0,0,0)}}),l+=b+18}e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Annotations",c,l),l+=8,m.length===0?(e.setFont("helvetica","normal"),e.setFontSize(10),e.text("No risky implementations found.",c,l+12),l+=30):(w(e,{startY:l,margin:{left:c,right:c},head:[["#","Risk","Rule","Type","Library","Suggested component","Storybook"]],body:m.map(a=>[String(a.annotationId),String(a.severity||""),String(a.rule||""),String(a.componentType||""),String(a.libraryLabel||"—"),String(a.recommendedComponent||a.fluentAlternative||"n/a"),String(a.storybookUrl||"—")]),styles:{fontSize:7.5,cellPadding:3,valign:"top",overflow:"linebreak"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:22},1:{cellWidth:44},2:{cellWidth:110},3:{cellWidth:70},4:{cellWidth:90},5:{cellWidth:110},6:{cellWidth:266}}}),l=e.lastAutoTable.finalY+18),e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Component inventory",c,l),l+=8,w(e,{startY:l,margin:{left:c,right:c},head:[["ID","Type","Library component","Props","Source","Risk","Conf.","Text","Selector","Storybook"]],body:p.map(a=>{const o=a?.detectedProps&&Object.keys(a.detectedProps).length?Object.entries(a.detectedProps).map(([b,g])=>`${b}=${g}`).join(" "):"—";return[String(a?.id||""),String(a?.componentType||""),String(a?.libraryComponentName||a?.fluentComponent||"—"),o,String(a?.possibleSource||""),String(a?.risk||""),`${a?.confidence??""}%`,String(a?.visibleText||"").substring(0,40),String(a?.selector||"").substring(0,80),String(a?.storybookUrl||"—")]}),styles:{fontSize:6.5,cellPadding:2,valign:"top",overflow:"linebreak"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:40},1:{cellWidth:54},2:{cellWidth:70},3:{cellWidth:90},4:{cellWidth:44},5:{cellWidth:36},6:{cellWidth:30},7:{cellWidth:96},8:{cellWidth:110},9:{cellWidth:142}}}),e.save(`${x}.pdf`)}function O(t,e){const i=e?.summary||{},m=C(e,10),p=Array.isArray(e?.inventory)?e.inventory:[],u=i.componentDistribution||{},x=m.length;let r=`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <div>
          <p class="mb-1 text-xs text-muted">Components</p>
          <p class="m-0 text-xl font-bold">${s(i.totalComponents??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${s(x)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">High Risk</p>
          <p class="m-0 text-xl font-bold text-red-700">${s(i.riskSummary?.high??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Medium Risk</p>
          <p class="m-0 text-xl font-bold text-orange-600">${s(i.riskSummary?.medium??0)}</p>
        </div>
      </div>
      <div class="mt-5 rounded border border-ink/10 bg-paper p-4 text-sm text-muted dark:bg-cream/5">
        <p class="m-0">
          Source mix:
          <span class="font-semibold text-ink">${s(i.customComponentCount??0)}</span> custom,
          <span class="font-semibold text-ink">${s(i.nativeComponentCount??0)}</span> native,
          <span class="font-semibold text-ink">${s(i.carbonComponentCount??0)}</span> Carbon,
          <span class="font-semibold text-ink">${s(i.fluentComponentCount??0)}</span> Fluent UI,
          <span class="font-semibold text-ink">${s(i.materialComponentCount??0)}</span> Material UI.
        </p>
        ${(e?.librariesDetected||[]).length?`
        <p class="mt-3 m-0">
          Detected libraries:
          ${(e.librariesDetected||[]).map(o=>`<span class="ml-1 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${o==="fluent"?"bg-blue-50 text-blue-800 border-blue-200":o==="material"?"bg-indigo-50 text-indigo-800 border-indigo-200":o==="carbon"?"bg-slate-100 text-slate-800 border-slate-300":"bg-cream text-ink border-ink/20"}">${s(o==="fluent"?"Fluent UI":o==="material"?"Material UI":o==="carbon"?"Carbon":o)}</span>`).join("")}
        </p>`:""}
      </div>
    </div>
  `;const c=e?.fluentMeta||{},n=e?.notice,l=e?.librariesDetected||[],a=e?.frameworkMeta||{frameworks:[],generator:null};if(n&&(r+=`
      <div class="mb-6 rounded border border-ink/15 bg-cream/40 p-4 text-sm text-ink dark:bg-cream/10">
        <p class="m-0"><strong>Heads up:</strong> ${s(n)}</p>
      </div>
    `),l.length>0){const o=["carbon","fluent","material"],g=[...l].sort((h,d)=>o.indexOf(h)-o.indexOf(d)).map(h=>{if(h==="fluent"){const d=c.versionDetected?`v${s(c.versionDetected)}`:"version unpinned",y=c.versionLatest?`v${s(c.versionLatest)}`:"—",f=c.isOutdated?'<span class="ml-2 inline-flex items-center rounded-full border border-orange-400 px-2 py-0.5 text-xs font-semibold text-orange-700">outdated</span>':"";return`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Fluent UI</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink"><code>fui-*</code> elements:</span> ${s(c.totalFuiElements??0)}</li>
              <li><span class="text-ink">@fluentui/react-components:</span> ${d} · latest ${y}${f}</li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://react.fluentui.dev" target="_blank" rel="noreferrer noopener">react.fluentui.dev</a></li>
            </ul>
          </div>`}return h==="material"?`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Material UI</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink">Detected via:</span> <code>Mui*-root</code>, <code>mdc-*</code>, <code>m3-*</code>, or <code>material-icons</code></li>
              <li><span class="text-ink">Suggested package:</span> <code>@mui/material</code></li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://mui.com/material-ui/" target="_blank" rel="noreferrer noopener">mui.com</a> · <a class="text-accent underline" href="https://m3.material.io" target="_blank" rel="noreferrer noopener">m3.material.io</a></li>
            </ul>
          </div>`:h==="carbon"?`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Carbon</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink">Detected via:</span> <code>cds--*</code>, <code>bx--*</code>, <code>c4p--*</code></li>
              <li><span class="text-ink">Suggested package:</span> <code>@carbon/react</code></li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://carbondesignsystem.com" target="_blank" rel="noreferrer noopener">carbondesignsystem.com</a></li>
            </ul>
          </div>`:""}).join("");r+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl">Design system fingerprint</h3>
        <div class="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${g}</div>
      </div>
    `}if((a.frameworks||[]).length||a.generator){const o=(a.frameworks||[]).map(b=>{const g=b.version?` <span class="text-muted">v${s(b.version)}</span>`:"";return`<span class="inline-flex items-center rounded-full border border-ink/15 bg-cream/40 px-2.5 py-0.5 text-xs font-semibold text-ink dark:bg-cream/10">${s(b.name)}${g}</span>`}).join(" ");r+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl">Built with</h3>
        <p class="mt-2 text-sm text-muted">Framework / build tool detected via <code>&lt;meta name="generator"&gt;</code> and runtime hints. This is a separate dimension from the UI component library — frameworks like Astro, Next.js, or SvelteKit don't ship UI components themselves.</p>
        <div class="mt-3 flex flex-wrap gap-2">${o||'<span class="text-muted text-sm">No framework signature found.</span>'}</div>
        ${a.generator?`<p class="mt-3 text-xs text-muted"><code>&lt;meta name="generator"&gt;</code>: ${s(a.generator)}</p>`:""}
      </div>
    `}if(r+=`
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
  `,e?.screenshot?.data){const o=e.screenshot,b=Number(o.width||1),g=Number(o.height||1),h=F(m,b,g);r+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${s(o.mimeType||"image/png")};base64,${o.data}"
            alt="Component audit screenshot with annotations"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${h}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,m.forEach(d=>{R(d.severity),r+=`
        <article id="ca-annotation-${s(d.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-paper">${s(d.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">${s((d.severity||"").toUpperCase())} RISK</p>
              <h4 class="mt-1 font-serif text-base">${s(d.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Component</dt>
              <dd class="mt-1 text-ink">${s(d.componentType||"n/a")}</dd>
            </div>
            ${d.fluentComponent?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Fluent component</dt>
              <dd class="mt-1 text-ink"><code>${s(d.fluentComponent)}</code>${d.storybookUrl?` · <a class="text-accent underline" href="${s(d.storybookUrl)}" target="_blank" rel="noreferrer noopener">Storybook docs</a>`:""}</dd>
            </div>`:""}
            ${d.detectedProps&&Object.keys(d.detectedProps).length?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Detected props</dt>
              <dd class="mt-1 flex flex-wrap gap-1">${Object.entries(d.detectedProps).map(([y,f])=>`<span class="inline-block rounded-full border border-ink/15 px-2 py-0.5 text-[11px] text-muted">${s(y)}=${s(String(f))}</span>`).join("")}</dd>
            </div>`:""}
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${s(d.evidence||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${s(d.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Library</dt>
              <dd class="mt-1 text-muted">${s(d.libraryLabel||"None detected")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested component</dt>
              <dd class="mt-1 text-muted">${s(d.recommendedComponent||d.fluentAlternative||"n/a")}</dd>
            </div>
            ${d.recommendedComponent||d.fluentAlternative?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Package</dt>
              <dd class="mt-1 font-mono text-xs text-accent">${s(d.recommendedPackage||d.fluentPackage||"")}</dd>
            </div>`:""}
          </dl>
        </article>
      `}),r+="</div></div></div>"}else m.length===0&&(r+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No risky implementations found.</p>');r+=`
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
  `,m.forEach(o=>{r+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${s(o.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase ${T(o.severity||"")}">${s((o.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${s(o.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${s(o.componentType||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${s(o.selector||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${s(I(o.boundingBox))}</td>
      </tr>
    `}),r+="</tbody></table></div>",m.length>10&&(r+=`<p class="mt-3 text-xs text-muted">... and ${s(m.length-10)} more annotated findings</p>`),r+=`
      <div class="mt-6 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Method</h4>
        <ul class="mt-3 space-y-2 text-sm text-muted">
          <li>Observe: visit the page, capture screenshot, and extract the DOM inventory.</li>
          <li>Inventory: build a typed component list with source detection — Carbon, Fluent UI, Material UI, native, or custom — plus confidence scores.</li>
          <li>Annotate: apply per-library rule packs (Carbon, Fluent UI, Material UI) to flag risky implementations. Pages with no design system get cross-library options side-by-side so you can compare before picking.</li>
          <li>Recommend: map each finding to the appropriate library component — Fluent, Material, or Carbon — with explanation and benefits.</li>
        </ul>
      </div>
    </section>
  `,r+=`
    <details class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <summary class="cursor-pointer font-serif text-xl">Component inventory (${s(p.length)})</summary>
      <p class="mt-2 text-sm text-muted">All detected components with source, risk, and confidence score.</p>
      ${Object.keys(u).length?`
      <div class="mt-4 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Component distribution</h4>
        <div class="mt-3 flex flex-wrap gap-2">
          ${Object.entries(u).sort((o,b)=>b[1]-o[1]).map(([o,b])=>`
              <span class="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-xs text-muted">
                <span class="font-semibold text-ink">${s(b)}</span>
                ${s(o)}
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
              <th class="py-2 pr-3 font-semibold">Library component</th>
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
  `,p.forEach(o=>{const b=o?.detectedProps?Object.entries(o.detectedProps):[],g=b.length?b.map(([f,$])=>`<span class="mr-1 inline-block rounded-full border border-ink/15 px-2 py-0.5 text-[10px] text-muted">${s(f)}=${s(String($))}</span>`).join(""):'<span class="text-muted">—</span>',h=o?.storybookUrl?`<a class="text-accent underline" href="${s(o.storybookUrl)}" target="_blank" rel="noreferrer noopener">docs</a>`:'<span class="text-muted">—</span>',d=o?.libraryComponentName||o?.fluentComponent||o?.materialComponent||o?.carbonComponent||null,y=d?`<code class="text-ink">${s(d)}</code>`:'<span class="text-muted">—</span>';r+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-2 pr-3 text-muted text-xs">${s(o?.id||"")}</td>
        <td class="py-2 pr-3 text-xs">${s(o?.componentType||"")}</td>
        <td class="py-2 pr-3 text-xs">${y}</td>
        <td class="py-2 pr-3 text-xs">${g}</td>
        <td class="py-2 pr-3 text-xs text-muted">${s(o?.possibleSource||"")}</td>
        <td class="py-2 pr-3 text-xs ${T(o?.risk||"")}">${s((o?.risk||"").toUpperCase())}</td>
        <td class="py-2 pr-3 text-xs text-muted">${s(o?.confidence??"")}%</td>
        <td class="py-2 pr-3 text-xs text-muted">${s((o?.visibleText||"").substring(0,40))}</td>
        <td class="py-2 pr-3 text-xs text-muted">${s((o?.selector||"").substring(0,60))}</td>
        <td class="py-2 pr-3 text-xs">${h}</td>
      </tr>
    `}),r+="</tbody></table></div>",r+=`<p class="mt-3 text-xs text-muted">${s(p.length)} components total — the downloadable report preserves the full list.</p>`,r+="</details>",r+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ca-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-ca-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,t.innerHTML=r,t.querySelectorAll("[data-ca-export-format]").forEach(o=>{o.addEventListener("click",()=>{const b=o.getAttribute("data-ca-export-format");if(b==="pdf")D(e);else if(b==="md"){const g=j(e),h=`component-audit-${new URL(e.url).hostname}-${new Date(e.timestamp||Date.now()).toISOString().slice(0,10)}`,d=new Blob([g],{type:"text/markdown;charset=utf-8"}),y=document.createElement("a");y.href=URL.createObjectURL(d),y.download=`${h}.md`,document.body.appendChild(y),y.click(),y.remove(),URL.revokeObjectURL(y.href)}})})}function N(){const t=document.getElementById("component-audit-tool"),e=t?.dataset.componentAuditApiUrl||"",i=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),m=window.__COMPONENT_AUDIT_API_URL||e||(i?"http://localhost:3000/api/component-audit":`${window.location.origin}/api/component-audit`),p=document.getElementById("component-audit-url"),u=document.getElementById("run-component-audit-btn"),x=document.getElementById("component-result-container");!t||!p||!u||!x||(window.location.hash==="#component-audit-tool"&&requestAnimationFrame(()=>{t.scrollIntoView({block:"start"})}),u.addEventListener("click",async()=>{const r=p.value.trim();if(!r){k(x,"Please enter a URL.");return}if(typeof navigator<"u"&&!navigator.onLine){k(x,"You appear to be offline.","Reconnect to the internet, then run the audit again.");return}try{new URL(r.startsWith("http")?r:"https://"+r)}catch{k(x,"Please enter a valid URL.");return}u.disabled=!0,u.textContent="Running audit...";const c=P(x);try{const n=new AbortController,l=window.setTimeout(()=>n.abort(),9e4),a=await fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:r}),signal:n.signal});if(window.clearTimeout(l),!a.ok){let b=null;try{b=await a.json()}catch{b=null}const g=A(b?.error);k(x,g,b?.hint||U(a.status,g));return}const o=await a.json();O(x,o)}catch(n){const l=String(n?.message||"").toLowerCase(),a=n?.name==="AbortError"||l.includes("aborted");k(x,a?"This audit took too long to finish.":"Unable to contact the audit service.",a?"The service may be busy right now. Please retry in a minute.":"Check your connection and retry. If this persists, the API may be temporarily unavailable.")}finally{c.stop(),u.disabled=!1,u.textContent="Run Audit"}}))}export{N as initializeComponentAuditTool};
