/*
  Highlight.js 10.6.0 (eb122d3b)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
const hljs = (function() {
  function e(t) {
    return t instanceof Map
      ? t.clear = t.delete = t.set = () => {
        throw new Error('map is read-only')
      }
      : t instanceof Set && (t.add = t.clear = t.delete = () => {
        throw new Error('set is read-only')
      }), Object.freeze(t), Object.getOwnPropertyNames(t).forEach((n) => {
      const s = t[n]
      typeof s !== 'object' || Object.isFrozen(s) || e(s)
    }), t
  } const t = e; const n = e; t.default = n
  class s {
    constructor(e) { void 0 === e.data && (e.data = {}), this.data = e.data }
    ignoreMatch() { this.ignore = !0 }
  } function r(e) {
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;')
  } function a(e, ...t) {
    const n = Object.create(null); for (const t in e)n[t] = e[t]
    return t.forEach((e) => { for (const t in e)n[t] = e[t] }), n
  } const i = e => !!e.kind
  class o {
    constructor(e, t) {
      this.buffer = '', this.classPrefix = t.classPrefix, e.walk(this)
    }

    addText(e) {
      this.buffer += r(e)
    }

    openNode(e) {
      if (!i(e)) return; let t = e.kind
      e.sublanguage || (t = `${this.classPrefix}${t}`), this.span(t)
    }

    closeNode(e) {
      i(e) && (this.buffer += '</span>')
    }

    value() { return this.buffer }span(e) {
      this.buffer += `<span class="${e}">`
    }
  } class l {
    constructor() {
      this.rootNode = { children: [] }, this.stack = [this.rootNode]
    }

    get top() {
      return this.stack[this.stack.length - 1]
    }

    get root() { return this.rootNode }add(e) {
      this.top.children.push(e)
    }

    openNode(e) {
      const t = { kind: e, children: [] }
      this.add(t), this.stack.push(t)
    }

    closeNode() {
      if (this.stack.length > 1) return this.stack.pop()
    }

    closeAllNodes() {
      for (;this.closeNode(););
    }

    toJSON() { return JSON.stringify(this.rootNode, null, 4) }
    walk(e) { return this.constructor._walk(e, this.rootNode) } static _walk(e, t) {
      return typeof t === 'string'
        ? e.addText(t)
        : t.children && (e.openNode(t),
        t.children.forEach(t => this._walk(e, t)), e.closeNode(t)), e
    }

    static _collapse(e) {
      typeof e !== 'string' && e.children && (e.children.every(e => typeof e === 'string')
        ? e.children = [e.children.join('')]
        : e.children.forEach((e) => {
          l._collapse(e)
        }))
    }
  } class c extends l {
    constructor(e) { super(), this.options = e }
    addKeyword(e, t) { e !== '' && (this.openNode(t), this.addText(e), this.closeNode()) }
    addText(e) { e !== '' && this.add(e) }addSublanguage(e, t) {
      const n = e.root
      n.kind = t, n.sublanguage = !0, this.add(n)
    }

    toHTML() {
      return new o(this, this.options).value()
    }

    finalize() { return !0 }
  } function u(e) {
    return e ? typeof e === 'string' ? e : e.source : null
  }
  const g = '[a-zA-Z]\\w*'; const d = '[a-zA-Z_]\\w*'; const h = '\\b\\d+(\\.\\d+)?'; const f = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; const p = '\\b(0b[01]+)'; const m = { begin: '\\\\[\\s\\S]', relevance: 0 }; const b = {
    className: 'string',
    begin: '\'',
    end: '\'',
    illegal: '\\n',
    contains: [m],
  }; const x = {
    className: 'string',
    begin: '"',
    end: '"',
    illegal: '\\n',
    contains: [m],
  }; const E = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
  }; const v = (e, t, n = {}) => {
    const s = a({ className: 'comment', begin: e, end: t, contains: [] }, n)
    return s.contains.push(E), s.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):',
      relevance: 0,
    }), s
  }; const w = v('//', '$'); const N = v('/\\*', '\\*/'); const y = v('#', '$'); const R = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: g,
    UNDERSCORE_IDENT_RE: d,
    NUMBER_RE: h,
    C_NUMBER_RE: f,
    BINARY_NUMBER_RE: p,
    RE_STARTERS_RE: '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    SHEBANG: (e = {}) => {
      const t = /^#![ ]*\//
      return e.binary && (e.begin = ((...e) => e.map(e => u(e)).join(''))(t, /.*\b/, e.binary, /\b.*/)),
      a({
        'className': 'meta',
        'begin': t,
        'end': /$/,
        'relevance': 0,
        'on:begin': (e, t) => {
          e.index !== 0 && t.ignoreMatch()
        },
      }, e)
    },
    BACKSLASH_ESCAPE: m,
    APOS_STRING_MODE: b,
    QUOTE_STRING_MODE: x,
    PHRASAL_WORDS_MODE: E,
    COMMENT: v,
    C_LINE_COMMENT_MODE: w,
    C_BLOCK_COMMENT_MODE: N,
    HASH_COMMENT_MODE: y,
    NUMBER_MODE: {
      className: 'number',
      begin: h,
      relevance: 0,
    },
    C_NUMBER_MODE: { className: 'number', begin: f, relevance: 0 },
    BINARY_NUMBER_MODE: { className: 'number', begin: p, relevance: 0 },
    CSS_NUMBER_MODE: {
      className: 'number',
      begin: `${h}(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?`,
      relevance: 0,
    },
    REGEXP_MODE: {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        className: 'regexp',
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [m, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [m],
        }],
      }],
    },
    TITLE_MODE: { className: 'title', begin: g, relevance: 0 },
    UNDERSCORE_TITLE_MODE: { className: 'title', begin: d, relevance: 0 },
    METHOD_GUARD: { begin: '\\.\\s*[a-zA-Z_]\\w*', relevance: 0 },
    END_SAME_AS_BEGIN: e => Object.assign(e, {
      'on:begin': (e, t) => { t.data._beginMatch = e[1] },
      'on:end': (e, t) => {
        t.data._beginMatch !== e[1] && t.ignoreMatch()
      },
    }),
  }); function _(e, t) {
    e.input[e.index - 1] === '.' && t.ignoreMatch()
  } function k(e, t) {
    t && e.beginKeywords && (e.begin = `\\b(${e.beginKeywords.split(' ').join('|')})(?!\\.)(?=\\b|\\s)`,
    e.__beforeBegin = _, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords,
    void 0 === e.relevance && (e.relevance = 0))
  } function O(e, t) {
    Array.isArray(e.illegal) && (e.illegal = ((...e) => `(${e.map(e => u(e)).join('|')})`)(...e.illegal))
  } function M(e, t) {
    if (e.match) {
      if (e.begin || e.end) throw new Error('begin & end are not supported with match')
      e.begin = e.match, delete e.match
    }
  } function A(e, t) {
    void 0 === e.relevance && (e.relevance = 1)
  }
  const L = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value']
  function B(e, t, n = 'keyword') {
    const s = {}
    return typeof e === 'string'
      ? r(n, e.split(' '))
      : Array.isArray(e)
        ? r(n, e)
        : Object.keys(e).forEach((n) => {
          Object.assign(s, B(e[n], t, n))
        }), s; function r(e, n) {
      t && (n = n.map(e => e.toLowerCase())), n.forEach((t) => {
        const n = t.split('|')
        s[n[0]] = [e, I(n[0], n[1])]
      })
    }
  } function I(e, t) {
    return t ? Number(t) : (e => L.includes(e.toLowerCase()))(e) ? 0 : 1
  }
  function T(e, { plugins: t }) {
    function n(t, n) {
      return RegExp(u(t), `m${e.case_insensitive ? 'i' : ''}${n ? 'g' : ''}`)
    } class s {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
      }

      addRule(e, t) {
        t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]),
        this.matchAt += (e => RegExp(`${e.toString()}|`).exec('').length - 1)(e) + 1
      }

      compile() {
        this.regexes.length === 0 && (this.exec = () => null)
        const e = this.regexes.map(e => e[1]); this.matcherRe = n(((e, t = '|') => {
          const n = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./; let s = 0; let r = ''
          for (let a = 0; a < e.length; a++) {
            s += 1; const i = s; let o = u(e[a])
            for (a > 0 && (r += t), r += '('; o.length > 0;) {
              const e = n.exec(o); if (e == null) { r += o; break }
              r += o.substring(0, e.index),
              o = o.substring(e.index + e[0].length), e[0][0] === '\\' && e[1]
                ? r += `\\${Number(e[1]) + i}`
                : (r += e[0],
                e[0] === '(' && s++)
            }r += ')'
          } return r
        })(e), !0), this.lastIndex = 0
      }

      exec(e) {
        this.matcherRe.lastIndex = this.lastIndex; const t = this.matcherRe.exec(e)
        if (!t) return null
        const n = t.findIndex((e, t) => t > 0 && void 0 !== e); const s = this.matchIndexes[n]
        return t.splice(0, n), Object.assign(t, s)
      }
    } class r {
      constructor() {
        this.rules = [], this.multiRegexes = [],
        this.count = 0, this.lastIndex = 0, this.regexIndex = 0
      }

      getMatcher(e) {
        if (this.multiRegexes[e]) return this.multiRegexes[e]; const t = new s()
        return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)),
        t.compile(), this.multiRegexes[e] = t, t
      }

      resumingScanAtSamePosition() {
        return this.regexIndex !== 0
      }

      considerAll() { this.regexIndex = 0 }addRule(e, t) {
        this.rules.push([e, t]), t.type === 'begin' && this.count++
      }

      exec(e) {
        const t = this.getMatcher(this.regexIndex); t.lastIndex = this.lastIndex
        let n = t.exec(e)
        if (this.resumingScanAtSamePosition()) {
          if (n && n.index === this.lastIndex) { }
          else {
            const t = this.getMatcher(0); t.lastIndex = this.lastIndex + 1, n = t.exec(e)
          }
        }
        return n && (this.regexIndex += n.position + 1,
        this.regexIndex === this.count && this.considerAll()), n
      }
    }
    if (e.compilerExtensions || (e.compilerExtensions = []),
    e.contains && e.contains.includes('self')) throw new Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.')
    return e.classNameAliases = a(e.classNameAliases || {}), (function t(s, i) {
      const o = s
      if (s.compiled) return o
      ;[M].forEach(e => e(s, i)), e.compilerExtensions.forEach(e => e(s, i)),
      s.__beforeBegin = null, [k, O, A].forEach(e => e(s, i)), s.compiled = !0; let l = null
      if (typeof s.keywords === 'object' && (l = s.keywords.$pattern,
      delete s.keywords.$pattern),
      s.keywords && (s.keywords = B(s.keywords, e.case_insensitive)),
      s.lexemes && l) throw new Error('ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ')
      return l = l || s.lexemes || /\w+/,
      o.keywordPatternRe = n(l, !0), i && (s.begin || (s.begin = /\B|\b/),
      o.beginRe = n(s.begin), s.endSameAsBegin && (s.end = s.begin),
      s.end || s.endsWithParent || (s.end = /\B|\b/),
      s.end && (o.endRe = n(s.end)), o.terminatorEnd = u(s.end) || '',
      s.endsWithParent && i.terminatorEnd && (o.terminatorEnd += (s.end ? '|' : '') + i.terminatorEnd)),
      s.illegal && (o.illegalRe = n(s.illegal)),
      s.contains || (s.contains = []), s.contains = [].concat(...s.contains.map(e => (e => (e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(t => a(e, { variants: null }, t))), e.cachedVariants
        ? e.cachedVariants
        : j(e)
          ? a(e, {
            starts: e.starts ? a(e.starts) : null,
          })
          : Object.isFrozen(e) ? a(e) : e))(e === 'self' ? s : e))), s.contains.forEach((e) => {
        t(e, o)
      }), s.starts && t(s.starts, i), o.matcher = ((e) => {
        const t = new r()
        return e.contains.forEach(e => t.addRule(e.begin, { rule: e, type: 'begin' })), e.terminatorEnd && t.addRule(e.terminatorEnd, { type: 'end' }), e.illegal && t.addRule(e.illegal, { type: 'illegal' }), t
      })(o), o
    }(e))
  } function j(e) {
    return !!e && (e.endsWithParent || j(e.starts))
  } function S(e) {
    const t = {
      props: ['language', 'code', 'autodetect'],
      data: () => ({
        detectedLanguage: '',
        unknownLanguage: !1,
      }),
      computed: {
        className() {
          return this.unknownLanguage ? '' : `hljs ${this.detectedLanguage}`
        },
        highlighted() {
          if (!this.autoDetect && !e.getLanguage(this.language)) {
            return console.warn(`The language "${this.language}" you specified could not be found.`),
            this.unknownLanguage = !0, r(this.code)
          } let t = {}
          return this.autoDetect
            ? (t = e.highlightAuto(this.code),
            this.detectedLanguage = t.language)
            : (t = e.highlight(this.language, this.code, this.ignoreIllegals),
            this.detectedLanguage = this.language), t.value
        },
        autoDetect() {
          return !(this.language && (e = this.autodetect, !e && e !== '')); let e
        },
        ignoreIllegals: () => !0,
      },
      render(e) {
        return e('pre', {}, [e('code', { class: this.className, domProps: { innerHTML: this.highlighted } })])
      },
    }; return { Component: t, VuePlugin: { install(e) { e.component('Highlightjs', t) } } }
  } const P = {
    'after:highlightBlock': ({ block: e, result: t, text: n }) => {
      const s = C(e)
      if (!s.length) return; const a = document.createElement('div')
      a.innerHTML = t.value, t.value = ((e, t, n) => {
        let s = 0; let a = ''; const i = []; function o() {
          return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : t[0].event === 'start' ? e : t : e.length ? e : t
        } function l(e) {
          a += `<${D(e)}${[].map.call(e.attributes, (e) => {
            return ` ${e.nodeName}="${r(e.value)}"`
          }).join('')}>`
        } function c(e) {
          a += `</${D(e)}>`
        } function u(e) { (e.event === 'start' ? l : c)(e.node) }
        for (;e.length || t.length;) {
          let t = o()
          if (a += r(n.substring(s, t[0].offset)), s = t[0].offset, t === e) {
            i.reverse().forEach(c)
            do { u(t.splice(0, 1)[0]), t = o() } while (t === e && t.length && t[0].offset === s)
            i.reverse().forEach(l)
          }
          else { t[0].event === 'start' ? i.push(t[0].node) : i.pop(), u(t.splice(0, 1)[0]) }
        }
        return a + r(n.substr(s))
      })(s, C(a), n)
    },
  }; function D(e) {
    return e.nodeName.toLowerCase()
  } function C(e) {
    const t = []; return (function e(n, s) {
      for (let r = n.firstChild; r; r = r.nextSibling) {
        r.nodeType === 3
          ? s += r.nodeValue.length
          : r.nodeType === 1 && (t.push({ event: 'start', offset: s, node: r }), s = e(r, s), D(r).match(/br|hr|img|input/) || t.push({ event: 'stop', offset: s, node: r }))
      } return s
    }(e, 0)), t
  } const H = (e) => {
    console.error(e)
  }; const U = (e, ...t) => { console.log(`WARN: ${e}`, ...t) }; const $ = (e, t) => {
    console.log(`Deprecated as of ${e}. ${t}`)
  }; const z = r; const K = a; const G = Symbol('nomatch')
  return ((e) => {
    const n = Object.create(null); const r = Object.create(null); const a = []; let i = !0
    const o = /(^(<[^>]+>|\t|)+|\n)/gm; const l = 'Could not find the language \'{}\', did you forget to load/include a language module?'; const u = { disableAutodetect: !0, name: 'Plain text', contains: [] }; let g = {
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: 'hljs-',
      tabReplace: null,
      useBR: !1,
      languages: null,
      __emitter: c,
    }; function d(e) {
      return g.noHighlightRe.test(e)
    } function h(e, t, n, s) {
      const r = { code: t, language: e }
      M('before:highlight', r); const a = r.result ? r.result : f(r.language, r.code, n, s)
      return a.code = r.code, M('after:highlight', a), a
    } function f(e, t, r, o) {
      const c = t
      function u(e, t) {
        const n = w.case_insensitive ? t[0].toLowerCase() : t[0]
        return Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n]
      }
      function d() {
        R.subLanguage != null
          ? (() => {
            if (M === '') return; let e = null
            if (typeof R.subLanguage === 'string') {
              if (!n[R.subLanguage]) return void O.addText(M)
              e = f(R.subLanguage, M, !0, k[R.subLanguage]), k[R.subLanguage] = e.top
            }
            else {
              e = p(M, R.subLanguage.length ? R.subLanguage : null)
            }R.relevance > 0 && (A += e.relevance), O.addSublanguage(e.emitter, e.language)
          })()
          : (() => {
            if (!R.keywords) return void O.addText(M); let e = 0
            R.keywordPatternRe.lastIndex = 0; let t = R.keywordPatternRe.exec(M); let n = ''; for (;t;) {
              n += M.substring(e, t.index); const s = u(R, t); if (s) {
                const [e, r] = s
                O.addText(n), n = '', A += r; const a = w.classNameAliases[e] || e; O.addKeyword(t[0], a)
              }
              else { n += t[0] }e = R.keywordPatternRe.lastIndex, t = R.keywordPatternRe.exec(M)
            }
            n += M.substr(e), O.addText(n)
          })(), M = ''
      } function h(e) {
        return e.className && O.openNode(w.classNameAliases[e.className] || e.className),
        R = Object.create(e, { parent: { value: R } }), R
      } function m(e, t, n) {
        let r = ((e, t) => {
          const n = e && e.exec(t); return n && n.index === 0
        })(e.endRe, n); if (r) {
          if (e['on:end']) {
            const n = new s(e); e['on:end'](t, n), n.ignore && (r = !1)
          } if (r) {
            for (;e.endsParent && e.parent;)e = e.parent; return e
          }
        }
        if (e.endsWithParent) return m(e.parent, t, n)
      } function b(e) {
        return R.matcher.regexIndex === 0 ? (M += e[0], 1) : (I = !0, 0)
      } function x(e) {
        const t = e[0]; const n = c.substr(e.index); const s = m(R, e, n); if (!s) return G; const r = R
        r.skip ? M += t : (r.returnEnd || r.excludeEnd || (M += t), d(), r.excludeEnd && (M = t)); do
          R.className && O.closeNode(), R.skip || R.subLanguage || (A += R.relevance), R = R.parent
        while (R !== s.parent)
        return s.starts && (s.endSameAsBegin && (s.starts.endRe = s.endRe),
        h(s.starts)), r.returnEnd ? 0 : t.length
      } let E = {}; function v(t, n) {
        const a = n && n[0]
        if (M += t, a == null) return d(), 0
        if (E.type === 'begin' && n.type === 'end' && E.index === n.index && a === '') {
          if (M += c.slice(n.index, n.index + 1), !i) {
            const t = Error('0 width match regex')
            throw t.languageName = e, t.badRule = E.rule, t
          } return 1
        }
        if (E = n, n.type === 'begin') {
          return (function(e) {
            const t = e[0]; const n = e.rule; const r = new s(n); const a = [n.__beforeBegin, n['on:begin']]
            for (const n of a) if (n && (n(e, r), r.ignore)) return b(t)
            return n && n.endSameAsBegin && (n.endRe = RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm')),
            n.skip
              ? M += t
              : (n.excludeBegin && (M += t),
              d(), n.returnBegin || n.excludeBegin || (M = t)), h(n), n.returnBegin ? 0 : t.length
          }(n))
        } if (n.type === 'illegal' && !r) {
          const e = Error(`Illegal lexeme "${a}" for mode "${R.className || '<unnamed>'}"`)
          throw e.mode = R, e
        } if (n.type === 'end') { const e = x(n); if (e !== G) return e }
        if (n.type === 'illegal' && a === '') return 1
        if (B > 1e5 && B > 3 * n.index) throw new Error('potential infinite loop, way more iterations than matches')
        return M += a, a.length
      } const w = _(e)
      if (!w) throw H(l.replace('{}', e)), Error(`Unknown language: "${e}"`)
      const N = T(w, { plugins: a }); let y = ''; let R = o || N; const k = {}; const O = new g.__emitter(g); (() => {
        const e = []; for (let t = R; t !== w; t = t.parent)t.className && e.unshift(t.className)
        e.forEach(e => O.openNode(e))
      })(); let M = ''; let A = 0; let L = 0; let B = 0; let I = !1; try {
        for (R.matcher.considerAll(); ;) {
          B++, I ? I = !1 : R.matcher.considerAll(), R.matcher.lastIndex = L
          const e = R.matcher.exec(c); if (!e) break; const t = v(c.substring(L, e.index), e)
          L = e.index + t
        } return v(c.substr(L)), O.closeAllNodes(), O.finalize(), y = O.toHTML(), { relevance: Math.floor(A), value: y, language: e, illegal: !1, emitter: O, top: R }
      }
      catch (t) {
        if (t.message && t.message.includes('Illegal')) {
          return {
            illegal: !0,
            illegalBy: { msg: t.message, context: c.slice(L - 100, L + 100), mode: t.mode },
            sofar: y,
            relevance: 0,
            value: z(c),
            emitter: O,
          }
        } if (i) {
          return {
            illegal: !1,
            relevance: 0,
            value: z(c),
            emitter: O,
            language: e,
            top: R,
            errorRaised: t,
          }
        } throw t
      }
    } function p(e, t) {
      t = t || g.languages || Object.keys(n); const s = ((e) => {
        const t = {
          relevance: 0,
          emitter: new g.__emitter(g),
          value: z(e),
          illegal: !1,
          top: u,
        }
        return t.emitter.addText(e), t
      })(e); const r = t.filter(_).filter(O).map(t => f(t, e, !1))
      r.unshift(s); const a = r.sort((e, t) => {
        if (e.relevance !== t.relevance) return t.relevance - e.relevance
        if (e.language && t.language) {
          if (_(e.language).supersetOf === t.language) return 1
          if (_(t.language).supersetOf === e.language) return -1
        } return 0
      }); const [i, o] = a; const l = i
      return l.second_best = o, l
    } const m = {
      'before:highlightBlock': ({ block: e }) => {
        g.useBR && (e.innerHTML = e.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n'))
      },
      'after:highlightBlock': ({ result: e }) => {
        g.useBR && (e.value = e.value.replace(/\n/g, '<br>'))
      },
    }; const b = /^(<[^>]+>|\t)+/gm; const x = {
      'after:highlightBlock': ({ result: e }) => {
        g.tabReplace && (e.value = e.value.replace(b, e => e.replace(/\t/g, g.tabReplace)))
      },
    }
    function E(e) {
      let t = null; const n = ((e) => {
        let t = `${e.className} `
        t += e.parentNode ? e.parentNode.className : ''; const n = g.languageDetectRe.exec(t)
        if (n) {
          const t = _(n[1])
          return t || (U(l.replace('{}', n[1])), U('Falling back to no-highlight mode for this block.', e)),
          t ? n[1] : 'no-highlight'
        } return t.split(/\s+/).find(e => d(e) || _(e))
      })(e)
      if (d(n)) return; M('before:highlightBlock', { block: e, language: n }), t = e
      const s = t.textContent; const a = n ? h(n, s, !0) : p(s); M('after:highlightBlock', {
        block: e,
        result: a,
        text: s,
      }), e.innerHTML = a.value, ((e, t, n) => {
        const s = t ? r[t] : n
        e.classList.add('hljs'), s && e.classList.add(s)
      })(e, n, a.language), e.result = {
        language: a.language, re: a.relevance, relavance: a.relevance,
      }, a.second_best && (e.second_best = {
        language: a.second_best.language,
        re: a.second_best.relevance,
        relavance: a.second_best.relevance,
      })
    } const v = () => {
      v.called || (v.called = !0,
      $('10.6.0', 'initHighlighting() is deprecated.  Use highlightAll() instead.'),
      document.querySelectorAll('pre code').forEach(E))
    }; let w = !1; let N = !1; function y() {
      N ? document.querySelectorAll('pre code').forEach(E) : w = !0
    } function _(e) {
      return e = (e || '').toLowerCase(), n[e] || n[r[e]]
    } function k(e, { languageName: t }) {
      typeof e === 'string' && (e = [e]), e.forEach((e) => { r[e] = t })
    } function O(e) {
      const t = _(e)
      return t && !t.disableAutodetect
    } function M(e, t) {
      const n = e; a.forEach((e) => {
        e[n] && e[n](t)
      })
    }
    typeof window !== 'undefined' && window.addEventListener && window.addEventListener('DOMContentLoaded', () => {
      N = !0, w && y()
    }, !1), Object.assign(e, {
      highlight: h,
      highlightAuto: p,
      highlightAll: y,
      fixMarkup: (e) => {
        return $('10.2.0', 'fixMarkup will be removed entirely in v11.0'), $('10.2.0', 'Please see https://github.com/highlightjs/highlight.js/issues/2534'),
        t = e,
        g.tabReplace || g.useBR ? t.replace(o, e => e === '\n' ? g.useBR ? '<br>' : e : g.tabReplace ? e.replace(/\t/g, g.tabReplace) : e) : t
        let t
      },
      highlightBlock: E,
      configure: (e) => {
        e.useBR && ($('10.3.0', '\'useBR\' will be removed entirely in v11.0'),
        $('10.3.0', 'Please see https://github.com/highlightjs/highlight.js/issues/2559')),
        g = K(g, e)
      },
      initHighlighting: v,
      initHighlightingOnLoad: () => {
        $('10.6.0', 'initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.'),
        w = !0
      },
      registerLanguage: (t, s) => {
        let r = null; try { r = s(e) }
        catch (e) {
          if (H('Language definition for \'{}\' could not be registered.'.replace('{}', t)),
          !i) throw e; H(e), r = u
        }
        r.name || (r.name = t), n[t] = r, r.rawDefinition = s.bind(null, e), r.aliases && k(r.aliases, { languageName: t })
      },
      listLanguages: () => Object.keys(n),
      getLanguage: _,
      registerAliases: k,
      requireLanguage: (e) => {
        $('10.4.0', 'requireLanguage will be removed entirely in v11.'),
        $('10.4.0', 'Please see https://github.com/highlightjs/highlight.js/pull/2844')
        const t = _(e); if (t) return t
        throw new Error('The \'{}\' language is required, but not loaded.'.replace('{}', e))
      },
      autoDetection: O,
      inherit: K,
      addPlugin: (e) => { a.push(e) },
      vuePlugin: S(e).VuePlugin,
    }), e.debugMode = () => { i = !1 }, e.safeMode = () => { i = !0 }, e.versionString = '10.6.0'
    for (const e in R) typeof R[e] === 'object' && t(R[e])
    return Object.assign(e, R), e.addPlugin(m), e.addPlugin(P), e.addPlugin(x), e
  })({})
}()); typeof exports === 'object' && typeof module !== 'undefined' && (module.exports = hljs); hljs.registerLanguage('less', (() => {
  const e = ['a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'mark', 'menu', 'nav', 'object', 'ol', 'p', 'q', 'quote', 'samp', 'section', 'span', 'strong', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'ul', 'var', 'video']; const t = ['any-hover', 'any-pointer', 'aspect-ratio', 'color', 'color-gamut', 'color-index', 'device-aspect-ratio', 'device-height', 'device-width', 'display-mode', 'forced-colors', 'grid', 'height', 'hover', 'inverted-colors', 'monochrome', 'orientation', 'overflow-block', 'overflow-inline', 'pointer', 'prefers-color-scheme', 'prefers-contrast', 'prefers-reduced-motion', 'prefers-reduced-transparency', 'resolution', 'scan', 'scripting', 'update', 'width', 'min-width', 'max-width', 'min-height', 'max-height']; const i = ['active', 'any-link', 'blank', 'checked', 'current', 'default', 'defined', 'dir', 'disabled', 'drop', 'empty', 'enabled', 'first', 'first-child', 'first-of-type', 'fullscreen', 'future', 'focus', 'focus-visible', 'focus-within', 'has', 'host', 'host-context', 'hover', 'indeterminate', 'in-range', 'invalid', 'is', 'lang', 'last-child', 'last-of-type', 'left', 'link', 'local-link', 'not', 'nth-child', 'nth-col', 'nth-last-child', 'nth-last-col', 'nth-last-of-type', 'nth-of-type', 'only-child', 'only-of-type', 'optional', 'out-of-range', 'past', 'placeholder-shown', 'read-only', 'read-write', 'required', 'right', 'root', 'scope', 'target', 'target-within', 'user-invalid', 'valid', 'visited', 'where']; const o = ['after', 'backdrop', 'before', 'cue', 'cue-region', 'first-letter', 'first-line', 'grammar-error', 'marker', 'part', 'placeholder', 'selection', 'slotted', 'spelling-error']; const n = ['align-content', 'align-items', 'align-self', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'auto', 'backface-visibility', 'background', 'background-attachment', 'background-clip', 'background-color', 'background-image', 'background-origin', 'background-position', 'background-repeat', 'background-size', 'border', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', 'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'bottom', 'box-decoration-break', 'box-shadow', 'box-sizing', 'break-after', 'break-before', 'break-inside', 'caption-side', 'clear', 'clip', 'clip-path', 'color', 'column-count', 'column-fill', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns', 'content', 'counter-increment', 'counter-reset', 'cursor', 'direction', 'display', 'empty-cells', 'filter', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'float', 'font', 'font-display', 'font-family', 'font-feature-settings', 'font-kerning', 'font-language-override', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-variant-ligatures', 'font-variation-settings', 'font-weight', 'height', 'hyphens', 'icon', 'image-orientation', 'image-rendering', 'image-resolution', 'ime-mode', 'inherit', 'initial', 'justify-content', 'left', 'letter-spacing', 'line-height', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'marks', 'mask', 'max-height', 'max-width', 'min-height', 'min-width', 'nav-down', 'nav-index', 'nav-left', 'nav-right', 'nav-up', 'none', 'normal', 'object-fit', 'object-position', 'opacity', 'order', 'orphans', 'outline', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'overflow', 'overflow-wrap', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page-break-after', 'page-break-before', 'page-break-inside', 'perspective', 'perspective-origin', 'pointer-events', 'position', 'quotes', 'resize', 'right', 'src', 'tab-size', 'table-layout', 'text-align', 'text-align-last', 'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 'text-indent', 'text-overflow', 'text-rendering', 'text-shadow', 'text-transform', 'text-underline-position', 'top', 'transform', 'transform-origin', 'transform-style', 'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'unicode-bidi', 'vertical-align', 'visibility', 'white-space', 'widows', 'width', 'word-break', 'word-spacing', 'word-wrap', 'z-index'].reverse(); const r = i.concat(o)
  return (a) => {
    const s = (e => ({
      IMPORTANT: { className: 'meta', begin: '!important' },
      HEXCOLOR: { className: 'number', begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})' },
      ATTRIBUTE_SELECTOR_MODE: {
        className: 'selector-attr',
        begin: /\[/,
        end: /\]/,
        illegal: '$',
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
      },
    }))(a); const l = r; const d = '([\\w-]+|@\\{[\\w-]+\\})'; const c = []; const g = []; const b = e => ({
      className: 'string',
      begin: `~?${e}.*?${e}`,
    }); const m = (e, t, i) => ({ className: e, begin: t, relevance: i }); const u = { $pattern: /[a-z-]+/, keyword: 'and or not only', attribute: t.join(' ') }; const p = { begin: '\\(', end: '\\)', contains: g, keywords: u, relevance: 0 }
    g.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, b('\''), b('"'), a.CSS_NUMBER_MODE, {
      begin: '(url|data-uri)\\(',
      starts: {
        className: 'string',
        end: '[\\)\\n]',
        excludeEnd: !0,
      },
    }, s.HEXCOLOR, p, m('variable', '@@?[\\w-]+', 10), m('variable', '@\\{[\\w-]+\\}'), m('built_in', '~?`[^`]*?`'), {
      className: 'attribute', begin: '[\\w-]+\\s*:', end: ':', returnBegin: !0, excludeEnd: !0,
    }, s.IMPORTANT); const f = g.concat({ begin: /\{/, end: /\}/, contains: c }); const h = {
      beginKeywords: 'when',
      endsWithParent: !0,
      contains: [{ beginKeywords: 'and not' }].concat(g),
    }; const w = {
      begin: `${d}\\s*:`,
      returnBegin: !0,
      end: /[;}]/,
      relevance: 0,
      contains: [{ begin: /-(webkit|moz|ms|o)-/ }, {
        className: 'attribute',
        begin: `\\b(${n.join('|')})\\b`,
        end: /(?=:)/,
        starts: {
          endsWithParent: !0,
          illegal: '[<=$]',
          relevance: 0,
          contains: g,
        },
      }],
    }; const v = {
      className: 'keyword',
      begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
      starts: { end: '[;{}]', keywords: u, returnEnd: !0, contains: g, relevance: 0 },
    }; const y = { className: 'variable', variants: [{ begin: '@[\\w-]+\\s*:', relevance: 15 }, { begin: '@[\\w-]+' }], starts: { end: '[;}]', returnEnd: !0, contains: f } }; const k = {
      variants: [{ begin: '[\\.#:&\\[>]', end: '[;{}]' }, { begin: d, end: /\{/ }],
      returnBegin: !0,
      returnEnd: !0,
      illegal: '[<=\'$"]',
      relevance: 0,
      contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, h, m('keyword', 'all\\b'), m('variable', '@\\{[\\w-]+\\}'), {
        begin: `\\b(${e.join('|')})\\b`, className: 'selector-tag',
      }, m('selector-tag', `${d}%?`, 0), m('selector-id', `#${d}`), m('selector-class', `\\.${d}`, 0), m('selector-tag', '&', 0), s.ATTRIBUTE_SELECTOR_MODE, { className: 'selector-pseudo', begin: `:(${i.join('|')})` }, { className: 'selector-pseudo', begin: `::(${o.join('|')})` }, {
        begin: '\\(',
        end: '\\)',
        contains: f,
      }, { begin: '!important' }],
    }; const E = {
      begin: `[\\w-]+:(:)?(${l.join('|')})`,
      returnBegin: !0,
      contains: [k],
    }
    return c.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, v, y, E, w, k), { name: 'Less', case_insensitive: !0, illegal: '[=>\'/<($"]', contains: c }
  }
})())

export default hljs
