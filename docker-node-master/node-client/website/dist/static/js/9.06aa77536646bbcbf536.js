webpackJsonp([9],{"2Tg7":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.pre-ipt[data-v-78496034] {\n  padding: 20px 10px;\n  background: #eef1f6;\n}\n.el-input[data-v-78496034] {\n  width: 68%;\n}\nb[data-v-78496034] {\n  color: #32c5d2 !important;\n  font-size: 14px;\n}\n",""])},Uk3K:function(e,t,a){var r=a("bGkG");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("37d04802",r,!0)},YJNj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("woOf"),s=a.n(r),l=a("o3g8"),i=a("is1l"),o={mixins:[i.a],data:function(){var e=this;return{dialogTableVisible:!1,pwdTableVisible:!1,hidden:!1,ruleForm:{id:"",type:"POP3",companyId:"1",userId:"1",projectId:"1",emailAddress:"",emailServerType:"POP3",emailDisplayName:"",emailPassord:"",emailDefault:0,deleteStatus:0,emailHostName:"",emailSsl:0,emailPort:"",createdBy:"",updatedBy:""},getOneEmail:{pageIndex:0,pageSize:15,projectId:"13",userName:"jerry",phoneNo:"5",realName:"string",email:"6"},ruleForm2:{checkPass:"",password:""},rules:{password:[{required:!0,message:"请输入密码",trigger:"change"}],checkPass:[{required:!0,validator:function(t,a,r){""===a?r(new Error("请再次输入密码")):a!==e.ruleForm2.password?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}]},pwd:{userId:"1",password:""}}},computed:{},mounted:function(){this.ruleForm.userId=this.pwd.userId=this.mixinUser.userId,this.ruleForm.companyId=this.companyId,this.getOneEmail.projectId=this.ruleForm.projectId=this.projectId},created:function(){},methods:{getMessage:function(){Object(l.b)(this.getOneEmail).then(function(e){e.meta.code})},close:function(e){this.dialogTableVisible=!1},close2:function(e){this.pwdTableVisible=!1,this.$refs[e].resetFields()},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.pwd.password=t.ruleForm2.password,Object(l.d)(t.pwd).then(function(e){200==e.meta.code&&(t.pwdTableVisible=!1,t.$message.success("保存成功"))})})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("section",[a("el-dialog",{attrs:{title:"用户信息",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t},close:function(t){e.close("ruleForm")}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[a("span",{staticClass:"title"},[e._v("基本信息")]),e._v(" "),a("div",{staticClass:"line",staticStyle:{margin:"0 0 20px 0"}}),e._v(" "),a("el-form-item",{attrs:{label:"账号",prop:"userName"}},[a("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.userName,callback:function(t){e.$set(e.ruleForm,"userName",t)},expression:"ruleForm.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"真实姓名",prop:"realName"}},[a("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.realName,callback:function(t){e.$set(e.ruleForm,"realName",t)},expression:"ruleForm.realName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.sex,callback:function(t){e.$set(e.ruleForm,"sex",t)},expression:"ruleForm.sex"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"mobilePhone"}},[a("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.mobilePhone,callback:function(t){e.$set(e.ruleForm,"mobilePhone",t)},expression:"ruleForm.mobilePhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),e._v(" "),a("el-form-item",{staticClass:"center"},[a("el-button",{attrs:{type:"info"},on:{click:function(t){e.close("ruleForm")}}},[e._v("关闭")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"密码重置",visible:e.pwdTableVisible},on:{"update:visible":function(t){e.pwdTableVisible=t},close:function(t){e.close2("ruleForm2")}}},[a("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"label-width":"100px",rules:e.rules}},[a("el-form-item",{attrs:{label:"新密码",prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.ruleForm2.password,callback:function(t){e.$set(e.ruleForm2,"password",t)},expression:"ruleForm2.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[a("el-input",{attrs:{type:"password"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),a("el-form-item",{staticClass:"center"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2")}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"info"},on:{click:function(t){e.close2("ruleForm2")}}},[e._v("关闭")])],1)],1)],1)],1)])},staticRenderFns:[]};var c=a("VU/8")(o,n,!1,function(e){a("Uk3K")},"data-v-a65333a0",null).exports,u={mixins:[i.a],data:function(){return{tableData:[],search:{pageIndex:0,pageSize:10,projectId:"",userName:"",realName:"",phoneNo:"",email:""},total:"",list:[{userId:"1",loginName:"sdfsd",trueName:"sdfd",phoneNum:"1223434",email:"sfd@d.cn",sexName:"string"},{userId:"231231231",loginName:"string",trueName:"string",phoneNum:"string",email:"sfd@d.cn",sexName:"string"}],loading:!0}},components:{Handle:c},created:function(){this.getMsg(),this.search.projectId=this.projectId},mounted:function(){console.log(12334,this.companyId)},methods:{handleClick:function(e){var t=this;this.tableData.forEach(function(a){if(a.userId==e.userId){var r=s()({},a);t.$refs.handle.ruleForm.email=r.email+"(只读)",t.$refs.handle.ruleForm.mobilePhone=r.mobilePhone+"(只读)",t.$refs.handle.ruleForm.userName=r.userName+"(只读)",t.$refs.handle.ruleForm.realName=r.realName+"(只读)";t.$refs.handle.ruleForm.sex;r.sex=1==r.sex?"男":"女",t.$refs.handle.ruleForm.sex=r.sex+"(只读)",t.$refs.handle.dialogTableVisible=!0}})},getMsg:function(){var e=this;Object(l.c)(this.search).then(function(t){e.tableData=t.body,e.loading=!1,e.total=t.data.total})},searchList:function(){this.getMsg()},clear:function(){this.search.userName="",this.search.phoneNo="",this.search.email=""},handleSizeChange:function(e){this.search.pageSize=e,this.getMsg()},handleCurrentChange:function(e){this.search.pageIndex=e,this.getMsg()},add:function(){this.$refs.addRole.dialogTableVisible=!0},edit:function(e){this.$refs.addRole.ruleForm.id=e.id,this.$refs.addRole.getMessage(),this.$refs.addRole.dialogTableVisible=!0,this.$refs.addRole.isAdd=!1},pwdUpdate:function(){this.$refs.handle.pwdTableVisible=!0},getUsersList:function(){this.$refs.users.rolesVisible=!0},roleJurisdiction:function(){}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("section",[a("div",{staticClass:"pre-ipt"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:4}},[a("label",[e._v("用户名")]),e._v(" "),a("el-input",{attrs:{placeholder:"",clearable:""},model:{value:e.search.userName,callback:function(t){e.$set(e.search,"userName",t)},expression:"search.userName"}})],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("label",[e._v("手机号")]),e._v(" "),a("el-input",{attrs:{placeholder:"",clearable:""},model:{value:e.search.phoneNo,callback:function(t){e.$set(e.search,"phoneNo",t)},expression:"search.phoneNo"}})],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("label",[e._v("邮箱")]),e._v(" "),a("el-input",{attrs:{placeholder:"",clearable:""},model:{value:e.search.email,callback:function(t){e.$set(e.search,"email",t)},expression:"search.email"}})],1),e._v(" "),a("el-col",{staticClass:"fr right",attrs:{span:10}},[a("el-button",{staticStyle:{"margin-left":"1.3%"},attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",size:"small"},on:{click:e.clear}},[e._v("重置")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"用户名",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobilePhone",label:"手机号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱",sortable:"",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userStatus",label:"状态",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.userStatus?a("el-button",{attrs:{type:"success",size:"mini"}},[e._v("解锁")]):a("el-button",{attrs:{type:"danger",size:"mini"}},[e._v("锁定")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"updTime",label:"修改时间",width:"180",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看",placement:"top-start"}},[a("span",{on:{click:function(a){e.handleClick(t.row)}}},[a("b",{staticClass:"el-icon-edit"})])]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"重置密码",placement:"top-start"}},[a("span",{on:{click:function(a){e.pwdUpdate(t.row)}}},[a("b",{staticClass:"el-icon-info"})])])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.search.pageIndex,"page-sizes":[10,20,40,60],"page-size":e.search.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:Number(e.total)},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("Handle",{ref:"handle"})],1)])},staticRenderFns:[]};var m=a("VU/8")(u,d,!1,function(e){a("uA3e")},"data-v-78496034",null);t.default=m.exports},bGkG:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.title[data-v-a65333a0] {\n  color: #409EFF;\n  font-size: 14px;\n}\n.center[data-v-a65333a0] {\n  text-align: center;\n  margin-left: -20%;\n}\n",""])},o3g8:function(e,t,a){"use strict";t.c=function(e){return Object(r.a)({url:"/api1/user/getUserInfo",method:"post",data:e})},t.b=function(e){return Object(r.a)({url:"/api1/user/getUserInfo",method:"post",data:e})},t.d=function(e){return Object(r.a)({url:"/api1/user/updateUserPwd",method:"post",data:e})},t.a=function(e){return Object(r.a)({url:"/api/company/getSysCompanyInfoById/"+e,method:"get"})};var r=a("vLgD")},uA3e:function(e,t,a){var r=a("2Tg7");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("7cd32b7c",r,!0)}});