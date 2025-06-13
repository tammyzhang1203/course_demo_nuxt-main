import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    const storeLocations = {
      "华北地区": [
        "北京市",
        "天津市",
        "河北省石家庄市",
        "山西省太原市",
        "内蒙古呼和浩特市"
      ],
      "华东地区": [
        "上海市",
        "江苏省南京市",
        "浙江省杭州市",
        "安徽省合肥市",
        "福建省福州市",
        "江西省南昌市",
        "山东省济南市"
      ],
      "华南地区": [
        "广东省广州市",
        "广西壮族自治区南宁市",
        "海南省海口市"
      ],
      "华中地区": [
        "河南省郑州市",
        "湖北省武汉市",
        "湖南省长沙市"
      ],
      "西南地区": [
        "重庆市",
        "四川省成都市",
        "贵州省贵阳市",
        "云南省昆明市",
        "西藏自治区拉萨市"
      ],
      "西北地区": [
        "陕西省西安市",
        "甘肃省兰州市",
        "青海省西宁市",
        "宁夏回族自治区银川市",
        "新疆维吾尔自治区乌鲁木齐市"
      ],
      "东北地区": [
        "辽宁省沈阳市",
        "吉林省长春市",
        "黑龙江省哈尔滨市"
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-e812ec48><div class="contact-header" data-v-e812ec48><h1 data-v-e812ec48>联系我们</h1><div class="header-decoration" data-v-e812ec48><span class="decoration-item" data-v-e812ec48>✨</span><span class="decoration-item" data-v-e812ec48>💖</span><span class="decoration-item" data-v-e812ec48>✨</span></div></div><div class="contact-content" data-v-e812ec48><div class="contact-section" data-v-e812ec48><h2 data-v-e812ec48>泡泡玛特集团总部</h2><div class="address-card" data-v-e812ec48><div class="address-icon" data-v-e812ec48>🏢</div><div class="address-info" data-v-e812ec48><p class="company-name" data-v-e812ec48>北京泡泡玛特文化创意有限公司</p><p class="address" data-v-e812ec48>地址：北京市朝阳区大望京科技商务园</p><p class="postal-code" data-v-e812ec48>邮编：100102</p></div></div></div><div class="contact-section" data-v-e812ec48><h2 data-v-e812ec48>全国店铺分布</h2><div class="store-locations" data-v-e812ec48><!--[-->`);
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
export {
  contactUs as default
};
//# sourceMappingURL=contact-us-BP_7QWus.js.map
