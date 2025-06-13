<template>
  <div class="labubu-page">
    <div class="content-wrapper">
      <div class="section-header">
       
        <div class="decoration">
        
        </div>
      </div>

      <div class="member-card">
        <div class="member-header">
          <div class="member-image-container">
            <img src="/images/LABUBU.jpg" alt="LABUBU" class="member-image">
          </div>
          <div class="member-info">
            <h2 class="member-name">LABUBU</h2>
            <div class="member-role">家族成员</div>
          </div>
        </div>

        <div class="info-section">
          <h3 class="section-title">基本信息</h3>
          <div class="info-content">
            <p>女生；是个傲娇的叛逆小精灵</p>
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
            <p>与家族其他成员一起居住在梦幻森林。</p>
          </div>
        </div>

        <div class="info-section">
          <h3 class="section-title">工作经历</h3>
          <div class="info-content">
            <p>2018年：任泡泡玛特"盲盒界表情组组长"，凭借"似笑非笑、似呆非呆"的表情走红</p>
            <p>2020-2022年：建立LABUBU天团，任IP主理人</p>
            <p>2023年-2024年：因"治愈效率过高"，导致人类产生"不买就难受"副作用，兼任"情绪管理集团顾问"</p>
            <p>2015年至今：任宇宙无敌全球"断货王"</p>
          </div>
        </div>

        <div class="info-section">
          <h3 class="section-title">荣誉</h3>
          <div class="info-content">
            <p>2020年 获"最容易被捏脸"大赛冠军</p>
            <p>2023年 获"上班族最想rua"投票断层第一</p>
            <p>2024年 带领THE MONSTERS系列创收飙升至30.4亿元</p>
            <p>2025年-至今 与众多奢侈品、影视IP联名，成为搜索量最高的潮玩IP</p>
          </div>
        </div>

        <div class="info-section">
          <h3 class="section-title">详细介绍</h3>
          <div class="info-content">
            <p></p>
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
.labubu-page {
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