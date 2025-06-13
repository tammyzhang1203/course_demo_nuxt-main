<template>
  <div class="mokoko-page">
    <div class="content-wrapper">
      <div class="section-header">
     
        <div class="decoration">
        
        </div>
      </div>

      <div class="member-card">
        <div class="member-header">
          <div class="member-image-container">
            <img src="/images/MOKOKO-FIRST.jpg" alt="MOKOKO" class="member-image">
          </div>
          <div class="member-info">
            <h2 class="member-name">MOKOKO</h2>
            <div class="member-role">家族成员</div>
          </div>
        </div>

        <div class="info-section">
          <h3 class="section-title">基本信息</h3>
          <div class="info-content">
            <p>天生拥有一身粉色的毛发、白色的肚皮、弯弯的睫毛，和一颗桃心形状的小鼻子，MOKOKO对自己粉色毛发十分得意，甚至还有一点小自恋。</p>
          </div>
        </div>

        <div class="info-section">
          <h3 class="section-title">教育背景</h3>
          <div class="info-content">
            <p>毕业于LABUBU家族学院，主修可爱学。</p>
          </div>
        </div>

        <div class="info-section">
          <h3 class="section-title">居住地</h3>
          <div class="info-content">
            <p>与LABUBU家族其他成员一起居住在梦幻森林。</p>
          </div>
        </div>

        <div class="info-section">
          <h3 class="section-title">工作经历</h3>
          <div class="info-content">
            <p>作为LABUBU家族的一员，参与各种家族活动和项目。</p>
          </div>
        </div>

        <div class="info-section">
          <h3 class="section-title">荣誉</h3>
          <div class="info-content">
            <p></p>
          </div>
        </div>

        <div class="info-section">
          <h3 class="section-title">详细介绍</h3>
          <div class="info-content">
            <p>MOKOKO以其独特的外表和可爱的性格，成为LABUBU家族中不可或缺的一员。她总是带着温暖的笑容，给周围的人带来欢乐。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.mokoko-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%);
  padding: 2rem;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(255, 105, 180, 0.1);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.title {
  font-size: 3rem;
  color: #FF69B4;
  margin-bottom: 1rem;
  font-family: 'Arial Rounded MT Bold', 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.2);
}

.decoration {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.decoration-item {
  color: #FF69B4;
  font-size: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

.decoration-item:nth-child(2) {
  animation-delay: 0.5s;
}

.decoration-item:nth-child(3) {
  animation-delay: 1s;
}

.member-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.1);
  margin-bottom: 2rem;
}

.member-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.member-image-container {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.2);
  border: 4px solid white;
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.member-image:hover {
  transform: scale(1.1);
}

.member-info {
  flex: 1;
}

.member-name {
  font-size: 2.5rem;
  color: #FF69B4;
  margin-bottom: 0.5rem;
  font-family: 'Arial Rounded MT Bold', 'Arial', sans-serif;
}

.member-role {
  font-size: 1.2rem;
  color: #FF69B4;
  opacity: 0.8;
}

.info-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff5f5;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.info-section:hover {
  transform: translateY(-5px);
}

.section-title {
  color: #FF69B4;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Arial Rounded MT Bold', 'Arial', sans-serif;
}

.info-content {
  color: #666;
  line-height: 1.6;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 1rem;
  }

  .member-header {
    flex-direction: column;
    text-align: center;
  }

  .member-image-container {
    width: 150px;
    height: 150px;
  }

  .title {
    font-size: 2rem;
  }

  .member-name {
    font-size: 2rem;
  }
}
</style> 