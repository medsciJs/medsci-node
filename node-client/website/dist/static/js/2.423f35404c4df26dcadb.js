webpackJsonp([2,11],{"+LUZ":function(e,t,o){var i=o("/hZu");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o("rjj0")("4aa0b051",i,!0)},"/hZu":function(e,t,o){(e.exports=o("FZ+f")(!1)).push([e.i,"\n.pre-ipt[data-v-494392c2] {\n  padding: 20px 10px;\n  background: #eef1f6;\n}\n.el-input[data-v-494392c2] {\n  width: 68%;\n}\nb[data-v-494392c2] {\n  color: #32c5d2 !important;\n  font-size: 14px;\n}\n",""])},"1n1L":function(e,t,o){(e.exports=o("FZ+f")(!1)).push([e.i,"\n*[data-v-2b110e66] {\n  padding: 0;\n  margin: 0;\n}\n.circle[data-v-2b110e66] {\n  display: inline-block;\n  background-color: #F2F6FC;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 80px;\n  position: relative;\n}\nb[data-v-2b110e66] {\n  color: #67C23A;\n  font-size: 40px;\n  vertical-align: middle;\n}\n.el-icon-caret-left[data-v-2b110e66] {\n  font-size: 60px;\n  vertical-align: middle;\n  color: #F2F6FC;\n}\n.frame[data-v-2b110e66] {\n  height: 80px;\n  background-color: #F2F6FC;\n  margin-left: 120px;\n  width: 100%;\n  text-align: left;\n  line-height: 80px;\n  position: relative;\n}\n.box[data-v-2b110e66] {\n  padding: 20px;\n  padding-right: 20px;\n}\n.text[data-v-2b110e66], .text1[data-v-2b110e66], .gray[data-v-2b110e66] {\n  font-size: 14px;\n  line-height: 14px;\n}\n.text[data-v-2b110e66] {\n  vertical-align: middle;\n  color: #F56C6C;\n  font-weight: 600;\n  display: inline-block;\n}\n.add[data-v-2b110e66] {\n  margin-right: 120px;\n  color: #67C23A;\n  border-color: #67C23A;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\nheader[data-v-2b110e66] {\n  padding-top: 10px;\n}\nfooter[data-v-2b110e66] {\n  padding-top: 20px;\n}\n.line[data-v-2b110e66] {\n  position: absolute;\n  bottom: -20px;\n  height: 20px;\n  width: 2px;\n  background-color: #F2F6FC;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\nli[data-v-2b110e66] {\n  padding-top: 20px;\n  position: relative;\n}\n.p[data-v-2b110e66] {\n  width: 100%;\n  height: 18px;\n  font-size: 14px;\n  margin-top: -95px;\n  margin-left: 26px;\n  color: #909399;\n}\n.p .title[data-v-2b110e66] {\n  color: #F56C6C;\n  font-weight: 600;\n  font-size: 14px;\n  margin-right: 30px;\n}\n.p1[data-v-2b110e66] {\n  width: 100%;\n  height: 18px;\n  font-size: 14px;\n  margin-top: 15px;\n  margin-left: 26px;\n  color: #909399;\n}\n.blank[data-v-2b110e66] {\n  background-color: #fff;\n  width: 150px;\n  height: 120px;\n  position: absolute;\n  top: 70%;\n  right: 0;\n  z-index: 2;\n  -webkit-box-shadow: 3px 3px 3px #888888;\n          box-shadow: 3px 3px 3px #888888;\n}\n.blank span[data-v-2b110e66] {\n  border-bottom: 1px solid #F2F6FC;\n  display: inline-block;\n  width: 100%;\n  height: 40px;\n  color: #909399;\n  text-align: center;\n  line-height: 40px;\n  cursor: pointer;\n}\n.blank span[data-v-2b110e66]:nth-child(3) {\n  border: none;\n}\n",""])},"3DP0":function(e,t,o){(e.exports=o("FZ+f")(!1)).push([e.i,"",""])},CTlF:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("woOf"),n=o.n(i),s=o("rv7d"),a=(o("NYxO"),{data:function(){return{dialogTableVisible:!1,hidden:!1,isAdd:!0,ruleForm:{userId:"1",projectId:"1",id:"1",workFlowName:"",workFlowEnglishName:"",workFlowStatus:"",deleteStatus:"",companyId:""},rules:{workFlowName:[{required:!0,message:"请填写显示名称",trigger:"change"}]},getOneEmail:{companyId:"1",userId:"",projectId:"1",id:""}}},computed:{},mounted:function(){this.ruleForm.companyId=this.getOneEmail.companyId=this.companyId,this.ruleForm.userId=this.getOneEmail.userId=this.mixinUser.userId,this.ruleForm.projectId=this.getOneEmail.projectId=this.projectId},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.emailSsl=!0===t.ruleForm.emailSsl?1:2,t.isAdd?t.add():t.change(),t.dialogTableVisible=!1})},change:function(){var e=this;this.ruleForm.workFlowStatus=1==this.ruleForm.workFlowStatus?1:2,this.ruleForm.workFlowStatus=1==this.ruleForm.workFlowStatus?1:2,Object(s.k)(this.ruleForm).then(function(t){200==t.meta.code&&(e.$message.success("编辑成功"),e.$emit("getList"))})},add:function(){var e=this;this.ruleForm.workFlowStatus=2,Object(s.b)(this.ruleForm).then(function(t){200==t.meta.code&&(e.$emit("getList"),e.$message.success("新建成功"))})},getMessage:function(){var e=this;this.getOneEmail.id=this.ruleForm.id,req_getEmailOne(this.getOneEmail).then(function(t){if(200==t.meta.code){switch(t.body[0].emailServerType){case 1:t.body[0].emailServerType="POP3";break;case 3:t.body[0].emailServerType="Exchange";break;case 2:t.body[0].emailServerType="IMAP"}t.body[0].emailSsl=1==t.body[0].emailSsl,e.ruleForm=t.body[0],e.ruleForm.id=e.getOneEmail.id,e.ruleForm.companyId=e.companyId,e.ruleForm.userId=e.mixinUser.userId,e.ruleForm.projectId=e.projectId}})},close:function(e){this.resetForm(e),this.dialogTableVisible=!1},resetForm:function(e){this.$refs[e].resetFields()}}}),r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("section",[o("el-dialog",{attrs:{title:"新建工作流",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t},close:function(t){e.close("ruleForm")}}},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"名称",prop:"workFlowName"}},[o("el-input",{attrs:{clearable:""},model:{value:e.ruleForm.workFlowName,callback:function(t){e.$set(e.ruleForm,"workFlowName",t)},expression:"ruleForm.workFlowName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"英文名称",prop:"workFlowEnglishName"}},[o("el-input",{attrs:{clearable:""},model:{value:e.ruleForm.workFlowEnglishName,callback:function(t){e.$set(e.ruleForm,"workFlowEnglishName",t)},expression:"ruleForm.workFlowEnglishName"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("保存")]),e._v(" "),o("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")]),e._v(" "),o("el-button",{attrs:{type:"info"},on:{click:function(t){e.close("ruleForm")}}},[e._v("关闭")])],1)],1)],1)],1)])},staticRenderFns:[]};var l={data:function(){return{tableData:[],search:{pageIndex:0,pageSize:10,userId:"string",projectId:"string",id:"string",companyId:"13"},total:"",list:[{userId:"1",loginName:"sdfsd",trueName:"sdfd",phoneNum:"1223434",email:"sfd@d.cn",sexName:"string",createTime:"2018-07-09 09:09:09"},{userId:"231231231",loginName:"string",trueName:"string",phoneNum:"string",email:"sfd@d.cn",sexName:"string",createTime:"2018-07-09 09:09:09"}],loading:!0,del:{userId:"1",projectId:"1",id:"",companyId:"string",updatedBy:"string"},defUpdate:{userId:"1",projectId:"1",id:"",companyId:"13"}}},components:{add:o("VU/8")(a,r,!1,function(e){o("Vy4P")},"data-v-439ed180",null).exports,configure:o("gsgh").default},created:function(){this.defUpdate.companyId=this.search.companyId=this.del.companyId=this.companyId,this.defUpdate.projectId=this.search.projectId=this.del.projectId=this.projectId,this.defUpdate.userId=this.search.userId=this.del.userId=this.mixinUser.userId,this.getMsg()},mounted:function(){},methods:{handleClick:function(e){this.$refs.roles.dialogTableVisible=!0},config:function(e){this.$router.push({name:"configure",params:{id:e.id}})},workFlowDefaultUpdate:function(e){var t=this;console.log(e),this.defUpdate.id=e.id,Object(s.e)(this.defUpdate).then(function(e){200==e.meta.code&&t.getMsg()})},getMsg:function(){var e=this;Object(s.i)(this.search).then(function(t){t.body.forEach(function(e){e.workFlowStatus=1==e.workFlowStatus}),e.tableData=t.body,e.loading=!1,e.total=t.data.total})},searchList:function(){this.getMsg()},clear:function(){this.search.roleCode="",this.search.roleName=""},handleSizeChange:function(e){this.search.pageSize=e,this.getMsg()},handleCurrentChange:function(e){this.search.pageIndex=e,this.getMsg()},add:function(){this.$refs.add.dialogTableVisible=!0,this.$refs.add.isAdd=!0},edit:function(e){var t=this;this.tableData.forEach(function(o){o.id===e.id&&(o.userId=t.mixinUser.userId,o.projectId=t.projectId,t.$refs.add.ruleForm=n()({},o))}),this.$refs.add.dialogTableVisible=!0,this.$refs.add.isAdd=!1},deleteInfo:function(e){var t=this;this.del.id=e.id,this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.d)(t.del).then(function(e){200==e.meta.code&&(t.$message.success("删除成功"),t.getMsg())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},getUsersList:function(e){this.$refs.users.parameter.roleCode=e.roleCode,this.$refs.users.getMessage(),this.$refs.users.roleUsersList=!0}}},d={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("section",[o("div",{staticClass:"pre-ipt"},[o("el-row",{attrs:{gutter:20}},[o("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新建")])],1)],1),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[o("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),o("el-table-column",{attrs:{prop:"workFlowName",label:"名称"}}),e._v(" "),o("el-table-column",{attrs:{prop:"nodes",label:"工作流节点",width:"300"}}),e._v(" "),o("el-table-column",{attrs:{prop:"workFlowStatus",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-switch",{on:{change:function(o){e.workFlowDefaultUpdate(t.row)}},model:{value:t.row.workFlowStatus,callback:function(o){e.$set(t.row,"workFlowStatus",o)},expression:"scope.row.workFlowStatus"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top-start"}},[o("span",{on:{click:function(o){e.edit(t.row)}}},[o("b",{staticClass:"el-icon-edit"})])]),e._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start"}},[o("span",{on:{click:function(o){e.deleteInfo(t.row)}}},[o("b",{staticClass:"el-icon-delete"})])]),e._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"工作流配置",placement:"top-start"}},[o("span",{on:{click:function(o){e.config(t.row)}}},[o("b",{staticClass:"el-icon-setting"})])])]}}])})],1),e._v(" "),o("el-pagination",{attrs:{"current-page":e.search.pageIndex,"page-sizes":[10,20,40,60],"page-size":e.search.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:Number(e.total)},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),o("add",{ref:"add",on:{getList:e.getMsg}})],1)])},staticRenderFns:[]};var c=o("VU/8")(l,d,!1,function(e){o("+LUZ")},"data-v-494392c2",null);t.default=c.exports},Vvaa:function(e,t,o){(e.exports=o("FZ+f")(!1)).push([e.i,"\n.el-select[data-v-1b42ff3c] {\n  width: 100%;\n}\n",""])},Vy4P:function(e,t,o){var i=o("3DP0");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o("rjj0")("e1215844",i,!0)},eI99:function(e,t,o){var i=o("Vvaa");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o("rjj0")("0843a83a",i,!0)},gsgh:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("rv7d"),n={data:function(){return{addNode:!1,hidden:!1,id:"",isAdd:!0,next:!1,all:[],ruleForm:{userId:"1",projectId:"1",companyId:"13",roleId:"",nodeChineseName:"",nodeEnglishName:"",nodeSort:"",sortList:[],smsNotification:"",emailNotification:"",ruleDescription:"",remark:""},rules:{nodeChineseName:[{required:!0,message:"请输入流程名称(中)",trigger:"change"}],nodeEnglishName:[{required:!0,message:"请输入流程名称(英文)",trigger:"change"}],roleId:[{required:!0,message:"请选择角色",trigger:"change"}]},rolesList:[]}},computed:{},created:function(){this.ruleForm.companyId=this.companyId,this.ruleForm.projectId=this.projectId,this.ruleForm.userId=this.mixinUser.userId,this.roles()},mounted:function(){},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.isAdd?t.add():t.change(),t.dialogTableVisible=!1,t.$emit("getList")})},roles:function(){var e=this;Object(i.g)(1).then(function(t){200==t.meta.code&&(e.rolesList=t.body)})},change:function(){var e=this;this.ruleForm.smsNotification="是"==this.ruleForm.smsNotification?3:4,this.ruleForm.emailNotification="是"==this.ruleForm.emailNotification?1:2,this.ruleForm.userId=this.mixinUser.userId,this.ruleForm.projectId=this.projectId,Object(i.j)(this.ruleForm).then(function(t){200==t.meta.code&&(e.addNode=!1,e.$message.success("保存成功"),e.$emit("getMsg"))})},getOneMsg:function(){var e=this;Object(i.f)({id:this.id}).then(function(t){200==t.meta.code&&(t.body.emailNotification=1==t.body.emailNotification?"是":"否",t.body.smsNotification=3==t.body.smsNotification?"是":"否",e.ruleForm=t.body)})},add:function(){var e=this;this.ruleForm.createdTime="",this.ruleForm.projectId=this.companyId,this.ruleForm.userId=this.mixinUser.userId,this.next&&(this.all.forEach(function(t,o){o>e.ruleForm.nodeSort-1&&t.nodeSort++}),this.ruleForm.nodeSort++,this.ruleForm.sortList=this.all),Object(i.a)(this.ruleForm).then(function(t){200==t.meta.code&&(e.$emit("getMsg"),e.addNode=!1,e.$message.success("新建成功"))})},resetForm:function(e){this.$refs[e].resetFields()},close:function(e){this.addNode=!1,this.resetForm(e)}}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("section",[o("el-dialog",{attrs:{title:"新建工作流节点",visible:e.addNode},on:{"update:visible":function(t){e.addNode=t},close:function(t){e.close("ruleForm")}}},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"135px"}},[o("el-form-item",{attrs:{label:"流程名称(中文)",prop:"nodeChineseName"}},[o("el-input",{attrs:{clearable:""},model:{value:e.ruleForm.nodeChineseName,callback:function(t){e.$set(e.ruleForm,"nodeChineseName",t)},expression:"ruleForm.nodeChineseName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"流程名称(英文)",prop:"nodeEnglishName"}},[o("el-input",{attrs:{clearable:""},model:{value:e.ruleForm.nodeEnglishName,callback:function(t){e.$set(e.ruleForm,"nodeEnglishName",t)},expression:"ruleForm.nodeEnglishName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"是否启用短信通知",prop:"smsNotification"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.smsNotification,callback:function(t){e.$set(e.ruleForm,"smsNotification",t)},expression:"ruleForm.smsNotification"}},[o("el-option",{attrs:{label:"是",value:"3"}}),e._v(" "),o("el-option",{attrs:{label:"否",value:"4"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"是否启用Email通知",prop:"emailNotification"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.emailNotification,callback:function(t){e.$set(e.ruleForm,"emailNotification",t)},expression:"ruleForm.emailNotification"}},[o("el-option",{attrs:{label:"是",value:"1"}}),e._v(" "),o("el-option",{attrs:{label:"否",value:"2"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"角色",prop:"roleId"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.roleId,callback:function(t){e.$set(e.ruleForm,"roleId",t)},expression:"ruleForm.roleId"}},e._l(e.rolesList,function(e){return o("el-option",{key:e.id,attrs:{value:e.id,label:e.roleName}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"描述",prop:"ruleDescription"}},[o("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:e.ruleForm.ruleDescription,callback:function(t){e.$set(e.ruleForm,"ruleDescription",t)},expression:"ruleForm.ruleDescription"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("保存")]),e._v(" "),o("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")]),e._v(" "),o("el-button",{attrs:{type:"info"},on:{click:function(t){e.close("ruleForm")}}},[e._v("关闭")])],1)],1)],1)],1)])},staticRenderFns:[]};var a={data:function(){return{dialogTableVisible:!1,dialogConfigVisible:!1,hidden:!1,isAdd:!0,blank:!1,rules:{workFlowName:[{required:!0,message:"请填写显示名称",trigger:"change"}]},wfNodes:{pageIndex:0,pageSize:10,userId:"1",projectId:"1",workflowId:"",companyId:"13",roleId:"1"},list:[],delt:{userId:"1",projectId:"1",id:"",companyId:"13"}}},components:{addNode:o("VU/8")(n,s,!1,function(e){o("eI99")},"data-v-1b42ff3c",null).exports},computed:{},mounted:function(){this.delt.companyId=this.wfNodes.companyId=this.companyId,this.delt.projectId=this.wfNodes.projectId=this.projectId,this.delt.userId=this.wfNodes.userId=this.mixinUser.userId,this.getMsg()},methods:{getMsg:function(){var e=this;this.wfNodes.workflowId=this.$route.params.id,Object(i.h)(this.wfNodes).then(function(t){200==t.meta.code&&(t.body.forEach(function(e){e.smsNotification=3==e.smsNotification?"是":"否",e.emailNotification=1==e.emailNotification?"是":"否",e.show=!1}),e.list=t.body,e.$refs.addNode.all=e.list)})},add:function(){this.$refs.addNode.addNode=!0,this.$refs.addNode.isAdd=!0,this.$refs.addNode.ruleForm.workflowId=this.wfNodes.workflowId,this.$refs.addNode.ruleForm.nodeSort=this.list.length+1},show:function(e,t){this.list[t].show=!e},addNext:function(e,t){this.$refs.addNode.isAdd=!0,this.list[t].show=!e,this.$refs.addNode.addNode=!0,this.$refs.addNode.ruleForm.workflowId=this.wfNodes.workflowId,this.$refs.addNode.ruleForm.nodeSort=t+1,this.$refs.addNode.next=!0},edit:function(e,t,o){this.list[t].show=!e,this.$refs.addNode.ruleForm.workflowId=this.wfNodes.workflowId,this.$refs.addNode.id=o,this.$refs.addNode.getOneMsg(),this.$refs.addNode.addNode=!0,this.$refs.addNode.isAdd=!1},del:function(e,t,o){var n=this;this.list[t].show=!e,console.log(),this.delt.id=o,this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.c)(n.delt).then(function(e){200==e.meta.code&&(n.$message.success("删除成功"),n.getMsg())})}).catch(function(){n.$message.info("已取消删除")})},close:function(e){this.dialogTableVisible=!1,this.resetForm(e)}}},r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("section",{staticClass:"box"},[o("header",[e._m(0),e._v(" "),o("div",{staticClass:"frame"},[o("span",{staticClass:"el-icon-caret-left",staticStyle:{"margin-left":"-39px"}}),e._v(" "),o("el-button",{staticClass:"text",attrs:{type:"text"}},[e._v("开始")]),e._v(" "),o("el-button",{staticClass:"add",attrs:{round:"",icon:"el-icon-plus",size:"mini"},on:{click:e.add}},[e._v("新建")])],1)]),e._v(" "),o("ul",e._l(e.list,function(t,i){return o("li",{key:t.id},[e._m(1,!0),e._v(" "),o("div",{staticClass:"frame"},[o("span",{staticClass:"el-icon-caret-left",staticStyle:{"margin-left":"-39px"}}),e._v(" "),o("div",{staticClass:"p"},[o("span",{staticClass:"title"},[e._v(e._s(t.nodeChineseName))]),o("span",[e._v("创建时间 "+e._s(t.createdTime))])]),e._v(" "),o("div",{staticClass:"p1"},[o("span",{staticStyle:{"margin-right":"30px"}},[e._v("是否启用短信通知："),o("el-button",{attrs:{circle:"",type:"primary",size:"mini"}},[e._v(e._s(t.smsNotification))])],1),e._v(" "),o("span",[e._v("是否启用Email通知："),o("el-button",{attrs:{circle:"",type:"primary",size:"mini"}},[e._v(e._s(t.emailNotification))])],1)]),e._v(" "),o("el-button",{staticClass:"add",attrs:{round:"",size:"mini"},on:{click:function(o){e.show(t.show,i)}}},[e._v("操作 "),o("i",{staticClass:"el-icon-arrow-down"})])],1),e._v(" "),o("transition",{attrs:{name:"el-zoom-in-top"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}],staticClass:"transition-box blank"},[o("span",{on:{click:function(o){e.addNext(t.show,i)}}},[e._v("新增")]),e._v(" "),o("span",{on:{click:function(o){e.edit(t.show,i,t.id)}}},[e._v("修改")]),e._v(" "),o("span",{on:{click:function(o){e.del(t.show,i,t.id)}}},[e._v("删除")])])])],1)})),e._v(" "),o("footer",[e._m(2),e._v(" "),o("div",{staticClass:"frame"},[o("span",{staticClass:"el-icon-caret-left",staticStyle:{"margin-left":"-39px"}}),e._v(" "),o("el-button",{staticClass:"text",attrs:{type:"text"}},[e._v("结束")])],1)]),e._v(" "),o("addNode",{ref:"addNode",on:{getMsg:e.getMsg}})],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"circle fl"},[t("b",{staticClass:"el-icon-location"}),this._v(" "),t("div",{staticClass:"line"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"circle fl"},[t("b",{staticClass:"el-icon-location"}),this._v(" "),t("div",{staticClass:"line"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"circle fl"},[t("b",{staticClass:"el-icon-location"})])}]};var l=o("VU/8")(a,r,!1,function(e){o("qMVp")},"data-v-2b110e66",null);t.default=l.exports},qMVp:function(e,t,o){var i=o("1n1L");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o("rjj0")("71c99e38",i,!0)},rv7d:function(e,t,o){"use strict";t.i=function(e){return Object(i.a)({url:"/api1/workFlow/getWorkFlows",method:"post",data:e})},t.b=function(e){return Object(i.a)({url:"/api1/workFlow/addWorkFlow",method:"post",data:e})},t.d=function(e){return Object(i.a)({url:"/api1/workFlow/delWorkFlow",method:"post",data:e})},t.e=function(e){return Object(i.a)({url:"/api1/workFlow/doWorkFlow",method:"post",data:e})},t.k=function(e){return Object(i.a)({url:"/api1/workFlow/updWorkFlow",method:"post",data:e})},t.h=function(e){return Object(i.a)({url:"/api1/workFlowNode/getWFNodes",method:"post",data:e})},t.j=function(e){return Object(i.a)({url:"/api1/workFlowNode/updWFNode",method:"post",data:e})},t.a=function(e){return Object(i.a)({url:"/api1/workFlowNode/addWFNode",method:"post",data:e})},t.c=function(e){return Object(i.a)({url:"/api1/workFlowNode/delWFNode",method:"post",data:e})},t.g=function(e){return Object(i.a)({url:"/api1/sysRoles/getRolesByRoleBelongs/"+e,method:"get"})},t.f=function(e){return Object(i.a)({url:"/api1/workFlowNode/getNodeInfoById",method:"get",params:e})};var i=o("vLgD")}});