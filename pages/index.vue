<template>
  <div class="carousel-page">
    <header class="site-header">
      <div class="header-content">
        <div class="header-decoration">
        
        </div>
      </div>
    </header>

    <div class="carousel-container">
      <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="`Screenshot ${index + 1}`" class="carousel-image">
        </div>
      </div>
      
      <div class="carousel-controls">
        <button class="control-btn prev" @click="prevSlide" :disabled="currentIndex === 0">
          <span class="control-icon">❮</span>
        </button>
        <div class="carousel-dots">
          <span 
            v-for="(_, index) in images" 
            :key="index"
            :class="['dot', { active: currentIndex === index }]"
            @click="currentIndex = index"
          ></span>
        </div>
        <button class="control-btn next" @click="nextSlide" :disabled="currentIndex === images.length - 1">
          <span class="control-icon">❯</span>
        </button>
      </div>
    </div>

    <div class="character-section">
      <div class="character-card" v-for="character in characters" :key="character.name">
        <NuxtLink :to="character.name === 'MOKOKO' ? '/mokoko' : character.name === 'ZIMOMO' ? '/zimomo' : character.name === 'LABUBU' ? '/labubu' : `/home-labubu#${character.name.toLowerCase()}`" class="character-link">
          <h2 class="character-name">{{ character.name }}</h2>
          <div class="character-image-container">
            <img :src="character.image" :alt="character.name" class="character-image">
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  '/images/screenshot1.jpg',
  '/images/screenshot2.jpg',
  '/images/screenshot3.jpg'
]

const characters = [
  {
    name: 'ZIMOMO',
    image: '/images/ZIMOMO-FIRST.jpg'
  },
  {
    name: 'LABUBU',
    image: '/images/LABUBU.jpg'
  },
  {
    name: 'MOKOKO',
    image: '/images/MOKOKO-FIRST.jpg'
  }
]

const currentIndex = ref(0)

const nextSlide = () => {
  if (currentIndex.value < images.length - 1) {
    currentIndex.value++
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style scoped>
.carousel-page {
  max-width: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #fff5f5 0%, #fff0f6 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-header {
  background: linear-gradient(135deg, #fff0f5 0%, #ffe4e1 100%);
  padding: 3rem 1rem;
  margin-bottom: 3rem;
  border-radius: 0 0 50px 50px;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.15);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.header-content {
  position: relative;
  z-index: 1;
}

h1 {
  color: #FF69B4;
  font-size: 3rem;
  margin: 0;
  font-family: 'Arial Rounded MT Bold', 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.2);
  position: relative;
  padding-bottom: 1rem;
  background: linear-gradient(45deg, #FF69B4, #FFB6C1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGlow 2s ease-in-out infinite;
}

.header-decoration {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.decoration-item {
  color: #FF69B4;
  font-size: 2rem;
  animation: float 2s ease-in-out infinite;
  text-shadow: 0 2px 4px rgba(255, 105, 180, 0.3);
}

.decoration-item:nth-child(2) {
  animation-delay: 0.3s;
  transform: scale(0.9);
}

.decoration-item:nth-child(3) {
  animation-delay: 0.6s;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 70vh;
  margin: 0;
  overflow: hidden;
  border-radius: 0;
  box-shadow: none;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.carousel-controls {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  z-index: 10;
}

.control-btn {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.control-btn:hover:not(:disabled) {
  background: white;
  transform: scale(1.1);
}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.control-icon {
  color: #FF69B4;
  font-size: 2rem;
}

.carousel-dots {
  display: flex;
  gap: 1rem;
}

.dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #FF69B4;
  transform: scale(1.2);
}

.character-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  margin-top: 2rem;
}

.character-card {
  text-align: center;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.character-card:hover {
  transform: translateY(-10px);
}

.character-name {
  color: #FF69B4;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Arial Rounded MT Bold', 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.2);
  transition: all 0.3s ease;
}

.character-image-container {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.2);
  border: 3px solid #FFB6C1;
}

.character-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.character-image:hover {
  transform: scale(1.1);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

@keyframes titleGlow {
  0%, 100% { text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.2); }
  50% { text-shadow: 2px 2px 8px rgba(255, 105, 180, 0.4); }
}

@media (max-width: 768px) {
  .site-header {
    padding: 2rem 1rem;
    border-radius: 0 0 30px 30px;
  }

  h1 {
    font-size: 2.2rem;
  }

  .decoration-item {
    font-size: 1.5rem;
  }

  .carousel-container {
    height: 50vh;
  }

  .character-section {
    flex-direction: column;
    gap: 2rem;
  }

  .character-card {
    width: 100%;
  }

  .character-image-container {
    width: 150px;
    height: 150px;
  }

  .character-name {
    font-size: 1.5rem;
  }

  .carousel-controls {
    bottom: 20px;
  }

  .control-btn {
    width: 50px;
    height: 50px;
  }

  .control-icon {
    font-size: 1.5rem;
  }

  .dot {
    width: 12px;
    height: 12px;
  }
}

.character-link {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;
}

.character-link:hover .character-name {
  color: #FF1493;
  transform: scale(1.05);
}

.character-link:hover .character-image {
  transform: scale(1.1);
}
</style>

