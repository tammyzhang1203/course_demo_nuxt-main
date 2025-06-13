import { mergeProps, useSSRContext } from 'file://D:/myapp/course_demo_nuxt-main/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file://D:/myapp/course_demo_nuxt-main/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/h3/dist/index.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/destr/dist/index.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/hookable/dist/index.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/unstorage/dist/index.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/myapp/course_demo_nuxt-main/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/ohash/dist/index.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/klona/dist/index.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/defu/dist/defu.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/scule/dist/index.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/pathe/dist/index.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/unhead/dist/server.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/devalue/index.js';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/unhead/dist/utils.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/unctx/dist/index.mjs';
import 'file://D:/myapp/course_demo_nuxt-main/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    const storeLocations = {
      "\u534E\u5317\u5730\u533A": [
        "\u5317\u4EAC\u5E02",
        "\u5929\u6D25\u5E02",
        "\u6CB3\u5317\u7701\u77F3\u5BB6\u5E84\u5E02",
        "\u5C71\u897F\u7701\u592A\u539F\u5E02",
        "\u5185\u8499\u53E4\u547C\u548C\u6D69\u7279\u5E02"
      ],
      "\u534E\u4E1C\u5730\u533A": [
        "\u4E0A\u6D77\u5E02",
        "\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02",
        "\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02",
        "\u5B89\u5FBD\u7701\u5408\u80A5\u5E02",
        "\u798F\u5EFA\u7701\u798F\u5DDE\u5E02",
        "\u6C5F\u897F\u7701\u5357\u660C\u5E02",
        "\u5C71\u4E1C\u7701\u6D4E\u5357\u5E02"
      ],
      "\u534E\u5357\u5730\u533A": [
        "\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02",
        "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A\u5357\u5B81\u5E02",
        "\u6D77\u5357\u7701\u6D77\u53E3\u5E02"
      ],
      "\u534E\u4E2D\u5730\u533A": [
        "\u6CB3\u5357\u7701\u90D1\u5DDE\u5E02",
        "\u6E56\u5317\u7701\u6B66\u6C49\u5E02",
        "\u6E56\u5357\u7701\u957F\u6C99\u5E02"
      ],
      "\u897F\u5357\u5730\u533A": [
        "\u91CD\u5E86\u5E02",
        "\u56DB\u5DDD\u7701\u6210\u90FD\u5E02",
        "\u8D35\u5DDE\u7701\u8D35\u9633\u5E02",
        "\u4E91\u5357\u7701\u6606\u660E\u5E02",
        "\u897F\u85CF\u81EA\u6CBB\u533A\u62C9\u8428\u5E02"
      ],
      "\u897F\u5317\u5730\u533A": [
        "\u9655\u897F\u7701\u897F\u5B89\u5E02",
        "\u7518\u8083\u7701\u5170\u5DDE\u5E02",
        "\u9752\u6D77\u7701\u897F\u5B81\u5E02",
        "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A\u94F6\u5DDD\u5E02",
        "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A\u4E4C\u9C81\u6728\u9F50\u5E02"
      ],
      "\u4E1C\u5317\u5730\u533A": [
        "\u8FBD\u5B81\u7701\u6C88\u9633\u5E02",
        "\u5409\u6797\u7701\u957F\u6625\u5E02",
        "\u9ED1\u9F99\u6C5F\u7701\u54C8\u5C14\u6EE8\u5E02"
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-e812ec48><div class="contact-header" data-v-e812ec48><h1 data-v-e812ec48>\u8054\u7CFB\u6211\u4EEC</h1><div class="header-decoration" data-v-e812ec48><span class="decoration-item" data-v-e812ec48>\u2728</span><span class="decoration-item" data-v-e812ec48>\u{1F496}</span><span class="decoration-item" data-v-e812ec48>\u2728</span></div></div><div class="contact-content" data-v-e812ec48><div class="contact-section" data-v-e812ec48><h2 data-v-e812ec48>\u6CE1\u6CE1\u739B\u7279\u96C6\u56E2\u603B\u90E8</h2><div class="address-card" data-v-e812ec48><div class="address-icon" data-v-e812ec48>\u{1F3E2}</div><div class="address-info" data-v-e812ec48><p class="company-name" data-v-e812ec48>\u5317\u4EAC\u6CE1\u6CE1\u739B\u7279\u6587\u5316\u521B\u610F\u6709\u9650\u516C\u53F8</p><p class="address" data-v-e812ec48>\u5730\u5740\uFF1A\u5317\u4EAC\u5E02\u671D\u9633\u533A\u5927\u671B\u4EAC\u79D1\u6280\u5546\u52A1\u56ED</p><p class="postal-code" data-v-e812ec48>\u90AE\u7F16\uFF1A100102</p></div></div></div><div class="contact-section" data-v-e812ec48><h2 data-v-e812ec48>\u5168\u56FD\u5E97\u94FA\u5206\u5E03</h2><div class="store-locations" data-v-e812ec48><!--[-->`);
      ssrRenderList(storeLocations, (stores, region) => {
        _push(`<div class="region-group" data-v-e812ec48><h3 data-v-e812ec48>${ssrInterpolate(region)}</h3><ul class="store-list" data-v-e812ec48><!--[-->`);
        ssrRenderList(stores, (city, index) => {
          _push(`<li data-v-e812ec48><span class="city-name" data-v-e812ec48>${ssrInterpolate(city)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e812ec48"]]);

export { contactUs as default };
//# sourceMappingURL=contact-us-BP_7QWus.mjs.map
