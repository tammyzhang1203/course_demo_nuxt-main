import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      "/images/screenshot1.jpg",
      "/images/screenshot2.jpg",
      "/images/screenshot3.jpg"
    ];
    const characters = [
      {
        name: "ZIMOMO",
        image: "/images/ZIMOMO-FIRST.jpg"
      },
      {
        name: "LABUBU",
        image: "/images/LABUBU.jpg"
      },
      {
        name: "MOKOKO",
        image: "/images/MOKOKO-FIRST.jpg"
      }
    ];
    const currentIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel-page" }, _attrs))} data-v-c3188b33><header class="site-header" data-v-c3188b33><div class="header-content" data-v-c3188b33><div class="header-decoration" data-v-c3188b33></div></div></header><div class="carousel-container" data-v-c3188b33><div class="carousel-wrapper" style="${ssrRenderStyle({ transform: `translateX(-${unref(currentIndex) * 100}%)` })}" data-v-c3188b33><!--[-->`);
      ssrRenderList(images, (image, index2) => {
        _push(`<div class="carousel-slide" data-v-c3188b33><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `Screenshot ${index2 + 1}`)} class="carousel-image" data-v-c3188b33></div>`);
      });
      _push(`<!--]--></div><div class="carousel-controls" data-v-c3188b33><button class="control-btn prev"${ssrIncludeBooleanAttr(unref(currentIndex) === 0) ? " disabled" : ""} data-v-c3188b33><span class="control-icon" data-v-c3188b33>❮</span></button><div class="carousel-dots" data-v-c3188b33><!--[-->`);
      ssrRenderList(images, (_, index2) => {
        _push(`<span class="${ssrRenderClass(["dot", { active: unref(currentIndex) === index2 }])}" data-v-c3188b33></span>`);
      });
      _push(`<!--]--></div><button class="control-btn next"${ssrIncludeBooleanAttr(unref(currentIndex) === images.length - 1) ? " disabled" : ""} data-v-c3188b33><span class="control-icon" data-v-c3188b33>❯</span></button></div></div><div class="character-section" data-v-c3188b33><!--[-->`);
      ssrRenderList(characters, (character) => {
        _push(`<div class="character-card" data-v-c3188b33>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: character.name === "MOKOKO" ? "/mokoko" : character.name === "ZIMOMO" ? "/zimomo" : character.name === "LABUBU" ? "/labubu" : `/home-labubu#${character.name.toLowerCase()}`,
          class: "character-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="character-name" data-v-c3188b33${_scopeId}>${ssrInterpolate(character.name)}</h2><div class="character-image-container" data-v-c3188b33${_scopeId}><img${ssrRenderAttr("src", character.image)}${ssrRenderAttr("alt", character.name)} class="character-image" data-v-c3188b33${_scopeId}></div>`);
            } else {
              return [
                createVNode("h2", { class: "character-name" }, toDisplayString(character.name), 1),
                createVNode("div", { class: "character-image-container" }, [
                  createVNode("img", {
                    src: character.image,
                    alt: character.name,
                    class: "character-image"
                  }, null, 8, ["src", "alt"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c3188b33"]]);
export {
  index as default
};
//# sourceMappingURL=index-UhIr8qtG.js.map
