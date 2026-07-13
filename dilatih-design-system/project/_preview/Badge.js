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

  // .design-sync/.cache/previews/Badge.tsx
  var Badge_exports = {};
  __export(Badge_exports, {
    AllCombos: () => AllCombos2,
    SoftNavy: () => SoftNavy2,
    SolidNavy: () => SolidNavy2,
    StatusExamples: () => StatusExamples2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/Badge/Badge.stories.tsx
  var Badge_stories_exports = {};
  __export(Badge_stories_exports, {
    AllCombos: () => AllCombos,
    SoftNavy: () => SoftNavy,
    SolidNavy: () => SolidNavy,
    StatusExamples: () => StatusExamples,
    default: () => Badge_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Badge
  var ds_Badge_exports = {};
  __export(ds_Badge_exports, {
    default: () => ds_Badge_default
  });
  init_define_import_meta_env();
  __reExport(ds_Badge_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_Badge_default = g["Badge"] !== void 0 ? g["Badge"] : g;

  // src/components/Badge/Badge.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Primitives/Badge",
    component: ds_Badge_exports.Badge,
    tags: ["autodocs"],
    args: { children: "Baru" },
    argTypes: {
      tone: { control: "select", options: ["solid", "soft"] },
      color: { control: "select", options: ["navy", "success", "danger", "orange", "purple", "neutral"] }
    }
  };
  var Badge_stories_default = meta;
  var colors = ["navy", "success", "danger", "orange", "purple", "neutral"];
  var SoftNavy = { args: { tone: "soft", color: "navy", children: "Populer" } };
  var SolidNavy = { args: { tone: "solid", color: "navy", children: "Populer" } };
  var AllCombos = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-wrap items-center gap-2", children: colors.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Badge_exports.Badge, { tone: "solid", color, children: color }, `solid-${color}`)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-wrap items-center gap-2", children: colors.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Badge_exports.Badge, { tone: "soft", color, children: color }, `soft-${color}`)) })
    ] })
  };
  var StatusExamples = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Badge_exports.Badge, { tone: "soft", color: "success", children: "Aktif" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Badge_exports.Badge, { tone: "solid", color: "navy", children: "Tersertifikasi" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Badge_exports.Badge, { tone: "soft", color: "danger", children: "Kedaluwarsa" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Badge_exports.Badge, { tone: "soft", color: "orange", children: "Menunggu" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Badge_exports.Badge, { tone: "soft", color: "neutral", children: "Draf" })
    ] })
  };

  // .design-sync/.cache/previews/Badge.tsx
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
  var SoftNavy2 = (
    /* Soft Navy */
    compose(Badge_stories_exports, "SoftNavy")
  );
  var SolidNavy2 = (
    /* Solid Navy */
    compose(Badge_stories_exports, "SolidNavy")
  );
  var AllCombos2 = (
    /* All Combos */
    compose(Badge_stories_exports, "AllCombos")
  );
  var StatusExamples2 = (
    /* Status Examples */
    compose(Badge_stories_exports, "StatusExamples")
  );
  return __toCommonJS(Badge_exports);
})();
