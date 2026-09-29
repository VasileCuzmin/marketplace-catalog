import type { Review } from "../../types/Review.js";

export const reviews: Review[] = [
  // ── prod-007 — Monstera ────────────────────────────────────────────────
  {
    id: 'rev-001-1',
    productId: 'prod-007',
    author: 'Clara M.',
    rating: 5,
    title: 'Grew three new leaves in the first month',
    comment:
      'I was nervous about buying a larger plant online but it arrived incredibly well-packaged, barely a leaf out of place. Within four weeks of getting it settled in front of my east-facing window it pushed out three new leaves, each one already developing those gorgeous fenestrations. I have already ordered a moss pole.',
    createdAt: '2025-09-12',
    verified: true,
  },
  {
    id: 'rev-001-2',
    productId: 'prod-007',
    author: 'Tobias R.',
    rating: 5,
    title: 'The centerpiece my living room was missing',
    comment:
      'This thing is simply stunning in person — the photos do not capture how lush and architectural it is. My partner was skeptical about a big houseplant but the first thing they said when they got home was "we need more of these." It has settled in beautifully and the soil is still holding moisture really well.',
    createdAt: '2025-11-03',
    verified: true,
  },
  {
    id: 'rev-001-3',
    productId: 'prod-007',
    author: 'Sunita K.',
    rating: 4,
    title: 'Healthy plant, care sheet is genuinely helpful',
    comment:
      "Really pleased with the overall quality. One leaf had a small transport nick but nothing that affected the plant's health. The included care card explained watering frequency clearly and I have been following it for two months without any issues. Would definitely buy from here again.",
    createdAt: '2025-10-20',
    verified: true,
  },
  {
    id: 'rev-001-4',
    productId: 'prod-007',
    author: 'Jerome P.',
    rating: 5,
    title: 'Propagated two babies and gifted them already',
    comment:
      'I bought this six months ago and it has gone completely wild in the best way. I have propped up aerial roots on a bamboo stake and the new leaves coming in are much bigger than the originals. I took two stem cuttings and both rooted in water in under three weeks — already gifted them to friends.',
    createdAt: '2025-07-14',
    verified: true,
  },

  // ── prod-002 — Golden Pothos ───────────────────────────────────────────
  {
    id: 'rev-002-1',
    productId: 'prod-002',
    author: 'Margot L.',
    rating: 5,
    title: 'Survived a three-week trip, grew anyway',
    comment:
      'I travel a lot for work and have killed plenty of plants by forgetting them. Left this one for nearly three weeks with no water and came home to find it had pushed out two new leaves. It drooped a little but perked up within an hour of watering. This is the plant I have been looking for.',
    createdAt: '2025-08-27',
    verified: true,
  },
  {
    id: 'rev-002-2',
    productId: 'prod-002',
    author: 'David W.',
    rating: 5,
    title: 'Propagation machine — six new plants from one',
    comment:
      'I have propagated this plant so many times I have lost count. Node cuttings in water root in about two weeks. I now have six pots of pothos around my apartment, all from this one original plant. The variegation is gorgeous and more pronounced than I expected.',
    createdAt: '2025-10-05',
    verified: true,
  },
  {
    id: 'rev-002-3',
    productId: 'prod-002',
    author: 'Freya A.',
    rating: 4,
    title: 'Perfect starter plant for a rented flat',
    comment:
      'I live in a ground-floor flat with small windows and this guy does not care at all. It is trailing along a shelf above my TV and the vines are now about two feet long. Wish I had ordered a slightly bigger pot but the plant itself is really bushy and healthy.',
    createdAt: '2025-12-01',
    verified: true,
  },

  // ── prod-003 — Snake Plant ─────────────────────────────────────────────
  {
    id: 'rev-003-1',
    productId: 'prod-003',
    author: 'Bridget N.',
    rating: 5,
    title: 'Still going strong after seven months of neglect',
    comment:
      'I put this in my spare bedroom, which gets almost no natural light, and forgot about it for the better part of seven months. Watered it maybe three times total. It has put out two new leaves. If I were to rate it on how little I can do and still keep it alive, it would be ten stars.',
    createdAt: '2025-11-18',
    verified: true,
  },
  {
    id: 'rev-003-2',
    productId: 'prod-003',
    author: 'Oscar V.',
    rating: 5,
    title: 'Beautiful in my home office, zero fuss',
    comment:
      'I needed a plant for my home office corner and wanted something that would not need weekend watering checks. This is exactly that — upright, dramatic, and completely unbothered by my irregular schedule. Leaves are dark green with crisp yellow margins. Looks expensive but was not.',
    createdAt: '2025-09-30',
    verified: true,
  },
  {
    id: 'rev-003-3',
    productId: 'prod-003',
    author: 'Aisha T.',
    rating: 4,
    title: 'Great plant, packaging could be improved',
    comment:
      'The snake plant itself is exactly what I wanted — firm, upright leaves with no damage. One of the leaves had a slight bend from shipping that has not straightened out, which is a little annoying aesthetically. Otherwise, really pleased with the overall health and size.',
    createdAt: '2025-10-14',
    verified: false,
  },

  // ── prod-005 — Bird of Paradise ────────────────────────────────────────
  {
    id: 'rev-005-1',
    productId: 'prod-005',
    author: 'Harriet J.',
    rating: 5,
    title: 'Makes my living room look like a boutique hotel',
    comment:
      'I have wanted a Bird of Paradise for years and finally splurged. It is absolutely everything I hoped for — enormous paddle leaves that split naturally as they grow, and it is already reaching toward my ceiling in front of the south window. Guests always comment on it first when they walk in.',
    createdAt: '2025-08-05',
    verified: true,
  },
  {
    id: 'rev-005-2',
    productId: 'prod-005',
    author: 'Liam O.',
    rating: 5,
    title: 'Safe around my cats — a huge relief',
    comment:
      'Finding a large, dramatic statement plant that is actually safe for cats is harder than you would think. This one is, and it really is dramatic. My cats have investigated it thoroughly and no issues at all. The plant itself is incredibly healthy — the roots already filled the nursery pot on arrival.',
    createdAt: '2025-10-22',
    verified: true,
  },
  {
    id: 'rev-005-3',
    productId: 'prod-005',
    author: 'Camille B.',
    rating: 4,
    title: 'Beautiful but demanding — worth it',
    comment:
      'This plant will test you in the first few weeks while it adjusts — mine dropped two leaves and looked sorry for itself for about a month before exploding with new growth. Now it is putting out a new leaf every three weeks and is easily the most impressive plant in my collection. Patience is rewarded here.',
    createdAt: '2025-12-09',
    verified: true,
  },

  // ── prod-006 — Peace Lily ──────────────────────────────────────────────
  {
    id: 'rev-006-1',
    productId: 'prod-006',
    author: 'Rosa E.',
    rating: 5,
    title: 'Bloomed within weeks of arriving',
    comment:
      'I set this on my bathroom shelf where it gets low indirect light and it produced a new white flower spike within three weeks. It has now been blooming almost continuously for four months. For a flowering plant that asks so little of you, the reward is extraordinary.',
    createdAt: '2025-07-28',
    verified: true,
  },
  {
    id: 'rev-006-2',
    productId: 'prod-006',
    author: 'Nathan G.',
    rating: 5,
    title: 'The drooping-when-thirsty feature is genius',
    comment:
      'I know it sounds silly but having a plant that literally signals when it needs water has transformed my watering consistency. The leaves droop dramatically when dry, I water it, and an hour later it is perfectly upright again. I have not accidentally overwatered it once in six months.',
    createdAt: '2025-09-16',
    verified: true,
  },
  {
    id: 'rev-006-3',
    productId: 'prod-006',
    author: 'Diane H.',
    rating: 4,
    title: 'Bought as a gift, recipient is obsessed',
    comment:
      'Got this for a friend who is new to plants and wanted something low-effort that flowers. It was perfect. She messages me updates regularly — it bloomed twice in the first two months. The packaging kept it totally fresh. Only reason for four stars is the pot is quite plain-looking.',
    createdAt: '2025-11-07',
    verified: true,
  },

  // ── prod-001 — Echeveria ───────────────────────────────────────────────
  {
    id: 'rev-007-1',
    productId: 'prod-001',
    author: 'Beatrice O.',
    rating: 5,
    title: 'Perfect geometric rosette — genuinely sculptural',
    comment:
      'I collect succulents and this Echeveria is one of the most perfectly formed I own. The powdery farina on the leaves is pristine and the symmetry is just remarkable. It is sitting on my south windowsill and has already started producing a flower stalk. The chicks around the base are propagating beautifully.',
    createdAt: '2026-02-25',
    verified: true,
  },
  {
    id: 'rev-007-2',
    productId: 'prod-001',
    author: 'Felix Y.',
    rating: 4,
    title: 'Great color, excellent compact size for desk',
    comment:
      'Nice chunky rosette with a lovely blue-green color and that distinctive pink blush on the leaf tips. It fits perfectly on my work desk right in front of a sunny window. I have had it two months and it has produced three offsets already. Would buy the larger size next time.',
    createdAt: '2025-11-25',
    verified: true,
  },
  {
    id: 'rev-007-3',
    productId: 'prod-001',
    author: 'Ingrid S.',
    rating: 5,
    title: 'Bought four — arranged them in a tray together',
    comment:
      'These are incredibly photogenic. I bought four and arranged them in a shallow terracotta dish with some coarse grit on top and it looks like something from a design magazine. They have all been perfectly healthy and the farina is completely undamaged. Shipping was careful and fast.',
    createdAt: '2025-08-18',
    verified: true,
  },

  // ── prod-008 — Aloe Vera ───────────────────────────────────────────────
  {
    id: 'rev-008-1',
    productId: 'prod-008',
    author: 'Marco D.',
    rating: 5,
    title: 'Used the gel immediately — had a sunburn',
    comment:
      'Ordered this plant and within the week I caught too much sun on a hike. Snapped off one of the lower leaves, split it open, and applied the gel. I have bought aloe gel in tubes before but this is incomparably more soothing fresh from the plant. The plant itself is healthy and has three pups already.',
    createdAt: '2025-06-30',
    verified: true,
  },
  {
    id: 'rev-008-2',
    productId: 'prod-008',
    author: 'Petra W.',
    rating: 4,
    title: 'Generous size for the price, very healthy',
    comment:
      'Much bigger than I expected from the photos — really good, thick leaves with firm gel-filled tips. It has been on my bathroom windowsill for three months without a single issue. I did overwater it once early on and the leaves softened a bit at the base, but it recovered completely when I let it dry out.',
    createdAt: '2025-10-11',
    verified: true,
  },
  {
    id: 'rev-008-3',
    productId: 'prod-008',
    author: 'Kwame A.',
    rating: 5,
    title: 'My go-to first aid for kitchen burns',
    comment:
      'Every kitchen should have one. I have burned my hand on the oven twice in the past six months — both times the fresh gel from this plant gave almost instant relief. The plant does not seem to mind the kitchen at all and the architectural shape looks great against the white tiles.',
    createdAt: '2025-12-15',
    verified: true,
  },

  // ── prod-012 — Boston Fern ─────────────────────────────────────────────
  {
    id: 'rev-012-1',
    productId: 'prod-012',
    author: 'Vivienne C.',
    rating: 5,
    title: 'My bathroom has never felt more like a spa',
    comment:
      'I hung this in my bathroom where it gets the steam from showers every day and it is going absolutely berserk with new growth. The fronds are now touching the floor and it is easily the most lush and dramatic thing in our house. I mist it daily with a spray bottle and it has not had a single brown frond.',
    createdAt: '2025-09-22',
    verified: true,
  },
  {
    id: 'rev-012-2',
    productId: 'prod-012',
    author: 'Patrick S.',
    rating: 4,
    title: 'Beautiful plant — take the humidity advice seriously',
    comment:
      'This is a gorgeous fern when cared for properly. I initially put it in my living room and the tips went brown quickly without enough humidity. Moved it to a kitchen shelf near the sink and the difference within two weeks was dramatic. Worth the extra attention it needs.',
    createdAt: '2025-11-30',
    verified: true,
  },
  {
    id: 'rev-012-3',
    productId: 'prod-012',
    author: 'Adaeze F.',
    rating: 5,
    title: 'Exactly what I wanted for my front porch in summer',
    comment:
      'I keep this on the porch from May through September and it absolutely thrives in the humid outdoor air. Brings it in for winter, keep it in the bathroom, and it stays happy. It is a seasonal highlight for my front entrance every year. Great plant, arrived in perfect condition.',
    createdAt: '2025-07-08',
    verified: true,
  },

  // ── prod-015 — Staghorn Fern ───────────────────────────────────────────
  {
    id: 'rev-015-1',
    productId: 'prod-015',
    author: 'Finn L.',
    rating: 5,
    title: 'Mounted it above my sofa — absolute showpiece',
    comment:
      'I replaced a framed print with this staghorn mounted on its cedar board and it gets more comments than anything else in my home. The antler fronds have grown significantly in three months and the shield fronds are spreading to fill the board. I love the soaking ritual — it feels like proper plant keeping.',
    createdAt: '2025-08-14',
    verified: true,
  },
  {
    id: 'rev-015-2',
    productId: 'prod-015',
    author: 'Rosalind M.',
    rating: 4,
    title: 'Different kind of plant — takes adjustment to care for',
    comment:
      'The soaking method felt odd to me at first but now it is part of my weekly routine. The plant is thriving on the cedar board. One thing I was not prepared for is how quickly the shield fronds spread — I will need a bigger board within the year. That is a good problem to have.',
    createdAt: '2025-10-28',
    verified: true,
  },
  {
    id: 'rev-015-3',
    productId: 'prod-015',
    author: 'Jonah B.',
    rating: 5,
    title: 'Made a gallery wall of three — spectacular',
    comment:
      'I ordered three of these at different sizes and arranged them in a cluster on our stairwell wall. The effect is just incredible — they look prehistoric and alive at the same time. All three are doing well and the antler fronds are growing at different speeds which adds to the organic feel of the arrangement.',
    createdAt: '2025-12-04',
    verified: true,
  },

  // ── prod-016 — Sweet Basil ─────────────────────────────────────────────
  {
    id: 'rev-016-1',
    productId: 'prod-016',
    author: 'Giulia T.',
    rating: 5,
    title: 'Made my own pesto the same week it arrived',
    comment:
      'I ordered this specifically to make pesto and the amount of leaves available within a week of it arriving on my kitchen windowsill was genuinely surprising. I pinched back the flower buds and now have a bushy, productive plant that I harvest from two or three times a week. The fragrance in the kitchen is wonderful.',
    createdAt: '2025-07-02',
    verified: true,
  },
  {
    id: 'rev-016-2',
    productId: 'prod-016',
    author: 'Yusuf A.',
    rating: 4,
    title: 'Grows fast, harvest often',
    comment:
      'Very healthy plant that has gone from small to enormous in about six weeks. I keep it on my south-facing sill and water it daily. The main thing I learned is to harvest aggressively — it encourages branching and more production. When I started doing that the plant doubled in bushiness within two weeks.',
    createdAt: '2025-09-19',
    verified: true,
  },
  {
    id: 'rev-016-3',
    productId: 'prod-016',
    author: 'Chloe P.',
    rating: 5,
    title: 'My summer cocktail herb of choice',
    comment:
      'I grow this every summer for basil lemonade, strawberry-basil mocktails, and Caprese salads. This plant came in far better shape than ones I have bought from grocery stores — it has a strong central stem and is not root-bound. It will last the whole season if I keep pinching the flowers.',
    createdAt: '2025-06-25',
    verified: true,
  },

  // ── prod-018 — Rosemary ────────────────────────────────────────────────
  {
    id: 'rev-018-1',
    productId: 'prod-018',
    author: 'Helena R.',
    rating: 5,
    title: 'Roasting season has never been better',
    comment:
      'I have been growing rosemary for years and this is one of the most fragrant specimens I have had. The piney, resinous scent fills the kitchen every time I brush past it. I used sprigs for roast chicken, focaccia, and infused butter in the first month alone. Very healthy root system on arrival.',
    createdAt: '2025-10-09',
    verified: true,
  },
  {
    id: 'rev-018-2',
    productId: 'prod-018',
    author: 'Callum D.',
    rating: 4,
    title: 'Thrives outside in summer, bring it in for winter',
    comment:
      'I keep mine outside on the balcony from spring through autumn where it grows vigorously and flowers blue. Brings it inside to the sunniest window when it gets cold and it slows down but stays alive and fragrant. One tip — do not overwater in winter or it sulks. Great value overall.',
    createdAt: '2025-09-07',
    verified: true,
  },
  {
    id: 'rev-018-3',
    productId: 'prod-018',
    author: 'Nadia B.',
    rating: 5,
    title: 'Training mine into a topiary shape',
    comment:
      'I have wanted a rosemary topiary for years and have been slowly training this one into a ball shape over the past five months. It takes patience but the plant responds really well to regular trimming. The harvested trimmings go straight into cooking. A dual-purpose plant and a long-term project.',
    createdAt: '2025-08-21',
    verified: true,
  },

  // ── prod-020 — Moth Orchid ─────────────────────────────────────────────
  {
    id: 'rev-020-1',
    productId: 'prod-020',
    author: 'Isabelle C.',
    rating: 5,
    title: 'Still blooming after three months',
    comment:
      'My orchid arrived with eight open blooms and has not stopped since. I have been following the "water weakly, weekly" advice and it is clearly working. The spike has now branched and produced another four buds. For something that looks this refined, it asks remarkably little of you.',
    createdAt: '2025-11-12',
    verified: true,
  },
  {
    id: 'rev-020-2',
    productId: 'prod-020',
    author: 'Simon T.',
    rating: 4,
    title: 'Rebloomed it after a cool autumn — worth the effort',
    comment:
      "Dropped my previous orchid's temperature by ten degrees in September and kept the nights cool for six weeks. It threw a new spike by November. Getting a Phalaenopsis to rebloom requires that specific intervention but it works. This plant is healthy enough that it had plenty of energy for the attempt.",
    createdAt: '2025-12-08',
    verified: true,
  },
  {
    id: 'rev-020-3',
    productId: 'prod-020',
    author: 'Mei L.',
    rating: 5,
    title: 'Gifted three of these and they were all hits',
    comment:
      'I ordered three for different friends as housewarming gifts and all three arrived flawlessly packaged with multiple open blooms. Two of the recipients have since messaged me asking how to rebloom theirs. Packaging is exceptional — not one bloom was damaged in transit. Will be ordering again for the next round of gifts.',
    createdAt: '2025-10-01',
    verified: true,
  },

  // ── prod-021 — African Violet ──────────────────────────────────────────
  {
    id: 'rev-021-1',
    productId: 'prod-021',
    author: 'Patricia H.',
    rating: 5,
    title: 'Bloomed non-stop for four months straight',
    comment:
      'I have grown African Violets before but never had one that performed like this. It has been in almost continuous bloom for four months on my north-facing kitchen windowsill. I bottom-water it every five days and feed it with the violet-specific fertilizer and it just keeps producing clusters of those gorgeous purple flowers.',
    createdAt: '2025-07-31',
    verified: true,
  },
  {
    id: 'rev-021-2',
    productId: 'prod-021',
    author: 'Tom F.',
    rating: 4,
    title: 'Propagated a leaf cutting — it worked',
    comment:
      'I had always heard leaf propagation on African Violets was easy and finally tried it. Snipped a healthy leaf with an inch of stem, pushed it into moist vermiculite, and within six weeks I had tiny plantlets growing at the base. This plant is essentially a self-replenishing colony at this point.',
    createdAt: '2025-09-14',
    verified: false,
  },
  {
    id: 'rev-021-3',
    productId: 'prod-021',
    author: 'Elke S.',
    rating: 5,
    title: 'Perfect for my north-facing apartment',
    comment:
      'I live in an apartment with mostly north-facing windows and finding flowering plants that actually bloom here is a constant struggle. This African Violet solved that problem completely. Six weeks in and it is covered in blooms. The fuzzy leaves look amazing against the windowsill.',
    createdAt: '2025-11-22',
    verified: true,
  },

  // ── prod-025 — Blushing Air Plant ─────────────────────────────────────
  {
    id: 'rev-025-1',
    productId: 'prod-025',
    author: 'Willow J.',
    rating: 5,
    title: 'The blushing phenomenon is genuinely magical',
    comment:
      'I have had this for about four months and last week it started turning the most vivid crimson in the centre. I looked it up and realized it is about to flower — sure enough, a purple flower spike appeared three days later. Nothing else in my plant collection has ever done anything like this. I am totally hooked on air plants now.',
    createdAt: '2025-10-17',
    verified: true,
  },
  {
    id: 'rev-025-2',
    productId: 'prod-025',
    author: 'Ren H.',
    rating: 5,
    title: 'Glued it to a piece of driftwood — looks incredible',
    comment:
      'I arranged three of these on a piece of bleached driftwood I found on a beach trip, using non-toxic glue on the shield base. The display has become the focal point of my mantelpiece. I mist the driftwood arrangement every few days and do a monthly soak and they are all thriving.',
    createdAt: '2025-12-13',
    verified: true,
  },
  {
    id: 'rev-025-3',
    productId: 'prod-025',
    author: 'Lars E.',
    rating: 4,
    title: 'My first air plant — great introduction to the hobby',
    comment:
      'Ordered this as my very first air plant and it has been a great introduction. The soaking routine is simple and weirdly satisfying. It has produced three offsets in four months that I am now growing on separately. My only wish is it came with a small guide to display ideas.',
    createdAt: '2025-09-03',
    verified: true,
  },

  // ── prod-026 — King of Air Plants ─────────────────────────────────────
  {
    id: 'rev-026-1',
    productId: 'prod-026',
    author: 'Carmen V.',
    rating: 5,
    title: 'Worth every penny — this is art',
    comment:
      'I have been collecting Tillandsia for three years and finally added a xerographica. The curling silver leaves are unlike anything else in the plant world. Mine is displayed in a wide shallow ceramic bowl on my dining table and it draws the eye from across the room. I water it minimally and it rewards me with slow, steady growth.',
    createdAt: '2025-08-02',
    verified: true,
  },
  {
    id: 'rev-026-2',
    productId: 'prod-026',
    author: 'Sam O.',
    rating: 5,
    title: 'Nearly impossible to kill — incredible plant',
    comment:
      'I travel internationally several times a year and needed something that could go weeks without attention. This plant went six weeks completely unattended once and showed no sign of stress when I got back. The silvery trichomes on the leaves absorb moisture from the air and it just looks after itself. A genuine marvel.',
    createdAt: '2025-11-05',
    verified: true,
  },
  {
    id: 'rev-026-3',
    productId: 'prod-026',
    author: 'Denise R.',
    rating: 4,
    title: 'Spectacular specimen, grows slowly — that is the point',
    comment:
      'You need to be patient with this plant and comfortable with very slow growth, but the payoff over years is a massive, sculptural specimen that just gets more beautiful with time. Mine has grown noticeably in six months. The curling leaves have elongated and the outer ones now touch the table around the bowl. Simply stunning.',
    createdAt: '2025-09-28',
    verified: true,
  },
];
