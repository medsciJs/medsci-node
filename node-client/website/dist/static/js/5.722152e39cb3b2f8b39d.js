webpackJsonp([5],{FUfG:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.input-pre[data-v-3ca3616a]{\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n.input-pre > div[data-v-3ca3616a]{\n  width: 50%;\n  float: left;\n  margin-top: 20px;\n}\n.input-pre > div[data-v-3ca3616a]:nth-child(odd){\n  padding-right: 15px;\n}\n.input-pre > div[data-v-3ca3616a]:nth-child(even){\n  padding-left: 15px;\n}\n.pre-ipt[data-v-3ca3616a]{\n  color: 13px;\n  padding: 20px 10px;\n  background: #eef1f6;\n}\n.el-input[data-v-3ca3616a]{\n}\n.el-select[data-v-3ca3616a]{\n  width: 100%;\n}\n.line[data-v-3ca3616a]{\n  text-align: center;\n}\n.app-container[data-v-3ca3616a]{\n  background: #fff;\n}\n.el-button[data-v-3ca3616a]{\n  height: 33px;\n  line-height: 33px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 20px;\n  font-size: 13px;\n}\ni[data-v-3ca3616a]{\n  color: #32c5d2;\n  font-size: 16px;\n}\n.upload[data-v-3ca3616a]{\n  margin-top: 20px;\n}\n.upload i[data-v-3ca3616a]{\n  color: #fff;\n}\n.block[data-v-3ca3616a]{\n  \n  margin-top: 30px;\n}\n.tableData[data-v-3ca3616a]{\n  margin-top: 20px;\n}\n.button_d1[data-v-3ca3616a]{\n  text-align: center;\n  margin-top: 30px;\n}\n.el-form-item[data-v-3ca3616a]{\n  width: 50%!important;\n  margin-left: 0!important;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.el-form-item[data-v-3ca3616a]:nth-child(odd){\n  padding-right: 15px;\n}\n.el-form-item[data-v-3ca3616a]:nth-child(even){\n  padding-left: 15px;\n}\n.el-form-item[data-v-3ca3616a]{\n  float: left;\n  margin-bottom: 18px;\n}\n.el-form-item__content[data-v-3ca3616a]{\n  line-height: 37px;\n}\n",""])},Tbwc:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.pop[data-v-c4984174]{\n}\n.file-btn[data-v-c4984174]{\n  position: relative;\n}\n.pop-title[data-v-c4984174]{\n  color: #fff;\n  text-align: center;\n  padding: 10px 0;\n  background: #409EFF;\n}\n.dialog-footer[data-v-c4984174]{\n  text-align: right;\n}\n.el-input[data-v-c4984174]:first-child{\n  width: 67%;\n}\n.file[data-v-c4984174]{\n  width: 80px;\n  height: 33px;\n  opacity:0;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.el-select[data-v-c4984174]{\n  width: 100%;\n}\n.dialog-footer[data-v-c4984174]{\n  text-align: center;\n}\n.el-dialog[data-v-c4984174]{\n  width: 40%;\n}\n",""])},"Y/Xb":function(t,e,a){var n=a("Tbwc");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("4ac88e7e",n,!0)},e0bB:function(t,e,a){var n=a("FUfG");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("62740eb8",n,!0)},kVWw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("woOf"),i=a.n(n),r=a("8obM"),l=a("cpGA"),o={props:["drugId"],data:function(){return{ipt1:"",ipt2:"",ipt3:"",dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},fileKey:"",filePath:null,token:"",select1:[],textarea3:"",formLabelWidth:"120px"}},created:function(){this.getDict("/api/DictionaryInformation/GetDrugAttachInformation","select1")},methods:{changeFile:function(t){this.form.name=t.target.files[0].name.split(".")[0]+(new Date).getTime()+"."+t.target.files[0].name.split(".")[1],this.fileKey=this.form.name,this.filePath=t.target.files[0],this.getToken()},upload:function(){if(""==this.token)return!1;var t={useCdnDomain:!0,region:l.region.z1},e=this,a={next:"",error:"",complete:function(t){e.uploadJava()}};l.upload(this.filePath,this.fileKey,this.token,{},t).subscribe(a)},uploadJava:function(){var t=this,e={attachKey:this.fileKey,attachName:this.filePath.name.split(".")[0],attachSize:this.filePath.size,attachType:this.filePath.name.split(".")[1],drugId:this.drugId,attachDescription:this.textarea3,attachClass:this.form.region,companyId:62,projectId:1,createdUser:"ybb"};Object(r.a)(e).then(function(e){t.dialogFormVisible=!1,t.$emit("uploadSuccess")})},getDict:function(t,e){var a=this,n={url:t};Object(r.e)(n).then(function(t){a[e]=t.items})},getToken:function(){var t=this;Object(r.h)({fileKey:this.fileKey}).then(function(e){t.token=e.editBeforeDrug.qiNiuYunTaken})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("section",[a("el-dialog",{attrs:{title:"上传原始资料",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("div",{staticClass:"pop"},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"附件","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("el-button",{staticClass:"file-btn",attrs:{type:"primary"}},[t._v("选择文件"),a("input",{staticClass:"file",attrs:{type:"file",name:""},on:{change:t.changeFile}})])],1),t._v(" "),a("el-form-item",{attrs:{label:"文件分类","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},t._l(t.select1,function(t,e){return a("el-option",{key:e,attrs:{label:t.dictDisplayChinese,value:t.dictRealValues}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"描述","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.textarea3,callback:function(e){t.textarea3=e},expression:"textarea3"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.upload}},[t._v("确 定")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")])],1)],1)])],1)])},staticRenderFns:[]};var c=a("VU/8")(o,s,!1,function(t){a("Y/Xb")},"data-v-c4984174",null).exports,d={mixins:[a("is1l").a],data:function(){return{ruleForm:{drugGenericZhName:"",drugGenericEnName:"",drugManufacturer:"",drugClass:"",drugFormulation:"",drugGenericStandardName:"",drugActiveIngredients:"",companyId:62,createdUser:"ybb",projectId:"1"},rules:{drugGenericZhName:[{required:!0,message:"请输入通用名称（中文）",trigger:"blur"}],drugGenericEnName:[{required:!0,message:"请输入通用名称（英文）",trigger:"blur"}],drugGenericStandardName:[{required:!0,message:"请输入标准通用名称",trigger:"blur"}],drugActiveIngredients:[{required:!0,message:"请输入活性成分",trigger:"blur"}],drugClass:[{required:!0,message:"请输入药品分类",trigger:"blur"}],drugManufacturer:[{required:!0,message:"请输入生产厂商",trigger:"blur"}],drugFormulation:[{required:!0,message:"请输入剂型",trigger:"blur"}]},tableData:[],drugId:"",pageIndex:"",pageSize:"",select1:[],select2:[],isNew:1}},created:function(){this.drugId=this.$route.query.drugId||"",""!==this.drugId?(this.getList(),this.isNew=0):this.getDrug(),this.getDict("/api/DictionaryInformation/GetDrugFormulationInformation","select1"),this.getDict("/api/DictionaryInformation/GetDrugClassInformation","select2"),console.log(this.companyId)},methods:{getDrug:function(){var t=this;Object(r.g)({companyId:62}).then(function(e){t.drugId=e.drugId})},handleCurrentChange:function(t){},upload1:function(){this.$refs.dialog.$data.dialogFormVisible=!0},getList:function(){var t=this,e=i()({},{companyId:this.companyId,projectId:this.projectId,pageIndex:this.pageIndex,pageSize:this.pageSize,drugId:this.drugId});Object(r.d)(e).then(function(e){t.ruleForm=i()({},e.editBeforeDrug),t.tableData=e.editBeforeDrug.drugAttachList})},getDict:function(t,e){var a=this,n={url:t};Object(r.e)(n).then(function(t){a[e]=t.items})},uploadTxt:function(t){var e=this,a={companyId:62,drugId:this.drugId,projectId:1};Object(r.j)(a).then(function(t){e.tableData=t.drugAttachmentList.map(function(t){return console.log(t),t})})},download:function(t){console.log(t)},delete1:function(t){},save:function(){this.ruleForm.drugId=this.drugId,this.isNew?Object(r.i)("/api/DrugInformation/AddBeforeDrugInformationSave",this.ruleForm).then(function(t){console.log(t)}):Object(r.i)("/api/DrugInformation/EditBeforeDrugInformationSave",this.ruleForm).then(function(t){console.log(t)})},cancel:function(){var t=this,e={companyId:62,drugId:this.drugId,projectId:1};Object(r.b)(e).then(function(e){t.$router.push("/preDrug/index")})}},components:{UpDialog:c}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("section",[a("div",{staticClass:"title Blue"},[t._v("主明细")]),t._v(" "),a("div",{staticClass:"input-pre"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"0"}},[a("el-form-item",{attrs:{label:"",prop:"ipt1"}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("通用名称（中文）"),a("em",{staticClass:"font-red"},[t._v("*")])]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.ruleForm.drugGenericZhName,callback:function(e){t.$set(t.ruleForm,"drugGenericZhName",e)},expression:"ruleForm.drugGenericZhName"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"ipt1"}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("通用名称（英文）"),a("em",{staticClass:"font-red"},[t._v("*")])]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.ruleForm.drugGenericEnName,callback:function(e){t.$set(t.ruleForm,"drugGenericEnName",e)},expression:"ruleForm.drugGenericEnName"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"ipt1"}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("标准化通用名称"),a("em",{staticClass:"font-red"},[t._v("*")])]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.ruleForm.drugGenericStandardName,callback:function(e){t.$set(t.ruleForm,"drugGenericStandardName",e)},expression:"ruleForm.drugGenericStandardName"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"ipt1"}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("活性成分"),a("em",{staticClass:"font-red"},[t._v("*")])]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.ruleForm.drugActiveIngredients,callback:function(e){t.$set(t.ruleForm,"drugActiveIngredients",e)},expression:"ruleForm.drugActiveIngredients"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"ipt1"}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("药品分类"),a("em",{staticClass:"font-red"},[t._v("*")])]),t._v(" "),a("el-select",{attrs:{placeholder:"请输入内容"},model:{value:t.ruleForm.drugClass,callback:function(e){t.$set(t.ruleForm,"drugClass",e)},expression:"ruleForm.drugClass"}},t._l(t.select2,function(t,e){return a("el-option",{key:e,attrs:{label:t.dictDisplayChinese,value:t.dictRealValues}})}))],1)]),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"ipt1"}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("生产厂商"),a("em",{staticClass:"font-red"},[t._v("*")])]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.ruleForm.drugManufacturer,callback:function(e){t.$set(t.ruleForm,"drugManufacturer",e)},expression:"ruleForm.drugManufacturer"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"ipt1"}},[a("div",{staticClass:"grid-content bg-purple"},[a("label",[t._v("剂型"),a("em",{staticClass:"font-red"},[t._v("*")])]),t._v(" "),a("el-select",{attrs:{placeholder:"请输入内容"},model:{value:t.ruleForm.drugFormulation,callback:function(e){t.$set(t.ruleForm,"drugFormulation",e)},expression:"ruleForm.drugFormulation"}},t._l(t.select1,function(t,e){return a("el-option",{key:e,attrs:{label:t.dictDisplayChinese,value:t.dictRealValues}})}))],1)])],1)],1),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"title Blue"},[t._v("附件上传")]),t._v(" "),a("div",[a("el-button",{staticClass:"upload",attrs:{type:"primary"},on:{click:t.upload1}},[a("i",{staticClass:"el-icon-upload"}),t._v("上传附件")]),t._v(" "),a("div",{staticClass:"tableData"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"attachName",label:"名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"attachSize",label:"大小",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"attachClass",label:"分类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"attachType",label:"类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"上传时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下载",placement:"top-start"}},[a("span",{on:{click:function(a){t.download(e.row)}}},[a("i",{staticClass:"el-icon-download"})])]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start"}},[a("span",{on:{click:function(a){t.delete1(e.row)}}},[a("i",{staticClass:"el-icon-delete"})])])]}}])})],1)],1)],1),t._v(" "),a("div",{staticClass:"button_d1"},[a("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{type:""},on:{click:t.cancel}},[t._v("取消")])],1),t._v(" "),a("up-dialog",{ref:"dialog",attrs:{drugId:t.drugId},on:{uploadSuccess:t.uploadTxt}})],1)])},staticRenderFns:[]};var p=a("VU/8")(d,u,!1,function(t){a("e0bB")},"data-v-3ca3616a",null);e.default=p.exports}});