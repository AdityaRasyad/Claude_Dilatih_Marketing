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

  // .design-sync/.cache/previews/RadioGroup.tsx
  var RadioGroup_exports = {};
  __export(RadioGroup_exports, {
    Default: () => Default2,
    Horizontal: () => Horizontal2,
    WithDisabledItem: () => WithDisabledItem2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/RadioGroup/RadioGroup.stories.tsx
  var RadioGroup_stories_exports = {};
  __export(RadioGroup_stories_exports, {
    Default: () => Default,
    Horizontal: () => Horizontal,
    WithDisabledItem: () => WithDisabledItem,
    default: () => RadioGroup_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:RadioGroup
  var ds_RadioGroup_exports = {};
  __export(ds_RadioGroup_exports, {
    default: () => ds_RadioGroup_default
  });
  init_define_import_meta_env();
  __reExport(ds_RadioGroup_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_RadioGroup_default = g["RadioGroup"] !== void 0 ? g["RadioGroup"] : g;

  // src/components/RadioGroup/RadioGroup.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Primitives/RadioGroup",
    component: ds_RadioGroup_exports.RadioGroup,
    tags: ["autodocs"]
  };
  var RadioGroup_stories_default = meta;
  var Default = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_RadioGroup_exports.RadioGroup, { defaultValue: "online", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_RadioGroup_exports.RadioGroupItem, { value: "online", label: "Kelas Online" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_RadioGroup_exports.RadioGroupItem, { value: "offline", label: "Kelas Tatap Muka" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_RadioGroup_exports.RadioGroupItem, { value: "hybrid", label: "Hybrid" })
    ] })
  };
  var WithDisabledItem = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_RadioGroup_exports.RadioGroup, { defaultValue: "bulanan", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_RadioGroup_exports.RadioGroupItem, { value: "bulanan", label: "Pembayaran Bulanan" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_RadioGroup_exports.RadioGroupItem, { value: "tahunan", label: "Pembayaran Tahunan (hemat 20%)" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_RadioGroup_exports.RadioGroupItem, { value: "korporat", label: "Paket Korporat (segera hadir)", disabled: true })
    ] })
  };
  var Horizontal = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_RadioGroup_exports.RadioGroup, { defaultValue: "ya", className: "flex-row gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_RadioGroup_exports.RadioGroupItem, { value: "ya", label: "Ya" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_RadioGroup_exports.RadioGroupItem, { value: "tidak", label: "Tidak" })
    ] })
  };

  // .design-sync/.cache/previews/RadioGroup.tsx
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
    compose(RadioGroup_stories_exports, "Default")
  );
  var WithDisabledItem2 = (
    /* With Disabled Item */
    compose(RadioGroup_stories_exports, "WithDisabledItem")
  );
  var Horizontal2 = (
    /* Horizontal */
    compose(RadioGroup_stories_exports, "Horizontal")
  );
  return __toCommonJS(RadioGroup_exports);
})();
