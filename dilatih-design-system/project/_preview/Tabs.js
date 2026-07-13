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

  // .design-sync/.cache/previews/Tabs.tsx
  var Tabs_exports = {};
  __export(Tabs_exports, {
    WorkshopDetail: () => WorkshopDetail2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/Tabs/Tabs.stories.tsx
  var Tabs_stories_exports = {};
  __export(Tabs_stories_exports, {
    WorkshopDetail: () => WorkshopDetail,
    default: () => Tabs_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Tabs
  var ds_Tabs_exports = {};
  __export(ds_Tabs_exports, {
    default: () => ds_Tabs_default
  });
  init_define_import_meta_env();
  __reExport(ds_Tabs_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_Tabs_default = g["Tabs"] !== void 0 ? g["Tabs"] : g;

  // src/components/Tabs/Tabs.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Primitives/Tabs",
    component: ds_Tabs_exports.Tabs,
    tags: ["autodocs"]
  };
  var Tabs_stories_default = meta;
  var WorkshopDetail = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[28rem]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_Tabs_exports.Tabs, { defaultValue: "ringkasan", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_Tabs_exports.TabsList, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Tabs_exports.TabsTrigger, { value: "ringkasan", children: "Ringkasan" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Tabs_exports.TabsTrigger, { value: "materi", children: "Materi" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Tabs_exports.TabsTrigger, { value: "ulasan", children: "Ulasan" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Tabs_exports.TabsContent, { value: "ringkasan", children: "Workshop K3 Umum selama 12 hari yang mempersiapkan peserta untuk sertifikasi Ahli K3 Umum dari Kemnaker RI. Dipandu instruktur bersertifikat dengan studi kasus industri nyata." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Tabs_exports.TabsContent, { value: "materi", children: "Materi mencakup peraturan perundangan K3, manajemen risiko, investigasi kecelakaan kerja, hingga audit SMK3 sesuai PP No. 50 Tahun 2012." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Tabs_exports.TabsContent, { value: "ulasan", children: '"Materinya lengkap dan instrukturnya sangat membantu. Saya lulus ujian Ahli K3 di percobaan pertama." — Budi Santoso, peserta angkatan ke-14.' })
    ] }) })
  };

  // .design-sync/.cache/previews/Tabs.tsx
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
  var WorkshopDetail2 = (
    /* Workshop Detail */
    compose(Tabs_stories_exports, "WorkshopDetail")
  );
  return __toCommonJS(Tabs_exports);
})();
