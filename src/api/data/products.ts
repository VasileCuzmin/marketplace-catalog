import type { ProductDetail } from "../../types/ProductDetail.js";

export const products: ProductDetail[] = [
  // ── TROPICAL ───────────────────────────────────────────────────────────
  {
    id: 'prod-001',
    name: 'Echeveria',
    category: 'Succulents & Cacti',
    price: 9.0,
    rating: 4.6,
    reviewCount: 184,
    imageUrl: 'https://loremflickr.com/600/600/echeveria,succulent?lock=7',
    inStock: true,
    petSafe: true,
    description:
      'Echeveria elegans forms perfect geometric rosettes in soft blue-green with delicately pink-tinged leaf tips, like something sculpted rather than grown. Native to the semi-arid hillsides of Mexico, it stores water in plump, powdery leaves and produces bright coral-pink flowers on arching stems in late winter. Its compact symmetry makes it one of the most satisfying succulents to collect and display.',
    careInstructions: {
      watering:
        'Water deeply every 2–3 weeks, letting the soil dry out completely between sessions.',
      light:
        'Needs at least 4–6 hours of direct or very bright indirect sunlight daily.',
      humidity:
        'Prefers low humidity; avoid misting, which encourages rot and powdery mildew.',
      temperature:
        'Ideal between 65–80°F (18–27°C); protect from frost below 40°F.',
      fertilizing:
        'Apply a diluted succulent fertilizer once in spring and once in early summer.',
      repotting:
        'Repot every 1–2 years into fresh well-draining succulent mix.',
    },
    features: [
      'Forms perfect geometric rosettes that make it a natural centerpiece',
      'Produces vivid coral-pink flowers on arching stems in winter and spring',
      'Leaves have a powdery farina coating that protects against UV and moisture loss',
      'Offsets freely, producing chicks around the base that are easy to propagate',
      'Non-toxic to cats and dogs — safe for pet-friendly homes',
    ],
    specifications: [
      { label: 'Mature Height', value: '4–8 inches' },
      { label: 'Current Pot Size', value: '2.5-inch nursery pot' },
      { label: 'Humidity', value: '10–30%' },
      { label: 'Temperature', value: '65–80°F (18–27°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-002',
    name: 'Golden Pothos',
    category: 'Tropical',
    price: 14.0,
    rating: 4.8,
    reviewCount: 528,
    imageUrl: 'https://loremflickr.com/600/600/pothos?lock=2',
    badge: 'Bestseller',
    inStock: true,
    petSafe: false,
    description:
      'The Golden Pothos earns its reputation as the ultimate beginner plant through sheer resilience — it tolerates low light, irregular watering, and indoor neglect with cheerful indifference. Its heart-shaped leaves display brilliant splashes of golden yellow on rich emerald green, trailing gracefully from shelves or climbing a simple pole. Few plants deliver so much visual reward for so little effort.',
    careInstructions: {
      watering:
        'Water every 1–2 weeks, allowing the soil to dry out almost completely between sessions.',
      light:
        'Adapts to low light but produces more variegation in medium to bright indirect light.',
      humidity:
        'Tolerates average household humidity; no special misting required.',
      temperature:
        'Comfortable between 60–85°F (15–29°C); avoid freezing temperatures.',
      fertilizing:
        'Apply a diluted balanced fertilizer once a month in spring and summer.',
      repotting:
        'Repot every 2 years or when roots emerge from the drainage holes.',
    },
    features: [
      'Virtually indestructible — one of the easiest houseplants to keep alive',
      'Trailing stems can reach 10 ft, perfect for high shelves or hanging baskets',
      'Propagates easily in water — snip a node and roots appear within weeks',
      'Proven air purifier, removing common VOCs from indoor environments',
      'Variegation intensifies with brighter light for a more striking display',
    ],
    specifications: [
      { label: 'Mature Vine Length', value: 'Up to 10 ft indoors' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '40–70%' },
      { label: 'Temperature', value: '60–85°F (15–29°C)' },
      { label: 'Toxicity', value: 'Toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-003',
    name: 'Snake Plant',
    category: 'Tropical',
    price: 22.0,
    rating: 4.7,
    reviewCount: 447,
    imageUrl: 'https://loremflickr.com/600/600/snakeplant?lock=14',
    badge: 'Bestseller',
    inStock: true,
    petSafe: false,
    description:
      'The Snake Plant stands as a pillar of architectural simplicity, its upright sword-like leaves banded in pale green and cream rising with quiet authority. Originally from West Africa, it has adapted to endure drought, shade, and benign neglect — making it the perfect companion for busy households or dimly lit offices. NASA research once listed it among the top plants for filtering indoor air pollutants.',
    careInstructions: {
      watering:
        'Water sparingly every 2–6 weeks; overwatering is the primary cause of decline.',
      light:
        'Survives in low light but grows faster and more upright in medium indirect light.',
      humidity:
        'Tolerates dry air exceptionally well — no humidity adjustments needed.',
      temperature:
        'Best between 60–80°F (15–27°C); sensitive to frost and temperatures below 50°F.',
      fertilizing:
        'Feed once in spring and once in summer with a half-strength balanced fertilizer.',
      repotting:
        'Repot every 2–3 years; roots filling the pot are a sure sign it is time.',
    },
    features: [
      "One of the world's most low-maintenance houseplants",
      'Striking upright form adds architectural structure to any room',
      'Proven to filter airborne toxins including formaldehyde and benzene',
      'Propagates readily from leaf cuttings or division',
      'Drought-tolerant storage roots survive weeks without water',
    ],
    specifications: [
      { label: 'Mature Height', value: '2–4 ft indoors' },
      { label: 'Current Pot Size', value: '6-inch nursery pot' },
      { label: 'Humidity', value: '30–50%' },
      { label: 'Temperature', value: '60–80°F (15–27°C)' },
      { label: 'Toxicity', value: 'Toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-004',
    name: 'ZZ Plant',
    category: 'Tropical',
    price: 28.0,
    rating: 4.6,
    reviewCount: 203,
    imageUrl: 'https://loremflickr.com/600/600/zzplant?lock=1',
    inStock: true,
    petSafe: false,
    description:
      'The ZZ Plant is a masterclass in survival, storing water in thick underground rhizomes that allow it to endure weeks without attention. Its glossy, deep-green pinnate leaves emerge in an elegant arching pattern that catches light beautifully, and it will thrive in office corridors and windowless rooms where most plants simply give up. For those who love the look of lush greenery but travel frequently, this is the plant.',
    careInstructions: {
      watering:
        'Water every 2–3 weeks, ensuring the soil dries out completely between waterings.',
      light:
        'Tolerates very low light; grows more vigorously in medium indirect light.',
      humidity:
        'Adapted to dry conditions; average household humidity is perfectly fine.',
      temperature:
        'Prefers 65–85°F (18–29°C); avoid cold drafts and temperatures below 45°F.',
      fertilizing:
        'Fertilize lightly once in spring and once in summer; avoid over-fertilizing.',
      repotting:
        'Repot every 2–3 years when rhizomes push against the pot walls.',
    },
    features: [
      'Stores water in rhizomes — survives weeks of missed waterings',
      'Highly glossy leaves that stay shiny without leaf-shine products',
      'Tolerates the lowest light conditions of virtually any houseplant',
      'Slow, steady growth means minimal pruning or maintenance',
      'Architectural form suits modern and minimalist interiors perfectly',
    ],
    specifications: [
      { label: 'Mature Height', value: '2–3 ft indoors' },
      { label: 'Current Pot Size', value: '6-inch nursery pot' },
      { label: 'Humidity', value: '40–50%' },
      { label: 'Temperature', value: '65–85°F (18–29°C)' },
      { label: 'Toxicity', value: 'Toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-005',
    name: 'Bird of Paradise',
    category: 'Tropical',
    price: 85.0,
    rating: 4.7,
    reviewCount: 178,
    imageUrl: 'https://loremflickr.com/600/600/strelitzia,plant?lock=11',
    badge: 'Bestseller',
    inStock: true,
    petSafe: true,
    description:
      'The Bird of Paradise is the grand statement plant, capable of reaching ceiling height indoors with enormous paddle-shaped leaves that split naturally at the edges to reduce wind resistance — a beautiful quirk retained even without any breeze. Its imposing stature and lush tropical silhouette bring a true resort-like quality to living rooms, foyers, and bright corners. This is the plant that makes guests stop and stare.',
    careInstructions: {
      watering:
        'Water every 1–2 weeks; allow the top half of the soil to dry out between waterings.',
      light:
        'Needs bright indirect light to thrive; a south- or east-facing window is ideal.',
      humidity:
        'Appreciates moderate to high humidity; mist the leaves regularly in winter.',
      temperature:
        'Grows best between 65–85°F (18–29°C); cannot tolerate frost.',
      fertilizing:
        'Feed monthly with a balanced fertilizer during the growing season.',
      repotting:
        'Repot every 2 years; prefers being slightly root-bound before sizing up.',
    },
    features: [
      'Spectacular paddle-shaped leaves that naturally split along the midrib',
      'Can reach 5–6 ft tall indoors in bright light over several years',
      'Pet-safe — safe around cats and dogs',
      'Dramatic architectural silhouette perfect for large, bright spaces',
      'Low pest pressure when kept in appropriate humidity',
    ],
    specifications: [
      { label: 'Mature Height', value: '5–6 ft indoors' },
      { label: 'Current Pot Size', value: '10-inch nursery pot' },
      { label: 'Humidity', value: '50–70%' },
      { label: 'Temperature', value: '65–85°F (18–29°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-006',
    name: 'Peace Lily',
    category: 'Tropical',
    price: 18.0,
    rating: 4.5,
    reviewCount: 261,
    imageUrl: 'https://loremflickr.com/600/600/spathiphyllum,plant?lock=8',
    badge: 'New',
    inStock: true,
    petSafe: false,
    description:
      'The Peace Lily stands apart from foliage-only plants by producing elegant white spathes throughout the year, offering the satisfaction of blooms without the fussiness of true flowering plants. It thrives in lower light than almost any other flowering houseplant, and its drooping leaves communicate thirst in the most direct way possible — giving gardeners an unmistakable watering cue. A classic for offices, bedrooms, and shaded corners.',
    careInstructions: {
      watering:
        'Water when the top inch of soil dries out, or when leaves begin to droop slightly.',
      light:
        'Grows well in low to medium indirect light; more blooms appear in brighter conditions.',
      humidity:
        'Enjoys moderate to high humidity; brown leaf tips indicate overly dry air.',
      temperature:
        'Thrives between 65–80°F (18–27°C); keep away from cold windowsills.',
      fertilizing:
        'Apply a balanced liquid fertilizer every 6 weeks during spring and summer.',
      repotting: 'Repot every 1–2 years or when roots fill the pot.',
    },
    features: [
      'Produces white spathes (blooms) multiple times per year in good light',
      'Wilting leaves droop when thirsty — a built-in watering reminder',
      'One of the top air-purifying plants according to NASA research',
      'Adapts to lower light than almost any other blooming houseplant',
      'Compact size makes it ideal for desks, nightstands, and shelves',
    ],
    specifications: [
      { label: 'Mature Height', value: '1–3 ft indoors' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '50–60%' },
      { label: 'Temperature', value: '65–80°F (18–27°C)' },
      { label: 'Toxicity', value: 'Toxic to cats and dogs' },
    ],
  },

  // ── SUCCULENTS & CACTI ─────────────────────────────────────────────────
  {
    id: 'prod-007',
    name: 'Monstera',
    category: 'Tropical',
    price: 45.0,
    rating: 4.9,
    reviewCount: 312,
    imageUrl: 'https://loremflickr.com/600/600/monstera?lock=8',
    badge: 'Bestseller',
    inStock: true,
    petSafe: false,
    description:
      'The Monstera deliciosa is the undisputed icon of the houseplant world, prized for its dramatic fenestrated leaves that develop their signature splits as the plant matures. Native to the rainforests of Central America, it climbs toward filtered light and rewards patient growers with leaves that can reach 18 inches across. Its bold tropical presence transforms any room into a lush, living statement.',
    careInstructions: {
      watering:
        'Water thoroughly every 1–2 weeks, allowing the top 2 inches of soil to dry out between waterings.',
      light:
        'Thrives in bright indirect light; avoid direct sun, which scorches the leaves.',
      humidity:
        'Prefers humidity above 50%; mist regularly or use a humidifier in dry climates.',
      temperature: 'Keep between 65–85°F (18–29°C) and away from cold drafts.',
      fertilizing:
        'Feed with a balanced liquid fertilizer once a month during spring and summer.',
      repotting:
        'Repot every 1–2 years in spring when roots begin to circle the pot.',
    },
    features: [
      'Iconic split and fenestrated leaves that enlarge with age',
      'Fast-growing under good light — can produce several new leaves per month',
      'Aerial roots can be trained up a moss pole for larger, more dramatic growth',
      'Air-purifying qualities help improve indoor air quality',
      'One of the most recognizable and photographed houseplants in the world',
    ],
    specifications: [
      { label: 'Mature Height', value: 'Up to 10 ft indoors' },
      { label: 'Current Pot Size', value: '6-inch nursery pot' },
      { label: 'Humidity', value: '50–70%' },
      { label: 'Temperature', value: '65–85°F (18–29°C)' },
      { label: 'Toxicity', value: 'Toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-008',
    name: 'Aloe Vera',
    category: 'Succulents & Cacti',
    price: 12.0,
    rating: 4.7,
    reviewCount: 396,
    imageUrl: 'https://loremflickr.com/600/600/aloevera?lock=1',
    badge: 'Bestseller',
    inStock: true,
    petSafe: false,
    description:
      'Aloe vera is perhaps the most useful plant in any home — its thick, fleshy leaves contain a clear gel with centuries of use for soothing minor burns, sunburns, and skin irritation. Architecturally striking with its rosette of serrated, gray-green leaves, it grows steadily toward the light and pups freely around the base, providing an endless supply of plants to share. A first aid kit and a sculptural statement, all in one pot.',
    careInstructions: {
      watering:
        'Water thoroughly every 3–4 weeks; aloe rots quickly if soil stays damp.',
      light:
        'Thrives in bright indirect light; a south-facing windowsill is ideal.',
      humidity:
        'Prefers dry air; low to average indoor humidity suits it perfectly.',
      temperature: 'Comfortable between 55–80°F (13–27°C); protect from frost.',
      fertilizing:
        'Fertilize once in spring with a phosphorus-heavy succulent fertilizer.',
      repotting:
        'Repot when pups crowd the pot or roots emerge from drainage holes.',
    },
    features: [
      'Gel inside the leaves soothes minor burns and skin irritation naturally',
      'Produces pups (offsets) freely — one plant becomes many over time',
      'Tolerates irregular watering and thrives on neglect',
      'Architectural gray-green rosette adds sculptural interest to bright sills',
      'Grown for thousands of years for both beauty and its medicinal properties',
    ],
    specifications: [
      { label: 'Mature Height', value: '1–2 ft indoors' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '20–40%' },
      { label: 'Temperature', value: '55–80°F (13–27°C)' },
      { label: 'Toxicity', value: 'Toxic to cats and dogs if ingested' },
    ],
  },
  {
    id: 'prod-009',
    name: 'Zebra Haworthia',
    category: 'Succulents & Cacti',
    price: 10.0,
    rating: 4.5,
    reviewCount: 142,
    imageUrl: 'https://loremflickr.com/600/600/haworthia?lock=22',
    badge: 'New',
    inStock: true,
    petSafe: true,
    description:
      'The Zebra Haworthia is a compact succulent with dramatic white horizontal stripes across its dark green, stiff leaves — a pattern so precise it looks hand-drawn. Unlike most succulents, it is perfectly comfortable in moderate light, making it the only succulent that genuinely works on a north-facing windowsill. Its tiny stature and bold markings make it a natural choice for terrariums, desktops, and succulent arrangements.',
    careInstructions: {
      watering:
        'Water every 2–3 weeks, allowing soil to dry completely between waterings.',
      light:
        'Tolerates medium indirect light — ideal for windowsills without direct sun.',
      humidity:
        'Prefers low to average humidity; no supplemental misting needed.',
      temperature:
        'Prefers 60–80°F (15–27°C); can tolerate brief dips to 40°F.',
      fertilizing:
        'Fertilize once in spring with a diluted balanced fertilizer.',
      repotting:
        'Repot every 2–3 years or when the plant produces many offsets.',
    },
    features: [
      'Bold white zebra stripes on each leaf — a natural geometric pattern',
      'One of the few succulents that thrives without direct sunlight',
      'Non-toxic to cats and dogs — great for pet-friendly homes',
      'Propagates easily from offsets that cluster around the parent rosette',
      'Slow-growing and compact — stays tidy for years without trimming',
    ],
    specifications: [
      { label: 'Mature Height', value: '4–6 inches' },
      { label: 'Current Pot Size', value: '2.5-inch nursery pot' },
      { label: 'Humidity', value: '20–40%' },
      { label: 'Temperature', value: '60–80°F (15–27°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-010',
    name: 'Christmas Cactus',
    category: 'Succulents & Cacti',
    price: 14.0,
    rating: 4.4,
    reviewCount: 118,
    imageUrl: 'https://loremflickr.com/600/600/cactus,schlumbergera?lock=10',
    inStock: true,
    petSafe: true,
    description:
      "The Christmas Cactus is a holiday tradition and a long-lived family heirloom — specimens passed down through generations are not uncommon. Its arching, segmented stems cascade over the pot's edge and erupt in vibrant tubular flowers in shades of pink, red, white, or fuchsia right when winter feels its bleakest. Unlike desert cacti, it hails from the humid cloud forests of Brazil and appreciates a bit more water and shade.",
    careInstructions: {
      watering:
        'Water when the top inch of soil is dry; increase watering slightly while flowering.',
      light:
        'Prefers bright indirect light; direct sun causes bleaching and stress.',
      humidity:
        'Benefits from moderate humidity; place on a pebble tray with water in winter.',
      temperature:
        'Ideal between 60–75°F (15–24°C); cool nights trigger bud formation.',
      fertilizing:
        'Feed monthly from April through September with a balanced fertilizer.',
      repotting: 'Repot every 3–4 years just after the bloom cycle finishes.',
    },
    features: [
      'Explodes in vivid tubular blooms in pink, red, white, or fuchsia each winter',
      'Longer-lived than most houseplants — heirloom specimens over 100 years old exist',
      'Not a true desert cactus — tolerates more shade and water than expected',
      'Non-toxic to cats and dogs',
      'Can be encouraged to rebloom annually with a cool, dark rest period in autumn',
    ],
    specifications: [
      { label: 'Mature Spread', value: '12–24 inches (cascading)' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '50–60%' },
      { label: 'Temperature', value: '60–75°F (15–24°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-011',
    name: 'Bunny Ears Cactus',
    category: 'Succulents & Cacti',
    price: 11.0,
    rating: 4.3,
    reviewCount: 95,
    imageUrl: 'https://loremflickr.com/600/600/opuntia,cactus?lock=11',
    badge: 'New',
    inStock: false,
    petSafe: false,
    description:
      "The Bunny Ears Cactus is instantly recognizable — its paired oval pads really do look like a rabbit's head and ears, especially when young. The pale yellow glochids (hair-like spines) covering each pad are deceptively soft-looking but should never be touched with bare skin. In strong summer sun, mature plants produce creamy yellow flowers, and the sculptural pad arrangement creates an endlessly interesting silhouette as the plant grows.",
    careInstructions: {
      watering:
        'Water deeply every 3–4 weeks in summer; reduce to once every 6–8 weeks in winter.',
      light:
        'Requires as much direct sun as possible — a south-facing window is essential.',
      humidity: 'Thrives in dry conditions; high humidity promotes rot.',
      temperature:
        'Ideal between 70–100°F (21–38°C); tolerates brief cold snaps to 50°F.',
      fertilizing: 'Apply a cactus fertilizer once in spring only.',
      repotting:
        'Repot every 2–3 years; handle with tongs or thick gloves to avoid glochids.',
    },
    features: [
      'Distinctive paired pads that resemble bunny ears — a natural conversation piece',
      'Extremely drought-tolerant; perfect for frequent travelers',
      'Produces creamy yellow flowers on mature pads in summer under full sun',
      'Architecturally striking silhouette that changes as new pads emerge',
      'One of the most recognizable cacti in the world',
    ],
    specifications: [
      { label: 'Mature Height', value: '2–5 ft in a pot' },
      { label: 'Current Pot Size', value: '3-inch nursery pot' },
      { label: 'Humidity', value: '10–30%' },
      { label: 'Temperature', value: '70–100°F (21–38°C)' },
      {
        label: 'Toxicity',
        value: 'Glochids cause skin irritation; mildly toxic to cats and dogs',
      },
    ],
  },

  // ── FERNS ──────────────────────────────────────────────────────────────
  {
    id: 'prod-012',
    name: 'Boston Fern',
    category: 'Ferns',
    price: 16.0,
    rating: 4.4,
    reviewCount: 213,
    imageUrl: 'https://loremflickr.com/600/600/nephrolepis,fern?lock=6',
    inStock: true,
    petSafe: true,
    description:
      'The Boston Fern is the quintessential hanging basket plant, its long arching fronds cascading in a full, lush curtain of bright green that brings the feel of a woodland walk indoors. A Victorian parlor staple that never went out of style, it flourishes with consistent moisture and humidity and rewards attentive care with spectacular volume and density. It is the plant that makes a porch, sunroom, or bathroom feel genuinely alive.',
    careInstructions: {
      watering:
        'Keep the soil consistently moist but not waterlogged; check every 2–3 days in summer.',
      light:
        'Thrives in medium to bright indirect light; avoid direct sun, which scorches fronds.',
      humidity:
        'Requires high humidity (60%+); mist daily or use a humidifier.',
      temperature:
        'Prefers 60–75°F (15–24°C); sensitive to cold drafts and air conditioning.',
      fertilizing:
        'Feed with a diluted balanced fertilizer every two weeks during the growing season.',
      repotting: 'Repot annually in spring into a container one size larger.',
    },
    features: [
      'Full, arching fronds cascade up to 3 ft — spectacular in hanging baskets',
      'One of the most effective air-purifying plants in NASA studies',
      'Non-toxic to cats and dogs',
      'Fronds can grow several inches per week in optimal humidity and light',
      'A Victorian classic with a centuries-long history as a beloved houseplant',
    ],
    specifications: [
      { label: 'Mature Spread', value: '2–3 ft (cascading fronds)' },
      { label: 'Current Pot Size', value: '6-inch nursery pot' },
      { label: 'Humidity', value: '60–80%' },
      { label: 'Temperature', value: '60–75°F (15–24°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-013',
    name: 'Maidenhair Fern',
    category: 'Ferns',
    price: 14.0,
    rating: 4.2,
    reviewCount: 97,
    imageUrl: 'https://loremflickr.com/600/600/adiantum,fern?lock=13',
    inStock: true,
    petSafe: true,
    description:
      'The Maidenhair Fern is the most delicate and beautiful of all common ferns, its fan-shaped fronds arranged in a trembling, airy cloud on wiry black stems that seem to dance with the slightest air movement. It demands consistent humidity and moisture, rewarding the attentive grower with a specimen of extraordinary refinement. This is a plant for those who enjoy the ritual of daily care — and the payoff is a plant of genuine artistry.',
    careInstructions: {
      watering:
        'Water frequently to keep the soil evenly moist; never let it fully dry out.',
      light:
        'Needs medium indirect light; direct sun will scorch the delicate fronds immediately.',
      humidity:
        'Demands very high humidity (70%+); a bathroom or terrarium is ideal.',
      temperature:
        'Prefers 65–75°F (18–24°C); sensitive to cold and sudden temperature swings.',
      fertilizing:
        'Apply a quarter-strength balanced fertilizer every two weeks in spring and summer.',
      repotting:
        'Repot in spring every 1–2 years into fresh, humus-rich potting mix.',
    },
    features: [
      'Fan-shaped frondlets on wiry black stems create an incomparably delicate texture',
      'Trembles and dances with the slightest air movement — alive in a room',
      'Non-toxic to cats and dogs',
      'Recovers from dormancy after droughts if the rhizome remains healthy',
      'One of the most refined and elegant houseplants available',
    ],
    specifications: [
      { label: 'Mature Height', value: '12–18 inches' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '70–90%' },
      { label: 'Temperature', value: '65–75°F (18–24°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-014',
    name: "Bird's Nest Fern",
    category: 'Ferns',
    price: 18.0,
    rating: 4.5,
    reviewCount: 131,
    imageUrl: 'https://loremflickr.com/600/600/asplenium,fern?lock=14',
    inStock: true,
    petSafe: true,
    description:
      "The Bird's Nest Fern breaks all the rules of what a fern is supposed to look like — instead of delicate, divided fronds, it produces broad, strap-like leaves in a glossy, undulating rosette that radiates from a central nest of fibrous roots. An epiphyte in its native tropical forest habitat, it clings to trees and thrives in the filtered light of the canopy. Its sculptural form and unusual texture make it one of the most striking ferns for indoor displays.",
    careInstructions: {
      watering:
        'Water around the edges of the pot, not into the central rosette, every 1–2 weeks.',
      light:
        'Tolerates low to medium indirect light; an ideal choice for darker rooms.',
      humidity:
        'Prefers moderate to high humidity; thrives in bathrooms and kitchens.',
      temperature: 'Comfortable between 65–80°F (18–27°C); avoid cold drafts.',
      fertilizing:
        'Feed with a diluted liquid fertilizer monthly during the growing season.',
      repotting:
        'Repot every 2 years in spring into a slightly larger pot with rich, well-draining mix.',
    },
    features: [
      'Broad, strap-like undulating leaves entirely unlike typical divided fern fronds',
      'Central nest of fibrous roots is characteristic of its epiphytic rainforest origins',
      'Thrives in low light — perfect for offices and bathrooms',
      'Non-toxic to cats and dogs',
      'Wipe leaves with a damp cloth to remove dust and keep the glossy sheen vibrant',
    ],
    specifications: [
      { label: 'Mature Spread', value: '12–24 inches' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '50–70%' },
      { label: 'Temperature', value: '65–80°F (18–27°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-015',
    name: 'Staghorn Fern',
    category: 'Ferns',
    price: 32.0,
    rating: 4.6,
    reviewCount: 88,
    imageUrl: 'https://loremflickr.com/600/600/staghorn-fern?lock=1',
    inStock: true,
    petSafe: true,
    description:
      'The Staghorn Fern defies conventional pot culture — it is meant to be mounted on a wooden board or hung in a wire basket, where its dramatic bifurcating antler-like fronds fan outward in a living wall sculpture. An epiphyte from Australian and Southeast Asian forests, it produces two kinds of fronds: flat shield fronds that anchor it to its surface, and the spectacular arching antler fronds that give it its name. It is the houseplant that doubles as wall art.',
    careInstructions: {
      watering:
        'Soak the entire mount in water for 10–20 minutes every 1–2 weeks; mist between waterings.',
      light:
        'Prefers bright indirect light; filtered light mimics its dappled forest canopy habitat.',
      humidity:
        'Benefits from moderate to high humidity; mist the fronds lightly several times a week.',
      temperature:
        'Grows best between 60–80°F (15–27°C); protect from frost and cold drafts.',
      fertilizing:
        'Tuck a banana peel or slow-release fertilizer pellet into the shield fronds monthly.',
      repotting:
        'Remount when the shield fronds outgrow the board — every 2–3 years.',
    },
    features: [
      'Produces two distinct frond types: flat shield fronds and arching antler fronds',
      'Typically mounted on wood boards rather than potted — living wall art',
      'An epiphyte that absorbs water and nutrients through its fronds directly',
      'Non-toxic to cats and dogs',
      'Increases dramatically in drama and size over years of mounted growth',
    ],
    specifications: [
      { label: 'Mature Spread', value: '2–3 ft (mounted)' },
      { label: 'Current Format', value: 'Mounted on cedar board' },
      { label: 'Humidity', value: '50–70%' },
      { label: 'Temperature', value: '60–80°F (15–27°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },

  // ── HERBS ──────────────────────────────────────────────────────────────
  {
    id: 'prod-016',
    name: 'Sweet Basil',
    category: 'Herbs',
    price: 8.0,
    rating: 4.5,
    reviewCount: 274,
    imageUrl: 'https://loremflickr.com/600/600/basil,herb?lock=16',
    badge: 'Bestseller',
    inStock: true,
    petSafe: true,
    description:
      'Sweet Basil is the herb that transforms a kitchen windowsill into a living pantry, offering glossy, fragrant leaves for pasta, pizza, salads, and cocktails the moment you snip them. It grows fast, responds vigorously to regular harvesting, and fills an entire room with its unmistakable spiced-sweetness scent on warm afternoons. The connection between grower and plant is immediate and delicious in the most literal sense.',
    careInstructions: {
      watering:
        'Keep soil consistently moist; water at the base daily in summer heat.',
      light:
        'Needs 6–8 hours of direct sunlight daily — a south-facing kitchen window is perfect.',
      humidity:
        'Tolerates average household humidity; avoid cold, damp conditions.',
      temperature:
        'Thrives between 70–90°F (21–32°C); wilts quickly in temperatures below 50°F.',
      fertilizing:
        'Apply a diluted nitrogen-rich fertilizer every 2 weeks during the growing season.',
      repotting:
        'Pot up into a larger container mid-season if growth slows or roots become crowded.',
    },
    features: [
      'Harvest leaves regularly — trimming encourages bushy, productive new growth',
      'Pinch flower buds as they appear to extend the harvest season by weeks',
      'Fragrance intensifies in warm afternoon sun, perfuming the entire kitchen',
      'Non-toxic to cats and dogs',
      'Grows from seed to harvest-ready in as little as 3–4 weeks',
    ],
    specifications: [
      { label: 'Mature Height', value: '12–24 inches' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '40–60%' },
      { label: 'Temperature', value: '70–90°F (21–32°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-017',
    name: 'English Lavender',
    category: 'Herbs',
    price: 11.0,
    rating: 4.4,
    reviewCount: 162,
    imageUrl: 'https://loremflickr.com/600/600/lavender?lock=3',
    inStock: true,
    petSafe: true,
    description:
      'English Lavender brings the scent of a Provençal hillside indoors, its silvery-gray foliage and slender spikes of violet-blue flowers releasing a calming, unmistakable fragrance. Valued for both its ornamental beauty and its culinary and aromatic uses, it produces flowers that can be dried for sachets, used in baking, or simply enjoyed for their color and scent. A pot on a sunny windowsill adds a gentle, mood-lifting presence to any room.',
    careInstructions: {
      watering:
        'Water deeply but infrequently; allow the soil to dry out between waterings.',
      light:
        'Requires at least 6 hours of direct sunlight daily to flower and stay compact.',
      humidity:
        'Prefers dry air; excess moisture around the foliage encourages fungal issues.',
      temperature:
        'Ideal between 60–80°F (15–27°C) indoors; very cold-hardy outdoors.',
      fertilizing:
        'Feed once in spring with a low-nitrogen fertilizer; too much nitrogen reduces flowering.',
      repotting:
        'Repot every 2 years in spring into well-draining, slightly alkaline potting mix.',
    },
    features: [
      'Flowers can be dried and used in sachets, culinary recipes, or essential oils',
      'Silvery-gray foliage provides year-round interest even when not in bloom',
      'Calming fragrance is released by brushing the leaves',
      'Non-toxic to cats and dogs',
      'Pollinators adore lavender — pot it outdoors in summer to support bees',
    ],
    specifications: [
      { label: 'Mature Height', value: '12–18 inches' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '20–40%' },
      { label: 'Temperature', value: '60–80°F (15–27°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-018',
    name: 'Rosemary',
    category: 'Herbs',
    price: 10.0,
    rating: 4.6,
    reviewCount: 198,
    imageUrl: 'https://loremflickr.com/600/600/rosemary,plant?lock=5',
    inStock: true,
    petSafe: true,
    description:
      'Rosemary is the herb of memory and the Mediterranean — its piney, resinous fragrance evokes sun-baked hillsides and Sunday roasts with equal force. Grown indoors, it forms a woody, evergreen shrub that supplies fresh sprigs for roasting, infusing oils, and flavoring cocktails year-round. It is both a working culinary herb and an attractive, structural plant that fills whatever light-filled corner you give it.',
    careInstructions: {
      watering:
        'Water when the top inch of soil is dry; rosemary is susceptible to root rot if overwatered.',
      light:
        'Needs 6–8 hours of direct sunlight daily; rotate the pot weekly for even growth.',
      humidity:
        'Prefers dry air; good airflow helps prevent powdery mildew on indoor plants.',
      temperature:
        'Ideal between 55–80°F (13–27°C); tolerates brief cold snaps if soil is dry.',
      fertilizing:
        'Feed with a balanced fertilizer once in spring; over-fertilizing dilutes the flavor.',
      repotting: 'Repot every 2 years into a pot with excellent drainage.',
    },
    features: [
      'Piney, resinous fragrance released by simply brushing the leaves',
      'Woody stems can be harvested and used as skewers for grilling',
      'Produces small blue flowers that are edible and attract pollinators',
      'Non-toxic to cats and dogs',
      'Can be trained into a miniature topiary over several years',
    ],
    specifications: [
      { label: 'Mature Height', value: '12–24 inches indoors' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '20–40%' },
      { label: 'Temperature', value: '55–80°F (13–27°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-019',
    name: 'Spearmint',
    category: 'Herbs',
    price: 8.0,
    rating: 4.3,
    reviewCount: 143,
    imageUrl: 'https://loremflickr.com/600/600/mint,herb?lock=1',
    inStock: true,
    petSafe: false,
    description:
      'Spearmint is the mint of mojitos, summer teas, and homemade toothpaste — its cool, sweet fragrance is one of the most refreshing scents in the plant world. Vigorous and enthusiastic, it grows quickly and rewards regular harvesting with an endless supply of flavorful leaves throughout the growing season. Kept in its own pot with no neighboring plants to invade, it is an uncomplicated, highly productive kitchen herb.',
    careInstructions: {
      watering:
        'Keep soil consistently moist; mint wilts quickly when dry but recovers readily.',
      light:
        'Grows well in medium indirect light; tolerates less sun than most herbs.',
      humidity:
        'Tolerates average indoor humidity; good airflow prevents fungal leaf spots.',
      temperature:
        'Comfortable between 55–70°F (13–21°C); prefers slightly cooler conditions.',
      fertilizing:
        'Fertilize lightly every 4–6 weeks with a balanced liquid fertilizer.',
      repotting:
        'Repot into a larger container every season as mint fills its space aggressively.',
    },
    features: [
      'Cool, sweet fragrance released by brushing the leaves — instantly refreshing',
      'Fast-growing and productive; a single plant supplies leaves all season',
      'Tolerates more shade than most culinary herbs',
      'Pinch flowers to keep leaves flavorful and growth bushy',
      'Grows happily in water as well as soil — try a glass jar on the windowsill',
    ],
    specifications: [
      { label: 'Mature Height', value: '12–24 inches' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '40–60%' },
      { label: 'Temperature', value: '55–70°F (13–21°C)' },
      {
        label: 'Toxicity',
        value: 'Toxic to cats and dogs in large quantities',
      },
    ],
  },

  // ── FLOWERING ──────────────────────────────────────────────────────────
  {
    id: 'prod-020',
    name: 'Moth Orchid',
    category: 'Flowering',
    price: 28.0,
    rating: 4.8,
    reviewCount: 389,
    imageUrl: 'https://loremflickr.com/600/600/phalaenopsis,orchid?lock=6',
    badge: 'Bestseller',
    inStock: true,
    petSafe: true,
    description:
      "The Moth Orchid is the world's most popular flowering houseplant for good reason — its gracefully arching spikes of large, perfectly formed blooms in white, pink, purple, or bicolored patterns last for months with minimal care. Despite its exotic appearance, it adapts remarkably well to average home conditions and, with a little patience, will rebloom year after year from the same spike or from new growth. The orchid that proves elegance is not complicated.",
    careInstructions: {
      watering:
        'Water by soaking the roots weekly; pour off excess and never let roots sit in water.',
      light:
        'Needs bright indirect light; a sheer-curtained east or west window is ideal.',
      humidity:
        'Appreciates 50–70% humidity; place on a pebble tray with water in dry winters.',
      temperature:
        'Prefers 65–85°F (18–29°C) days with a 10°F night drop to trigger reblooming.',
      fertilizing:
        'Feed weakly, weekly — a quarter-strength balanced fertilizer year-round.',
      repotting:
        'Repot every 1–2 years in fresh orchid bark after the bloom cycle ends.',
    },
    features: [
      'Blooms last 2–4 months on a single spike — extraordinary value for a flowering plant',
      'Can be encouraged to rebloom by exposing to cooler nights in autumn',
      'Transparent pot lets you monitor root health — green roots mean a happy plant',
      'Non-toxic to cats and dogs',
      'Hundreds of color combinations and patterns available across the species',
    ],
    specifications: [
      { label: 'Mature Height', value: '12–20 inches (with spike)' },
      { label: 'Current Pot Size', value: '3.5-inch clear nursery pot' },
      { label: 'Humidity', value: '50–70%' },
      { label: 'Temperature', value: '65–85°F (18–29°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-021',
    name: 'African Violet',
    category: 'Flowering',
    price: 10.0,
    rating: 4.5,
    reviewCount: 217,
    imageUrl: 'https://loremflickr.com/600/600/saintpaulia,violet?lock=1',
    inStock: true,
    petSafe: true,
    description:
      'The African Violet is the cheerful, compact bloomer that thrives on a north-facing windowsill where most flowering plants struggle — producing clusters of velvety purple, pink, or white blooms almost continuously throughout the year. Its fuzzy, dark-green leaves form a symmetrical rosette that frames the flowers beautifully, and its small footprint makes it a perfect candidate for crowded sills and desk corners. Few plants are so reliably floriferous.',
    careInstructions: {
      watering:
        'Water from below by setting the pot in a dish of water for 20 minutes; empty the dish after.',
      light:
        'Thrives in bright indirect light; a north- or east-facing window works well.',
      humidity:
        'Prefers moderate humidity; avoid misting, which spots the leaves.',
      temperature:
        'Comfortable between 65–75°F (18–24°C); keep away from cold glass.',
      fertilizing:
        'Feed with a dedicated African Violet fertilizer every 2 weeks when in bloom.',
      repotting:
        'Repot annually in spring into fresh African Violet potting mix.',
    },
    features: [
      'Blooms almost continuously throughout the year with regular care',
      'Velvety, fuzzy leaves add textural interest even when not in flower',
      'Non-toxic to cats and dogs',
      'Propagates readily from single leaf cuttings placed in moist potting mix',
      'One of the most floriferous houseplants available for low-light conditions',
    ],
    specifications: [
      { label: 'Mature Spread', value: '6–12 inches' },
      { label: 'Current Pot Size', value: '3-inch nursery pot' },
      { label: 'Humidity', value: '50–60%' },
      { label: 'Temperature', value: '65–75°F (18–24°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-022',
    name: 'Flaming Katy',
    category: 'Flowering',
    price: 9.0,
    rating: 4.3,
    reviewCount: 174,
    imageUrl: 'https://loremflickr.com/600/600/kalanchoe,flower?lock=22',
    badge: 'New',
    inStock: true,
    petSafe: false,
    description:
      'Flaming Katy bursts into color in the depths of winter when most plants are dormant — its clusters of small, brilliantly colored flowers in orange, red, yellow, or pink sit above dark, glossy succulent leaves for weeks on end. A long-day plant that can be tricked back into bloom by giving it 14 hours of darkness per day for 6 weeks, it is one of the few flowering plants that truly cooperates with the determined grower.',
    careInstructions: {
      watering:
        'Water every 2 weeks, allowing the soil to dry between waterings; reduce further post-bloom.',
      light:
        'Needs bright indirect light to bloom; direct sun in summer can cause leaf scorch.',
      humidity:
        'Tolerates average indoor humidity; no special adjustments needed.',
      temperature:
        'Thrives between 65–85°F (18–29°C); cool nights encourage bud formation.',
      fertilizing:
        'Feed monthly with a balanced fertilizer during the blooming period only.',
      repotting:
        'Repot annually after the bloom cycle into fresh, well-draining succulent mix.',
    },
    features: [
      'Produces vivid clusters of flowers in orange, red, yellow, or pink for 6–8 weeks',
      'Can be encouraged to rebloom by managing light exposure in autumn',
      'Dark glossy succulent leaves remain attractive year-round',
      'Compact and tidy — fits any windowsill or desk surface',
      'One of the most popular gift plants during the winter holiday season',
    ],
    specifications: [
      { label: 'Mature Height', value: '8–12 inches' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '40–60%' },
      { label: 'Temperature', value: '65–85°F (18–29°C)' },
      { label: 'Toxicity', value: 'Toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-023',
    name: 'Flamingo Flower',
    category: 'Flowering',
    price: 22.0,
    rating: 4.6,
    reviewCount: 156,
    imageUrl: 'https://loremflickr.com/600/600/anthurium,flower?lock=23',
    inStock: true,
    petSafe: false,
    description:
      'The Flamingo Flower produces glossy, waxy spathes in brilliant red, pink, or white with a characteristic heart shape and a protruding yellow spadix that looks almost too perfect to be real. These long-lasting blooms — each one persisting for 2–3 months — appear repeatedly throughout the year, making this one of the most rewarding and long-lasting flowering houseplants available. Its exotic appearance belies its easygoing nature indoors.',
    careInstructions: {
      watering:
        'Water every 1–2 weeks, allowing the top inch of soil to dry between waterings.',
      light:
        'Prefers bright indirect light; direct sun bleaches the colorful spathes.',
      humidity:
        'Enjoys humidity of 60%+; mist the leaves regularly or use a humidifier.',
      temperature:
        'Comfortable between 65–85°F (18–29°C); sensitive to cold drafts.',
      fertilizing:
        'Feed with a phosphorus-rich fertilizer every 6 weeks to encourage blooming.',
      repotting:
        'Repot every 2 years in spring into a slightly larger container.',
    },
    features: [
      'Glossy, heart-shaped spathes last 2–3 months on the plant',
      'Blooms appear year-round under good light and regular feeding',
      'Almost artificially perfect appearance — guests often mistake it for a fake plant',
      'Dark, glossy foliage remains ornamental between bloom cycles',
      'One of the most striking and long-blooming flowering houseplants available',
    ],
    specifications: [
      { label: 'Mature Height', value: '12–18 inches' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '60–80%' },
      { label: 'Temperature', value: '65–85°F (18–29°C)' },
      { label: 'Toxicity', value: 'Toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-024',
    name: 'Rieger Begonia',
    category: 'Flowering',
    price: 12.0,
    rating: 4.2,
    reviewCount: 89,
    imageUrl: 'https://loremflickr.com/600/600/begonia,flower?lock=24',
    inStock: false,
    petSafe: false,
    description:
      'The Rieger Begonia is a winter-flowering hybrid that produces masses of large, rose-like double flowers in rich shades of red, orange, yellow, and salmon above glossy, dark-green leaves. Unlike the common wax begonia, its blooms are opulent and fully double — each one as complex as a small rose — creating a lavish display in the depths of the cold months. It bridges the gap between high-maintenance flowering plants and the genuinely achievable.',
    careInstructions: {
      watering:
        'Water when the top half-inch of soil dries; avoid waterlogged soil, which causes crown rot.',
      light:
        'Needs bright indirect light; more light encourages more blooms in winter.',
      humidity:
        'Prefers moderate humidity; improve air circulation to prevent botrytis on flowers.',
      temperature:
        'Blooms best between 60–70°F (15–21°C); warm temperatures shorten the bloom period.',
      fertilizing:
        'Apply a high-potassium fertilizer every 2 weeks while actively flowering.',
      repotting: 'Repot annually in autumn before the bloom season begins.',
    },
    features: [
      'Large, fully double blooms resemble roses in their complexity',
      'Flowers prolifically through winter when garden color is scarce',
      'Glossy, dark-green leaves complement the vivid flower colors beautifully',
      'Available in a wide palette — red, orange, salmon, yellow, and white',
      'Ideal as a seasonal centerpiece or gift plant during the winter holidays',
    ],
    specifications: [
      { label: 'Mature Height', value: '8–12 inches' },
      { label: 'Current Pot Size', value: '4-inch nursery pot' },
      { label: 'Humidity', value: '50–60%' },
      { label: 'Temperature', value: '60–70°F (15–21°C)' },
      { label: 'Toxicity', value: 'Toxic to cats and dogs' },
    ],
  },

  // ── AIR PLANTS ─────────────────────────────────────────────────────────
  {
    id: 'prod-025',
    name: 'Blushing Air Plant',
    category: 'Air Plants',
    price: 8.0,
    rating: 4.6,
    reviewCount: 193,
    imageUrl: 'https://loremflickr.com/600/600/tillandsia,airplant?lock=25',
    badge: 'New',
    inStock: true,
    petSafe: true,
    description:
      'The Blushing Air Plant lives up to its poetic name — just before flowering, its inner leaves flush a vivid crimson-pink, blushing as though announcing the purple blooms about to emerge. A true epiphyte that needs no soil, it can be displayed in glass terrariums, driftwood arrangements, tilted in a seashell, or simply perched on a shelf. It is the gateway plant for anyone curious about the world of air plants, offering maximum drama in a tiny package.',
    careInstructions: {
      watering:
        'Mist 2–3 times per week or soak in room-temperature water for 20 minutes weekly.',
      light:
        'Thrives in bright indirect light; a few hours of morning sun is beneficial.',
      humidity:
        'Appreciates moderate to high humidity; misting helps in dry indoor environments.',
      temperature: 'Comfortable between 50–90°F (10–32°C); highly adaptable.',
      fertilizing:
        'Add a diluted bromeliad fertilizer to the soaking water once a month.',
      repotting:
        'No repotting needed — remount or reposition as the plant grows.',
    },
    features: [
      'Inner leaves flush vivid crimson-pink before flowering — a living color show',
      'No soil required — a true air plant that anchors to almost any surface',
      'Produces striking purple tubular flowers after the blushing phase',
      'Non-toxic to cats and dogs',
      'Compact enough to display in terrariums, on driftwood, or in seashells',
    ],
    specifications: [
      { label: 'Mature Height', value: '2–4 inches' },
      { label: 'Display Format', value: 'Soil-free; mount or display freely' },
      { label: 'Humidity', value: '40–70%' },
      { label: 'Temperature', value: '50–90°F (10–32°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-026',
    name: 'King of Air Plants',
    category: 'Air Plants',
    price: 22.0,
    rating: 4.8,
    reviewCount: 124,
    imageUrl: 'https://loremflickr.com/600/600/tillandsia,bromeliad?lock=26',
    badge: 'Bestseller',
    inStock: true,
    petSafe: true,
    description:
      'The King of Air Plants earns its title through sheer, slow-grown grandeur — a massive silvery rosette of curling, strap-like leaves that can reach 12 inches across over many years, with a sculptural presence that rivals any decorative object in the room. Native to the dry forests of Mexico and Central America, it is the most drought-tolerant of all Tillandsia species, making it almost impossible to kill even for the most forgetful plant owners. A showpiece that demands no soil and almost no attention.',
    careInstructions: {
      watering:
        'Mist heavily once a week or soak for 30 minutes; shake out excess water and dry upside-down.',
      light:
        'Needs bright indirect light or filtered direct morning sun to develop its best coloration.',
      humidity:
        'More drought-tolerant than most air plants; average household humidity is fine.',
      temperature:
        'Thrives between 55–90°F (13–32°C); handles dry, warm conditions exceptionally well.',
      fertilizing:
        'Apply a diluted bromeliad fertilizer monthly during the warmer months.',
      repotting:
        'No repotting needed; remount or reposition as the rosette enlarges over the years.',
    },
    features: [
      'Can grow to 12+ inches across — the largest and most dramatic air plant species',
      'Silvery coloration comes from dense trichomes that absorb water directly from the air',
      'One of the most drought-tolerant houseplants in existence',
      'Non-toxic to cats and dogs',
      'Produces a towering flower spike with pink and purple blooms on mature specimens',
    ],
    specifications: [
      { label: 'Mature Spread', value: '8–12 inches' },
      {
        label: 'Display Format',
        value: 'Soil-free; display on a stand, bowl, or shelf',
      },
      { label: 'Humidity', value: '30–60%' },
      { label: 'Temperature', value: '55–90°F (13–32°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
  {
    id: 'prod-027',
    name: "Medusa's Head",
    category: 'Air Plants',
    price: 12.0,
    rating: 4.5,
    reviewCount: 76,
    imageUrl: 'https://loremflickr.com/600/600/tillandsia?lock=27',
    inStock: true,
    petSafe: true,
    description:
      "Medusa's Head is the air plant that looks like nothing else in the plant kingdom — its thick, contorted, tentacle-like leaves twist in every direction from a swollen, bulb-like base, creating a sculptural form that is equal parts alien and beautiful. Despite its eccentric appearance, it is an extremely tolerant and adaptable Tillandsia that grows happily in a variety of indoor conditions. Whether hung, mounted, or simply balanced on a ledge, it is a guaranteed conversation piece.",
    careInstructions: {
      watering:
        'Mist 2–3 times a week or soak for 20 minutes weekly; tilt upside-down to drain the bulbous base.',
      light:
        'Appreciates bright indirect light; tolerates less light than many other Tillandsia species.',
      humidity:
        'Tolerates a range of humidity levels; moderate household humidity is ideal.',
      temperature:
        'Comfortable between 50–90°F (10–32°C); adaptable to most indoor environments.',
      fertilizing: 'Add bromeliad fertilizer to soaking water once a month.',
      repotting:
        'No repotting needed; display freely on a mount, in a terrarium, or hanging.',
    },
    features: [
      'Twisted, tentacle-like leaves spiral from a swollen bulb-like base',
      'Named for the Greek myth — its silhouette truly resembles a head of serpents',
      'No soil required — one of the easiest air plants to care for',
      'Non-toxic to cats and dogs',
      'Produces bright red and purple blooms on a slender spike when mature',
    ],
    specifications: [
      { label: 'Mature Height', value: '4–8 inches' },
      {
        label: 'Display Format',
        value: 'Soil-free; mount, hang, or display in a terrarium',
      },
      { label: 'Humidity', value: '40–70%' },
      { label: 'Temperature', value: '50–90°F (10–32°C)' },
      { label: 'Toxicity', value: 'Non-toxic to cats and dogs' },
    ],
  },
];
