<template>
    <el-container>
        <el-main>
            <el-table :data="buildings" style="width: 1000px" border>
                <el-table-column prop="number" label="房间号">
                </el-table-column>
                <el-table-column prop="isSelected" label="状态">
                    <template slot-scope="scope">
                        <div v-if="scope.row.isSelected === 0">
                            <el-tag type="success">未选</el-tag>
                        </div>
                        <div v-if="scope.row.isSelected === 1">
                            <el-tag type="danger">已选</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="operage" label="操作">
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
        </el-main>
    </el-container>
</template>
<script>

export default {
    name: 'operate',
    created(){
        // this.buildingSel()
    },
    data() {
        return {
            buildings: []
        }
    },
    methods: {
        buildingSel() {
            this.axios({
                method: 'post',
                url: 'getNum',
                data: {
                    number: this.queryForm.searchKey,
                    pageNum: num,
                    pageSize: size
                }
            }).then((resp) => {
                this.numbers = resp.data.data.list;
                this.itemTotalCount = resp.data.data.total;
            })
        }
    }
}
</script>
<style scoped>

</style>