webpackJsonp([9],{"336S":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.pre-ipt[data-v-78f4a64c]{\r\n  color: 13px;\r\n  padding: 20px 10px;\r\n  background: #eef1f6;\n}\n.el-input[data-v-78f4a64c]{\r\n  width: 68%;\n}\n.line[data-v-78f4a64c]{\r\n  text-align: center;\n}\n.app-container[data-v-78f4a64c]{\r\n  background: #fff;\n}\n.el-button[data-v-78f4a64c]{\r\n  height: 33px;\r\n  line-height: 33px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 0 20px;\r\n  font-size: 13px;\n}\ni[data-v-78f4a64c]{\r\n  color: #32c5d2!important;\r\n  font-size: 16px;\n}\n.block[data-v-78f4a64c]{\r\n  text-align: center;\r\n  margin-top: 30px;\n}\n.el-select[data-v-78f4a64c]{\r\n  width: 68%;\n}\r\n",""])},Gb58:function(e,t,a){"use strict";var r=a("8obM"),n=(a("is1l"),{props:["drugId"],data:function(){return{dialogFormVisible:!1,tableData:[],total:10,isEdit:0,init:{companyId:62,projectId:1,pageIndex:1,pageSize:10,drugId:1},dialogTableVisible2:!1,ruleForm:{adverseId:"",drugId:"",adverseName:"",adversePtName:"",adversePtCode:"",adverseIncidence:"",remark:"",createUser:"ybb",companyId:62,projectId:1},loading:!1,rules:{adverseName:[{required:!0,message:"请输入不良反应名称"}],adversePtName:[{required:!0,message:"请输入首选术语"}],adversePtCode:[{required:!0,message:"请输入首选术语"}]}}},created:function(){},methods:{getList:function(){var e=this;this.loading=!0,Object(r.u)(this.init).then(function(t){e.tableData=t.body,e.total=t.data.totalCount,e.loading=!1})},handleCurrentChange:function(e){this.init.pageIndex=e,this.getList()},deleteInfo:function(e){var t=this,a={adverseId:e.adverseId};this.loading=!0,Object(r.g)(a).then(function(e){t.getList()})},addEffect:function(){this.dialogTableVisible2=!0,this.isEdit=0,this.ruleForm={adverseId:"",drugId:"",adverseName:"",adversePtName:"",adversePtCode:"",adverseIncidence:"",remark:"",createUser:"ybb",companyId:62,projectId:1}},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.addEffectInfo()})},addEffectInfo:function(){var e=this,t=this.ruleForm;0==this.isEdit?Object(r.c)(t).then(function(t){e.$message({message:"添加成功",type:"success"}),e.dialogTableVisible2=!1,e.getList()}):Object(r.n)(t).then(function(t){e.$message({message:"编辑成功",type:"success"}),e.dialogTableVisible2=!1,e.getList()})},editInfo:function(e){var t=this;this.dialogTableVisible2=!0,this.isEdit=1;var a={companyId:62,projectId:1,pageIndex:1,pageSize:10,adverseId:e.adverseId};this.ruleForm={adverseId:"",drugId:"",adverseName:"",adversePtName:"",adversePtCode:"",adverseIncidence:"",remark:"",createUser:"ybb",companyId:62,projectId:1},Object(r.o)(a).then(function(e){var a=e.body;t.ruleForm={adverseId:a.adverseId,drugId:"",adverseName:a.adverseName,adversePtName:a.adversePtName,adversePtCode:a.adversePtCode,adverseIncidence:a.adverseIncidence,remark:a.remark,createUser:"ybb",companyId:62,projectId:1}})}}}),i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("section",[a("el-dialog",{attrs:{title:"不良反应",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("div",{staticClass:"pop"},[a("div",{staticClass:"right-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addEffect}},[a("i",{staticClass:"el-icon-plus"}),e._v("添加不良反应")])],1),e._v(" "),a("div",{staticClass:"effect-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"serialNumber",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"adverseName",label:"不良反应名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"adversePtName",label:"首选术语"}}),e._v(" "),a("el-table-column",{attrs:{prop:"adverseIncidence",label:"发生率%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top-start"}},[a("span",{on:{click:function(a){e.editInfo(t.row)}}},[a("i",{staticClass:"el-icon-edit"})])]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start"}},[a("span",{on:{click:function(a){e.deleteInfo(t.row)}}},[a("i",{staticClass:"el-icon-delete"})])])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){}}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")])],1)])]),e._v(" "),a("div",{staticClass:"buliang"},[a("el-dialog",{attrs:{width:"650px",title:"添加不良反应",visible:e.dialogTableVisible2},on:{"update:visible":function(t){e.dialogTableVisible2=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"不良反应",prop:"adverseName"}},[a("el-input",{model:{value:e.ruleForm.adverseName,callback:function(t){e.$set(e.ruleForm,"adverseName",t)},expression:"ruleForm.adverseName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"首选术语",prop:"adversePtName"}},[a("el-input",{model:{value:e.ruleForm.adversePtName,callback:function(t){e.$set(e.ruleForm,"adversePtName",t)},expression:"ruleForm.adversePtName"}}),e._v(" "),a("span",{staticClass:"btn-code"},[a("el-button",{attrs:{type:"primary"}},[e._v("编码")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"首选术语编码",prop:"adversePtCode"}},[a("el-input",{model:{value:e.ruleForm.adversePtCode,callback:function(t){e.$set(e.ruleForm,"adversePtCode",t)},expression:"ruleForm.adversePtCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发生率（%）",prop:"region"}},[a("el-input",{model:{value:e.ruleForm.adverseIncidence,callback:function(t){e.$set(e.ruleForm,"adverseIncidence",t)},expression:"ruleForm.adverseIncidence"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"region"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),a("el-button",[e._v("重置")])],1)],1)],1)],1)],1)])},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(e){a("q/UM")},"data-v-6cd3ae0d",null);t.a=o.exports},PP0t:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.pop[data-v-6cd3ae0d]{\n}\n.btn-code[data-v-6cd3ae0d]{\r\n  position: absolute;\r\n  right: 0;\r\n  top: -1px;\n}\n.buliang .el-input[data-v-6cd3ae0d]{\r\n  width: 100%!important;\r\n  position: relative;\n}\n.buliang .el-textarea[data-v-6cd3ae0d]{\r\n  width: 100%;\n}\n.block[data-v-6cd3ae0d]{\r\n  text-align: right;\r\n  margin-top: 20px;\n}\n.right-btn[data-v-6cd3ae0d]{\r\n  text-align: right;\n}\n.file-btn[data-v-6cd3ae0d]{\r\n  position: relative;\n}\n.pop-title[data-v-6cd3ae0d]{\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  background: #409EFF;\n}\n.dialog-footer[data-v-6cd3ae0d]{\r\n  text-align: right;\n}\n.el-input[data-v-6cd3ae0d]:first-child{\r\n  width: 67%;\n}\n.file[data-v-6cd3ae0d]{\r\n  width: 80px;\r\n  height: 33px;\r\n  opacity:0;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\n}\n.el-select[data-v-6cd3ae0d]{\r\n  width: 100%;\n}\n.dialog-footer[data-v-6cd3ae0d]{\r\n  text-align: center;\n}\n.el-dialog[data-v-6cd3ae0d]{\r\n  width: 40%;\n}\n.effect-table[data-v-6cd3ae0d]{\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\n}\r\n",""])},fxAC:function(e,t,a){var r=a("336S");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("c0cffc16",r,!0)},i2Zk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("woOf"),n=a.n(r),i=a("8obM"),o=a("is1l"),l=a("Gb58"),s={mixins:[o.a],data:function(){return{search:{drugGenericStandardName:"",drugFormulation:"",drugActiveIngredients:"",companyId:"",projectId:"",pageIndex:1,pageSize:10},total:100,tableData:[],select1:[],loading:!1,effectId:0}},created:function(){this.getList(),this.getDict("/api/dictionaryInformation/GetDrugFormulationInformation","select1")},methods:{handleCurrentChange:function(e){this.search.pageIndex=e,this.getList()},edit:function(e){this.$router.push({path:"/preDrug/edit",query:{drugId:e.drugId}})},deleteInfo:function(e){var t=this,a={projectId:this.search.projectId,companyId:this.search.companyId,drugId:e.drugId};Object(i.h)(a).then(function(e){t.getList()})},searchList:function(){this.getList()},getList:function(){var e=this;this.search.companyId=this.companyId,this.search.projectId=this.projectId;var t=n()({},this.search);this.loading=!0,Object(i.r)(t).then(function(t){e.tableData=t.body,e.total=t.data.totalCount,e.loading=!1})},getDict:function(e,t){var a=this,r={url:e};Object(i.q)(r).then(function(e){a[t]=e.body})},showEffect:function(e){console.log(e),this.effectId=e.drugId,this.$refs.uneffect.init.drugId=e.drugId,this.$refs.uneffect.dialogFormVisible=!0},showAdd:function(){this.$router.push({path:"/preDrug/edit"})},clearList:function(){}},components:{uneffect:l.a}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("section",[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.showAdd}},[a("i",{staticClass:"el-icon-plus"}),e._v("新增")])],1),e._v(" "),a("div",{staticClass:"pre-ipt"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("label",[e._v("活性成分")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.search.drugActiveIngredients,callback:function(t){e.$set(e.search,"drugActiveIngredients",t)},expression:"search.drugActiveIngredients"}})],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("label",[e._v("通用名")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.search.drugGenericStandardName,callback:function(t){e.$set(e.search,"drugGenericStandardName",t)},expression:"search.drugGenericStandardName"}})],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("label",[e._v("剂型")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.search.drugFormulation,callback:function(t){e.$set(e.search,"drugFormulation",t)},expression:"search.drugFormulation"}},[a("el-option",{attrs:{label:"请选择",value:"0"}}),e._v(" "),e._l(e.select1,function(e,t){return a("el-option",{key:t,attrs:{label:e.dictDisplayChinese,value:e.dictRealValues}})})],2)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"",icon:"el-icon-refresh"},on:{click:e.clearList}},[e._v("重置")])],1)],1)],1),e._v(" "),a("div",{staticStyle:{"margin-top":"40px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"drugActiveIngredients",label:"活性成分"}}),e._v(" "),a("el-table-column",{attrs:{prop:"drugGenericStandardName",label:"通用名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"drugFormulationName",label:"剂型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"drugClass",label:"药品分类"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createdTime",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"不良反应"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showEffect(t.row)}}},[e._v("不良反应")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top-start"}},[a("span",{on:{click:function(a){e.edit(t.row)}}},[a("i",{staticClass:"el-icon-edit"})])]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start"}},[a("span",{on:{click:function(a){e.deleteInfo(t.row)}}},[a("i",{staticClass:"el-icon-delete"})])])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("uneffect",{ref:"uneffect",attrs:{drugId:e.effectId}})],1)])},staticRenderFns:[]};var c=a("VU/8")(s,d,!1,function(e){a("fxAC")},"data-v-78f4a64c",null);t.default=c.exports},"q/UM":function(e,t,a){var r=a("PP0t");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("35768178",r,!0)}});