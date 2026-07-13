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

  // .design-sync/.cache/previews/Card.tsx
  var Card_exports = {};
  __export(Card_exports, {
    Basic: () => Basic2,
    Elevations: () => Elevations2,
    Interactive: () => Interactive2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/Card/Card.stories.tsx
  var Card_stories_exports = {};
  __export(Card_stories_exports, {
    Basic: () => Basic,
    Elevations: () => Elevations,
    Interactive: () => Interactive,
    default: () => Card_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Card
  var ds_Card_exports = {};
  __export(ds_Card_exports, {
    default: () => ds_Card_default
  });
  init_define_import_meta_env();
  __reExport(ds_Card_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_Card_default = g["Card"] !== void 0 ? g["Card"] : g;

  // ds-shim:ds:Button
  var ds_Button_exports = {};
  __export(ds_Button_exports, {
    default: () => ds_Button_default
  });
  init_define_import_meta_env();
  __reExport(ds_Button_exports, __toESM(require_ds_raw()));
  var g2 = window.DilatihDS;
  var ds_Button_default = g2["Button"] !== void 0 ? g2["Button"] : g2;

  // src/components/Card/Card.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Primitives/Card",
    component: ds_Card_exports.Card,
    tags: ["autodocs"]
  };
  var Card_stories_default = meta;
  var Basic = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_Card_exports.Card, { className: "max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_Card_exports.CardHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.CardTitle, { children: "Sertifikasi BNSP K3 Umum" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.CardDescription, { children: "Pelatihan tersertifikasi resmi negara" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.CardContent, { children: "Tingkatkan kompetensi keselamatan kerja Anda dengan program pelatihan bersertifikat BNSP." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_Card_exports.CardFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { size: "sm", children: "Daftar" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Button_exports.Button, { size: "sm", variant: "ghost", children: "Pelajari" })
      ] })
    ] })
  };
  var Elevations = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.Card, { elevation: "flat", className: "w-48", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.CardTitle, { children: "Flat" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.Card, { elevation: "raised", className: "w-48", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.CardTitle, { children: "Raised" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.Card, { elevation: "elevated", className: "w-48", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.CardTitle, { children: "Elevated" }) })
    ] })
  };
  var Interactive = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_Card_exports.Card, { interactive: true, className: "max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.CardTitle, { children: "Hover saya" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Card_exports.CardDescription, { children: "Kartu yang dapat diklik dengan elevasi pada hover." })
    ] })
  };

  // .design-sync/.cache/previews/Card.tsx
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
  var Basic2 = (
    /* Basic */
    compose(Card_stories_exports, "Basic")
  );
  var Elevations2 = (
    /* Elevations */
    compose(Card_stories_exports, "Elevations")
  );
  var Interactive2 = (
    /* Interactive */
    compose(Card_stories_exports, "Interactive")
  );
  return __toCommonJS(Card_exports);
})();
