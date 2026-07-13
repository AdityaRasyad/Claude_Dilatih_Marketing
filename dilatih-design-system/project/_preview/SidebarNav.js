"use strict";
var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function jsx2(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsx2;
      module.exports.jsxDEV = jsx2;
      module.exports.Fragment = R.Fragment;
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.DilatihDS;
    }
  });

  // .design-sync/.cache/previews/SidebarNav.tsx
  var SidebarNav_exports = {};
  __export(SidebarNav_exports, {
    Default: () => Default2,
    WithSections: () => WithSections2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/SidebarNav/SidebarNav.stories.tsx
  var SidebarNav_stories_exports = {};
  __export(SidebarNav_stories_exports, {
    Default: () => Default,
    WithSections: () => WithSections,
    default: () => SidebarNav_stories_default
  });
  init_define_import_meta_env();

  // node_modules/lucide-react/dist/esm/lucide-react.js
  init_define_import_meta_env();

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim());

  // node_modules/lucide-react/dist/esm/shared/src/utils.js
  init_define_import_meta_env();
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();

  // node_modules/lucide-react/dist/esm/Icon.js
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());

  // node_modules/lucide-react/dist/esm/defaultAttributes.js
  init_define_import_meta_env();
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // node_modules/lucide-react/dist/esm/Icon.js
  var Icon = (0, import_react.forwardRef)(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    }, ref) => {
      return (0, import_react.createElement)(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: mergeClasses("lucide", className),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  var createLucideIcon = (iconName, iconNode) => {
    const Component = (0, import_react2.forwardRef)(
      ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
        ...props
      })
    );
    Component.displayName = `${iconName}`;
    return Component;
  };

  // node_modules/lucide-react/dist/esm/icons/award.js
  init_define_import_meta_env();
  var Award = createLucideIcon("Award", [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv"
      }
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/credit-card.js
  init_define_import_meta_env();
  var CreditCard = createLucideIcon("CreditCard", [
    ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/graduation-cap.js
  init_define_import_meta_env();
  var GraduationCap = createLucideIcon("GraduationCap", [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0"
      }
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/layout-dashboard.js
  init_define_import_meta_env();
  var LayoutDashboard = createLucideIcon("LayoutDashboard", [
    ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
    ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
    ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
    ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/presentation.js
  init_define_import_meta_env();
  var Presentation = createLucideIcon("Presentation", [
    ["path", { d: "M2 3h20", key: "91anmk" }],
    ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
    ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/settings.js
  init_define_import_meta_env();
  var Settings = createLucideIcon("Settings", [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/users.js
  init_define_import_meta_env();
  var Users = createLucideIcon("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
  ]);

  // ds-shim:ds:SidebarNav
  var ds_SidebarNav_exports = {};
  __export(ds_SidebarNav_exports, {
    default: () => ds_SidebarNav_default
  });
  init_define_import_meta_env();
  __reExport(ds_SidebarNav_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_SidebarNav_default = g["SidebarNav"] !== void 0 ? g["SidebarNav"] : g;

  // ds-shim:ds:Logo
  var ds_Logo_exports = {};
  __export(ds_Logo_exports, {
    default: () => ds_Logo_default
  });
  init_define_import_meta_env();
  __reExport(ds_Logo_exports, __toESM(require_ds_raw()));
  var g2 = window.DilatihDS;
  var ds_Logo_default = g2["Logo"] !== void 0 ? g2["Logo"] : g2;

  // src/components/SidebarNav/SidebarNav.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Admin/SidebarNav",
    component: ds_SidebarNav_exports.SidebarNav,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" }
  };
  var SidebarNav_stories_default = meta;
  var Logo = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Logo_exports.Logo, { variant: "white", height: 26 });
  var Footer = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3 rounded px-2 py-1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        src: "https://i.pravatar.cc/64?img=14",
        alt: "Avatar Rina Kartika",
        className: "h-9 w-9 rounded-pill object-cover"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "truncate font-sans text-sm font-semibold text-white", children: "Rina Kartika" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "truncate font-sans text-xs text-navy-300", children: "Administrator" })
    ] })
  ] });
  var Default = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_SidebarNav_exports.SidebarNav, { ...args }) }),
    args: {
      logo: Logo,
      footer: Footer,
      items: [
        { label: "Dashboard", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, {}), href: "#", active: true },
        { label: "Kelas", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {}), href: "#" },
        { label: "Workshop", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presentation, {}), href: "#" },
        { label: "Peserta", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}), href: "#", badge: "128" },
        { label: "Sertifikat", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {}), href: "#" },
        { label: "Pembayaran", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {}), href: "#", badge: "4" },
        { label: "Pengaturan", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {}), href: "#" }
      ]
    }
  };
  var WithSections = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_SidebarNav_exports.SidebarNav, { ...args }) }),
    args: {
      logo: Logo,
      footer: Footer,
      sections: [
        {
          title: "Utama",
          items: [
            { label: "Dashboard", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, {}), href: "#", active: true },
            { label: "Kelas", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {}), href: "#" },
            { label: "Workshop", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presentation, {}), href: "#" }
          ]
        },
        {
          title: "Manajemen",
          items: [
            { label: "Peserta", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}), href: "#", badge: "128" },
            { label: "Sertifikat", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {}), href: "#" },
            { label: "Pembayaran", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {}), href: "#", badge: "4" }
          ]
        },
        {
          title: "Sistem",
          items: [{ label: "Pengaturan", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {}), href: "#" }]
        }
      ]
    }
  };

  // .design-sync/.cache/previews/SidebarNav.tsx
  function compose(S, key) {
    const meta2 = S.default ?? {};
    const st = S[key];
    const args = { ...meta2.args ?? {}, ...st && st.args ? st.args : {} };
    const at = { ...meta2.argTypes ?? {}, ...st && st.argTypes ? st.argTypes : {} };
    for (const k of Object.keys(args)) {
      const m = at[k] && at[k].mapping;
      if (m && typeof m === "object" && args[k] in m) args[k] = m[args[k]];
    }
    const title = typeof meta2.title === "string" ? meta2.title : "";
    const ctx = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: {},
      viewMode: "story",
      parameters: (st && st.parameters) ?? meta2.parameters ?? {}
    };
    let render = null;
    if (st && typeof st.render === "function") render = () => st.render(args, ctx);
    else if (typeof st === "function") render = () => st(args, ctx);
    else if (typeof meta2.render === "function") render = () => meta2.render(args, ctx);
    else {
      const C = st && st.component || meta2.component;
      if (C) render = () => React.createElement(C, args);
    }
    if (!render) return () => null;
    const decorators = [].concat((st && st.decorators) ?? []).concat(meta2.decorators ?? []);
    return decorators.reduce((inner, dec) => () => {
      const out = dec(inner, ctx);
      return out === void 0 ? inner() : out;
    }, render);
  }
  var Default2 = (
    /* Default */
    compose(SidebarNav_stories_exports, "Default")
  );
  var WithSections2 = (
    /* With Sections */
    compose(SidebarNav_stories_exports, "WithSections")
  );
  return __toCommonJS(SidebarNav_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/award.js:
lucide-react/dist/esm/icons/credit-card.js:
lucide-react/dist/esm/icons/graduation-cap.js:
lucide-react/dist/esm/icons/layout-dashboard.js:
lucide-react/dist/esm/icons/presentation.js:
lucide-react/dist/esm/icons/settings.js:
lucide-react/dist/esm/icons/users.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
