import{E as D,a as U}from"./jspdf.plugin.autotable.BNWpDLH5.js";import"./preload-helper.BlTxHScW.js";function o(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function L(n,e,r){const m=o(e),c=r?o(r):"";n.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words>${m}</p>
      ${c?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${c}</p>`:""}
    </div>
  `}function M(n,e){const r=String(e||"").toLowerCase();return n===429?"The service is currently busy. Please retry in about 30-60 seconds.":n===502||n===503||n===504?"The audit service is temporarily unavailable or under maintenance. Please try again shortly.":n===408?"The page took too long to load. Retry once, then test a lighter page to confirm connectivity.":n===422||r.includes("could not reach")||r.includes("could not be resolved")?"Verify that the page is public, not login-gated, and not blocking automated browsers.":"Please try again in a moment. If this keeps happening, the audit service may be temporarily unavailable."}function j(n){const e=["Connecting to M.ai audit service","Loading the page for analysis","Inspecting component inventory and risks","Packaging your report"];let r=0;const m=()=>{const b=e.map((h,a)=>{const l=a===r;return`<li class="flex items-center gap-2 text-sm ${l?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${l?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${o(h)}</li>`}).join("");n.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running your audit</p>
        <p class="mt-2 mb-0 text-xs text-muted">This can take 10-60 seconds depending on page size and network conditions.</p>
        <ul class="mt-3 space-y-2">${b}</ul>
        <p class="mt-3 mb-0 text-xs text-muted">If this takes unusually long, the service may be busy or in maintenance. We'll show a clear message if that happens.</p>
      </div>
    `};m();const c=window.setInterval(()=>{r=(r+1)%e.length,m()},1800);return{stop(){window.clearInterval(c)}}}function O(n){const e=String(n||"").trim();if(!e)return"The audit request failed.";const r=e.replace(/^component audit failed:\s*/i,""),c=r.split(/browser logs?:/i)[0].trim()||r,b=c.toLowerCase();return b.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":b.includes("timeout")||b.includes("timed out")?"The audit timed out before the page finished loading.":b.includes("err_name_not_resolved")||b.includes("dns")?"The URL could not be resolved.":b.includes("net::err_")||b.includes("failed to fetch")?"The audit could not reach that URL.":c.length>220?`${c.slice(0,217)}...`:c}function A(n,e=10){return(Array.isArray(n?.findings)?n.findings:[]).slice(0,e).map((m,c)=>({...m,annotationId:m?.annotationId??c+1}))}function F(n){return n?`${n.x}, ${n.y}, ${n.width} × ${n.height}`:""}function B(n,e,r){return n.filter(m=>m?.boundingBox).map(m=>{const c=m.boundingBox,b=c.x/e*100,h=c.y/r*100,a=c.width/e*100,l=c.height/r*100;return`
        <div class="absolute ${_(m.severity)}" title="${o(m.rule||"")}" style="left:${b}%; top:${h}%; width:${a}%; height:${l}%;"></div>
        <div class="absolute z-10" style="left:${b}%; top:${h}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${o(m.annotationId)}</div>
        </div>
      `}).join("")}function P(n){return n==="high"?"text-red-700":n==="medium"?"text-orange-600":"text-emerald-700"}function E(n){return n==="high"?"bg-red-50 text-red-700 border border-red-200":n==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function _(n){return n==="high"?"border-2 border-red-500/90 bg-red-500/10":n==="medium"?"border-2 border-orange-400/90 bg-orange-400/10":"border border-emerald-400/60"}function N(n){const e=n?.summary||{},r=A(n,10),m=Array.isArray(n?.inventory)?n.inventory:[],c=n?.fluentMeta||{},b=n?.notice,h=Object.entries(e.componentDistribution||{}).map(([t,i])=>`  - ${t}: ${i}`).join(`
`),a=["# Component Audit","",`- URL: ${n?.url||""}`,`- Library context: ${n?.libraryContext||"Generic"}`,`- Timestamp: ${n?.timestamp||""}`,`- Total components: ${e.totalComponents??0}`,`- Custom: ${e.customComponentCount??0}  Native: ${e.nativeComponentCount??0}  Carbon: ${e.carbonComponentCount??0}  Fluent UI: ${e.fluentComponentCount??0}  Material UI: ${e.materialComponentCount??0}`,`- Risk — High: ${e.riskSummary?.high??0}  Medium: ${e.riskSummary?.medium??0}  Low: ${e.riskSummary?.low??0}`];if(b&&a.push("",`> **Note:** ${b}`),c?.detected){const t=c.versionDetected?`\`${c.versionDetected}\` detected${c.versionLatest?` — latest is \`${c.versionLatest}\``:""}${c.isOutdated?" (outdated)":""}`:"version not pinned in script URLs";a.push("","## Fluent fingerprint","",`- \`fui-*\` elements on page: ${c.totalFuiElements??0}`,`- @fluentui/react-components: ${t}`,`- Storybook: ${c.storybookHome||"https://react.fluentui.dev"}`)}a.push("","## Component distribution","",h||"  (none)","","## Method","","- Observe: visit the page, capture screenshot, extract DOM inventory.","- Inventory: build a typed component list with source detection and confidence scores.","- Annotate: apply per-library rule packs (Carbon / Fluent UI / Material UI) to flag risky implementations.","- Recommend: map each finding to the appropriate library component with explanation. Pages with no design system get generic accessibility guidance.","","## Annotations",""),r.length===0?a.push("No risky implementations found.",""):r.forEach(t=>{const i=t.detectedProps&&Object.keys(t.detectedProps).length?Object.entries(t.detectedProps).map(([d,x])=>`${d}=${x}`).join(", "):"—";a.push(`### Annotation ${t.annotationId} — ${t.rule||"Finding"}`,"",`- Risk: ${t.severity}${t.priority?` (${t.priority})`:""}`,`- Component type: ${t.componentType}`,`- Fluent component: ${t.fluentComponent?`\`${t.fluentComponent}\``:"—"}`,`- Storybook: ${t.storybookUrl||"—"}`,`- Detected props: ${i}`,`- Selector: ${t.selector||""}`,`- Bounding box: ${F(t.boundingBox)}`,`- Evidence: ${t.evidence||""}`,`- Recommendation: ${t.recommendation||""}`,`- Library: ${t.libraryLabel||"none detected"}`,`- Suggested component: ${t.recommendedComponent||t.fluentAlternative||"n/a"}`,`- Package: ${t.recommendedPackage||t.fluentPackage||"n/a"}`,`- Benefits: ${(t.benefits||[]).join(", ")}`,`- Explanation: ${t.explanation||""}`,"")}),a.push("## Findings",""),r.length===0?a.push("No issues found."):(a.push("| # | Risk | Rule | Type | Selector | Library | Suggested component |","|---|---|---|---|---|---|---|"),r.forEach(t=>{a.push(`| ${t.annotationId} | ${t.severity} | ${t.rule} | ${t.componentType} | ${t.selector||""} | ${t.libraryLabel||"—"} | ${t.recommendedComponent||t.fluentAlternative||"n/a"} |`)})),a.push("","## Screenshot","");const l=n?.screenshot;return l?.data?a.push(`![Component audit screenshot](data:${l.mimeType||"image/png"};base64,${l.data})`):a.push("Screenshot unavailable."),a.push("","## Component Inventory","","| ID | Type | Library component | Props | Source | Risk | Conf. | Text | Selector | Docs |","|---|---|---|---|---|---|---|---|---|---|"),m.forEach(t=>{const i=t?.detectedProps&&Object.keys(t.detectedProps).length?Object.entries(t.detectedProps).map(([y,u])=>`${y}=${u}`).join(" "):"—",d=t?.storybookUrl?`[docs](${t.storybookUrl})`:"—",x=String(t?.visibleText||"").replace(/\|/g,"\\|"),v=String(t?.selector||"").replace(/\|/g,"\\|");a.push(`| ${t?.id||""} | ${t?.componentType||""} | ${t?.libraryComponentName||t?.fluentComponent||"—"} | ${i} | ${t?.possibleSource||""} | ${t?.risk||""} | ${t?.confidence??""}% | ${x} | ${v} | ${d} |`)}),a.push("","## M.ai Context","","```json",JSON.stringify(n?.maiContext||{},null,2),"```"),a.join(`
`)}function W(n){const e=new D({orientation:"landscape",unit:"pt",format:"letter"}),r=n?.summary||{},m=A(n,10),c=Array.isArray(n?.inventory)?n.inventory:[],b=n?.screenshot,h=`component-audit-${new URL(n.url).hostname}-${new Date(n.timestamp||Date.now()).toISOString().slice(0,10)}`,a=e.internal.pageSize.getWidth(),l=40,t=a-l*2;let i=48;if(e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Component Audit by M.ai",l,i),i+=18,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`URL: ${n.url}`,l,i),i+=14,e.text(`Library context: ${n.libraryContext||"No design system detected"}`,l,i),i+=14,e.text(`Timestamp: ${n.timestamp||""}`,l,i),i+=18,U(e,{startY:i,margin:{left:l,right:l},head:[["Total","Custom","Native","Carbon","Fluent UI","Material UI","High Risk","Medium Risk"]],body:[[String(r.totalComponents??0),String(r.customComponentCount??0),String(r.nativeComponentCount??0),String(r.carbonComponentCount??0),String(r.fluentComponentCount??0),String(r.materialComponentCount??0),String(r.riskSummary?.high??0),String(r.riskSummary?.medium??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),i=e.lastAutoTable.finalY+18,b?.data){e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Screenshot with annotations",l,i),i+=10;const d=Number(b.width||1),x=Number(b.height||1),v=Math.max(220,Math.round(t*(x/d)));e.addImage(`data:${b.mimeType||"image/png"};base64,${b.data}`,"PNG",l,i,t,v);const y=t/d,u=v/x;m.forEach(f=>{if(!f.boundingBox)return;const $=l+f.boundingBox.x*y,S=i+f.boundingBox.y*u,T=f.boundingBox.width*y,s=f.boundingBox.height*u;if(T>0&&s>0){const g=f.severity==="high";e.setDrawColor(g?204:234,g?51:88,g?51:12),e.setLineWidth(1),e.rect($,S,T,s),e.setFillColor(g?122:160,g?40:80,g?40:10),e.circle($+8,S+8,8,"F"),e.setTextColor(255,255,255),e.setFont("helvetica","bold"),e.setFontSize(8),e.text(String(f.annotationId),$+8,S+10.5,{align:"center"}),e.setTextColor(0,0,0)}}),i+=v+18}e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Annotations",l,i),i+=8,m.length===0?(e.setFont("helvetica","normal"),e.setFontSize(10),e.text("No risky implementations found.",l,i+12),i+=30):(U(e,{startY:i,margin:{left:l,right:l},head:[["#","Risk","Rule","Type","Library","Suggested component","Storybook"]],body:m.map(d=>[String(d.annotationId),String(d.severity||""),String(d.rule||""),String(d.componentType||""),String(d.libraryLabel||"—"),String(d.recommendedComponent||d.fluentAlternative||"n/a"),String(d.storybookUrl||"—")]),styles:{fontSize:7.5,cellPadding:3,valign:"top",overflow:"linebreak"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:22},1:{cellWidth:44},2:{cellWidth:110},3:{cellWidth:70},4:{cellWidth:90},5:{cellWidth:110},6:{cellWidth:266}}}),i=e.lastAutoTable.finalY+18),e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Component inventory",l,i),i+=8,U(e,{startY:i,margin:{left:l,right:l},head:[["ID","Type","Library component","Props","Source","Risk","Conf.","Text","Selector","Storybook"]],body:c.map(d=>{const x=d?.detectedProps&&Object.keys(d.detectedProps).length?Object.entries(d.detectedProps).map(([v,y])=>`${v}=${y}`).join(" "):"—";return[String(d?.id||""),String(d?.componentType||""),String(d?.libraryComponentName||d?.fluentComponent||"—"),x,String(d?.possibleSource||""),String(d?.risk||""),`${d?.confidence??""}%`,String(d?.visibleText||"").substring(0,40),String(d?.selector||"").substring(0,80),String(d?.storybookUrl||"—")]}),styles:{fontSize:6.5,cellPadding:2,valign:"top",overflow:"linebreak"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:40},1:{cellWidth:54},2:{cellWidth:70},3:{cellWidth:90},4:{cellWidth:44},5:{cellWidth:36},6:{cellWidth:30},7:{cellWidth:96},8:{cellWidth:110},9:{cellWidth:142}}}),e.save(`${h}.pdf`)}function z(n,e){const r=e?.summary||{},m=A(e,10),c=Array.isArray(e?.inventory)?e.inventory:[],b=r.componentDistribution||{},h=m.length,a=e?.maiContext?.dsAssessment||null,l=a?.label?String(a.label):"",t=a?.owner?String(a.owner):"",i=a?.confidence?String(a.confidence):"",d=l&&t&&!l.includes(t)?l+" ("+t+")":l,x=(i==="high"||i==="medium"||i==="low")&&d?`<div class="mb-6 rounded border border-accent/40 bg-accent/10 p-5 dark:bg-accent/15"><p class="m-0 text-xs uppercase tracking-wide text-muted">Design system detected</p><p class="m-0 mt-1 font-serif text-2xl text-ink">${o(d)}</p><p class="m-0 mt-1 text-sm text-muted">Confidence: ${o(i)}</p></div>`:"";let u=((e?.authDetection||e?.maiContext?.authDetection)?.isLoginPage?`<div class="mb-6 rounded border border-orange-500/60 bg-orange-50 p-5 text-ink dark:border-orange-400/60 dark:bg-orange-900/20 dark:text-cream"><p class="m-0 text-xs uppercase tracking-wide text-orange-700 dark:text-orange-300">Sign-in page detected</p><p class="m-0 mt-1 font-serif text-xl">This scan landed on a login screen.</p><p class="m-0 mt-2 text-sm">The inventory below describes the sign-in page — not the app behind it. The headless scanner can't authenticate. To audit the actual product, use the bookmarklet: sign in your own browser, then run it on the page you want to study.</p><p class="m-0 mt-4"><a href="/toybox/component-audit-bookmarklet/" class="inline-flex items-center rounded-md border border-accent bg-accent px-4 py-2 text-sm font-semibold text-paper no-underline hover:bg-accent/90">Open the bookmarklet tool →</a></p></div>`:"")+x+`
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
  `;const f=e?.fluentMeta||{},$=e?.notice,S=e?.librariesDetected||[],T=e?.frameworkMeta||{frameworks:[],generator:null};if($&&(u+=`
      <div class="mb-6 rounded border border-ink/15 bg-cream/40 p-4 text-sm text-ink dark:bg-cream/10">
        <p class="m-0"><strong>Heads up:</strong> ${o($)}</p>
      </div>
    `),S.length>0){const s=["carbon","fluent","material"],C=[...S].sort((w,p)=>s.indexOf(w)-s.indexOf(p)).map(w=>{if(w==="fluent"){const p=f.versionDetected?`v${o(f.versionDetected)}`:"version unpinned",k=f.versionLatest?`v${o(f.versionLatest)}`:"—",I=f.isOutdated?'<span class="ml-2 inline-flex items-center rounded-full border border-orange-400 px-2 py-0.5 text-xs font-semibold text-orange-700">outdated</span>':"";return`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Fluent UI</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink"><code>fui-*</code> elements:</span> ${o(f.totalFuiElements??0)}</li>
              <li><span class="text-ink">@fluentui/react-components:</span> ${p} · latest ${k}${I}</li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://react.fluentui.dev" target="_blank" rel="noreferrer noopener">react.fluentui.dev</a></li>
            </ul>
          </div>`}return w==="material"?`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Material UI</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink">Detected via:</span> <code>Mui*-root</code>, <code>mdc-*</code>, <code>m3-*</code>, or <code>material-icons</code></li>
              <li><span class="text-ink">Suggested package:</span> <code>@mui/material</code></li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://mui.com/material-ui/" target="_blank" rel="noreferrer noopener">mui.com</a> · <a class="text-accent underline" href="https://m3.material.io" target="_blank" rel="noreferrer noopener">m3.material.io</a></li>
            </ul>
          </div>`:w==="carbon"?`
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
        <div class="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${C}</div>
      </div>
    `}if((T.frameworks||[]).length||T.generator){const s=(T.frameworks||[]).map(g=>{const C=g.version?` <span class="text-muted">v${o(g.version)}</span>`:"";return`<span class="inline-flex items-center rounded-full border border-ink/15 bg-cream/40 px-2.5 py-0.5 text-xs font-semibold text-ink dark:bg-cream/10">${o(g.name)}${C}</span>`}).join(" ");u+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl">Built with</h3>
        <p class="mt-2 text-sm text-muted">Framework / build tool detected via <code>&lt;meta name="generator"&gt;</code> and runtime hints. This is a separate dimension from the UI component library — frameworks like Astro, Next.js, or SvelteKit don't ship UI components themselves.</p>
        <div class="mt-3 flex flex-wrap gap-2">${s||'<span class="text-muted text-sm">No framework signature found.</span>'}</div>
        ${T.generator?`<p class="mt-3 text-xs text-muted"><code>&lt;meta name="generator"&gt;</code>: ${o(T.generator)}</p>`:""}
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
  `,e?.screenshot?.data){const s=e.screenshot,g=Number(s.width||1),C=Number(s.height||1),w=B(m,g,C);u+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${o(s.mimeType||"image/png")};base64,${s.data}"
            alt="Component audit screenshot with annotations"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${w}</div>
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
              <dd class="mt-1 flex flex-wrap gap-1">${Object.entries(p.detectedProps).map(([k,I])=>`<span class="inline-block rounded-full border border-ink/15 px-2 py-0.5 text-[11px] text-muted">${o(k)}=${o(String(I))}</span>`).join("")}</dd>
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
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase ${P(s.severity||"")}">${o((s.severity||"").toUpperCase())}</span></td>
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
  `,c.forEach(s=>{const g=s?.detectedProps?Object.entries(s.detectedProps):[],C=g.length?g.map(([I,R])=>`<span class="mr-1 inline-block rounded-full border border-ink/15 px-2 py-0.5 text-[10px] text-muted">${o(I)}=${o(String(R))}</span>`).join(""):'<span class="text-muted">—</span>',w=s?.storybookUrl?`<a class="text-accent underline" href="${o(s.storybookUrl)}" target="_blank" rel="noreferrer noopener">docs</a>`:'<span class="text-muted">—</span>',p=s?.libraryComponentName||s?.fluentComponent||s?.materialComponent||s?.carbonComponent||null,k=p?`<code class="text-ink">${o(p)}</code>`:'<span class="text-muted">—</span>';u+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-2 pr-3 text-muted text-xs">${o(s?.id||"")}</td>
        <td class="py-2 pr-3 text-xs">${o(s?.componentType||"")}</td>
        <td class="py-2 pr-3 text-xs">${k}</td>
        <td class="py-2 pr-3 text-xs">${C}</td>
        <td class="py-2 pr-3 text-xs text-muted">${o(s?.possibleSource||"")}</td>
        <td class="py-2 pr-3 text-xs ${P(s?.risk||"")}">${o((s?.risk||"").toUpperCase())}</td>
        <td class="py-2 pr-3 text-xs text-muted">${o(s?.confidence??"")}%</td>
        <td class="py-2 pr-3 text-xs text-muted">${o((s?.visibleText||"").substring(0,40))}</td>
        <td class="py-2 pr-3 text-xs text-muted">${o((s?.selector||"").substring(0,60))}</td>
        <td class="py-2 pr-3 text-xs">${w}</td>
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
  `,n.innerHTML=u,n.querySelectorAll("[data-ca-export-format]").forEach(s=>{s.addEventListener("click",()=>{const g=s.getAttribute("data-ca-export-format");if(g==="pdf")W(e);else if(g==="md"){const C=N(e),w=`component-audit-${new URL(e.url).hostname}-${new Date(e.timestamp||Date.now()).toISOString().slice(0,10)}`,p=new Blob([C],{type:"text/markdown;charset=utf-8"}),k=document.createElement("a");k.href=URL.createObjectURL(p),k.download=`${w}.md`,document.body.appendChild(k),k.click(),k.remove(),URL.revokeObjectURL(k.href)}})})}function q(){const n=document.getElementById("component-audit-tool"),e=n?.dataset.componentAuditApiUrl||"",r=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),c=window.__COMPONENT_AUDIT_API_URL||(r?"http://localhost:3000/api/component-audit":e||`${window.location.origin}/api/component-audit`),b=document.getElementById("component-audit-url"),h=document.getElementById("run-component-audit-btn"),a=document.getElementById("component-result-container");if(!n||!b||!h||!a)return;window.location.hash==="#component-audit-tool"&&requestAnimationFrame(()=>{n.scrollIntoView({block:"start"})});let l=!1;b.addEventListener("focus",()=>{l||(l=!0,window.dispatchEvent(new CustomEvent("site:track",{detail:{name:"tool_engage",params:{tool:"component"}}})))},{once:!1}),h.addEventListener("click",async()=>{const t=b.value.trim();if(!t){L(a,"Please enter a URL.");return}if(typeof navigator<"u"&&!navigator.onLine){L(a,"You appear to be offline.","Reconnect to the internet, then run the audit again.");return}try{new URL(t.startsWith("http")?t:"https://"+t)}catch{L(a,"Please enter a valid URL.");return}h.disabled=!0,h.textContent="Running audit...";const i=j(a),d=(x,v)=>window.dispatchEvent(new CustomEvent("site:track",{detail:{name:x,params:v}}));d("audit_run",{tool:"component"});try{const x=new AbortController,v=window.setTimeout(()=>x.abort(),9e4),y=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t}),signal:x.signal});if(window.clearTimeout(v),!y.ok){let $=null;try{$=await y.json()}catch{$=null}const S=O($?.error);d("audit_error",{tool:"component",http_status:y.status}),L(a,S,$?.hint||M(y.status,S));return}const u=await y.json(),f=Array.isArray(u?.components)?u.components.length:null;d("audit_complete",{tool:"component",component_count:f}),z(a,u)}catch(x){const v=String(x?.message||"").toLowerCase(),y=x?.name==="AbortError"||v.includes("aborted");d("audit_error",{tool:"component",reason:y?"timeout":"network"}),L(a,y?"This audit took too long to finish.":"Unable to contact the audit service.",y?"The service may be busy right now. Please retry in a minute.":"Check your connection and retry. If this persists, the API may be temporarily unavailable.")}finally{i.stop(),h.disabled=!1,h.textContent="Run audit"}})}export{q as initializeComponentAuditTool};
