webpackJsonp([1],{"0vwr":function(t,e){},"968y":function(t,e){},DA9C:function(t,e){},JESI:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={name:"App",mounted(){window.addEventListener("unload",this.saveState)},methods:{saveState(){sessionStorage.setItem("state",JSON.stringify(this.$store.state))}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")(s,n,!1,function(t){i("968y")},null,null).exports,r=i("zL8q"),o=i.n(r),u=(i("tvR6"),i("mtWM")),c=i.n(u),d=i("aLYK"),m=i("/ocq"),p={name:"park",created(){this.query(this.pageNum,this.pageSize)},data:()=>({queryForm:{searchKey:""},pageNum:"1",pageSize:"10",itemTotalCount:0,numbers:[]}),methods:{query(t,e){this.axios({method:"post",url:"/park/getPark",data:{parkNumber:this.queryForm.searchKey,pageNum:t,pageSize:e}}).then(t=>{this.numbers=t.data.data.list,this.itemTotalCount=t.data.data.total})},handleChange(t,e){this.fileList=e},handleCurrentChange(t){this.pageNum=t,this.query(t,this.pageSize)},handleSizeChange(t){this.pageSize=t,this.query(this.pageNum,t)},select(t){this.axios({method:"post",url:"/park/updatePark",data:{id:t.id,isSelected:1}}).then(t=>{1==t.data.success?(this.$message({message:"选择成功",type:"success"}),this.query(this.pageNum,this.pageSize)):this.$message.error("选择失败")})},disSelect(t){this.$confirm("确定要取消？").then(e=>{this.axios({method:"post",url:"/park/updatePark",data:{id:t.id,isSelected:0}}).then(t=>{1==t.data.success?(this.$message({message:"取消选择成功",type:"success"}),this.query(this.pageNum,this.pageSize)):this.$message.error("取消选择失败")})})},returnMain(){this.$router.push("/operate")}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-header",{staticStyle:{"padding-top":"10px"}},[i("el-form",{staticClass:"demo-form-inline",staticStyle:{float:"left"},attrs:{inline:!0,model:t.queryForm}},[i("el-form-item",[i("el-button",{attrs:{icon:"el-icon-house",round:""},on:{click:t.returnMain}},[t._v("返回主页")])],1),t._v(" "),i("el-form-item",[i("el-input",{attrs:{placeholder:"请输入车位号"},model:{value:t.queryForm.searchKey,callback:function(e){t.$set(t.queryForm,"searchKey",e)},expression:"queryForm.searchKey"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.query(1,t.pageSize)}}},[t._v("查询")])],1)],1)],1),t._v(" "),i("el-main",[i("el-table",{staticStyle:{width:"1000px"},attrs:{data:t.numbers,border:""}},[i("el-table-column",{attrs:{prop:"parkNumber",label:"车位号"}}),t._v(" "),i("el-table-column",{attrs:{prop:"isSelected",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.isSelected?i("div",[i("el-tag",{attrs:{type:"success"}},[t._v("未选")])],1):t._e(),t._v(" "),1===e.row.isSelected?i("div",[i("el-tag",{attrs:{type:"danger"}},[t._v("已选")])],1):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"operage",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.isSelected?i("div",[i("el-link",{attrs:{icon:"el-icon-check",type:"success"},on:{click:function(i){return t.select(e.row)}}},[t._v("选择")])],1):t._e(),t._v(" "),1===e.row.isSelected?i("div",[i("el-link",{attrs:{icon:"el-icon-close",type:"danger"},on:{click:function(i){return t.disSelect(e.row)}}},[t._v("取消选择")])],1):t._e()]}}])})],1)],1),t._v(" "),i("el-footer",[i("el-pagination",{attrs:{"page-sizes":[10,20,40],background:"","page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:t.itemTotalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var v=i("VU/8")(p,h,!1,function(t){i("JESI")},"data-v-e0631f22",null).exports,_={name:"operate",created(){this.buildingSel()},data:()=>({buildings:[]}),methods:{buildingSel(){this.axios({method:"get",url:"building/getAllBuilding"}).then(t=>{this.buildings=t.data.data})},parkSel(){this.$router.push("/park")},selectRoom(t){this.$router.push({name:"room",params:{building:t}})}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-header",[i("div",{staticClass:"title"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.parkSel()}}},[t._v("车位选择")])],1)]),t._v(" "),i("el-main",[i("el-table",{staticStyle:{width:"800px"},attrs:{data:t.buildings,border:""}},[i("el-table-column",{attrs:{prop:"buildingNo",label:"楼号"}}),t._v(" "),i("el-table-column",{attrs:{prop:"area",label:"面积 (m²)"}}),t._v(" "),i("el-table-column",{attrs:{prop:"floorSum",label:"层数"}}),t._v(" "),i("el-table-column",{attrs:{prop:"unitSum",label:"单元数"}}),t._v(" "),i("el-table-column",{attrs:{prop:"operage",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.selectRoom(e.row)}}},[t._v("房间选择")])]}}])})],1)],1)],1)},staticRenderFns:[]};var f=i("VU/8")(_,g,!1,function(t){i("VaNl")},"data-v-16771b1a",null).exports,b={name:"room",created(){this.init()},data:()=>({unit1Room1:[],unit1Room2:[],unit2Room1:[],unit2Room2:[],building:null}),methods:{init(){if(console.log(this.$route.params.building),this.building=this.$route.params.building,null!=this.$route.params.building)for(var t=1;t<=this.$route.params.building.unitSum;t++)this.queryRoom(this.$route.params.building.buildingNo,t,1),this.queryRoom(this.$route.params.building.buildingNo,t,2);else this.$router.push("/operate")},returnMain(){this.$router.push("/operate")},queryRoom(t,e,i){this.axios({method:"post",url:"/room/getRoom",data:{buildingNo:t,unit:e,roomNo:i}}).then(t=>{1==e&&1==i?this.unit1Room1=t.data.data:1==e&&2==i?this.unit1Room2=t.data.data:2==e&&1==i?this.unit2Room1=t.data.data:2==e&&2==i&&(this.unit2Room2=t.data.data)})},select(t){this.axios({method:"post",url:"/room/updateRoom",data:{id:t.id,isSelected:1}}).then(t=>{1==t.data.success?(this.$message({message:"选择成功",type:"success"}),this.init()):this.$message.error("选择失败")})},disSelect(t){this.$confirm("确定要取消？").then(e=>{this.axios({method:"post",url:"/room/updateRoom",data:{id:t.id,isSelected:0}}).then(t=>{1==t.data.success?(this.$message({message:"取消选择成功",type:"success"}),this.init()):this.$message.error("取消选择失败")})})}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-header",[i("div",{staticClass:"title"},[i("el-button",{attrs:{icon:"el-icon-house",round:""},on:{click:t.returnMain}},[t._v("返回主页")]),t._v(" "),i("span",{staticStyle:{"padding-left":"20px","font-size":"20px"}},[t._v(t._s(t.building.buildingNo)+"号楼 "+t._s(t.building.area)+"户型")])],1)]),t._v(" "),i("el-main",[i("div",{staticClass:"tableStyle"},[i("el-table",{staticStyle:{width:"100px"},attrs:{data:t.unit1Room1,border:"","cell-style":{padding:"12.5px 0"}}},[i("el-table-column",{attrs:{prop:"floor",label:"楼层"}})],1)],1),t._v(" "),i("div",{staticClass:"tableStyle"},[i("el-table",{staticStyle:{width:"100px"},attrs:{data:t.unit1Room1,border:""}},[i("el-table-column",{attrs:{prop:"floor",label:"1单元1号"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.isSelected?i("div",[i("el-link",{attrs:{icon:"el-icon-check",type:"success"},on:{click:function(i){return t.select(e.row)}}},[t._v("选择")])],1):t._e(),t._v(" "),1===e.row.isSelected?i("div",[i("el-link",{attrs:{icon:"el-icon-close",type:"danger"},on:{click:function(i){return t.disSelect(e.row)}}},[t._v("取消选择")])],1):t._e()]}}])})],1)],1),t._v(" "),i("div",{staticClass:"tableStyle"},[i("el-table",{staticStyle:{width:"100px"},attrs:{data:t.unit1Room2,border:""}},[i("el-table-column",{attrs:{prop:"floor",label:"1单元2号"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.isSelected?i("div",[i("el-link",{attrs:{icon:"el-icon-check",type:"success"},on:{click:function(i){return t.select(e.row)}}},[t._v("选择")])],1):t._e(),t._v(" "),1===e.row.isSelected?i("div",[i("el-link",{attrs:{icon:"el-icon-close",type:"danger"},on:{click:function(i){return t.disSelect(e.row)}}},[t._v("取消选择")])],1):t._e()]}}])})],1)],1),t._v(" "),2==this.building.unitSum?i("div",{staticClass:"tableStyle"},[i("el-table",{staticStyle:{width:"100px"},attrs:{data:t.unit2Room1,border:""}},[i("el-table-column",{attrs:{prop:"floor",label:"2单元1号"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.isSelected?i("div",[i("el-link",{attrs:{icon:"el-icon-check",type:"success"},on:{click:function(i){return t.select(e.row)}}},[t._v("选择")])],1):t._e(),t._v(" "),1===e.row.isSelected?i("div",[i("el-link",{attrs:{icon:"el-icon-close",type:"danger"},on:{click:function(i){return t.disSelect(e.row)}}},[t._v("取消选择")])],1):t._e()]}}],null,!1,1324457241)})],1)],1):t._e(),t._v(" "),2==this.building.unitSum?i("div",{staticClass:"tableStyle"},[i("el-table",{staticStyle:{width:"100px"},attrs:{data:t.unit2Room2,border:""}},[i("el-table-column",{attrs:{prop:"floor",label:"2单元2号"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.isSelected?i("div",[i("el-link",{attrs:{icon:"el-icon-check",type:"success"},on:{click:function(i){return t.select(e.row)}}},[t._v("选择")])],1):t._e(),t._v(" "),1===e.row.isSelected?i("div",[i("el-link",{attrs:{icon:"el-icon-close",type:"danger"},on:{click:function(i){return t.disSelect(e.row)}}},[t._v("取消选择")])],1):t._e()]}}],null,!1,1324457241)})],1)],1):t._e()])],1)},staticRenderFns:[]};var y=i("VU/8")(b,S,!1,function(t){i("DA9C")},"data-v-68826f86",null).exports,k={name:"mobile",data:()=>({buildings:[]}),created(){this.buildingSel()},methods:{buildingSel(){this.axios({method:"get",url:"building/getAllBuilding"}).then(t=>{this.buildings=t.data.data})},selectPark(){this.$router.push("/mpark")},selectBuilding(t){this.$router.push({name:"mroom",params:{building:t}})}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("\n        车位选号\n    ")]),t._v(" "),i("div",{staticClass:"parkItem"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.selectPark()}}},[t._v("选车位")])],1),t._v(" "),i("div",{staticClass:"title"},[t._v("\n        房间选号\n    ")]),t._v(" "),t._l(t.buildings,function(e){return i("div",{staticClass:"buildingItem"},[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.selectBuilding(e)}}},[t._v(t._s(e.buildingNo)+"号楼")])],1)})],2)},staticRenderFns:[]};var R=i("VU/8")(k,C,!1,function(t){i("0vwr")},"data-v-3aac7153",null).exports,x={name:"mpark",data:()=>({parks:[],intervalid:null}),created(){this.dataRefresh()},destroyed(){this.clear()},methods:{parkSel(){this.axios({method:"get",url:"park/getAllPark"}).then(t=>{this.parks=t.data.data})},dataRefresh(){null==this.intervalid&&(this.intervalid=setInterval(()=>{console.log("fresh:"+new Date),this.parkSel()},3e3))},clear(){clearInterval(this.intervalid),this.intervalid=null}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.parks,function(e){return i("div",[i("div",{staticClass:"parkItem"},[0==e.isSelected?i("div",{staticStyle:{padding:"10px 0 10px 0"}},[t._v("\n                "+t._s(e.parkNumber)+"\n            ")]):t._e(),t._v(" "),1==e.isSelected?i("div",{staticStyle:{"background-color":"brown",height:"100%",padding:"10px 0 10px 0"}},[t._v("\n                "+t._s(e.parkNumber)+"\n            ")]):t._e()])])}),0)},staticRenderFns:[]};var $=i("VU/8")(x,w,!1,function(t){i("xqut")},"data-v-0d41e2b8",null).exports,N={name:"mroom",created(){this.dataRefresh()},destroyed(){this.clear()},data:()=>({unit1Room1:[],unit1Room2:[],unit2Room1:[],unit2Room2:[],building:null,intervalid:null}),methods:{init(){if(console.log(this.$route.params.building),this.building=this.$route.params.building,null!=this.$route.params.building)for(var t=1;t<=this.$route.params.building.unitSum;t++)this.queryRoom(this.$route.params.building.buildingNo,t,1),this.queryRoom(this.$route.params.building.buildingNo,t,2);else this.$router.push("/")},returnMain(){this.$router.push("/")},queryRoom(t,e,i){this.axios({method:"post",url:"/room/getRoom",data:{buildingNo:t,unit:e,roomNo:i}}).then(t=>{1==e&&1==i?this.unit1Room1=t.data.data:1==e&&2==i?this.unit1Room2=t.data.data:2==e&&1==i?this.unit2Room1=t.data.data:2==e&&2==i&&(this.unit2Room2=t.data.data)})},dataRefresh(){null==this.intervalid&&(this.intervalid=setInterval(()=>{console.log("fresh:"+new Date),this.init()},3e3))},clear(){clearInterval(this.intervalid),this.intervalid=null}}},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-main",[i("div",{staticClass:"title"},[i("el-button",{attrs:{icon:"el-icon-house",round:""},on:{click:t.returnMain}},[t._v("返回主页")]),t._v(" "),i("span",{staticStyle:{"padding-left":"20px","font-size":"20px"}},[t._v(t._s(t.building.buildingNo)+"号楼 "+t._s(t.building.area)+"户型")])],1),t._v(" "),i("div",{staticClass:"content"},[i("span",[t._v("楼层")]),t._v(" "),t._l(t.unit1Room1,function(e){return i("div",{staticClass:"item"},[i("div",{staticClass:"text"},[t._v("\n                    "+t._s(e.floor)+"\n                ")])])})],2),t._v(" "),i("div",{staticClass:"content"},[i("span",[t._v("1单元1号")]),t._v(" "),t._l(t.unit1Room1,function(e){return i("div",{staticClass:"item"},[0==e.isSelected?i("div",{staticClass:"noSelected"},[i("div",{staticClass:"text"},[t._v("\n                        "+t._s(e.floor)+"\n                    ")])]):t._e(),t._v(" "),1==e.isSelected?i("div",{staticClass:"isSelected"},[i("div",{staticClass:"text"},[t._v("\n                        "+t._s(e.floor)+"\n                    ")])]):t._e()])})],2),t._v(" "),i("div",{staticClass:"content"},[i("span",[t._v("1单元2号")]),t._v(" "),t._l(t.unit1Room2,function(e){return i("div",{staticClass:"item"},[0==e.isSelected?i("div",{staticClass:"noSelected"},[i("div",{staticClass:"text"},[t._v("\n                        "+t._s(e.floor)+"\n                    ")])]):t._e(),t._v(" "),1==e.isSelected?i("div",{staticClass:"isSelected"},[i("div",{staticClass:"text"},[t._v("\n                        "+t._s(e.floor)+"\n                    ")])]):t._e()])})],2),t._v(" "),2==t.building.unitSum?i("div",[i("div",{staticClass:"content"},[i("span",[t._v("2单元1号")]),t._v(" "),t._l(t.unit2Room1,function(e){return i("div",{staticClass:"item"},[0==e.isSelected?i("div",{staticClass:"noSelected"},[i("div",{staticClass:"text"},[t._v("\n                            "+t._s(e.floor)+"\n                        ")])]):t._e(),t._v(" "),1==e.isSelected?i("div",{staticClass:"isSelected"},[i("div",{staticClass:"text"},[t._v("\n                            "+t._s(e.floor)+"\n                        ")])]):t._e()])})],2),t._v(" "),i("div",{staticClass:"content"},[i("span",[t._v("2单元2号")]),t._v(" "),t._l(t.unit2Room2,function(e){return i("div",{staticClass:"item"},[0==e.isSelected?i("div",{staticClass:"noSelected"},[i("div",{staticClass:"text"},[t._v("\n                            "+t._s(e.floor)+"\n                        ")])]):t._e(),t._v(" "),1==e.isSelected?i("div",{staticClass:"isSelected"},[i("div",{staticClass:"text"},[t._v("\n                            "+t._s(e.floor)+"\n                        ")])]):t._e()])})],2)]):t._e()])],1)},staticRenderFns:[]};var z=i("VU/8")(N,q,!1,function(t){i("vL0d")},"data-v-3a811d1c",null).exports;a.default.use(m.a);var F=new m.a({routes:[{path:"/park",name:"park",component:v},{path:"/operate",name:"operate",component:f},{path:"/room",name:"room",component:y},{path:"/",name:"mobile",component:R},{path:"/mpark",name:"mpark",component:$},{path:"/mroom",name:"mroom",component:z}]}),U=i("NYxO");a.default.use(U.a);const I=sessionStorage.getItem("state")?JSON.parse(sessionStorage.getItem("state")):{user:{username:""}},E={getUser:t=>t.user},V={updateUser(t,e){t.user=e}},M={asyncUpdateUser(t,e){t.commit("updateUser",e)}};var L=new U.a.Store({state:I,getters:E,mutations:V,actions:M});c.a.defaults.baseURL="http://121.36.7.55:8080/NumberSelection/",a.default.use(o.a),a.default.use(m.a),a.default.use(d.a,c.a),a.default.use(U.a),a.default.config.productionTip=!1,a.default.prototype.$axios=c.a,new a.default({el:"#app",render:t=>t(l),router:F,store:L})},VaNl:function(t,e){},tvR6:function(t,e){},vL0d:function(t,e){},xqut:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8058f0968a47cbd69c65.js.map