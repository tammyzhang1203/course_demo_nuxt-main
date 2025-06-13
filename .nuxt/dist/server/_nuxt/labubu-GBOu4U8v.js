import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "D:/myapp/course_demo_nuxt-main/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "D:/myapp/course_demo_nuxt-main/node_modules/unctx/dist/index.mjs";
import "D:/myapp/course_demo_nuxt-main/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/myapp/course_demo_nuxt-main/node_modules/radix3/dist/index.mjs";
import "D:/myapp/course_demo_nuxt-main/node_modules/defu/dist/defu.mjs";
import "D:/myapp/course_demo_nuxt-main/node_modules/ufo/dist/index.mjs";
const _imports_0 = publicAssetsURL("/images/LABUBU.jpg");
const _sfc_main = {
  __name: "labubu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "labubu-page" }, _attrs))} data-v-f685b19d><div class="content-wrapper" data-v-f685b19d><div class="section-header" data-v-f685b19d><div class="decoration" data-v-f685b19d></div></div><div class="member-card" data-v-f685b19d><div class="member-header" data-v-f685b19d><div class="member-image-container" data-v-f685b19d><img${ssrRenderAttr("src", _imports_0)} alt="LABUBU" class="member-image" data-v-f685b19d></div><div class="member-info" data-v-f685b19d><h2 class="member-name" data-v-f685b19d>LABUBU</h2><div class="member-role" data-v-f685b19d>家族成员</div></div></div><div class="info-section" data-v-f685b19d><h3 class="section-title" data-v-f685b19d>基本信息</h3><div class="info-content" data-v-f685b19d><p data-v-f685b19d>女生；是个傲娇的叛逆小精灵</p></div></div><div class="info-section" data-v-f685b19d><h3 class="section-title" data-v-f685b19d>教育背景</h3><div class="info-content" data-v-f685b19d><p data-v-f685b19d>毕业于LABUBU家族学院，主修可爱学。</p></div></div><div class="info-section" data-v-f685b19d><h3 class="section-title" data-v-f685b19d>居住地</h3><div class="info-content" data-v-f685b19d><p data-v-f685b19d>与家族其他成员一起居住在梦幻森林。</p></div></div><div class="info-section" data-v-f685b19d><h3 class="section-title" data-v-f685b19d>工作经历</h3><div class="info-content" data-v-f685b19d><p data-v-f685b19d>2018年：任泡泡玛特&quot;盲盒界表情组组长&quot;，凭借&quot;似笑非笑、似呆非呆&quot;的表情走红</p><p data-v-f685b19d>2020-2022年：建立LABUBU天团，任IP主理人</p><p data-v-f685b19d>2023年-2024年：因&quot;治愈效率过高&quot;，导致人类产生&quot;不买就难受&quot;副作用，兼任&quot;情绪管理集团顾问&quot;</p><p data-v-f685b19d>2015年至今：任宇宙无敌全球&quot;断货王&quot;</p></div></div><div class="info-section" data-v-f685b19d><h3 class="section-title" data-v-f685b19d>荣誉</h3><div class="info-content" data-v-f685b19d><p data-v-f685b19d>2020年 获&quot;最容易被捏脸&quot;大赛冠军</p><p data-v-f685b19d>2023年 获&quot;上班族最想rua&quot;投票断层第一</p><p data-v-f685b19d>2024年 带领THE MONSTERS系列创收飙升至30.4亿元</p><p data-v-f685b19d>2025年-至今 与众多奢侈品、影视IP联名，成为搜索量最高的潮玩IP</p></div></div><div class="info-section" data-v-f685b19d><h3 class="section-title" data-v-f685b19d>详细介绍</h3><div class="info-content" data-v-f685b19d><p data-v-f685b19d></p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/labubu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const labubu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f685b19d"]]);
export {
  labubu as default
};
//# sourceMappingURL=labubu-GBOu4U8v.js.map
