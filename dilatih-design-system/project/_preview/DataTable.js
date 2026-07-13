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

  // .design-sync/.cache/previews/DataTable.tsx
  var DataTable_exports = {};
  __export(DataTable_exports, {
    Clickable: () => Clickable2,
    Default: () => Default2,
    Empty: () => Empty2
  });
  init_define_import_meta_env();
  var React = __toESM(require_react_shim(), 1);

  // src/components/DataTable/DataTable.stories.tsx
  var DataTable_stories_exports = {};
  __export(DataTable_stories_exports, {
    Clickable: () => Clickable,
    Default: () => Default,
    Empty: () => Empty,
    default: () => DataTable_stories_default
  });
  init_define_import_meta_env();

  // ds-shim:ds:DataTable
  var ds_DataTable_exports = {};
  __export(ds_DataTable_exports, {
    default: () => ds_DataTable_default
  });
  init_define_import_meta_env();
  __reExport(ds_DataTable_exports, __toESM(require_ds_raw()));
  var g = window.DilatihDS;
  var ds_DataTable_default = g["DataTable"] !== void 0 ? g["DataTable"] : g;

  // ds-shim:ds:Badge
  var ds_Badge_exports = {};
  __export(ds_Badge_exports, {
    default: () => ds_Badge_default
  });
  init_define_import_meta_env();
  __reExport(ds_Badge_exports, __toESM(require_ds_raw()));
  var g2 = window.DilatihDS;
  var ds_Badge_default = g2["Badge"] !== void 0 ? g2["Badge"] : g2;

  // src/components/DataTable/DataTable.stories.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var data = [
    {
      id: 1,
      nama: "Budi Santoso",
      email: "budi.santoso@gmail.com",
      program: "K3 Umum",
      status: "Aktif",
      tanggal: "12 Jun 2026"
    },
    {
      id: 2,
      nama: "Siti Nurhaliza",
      email: "siti.n@gmail.com",
      program: "Ahli K3 Listrik",
      status: "Lunas",
      tanggal: "10 Jun 2026"
    },
    {
      id: 3,
      nama: "Agus Pratama",
      email: "agus.pratama@yahoo.com",
      program: "Petugas P3K",
      status: "Menunggu",
      tanggal: "09 Jun 2026"
    },
    {
      id: 4,
      nama: "Dewi Lestari",
      email: "dewi.lestari@gmail.com",
      program: "Digital Marketing",
      status: "Selesai",
      tanggal: "05 Jun 2026"
    },
    {
      id: 5,
      nama: "Rizki Maulana",
      email: "rizki.m@outlook.com",
      program: "Scaffolding",
      status: "Aktif",
      tanggal: "03 Jun 2026"
    }
  ];
  var statusColor = {
    Aktif: "navy",
    Lunas: "success",
    Menunggu: "orange",
    Selesai: "neutral"
  };
  var columns = [
    { key: "nama", header: "Nama", render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium", children: r.nama }) },
    { key: "email", header: "Email", render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-text-subtle", children: r.email }) },
    { key: "program", header: "Program" },
    {
      key: "status",
      header: "Status",
      render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_Badge_exports.Badge, { color: statusColor[r.status], children: r.status })
    },
    { key: "tanggal", header: "Tanggal", align: "right" }
  ];
  var meta = {
    title: "Admin/DataTable",
    component: ds_DataTable_exports.DataTable,
    tags: ["autodocs"],
    decorators: [
      (Story) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-surface-sunken p-8", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}) })
    ]
  };
  var DataTable_stories_default = meta;
  var Default = {
    args: { columns, data }
  };
  var Clickable = {
    args: {
      columns,
      data,
      onRowClick: (row) => alert(`Membuka detail peserta: ${row.nama}`)
    }
  };
  var Empty = {
    args: { columns, data: [] }
  };

  // .design-sync/.cache/previews/DataTable.tsx
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
    compose(DataTable_stories_exports, "Default")
  );
  var Clickable2 = (
    /* Clickable */
    compose(DataTable_stories_exports, "Clickable")
  );
  var Empty2 = (
    /* Empty */
    compose(DataTable_stories_exports, "Empty")
  );
  return __toCommonJS(DataTable_exports);
})();
