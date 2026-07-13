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

  // .design-sync/.cache/previews/Button.tsx
  var Button_exports = {};
  __export(Button_exports, {
    AllVariants: () => AllVariants2,
    Danger: () => Danger2,
    Ghost: () => Ghost2,
    Outline: () => Outline2,
    Pill: () => Pill2,
    Pink: () => Pink2,
    Primary: () => Primary2,
    Secondary: () => Secondary2,
    Sizes: () => Sizes2,
    WithIcons: () => WithIcons2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/Button/Button.stories.tsx
  var Button_stories_exports = {};
  __export(Button_stories_exports, {
    AllVariants: () => AllVariants,
    Danger: () => Danger,
    Ghost: () => Ghost,
    Outline: () => Outline,
    Pill: () => Pill,
    Pink: () => Pink,
    Primary: () => Primary,
    Secondary: () => Secondary,
    Sizes: () => Sizes,
    WithIcons: () => WithIcons,
    default: () => Button_stories_default
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

  // node_modules/lucide-react/dist/esm/icons/arrow-right.js
  init_define_import_meta_env();
  var ArrowRight = createLucideIcon("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/plus.js
  init_define_import_meta_env();
  var Plus = createLucideIcon("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]);

  // ds-shim:ds:Button
  var ds_Button_exports = {};
  __export(ds_Button_exports, {
    default: () => ds_Button_default
  });
  init_define_import_meta_env();
  __reExport(ds_Button_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_Button_default = g["Button"] !== void 0 ? g["Button"] : g;

  // src/components/Button/Button.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Primitives/Button",
    component: ds_Button_exports.Button,
    tags: ["autodocs"],
    args: { children: "Daftar Sekarang" },
    argTypes: {
      variant: { control: "select", options: ["primary", "secondary", "outline", "ghost", "pink", "danger"] },
      size: { control: "select", options: ["sm", "md", "lg"] }
    }
  };
  var Button_stories_default = meta;
  var Primary = { args: { variant: "primary" } };
  var Secondary = { args: { variant: "secondary" } };
  var Outline = { args: { variant: "outline" } };
  var Ghost = { args: { variant: "ghost" } };
  var Pink = { args: { variant: "pink", children: "Ikuti Promo" } };
  var Danger = { args: { variant: "danger", children: "Hapus Akun" } };
  var Sizes = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { ...args, size: "sm", children: "Small" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { ...args, size: "md", children: "Medium" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { ...args, size: "lg", children: "Large" })
    ] })
  };
  var WithIcons = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { ...args, leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 }), children: "Tambah Kelas" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { ...args, trailingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 }), children: "Lihat Detail" })
    ] })
  };
  var Pill = { args: { pill: true, children: "Gabung Workshop" } };
  var AllVariants = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { variant: "primary", children: "Primary" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { variant: "secondary", children: "Secondary" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { variant: "outline", children: "Outline" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { variant: "ghost", children: "Ghost" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { variant: "pink", children: "Pink" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { variant: "danger", children: "Danger" })
    ] })
  };

  // .design-sync/.cache/previews/Button.tsx
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
    compose(Button_stories_exports, "Primary")
  );
  var Secondary2 = (
    /* Secondary */
    compose(Button_stories_exports, "Secondary")
  );
  var Outline2 = (
    /* Outline */
    compose(Button_stories_exports, "Outline")
  );
  var Ghost2 = (
    /* Ghost */
    compose(Button_stories_exports, "Ghost")
  );
  var Pink2 = (
    /* Pink */
    compose(Button_stories_exports, "Pink")
  );
  var Danger2 = (
    /* Danger */
    compose(Button_stories_exports, "Danger")
  );
  var Sizes2 = (
    /* Sizes */
    compose(Button_stories_exports, "Sizes")
  );
  var WithIcons2 = (
    /* With Icons */
    compose(Button_stories_exports, "WithIcons")
  );
  var Pill2 = (
    /* Pill */
    compose(Button_stories_exports, "Pill")
  );
  var AllVariants2 = (
    /* All Variants */
    compose(Button_stories_exports, "AllVariants")
  );
  return __toCommonJS(Button_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-right.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
