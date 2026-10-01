
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

function relativeIndex(index, active, length) {
  let delta = index - active;
  if (delta > length / 2) delta -= length;
  if (delta < -length / 2) delta += length;
  return delta;
}

function Smoke({ accent }) {
  const pieces = useMemo(() => Array.from({ length: 14 }, (_, i) => ({
    id: i,
    x: (Math.random() - .5) * 42,
    delay: Math.random() * 5,
    duration: 4.6 + Math.random() * 3.2,
    drift: (Math.random() - .5) * 80
  })), []);
  return (
    <div className="smoke-wrap" style={{"--accent": accent}}>
      <div className="ember" />
      {pieces.map(p => (
        <i key={p.id} style={{
          left: `calc(50% + ${p.x}px)`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
          "--drift": `${p.drift}px`
        }} />
      ))}
    </div>
  );
}

function ProductImage({ product, active, detail, progress }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="photo-shell">
      {!failed ? (
        <img
          src={product.image}
          alt={`${product.name} ${product.variant}`}
          className={product.id === "viva-la-vida" ? "viva-bg-clean" : ""}
          draggable="false"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="image-fallback">
          <b>{product.name}</b>
          <span>{product.variant}</span>
        </div>
      )}
      {active && <Smoke accent={product.accent} />}
    </div>
  );
}

function Carousel({active, setActive, detail, progress}) {
  const drag = useRef(null);
  const suppressClick = useRef(false);

  return (
    <div className={detail ? "carousel detail" : "carousel"}>
      {PRODUCTS.map((product, index) => {
        const rel = relativeIndex(index, active, PRODUCTS.length);
        const abs = Math.abs(rel);
        const visible = abs <= 3;
        const activeItem = index === active;

        const x = detail
          ? (activeItem ? 0 : rel * 32)
          : rel * 19;

        const scale = detail
          ? (activeItem ? 1.45 : .42)
          : (activeItem ? 1.08 : Math.max(.46, .72 - abs * .08));

        const opacity = visible ? (activeItem ? 1 : Math.max(.15, .62 - abs * .14)) : 0;
        const y = detail && activeItem ? (0.5 - progress) * 48 : 0;
        const rot = detail ? 0 : rel * 3.2;

        return (
          <button
            key={product.id}
            className={`slot ${activeItem ? "active" : ""}`}
            style={{
              "--x": `${x}vw`,
              "--scale": scale,
              "--opacity": opacity,
              "--y": `${y}vh`,
              "--rot": `${rot}deg`,
              "--accent": product.accent,
              pointerEvents: visible ? "auto" : "none"
            }}
            onClick={() => {
              if (suppressClick.current) { suppressClick.current = false; return; }
              if (!detail) setActive(index);
            }}
            onPointerDown={(e) => {
              if (e.pointerType === "touch" || !activeItem || detail) return;
              suppressClick.current = false;
              drag.current = {x:e.clientX, active};
              e.currentTarget.setPointerCapture?.(e.pointerId);
            }}
            onPointerCancel={() => { drag.current = null; }}
            onPointerUp={(e) => {
              if (!drag.current || detail) return;
              const dx = e.clientX - drag.current.x;
              if (Math.abs(dx) > 75) {
                suppressClick.current = true;
                setActive(active + (dx < 0 ? 1 : -1));
              }
              drag.current = null;
            }}
          >
            <div className="aura" />
            <ProductImage product={product} active={activeItem} detail={detail} progress={progress}/>
            {!detail && (
              <div className="slot-name">
                <small>{String(index+1).padStart(2,"0")}</small>
                <b>{product.brand}</b>
                <strong>{product.name}</strong>
                <span>{product.variant}</span>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

function Detail({product, progress, setProgress, close}) {
  const current = Math.min(product.facts.length - 1, Math.floor(progress * product.facts.length));
  const fact = product.facts[current];
  return (
    <>
      <div className="detail-head">
        <button onClick={close}>× &nbsp; COLLECTION</button>
        <span>{product.brand} / {product.name} / {product.variant}</span>
      </div>

      <section className="fact" key={`${product.id}-${current}`}>
        <small>{fact[0]}</small>
        <h2>{fact[1]}</h2>
        <h3 style={{color:product.accent}}>{fact[2]}</h3>
        <p>{fact[3]}</p>
        <a href={product.source} target="_blank" rel="noreferrer">SOURCE · {product.sourceName} ↗</a>
      </section>

      <div className="scan">
        <span>HEAD → FOOT</span><i style={{background:`linear-gradient(90deg,${product.accent},transparent)`}}/>
      </div>

      <div className="rail">
        <div className="track"/>
        <div className="fill" style={{height:`${progress*100}%`,background:product.accent}}/>
        {product.facts.map((_,i)=>(
          <button
            key={i}
            aria-label={`View ${product.facts[i][0]}`}
            className={i===current ? "active":""}
            style={i===current ? {background:product.accent,borderColor:product.accent}:undefined}
            onClick={()=>setProgress((i+.02)/product.facts.length)}
          />
        ))}
      </div>

      <div className="scroll-tip">
        {current < product.facts.length-1 ? "SCROLL / SWIPE DOWN ↓" : "END OF PRODUCT · SCROLL UP ↑"}
      </div>
    </>
  );
}

export default function App(){
  const [active,setActiveState]=useState(0);
  const [detail,setDetail]=useState(false);
  const [progress,setProgress]=useState(0);
  const touch=useRef(null);
  const wheelUntil=useRef(0);
  const product=PRODUCTS[active];

  const setActive=useCallback((value)=>{
    setActiveState(prev=>{
      const raw=typeof value==="function" ? value(prev) : value;
      return ((raw%PRODUCTS.length)+PRODUCTS.length)%PRODUCTS.length;
    });
    setProgress(0);
  },[]);

  const openDetail=useCallback(()=>{
    setDetail(true);
    setProgress(.001);
  },[]);
  const closeDetail=useCallback(()=>{
    setDetail(false);
    setProgress(0);
  },[]);

  useEffect(()=>{
    const wheel=(e)=>{
      if (document.getElementById("ageGate")?.classList.contains("open")) return;
      e.preventDefault();
      if(!detail){
        if(Math.abs(e.deltaX)>Math.abs(e.deltaY) && Math.abs(e.deltaX)>12){
          if(performance.now()<wheelUntil.current)return;
          wheelUntil.current=performance.now()+420;
          setActive(active+(e.deltaX>0?1:-1));
          return;
        }
        openDetail();
        setProgress(p=>Math.min(.9999,p+Math.abs(e.deltaY)*.00028));
        return;
      }
      setProgress(p=>Math.max(0,Math.min(.9999,p+e.deltaY*.00045)));
    };
    const key=(e)=>{
      if (document.getElementById("ageGate")?.classList.contains("open")) return;
      if(e.key==="Escape")closeDetail();
      if(!detail && e.key==="ArrowRight")setActive(active+1);
      if(!detail && e.key==="ArrowLeft")setActive(active-1);
      if(detail && e.key==="ArrowDown")setProgress(p=>Math.min(.9999,p+1/product.facts.length));
      if(detail && e.key==="ArrowUp")setProgress(p=>Math.max(0,p-1/product.facts.length));
    };
    window.addEventListener("wheel",wheel,{passive:false});
    window.addEventListener("keydown",key);
    return()=>{
      window.removeEventListener("wheel",wheel);
      window.removeEventListener("keydown",key);
    };
  },[detail,active,product.facts.length,setActive,openDetail,closeDetail]);

  const fullscreen=()=>{
    if(!document.fullscreenElement)document.documentElement.requestFullscreen?.().catch(()=>{});
    else document.exitFullscreen?.().catch(()=>{});
  };

  return (
    <main
      className={detail?"app detail-mode":"app"}
      style={{"--accent":product.accent}}
      onTouchStart={(e)=>{
        const t=e.touches[0];
        if(t)touch.current={x:t.clientX,y:t.clientY};
      }}
      onTouchMove={(e)=>{
        if(!detail || !touch.current)return;
        const t=e.touches[0];
        if(!t)return;
        const dy=touch.current.y-t.clientY;
        touch.current={x:t.clientX,y:t.clientY};
        setProgress(p=>Math.max(0,Math.min(.9999,p+dy*.002)));
      }}
      onTouchEnd={(e)=>{
        if(!touch.current || detail){touch.current=null;return}
        const t=e.changedTouches[0];
        if(t){
          const dx=t.clientX-touch.current.x;
          const dy=t.clientY-touch.current.y;
          if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.2)setActive(active+(dx<0?1:-1));
          else if(dy<-45)openDetail();
        }
        touch.current=null;
      }}
    >
      <svg className="svg-filter" aria-hidden="true">
        <filter id="remove-product-bg" colorInterpolationFilters="sRGB">
          {/* Keep the original RGB, but derive alpha from luminance. */}
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0.2126 0.7152 0.0722 0 0
            "
          />
          {/*
            Band-pass alpha:
            - near-black studio backgrounds become transparent
            - normal cigar tones stay opaque
            - near-white studio backgrounds become transparent
          */}
          <feComponentTransfer>
            <feFuncA
              type="table"
              tableValues="
                0
                0
                .82
                1
                1
                1
                1
                1
                1
                1
                1
                1
                1
                1
                .82
                0
              "
            />
          </feComponentTransfer>
        </filter>

        <filter id="remove-viva-bg" colorInterpolationFilters="sRGB">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0.2126 0.7152 0.0722 0 0
            "
          />
          <feComponentTransfer>
            <feFuncA
              type="table"
              tableValues="
                0
                0
                .72
                1
                1
                1
                1
                1
                1
                1
                1
                1
                .90
                .45
                .08
                0
              "
            />
          </feComponentTransfer>
        </filter>
      </svg>

      <div className="noise"/>
      <div className="ambient"/>

      <header className="topbar">
        <div className="brand"><b>EMPIRE STOGIE LOUNGE</b><span>CIGAR EXPLORER</span></div>
        <div className="top-actions">
          {!detail && <span>← SWIPE / CLICK PRODUCTS →</span>}
          <a className="home-link" href="../">LOUNGE HOME</a>
          <button onClick={fullscreen}>FULL SCREEN ⛶</button>
        </div>
      </header>

      <Carousel active={active} setActive={setActive} detail={detail} progress={progress}/>

      {!detail ? (
        <>
          <section className="hero-copy">
            <small>{product.brand}</small>
            <h1>{product.name}<em>{product.variant}</em></h1>
            <div className="brand-model-line">
              <span>BRAND · {product.brand}</span>
              <i />
              <span>MODEL · {product.name} {product.variant}</span>
            </div>
          </section>

          <aside className="spec-panel left">
            <div><small>SIZE</small><strong>{product.size}</strong></div>
            <div><small>STRENGTH</small><strong>{product.strength}</strong></div>
            <div><small>ORIGIN</small><strong>{product.origin}</strong></div>
          </aside>

          <aside className="spec-panel right">
            <div><small>WRAPPER</small><strong>{product.wrapper}</strong></div>
            <div><small>BINDER</small><strong>{product.binder}</strong></div>
            <div><small>FILLER</small><strong>{product.filler}</strong></div>
          </aside>

          <div className="flavors">
            <small>FLAVOR PROFILE</small>
            <div>{product.flavors.map(f=><span key={f}>{f}</span>)}</div>
          </div>

          <button aria-label="Previous cigar" className="arrow prev" onClick={()=>setActive(active-1)}>←</button>
          <button aria-label="Next cigar" className="arrow next" onClick={()=>setActive(active+1)}>→</button>

          <button className="explore" onClick={openDetail}>
            <span>EXPLORE HEAD TO FOOT</span><i>↓</i>
          </button>

          <div className="counter">{String(active+1).padStart(2,"0")} <i/> {String(PRODUCTS.length).padStart(2,"0")}</div>
          <div className="image-credit">PRODUCT IMAGE · {product.imageCredit}</div>
        </>
      ):(
        <Detail product={product} progress={progress} setProgress={setProgress} close={closeDetail}/>
      )}
    </main>
  );
}
