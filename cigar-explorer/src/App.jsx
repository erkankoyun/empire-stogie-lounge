
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BRAND_DEFINITIONS } from "./brands.js";

import { PRODUCTS } from "./catalog.js";

const BRANDS = [
  ...BRAND_DEFINITIONS,
  ...Array.from(new Set(PRODUCTS.map(product => product.brand)))
    .filter(name => !BRAND_DEFINITIONS.some(brand => brand.name === name))
    .map(name => ({ name }))
].map(brand => {
    const cigars = PRODUCTS.filter(product => product.brand === brand.name);
    return {
      ...brand,
      displayName: brand.displayName || brand.name,
      count: cigars.length,
      accent: brand.accent || cigars[0]?.accent || "#b08954",
      initials: brand.name.split(" ").map(word => word[0]).join("")
    };
  });

function BrandLogo({ brand }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className={`brand-logo-panel ${brand.tone === "dark" ? "dark" : "light"}`} aria-hidden="true">
      {brand.logo && !failed ? (
        <img src={`./assets/brands/${brand.logo}`} className={brand.fit ? `logo-${brand.fit}` : undefined} alt="" width="240" height="128" loading="lazy" decoding="async" onError={() => setFailed(true)}/>
      ) : <span className="brand-monogram">{brand.initials}</span>}
    </span>
  );
}

function BrandSelection({ selectBrand, buttonRefs }) {
  return (
    <section className="brand-picker" aria-labelledby="brand-title">
      <div className="brand-picker-heading">
        <small>{BRANDS.length} BRANDS · CIGAR EXPLORER</small>
        <h1 id="brand-title">CHOOSE YOUR <em>BRAND.</em></h1>
        <p>Select a brand to discover selected cigars, sizes, craftsmanship and tasting notes.</p>
      </div>
      <div className="brand-grid">
        {BRANDS.map(brand => (
          <button
            key={brand.name}
            className="brand-card"
            style={{ "--brand-accent": brand.accent }}
            aria-label={`${brand.displayName}${brand.count ? ` · ${brand.count} ${brand.count === 1 ? "cigar" : "cigars"}` : " · profiles coming soon"}`}
            ref={node => { buttonRefs.current[brand.name] = node; }}
            onClick={() => selectBrand(brand.name)}
          >
            <BrandLogo brand={brand}/>
            <strong>{brand.displayName}</strong>
            <span className="brand-count">{brand.count ? `${brand.count} ${brand.count === 1 ? "cigar profile" : "cigar profiles"}` : "Cigar profiles coming soon"}</span>
            <span className="brand-card-action">{brand.count ? "VIEW CIGARS" : "VIEW BRAND"} <i aria-hidden="true">↗</i></span>
          </button>
        ))}
      </div>
    </section>
  );
}

function BrandPending({ brand, headingRef, showBrands }) {
  return (
    <section className="brand-pending" aria-labelledby="pending-brand-title">
      <BrandLogo brand={brand}/>
      <h1 id="pending-brand-title" ref={headingRef} tabIndex={-1}>{brand.displayName}</h1>
      <h2>Cigar profiles coming soon.</h2>
      <p>We’re preparing the cigar profiles for this brand. Choose another brand to explore the profiles already available.</p>
      <button onClick={showBrands}>← ALL BRANDS</button>
    </section>
  );
}

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
          className={`${product.imageHasTransparency ? "transparent-product-photo" : ""} ${product.id === "viva-la-vida" ? "viva-bg-clean" : ""}`}
          loading={active ? "eager" : "lazy"}
          decoding="async"
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

function Carousel({products, active, setActive, detail, progress}) {
  const drag = useRef(null);
  const suppressClick = useRef(false);

  return (
    <div className={detail ? "carousel detail" : "carousel"}>
      {products.map((product, index) => {
        const rel = relativeIndex(index, active, products.length);
        const abs = Math.abs(rel);
        const visible = abs <= 3;
        const activeItem = index === active;

        const x = activeItem ? 0 : rel * 32;

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
            aria-label={`${product.brand} ${product.name} ${product.variant}`}
            aria-pressed={activeItem}
            aria-hidden={!visible || (detail && !activeItem)}
            tabIndex={activeItem && !detail ? 0 : -1}
            style={{
              "--x": detail ? `${x}vw` : `calc(${rel} * var(--carousel-step))`,
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
            <ProductImage key={product.id} product={product} active={activeItem} detail={detail} progress={progress}/>
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


export function CigarSpecifications({ product, products, active, setActive }) {
  const rows = [
    ["Size", `${product.size} · inches × ring gauge`],
    ["Made in", product.madeIn],
    ["Rolled in", product.rolledIn],
    ["Factory", product.factory],
    ["Handmade", product.handmadeLabel],
    ["Shape", product.shape],
    ["Box-pressed", product.boxPressedLabel],
    ["Wrapper", product.wrapper],
    ["Binder", product.binder],
    ["Filler", product.filler]
  ];
  return (
    <section className="cigar-specifications" aria-labelledby="cigar-spec-title">
      <div className="cigar-spec-heading">
        <div><small>THE CIGAR AT A GLANCE</small><h2 id="cigar-spec-title">{product.name} <span>{product.variant}</span></h2></div>
        {products.length > 1 && <label className="cigar-selector">SELECT A CIGAR
          <select aria-label="Select a cigar" value={active} onChange={event => setActive(Number(event.target.value))}>
            {products.map((cigar, index) => <option key={cigar.id} value={index}>{cigar.name} · {cigar.variant}</option>)}
          </select>
        </label>}
      </div>
      <dl className="cigar-spec-grid">{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || "Not disclosed"}</dd></div>)}</dl>
      <div className="cigar-tasting"><h3>Tasting notes</h3><p>{product.flavors.join(" · ")}</p>
        <p className="tasting-context">{product.flavoring && product.flavoring !== "Not disclosed" ? product.flavoring : "Tasting notes describe perceived aromas and flavors; they are not an ingredient list."}
        {product.flavorSource ? ` · ${product.flavorSource}` : ""}</p>
      </div>
      <div className="cigar-sources"><strong>Product sources</strong>{product.sources.map((source, index) => <a key={`${source.url}-${index}`} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>)}</div>
      <p className="catalog-note">Selected size shown. Specifications may vary by size and blend. “Not disclosed” means a source does not confirm that detail. Profiles are a guide to the brand, not a live inventory.</p>
    </section>
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

      <section className="fact">
        <div className="fact-copy" key={`${product.id}-${current}`} aria-live="polite" aria-atomic="true">
        <small>{fact[0]}</small>
        <h2>{fact[1]}</h2>
        <h3 style={{color:product.accent}}>{fact[2]}</h3>
        <p>{fact[3]}</p>
        <a href={fact[4] || product.source} target="_blank" rel="noreferrer">SOURCE · {fact[5] || product.sourceName} ↗</a>
        </div>
        <div className="detail-step-nav" aria-label="Cigar details">
          <button disabled={current === 0} onClick={()=>setProgress((current - 1 + .02)/product.facts.length)}>← Previous</button>
          <span>{current + 1} / {product.facts.length}</span>
          <button disabled={current === product.facts.length - 1} onClick={()=>setProgress((current + 1 + .02)/product.facts.length)}>Next →</button>
        </div>
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
            aria-pressed={i===current}
            className={i===current ? "active":""}
            style={i===current ? {background:product.accent,borderColor:product.accent}:undefined}
            onClick={()=>setProgress((i+.02)/product.facts.length)}
          />
        ))}
      </div>

      <div className="scroll-tip">
        {current < product.facts.length-1 ? "SCROLL ON THE CIGAR OR CHOOSE A STEP ↓" : "END OF PRODUCT · BACK TO COLLECTION ↑"}
      </div>
    </>
  );
}

export default function App(){
  const [selectedBrand,setSelectedBrand]=useState(null);
  const [active,setActiveState]=useState(0);
  const [detail,setDetail]=useState(false);
  const [progress,setProgress]=useState(0);
  const touch=useRef(null);
  const wheelUntil=useRef(0);
  const brandButtons=useRef({});
  const collectionHeading=useRef(null);
  const focusRequest=useRef(null);
  const products=useMemo(()=>selectedBrand ? PRODUCTS.filter(product=>product.brand===selectedBrand) : [],[selectedBrand]);
  const product=products[active] || PRODUCTS[0];
  const brand=BRANDS.find(brand=>brand.name===selectedBrand);

  const setActive=useCallback((value)=>{
    setActiveState(prev=>{
      if(products.length < 2)return 0;
      const raw=typeof value==="function" ? value(prev) : value;
      return ((raw%products.length)+products.length)%products.length;
    });
    setProgress(0);
  },[products.length]);

  const selectBrand=useCallback((brand)=>{
    focusRequest.current={collection:true};
    setActiveState(0);
    setDetail(false);
    setProgress(0);
    setSelectedBrand(brand);
  },[]);
  const showBrands=useCallback(()=>{
    focusRequest.current={brand:selectedBrand};
    setSelectedBrand(null);
    setActiveState(0);
    setDetail(false);
    setProgress(0);
    touch.current=null;
  },[selectedBrand]);

  const openDetail=useCallback(()=>{
    setDetail(true);
    setProgress(.001);
  },[]);
  const closeDetail=useCallback(()=>{
    setDetail(false);
    setProgress(0);
  },[]);

  useEffect(()=>{
    window.scrollTo({top:0,behavior:"auto"});
  },[detail,selectedBrand]);

  useEffect(()=>{
    const request=focusRequest.current;
    if(!request)return;
    const target=request.collection ? collectionHeading.current : brandButtons.current[request.brand];
    target?.focus({preventScroll:!!request.collection});
    focusRequest.current=null;
  },[selectedBrand]);

  useEffect(()=>{
    const wheel=(e)=>{
      if(!selectedBrand || !products.length)return;
      if (document.getElementById("ageGate")?.classList.contains("open")) return;
      if(!detail){
        if(Math.abs(e.deltaX)>Math.abs(e.deltaY) && Math.abs(e.deltaX)>12){
          e.preventDefault();
          if(performance.now()<wheelUntil.current)return;
          wheelUntil.current=performance.now()+420;
          setActive(active+(e.deltaX>0?1:-1));
          return;
        }
        return;
      }
      if(!e.target.closest?.(".carousel, .rail"))return;
      e.preventDefault();
      setProgress(p=>Math.max(0,Math.min(.9999,p+e.deltaY*.00045)));
    };
    const key=(e)=>{
      if(e.target.closest?.("input,select,textarea,[contenteditable]"))return;
      if(!selectedBrand)return;
      if (document.getElementById("ageGate")?.classList.contains("open")) return;
      if(!products.length){if(e.key==="Escape")showBrands();return;}
      if((!detail && ["ArrowRight","ArrowLeft"].includes(e.key)) || (detail && ["ArrowDown","ArrowUp"].includes(e.key)))e.preventDefault();
      if(e.key==="Escape"){if(detail)closeDetail();else showBrands();}
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
  },[selectedBrand,products.length,detail,active,product.facts.length,setActive,closeDetail,showBrands]);

  const fullscreen=()=>{
    if(!document.fullscreenElement)document.documentElement.requestFullscreen?.().catch(()=>{});
    else document.exitFullscreen?.().catch(()=>{});
  };

  return (
    <main
      className={!selectedBrand || !products.length?"app brand-mode":detail?"app detail-mode":"app"}
      style={{"--accent":products.length ? product.accent : brand?.accent || "#b08954"}}
      onTouchStart={(e)=>{
        if(!selectedBrand)return;
        const t=e.touches[0];
        if(t)touch.current={x:t.clientX,y:t.clientY,scan:!!e.target.closest?.(".carousel")};
      }}
      onTouchMove={(e)=>{
        if(!detail || !touch.current?.scan)return;
        const t=e.touches[0];
        if(!t)return;
        const dy=touch.current.y-t.clientY;
        touch.current={x:t.clientX,y:t.clientY,scan:true};
        setProgress(p=>Math.max(0,Math.min(.9999,p+dy*.002)));
      }}
      onTouchEnd={(e)=>{
        if(!selectedBrand || !touch.current?.scan || detail){touch.current=null;return}
        const t=e.changedTouches[0];
        if(t){
          const dx=t.clientX-touch.current.x;
          const dy=t.clientY-touch.current.y;
          if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.2)setActive(active+(dx<0?1:-1));
        }
        touch.current=null;
      }}
      onTouchCancel={()=>{touch.current=null;}}
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
        <div className="brand">
          <picture className="lounge-emblem">
            <source type="image/webp" srcSet="../assets/kesikuclu-192.webp 192w, ../assets/kesikuclu-384.webp 384w" sizes="(max-width:360px) 48px, (max-width:600px) 56px, (max-width:860px) 64px, 80px"/>
            <img src="../assets/kesikuclu.png" alt="Empire Stogie Lounge logo" width="80" height="80" decoding="async"/>
          </picture>
          <div className="brand-name"><b>EMPIRE STOGIE LOUNGE</b><span>CIGAR EXPLORER</span></div>
        </div>
        <div className="top-actions">
          {selectedBrand && !detail && products.length > 1 && <span>← SWIPE / CLICK PRODUCTS →</span>}
          {selectedBrand && <button className="brands-back" onClick={showBrands}>← ALL BRANDS</button>}
          <a className="home-link" href="../">LOUNGE HOME</a>
          <button onClick={fullscreen}>FULL SCREEN ⛶</button>
        </div>
      </header>

      {!selectedBrand ? <BrandSelection selectBrand={selectBrand} buttonRefs={brandButtons}/> : !products.length ? <BrandPending brand={brand} headingRef={collectionHeading} showBrands={showBrands}/> : <>
      <Carousel products={products} active={active} setActive={setActive} detail={detail} progress={progress}/>

      {!detail ? (
        <>
          <section className="hero-copy">
            <small>{product.brand}</small>
            <h1 ref={collectionHeading} tabIndex={-1}>{product.name}<em>{product.variant}</em></h1>
            <div className="brand-model-line">
              <span>BRAND · {product.brand}</span>
              <i />
              <span>MODEL · {product.name} {product.variant}</span>
            </div>
          </section>

          <aside className="spec-panel left">
            <div><small>SIZE · INCHES × RING GAUGE</small><strong>{product.size}</strong></div>
            <div><small>STRENGTH</small><strong>{product.strength}</strong></div>
            <div><small>MADE IN</small><strong>{product.madeIn}</strong></div>
            <div><small>HANDMADE</small><strong>{product.handmadeLabel}</strong></div>
            <div><small>SHAPE</small><strong>{product.shape}</strong></div>
          </aside>

          <aside className="spec-panel right">
            <div><small>WRAPPER</small><strong>{product.wrapper}</strong></div>
            <div><small>BINDER</small><strong>{product.binder}</strong></div>
            <div><small>FILLER</small><strong>{product.filler}</strong></div>
          </aside>

          <div className="flavors">
            <small>TASTING NOTES</small>
            <div>{product.flavors.map(f=><span key={f}>{f}</span>)}</div>
          </div>

          {products.length > 1 && <div className="carousel-controls">
            <button aria-label="Previous cigar" className="arrow prev" onClick={()=>setActive(active-1)}>←</button>
            <button aria-label="Next cigar" className="arrow next" onClick={()=>setActive(active+1)}>→</button>
          </div>}

          <button className="explore" onClick={openDetail}>
            <span>EXPLORE HEAD TO FOOT</span><i>↓</i>
          </button>

          <div className="counter" aria-label={`Cigar ${active+1} of ${products.length}`}>{String(active+1).padStart(2,"0")} <i/> {String(products.length).padStart(2,"0")}</div>
          <div className="image-credit">PRODUCT IMAGE · {product.imageCredit}{product.imageNote ? ` · ${product.imageNote}` : ""}</div>
          <CigarSpecifications product={product} products={products} active={active} setActive={setActive}/>
        </>
      ):(
        <Detail product={product} progress={progress} setProgress={setProgress} close={closeDetail}/>
      )}
      </>}
    </main>
  );
}
