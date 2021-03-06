/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['util/util.js']) {
  _$jscoverage['util/util.js'] = [];
  _$jscoverage['util/util.js'][4] = 0;
  _$jscoverage['util/util.js'][5] = 0;
  _$jscoverage['util/util.js'][12] = 0;
  _$jscoverage['util/util.js'][13] = 0;
  _$jscoverage['util/util.js'][16] = 0;
  _$jscoverage['util/util.js'][19] = 0;
  _$jscoverage['util/util.js'][20] = 0;
  _$jscoverage['util/util.js'][21] = 0;
  _$jscoverage['util/util.js'][23] = 0;
  _$jscoverage['util/util.js'][24] = 0;
  _$jscoverage['util/util.js'][28] = 0;
  _$jscoverage['util/util.js'][30] = 0;
  _$jscoverage['util/util.js'][39] = 0;
  _$jscoverage['util/util.js'][40] = 0;
  _$jscoverage['util/util.js'][41] = 0;
  _$jscoverage['util/util.js'][43] = 0;
}
_$jscoverage['util/util.js'].source = ["<span class=\"c\">/**</span>","<span class=\"c\"> * Utility methods designed for general use</span>","<span class=\"c\"> */</span>","pen<span class=\"k\">.</span>define<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","  <span class=\"k\">return</span> <span class=\"k\">{</span>","    <span class=\"c\">/**</span>","<span class=\"c\">     * Parse the parameters from the current URL.</span>","<span class=\"c\">     *</span>","<span class=\"c\">     * @return Map of decoded parameter names and values</span>","<span class=\"c\">     */</span>","    getUrlParameters<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","      <span class=\"k\">var</span> urlParams <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","      <span class=\"k\">var</span> e<span class=\"k\">,</span>","        a <span class=\"k\">=</span> <span class=\"s\">/\\+/g</span><span class=\"k\">,</span>  <span class=\"c\">// Regex for replacing addition symbol with a space</span>","        reg <span class=\"k\">=</span> <span class=\"s\">/([^&amp;=]+)=?([^&amp;]*)/g</span><span class=\"k\">,</span>","        decode <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">(</span>s<span class=\"k\">)</span> <span class=\"k\">{</span> <span class=\"k\">return</span> decodeURIComponent<span class=\"k\">(</span>s<span class=\"k\">.</span>replace<span class=\"k\">(</span>a<span class=\"k\">,</span> <span class=\"s\">\" \"</span><span class=\"k\">));</span> <span class=\"k\">}</span><span class=\"k\">,</span>","        query <span class=\"k\">=</span> window<span class=\"k\">.</span>location<span class=\"k\">.</span>search<span class=\"k\">.</span>substring<span class=\"k\">(</span><span class=\"s\">1</span><span class=\"k\">);</span>","","      <span class=\"k\">while</span> <span class=\"k\">(</span>e <span class=\"k\">=</span> reg<span class=\"k\">.</span>exec<span class=\"k\">(</span>query<span class=\"k\">))</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> paramName <span class=\"k\">=</span> decode<span class=\"k\">(</span>e<span class=\"k\">[</span><span class=\"s\">1</span><span class=\"k\">]);</span>","        <span class=\"k\">var</span> paramVal <span class=\"k\">=</span> decode<span class=\"k\">(</span>e<span class=\"k\">[</span><span class=\"s\">2</span><span class=\"k\">]);</span>","","        <span class=\"k\">if</span> <span class=\"k\">(</span>urlParams<span class=\"k\">[</span>paramName<span class=\"k\">]</span> <span class=\"k\">!==</span> undefined<span class=\"k\">)</span> <span class=\"k\">{</span>","          paramVal <span class=\"k\">=</span> $<span class=\"k\">.</span>isArray<span class=\"k\">(</span>urlParams<span class=\"k\">[</span>paramName<span class=\"k\">])</span>","            <span class=\"k\">?</span> urlParams<span class=\"k\">[</span>paramName<span class=\"k\">].</span>concat<span class=\"k\">([</span>paramVal<span class=\"k\">])</span>","            <span class=\"k\">:</span> <span class=\"k\">[</span>urlParams<span class=\"k\">[</span>paramName<span class=\"k\">],</span> paramVal<span class=\"k\">];</span>","        <span class=\"k\">}</span>","        urlParams<span class=\"k\">[</span>paramName<span class=\"k\">]</span> <span class=\"k\">=</span> paramVal<span class=\"k\">;</span>","      <span class=\"k\">}</span>","      <span class=\"k\">return</span> urlParams<span class=\"k\">;</span>","    <span class=\"k\">}</span><span class=\"k\">,</span>","","    <span class=\"c\">/**</span>","<span class=\"c\">     * Parses the language portion of a locale URL parameter, if defined.</span>","<span class=\"c\">     *</span>","<span class=\"c\">     * @return language portion of the URL parameter \"locale\". If it is not defined, undefined is returned.</span>","<span class=\"c\">     */</span>","    getLocale<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","      <span class=\"k\">var</span> locale <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getUrlParameters<span class=\"k\">().</span>locale<span class=\"k\">;</span>","      <span class=\"k\">if</span> <span class=\"k\">(</span>locale <span class=\"k\">&amp;&amp;</span> locale<span class=\"k\">.</span>length <span class=\"k\">&gt;</span> <span class=\"s\">2</span><span class=\"k\">)</span> <span class=\"k\">{</span>","        locale <span class=\"k\">=</span> locale<span class=\"k\">.</span>substring<span class=\"k\">(</span><span class=\"s\">0</span><span class=\"k\">,</span> <span class=\"s\">2</span><span class=\"k\">);</span>","      <span class=\"k\">}</span>","      <span class=\"k\">return</span> locale<span class=\"k\">;</span>","    <span class=\"k\">}</span>","  <span class=\"k\">}</span>","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['util/util.js'][4]++;
pen.define((function () {
  _$jscoverage['util/util.js'][5]++;
  return ({getUrlParameters: (function () {
  _$jscoverage['util/util.js'][12]++;
  var urlParams = {};
  _$jscoverage['util/util.js'][13]++;
  var e, a = /\+/g, reg = /([^&=]+)=?([^&]*)/g, decode = (function (s) {
  _$jscoverage['util/util.js'][16]++;
  return decodeURIComponent(s.replace(a, " "));
}), query = window.location.search.substring(1);
  _$jscoverage['util/util.js'][19]++;
  while ((e = reg.exec(query))) {
    _$jscoverage['util/util.js'][20]++;
    var paramName = decode(e[1]);
    _$jscoverage['util/util.js'][21]++;
    var paramVal = decode(e[2]);
    _$jscoverage['util/util.js'][23]++;
    if ((urlParams[paramName] !== undefined)) {
      _$jscoverage['util/util.js'][24]++;
      paramVal = ($.isArray(urlParams[paramName])? urlParams[paramName].concat([paramVal]): [urlParams[paramName], paramVal]);
    }
    _$jscoverage['util/util.js'][28]++;
    urlParams[paramName] = paramVal;
}
  _$jscoverage['util/util.js'][30]++;
  return urlParams;
}), getLocale: (function () {
  _$jscoverage['util/util.js'][39]++;
  var locale = this.getUrlParameters().locale;
  _$jscoverage['util/util.js'][40]++;
  if ((locale && (locale.length > 2))) {
    _$jscoverage['util/util.js'][41]++;
    locale = locale.substring(0, 2);
  }
  _$jscoverage['util/util.js'][43]++;
  return locale;
})});
}));
