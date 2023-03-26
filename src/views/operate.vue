<template>
    <el-container>
        <el-header>
            <div class="title">
                <el-button type="primary" @click="parkSel()">车位选择</el-button>
            </div>
        </el-header>
        <el-main>
            <el-table :data="buildings" style="width: 800px" border>
                <el-table-column prop="buildingNo" label="楼号">
                </el-table-column>
                <el-table-column prop="area" label="面积 (m²)">
                </el-table-column>
                <el-table-column prop="floorSum" label="层数">
                </el-table-column>
                <el-table-column prop="unitSum" label="单元数">
                </el-table-column>
                <el-table-column prop="operage" label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" @click="selectRoom(scope.row)">房间选择</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>
<script>

export default {
    name: 'operate',
    created(){
        this.buildingSel()
    },
    data() {
        return {
            buildings: []
        }
    },
    methods: {
        buildingSel() {
            this.axios({
                method: 'get',
                url: 'building/getAllBuilding'
            }).then((resp) => {
                this.buildings = resp.data.data;
            })
        },
        parkSel(){
            this.$router.push('/park')
        },
        selectRoom(row){
            this.$router.push({name:'room',params:{building:row}})
        }
    }
}
</script>
<style scoped>
.title{
    text-align: left;
    padding-top: 10px;
}
</style>