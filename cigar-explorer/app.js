const PRODUCTS = [
  {
    id: "viva-la-vida",
    brand: "ARTESANO DEL TOBACCO",
    name: "VIVA LA VIDA",
    variant: "ROBUSTO",
    accent: "#b4372f",
    image: "https://www.tccigar.com/cdn/shop/files/Viva_La_Vida_Robusto.jpg?v=1762743942&width=4000",
    imageCredit: "cigars-shops.ru",
    size: '5 × 54',
    strength: "FULL",
    origin: "ESTELÍ, NICARAGUA",
    wrapper: "HABANO OSCURO 2000",
    binder: "COROJO 99 / NICARAGUA",
    filler: "CRIOLLO 98 / NICARAGUA",
    flavors: ["Roasted nuts","Dark coffee","Rum","Rye","Raisin toast","Nutty finish"],
    source: "https://artesanodeltobacco.com/cigar-brands/viva-la-vida/",
    sourceName: "ARTESANO DEL TOBACCO",
    facts: [
      ["01 / HEAD", "ROBUSTO", '5 × 54', "A broad Robusto format with a 54 ring gauge."],
      ["02 / WRAPPER", "HABANO OSCURO", "NICARAGUA", "The classic Viva La Vida uses a dark Habano Oscuro 2000 wrapper."],
      ["03 / CORE", "ALL NICARAGUAN", "AJ FERNANDEZ", "Binder and filler tobaccos come from Nicaragua and the line is produced with A.J. Fernandez."],
      ["04 / BODY", "FULL", "RICH + CREAMY", "The maker describes a creamy, smooth, full-bodied profile."],
      ["05 / FLAVOR", "ROASTED COFFEE", "NUTS · RUM · RYE", "Published notes include roasted nuts, heavily roasted coffee and boozy rum-and-rye tones."],
      ["06 / FINISH", "RAISIN TOAST", "NUTTY FINISH", "The profile settles into warm raisin-toast character and a nutty finish."]
    ]
  },
  {
    id: "oliva-melanio",
    brand: "OLIVA",
    name: "SERIE V",
    variant: "MELANIO ROBUSTO",
    accent: "#a86a34",
    image: "https://cdn11.bigcommerce.com/s-6ihhxuk/images/stencil/1920x1920/products/13921/67373/Oliva_serie_V_melanio_robusto_4__06603__32959__26286.1728566911.JPG?c=2",
    imageCredit: "GQ Tobaccos / BigCommerce",
    size: '5 × 52',
    strength: "MEDIUM–FULL",
    origin: "NICARAGUA",
    wrapper: "ECUADORIAN SUMATRA",
    binder: "NICARAGUA",
    filler: "NICARAGUA / JALAPA LIGERO",
    flavors: ["Caramel","Nuts","Cedar","Coffee","Mild spice","Cinnamon"],
    source: "https://olivacigar.com/cigars/serie-v-melanio/",
    sourceName: "OLIVA CIGARS",
    facts: [
      ["01 / FORMAT", "ROBUSTO", '5 × 52', "The Serie V Melanio range includes a 5 × 52 Robusto."],
      ["02 / WRAPPER", "ECUADOR", "SUMATRA SEED", "The Melanio is known for its Ecuadorian wrapper over a Nicaraguan core."],
      ["03 / FILLER", "JALAPA", "FERMENTED LIGERO", "Oliva highlights carefully fermented ligero and a carefully aged Jalapa blend."],
      ["04 / BODY", "RICH", "BALANCED POWER", "The blend is built around robust, rich Nicaraguan tobacco with a polished delivery."],
      ["05 / FLAVOR", "CARAMEL + NUTS", "CEDAR · COFFEE", "Published tasting profiles commonly show caramel, nuts, cedar, coffee and gentle spice."],
      ["06 / FINISH", "MILD SPICE", "CINNAMON SWEETNESS", "The finish carries mild spice with a soft cinnamon-like sweetness."]
    ]
  },
  {
    id: "oliva-135",
    brand: "OLIVA",
    name: "SERIE V",
    variant: "135 ANIVERSARIO",
    accent: "#d19b52",
    image: "https://www.cigarcircus.com/web/image/product.template/33857/image_1920",
    imageCredit: "EGM Cigars",
    size: '5.5 × 54',
    strength: "MEDIUM–FULL",
    origin: "NICARAGUA",
    wrapper: "ECUADORIAN HABANO SUN GROWN",
    binder: "NICARAGUA",
    filler: "NICARAGUA / JALAPA",
    flavors: ["Coffee","Dark chocolate","Earth","Spice","Nuts"],
    source: "https://atlanticcigar.com/oliva-serie-v-135th-anniversary-edicion-limitada-perfecto/",
    sourceName: "OLIVA / ATLANTIC CIGAR",
    facts: [
      ["01 / SHAPE", "PERFECTO", '5.5 × 54', "A commemorative Perfecto format with a tapered foot."],
      ["02 / WRAPPER", "HABANO SUN GROWN", "ECUADOR", "Published specifications list an Ecuadorian Sun Grown Habano wrapper."],
      ["03 / CORE", "NICARAGUA", "JALAPA LIGERO", "The binder and filler are Nicaraguan, with Jalapa tobacco central to the Serie V character."],
      ["04 / BODY", "MEDIUM–FULL", "SMOOTH POWER", "The blend is designed to carry Serie V intensity while maintaining a smooth presentation."],
      ["05 / FLAVOR", "COFFEE", "DARK CHOCOLATE", "Published descriptions emphasize rich coffee and dark-chocolate tones."],
      ["06 / FINISH", "SPICE", "EARTH + NUTS", "Balanced spice rounds out the richer coffee, earth and nut profile."]
    ]
  },
  {
    id: "my-father-blue",
    brand: "MY FATHER",
    name: "MY FATHER",
    variant: "BLUE ROBUSTO",
    accent: "#61b9d5",
    image: "https://www.cigarsdirect.com/cdn/shop/files/my-father-cigars-blue-robusto-single.jpg?v=1752808840&width=2000",
    imageCredit: "Cigars Direct",
    size: '5.25 × 52',
    strength: "MEDIUM–FULL",
    origin: "HONDURAS",
    wrapper: "CT BROADLEAF ROSADO",
    binder: "HONDURAS",
    filler: "HONDURAS / FINCA LA OPULENCIA",
    flavors: ["Smoky cedar","Earth","Black pepper","Cocoa","Leather","Black cherry"],
    source: "https://myfathercigars.com/cigar/my-father-blue/",
    sourceName: "MY FATHER CIGARS",
    facts: [
      ["01 / FORMAT", "ROBUSTO", '5.25 × 52', "My Father Blue is offered in box-pressed formats, including this Robusto."],
      ["02 / WRAPPER", "CT BROADLEAF ROSADO", "HONDURAN PROJECT", "The official blend uses a Connecticut Broadleaf Rosado wrapper."],
      ["03 / CORE", "HONDURAS", "FINCA LA OPULENCIA", "Binder and filler come from Honduras, including tobacco from the Garcia family’s Honduran farm."],
      ["04 / BODY", "MEDIUM–FULL", "BOLD + REFINED", "My Father describes Blue as medium to full-bodied."],
      ["05 / FLAVOR", "CEDAR + COCOA", "EARTH · PEPPER", "Retail tasting descriptions emphasize smoky cedar, earth, pepper and cocoa."],
      ["06 / FINISH", "LEATHER", "BLACK CHERRY · MOLASSES", "Later notes can move toward leather, darker fruit and subtle molasses-like sweetness."]
    ]
  },
  {
    id: "opus-x",
    brand: "ARTURO FUENTE",
    name: "FUENTE FUENTE",
    variant: "OPUSX SUPER BELICOSO",
    accent: "#b83a31",
    image: "https://cigarworld.co.uk/cdn/shop/files/fuente_super_belicoso.jpg?v=1773268155&width=2000",
    imageCredit: "Cigar World",
    size: '5.5 × 52',
    strength: "FULL",
    origin: "DOMINICAN REPUBLIC",
    wrapper: "DOMINICAN OPUSX",
    binder: "DOMINICAN",
    filler: "DOMINICAN",
    flavors: ["Sweet tobacco","Cedar","Spice","Rich earth","Lingering sweetness"],
    source: "https://arturofuente.com/our-cigars/opusx/ff-opusx/",
    sourceName: "ARTURO FUENTE",
    facts: [
      ["01 / FORMAT", "SUPER BELICOSO", '5.5 × 52', "The OpusX Super Belicoso is a 5.5-inch, 52-ring figurado."],
      ["02 / WRAPPER", "DOMINICAN", "CHATEAU DE LA FUENTE", "The line is built around Fuente’s celebrated Dominican-grown wrapper."],
      ["03 / PURO", "100% DOMINICAN", "WRAPPER · BINDER · FILLER", "Fuente describes OpusX as the original Dominican puro."],
      ["04 / BODY", "FULL", "SMOOTH + BOLD", "The house description emphasizes a combination of smoothness and boldness."],
      ["05 / FLAVOR", "SWEET FULLNESS", "CEDAR · SPICE", "The exclusive wrapper contributes a sweet, lingering fullness over a rich Dominican core."],
      ["06 / FINISH", "LONG", "RICH + LINGERING", "The finish is designed around persistent richness rather than a quick fade."]
    ]
  },
  {
    id: "la-opulencia",
    brand: "MY FATHER",
    name: "LA OPULENCIA",
    variant: "ROBUSTO",
    accent: "#55a875",
    image: "https://www.cigarsdirect.com/cdn/shop/products/my-father-la-opulencia-robusto-single.jpg?v=1658862740&width=2000",
    imageCredit: "Cigars Direct",
    size: '5.25 × 52',
    strength: "MEDIUM–FULL",
    origin: "NICARAGUA",
    wrapper: "MEXICO ROSADO OSCURO",
    binder: "NICARAGUA",
    filler: "NICARAGUA",
    flavors: ["Chocolate","Cocoa","Oak","Anise","Pepper","Leather"],
    source: "https://myfathercigars.com/cigar/my-father-la-opulencia/",
    sourceName: "MY FATHER CIGARS",
    facts: [
      ["01 / FORMAT", "ROBUSTO", '5.25 × 52', "A box-pressed Robusto in the La Opulencia family."],
      ["02 / WRAPPER", "ROSADO OSCURO", "MEXICO", "The official line is finished with a Mexico Rosado Oscuro wrapper."],
      ["03 / CORE", "NICARAGUA", "GARCIA FAMILY FARMS", "Corojo, Criollo and Habano tobaccos from Garcia-family farms build the interior blend."],
      ["04 / BODY", "MEDIUM–FULL", "RICH + COMPLEX", "My Father positions La Opulencia around richness, aroma and complexity."],
      ["05 / FLAVOR", "CHOCOLATE + COCOA", "PEPPER · LEATHER", "Published tasting descriptions repeatedly center on cocoa/chocolate with pepper and leather."],
      ["06 / FINISH", "OAK", "ANISE + SPICE", "Oak, anise and lingering spice add a dry, structured finish."]
    ]
  },
  {
    id: "chateau-fuente",
    brand: "ARTURO FUENTE",
    name: "CHATEAU",
    variant: "FUENTE NATURAL",
    accent: "#69935b",
    image: "https://adwanicigar.com/cdn/shop/products/AFCR.jpg?v=1634123913&width=2000",
    imageCredit: "Adwani Cigar",
    size: '4.5 × 50',
    strength: "MELLOW–MEDIUM",
    origin: "DOMINICAN REPUBLIC",
    wrapper: "CONNECTICUT SHADE",
    binder: "DOMINICAN",
    filler: "DOMINICAN",
    flavors: ["Cedar","Nuts","Cream","Sweet tobacco","Wood"],
    source: "https://arturofuente.com/our-cigars/chateau-fuente/",
    sourceName: "ARTURO FUENTE",
    facts: [
      ["01 / FORMAT", "CHATEAU", '4.5 × 50', "The standard Chateau Fuente measures 4.5 inches with a 50 ring gauge."],
      ["02 / PRESENTATION", "CEDAR SLEEVE", "SIGNATURE FOOT RIBBON", "The series is individually wrapped in its signature cedar sleeve."],
      ["03 / WRAPPER", "CONNECTICUT SHADE", "NATURAL", "Natural Chateau Fuente presentations are commonly finished with Connecticut Shade."],
      ["04 / CORE", "DOMINICAN", "BINDER + FILLER", "Aged Dominican tobaccos form the binder and filler."],
      ["05 / FLAVOR", "NUTTY + SMOOTH", "CEDAR", "Retail descriptions emphasize a rich, nutty, smooth profile with cedar influence."],
      ["06 / BODY", "MELLOW–MEDIUM", "CREAMY FINISH", "A softer profile makes this one of the gentler cigars in the shelf set."]
    ]
  },
  {
    id: "my-father-no1",
    brand: "MY FATHER",
    name: "MY FATHER",
    variant: "NO.1 ROBUSTO",
    accent: "#c97c68",
    image: "https://www.cigarvault.ca/cdn/shop/products/my-father-no1-robusto-525552.jpg?v=1680712974&width=2000",
    imageCredit: "Cigar Vault",
    size: '5.25 × 52',
    strength: "FULL",
    origin: "NICARAGUA",
    wrapper: "HABANO ROSADO",
    binder: "NICARAGUA",
    filler: "NICARAGUA",
    flavors: ["Cedar","Leather","Pepper","Cocoa","Spice","Cream"],
    source: "https://myfathercigars.com/cigar/my-father/",
    sourceName: "MY FATHER CIGARS",
    facts: [
      ["01 / FORMAT", "NO.1 ROBUSTO", '5.25 × 52', "The No.1 is the Robusto expression in the flagship My Father line."],
      ["02 / WRAPPER", "HABANO ROSADO", "SELECTED LEAF", "My Father describes the line around a carefully selected Habano-Rosado wrapper."],
      ["03 / CORE", "NICARAGUA", "BINDER + FILLER", "The binder and filler are Nicaraguan tobaccos grown for the Garcia family."],
      ["04 / BODY", "FULL", "PEPPER-DRIVEN", "The official profile is full-bodied with the house’s characteristic spice."],
      ["05 / FLAVOR", "LEATHER + CEDAR", "HOT PEPPER", "The maker highlights leather, cedar and a medley of hot-pepper notes."],
      ["06 / FINISH", "COCOA + CREAM", "SPICE", "Other published tastings add cocoa, cream and layered spice to the finish."]
    ]
  },
  {
    id: "rocky-emerald",
    brand: "ROCKY PATEL",
    name: "EMERALD",
    variant: "ROBUSTO",
    accent: "#35a55b",
    image: "https://klarocigars.com/cdn/shop/files/Rocky-Patel-Emerald-Robusto-h__91612.jpg?v=1740746957&width=2000",
    imageCredit: "Klaro Cigars",
    size: '5.5 × 50',
    strength: "MEDIUM",
    origin: "NICARAGUA",
    wrapper: "ECUADORIAN HABANO",
    binder: "NICARAGUA + MEXICO",
    filler: "NICARAGUA + HONDURAS",
    flavors: ["Sweetness","Coffee","Leather","Hickory","Black pepper"],
    source: "https://www.rockypatel.com/cigar/emerald/",
    sourceName: "ROCKY PATEL",
    facts: [
      ["01 / FORMAT", "ROBUSTO", '5.5 × 50', "The Emerald Robusto is 5.5 inches by a 50 ring gauge."],
      ["02 / WRAPPER", "ECUADORIAN HABANO", "BOX-PRESSED", "Rocky Patel uses an Ecuadorian Habano wrapper on its lighter medium-bodied box-pressed concept."],
      ["03 / BINDERS", "DUAL BINDER", "NICARAGUA + MEXICO", "The cigar uses two binders, one Nicaraguan and one Mexican."],
      ["04 / FILLER", "NICARAGUA", "JAMASTRAN, HONDURAS", "The filler is predominantly Nicaraguan with a leaf from Honduras’s Jamastran Valley."],
      ["05 / BODY", "MEDIUM", "APPROACHABLE", "Rocky Patel describes it as truly medium-bodied, with noticeable sweetness."],
      ["06 / FLAVOR", "SWEET + WOODY", "COFFEE · PEPPER", "Retail tasting descriptions add coffee, leather, hickory and black pepper."]
    ]
  }
];

const app = document.getElementById("app");
let active = 0;
let detail = false;
let progress = 0;
let dragStart = null;
let touchStart = null;

function wrapIndex(i) {
  return ((i % PRODUCTS.length) + PRODUCTS.length) % PRODUCTS.length;
}

function relativeIndex(index, activeIndex, length) {
  let delta = index - activeIndex;
  if (delta > length / 2) delta -= length;
  if (delta < -length / 2) delta += length;
  return delta;
}

function smokeMarkup() {
  let html = '<div class="smoke-wrap"><div class="ember"></div>';
  for (let i=0;i<14;i++) {
    const x = (Math.random()-.5)*42;
    const delay = Math.random()*5;
    const duration = 4.6 + Math.random()*3.2;
    const drift = (Math.random()-.5)*80;
    html += `<i style="left:calc(50% + ${x}px);animation-delay:${delay}s;animation-duration:${duration}s;--drift:${drift}px"></i>`;
  }
  return html + '</div>';
}

function productImg(p, isActive) {
  const cls = p.id === "viva-la-vida" ? "viva-bg-clean" : "";
  return `<div class="photo-shell">
    <img src="${p.image}" alt="${p.name} ${p.variant}" class="${cls}" draggable="false" referrerpolicy="no-referrer" />
    ${isActive ? smokeMarkup() : ""}
  </div>`;
}

function svgFilters() {
  return `<svg class="svg-filter" aria-hidden="true">
    <filter id="remove-product-bg" color-interpolation-filters="sRGB">
      <feColorMatrix in="SourceGraphic" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0.2126 0.7152 0.0722 0 0"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0 .82 1 1 1 1 1 1 1 1 1 1 1 .82 0"/>
      </feComponentTransfer>
    </filter>
    <filter id="remove-viva-bg" color-interpolation-filters="sRGB">
      <feColorMatrix in="SourceGraphic" type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0.2126 0.7152 0.0722 0 0"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0 .72 1 1 1 1 1 1 1 1 1 .90 .45 .08 0"/>
      </feComponentTransfer>
    </filter>
  </svg>`;
}

function carouselMarkup() {
  return `<div class="carousel ${detail ? "detail" : ""}" id="carousel">
    ${PRODUCTS.map((p,index)=>{
      const rel = relativeIndex(index,active,PRODUCTS.length);
      const abs = Math.abs(rel);
      const visible = abs <= 3;
      const isActive = index === active;
      const x = detail ? (isActive ? 0 : rel*32) : rel*19;
      const scale = detail ? (isActive ? 1.45 : .42) : (isActive ? 1.08 : Math.max(.46,.72-abs*.08));
      const opacity = visible ? (isActive ? 1 : Math.max(.15,.62-abs*.14)) : 0;
      const y = detail && isActive ? (0.5-progress)*48 : 0;
      const rot = detail ? 0 : rel*3.2;
      return `<button class="slot ${isActive ? "active" : ""}" data-index="${index}"
        style="--x:${x}vw;--scale:${scale};--opacity:${opacity};--y:${y}vh;--rot:${rot}deg;--accent:${p.accent};pointer-events:${visible?"auto":"none"}">
          <div class="aura"></div>
          ${productImg(p,isActive)}
          ${!detail ? `<div class="slot-name"><small>${String(index+1).padStart(2,"0")}</small><b>${p.brand}</b><strong>${p.name}</strong><span>${p.variant}</span></div>` : ""}
        </button>`;
    }).join("")}
  </div>`;
}

function detailMarkup(p) {
  const current = Math.min(p.facts.length-1, Math.floor(progress*p.facts.length));
  const fact = p.facts[current];
  return `<div class="detail-head">
      <button id="backCollection">× &nbsp; COLLECTION</button>
      <span>${p.brand} / ${p.name} / ${p.variant}</span>
    </div>
    <section class="fact">
      <small>${fact[0]}</small>
      <h2>${fact[1]}</h2>
      <h3 style="color:${p.accent}">${fact[2]}</h3>
      <p>${fact[3]}</p>
      <a href="${p.source}" target="_blank" rel="noreferrer">SOURCE · ${p.sourceName} ↗</a>
    </section>
    <div class="scan"><span>HEAD → FOOT</span><i style="background:linear-gradient(90deg,${p.accent},transparent)"></i></div>
    <div class="rail">
      <div class="track"></div><div class="fill" style="height:${progress*100}%;background:${p.accent}"></div>
      ${p.facts.map((_,i)=>`<button data-fact="${i}" class="${i===current?"active":""}" ${i===current?`style="background:${p.accent};border-color:${p.accent}"`:""}></button>`).join("")}
    </div>
    <div class="scroll-tip">${current < p.facts.length-1 ? "SCROLL / SWIPE DOWN ↓" : "END OF PRODUCT · SCROLL UP ↑"}</div>`;
}

function render() {
  const p = PRODUCTS[active];
  app.className = detail ? "app detail-mode" : "app";
  app.style.setProperty("--accent", p.accent);
  app.innerHTML = `${svgFilters()}
    <div class="noise"></div><div class="ambient"></div>
    <header class="topbar">
      <div class="brand"><b>EMPIRE STOGIE LOUNGE</b><span>CIGAR EXPLORER</span></div>
      <div class="top-actions">
        ${!detail ? "<span>← SWIPE / CLICK PRODUCTS →</span>" : ""}
        <a class="home-link" href="../">LOUNGE HOME</a>
        <button id="fullscreenBtn">FULL SCREEN ⛶</button>
      </div>
    </header>
    ${carouselMarkup()}
    ${!detail ? `
      <section class="hero-copy">
        <small>${p.brand}</small>
        <h1>${p.name}<em>${p.variant}</em></h1>
        <div class="brand-model-line"><span>BRAND · ${p.brand}</span><i></i><span>MODEL · ${p.name} ${p.variant}</span></div>
      </section>
      <aside class="spec-panel left">
        <div><small>SIZE</small><strong>${p.size}</strong></div>
        <div><small>STRENGTH</small><strong>${p.strength}</strong></div>
        <div><small>ORIGIN</small><strong>${p.origin}</strong></div>
      </aside>
      <aside class="spec-panel right">
        <div><small>WRAPPER</small><strong>${p.wrapper}</strong></div>
        <div><small>BINDER</small><strong>${p.binder}</strong></div>
        <div><small>FILLER</small><strong>${p.filler}</strong></div>
      </aside>
      <div class="flavors"><small>FLAVOR PROFILE</small><div>${p.flavors.map(f=>`<span>${f}</span>`).join("")}</div></div>
      <button class="arrow prev" id="prevBtn">←</button>
      <button class="arrow next" id="nextBtn">→</button>
      <button class="explore" id="exploreBtn"><span>EXPLORE HEAD TO FOOT</span><i>↓</i></button>
      <div class="counter">${String(active+1).padStart(2,"0")} <i></i> ${String(PRODUCTS.length).padStart(2,"0")}</div>
      <div class="image-credit">PRODUCT IMAGE · ${p.imageCredit}</div>
    ` : detailMarkup(p)}`;

  bindUI();
}

function setActive(i) { active = wrapIndex(i); progress = 0; render(); }
function openDetail() { detail = true; progress = .001; render(); }
function closeDetail() { detail = false; progress = 0; render(); }
function setProgress(v) { progress = Math.max(0, Math.min(.9999, v)); render(); }

function bindUI() {
  document.getElementById("fullscreenBtn")?.addEventListener("click", ()=>{
    if(!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(()=>{});
    else document.exitFullscreen?.().catch(()=>{});
  });
  document.getElementById("prevBtn")?.addEventListener("click",()=>setActive(active-1));
  document.getElementById("nextBtn")?.addEventListener("click",()=>setActive(active+1));
  document.getElementById("exploreBtn")?.addEventListener("click",openDetail);
  document.getElementById("backCollection")?.addEventListener("click",closeDetail);

  document.querySelectorAll(".slot").forEach(el=>{
    const idx = Number(el.dataset.index);
    if(!detail) el.addEventListener("click",()=>setActive(idx));
    if(idx===active && !detail) {
      el.addEventListener("pointerdown",e=>{dragStart={x:e.clientX};el.setPointerCapture?.(e.pointerId);});
      el.addEventListener("pointerup",e=>{
        if(!dragStart)return;
        const dx=e.clientX-dragStart.x;
        dragStart=null;
        if(Math.abs(dx)>75)setActive(active+(dx<0?1:-1));
      });
    }
  });
  document.querySelectorAll("[data-fact]").forEach(el=>{
    el.addEventListener("click",()=>setProgress((Number(el.dataset.fact)+.02)/PRODUCTS[active].facts.length));
  });
}

let wheelLock = false;
window.addEventListener("wheel",(e)=>{
  e.preventDefault();
  if(!detail){
    if(Math.abs(e.deltaX)>Math.abs(e.deltaY) && Math.abs(e.deltaX)>12){
      if(wheelLock)return;
      wheelLock=true;
      setActive(active+(e.deltaX>0?1:-1));
      setTimeout(()=>wheelLock=false,420);
      return;
    }
    openDetail();
    return;
  }
  progress=Math.max(0,Math.min(.9999,progress+e.deltaY*.00045));
  render();
},{passive:false});

window.addEventListener("keydown",(e)=>{
  if(e.key==="Escape" && detail)closeDetail();
  if(!detail && e.key==="ArrowRight")setActive(active+1);
  if(!detail && e.key==="ArrowLeft")setActive(active-1);
  if(detail && e.key==="ArrowDown")setProgress(progress+1/PRODUCTS[active].facts.length);
  if(detail && e.key==="ArrowUp")setProgress(progress-1/PRODUCTS[active].facts.length);
});

app.addEventListener("touchstart",(e)=>{
  const t=e.touches[0]; if(t)touchStart={x:t.clientX,y:t.clientY};
},{passive:true});

app.addEventListener("touchmove",(e)=>{
  if(!detail || !touchStart)return;
  const t=e.touches[0]; if(!t)return;
  const dy=touchStart.y-t.clientY;
  touchStart={x:t.clientX,y:t.clientY};
  progress=Math.max(0,Math.min(.9999,progress+dy*.002));
  render();
},{passive:true});

app.addEventListener("touchend",(e)=>{
  if(!touchStart || detail){touchStart=null;return;}
  const t=e.changedTouches[0];
  if(t){
    const dx=t.clientX-touchStart.x, dy=t.clientY-touchStart.y;
    if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.2)setActive(active+(dx<0?1:-1));
    else if(dy<-45)openDetail();
  }
  touchStart=null;
});

function initAgeGate() {
  const gate=document.getElementById("ageGate");
  const enter=document.getElementById("ageEnter");
  let allowed=false;
  try{allowed=localStorage.getItem("empireAgeVerified")==="true";}catch(_e){}
  if(!allowed){
    gate.classList.add("open");
    gate.setAttribute("aria-hidden","false");
  }
  enter?.addEventListener("click",()=>{
    try{localStorage.setItem("empireAgeVerified","true");}catch(_e){}
    gate.classList.remove("open");
    gate.setAttribute("aria-hidden","true");
  });
}

initAgeGate();
render();
