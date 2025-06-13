import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/myapp/course_demo_nuxt-main/node_modules/hookable/dist/index.mjs";
import "D:/myapp/course_demo_nuxt-main/node_modules/unctx/dist/index.mjs";
import "D:/myapp/course_demo_nuxt-main/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/myapp/course_demo_nuxt-main/node_modules/radix3/dist/index.mjs";
import "D:/myapp/course_demo_nuxt-main/node_modules/defu/dist/defu.mjs";
import "D:/myapp/course_demo_nuxt-main/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "home-labubu",
  __ssrInlineRender: true,
  setup(__props) {
    const familyMembers = [
      {
        name: "LABUBU",
        image: "/images/LABUBU.webp",
        gender: "女",
        birthYear: "2015年生",
        hometown: "北京朝阳",
        education: {
          school: "泡泡玛特城市乐园",
          degree: "摸鱼学硕士"
        },
        residence: {
          registered: "北京市朝阳区大望京科技商务园",
          current: "朝阳公园西门"
        },
        personality: "傲娇的叛逆小精灵",
        workExperience: [
          '2018年：任泡泡玛特"盲盒界表情组组长"，凭借"似笑非笑、似呆非呆"的表情走红',
          "2020-2022年：建立LABUBU天团，任IP主理人",
          '2023年-2024年：因"治愈效率过高"，导致人类产生"不买就难受"副作用，兼任"情绪管理集团顾问"',
          '2015年至今：任宇宙无敌全球"断货王"'
        ],
        honors: [
          '2020年 获"最容易被捏脸"大赛冠军',
          '2023年 获"上班族最想rua"投票断层第一',
          "2024年 带领THE MONSTERS系列创收飙升至30.4亿元",
          "2025年-至今 与众多奢侈品、影视IP联名，成为搜索量最高的潮玩IP"
        ]
      },
      {
        name: "ZIMOMO",
        image: "/images/ZIMOMO.webp",
        gender: "男",
        role: "族群首领",
        description: "身高比LABUBU多一倍，拥有一条尾巴，富有冒险精神，喜爱游玩。ZIMOMO独一无二，担任LABUBU族群的大首领，在LABUBU村时常都看不见他。"
      },
      {
        name: "MOKOKO",
        image: "/images/MOKOKO.webp",
        role: "族群成员",
        description: "MOKOKO是LABUBU族群的成员，天生拥有一身粉色的毛发、白色的肚皮、弯弯的睫毛，和一颗桃心形状的小鼻子，MOKOKO对自己粉色毛发十分得意，甚至还有一点小自恋。"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "labubu-family" }, _attrs))} data-v-b773719d><header class="site-header" data-v-b773719d><div class="header-content" data-v-b773719d><h1 data-v-b773719d>LABUBU 家族成员介绍</h1><div class="header-decoration" data-v-b773719d><span class="decoration-item" data-v-b773719d>♥</span><span class="decoration-item" data-v-b773719d>♡</span><span class="decoration-item" data-v-b773719d>♥</span></div></div></header><div class="family-container" data-v-b773719d><!--[-->`);
      ssrRenderList(familyMembers, (member) => {
        _push(`<div class="family-member" data-v-b773719d><div${ssrRenderAttr("id", member.name.toLowerCase() + "cool")} class="member-card" data-v-b773719d><div class="image-container" data-v-b773719d><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} class="member-image" data-v-b773719d></div><h2 data-v-b773719d>${ssrInterpolate(member.name)}</h2><div class="member-info" data-v-b773719d>`);
        if (member.role) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>角色</h3><p data-v-b773719d>${ssrInterpolate(member.role)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>基本信息</h3>`);
        if (member.gender) {
          _push(`<p data-v-b773719d><strong data-v-b773719d>性别：</strong>${ssrInterpolate(member.gender)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (member.birthYear) {
          _push(`<p data-v-b773719d><strong data-v-b773719d>出生时间：</strong>${ssrInterpolate(member.birthYear)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (member.hometown) {
          _push(`<p data-v-b773719d><strong data-v-b773719d>籍贯：</strong>${ssrInterpolate(member.hometown)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (member.personality) {
          _push(`<p data-v-b773719d><strong data-v-b773719d>性格：</strong>${ssrInterpolate(member.personality)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (member.education) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>教育背景</h3><p data-v-b773719d><strong data-v-b773719d>毕业院校：</strong>${ssrInterpolate(member.education.school)}</p><p data-v-b773719d><strong data-v-b773719d>最高学历：</strong>${ssrInterpolate(member.education.degree)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.residence) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>居住信息</h3><p data-v-b773719d><strong data-v-b773719d>户口所在地：</strong>${ssrInterpolate(member.residence.registered)}</p><p data-v-b773719d><strong data-v-b773719d>常住地：</strong>${ssrInterpolate(member.residence.current)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.workExperience) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>工作经历</h3><ul data-v-b773719d><!--[-->`);
          ssrRenderList(member.workExperience, (exp, index) => {
            _push(`<li data-v-b773719d>${ssrInterpolate(exp)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.honors) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>主要荣誉</h3><ul data-v-b773719d><!--[-->`);
          ssrRenderList(member.honors, (honor, index) => {
            _push(`<li data-v-b773719d>${ssrInterpolate(honor)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.description) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>详细介绍</h3><p data-v-b773719d>${ssrInterpolate(member.description)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-labubu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeLabubu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b773719d"]]);
export {
  homeLabubu as default
};
//# sourceMappingURL=home-labubu-DKBnJ5x1.js.map
