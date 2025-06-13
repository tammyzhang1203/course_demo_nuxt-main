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
const _imports_0 = publicAssetsURL("/images/ZIMOMO-FIRST.jpg");
const _sfc_main = {
  __name: "zimomo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "zimomo-page" }, _attrs))} data-v-cf506f2f><div class="content-wrapper" data-v-cf506f2f><div class="section-header" data-v-cf506f2f><div class="decoration" data-v-cf506f2f></div></div><div class="member-card" data-v-cf506f2f><div class="member-header" data-v-cf506f2f><div class="member-image-container" data-v-cf506f2f><img${ssrRenderAttr("src", _imports_0)} alt="ZIMOMO" class="member-image" data-v-cf506f2f></div><div class="member-info" data-v-cf506f2f><h2 class="member-name" data-v-cf506f2f>ZIMOMO</h2><div class="member-role" data-v-cf506f2f>家族首领</div></div></div><div class="info-section" data-v-cf506f2f><h3 class="section-title" data-v-cf506f2f>基本信息</h3><div class="info-content" data-v-cf506f2f><p data-v-cf506f2f>男孩子，身高比LABUBU多一倍，拥有一条尾巴，富有冒险精神，喜爱游玩。</p></div></div><div class="info-section" data-v-cf506f2f><h3 class="section-title" data-v-cf506f2f>教育背景</h3><div class="info-content" data-v-cf506f2f><p data-v-cf506f2f>毕业于LABUBU家族学院，主修可爱学。</p></div></div><div class="info-section" data-v-cf506f2f><h3 class="section-title" data-v-cf506f2f>居住地</h3><div class="info-content" data-v-cf506f2f><p data-v-cf506f2f>与LABUBU家族其他成员一起居住在梦幻森林。</p></div></div><div class="info-section" data-v-cf506f2f><h3 class="section-title" data-v-cf506f2f>工作经历</h3><div class="info-content" data-v-cf506f2f><p data-v-cf506f2f>作为LABUBU家族的一员，参与各种家族活动和项目。</p></div></div><div class="info-section" data-v-cf506f2f><h3 class="section-title" data-v-cf506f2f>荣誉</h3><div class="info-content" data-v-cf506f2f><p data-v-cf506f2f></p></div></div><div class="info-section" data-v-cf506f2f><h3 class="section-title" data-v-cf506f2f>详细介绍</h3><div class="info-content" data-v-cf506f2f><p data-v-cf506f2f>ZIMOMO独一无二，担任LABUBU族群的大首领，在LABUBU村时常都看不见他。</p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/zimomo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zimomo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf506f2f"]]);
export {
  zimomo as default
};
//# sourceMappingURL=zimomo-RBOdn8l1.js.map
