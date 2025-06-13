<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>联系我们</h1>
      <div class="header-decoration">
        <span class="decoration-item">✨</span>
        <span class="decoration-item">💖</span>
        <span class="decoration-item">✨</span>
      </div>
    </div>

    <div class="contact-content">
      <div class="contact-section">
        <h2>泡泡玛特集团总部</h2>
        <div class="address-card">
          <div class="address-icon">🏢</div>
          <div class="address-info">
            <p class="company-name">北京泡泡玛特文化创意有限公司</p>
            <p class="address">地址：北京市朝阳区大望京科技商务园</p>
            <p class="postal-code">邮编：100102</p>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <h2>全国店铺分布</h2>
        <div class="store-locations">
          <div class="region-group" v-for="(stores, region) in storeLocations" :key="region">
            <h3>{{ region }}</h3>
            <ul class="store-list">
              <li v-for="(city, index) in stores" :key="index">
                <span class="city-name">{{ city }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const storeLocations = {
  '华北地区': [
    '北京市',
    '天津市',
    '河北省石家庄市',
    '山西省太原市',
    '内蒙古呼和浩特市'
  ],
  '华东地区': [
    '上海市',
    '江苏省南京市',
    '浙江省杭州市',
    '安徽省合肥市',
    '福建省福州市',
    '江西省南昌市',
    '山东省济南市'
  ],
  '华南地区': [
    '广东省广州市',
    '广西壮族自治区南宁市',
    '海南省海口市'
  ],
  '华中地区': [
    '河南省郑州市',
    '湖北省武汉市',
    '湖南省长沙市'
  ],
  '西南地区': [
    '重庆市',
    '四川省成都市',
    '贵州省贵阳市',
    '云南省昆明市',
    '西藏自治区拉萨市'
  ],
  '西北地区': [
    '陕西省西安市',
    '甘肃省兰州市',
    '青海省西宁市',
    '宁夏回族自治区银川市',
    '新疆维吾尔自治区乌鲁木齐市'
  ],
  '东北地区': [
    '辽宁省沈阳市',
    '吉林省长春市',
    '黑龙江省哈尔滨市'
  ]
}
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #fff5f5 0%, #fff0f6 100%);
  min-height: 100vh;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  color: #FF69B4;
  font-size: 2.5rem;
  margin: 0;
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive;
  text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.2);
  background: linear-gradient(45deg, #FF69B4, #FFB6C1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGlow 2s ease-in-out infinite;
}

.header-decoration {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.decoration-item {
  color: #FF69B4;
  font-size: 1.5rem;
  animation: float 2s ease-in-out infinite;
}

.decoration-item:nth-child(2) {
  animation-delay: 0.3s;
}

.decoration-item:nth-child(3) {
  animation-delay: 0.6s;
}

.contact-content {
  display: grid;
  gap: 3rem;
}

.contact-section {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.1);
}

.contact-section h2 {
  color: #FF69B4;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive;
}

.address-card {
  display: flex;
  align-items: center;
  gap: 2rem;
  background: #FFF0F5;
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid #FFB6C1;
}

.address-icon {
  font-size: 3rem;
  animation: bounce 2s ease-in-out infinite;
}

.address-info {
  flex: 1;
}

.company-name {
  font-size: 1.4rem;
  color: #FF69B4;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.address, .postal-code {
  color: #666;
  font-size: 1.1rem;
  margin: 0.3rem 0;
}

.store-locations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.region-group h3 {
  color: #FF69B4;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive;
}

.store-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.store-list li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #666;
  font-size: 1.1rem;
}

.store-list li::before {
  content: "♥";
  color: #FF69B4;
  position: absolute;
  left: 0;
}

.city-name {
  display: inline-block;
  transition: transform 0.3s ease;
}

.city-name:hover {
  transform: translateX(5px);
  color: #FF69B4;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes titleGlow {
  0%, 100% { text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.2); }
  50% { text-shadow: 2px 2px 8px rgba(255, 105, 180, 0.4); }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 1rem;
  }

  .contact-header h1 {
    font-size: 2rem;
  }

  .address-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .store-locations {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .contact-header h1 {
    font-size: 1.8rem;
  }

  .contact-section {
    padding: 1.5rem;
  }

  .company-name {
    font-size: 1.2rem;
  }

  .address, .postal-code {
    font-size: 1rem;
  }
}
</style>