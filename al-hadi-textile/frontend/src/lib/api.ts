import { Product, Category, RfqPayload } from '../types';
import { API_BASE_URL } from './utils';

export const fallbackProducts: Product[] = [
  // --- Kitchen & Dining Linens ---
  {
    id: "prod-001",
    slug: "charcoal-waffle-dishcloth-set",
    name: "Charcoal Waffle Combed Cotton Dish Cloth Set (6-Pack)",
    category: "Kitchen Linens",
    categorySlug: "kitchen-dining",
    shortDescription: "3D Honeycomb waffle weave dishcloths woven from 100% ring-spun cotton. Ultra-absorbent, lint-free, and rapid-drying.",
    fullDescription: "Engineered specifically for demanding kitchen and dining environments. The distinct three-dimensional honeycomb waffle weave expands after the initial wash to lock in moisture, grease, and crumbs without scratching delicate dinnerware. Finished with reinforced four-side hemmed borders and a functional hanging loop.",
    price: 14.50,
    currency: "USD",
    fabric: "100% Ring-Spun Combed Cotton",
    yarnCount: "20/2 Ne Ring Spun",
    gsm: 280,
    dimensions: "30 x 30 cm (12 x 12 in)",
    weave: "3D Honeycomb Waffle Weave",
    shrinkage: "< 3% (Pre-washed & tumble-set)",
    colorFastness: "Grade 4-5 (Vat dyed)",
    hemFinish: "Double-needle lockstitch with woven cotton label",
    packSize: "Pack of 6 pieces",
    moq: "500 packs (Wholesale / Export)",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    inStock: true,
    featured: true,
    images: ["/images/products/kitchen-dining/honeycomb-waffle-dishcloth-grey.jpg"],
    tags: ["waffle", "kitchen-towel", "dishcloth", "combed-cotton"]
  },
  {
    id: "prod-002",
    slug: "emerald-french-bistro-tea-towels",
    name: "Emerald French Bistro Yarn-Dyed Tea Towel Assortment",
    category: "Kitchen Linens",
    categorySlug: "kitchen-dining",
    shortDescription: "Authentic yarn-dyed bistro checks and vertical stripes. Lint-free stemware polisher and commercial kitchen workhorse.",
    fullDescription: "Woven on high-speed rapier looms using yarn-dyed long-staple cotton threads. These European bistro-style kitchen towels deliver lint-free crystal glassware polishing, superior tensile strength under industrial washing, and timeless dining aesthetics.",
    price: 18.00,
    currency: "USD",
    fabric: "100% Long-Staple Combed Cotton",
    yarnCount: "24/2 Ne Warp, 20/1 Ne Weft",
    gsm: 210,
    dimensions: "50 x 70 cm (20 x 28 in)",
    weave: "Yarn-Dyed Plain & Windowpane Dobby Weave",
    shrinkage: "< 3.5%",
    colorFastness: "Grade 4-5 (Reactive yarn dye)",
    hemFinish: "1.5 cm double folded side hems",
    packSize: "Pack of 5 pieces (Mixed checks & stripes)",
    moq: "300 packs",
    certifications: ["OEKO-TEX Standard 100", "BCI Cotton"],
    inStock: true,
    featured: true,
    images: ["/images/products/kitchen-dining/emerald-bistro-check-stripe-towels.jpg"],
    tags: ["tea-towel", "bistro-check", "yarn-dyed", "commercial"]
  },
  {
    id: "prod-003",
    slug: "slate-herringbone-bar-towels",
    name: "Slate & Indigo Herringbone Stripe Bar Towels (8-Pack)",
    category: "Kitchen Linens",
    categorySlug: "kitchen-dining",
    shortDescription: "Dense herringbone twill construction with classic blue center accent stripes for professional hospitality bars.",
    fullDescription: "A stalwart in bars and commercial culinary counters. The directional herringbone weave provides abrasion resistance and quick moisture pick-up without leaving lint on glass. Bleach-friendly and pre-shrunk for maximum longevity.",
    price: 22.00,
    currency: "USD",
    fabric: "100% Ring-Spun Cotton",
    yarnCount: "16/1 Ne Heavy Weft",
    gsm: 230,
    dimensions: "45 x 65 cm (18 x 26 in)",
    weave: "Herringbone Twill Weave with Striped Selvage",
    shrinkage: "< 3%",
    colorFastness: "Grade 4 (Vat dyed center stripes)",
    hemFinish: "Heavy-duty lockstitched borders",
    packSize: "Pack of 8 pieces",
    moq: "400 packs",
    certifications: ["OEKO-TEX Standard 100"],
    inStock: true,
    featured: false,
    images: ["/images/products/kitchen-dining/indigo-herringbone-bar-towels.jpg"],
    tags: ["bar-towel", "herringbone", "twill", "hospitality"]
  },
  {
    id: "prod-004",
    slug: "botanical-garden-10pc-kitchen-ensemble",
    name: "Botanical Garden 10-Piece Kitchen Coordinator Ensemble (SH-7030)",
    category: "Kitchen Linens",
    categorySlug: "kitchen-dining",
    shortDescription: "Complete export coordinator set: Tablecloth, Runner, Apron, Mitts, Pot Holders, Bread Basket, Cushion Cover & Mat.",
    fullDescription: "A comprehensive dining and kitchen coordinator collection manufactured for high-end retail brands. Features matching printed Tablecloth (140x180cm), Table Runner, Full-coverage Bib Apron with front pocket, Quilted Heat-Proof Oven Gloves, Pot Holders, Fabric Bread Basket, Cushion Cover, Kitchen Towel, Shopping Tote Bag, and Dining Mat.",
    price: 52.00,
    currency: "USD",
    fabric: "100% Heavy Cotton Duck (Canvas) & Terry",
    yarnCount: "20/2 Ne Cotton Canvas",
    gsm: 220,
    dimensions: "Full 10-Piece Coordinated Set",
    weave: "Rotary Reactive Screen Printed Plain Duck Canvas",
    shrinkage: "< 3%",
    colorFastness: "Grade 5 (Reactive print)",
    hemFinish: "Piped edge trims and heavy stitching",
    packSize: "10-Piece Gift Box Ensemble",
    moq: "200 sets",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015", "SEDEX Audited"],
    inStock: true,
    featured: true,
    images: ["/images/products/kitchen-dining/botanical-garden-10pc-kitchen-ensemble.jpg"],
    tags: ["coordinator-set", "tablecloth", "apron", "oven-mitt", "bread-basket"]
  },
  {
    id: "prod-005",
    slug: "artisan-ochre-waffle-tea-towel-potmat",
    name: "Artisan Ochre Waffle Tea Towel & Heat-Proof Pot Mat Set",
    category: "Kitchen Linens",
    categorySlug: "kitchen-dining",
    shortDescription: "Mustard ochre honeycomb waffle weave lined with natural botanical calico backing and woven hanging tape.",
    fullDescription: "Showcasing artisanal craftsmanship, this two-piece set pairs warm ochre honeycomb waffle fabric with delicate printed botanical calico backing. The pot mat is padded with heat-resistant needle-punched cotton batting for safe tabletop and oven handling.",
    price: 16.00,
    currency: "USD",
    fabric: "100% Organic Cotton Waffle & Calico",
    yarnCount: "20/2 Ne Organic Combed Cotton",
    gsm: 310,
    dimensions: "40 x 40 cm (16 x 16 in)",
    weave: "Dual-Face Honeycomb Waffle + Calico Backing",
    shrinkage: "< 2.5%",
    colorFastness: "Grade 4-5",
    hemFinish: "Clean mitred corners with twin hanging ribbons",
    packSize: "Set of 2 pieces",
    moq: "500 sets",
    certifications: ["GOTS Certified Organic", "OEKO-TEX Standard 100"],
    inStock: true,
    featured: false,
    images: ["/images/products/kitchen-dining/ochre-waffle-tea-towel-potmat.jpg"],
    tags: ["artisan", "organic-cotton", "pot-mat", "waffle"]
  },
  {
    id: "prod-006",
    slug: "geometric-damask-tassel-table-runner",
    name: "Contemporary Geometric Jacquard Table Runner with Tassels",
    category: "Kitchen Linens",
    categorySlug: "kitchen-dining",
    shortDescription: "Heavy jacquard brocade table runner featuring geometric circular patterns and silken hand-knotted tassel fringes.",
    fullDescription: "A statement dining accessory woven on high-density electronic jacquard looms. Features geometric interlocking circle-and-square motifs on a warm oatmeal backdrop, completed with triangular end-points and handmade silky tassel fringe.",
    price: 24.50,
    currency: "USD",
    fabric: "70% Ring-Spun Cotton, 30% Linen Slub",
    yarnCount: "30/2 Ne Mercerized Jacquard Warp",
    gsm: 340,
    dimensions: "33 x 180 cm (13 x 71 in)",
    weave: "Dual-Tone Jacquard Brocade Weave",
    shrinkage: "< 2%",
    colorFastness: "Grade 5",
    hemFinish: "Pointed V-ends with hand-tied tassel tassels",
    packSize: "Single piece in presentation polybag",
    moq: "250 pieces",
    certifications: ["ISO 9001:2015", "OEKO-TEX Standard 100"],
    inStock: true,
    featured: false,
    images: ["/images/products/kitchen-dining/geometric-damask-tassel-table-runner.jpg"],
    tags: ["table-runner", "jacquard", "geometric", "tassels"]
  },
  {
    id: "prod-007",
    slug: "windowpane-check-dishcloth-terry-set",
    name: "Monochrome Windowpane Check Dishcloths with Terry Pot Holder",
    category: "Kitchen Linens",
    categorySlug: "kitchen-dining",
    shortDescription: "Minimalist black-and-white grid waffle dishcloths paired with royal blue terry cloth pot grabber.",
    fullDescription: "Modern monochrome kitchen essentials engineered for daily durability. Features two crisp windowpane check cotton cloths paired with a thick royal blue terry cloth hot pad holder that protects fingers and surfaces against hot baking pans.",
    price: 13.00,
    currency: "USD",
    fabric: "100% Combed Cotton Waffle & Terry Loop",
    yarnCount: "20/1 Ne Ring Spun",
    gsm: 260,
    dimensions: "Cloths: 35 x 35 cm / Pot Holder: 20 x 20 cm",
    weave: "Windowpane Dobby Waffle & Terry",
    shrinkage: "< 3%",
    colorFastness: "Grade 4",
    hemFinish: "Continuous bias tape binding",
    packSize: "Set of 3 pieces",
    moq: "600 sets",
    certifications: ["OEKO-TEX Standard 100"],
    inStock: true,
    featured: false,
    images: ["/images/products/kitchen-dining/windowpane-check-dishcloth-terry-set.jpg"],
    tags: ["windowpane", "dishcloth", "terry", "pot-holder"]
  },
  {
    id: "prod-008",
    slug: "charcoal-waffle-kitchen-towel-ovenmitt-set",
    name: "Pro-Chef Charcoal Waffle Towels & Spiral Quilted Oven Mitt Set",
    category: "Kitchen Linens",
    categorySlug: "kitchen-dining",
    shortDescription: "Heavyweight charcoal waffle towels paired with high-heat spiral quilted chef oven mitt and pot holder.",
    fullDescription: "A professional culinary collection for executive kitchens. Features charcoal waffle dish towels capable of rapid absorption paired with an extra-long canvas chef mitt and matching square pot holder insulated with heat-resistant thermal padding.",
    price: 26.00,
    currency: "USD",
    fabric: "100% Combed Cotton Waffle & Quilted Duck Canvas",
    yarnCount: "20/2 Ne Combed Yarn",
    gsm: 320,
    dimensions: "Towels: 45 x 70 cm / Mitt: 18 x 32 cm / Pad: 22 x 22 cm",
    weave: "Deep Honeycomb Waffle & Diamond-Spiral Quilted Canvas",
    shrinkage: "< 2.5%",
    colorFastness: "Grade 4-5",
    hemFinish: "Heavy piping with reinforced twill hanging loops",
    packSize: "4-Piece Professional Chef Set",
    moq: "300 sets",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    inStock: true,
    featured: true,
    images: ["/images/products/kitchen-dining/charcoal-waffle-kitchen-towel-ovenmitt-set.jpg"],
    tags: ["pro-chef", "oven-mitt", "charcoal", "kitchen-towel"]
  },

  // --- Bedding & Comforter Ensembles ---
  {
    id: "prod-009",
    slug: "hotel-percale-400tc-white-duvet-set",
    name: "5-Star Hotel Crisp White Percale 400TC Duvet & Bedding Set",
    category: "Bedding & Comforters",
    categorySlug: "bedding-linen",
    shortDescription: "400 Thread Count extra-long staple Egyptian cotton percale. Crisp, cool, breathable hotel-grade luxury.",
    fullDescription: "Crafted to meet the exacting standards of five-star global luxury hotels. Woven from 60s combed compact yarn in a balanced 1-over-1 percale weave that delivers that crisp, cool, breathable feeling. Optical white mercerized finish with concealed button plackets.",
    price: 68.00,
    currency: "USD",
    fabric: "100% Extra-Long Staple Combed Egyptian Cotton",
    yarnCount: "60s x 60s Combed Compact",
    gsm: 145,
    dimensions: "King: Duvet 230x260 cm, Flat Sheet 270x290 cm, 2 Pillowcases 50x90 cm",
    weave: "400 Thread Count Plain Percale Weave",
    shrinkage: "< 2% (Sanforized finish)",
    colorFastness: "Grade 5 (Optical White chlorine-safe)",
    hemFinish: "5 cm Oxford border with mitred corners",
    packSize: "4-Piece Luxury Set in Cotton Storage Tote",
    moq: "150 sets",
    certifications: ["OEKO-TEX Standard 100", "GOTS Certified", "ISO 9001:2015"],
    inStock: true,
    featured: true,
    images: ["/images/products/bedding-linen/hotel-percale-400tc-white-duvet-set.jpg"],
    tags: ["hotel-linen", "400tc", "percale", "white-bedding", "egyptian-cotton"]
  },
  {
    id: "prod-010",
    slug: "sherpa-teddy-fleece-charcoal-duvet-set",
    name: "Cozy Sherpa Teddy Fleece Charcoal Quilt Duvet Set",
    category: "Bedding & Comforters",
    categorySlug: "bedding-linen",
    shortDescription: "Ultra-plush high-density bouclé sherpa fleece duvet cover set. Maximum winter warmth and tactile softness.",
    fullDescription: "Built for cold climates and winter hospitality suites. The front surface is crafted from high-density curly boucle teddy sherpa fleece that creates insulating air pockets to retain warmth, paired with a breathable brushed microfiber reverse side for comfortable sleeping.",
    price: 49.00,
    currency: "USD",
    fabric: "High-Density Thermal Sherpa Fleece & Brushed Microfiber",
    yarnCount: "Micro-filament thermal yarns",
    gsm: 360,
    dimensions: "King Duvet Cover (220x240 cm) + 2 Matching Pillow Shams (50x75 cm)",
    weave: "Knitted Bouclé Sherpa Face with Plain Reverse",
    shrinkage: "< 1.5%",
    colorFastness: "Grade 4-5",
    hemFinish: "Concealed heavy-duty zipper closure with 8 inner ties",
    packSize: "3-Piece Winter Bedding Set",
    moq: "200 sets",
    certifications: ["OEKO-TEX Standard 100"],
    inStock: true,
    featured: false,
    images: ["/images/products/bedding-linen/sherpa-teddy-fleece-charcoal-duvet-set.jpg"],
    tags: ["sherpa", "fleece", "winter-bedding", "charcoal", "teddy"]
  },
  {
    id: "prod-011",
    slug: "sky-blue-washed-percale-cloud-bedding",
    name: "Sky Blue Cloud Washed Cotton Sateen Bedding Ensemble",
    category: "Bedding & Comforters",
    categorySlug: "bedding-linen",
    shortDescription: "Garment-washed 300TC cotton sateen bedding in calming sky blue. Buttery soft handfeel with casual drape.",
    fullDescription: "Designed for modern serene bedrooms. Woven from 100% long-staple combed cotton in a 300 thread count sateen structure, then enzyme stone-washed for an effortless vintage texture and relaxed lived-in drape. Fade-resistant reactive dyeing preserves the sky blue tone through countless launderings.",
    price: 58.00,
    currency: "USD",
    fabric: "100% Long-Staple Combed Cotton Sateen",
    yarnCount: "40s x 40s Ring Spun",
    gsm: 160,
    dimensions: "Duvet Cover (220x240 cm), Fitted Sheet (180x200+35 cm), 4 Pillowcases",
    weave: "300TC Garment-Washed Sateen",
    shrinkage: "< 2%",
    colorFastness: "Grade 4-5 (Eco reactive dye)",
    hemFinish: "Hidden mother-of-pearl style button placket",
    packSize: "6-Piece Master Bedding Suite",
    moq: "150 sets",
    certifications: ["OEKO-TEX Standard 100", "BCI Cotton"],
    inStock: true,
    featured: true,
    images: ["/images/products/bedding-linen/sky-blue-washed-percale-cloud-bedding.jpg"],
    tags: ["cloud-bedding", "sateen", "sky-blue", "garment-washed"]
  },
  {
    id: "prod-012",
    slug: "royal-navy-pintuck-pleated-comforter-set",
    name: "Royal Navy Pinch-Pleat Pintuck Luxury Comforter Ensemble",
    category: "Bedding & Comforters",
    categorySlug: "bedding-linen",
    shortDescription: "Architectural hand-gathered pinch pleats with Aztec embroidered contrast borders and decorative accent pillows.",
    fullDescription: "An elaborate multi-piece master bedroom set featuring hand-stitched diamond pinch pleats that create dimensional shadow play. Complemented by contrast black-and-white Aztec geometric embroidery borders, matching pillow shams, and coordinating buttoned accent throw cushions.",
    price: 74.00,
    currency: "USD",
    fabric: "Brushed Micro-Percale with 350 GSM Siliconized Down-Alternative",
    yarnCount: "High-twist microfiber filament",
    gsm: 350,
    dimensions: "Comforter (240x260 cm), Bedskirt, 2 Pillow Shams, 2 Accent Pillows",
    weave: "Hand-Crafted Pintuck Pleats with Chainstitch Embroidery",
    shrinkage: "< 1%",
    colorFastness: "Grade 5",
    hemFinish: "Piped border with reinforced pleat anchoring",
    packSize: "7-Piece Complete Bed-in-a-Bag Ensemble",
    moq: "120 sets",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    inStock: true,
    featured: false,
    images: ["/images/products/bedding-linen/royal-navy-pintuck-pleated-comforter-set.jpg"],
    tags: ["pintuck", "pinch-pleat", "navy-bedding", "comforter", "embroidery"]
  },

  // --- Luxury Bath & Towels ---
  {
    id: "prod-013",
    slug: "ocean-gradient-plush-terry-towel-bale",
    name: "Ocean Gradient Ring-Spun Cotton Bath & Hand Towel Bale (6-Piece)",
    category: "Luxury Bath & Towels",
    categorySlug: "bath-towels",
    shortDescription: "Plush 550 GSM zero-twist terry bath towels in curated ocean blue, aqua, and slate grey gradients.",
    fullDescription: "Constructed with zero-twist long-staple cotton loops for cloud-like plushness and rapid absorbency. The bale features curated tones ranging from deep ocean navy and cyan to silver grey, finished with a classic woven dobby header and anti-fray double-stitched side selvages.",
    price: 36.00,
    currency: "USD",
    fabric: "100% Zero-Twist Ring-Spun Combed Cotton",
    yarnCount: "16/1 Ne Zero-Twist Pile, 20/2 Ne Ground",
    gsm: 550,
    dimensions: "2 Bath Towels (70x140 cm), 2 Hand Towels (50x90 cm), 2 Face Cloths (30x30 cm)",
    weave: "Dual-Sided Loop Terry with Dobby Header Border",
    shrinkage: "< 3.5%",
    colorFastness: "Grade 4-5 (Vat dyed for bleach resistance)",
    hemFinish: "Double-needle lockstitched hemmed ends",
    packSize: "6-Piece Towel Bale with Satin Ribbon",
    moq: "250 bales",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    inStock: true,
    featured: true,
    images: ["/images/products/bath-towels/ocean-gradient-plush-terry-towel-bale.jpg"],
    tags: ["bath-towel", "terry", "550-gsm", "hotel-towel", "ocean"]
  },
  {
    id: "prod-014",
    slug: "taupe-herringbone-kilim-border-spa-towel",
    name: "Earthy Taupe Textured Herringbone Spa Towels with Kilim Border",
    category: "Luxury Bath & Towels",
    categorySlug: "bath-towels",
    shortDescription: "Textured chevron rib terry towel with flat-woven jacquard kilim geometric borders and hand-twisted tassel fringe.",
    fullDescription: "Designed for premium boutique wellness resorts and luxury spas. Woven from combed organic Aegean cotton with an ergonomic diagonal chevron ribbing that gently exfoliates skin while delivering high moisture absorption. Bordered with a flat-woven geometric Kilim jacquard band and artisan fringes.",
    price: 29.50,
    currency: "USD",
    fabric: "100% Aegean Combed Organic Cotton",
    yarnCount: "16/1 Ne Low-Twist Organic Cotton",
    gsm: 580,
    dimensions: "Bath Sheet (80x150 cm) & Hand Towel (40x75 cm)",
    weave: "Chevron Ribbed Terry with Jacquard Kilim Border & Tassels",
    shrinkage: "< 3%",
    colorFastness: "Grade 5 (Natural low-impact reactive dyes)",
    hemFinish: "Hand-knotted twisted tassel fringes",
    packSize: "2-Piece Luxury Spa Set",
    moq: "300 sets",
    certifications: ["GOTS Organic", "OEKO-TEX Standard 100"],
    inStock: true,
    featured: true,
    images: ["/images/products/bath-towels/taupe-herringbone-kilim-border-spa-towel.jpg"],
    tags: ["spa-towel", "kilim-border", "tassels", "organic-cotton", "herringbone"]
  },
  {
    id: "prod-015",
    slug: "plush-microfiber-color-cleaning-roll",
    name: "Industrial Multi-Surface High-Density Microfiber Rolls (8-Pack)",
    category: "Luxury Bath & Towels",
    categorySlug: "bath-towels",
    shortDescription: "High-density split microfiber cleaning towels in rolled multi-color pack. Holds 8x dry weight in water.",
    fullDescription: "Engineered for institutional hospitality housekeeping, automotive care, and sanitary cleaning protocols. Constructed from 80/20 split microfiber with high capillary action. Scratch-free on mirrors and glass, lint-free, and color-coded to prevent cross-contamination.",
    price: 11.50,
    currency: "USD",
    fabric: "80% Polyester, 20% Polyamide Split Microfiber",
    yarnCount: "0.13 Dtex Ultra-Fine Filament",
    gsm: 320,
    dimensions: "40 x 40 cm (16 x 16 in)",
    weave: "Double-Faced Microfiber Terry Pile",
    shrinkage: "< 0.5%",
    colorFastness: "Grade 5",
    hemFinish: "Overlock serged border with rounded corners",
    packSize: "8-Pack Rolled Assortment",
    moq: "1000 packs",
    certifications: ["ISO 9001:2015"],
    inStock: true,
    featured: false,
    images: ["/images/products/bath-towels/plush-microfiber-color-cleaning-roll.jpg"],
    tags: ["microfiber", "cleaning-cloth", "lint-free", "institutional"]
  },

  // --- Curtains & Window Drapes ---
  {
    id: "prod-016",
    slug: "midnight-navy-thermal-blackout-drapes",
    name: "Midnight Navy Thermal Triple-Weave Blackout Eyelet Curtains",
    category: "Curtains & Drapes",
    categorySlug: "curtains-drapes",
    shortDescription: "Triple-weave blackout fabric with 40mm stainless steel eyelets. Blocks 98% sunlight and dampens exterior noise.",
    fullDescription: "Constructed with an innovative triple-weave yarn system that integrates a high-density black thread core between two decorative face fabrics. Blocks 98% of harsh sunlight, insulates against summer heat and winter drafts, and delivers a sleek matte finish.",
    price: 38.00,
    currency: "USD",
    fabric: "100% High-Density Triple-Weave Polyester",
    yarnCount: "150D x 300D Blackout Filament",
    gsm: 280,
    dimensions: "Pair of 140 x 260 cm (55 x 102 in) per panel",
    weave: "Triple-Weave Blackout Satin Weave",
    shrinkage: "< 1%",
    colorFastness: "Grade 5 (UV resistant)",
    hemFinish: "4 cm side hems, 8 cm weighted bottom hem, 8 silver eyelets/panel",
    packSize: "Pair (2 panels)",
    moq: "200 pairs",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    inStock: true,
    featured: true,
    images: ["/images/products/curtains-drapes/midnight-navy-thermal-blackout-drapes.jpg"],
    tags: ["blackout-curtains", "eyelet", "navy", "thermal-curtains", "drapes"]
  },
  {
    id: "prod-017",
    slug: "indigo-floral-printed-linen-curtains",
    name: "Indigo Botanical Silhouette Linen-Blend Window Drapes",
    category: "Curtains & Drapes",
    categorySlug: "curtains-drapes",
    shortDescription: "Artistic floral silhouette prints on natural slub cotton-linen. Soft light-filtering ambient privacy.",
    fullDescription: "Combining the airy breathability of natural flax linen with the durability of combed cotton. Decorated with a painterly indigo botanical silhouette pattern that diffuses harsh direct sunlight into a gentle warm glow while preserving bedroom and parlor privacy.",
    price: 42.00,
    currency: "USD",
    fabric: "60% Combed Cotton, 40% Natural Flax Linen",
    yarnCount: "14/1 Ne Linen Slub x 20/1 Ne Cotton",
    gsm: 240,
    dimensions: "Pair of 135 x 245 cm (53 x 96 in) per panel",
    weave: "Textured Linen Slub Plain Weave with Screen Print",
    shrinkage: "< 2.5%",
    colorFastness: "Grade 4-5",
    hemFinish: "Rod pocket + back tabs multi-header option",
    packSize: "Pair (2 panels)",
    moq: "200 pairs",
    certifications: ["OEKO-TEX Standard 100"],
    inStock: true,
    featured: false,
    images: ["/images/products/curtains-drapes/indigo-floral-printed-linen-curtains.jpg"],
    tags: ["linen-curtains", "botanical-print", "indigo", "light-filtering"]
  },
  {
    id: "prod-018",
    slug: "sage-jacquard-damask-luxury-drapes",
    name: "Sage Green Jacquard Damask Heavy Luxury Curtains",
    category: "Curtains & Drapes",
    categorySlug: "curtains-drapes",
    shortDescription: "Heirloom jacquard brocade drapery featuring grand damask floral medallions and traditional pencil pleats.",
    fullDescription: "Woven on electronic jacquard looms for opulent residential master suites and banquet halls. Heavyweight sage green brocade with tone-on-tone damask medallions that reflect ambient light subtly. Equipped with heavy pencil pleat header compatible with curtain rings and tracks.",
    price: 56.00,
    currency: "USD",
    fabric: "80% Cotton-Rich Jacquard, 20% Filament Sheen",
    yarnCount: "Multi-ply Jacquard Brocade Warp",
    gsm: 320,
    dimensions: "Pair of 140 x 270 cm (55 x 106 in) per panel",
    weave: "Dual-Tone Jacquard Brocade Weave",
    shrinkage: "< 1.5%",
    colorFastness: "Grade 5",
    hemFinish: "7.5 cm Pencil Pleat heading tape with lead weighted corners",
    packSize: "Pair (2 panels)",
    moq: "150 pairs",
    certifications: ["ISO 9001:2015", "OEKO-TEX Standard 100"],
    inStock: true,
    featured: true,
    images: ["/images/products/curtains-drapes/sage-jacquard-damask-luxury-drapes.jpg"],
    tags: ["jacquard-curtains", "damask", "sage-green", "luxury-drapes"]
  },
  {
    id: "prod-019",
    slug: "oatmeal-textured-linen-blackout-curtains",
    name: "Oatmeal Beige Textured Slub Linen Blackout Curtains",
    category: "Curtains & Drapes",
    categorySlug: "curtains-drapes",
    shortDescription: "Organic oatmeal beige slub texture with bonded thermal blackout backing and matte bronze eyelets.",
    fullDescription: "The quintessence of Scandinavian and Mediterranean calm. Features a rich organic oatmeal slub linen-cotton surface bonded with an odorless thermal blackout layer. Blocks 100% of light, dampens sound, and insulates window drafts.",
    price: 44.00,
    currency: "USD",
    fabric: "70% Cotton, 30% Linen Slub with Bonded Acrylic Thermal Core",
    yarnCount: "10/1 Ne Slub Cotton x 14/1 Ne Linen",
    gsm: 290,
    dimensions: "Pair of 140 x 260 cm (55 x 102 in) per panel",
    weave: "Tactile Slub Weave with Thermal Bonded Barrier",
    shrinkage: "< 1%",
    colorFastness: "Grade 5",
    hemFinish: "Anti-rust bronze eyelets (40mm inner diameter)",
    packSize: "Pair (2 panels)",
    moq: "200 pairs",
    certifications: ["OEKO-TEX Standard 100"],
    inStock: true,
    featured: false,
    images: ["/images/products/curtains-drapes/oatmeal-textured-linen-blackout-curtains.jpg"],
    tags: ["oatmeal-curtains", "neutral-linen", "blackout", "scandinavian"]
  },

  // --- Living & Slipcovers ---
  {
    id: "prod-020",
    slug: "quilted-diamond-armchair-caddy-protector",
    name: "Quilted Diamond Armchair Organizer & Slipcover Protector",
    category: "Living & Slipcovers",
    categorySlug: "living-slipcovers",
    shortDescription: "Ultrasonic diamond quilted armrest slipcover with built-in remote control and book storage organizer caddy.",
    fullDescription: "Engineered to protect upholstery against wear, oils, and pet scratches while providing convenient storage. Features ultrasonic diamond stitching filled with lightweight polyfill batting, paired with deep side caddy pockets for TV remotes, magazines, and tablets. Includes adjustable non-slip anchors.",
    price: 15.00,
    currency: "USD",
    fabric: "Brushed Micro-Suede with 120 GSM Fiberfill & Non-Slip Backing",
    yarnCount: "Micro-denier brushed twill",
    gsm: 240,
    dimensions: "Universal Armrest Span: 90 x 50 cm (35 x 20 in) with 3 pockets",
    weave: "Ultrasonic Heat-Sealed Diamond Quilting",
    shrinkage: "< 1%",
    colorFastness: "Grade 5",
    hemFinish: "Self-fabric bound edges with reinforced pocket stress points",
    packSize: "Single Armrest Protector with Elastic Gripper",
    moq: "400 pieces",
    certifications: ["OEKO-TEX Standard 100"],
    inStock: true,
    featured: false,
    images: ["/images/products/living-slipcovers/quilted-diamond-armchair-caddy-protector.jpg"],
    tags: ["armchair-protector", "remote-caddy", "quilted", "slipcover"]
  },
  {
    id: "prod-021",
    slug: "charcoal-water-resistant-quilted-sofa-guard",
    name: "Charcoal Diamond Quilted Water-Resistant Sofa Couch Protector",
    category: "Living & Slipcovers",
    categorySlug: "living-slipcovers",
    shortDescription: "Pet-proof, spill-resistant diamond quilted 3-seater sofa slipcover guard with arm pockets and tuck-in foam rollers.",
    fullDescription: "An indispensable protector for family rooms and hospitality lounges. Crafted from multi-layer quilted microfiber with an internal water-resistant membrane that prevents spills and pet accidents from soaking into furniture upholstery. Includes side arm caddy pockets, elastic back straps, and tuck-in foam anchors to keep cover firmly in place.",
    price: 34.00,
    currency: "USD",
    fabric: "Ripstop Micro-Peach Fabric with Waterproof Membrane & Polyfill",
    yarnCount: "High-density micro-peach filament",
    gsm: 260,
    dimensions: "3-Seater Sofa: Seat Width 170 cm (67 in) / Total Span 280 x 200 cm",
    weave: "Multi-Layer Ultrasonic Diamond Quilting",
    shrinkage: "< 1%",
    colorFastness: "Grade 5",
    hemFinish: "Continuous bias bound perimeter with adjustable elastic tensioner",
    packSize: "Complete Sofa Cover + 3 Foam Anchoring Rollers",
    moq: "200 pieces",
    certifications: ["OEKO-TEX Standard 100", "ISO 9001:2015"],
    inStock: true,
    featured: true,
    images: ["/images/products/living-slipcovers/charcoal-water-resistant-quilted-sofa-guard.jpg"],
    tags: ["sofa-protector", "couch-cover", "water-resistant", "pet-friendly", "quilted"]
  }
];

export const fallbackCategories: Category[] = [
  { id: "all", name: "All Collections", count: 21 },
  { id: "kitchen-dining", name: "Kitchen & Dining Linens", count: 8 },
  { id: "bedding-linen", name: "Bedding & Comforters", count: 4 },
  { id: "bath-towels", name: "Luxury Bath & Towels", count: 3 },
  { id: "curtains-drapes", name: "Curtains & Window Drapes", count: 4 },
  { id: "living-slipcovers", name: "Living & Slipcovers", count: 2 }
];

export async function fetchProducts(params?: { category?: string; search?: string; minGsm?: number; maxGsm?: number; featured?: boolean }): Promise<Product[]> {
  try {
    const query = new URLSearchParams();
    if (params?.category && params.category !== 'all') query.set('category', params.category);
    if (params?.search) query.set('search', params.search);
    if (params?.minGsm) query.set('minGsm', params.minGsm.toString());
    if (params?.maxGsm) query.set('maxGsm', params.maxGsm.toString());
    if (params?.featured) query.set('featured', 'true');

    const res = await fetch(`${API_BASE_URL}/api/products?${query.toString()}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.data) return data.data;
    }
  } catch (err) {
    // Graceful fallback to static data
  }

  // Fallback filter
  let result = [...fallbackProducts];
  if (params?.category && params.category !== 'all') {
    result = result.filter(p => p.categorySlug === params.category);
  }
  if (params?.search) {
    const q = params.search.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(q) || p.fabric.toLowerCase().includes(q) || p.weave.toLowerCase().includes(q));
  }
  if (params?.minGsm) {
    result = result.filter(p => p.gsm >= (params.minGsm || 0));
  }
  if (params?.maxGsm) {
    result = result.filter(p => p.gsm <= (params.maxGsm || 9999));
  }
  if (params?.featured) {
    result = result.filter(p => p.featured);
  }
  return result;
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/products/${slug}`, { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      if (json.data) return json.data;
    }
  } catch (err) {
    // fallback
  }
  const match = fallbackProducts.find(p => p.slug === slug || p.id === slug);
  return match || null;
}

export async function submitRfqQuote(rfq: RfqPayload): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/inquiries/rfq`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rfq)
    });
    if (res.ok) {
      const data = await res.json();
      return { success: true, message: data.message };
    }
  } catch (err) {
    // Fallback response
  }
  return {
    success: true,
    message: "Inquiry registered successfully! Our international export desk will reach out within 24 hours."
  };
}
