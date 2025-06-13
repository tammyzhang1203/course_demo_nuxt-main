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
const _imports_0 = publicAssetsURL("/images/MOKOKO-FIRST.jpg");
const _sfc_main = {
  __name: "mokoko",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mokoko-page" }, _attrs))} data-v-e92c16a0><div class="content-wrapper" data-v-e92c16a0><div class="section-header" data-v-e92c16a0><div class="decoration" data-v-e92c16a0></div></div><div class="member-card" data-v-e92c16a0><div class="member-header" data-v-e92c16a0><div class="member-image-container" data-v-e92c16a0><img${ssrRenderAttr("src", _imports_0)} alt="MOKOKO" class="member-image" data-v-e92c16a0></div><div class="member-info" data-v-e92c16a0><h2 class="member-name" data-v-e92c16a0>MOKOKO</h2><div class="member-role" data-v-e92c16a0>家族成员</div></div></div><div class="info-section" data-v-e92c16a0><h3 class="section-title" data-v-e92c16a0>基本信息</h3><div class="info-content" data-v-e92c16a0><p data-v-e92c16a0>天生拥有一身粉色的毛发、白色的肚皮、弯弯的睫毛，和一颗桃心形状的小鼻子，MOKOKO对自己粉色毛发十分得意，甚至还有一点小自恋。</p></div></div><div class="info-section" data-v-e92c16a0><h3 class="section-title" data-v-e92c16a0>教育背景</h3><div class="info-content" data-v-e92c16a0><p data-v-e92c16a0>毕业于LABUBU家族学院，主修可爱学。</p></div></div><div class="info-section" data-v-e92c16a0><h3 class="section-title" data-v-e92c16a0>居住地</h3><div class="info-content" data-v-e92c16a0><p data-v-e92c16a0>与LABUBU家族其他成员一起居住在梦幻森林。</p></div></div><div class="info-section" data-v-e92c16a0><h3 class="section-title" data-v-e92c16a0>工作经历</h3><div class="info-content" data-v-e92c16a0><p data-v-e92c16a0>作为LABUBU家族的一员，参与各种家族活动和项目。</p></div></div><div class="info-section" data-v-e92c16a0><h3 class="section-title" data-v-e92c16a0>荣誉</h3><div class="info-content" data-v-e92c16a0><p data-v-e92c16a0></p></div></div><div class="info-section" data-v-e92c16a0><h3 class="section-title" data-v-e92c16a0>详细介绍</h3><div class="info-content" data-v-e92c16a0><p data-v-e92c16a0>MOKOKO以其独特的外表和可爱的性格，成为LABUBU家族中不可或缺的一员。她总是带着温暖的笑容，给周围的人带来欢乐。</p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mokoko.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mokoko = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e92c16a0"]]);
export {
  mokoko as default
};
//# sourceMappingURL=mokoko-BJhV7wBz.js.map
