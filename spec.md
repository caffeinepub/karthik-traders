# Karthik Traders Website

## Current State
New project — no existing application files.

## Requested Changes (Diff)

### Add
- Full business website for Karthik Traders (fencing manufacturing, retail & wholesale)
- Sticky navbar with logo, nav links (Home, Products, About, Contact), and a WhatsApp CTA button
- Hero section with headline, subheadline, and two CTAs (Explore Products, Order on WhatsApp)
- Products section displaying all 8 products: Chain Link Mesh, Barbed Wire, GI Wire, Cement Poles, Fencing Stones, Iron Poles, GI Poles, Solar Wire — each as a card with name, short description, and WhatsApp order button
- About section briefly describing Karthik Traders — fencing manufacturer & seller in Kadapa
- Contact section with full address, phone number, email, and embedded Google Maps link for Kadapa
- Floating WhatsApp button fixed at bottom-right that opens a pre-filled WhatsApp message
- Footer with quick links, contact info, and copyright
- WhatsApp order links use phone number 8074055285 and pre-fill product/inquiry message

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: minimal Motoko actor (contact/inquiry storage optional, or static-only)
2. Frontend: React + Tailwind multi-section landing page
   - Navbar with logo text, nav links, green WhatsApp button
   - Hero: background fencing image (generated), dark overlay, centered bold headline + CTAs
   - Products grid: 8 cards with icon/image, title, description, WhatsApp order link per product
   - About section: company description, manufacturing focus, retail/wholesale
   - Contact section: address (74-145-1, Opp. Sri Vijayadurgamma Temple, Lohianagar, Kadapa 516001, AP), phone 8074055285, email sivasanke872@gmail.com
   - Floating WhatsApp button (bottom-right, fixed)
   - Footer
