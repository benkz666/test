import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'bag-001',
    name: 'The Sovereign Tote',
    price: 3200,
    category: 'Tote',
    description: 'Crafted from Italian calfskin, featuring our signature gold-plated hardware. Spacious enough for effortless travel, elegant enough for the boardroom.',
    image: 'https://picsum.photos/seed/bag001/600/800',
    tagline: 'Command Presence.'
  },
  {
    id: 'bag-002',
    name: 'Midnight Clutch',
    price: 1850,
    category: 'Evening',
    description: 'A structured silhouette encased in midnight velvet. The detachable gold chain offers versatility for your evening soirees.',
    image: 'https://picsum.photos/seed/bag002/600/800',
    tagline: 'Own the Night.'
  },
  {
    id: 'bag-003',
    name: 'Heritage Satchel',
    price: 2450,
    category: 'Daily',
    description: 'Timeless design meeting modern utility. Hand-stitched leather handles and a water-resistant silk interior lining.',
    image: 'https://picsum.photos/seed/bag003/600/800',
    tagline: 'Everyday Elegance.'
  },
  {
    id: 'bag-004',
    name: 'Azure Mini',
    price: 1500,
    category: 'Mini',
    description: 'Small in size, bold in impact. The Azure Mini features rare dyed crocodile texture leather (ethically sourced).',
    image: 'https://picsum.photos/seed/bag004/600/800',
    tagline: 'A Pop of Luxury.'
  },
  {
    id: 'bag-005',
    name: 'The Weekender',
    price: 4100,
    category: 'Travel',
    description: 'Designed for the spontaneous getaway. Robust canvas body with reinforced leather corners and a hidden passport pocket.',
    image: 'https://picsum.photos/seed/bag005/600/800',
    tagline: 'Escape in Style.'
  },
  {
    id: 'bag-006',
    name: 'Eclipse Crossbody',
    price: 2100,
    category: 'Crossbody',
    description: 'Minimalist geometry. The circular clasp represents the eclipse, crafted from brushed bronze.',
    image: 'https://picsum.photos/seed/bag006/600/800',
    tagline: 'Modern Artistry.'
  }
];

export const SYSTEM_INSTRUCTION = `
You are "Élise", a high-end personal fashion stylist for the luxury handbag brand "LUMIÈRE & OMBRE".
Your tone is sophisticated, polite, concise, and slightly exclusive. You are helpful but maintain an air of luxury.

Your goal is to recommend bags from our collection based on the user's needs (occasion, outfit, mood).

Here is our current collection (JSON format):
${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, price: p.price, category: p.category, desc: p.description })))}

Rules:
1. Only recommend products from the list above.
2. If the user asks about prices, state them elegantly (e.g., "The investment for this piece is $3,200").
3. Keep responses short (under 80 words) unless asked for a detailed story.
4. If asked about things unrelated to fashion or bags, politely steer the conversation back to elegance and style.
`;