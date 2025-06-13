import { mergeProps, useSSRContext } from 'file://D:/myapp/course_demo_nuxt-main/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://D:/myapp/course_demo_nuxt-main/node_modules/vue/server-renderer/index.mjs';
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
  __name: "home-labubu",
  __ssrInlineRender: true,
  setup(__props) {
    const familyMembers = [
      {
        name: "LABUBU",
        image: "/images/LABUBU.webp",
        gender: "\u5973",
        birthYear: "2015\u5E74\u751F",
        hometown: "\u5317\u4EAC\u671D\u9633",
        education: {
          school: "\u6CE1\u6CE1\u739B\u7279\u57CE\u5E02\u4E50\u56ED",
          degree: "\u6478\u9C7C\u5B66\u7855\u58EB"
        },
        residence: {
          registered: "\u5317\u4EAC\u5E02\u671D\u9633\u533A\u5927\u671B\u4EAC\u79D1\u6280\u5546\u52A1\u56ED",
          current: "\u671D\u9633\u516C\u56ED\u897F\u95E8"
        },
        personality: "\u50B2\u5A07\u7684\u53DB\u9006\u5C0F\u7CBE\u7075",
        workExperience: [
          '2018\u5E74\uFF1A\u4EFB\u6CE1\u6CE1\u739B\u7279"\u76F2\u76D2\u754C\u8868\u60C5\u7EC4\u7EC4\u957F"\uFF0C\u51ED\u501F"\u4F3C\u7B11\u975E\u7B11\u3001\u4F3C\u5446\u975E\u5446"\u7684\u8868\u60C5\u8D70\u7EA2',
          "2020-2022\u5E74\uFF1A\u5EFA\u7ACBLABUBU\u5929\u56E2\uFF0C\u4EFBIP\u4E3B\u7406\u4EBA",
          '2023\u5E74-2024\u5E74\uFF1A\u56E0"\u6CBB\u6108\u6548\u7387\u8FC7\u9AD8"\uFF0C\u5BFC\u81F4\u4EBA\u7C7B\u4EA7\u751F"\u4E0D\u4E70\u5C31\u96BE\u53D7"\u526F\u4F5C\u7528\uFF0C\u517C\u4EFB"\u60C5\u7EEA\u7BA1\u7406\u96C6\u56E2\u987E\u95EE"',
          '2015\u5E74\u81F3\u4ECA\uFF1A\u4EFB\u5B87\u5B99\u65E0\u654C\u5168\u7403"\u65AD\u8D27\u738B"'
        ],
        honors: [
          '2020\u5E74 \u83B7"\u6700\u5BB9\u6613\u88AB\u634F\u8138"\u5927\u8D5B\u51A0\u519B',
          '2023\u5E74 \u83B7"\u4E0A\u73ED\u65CF\u6700\u60F3rua"\u6295\u7968\u65AD\u5C42\u7B2C\u4E00',
          "2024\u5E74 \u5E26\u9886THE MONSTERS\u7CFB\u5217\u521B\u6536\u98D9\u5347\u81F330.4\u4EBF\u5143",
          "2025\u5E74-\u81F3\u4ECA \u4E0E\u4F17\u591A\u5962\u4F88\u54C1\u3001\u5F71\u89C6IP\u8054\u540D\uFF0C\u6210\u4E3A\u641C\u7D22\u91CF\u6700\u9AD8\u7684\u6F6E\u73A9IP"
        ]
      },
      {
        name: "ZIMOMO",
        image: "/images/ZIMOMO.webp",
        gender: "\u7537",
        role: "\u65CF\u7FA4\u9996\u9886",
        description: "\u8EAB\u9AD8\u6BD4LABUBU\u591A\u4E00\u500D\uFF0C\u62E5\u6709\u4E00\u6761\u5C3E\u5DF4\uFF0C\u5BCC\u6709\u5192\u9669\u7CBE\u795E\uFF0C\u559C\u7231\u6E38\u73A9\u3002ZIMOMO\u72EC\u4E00\u65E0\u4E8C\uFF0C\u62C5\u4EFBLABUBU\u65CF\u7FA4\u7684\u5927\u9996\u9886\uFF0C\u5728LABUBU\u6751\u65F6\u5E38\u90FD\u770B\u4E0D\u89C1\u4ED6\u3002"
      },
      {
        name: "MOKOKO",
        image: "/images/MOKOKO.webp",
        role: "\u65CF\u7FA4\u6210\u5458",
        description: "MOKOKO\u662FLABUBU\u65CF\u7FA4\u7684\u6210\u5458\uFF0C\u5929\u751F\u62E5\u6709\u4E00\u8EAB\u7C89\u8272\u7684\u6BDB\u53D1\u3001\u767D\u8272\u7684\u809A\u76AE\u3001\u5F2F\u5F2F\u7684\u776B\u6BDB\uFF0C\u548C\u4E00\u9897\u6843\u5FC3\u5F62\u72B6\u7684\u5C0F\u9F3B\u5B50\uFF0CMOKOKO\u5BF9\u81EA\u5DF1\u7C89\u8272\u6BDB\u53D1\u5341\u5206\u5F97\u610F\uFF0C\u751A\u81F3\u8FD8\u6709\u4E00\u70B9\u5C0F\u81EA\u604B\u3002"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "labubu-family" }, _attrs))} data-v-b773719d><header class="site-header" data-v-b773719d><div class="header-content" data-v-b773719d><h1 data-v-b773719d>LABUBU \u5BB6\u65CF\u6210\u5458\u4ECB\u7ECD</h1><div class="header-decoration" data-v-b773719d><span class="decoration-item" data-v-b773719d>\u2665</span><span class="decoration-item" data-v-b773719d>\u2661</span><span class="decoration-item" data-v-b773719d>\u2665</span></div></div></header><div class="family-container" data-v-b773719d><!--[-->`);
      ssrRenderList(familyMembers, (member) => {
        _push(`<div class="family-member" data-v-b773719d><div${ssrRenderAttr("id", member.name.toLowerCase() + "cool")} class="member-card" data-v-b773719d><div class="image-container" data-v-b773719d><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} class="member-image" data-v-b773719d></div><h2 data-v-b773719d>${ssrInterpolate(member.name)}</h2><div class="member-info" data-v-b773719d>`);
        if (member.role) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>\u89D2\u8272</h3><p data-v-b773719d>${ssrInterpolate(member.role)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>\u57FA\u672C\u4FE1\u606F</h3>`);
        if (member.gender) {
          _push(`<p data-v-b773719d><strong data-v-b773719d>\u6027\u522B\uFF1A</strong>${ssrInterpolate(member.gender)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (member.birthYear) {
          _push(`<p data-v-b773719d><strong data-v-b773719d>\u51FA\u751F\u65F6\u95F4\uFF1A</strong>${ssrInterpolate(member.birthYear)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (member.hometown) {
          _push(`<p data-v-b773719d><strong data-v-b773719d>\u7C4D\u8D2F\uFF1A</strong>${ssrInterpolate(member.hometown)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (member.personality) {
          _push(`<p data-v-b773719d><strong data-v-b773719d>\u6027\u683C\uFF1A</strong>${ssrInterpolate(member.personality)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (member.education) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>\u6559\u80B2\u80CC\u666F</h3><p data-v-b773719d><strong data-v-b773719d>\u6BD5\u4E1A\u9662\u6821\uFF1A</strong>${ssrInterpolate(member.education.school)}</p><p data-v-b773719d><strong data-v-b773719d>\u6700\u9AD8\u5B66\u5386\uFF1A</strong>${ssrInterpolate(member.education.degree)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.residence) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>\u5C45\u4F4F\u4FE1\u606F</h3><p data-v-b773719d><strong data-v-b773719d>\u6237\u53E3\u6240\u5728\u5730\uFF1A</strong>${ssrInterpolate(member.residence.registered)}</p><p data-v-b773719d><strong data-v-b773719d>\u5E38\u4F4F\u5730\uFF1A</strong>${ssrInterpolate(member.residence.current)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.workExperience) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>\u5DE5\u4F5C\u7ECF\u5386</h3><ul data-v-b773719d><!--[-->`);
          ssrRenderList(member.workExperience, (exp, index) => {
            _push(`<li data-v-b773719d>${ssrInterpolate(exp)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.honors) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>\u4E3B\u8981\u8363\u8A89</h3><ul data-v-b773719d><!--[-->`);
          ssrRenderList(member.honors, (honor, index) => {
            _push(`<li data-v-b773719d>${ssrInterpolate(honor)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.description) {
          _push(`<div class="info-section" data-v-b773719d><h3 data-v-b773719d>\u8BE6\u7EC6\u4ECB\u7ECD</h3><p data-v-b773719d>${ssrInterpolate(member.description)}</p></div>`);
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

export { homeLabubu as default };
//# sourceMappingURL=home-labubu-DKBnJ5x1.mjs.map
