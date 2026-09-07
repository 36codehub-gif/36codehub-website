/* Glassmorphism & Cyberpunk Neon Tech Theme */
:root {
    --bg-dark: #070913;
    --bg-card: rgba(18, 24, 43, 0.7);
    --border-card: rgba(255, 255, 255, 0.08);
    --primary-cyan: #00F0FF;
    --primary-purple: #7000FF;
    --text-white: #FFFFFF;
    --text-gray: #A0AEC0;
    --neon-glow: linear-gradient(135deg, #00F0FF 0%, #7000FF 100%);
    --box-shadow-glow: 0 0 25px rgba(0, 240, 255, 0.25);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-white);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
}

.bg-grid-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: -1;
    pointer-events: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Glassmorphism Card Style */
.glass-card {
    background: var(--bg-card);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-card);
    border-radius: 16px;
    padding: 30px;
    transition: var(--transition);
}

.glass-card:hover {
    border-color: rgba(0, 240, 255, 0.4);
    box-shadow: var(--box-shadow-glow);
}

/* Top Bar */
.top-bar {
    background: rgba(4, 6, 14, 0.9);
    font-size: 13px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: var(--text-gray);
}

.top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.glow-icon { color: var(--primary-cyan); margin-right: 6px; }
.top-info span { margin-right: 20px; }
.top-actions a { color: var(--text-white); text-decoration: none; font-weight: 600; }

/* Navbar */
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(7, 9, 19, 0.85);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
}

.brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
}

.logo-icon {
    width: 40px;
    height: 40px;
    background: var(--neon-glow);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    box-shadow: var(--box-shadow-glow);
}

.logo-text {
    font-size: 24px;
    font-weight: 800;
    color: var(--text-white);
}

.logo-text span { color: var(--primary-cyan); }

.nav-menu ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 30px;
}

.nav-link {
    text-decoration: none;
    color: var(--text-gray);
    font-weight: 500;
    transition: var(--transition);
}

.nav-link:hover, .nav-link.active { color: var(--primary-cyan); }

.btn-nav-gradient {
    background: var(--neon-glow);
    color: var(--text-white);
    padding: 10px 22px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    box-shadow: var(--box-shadow-glow);
}

.hamburger { display: none; font-size: 22px; cursor: pointer; }

/* Hero Section */
.hero {
    position: relative;
    padding: 130px 0 80px;
    text-align: center;
}

.hero-glow-1 {
    position: absolute;
    top: 10%;
    left: 20%;
    width: 300px;
    height: 300px;
    background: var(--primary-cyan);
    filter: blur(150px);
    opacity: 0.2;
    z-index: -1;
}

.hero-glow-2 {
    position: absolute;
    bottom: 10%;
    right: 20%;
    width: 300px;
    height: 300px;
    background: var(--primary-purple);
    filter: blur(150px);
    opacity: 0.25;
    z-index: -1;
}

.hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(0, 240, 255, 0.08);
    border: 1px solid var(--primary-cyan);
    color: var(--primary-cyan);
    padding: 6px 18px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 25px;
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background: var(--primary-cyan);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--primary-cyan);
}

.hero h1 {
    font-size: 58px;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 20px;
}

.text-gradient {
    background: var(--neon-glow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    font-size: 18px;
    color: var(--text-gray);
    max-width: 700px;
    margin: 0 auto 35px;
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 50px;
}

.btn-glow, .btn-outline {
    padding: 14px 28px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border: none;
    transition: var(--transition);
}

.btn-glow {
    background: var(--neon-glow);
    color: var(--text-white);
    box-shadow: var(--box-shadow-glow);
}

.btn-glow:hover { transform: translateY(-3px); }

.btn-outline {
    background: transparent;
    border: 1px solid var(--border-card);
    color: var(--text-white);
}

.btn-outline:hover {
    border-color: var(--primary-cyan);
    background: rgba(0, 240, 255, 0.05);
}

/* Trust Bar */
.hero-trust-bar {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 12px;
    letter-spacing: 1px;
    color: var(--text-gray);
}

.trust-icons {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 28px;
    color: var(--text-white);
}

.trust-icons i { transition: var(--transition); }
.trust-icons i:hover { color: var(--primary-cyan); transform: scale(1.2); }

/* Stats Section */
.stats-section {
    background: rgba(12, 16, 30, 0.8);
    padding: 40px 0;
    border-y: 1px solid var(--border-card);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    text-align: center;
}

.stat-number {
    font-size: 42px;
    font-weight: 800;
    color: var(--primary-cyan);
}

.stat-card p {
    color: var(--text-gray);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Section Header Base */
.section { padding: 100px 0; }
.dark-alt-bg { background-color: #04060E; }

.section-header { text-align: center; margin-bottom: 60px; }
.sub-title {
    color: var(--primary-cyan);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
}

.section-header h2 { font-size: 38px; font-weight: 800; margin-top: 5px; }
.section-header h2 span { color: var(--primary-cyan); }
.glow-line {
    width: 60px;
    height: 4px;
    background: var(--neon-glow);
    margin: 12px auto;
    border-radius: 2px;
}

/* Services Grid */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}

.icon-glow {
    font-size: 32px;
    color: var(--primary-cyan);
    margin-bottom: 20px;
}

.service-card h3 { font-size: 20px; margin-bottom: 12px; }
.service-card p { color: var(--text-gray); font-size: 14px; margin-bottom: 20px; }
.service-link {
    color: var(--primary-cyan);
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

/* Calculator Box */
.calculator-box {
    max-width: 800px;
    margin: 0 auto;
}

.calc-step { margin-bottom: 25px; }
.calc-step label { display: block; font-weight: 700; margin-bottom: 12px; }

.calc-options { display: flex; gap: 10px; flex-wrap: wrap; }
.calc-btn {
    padding: 10px 20px;
    border: 1px solid var(--border-card);
    background: rgba(255,255,255,0.02);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
}

.calc-btn.active, .calc-btn:hover {
    border-color: var(--primary-cyan);
    background: rgba(0, 240, 255, 0.1);
    color: var(--primary-cyan);
}

.calc-checkboxes { display: flex; flex-direction: column; gap: 12px; }
.check-container {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: var(--text-gray);
    font-size: 15px;
}

.calc-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border-card);
    padding-top: 25px;
    margin-top: 25px;
}

.total-display span { font-size: 13px; color: var(--text-gray); }
.total-display h3 { font-size: 32px; color: var(--primary-cyan); }

/* Contact Section Grid */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.info-block { display: flex; gap: 15px; margin-bottom: 25px; }
.info-icon {
    width: 45px;
    height: 45px;
    background: rgba(0, 240, 255, 0.1);
    color: var(--primary-cyan);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}

.info-block h4 { font-size: 15px; }
.info-block p, .info-block a { color: var(--text-gray); text-decoration: none; font-size: 14px; }

.btn-wa-direct {
    display: block;
    text-align: center;
    background: #25D366;
    color: white;
    padding: 12px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    margin-top: 20px;
}

.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 13px; color: var(--text-gray); margin-bottom: 8px; }
.form-group input, .form-group select, .form-group textarea {
    width: 100%;
    padding: 12px;
    background: rgba(0,0,0,0.3);
    border: 1px solid var(--border-card);
    border-radius: 8px;
    color: white;
    outline: none;
}

.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
    border-color: var(--primary-cyan);
}

.full-width { width: 100%; justify-content: center; }

/* Footer */
.footer {
    background: #020308;
    padding: 60px 0 20px;
    border-top: 1px solid var(--border-card);
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
    padding-bottom: 40px;
}

.footer-col p { color: var(--text-gray); font-size: 14px; margin-top: 15px; }
.footer-col h4 { margin-bottom: 15px; color: var(--primary-cyan); }
.footer-col ul { list-style: none; }
.footer-col ul li { margin-bottom: 8px; }
.footer-col ul li a { color: var(--text-gray); text-decoration: none; font-size: 14px; }

.social-links { display: flex; gap: 12px; }
.social-links a {
    width: 40px;
    height: 40px;
    background: var(--bg-card);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    text-decoration: none;
}

.footer-bottom {
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.05);
    padding-top: 20px;
    font-size: 13px;
    color: var(--text-gray);
}

/* Floating Actions */
.floating-btn {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: white;
    text-decoration: none;
    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
    z-index: 1000;
}

.wa-float { background: #25D366; }

/* Mobile Responsiveness */
@media (max-width: 868px) {
    .hamburger { display: block; }
    .nav-menu {
        position: fixed;
        top: 75px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 75px);
        background: var(--bg-dark);
        flex-direction: column;
        padding: 40px 0;
        transition: var(--transition);
    }
    .nav-menu.active { left: 0; }
    .nav-menu ul { flex-direction: column; }
    .hero h1 { font-size: 36px; }
    .contact-grid { grid-template-columns: 1fr; }
    .footer-content { grid-template-columns: 1fr; }
    .calc-summary { flex-direction: column; gap: 20px; text-align: center; }
}
// Check karein ki user logged in hai ya nahi
async function checkUser() {
  const { data: { user } } = await _supabase.auth.getUser();
  if (user) {
    console.log("Logged in user:", user.email);
  } else {
    // Agar logged in nahi hai toh login page par bhejein
    // window.location.href = "login.html";
  }
}

// Logout karne ke liye
async function logout() {
  await _supabase.auth.signOut();
  window.location.href = "login.html";
}
