<template>
  <div class="labubu-family">
    <header class="site-header">
      <div class="header-content">
        <h1>LABUBU 家族成员介绍</h1>
        <div class="header-decoration">
          <span class="decoration-item">♥</span>
          <span class="decoration-item">♡</span>
          <span class="decoration-item">♥</span>
        </div>
      </div>
    </header>
    <div class="family-container">
      <div class="family-member" v-for="member in familyMembers" :key="member.name">
        <div :id="member.name.toLowerCase()+'cool'" class="member-card">
          <div class="image-container">
            <img :src="member.image" :alt="member.name" class="member-image">
          </div>
          <h2>{{ member.name }}</h2>
          <div class="member-info">
            <div class="info-section" v-if="member.role">
              <h3>角色</h3>
              <p>{{ member.role }}</p>
            </div>
            <div  class="info-section">
              <h3>基本信息</h3>
              <p v-if="member.gender"><strong>性别：</strong>{{ member.gender }}</p>
              <p v-if="member.birthYear"><strong>出生时间：</strong>{{ member.birthYear }}</p>
              <p v-if="member.hometown"><strong>籍贯：</strong>{{ member.hometown }}</p>
              <p v-if="member.personality"><strong>性格：</strong>{{ member.personality }}</p>
            </div>
            <div class="info-section" v-if="member.education">
              <h3>教育背景</h3>
              <p><strong>毕业院校：</strong>{{ member.education.school }}</p>
              <p><strong>最高学历：</strong>{{ member.education.degree }}</p>
            </div>
            <div class="info-section" v-if="member.residence">
              <h3>居住信息</h3>
              <p><strong>户口所在地：</strong>{{ member.residence.registered }}</p>
              <p><strong>常住地：</strong>{{ member.residence.current }}</p>
            </div>
            <div class="info-section" v-if="member.workExperience">
              <h3>工作经历</h3>
              <ul>
                <li v-for="(exp, index) in member.workExperience" :key="index">{{ exp }}</li>
              </ul>
            </div>
            <div class="info-section" v-if="member.honors">
              <h3>主要荣誉</h3>
              <ul>
                <li v-for="(honor, index) in member.honors" :key="index">{{ honor }}</li>
              </ul>
            </div>
            <div class="info-section" v-if="member.description">
              <h3>详细介绍</h3>
              <p>{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 
</template>

<script setup>
const familyMembers = [
  {
    name: 'LABUBU',
    image: '/images/LABUBU.webp',
    gender: '女',
    birthYear: '2015年生',
    hometown: '北京朝阳',
    education: {
      school: '泡泡玛特城市乐园',
      degree: '摸鱼学硕士'
    },
    residence: {
      registered: '北京市朝阳区大望京科技商务园',
      current: '朝阳公园西门'
    },
    personality: '傲娇的叛逆小精灵',
    workExperience: [
      '2018年：任泡泡玛特"盲盒界表情组组长"，凭借"似笑非笑、似呆非呆"的表情走红',
      '2020-2022年：建立LABUBU天团，任IP主理人',
      '2023年-2024年：因"治愈效率过高"，导致人类产生"不买就难受"副作用，兼任"情绪管理集团顾问"',
      '2015年至今：任宇宙无敌全球"断货王"'
    ],
    honors: [
      '2020年 获"最容易被捏脸"大赛冠军',
      '2023年 获"上班族最想rua"投票断层第一',
      '2024年 带领THE MONSTERS系列创收飙升至30.4亿元',
      '2025年-至今 与众多奢侈品、影视IP联名，成为搜索量最高的潮玩IP'
    ]
  },
  {
    name: 'ZIMOMO',
    image: '/images/ZIMOMO.webp',
    gender: '男',
    role: '族群首领',
    description: '身高比LABUBU多一倍，拥有一条尾巴，富有冒险精神，喜爱游玩。ZIMOMO独一无二，担任LABUBU族群的大首领，在LABUBU村时常都看不见他。'
  },
  {
    name: 'MOKOKO',
    image: '/images/MOKOKO.webp',
    role: '族群成员',
    description: 'MOKOKO是LABUBU族群的成员，天生拥有一身粉色的毛发、白色的肚皮、弯弯的睫毛，和一颗桃心形状的小鼻子，MOKOKO对自己粉色毛发十分得意，甚至还有一点小自恋。'
  }
]
</script>

<style scoped>
.labubu-family {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #fff5f5 0%, #fff0f6 100%);
  min-height: 100vh;
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

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

@keyframes titleGlow {
  0%, 100% { text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.2); }
  50% { text-shadow: 2px 2px 8px rgba(255, 105, 180, 0.4); }
}

.family-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 1rem;
}

.family-member {
  transition: transform 0.3s ease;
}

.family-member:hover {
  transform: translateY(-10px);
}

.member-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(255, 105, 180, 0.15);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid #FFE4E1;
}

.image-container {
  position: relative;
  width: 250px;
  height: 250px;
  margin: 0 auto 2rem;
  padding: 10px;
  background: linear-gradient(135deg, #FFE4E1 0%, #FFB6C1 100%);
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.2);
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
}

h2 {
  color: #FF69B4;
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);
}

.member-info {
  text-align: left;
  margin-top: 1.5rem;
}

.info-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #FFF0F5;
  border-radius: 15px;
  border: 1px solid #FFB6C1;
}

.info-section h3 {
  color: #FF69B4;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #FFB6C1;
  padding-bottom: 0.5rem;
  font-weight: bold;
}

.info-section p {
  margin: 0.8rem 0;
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
}

.info-section strong {
  color: #FF69B4;
  margin-right: 0.5rem;
  font-weight: bold;
}

.info-section ul {
  list-style-type: none;
  padding-left: 0;
}

.info-section li {
  margin: 0.8rem 0;
  color: #666;
  line-height: 1.8;
  position: relative;
  padding-left: 1.5rem;
  font-size: 1.1rem;
}

.info-section li:before {
  content: "♥";
  color: #FF69B4;
  position: absolute;
  left: 0;
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

  .member-card {
    padding: 1.5rem;
  }

  .info-section {
    padding: 1rem;
  }

  .image-container {
    width: 200px;
    height: 200px;
  }
}
</style> 