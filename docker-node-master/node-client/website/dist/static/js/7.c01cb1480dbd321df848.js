webpackJsonp([7,18],{"0sOw":function(e,t,r){var i=r("rZ/4");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("4208c911",i,!0)},"9WXu":function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n.bigInp[data-v-144dea01] {\n  width: 75%;\n}\n.el-select[data-v-144dea01] {\n  width: 100%;\n}\n.smallInp[data-v-144dea01] {\n  width: 23%;\n}\n",""])},BaZE:function(e,t,r){"use strict";t.d=function(e){return Object(i.a)({url:"/api1/regulation/getRegList",method:"post",data:e})},t.a=function(e){return Object(i.a)({url:"/api1/regulation/addRegulation",method:"post",data:e})},t.b=function(e){return Object(i.a)({url:"/api1/regulation/delRegulation",method:"post",data:e})},t.e=function(e){return Object(i.a)({url:"/api1/regulation/getWFNodes",method:"post",data:e})},t.f=function(e){return Object(i.a)({url:"/api1/regulation/updRegulation",method:"post",data:e})},t.c=function(e){return Object(i.a)({url:"/api1/regulation/getRegInfo",method:"get",params:e})};var i=r("vLgD")},b4vx:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("BaZE"),a={data:function(){return{tableData:[],search:{pageIndex:0,pageSize:10,userId:"1",projectId:"1",companyId:"13",regulationName:""},total:"",loading:!0,del:{id:"",userId:"1",projectId:"1",companyId:"13",revision:""},node:{userId:"1",projectId:"1",companyId:"13"}}},components:{add:r("jgEU").default},created:function(){this.search.companyId=this.del.companyId=this.node.companyId=this.companyId,this.search.projectId=this.del.projectId=this.node.projectId=this.projectId,this.search.userId=this.del.userId=this.node.userId=this.mixinUser.userId,this.getMsg()},mounted:function(){},methods:{getMsg:function(){var e=this;Object(i.d)(this.search).then(function(t){e.tableData=t.body,e.loading=!1,e.total=t.data.total})},searchList:function(){this.getMsg()},handleSizeChange:function(e){this.search.pageSize=e,this.getMsg()},handleCurrentChange:function(e){this.search.pageIndex=e,this.getMsg()},add:function(){var e=this;Object(i.e)(this.node).then(function(t){200==t.meta.code&&(t.body.forEach(function(e,t){e.node=""}),e.$refs.add.ruleForm.list=t.body,e.$refs.add.nodes=t.body)}),this.$refs.add.dialogTableVisible=!0,this.$refs.add.rule=this.$refs.add.ruleArr,this.$refs.add.isAdd=!0},edit:function(e){this.$refs.add.id=e.id,this.$refs.add.getseverity(),this.$refs.add.dialogTableVisible=!0,this.$refs.add.rule=this.$refs.add.ruleArr,this.$refs.add.isAdd=!1},deleteInfo:function(e){var t=this;this.del.id=e.id,this.del.revision=e.revision,this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.b)(t.del).then(function(e){200==e.meta.code&&(t.$message.success("删除成功"),t.getMsg())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("section",[r("div",{staticClass:"pre-ipt"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6}},[r("label",[e._v("报告名称")]),e._v(" "),r("el-input",{attrs:{placeholder:"",clearable:""},model:{value:e.search.regulationName,callback:function(t){e.$set(e.search,"regulationName",t)},expression:"search.regulationName"}})],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-button",{staticStyle:{"margin-left":"1.3%"},attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.add}},[e._v("新增")])],1)],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{prop:"priority",width:"100",label:"优先级"}}),e._v(" "),r("el-table-column",{attrs:{prop:"regulationName",label:"规则名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"severity",label:"严重性"}}),e._v(" "),r("el-table-column",{attrs:{prop:"updatedTime",label:"修改时间",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top-start"}},[r("span",{on:{click:function(r){e.edit(t.row)}}},[r("b",{staticClass:"el-icon-edit"})])]),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start"}},[r("span",{on:{click:function(r){e.deleteInfo(t.row)}}},[r("b",{staticClass:"el-icon-delete"})])])]}}])})],1),e._v(" "),r("el-pagination",{attrs:{"current-page":e.search.pageIndex,"page-sizes":[10,20,40,60],"page-size":e.search.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:Number(e.total)},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),r("add",{ref:"add",on:{getList:e.getMsg}})],1)])},staticRenderFns:[]};var n=r("VU/8")(a,s,!1,function(e){r("0sOw")},"data-v-506ca6f5",null);t.default=n.exports},jgEU:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("mvHQ"),a=r.n(i),s=r("BaZE"),n=r("P7dY"),o={data:function(){var e=new RegExp(/^[0-9]*$/);return{dialogTableVisible:!1,type:{companyId:"13",projectId:"1",pageIndex:0,pageSize:10,dictionaryType:"report-regulations"},types:[],num:0,he:0,number:0,hidden:!1,isAdd:!0,node:{},timeArr:[],ruleForm:{userId:"1",projectId:"1",companyId:"13",regulationName:"",severity:"",priority:"",finishedDate:"",deleteStatus:"",unit:"天",nodes:"",list:[]},rule:[],ruleArr:[{required:!0,message:"该字段不能为空",trigger:"blur"},{type:"number",message:"该字段必须为数字值"}],rules:{regulationName:[{required:!0,message:"请输入规则名称",trigger:"blur"}],severity:[{required:!0,message:"请选择严重性",trigger:"change"}],priority:[{required:!0,message:"请填写优先级",trigger:"blur"}],finishedDate:[{required:!0,validator:function(t,r,i){e.test(r)?""==r?i(new Error("该字段不能为空")):i():i(new Error("请输入数字"))},trigger:"blur"}]}}},mounted:function(){this.ruleForm.companyId=this.type.companyId=this.companyId,this.ruleForm.projectId=this.type.projectId=this.projectId,this.ruleForm.userId=this.type.userId=this.mixinUser.userId,this.getType(),this.rule=this.ruleArr},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.isAdd?t.add():t.change()})},getType:function(){var e=this;Object(n.b)(this.type).then(function(t){200==t.meta.code&&(e.types=t.body)})},change:function(){var e=this;if(this.ruleForm.updatedTime="",this.num=0,this.ruleForm.list.forEach(function(t){e.num+=Number(t.node)}),this.ruleForm.unit="天"==this.ruleForm.unit?1:2,this.ruleForm.finishedDate!=this.num)this.$message.warning("报告完成时间必须等于其下边项的和");else{var t=[];this.ruleForm.list.forEach(function(e){var r={label:"",value:""};r.label=e.nodeChineseName,r.value=e.node,t.push(r)}),this.ruleForm.nodes=a()(t),this.ruleForm.companyId=this.companyId,this.ruleForm.projectId=this.projectId,this.ruleForm.userId=this.mixinUser.userId,Object(s.f)(this.ruleForm).then(function(t){200==t.meta.code&&(e.$message.success("编辑成功"),e.$emit("getList"),e.dialogTableVisible=!1)})}},and:function(e,t){var r=this;this.timeArr[e]=t,this.timeArr.length==this.ruleForm.list.length&&this.ruleForm.finishedDate&&(this.num=0,this.timeArr.forEach(function(e){r.num+=Number(e)}),this.ruleForm.finishedDate!=this.num&&this.$message.warning("报告完成时间必须等于其下边项的和"))},add:function(){var e=this;this.ruleForm.updatedTime="",this.ruleForm.companyId=this.companyId,this.ruleForm.projectId=this.projectId,this.ruleForm.userId=this.mixinUser.userId,this.ruleForm.unit="天"==this.ruleForm.unit?1:2;var t=[];this.ruleForm.list.forEach(function(e,r){t.push({label:"",value:""}),t[r].label=e.nodeChineseName,t[r].value=e.node}),this.ruleForm.nodes=a()(t),this.ruleForm.finishedDate!=this.num?this.$message.warning("报告完成时间必须等于其下边项的和"):Object(s.a)(this.ruleForm).then(function(t){200==t.meta.code&&(e.$emit("getList"),e.$message.success("新建成功"),e.dialogTableVisible=!1)})},resetForm:function(e){this.$refs[e].resetFields()},close:function(e){this.dialogTableVisible=!1,this.rule=[],this.resetForm(e)},getseverity:function(){var e=this;Object(s.c)({id:this.id}).then(function(t){if(200==t.meta.code){e.ruleForm=t.body,e.ruleForm.unit=1==e.ruleForm.unit?"天":"时";var r=[];e.ruleForm.list=[],JSON.parse(e.ruleForm.nodes).forEach(function(e){var t={nodeChineseName:"",node:""};t.nodeChineseName=e.label,t.node=e.value,r.push(t)}),console.log(r),e.ruleForm.list=r}})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("section",[r("el-dialog",{attrs:{title:"新建规则",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t},close:function(t){e.close("ruleForm")}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"110px",rules:e.rules}},[r("el-form-item",{attrs:{label:"规则名称",prop:"regulationName"}},[r("el-input",{attrs:{clearable:""},model:{value:e.ruleForm.regulationName,callback:function(t){e.$set(e.ruleForm,"regulationName",t)},expression:"ruleForm.regulationName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"严重性",prop:"severity"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.severity,callback:function(t){e.$set(e.ruleForm,"severity",t)},expression:"ruleForm.severity"}},e._l(e.types,function(e,t){return r("el-option",{key:t,attrs:{label:e.dictDisplayChinese,value:e.dictDisplayChinese}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"优先级",prop:"priority",rules:[{required:!0,message:"该字段不能为空",trigger:"blur"},{type:"number",message:"该字段必须为数字值"}]}},[r("el-input",{attrs:{clearable:""},model:{value:e.ruleForm.priority,callback:function(t){e.$set(e.ruleForm,"priority",e._n(t))},expression:"ruleForm.priority"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"报告完成时间",prop:"finishedDate"}},[r("el-input",{staticClass:"bigInp",attrs:{clearable:""},model:{value:e.ruleForm.finishedDate,callback:function(t){e.$set(e.ruleForm,"finishedDate",t)},expression:"ruleForm.finishedDate"}}),e._v(" "),r("el-select",{staticClass:"smallInp",attrs:{placeholder:""},model:{value:e.ruleForm.unit,callback:function(t){e.$set(e.ruleForm,"unit",t)},expression:"ruleForm.unit"}},[r("el-option",{attrs:{label:"天",value:"天"}}),e._v(" "),r("el-option",{attrs:{label:"时",value:"时"}})],1)],1),e._v(" "),e._l(e.ruleForm.list,function(t,i){return r("el-form-item",{key:i,attrs:{label:t.nodeChineseName,prop:"list."+i+".node",rules:e.rule}},[r("el-input",{staticClass:"bigInp",attrs:{clearable:""},on:{change:function(r){e.and(i,t.node)}},model:{value:t.node,callback:function(r){e.$set(t,"node",e._n(r))},expression:"item.node"}}),e._v(" "),r("el-select",{staticClass:"smallInp",attrs:{placeholder:""},model:{value:e.ruleForm.unit,callback:function(t){e.$set(e.ruleForm,"unit",t)},expression:"ruleForm.unit"}},[r("el-option",{attrs:{label:"天",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"时",value:"2"}})],1)],1)}),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("保存")]),e._v(" "),r("el-button",{attrs:{type:"info"},on:{click:function(t){e.close("ruleForm")}}},[e._v("关闭")])],1)],2)],1)],1)])},staticRenderFns:[]};var u=r("VU/8")(o,l,!1,function(e){r("xvRX")},"data-v-144dea01",null);t.default=u.exports},"rZ/4":function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n.pre-ipt[data-v-506ca6f5] {\n  padding: 20px 10px;\n  background: #eef1f6;\n}\n.el-input[data-v-506ca6f5] {\n  width: 68%;\n}\nb[data-v-506ca6f5] {\n  color: #32c5d2 !important;\n  font-size: 14px;\n}\n",""])},xvRX:function(e,t,r){var i=r("9WXu");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("b62e3384",i,!0)}});