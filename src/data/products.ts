/**
 * products.ts — Single source of truth for all VECTOMEC™ product data.
 * Astro reads this at build time; no client JS needed for the grid.
 * The modal island reads window.__PRODUCTS__ (injected by ProductGrid)
 * to avoid duplicating data in the DOM.
 */

export type ProductCategory = 'handling' | 'processing' | 'ancillary' | 'accessories';

export interface SpecRow  { key: string; val: string; }
export interface Product {
  id:          string;           // used for anchor + modal lookup
  category:    ProductCategory;
  name:        string;
  series:      string;           // badge text on card image
  shortDesc:   string;           // card body description
  image?:      string;           // path relative to /public
  apps:        string[];         // pill tags on card
  // Modal content
  fullDesc:    string;
  specs:       SpecRow[];
  features?:   SpecRow[];
  modalApps:   string[];
}

export const products: Product[] = [

  /* ════════════════════════════════
     MATERIAL HANDLING
  ════════════════════════════════ */
  {
    id:        'screw-conveyor',
    category:  'handling',
    name:      'Screw Conveyor',
    series:    'VECTOMEC™',
    shortDesc: 'Rotating helical screw blade within a trough or tube, moving bulk material horizontally or on incline. Sealed design suits dusty, abrasive, and food-grade applications.',
    image:     'images/screw_con1.jpg',
    apps:      ['Cement', 'Food', 'Mining', 'Waste'],
    fullDesc:  'The screw conveyor remains one of the most versatile and cost-effective bulk material handling devices in modern industry. Jayveecons designs and fabricates screw conveyors for horizontal, inclined, and vertical orientations, engineered to your material\'s specific bulk density, particle size, abrasiveness, and moisture content. Our sealed trough designs are particularly effective in dusty environments such as cement and mineral processing.',
    specs: [
      { key: 'Diameter range',  val: '100mm – 600mm' },
      { key: 'Capacity',        val: 'Up to 200 m³/hr depending on material' },
      { key: 'Orientation',     val: 'Horizontal, inclined (up to 45°), vertical' },
      { key: 'Materials',       val: 'MS, SS 304/316, abrasion-resistant steel' },
      { key: 'Drive',           val: 'Gearbox motor, variable speed available' },
    ],
    features: [
      { key: 'Flighting types', val: 'Standard, ribbon, paddle, cut & folded' },
      { key: 'Sealing',         val: 'End seals, intermediate hanger bearings' },
      { key: 'Trough options',  val: 'U-trough, tubular, live-bottom' },
      { key: 'Certifications',  val: 'Food-grade options available (SS, FG coatings)' },
    ],
    modalApps: ['Cement powder', 'Raw meal', 'Grain & pulses', 'Wood chips', 'Fly ash', 'Boiler ash', 'Mineral fines', 'Municipal solid waste', 'Animal feed', 'Chemical powders'],
  },

  {
    id:        'belt-conveyor',
    category:  'handling',
    name:      'Belt Conveyor',
    series:    'VECTOMEC™',
    shortDesc: 'Continuous loop belt on powered and idler pulleys — the workhorse of bulk material transport across long horizontal distances and gentle inclines.',
    image:     'images/belt_con.jpg',
    apps:      ['Mining', 'Cement', 'Aggregates', 'Food'],
    fullDesc:  'Belt conveyors are the most widely used bulk material transport system in the world. Jayveecons designs and builds complete belt conveyor systems including the belt, structure, pulleys, idlers, drive system, and take-up arrangement, tailored to your throughput, lump size, and installation geometry.',
    specs: [
      { key: 'Belt width',   val: '300mm – 1800mm' },
      { key: 'Belt speed',   val: '0.5 – 3.5 m/s' },
      { key: 'Capacity',     val: 'Up to 2000 TPH depending on configuration' },
      { key: 'Inclination',  val: 'Up to 18° standard; chevron belt to 30°' },
      { key: 'Belt types',   val: 'Fabric ply, steel cord, heat-resistant, oil-resistant' },
    ],
    features: [
      { key: 'Idlers',     val: 'Carrying, return, impact, training — all in-house manufactured' },
      { key: 'Pulleys',    val: 'Drive, tail, snub, bend — lagged and balanced' },
      { key: 'Structure',  val: 'MS galvanised or painted, modular bay design' },
      { key: 'Drive',      val: 'Direct coupled or V-belt, with fluid or VFD control' },
    ],
    modalApps: ['Coal', 'Ore', 'Limestone', 'Crushed aggregate', 'Clinker', 'Grain', 'Salt', 'Sand'],
  },

  {
    id:        'bucket-elevator-belt',
    category:  'handling',
    name:      'Bucket Elevator — Belt Type',
    series:    'VECTOMEC™',
    shortDesc: 'Vertical elevation of flowable bulk materials using buckets mounted on a continuous belt. Ideal for light-to-medium density materials at high throughput.',
    image:     'images/be-belt.jpg',
    apps:      ['Cement', 'Grain', 'Fertiliser'],
    fullDesc:  'Belt-type bucket elevators are used extensively in cement, grain, and fertiliser industries to elevate bulk materials vertically with minimal material degradation. Jayveecons designs and fabricates complete elevator assemblies including casing, head and boot sections, belting, buckets, drive and tensioning arrangements.',
    specs: [
      { key: 'Bucket width',       val: '100mm – 600mm' },
      { key: 'Elevation height',   val: 'Up to 50m' },
      { key: 'Capacity',           val: 'Up to 500 TPH' },
      { key: 'Belt speed',         val: '1.2 – 2.5 m/s' },
    ],
    modalApps: ['Cement clinker', 'Raw meal', 'Grain', 'Fertiliser', 'Coal', 'Mineral fines'],
  },

  {
    id:        'bucket-elevator-chain',
    category:  'handling',
    name:      'Bucket Elevator — Chain Type',
    series:    'VECTOMEC™',
    shortDesc: 'Heavy-duty vertical elevation using chain-mounted buckets. Handles hot, abrasive, and heavy materials that exceed belt-type limitations.',
    image:     'images/be-chain.jpg',
    apps:      ['Mining', 'Steel', 'Cement'],
    fullDesc:  'Where belt-type elevators reach their limits — extreme heat, heavy abrasive lumps, and high bulk densities — chain-type bucket elevators take over. Jayveecons fabricates both single-strand and double-strand chain elevator configurations, with forged steel or cast link chain, heavy-duty fabricated steel buckets, and robust head and boot section construction.',
    specs: [
      { key: 'Chain type',        val: 'Single or double strand; forged or cast link' },
      { key: 'Bucket type',       val: 'Fabricated steel; centrifugal or gravity discharge' },
      { key: 'Elevation height',  val: 'Up to 40m' },
      { key: 'Capacity',          val: 'Up to 300 TPH depending on material' },
      { key: 'Temperature',       val: 'Suitable for materials up to 400°C' },
      { key: 'Drive',             val: 'Gearbox motor with backstop; VFD optional' },
    ],
    features: [
      { key: 'Casing',    val: 'Fabricated MS with inspection doors at head, boot, and intermediate points' },
      { key: 'Take-up',   val: 'Gravity or screw take-up at boot to maintain chain tension' },
      { key: 'Safety',    val: 'Zero-speed switch, belt/chain slip detection, pull-cord stops' },
    ],
    modalApps: ['Hot cement clinker', 'Sponge iron (DRI)', 'Steel mill scale', 'Limestone lumps', 'Dolomite', 'Heavy ores', 'Coal'],
  },

  {
    id:        'air-slide',
    category:  'handling',
    name:      'Air Slide',
    series:    'VECTOMEC™',
    shortDesc: 'Gravity-fed, air-fluidised conveying system for fine powders on a slight downward slope. No moving parts — extremely low maintenance and power consumption.',
    apps:      ['Cement', 'Fly ash', 'Alumina'],
    fullDesc:  'The air slide is one of the most elegant solutions in bulk material handling: a fabric-lined duct inclined at just 5–7°, through which low-pressure air is blown upward through a permeable membrane to fluidise fine powder. In cement plants, air slides transfer raw meal, cement, and fly ash between silos, mills, and elevators.',
    specs: [
      { key: 'Duct width',    val: '150mm – 600mm standard; custom wider on request' },
      { key: 'Slope',         val: '5° – 7° minimum for most fine powders' },
      { key: 'Air pressure',  val: '200–500 Pa; supplied by roots blower or centrifugal fan' },
      { key: 'Membrane',      val: 'Woven polyester or canvas aeration fabric; replaceable' },
      { key: 'Casing',        val: 'MS fabricated with bolted inspection covers' },
    ],
    features: [
      { key: 'Moving parts',  val: 'None (zero mechanical wear)' },
      { key: 'Power',         val: 'Significantly lower than screw conveyor for equivalent duty' },
      { key: 'Maintenance',   val: 'Membrane replacement only; no bearings, seals, or drives' },
      { key: 'Limitation',    val: 'Gravity-fed only — cannot convey uphill or handle coarse/wet material' },
    ],
    modalApps: ['Cement raw meal', 'Portland cement', 'Fly ash', 'Alumina powder', 'Crushed limestone fines', 'Silica fume'],
  },

  /* ════════════════════════════════
     MATERIAL PROCESSING
  ════════════════════════════════ */
  {
    id:        'vsk',
    category:  'processing',
    name:      'Vertical Shaft Kiln (VSK)',
    series:    'VECTOMEC™',
    shortDesc: 'Stationary vertical calcination shaft for small-to-medium scale cement and lime production. The technology that founded Jayveecons in 1987.',
    image:     'images/cement_kiln.jpg',
    apps:      ['Cement — Mini plants', 'Lime', 'Calcination'],
    fullDesc:  'The Vertical Shaft Kiln is the technology that founded Jayveecons in 1987 — and it remains our deepest area of expertise. Raw meal is nodulised, mixed with solid fuel, and charged from the top. As nodules descend under gravity through progressively hotter zones, calcination occurs and clinker forms. The VSK\'s key advantages over rotary kilns are significantly lower capital cost, simpler civil works, lower power consumption, and profitability at 50–300 TPD.',
    specs: [
      { key: 'Capacity range',    val: '50 – 300 TPD clinker (standard); custom larger' },
      { key: 'Shaft diameter',    val: '2.0m – 4.5m internal' },
      { key: 'Shaft height',      val: '8m – 20m effective calcination zone' },
      { key: 'Feed requirement',  val: 'Nodulised raw meal (requires nodulizer — supplied separately)' },
      { key: 'Fuel',              val: 'Coal (mixed with raw meal nodules), wood, biomass' },
      { key: 'Shell material',    val: 'Fabricated MS shell with refractory lining' },
      { key: 'Clinker discharge', val: 'Rotating grate or reciprocating pusher at base' },
    ],
    features: [
      { key: 'Complete VSK system', val: 'Shell, refractory, grate/discharge, air supply, instrumentation' },
      { key: 'Nodulizer',           val: 'Disc pelletiser supplied as part of VSK package' },
      { key: 'Material handling',   val: 'Raw meal feed conveying and clinker discharge system' },
      { key: 'Engineering',         val: 'Full process design, civil layout drawings, commissioning support' },
    ],
    modalApps: ['Mini cement plants (50–300 TPD)', 'Quicklime production', 'Dolomite calcination', 'Calcium carbide', 'Replacement VSK shells', 'VSK upgrades & refurbishment'],
  },

  {
    id:        'ball-mill',
    category:  'processing',
    name:      'Ball Mill / Grinding Mill',
    series:    'VECTOMEC™',
    shortDesc: 'Rotating cylindrical vessel with grinding media that reduces material to fine powder. Used in cement, mining, and mineral processing for particle size reduction.',
    image:     'images/ball_mill.jpeg',
    apps:      ['Cement', 'Mining', 'Ceramics'],
    fullDesc:  'Ball mills are the standard in cement and mineral grinding. A cylindrical mill shell lined with wear-resistant liners rotates on trunnion bearings, tumbling steel or ceramic grinding media against the feed material to produce fine powder. Jayveecons designs both overflow and grate-discharge configurations, with open-circuit and closed-circuit arrangements.',
    specs: [
      { key: 'Shell diameter',   val: '0.9m – 4.0m' },
      { key: 'Shell length',     val: '1.5m – 14m' },
      { key: 'Grinding media',   val: 'Steel balls, cylpebs, ceramic' },
      { key: 'Liners',           val: 'Manganese steel, rubber, chrome-moly' },
    ],
    modalApps: ['Cement grinding', 'Raw meal grinding', 'Coal grinding', 'Mineral grinding', 'Ceramics', 'Chemical powders'],
  },

  {
    id:        'crusher',
    category:  'processing',
    name:      'Crusher',
    series:    'VECTOMEC™',
    shortDesc: 'Primary and secondary size reduction of run-of-mine rock, clinker, and aggregate. Jaw, impact, and cone crusher configurations to match feed size and product specification.',
    apps:      ['Mining', 'Aggregates', 'Cement'],
    fullDesc:  'Jayveecons supplies jaw, impact, and hammer crusher configurations sized and specified to your feed material hardness, maximum lump size, required product size, and throughput. We also supply complete crushing circuit packages including vibrating feeders, screens, conveyors, and the crusher itself as an integrated system.',
    specs: [
      { key: 'Jaw crusher',     val: 'Primary crushing of hard rock; high reduction ratio' },
      { key: 'Impact crusher',  val: 'Secondary/tertiary; high-speed rotor; good cubicity' },
      { key: 'Hammer crusher',  val: 'Single-stage reduction of soft-to-medium materials' },
      { key: 'Feed size',       val: 'Up to 1,000mm for jaw; up to 600mm for impact/hammer' },
      { key: 'Product size',    val: 'Adjustable CSS; typically 10–50mm product' },
    ],
    features: [
      { key: 'Standalone crushers',  val: 'Single unit supply with drive and guards' },
      { key: 'Complete circuits',    val: 'Feeder + crusher + screen + conveyor as integrated package' },
      { key: 'Wear parts',           val: 'Jaw plates, blow bars, hammers, liners — ongoing spares supply' },
    ],
    modalApps: ['Limestone quarrying', 'Cement raw material', 'Clinker pre-crushing', 'Aggregates production', 'Coal preparation', 'Mineral ore reduction'],
  },

  {
    id:        'nodulizer',
    category:  'processing',
    name:      'Nodulizer / Disc Pelletiser',
    series:    'VECTOMEC™',
    shortDesc: 'Inclined rotating pan that forms fine powders into uniform spherical nodules or pellets. Critical in VSK cement production and iron ore pelletising processes.',
    apps:      ['Cement VSK', 'Iron ore', 'Fertiliser'],
    fullDesc:  'The nodulizer is an inclined rotating pan onto which fine powder is fed along with controlled water addition. As the pan rotates, particles aggregate into spherical balls that grow to a target size and discharge over the rim. In VSK cement production, nodulising is an essential step — raw meal must be formed into uniform nodules of 8–20mm before charging to the shaft kiln. Jayveecons has been building nodulizers for VSK plants since 1987.',
    specs: [
      { key: 'Pan diameter',    val: '1.5m – 5.0m' },
      { key: 'Pan inclination', val: '45° – 55° (adjustable)' },
      { key: 'Nodule size',     val: '8mm – 25mm (adjustable)' },
      { key: 'Capacity',        val: '1 TPH – 30 TPH depending on pan size' },
      { key: 'Drive',           val: 'Gearbox motor with variable speed' },
      { key: 'Pan lining',      val: 'Wear-resistant MS or rubber-lined' },
    ],
    modalApps: ['VSK cement — raw meal nodulising', 'Iron ore pelletising', 'Fertiliser granulation', 'Lime fines agglomeration', 'Fly ash pelletising'],
  },

  {
    id:        'vibrating-screens',
    category:  'processing',
    name:      'Vibrating Screens',
    series:    'VECTOMEC™',
    shortDesc: 'Single and multi-deck vibrating screens for particle size classification and oversize removal. Linear and circular motion configurations.',
    apps:      ['Mining', 'Aggregates', 'Food'],
    fullDesc:  'Vibrating screens separate bulk material into two or more size fractions by passing it over one or more tensioned wire mesh or polyurethane screen panels, each with a defined aperture. Jayveecons supplies both circular-motion screens and linear-motion screens for high-throughput dry classification and heavy-duty mining applications.',
    specs: [
      { key: 'Screen area',    val: '0.5m² – 20m² per deck' },
      { key: 'Decks',          val: 'Single, double, or triple deck' },
      { key: 'Motion type',    val: 'Circular (unbalanced flywheel) or linear (dual vibrator)' },
      { key: 'Aperture range', val: '0.5mm – 150mm' },
      { key: 'Inclination',    val: '15° – 25° for circular; 0° – 5° for linear' },
    ],
    modalApps: ['Aggregates sizing', 'Coal classification', 'Iron ore screening', 'Clinker oversize removal', 'Sand & gravel', 'Food grain cleaning'],
  },

  {
    id:        'industrial-dryer',
    category:  'processing',
    name:      'Industrial Dryer',
    series:    'VECTOMEC™',
    shortDesc: 'Rotary drum dryer for reducing moisture content in bulk materials prior to processing or storage. Direct or indirect fired configurations.',
    apps:      ['Mining', 'Food', 'Waste'],
    fullDesc:  'A rotary drum dryer is an inclined rotating cylinder through which wet bulk material travels counter-current or co-current to a hot gas stream, progressively losing moisture. Jayveecons supplies the complete drying system including the drum, riding rings, support rollers, drive, burner, and cyclone/baghouse for dust recovery.',
    specs: [
      { key: 'Drum diameter',    val: '0.6m – 3.5m' },
      { key: 'Drum length',      val: '4m – 30m' },
      { key: 'Inlet moisture',   val: 'Up to 40% (w/w)' },
      { key: 'Outlet moisture',  val: 'As low as 0.5% (w/w)' },
      { key: 'Drying temp',      val: 'Up to 700°C inlet gas (direct fired)' },
      { key: 'Fuel',             val: 'Coal, natural gas, diesel, biomass' },
    ],
    modalApps: ['Sand & aggregates drying', 'Coal drying', 'Iron ore fines', 'Fertiliser granules', 'Wood chips & biomass', 'Municipal sludge', 'Food by-products'],
  },

  /* ════════════════════════════════
     ANCILLARY EQUIPMENT
  ════════════════════════════════ */
  {
    id:        'hoppers-bins',
    category:  'ancillary',
    name:      'Hoppers & Bins',
    series:    'VECTOMEC™',
    shortDesc: 'Fabricated storage and feed hoppers for material surge capacity and controlled feed to downstream equipment. Engineered geometry to prevent bridging and ratholing.',
    apps:      ['All sectors'],
    fullDesc:  'A hopper or bin is the critical interface between intermittent supply and continuous process demand. Jayveecons engineers hopper geometry based on your material\'s wall friction angle, cohesive strength, and bulk density — ensuring reliable mass flow discharge every time.',
    specs: [
      { key: 'Capacity',      val: '0.5m³ day bins to 500m³+ surge hoppers' },
      { key: 'Outlet',        val: 'Round, square, or slotted; sized for feeder inlet' },
      { key: 'Wall slope',    val: 'Engineered; typically 55°–70° from horizontal' },
      { key: 'Construction',  val: 'MS fabricated; AR liner available for abrasive materials' },
    ],
    modalApps: ['Raw material reception', 'Crusher feed hoppers', 'Mill feed bins', 'Kiln feed hoppers', 'Finished product bins', 'Day storage bins'],
  },

  {
    id:        'silos',
    category:  'ancillary',
    name:      'Silos & Storage Tanks',
    series:    'VECTOMEC™',
    shortDesc: 'Vertical storage vessels for bulk powders, granules, and liquids. Flat-bottom and cone-bottom configurations; 5T to 1000T+ capacity.',
    apps:      ['Cement', 'Food', 'Chemical'],
    fullDesc:  'Silos are tall, cylindrical storage vessels designed to hold large volumes of bulk powder or granular material in a compact footprint. Jayveecons supplies flat-bottom silos with aeration floor systems and cone-bottom silos for free-flowing granular materials. We supply the complete silo package including shell, roof, access ladder, aeration pads, level indicators, and dust vent filter.',
    specs: [
      { key: 'Capacity',    val: '5T – 2,000T+ (custom designed)' },
      { key: 'Diameter',    val: '2m – 12m typical; larger on request' },
      { key: 'Bottom type', val: 'Flat with aeration floor (powders) or cone (granules)' },
      { key: 'Discharge',   val: 'Rotary airlock, slide gate, or knife gate valve' },
    ],
    modalApps: ['Cement storage & despatch', 'Fly ash storage', 'Raw meal buffer silo', 'Clinker intermediate storage', 'Grain storage', 'Chemical powder storage'],
  },

  {
    id:        'pressure-vessels',
    category:  'ancillary',
    name:      'Pressure Vessels',
    series:    'VECTOMEC™',
    shortDesc: 'Fabricated pressure vessels for pneumatic conveying boosters, compressed air receivers, and process applications. Hydrostatic test certified.',
    apps:      ['Pneumatic systems', 'Process'],
    fullDesc:  'Jayveecons fabricates pressure vessels to IS 2825 (Indian Standard for unfired pressure vessels) and can work to ASME Section VIII Division 1 when specified. Every vessel is hydrostatic pressure tested before despatch, and we provide full material traceability, weld maps, and inspection certificates.',
    specs: [
      { key: 'Design pressure',  val: 'Up to 25 bar (higher on request)' },
      { key: 'Volume',           val: '50 litres – 50,000 litres' },
      { key: 'Design code',      val: 'IS 2825 standard; ASME Sec. VIII Div. 1 on request' },
      { key: 'Material',         val: 'MS (SA 516 Gr 70), SS 304/316, alloy steel' },
      { key: 'Testing',          val: 'Hydrostatic test at 1.5× design pressure' },
    ],
    modalApps: ['Compressed air receivers', 'Pneumatic conveying blow tanks', 'Instrument air buffers', 'Process gas vessels', 'Separator vessels'],
  },

  {
    id:        'rotary-airlock',
    category:  'ancillary',
    name:      'Rotary Air Lock',
    series:    'VECTOMEC™',
    shortDesc: 'Rotary valve that meters bulk material between zones of different pressure while maintaining the pressure differential. Essential in pneumatic conveying and dust collectors.',
    apps:      ['Cement', 'Pneumatic systems'],
    fullDesc:  'A rotary airlock uses a slowly rotating multi-vane rotor inside a close-tolerance housing to transfer bulk material from one pressure zone to another while minimising air leakage. They are indispensable wherever a pneumatic conveying system, dust collector, or pressurised process must accept or discharge material without losing its pressure seal.',
    specs: [
      { key: 'Rotor diameter',       val: '150mm – 600mm' },
      { key: 'Pressure differential', val: 'Up to 1.0 bar across the valve' },
      { key: 'Rotor vanes',          val: '6 or 8 vane; open or closed-end rotor' },
      { key: 'Housing material',     val: 'Cast iron, MS fabricated, or SS 304/316' },
      { key: 'Drive',                val: 'Gearbox motor; VFD for variable throughput' },
    ],
    modalApps: ['Dust collector discharge', 'Pneumatic conveying inlet', 'Cyclone separator outlet', 'Kiln ESP/baghouse discharge', 'Silo bottom metering'],
  },

  /* ════════════════════════════════
     ACCESSORIES & PARTS
  ════════════════════════════════ */
  {
    id:        'idler-rollers',
    category:  'accessories',
    name:      'Idler Rollers',
    series:    'VECTOMEC™',
    shortDesc: 'In-house manufactured carrying, return, impact, and training idlers for belt conveyor systems. Precision-balanced for long service life.',
    image:     'images/idler.jpg',
    apps:      ['Belt conveyors', 'OEM replacement'],
    fullDesc:  'Jayveecons manufactures idler rollers in-house on CNC equipment, using precision-selected deep-groove ball bearings, labyrinth seals, and precision-turned shells. All rollers are spin-balanced before despatch to eliminate vibration at operating speed.',
    specs: [
      { key: 'Shell diameter', val: '63mm, 89mm, 102mm, 127mm, 152mm' },
      { key: 'Shell material', val: 'ERW steel tube, precision turned OD' },
      { key: 'Bearings',       val: 'Deep-groove ball bearings, C3 clearance; grease-packed for life' },
      { key: 'Seals',          val: 'Multi-lip labyrinth seal; dust and water ingress protection' },
    ],
    modalApps: ['New conveyor builds', 'OEM replacement', 'Mining conveyors', 'Cement plant conveyors', 'Port & bulk terminal', 'Aggregate plants'],
  },

  {
    id:        'conveyor-belts',
    category:  'accessories',
    name:      'Conveyor Belts',
    series:    'VECTOMEC™',
    shortDesc: 'Replacement conveyor belts in fabric ply, steel cord, heat-resistant, oil-resistant, and food-grade grades. Supplied cut-to-length with mechanical or vulcanised splicing.',
    apps:      ['Belt conveyors', 'OEM replacement', 'Upgrades'],
    fullDesc:  'Jayveecons supplies conveyor belts across the full range of grades and constructions, cut to your exact loop length and width, with splicing hardware or vulcanisation carried out on-site by our installation team.',
    specs: [
      { key: 'Fabric ply (EP)', val: 'EP100–EP500; 2–6 plies; most common general-purpose' },
      { key: 'Steel cord (ST)', val: 'ST500–ST5000; for high-tension long-haul mining' },
      { key: 'Heat resistant',  val: 'T1/T2/T3 grades; up to 200°C' },
      { key: 'Food grade',      val: 'FDA-compliant covers; white or blue' },
      { key: 'Chevron / cleat', val: 'Moulded rubber profiles for steep incline up to 35°' },
    ],
    modalApps: ['Cement & clinker conveyors', 'Coal handling', 'Mining ore transport', 'Aggregate & quarry', 'Food processing lines'],
  },

  {
    id:        'elevator-buckets',
    category:  'accessories',
    name:      'Replacement Elevator Buckets',
    series:    'VECTOMEC™',
    shortDesc: 'Replacement buckets for belt and chain bucket elevators — stamped steel, polyethylene, and polyurethane grades. Supplied individually or in full re-bucketing sets.',
    apps:      ['Bucket elevators', 'Cement', 'Grain', 'Mining'],
    fullDesc:  'Jayveecons supplies replacement buckets in stamped mild steel, abrasion-resistant steel, HDPE, and polyurethane — each grade suited to different material types and operating conditions. We match dimensions precisely to the OEM bucket specification, or fabricate to your measurement if the original manufacturer is unknown.',
    specs: [
      { key: 'Mild steel',   val: 'Standard duty; cement, grain, fertiliser; lowest cost' },
      { key: 'AR steel',     val: 'Abrasive materials — ore, clinker, sand; 3–5× longer life' },
      { key: 'HDPE',         val: 'Grain, food, fertiliser; lightweight; low adhesion' },
      { key: 'Polyurethane', val: 'Wet or sticky materials; resists impact and abrasion' },
      { key: 'SS 304/316',   val: 'Food-grade or corrosive duty' },
    ],
    modalApps: ['Cement & clinker elevators', 'Grain & pulse handling', 'Mining ore elevators', 'Fertiliser & chemical', 'Coal handling', 'Food processing'],
  },

  {
    id:        'screw-flights',
    category:  'accessories',
    name:      'Screw Flights & Wear Parts',
    series:    'VECTOMEC™',
    shortDesc: 'Replacement screw flights, hard-faced and abrasion-resistant flighting, trough liners, hanger bearing assemblies, and end seals for screw conveyors.',
    apps:      ['Screw conveyors', 'OEM replacement', 'Upgrades'],
    fullDesc:  'Jayveecons fabricates replacement screw flights to match your existing conveyor\'s pitch, diameter, shaft size, and hand. For high-wear duties — fly ash, cement raw meal, sand, clinker grit — we offer hard-faced flights and full AR steel (Hardox 400/450) flighting that lasts significantly longer than standard mild steel.',
    specs: [
      { key: 'Mild steel flights',  val: 'Standard duty; cement, grain, general powders' },
      { key: 'AR steel (Hardox)',   val: 'Abrasive materials; 3–5× longer life than MS' },
      { key: 'Hard-faced flights',  val: 'Tungsten carbide or chrome carbide weld overlay' },
      { key: 'Stainless steel',     val: 'SS 304/316; food-grade or corrosive duty' },
      { key: 'Ribbon flights',      val: 'Open-centre ribbon for sticky or viscous materials' },
    ],
    modalApps: ['Cement & fly ash conveyors', 'Sand & mineral fines', 'Grain & food processing', 'Coal & ash handling', 'Chemical powders'],
  },
];