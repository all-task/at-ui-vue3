(function(e){function t(t){for(var a,c,r=t[0],i=t[1],u=t[2],s=0,d=[];s<r.length;s++)c=r[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(d.length)d.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={examples:0},o={examples:0},l=[];function r(e){return i.p+"js/"+({"at-button-examples":"at-button-examples","at-selection-examples":"at-selection-examples","at-table-examples":"at-table-examples",components:"components",guides:"guides"}[e]||e)+"."+{"at-button-examples":"69bf8796","at-selection-examples":"ea60b083","at-table-examples":"4f256737",components:"b5e687ee",guides:"61bceaf4"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"at-table-examples":1,components:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({"at-button-examples":"at-button-examples","at-selection-examples":"at-selection-examples","at-table-examples":"at-table-examples",components:"components",guides:"guides"}[e]||e)+"."+{"at-button-examples":"31d6cfe0","at-selection-examples":"31d6cfe0","at-table-examples":"594f0d2b",components:"ea76718c",guides:"31d6cfe0"}[e]+".css",o=i.p+a,l=document.getElementsByTagName("link"),r=0;r<l.length;r++){var u=l[r],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===a||s===o))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],s=u.getAttribute("data-href");if(s===a||s===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=a,delete c[e],b.parentNode.removeChild(b),n(l)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var l=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=l);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=r(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/at-ui-vue3/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=s;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("a429")},"009b":function(e,t,n){},"1d14":function(e,t,n){"use strict";n("009b")},"47c3":function(e,t,n){"use strict";n("70b5")},5513:function(e,t,n){"use strict";n("7d9b")},"70b5":function(e,t,n){},"799e":function(e,t,n){},"7d9b":function(e,t,n){},"84ad":function(e,t,n){"use strict";n("799e")},a429:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c=n("8c4f"),o=(n("d3b7"),n("cc94")),l=[{path:"/",name:"Home",redirect:"/components/at-button"},{path:"/guides",name:"Guides",component:function(){return n.e("guides").then(n.bind(null,"574e"))}},{path:"/components",name:"Components",component:function(){return n.e("components").then(n.bind(null,"d9c7"))},children:o["a"]},{path:"/resources",name:"Resources",component:function(){return n.e("components").then(n.bind(null,"3273"))}}],r=l,i=Object(c["a"])({history:Object(c["b"])(),routes:r}),u=(n("d81d"),n("b0c0"),n("ade3"));function s(e,t){var n;return Object(a["q"])(),Object(a["d"])("button",{class:["at-button",(n={},Object(u["a"])(n,e.type,!0),Object(u["a"])(n,e.shape,"rectangle"!==e.shape),Object(u["a"])(n,e.size,"normal"!==e.size),Object(u["a"])(n,e.state,"normal"!==e.state),n)],type:"submit"===e.type||"reset"===e.type?e.type:"button",disabled:!(!e.disabled&&"disabled"!==e.state)},[Object(a["v"])(e.$slots,"default")],10,["type","disabled"])}n("caad");var d=n("8a77"),b=Object(a["h"])({name:"AtButton",props:{atId:{type:String,default:"at-".concat(Object(d["a"])(6))},tag:{type:String,default:"button"},type:{type:String,default:"minor",validator:function(e){return["major","minor","text","submit","button","reset"].includes(e)}},shape:{type:String,default:"rectangle",validator:function(e){return["rectangle","rounded","capsule"].includes(e)}},size:{type:String,default:"normal",validator:function(e){return["extra","large","normal","mini","micro","atom"].includes(e)}},state:{type:String,default:"normal",validator:function(e){return["normal","hover","active","running","disabled"].includes(e)}},active:{type:Boolean,default:!1},running:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}});n("dbd4");b.render=s;var p=b;p.install=function(e){e.component(p.name,p)};var f=p,h={class:"at-button-group at-group"},m={class:"at-group__inner"};function j(e,t){return Object(a["q"])(),Object(a["d"])("div",h,[Object(a["g"])("div",m,[Object(a["v"])(e.$slots,"default")])])}var O=Object(a["h"])({name:"AtButtonGroup"});O.render=j;var g=O;g.install=function(e){e.component(g.name,g)};var v=g,y={class:"at-radio__symbol"},k={key:0,class:"at-radio__label"};function w(e,t){return Object(a["q"])(),Object(a["d"])("label",{class:["at-radio",{"at-radio--checked":e.checked,"at-radio--disabled":e.disabled}]},[Object(a["g"])("span",y,[Object(a["g"])("input",{class:"at-radio__original",type:"radio",name:e.name,checked:e.checked,onFocus:t[1]||(t[1]=function(){return e.onFocus.apply(e,arguments)}),onBlur:t[2]||(t[2]=function(){return e.onBlur.apply(e,arguments)}),onClick:t[3]||(t[3]=function(){return e.onClick.apply(e,arguments)}),onChange:t[4]||(t[4]=Object(a["E"])((function(){return e.onChange.apply(e,arguments)}),["stop"]))},null,40,["name","checked"])]),void 0!==e.label?(Object(a["q"])(),Object(a["d"])("span",k,Object(a["y"])(e.label),1)):Object(a["e"])("",!0)],2)}n("a9e3");var _=Object(a["h"])({name:"AtRadio",model:{},props:{atId:{type:String,default:"at-".concat(Object(d["a"])(6))},name:{type:String,default:void 0},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{type:[String,Number],default:void 0}},setup:function(e,t){return{onFocus:function(){t.emit("focus")},onBlur:function(){t.emit("blur")},onClick:function(e){t.emit("click",e)},onChange:function(e){t.emit("update:checked",null===e||void 0===e?void 0:e.target.checked),t.emit("change",null===e||void 0===e?void 0:e.target.checked)}}}});_.render=w;var x=_;x.install=function(e){e.component(x.name,x)};var A=x,C={class:"at-group__inner"},q={key:0,class:"at-group__label"};function S(e,t){var n,c=Object(a["w"])("at-radio");return Object(a["q"])(),Object(a["d"])("div",{class:["at-radio-group at-group",(n={"at-group--disabled":e.disabled,"at-group--column":e.column},Object(u["a"])(n,e.button.shape,e.button&&e.button.shape&&"rectangle"!==e.button.shape),Object(u["a"])(n,e.button.size,e.button&&e.button.size&&"normal"!==e.button.size),n)]},[Object(a["g"])("div",C,[void 0!==e.label?(Object(a["q"])(),Object(a["d"])("label",q,Object(a["y"])(e.label)+":",1)):Object(a["e"])("",!0),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(e.options,(function(t,n){return Object(a["q"])(),Object(a["d"])(c,{key:n,name:e.atId,class:{"at-button":e.button,major:e.button&&e.checked===t.value,minor:e.button&&e.checked!==t.value,disabled:e.button&&e.disabled||t.disabled},checked:e.checked===t.value,disabled:e.disabled||t.disabled,label:t.label,onChange:function(n){e.onChange(t.value,n)}},null,8,["name","class","checked","disabled","label","onChange"])})),128))])],2)}var R=Object(a["h"])({name:"AtRadioGroup",components:{AtRadio:x},props:{atId:{type:String,default:"at-".concat(Object(d["a"])(6))},label:{type:String,default:void 0},options:{type:Array,required:!0},checked:{type:[Boolean,String],default:void 0},disabled:{type:Boolean,default:!1},column:{type:Boolean,default:!1},button:{type:[Boolean,Object],default:!1}},setup:function(e,t){return{onChange:function(e){t.emit("update:checked",e),t.emit("change",e)}}}});R.render=S;var B=R;B.install=function(e){e.component(B.name,B)};var T=B,I={class:"at-checkbox__symbol"},E={key:0,class:"at-checkbox__label"};function z(e,t){return Object(a["q"])(),Object(a["d"])("label",{class:["at-checkbox",{"at-checkbox--checked":e.checked,"at-checkbox--indeterminate":e.indeterminate,"at-checkbox--disabled":e.disabled}]},[Object(a["g"])("span",I,[Object(a["g"])("input",{class:"at-checkbox__original",type:"checkbox",name:e.name,checked:e.checked,onFocus:t[1]||(t[1]=function(){return e.onFocus.apply(e,arguments)}),onBlur:t[2]||(t[2]=function(){return e.onBlur.apply(e,arguments)}),onClick:t[3]||(t[3]=function(){return e.onClick.apply(e,arguments)}),onChange:t[4]||(t[4]=Object(a["E"])((function(){return e.onChange.apply(e,arguments)}),["stop"]))},null,40,["name","checked"])]),void 0!==e.label?(Object(a["q"])(),Object(a["d"])("span",E,Object(a["y"])(e.label),1)):Object(a["e"])("",!0)],2)}var P=Object(a["h"])({name:"AtCheckbox",props:{atId:{type:String,default:"at-".concat(Object(d["a"])(6))},name:{type:String,default:void 0},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},label:{type:[String,Number],default:void 0}},setup:function(e,t){return{onFocus:function(){t.emit("focus")},onBlur:function(){t.emit("blur")},onClick:function(e){t.emit("click",e)},onChange:function(e){t.emit("update:checked",null===e||void 0===e?void 0:e.target.checked),t.emit("change",null===e||void 0===e?void 0:e.target.checked)}}}});P.render=z;var N=P;N.install=function(e){e.component(N.name,N)};var F=N,H=(n("2532"),{class:"at-group__inner"}),G={key:0,class:"at-group__label"};function L(e,t){var n,c=Object(a["w"])("at-checkbox");return Object(a["q"])(),Object(a["d"])("div",{class:["at-checkbox-group at-group",(n={"at-group--disabled":e.disabled,"at-group--column":e.column},Object(u["a"])(n,e.button.shape,e.button&&e.button.shape&&"rectangle"!==e.button.shape),Object(u["a"])(n,e.button.size,e.button&&e.button.size&&"normal"!==e.button.size),n)]},[Object(a["g"])("div",H,[void 0!==e.label?(Object(a["q"])(),Object(a["d"])("label",G,Object(a["y"])(e.label)+":",1)):Object(a["e"])("",!0),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(e.options,(function(t,n){return Object(a["q"])(),Object(a["d"])(c,{key:n,name:e.atId,class:{"at-button":e.button,major:e.button&&e.checked.includes(t.value),minor:e.button&&!e.checked.includes(t.value),disabled:e.button&&e.disabled||t.disabled},checked:e.checked.includes(t.value),disabled:e.disabled||t.disabled,label:t.label,onChange:function(n){e.onChange(t.value,n)}},null,8,["name","class","checked","disabled","label","onChange"])})),128))])],2)}n("c975"),n("a434");var $=n("2909"),M=Object(a["h"])({name:"AtCheckboxGroup",components:{AtCheckbox:N},model:{prop:"checked",event:"change"},props:{atId:{type:String,default:"at-".concat(Object(d["a"])(6))},label:{type:String,default:void 0},options:{type:Array,required:!0},checked:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},column:{type:Boolean,default:!1},button:{type:[Boolean,Object],default:!1}},setup:function(e,t){return{onChange:function(n,a){var c=Object($["a"])(e.checked);a?c.push(n):c.splice(c.indexOf(n),1),t.emit("update:checked",c),t.emit("change",c)}}}});M.render=L;var D=M;D.install=function(e){e.component(D.name,D)};var U=D;n("c7cd");function J(e,t){var n,c=Object(a["w"])("at-thead"),o=Object(a["w"])("at-tbody");Object(a["w"])("at-tfoot");return Object(a["q"])(),Object(a["d"])("div",{id:e.atId,class:(n={},Object(u["a"])(n,e.atId,!0),Object(u["a"])(n,"at-table",!0),Object(u["a"])(n,"at-table--size-".concat(e.size),"normal"!==e.size),Object(u["a"])(n,"at-table--border",e.border),Object(u["a"])(n,"at-table--striped",e.striped),Object(u["a"])(n,"at-table--hide-header",!e.header),Object(u["a"])(n,"at-table--fixed",e.fixed),Object(u["a"])(n,"at-table--hide-selection",e.selection&&e.selection.hide),Object(u["a"])(n,"at-table--highlight-selected",e.selection&&e.selection.highlight),Object(u["a"])(n,"at-table--".concat(e.runing),e.runing),n)},[Object(a["g"])("table",{class:"at-table__table",style:{width:e.width?"".concat(e.width,"px"):void 0}},[Object(a["g"])(c,{header:e.header,"is-selected-all":e.isSelectedAll},null,8,["header","is-selected-all"]),Object(a["g"])(o,{"local-rows":e.localRows},null,8,["local-rows"]),Object(a["e"])("",!0)],4)],10,["id"])}n("4de4"),n("4160"),n("13d5"),n("f4dd"),n("07ac"),n("159b"),n("96cf");var K=n("1da1"),V=(n("99af"),{class:"at-table__thead"}),Q={key:0,style:{width:"34px"},width:"34",class:"at-table__selection"},W={class:"at-table__thead-tr"},X={class:"at-table__cell"},Y={class:"at-table__cell"};function Z(e,t){var n=Object(a["w"])("AtCheckbox");return Object(a["q"])(),Object(a["d"])("thead",V,[Object(a["g"])("colgroup",null,[e.selection?(Object(a["q"])(),Object(a["d"])("col",Q)):Object(a["e"])("",!0),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(e.cols,(function(t,n){return Object(a["q"])(),Object(a["d"])("col",{key:"col-".concat(n+1),class:Object(u["a"])({},"".concat(e.atId,"__col-").concat(e.kebabCase(t.key)),!0),style:{width:!!t.width&&t.width+"px"},width:!!t.width&&t.width},null,14,["width"])})),128))]),Object(a["g"])("tr",W,[e.selection?(Object(a["q"])(),Object(a["d"])("th",{key:0,class:["at-table__selection at-table__select-all at-table__thead-th",{"at-table__th--sticky":e.fixed,"at-table__th--sticky-left":e.fixed}]},[Object(a["g"])("span",X,["checkbox"===e.selectionType?Object(a["g"])(n,{key:0,checked:!0===e.isSelectedAll,indeterminate:"indeterminate"===e.isSelectedAll,onChange:e.selectAll},null,8,["checked","indeterminate","onChange"]):Object(a["e"])("",!0)])],2)):Object(a["e"])("",!0),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(e.cols,(function(t,n){return Object(a["q"])(),Object(a["d"])("th",{key:"col-".concat(n+1),class:["at-table__thead-th",{"at-table__th--sticky":e.fixed,"at-table__th--sticky-left":"left"===t.fixed,"at-table__th--sticky-right":"right"===t.fixed}],style:{width:t.width?t.width+"px":void 0,left:t.left&&"".concat(t.left,"px"),right:t.right&&"".concat(t.right,"px")}},[Object(a["g"])("span",Y,Object(a["y"])(t.label),1)],6)})),128))])])}var ee=n("375a"),te=n.n(ee),ne=Object(a["h"])({name:"AtThead",parent:"AtTable",components:{AtCheckbox:N},props:{isSelectedAll:{type:[Boolean,String],default:!1,validator:function(e){return[!1,"indeterminate",!0].includes(e)}}},inject:["atId","cols","fixed","selection","selectionHide","selectionType","selectAll"],setup:function(){return{kebabCase:te.a}}});ne.render=Z;var ae=ne,ce={class:"at-table__tbody"};function oe(e,t){var n=Object(a["w"])("at-tr");return Object(a["q"])(),Object(a["d"])("tbody",ce,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(e.rows,(function(t,c){return Object(a["q"])(),Object(a["d"])(n,{key:"row-".concat(c),row:t,"local-row":e.localRows[t.id]},null,8,["row","local-row"])})),128))])}var le={class:"at-table__cell"},re={class:"at-table__cell"},ie={class:"at-table__cell"};function ue(e,t){var n=Object(a["w"])("AtCheckbox"),c=Object(a["w"])("at-radio");return Object(a["q"])(),Object(a["d"])("tr",{class:["at-table__tr",{"at-table__tr--selected":e.localRow&&e.localRow.isSelected}],onClick:t[5]||(t[5]=function(){return e.rowClickHandler.apply(e,arguments)})},[e.selection?(Object(a["q"])(),Object(a["d"])("th",{key:0,class:["at-table__selection at-table__th",{"at-table__th--sticky":e.fixed,"at-table__th--sticky-left":e.fixed}]},[Object(a["g"])("span",le,["checkbox"===e.selectionType?Object(a["g"])(n,{key:0,class:"at-table__select-row-checkbox",name:e.atId,checked:e.localRow&&e.localRow.isSelected,onChange:t[1]||(t[1]=function(t){e.selectRow(e.row,t)}),onClick:t[2]||(t[2]=function(e){e.stopPropagation()})},null,8,["name","checked"]):Object(a["g"])(c,{key:1,class:"at-table__select-row-radio",name:e.atId,checked:e.localRow&&e.localRow.isSelected,onChange:t[3]||(t[3]=function(t){e.switchRow(e.row)}),onClick:t[4]||(t[4]=function(e){e.stopPropagation()})},null,8,["name","checked"])])],2)):Object(a["e"])("",!0),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(e.cols,(function(t,n){return Object(a["q"])(),Object(a["d"])(a["a"],null,[t.fixed?(Object(a["q"])(),Object(a["d"])("th",{key:"cell-".concat(n),class:["at-table__th",{"at-table__th--sticky":t.fixed,"at-table__th--sticky-left":"left"===t.fixed,"at-table__th--sticky-right":"right"===t.fixed}],style:{left:t.left&&"".concat(t.left,"px"),right:t.right&&"".concat(t.right,"px")}},[Object(a["g"])("span",re,Object(a["y"])(e.row[t.key]),1)],6)):(Object(a["q"])(),Object(a["d"])("td",{key:"cell-".concat(n),class:"at-table__td"},[Object(a["g"])("span",ie,Object(a["y"])(e.row[t.key]),1)]))],64)})),256))],2)}var se=Object(a["h"])({name:"AtTr",parent:"AtTable",components:{AtCheckbox:N},props:{row:{type:Object,required:!0},localRow:{type:Object,default:function(){}}},inject:["atId","cols","fixed"],setup:function(e){var t=Object(a["k"])("selection"),n=Object(a["k"])("selectionType"),c=Object(a["k"])("selectionByRowClick"),o=Object(a["k"])("selectRow"),l=Object(a["k"])("switchRow"),r=function(){c&&("checkbox"===n?o(e.row,!e.localRow||!e.localRow.isSelected):"radio"===n&&l(e.row))};return{selection:t,selectionType:n,selectRow:o,switchRow:l,rowClickHandler:r}}});se.render=ue;var de=se,be=Object(a["h"])({name:"AtTbody",parent:"AtTable",components:{AtTr:de},props:{localRows:{type:Object,required:!0}},inject:["cols","rows"]});be.render=oe;var pe=be,fe={class:"at-table__tfoot"};function he(e,t){return Object(a["q"])(),Object(a["d"])("tfoot",fe)}var me=Object(a["h"])({name:"AtTfoot",parent:"AtTable"});me.render=he;var je=me,Oe=8,ge=34,ve=100,ye=Object(a["h"])({name:"AtTable",components:{AtThead:ae,AtTbody:pe,AtTfoot:je},props:{atId:{type:String,default:"at-".concat(Object(d["a"])(6))},rows:{type:Array,required:!0,default:function(){return[]}},columns:{type:Array,required:!0},size:{type:String,default:"normal",validator:function(e){return["extra","large","normal","mini"].includes(e)}},border:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},header:{type:[Boolean,Object],default:!0},fixed:{type:Boolean,default:!1},selection:{type:[Boolean,Object],default:!1},selected:{type:Array,default:function(){return[]}}},setup:function(e,t){var n=Object(a["t"])(!1),c=Object(a["t"])(!1),o=Object(a["s"])({}),l=Object(a["b"])((function(){var t=e.columns,n=e.border?1:0;if(e.fixed){var a=Oe+(e.selection&&!e.selection.hide?ge+n:0),c=!1;t=t.reduce((function(e,t){var o=t;if("left"===o.fixed){if(o.left=a,void 0===o.width)throw a+=ve+n,new Error("The width of fixed column is required.");a+=o.width+n}return c||"right"!==o.fixed||(c=!0,o.lastFixedRight=!0),e.push(o),e}),[]);var o=0,l=!1;t=t.reduceRight((function(e,t){var a=t;if("right"===a.fixed){if(a.right=o,void 0===a.width)throw o+=ve+n,new Error("The width of fixed column is required.");o+=a.width+n}return l||"left"!==a.fixed||(l=!0,a.lastFixedLeft=!0),e.push(a),e}),[]).reverse()}return t})),r=Object(a["b"])((function(){return l.value.reduce((function(e,t){return e+Number(t.width)}),16)||void 0})),i=Object(a["b"])((function(){return Object.values(o).filter((function(e){return!0===e.isSelected})).map((function(e){return e.pointer}))})),u=function(e,t){void 0===o[e.id]?o[e.id]={pointer:e,isSelected:t}:o[e.id].isSelected=t},s=function(){0===i.value.length?n.value=!1:i.value.length===e.rows.length?n.value=!0:n.value="indeterminate"},d=function(){var o=Object(K["a"])(regeneratorRuntime.mark((function o(l){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n.value=l,c.value=l?"selecting-all":"deselecting-all",e.rows.forEach((function(e){u(e,l)})),o.next=5,Object(a["m"])();case 5:c.value=!1,t.emit("select-all",l),t.emit("change",i.value),t.emit("update:selected",i.value);case 9:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}(),b=function(e,n){u(e,n),s(),t.emit("select",e,n),t.emit("change",i.value),t.emit("update:selected",i.value)},p=function(e){i.value.length&&u(i.value[0],!1),u(e,!0),t.emit("select",!0,e),t.emit("change",i.value),t.emit("update:selected",i.value)},f=function(){var n=Object(K["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(e.selected&&Array.isArray(e.selected)&&e.selected.length)){n.next=13;break}if(void 0!==e.selection.type&&"checkbox"!==e.selection.type){n.next=6;break}e.selected.forEach((function(t){e.rows.includes(Object(a["l"])(t)?Object(a["z"])(t):t)&&u(t,!0)})),s(),n.next=13;break;case 6:if("radio"!==e.selection.type){n.next=13;break}if(u(e.selected[0],!0),!(e.selected.length>1)){n.next=13;break}return n.next=11,Object(a["m"])();case 11:t.emit("change",i.value),t.emit("update:selected",i.value);case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return f(),{isSelectedAll:n,runing:c,localRows:o,cols:l,width:r,selectedRows:i,selectAll:d,selectRow:b,switchRow:p}},provide:function(){var e=this,t={};return Object.defineProperties(t,{atId:{enumerable:!0,get:function(){return e.atId}},rows:{enumerable:!0,get:function(){return e.rows}},cols:{enumerable:!0,get:function(){return e.cols}},fixed:{enumerable:!0,get:function(){return e.fixed}},selection:{enumerable:!0,get:function(){return Boolean(e.selection)}},selectionHide:{enumerable:!0,get:function(){return!(!e.selection||!e.selection.hide)&&e.selection.hide}},selectionType:{enumerable:!0,get:function(){return e.selection&&e.selection.type?e.selection.type:"checkbox"}},selectionByRowClick:{enumerable:!0,get:function(){return!(!e.selection||!e.selection.rowClick)&&e.selection.rowClick}},selectAll:{enumerable:!0,value:this.selectAll},selectRow:{enumerable:!0,value:this.selectRow},switchRow:{enumerable:!0,value:this.switchRow}}),t}});n("1d14");ye.render=J;var ke=ye;ke.install=function(e){e.component(ke.name,ke)};var we=ke,_e=[f,v,A,T,F,U,we],xe=function(e){_e.map((function(t){return e.component(t.name,t)}))},Ae={install:xe,AtButton:f,AtButtonGroup:v,AtRadio:A,AtRadioGroup:T,AtCheckbox:F,AtCheckboxGroup:U,AtTable:we},Ce={class:"example-container"},qe={class:"example-container__wrap"},Se={class:"example-container__title"},Re={class:"example-container__desc"},Be={class:"example-container__example"},Te={class:"example-container__code"};function Ie(e,t){return Object(a["q"])(),Object(a["d"])("div",Ce,[Object(a["g"])("div",qe,[Object(a["g"])("h5",Se,Object(a["y"])(e.title),1),Object(a["g"])("div",Re,[Object(a["v"])(e.$slots,"desc")]),Object(a["g"])("div",Be,[Object(a["v"])(e.$slots,"default")]),Object(a["g"])("div",Te,[Object(a["v"])(e.$slots,"code")])])])}var Ee={name:"ExampleContainer",props:{title:{type:String,required:!0}}};n("84ad");Ee.render=Ie;var ze=Ee,Pe=[ze],Ne=function(e){Pe.map((function(t){return e.component(t.name,t)}))},Fe={install:Ne},He={id:"main"};function Ge(e,t){var n=Object(a["w"])("TheHeader"),c=Object(a["w"])("router-view");return Object(a["q"])(),Object(a["d"])("div",He,[Object(a["g"])(n),Object(a["g"])(c)])}var Le={id:"header",class:"header"},$e=Object(a["g"])("h1",{class:"logo"},"AT UI VUE3",-1),Me={id:"main-nav",class:"main-nav"},De={class:"main-nav__list"};function Ue(e,t){var n=Object(a["w"])("router-link");return Object(a["q"])(),Object(a["d"])("header",Le,[$e,Object(a["g"])("nav",Me,[Object(a["g"])("ul",De,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(e.mainNav,(function(e){return Object(a["q"])(),Object(a["d"])("li",{key:e.name.toLowerCase(),class:"main-nav__item"},[Object(a["g"])(n,{class:"main-nav__link","active-class":"main-nav__link--active",to:e.path},{default:Object(a["D"])((function(){return[Object(a["f"])(Object(a["y"])(e.name),1)]})),_:2},1032,["to"])])})),128))])])])}var Je=Object(a["h"])({name:"Header",computed:{mainNav:function(){return r.map((function(e){return{name:e.name,path:e.path}}))}}});n("5513");Je.render=Ue;var Ke=Je,Ve=Object(a["h"])({name:"App",components:{TheHeader:Ke}});n("47c3");Ve.render=Ge;var Qe=Ve,We=Object(a["c"])(Qe);We.use(i),We.use(Ae),We.use(Fe),We.mount("#root")},cc94:function(e,t,n){"use strict";n("d3b7");var a=[{path:"/components/at-button",name:"Button",component:function(){return n.e("at-button-examples").then(n.bind(null,"5799"))}},{path:"/components/at-Selection",name:"Selection",component:function(){return n.e("at-selection-examples").then(n.bind(null,"267c"))}},{path:"/components/at-table",name:"Table",component:function(){return n.e("at-table-examples").then(n.bind(null,"07fc"))}}];t["a"]=a},ce62:function(e,t,n){},dbd4:function(e,t,n){"use strict";n("ce62")}});
//# sourceMappingURL=examples.5689fe09.js.map