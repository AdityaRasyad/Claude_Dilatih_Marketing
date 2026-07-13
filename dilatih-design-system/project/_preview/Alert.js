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

  // .design-sync/.cache/previews/Alert.tsx
  var Alert_exports = {};
  __export(Alert_exports, {
    AllVariants: () => AllVariants2,
    Danger: () => Danger2,
    Dismissable: () => Dismissable2,
    Info: () => Info2,
    Success: () => Success2,
    Warning: () => Warning2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/Alert/Alert.stories.tsx
  var Alert_stories_exports = {};
  __export(Alert_stories_exports, {
    AllVariants: () => AllVariants,
    Danger: () => Danger,
    Dismissable: () => Dismissable,
    Info: () => Info,
    Success: () => Success,
    Warning: () => Warning,
    default: () => Alert_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:Alert
  var ds_Alert_exports = {};
  __export(ds_Alert_exports, {
    default: () => ds_Alert_default
  });
  init_define_import_meta_env();
  __reExport(ds_Alert_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_Alert_default = g["Alert"] !== void 0 ? g["Alert"] : g;

  // src/components/Alert/Alert.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var meta = {
    title: "Primitives/Alert",
    component: ds_Alert_exports.Alert,
    tags: ["autodocs"],
    argTypes: {
      variant: { control: "select", options: ["info", "success", "danger", "warning"] }
    }
  };
  var Alert_stories_default = meta;
  var Info = {
    args: {
      variant: "info",
      title: "Kelas akan segera dimulai",
      children: "Sesi pelatihan ISO 9001 dijadwalkan pada 25 Juni 2026 pukul 09.00 WIB."
    }
  };
  var Success = {
    args: {
      variant: "success",
      title: "Sertifikat berhasil diterbitkan",
      children: "Sertifikat kelulusan Anda sudah dapat diunduh dari halaman profil."
    }
  };
  var Danger = {
    args: {
      variant: "danger",
      title: "Pembayaran gagal",
      children: "Transaksi tidak dapat diproses. Silakan periksa metode pembayaran Anda."
    }
  };
  var Warning = {
    args: {
      variant: "warning",
      title: "Sertifikat akan kedaluwarsa",
      children: "Masa berlaku sertifikat K3 Anda berakhir dalam 14 hari. Segera lakukan perpanjangan."
    }
  };
  var Dismissable = {
    args: {
      variant: "info",
      title: "Lengkapi profil Anda",
      children: "Tambahkan nomor telepon untuk menerima pengingat jadwal pelatihan.",
      onClose: () => {
      }
    }
  };
  var AllVariants = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex w-[28rem] max-w-full flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Alert_exports.Alert, { variant: "info", title: "Informasi", children: "Pendaftaran batch berikutnya dibuka mulai 1 Juli 2026." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Alert_exports.Alert, { variant: "success", title: "Berhasil", children: "Anda telah terdaftar pada workshop Manajemen Mutu." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Alert_exports.Alert, { variant: "warning", title: "Perhatian", children: "Kuota kelas tersisa 3 peserta lagi." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Alert_exports.Alert, { variant: "danger", title: "Gagal", children: "Kode voucher tidak valid atau sudah digunakan." })
    ] })
  };

  // .design-sync/.cache/previews/Alert.tsx
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
  var Info2 = (
    /* Info */
    compose(Alert_stories_exports, "Info")
  );
  var Success2 = (
    /* Success */
    compose(Alert_stories_exports, "Success")
  );
  var Danger2 = (
    /* Danger */
    compose(Alert_stories_exports, "Danger")
  );
  var Warning2 = (
    /* Warning */
    compose(Alert_stories_exports, "Warning")
  );
  var Dismissable2 = (
    /* Dismissable */
    compose(Alert_stories_exports, "Dismissable")
  );
  var AllVariants2 = (
    /* All Variants */
    compose(Alert_stories_exports, "AllVariants")
  );
  return __toCommonJS(Alert_exports);
})();
