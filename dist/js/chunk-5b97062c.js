(window["webpackJsonp_ecomplus_marketplace"]=window["webpackJsonp_ecomplus_marketplace"]||[]).push([["chunk-5b97062c"],{"937a":function(a,e,o){"use strict";o.r(e);var s=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("Application",{scopedSlots:a._u([{key:"settings-append",fn:function(){return[o("a-collapse",{staticClass:"mt-4"},[o("a-collapse-panel",{key:"1",attrs:{header:"Envio Manual"}},[o("div",{staticClass:"mb-3"},[o("a-alert",{attrs:{message:"Sincronização Manual",description:"É possível enviar produtos e pedidos para o Bling manualmente, e também, produtos do Bling para E-Com Plus.",type:"info","show-icon":""}})],1),o("div",{staticClass:"mb-3"},[o("span",[a._v("Para enviar produtos da E-Com Plus para o Bling, selecione a opção Produtos E-Com Plus, e insira os SKU's dos produtos que você pretende enviar para o Bling separados por virgula, ex; MeuSku1,MeuSku2,MeuSku3")])]),o("div",{staticClass:"mb-3"},[o("span",[a._v("Para enviar pedidos da E-Com Plus para o Bling, selecione a opção Pedidos E-Com Plus, e insira os Id's dos pedidos separados por virgula, ex; 5e76d9e77e65524614891a77,5e76d9e77e65524614891a77,5e76d9e77e65524614891a77")])]),o("div",{staticClass:"mb-3"},[o("span",[a._v("Para enviar produtos do Bling para E-Com Plus, selecione a opção Produtos Bling, e insira o código dos produtos no Bling separados por virgula, ex; MeuProdutoNoBling1,MeuProdutoNoBling2,MeuProdutoNoBling3")])]),o("a-input-group",{attrs:{compact:""}},[o("a-select",{staticStyle:{width:"30%"},attrs:{"default-value":"ecomProducts"},model:{value:a.syncType,callback:function(e){a.syncType=e},expression:"syncType"}},[o("a-select-option",{attrs:{value:"ecomProducts"}},[a._v("Produtos E-Com Plus")]),o("a-select-option",{attrs:{value:"ecomOrders"}},[a._v("Pedidos E-Com Plus")]),o("a-select-option",{attrs:{value:"blingProducts"}},[a._v("Produtos Bling")])],1),o("a-input",{staticStyle:{width:"50%"},model:{value:a.syncValues,callback:function(e){a.syncValues=e},expression:"syncValues"}})],1),o("div",{staticClass:"mt-3"},[o("a-button",{attrs:{type:"primary"},on:{click:a.handler}},[a._v("Sincronizar")])],1)],1)],1)]},proxy:!0}])})},t=[],n=(o("99af"),o("d81d"),o("ac1f"),o("5319"),o("1276"),o("cebe")),r=o.n(n),i=o("83c4"),l=o("b6ba"),c={name:"AppBling",data:function(){return{syncType:"ecomProducts",syncValues:""}},components:{Application:l["a"]},methods:{handler:function(){var a=this,e="https://bling.ecomplus.biz",o="",s=this.syncType,t=this.syncValues;switch(s){case"ecomProducts":e+="/ecomplus/products",o="produto";break;case"ecomOrders":e+="/ecomplus/orders",o="produto";break;case"blingProducts":e+="/bling/products",o="pedido";break;default:break}if(""===t||null===t)this.$bvToast.toast("É preciso informar algum ".concat(o," para sincronizar, ou vário(a)s ").concat(o," separados por vírgula."),{variant:"warning",title:"Bling"});else{var n=t.split(",");n=n.map((function(a){return a.replace(/ /g,"")})),r()({url:e,method:"post",headers:{"X-Store-Id":i["$ecomConfig"].get("store_id")},data:n}).then((function(){a.$bvToast.toast("".concat(o," foram enviados e serão sincronizados."),{variant:"success",title:"Bling"}),a.syncValues=null})).catch((function(e){console.log(e),a.$bvToast.toast("Não foi possível realizar a sincronização. Tente novamente mais tarde ou informe o suporte.",{variant:"danger",title:"Bling"})}))}}}},u=c,p=o("2877"),d=Object(p["a"])(u,s,t,!1,null,null,null);e["default"]=d.exports},d81d:function(a,e,o){"use strict";var s=o("23e7"),t=o("b727").map,n=o("1dde"),r=o("ae40"),i=n("map"),l=r("map");s({target:"Array",proto:!0,forced:!i||!l},{map:function(a){return t(this,a,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-5b97062c.js.map