import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
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
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const blog2 = ref({
      title: "",
      content: "",
      author: "",
      date: "",
      tags: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-container" }, _attrs))} data-v-e57b2017><h1 data-v-e57b2017>${ssrInterpolate(blog2.value.title)}</h1><p data-v-e57b2017>${ssrInterpolate(blog2.value.content)}</p><div class="blog-meta" data-v-e57b2017><p data-v-e57b2017><strong data-v-e57b2017>作者：</strong>${ssrInterpolate(blog2.value.author)}</p><p data-v-e57b2017><strong data-v-e57b2017>发布日期：</strong>${ssrInterpolate(blog2.value.date)}</p><p data-v-e57b2017><strong data-v-e57b2017>标签：</strong>${ssrInterpolate(blog2.value.tags.join(", "))}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e57b2017"]]);
export {
  blog as default
};
//# sourceMappingURL=blog-BmpMOI7D.js.map
