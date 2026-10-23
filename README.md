# Ramesh Hampiholi — Developer Portfolio

[![Deploy Portfolio to GitHub Pages](https://github.com/ramesh-hampiholi-1819/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/ramesh-hampiholi-1819/portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Portfolio-GitHub_Pages-22d3ee?style=flat&logo=github)](https://ramesh-hampiholi-1819.github.io/portfolio/)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)](https://python.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

> Production-ready, dark futuristic personal developer portfolio for **Ramesh Hampiholi**, a BCA student at Karnatak University Dharwad passionate about Python, Artificial Intelligence, Data Science, and Modern Web Engineering.

---

## 🌟 Key Highlights & Features

- **Futuristic Dark-Themed Aesthetic**: Curated color palette featuring deep midnight navy (`#080B16`), electric cyan (`#22D3EE`), and vivid violet (`#8B5CF6`) with glassmorphism panels and ambient particle effects.
- **Factually Verified Information**: Accurately reflects real educational milestones (BCA @ Karnatak University Dharwad, PUC @ F.B. Pujar College, AISSE @ Jawahar Navodaya Vidyalaya Gadag) and authentic GitHub repositories without fabricated jobs, awards, or fake skill percentages.
- **Interactive Developer Terminal**: Hero section features an interactive terminal emulator with tabs for `ramesh.py`, `data_pipeline.py`, and `tech_stack.sh` with live simulation.
- **Featured Project Showcase**: Highlights the **Student Data Analysis System** with its live Streamlit deployment at [student-data-analysis-v2.streamlit.app](https://student-data-analysis-v2.streamlit.app/).
- **Project Deep-Dive Modals**: Accessible architectural breakdown modal for every verified repository with problem solved, tech stack, and GitHub links.
- **Resume Integration**: Embedded CV preview modal and instant PDF download linking directly to `public/resume.pdf`.
- **Zero-Backend Functional Contact**: Transparent message drafter creating direct `mailto:` links with one-click draft and email copying (with clipboard toast).
- **GitHub Pages Ready**: Configured with Vite `base: '/portfolio/'`, SPA redirect script (`404.html`), sitemap, robots.txt, and automated GitHub Actions workflow (`deploy.yml`).

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, TypeScript
- **Build Tool**: Vite 8 (with `@tailwindcss/vite`)
- **Styling**: Tailwind CSS v4, Custom CSS tokens, Glassmorphism
- **Icons**: Lucide React & Custom Crisp SVG Brand Vectors
- **Motion**: Framer Motion & CSS keyframe animations (with `prefers-reduced-motion` compliance)
- **Deployment**: GitHub Pages via GitHub Actions

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/portfolio/`.

### 3. Build Production Bundle
```bash
npm run build
```
Generates optimized static output in `./dist`.

### 4. Preview Production Build Locally
```bash
npm run preview
```
Serves the built bundle at `http://localhost:4173/portfolio/`.

---

## 📄 Updating Your Resume PDF

1. Export your latest CV as a PDF file named `resume.pdf`.
2. Place it in the `public/` directory:
   ```
   public/resume.pdf
   ```
3. Commit and push your changes to GitHub. The workflow will automatically publish the new resume.

---

## 🌐 Deploying to GitHub Pages

### 1. Repository Settings in GitHub
1. Navigate to your repository on GitHub: `https://github.com/ramesh-hampiholi-1819/portfolio`
2. Go to **Settings** → **Pages** (under the "Code and automation" sidebar).
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (NOT "Deploy from a branch").

### 2. Push Code to Main Branch
Run the following commands in your local project root:
```bash
git init
git add .
git commit -m "feat: complete production portfolio for Ramesh Hampiholi"
git branch -M main
git remote add origin https://github.com/ramesh-hampiholi-1819/portfolio.git
git push -u origin main --force
```

### 3. Verify Deployment
1. Go to the **Actions** tab on your GitHub repository.
2. Watch the **Deploy Portfolio to GitHub Pages** workflow run.
3. Once completed (green checkmark), your website will be live at:
   **`https://ramesh-hampiholi-1819.github.io/portfolio/`**

---

## 👤 Author

**Ramesh Hampiholi**  
- **Email**: [rameshhampiholi10@gmail.com](mailto:rameshhampiholi10@gmail.com)  
- **GitHub**: [@ramesh-hampiholi-1819](https://github.com/ramesh-hampiholi-1819)  
- **LinkedIn**: [ramesh-hampiholi](https://www.linkedin.com/in/ramesh-hampiholi-289519381/)  
- **Live Portfolio**: [ramesh-hampiholi-1819.github.io/portfolio/](https://ramesh-hampiholi-1819.github.io/portfolio/)
