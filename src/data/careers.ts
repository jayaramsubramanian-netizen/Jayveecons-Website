/**
 * src/data/careers.ts
 *
 * Single source of truth for all careers page data.
 * Drives both the UI components AND the JSON-LD schema in careers.astro.
 * To add/edit a role, update this file only — the page and schema auto-update.
 */

export const SITE_URL = 'https://www.jayveecons.com';
export const PAGE_URL = `${SITE_URL}/careers`;

// ─── Roles ────────────────────────────────────────────────────────────────
export interface Role {
  id:             string;
  dept:           string;
  title:          string;
  slug:           string;
  desc:           string;
  skills:         string[];
  employmentType: string;
  education:      string;
  experience:     string;
  industry:       string;
}

export const roles: Role[] = [
  {
    id:             'mechanical-design-engineer',
    dept:           'Engineering',
    title:          'Mechanical Design Engineer',
    slug:           'mechanical-design-engineer-bengaluru',
    desc:           'Equipment design for material handling and processing systems. Process calculations, mechanical sizing, GA and detail drawing production, BOM preparation. Works from client brief through to fabrication-ready documentation.',
    skills:         ['AutoCAD / SolidWorks', 'Conveyor design', 'Mechanical calcs', 'B.E. Mechanical'],
    employmentType: 'FULL_TIME',
    education:      "Bachelor's degree in Mechanical Engineering",
    experience:     'Minimum 2 years in mechanical equipment design',
    industry:       'Bulk Material Handling Equipment Manufacturing',
  },
  {
    id:             'process-engineer',
    dept:           'Engineering',
    title:          'Process Engineer — Bulk Material Handling',
    slug:           'process-engineer-bulk-material-handling-bengaluru',
    desc:           'Process flow design, material balance calculations, equipment sizing and selection for bulk handling systems. Interfaces between client process requirements and mechanical design team. VSK or bulk processing experience strongly valued.',
    skills:         ['Process design', 'Bulk material handling', 'Cement / Mining', 'B.E./M.E. Chemical or Mechanical'],
    employmentType: 'FULL_TIME',
    education:      "Bachelor's or Master's degree in Chemical or Mechanical Engineering",
    experience:     'Minimum 2 years in process or bulk material handling engineering',
    industry:       'Cement, Mining, Food Processing Equipment',
  },
  {
    id:             'erection-commissioning-engineer',
    dept:           'Projects',
    title:          'Erection & Commissioning Engineer',
    slug:           'erection-commissioning-engineer-bengaluru',
    desc:           'On-site installation, alignment, and commissioning of VECTOMEC™ equipment at customer plants across India. Manages civil interface, mechanical assembly, drive commissioning, no-load trials, and process handover. Willingness to travel required.',
    skills:         ['Site experience', 'Conveyor / elevator installation', 'Drive systems', 'Diploma / B.E. Mechanical'],
    employmentType: 'FULL_TIME',
    education:      "Diploma or Bachelor's degree in Mechanical Engineering",
    experience:     'Minimum 2 years site erection and commissioning experience',
    industry:       'Industrial Equipment Installation',
  },
  {
    id:             'workshop-fabricator-welder',
    dept:           'Fabrication',
    title:          'Workshop Fabricator / Welder',
    slug:           'fabricator-welder-bengaluru-manufacturing',
    desc:           'Structural and plate fabrication of conveyors, elevators, hoppers, silos, and processing equipment at our 90,000 sq.ft Malur facility. Reading and working to engineering drawings. Certified welding in MIG, TIG, or arc processes.',
    skills:         ['Structural fabrication', 'Certified welding', 'Drawing reading', 'ITI / Diploma'],
    employmentType: 'FULL_TIME',
    education:      'ITI or Diploma in Mechanical / Welding',
    experience:     'Minimum 2 years workshop fabrication or certified welding',
    industry:       'Engineering Fabrication',
  },
  {
    id:             'technical-sales-engineer',
    dept:           'Sales & Business Development',
    title:          'Technical Sales Engineer — Bulk Material Handling',
    slug:           'technical-sales-engineer-bulk-material-handling',
    desc:           'Customer engagement for VECTOMEC™ equipment and services — responding to enquiries, preparing technical proposals, and developing new client relationships across cement, mining, and food processing sectors.',
    skills:         ['Technical proposal writing', 'Bulk material handling', 'Client relationship', 'B.E. Mechanical preferred'],
    employmentType: 'FULL_TIME',
    education:      "Bachelor's degree in Mechanical Engineering preferred",
    experience:     'Minimum 2 years technical sales in industrial equipment',
    industry:       'Industrial Equipment Sales',
  },
  {
    id:             'production-planning-qc',
    dept:           'Operations',
    title:          'Production Planning & Quality Control',
    slug:           'production-planning-qc-bengaluru',
    desc:           'Workshop production planning, job card management, material procurement coordination, and quality inspection — ensuring fabrication output meets engineering specifications and delivery commitments.',
    skills:         ['Production planning', 'Quality inspection', 'Engineering manufacturing', 'Diploma / B.E.'],
    employmentType: 'FULL_TIME',
    education:      "Diploma or Bachelor's degree in Mechanical or Industrial Engineering",
    experience:     'Minimum 2 years production planning or QC in engineering manufacturing',
    industry:       'Engineering Manufacturing',
  },
];

// ─── FAQ items ─────────────────────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer:   string;       // plain text — used in JSON-LD
  answerHtml: string;     // HTML — rendered in the component
}

export const faqs: FaqItem[] = [
  {
    question:   'What engineering roles does Jayveecons hire for?',
    answer:     'Jayveecons hires for mechanical design engineers, process engineers, erection and commissioning engineers, workshop fabricators and welders, technical sales engineers, and production planning and QC roles — all based in Malur, Karnataka, India.',
    answerHtml: 'Jayveecons hires for mechanical design engineers, process engineers, erection and commissioning engineers, workshop fabricators and welders, technical sales engineers, and production planning and QC roles — all based in Malur, Karnataka, India.',
  },
  {
    question:   'How do I apply for a job at Jayveecons?',
    answer:     'Send your CV and a short covering note to hr@jayveecons.com. You do not need to wait for a specific role to be advertised — Jayveecons reviews all applications against current and upcoming requirements.',
    answerHtml: 'Send your CV and a short covering note to <a href="mailto:hr@jayveecons.com" style="color:var(--teal-l)">hr@jayveecons.com</a>. You do not need to wait for a specific role to be advertised — we review all applications against current and upcoming requirements and respond within one to two weeks when there is a potential fit.',
  },
  {
    question:   'Where is Jayveecons located?',
    answer:     'Jayveecons is located at 1st Phase, Plot 87/D2, Mcnally Rd, Industrial Estate, Malur, Karnataka 563130, India, with a 90,000 sq.ft engineering and fabrication facility.',
    answerHtml: 'Our offices and 90,000 sq.ft engineering and fabrication facility are at 1st Phase, Plot 87/D2, Mcnally Rd, Industrial Estate, Malur, Karnataka 563130, India. All current roles are Malur-based, with site travel required for erection and commissioning positions.',
  },
  {
    question:   'What industries will I work across at Jayveecons?',
    answer:     'Engineers at Jayveecons gain cross-sector exposure across cement (including VSK technology), mining and ore processing, food and agriculture processing, waste management, and steel industries.',
    answerHtml: 'Engineers at Jayveecons gain cross-sector exposure across cement (including VSK technology), mining and ore processing, food and agriculture processing, waste management, and steel industries. See our <a href="/industries" style="color:var(--teal-l)">industries page</a> for the full picture.',
  },
];

// ─── Application steps ─────────────────────────────────────────────────────
export const applySteps = [
  {
    num:   '01',
    title: 'Send your CV',
    desc:  'Email hr@jayveecons.com with a short covering note on your experience and the type of role you are seeking.',
  },
  {
    num:   '02',
    title: 'Initial conversation',
    desc:  'If there is a potential fit, our HR team will reach out within one to two weeks to schedule a call or meeting.',
  },
  {
    num:   '03',
    title: 'Technical interview',
    desc:  'Suitable candidates meet with the relevant engineering or operations lead for a technical discussion.',
  },
  {
    num:   '04',
    title: 'Offer',
    desc:  'Successful candidates receive a formal offer. We aim to move quickly once we have identified the right person.',
  },
];

// ─── Explore band links ────────────────────────────────────────────────────
export const exploreLinks = [
  {
    href:  '/about#our-story',
    label: 'Our Story',
    title: 'About Jayveecons',
    desc:  'Company history, founding, and what drives our engineering culture since 1987.',
  },
  {
    href:  '/products#equipment',
    label: 'VECTOMEC™',
    title: 'Equipment We Build',
    desc:  'Screw conveyors, bucket elevators, VSK kilns, ball mills — the equipment you will design and fabricate.',
  },
  {
    href:  '/services#engineering-services',
    label: 'Engineering Services',
    title: 'What Engineers Do Here',
    desc:  'Design, fabrication, erection and commissioning, and after-sales support — the full lifecycle.',
  },
  {
    href:  '/industries#sectors',
    label: 'Markets We Serve',
    title: 'Industries & Sectors',
    desc:  'Cement, mining, food processing, waste management, steel — the sectors you will gain experience in.',
  },
];
// NOTE: The hash IDs above must match the id="" attribute on the target section
// in each page. e.g. <section id="engineering-services"> in services.astro

// ─── Why work here: bullet points ─────────────────────────────────────────
// NOTE: these contain HTML — WhySection.astro renders them with set:html
export const whyBullets = [
  '90,000 sq.ft machining and fabrication facility in <a href="/about">Malur</a>',
  'Opportunities across technical, operational, commercial, and support functions',
  'Exposure to complete project lifecycles and industrial operations',
  'Direct collaboration with experienced leadership and project teams',
  'Diverse projects across multiple industrial sectors and technologies',
  'A workplace culture focused on accountability, learning, teamwork, and long-term growth',
];

// ─── Why work here: feature points ────────────────────────────────────────
export const whyPoints = [
  {
    title: 'Design to Commissioning',
    desc:  'Engineers work across the full project lifecycle — process calculations, fabrication drawings, site installation, and performance testing. No artificial handoffs.',
  },
  {
    title: 'Cross-Sector Exposure',
    desc:  'Work on cement, mining, food processing, and waste management projects. Each sector brings different material and engineering demands.',
    link:  { href: '/industries', text: 'industries page' },
  },
  {
    title: 'Nearly Four Decades of Knowledge',
    desc:  'Working alongside engineers with deep VSK, conveying, and bulk processing experience since 1987 — an education you cannot get from a textbook.',
  },
  {
    title: 'Team That Builds Together',
    desc:  'Engineering, fabrication, and sales sit under one roof. The people who make and install what you design will tell you when a drawing does not work in practice.',
  },
];