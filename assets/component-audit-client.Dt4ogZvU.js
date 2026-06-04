import{E as D,a as U}from"./jspdf.plugin.autotable.BNWpDLH5.js";import"./preload-helper.BlTxHScW.js";function o(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function L(t,e,r){const m=o(e),c=r?o(r):"";t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words>${m}</p>
      ${c?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${c}</p>`:""}
    </div>
  `}function M(t,e){const r=String(e||"").toLowerCase();return t===429?"The service is currently busy. Please retry in about 30-60 seconds.":t===502||t===503||t===504?"The audit service is temporarily unavailable or under maintenance. Please try again shortly.":t===408?"The page took too long to load. Retry once, then test a lighter page to confirm connectivity.":t===422||r.includes("could not reach")||r.includes("could not be resolved")?"Verify that the page is public, not login-gated, and not blocking automated browsers.":"Please try again in a moment. If this keeps happening, the audit service may be temporarily unavailable."}function j(t){const e=["Connecting to M.ai audit service","Opening page in a secure browser session","Inspecting component inventory and risks","Packaging your report"];let r=0;const m=()=>{const b=e.map((h,i)=>{const d=i===r;return`<li class="flex items-center gap-2 text-sm ${d?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${d?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${o(h)}</li>`}).join("");t.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running your audit</p>
        <p class="mt-2 mb-0 text-xs text-muted">This can take 10-60 seconds depending on page size and network conditions.</p>
        <ul class="mt-3 space-y-2">${b}</ul>
        <p class="mt-3 mb-0 text-xs text-muted">If this takes unusually long, the service may be busy or in maintenance. We'll show a clear message if that happens.</p>
      </div>
    `};m();const c=window.setInterval(()=>{r=(r+1)%e.length,m()},1800);return{stop(){window.clearInterval(c)}}}function O(t){const e=String(t||"").trim();if(!e)return"The audit request failed.";const r=e.replace(/^component audit failed:\s*/i,""),c=r.split(/browser logs?:/i)[0].trim()||r,b=c.toLowerCase();return b.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":b.includes("timeout")||b.includes("timed out")?"The audit timed out before the page finished loading.":b.includes("err_name_not_resolved")||b.includes("dns")?"The URL could not be resolved.":b.includes("net::err_")||b.includes("failed to fetch")?"The audit could not reach that URL.":c.length>220?`${c.slice(0,217)}...`:c}function P(t,e=10){return(Array.isArray(t?.findings)?t.findings:[]).slice(0,e).map((m,c)=>({...m,annotationId:m?.annotationId??c+1}))}function F(t){return t?`${t.x}, ${t.y}, ${t.width} × ${t.height}`:""}function B(t,e,r){return t.filter(m=>m?.boundingBox).map(m=>{const c=m.boundingBox,b=c.x/e*100,h=c.y/r*100,i=c.width/e*100,d=c.height/r*100;return`
        <div class="absolute ${N(m.severity)}" title="${o(m.rule||"")}" style="left:${b}%; top:${h}%; width:${i}%; height:${d}%;"></div>
        <div class="absolute z-10" style="left:${b}%; top:${h}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${o(m.annotationId)}</div>
        </div>
      `}).join("")}function A(t){return t==="high"?"text-red-700":t==="medium"?"text-orange-600":"text-emerald-700"}function E(t){return t==="high"?"bg-red-50 text-red-700 border border-red-200":t==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function N(t){return t==="high"?"border-2 border-red-500/90 bg-red-500/10":t==="medium"?"border-2 border-orange-400/90 bg-orange-400/10":"border border-emerald-400/60"}function W(t){const e=t?.summary||{},r=P(t,10),m=Array.isArray(t?.inventory)?t.inventory:[],c=t?.fluentMeta||{},b=t?.notice,h=Object.entries(e.componentDistribution||{}).map(([n,a])=>`  - ${n}: ${a}`).join(`
`),i=["# Component Audit","",`- URL: ${t?.url||""}`,`- Library context: ${t?.libraryContext||"Generic"}`,`- Timestamp: ${t?.timestamp||""}`,`- Total components: ${e.totalComponents??0}`,`- Custom: ${e.customComponentCount??0}  Native: ${e.nativeComponentCount??0}  Carbon: ${e.carbonComponentCount??0}  Fluent UI: ${e.fluentComponentCount??0}  Material UI: ${e.materialComponentCount??0}`,`- Risk — High: ${e.riskSummary?.high??0}  Medium: ${e.riskSummary?.medium??0}  Low: ${e.riskSummary?.low??0}`];if(b&&i.push("",`> **Note:** ${b}`),c?.detected){const n=c.versionDetected?`\`${c.versionDetected}\` detected${c.versionLatest?` — latest is \`${c.versionLatest}\``:""}${c.isOutdated?" (outdated)":""}`:"version not pinned in script URLs";i.push("","## Fluent fingerprint","",`- \`fui-*\` elements on page: ${c.totalFuiElements??0}`,`- @fluentui/react-components: ${n}`,`- Storybook: ${c.storybookHome||"https://react.fluentui.dev"}`)}i.push("","## Component distribution","",h||"  (none)","","## Method","","- Observe: visit the page, capture screenshot, extract DOM inventory.","- Inventory: build a typed component list with source detection and confidence scores.","- Annotate: apply per-library rule packs (Carbon / Fluent UI / Material UI) to flag risky implementations.","- Recommend: map each finding to the appropriate library component with explanation. Pages with no design system get generic accessibility guidance.","","## Annotations",""),r.length===0?i.push("No risky implementations found.",""):r.forEach(n=>{const a=n.detectedProps&&Object.keys(n.detectedProps).length?Object.entries(n.detectedProps).map(([l,x])=>`${l}=${x}`).join(", "):"—";i.push(`### Annotation ${n.annotationId} — ${n.rule||"Finding"}`,"",`- Risk: ${n.severity}${n.priority?` (${n.priority})`:""}`,`- Component type: ${n.componentType}`,`- Fluent component: ${n.fluentComponent?`\`${n.fluentComponent}\``:"—"}`,`- Storybook: ${n.storybookUrl||"—"}`,`- Detected props: ${a}`,`- Selector: ${n.selector||""}`,`- Bounding box: ${F(n.boundingBox)}`,`- Evidence: ${n.evidence||""}`,`- Recommendation: ${n.recommendation||""}`,`- Library: ${n.libraryLabel||"none detected"}`,`- Suggested component: ${n.recommendedComponent||n.fluentAlternative||"n/a"}`,`- Package: ${n.recommendedPackage||n.fluentPackage||"n/a"}`,`- Benefits: ${(n.benefits||[]).join(", ")}`,`- Explanation: ${n.explanation||""}`,"")}),i.push("## Findings",""),r.length===0?i.push("No issues found."):(i.push("| # | Risk | Rule | Type | Selector | Library | Suggested component |","|---|---|---|---|---|---|---|"),r.forEach(n=>{i.push(`| ${n.annotationId} | ${n.severity} | ${n.rule} | ${n.componentType} | ${n.selector||""} | ${n.libraryLabel||"—"} | ${n.recommendedComponent||n.fluentAlternative||"n/a"} |`)})),i.push("","## Screenshot","");const d=t?.screenshot;return d?.data?i.push(`![Component audit screenshot](data:${d.mimeType||"image/png"};base64,${d.data})`):i.push("Screenshot unavailable."),i.push("","## Component Inventory","","| ID | Type | Library component | Props | Source | Risk | Conf. | Text | Selector | Docs |","|---|---|---|---|---|---|---|---|---|---|"),m.forEach(n=>{const a=n?.detectedProps&&Object.keys(n.detectedProps).length?Object.entries(n.detectedProps).map(([f,u])=>`${f}=${u}`).join(" "):"—",l=n?.storybookUrl?`[docs](${n.storybookUrl})`:"—",x=String(n?.visibleText||"").replace(/\|/g,"\\|"),$=String(n?.selector||"").replace(/\|/g,"\\|");i.push(`| ${n?.id||""} | ${n?.componentType||""} | ${n?.libraryComponentName||n?.fluentComponent||"—"} | ${a} | ${n?.possibleSource||""} | ${n?.risk||""} | ${n?.confidence??""}% | ${x} | ${$} | ${l} |`)}),i.push("","## M.ai Context","","```json",JSON.stringify(t?.maiContext||{},null,2),"```"),i.join(`
`)}function _(t){const e=new D({orientation:"landscape",unit:"pt",format:"letter"}),r=t?.summary||{},m=P(t,10),c=Array.isArray(t?.inventory)?t.inventory:[],b=t?.screenshot,h=`component-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`,i=e.internal.pageSize.getWidth(),d=40,n=i-d*2;let a=48;if(e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Component Audit by M.ai",d,a),a+=18,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`URL: ${t.url}`,d,a),a+=14,e.text(`Library context: ${t.libraryContext||"No design system detected"}`,d,a),a+=14,e.text(`Timestamp: ${t.timestamp||""}`,d,a),a+=18,U(e,{startY:a,margin:{left:d,right:d},head:[["Total","Custom","Native","Carbon","Fluent UI","Material UI","High Risk","Medium Risk"]],body:[[String(r.totalComponents??0),String(r.customComponentCount??0),String(r.nativeComponentCount??0),String(r.carbonComponentCount??0),String(r.fluentComponentCount??0),String(r.materialComponentCount??0),String(r.riskSummary?.high??0),String(r.riskSummary?.medium??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),a=e.lastAutoTable.finalY+18,b?.data){e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Screenshot with annotations",d,a),a+=10;const l=Number(b.width||1),x=Number(b.height||1),$=Math.max(220,Math.round(n*(x/l)));e.addImage(`data:${b.mimeType||"image/png"};base64,${b.data}`,"PNG",d,a,n,$);const f=n/l,u=$/x;m.forEach(y=>{if(!y.boundingBox)return;const S=d+y.boundingBox.x*f,T=a+y.boundingBox.y*u,C=y.boundingBox.width*f,s=y.boundingBox.height*u;if(C>0&&s>0){const g=y.severity==="high";e.setDrawColor(g?204:234,g?51:88,g?51:12),e.setLineWidth(1),e.rect(S,T,C,s),e.setFillColor(g?122:160,g?40:80,g?40:10),e.circle(S+8,T+8,8,"F"),e.setTextColor(255,255,255),e.setFont("helvetica","bold"),e.setFontSize(8),e.text(String(y.annotationId),S+8,T+10.5,{align:"center"}),e.setTextColor(0,0,0)}}),a+=$+18}e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Annotations",d,a),a+=8,m.length===0?(e.setFont("helvetica","normal"),e.setFontSize(10),e.text("No risky implementations found.",d,a+12),a+=30):(U(e,{startY:a,margin:{left:d,right:d},head:[["#","Risk","Rule","Type","Library","Suggested component","Storybook"]],body:m.map(l=>[String(l.annotationId),String(l.severity||""),String(l.rule||""),String(l.componentType||""),String(l.libraryLabel||"—"),String(l.recommendedComponent||l.fluentAlternative||"n/a"),String(l.storybookUrl||"—")]),styles:{fontSize:7.5,cellPadding:3,valign:"top",overflow:"linebreak"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:22},1:{cellWidth:44},2:{cellWidth:110},3:{cellWidth:70},4:{cellWidth:90},5:{cellWidth:110},6:{cellWidth:266}}}),a=e.lastAutoTable.finalY+18),e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Component inventory",d,a),a+=8,U(e,{startY:a,margin:{left:d,right:d},head:[["ID","Type","Library component","Props","Source","Risk","Conf.","Text","Selector","Storybook"]],body:c.map(l=>{const x=l?.detectedProps&&Object.keys(l.detectedProps).length?Object.entries(l.detectedProps).map(([$,f])=>`${$}=${f}`).join(" "):"—";return[String(l?.id||""),String(l?.componentType||""),String(l?.libraryComponentName||l?.fluentComponent||"—"),x,String(l?.possibleSource||""),String(l?.risk||""),`${l?.confidence??""}%`,String(l?.visibleText||"").substring(0,40),String(l?.selector||"").substring(0,80),String(l?.storybookUrl||"—")]}),styles:{fontSize:6.5,cellPadding:2,valign:"top",overflow:"linebreak"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:40},1:{cellWidth:54},2:{cellWidth:70},3:{cellWidth:90},4:{cellWidth:44},5:{cellWidth:36},6:{cellWidth:30},7:{cellWidth:96},8:{cellWidth:110},9:{cellWidth:142}}}),e.save(`${h}.pdf`)}function z(t,e){const r=e?.summary||{},m=P(e,10),c=Array.isArray(e?.inventory)?e.inventory:[],b=r.componentDistribution||{},h=m.length,i=e?.maiContext?.dsAssessment||null,d=i?.label?String(i.label):"",n=i?.owner?String(i.owner):"",a=i?.confidence?String(i.confidence):"",l=d&&n&&!d.includes(n)?d+" ("+n+")":d,x=(a==="high"||a==="medium"||a==="low")&&l?`<div class="mb-6 rounded border border-accent/40 bg-accent/10 p-5 dark:bg-accent/15"><p class="m-0 text-xs uppercase tracking-wide text-muted">Design system detected</p><p class="m-0 mt-1 font-serif text-2xl text-ink">${o(l)}</p><p class="m-0 mt-1 text-sm text-muted">Confidence: ${o(a)}</p></div>`:"";let u=((e?.authDetection||e?.maiContext?.authDetection)?.isLoginPage?`<div class="mb-6 rounded border border-orange-500/60 bg-orange-50 p-5 text-ink dark:border-orange-400/60 dark:bg-orange-900/20 dark:text-cream"><p class="m-0 text-xs uppercase tracking-wide text-orange-700 dark:text-orange-300">Sign-in page detected</p><p class="m-0 mt-1 font-serif text-xl">This scan landed on a login screen.</p><p class="m-0 mt-2 text-sm">The inventory below describes the sign-in page — not the app behind it. The headless scanner can't authenticate. To audit the actual product, use the bookmarklet: sign in your own browser, then run it on the page you want to study.</p><p class="m-0 mt-4"><a href="/toybox/component-audit-bookmarklet/" class="inline-flex items-center rounded-md border border-accent bg-accent px-4 py-2 text-sm font-semibold text-paper no-underline hover:bg-accent/90">Open the bookmarklet tool →</a></p></div>`:"")+x+`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <div>
          <p class="mb-1 text-xs text-muted">Components</p>
          <p class="m-0 text-xl font-bold">${o(r.totalComponents??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${o(h)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">High Risk</p>
          <p class="m-0 text-xl font-bold text-red-700">${o(r.riskSummary?.high??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Medium Risk</p>
          <p class="m-0 text-xl font-bold text-orange-600">${o(r.riskSummary?.medium??0)}</p>
        </div>
      </div>
      <div class="mt-5 rounded border border-ink/10 bg-paper p-4 text-sm text-muted dark:bg-cream/5">
        <p class="m-0">
          Source mix:
          <span class="font-semibold text-ink">${o(r.customComponentCount??0)}</span> custom,
          <span class="font-semibold text-ink">${o(r.nativeComponentCount??0)}</span> native,
          <span class="font-semibold text-ink">${o(r.carbonComponentCount??0)}</span> Carbon,
          <span class="font-semibold text-ink">${o(r.fluentComponentCount??0)}</span> Fluent UI,
          <span class="font-semibold text-ink">${o(r.materialComponentCount??0)}</span> Material UI.
        </p>
        ${(e?.librariesDetected||[]).length?`
        <p class="mt-3 m-0">
          Detected libraries:
          ${(e.librariesDetected||[]).map(s=>`<span class="ml-1 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${s==="fluent"?"bg-blue-50 text-blue-800 border-blue-200":s==="material"?"bg-indigo-50 text-indigo-800 border-indigo-200":s==="carbon"?"bg-slate-100 text-slate-800 border-slate-300":"bg-cream text-ink border-ink/20"}">${o(s==="fluent"?"Fluent UI":s==="material"?"Material UI":s==="carbon"?"Carbon":s)}</span>`).join("")}
        </p>`:""}
      </div>
    </div>
  `;const y=e?.fluentMeta||{},S=e?.notice,T=e?.librariesDetected||[],C=e?.frameworkMeta||{frameworks:[],generator:null};if(S&&(u+=`
      <div class="mb-6 rounded border border-ink/15 bg-cream/40 p-4 text-sm text-ink dark:bg-cream/10">
        <p class="m-0"><strong>Heads up:</strong> ${o(S)}</p>
      </div>
    `),T.length>0){const s=["carbon","fluent","material"],w=[...T].sort((k,p)=>s.indexOf(k)-s.indexOf(p)).map(k=>{if(k==="fluent"){const p=y.versionDetected?`v${o(y.versionDetected)}`:"version unpinned",v=y.versionLatest?`v${o(y.versionLatest)}`:"—",I=y.isOutdated?'<span class="ml-2 inline-flex items-center rounded-full border border-orange-400 px-2 py-0.5 text-xs font-semibold text-orange-700">outdated</span>':"";return`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Fluent UI</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink"><code>fui-*</code> elements:</span> ${o(y.totalFuiElements??0)}</li>
              <li><span class="text-ink">@fluentui/react-components:</span> ${p} · latest ${v}${I}</li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://react.fluentui.dev" target="_blank" rel="noreferrer noopener">react.fluentui.dev</a></li>
            </ul>
          </div>`}return k==="material"?`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Material UI</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink">Detected via:</span> <code>Mui*-root</code>, <code>mdc-*</code>, <code>m3-*</code>, or <code>material-icons</code></li>
              <li><span class="text-ink">Suggested package:</span> <code>@mui/material</code></li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://mui.com/material-ui/" target="_blank" rel="noreferrer noopener">mui.com</a> · <a class="text-accent underline" href="https://m3.material.io" target="_blank" rel="noreferrer noopener">m3.material.io</a></li>
            </ul>
          </div>`:k==="carbon"?`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Carbon</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink">Detected via:</span> <code>cds--*</code>, <code>bx--*</code>, <code>c4p--*</code></li>
              <li><span class="text-ink">Suggested package:</span> <code>@carbon/react</code></li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://carbondesignsystem.com" target="_blank" rel="noreferrer noopener">carbondesignsystem.com</a></li>
            </ul>
          </div>`:""}).join("");u+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl">Design system fingerprint</h3>
        <div class="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${w}</div>
      </div>
    `}if((C.frameworks||[]).length||C.generator){const s=(C.frameworks||[]).map(g=>{const w=g.version?` <span class="text-muted">v${o(g.version)}</span>`:"";return`<span class="inline-flex items-center rounded-full border border-ink/15 bg-cream/40 px-2.5 py-0.5 text-xs font-semibold text-ink dark:bg-cream/10">${o(g.name)}${w}</span>`}).join(" ");u+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl">Built with</h3>
        <p class="mt-2 text-sm text-muted">Framework / build tool detected via <code>&lt;meta name="generator"&gt;</code> and runtime hints. This is a separate dimension from the UI component library — frameworks like Astro, Next.js, or SvelteKit don't ship UI components themselves.</p>
        <div class="mt-3 flex flex-wrap gap-2">${s||'<span class="text-muted text-sm">No framework signature found.</span>'}</div>
        ${C.generator?`<p class="mt-3 text-xs text-muted"><code>&lt;meta name="generator"&gt;</code>: ${o(C.generator)}</p>`:""}
      </div>
    `}if(u+=`
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
  `,e?.screenshot?.data){const s=e.screenshot,g=Number(s.width||1),w=Number(s.height||1),k=B(m,g,w);u+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${o(s.mimeType||"image/png")};base64,${s.data}"
            alt="Component audit screenshot with annotations"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${k}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,m.forEach(p=>{E(p.severity),u+=`
        <article id="ca-annotation-${o(p.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-paper">${o(p.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">
                ${o((p.severity||"").toUpperCase())} RISK${p.priority?` · <span class="rounded bg-cream px-1.5 py-0.5 text-[10px] tracking-wider text-ink dark:bg-cream/20 dark:text-ink">${o(p.priority)}</span>`:""}
              </p>
              <h4 class="mt-1 font-serif text-base">${o(p.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Component</dt>
              <dd class="mt-1 text-ink">${o(p.componentType||"n/a")}</dd>
            </div>
            ${p.fluentComponent?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Fluent component</dt>
              <dd class="mt-1 text-ink"><code>${o(p.fluentComponent)}</code>${p.storybookUrl?` · <a class="text-accent underline" href="${o(p.storybookUrl)}" target="_blank" rel="noreferrer noopener">Storybook docs</a>`:""}</dd>
            </div>`:""}
            ${p.detectedProps&&Object.keys(p.detectedProps).length?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Detected props</dt>
              <dd class="mt-1 flex flex-wrap gap-1">${Object.entries(p.detectedProps).map(([v,I])=>`<span class="inline-block rounded-full border border-ink/15 px-2 py-0.5 text-[11px] text-muted">${o(v)}=${o(String(I))}</span>`).join("")}</dd>
            </div>`:""}
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${o(p.evidence||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${o(p.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Library</dt>
              <dd class="mt-1 text-muted">${o(p.libraryLabel||"None detected")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested component</dt>
              <dd class="mt-1 text-muted">${o(p.recommendedComponent||p.fluentAlternative||"n/a")}</dd>
            </div>
            ${p.recommendedComponent||p.fluentAlternative?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Package</dt>
              <dd class="mt-1 font-mono text-xs text-accent">${o(p.recommendedPackage||p.fluentPackage||"")}</dd>
            </div>`:""}
          </dl>
        </article>
      `}),u+="</div></div></div>"}else m.length===0&&(u+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No risky implementations found.</p>');u+=`
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
  `,m.forEach(s=>{u+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${o(s.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase ${A(s.severity||"")}">${o((s.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${o(s.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${o(s.componentType||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${o(s.selector||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${o(F(s.boundingBox))}</td>
      </tr>
    `}),u+="</tbody></table></div>",m.length>10&&(u+=`<p class="mt-3 text-xs text-muted">... and ${o(m.length-10)} more annotated findings</p>`),u+=`
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
  `,u+=`
    <details class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <summary class="cursor-pointer font-serif text-xl">Component inventory (${o(c.length)})</summary>
      <p class="mt-2 text-sm text-muted">All detected components with source, risk, and confidence score.</p>
      ${Object.keys(b).length?`
      <div class="mt-4 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Component distribution</h4>
        <div class="mt-3 flex flex-wrap gap-2">
          ${Object.entries(b).sort((s,g)=>g[1]-s[1]).map(([s,g])=>`
              <span class="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-xs text-muted">
                <span class="font-semibold text-ink">${o(g)}</span>
                ${o(s)}
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
  `,c.forEach(s=>{const g=s?.detectedProps?Object.entries(s.detectedProps):[],w=g.length?g.map(([I,R])=>`<span class="mr-1 inline-block rounded-full border border-ink/15 px-2 py-0.5 text-[10px] text-muted">${o(I)}=${o(String(R))}</span>`).join(""):'<span class="text-muted">—</span>',k=s?.storybookUrl?`<a class="text-accent underline" href="${o(s.storybookUrl)}" target="_blank" rel="noreferrer noopener">docs</a>`:'<span class="text-muted">—</span>',p=s?.libraryComponentName||s?.fluentComponent||s?.materialComponent||s?.carbonComponent||null,v=p?`<code class="text-ink">${o(p)}</code>`:'<span class="text-muted">—</span>';u+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-2 pr-3 text-muted text-xs">${o(s?.id||"")}</td>
        <td class="py-2 pr-3 text-xs">${o(s?.componentType||"")}</td>
        <td class="py-2 pr-3 text-xs">${v}</td>
        <td class="py-2 pr-3 text-xs">${w}</td>
        <td class="py-2 pr-3 text-xs text-muted">${o(s?.possibleSource||"")}</td>
        <td class="py-2 pr-3 text-xs ${A(s?.risk||"")}">${o((s?.risk||"").toUpperCase())}</td>
        <td class="py-2 pr-3 text-xs text-muted">${o(s?.confidence??"")}%</td>
        <td class="py-2 pr-3 text-xs text-muted">${o((s?.visibleText||"").substring(0,40))}</td>
        <td class="py-2 pr-3 text-xs text-muted">${o((s?.selector||"").substring(0,60))}</td>
        <td class="py-2 pr-3 text-xs">${k}</td>
      </tr>
    `}),u+="</tbody></table></div>",u+=`<p class="mt-3 text-xs text-muted">${o(c.length)} components total — the downloadable report preserves the full list.</p>`,u+="</details>",u+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ca-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-ca-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,t.innerHTML=u,t.querySelectorAll("[data-ca-export-format]").forEach(s=>{s.addEventListener("click",()=>{const g=s.getAttribute("data-ca-export-format");if(g==="pdf")_(e);else if(g==="md"){const w=W(e),k=`component-audit-${new URL(e.url).hostname}-${new Date(e.timestamp||Date.now()).toISOString().slice(0,10)}`,p=new Blob([w],{type:"text/markdown;charset=utf-8"}),v=document.createElement("a");v.href=URL.createObjectURL(p),v.download=`${k}.md`,document.body.appendChild(v),v.click(),v.remove(),URL.revokeObjectURL(v.href)}})})}function q(){const t=document.getElementById("component-audit-tool"),e=t?.dataset.componentAuditApiUrl||"",r=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),c=window.__COMPONENT_AUDIT_API_URL||(r?"http://localhost:3000/api/component-audit":e||`${window.location.origin}/api/component-audit`),b=document.getElementById("component-audit-url"),h=document.getElementById("run-component-audit-btn"),i=document.getElementById("component-result-container");!t||!b||!h||!i||(window.location.hash==="#component-audit-tool"&&requestAnimationFrame(()=>{t.scrollIntoView({block:"start"})}),h.addEventListener("click",async()=>{const d=b.value.trim();if(!d){L(i,"Please enter a URL.");return}if(typeof navigator<"u"&&!navigator.onLine){L(i,"You appear to be offline.","Reconnect to the internet, then run the audit again.");return}try{new URL(d.startsWith("http")?d:"https://"+d)}catch{L(i,"Please enter a valid URL.");return}h.disabled=!0,h.textContent="Running audit...";const n=j(i);try{const a=new AbortController,l=window.setTimeout(()=>a.abort(),9e4),x=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:d}),signal:a.signal});if(window.clearTimeout(l),!x.ok){let f=null;try{f=await x.json()}catch{f=null}const u=O(f?.error);L(i,u,f?.hint||M(x.status,u));return}const $=await x.json();z(i,$)}catch(a){const l=String(a?.message||"").toLowerCase(),x=a?.name==="AbortError"||l.includes("aborted");L(i,x?"This audit took too long to finish.":"Unable to contact the audit service.",x?"The service may be busy right now. Please retry in a minute.":"Check your connection and retry. If this persists, the API may be temporarily unavailable.")}finally{n.stop(),h.disabled=!1,h.textContent="Run audit"}}))}export{q as initializeComponentAuditTool};
