<template>
  <header class="header">
    <div class="header-bg"></div>
    <div class="container">
      <div class="logo">
        <img src="/images/logo.jpg" alt="PAOPAO" class="logo-image">
        <div class="logo-decoration">
          <span class="star">⭐</span>
          <span class="star">⭐</span>
        </div>
      </div>
      
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">
              <span class="nav-icon">🏠</span>
              首页
            </NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle">
              <span class="link-icon">♥</span>
              LABUBU家族
              <span class="dropdown-arrow">▼</span>
            </div>
            <div class="dropdown-menu cute-dropdown">
              <NuxtLink to="/labubu" class="dropdown-item cute-item">
                <span class="cute-emoji">🦊</span>
                <span class="link-icon">♥</span>
                LABUBU
                <span class="cute-emoji">🌟</span>
              </NuxtLink>
              <div class="dropdown-divider"></div>
              <NuxtLink to="/zimomo" class="dropdown-item cute-item">
                <span class="cute-emoji">🐰</span>
                <span class="link-icon">♥</span>
                ZIMOMO
                <span class="cute-emoji">🍭</span>
              </NuxtLink>
              <div class="dropdown-divider"></div>
              <NuxtLink to="/mokoko" class="dropdown-item cute-item">
                <span class="cute-emoji">🐻</span>
                <span class="link-icon">♥</span>
                MOKOKO
                <span class="cute-emoji">🍬</span>
              </NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #ffd1dc 0%, #ffb6c1 100%);
  box-shadow: 0 4px 30px rgba(255, 182, 193, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  position: relative;
}

.logo-image {
  width: 160px;
  height: 80px;
  border-radius: 10px;
  border: 3px solid white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  object-fit: contain;
  object-position: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 5px;
}

.logo-image::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 30%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.1) 70%,
    transparent 100%
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

.logo-image:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15),
              0 0 20px rgba(255, 255, 255, 0.5);
}

.logo-decoration {
  position: absolute;
  top: -10px;
  right: -10px;
}

.star {
  display: inline-block;
  font-size: 1.2rem;
  animation: float 2s ease-in-out infinite;
}

.star:nth-child(2) {
  animation-delay: 0.5s;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  position: relative;
  z-index: 9999;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #ff4d6d;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
}

.nav-icon {
  font-size: 1.3rem;
  transition: transform 0.3s ease;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.1));
}

.nav-link:hover {
  transform: translateY(-3px);
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  color: #ff3366;
}

.nav-link:hover .nav-icon {
  transform: scale(1.2) rotate(5deg);
}

.nav-link.router-link-active {
  background: white;
  color: #ff3366;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-weight: 700;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 1rem;
    padding: 15px 20px;
  }
  
  .nav-list {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .logo-image {
    width: 120px;
    height: 60px;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: 8px 12px;
  }
  
  .nav-icon {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .nav-list {
    gap: 0.5rem;
  }
  
  .nav-link {
    font-size: 0.9rem;
    padding: 6px 10px;
  }
  
  .nav-icon {
    font-size: 1.1rem;
  }
  
  .logo-image {
    width: 100px;
    height: 50px;
  }
}

.site-header {
  position: relative;
  z-index: 9999;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #FF69B4;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.18rem !important;
  padding: 10px 18px;
  border-radius: 18px;
}

.dropdown-toggle:hover {
  color: #FF1493;
}

.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  width: calc(100% + 70px);
  min-width: 220px;
  max-width: 300px;
  left: 0;
  right: unset;
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  margin-top: 5px;
  background: white;
  border-radius: 15px;
  padding: 0.8rem 0;
  box-shadow: 0 8px 32px rgba(255, 105, 180, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 9999;
  border: 2px solid #FF69B4;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: #FF69B4;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;
}

.dropdown-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: #fff5f5;
  transition: width 0.3s ease;
  z-index: -1;
}

.dropdown-item:hover {
  color: #FF1493;
  transform: translateX(5px);
}

.dropdown-item:hover::before {
  width: 100%;
}

.dropdown-item .link-icon {
  margin-right: 0.8rem;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.dropdown-item:hover .link-icon {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .dropdown-menu {
    position: static;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    transform: none;
    display: none;
    border: none;
    padding: 0.5rem 0;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .dropdown-item {
    padding: 0.8rem 1rem;
  }

  .dropdown-arrow {
    display: none;
  }
}

.cute-dropdown {
  background: linear-gradient(135deg, #fff0f6 0%, #ffe0e0 100%);
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(255, 105, 180, 0.13), 0 1px 4px rgba(255, 182, 193, 0.10);
  animation: floatCute 3s ease-in-out infinite;
  border: 2px solid #ffb6c1;
  padding: 0.5rem 0;
  min-width: 150px;
  max-width: 220px;
}

@keyframes floatCute {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-6px);}
}

.cute-item {
  font-size: 0.98rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  margin: 0 0.5rem;
  border-radius: 10px;
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive;
  color: #ff4d6d;
  background: transparent;
  transition: background 0.3s, color 0.3s, transform 0.2s;
  position: relative;
  box-shadow: none;
}

.cute-item:hover {
  background: linear-gradient(90deg, #ffe0e0 0%, #fff0f6 100%);
  color: #ff1493;
  transform: scale(1.05) translateX(8px);
  box-shadow: 0 2px 12px rgba(255, 182, 193, 0.18);
}

.cute-emoji {
  font-size: 1.05rem;
  margin: 0 0.3rem;
  filter: drop-shadow(0 1px 2px #fff0f6);
}

.dropdown-divider {
  margin: 0.15rem 0.7rem;
  height: 1px;
  background: linear-gradient(90deg, #ffd1dc 0%, #fff 100%);
  border-radius: 1px;
  opacity: 0.7;
}

.dropdown-arrow {
  margin-left: 0.5rem;
  font-size: 1.1rem;
  transition: transform 0.3s cubic-bezier(.68,-0.55,.27,1.55);
}

.dropdown:hover .dropdown-arrow {
  transform: rotate(180deg) scale(1.2);
  color: #ff1493;
}

.header,
.header * {
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive !important;
  color: #FF69B4;
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px #fff0f6, 0 2px 8px #ffe0e0;
  transition: color 0.3s;
}

.nav-link,
.dropdown-toggle,
.cute-item {
  color: #FF69B4 !important;
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 1.2px;
  text-shadow: 1px 1px 2px #fff0f6, 0 2px 8px #ffe0e0;
}

.nav-link:hover,
.dropdown-toggle:hover,
.cute-item:hover {
  color: #FF1493 !important;
  text-shadow: 2px 2px 6px #ffd1dc, 0 2px 8px #ffe0e0;
}

.title, .header-title {
  color: #FF69B4;
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 2px 2px 8px #ffd1dc, 0 2px 8px #ffe0e0;
  margin-bottom: 0.5rem;
}

.link-icon, .cute-emoji {
  color: #FF69B4 !important;
  text-shadow: 1px 1px 2px #fff0f6;
}
</style>