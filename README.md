# AL HADI TEXTILE MILLS — Official Digital Platform & Export Showroom

An export-grade digital showroom and wholesale portal engineered for **AL HADI TEXTILE MILLS** (Est. 1994, Faisalabad, Pakistan).

Designed for international hospitality procurement managers, department store buyers, and institutional importers across North America, Europe, and the Middle East.

---

## 🌟 Key Features

1. **Expansive Ultra-Wide Layout (`max-w-[1720px]`)**:
   - Modern, edge-balanced view supporting up to 5-column responsive grids on wide monitors.
   - Branded in official mill tones: Vibrant Textile Orange (`#FD7803`) and Slate Charcoal (`#23282E`).

2. **Complete 21-Product Export Catalog**:
   - High-resolution authentic mill photography across 5 major categories:
     - Kitchen & Dining Linens (Waffle cloths, bistro tea towels, coordinated ensembles)
     - Bedding & Comforter Suites (400TC Egyptian percale, sherpa bouclé fleece, pintuck comforters)
     - Luxury Bath & Towels (Zero-twist 550 GSM bales, Aegean kilim spa towels)
     - Curtains & Window Drapes (Triple-weave thermal blackouts, linen botanical drapes)
     - Living & Slipcovers (Ultrasonic quilted furniture protectors)
   - Real textile technical specifications: GSM, yarn count, weave structure, shrinkage tolerances, and colorfastness ratings.

3. **Instant WhatsApp Direct Order & Lead Engine**:
   - Direct pre-filled WhatsApp inquiry generation (`https://wa.me/...`) with exact product specifications, required quantity, and live catalog URL.
   - Built-in asynchronous lead logging.

4. **Multi-Step RFQ (Request for Quotation) Modal**:
   - Multi-step modal for container-load shipping, customized GSM, private labelling, and port of delivery (FOB Karachi, CIF).

5. **Self-Contained Serverless Architecture**:
   - Built with Next.js 14 App Router, Tailwind CSS, Lucide icons, and Next.js Serverless API routes (`/api/products`, `/api/inquiries`, `/api/inquiries/rfq`).
   - 100% cloud-ready for instant Vercel deployment without requiring separate server maintenance.

---

## 🚀 How to Deploy on Vercel

Deploying this project to Vercel takes less than 2 minutes:

### Method 1: Via Vercel Web Dashboard (Recommended)

1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Import your GitHub repository: `erhatechnologiesai/Al_Hadi_Textile`.
4. In the **"Configure Project"** screen:
   - **Framework Preset**: Ensure `Next.js` is selected.
   - **Root Directory**: Click **Edit** and set it to:
     ```text
     al-hadi-textile/frontend
     ```
   - (Optional) **Environment Variables**: None required! The app has built-in serverless handlers and static fallback data. If you have an external API, you can add `NEXT_PUBLIC_API_URL`.
5. Click **"Deploy"**.
6. Vercel will install dependencies, build the Next.js production bundle, and provide a live production URL (e.g., `https://al-hadi-textile.vercel.app`).

### Method 2: Via Vercel CLI

```bash
# Navigate to frontend
cd al-hadi-textile/frontend

# Deploy directly
npx vercel
```

---

## 💻 Local Development

### Prerequisites
- Node.js 18.x or 20.x
- npm or yarn

### Running Locally

```bash
# Clone the repository
git clone https://github.com/erhatechnologiesai/Al_Hadi_Textile.git
cd Al_Hadi_Textile

# Install frontend dependencies
cd al-hadi-textile/frontend
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Repository Structure

```text
├── al-hadi-textile/
│   ├── frontend/                  # Next.js 14 Web Application
│   │   ├── public/                # Static assets, official favicons, images
│   │   │   ├── images/products/   # 21 categorized product photographs
│   │   │   ├── favicon.ico        # Official Al Hadi Mill tab icon
│   │   │   └── icon.png           # 32x32 / 192x192 app icons
│   │   └── src/
│   │       ├── app/               # Next.js App Router & Serverless API routes
│   │       ├── components/        # UI components (Navbar, ProductCard, Modals, etc.)
│   │       ├── data/              # Master product catalog data
│   │       └── lib/               # Utility functions and API helpers
│   └── backend/                   # Optional standalone Express API server
├── WhatsApp Unknown.../           # Original high-res factory photographs
├── details.txt                    # Mill execution & technical specs
└── README.md
```

---

## 📜 License & Mill Rights
© 1994–2026 **AL HADI TEXTILE MILLS**. All rights reserved.
