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

  // .design-sync/.cache/previews/Input.tsx
  var Input_exports = {};
  __export(Input_exports, {
    Default: () => Default2,
    Disabled: () => Disabled2,
    Error: () => Error3,
    Sizes: () => Sizes2,
    WithIcons: () => WithIcons2,
    WithValue: () => WithValue2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/Input/Input.stories.tsx
  var Input_stories_exports = {};
  __export(Input_stories_exports, {
    Default: () => Default,
    Disabled: () => Disabled,
    Error: () => Error2,
    Sizes: () => Sizes,
    WithIcons: () => WithIcons,
    WithValue: () => WithValue,
    default: () => Input_stories_default
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

  // node_modules/lucide-react/dist/esm/icons/mail.js
  init_define_import_meta_env();
  var Mail = createLucideIcon("Mail", [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/search.js
  init_define_import_meta_env();
  var Search = createLucideIcon("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/user.js
  init_define_import_meta_env();
  var User = createLucideIcon("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
  ]);

  // ds-shim:ds:Input
  var ds_Input_exports = {};
  __export(ds_Input_exports, {
    default: () => ds_Input_default
  });
  init_define_import_meta_env();
  __reExport(ds_Input_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_Input_default = g["Input"] !== void 0 ? g["Input"] : g;

  // src/components/Input/Input.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Primitives/Input",
    component: ds_Input_exports.Input,
    tags: ["autodocs"],
    args: { placeholder: "Masukkan email" },
    argTypes: {
      inputSize: { control: "select", options: ["sm", "md", "lg"] },
      state: { control: "select", options: ["default", "error"] }
    }
  };
  var Input_stories_default = meta;
  var Default = {};
  var WithValue = { args: { defaultValue: "budi@dilatih.co" } };
  var Error2 = {
    args: { state: "error", defaultValue: "email-tidak-valid", placeholder: "Masukkan email" }
  };
  var Disabled = { args: { disabled: true, placeholder: "Tidak dapat diisi" } };
  var Sizes = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex w-80 flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Input_exports.Input, { ...args, inputSize: "sm", placeholder: "Ukuran kecil" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Input_exports.Input, { ...args, inputSize: "md", placeholder: "Ukuran sedang" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Input_exports.Input, { ...args, inputSize: "lg", placeholder: "Ukuran besar" })
    ] })
  };
  var WithIcons = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex w-80 flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Input_exports.Input, { ...args, leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 18 }), placeholder: "Nama Lengkap" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Input_exports.Input, { ...args, leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }), placeholder: "Masukkan email" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Input_exports.Input, { ...args, trailingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 }), placeholder: "Cari kelas" })
    ] })
  };

  // .design-sync/.cache/previews/Input.tsx
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
    compose(Input_stories_exports, "Default")
  );
  var WithValue2 = (
    /* With Value */
    compose(Input_stories_exports, "WithValue")
  );
  var Error3 = (
    /* Error */
    compose(Input_stories_exports, "Error")
  );
  var Disabled2 = (
    /* Disabled */
    compose(Input_stories_exports, "Disabled")
  );
  var Sizes2 = (
    /* Sizes */
    compose(Input_stories_exports, "Sizes")
  );
  var WithIcons2 = (
    /* With Icons */
    compose(Input_stories_exports, "WithIcons")
  );
  return __toCommonJS(Input_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/mail.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/user.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
