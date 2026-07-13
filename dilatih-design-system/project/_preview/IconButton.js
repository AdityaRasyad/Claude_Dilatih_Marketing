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

  // .design-sync/.cache/previews/IconButton.tsx
  var IconButton_exports = {};
  __export(IconButton_exports, {
    AllVariants: () => AllVariants2,
    Danger: () => Danger2,
    Ghost: () => Ghost2,
    Outline: () => Outline2,
    Primary: () => Primary2,
    Secondary: () => Secondary2,
    Sizes: () => Sizes2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/IconButton/IconButton.stories.tsx
  var IconButton_stories_exports = {};
  __export(IconButton_stories_exports, {
    AllVariants: () => AllVariants,
    Danger: () => Danger,
    Ghost: () => Ghost,
    Outline: () => Outline,
    Primary: () => Primary,
    Secondary: () => Secondary,
    Sizes: () => Sizes,
    default: () => IconButton_stories_default
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

  // node_modules/lucide-react/dist/esm/icons/bell.js
  init_define_import_meta_env();
  var Bell = createLucideIcon("Bell", [
    ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
    ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/heart.js
  init_define_import_meta_env();
  var Heart = createLucideIcon("Heart", [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky"
      }
    ]
  ]);

  // node_modules/lucide-react/dist/esm/icons/pencil.js
  init_define_import_meta_env();
  var Pencil = createLucideIcon("Pencil", [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
      }
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/plus.js
  init_define_import_meta_env();
  var Plus = createLucideIcon("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/search.js
  init_define_import_meta_env();
  var Search = createLucideIcon("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/trash-2.js
  init_define_import_meta_env();
  var Trash2 = createLucideIcon("Trash2", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
  ]);

  // ds-shim:ds:IconButton
  var ds_IconButton_exports = {};
  __export(ds_IconButton_exports, {
    default: () => ds_IconButton_default
  });
  init_define_import_meta_env();
  __reExport(ds_IconButton_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_IconButton_default = g["IconButton"] !== void 0 ? g["IconButton"] : g;

  // src/components/IconButton/IconButton.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Primitives/IconButton",
    component: ds_IconButton_exports.IconButton,
    tags: ["autodocs"],
    args: { "aria-label": "Tambah kelas", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 }) },
    argTypes: {
      variant: { control: "select", options: ["primary", "secondary", "outline", "ghost", "danger"] },
      size: { control: "select", options: ["sm", "md", "lg"] }
    }
  };
  var IconButton_stories_default = meta;
  var Primary = { args: { variant: "primary" } };
  var Secondary = { args: { variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 }), "aria-label": "Cari pelatihan" } };
  var Outline = { args: { variant: "outline", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 18 }), "aria-label": "Ubah profil" } };
  var Ghost = { args: { variant: "ghost", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 18 }), "aria-label": "Notifikasi" } };
  var Danger = { args: { variant: "danger", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 18 }), "aria-label": "Hapus sertifikat" } };
  var Sizes = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_IconButton_exports.IconButton, { size: "sm", "aria-label": "Suka", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 16 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_IconButton_exports.IconButton, { size: "md", "aria-label": "Suka", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 18 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_IconButton_exports.IconButton, { size: "lg", "aria-label": "Suka", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 22 }) })
    ] })
  };
  var AllVariants = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_IconButton_exports.IconButton, { variant: "primary", "aria-label": "Tambah", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_IconButton_exports.IconButton, { variant: "secondary", "aria-label": "Cari", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_IconButton_exports.IconButton, { variant: "outline", "aria-label": "Ubah", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 18 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_IconButton_exports.IconButton, { variant: "ghost", "aria-label": "Notifikasi", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 18 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_IconButton_exports.IconButton, { variant: "danger", "aria-label": "Hapus", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 18 }) })
    ] })
  };

  // .design-sync/.cache/previews/IconButton.tsx
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
  var Primary2 = (
    /* Primary */
    compose(IconButton_stories_exports, "Primary")
  );
  var Secondary2 = (
    /* Secondary */
    compose(IconButton_stories_exports, "Secondary")
  );
  var Outline2 = (
    /* Outline */
    compose(IconButton_stories_exports, "Outline")
  );
  var Ghost2 = (
    /* Ghost */
    compose(IconButton_stories_exports, "Ghost")
  );
  var Danger2 = (
    /* Danger */
    compose(IconButton_stories_exports, "Danger")
  );
  var Sizes2 = (
    /* Sizes */
    compose(IconButton_stories_exports, "Sizes")
  );
  var AllVariants2 = (
    /* All Variants */
    compose(IconButton_stories_exports, "AllVariants")
  );
  return __toCommonJS(IconButton_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/bell.js:
lucide-react/dist/esm/icons/heart.js:
lucide-react/dist/esm/icons/pencil.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/trash-2.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
