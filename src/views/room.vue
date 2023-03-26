<template>
    <el-container>
        <el-header>
            <div class="title">
                <el-button icon="el-icon-house" round @click="returnMain">返回主页</el-button>
                <span style="padding-left: 20px; font-size: 20px;">{{building.buildingNo}}号楼 {{ building.area }}户型</span>
            </div>
        </el-header>
        <el-main>
            <div class="tableStyle">
                <el-table :data="unit1Room1" style="width: 100px" border :cell-style="{padding:'12.5px 0'}">
                    <el-table-column prop="floor" label="楼层">
                    </el-table-column>
                </el-table>
            </div>
            <div class="tableStyle">
                <el-table :data="unit1Room1" style="width: 100px" border>
                    <el-table-column prop="floor" label="1单元1号">
                        <template slot-scope="scope">
                            <div v-if="scope.row.isSelected === 0">
                                <el-link icon="el-icon-check" type="success" @click="select(scope.row)">选择</el-link>
                            </div>
                            <div v-if="scope.row.isSelected === 1">
                                <el-link icon="el-icon-close" type="danger" @click="disSelect(scope.row)">取消选择</el-link>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="tableStyle">
                <el-table :data="unit1Room2" style="width: 100px" border>
                    <el-table-column prop="floor" label="1单元2号">
                        <template slot-scope="scope">
                            <div v-if="scope.row.isSelected === 0">
                                <el-link icon="el-icon-check" type="success" @click="select(scope.row)">选择</el-link>
                            </div>
                            <div v-if="scope.row.isSelected === 1">
                                <el-link icon="el-icon-close" type="danger" @click="disSelect(scope.row)">取消选择</el-link>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div v-if="this.building.unitSum == 2" class="tableStyle">
                <el-table :data="unit2Room1" style="width: 100px" border>
                    <el-table-column prop="floor" label="2单元1号">
                        <template slot-scope="scope">
                            <div v-if="scope.row.isSelected === 0">
                                <el-link icon="el-icon-check" type="success" @click="select(scope.row)">选择</el-link>
                            </div>
                            <div v-if="scope.row.isSelected === 1">
                                <el-link icon="el-icon-close" type="danger" @click="disSelect(scope.row)">取消选择</el-link>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div v-if="this.building.unitSum == 2" class="tableStyle">
                <el-table :data="unit2Room2" style="width: 100px" border>
                    <el-table-column prop="floor" label="2单元2号">
                        <template slot-scope="scope">
                            <div v-if="scope.row.isSelected === 0">
                                <el-link icon="el-icon-check" type="success" @click="select(scope.row)">选择</el-link>
                            </div>
                            <div v-if="scope.row.isSelected === 1">
                                <el-link icon="el-icon-close" type="danger" @click="disSelect(scope.row)">取消选择</el-link>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>
<script>

export default {
    name: 'room',
    created() {
        this.init()
    },
    data() {
        return {
            unit1Room1: [],
            unit1Room2: [],
            unit2Room1: [],
            unit2Room2: [],
            building: null
        }
    },
    methods: {
        init() {
            console.log(this.$route.params.building);
            this.building = this.$route.params.building
            if (this.$route.params.building != null) {
                for (var i = 1; i <= this.$route.params.building.unitSum; i++) {
                    this.queryRoom(this.$route.params.building.buildingNo, i, 1)
                    this.queryRoom(this.$route.params.building.buildingNo, i, 2)
                }
            } else {
                this.$router.push('/operate')
            }
        },
        returnMain() {
            this.$router.push('/operate')
        },
        queryRoom(building, unit, room) {
            this.axios({
                method: 'post',
                url: '/room/getRoom',
                data: {
                    "buildingNo": building,
                    "unit": unit,
                    "roomNo": room
                }
            }).then((resp) => {
                if (unit == 1 && room == 1) {
                    this.unit1Room1 = resp.data.data
                } else if (unit == 1 && room == 2) {
                    this.unit1Room2 = resp.data.data
                } else if (unit == 2 && room == 1) {
                    this.unit2Room1 = resp.data.data
                } else if (unit == 2 && room == 2) {
                    this.unit2Room2 = resp.data.data
                }
            })
        },
        select(val) {
            this.axios({
                method: 'post',
                url: '/room/updateRoom',
                data: {
                    id: val.id,
                    isSelected: 1
                }
            }).then((resp) => {
                if (resp.data.success == true) {
                    this.$message({
                        message: '选择成功',
                        type: 'success'
                    });
                    this.init()
                } else {
                    this.$message.error('选择失败')
                }
            })
        },
        disSelect(val) {
            this.$confirm('确定要取消？')
                .then(_ => {
                    this.axios({
                        method: 'post',
                        url: '/room/updateRoom',
                        data: {
                            id: val.id,
                            isSelected: 0
                        }
                    }).then((resp) => {
                        if (resp.data.success == true) {
                            this.$message({
                                message: '取消选择成功',
                                type: 'success'
                            });
                            this.init()
                        } else {
                            this.$message.error('取消选择失败')
                        }
                    })
                })
        },
    }
}
</script>
<style scoped>
.title {
    text-align: left;
    padding-top: 10px;
}
.tableStyle{
    float: left;
}
</style>