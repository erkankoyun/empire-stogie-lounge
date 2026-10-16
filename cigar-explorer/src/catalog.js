import imageMetadata from "./data/image-metadata.json";
import { LEGACY_PRODUCTS } from "./legacy-products.js";
import { BRAND_DEFINITIONS } from "./brands.js";
import groupA from "./data/catalog-a.json";
import groupB from "./data/catalog-b.json";
import groupC from "./data/catalog-c.json";
import groupD from "./data/catalog-d.json";
import montecristo from "./data/montecristo.json";
import kristoff from "./data/kristoff.json";
import existingMetadata from "./data/existing-metadata.json";

const UNKNOWN = "Not disclosed";
const yesNo = value => value === true ? "Yes" : value === false ? "No" : value || UNKNOWN;
const accents = new Map(BRAND_DEFINITIONS.map(brand => [brand.name, brand.accent]));
const metadata = Array.isArray(existingMetadata)
  ? Object.fromEntries(existingMetadata.map(product => [product.id, product]))
  : existingMetadata;

function prepareProduct(input) {
  const product = { ...input };
  product.imageHasTransparency = imageMetadata[product.image]?.hasTransparency || false;
  product.accent ||= accents.get(product.brand) || "#b08954";
  product.madeIn ||= product.origin || UNKNOWN;
  product.rolledIn ||= UNKNOWN;
  product.factory ||= UNKNOWN;
  product.shape ||= UNKNOWN;
  product.handmadeLabel = yesNo(product.handmade);
  product.boxPressedLabel = yesNo(product.boxPressed);
  product.sources = product.sources?.length ? product.sources : [{ label: product.sourceName, url: product.source }];
  const source = product.sources.find(item => item.url === product.source) || product.sources[0];
  const cite = [source.url, source.label];
  const reference = pattern => {
    const entry = product.sources.find(item => pattern.test(item.label)) || source;
    return [entry.url, entry.label];
  };
  if (!product.facts?.length) {
    product.facts = [
      ["01 / FORMAT", product.variant, product.size, "Length in inches × ring gauge. One ring-gauge unit is 1/64 inch; specifications apply to this selected size.", ...reference(/size|format|specifications/i)],
      ["02 / MADE + ROLLED", product.madeIn, product.rolledIn, `Factory: ${product.factory}. Manufacturing location is separate from where the tobacco was grown.`, ...cite],
      ["03 / CRAFT", product.handmadeLabel, product.shape, `Box-pressed: ${product.boxPressedLabel}. Handmade describes construction; box-pressed describes the cigar’s shape.`, ...cite],
      ["04 / WRAPPER", product.wrapper, "OUTER LEAF", "The wrapper is the cigar’s outer tobacco leaf.", ...cite],
      ["05 / BLEND", product.binder, "BINDER + FILLER", `Binder: ${product.binder}. Filler: ${product.filler}.`, ...cite],
      ["06 / STRENGTH", product.strength, "BODY + CHARACTER", "A published profile is a guide; perceived strength and taste can vary with the smoker and the size.", ...cite],
      ["07 / TASTING", product.flavors.slice(0, 2).join(" + "), product.flavors.slice(2).join(" · "), product.flavoring || "These are published tasting impressions, not added ingredients.", ...reference(/tasting|flavor/i)]
    ];
  } else {
    product.facts = [...product.facts,
      ["07 / MADE + ROLLED", product.madeIn, product.rolledIn, `Factory: ${product.factory}. Tobacco-growing origins are listed separately in the blend.`, ...cite],
      ["08 / CONSTRUCTION", product.handmadeLabel, product.shape, `Box-pressed: ${product.boxPressedLabel}. Construction and shape are separate specifications.`, ...cite]
    ];
  }
  return product;
}

export const PRODUCTS = [
  ...LEGACY_PRODUCTS.map(product => ({ ...product, ...metadata[product.id] })),
  ...groupA, ...groupB, ...groupC, ...groupD, ...montecristo, ...kristoff
].map(prepareProduct);
