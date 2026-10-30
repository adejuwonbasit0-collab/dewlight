/* ==========================================================================
   Dewlight - product data (edit here; every page updates)
   Brand name, WhatsApp number and currency are at the top.
   ========================================================================== */
window.SK_BRAND = {
  name: 'Dewlight',
  whatsapp: '2347014345122',
  phoneDisplay: '0701 434 5122',
  phoneTel: '+2347014345122'
};

window.SK_CATS = [
  { id: 'cream', name: 'Face creams' },
  { id: 'serum', name: 'Serums' },
  { id: 'cleanser', name: 'Cleansers' },
  { id: 'sunscreen', name: 'Sun care' },
  { id: 'eye', name: 'Eye care' },
  { id: 'body', name: 'Body' }
];
window.SK_CONCERNS = [
  { id: 'dryness', name: 'Dryness' }, { id: 'dullness', name: 'Dullness' }, { id: 'darkspots', name: 'Dark spots' },
  { id: 'acne', name: 'Breakouts' }, { id: 'sensitivity', name: 'Sensitivity' }, { id: 'aging', name: 'Fine lines' }
];

/* look: tint = container colour, lid = cap metal, cream = product colour, bg = card backdrop */
window.SK_PRODUCTS = [
  {
    id: 'hydra-dew-cream', name: 'Hydra Dew Cream', cat: 'cream', type: 'jar', price: 24500, size: '50 ml', slot: 'both', step: 3,
    skin: ['dry', 'combo', 'normal'], concerns: ['dryness', 'dullness'], tag: 'Signature', hero: 'Skin that looks freshly dewed.',
    line: 'Water-light moisture that leaves skin looking freshly dewed.',
    short: 'A cushiony gel-cream with hyaluronic acid and squalane for all-day hydration.',
    desc: ['Hydra Dew Cream melts in like water and settles like silk. Three weights of hyaluronic acid draw moisture into the surface of the skin, while squalane keeps it there.', 'It layers well under sunscreen and makeup, and it is light enough for humid weather.'],
    benefits: ['Hydrates for up to 24 hours', 'Plumps the look of dry, tight skin', 'Non-greasy and fragrance-free'],
    ingredients: [['Hyaluronic acid', 'Holds water at the skin surface'], ['Squalane', 'Light oil that softens and seals'], ['Panthenol', 'Calms and conditions'], ['Glycerin', 'Humectant for lasting moisture']],
    how: 'Smooth one pea-sized amount over clean skin morning and night.',
    look: { tint: '#EFEAE2', lid: '#C9A66B', cream: '#FBF8F2', bg: '#E3EEEA', bg2: '#F7F3EC', ink: '#3a3a35', name: 'Hydra Dew', sub: 'Hydrating cream' }
  },
  {
    id: 'glow-c-cream', name: 'Glow C Cream', cat: 'cream', type: 'jar', price: 27000, size: '50 ml', slot: 'am', step: 3,
    skin: ['normal', 'combo', 'oily', 'dry'], concerns: ['dullness', 'darkspots'], tag: 'New', hero: 'A brighter glow, gently.',
    line: 'A vitamin C cream for a clearer, brighter-looking glow.',
    short: 'Stable vitamin C and niacinamide in a silky cream to even the look of skin tone.',
    desc: ['Glow C Cream pairs a gentle vitamin C derivative with niacinamide and licorice root to brighten the look of dull skin and fade the look of marks over time.', 'The cream is apricot in the jar and invisible on the skin.'],
    benefits: ['Brightens the look of dull skin', 'Helps even the look of tone', 'Lightweight, quick to absorb'],
    ingredients: [['Ascorbyl glucoside', 'Gentle, stable vitamin C'], ['Niacinamide', 'Evens the look of tone'], ['Licorice root', 'Soothes and brightens'], ['Vitamin E', 'Antioxidant support']],
    how: 'Apply in the morning to clean skin, then follow with sunscreen.',
    look: { tint: '#F3D9C5', lid: '#C9A66B', cream: '#F8CFA6', bg: '#FBDDBF', bg2: '#FFF1E0', ink: '#4a3326', name: 'Glow C', sub: 'Brightening cream' }
  },
  {
    id: 'night-peptide-cream', name: 'Night Peptide Cream', cat: 'cream', type: 'jar', price: 31500, size: '50 ml', slot: 'pm', step: 4,
    skin: ['dry', 'normal', 'combo'], concerns: ['aging', 'dryness'], tag: '', hero: 'Wake up soft and rested.',
    line: 'A rich overnight cream so you wake up soft and rested.',
    short: 'Peptides, ceramides and shea butter that cushion skin while you sleep.',
    desc: ['A rich but breathable night cream. Signal peptides and ceramides support the look of firmer, smoother skin, and shea butter wraps it in comfort.', 'Wake up to skin that feels softer and looks more rested.'],
    benefits: ['Softens the look of fine lines', 'Supports the skin barrier overnight', 'Rich, comforting texture'],
    ingredients: [['Peptide complex', 'Supports the look of firmness'], ['Ceramides', 'Strengthen the skin barrier'], ['Shea butter', 'Deep nourishment'], ['Bisabolol', 'Calms the look of redness']],
    how: 'Massage a small amount over face and neck at night, after serum.',
    look: { tint: '#D9CBDD', lid: '#C98F82', cream: '#F1E4EF', bg: '#D8C8DE', bg2: '#F2E8F0', ink: '#43324a', name: 'Night Peptide', sub: 'Overnight cream' }
  },
  {
    id: 'barrier-calm-cream', name: 'Barrier Calm Cream', cat: 'cream', type: 'jar', price: 22000, size: '50 ml', slot: 'both', step: 3,
    skin: ['sensitive', 'dry', 'normal'], concerns: ['sensitivity', 'dryness'], tag: '', hero: 'Comfort for easily upset skin.',
    line: 'Comfort for skin that stings, flushes or feels easily upset.',
    short: 'Centella, oat and ceramides in a fragrance-free cream for sensitive skin.',
    desc: ['Made for skin that reacts. Centella and colloidal oat calm the look of irritation while ceramides help rebuild a comfortable barrier.', 'No fragrance, no essential oils, no alcohol.'],
    benefits: ['Calms the look of redness', 'Fragrance-free and gentle', 'Helps restore comfort'],
    ingredients: [['Centella asiatica', 'Soothing botanical'], ['Colloidal oat', 'Calms and protects'], ['Ceramides', 'Barrier support'], ['Allantoin', 'Softens rough texture']],
    how: 'Apply morning and night, or any time skin feels tight or irritated.',
    look: { tint: '#CCD6C3', lid: '#D8C79C', cream: '#F0F3E8', bg: '#D4DEC8', bg2: '#F3F1E4', ink: '#33402f', name: 'Barrier Calm', sub: 'Soothing cream' }
  },
  {
    id: 'niacinamide-clarity-serum', name: 'Niacinamide Clarity Serum', cat: 'serum', type: 'dropper', price: 18500, size: '30 ml', slot: 'both', step: 2,
    skin: ['oily', 'combo', 'normal'], concerns: ['acne', 'darkspots'], tag: '',
    short: 'A clear serum that helps refine the look of pores and balance shine.',
    desc: ['Ten percent niacinamide with zinc in a fresh, water-based serum. It helps keep shine in check and refines the look of pores and uneven tone.'],
    benefits: ['Balances the look of shine', 'Refines the look of pores', 'Layers under any cream'],
    ingredients: [['Niacinamide 10%', 'Evens the look of tone'], ['Zinc PCA', 'Balances oil'], ['Panthenol', 'Soothes']],
    how: 'Apply 3 to 4 drops to clean skin before moisturiser.',
    look: { tint: '#CBDDE0', lid: '#C9A66B', cream: '#FFFFFF', bulb: '#f6f2ea', bg: '#DCE9EA', bg2: '#F4F7F5', ink: '#2f4448', name: 'Clarity', sub: 'Niacinamide serum', size: '30 ml' }
  },
  {
    id: 'hyaluronic-burst-serum', name: 'Hyaluronic Burst Serum', cat: 'serum', type: 'dropper', price: 19500, size: '30 ml', slot: 'both', step: 2,
    skin: ['dry', 'normal', 'combo', 'sensitive'], concerns: ['dryness', 'aging'], tag: '',
    short: 'Multi-weight hyaluronic acid for instant bounce and lasting moisture.',
    desc: ['A weightless serum that plumps the look of tired, dehydrated skin. Use it on damp skin for the best result.'],
    benefits: ['Instant surface hydration', 'Plumps the look of fine lines', 'Suitable for all skin types'],
    ingredients: [['Hyaluronic acid (3 weights)', 'Hydrates at several depths'], ['Vitamin B5', 'Softens and soothes'], ['Aloe', 'Cooling moisture']],
    how: 'Press 3 to 4 drops into damp skin, then seal with a cream.',
    look: { tint: '#F2D6D6', lid: '#C98F82', cream: '#FFFFFF', bulb: '#f6efec', bg: '#F3DCDC', bg2: '#FBF2EE', ink: '#5a3333', name: 'Hyaluronic Burst', sub: 'Hydrating serum', size: '30 ml' }
  },
  {
    id: 'dark-spot-serum', name: 'Dark Spot Corrector Serum', cat: 'serum', type: 'dropper', price: 26000, size: '30 ml', slot: 'pm', step: 2,
    skin: ['normal', 'combo', 'oily', 'dry'], concerns: ['darkspots', 'dullness'], tag: '',
    short: 'Alpha arbutin and tranexamic acid to fade the look of dark marks.',
    desc: ['Targets the look of post-blemish marks and uneven patches. Results build with consistent use and daily sunscreen.'],
    benefits: ['Fades the look of dark marks', 'Brightens uneven tone', 'Gentle enough for daily use'],
    ingredients: [['Alpha arbutin', 'Brightening active'], ['Tranexamic acid', 'Targets the look of marks'], ['Niacinamide', 'Evens the look of tone']],
    how: 'Apply at night to clean skin. Always wear sunscreen the next day.',
    look: { tint: '#E6D3B7', lid: '#B8935A', cream: '#FFFFFF', bulb: '#f4eee4', bg: '#F1E1C8', bg2: '#FAF3E6', ink: '#4d3a1d', name: 'Dark Spot', sub: 'Corrector serum', size: '30 ml' }
  },
  {
    id: 'soft-gel-cleanser', name: 'Soft Gel Cleanser', cat: 'cleanser', type: 'pump', price: 12500, size: '150 ml', slot: 'both', step: 1,
    skin: ['oily', 'combo', 'normal', 'sensitive'], concerns: ['acne', 'sensitivity'], tag: '',
    short: 'A gentle gel that removes sunscreen and oil without stripping.',
    desc: ['Lifts away sunscreen, sweat and oil while leaving skin soft and comfortable, never tight.'],
    benefits: ['Cleans without tightness', 'Fragrance-free', 'Good for morning and night'],
    ingredients: [['Amino acid cleansers', 'Mild, low-foam cleansing'], ['Glycerin', 'Keeps skin soft'], ['Green tea', 'Soothing']],
    how: 'Massage onto wet skin for 30 seconds and rinse.',
    look: { tint: '#DDE7E1', lid: '#C9A66B', cream: '#FFFFFF', bg: '#E1ECE6', bg2: '#F5F7F2', ink: '#2f4439', name: 'Soft Gel', sub: 'Gentle cleanser', size: '150 ml' }
  },
  {
    id: 'cream-cleanser', name: 'Milk Cream Cleanser', cat: 'cleanser', type: 'tube', price: 13500, size: '120 ml', slot: 'pm', step: 1,
    skin: ['dry', 'sensitive', 'normal'], concerns: ['dryness', 'sensitivity'], tag: '',
    short: 'A creamy cleanser that melts makeup and leaves skin cushioned.',
    desc: ['A milky cleanser for dry or reactive skin. It melts away makeup and daily grime and rinses clean.'],
    benefits: ['Melts makeup and SPF', 'Leaves skin soft', 'Fragrance-free'],
    ingredients: [['Oat milk', 'Soothing'], ['Squalane', 'Softens'], ['Glycerin', 'Hydrates']],
    how: 'Massage onto dry or damp skin, then rinse with lukewarm water.',
    look: { tint: '#F4EEE4', lid: '#D8C79C', cream: '#FFFFFF', bg: '#F1E9DB', bg2: '#FAF7F0', ink: '#4a4030', name: 'Milk Cleanser', sub: 'Cream cleanser', size: '120 ml' }
  },
  {
    id: 'daily-shield-spf50', name: 'Daily Shield SPF 50', cat: 'sunscreen', type: 'tube', price: 16500, size: '50 ml', slot: 'am', step: 4,
    skin: ['oily', 'combo', 'normal', 'dry', 'sensitive'], concerns: ['darkspots', 'aging'], tag: '',
    short: 'A broad-spectrum SPF 50 that wears light and leaves no white cast.',
    desc: ['A lightweight daily sunscreen with broad-spectrum protection. It sits well under makeup and leaves no white cast on deeper skin tones.'],
    benefits: ['Broad-spectrum SPF 50', 'No white cast', 'Wears well under makeup'],
    ingredients: [['Modern UV filters', 'Broad-spectrum protection'], ['Niacinamide', 'Evens the look of tone'], ['Vitamin E', 'Antioxidant support']],
    how: 'Apply generously as the last step of your morning routine. Reapply every 2 hours in strong sun.',
    look: { tint: '#F6E3B8', lid: '#C9A66B', cream: '#FFFFFF', bg: '#FAEBC6', bg2: '#FFF7E4', ink: '#4f3d10', name: 'Daily Shield', sub: 'SPF 50 sunscreen', size: '50 ml' }
  },
  {
    id: 'eye-revive-cream', name: 'Eye Revive Cream', cat: 'eye', type: 'jar-sm', price: 17500, size: '15 ml', slot: 'both', step: 3,
    skin: ['normal', 'dry', 'combo', 'oily', 'sensitive'], concerns: ['aging', 'dullness'], tag: '',
    short: 'A cooling eye cream for tired, puffy-looking eyes.',
    desc: ['Caffeine and peptides refresh the look of tired eyes, while a soft cushion of moisture smooths the fine skin around them.'],
    benefits: ['Refreshes tired-looking eyes', 'Smooths the look of fine lines', 'Light, quick to absorb'],
    ingredients: [['Caffeine', 'Refreshes the look of puffiness'], ['Peptides', 'Support the look of firmness'], ['Hyaluronic acid', 'Hydrates']],
    how: 'Tap a small amount around the eye area morning and night.',
    look: { tint: '#E6DDEB', lid: '#C98F82', cream: '#F7F1F6', bg: '#E5DCEA', bg2: '#F7F2F6', ink: '#43324a', name: 'Eye Revive', sub: 'Eye cream', size: '15 ml' }
  },
  {
    id: 'shea-body-butter', name: 'Whipped Shea Body Butter', cat: 'body', type: 'jar-lg', price: 15000, size: '250 ml', slot: 'both', step: 5,
    skin: ['dry', 'normal', 'sensitive'], concerns: ['dryness'], tag: '',
    short: 'Whipped shea and cocoa butter for soft, comfortable skin from head to toe.',
    desc: ['A rich, whipped body butter that sinks in without feeling heavy. Perfect after a shower, and kind to elbows, knees and heels.'],
    benefits: ['Deeply moisturising', 'Absorbs without stickiness', 'Lightly scented with shea'],
    ingredients: [['Shea butter', 'Rich nourishment'], ['Cocoa butter', 'Softens and seals'], ['Vitamin E', 'Antioxidant support']],
    how: 'Massage onto damp skin after bathing.',
    look: { tint: '#E9D8BF', lid: '#B8935A', cream: '#FBF4E6', bg: '#EFDFC6', bg2: '#FAF3E6', ink: '#4b3a22', name: 'Shea Butter', sub: 'Whipped body butter', size: '250 ml' }
  }
];
SK_PRODUCTS.forEach(function (p) {
  p.look.size = p.look.size || p.size; p.look.name = p.look.name || p.name;
  if (!p.hero) { delete p.look.bg; delete p.look.bg2; }
});
