<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-decoration">
        <span class="decoration-item">✨</span>
        <span class="decoration-item">💖</span>
        <span class="decoration-item">✨</span>
      </div>
      <div class="footer-links">
        <NuxtLink to="/contact-us" class="footer-link">
          <span class="link-icon">📝</span>
          联系我们
        </NuxtLink>
      </div>
      <div class="footer-text">
        <p>© 2024 LABUBU Family. All rights reserved.</p>
        <p>Made with 💖 by LABUBU</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #fff0f5 0%, #ffe4e1 100%);
  padding: 2rem 1rem;
  margin-top: 3rem;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0 -4px 20px rgba(255, 105, 180, 0.15);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent 0%,
    #ff69b4 20%,
    #ffb6c1 50%,
    #ff69b4 80%,
    transparent 100%
  );
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-decoration {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.decoration-item {
  font-size: 1.5rem;
  animation: float 2s ease-in-out infinite;
}

.decoration-item:nth-child(2) {
  animation-delay: 0.3s;
  transform: scale(0.9);
}

.decoration-item:nth-child(3) {
  animation-delay: 0.6s;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer-link {
  color: #ff4d6d;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive;
  font-size: 1rem;
}

.footer-link:hover {
  transform: translateY(-3px);
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  color: #ff3366;
}

.link-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.footer-link:hover .link-icon {
  transform: scale(1.2) rotate(5deg);
}

.footer-text {
  color: #ff4d6d;
  font-size: 0.9rem;
  line-height: 1.6;
}

.footer-text p {
  margin: 0.5rem 0;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .footer-link {
    width: 200px;
    justify-content: center;
  }
  
  .decoration-item {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 1rem;
  }
  
  .footer-link {
    width: 180px;
    font-size: 0.9rem;
  }
  
  .link-icon {
    font-size: 1.1rem;
  }
  
  .footer-text {
    font-size: 0.8rem;
  }
}
</style>
