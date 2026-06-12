import{E as N}from"./jspdf.es.min.HRF70t-r.js";import{r as W,a as R}from"./inspect-picker.C78l_t6T.js";function n(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function U(t,e,a){const u=n(e),m=a?n(a):"";t.innerHTML=`
    <div class="rounded border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
      <p class="m-0 text-sm font-semibold break-words>${u}</p>
      ${m?`<p class="mt-2 mb-0 text-sm text-red-800 break-words">${m}</p>`:""}
    </div>
  `}function H(t,e){const a=String(e||"").toLowerCase();return t===429?"The service is currently busy. Please retry in about 30-60 seconds.":t===502||t===503||t===504?"The audit service is temporarily unavailable or under maintenance. Please try again shortly.":t===408?"The page took too long to load. Retry once, then test a lighter page to confirm connectivity.":t===422||a.includes("could not reach")||a.includes("could not be resolved")?"Verify that the page is public, not login-gated, and not blocking automated browsers.":"Please try again in a moment. If this keeps happening, the audit service may be temporarily unavailable."}function z(t){const e=["Connecting to M.ai audit service","Loading the page for analysis","Inspecting component inventory and risks","Packaging your report"];let a=0;const u=()=>{const b=e.map((x,i)=>{const d=i===a;return`<li class="flex items-center gap-2 text-sm ${d?"text-ink font-semibold":"text-muted"}"><span class="inline-block h-2 w-2 rounded-full ${d?"bg-accent animate-pulse":"bg-ink/20"}" aria-hidden="true"></span>${n(x)}</li>`}).join("");t.innerHTML=`
      <div class="rounded border border-accent/25 bg-white/70 p-4 dark:bg-ink/10" role="status" aria-live="polite">
        <p class="m-0 text-sm font-semibold text-ink">Running your audit</p>
        <p class="mt-2 mb-0 text-xs text-muted">This can take 10-60 seconds depending on page size and network conditions.</p>
        <ul class="mt-3 space-y-2">${b}</ul>
        <p class="mt-3 mb-0 text-xs text-muted">If this takes unusually long, the service may be busy or in maintenance. We'll show a clear message if that happens.</p>
      </div>
    `};u();const m=window.setInterval(()=>{a=(a+1)%e.length,u()},1800);return{stop(){window.clearInterval(m)}}}function Y(t){const e=String(t||"").trim();if(!e)return"The audit request failed.";const a=e.replace(/^component audit failed:\s*/i,""),m=a.split(/browser logs?:/i)[0].trim()||a,b=m.toLowerCase();return b.includes("target page, context or browser has been closed")?"This site could not be audited because the browser session closed unexpectedly.":b.includes("timeout")||b.includes("timed out")?"The audit timed out before the page finished loading.":b.includes("err_name_not_resolved")||b.includes("dns")?"The URL could not be resolved.":b.includes("net::err_")||b.includes("failed to fetch")?"The audit could not reach that URL.":m.length>220?`${m.slice(0,217)}...`:m}function D(t,e=10){return(Array.isArray(t?.findings)?t.findings:[]).slice(0,e).map((u,m)=>({...u,annotationId:u?.annotationId??m+1}))}function _(t){return t?`${t.x}, ${t.y}, ${t.width} × ${t.height}`:""}function q(t,e,a){return t.filter(u=>u?.boundingBox).map(u=>{const m=u.boundingBox,b=m.x/e*100,x=m.y/a*100,i=m.width/e*100,d=m.height/a*100;return`
        <div class="absolute ${G(u.severity)}" title="${n(u.rule||"")}" style="left:${b}%; top:${x}%; width:${i}%; height:${d}%;"></div>
        <div class="absolute z-10" style="left:${b}%; top:${x}%; transform: translate(-50%, -50%);">
          <div class="flex h-7 w-7 items-center justify-center rounded-full border border-paper bg-accent text-xs font-bold text-paper shadow-lg shadow-black/20">${n(u.annotationId)}</div>
        </div>
      `}).join("")}function B(t){return t==="high"?"text-red-700":t==="medium"?"text-orange-600":"text-emerald-700"}function V(t){return t==="high"?"bg-red-50 text-red-700 border border-red-200":t==="medium"?"bg-orange-50 text-orange-700 border border-orange-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"}function G(t){return t==="high"?"border-2 border-red-500/90 bg-red-500/10":t==="medium"?"border-2 border-orange-400/90 bg-orange-400/10":"border border-emerald-400/60"}function J(t){const e=t?.summary||{},a=D(t,10),u=Array.isArray(t?.inventory)?t.inventory:[],m=t?.fluentMeta||{},b=t?.notice,x=Object.entries(e.componentDistribution||{}).map(([o,l])=>`  - ${o}: ${l}`).join(`
`),i=["# Component Audit","",`- URL: ${t?.url||""}`,`- Library context: ${t?.libraryContext||"Generic"}`,`- Timestamp: ${t?.timestamp||""}`,`- Total components: ${e.totalComponents??0}`,`- Custom: ${e.customComponentCount??0}  Native: ${e.nativeComponentCount??0}  Carbon: ${e.carbonComponentCount??0}  Fluent UI: ${e.fluentComponentCount??0}  Material UI: ${e.materialComponentCount??0}`,`- Risk — High: ${e.riskSummary?.high??0}  Medium: ${e.riskSummary?.medium??0}  Low: ${e.riskSummary?.low??0}`];if(b&&i.push("",`> **Note:** ${b}`),m?.detected){const o=m.versionDetected?`\`${m.versionDetected}\` detected${m.versionLatest?` — latest is \`${m.versionLatest}\``:""}${m.isOutdated?" (outdated)":""}`:"version not pinned in script URLs";i.push("","## Fluent fingerprint","",`- \`fui-*\` elements on page: ${m.totalFuiElements??0}`,`- @fluentui/react-components: ${o}`,`- Storybook: ${m.storybookHome||"https://react.fluentui.dev"}`)}i.push("","## Component distribution","",x||"  (none)","","## Method","","- Observe: visit the page, capture screenshot, extract DOM inventory.","- Inventory: build a typed component list with source detection and confidence scores.","- Annotate: apply per-library rule packs (Carbon / Fluent UI / Material UI) to flag risky implementations.","- Recommend: map each finding to the appropriate library component with explanation. Pages with no design system get generic accessibility guidance.","","## Annotations",""),a.length===0?i.push("No risky implementations found.",""):a.forEach(o=>{const l=o.detectedProps&&Object.keys(o.detectedProps).length?Object.entries(o.detectedProps).map(([c,k])=>`${c}=${k}`).join(", "):"—";i.push(`### Annotation ${o.annotationId} — ${o.rule||"Finding"}`,"",`- Risk: ${o.severity}${o.priority?` (${o.priority})`:""}`,`- Component type: ${o.componentType}`,`- Fluent component: ${o.fluentComponent?`\`${o.fluentComponent}\``:"—"}`,`- Storybook: ${o.storybookUrl||"—"}`,`- Detected props: ${l}`,`- Selector: ${o.selector||""}`,`- Bounding box: ${_(o.boundingBox)}`,`- Evidence: ${o.evidence||""}`,`- Recommendation: ${o.recommendation||""}`,`- Library: ${o.libraryLabel||"none detected"}`,`- Suggested component: ${o.recommendedComponent||o.fluentAlternative||"n/a"}`,`- Package: ${o.recommendedPackage||o.fluentPackage||"n/a"}`,`- Benefits: ${(o.benefits||[]).join(", ")}`,`- Explanation: ${o.explanation||""}`,"")}),i.push("## Findings",""),a.length===0?i.push("No issues found."):(i.push("| # | Risk | Rule | Type | Selector | Library | Suggested component |","|---|---|---|---|---|---|---|"),a.forEach(o=>{i.push(`| ${o.annotationId} | ${o.severity} | ${o.rule} | ${o.componentType} | ${o.selector||""} | ${o.libraryLabel||"—"} | ${o.recommendedComponent||o.fluentAlternative||"n/a"} |`)})),i.push("","## Screenshot","");const d=t?.screenshot;return d?.data?i.push(`![Component audit screenshot](data:${d.mimeType||"image/png"};base64,${d.data})`):i.push("Screenshot unavailable."),i.push("","## Component Inventory","","| ID | Type | Library component | Props | Source | Risk | Conf. | Text | Selector | Docs |","|---|---|---|---|---|---|---|---|---|---|"),u.forEach(o=>{const l=o?.detectedProps&&Object.keys(o.detectedProps).length?Object.entries(o.detectedProps).map(([C,g])=>`${C}=${g}`).join(" "):"—",c=o?.storybookUrl?`[docs](${o.storybookUrl})`:"—",k=String(o?.visibleText||"").replace(/\|/g,"\\|"),S=String(o?.selector||"").replace(/\|/g,"\\|");i.push(`| ${o?.id||""} | ${o?.componentType||""} | ${o?.libraryComponentName||o?.fluentComponent||"—"} | ${l} | ${o?.possibleSource||""} | ${o?.risk||""} | ${o?.confidence??""}% | ${k} | ${S} | ${c} |`)}),i.push("","## M.ai Context","","```json",JSON.stringify(t?.maiContext||{},null,2),"```"),i.join(`
`)}function K(t){const e=new N({orientation:"landscape",unit:"pt",format:"letter"}),a=t?.summary||{},u=D(t,10),m=Array.isArray(t?.inventory)?t.inventory:[],b=t?.screenshot,x=`component-audit-${new URL(t.url).hostname}-${new Date(t.timestamp||Date.now()).toISOString().slice(0,10)}`,i=e.internal.pageSize.getWidth(),d=40,o=i-d*2;let l=48;if(e.setFont("helvetica","bold"),e.setFontSize(18),e.text("Component Audit by M.ai",d,l),l+=18,e.setFont("helvetica","normal"),e.setFontSize(10),e.text(`URL: ${t.url}`,d,l),l+=14,e.text(`Library context: ${t.libraryContext||"No design system detected"}`,d,l),l+=14,e.text(`Timestamp: ${t.timestamp||""}`,d,l),l+=18,R(e,{startY:l,margin:{left:d,right:d},head:[["Total","Custom","Native","Carbon","Fluent UI","Material UI","High Risk","Medium Risk"]],body:[[String(a.totalComponents??0),String(a.customComponentCount??0),String(a.nativeComponentCount??0),String(a.carbonComponentCount??0),String(a.fluentComponentCount??0),String(a.materialComponentCount??0),String(a.riskSummary?.high??0),String(a.riskSummary?.medium??0)]],styles:{fontSize:9,cellPadding:4},headStyles:{fillColor:[40,40,40]}}),l=e.lastAutoTable.finalY+18,b?.data){e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Screenshot with annotations",d,l),l+=10;const c=Number(b.width||1),k=Number(b.height||1),S=Math.max(220,Math.round(o*(k/c)));e.addImage(`data:${b.mimeType||"image/png"};base64,${b.data}`,"PNG",d,l,o,S);const C=o/c,g=S/k;u.forEach(y=>{if(!y.boundingBox)return;const T=d+y.boundingBox.x*C,A=l+y.boundingBox.y*g,$=y.boundingBox.width*C,s=y.boundingBox.height*g;if($>0&&s>0){const h=y.severity==="high";e.setDrawColor(h?204:234,h?51:88,h?51:12),e.setLineWidth(1),e.rect(T,A,$,s),e.setFillColor(h?122:160,h?40:80,h?40:10),e.circle(T+8,A+8,8,"F"),e.setTextColor(255,255,255),e.setFont("helvetica","bold"),e.setFontSize(8),e.text(String(y.annotationId),T+8,A+10.5,{align:"center"}),e.setTextColor(0,0,0)}}),l+=S+18}e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Annotations",d,l),l+=8,u.length===0?(e.setFont("helvetica","normal"),e.setFontSize(10),e.text("No risky implementations found.",d,l+12),l+=30):(R(e,{startY:l,margin:{left:d,right:d},head:[["#","Risk","Rule","Type","Library","Suggested component","Storybook"]],body:u.map(c=>[String(c.annotationId),String(c.severity||""),String(c.rule||""),String(c.componentType||""),String(c.libraryLabel||"—"),String(c.recommendedComponent||c.fluentAlternative||"n/a"),String(c.storybookUrl||"—")]),styles:{fontSize:7.5,cellPadding:3,valign:"top",overflow:"linebreak"},headStyles:{fillColor:[122,74,42]},columnStyles:{0:{cellWidth:22},1:{cellWidth:44},2:{cellWidth:110},3:{cellWidth:70},4:{cellWidth:90},5:{cellWidth:110},6:{cellWidth:266}}}),l=e.lastAutoTable.finalY+18),e.setFont("helvetica","bold"),e.setFontSize(14),e.text("Component inventory",d,l),l+=8,R(e,{startY:l,margin:{left:d,right:d},head:[["ID","Type","Library component","Props","Source","Risk","Conf.","Text","Selector","Storybook"]],body:m.map(c=>{const k=c?.detectedProps&&Object.keys(c.detectedProps).length?Object.entries(c.detectedProps).map(([S,C])=>`${S}=${C}`).join(" "):"—";return[String(c?.id||""),String(c?.componentType||""),String(c?.libraryComponentName||c?.fluentComponent||"—"),k,String(c?.possibleSource||""),String(c?.risk||""),`${c?.confidence??""}%`,String(c?.visibleText||"").substring(0,40),String(c?.selector||"").substring(0,80),String(c?.storybookUrl||"—")]}),styles:{fontSize:6.5,cellPadding:2,valign:"top",overflow:"linebreak"},headStyles:{fillColor:[40,40,40]},columnStyles:{0:{cellWidth:40},1:{cellWidth:54},2:{cellWidth:70},3:{cellWidth:90},4:{cellWidth:44},5:{cellWidth:36},6:{cellWidth:30},7:{cellWidth:96},8:{cellWidth:110},9:{cellWidth:142}}}),e.save(`${x}.pdf`)}function E(t,e){const a=e?.summary||{},u=D(e,10),m=Array.isArray(e?.inventory)?e.inventory:[],b=a.componentDistribution||{},x=u.length,i=e?.maiContext?.dsAssessment||null,d=i?.label?String(i.label):"",o=i?.owner?String(i.owner):"",l=i?.confidence?String(i.confidence):"",c=d&&o&&!d.includes(o)?d+" ("+o+")":d,k=(l==="high"||l==="medium"||l==="low")&&c?`<div class="mb-6 rounded border border-accent/40 bg-accent/10 p-5 dark:bg-accent/15"><p class="m-0 text-xs uppercase tracking-wide text-muted">Design system detected</p><p class="m-0 mt-1 font-serif text-2xl text-ink">${n(c)}</p><p class="m-0 mt-1 text-sm text-muted">Confidence: ${n(l)}</p></div>`:"";let g=((e?.authDetection||e?.maiContext?.authDetection)?.isLoginPage?`<div class="mb-6 rounded border border-orange-500/60 bg-orange-50 p-5 text-ink dark:border-orange-400/60 dark:bg-orange-900/20 dark:text-cream"><p class="m-0 text-xs uppercase tracking-wide text-orange-700 dark:text-orange-300">Sign-in page detected</p><p class="m-0 mt-1 font-serif text-xl">This scan landed on a login screen.</p><p class="m-0 mt-2 text-sm">The inventory below describes the sign-in page — not the app behind it. The headless scanner can't authenticate. To audit the actual product, use the bookmarklet: sign in your own browser, then run it on the page you want to study.</p><p class="m-0 mt-4"><a href="/toybox/component-audit-bookmarklet/" class="inline-flex items-center rounded-md border border-accent bg-accent px-4 py-2 text-sm font-semibold text-paper no-underline hover:bg-accent/90">Open the bookmarklet tool →</a></p></div>`:"")+k+`
    <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <h3 class="mt-0 font-serif text-xl">Report Summary</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <div>
          <p class="mb-1 text-xs text-muted">Components</p>
          <p class="m-0 text-xl font-bold">${n(a.totalComponents??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Findings</p>
          <p class="m-0 text-xl font-bold">${n(x)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">High Risk</p>
          <p class="m-0 text-xl font-bold text-red-700">${n(a.riskSummary?.high??0)}</p>
        </div>
        <div>
          <p class="mb-1 text-xs text-muted">Medium Risk</p>
          <p class="m-0 text-xl font-bold text-orange-600">${n(a.riskSummary?.medium??0)}</p>
        </div>
      </div>
      <div class="mt-5 rounded border border-ink/10 bg-paper p-4 text-sm text-muted dark:bg-cream/5">
        <p class="m-0">
          Source mix:
          <span class="font-semibold text-ink">${n(a.customComponentCount??0)}</span> custom,
          <span class="font-semibold text-ink">${n(a.nativeComponentCount??0)}</span> native,
          <span class="font-semibold text-ink">${n(a.carbonComponentCount??0)}</span> Carbon,
          <span class="font-semibold text-ink">${n(a.fluentComponentCount??0)}</span> Fluent UI,
          <span class="font-semibold text-ink">${n(a.materialComponentCount??0)}</span> Material UI.
        </p>
        ${(e?.librariesDetected||[]).length?`
        <p class="mt-3 m-0">
          Detected libraries:
          ${(e.librariesDetected||[]).map(s=>`<span class="ml-1 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${s==="fluent"?"bg-blue-50 text-blue-800 border-blue-200":s==="material"?"bg-indigo-50 text-indigo-800 border-indigo-200":s==="carbon"?"bg-slate-100 text-slate-800 border-slate-300":"bg-cream text-ink border-ink/20"}">${n(s==="fluent"?"Fluent UI":s==="material"?"Material UI":s==="carbon"?"Carbon":s)}</span>`).join("")}
        </p>`:""}
      </div>
    </div>
  `;const y=e?.fluentMeta||{},T=e?.notice,A=e?.librariesDetected||[],$=e?.frameworkMeta||{frameworks:[],generator:null};if(T&&(g+=`
      <div class="mb-6 rounded border border-ink/15 bg-cream/40 p-4 text-sm text-ink dark:bg-cream/10">
        <p class="m-0"><strong>Heads up:</strong> ${n(T)}</p>
      </div>
    `),A.length>0){const s=["carbon","fluent","material"],w=[...A].sort((p,r)=>s.indexOf(p)-s.indexOf(r)).map(p=>{if(p==="fluent"){const r=y.versionDetected?`v${n(y.versionDetected)}`:"version unpinned",f=y.versionLatest?`v${n(y.versionLatest)}`:"—",v=y.isOutdated?'<span class="ml-2 inline-flex items-center rounded-full border border-orange-400 px-2 py-0.5 text-xs font-semibold text-orange-700">outdated</span>':"";return`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Fluent UI</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink"><code>fui-*</code> elements:</span> ${n(y.totalFuiElements??0)}</li>
              <li><span class="text-ink">@fluentui/react-components:</span> ${r} · latest ${f}${v}</li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://react.fluentui.dev" target="_blank" rel="noreferrer noopener">react.fluentui.dev</a></li>
            </ul>
          </div>`}return p==="material"?`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Material UI</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink">Detected via:</span> <code>Mui*-root</code>, <code>mdc-*</code>, <code>m3-*</code>, or <code>material-icons</code></li>
              <li><span class="text-ink">Suggested package:</span> <code>@mui/material</code></li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://mui.com/material-ui/" target="_blank" rel="noreferrer noopener">mui.com</a> · <a class="text-accent underline" href="https://m3.material.io" target="_blank" rel="noreferrer noopener">m3.material.io</a></li>
            </ul>
          </div>`:p==="carbon"?`
          <div class="rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
            <h4 class="mt-0 font-serif text-lg">Carbon</h4>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              <li><span class="text-ink">Detected via:</span> <code>cds--*</code>, <code>bx--*</code>, <code>c4p--*</code></li>
              <li><span class="text-ink">Suggested package:</span> <code>@carbon/react</code></li>
              <li><span class="text-ink">Docs:</span> <a class="text-accent underline" href="https://carbondesignsystem.com" target="_blank" rel="noreferrer noopener">carbondesignsystem.com</a></li>
            </ul>
          </div>`:""}).join("");g+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl">Design system fingerprint</h3>
        <div class="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${w}</div>
      </div>
    `}if(($.frameworks||[]).length||$.generator){const s=($.frameworks||[]).map(h=>{const w=h.version?` <span class="text-muted">v${n(h.version)}</span>`:"";return`<span class="inline-flex items-center rounded-full border border-ink/15 bg-cream/40 px-2.5 py-0.5 text-xs font-semibold text-ink dark:bg-cream/10">${n(h.name)}${w}</span>`}).join(" ");g+=`
      <div class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
        <h3 class="mt-0 font-serif text-xl">Built with</h3>
        <p class="mt-2 text-sm text-muted">Framework / build tool detected via <code>&lt;meta name="generator"&gt;</code> and runtime hints. This is a separate dimension from the UI component library — frameworks like Astro, Next.js, or SvelteKit don't ship UI components themselves.</p>
        <div class="mt-3 flex flex-wrap gap-2">${s||'<span class="text-muted text-sm">No framework signature found.</span>'}</div>
        ${$.generator?`<p class="mt-3 text-xs text-muted"><code>&lt;meta name="generator"&gt;</code>: ${n($.generator)}</p>`:""}
      </div>
    `}if(g+=`
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
  `,e?.screenshot?.data){const s=e.screenshot,h=Number(s.width||1),w=Number(s.height||1),p=q(u,h,w);g+=`
      <div class="mt-5 space-y-5">
        <div class="relative overflow-hidden rounded border border-ink/10 bg-paper">
          <img
            src="data:${n(s.mimeType||"image/png")};base64,${s.data}"
            alt="Component audit screenshot with annotations"
            class="block h-auto w-full"
          />
          <div class="pointer-events-none absolute inset-0">${p}</div>
        </div>
        <div>
          <h4 class="font-serif text-lg">Findings list</h4>
          <div class="mt-3 space-y-3">
    `,u.forEach(r=>{V(r.severity),g+=`
        <article id="ca-annotation-${n(r.annotationId)}" class="rounded border border-ink/10 bg-paper p-4 shadow-sm dark:bg-cream/5">
          <div class="flex items-start gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-paper">${n(r.annotationId)}</div>
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-widest text-muted">
                ${n((r.severity||"").toUpperCase())} RISK${r.priority?` · <span class="rounded bg-cream px-1.5 py-0.5 text-[10px] tracking-wider text-ink dark:bg-cream/20 dark:text-ink">${n(r.priority)}</span>`:""}
              </p>
              <h4 class="mt-1 font-serif text-base">${n(r.rule||"Finding")}</h4>
            </div>
          </div>
          <dl class="mt-3 space-y-2 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Component</dt>
              <dd class="mt-1 text-ink">${n(r.componentType||"n/a")}</dd>
            </div>
            ${r.fluentComponent?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Fluent component</dt>
              <dd class="mt-1 text-ink"><code>${n(r.fluentComponent)}</code>${r.storybookUrl?` · <a class="text-accent underline" href="${n(r.storybookUrl)}" target="_blank" rel="noreferrer noopener">Storybook docs</a>`:""}</dd>
            </div>`:""}
            ${r.detectedProps&&Object.keys(r.detectedProps).length?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Detected props</dt>
              <dd class="mt-1 flex flex-wrap gap-1">${Object.entries(r.detectedProps).map(([f,v])=>`<span class="inline-block rounded-full border border-ink/15 px-2 py-0.5 text-[11px] text-muted">${n(f)}=${n(String(v))}</span>`).join("")}</dd>
            </div>`:""}
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Why it matters</dt>
              <dd class="mt-1 text-muted">${n(r.evidence||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested fix</dt>
              <dd class="mt-1 whitespace-pre-line text-muted">${n(r.recommendation||"")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Library</dt>
              <dd class="mt-1 text-muted">${n(r.libraryLabel||"None detected")}</dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Suggested component</dt>
              <dd class="mt-1 text-muted">${n(r.recommendedComponent||r.fluentAlternative||"n/a")}</dd>
            </div>
            ${r.recommendedComponent||r.fluentAlternative?`
            <div>
              <dt class="text-xs uppercase tracking-widest text-muted">Package</dt>
              <dd class="mt-1 font-mono text-xs text-accent">${n(r.recommendedPackage||r.fluentPackage||"")}</dd>
            </div>`:""}
          </dl>
        </article>
      `}),g+="</div></div></div>"}else u.length===0&&(g+='<p class="mt-5 rounded bg-emerald-50 p-4 text-emerald-800">No risky implementations found.</p>');g+=`
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
  `,u.forEach(s=>{g+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-3 pr-3 text-muted">${n(s.annotationId)}</td>
        <td class="py-3 pr-3"><span class="rounded bg-cream px-2 py-0.5 text-xs font-semibold uppercase ${B(s.severity||"")}">${n((s.severity||"").toUpperCase())}</span></td>
        <td class="py-3 pr-3 font-medium">${n(s.rule||"Finding")}</td>
        <td class="py-3 pr-3 text-muted">${n(s.componentType||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${n(s.selector||"n/a")}</td>
        <td class="py-3 pr-3 text-muted">${n(_(s.boundingBox))}</td>
      </tr>
    `}),g+="</tbody></table></div>",u.length>10&&(g+=`<p class="mt-3 text-xs text-muted">... and ${n(u.length-10)} more annotated findings</p>`),g+=`
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
  `,g+=`
    <details class="mb-6 rounded border border-ink/10 bg-paper/80 p-6 dark:bg-cream/5">
      <summary class="cursor-pointer font-serif text-xl">Component inventory (${n(m.length)})</summary>
      <p class="mt-2 text-sm text-muted">All detected components with source, risk, and confidence score.</p>
      ${Object.keys(b).length?`
      <div class="mt-4 rounded border border-ink/10 bg-paper p-4 dark:bg-cream/5">
        <h4 class="mt-0 font-serif text-lg">Component distribution</h4>
        <div class="mt-3 flex flex-wrap gap-2">
          ${Object.entries(b).sort((s,h)=>h[1]-s[1]).map(([s,h])=>`
              <span class="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-xs text-muted">
                <span class="font-semibold text-ink">${n(h)}</span>
                ${n(s)}
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
  `,m.forEach(s=>{const h=s?.detectedProps?Object.entries(s.detectedProps):[],w=h.length?h.map(([v,P])=>`<span class="mr-1 inline-block rounded-full border border-ink/15 px-2 py-0.5 text-[10px] text-muted">${n(v)}=${n(String(P))}</span>`).join(""):'<span class="text-muted">—</span>',p=s?.storybookUrl?`<a class="text-accent underline" href="${n(s.storybookUrl)}" target="_blank" rel="noreferrer noopener">docs</a>`:'<span class="text-muted">—</span>',r=s?.libraryComponentName||s?.fluentComponent||s?.materialComponent||s?.carbonComponent||null,f=r?`<code class="text-ink">${n(r)}</code>`:'<span class="text-muted">—</span>';g+=`
      <tr class="border-b border-ink/5 align-top last:border-b-0">
        <td class="py-2 pr-3 text-muted text-xs">${n(s?.id||"")}</td>
        <td class="py-2 pr-3 text-xs">${n(s?.componentType||"")}</td>
        <td class="py-2 pr-3 text-xs">${f}</td>
        <td class="py-2 pr-3 text-xs">${w}</td>
        <td class="py-2 pr-3 text-xs text-muted">${n(s?.possibleSource||"")}</td>
        <td class="py-2 pr-3 text-xs ${B(s?.risk||"")}">${n((s?.risk||"").toUpperCase())}</td>
        <td class="py-2 pr-3 text-xs text-muted">${n(s?.confidence??"")}%</td>
        <td class="py-2 pr-3 text-xs text-muted">${n((s?.visibleText||"").substring(0,40))}</td>
        <td class="py-2 pr-3 text-xs text-muted">${n((s?.selector||"").substring(0,60))}</td>
        <td class="py-2 pr-3 text-xs">${p}</td>
      </tr>
    `}),g+="</tbody></table></div>",g+=`<p class="mt-3 text-xs text-muted">${n(m.length)} components total — the downloadable report preserves the full list.</p>`,g+="</details>",g+=`
    <div class="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-4">
      <button type="button" data-ca-export-format="md" class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download Markdown
      </button>
      <button type="button" data-ca-export-format="pdf" class="rounded bg-ink px-4 py-2 text-sm font-semibold text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
        Download PDF
      </button>
    </div>
  `,t.innerHTML=g,t.querySelectorAll("[data-ca-export-format]").forEach(s=>{s.addEventListener("click",()=>{const h=s.getAttribute("data-ca-export-format");if(h==="pdf")K(e);else if(h==="md"){const w=J(e),p=`component-audit-${new URL(e.url).hostname}-${new Date(e.timestamp||Date.now()).toISOString().slice(0,10)}`,r=new Blob([w],{type:"text/markdown;charset=utf-8"}),f=document.createElement("a");f.href=URL.createObjectURL(r),f.download=`${p}.md`,document.body.appendChild(f),f.click(),f.remove(),URL.revokeObjectURL(f.href)}})})}function X(t,e,a){E(t,e);const u=e?.scope||{},m=Array.isArray(u.selections)&&u.selections.length?u.selections.map(d=>d.name||d.type).filter(Boolean).join(", "):u.name||u.type||u.selector||"selected component",b=Array.isArray(e?.relatedFindings)?e.relatedFindings.length:0,x=document.createElement("div");x.className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded border border-accent/40 bg-accent/10 p-4 dark:bg-accent/15",x.innerHTML=`
    <div>
      <p class="m-0 text-xs uppercase tracking-wide text-muted">Scoped audit</p>
      <p class="m-0 mt-1 font-serif text-lg text-ink">${n(m)}</p>
      ${b?`<p class="m-0 mt-1 text-sm text-muted">${n(b)} related finding${b===1?"":"s"} elsewhere on the page.</p>`:""}
    </div>
    <button type="button" data-ca-full-page class="rounded border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">Run full page audit</button>
  `,t.prepend(x);const i=x.querySelector("[data-ca-full-page]");i&&i.addEventListener("click",()=>a())}function Q(){const t=document.getElementById("component-audit-tool"),e=t?.dataset.componentAuditApiUrl||"",a=["localhost","127.0.0.1","::1"].includes(window.location.hostname)||window.location.hostname.endsWith(".local"),m=window.__COMPONENT_AUDIT_API_URL||e||(a?"http://localhost:3000/api/component-audit":`${window.location.origin}/api/component-audit`),b=document.getElementById("component-audit-url"),x=document.getElementById("run-component-audit-btn"),i=document.getElementById("component-result-container"),d=document.getElementById("component-audit-scope-panel"),o=document.getElementById("component-audit-mode-help"),l=document.getElementById("component-audit-mode-toggle");if(!t||!b||!x||!i)return;window.location.hash==="#component-audit-tool"&&requestAnimationFrame(()=>{t.scrollIntoView({block:"start"})});const c=(p,r)=>window.dispatchEvent(new CustomEvent("site:track",{detail:{name:p,params:r}})),k={full:"Scans the whole page and inventories every component.",scoped:"Find a component first, then audit just that piece. We'll still build the page's design-system fingerprint."},S={full:"Run audit",scoped:"Find components"},C=()=>l?.checked?"scoped":"full",g=p=>{o&&(o.textContent=k[p]),x.textContent=S[p]},y=p=>{l&&(l.checked=p==="scoped"),g(p)};l&&l.addEventListener("change",()=>{g(C()),d&&(d.innerHTML=""),i.innerHTML=""}),g(C());let T=!1;b.addEventListener("focus",()=>{T||(T=!0,c("tool_engage",{tool:"component"}))},{once:!1});const A=()=>{const p=b.value.trim();if(!p)return U(i,"Please enter a URL."),null;if(typeof navigator<"u"&&!navigator.onLine)return U(i,"You appear to be offline.","Reconnect to the internet, then run the audit again."),null;try{new URL(p.startsWith("http")?p:"https://"+p)}catch{return U(i,"Please enter a valid URL."),null}return p};async function $(p,r){const f=r.loadingContainer||i,v=x.textContent||"";x.disabled=!0,x.textContent=r.runningLabel;const P=z(f);try{const I=new AbortController,M=window.setTimeout(()=>I.abort(),9e4);let L;try{L=await fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p),signal:I.signal})}finally{window.clearTimeout(M)}if(!L.ok){let F=null;try{F=await L.json()}catch{F=null}const j=Y(F?.error);c("audit_error",{tool:"component",http_status:L.status}),U(f,j,F?.hint||H(L.status,j));return}const O=await L.json();r.onSuccess(O)}catch(I){const M=String(I?.message||"").toLowerCase(),L=I?.name==="AbortError"||M.includes("aborted");c("audit_error",{tool:"component",reason:L?"timeout":"network"}),U(f,L?"This audit took too long to finish.":"Unable to contact the audit service.",L?"The service may be busy right now. Please retry in a minute.":"Check your connection and retry. If this persists, the API may be temporarily unavailable.")}finally{P.stop(),x.disabled=!1,x.textContent=v}}async function s(p){d&&(d.innerHTML=""),c("audit_run",{tool:"component",scope:"full"}),await $({url:p},{runningLabel:"Running audit...",onSuccess:r=>{const f=Array.isArray(r?.components)?r.components.length:null;c("audit_complete",{tool:"component",scope:"full",component_count:f}),E(i,r)}})}async function h(p,r){const f=Array.isArray(r?.selectors)?r.selectors.length:1;c("audit_run",{tool:"component",scope:"scoped",match_all:!!r?.matchAll,selection_count:f}),await $({url:p,mode:"scoped",scope:r,includeRelated:!0},{runningLabel:f>1?`Auditing ${f} components...`:"Auditing component...",onSuccess:v=>{c("audit_complete",{tool:"component",scope:"scoped",finding_count:Array.isArray(v?.findings)?v.findings.length:null,related_count:Array.isArray(v?.relatedFindings)?v.relatedFindings.length:null}),X(i,v,()=>{y("full"),s(p),t.scrollIntoView({block:"start"})})}})}async function w(p){c("audit_run",{tool:"component",scope:"inventory"}),i.innerHTML="",await $({url:p,mode:"inventory"},{runningLabel:"Finding components...",loadingContainer:d||i,onSuccess:r=>W(d||i,r,f=>h(p,f))})}x.addEventListener("click",async()=>{const p=A();p&&(C()==="scoped"?await w(p):await s(p))})}Q();
