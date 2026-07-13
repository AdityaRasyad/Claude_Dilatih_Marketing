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

  // .design-sync/.cache/previews/FormField.tsx
  var FormField_exports = {};
  __export(FormField_exports, {
    Default: () => Default2,
    Required: () => Required2,
    WithError: () => WithError2,
    WithHelperText: () => WithHelperText2,
    WithTextarea: () => WithTextarea2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/FormField/FormField.stories.tsx
  var FormField_stories_exports = {};
  __export(FormField_stories_exports, {
    Default: () => Default,
    Required: () => Required,
    WithError: () => WithError,
    WithHelperText: () => WithHelperText,
    WithTextarea: () => WithTextarea,
    default: () => FormField_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:FormField
  var ds_FormField_exports = {};
  __export(ds_FormField_exports, {
    default: () => ds_FormField_default
  });
  init_define_import_meta_env();
  __reExport(ds_FormField_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_FormField_default = g["FormField"] !== void 0 ? g["FormField"] : g;

  // ds-shim:ds:Input
  var ds_Input_exports = {};
  __export(ds_Input_exports, {
    default: () => ds_Input_default
  });
  init_define_import_meta_env();
  __reExport(ds_Input_exports, __toESM(require_ds_raw()));
  var g2 = window.DilatihDS;
  var ds_Input_default = g2["Input"] !== void 0 ? g2["Input"] : g2;

  // ds-shim:ds:Textarea
  var ds_Textarea_exports = {};
  __export(ds_Textarea_exports, {
    default: () => ds_Textarea_default
  });
  init_define_import_meta_env();
  __reExport(ds_Textarea_exports, __toESM(require_ds_raw()));
  var g3 = window.DilatihDS;
  var ds_Textarea_default = g3["Textarea"] !== void 0 ? g3["Textarea"] : g3;

  // src/components/FormField/FormField.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Primitives/FormField",
    component: ds_FormField_exports.FormField,
    tags: ["autodocs"]
  };
  var FormField_stories_default = meta;
  var Default = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-80", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_FormField_exports.FormField, { label: "Nama Lengkap", htmlFor: "nama", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Input_exports.Input, { id: "nama", placeholder: "Masukkan nama lengkap" }) }) })
  };
  var Required = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-80", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_FormField_exports.FormField, { label: "Email", htmlFor: "email", required: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Input_exports.Input, { id: "email", type: "email", placeholder: "Masukkan email" }) }) })
  };
  var WithHelperText = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-80", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_FormField_exports.FormField,
      {
        label: "Kata Sandi",
        htmlFor: "sandi",
        required: true,
        helperText: "Minimal 8 karakter, kombinasi huruf dan angka.",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Input_exports.Input, { id: "sandi", type: "password", placeholder: "Masukkan kata sandi" })
      }
    ) })
  };
  var WithError = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-80", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_FormField_exports.FormField,
      {
        label: "Email",
        htmlFor: "email-error",
        required: true,
        error: "Format email tidak valid.",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Input_exports.Input, { id: "email-error", state: "error", defaultValue: "budi.dilatih" })
      }
    ) })
  };
  var WithTextarea = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-96", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_FormField_exports.FormField,
      {
        label: "Pesan",
        htmlFor: "pesan",
        helperText: "Ceritakan kebutuhan pelatihan tim Anda.",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Textarea_exports.Textarea, { id: "pesan", placeholder: "Tuliskan pesan Anda di sini" })
      }
    ) })
  };

  // .design-sync/.cache/previews/FormField.tsx
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
    compose(FormField_stories_exports, "Default")
  );
  var Required2 = (
    /* Required */
    compose(FormField_stories_exports, "Required")
  );
  var WithHelperText2 = (
    /* With Helper Text */
    compose(FormField_stories_exports, "WithHelperText")
  );
  var WithError2 = (
    /* With Error */
    compose(FormField_stories_exports, "WithError")
  );
  var WithTextarea2 = (
    /* With Textarea */
    compose(FormField_stories_exports, "WithTextarea")
  );
  return __toCommonJS(FormField_exports);
})();
