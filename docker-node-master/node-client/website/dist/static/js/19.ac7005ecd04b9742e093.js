webpackJsonp([19],{"1hPH":function(e,l,t){var a=t("RV5S");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("24beff7e",a,!0)},FFrY:function(e,l,t){"use strict";l.g=function(e){return Object(a.a)({url:"/api/fieldInformation/GetFieldListInfo",method:"post",data:e})},l.b=function(e){return Object(a.a)({url:"/api/fieldInformation/EditFieldInfoSave",method:"post",data:e})},l.f=function(e){return Object(a.a)({url:"/api/fieldInformation/EditFieldInfo",method:"post",data:e})},l.e=function(e){return Object(a.a)({url:"/api/fieldInformation/GetDictionaryListInfo",method:"post",data:e})},l.c=function(e){return Object(a.a)({url:"/api/fieldInformation/AddDictionaryInfoSave",method:"post",data:e})},l.d=function(e){return Object(a.a)({url:"/api/fieldInformation/EditDictionaryInfoSave",method:"post",data:e})},l.a=function(e){return Object(a.a)({url:"/api/fieldInformation/DisableFieldInfo",method:"post",data:e})};var a=t("vLgD")},RV5S:function(e,l,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n.export_btn[data-v-f5bc6718]{\r\n  margin: 20px auto;\r\n  margin-bottom: 0;\r\n  text-align: center;\n}\n.export_table[data-v-f5bc6718]{\r\n  width: 100%;\r\n  margin: 10px auto;\n}\n.el-form[data-v-f5bc6718]{\r\n  overflow: hidden;\n}\n.width_100[data-v-f5bc6718]{\r\n  width: 100%;\r\n  float: left;\n}\n.width_50[data-v-f5bc6718]{\r\n  width: 50%;\r\n  float: left;\n}\n.select_w[data-v-f5bc6718]{\r\n  width: 100%;\n}\n.select_dic1[data-v-f5bc6718]{\r\n  width: 40%;\n}\n.select_dic2[data-v-f5bc6718]{\r\n  width: 26%;\n}\n.select_dic3[data-v-f5bc6718]{\r\n  width: 30%;\n}\r\n",""])},gPQn:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("mvHQ"),i=t.n(a),r=t("woOf"),o=t.n(r),n=t("FFrY"),s={mixins:[t("is1l").a],data:function(){return{dialogTableVisible2:!1,ruleForm:{},ruleForm2:{fieldId:"",fieldType:"",fieldChineseName:"",fieldEnglishName:"",htmlType:"",fieldLength:"",pageFace:"",dicType:"",dicLanguage:"",dicVersion:"",fieldStatistical:"",fieldQc:"",fieldSearch:"",reportNames:"",operateUser:""},isNew:1,rules:{fieldChineseName:[{required:!0,message:"请输入中文名称"}],fieldEnglishName:[{required:!0,message:"请输入英文名称"}],htmlType:[{required:!0,message:"请输入控件类型"}],pageFace:[{required:!0,message:"请输入所属页面"}],fieldType:[{required:!0,message:"请输入私有字段"}]},tjArr:[{label:"是",value:1},{label:"否",value:2}],syArr:[{label:"系统通用（默认）",value:1},{label:"系统内置",value:2},{label:"公司私有",value:3}],dic1Arr:[{label:"MEDDRA编码",value:1},{label:"ICD-10编码",value:2},{label:"WHODRUG",value:3},{label:"WHO-ART",value:4}],dic2Arr:[{label:"CN",value:1},{label:"EN",value:2}],dic3Arr:[{label:"版本1.1",value:1},{label:"版本1.2",value:2},{label:"版本1.3",value:3}],kjArr:[{label:"单行文本（只读）",value:1},{label:"单项选择",value:2},{label:"多项选择",value:3},{label:"下拉选择",value:4},{label:"数值",value:5},{label:"日期选择",value:6},{label:"日期录入",value:7}],tableData3:[{fieldName:"",reportName:"etb"},{fieldName:"",reportName:"ADR"},{fieldName:"",reportName:"SAE"},{fieldName:"",reportName:"CIOMSI"},{fieldName:"",reportName:" MedWATCH"}],multipleSelection:[],editRow:{},exportData:[]}},created:function(){console.log(12334,this.companyId)},methods:{close:function(){this.ruleForm={},this.tableData3=[{fieldName:"",reportName:"etb"},{fieldName:"",reportName:"ADR"},{fieldName:"",reportName:"SAE"},{fieldName:"",reportName:"CIOMSI"},{fieldName:"",reportName:" MedWATCH"}],this.dialogTableVisible2=!1},getList:function(){},getEditList:function(){var e=this;this.ruleForm2.fieldId=this.editRow.fieldId;var l={companyId:62,projectId:13,pageIndex:1,pageSize:10,fieldId:this.ruleForm2.fieldId,operateUser:"ybb"};Object(n.f)(l).then(function(l){e.ruleForm=o()(l.body);var t=l.body.fieldUploadList;if(t.length>0)t.map(function(l){e.tableData3.forEach(function(e){l.reportName==e.reportName&&(e.fieldName=l.fieldName)})})})},handleSelectionChange:function(e){this.multipleSelection=e},sub:function(){var e=this;this.$refs.ruleForm.validate(function(l){if(!l)return!1;e.save()})},save:function(){var e=this;this.ruleForm.reportNames=i()(this.multipleSelection),Object(n.b)(this.ruleForm).then(function(l){e.$message({message:"编辑成功",type:"success"}),e.dialogTableVisible2=!1,e.$parent.getList()})}}},c={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"app-container"},[t("section",[t("el-dialog",{staticClass:"width_over",attrs:{width:"55%",title:"维护字段",visible:e.dialogTableVisible2},on:{close:e.close,"update:visible":function(l){e.dialogTableVisible2=l}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{staticClass:"width_50",attrs:{label:"中文名",prop:"fieldChineseName"}},[t("el-input",{model:{value:e.ruleForm.fieldChineseName,callback:function(l){e.$set(e.ruleForm,"fieldChineseName",l)},expression:"ruleForm.fieldChineseName"}})],1),e._v(" "),t("el-form-item",{staticClass:"width_50",attrs:{label:"英文名",prop:"fieldEnglishName"}},[t("el-input",{model:{value:e.ruleForm.fieldEnglishName,callback:function(l){e.$set(e.ruleForm,"fieldEnglishName",l)},expression:"ruleForm.fieldEnglishName"}})],1),e._v(" "),t("el-form-item",{staticClass:"width_50",attrs:{label:"控件类型",prop:"htmlType"}},[t("el-select",{staticClass:"select_w",model:{value:e.ruleForm.htmlType,callback:function(l){e.$set(e.ruleForm,"htmlType",l)},expression:"ruleForm.htmlType"}},e._l(e.kjArr,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{staticClass:"width_50",attrs:{label:"最大长度",prop:""}},[t("el-input",{model:{value:e.ruleForm.fieldLength,callback:function(l){e.$set(e.ruleForm,"fieldLength",l)},expression:"ruleForm.fieldLength"}})],1),e._v(" "),t("el-form-item",{staticClass:"width_50",attrs:{label:"所属页面",prop:"pageFace"}},[t("el-select",{staticClass:"select_w",model:{value:e.ruleForm.pageFace,callback:function(l){e.$set(e.ruleForm,"pageFace",l)},expression:"ruleForm.pageFace"}},e._l(e.kjArr,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{staticClass:"width_50",attrs:{label:"私有字段",prop:"fieldType"}},[t("el-select",{staticClass:"select_w",model:{value:e.ruleForm.fieldType,callback:function(l){e.$set(e.ruleForm,"fieldType",l)},expression:"ruleForm.fieldType"}},e._l(e.syArr,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{staticClass:"width_50",attrs:{label:"字典",prop:""}},[t("el-select",{staticClass:"select_dic1",model:{value:e.ruleForm.dicType,callback:function(l){e.$set(e.ruleForm,"dicType",l)},expression:"ruleForm.dicType"}},e._l(e.dic1Arr,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})})),e._v(" "),t("el-select",{staticClass:"select_dic2",model:{value:e.ruleForm.dicLanguage,callback:function(l){e.$set(e.ruleForm,"dicLanguage",l)},expression:"ruleForm.dicLanguage"}},e._l(e.dic2Arr,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})})),e._v(" "),t("el-select",{staticClass:"select_dic3",model:{value:e.ruleForm.dicVersion,callback:function(l){e.$set(e.ruleForm,"dicVersion",l)},expression:"ruleForm.dicVersion"}},e._l(e.dic3Arr,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{staticClass:"width_50",attrs:{label:"参与统计",prop:""}},[t("el-select",{staticClass:"select_w",model:{value:e.ruleForm.fieldStatistical,callback:function(l){e.$set(e.ruleForm,"fieldStatistical",l)},expression:"ruleForm.fieldStatistical"}},e._l(e.tjArr,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{staticClass:"width_50",attrs:{label:"参与QC",prop:""}},[t("el-select",{staticClass:"select_w",model:{value:e.ruleForm.fieldQc,callback:function(l){e.$set(e.ruleForm,"fieldQc",l)},expression:"ruleForm.fieldQc"}},e._l(e.tjArr,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{staticClass:"width_50",attrs:{label:"参与搜索",prop:""}},[t("el-select",{staticClass:"select_w",model:{value:e.ruleForm.fieldSearch,callback:function(l){e.$set(e.ruleForm,"fieldSearch",l)},expression:"ruleForm.fieldSearch"}},e._l(e.tjArr,function(e,l){return t("el-option",{key:l,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),t("div",[t("div",[e._v("导出功能")]),e._v(" "),t("div",{staticClass:"export_table"},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData3,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{label:"表名称",prop:"reportName",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{label:"对应名称"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-input",{model:{value:l.row.fieldName,callback:function(t){e.$set(l.row,"fieldName",t)},expression:"scope.row.fieldName"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{type:"selection",width:"55"}})],1)],1)]),e._v(" "),t("div",{staticClass:"export_btn"},[t("el-button",{attrs:{type:"primary"},on:{click:function(l){e.sub("ruleForm")}}},[e._v("确定")]),e._v(" "),t("el-button",{on:{click:e.close}},[e._v("取消")])],1)],1)],1)])},staticRenderFns:[]};var u=t("VU/8")(s,c,!1,function(e){t("1hPH")},"data-v-f5bc6718",null);l.default=u.exports}});