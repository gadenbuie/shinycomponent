"use strict";
(() => {
  // src/datagrid/styles.scss
  var styles_default = `
:root,
:host {
  --shiny-datagrid-font-size: 0.9em;
  --shiny-datagrid-padding: 0.3em 0.5em;
  --shiny-datagrid-grid-header-bgcolor: #eee;
  --shiny-datagrid-grid-header-gridlines-color: #ccc;
  --shiny-datagrid-grid-header-gridlines-style: solid;
  --shiny-datagrid-grid-gridlines-color: #ccc;
  --shiny-datagrid-grid-gridlines-style: solid;
  --shiny-datagrid-table-header-bottom-border: 1px solid black;
  --shiny-datagrid-grid-body-hover-bgcolor: var(
    --shiny-datagrid-grid-header-bgcolor
  );
  --shiny-datagrid-grid-body-selected-bgcolor: var(--bs-primary);
  --shiny-datagrid-grid-body-selected-color: var(--bs-light);
}

.shiny-data-grid svg.sort-arrow {
  display: inline-block;
  width: 0.85em;
  height: 0.85em;
  margin-bottom: 0.15em;
}

.shiny-data-grid > table {
  border-collapse: separate;
  border-spacing: 0;
}
.shiny-data-grid > table > thead {
  position: sticky;
  top: 0;
}
.shiny-data-grid > table > thead > th {
  white-space: nowrap;
}

.shiny-data-grid.shiny-data-grid-table > table > thead > tr:last-child > th {
  border-bottom: var(--shiny-datagrid-table-header-bottom-border);
}

/*
 *
 * # GRID STYLES
 *
 */
.shiny-data-grid.shiny-data-grid-grid > table {
  font-size: var(--shiny-datagrid-font-size);
}
.shiny-data-grid.shiny-data-grid-grid > table > thead > tr > th {
  background-color: var(--shiny-datagrid-grid-header-bgcolor);
  padding: var(--shiny-datagrid-padding);
}
.shiny-data-grid.shiny-data-grid-grid > table > tbody > tr:hover {
  --shiny-datagrid-grid-gridlines-color: inherit;
  background-color: var(--shiny-datagrid-grid-body-hover-bgcolor);
}
.shiny-data-grid.shiny-data-grid-grid > table > tbody > tr.selected {
  --shiny-datagrid-grid-gridlines-color: var(
    --shiny-datagrid-grid-body-selected-bgcolor
  );
  background-color: var(--shiny-datagrid-grid-body-selected-bgcolor);
  color: var(--shiny-datagrid-grid-body-selected-color);
}
.shiny-data-grid.shiny-data-grid-grid > table > tbody > tr > td {
  padding: var(--shiny-datagrid-padding);
}

/* ## Grid borders */
.shiny-data-grid.shiny-data-grid-grid > table {
  border-collapse: separate;
}
.shiny-data-grid.shiny-data-grid-grid > table > thead > tr:first-child > th {
  border-top-style: var(--shiny-datagrid-grid-gridlines-style);
}
.shiny-data-grid.shiny-data-grid-grid > table > thead > tr > th {
  border: 1px var(--shiny-datagrid-grid-gridlines-style) var(--shiny-datagrid-grid-header-gridlines-color);
  border-top-style: none;
  border-left-style: none;
}
.shiny-data-grid.shiny-data-grid-grid > table > thead > tr > th:first-child {
  border-left-style: var(--shiny-datagrid-grid-gridlines-style);
}
.shiny-data-grid.shiny-data-grid-grid > table > tbody > tr > td {
  border: 1px var(--shiny-datagrid-grid-gridlines-style) var(--shiny-datagrid-grid-gridlines-color);
  border-top-style: none;
  border-left-style: none;
}
.shiny-data-grid.shiny-data-grid-grid > table > tbody > tr > td:first-child {
  border-left-style: var(--shiny-datagrid-grid-gridlines-style);
}
.shiny-data-grid.shiny-data-grid-grid.scrolling {
  border: var(--shiny-datagrid-grid-gridlines-style) var(--shiny-datagrid-grid-header-gridlines-color);
}
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > thead > tr:first-child > th {
  border-top-style: none;
}
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > tbody > tr:last-child > td {
  border-bottom-style: none;
}
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > thead > tr > th:first-child,
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > tbody > tr > td:first-child {
  border-left-style: none;
}
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > thead > tr > th:last-child,
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > tbody > tr > td:last-child {
  border-right-style: none;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL3dpbnN0b24vRHJvcGJveC9Qcm9qZWN0cy9zaGlueWNvbXBvbmVudC9qcy9zcmMvZGF0YWdyaWQiLCJzb3VyY2VzIjpbInN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7RUFFRTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUVBO0VBRUE7QUFBQTtBQUFBO0VBR0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBSUE7RUFDRTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7QUFDQTtFQUNFOzs7QUFRSjtFQUNFOzs7QUFLTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0U7RUFDRTs7QUFFQTtFQUNFO0VBQ0E7O0FBSUE7RUFDRTtFQUNBOztBQUdGO0VBQ0U7QUFBQTtBQUFBO0VBR0E7RUFDQTs7QUFHRjtFQUNFOzs7QUFNUjtBQUdFO0VBQ0U7O0FBSUk7RUFDRTs7QUFHRjtFQUNFO0VBRUE7RUFDQTs7QUFFQTtFQUNFOztBQU1SO0VBQ0U7RUFFQTtFQUNBOztBQUVBO0VBQ0U7O0FBS047RUFDRTs7QUFHQTtFQUNFOztBQUVGO0VBQ0U7O0FBRUY7QUFBQTtFQUVFOztBQUVGO0FBQUE7RUFFRSIsInNvdXJjZXNDb250ZW50IjpbIjpyb290LFxuOmhvc3Qge1xuICAtLXNoaW55LWRhdGFncmlkLWZvbnQtc2l6ZTogMC45ZW07XG4gIC0tc2hpbnktZGF0YWdyaWQtcGFkZGluZzogMC4zZW0gMC41ZW07XG5cbiAgLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWhlYWRlci1iZ2NvbG9yOiAjZWVlO1xuICAtLXNoaW55LWRhdGFncmlkLWdyaWQtaGVhZGVyLWdyaWRsaW5lcy1jb2xvcjogI2NjYztcbiAgLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWhlYWRlci1ncmlkbGluZXMtc3R5bGU6IHNvbGlkO1xuXG4gIC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtY29sb3I6ICNjY2M7XG4gIC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtc3R5bGU6IHNvbGlkO1xuXG4gIC0tc2hpbnktZGF0YWdyaWQtdGFibGUtaGVhZGVyLWJvdHRvbS1ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAtLXNoaW55LWRhdGFncmlkLWdyaWQtYm9keS1ob3Zlci1iZ2NvbG9yOiB2YXIoXG4gICAgLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWhlYWRlci1iZ2NvbG9yXG4gICk7XG4gIC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ib2R5LXNlbGVjdGVkLWJnY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xuICAtLXNoaW55LWRhdGFncmlkLWdyaWQtYm9keS1zZWxlY3RlZC1jb2xvcjogdmFyKC0tYnMtbGlnaHQpO1xufVxuXG4uc2hpbnktZGF0YS1ncmlkIHN2Zy5zb3J0LWFycm93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMC44NWVtO1xuICBoZWlnaHQ6IDAuODVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xNWVtO1xufVxuXG4uc2hpbnktZGF0YS1ncmlkIHtcbiAgPiB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcblxuICAgID4gdGhlYWQge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHRvcDogMDtcbiAgICAgID4gdGgge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2hpbnktZGF0YS1ncmlkLnNoaW55LWRhdGEtZ3JpZC10YWJsZSB7XG4gID4gdGFibGUge1xuICAgID4gdGhlYWQgPiB0cjpsYXN0LWNoaWxkID4gdGgge1xuICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2hpbnktZGF0YWdyaWQtdGFibGUtaGVhZGVyLWJvdHRvbS1ib3JkZXIpO1xuICAgIH1cbiAgfVxufVxuXG4vKlxuICpcbiAqICMgR1JJRCBTVFlMRVNcbiAqXG4gKi9cblxuLnNoaW55LWRhdGEtZ3JpZC5zaGlueS1kYXRhLWdyaWQtZ3JpZCB7XG4gID4gdGFibGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2hpbnktZGF0YWdyaWQtZm9udC1zaXplKTtcblxuICAgID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaW55LWRhdGFncmlkLWdyaWQtaGVhZGVyLWJnY29sb3IpO1xuICAgICAgcGFkZGluZzogdmFyKC0tc2hpbnktZGF0YWdyaWQtcGFkZGluZyk7XG4gICAgfVxuXG4gICAgPiB0Ym9keSA+IHRyIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAtLXNoaW55LWRhdGFncmlkLWdyaWQtZ3JpZGxpbmVzLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWJvZHktaG92ZXItYmdjb2xvcik7XG4gICAgICB9XG5cbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAtLXNoaW55LWRhdGFncmlkLWdyaWQtZ3JpZGxpbmVzLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWJvZHktc2VsZWN0ZWQtYmdjb2xvclxuICAgICAgICApO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWJvZHktc2VsZWN0ZWQtYmdjb2xvcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWJvZHktc2VsZWN0ZWQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA+IHRkIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2hpbnktZGF0YWdyaWQtcGFkZGluZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qICMjIEdyaWQgYm9yZGVycyAqL1xuXG4uc2hpbnktZGF0YS1ncmlkLnNoaW55LWRhdGEtZ3JpZC1ncmlkIHtcbiAgPiB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcblxuICAgID4gdGhlYWQge1xuICAgICAgPiB0ciB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogdmFyKC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtc3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggdmFyKC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtc3R5bGUpXG4gICAgICAgICAgICB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWhlYWRlci1ncmlkbGluZXMtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWdyaWRsaW5lcy1zdHlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgPiB0Ym9keSA+IHRyID4gdGQge1xuICAgICAgYm9yZGVyOiAxcHggdmFyKC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtc3R5bGUpXG4gICAgICAgIHZhcigtLXNoaW55LWRhdGFncmlkLWdyaWQtZ3JpZGxpbmVzLWNvbG9yKTtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWdyaWRsaW5lcy1zdHlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5zY3JvbGxpbmcge1xuICAgIGJvcmRlcjogdmFyKC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtc3R5bGUpXG4gICAgICB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWhlYWRlci1ncmlkbGluZXMtY29sb3IpO1xuXG4gICAgPiB0YWJsZSA+IHRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCB7XG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICAgIH1cbiAgICA+IHRhYmxlID4gdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGQge1xuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgPiB0YWJsZSA+IHRoZWFkID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcbiAgICA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuICAgIH1cbiAgICA+IHRhYmxlID4gdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4gICAgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var v = Array.isArray;
  function h(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return d(l3, f3, t3, o3, null);
  }
  function d(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function _() {
    return { current: null };
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function g(n2, l3) {
    if (null == l3)
      return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? g(n2) : null;
  }
  function m(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return m(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, l3, u3, i3, o3, r3, e3, c3;
    for (t.sort(f); n2 = t.shift(); )
      n2.__d && (l3 = t.length, i3 = void 0, o3 = void 0, e3 = (r3 = (u3 = n2).__v).__e, (c3 = u3.__P) && (i3 = [], (o3 = h({}, r3)).__v = r3.__v + 1, L(c3, r3, o3, u3.__n, void 0 !== c3.ownerSVGElement, null != r3.__h ? [e3] : null, i3, null == e3 ? g(r3) : e3, r3.__h), M(i3, r3), r3.__e != e3 && m(r3)), t.length > l3 && t.sort(f));
    x.__r = 0;
  }
  function P(n2, l3, u3, i3, t3, o3, r3, f3, e3, a3) {
    var h3, p3, y3, _3, b3, m3, w4, x4 = i3 && i3.__k || s, P3 = x4.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (_3 = u3.__k[h3] = null == (_3 = l3[h3]) || "boolean" == typeof _3 || "function" == typeof _3 ? null : "string" == typeof _3 || "number" == typeof _3 || "bigint" == typeof _3 ? d(null, _3, null, null, _3) : v(_3) ? d(k, { children: _3 }, null, null, null) : _3.__b > 0 ? d(_3.type, _3.props, _3.key, _3.ref ? _3.ref : null, _3.__v) : _3)) {
        if (_3.__ = u3, _3.__b = u3.__b + 1, null === (y3 = x4[h3]) || y3 && _3.key == y3.key && _3.type === y3.type)
          x4[h3] = void 0;
        else
          for (p3 = 0; p3 < P3; p3++) {
            if ((y3 = x4[p3]) && _3.key == y3.key && _3.type === y3.type) {
              x4[p3] = void 0;
              break;
            }
            y3 = null;
          }
        L(n2, _3, y3 = y3 || c, t3, o3, r3, f3, e3, a3), b3 = _3.__e, (p3 = _3.ref) && y3.ref != p3 && (w4 || (w4 = []), y3.ref && w4.push(y3.ref, null, _3), w4.push(p3, _3.__c || b3, _3)), null != b3 ? (null == m3 && (m3 = b3), "function" == typeof _3.type && _3.__k === y3.__k ? _3.__d = e3 = C(_3, e3, n2) : e3 = $2(n2, _3, y3, x4, b3, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y3.__e == e3 && e3.parentNode != n2 && (e3 = g(y3));
      }
    for (u3.__e = m3, h3 = P3; h3--; )
      null != x4[h3] && ("function" == typeof u3.type && null != x4[h3].__e && x4[h3].__e == u3.__d && (u3.__d = A(i3).nextSibling), q(x4[h3], x4[h3]));
    if (w4)
      for (h3 = 0; h3 < w4.length; h3++)
        O(w4[h3], w4[++h3], w4[++h3]);
  }
  function C(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? C(i3, l3, u3) : $2(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function S(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (v(n2) ? n2.some(function(n3) {
      S(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function $2(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o3 || null == t3.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function A(n2) {
    var l3, u3, i3;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l3 = n2.__k.length - 1; l3 >= 0; l3--)
        if ((u3 = n2.__k[l3]) && (i3 = A(u3)))
          return i3;
    }
    return null;
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || T(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || T(n2, o3, l3[o3], u3[o3], i3);
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? z : j, o3) : n2.removeEventListener(l3, o3 ? z : j, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var s3, a3, p3, y3, d3, _3, g4, m3, w4, x4, C3, S2, $4, A4, H3, I3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if ("function" == typeof I3) {
          if (m3 = u3.props, w4 = (s3 = I3.contextType) && t3[s3.__c], x4 = s3 ? w4 ? w4.props.value : s3.__ : t3, i3.__c ? g4 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in I3 && I3.prototype.render ? u3.__c = a3 = new I3(m3, x4) : (u3.__c = a3 = new b(m3, x4), a3.constructor = I3, a3.render = B), w4 && w4.sub(a3), a3.props = m3, a3.state || (a3.state = {}), a3.context = x4, a3.__n = t3, p3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != I3.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, I3.getDerivedStateFromProps(m3, a3.__s))), y3 = a3.props, d3 = a3.state, a3.__v = u3, p3)
            null == I3.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
          else {
            if (null == I3.getDerivedStateFromProps && m3 !== y3 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(m3, x4), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(m3, a3.__s, x4) || u3.__v === i3.__v) {
              for (u3.__v !== i3.__v && (a3.props = m3, a3.state = a3.__s, a3.__d = false), a3.__e = false, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), C3 = 0; C3 < a3._sb.length; C3++)
                a3.__h.push(a3._sb[C3]);
              a3._sb = [], a3.__h.length && f3.push(a3);
              break n;
            }
            null != a3.componentWillUpdate && a3.componentWillUpdate(m3, a3.__s, x4), null != a3.componentDidUpdate && a3.__h.push(function() {
              a3.componentDidUpdate(y3, d3, _3);
            });
          }
          if (a3.context = x4, a3.props = m3, a3.__P = n2, S2 = l.__r, $4 = 0, "prototype" in I3 && I3.prototype.render) {
            for (a3.state = a3.__s, a3.__d = false, S2 && S2(u3), s3 = a3.render(a3.props, a3.state, a3.context), A4 = 0; A4 < a3._sb.length; A4++)
              a3.__h.push(a3._sb[A4]);
            a3._sb = [];
          } else
            do {
              a3.__d = false, S2 && S2(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
            } while (a3.__d && ++$4 < 25);
          a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), p3 || null == a3.getSnapshotBeforeUpdate || (_3 = a3.getSnapshotBeforeUpdate(y3, d3)), P(n2, v(H3 = null != s3 && s3.type === k && null == s3.key ? s3.props.children : s3) ? H3 : [H3], u3, i3, t3, o3, r3, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), g4 && (a3.__E = a3.__ = null), a3.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = N(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function M(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(l3, u3, i3, t3, o3, r3, f3, e3) {
    var s3, a3, h3, y3 = i3.props, d3 = u3.props, _3 = u3.type, k4 = 0;
    if ("svg" === _3 && (o3 = true), null != r3) {
      for (; k4 < r3.length; k4++)
        if ((s3 = r3[k4]) && "setAttribute" in s3 == !!_3 && (_3 ? s3.localName === _3 : 3 === s3.nodeType)) {
          l3 = s3, r3[k4] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === _3)
        return document.createTextNode(d3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", _3) : document.createElement(_3, d3.is && d3), r3 = null, e3 = false;
    }
    if (null === _3)
      y3 === d3 || e3 && l3.data === d3 || (l3.data = d3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), a3 = (y3 = i3.props || c).dangerouslySetInnerHTML, h3 = d3.dangerouslySetInnerHTML, !e3) {
        if (null != r3)
          for (y3 = {}, k4 = 0; k4 < l3.attributes.length; k4++)
            y3[l3.attributes[k4].name] = l3.attributes[k4].value;
        (h3 || a3) && (h3 && (a3 && h3.__html == a3.__html || h3.__html === l3.innerHTML) || (l3.innerHTML = h3 && h3.__html || ""));
      }
      if (H(l3, d3, y3, o3, e3), h3)
        u3.__k = [];
      else if (P(l3, v(k4 = u3.props.children) ? k4 : [k4], u3, i3, t3, o3 && "foreignObject" !== _3, r3, f3, r3 ? r3[0] : i3.__k && g(i3, 0), e3), null != r3)
        for (k4 = r3.length; k4--; )
          null != r3[k4] && p(r3[k4]);
      e3 || ("value" in d3 && void 0 !== (k4 = d3.value) && (k4 !== l3.value || "progress" === _3 && !k4 || "option" === _3 && k4 !== y3.value) && T(l3, "value", k4, y3.value, false), "checked" in d3 && void 0 !== (k4 = d3.checked) && k4 !== l3.checked && T(l3, "checked", k4, y3.checked, false));
    }
    return l3;
  }
  function O(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function q(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || O(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && q(t3[o3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function D(u3, i3, t3) {
    var o3, r3, f3;
    l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], L(i3, u3 = (!o3 && t3 || i3).__k = y(k, null, [u3]), r3 || c, c, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), M(f3, u3);
  }
  function E(n2, l3) {
    D(n2, l3, E);
  }
  function F(l3, u3, i3) {
    var t3, o3, r3, f3, e3 = h({}, l3.props);
    for (r3 in l3.type && l3.type.defaultProps && (f3 = l3.type.defaultProps), u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : e3[r3] = void 0 === u3[r3] && void 0 !== f3 ? f3[r3] : u3[r3];
    return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), d(l3.type, e3, t3 || l3.key, o3 || l3.ref, null);
  }
  function G(n2, l3) {
    var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(function(n5) {
          n5.__e = true, w(n5);
        });
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  n = s.slice, l = { __e: function(n2, l3, u3, i3) {
    for (var t3, o3, r3; l3 = l3.__; )
      if ((t3 = l3.__c) && !t3.__)
        try {
          if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
            return t3.__E = t3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, b.prototype.setState = function(n2, l3) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), w(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
  }, b.prototype.render = k, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, x.__r = 0, e = 0;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = [];
  var e2 = l.__b;
  var a2 = l.__r;
  var v2 = l.diffed;
  var l2 = l.__c;
  var m2 = l.unmount;
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function p2(u3, i3) {
    var o3 = d2(t2++, 3);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__H.__h.push(o3));
  }
  function y2(u3, i3) {
    var o3 = d2(t2++, 4);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__h.push(o3));
  }
  function _2(n2) {
    return o2 = 5, F2(function() {
      return { current: n2 };
    }, []);
  }
  function A2(n2, t3, r3) {
    o2 = 6, y2(function() {
      return "function" == typeof n2 ? (n2(t3()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t3(), function() {
        return n2.current = null;
      }) : void 0;
    }, null == r3 ? r3 : r3.concat(n2));
  }
  function F2(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F2(function() {
      return n2;
    }, t3);
  }
  function q2(n2) {
    var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function x2(t3, r3) {
    l.useDebugValue && l.useDebugValue(r3 ? r3(t3) : t3);
  }
  function V() {
    var n2 = d2(t2++, 11);
    if (!n2.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; )
        u3 = u3.__;
      var i3 = u3.__m || (u3.__m = [0, 0]);
      n2.__ = "P" + i3[0] + "-" + i3[1]++;
    }
    return n2.__;
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  l.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, l.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
    })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u2 = r2;
  }, l.diffed = function(t3) {
    v2 && v2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
    })), u2 = r2 = null;
  }, l.__c = function(t3, r3) {
    r3.some(function(t4) {
      try {
        t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || w2(n2);
        });
      } catch (u3) {
        r3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r3 = [], l.__e(u3, t4.__v);
      }
    }), l2 && l2(t3, r3);
  }, l.unmount = function(t3) {
    m2 && m2(t3);
    var r3, u3 = t3.__c;
    u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
      try {
        k2(n2);
      } catch (n3) {
        r3 = n3;
      }
    }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
  };
  var g2 = "function" == typeof requestAnimationFrame;
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E2(n2, t3) {
    return n2 === t3 && (0 !== n2 || 1 / n2 == 1 / t3) || n2 != n2 && t3 != t3;
  }
  function w3(n2) {
    this.props = n2;
  }
  function x3(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref, r4 = t3 == n3.ref;
      return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : C2(this.props, n3);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = r3, y(n2, e4);
    }
    return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
  }
  (w3.prototype = new b()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
    return C2(this.props, n2) || C2(this.state, t3);
  };
  var R = l.__b;
  l.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
  };
  var N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function k3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = N2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  var A3 = function(n2, t3) {
    return null == n2 ? null : S(S(n2).map(t3));
  };
  var O2 = { map: A3, forEach: A3, count: function(n2) {
    return n2 ? S(n2).length : 0;
  }, only: function(n2) {
    var t3 = S(n2);
    if (1 !== t3.length)
      throw "Children.only";
    return t3[0];
  }, toArray: S };
  var T3 = l.__e;
  l.__e = function(n2, t3, e3, r3) {
    if (n2.then) {
      for (var u3, o3 = t3; o3 = o3.__; )
        if ((u3 = o3.__c) && u3.__c)
          return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
    }
    T3(n2, t3, e3, r3);
  };
  var I2 = l.unmount;
  function L2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L2(n3, t3, e3);
    })), n2;
  }
  function U(n2, t3, e3) {
    return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return U(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function D2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F3(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function M2(n2) {
    var e3, r3, u3;
    function o3(o4) {
      if (e3 || (e3 = n2()).then(function(n3) {
        r3 = n3.default || n3;
      }, function(n3) {
        u3 = n3;
      }), u3)
        throw u3;
      if (!r3)
        throw e3;
      return y(r3, o4);
    }
    return o3.displayName = "Lazy", o3.__f = true, o3;
  }
  function V2() {
    this.u = null, this.o = null;
  }
  l.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), I2 && I2(n2);
  }, (D2.prototype = new b()).__c = function(n2, t3) {
    var e3 = t3.__c, r3 = this;
    null == r3.t && (r3.t = []), r3.t.push(e3);
    var u3 = F3(r3.__v), o3 = false, i3 = function() {
      o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
    };
    e3.__R = i3;
    var l3 = function() {
      if (!--r3.__u) {
        if (r3.state.__a) {
          var n3 = r3.state.__a;
          r3.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
          t4.forceUpdate();
      }
    }, c3 = true === t3.__h;
    r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
  }, D2.prototype.componentWillUnmount = function() {
    this.t = [];
  }, D2.prototype.render = function(n2, e3) {
    if (this.__b) {
      if (this.__v.__k) {
        var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
        this.__v.__k[0] = L2(this.__b, r3, o3.__O = o3.__P);
      }
      this.__b = null;
    }
    var i3 = e3.__a && y(k, null, n2.fallback);
    return i3 && (i3.__h = null), [y(k, null, e3.__a ? null : n2.children), i3];
  };
  var W = function(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
      for (e3 = n2.u; e3; ) {
        for (; e3.length > 3; )
          e3.pop()();
        if (e3[1] < e3[0])
          break;
        n2.u = e3 = e3[2];
      }
  };
  function P2(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function j3(n2) {
    var e3 = this, r3 = n2.i;
    e3.componentWillUnmount = function() {
      D(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), n2.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), D(y(P2, { context: e3.context }, n2.__v), e3.l)) : e3.l && e3.componentWillUnmount();
  }
  function z3(n2, e3) {
    var r3 = y(j3, { __v: n2, i: e3 });
    return r3.containerInfo = e3, r3;
  }
  (V2.prototype = new b()).__a = function(n2) {
    var t3 = this, e3 = F3(t3.__v), r3 = t3.o.get(n2);
    return r3[0]++, function(u3) {
      var o3 = function() {
        t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
      };
      e3 ? e3(o3) : o3();
    };
  }, V2.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t3 = S(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
    for (var e3 = t3.length; e3--; )
      this.o.set(t3[e3], this.u = [1, 0, this.u]);
    return n2.children;
  }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t3, e3) {
      W(n2, e3, t3);
    });
  };
  var B3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var Y = /[A-Z0-9]/g;
  var $3 = "undefined" != typeof document;
  var q3 = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
  };
  function G2(n2, t3, e3) {
    return null == t3.__k && (t3.textContent = ""), D(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function J(n2, t3, e3) {
    return E(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
    Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
      return this["UNSAFE_" + t3];
    }, set: function(n2) {
      Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
    } });
  });
  var K = l.event;
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  l.event = function(n2) {
    return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
  };
  var tn;
  var en = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var rn = l.vnode;
  l.vnode = function(n2) {
    "string" == typeof n2.type && function(n3) {
      var t3 = n3.props, e3 = n3.type, u3 = {};
      for (var o3 in t3) {
        var i3 = t3[o3];
        if (!("value" === o3 && "defaultValue" in t3 && null == i3 || $3 && "children" === o3 && "noscript" === e3 || "class" === o3 || "className" === o3)) {
          var l3 = o3.toLowerCase();
          "defaultValue" === o3 && "value" in t3 && null == t3.value ? o3 = "value" : "download" === o3 && true === i3 ? i3 = "" : "ondoubleclick" === l3 ? o3 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || q3(t3.type) ? "onfocus" === l3 ? o3 = "onfocusin" : "onblur" === l3 ? o3 = "onfocusout" : Z.test(o3) ? o3 = l3 : -1 === e3.indexOf("-") && H2.test(o3) ? o3 = o3.replace(Y, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o3 = "oninput", "oninput" === l3 && u3[o3 = l3] && (o3 = "oninputCapture"), u3[o3] = i3;
        }
      }
      "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = S(t3.children).forEach(function(n4) {
        n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
      })), "select" == e3 && null != u3.defaultValue && (u3.value = S(t3.children).forEach(function(n4) {
        n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
      })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", en)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
    }(n2), n2.$$typeof = B3, rn && rn(n2);
  };
  var un = l.__r;
  l.__r = function(n2) {
    un && un(n2), tn = n2.__c;
  };
  var on = l.diffed;
  l.diffed = function(n2) {
    on && on(n2);
    var t3 = n2.props, e3 = n2.__e;
    null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), tn = null;
  };
  var ln = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
    return tn.__n[n2.__c].props.value;
  } } } };
  function fn(n2) {
    return y.bind(null, n2);
  }
  function an(n2) {
    return !!n2 && n2.$$typeof === B3;
  }
  function sn(n2) {
    return an(n2) ? F.apply(null, arguments) : n2;
  }
  function hn(n2) {
    return !!n2.__k && (D(null, n2), true);
  }
  function vn(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  var dn = function(n2, t3) {
    return n2(t3);
  };
  var pn = function(n2, t3) {
    return n2(t3);
  };
  var mn = k;
  function yn(n2) {
    n2();
  }
  function _n(n2) {
    return n2;
  }
  function bn() {
    return [false, yn];
  }
  var Sn = y2;
  function gn(n2, t3) {
    var e3 = t3(), r3 = h2({ h: { __: e3, v: t3 } }), u3 = r3[0].h, o3 = r3[1];
    return y2(function() {
      u3.__ = e3, u3.v = t3, E2(u3.__, t3()) || o3({ h: u3 });
    }, [n2, e3, t3]), p2(function() {
      return E2(u3.__, u3.v()) || o3({ h: u3 }), n2(function() {
        E2(u3.__, u3.v()) || o3({ h: u3 });
      });
    }, [n2]), e3;
  }
  var Cn = { useState: h2, useId: V, useReducer: s2, useEffect: p2, useLayoutEffect: y2, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: gn, startTransition: yn, useRef: _2, useImperativeHandle: A2, useMemo: F2, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: O2, render: G2, hydrate: J, unmountComponentAtNode: hn, createPortal: z3, createElement: y, createContext: G, createFactory: fn, cloneElement: sn, createRef: _, Fragment: k, isValidElement: an, findDOMNode: vn, Component: b, PureComponent: w3, memo: x3, forwardRef: k3, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D2, SuspenseList: V2, lazy: M2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/table-core/build/lib/index.mjs
  function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
  }
  function makeStateUpdater(key, instance) {
    return (updater) => {
      instance.setState((old) => {
        return {
          ...old,
          [key]: functionalUpdate(updater, old[key])
        };
      });
    };
  }
  function isFunction(d3) {
    return d3 instanceof Function;
  }
  function isNumberArray(d3) {
    return Array.isArray(d3) && d3.every((val) => typeof val === "number");
  }
  function flattenBy(arr, getChildren) {
    const flat = [];
    const recurse = (subArr) => {
      subArr.forEach((item) => {
        flat.push(item);
        const children = getChildren(item);
        if (children != null && children.length) {
          recurse(children);
        }
      });
    };
    recurse(arr);
    return flat;
  }
  function memo(getDeps, fn2, opts) {
    let deps = [];
    let result;
    return () => {
      let depTime;
      if (opts.key && opts.debug)
        depTime = Date.now();
      const newDeps = getDeps();
      const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
      if (!depsChanged) {
        return result;
      }
      deps = newDeps;
      let resultTime;
      if (opts.key && opts.debug)
        resultTime = Date.now();
      result = fn2(...newDeps);
      opts == null ? void 0 : opts.onChange == null ? void 0 : opts.onChange(result);
      if (opts.key && opts.debug) {
        if (opts != null && opts.debug()) {
          const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
          const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
          const resultFpsPercentage = resultEndTime / 16;
          const pad = (str, num) => {
            str = String(str);
            while (str.length < num) {
              str = " " + str;
            }
            return str;
          };
          console.info(`%c\u23F1 ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
        }
      }
      return result;
    };
  }
  function createColumn(table, columnDef, depth, parent) {
    var _ref, _resolvedColumnDef$id;
    const defaultColumn = table._getDefaultColumnDef();
    const resolvedColumnDef = {
      ...defaultColumn,
      ...columnDef
    };
    const accessorKey = resolvedColumnDef.accessorKey;
    let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? accessorKey.replace(".", "_") : void 0) != null ? _ref : typeof resolvedColumnDef.header === "string" ? resolvedColumnDef.header : void 0;
    let accessorFn;
    if (resolvedColumnDef.accessorFn) {
      accessorFn = resolvedColumnDef.accessorFn;
    } else if (accessorKey) {
      if (accessorKey.includes(".")) {
        accessorFn = (originalRow) => {
          let result = originalRow;
          for (const key of accessorKey.split(".")) {
            var _result;
            result = (_result = result) == null ? void 0 : _result[key];
            if (result === void 0) {
              console.warn(`"${key}" in deeply nested key "${accessorKey}" returned undefined.`);
            }
          }
          return result;
        };
      } else {
        accessorFn = (originalRow) => originalRow[resolvedColumnDef.accessorKey];
      }
    }
    if (!id) {
      if (true) {
        throw new Error(resolvedColumnDef.accessorFn ? `Columns require an id when using an accessorFn` : `Columns require an id when using a non-string header`);
      }
      throw new Error();
    }
    let column = {
      id: `${String(id)}`,
      accessorFn,
      parent,
      depth,
      columnDef: resolvedColumnDef,
      columns: [],
      getFlatColumns: memo(() => [true], () => {
        var _column$columns;
        return [column, ...(_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap((d3) => d3.getFlatColumns())];
      }, {
        key: false,
        debug: () => {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugColumns;
        }
      }),
      getLeafColumns: memo(() => [table._getOrderColumnsFn()], (orderColumns2) => {
        var _column$columns2;
        if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
          let leafColumns = column.columns.flatMap((column2) => column2.getLeafColumns());
          return orderColumns2(leafColumns);
        }
        return [column];
      }, {
        key: false,
        debug: () => {
          var _table$options$debugA2;
          return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugColumns;
        }
      })
    };
    column = table._features.reduce((obj, feature) => {
      return Object.assign(obj, feature.createColumn == null ? void 0 : feature.createColumn(column, table));
    }, column);
    return column;
  }
  function createHeader(table, column, options) {
    var _options$id;
    const id = (_options$id = options.id) != null ? _options$id : column.id;
    let header = {
      id,
      column,
      index: options.index,
      isPlaceholder: !!options.isPlaceholder,
      placeholderId: options.placeholderId,
      depth: options.depth,
      subHeaders: [],
      colSpan: 0,
      rowSpan: 0,
      headerGroup: null,
      getLeafHeaders: () => {
        const leafHeaders = [];
        const recurseHeader = (h3) => {
          if (h3.subHeaders && h3.subHeaders.length) {
            h3.subHeaders.map(recurseHeader);
          }
          leafHeaders.push(h3);
        };
        recurseHeader(header);
        return leafHeaders;
      },
      getContext: () => ({
        table,
        header,
        column
      })
    };
    table._features.forEach((feature) => {
      Object.assign(header, feature.createHeader == null ? void 0 : feature.createHeader(header, table));
    });
    return header;
  }
  var Headers = {
    createTable: (table) => {
      return {
        // Header Groups
        getHeaderGroups: memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
          var _left$map$filter, _right$map$filter;
          const leftColumns = (_left$map$filter = left == null ? void 0 : left.map((columnId) => leafColumns.find((d3) => d3.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
          const rightColumns = (_right$map$filter = right == null ? void 0 : right.map((columnId) => leafColumns.find((d3) => d3.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
          const centerColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
          const headerGroups = buildHeaderGroups(allColumns, [...leftColumns, ...centerColumns, ...rightColumns], table);
          return headerGroups;
        }, {
          key: "getHeaderGroups",
          debug: () => {
            var _table$options$debugA;
            return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugHeaders;
          }
        }),
        getCenterHeaderGroups: memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
          leafColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
          return buildHeaderGroups(allColumns, leafColumns, table, "center");
        }, {
          key: "getCenterHeaderGroups",
          debug: () => {
            var _table$options$debugA2;
            return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugHeaders;
          }
        }),
        getLeftHeaderGroups: memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left], (allColumns, leafColumns, left) => {
          var _left$map$filter2;
          const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map((columnId) => leafColumns.find((d3) => d3.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
          return buildHeaderGroups(allColumns, orderedLeafColumns, table, "left");
        }, {
          key: "getLeftHeaderGroups",
          debug: () => {
            var _table$options$debugA3;
            return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugHeaders;
          }
        }),
        getRightHeaderGroups: memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right], (allColumns, leafColumns, right) => {
          var _right$map$filter2;
          const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map((columnId) => leafColumns.find((d3) => d3.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
          return buildHeaderGroups(allColumns, orderedLeafColumns, table, "right");
        }, {
          key: "getRightHeaderGroups",
          debug: () => {
            var _table$options$debugA4;
            return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugHeaders;
          }
        }),
        // Footer Groups
        getFooterGroups: memo(() => [table.getHeaderGroups()], (headerGroups) => {
          return [...headerGroups].reverse();
        }, {
          key: "getFooterGroups",
          debug: () => {
            var _table$options$debugA5;
            return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugHeaders;
          }
        }),
        getLeftFooterGroups: memo(() => [table.getLeftHeaderGroups()], (headerGroups) => {
          return [...headerGroups].reverse();
        }, {
          key: "getLeftFooterGroups",
          debug: () => {
            var _table$options$debugA6;
            return (_table$options$debugA6 = table.options.debugAll) != null ? _table$options$debugA6 : table.options.debugHeaders;
          }
        }),
        getCenterFooterGroups: memo(() => [table.getCenterHeaderGroups()], (headerGroups) => {
          return [...headerGroups].reverse();
        }, {
          key: "getCenterFooterGroups",
          debug: () => {
            var _table$options$debugA7;
            return (_table$options$debugA7 = table.options.debugAll) != null ? _table$options$debugA7 : table.options.debugHeaders;
          }
        }),
        getRightFooterGroups: memo(() => [table.getRightHeaderGroups()], (headerGroups) => {
          return [...headerGroups].reverse();
        }, {
          key: "getRightFooterGroups",
          debug: () => {
            var _table$options$debugA8;
            return (_table$options$debugA8 = table.options.debugAll) != null ? _table$options$debugA8 : table.options.debugHeaders;
          }
        }),
        // Flat Headers
        getFlatHeaders: memo(() => [table.getHeaderGroups()], (headerGroups) => {
          return headerGroups.map((headerGroup) => {
            return headerGroup.headers;
          }).flat();
        }, {
          key: "getFlatHeaders",
          debug: () => {
            var _table$options$debugA9;
            return (_table$options$debugA9 = table.options.debugAll) != null ? _table$options$debugA9 : table.options.debugHeaders;
          }
        }),
        getLeftFlatHeaders: memo(() => [table.getLeftHeaderGroups()], (left) => {
          return left.map((headerGroup) => {
            return headerGroup.headers;
          }).flat();
        }, {
          key: "getLeftFlatHeaders",
          debug: () => {
            var _table$options$debugA10;
            return (_table$options$debugA10 = table.options.debugAll) != null ? _table$options$debugA10 : table.options.debugHeaders;
          }
        }),
        getCenterFlatHeaders: memo(() => [table.getCenterHeaderGroups()], (left) => {
          return left.map((headerGroup) => {
            return headerGroup.headers;
          }).flat();
        }, {
          key: "getCenterFlatHeaders",
          debug: () => {
            var _table$options$debugA11;
            return (_table$options$debugA11 = table.options.debugAll) != null ? _table$options$debugA11 : table.options.debugHeaders;
          }
        }),
        getRightFlatHeaders: memo(() => [table.getRightHeaderGroups()], (left) => {
          return left.map((headerGroup) => {
            return headerGroup.headers;
          }).flat();
        }, {
          key: "getRightFlatHeaders",
          debug: () => {
            var _table$options$debugA12;
            return (_table$options$debugA12 = table.options.debugAll) != null ? _table$options$debugA12 : table.options.debugHeaders;
          }
        }),
        // Leaf Headers
        getCenterLeafHeaders: memo(() => [table.getCenterFlatHeaders()], (flatHeaders) => {
          return flatHeaders.filter((header) => {
            var _header$subHeaders;
            return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
          });
        }, {
          key: "getCenterLeafHeaders",
          debug: () => {
            var _table$options$debugA13;
            return (_table$options$debugA13 = table.options.debugAll) != null ? _table$options$debugA13 : table.options.debugHeaders;
          }
        }),
        getLeftLeafHeaders: memo(() => [table.getLeftFlatHeaders()], (flatHeaders) => {
          return flatHeaders.filter((header) => {
            var _header$subHeaders2;
            return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
          });
        }, {
          key: "getLeftLeafHeaders",
          debug: () => {
            var _table$options$debugA14;
            return (_table$options$debugA14 = table.options.debugAll) != null ? _table$options$debugA14 : table.options.debugHeaders;
          }
        }),
        getRightLeafHeaders: memo(() => [table.getRightFlatHeaders()], (flatHeaders) => {
          return flatHeaders.filter((header) => {
            var _header$subHeaders3;
            return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
          });
        }, {
          key: "getRightLeafHeaders",
          debug: () => {
            var _table$options$debugA15;
            return (_table$options$debugA15 = table.options.debugAll) != null ? _table$options$debugA15 : table.options.debugHeaders;
          }
        }),
        getLeafHeaders: memo(() => [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()], (left, center, right) => {
          var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
          return [...(_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : [], ...(_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : [], ...(_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : []].map((header) => {
            return header.getLeafHeaders();
          }).flat();
        }, {
          key: "getLeafHeaders",
          debug: () => {
            var _table$options$debugA16;
            return (_table$options$debugA16 = table.options.debugAll) != null ? _table$options$debugA16 : table.options.debugHeaders;
          }
        })
      };
    }
  };
  function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
    var _headerGroups$0$heade, _headerGroups$;
    let maxDepth = 0;
    const findMaxDepth = function(columns, depth) {
      if (depth === void 0) {
        depth = 1;
      }
      maxDepth = Math.max(maxDepth, depth);
      columns.filter((column) => column.getIsVisible()).forEach((column) => {
        var _column$columns;
        if ((_column$columns = column.columns) != null && _column$columns.length) {
          findMaxDepth(column.columns, depth + 1);
        }
      }, 0);
    };
    findMaxDepth(allColumns);
    let headerGroups = [];
    const createHeaderGroup = (headersToGroup, depth) => {
      const headerGroup = {
        depth,
        id: [headerFamily, `${depth}`].filter(Boolean).join("_"),
        headers: []
      };
      const pendingParentHeaders = [];
      headersToGroup.forEach((headerToGroup) => {
        const latestPendingParentHeader = [...pendingParentHeaders].reverse()[0];
        const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
        let column;
        let isPlaceholder = false;
        if (isLeafHeader && headerToGroup.column.parent) {
          column = headerToGroup.column.parent;
        } else {
          column = headerToGroup.column;
          isPlaceholder = true;
        }
        if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
          latestPendingParentHeader.subHeaders.push(headerToGroup);
        } else {
          const header = createHeader(table, column, {
            id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join("_"),
            isPlaceholder,
            placeholderId: isPlaceholder ? `${pendingParentHeaders.filter((d3) => d3.column === column).length}` : void 0,
            depth,
            index: pendingParentHeaders.length
          });
          header.subHeaders.push(headerToGroup);
          pendingParentHeaders.push(header);
        }
        headerGroup.headers.push(headerToGroup);
        headerToGroup.headerGroup = headerGroup;
      });
      headerGroups.push(headerGroup);
      if (depth > 0) {
        createHeaderGroup(pendingParentHeaders, depth - 1);
      }
    };
    const bottomHeaders = columnsToGroup.map((column, index) => createHeader(table, column, {
      depth: maxDepth,
      index
    }));
    createHeaderGroup(bottomHeaders, maxDepth - 1);
    headerGroups.reverse();
    const recurseHeadersForSpans = (headers) => {
      const filteredHeaders = headers.filter((header) => header.column.getIsVisible());
      return filteredHeaders.map((header) => {
        let colSpan = 0;
        let rowSpan = 0;
        let childRowSpans = [0];
        if (header.subHeaders && header.subHeaders.length) {
          childRowSpans = [];
          recurseHeadersForSpans(header.subHeaders).forEach((_ref) => {
            let {
              colSpan: childColSpan,
              rowSpan: childRowSpan
            } = _ref;
            colSpan += childColSpan;
            childRowSpans.push(childRowSpan);
          });
        } else {
          colSpan = 1;
        }
        const minChildRowSpan = Math.min(...childRowSpans);
        rowSpan = rowSpan + minChildRowSpan;
        header.colSpan = colSpan;
        header.rowSpan = rowSpan;
        return {
          colSpan,
          rowSpan
        };
      });
    };
    recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
    return headerGroups;
  }
  var defaultColumnSizing = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  };
  var getDefaultColumnSizingInfoState = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  });
  var ColumnSizing = {
    getDefaultColumnDef: () => {
      return defaultColumnSizing;
    },
    getInitialState: (state) => {
      return {
        columnSizing: {},
        columnSizingInfo: getDefaultColumnSizingInfoState(),
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        columnResizeMode: "onEnd",
        onColumnSizingChange: makeStateUpdater("columnSizing", table),
        onColumnSizingInfoChange: makeStateUpdater("columnSizingInfo", table)
      };
    },
    createColumn: (column, table) => {
      return {
        getSize: () => {
          var _column$columnDef$min, _ref, _column$columnDef$max;
          const columnSize = table.getState().columnSizing[column.id];
          return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
        },
        getStart: (position) => {
          const columns = !position ? table.getVisibleLeafColumns() : position === "left" ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
          const index = columns.findIndex((d3) => d3.id === column.id);
          if (index > 0) {
            const prevSiblingColumn = columns[index - 1];
            return prevSiblingColumn.getStart(position) + prevSiblingColumn.getSize();
          }
          return 0;
        },
        resetSize: () => {
          table.setColumnSizing((_ref2) => {
            let {
              [column.id]: _3,
              ...rest
            } = _ref2;
            return rest;
          });
        },
        getCanResize: () => {
          var _column$columnDef$ena, _table$options$enable;
          return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
        },
        getIsResizing: () => {
          return table.getState().columnSizingInfo.isResizingColumn === column.id;
        }
      };
    },
    createHeader: (header, table) => {
      return {
        getSize: () => {
          let sum2 = 0;
          const recurse = (header2) => {
            if (header2.subHeaders.length) {
              header2.subHeaders.forEach(recurse);
            } else {
              var _header$column$getSiz;
              sum2 += (_header$column$getSiz = header2.column.getSize()) != null ? _header$column$getSiz : 0;
            }
          };
          recurse(header);
          return sum2;
        },
        getStart: () => {
          if (header.index > 0) {
            const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
            return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
          }
          return 0;
        },
        getResizeHandler: () => {
          const column = table.getColumn(header.column.id);
          const canResize = column == null ? void 0 : column.getCanResize();
          return (e3) => {
            if (!column || !canResize) {
              return;
            }
            e3.persist == null ? void 0 : e3.persist();
            if (isTouchStartEvent(e3)) {
              if (e3.touches && e3.touches.length > 1) {
                return;
              }
            }
            const startSize = header.getSize();
            const columnSizingStart = header ? header.getLeafHeaders().map((d3) => [d3.column.id, d3.column.getSize()]) : [[column.id, column.getSize()]];
            const clientX = isTouchStartEvent(e3) ? Math.round(e3.touches[0].clientX) : e3.clientX;
            const newColumnSizing = {};
            const updateOffset = (eventType, clientXPos) => {
              if (typeof clientXPos !== "number") {
                return;
              }
              table.setColumnSizingInfo((old) => {
                var _old$startOffset, _old$startSize;
                const deltaOffset = clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0);
                const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
                old.columnSizingStart.forEach((_ref3) => {
                  let [columnId, headerSize] = _ref3;
                  newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
                });
                return {
                  ...old,
                  deltaOffset,
                  deltaPercentage
                };
              });
              if (table.options.columnResizeMode === "onChange" || eventType === "end") {
                table.setColumnSizing((old) => ({
                  ...old,
                  ...newColumnSizing
                }));
              }
            };
            const onMove = (clientXPos) => updateOffset("move", clientXPos);
            const onEnd = (clientXPos) => {
              updateOffset("end", clientXPos);
              table.setColumnSizingInfo((old) => ({
                ...old,
                isResizingColumn: false,
                startOffset: null,
                startSize: null,
                deltaOffset: null,
                deltaPercentage: null,
                columnSizingStart: []
              }));
            };
            const mouseEvents = {
              moveHandler: (e4) => onMove(e4.clientX),
              upHandler: (e4) => {
                document.removeEventListener("mousemove", mouseEvents.moveHandler);
                document.removeEventListener("mouseup", mouseEvents.upHandler);
                onEnd(e4.clientX);
              }
            };
            const touchEvents = {
              moveHandler: (e4) => {
                if (e4.cancelable) {
                  e4.preventDefault();
                  e4.stopPropagation();
                }
                onMove(e4.touches[0].clientX);
                return false;
              },
              upHandler: (e4) => {
                var _e$touches$;
                document.removeEventListener("touchmove", touchEvents.moveHandler);
                document.removeEventListener("touchend", touchEvents.upHandler);
                if (e4.cancelable) {
                  e4.preventDefault();
                  e4.stopPropagation();
                }
                onEnd((_e$touches$ = e4.touches[0]) == null ? void 0 : _e$touches$.clientX);
              }
            };
            const passiveIfSupported = passiveEventSupported() ? {
              passive: false
            } : false;
            if (isTouchStartEvent(e3)) {
              document.addEventListener("touchmove", touchEvents.moveHandler, passiveIfSupported);
              document.addEventListener("touchend", touchEvents.upHandler, passiveIfSupported);
            } else {
              document.addEventListener("mousemove", mouseEvents.moveHandler, passiveIfSupported);
              document.addEventListener("mouseup", mouseEvents.upHandler, passiveIfSupported);
            }
            table.setColumnSizingInfo((old) => ({
              ...old,
              startOffset: clientX,
              startSize,
              deltaOffset: 0,
              deltaPercentage: 0,
              columnSizingStart,
              isResizingColumn: column.id
            }));
          };
        }
      };
    },
    createTable: (table) => {
      return {
        setColumnSizing: (updater) => table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater),
        setColumnSizingInfo: (updater) => table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater),
        resetColumnSizing: (defaultState) => {
          var _table$initialState$c;
          table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
        },
        resetHeaderSizeInfo: (defaultState) => {
          var _table$initialState$c2;
          table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
        },
        getTotalSize: () => {
          var _table$getHeaderGroup, _table$getHeaderGroup2;
          return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum2, header) => {
            return sum2 + header.getSize();
          }, 0)) != null ? _table$getHeaderGroup : 0;
        },
        getLeftTotalSize: () => {
          var _table$getLeftHeaderG, _table$getLeftHeaderG2;
          return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum2, header) => {
            return sum2 + header.getSize();
          }, 0)) != null ? _table$getLeftHeaderG : 0;
        },
        getCenterTotalSize: () => {
          var _table$getCenterHeade, _table$getCenterHeade2;
          return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum2, header) => {
            return sum2 + header.getSize();
          }, 0)) != null ? _table$getCenterHeade : 0;
        },
        getRightTotalSize: () => {
          var _table$getRightHeader, _table$getRightHeader2;
          return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum2, header) => {
            return sum2 + header.getSize();
          }, 0)) != null ? _table$getRightHeader : 0;
        }
      };
    }
  };
  var passiveSupported = null;
  function passiveEventSupported() {
    if (typeof passiveSupported === "boolean")
      return passiveSupported;
    let supported = false;
    try {
      const options = {
        get passive() {
          supported = true;
          return false;
        }
      };
      const noop = () => {
      };
      window.addEventListener("test", noop, options);
      window.removeEventListener("test", noop);
    } catch (err) {
      supported = false;
    }
    passiveSupported = supported;
    return passiveSupported;
  }
  function isTouchStartEvent(e3) {
    return e3.type === "touchstart";
  }
  var Expanding = {
    getInitialState: (state) => {
      return {
        expanded: {},
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onExpandedChange: makeStateUpdater("expanded", table),
        paginateExpandedRows: true
      };
    },
    createTable: (table) => {
      let registered = false;
      let queued = false;
      return {
        _autoResetExpanded: () => {
          var _ref, _table$options$autoRe;
          if (!registered) {
            table._queue(() => {
              registered = true;
            });
            return;
          }
          if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
            if (queued)
              return;
            queued = true;
            table._queue(() => {
              table.resetExpanded();
              queued = false;
            });
          }
        },
        setExpanded: (updater) => table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater),
        toggleAllRowsExpanded: (expanded) => {
          if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
            table.setExpanded(true);
          } else {
            table.setExpanded({});
          }
        },
        resetExpanded: (defaultState) => {
          var _table$initialState$e, _table$initialState;
          table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
        },
        getCanSomeRowsExpand: () => {
          return table.getPrePaginationRowModel().flatRows.some((row) => row.getCanExpand());
        },
        getToggleAllRowsExpandedHandler: () => {
          return (e3) => {
            e3.persist == null ? void 0 : e3.persist();
            table.toggleAllRowsExpanded();
          };
        },
        getIsSomeRowsExpanded: () => {
          const expanded = table.getState().expanded;
          return expanded === true || Object.values(expanded).some(Boolean);
        },
        getIsAllRowsExpanded: () => {
          const expanded = table.getState().expanded;
          if (typeof expanded === "boolean") {
            return expanded === true;
          }
          if (!Object.keys(expanded).length) {
            return false;
          }
          if (table.getRowModel().flatRows.some((row) => !row.getIsExpanded())) {
            return false;
          }
          return true;
        },
        getExpandedDepth: () => {
          let maxDepth = 0;
          const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
          rowIds.forEach((id) => {
            const splitId = id.split(".");
            maxDepth = Math.max(maxDepth, splitId.length);
          });
          return maxDepth;
        },
        getPreExpandedRowModel: () => table.getSortedRowModel(),
        getExpandedRowModel: () => {
          if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
            table._getExpandedRowModel = table.options.getExpandedRowModel(table);
          }
          if (table.options.manualExpanding || !table._getExpandedRowModel) {
            return table.getPreExpandedRowModel();
          }
          return table._getExpandedRowModel();
        }
      };
    },
    createRow: (row, table) => {
      return {
        toggleExpanded: (expanded) => {
          table.setExpanded((old) => {
            var _expanded;
            const exists = old === true ? true : !!(old != null && old[row.id]);
            let oldExpanded = {};
            if (old === true) {
              Object.keys(table.getRowModel().rowsById).forEach((rowId) => {
                oldExpanded[rowId] = true;
              });
            } else {
              oldExpanded = old;
            }
            expanded = (_expanded = expanded) != null ? _expanded : !exists;
            if (!exists && expanded) {
              return {
                ...oldExpanded,
                [row.id]: true
              };
            }
            if (exists && !expanded) {
              const {
                [row.id]: _3,
                ...rest
              } = oldExpanded;
              return rest;
            }
            return old;
          });
        },
        getIsExpanded: () => {
          var _table$options$getIsR;
          const expanded = table.getState().expanded;
          return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
        },
        getCanExpand: () => {
          var _table$options$getRow, _table$options$enable, _row$subRows;
          return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
        },
        getToggleExpandedHandler: () => {
          const canExpand = row.getCanExpand();
          return () => {
            if (!canExpand)
              return;
            row.toggleExpanded();
          };
        }
      };
    }
  };
  var includesString = (row, columnId, filterValue) => {
    var _row$getValue, _row$getValue$toStrin, _row$getValue$toStrin2;
    const search = filterValue.toLowerCase();
    return Boolean((_row$getValue = row.getValue(columnId)) == null ? void 0 : (_row$getValue$toStrin = _row$getValue.toString()) == null ? void 0 : (_row$getValue$toStrin2 = _row$getValue$toStrin.toLowerCase()) == null ? void 0 : _row$getValue$toStrin2.includes(search));
  };
  includesString.autoRemove = (val) => testFalsey(val);
  var includesStringSensitive = (row, columnId, filterValue) => {
    var _row$getValue2, _row$getValue2$toStri;
    return Boolean((_row$getValue2 = row.getValue(columnId)) == null ? void 0 : (_row$getValue2$toStri = _row$getValue2.toString()) == null ? void 0 : _row$getValue2$toStri.includes(filterValue));
  };
  includesStringSensitive.autoRemove = (val) => testFalsey(val);
  var equalsString = (row, columnId, filterValue) => {
    var _row$getValue3, _row$getValue3$toStri;
    return ((_row$getValue3 = row.getValue(columnId)) == null ? void 0 : (_row$getValue3$toStri = _row$getValue3.toString()) == null ? void 0 : _row$getValue3$toStri.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
  };
  equalsString.autoRemove = (val) => testFalsey(val);
  var arrIncludes = (row, columnId, filterValue) => {
    var _row$getValue4;
    return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
  };
  arrIncludes.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
  var arrIncludesAll = (row, columnId, filterValue) => {
    return !filterValue.some((val) => {
      var _row$getValue5;
      return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
    });
  };
  arrIncludesAll.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
  var arrIncludesSome = (row, columnId, filterValue) => {
    return filterValue.some((val) => {
      var _row$getValue6;
      return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
    });
  };
  arrIncludesSome.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
  var equals = (row, columnId, filterValue) => {
    return row.getValue(columnId) === filterValue;
  };
  equals.autoRemove = (val) => testFalsey(val);
  var weakEquals = (row, columnId, filterValue) => {
    return row.getValue(columnId) == filterValue;
  };
  weakEquals.autoRemove = (val) => testFalsey(val);
  var inNumberRange = (row, columnId, filterValue) => {
    let [min2, max2] = filterValue;
    const rowValue = row.getValue(columnId);
    return rowValue >= min2 && rowValue <= max2;
  };
  inNumberRange.resolveFilterValue = (val) => {
    let [unsafeMin, unsafeMax] = val;
    let parsedMin = typeof unsafeMin !== "number" ? parseFloat(unsafeMin) : unsafeMin;
    let parsedMax = typeof unsafeMax !== "number" ? parseFloat(unsafeMax) : unsafeMax;
    let min2 = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
    let max2 = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
    if (min2 > max2) {
      const temp = min2;
      min2 = max2;
      max2 = temp;
    }
    return [min2, max2];
  };
  inNumberRange.autoRemove = (val) => testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);
  var filterFns = {
    includesString,
    includesStringSensitive,
    equalsString,
    arrIncludes,
    arrIncludesAll,
    arrIncludesSome,
    equals,
    weakEquals,
    inNumberRange
  };
  function testFalsey(val) {
    return val === void 0 || val === null || val === "";
  }
  var Filters = {
    getDefaultColumnDef: () => {
      return {
        filterFn: "auto"
      };
    },
    getInitialState: (state) => {
      return {
        columnFilters: [],
        globalFilter: void 0,
        // filtersProgress: 1,
        // facetProgress: {},
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onColumnFiltersChange: makeStateUpdater("columnFilters", table),
        onGlobalFilterChange: makeStateUpdater("globalFilter", table),
        filterFromLeafRows: false,
        maxLeafRowFilterDepth: 100,
        globalFilterFn: "auto",
        getColumnCanGlobalFilter: (column) => {
          var _table$getCoreRowMode, _table$getCoreRowMode2;
          const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null ? void 0 : (_table$getCoreRowMode2 = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode2.getValue();
          return typeof value === "string" || typeof value === "number";
        }
      };
    },
    createColumn: (column, table) => {
      return {
        getAutoFilterFn: () => {
          const firstRow = table.getCoreRowModel().flatRows[0];
          const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
          if (typeof value === "string") {
            return filterFns.includesString;
          }
          if (typeof value === "number") {
            return filterFns.inNumberRange;
          }
          if (typeof value === "boolean") {
            return filterFns.equals;
          }
          if (value !== null && typeof value === "object") {
            return filterFns.equals;
          }
          if (Array.isArray(value)) {
            return filterFns.arrIncludes;
          }
          return filterFns.weakEquals;
        },
        getFilterFn: () => {
          var _table$options$filter, _table$options$filter2;
          return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === "auto" ? column.getAutoFilterFn() : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn];
        },
        getCanFilter: () => {
          var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
          return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
        },
        getCanGlobalFilter: () => {
          var _column$columnDef$ena2, _table$options$enable3, _table$options$enable4, _table$options$getCol;
          return ((_column$columnDef$ena2 = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena2 : true) && ((_table$options$enable3 = table.options.enableGlobalFilter) != null ? _table$options$enable3 : true) && ((_table$options$enable4 = table.options.enableFilters) != null ? _table$options$enable4 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
        },
        getIsFiltered: () => column.getFilterIndex() > -1,
        getFilterValue: () => {
          var _table$getState$colum, _table$getState$colum2;
          return (_table$getState$colum = table.getState().columnFilters) == null ? void 0 : (_table$getState$colum2 = _table$getState$colum.find((d3) => d3.id === column.id)) == null ? void 0 : _table$getState$colum2.value;
        },
        getFilterIndex: () => {
          var _table$getState$colum3, _table$getState$colum4;
          return (_table$getState$colum3 = (_table$getState$colum4 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum4.findIndex((d3) => d3.id === column.id)) != null ? _table$getState$colum3 : -1;
        },
        setFilterValue: (value) => {
          table.setColumnFilters((old) => {
            const filterFn = column.getFilterFn();
            const previousfilter = old == null ? void 0 : old.find((d3) => d3.id === column.id);
            const newFilter = functionalUpdate(value, previousfilter ? previousfilter.value : void 0);
            if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
              var _old$filter;
              return (_old$filter = old == null ? void 0 : old.filter((d3) => d3.id !== column.id)) != null ? _old$filter : [];
            }
            const newFilterObj = {
              id: column.id,
              value: newFilter
            };
            if (previousfilter) {
              var _old$map;
              return (_old$map = old == null ? void 0 : old.map((d3) => {
                if (d3.id === column.id) {
                  return newFilterObj;
                }
                return d3;
              })) != null ? _old$map : [];
            }
            if (old != null && old.length) {
              return [...old, newFilterObj];
            }
            return [newFilterObj];
          });
        },
        _getFacetedRowModel: table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id),
        getFacetedRowModel: () => {
          if (!column._getFacetedRowModel) {
            return table.getPreFilteredRowModel();
          }
          return column._getFacetedRowModel();
        },
        _getFacetedUniqueValues: table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id),
        getFacetedUniqueValues: () => {
          if (!column._getFacetedUniqueValues) {
            return /* @__PURE__ */ new Map();
          }
          return column._getFacetedUniqueValues();
        },
        _getFacetedMinMaxValues: table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id),
        getFacetedMinMaxValues: () => {
          if (!column._getFacetedMinMaxValues) {
            return void 0;
          }
          return column._getFacetedMinMaxValues();
        }
        // () => [column.getFacetedRowModel()],
        // facetedRowModel => getRowModelMinMaxValues(facetedRowModel, column.id),
      };
    },
    createRow: (row, table) => {
      return {
        columnFilters: {},
        columnFiltersMeta: {}
      };
    },
    createTable: (table) => {
      return {
        getGlobalAutoFilterFn: () => {
          return filterFns.includesString;
        },
        getGlobalFilterFn: () => {
          var _table$options$filter3, _table$options$filter4;
          const {
            globalFilterFn
          } = table.options;
          return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === "auto" ? table.getGlobalAutoFilterFn() : (_table$options$filter3 = (_table$options$filter4 = table.options.filterFns) == null ? void 0 : _table$options$filter4[globalFilterFn]) != null ? _table$options$filter3 : filterFns[globalFilterFn];
        },
        setColumnFilters: (updater) => {
          const leafColumns = table.getAllLeafColumns();
          const updateFn = (old) => {
            var _functionalUpdate;
            return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter((filter) => {
              const column = leafColumns.find((d3) => d3.id === filter.id);
              if (column) {
                const filterFn = column.getFilterFn();
                if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
                  return false;
                }
              }
              return true;
            });
          };
          table.options.onColumnFiltersChange == null ? void 0 : table.options.onColumnFiltersChange(updateFn);
        },
        setGlobalFilter: (updater) => {
          table.options.onGlobalFilterChange == null ? void 0 : table.options.onGlobalFilterChange(updater);
        },
        resetGlobalFilter: (defaultState) => {
          table.setGlobalFilter(defaultState ? void 0 : table.initialState.globalFilter);
        },
        resetColumnFilters: (defaultState) => {
          var _table$initialState$c, _table$initialState;
          table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
        },
        getPreFilteredRowModel: () => table.getCoreRowModel(),
        getFilteredRowModel: () => {
          if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
            table._getFilteredRowModel = table.options.getFilteredRowModel(table);
          }
          if (table.options.manualFiltering || !table._getFilteredRowModel) {
            return table.getPreFilteredRowModel();
          }
          return table._getFilteredRowModel();
        },
        _getGlobalFacetedRowModel: table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, "__global__"),
        getGlobalFacetedRowModel: () => {
          if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
            return table.getPreFilteredRowModel();
          }
          return table._getGlobalFacetedRowModel();
        },
        _getGlobalFacetedUniqueValues: table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, "__global__"),
        getGlobalFacetedUniqueValues: () => {
          if (!table._getGlobalFacetedUniqueValues) {
            return /* @__PURE__ */ new Map();
          }
          return table._getGlobalFacetedUniqueValues();
        },
        _getGlobalFacetedMinMaxValues: table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, "__global__"),
        getGlobalFacetedMinMaxValues: () => {
          if (!table._getGlobalFacetedMinMaxValues) {
            return;
          }
          return table._getGlobalFacetedMinMaxValues();
        }
      };
    }
  };
  function shouldAutoRemoveFilter(filterFn, value, column) {
    return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === "undefined" || typeof value === "string" && !value;
  }
  var sum = (columnId, _leafRows, childRows) => {
    return childRows.reduce((sum2, next) => {
      const nextValue = next.getValue(columnId);
      return sum2 + (typeof nextValue === "number" ? nextValue : 0);
    }, 0);
  };
  var min = (columnId, _leafRows, childRows) => {
    let min2;
    childRows.forEach((row) => {
      const value = row.getValue(columnId);
      if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
        min2 = value;
      }
    });
    return min2;
  };
  var max = (columnId, _leafRows, childRows) => {
    let max2;
    childRows.forEach((row) => {
      const value = row.getValue(columnId);
      if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
        max2 = value;
      }
    });
    return max2;
  };
  var extent = (columnId, _leafRows, childRows) => {
    let min2;
    let max2;
    childRows.forEach((row) => {
      const value = row.getValue(columnId);
      if (value != null) {
        if (min2 === void 0) {
          if (value >= value)
            min2 = max2 = value;
        } else {
          if (min2 > value)
            min2 = value;
          if (max2 < value)
            max2 = value;
        }
      }
    });
    return [min2, max2];
  };
  var mean = (columnId, leafRows) => {
    let count2 = 0;
    let sum2 = 0;
    leafRows.forEach((row) => {
      let value = row.getValue(columnId);
      if (value != null && (value = +value) >= value) {
        ++count2, sum2 += value;
      }
    });
    if (count2)
      return sum2 / count2;
    return;
  };
  var median = (columnId, leafRows) => {
    if (!leafRows.length) {
      return;
    }
    const values = leafRows.map((row) => row.getValue(columnId));
    if (!isNumberArray(values)) {
      return;
    }
    if (values.length === 1) {
      return values[0];
    }
    const mid = Math.floor(values.length / 2);
    const nums = values.sort((a3, b3) => a3 - b3);
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  var unique = (columnId, leafRows) => {
    return Array.from(new Set(leafRows.map((d3) => d3.getValue(columnId))).values());
  };
  var uniqueCount = (columnId, leafRows) => {
    return new Set(leafRows.map((d3) => d3.getValue(columnId))).size;
  };
  var count = (_columnId, leafRows) => {
    return leafRows.length;
  };
  var aggregationFns = {
    sum,
    min,
    max,
    extent,
    mean,
    median,
    unique,
    uniqueCount,
    count
  };
  var Grouping = {
    getDefaultColumnDef: () => {
      return {
        aggregatedCell: (props) => {
          var _toString, _props$getValue;
          return (_toString = (_props$getValue = props.getValue()) == null ? void 0 : _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
        },
        aggregationFn: "auto"
      };
    },
    getInitialState: (state) => {
      return {
        grouping: [],
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onGroupingChange: makeStateUpdater("grouping", table),
        groupedColumnMode: "reorder"
      };
    },
    createColumn: (column, table) => {
      return {
        toggleGrouping: () => {
          table.setGrouping((old) => {
            if (old != null && old.includes(column.id)) {
              return old.filter((d3) => d3 !== column.id);
            }
            return [...old != null ? old : [], column.id];
          });
        },
        getCanGroup: () => {
          var _ref, _ref2, _ref3, _column$columnDef$ena;
          return (_ref = (_ref2 = (_ref3 = (_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) != null ? _ref3 : table.options.enableGrouping) != null ? _ref2 : true) != null ? _ref : !!column.accessorFn;
        },
        getIsGrouped: () => {
          var _table$getState$group;
          return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
        },
        getGroupedIndex: () => {
          var _table$getState$group2;
          return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
        },
        getToggleGroupingHandler: () => {
          const canGroup = column.getCanGroup();
          return () => {
            if (!canGroup)
              return;
            column.toggleGrouping();
          };
        },
        getAutoAggregationFn: () => {
          const firstRow = table.getCoreRowModel().flatRows[0];
          const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
          if (typeof value === "number") {
            return aggregationFns.sum;
          }
          if (Object.prototype.toString.call(value) === "[object Date]") {
            return aggregationFns.extent;
          }
        },
        getAggregationFn: () => {
          var _table$options$aggreg, _table$options$aggreg2;
          if (!column) {
            throw new Error();
          }
          return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === "auto" ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
        }
      };
    },
    createTable: (table) => {
      return {
        setGrouping: (updater) => table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater),
        resetGrouping: (defaultState) => {
          var _table$initialState$g, _table$initialState;
          table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
        },
        getPreGroupedRowModel: () => table.getFilteredRowModel(),
        getGroupedRowModel: () => {
          if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
            table._getGroupedRowModel = table.options.getGroupedRowModel(table);
          }
          if (table.options.manualGrouping || !table._getGroupedRowModel) {
            return table.getPreGroupedRowModel();
          }
          return table._getGroupedRowModel();
        }
      };
    },
    createRow: (row, table) => {
      return {
        getIsGrouped: () => !!row.groupingColumnId,
        getGroupingValue: (columnId) => {
          if (row._groupingValuesCache.hasOwnProperty(columnId)) {
            return row._groupingValuesCache[columnId];
          }
          const column = table.getColumn(columnId);
          if (!(column != null && column.columnDef.getGroupingValue)) {
            return row.getValue(columnId);
          }
          row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
          return row._groupingValuesCache[columnId];
        },
        _groupingValuesCache: {}
      };
    },
    createCell: (cell, column, row, table) => {
      return {
        getIsGrouped: () => column.getIsGrouped() && column.id === row.groupingColumnId,
        getIsPlaceholder: () => !cell.getIsGrouped() && column.getIsGrouped(),
        getIsAggregated: () => {
          var _row$subRows;
          return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
        }
      };
    }
  };
  function orderColumns(leafColumns, grouping, groupedColumnMode) {
    if (!(grouping != null && grouping.length) || !groupedColumnMode) {
      return leafColumns;
    }
    const nonGroupingColumns = leafColumns.filter((col) => !grouping.includes(col.id));
    if (groupedColumnMode === "remove") {
      return nonGroupingColumns;
    }
    const groupingColumns = grouping.map((g4) => leafColumns.find((col) => col.id === g4)).filter(Boolean);
    return [...groupingColumns, ...nonGroupingColumns];
  }
  var Ordering = {
    getInitialState: (state) => {
      return {
        columnOrder: [],
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onColumnOrderChange: makeStateUpdater("columnOrder", table)
      };
    },
    createTable: (table) => {
      return {
        setColumnOrder: (updater) => table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater),
        resetColumnOrder: (defaultState) => {
          var _table$initialState$c;
          table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
        },
        _getOrderColumnsFn: memo(() => [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode], (columnOrder, grouping, groupedColumnMode) => (columns) => {
          let orderedColumns = [];
          if (!(columnOrder != null && columnOrder.length)) {
            orderedColumns = columns;
          } else {
            const columnOrderCopy = [...columnOrder];
            const columnsCopy = [...columns];
            while (columnsCopy.length && columnOrderCopy.length) {
              const targetColumnId = columnOrderCopy.shift();
              const foundIndex = columnsCopy.findIndex((d3) => d3.id === targetColumnId);
              if (foundIndex > -1) {
                orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
              }
            }
            orderedColumns = [...orderedColumns, ...columnsCopy];
          }
          return orderColumns(orderedColumns, grouping, groupedColumnMode);
        }, {
          key: "getOrderColumnsFn"
          // debug: () => table.options.debugAll ?? table.options.debugTable,
        })
      };
    }
  };
  var defaultPageIndex = 0;
  var defaultPageSize = 10;
  var getDefaultPaginationState = () => ({
    pageIndex: defaultPageIndex,
    pageSize: defaultPageSize
  });
  var Pagination = {
    getInitialState: (state) => {
      return {
        ...state,
        pagination: {
          ...getDefaultPaginationState(),
          ...state == null ? void 0 : state.pagination
        }
      };
    },
    getDefaultOptions: (table) => {
      return {
        onPaginationChange: makeStateUpdater("pagination", table)
      };
    },
    createTable: (table) => {
      let registered = false;
      let queued = false;
      return {
        _autoResetPageIndex: () => {
          var _ref, _table$options$autoRe;
          if (!registered) {
            table._queue(() => {
              registered = true;
            });
            return;
          }
          if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
            if (queued)
              return;
            queued = true;
            table._queue(() => {
              table.resetPageIndex();
              queued = false;
            });
          }
        },
        setPagination: (updater) => {
          const safeUpdater = (old) => {
            let newState = functionalUpdate(updater, old);
            return newState;
          };
          return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
        },
        resetPagination: (defaultState) => {
          var _table$initialState$p;
          table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
        },
        setPageIndex: (updater) => {
          table.setPagination((old) => {
            let pageIndex = functionalUpdate(updater, old.pageIndex);
            const maxPageIndex = typeof table.options.pageCount === "undefined" || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
            pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
            return {
              ...old,
              pageIndex
            };
          });
        },
        resetPageIndex: (defaultState) => {
          var _table$initialState$p2, _table$initialState, _table$initialState$p3;
          table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null ? void 0 : (_table$initialState$p3 = _table$initialState.pagination) == null ? void 0 : _table$initialState$p3.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
        },
        resetPageSize: (defaultState) => {
          var _table$initialState$p4, _table$initialState2, _table$initialState2$;
          table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p4 = (_table$initialState2 = table.initialState) == null ? void 0 : (_table$initialState2$ = _table$initialState2.pagination) == null ? void 0 : _table$initialState2$.pageSize) != null ? _table$initialState$p4 : defaultPageSize);
        },
        setPageSize: (updater) => {
          table.setPagination((old) => {
            const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
            const topRowIndex = old.pageSize * old.pageIndex;
            const pageIndex = Math.floor(topRowIndex / pageSize);
            return {
              ...old,
              pageIndex,
              pageSize
            };
          });
        },
        setPageCount: (updater) => table.setPagination((old) => {
          var _table$options$pageCo;
          let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
          if (typeof newPageCount === "number") {
            newPageCount = Math.max(-1, newPageCount);
          }
          return {
            ...old,
            pageCount: newPageCount
          };
        }),
        getPageOptions: memo(() => [table.getPageCount()], (pageCount) => {
          let pageOptions = [];
          if (pageCount && pageCount > 0) {
            pageOptions = [...new Array(pageCount)].fill(null).map((_3, i3) => i3);
          }
          return pageOptions;
        }, {
          key: "getPageOptions",
          debug: () => {
            var _table$options$debugA;
            return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
          }
        }),
        getCanPreviousPage: () => table.getState().pagination.pageIndex > 0,
        getCanNextPage: () => {
          const {
            pageIndex
          } = table.getState().pagination;
          const pageCount = table.getPageCount();
          if (pageCount === -1) {
            return true;
          }
          if (pageCount === 0) {
            return false;
          }
          return pageIndex < pageCount - 1;
        },
        previousPage: () => {
          return table.setPageIndex((old) => old - 1);
        },
        nextPage: () => {
          return table.setPageIndex((old) => {
            return old + 1;
          });
        },
        getPrePaginationRowModel: () => table.getExpandedRowModel(),
        getPaginationRowModel: () => {
          if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
            table._getPaginationRowModel = table.options.getPaginationRowModel(table);
          }
          if (table.options.manualPagination || !table._getPaginationRowModel) {
            return table.getPrePaginationRowModel();
          }
          return table._getPaginationRowModel();
        },
        getPageCount: () => {
          var _table$options$pageCo2;
          return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getPrePaginationRowModel().rows.length / table.getState().pagination.pageSize);
        }
      };
    }
  };
  var getDefaultPinningState = () => ({
    left: [],
    right: []
  });
  var Pinning = {
    getInitialState: (state) => {
      return {
        columnPinning: getDefaultPinningState(),
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onColumnPinningChange: makeStateUpdater("columnPinning", table)
      };
    },
    createColumn: (column, table) => {
      return {
        pin: (position) => {
          const columnIds = column.getLeafColumns().map((d3) => d3.id).filter(Boolean);
          table.setColumnPinning((old) => {
            var _old$left3, _old$right3;
            if (position === "right") {
              var _old$left, _old$right;
              return {
                left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter((d3) => !(columnIds != null && columnIds.includes(d3))),
                right: [...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter((d3) => !(columnIds != null && columnIds.includes(d3))), ...columnIds]
              };
            }
            if (position === "left") {
              var _old$left2, _old$right2;
              return {
                left: [...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter((d3) => !(columnIds != null && columnIds.includes(d3))), ...columnIds],
                right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter((d3) => !(columnIds != null && columnIds.includes(d3)))
              };
            }
            return {
              left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter((d3) => !(columnIds != null && columnIds.includes(d3))),
              right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter((d3) => !(columnIds != null && columnIds.includes(d3)))
            };
          });
        },
        getCanPin: () => {
          const leafColumns = column.getLeafColumns();
          return leafColumns.some((d3) => {
            var _d$columnDef$enablePi, _table$options$enable;
            return ((_d$columnDef$enablePi = d3.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_table$options$enable = table.options.enablePinning) != null ? _table$options$enable : true);
          });
        },
        getIsPinned: () => {
          const leafColumnIds = column.getLeafColumns().map((d3) => d3.id);
          const {
            left,
            right
          } = table.getState().columnPinning;
          const isLeft = leafColumnIds.some((d3) => left == null ? void 0 : left.includes(d3));
          const isRight = leafColumnIds.some((d3) => right == null ? void 0 : right.includes(d3));
          return isLeft ? "left" : isRight ? "right" : false;
        },
        getPinnedIndex: () => {
          var _table$getState$colum, _table$getState$colum2, _table$getState$colum3;
          const position = column.getIsPinned();
          return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null ? void 0 : (_table$getState$colum3 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum3.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
        }
      };
    },
    createRow: (row, table) => {
      return {
        getCenterVisibleCells: memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allCells, left, right) => {
          const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
          return allCells.filter((d3) => !leftAndRight.includes(d3.column.id));
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA;
            return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
          }
        }),
        getLeftVisibleCells: memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, ,], (allCells, left) => {
          const cells = (left != null ? left : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d3) => ({
            ...d3,
            position: "left"
          }));
          return cells;
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA2;
            return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
          }
        }),
        getRightVisibleCells: memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.right], (allCells, right) => {
          const cells = (right != null ? right : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d3) => ({
            ...d3,
            position: "right"
          }));
          return cells;
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA3;
            return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugRows;
          }
        })
      };
    },
    createTable: (table) => {
      return {
        setColumnPinning: (updater) => table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater),
        resetColumnPinning: (defaultState) => {
          var _table$initialState$c, _table$initialState;
          return table.setColumnPinning(defaultState ? getDefaultPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultPinningState());
        },
        getIsSomeColumnsPinned: (position) => {
          var _pinningState$positio;
          const pinningState = table.getState().columnPinning;
          if (!position) {
            var _pinningState$left, _pinningState$right;
            return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
          }
          return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
        },
        getLeftLeafColumns: memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left], (allColumns, left) => {
          return (left != null ? left : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
        }, {
          key: "getLeftLeafColumns",
          debug: () => {
            var _table$options$debugA4;
            return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugColumns;
          }
        }),
        getRightLeafColumns: memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.right], (allColumns, right) => {
          return (right != null ? right : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
        }, {
          key: "getRightLeafColumns",
          debug: () => {
            var _table$options$debugA5;
            return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugColumns;
          }
        }),
        getCenterLeafColumns: memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, left, right) => {
          const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
          return allColumns.filter((d3) => !leftAndRight.includes(d3.id));
        }, {
          key: "getCenterLeafColumns",
          debug: () => {
            var _table$options$debugA6;
            return (_table$options$debugA6 = table.options.debugAll) != null ? _table$options$debugA6 : table.options.debugColumns;
          }
        })
      };
    }
  };
  var RowSelection = {
    getInitialState: (state) => {
      return {
        rowSelection: {},
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onRowSelectionChange: makeStateUpdater("rowSelection", table),
        enableRowSelection: true,
        enableMultiRowSelection: true,
        enableSubRowSelection: true
        // enableGroupingRowSelection: false,
        // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
        // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
      };
    },
    createTable: (table) => {
      return {
        setRowSelection: (updater) => table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater),
        resetRowSelection: (defaultState) => {
          var _table$initialState$r;
          return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
        },
        toggleAllRowsSelected: (value) => {
          table.setRowSelection((old) => {
            value = typeof value !== "undefined" ? value : !table.getIsAllRowsSelected();
            const rowSelection = {
              ...old
            };
            const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;
            if (value) {
              preGroupedFlatRows.forEach((row) => {
                if (!row.getCanSelect()) {
                  return;
                }
                rowSelection[row.id] = true;
              });
            } else {
              preGroupedFlatRows.forEach((row) => {
                delete rowSelection[row.id];
              });
            }
            return rowSelection;
          });
        },
        toggleAllPageRowsSelected: (value) => table.setRowSelection((old) => {
          const resolvedValue = typeof value !== "undefined" ? value : !table.getIsAllPageRowsSelected();
          const rowSelection = {
            ...old
          };
          table.getRowModel().rows.forEach((row) => {
            mutateRowIsSelected(rowSelection, row.id, resolvedValue, table);
          });
          return rowSelection;
        }),
        // addRowSelectionRange: rowId => {
        //   const {
        //     rows,
        //     rowsById,
        //     options: { selectGroupingRows, selectSubRows },
        //   } = table
        //   const findSelectedRow = (rows: Row[]) => {
        //     let found
        //     rows.find(d => {
        //       if (d.getIsSelected()) {
        //         found = d
        //         return true
        //       }
        //       const subFound = findSelectedRow(d.subRows || [])
        //       if (subFound) {
        //         found = subFound
        //         return true
        //       }
        //       return false
        //     })
        //     return found
        //   }
        //   const firstRow = findSelectedRow(rows) || rows[0]
        //   const lastRow = rowsById[rowId]
        //   let include = false
        //   const selectedRowIds = {}
        //   const addRow = (row: Row) => {
        //     mutateRowIsSelected(selectedRowIds, row.id, true, {
        //       rowsById,
        //       selectGroupingRows: selectGroupingRows!,
        //       selectSubRows: selectSubRows!,
        //     })
        //   }
        //   table.rows.forEach(row => {
        //     const isFirstRow = row.id === firstRow.id
        //     const isLastRow = row.id === lastRow.id
        //     if (isFirstRow || isLastRow) {
        //       if (!include) {
        //         include = true
        //       } else if (include) {
        //         addRow(row)
        //         include = false
        //       }
        //     }
        //     if (include) {
        //       addRow(row)
        //     }
        //   })
        //   table.setRowSelection(selectedRowIds)
        // },
        getPreSelectedRowModel: () => table.getCoreRowModel(),
        getSelectedRowModel: memo(() => [table.getState().rowSelection, table.getCoreRowModel()], (rowSelection, rowModel) => {
          if (!Object.keys(rowSelection).length) {
            return {
              rows: [],
              flatRows: [],
              rowsById: {}
            };
          }
          return selectRowsFn(table, rowModel);
        }, {
          key: "getSelectedRowModel",
          debug: () => {
            var _table$options$debugA;
            return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
          }
        }),
        getFilteredSelectedRowModel: memo(() => [table.getState().rowSelection, table.getFilteredRowModel()], (rowSelection, rowModel) => {
          if (!Object.keys(rowSelection).length) {
            return {
              rows: [],
              flatRows: [],
              rowsById: {}
            };
          }
          return selectRowsFn(table, rowModel);
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA2;
            return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugTable;
          }
        }),
        getGroupedSelectedRowModel: memo(() => [table.getState().rowSelection, table.getSortedRowModel()], (rowSelection, rowModel) => {
          if (!Object.keys(rowSelection).length) {
            return {
              rows: [],
              flatRows: [],
              rowsById: {}
            };
          }
          return selectRowsFn(table, rowModel);
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA3;
            return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugTable;
          }
        }),
        ///
        // getGroupingRowCanSelect: rowId => {
        //   const row = table.getRow(rowId)
        //   if (!row) {
        //     throw new Error()
        //   }
        //   if (typeof table.options.enableGroupingRowSelection === 'function') {
        //     return table.options.enableGroupingRowSelection(row)
        //   }
        //   return table.options.enableGroupingRowSelection ?? false
        // },
        getIsAllRowsSelected: () => {
          const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
          const {
            rowSelection
          } = table.getState();
          let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
          if (isAllRowsSelected) {
            if (preGroupedFlatRows.some((row) => row.getCanSelect() && !rowSelection[row.id])) {
              isAllRowsSelected = false;
            }
          }
          return isAllRowsSelected;
        },
        getIsAllPageRowsSelected: () => {
          const paginationFlatRows = table.getPaginationRowModel().flatRows.filter((row) => row.getCanSelect());
          const {
            rowSelection
          } = table.getState();
          let isAllPageRowsSelected = !!paginationFlatRows.length;
          if (isAllPageRowsSelected && paginationFlatRows.some((row) => !rowSelection[row.id])) {
            isAllPageRowsSelected = false;
          }
          return isAllPageRowsSelected;
        },
        getIsSomeRowsSelected: () => {
          var _table$getState$rowSe;
          const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
          return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
        },
        getIsSomePageRowsSelected: () => {
          const paginationFlatRows = table.getPaginationRowModel().flatRows;
          return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter((row) => row.getCanSelect()).some((d3) => d3.getIsSelected() || d3.getIsSomeSelected());
        },
        getToggleAllRowsSelectedHandler: () => {
          return (e3) => {
            table.toggleAllRowsSelected(e3.target.checked);
          };
        },
        getToggleAllPageRowsSelectedHandler: () => {
          return (e3) => {
            table.toggleAllPageRowsSelected(e3.target.checked);
          };
        }
      };
    },
    createRow: (row, table) => {
      return {
        toggleSelected: (value) => {
          const isSelected = row.getIsSelected();
          table.setRowSelection((old) => {
            value = typeof value !== "undefined" ? value : !isSelected;
            if (isSelected === value) {
              return old;
            }
            const selectedRowIds = {
              ...old
            };
            mutateRowIsSelected(selectedRowIds, row.id, value, table);
            return selectedRowIds;
          });
        },
        getIsSelected: () => {
          const {
            rowSelection
          } = table.getState();
          return isRowSelected(row, rowSelection);
        },
        getIsSomeSelected: () => {
          const {
            rowSelection
          } = table.getState();
          return isSubRowSelected(row, rowSelection) === "some";
        },
        getIsAllSubRowsSelected: () => {
          const {
            rowSelection
          } = table.getState();
          return isSubRowSelected(row, rowSelection) === "all";
        },
        getCanSelect: () => {
          var _table$options$enable;
          if (typeof table.options.enableRowSelection === "function") {
            return table.options.enableRowSelection(row);
          }
          return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
        },
        getCanSelectSubRows: () => {
          var _table$options$enable2;
          if (typeof table.options.enableSubRowSelection === "function") {
            return table.options.enableSubRowSelection(row);
          }
          return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
        },
        getCanMultiSelect: () => {
          var _table$options$enable3;
          if (typeof table.options.enableMultiRowSelection === "function") {
            return table.options.enableMultiRowSelection(row);
          }
          return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
        },
        getToggleSelectedHandler: () => {
          const canSelect = row.getCanSelect();
          return (e3) => {
            var _target;
            if (!canSelect)
              return;
            row.toggleSelected((_target = e3.target) == null ? void 0 : _target.checked);
          };
        }
      };
    }
  };
  var mutateRowIsSelected = (selectedRowIds, id, value, table) => {
    var _row$subRows;
    const row = table.getRow(id);
    if (value) {
      if (!row.getCanMultiSelect()) {
        Object.keys(selectedRowIds).forEach((key) => delete selectedRowIds[key]);
      }
      if (row.getCanSelect()) {
        selectedRowIds[id] = true;
      }
    } else {
      delete selectedRowIds[id];
    }
    if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
      row.subRows.forEach((row2) => mutateRowIsSelected(selectedRowIds, row2.id, value, table));
    }
  };
  function selectRowsFn(table, rowModel) {
    const rowSelection = table.getState().rowSelection;
    const newSelectedFlatRows = [];
    const newSelectedRowsById = {};
    const recurseRows = function(rows, depth) {
      return rows.map((row) => {
        var _row$subRows2;
        const isSelected = isRowSelected(row, rowSelection);
        if (isSelected) {
          newSelectedFlatRows.push(row);
          newSelectedRowsById[row.id] = row;
        }
        if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
          row = {
            ...row,
            subRows: recurseRows(row.subRows)
          };
        }
        if (isSelected) {
          return row;
        }
      }).filter(Boolean);
    };
    return {
      rows: recurseRows(rowModel.rows),
      flatRows: newSelectedFlatRows,
      rowsById: newSelectedRowsById
    };
  }
  function isRowSelected(row, selection) {
    var _selection$row$id;
    return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
  }
  function isSubRowSelected(row, selection, table) {
    if (row.subRows && row.subRows.length) {
      let allChildrenSelected = true;
      let someSelected = false;
      row.subRows.forEach((subRow) => {
        if (someSelected && !allChildrenSelected) {
          return;
        }
        if (isRowSelected(subRow, selection)) {
          someSelected = true;
        } else {
          allChildrenSelected = false;
        }
      });
      return allChildrenSelected ? "all" : someSelected ? "some" : false;
    }
    return false;
  }
  var reSplitAlphaNumeric = /([0-9]+)/gm;
  var alphanumeric = (rowA, rowB, columnId) => {
    return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
  };
  var alphanumericCaseSensitive = (rowA, rowB, columnId) => {
    return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
  };
  var text = (rowA, rowB, columnId) => {
    return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
  };
  var textCaseSensitive = (rowA, rowB, columnId) => {
    return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
  };
  var datetime = (rowA, rowB, columnId) => {
    const a3 = rowA.getValue(columnId);
    const b3 = rowB.getValue(columnId);
    return a3 > b3 ? 1 : a3 < b3 ? -1 : 0;
  };
  var basic = (rowA, rowB, columnId) => {
    return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
  };
  function compareBasic(a3, b3) {
    return a3 === b3 ? 0 : a3 > b3 ? 1 : -1;
  }
  function toString(a3) {
    if (typeof a3 === "number") {
      if (isNaN(a3) || a3 === Infinity || a3 === -Infinity) {
        return "";
      }
      return String(a3);
    }
    if (typeof a3 === "string") {
      return a3;
    }
    return "";
  }
  function compareAlphanumeric(aStr, bStr) {
    const a3 = aStr.split(reSplitAlphaNumeric).filter(Boolean);
    const b3 = bStr.split(reSplitAlphaNumeric).filter(Boolean);
    while (a3.length && b3.length) {
      const aa = a3.shift();
      const bb = b3.shift();
      const an2 = parseInt(aa, 10);
      const bn2 = parseInt(bb, 10);
      const combo = [an2, bn2].sort();
      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }
        if (bb > aa) {
          return -1;
        }
        continue;
      }
      if (isNaN(combo[1])) {
        return isNaN(an2) ? -1 : 1;
      }
      if (an2 > bn2) {
        return 1;
      }
      if (bn2 > an2) {
        return -1;
      }
    }
    return a3.length - b3.length;
  }
  var sortingFns = {
    alphanumeric,
    alphanumericCaseSensitive,
    text,
    textCaseSensitive,
    datetime,
    basic
  };
  var Sorting = {
    getInitialState: (state) => {
      return {
        sorting: [],
        ...state
      };
    },
    getDefaultColumnDef: () => {
      return {
        sortingFn: "auto"
      };
    },
    getDefaultOptions: (table) => {
      return {
        onSortingChange: makeStateUpdater("sorting", table),
        isMultiSortEvent: (e3) => {
          return e3.shiftKey;
        }
      };
    },
    createColumn: (column, table) => {
      return {
        getAutoSortingFn: () => {
          const firstRows = table.getFilteredRowModel().flatRows.slice(10);
          let isString = false;
          for (const row of firstRows) {
            const value = row == null ? void 0 : row.getValue(column.id);
            if (Object.prototype.toString.call(value) === "[object Date]") {
              return sortingFns.datetime;
            }
            if (typeof value === "string") {
              isString = true;
              if (value.split(reSplitAlphaNumeric).length > 1) {
                return sortingFns.alphanumeric;
              }
            }
          }
          if (isString) {
            return sortingFns.text;
          }
          return sortingFns.basic;
        },
        getAutoSortDir: () => {
          const firstRow = table.getFilteredRowModel().flatRows[0];
          const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
          if (typeof value === "string") {
            return "asc";
          }
          return "desc";
        },
        getSortingFn: () => {
          var _table$options$sortin, _table$options$sortin2;
          if (!column) {
            throw new Error();
          }
          return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === "auto" ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
        },
        toggleSorting: (desc, multi) => {
          const nextSortingOrder = column.getNextSortingOrder();
          const hasManualValue = typeof desc !== "undefined" && desc !== null;
          table.setSorting((old) => {
            const existingSorting = old == null ? void 0 : old.find((d3) => d3.id === column.id);
            const existingIndex = old == null ? void 0 : old.findIndex((d3) => d3.id === column.id);
            let newSorting = [];
            let sortAction;
            let nextDesc = hasManualValue ? desc : nextSortingOrder === "desc";
            if (old != null && old.length && column.getCanMultiSort() && multi) {
              if (existingSorting) {
                sortAction = "toggle";
              } else {
                sortAction = "add";
              }
            } else {
              if (old != null && old.length && existingIndex !== old.length - 1) {
                sortAction = "replace";
              } else if (existingSorting) {
                sortAction = "toggle";
              } else {
                sortAction = "replace";
              }
            }
            if (sortAction === "toggle") {
              if (!hasManualValue) {
                if (!nextSortingOrder) {
                  sortAction = "remove";
                }
              }
            }
            if (sortAction === "add") {
              var _table$options$maxMul;
              newSorting = [...old, {
                id: column.id,
                desc: nextDesc
              }];
              newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
            } else if (sortAction === "toggle") {
              newSorting = old.map((d3) => {
                if (d3.id === column.id) {
                  return {
                    ...d3,
                    desc: nextDesc
                  };
                }
                return d3;
              });
            } else if (sortAction === "remove") {
              newSorting = old.filter((d3) => d3.id !== column.id);
            } else {
              newSorting = [{
                id: column.id,
                desc: nextDesc
              }];
            }
            return newSorting;
          });
        },
        getFirstSortDir: () => {
          var _ref, _column$columnDef$sor;
          const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === "desc";
          return sortDescFirst ? "desc" : "asc";
        },
        getNextSortingOrder: (multi) => {
          var _table$options$enable, _table$options$enable2;
          const firstSortDirection = column.getFirstSortDir();
          const isSorted = column.getIsSorted();
          if (!isSorted) {
            return firstSortDirection;
          }
          if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && // If enableSortRemove, enable in general
          (multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true)) {
            return false;
          }
          return isSorted === "desc" ? "asc" : "desc";
        },
        getCanSort: () => {
          var _column$columnDef$ena, _table$options$enable3;
          return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
        },
        getCanMultiSort: () => {
          var _ref2, _column$columnDef$ena2;
          return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
        },
        getIsSorted: () => {
          var _table$getState$sorti;
          const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find((d3) => d3.id === column.id);
          return !columnSort ? false : columnSort.desc ? "desc" : "asc";
        },
        getSortIndex: () => {
          var _table$getState$sorti2, _table$getState$sorti3;
          return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex((d3) => d3.id === column.id)) != null ? _table$getState$sorti2 : -1;
        },
        clearSorting: () => {
          table.setSorting((old) => old != null && old.length ? old.filter((d3) => d3.id !== column.id) : []);
        },
        getToggleSortingHandler: () => {
          const canSort = column.getCanSort();
          return (e3) => {
            if (!canSort)
              return;
            e3.persist == null ? void 0 : e3.persist();
            column.toggleSorting == null ? void 0 : column.toggleSorting(void 0, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e3) : false);
          };
        }
      };
    },
    createTable: (table) => {
      return {
        setSorting: (updater) => table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater),
        resetSorting: (defaultState) => {
          var _table$initialState$s, _table$initialState;
          table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
        },
        getPreSortedRowModel: () => table.getGroupedRowModel(),
        getSortedRowModel: () => {
          if (!table._getSortedRowModel && table.options.getSortedRowModel) {
            table._getSortedRowModel = table.options.getSortedRowModel(table);
          }
          if (table.options.manualSorting || !table._getSortedRowModel) {
            return table.getPreSortedRowModel();
          }
          return table._getSortedRowModel();
        }
      };
    }
  };
  var Visibility = {
    getInitialState: (state) => {
      return {
        columnVisibility: {},
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onColumnVisibilityChange: makeStateUpdater("columnVisibility", table)
      };
    },
    createColumn: (column, table) => {
      return {
        toggleVisibility: (value) => {
          if (column.getCanHide()) {
            table.setColumnVisibility((old) => ({
              ...old,
              [column.id]: value != null ? value : !column.getIsVisible()
            }));
          }
        },
        getIsVisible: () => {
          var _table$getState$colum, _table$getState$colum2;
          return (_table$getState$colum = (_table$getState$colum2 = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum2[column.id]) != null ? _table$getState$colum : true;
        },
        getCanHide: () => {
          var _column$columnDef$ena, _table$options$enable;
          return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
        },
        getToggleVisibilityHandler: () => {
          return (e3) => {
            column.toggleVisibility == null ? void 0 : column.toggleVisibility(e3.target.checked);
          };
        }
      };
    },
    createRow: (row, table) => {
      return {
        _getAllVisibleCells: memo(() => [row.getAllCells(), table.getState().columnVisibility], (cells) => {
          return cells.filter((cell) => cell.column.getIsVisible());
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA;
            return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
          }
        }),
        getVisibleCells: memo(() => [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()], (left, center, right) => [...left, ...center, ...right], {
          key: "row.getVisibleCells",
          debug: () => {
            var _table$options$debugA2;
            return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
          }
        })
      };
    },
    createTable: (table) => {
      const makeVisibleColumnsMethod = (key, getColumns) => {
        return memo(() => [getColumns(), getColumns().filter((d3) => d3.getIsVisible()).map((d3) => d3.id).join("_")], (columns) => {
          return columns.filter((d3) => d3.getIsVisible == null ? void 0 : d3.getIsVisible());
        }, {
          key,
          debug: () => {
            var _table$options$debugA3;
            return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugColumns;
          }
        });
      };
      return {
        getVisibleFlatColumns: makeVisibleColumnsMethod("getVisibleFlatColumns", () => table.getAllFlatColumns()),
        getVisibleLeafColumns: makeVisibleColumnsMethod("getVisibleLeafColumns", () => table.getAllLeafColumns()),
        getLeftVisibleLeafColumns: makeVisibleColumnsMethod("getLeftVisibleLeafColumns", () => table.getLeftLeafColumns()),
        getRightVisibleLeafColumns: makeVisibleColumnsMethod("getRightVisibleLeafColumns", () => table.getRightLeafColumns()),
        getCenterVisibleLeafColumns: makeVisibleColumnsMethod("getCenterVisibleLeafColumns", () => table.getCenterLeafColumns()),
        setColumnVisibility: (updater) => table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater),
        resetColumnVisibility: (defaultState) => {
          var _table$initialState$c;
          table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
        },
        toggleAllColumnsVisible: (value) => {
          var _value;
          value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
          table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column) => ({
            ...obj,
            [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
          }), {}));
        },
        getIsAllColumnsVisible: () => !table.getAllLeafColumns().some((column) => !(column.getIsVisible != null && column.getIsVisible())),
        getIsSomeColumnsVisible: () => table.getAllLeafColumns().some((column) => column.getIsVisible == null ? void 0 : column.getIsVisible()),
        getToggleAllColumnsVisibilityHandler: () => {
          return (e3) => {
            var _target;
            table.toggleAllColumnsVisible((_target = e3.target) == null ? void 0 : _target.checked);
          };
        }
      };
    }
  };
  var features = [Headers, Visibility, Ordering, Pinning, Filters, Sorting, Grouping, Expanding, Pagination, RowSelection, ColumnSizing];
  function createTable(options) {
    var _options$initialState;
    if (options.debugAll || options.debugTable) {
      console.info("Creating Table Instance...");
    }
    let table = {
      _features: features
    };
    const defaultOptions = table._features.reduce((obj, feature) => {
      return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
    }, {});
    const mergeOptions = (options2) => {
      if (table.options.mergeOptions) {
        return table.options.mergeOptions(defaultOptions, options2);
      }
      return {
        ...defaultOptions,
        ...options2
      };
    };
    const coreInitialState = {};
    let initialState = {
      ...coreInitialState,
      ...(_options$initialState = options.initialState) != null ? _options$initialState : {}
    };
    table._features.forEach((feature) => {
      var _feature$getInitialSt;
      initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
    });
    const queued = [];
    let queuedTimeout = false;
    const coreInstance = {
      _features: features,
      options: {
        ...defaultOptions,
        ...options
      },
      initialState,
      _queue: (cb) => {
        queued.push(cb);
        if (!queuedTimeout) {
          queuedTimeout = true;
          Promise.resolve().then(() => {
            while (queued.length) {
              queued.shift()();
            }
            queuedTimeout = false;
          }).catch((error) => setTimeout(() => {
            throw error;
          }));
        }
      },
      reset: () => {
        table.setState(table.initialState);
      },
      setOptions: (updater) => {
        const newOptions = functionalUpdate(updater, table.options);
        table.options = mergeOptions(newOptions);
      },
      getState: () => {
        return table.options.state;
      },
      setState: (updater) => {
        table.options.onStateChange == null ? void 0 : table.options.onStateChange(updater);
      },
      _getRowId: (row, index, parent) => {
        var _table$options$getRow;
        return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : `${parent ? [parent.id, index].join(".") : index}`;
      },
      getCoreRowModel: () => {
        if (!table._getCoreRowModel) {
          table._getCoreRowModel = table.options.getCoreRowModel(table);
        }
        return table._getCoreRowModel();
      },
      // The final calls start at the bottom of the model,
      // expanded rows, which then work their way up
      getRowModel: () => {
        return table.getPaginationRowModel();
      },
      getRow: (id) => {
        const row = table.getRowModel().rowsById[id];
        if (!row) {
          if (true) {
            throw new Error(`getRow expected an ID, but got ${id}`);
          }
          throw new Error();
        }
        return row;
      },
      _getDefaultColumnDef: memo(() => [table.options.defaultColumn], (defaultColumn) => {
        var _defaultColumn;
        defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
        return {
          header: (props) => {
            const resolvedColumnDef = props.header.column.columnDef;
            if (resolvedColumnDef.accessorKey) {
              return resolvedColumnDef.accessorKey;
            }
            if (resolvedColumnDef.accessorFn) {
              return resolvedColumnDef.id;
            }
            return null;
          },
          // footer: props => props.header.column.id,
          cell: (props) => {
            var _props$renderValue$to, _props$renderValue;
            return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null ? void 0 : _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
          },
          ...table._features.reduce((obj, feature) => {
            return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
          }, {}),
          ...defaultColumn
        };
      }, {
        debug: () => {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugColumns;
        },
        key: "getDefaultColumnDef"
      }),
      _getColumnDefs: () => table.options.columns,
      getAllColumns: memo(() => [table._getColumnDefs()], (columnDefs) => {
        const recurseColumns = function(columnDefs2, parent, depth) {
          if (depth === void 0) {
            depth = 0;
          }
          return columnDefs2.map((columnDef) => {
            const column = createColumn(table, columnDef, depth, parent);
            const groupingColumnDef = columnDef;
            column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
            return column;
          });
        };
        return recurseColumns(columnDefs);
      }, {
        key: "getAllColumns",
        debug: () => {
          var _table$options$debugA2;
          return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugColumns;
        }
      }),
      getAllFlatColumns: memo(() => [table.getAllColumns()], (allColumns) => {
        return allColumns.flatMap((column) => {
          return column.getFlatColumns();
        });
      }, {
        key: "getAllFlatColumns",
        debug: () => {
          var _table$options$debugA3;
          return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugColumns;
        }
      }),
      _getAllFlatColumnsById: memo(() => [table.getAllFlatColumns()], (flatColumns) => {
        return flatColumns.reduce((acc, column) => {
          acc[column.id] = column;
          return acc;
        }, {});
      }, {
        key: "getAllFlatColumnsById",
        debug: () => {
          var _table$options$debugA4;
          return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugColumns;
        }
      }),
      getAllLeafColumns: memo(() => [table.getAllColumns(), table._getOrderColumnsFn()], (allColumns, orderColumns2) => {
        let leafColumns = allColumns.flatMap((column) => column.getLeafColumns());
        return orderColumns2(leafColumns);
      }, {
        key: "getAllLeafColumns",
        debug: () => {
          var _table$options$debugA5;
          return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugColumns;
        }
      }),
      getColumn: (columnId) => {
        const column = table._getAllFlatColumnsById()[columnId];
        if (!column) {
          console.error(`[Table] Column with id '${columnId}' does not exist.`);
        }
        return column;
      }
    };
    Object.assign(table, coreInstance);
    table._features.forEach((feature) => {
      return Object.assign(table, feature.createTable == null ? void 0 : feature.createTable(table));
    });
    return table;
  }
  function createCell(table, row, column, columnId) {
    const getRenderValue = () => {
      var _cell$getValue;
      return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
    };
    const cell = {
      id: `${row.id}_${column.id}`,
      row,
      column,
      getValue: () => row.getValue(columnId),
      renderValue: getRenderValue,
      getContext: memo(() => [table, column, row, cell], (table2, column2, row2, cell2) => ({
        table: table2,
        column: column2,
        row: row2,
        cell: cell2,
        getValue: cell2.getValue,
        renderValue: cell2.renderValue
      }), {
        key: "cell.getContext",
        debug: () => table.options.debugAll
      })
    };
    table._features.forEach((feature) => {
      Object.assign(cell, feature.createCell == null ? void 0 : feature.createCell(cell, column, row, table));
    }, {});
    return cell;
  }
  var createRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
    let row = {
      id,
      index: rowIndex,
      original,
      depth,
      parentId,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (columnId) => {
        if (row._valuesCache.hasOwnProperty(columnId)) {
          return row._valuesCache[columnId];
        }
        const column = table.getColumn(columnId);
        if (!(column != null && column.accessorFn)) {
          return void 0;
        }
        row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
        return row._valuesCache[columnId];
      },
      getUniqueValues: (columnId) => {
        if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
          return row._uniqueValuesCache[columnId];
        }
        const column = table.getColumn(columnId);
        if (!(column != null && column.accessorFn)) {
          return void 0;
        }
        if (!column.columnDef.getUniqueValues) {
          row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
          return row._uniqueValuesCache[columnId];
        }
        row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
        return row._uniqueValuesCache[columnId];
      },
      renderValue: (columnId) => {
        var _row$getValue;
        return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
      },
      subRows: subRows != null ? subRows : [],
      getLeafRows: () => flattenBy(row.subRows, (d3) => d3.subRows),
      getParentRow: () => row.parentId ? table.getRow(row.parentId) : void 0,
      getParentRows: () => {
        let parentRows = [];
        let currentRow = row;
        while (true) {
          const parentRow = currentRow.getParentRow();
          if (!parentRow)
            break;
          parentRows.push(parentRow);
          currentRow = parentRow;
        }
        return parentRows.reverse();
      },
      getAllCells: memo(() => [table.getAllLeafColumns()], (leafColumns) => {
        return leafColumns.map((column) => {
          return createCell(table, row, column, column.id);
        });
      }, {
        key: "row.getAllCells",
        debug: () => {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
        }
      }),
      _getAllCellsByColumnId: memo(() => [row.getAllCells()], (allCells) => {
        return allCells.reduce((acc, cell) => {
          acc[cell.column.id] = cell;
          return acc;
        }, {});
      }, {
        key: false,
        debug: () => {
          var _table$options$debugA2;
          return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
        }
      })
    };
    for (let i3 = 0; i3 < table._features.length; i3++) {
      const feature = table._features[i3];
      Object.assign(row, feature == null ? void 0 : feature.createRow == null ? void 0 : feature.createRow(row, table));
    }
    return row;
  };
  function getCoreRowModel() {
    return (table) => memo(() => [table.options.data], (data) => {
      const rowModel = {
        rows: [],
        flatRows: [],
        rowsById: {}
      };
      const accessRows = function(originalRows, depth, parentRow) {
        if (depth === void 0) {
          depth = 0;
        }
        const rows = [];
        for (let i3 = 0; i3 < originalRows.length; i3++) {
          const row = createRow(table, table._getRowId(originalRows[i3], i3, parentRow), originalRows[i3], i3, depth, void 0, parentRow == null ? void 0 : parentRow.id);
          rowModel.flatRows.push(row);
          rowModel.rowsById[row.id] = row;
          rows.push(row);
          if (table.options.getSubRows) {
            var _row$originalSubRows;
            row.originalSubRows = table.options.getSubRows(originalRows[i3], i3);
            if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
              row.subRows = accessRows(row.originalSubRows, depth + 1, row);
            }
          }
        }
        return rows;
      };
      rowModel.rows = accessRows(data);
      return rowModel;
    }, {
      key: "getRowModel",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: () => {
        table._autoResetPageIndex();
      }
    });
  }
  function getSortedRowModel() {
    return (table) => memo(() => [table.getState().sorting, table.getPreSortedRowModel()], (sorting, rowModel) => {
      if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
        return rowModel;
      }
      const sortingState = table.getState().sorting;
      const sortedFlatRows = [];
      const availableSorting = sortingState.filter((sort) => {
        var _table$getColumn;
        return (_table$getColumn = table.getColumn(sort.id)) == null ? void 0 : _table$getColumn.getCanSort();
      });
      const columnInfoById = {};
      availableSorting.forEach((sortEntry) => {
        const column = table.getColumn(sortEntry.id);
        if (!column)
          return;
        columnInfoById[sortEntry.id] = {
          sortUndefined: column.columnDef.sortUndefined,
          invertSorting: column.columnDef.invertSorting,
          sortingFn: column.getSortingFn()
        };
      });
      const sortData = (rows) => {
        const sortedData = [...rows];
        sortedData.sort((rowA, rowB) => {
          for (let i3 = 0; i3 < availableSorting.length; i3 += 1) {
            var _sortEntry$desc;
            const sortEntry = availableSorting[i3];
            const columnInfo = columnInfoById[sortEntry.id];
            const isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
            if (columnInfo.sortUndefined) {
              const aValue = rowA.getValue(sortEntry.id);
              const bValue = rowB.getValue(sortEntry.id);
              const aUndefined = typeof aValue === "undefined";
              const bUndefined = typeof bValue === "undefined";
              if (aUndefined || bUndefined) {
                return aUndefined && bUndefined ? 0 : aUndefined ? columnInfo.sortUndefined : -columnInfo.sortUndefined;
              }
            }
            let sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
            if (sortInt !== 0) {
              if (isDesc) {
                sortInt *= -1;
              }
              if (columnInfo.invertSorting) {
                sortInt *= -1;
              }
              return sortInt;
            }
          }
          return rowA.index - rowB.index;
        });
        sortedData.forEach((row) => {
          var _row$subRows;
          sortedFlatRows.push(row);
          if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
            row.subRows = sortData(row.subRows);
          }
        });
        return sortedData;
      };
      return {
        rows: sortData(rowModel.rows),
        flatRows: sortedFlatRows,
        rowsById: rowModel.rowsById
      };
    }, {
      key: "getSortedRowModel",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: () => {
        table._autoResetPageIndex();
      }
    });
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/react-table/build/lib/index.mjs
  function flexRender(Comp, props) {
    return !Comp ? null : isReactComponent(Comp) ? /* @__PURE__ */ y(Comp, props) : Comp;
  }
  function isReactComponent(component) {
    return isClassComponent(component) || typeof component === "function" || isExoticComponent(component);
  }
  function isClassComponent(component) {
    return typeof component === "function" && (() => {
      const proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    })();
  }
  function isExoticComponent(component) {
    return typeof component === "object" && typeof component.$$typeof === "symbol" && ["react.memo", "react.forward_ref"].includes(component.$$typeof.description);
  }
  function useReactTable(options) {
    const resolvedOptions = {
      state: {},
      // Dummy state
      onStateChange: () => {
      },
      // noop
      renderFallbackValue: null,
      ...options
    };
    const [tableRef] = h2(() => ({
      current: createTable(resolvedOptions)
    }));
    const [state, setState] = h2(() => tableRef.current.initialState);
    tableRef.current.setOptions((prev) => ({
      ...prev,
      ...options,
      state: {
        ...state,
        ...options.state
      },
      // Similarly, we'll maintain both our internal state and any user-provided
      // state.
      onStateChange: (updater) => {
        setState(updater);
        options.onStateChange == null ? void 0 : options.onStateChange(updater);
      }
    }));
    return tableRef.current;
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/react-virtual/build/lib/_virtual/_rollupPluginBabelHelpers.mjs
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/virtual-core/build/lib/_virtual/_rollupPluginBabelHelpers.mjs
  function _extends2() {
    _extends2 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/virtual-core/build/lib/utils.mjs
  function memo2(getDeps, fn2, opts) {
    var _opts$initialDeps;
    var deps = (_opts$initialDeps = opts.initialDeps) != null ? _opts$initialDeps : [];
    var result;
    return function() {
      var depTime;
      if (opts.key && opts.debug != null && opts.debug())
        depTime = Date.now();
      var newDeps = getDeps();
      var depsChanged = newDeps.length !== deps.length || newDeps.some(function(dep, index) {
        return deps[index] !== dep;
      });
      if (!depsChanged) {
        return result;
      }
      deps = newDeps;
      var resultTime;
      if (opts.key && opts.debug != null && opts.debug())
        resultTime = Date.now();
      result = fn2.apply(void 0, newDeps);
      if (opts.key && opts.debug != null && opts.debug()) {
        var depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        var resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        var resultFpsPercentage = resultEndTime / 16;
        var pad = function pad2(str, num) {
          str = String(str);
          while (str.length < num) {
            str = " " + str;
          }
          return str;
        };
        console.info("%c\u23F1 " + pad(resultEndTime, 5) + " /" + pad(depEndTime, 5) + " ms", "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" + Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120)) + "deg 100% 31%);", opts == null ? void 0 : opts.key);
      }
      opts == null ? void 0 : opts.onChange == null ? void 0 : opts.onChange(result);
      return result;
    };
  }
  function notUndefined(value, msg) {
    if (value === void 0) {
      throw new Error("Unexpected undefined" + (msg ? ": " + msg : ""));
    } else {
      return value;
    }
  }
  var approxEqual = function approxEqual2(a3, b3) {
    return Math.abs(a3 - b3) < 1;
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/virtual-core/build/lib/index.mjs
  var defaultKeyExtractor = function defaultKeyExtractor2(index) {
    return index;
  };
  var defaultRangeExtractor = function defaultRangeExtractor2(range) {
    var start = Math.max(range.startIndex - range.overscan, 0);
    var end = Math.min(range.endIndex + range.overscan, range.count - 1);
    var arr = [];
    for (var _i = start; _i <= end; _i++) {
      arr.push(_i);
    }
    return arr;
  };
  var observeElementRect = function observeElementRect2(instance, cb) {
    var element = instance.scrollElement;
    if (!element) {
      return;
    }
    var handler = function handler2(rect) {
      var width = rect.width, height = rect.height;
      cb({
        width: Math.round(width),
        height: Math.round(height)
      });
    };
    handler(element.getBoundingClientRect());
    var observer = new ResizeObserver(function(entries) {
      var entry = entries[0];
      if (entry != null && entry.borderBoxSize) {
        var box = entry.borderBoxSize[0];
        if (box) {
          handler({
            width: box.inlineSize,
            height: box.blockSize
          });
          return;
        }
      }
      handler(element.getBoundingClientRect());
    });
    observer.observe(element, {
      box: "border-box"
    });
    return function() {
      observer.unobserve(element);
    };
  };
  var observeElementOffset = function observeElementOffset2(instance, cb) {
    var element = instance.scrollElement;
    if (!element) {
      return;
    }
    var handler = function handler2() {
      cb(element[instance.options.horizontal ? "scrollLeft" : "scrollTop"]);
    };
    handler();
    element.addEventListener("scroll", handler, {
      passive: true
    });
    return function() {
      element.removeEventListener("scroll", handler);
    };
  };
  var measureElement = function measureElement2(element, entry, instance) {
    if (entry != null && entry.borderBoxSize) {
      var box = entry.borderBoxSize[0];
      if (box) {
        var size = Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
        return size;
      }
    }
    return Math.round(element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]);
  };
  var elementScroll = function elementScroll2(offset, _ref2, instance) {
    var _instance$scrollEleme3, _instance$scrollEleme4;
    var _ref2$adjustments = _ref2.adjustments, adjustments = _ref2$adjustments === void 0 ? 0 : _ref2$adjustments, behavior = _ref2.behavior;
    var toOffset = offset + adjustments;
    (_instance$scrollEleme3 = instance.scrollElement) == null ? void 0 : _instance$scrollEleme3.scrollTo == null ? void 0 : _instance$scrollEleme3.scrollTo((_instance$scrollEleme4 = {}, _instance$scrollEleme4[instance.options.horizontal ? "left" : "top"] = toOffset, _instance$scrollEleme4.behavior = behavior, _instance$scrollEleme4));
  };
  var Virtualizer = function Virtualizer2(_opts) {
    var _this = this;
    this.unsubs = [];
    this.scrollElement = null;
    this.isScrolling = false;
    this.isScrollingTimeoutId = null;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.measureElementCache = /* @__PURE__ */ new Map();
    this.observer = function() {
      var _ro = null;
      var get = function get2() {
        if (_ro) {
          return _ro;
        } else if (typeof ResizeObserver !== "undefined") {
          return _ro = new ResizeObserver(function(entries) {
            entries.forEach(function(entry) {
              _this._measureElement(entry.target, entry);
            });
          });
        } else {
          return null;
        }
      };
      return {
        disconnect: function disconnect() {
          var _get;
          return (_get = get()) == null ? void 0 : _get.disconnect();
        },
        observe: function observe(target) {
          var _get2;
          return (_get2 = get()) == null ? void 0 : _get2.observe(target, {
            box: "border-box"
          });
        },
        unobserve: function unobserve(target) {
          var _get3;
          return (_get3 = get()) == null ? void 0 : _get3.unobserve(target);
        }
      };
    }();
    this.range = {
      startIndex: 0,
      endIndex: 0
    };
    this.setOptions = function(opts) {
      Object.entries(opts).forEach(function(_ref3) {
        var key = _ref3[0], value = _ref3[1];
        if (typeof value === "undefined")
          delete opts[key];
      });
      _this.options = _extends2({
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: function onChange() {
        },
        measureElement,
        initialRect: {
          width: 0,
          height: 0
        },
        scrollMargin: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1
      }, opts);
    };
    this.notify = function() {
      _this.options.onChange == null ? void 0 : _this.options.onChange(_this);
    };
    this.cleanup = function() {
      _this.unsubs.filter(Boolean).forEach(function(d3) {
        return d3();
      });
      _this.unsubs = [];
      _this.scrollElement = null;
    };
    this._didMount = function() {
      _this.measureElementCache.forEach(_this.observer.observe);
      return function() {
        _this.observer.disconnect();
        _this.cleanup();
      };
    };
    this._willUpdate = function() {
      var scrollElement = _this.options.getScrollElement();
      if (_this.scrollElement !== scrollElement) {
        _this.cleanup();
        _this.scrollElement = scrollElement;
        _this._scrollToOffset(_this.scrollOffset, {
          adjustments: void 0,
          behavior: void 0
        });
        _this.unsubs.push(_this.options.observeElementRect(_this, function(rect) {
          var prev = _this.scrollRect;
          _this.scrollRect = rect;
          if (_this.options.horizontal ? rect.width !== prev.width : rect.height !== prev.height) {
            _this.maybeNotify();
          }
        }));
        _this.unsubs.push(_this.options.observeElementOffset(_this, function(offset) {
          _this.scrollAdjustments = 0;
          if (_this.scrollOffset === offset) {
            return;
          }
          if (_this.isScrollingTimeoutId !== null) {
            clearTimeout(_this.isScrollingTimeoutId);
            _this.isScrollingTimeoutId = null;
          }
          _this.isScrolling = true;
          _this.scrollDirection = _this.scrollOffset < offset ? "forward" : "backward";
          _this.scrollOffset = offset;
          _this.maybeNotify();
          _this.isScrollingTimeoutId = setTimeout(function() {
            _this.isScrollingTimeoutId = null;
            _this.isScrolling = false;
            _this.scrollDirection = null;
            _this.maybeNotify();
          }, _this.options.scrollingDelay);
        }));
      }
    };
    this.getSize = function() {
      return _this.scrollRect[_this.options.horizontal ? "width" : "height"];
    };
    this.memoOptions = memo2(function() {
      return [_this.options.count, _this.options.paddingStart, _this.options.scrollMargin, _this.options.getItemKey];
    }, function(count2, paddingStart, scrollMargin, getItemKey) {
      _this.pendingMeasuredCacheIndexes = [];
      return {
        count: count2,
        paddingStart,
        scrollMargin,
        getItemKey
      };
    }, {
      key: false
    });
    this.getFurthestMeasurement = function(measurements, index) {
      var furthestMeasurementsFound = /* @__PURE__ */ new Map();
      var furthestMeasurements = /* @__PURE__ */ new Map();
      for (var m3 = index - 1; m3 >= 0; m3--) {
        var measurement = measurements[m3];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        var previousFurthestMeasurement = furthestMeasurements.get(measurement.lane);
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === _this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === _this.options.lanes ? Array.from(furthestMeasurements.values()).sort(function(a3, b3) {
        return a3.end - b3.end;
      })[0] : void 0;
    };
    this.getMeasurements = memo2(function() {
      return [_this.memoOptions(), _this.itemSizeCache];
    }, function(_ref4, itemSizeCache) {
      var count2 = _ref4.count, paddingStart = _ref4.paddingStart, scrollMargin = _ref4.scrollMargin, getItemKey = _ref4.getItemKey;
      var min2 = _this.pendingMeasuredCacheIndexes.length > 0 ? Math.min.apply(Math, _this.pendingMeasuredCacheIndexes) : 0;
      _this.pendingMeasuredCacheIndexes = [];
      var measurements = _this.measurementsCache.slice(0, min2);
      for (var _i2 = min2; _i2 < count2; _i2++) {
        var key = getItemKey(_i2);
        var furthestMeasurement = _this.options.lanes === 1 ? measurements[_i2 - 1] : _this.getFurthestMeasurement(measurements, _i2);
        var start = furthestMeasurement ? furthestMeasurement.end : paddingStart + scrollMargin;
        var measuredSize = itemSizeCache.get(key);
        var size = typeof measuredSize === "number" ? measuredSize : _this.options.estimateSize(_i2);
        var end = start + size;
        var lane = furthestMeasurement ? furthestMeasurement.lane : _i2 % _this.options.lanes;
        measurements[_i2] = {
          index: _i2,
          start,
          size,
          end,
          key,
          lane
        };
      }
      _this.measurementsCache = measurements;
      return measurements;
    }, {
      key: "getMeasurements",
      debug: function debug() {
        return _this.options.debug;
      }
    });
    this.calculateRange = memo2(function() {
      return [_this.getMeasurements(), _this.getSize(), _this.scrollOffset];
    }, function(measurements, outerSize, scrollOffset) {
      return _this.range = calculateRange({
        measurements,
        outerSize,
        scrollOffset
      });
    }, {
      key: "calculateRange",
      debug: function debug() {
        return _this.options.debug;
      }
    });
    this.maybeNotify = memo2(function() {
      var range = _this.calculateRange();
      return [range.startIndex, range.endIndex, _this.isScrolling];
    }, function() {
      _this.notify();
    }, {
      key: "maybeNotify",
      debug: function debug() {
        return _this.options.debug;
      },
      initialDeps: [this.range.startIndex, this.range.endIndex, this.isScrolling]
    });
    this.getIndexes = memo2(function() {
      return [_this.options.rangeExtractor, _this.calculateRange(), _this.options.overscan, _this.options.count];
    }, function(rangeExtractor, range, overscan, count2) {
      return rangeExtractor(_extends2({}, range, {
        overscan,
        count: count2
      }));
    }, {
      key: "getIndexes",
      debug: function debug() {
        return _this.options.debug;
      }
    });
    this.indexFromElement = function(node) {
      var attributeName = _this.options.indexAttribute;
      var indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn("Missing attribute name '" + attributeName + "={index}' on measured element.");
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = function(node, entry) {
      var _this$itemSizeCache$g;
      var index = _this.indexFromElement(node);
      var item = _this.measurementsCache[index];
      if (!item) {
        return;
      }
      var prevNode = _this.measureElementCache.get(item.key);
      if (!node.isConnected) {
        _this.observer.unobserve(node);
        if (node === prevNode) {
          _this.measureElementCache["delete"](item.key);
        }
        return;
      }
      if (prevNode !== node) {
        if (prevNode) {
          _this.observer.unobserve(prevNode);
        }
        _this.observer.observe(node);
        _this.measureElementCache.set(item.key, node);
      }
      var measuredItemSize = _this.options.measureElement(node, entry, _this);
      var itemSize = (_this$itemSizeCache$g = _this.itemSizeCache.get(item.key)) != null ? _this$itemSizeCache$g : item.size;
      var delta = measuredItemSize - itemSize;
      if (delta !== 0) {
        if (item.start < _this.scrollOffset) {
          if (_this.options.debug) {
            console.info("correction", delta);
          }
          _this._scrollToOffset(_this.scrollOffset, {
            adjustments: _this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        _this.pendingMeasuredCacheIndexes.push(index);
        _this.itemSizeCache = new Map(_this.itemSizeCache.set(item.key, measuredItemSize));
        _this.notify();
      }
    };
    this.measureElement = function(node) {
      if (!node) {
        return;
      }
      _this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo2(function() {
      return [_this.getIndexes(), _this.getMeasurements()];
    }, function(indexes, measurements) {
      var virtualItems = [];
      for (var k4 = 0, len = indexes.length; k4 < len; k4++) {
        var _i3 = indexes[k4];
        var measurement = measurements[_i3];
        virtualItems.push(measurement);
      }
      return virtualItems;
    }, {
      key: "getIndexes",
      debug: function debug() {
        return _this.options.debug;
      }
    });
    this.getVirtualItemForOffset = function(offset) {
      var measurements = _this.getMeasurements();
      return notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, function(index) {
        return notUndefined(measurements[index]).start;
      }, offset)]);
    };
    this.getOffsetForAlignment = function(toOffset, align) {
      var size = _this.getSize();
      if (align === "auto") {
        if (toOffset <= _this.scrollOffset) {
          align = "start";
        } else if (toOffset >= _this.scrollOffset + size) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size;
      } else if (align === "center") {
        toOffset = toOffset - size / 2;
      }
      var scrollSizeProp = _this.options.horizontal ? "scrollWidth" : "scrollHeight";
      var scrollSize = _this.scrollElement ? "document" in _this.scrollElement ? _this.scrollElement.document.documentElement[scrollSizeProp] : _this.scrollElement[scrollSizeProp] : 0;
      var maxOffset = scrollSize - _this.getSize();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = function(index, align) {
      if (align === void 0) {
        align = "auto";
      }
      index = Math.max(0, Math.min(index, _this.options.count - 1));
      var measurement = notUndefined(_this.getMeasurements()[index]);
      if (align === "auto") {
        if (measurement.end >= _this.scrollOffset + _this.getSize() - _this.options.scrollPaddingEnd) {
          align = "end";
        } else if (measurement.start <= _this.scrollOffset + _this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [_this.scrollOffset, align];
        }
      }
      var toOffset = align === "end" ? measurement.end + _this.options.scrollPaddingEnd : measurement.start - _this.options.scrollPaddingStart;
      return [_this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = function() {
      return _this.measureElementCache.size > 0;
    };
    this.cancelScrollToIndex = function() {
      if (_this.scrollToIndexTimeoutId !== null) {
        clearTimeout(_this.scrollToIndexTimeoutId);
        _this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = function(toOffset, _temp) {
      var _ref5 = _temp === void 0 ? {} : _temp, _ref5$align = _ref5.align, align = _ref5$align === void 0 ? "start" : _ref5$align, behavior = _ref5.behavior;
      _this.cancelScrollToIndex();
      if (behavior === "smooth" && _this.isDynamicMode()) {
        console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
      }
      _this._scrollToOffset(_this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = function(index, _temp2) {
      var _ref6 = _temp2 === void 0 ? {} : _temp2, _ref6$align = _ref6.align, initialAlign = _ref6$align === void 0 ? "auto" : _ref6$align, behavior = _ref6.behavior;
      index = Math.max(0, Math.min(index, _this.options.count - 1));
      _this.cancelScrollToIndex();
      if (behavior === "smooth" && _this.isDynamicMode()) {
        console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
      }
      var _this$getOffsetForInd = _this.getOffsetForIndex(index, initialAlign), toOffset = _this$getOffsetForInd[0], align = _this$getOffsetForInd[1];
      _this._scrollToOffset(toOffset, {
        adjustments: void 0,
        behavior
      });
      if (behavior !== "smooth" && _this.isDynamicMode()) {
        _this.scrollToIndexTimeoutId = setTimeout(function() {
          _this.scrollToIndexTimeoutId = null;
          var elementInDOM = _this.measureElementCache.has(_this.options.getItemKey(index));
          if (elementInDOM) {
            var _this$getOffsetForInd2 = _this.getOffsetForIndex(index, align), _toOffset = _this$getOffsetForInd2[0];
            if (!approxEqual(_toOffset, _this.scrollOffset)) {
              _this.scrollToIndex(index, {
                align,
                behavior
              });
            }
          } else {
            _this.scrollToIndex(index, {
              align,
              behavior
            });
          }
        });
      }
    };
    this.scrollBy = function(delta, _temp3) {
      var _ref7 = _temp3 === void 0 ? {} : _temp3, behavior = _ref7.behavior;
      _this.cancelScrollToIndex();
      if (behavior === "smooth" && _this.isDynamicMode()) {
        console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
      }
      _this._scrollToOffset(_this.scrollOffset + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = function() {
      var _this$getMeasurements;
      return (((_this$getMeasurements = _this.getMeasurements()[_this.options.count - 1]) == null ? void 0 : _this$getMeasurements.end) || _this.options.paddingStart) - _this.options.scrollMargin + _this.options.paddingEnd;
    };
    this._scrollToOffset = function(offset, _ref8) {
      var adjustments = _ref8.adjustments, behavior = _ref8.behavior;
      _this.options.scrollToFn(offset, {
        behavior,
        adjustments
      }, _this);
    };
    this.measure = function() {
      _this.itemSizeCache = /* @__PURE__ */ new Map();
      _this.notify();
    };
    this.setOptions(_opts);
    this.scrollRect = this.options.initialRect;
    this.scrollOffset = this.options.initialOffset;
    this.measurementsCache = this.options.initialMeasurementsCache;
    this.measurementsCache.forEach(function(item) {
      _this.itemSizeCache.set(item.key, item.size);
    });
    this.maybeNotify();
  };
  var findNearestBinarySearch = function findNearestBinarySearch2(low, high, getCurrentValue, value) {
    while (low <= high) {
      var middle = (low + high) / 2 | 0;
      var currentValue = getCurrentValue(middle);
      if (currentValue < value) {
        low = middle + 1;
      } else if (currentValue > value) {
        high = middle - 1;
      } else {
        return middle;
      }
    }
    if (low > 0) {
      return low - 1;
    } else {
      return 0;
    }
  };
  function calculateRange(_ref9) {
    var measurements = _ref9.measurements, outerSize = _ref9.outerSize, scrollOffset = _ref9.scrollOffset;
    var count2 = measurements.length - 1;
    var getOffset = function getOffset2(index) {
      return measurements[index].start;
    };
    var startIndex = findNearestBinarySearch(0, count2, getOffset, scrollOffset);
    var endIndex = startIndex;
    while (endIndex < count2 && measurements[endIndex].end < scrollOffset + outerSize) {
      endIndex++;
    }
    return {
      startIndex,
      endIndex
    };
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/react-virtual/build/lib/index.mjs
  var useIsomorphicLayoutEffect = typeof document !== "undefined" ? y2 : p2;
  function useVirtualizerBase(options) {
    var rerender = s2(function() {
      return {};
    }, {})[1];
    var resolvedOptions = _extends({}, options, {
      onChange: function onChange(instance2) {
        rerender();
        options.onChange == null ? void 0 : options.onChange(instance2);
      }
    });
    var _React$useState = h2(function() {
      return new Virtualizer(resolvedOptions);
    }), instance = _React$useState[0];
    instance.setOptions(resolvedOptions);
    p2(function() {
      return instance._didMount();
    }, []);
    useIsomorphicLayoutEffect(function() {
      return instance._willUpdate();
    });
    return instance;
  }
  function useVirtualizer(options) {
    return useVirtualizerBase(_extends({
      observeElementRect,
      observeElementOffset,
      scrollToFn: elementScroll
    }, options));
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/compat/client.mjs
  function createRoot(container) {
    return {
      render(children) {
        G2(children, container);
      },
      unmount() {
        hn(container);
      }
    };
  }

  // src/datagrid/selection.tsx
  function useSelection(mode, keyAccessor, between, selectionClassName = "selected") {
    const [selectedKeys, setSelectedKeys] = h2(
      ImmutableSet.empty()
    );
    const [anchor, setAnchor] = h2(null);
    const onMouseDown = (event) => {
      if (mode === 0 /* None */) {
        return;
      }
      const el = event.currentTarget;
      const key = keyAccessor(el);
      const result = performMouseDownAction(
        mode,
        between,
        selectedKeys,
        event,
        key,
        anchor
      );
      if (result) {
        setSelectedKeys(result.selection);
        if (typeof result.anchor !== "undefined") {
          setAnchor(result.anchor);
        }
        event.preventDefault();
      }
    };
    return {
      has(key) {
        return selectedKeys.has(key);
      },
      set(key, selected) {
        if (selected) {
          setSelectedKeys(selectedKeys.add(key));
        } else {
          setSelectedKeys(selectedKeys.delete(key));
        }
      },
      clear() {
        setSelectedKeys(selectedKeys.clear());
      },
      handlers() {
        return { onMouseDown };
      }
    };
  }
  var ImmutableSet = class {
    constructor(set) {
      this._set = set;
    }
    static empty() {
      return new ImmutableSet(/* @__PURE__ */ new Set());
    }
    has(value) {
      return this._set.has(value);
    }
    add(...values) {
      const newSet = new Set(this._set.keys());
      for (const value of values) {
        newSet.add(value);
      }
      return new ImmutableSet(newSet);
    }
    toggle(value) {
      if (this.has(value)) {
        return this.delete(value);
      } else {
        return this.add(value);
      }
    }
    delete(value) {
      const newSet = new Set(this._set.keys());
      newSet.delete(value);
      return new ImmutableSet(newSet);
    }
    clear() {
      return ImmutableSet.empty();
    }
  };
  function performMouseDownAction(mode, between, selectedKeys, event, key, anchor) {
    let { shiftKey, ctrlKey, altKey, metaKey } = event;
    if (window.navigator.platform.match(/^Mac/)) {
      [ctrlKey, metaKey] = [metaKey, ctrlKey];
    }
    if (mode === 3 /* MultiSet */) {
      return { selection: selectedKeys.toggle(key) };
    } else if (mode === 1 /* Single */) {
      return { selection: ImmutableSet.empty().add(key) };
    } else if (mode === 2 /* Multi */) {
      if (ctrlKey && !shiftKey) {
        return { selection: selectedKeys.toggle(key), anchor: key };
      } else if (shiftKey && !ctrlKey) {
        if (anchor !== null && between) {
          const toSelect = between(anchor, key);
          return { selection: ImmutableSet.empty().add(...toSelect) };
        }
      } else if (shiftKey && ctrlKey) {
        const toSelect = between(anchor, key);
        return { selection: selectedKeys.add(...toSelect) };
      } else if (!shiftKey && !ctrlKey) {
        return { selection: ImmutableSet.empty().add(key), anchor: key };
      } else {
        return;
      }
      event.preventDefault();
    }
  }

  // src/datagrid/sort-arrows.tsx
  var sortCommonProps = {
    className: "sort-arrow",
    viewBox: [-1, -1, 2, 2].map((x4) => x4 * 1.4).join(" "),
    width: "100%",
    height: "100%",
    style: { paddingLeft: "3px" }
  };
  var sortPathCommonProps = {
    stroke: "#333333",
    strokeWidth: "0.6",
    fill: "transparent"
  };
  var sortArrowUp = /* @__PURE__ */ Cn.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", ...sortCommonProps }, /* @__PURE__ */ Cn.createElement(
    "path",
    {
      d: "M -1 0.5 L 0 -0.5 L 1 0.5",
      ...sortPathCommonProps,
      strokeLinecap: "round"
    }
  ));
  var sortArrowDown = /* @__PURE__ */ Cn.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", ...sortCommonProps }, /* @__PURE__ */ Cn.createElement(
    "path",
    {
      d: "M -1 -0.5 L 0 0.5 L 1 -0.5",
      ...sortPathCommonProps,
      strokeLinecap: "round"
    }
  ));

  // src/datagrid/table-summary.tsx
  function useSummary(summaryTemplate, scrollContainer, virtualRows, thead, nrows) {
    return F2(() => {
      const summaryOption = summaryTemplate ?? true;
      if (!summaryOption) {
        return null;
      }
      const template = typeof summaryOption === "string" ? summaryOption : "Viewing rows {start} through {end} of {total}";
      if (!scrollContainer) {
        return null;
      }
      if (virtualRows.length === 0) {
        return null;
      }
      const top = scrollContainer.scrollTop;
      const bot = top + scrollContainer.clientHeight - thead.clientHeight;
      const [firstIndex, lastIndex] = findRangeIndex(
        top,
        bot,
        virtualRows,
        (vrow, start) => vrow.start + vrow.size / 2
      );
      if (firstIndex === null || lastIndex === null) {
        return null;
      }
      const firstRow = virtualRows[firstIndex];
      const lastRow = virtualRows[lastIndex];
      if (firstRow.index === 0 && lastRow.index === nrows - 1) {
        return null;
      }
      const summaryMessage = formatSummary(
        template,
        firstRow.index + 1,
        lastRow.index + 1,
        nrows
      );
      return /* @__PURE__ */ Cn.createElement("div", { className: "shiny-data-grid-summary" }, summaryMessage);
    }, [summaryTemplate, scrollContainer, virtualRows, thead, nrows]);
  }
  function findRangeIndex(start, end, items, map) {
    let first = null;
    let last = null;
    for (let i3 = 0; i3 < items.length; i3++) {
      const item = items[i3];
      if (first === null) {
        if (map(item, true) >= start) {
          first = i3;
          last = i3;
        }
      } else {
        if (map(item, false) <= end) {
          last = i3;
        } else {
          break;
        }
      }
    }
    return [first, last];
  }
  function formatSummary(template, start, end, total) {
    return template.replace(/\{(start|end|total)\}/g, (substr, token) => {
      if (token === "start") {
        return start + "";
      } else if (token === "end") {
        return end + "";
      } else if (token === "total") {
        return total + "";
      } else {
        return substr;
      }
    });
  }

  // src/datagrid/index.tsx
  var ShinyDataGrid = (props) => {
    const { data, bgcolor, width, height } = props;
    const { columns, data: rowData } = data;
    const containerRef = _2(null);
    const theadRef = _2(null);
    const tbodyRef = _2(null);
    const rowVirtualizer = useVirtualizer({
      count: rowData.length,
      getScrollElement: () => containerRef.current,
      estimateSize: () => 50
    });
    y2(() => {
      rowVirtualizer.scrollToOffset(0);
    }, [data]);
    const totalSize = rowVirtualizer.getTotalSize();
    const virtualRows = rowVirtualizer.getVirtualItems();
    const coldefs = F2(
      () => columns.map((colname, i3) => {
        return {
          accessorFn: (row, index) => {
            return row[i3];
          },
          header: colname
        };
      }),
      [columns]
    );
    const dataClone = F2(() => [...rowData], [rowData]);
    const options = {
      data: dataClone,
      columns: coldefs,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel()
      //debugAll: true,
    };
    const table = useReactTable(options);
    const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
    const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0;
    const summary = useSummary(
      data.options.summary,
      containerRef?.current,
      virtualRows,
      theadRef.current,
      rowData.length
    );
    const tableStyle = data.options.style ?? "grid";
    const containerClass = tableStyle === "grid" ? "shiny-data-grid-grid" : "shiny-data-grid-table";
    const tableClass = tableStyle === "table" ? "table table-sm" : null;
    const rowSelection = useSelection(
      2 /* Multi */,
      (el) => el.dataset.key,
      (fromKey, toKey) => {
        const rowModel = table.getSortedRowModel();
        let fromIdx = rowModel.rows.findIndex((row) => row.id === fromKey);
        let toIdx = rowModel.rows.findIndex((row) => row.id === toKey);
        if (fromIdx < 0 || toIdx < 0) {
          return [];
        }
        if (fromIdx > toIdx) {
          [fromIdx, toIdx] = [toIdx, fromIdx];
        }
        const keys = [];
        for (let i3 = fromIdx; i3 <= toIdx; i3++) {
          keys.push(rowModel.rows[i3].id);
        }
        return keys;
      },
      "selected"
    );
    p2(() => {
      return () => {
        table.resetSorting();
        rowSelection.clear();
      };
    }, [data]);
    const headerRowCount = table.getHeaderGroups().length;
    const scrollingClass = containerRef.current?.scrollHeight > containerRef.current?.clientHeight ? "scrolling" : "";
    return /* @__PURE__ */ Cn.createElement(Cn.Fragment, null, /* @__PURE__ */ Cn.createElement(
      "div",
      {
        className: `shiny-data-grid ${containerClass} ${scrollingClass}`,
        ref: containerRef,
        style: { width, maxHeight: height, overflow: "auto" }
      },
      /* @__PURE__ */ Cn.createElement(
        "table",
        {
          className: tableClass,
          "aria-rowcount": rowData.length,
          style: { width: width === null || width === "auto" ? null : "100%" }
        },
        /* @__PURE__ */ Cn.createElement("thead", { ref: theadRef, style: { backgroundColor: bgcolor } }, table.getHeaderGroups().map((headerGroup, i3) => /* @__PURE__ */ Cn.createElement("tr", { key: headerGroup.id, "aria-rowindex": i3 + 1 }, headerGroup.headers.map((header) => {
          return /* @__PURE__ */ Cn.createElement(
            "th",
            {
              key: header.id,
              colSpan: header.colSpan,
              style: { width: header.getSize() },
              scope: "col"
            },
            header.isPlaceholder ? null : /* @__PURE__ */ Cn.createElement(
              "div",
              {
                style: {
                  cursor: header.column.getCanSort() ? "pointer" : null,
                  userSelect: header.column.getCanSort() ? "none" : null
                },
                onClick: header.column.getToggleSortingHandler()
              },
              flexRender(
                header.column.columnDef.header,
                header.getContext()
              ),
              {
                asc: sortArrowUp,
                desc: sortArrowDown
              }[header.column.getIsSorted()] ?? null
            )
          );
        })))),
        /* @__PURE__ */ Cn.createElement("tbody", { ref: tbodyRef }, paddingTop > 0 && /* @__PURE__ */ Cn.createElement("tr", { style: { height: `${paddingTop}px` } }), virtualRows.map((virtualRow) => {
          const row = table.getRowModel().rows[virtualRow.index];
          return /* @__PURE__ */ Cn.createElement(
            "tr",
            {
              key: virtualRow.key,
              "data-index": virtualRow.index,
              "aria-rowindex": virtualRow.index + headerRowCount,
              "data-key": row.id,
              ref: rowVirtualizer.measureElement,
              className: rowSelection.has(row.id) ? "selected" : void 0,
              ...rowSelection.handlers()
            },
            row.getVisibleCells().map((cell) => {
              return /* @__PURE__ */ Cn.createElement("td", { key: cell.id }, flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              ));
            })
          );
        }), paddingBottom > 0 && /* @__PURE__ */ Cn.createElement("tr", { style: { height: `${paddingBottom}px` } }))
      )
    ), summary);
  };
  if (window.Shiny) {
    class ShinyDataGridBinding extends Shiny.OutputBinding {
      find(scope) {
        return $(scope).find("shiny-data-grid-output");
      }
      renderValue(el, data) {
        el.renderValue(data);
      }
    }
    Shiny.outputBindings.register(new ShinyDataGridBinding(), "shinyDataGrid");
  }
  function getComputedBgColor(el) {
    if (!el) {
      return null;
    }
    const bgColor = getStyle(el, "background-color");
    if (!bgColor)
      return bgColor;
    const m3 = bgColor.match(
      /^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/
    );
    if (bgColor === "transparent" || m3 && parseFloat(m3[4]) === 0) {
      const bgImage = getStyle(el, "background-image");
      if (bgImage && bgImage !== "none") {
        return null;
      } else {
        return getComputedBgColor(el.parentElement);
      }
    }
    return bgColor;
  }
  function getStyle(el, styleProp) {
    return document?.defaultView?.getComputedStyle(el, null)?.getPropertyValue(styleProp);
  }
  var cssTemplate = document.createElement("template");
  cssTemplate.innerHTML = `<style>${styles_default}</style>`;
  var ShinyDataGridOutput = class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true));
      const myDiv = document.createElement("div");
      this.shadowRoot.appendChild(myDiv);
      this.reactRoot = createRoot(myDiv);
      const dataEl = this.querySelector(
        "script.data"
      );
      if (dataEl) {
        const data = JSON.parse(dataEl.innerText);
        this.renderValue(data);
      }
    }
    renderValue(data) {
      const {
        columns,
        index,
        data: rows,
        options,
        width,
        height
      } = data;
      if (!data) {
        return;
      }
      this.reactRoot.render(
        /* @__PURE__ */ Cn.createElement(mn, null, /* @__PURE__ */ Cn.createElement(
          ShinyDataGrid,
          {
            data,
            bgcolor: getComputedBgColor(this),
            width: width ?? "100%",
            height: height ?? "500px"
          }
        ))
      );
    }
  };
  customElements.define("shiny-data-grid-output", ShinyDataGridOutput);
})();
/*! Bundled license information:

@tanstack/table-core/build/lib/index.mjs:
  (**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/react-table/build/lib/index.mjs:
  (**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/react-virtual/build/lib/_virtual/_rollupPluginBabelHelpers.mjs:
  (**
   * react-virtual
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/virtual-core/build/lib/_virtual/_rollupPluginBabelHelpers.mjs:
  (**
   * virtual-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/virtual-core/build/lib/utils.mjs:
  (**
   * virtual-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/virtual-core/build/lib/index.mjs:
  (**
   * virtual-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/react-virtual/build/lib/index.mjs:
  (**
   * react-virtual
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
