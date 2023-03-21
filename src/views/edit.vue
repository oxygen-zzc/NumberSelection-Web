<template>
    <el-container>
        <el-header style="padding-top: 10px;">
            <el-form :inline="true" :model="queryForm" class="demo-form-inline" style="float: left;">
                <el-form-item>
                    <el-input v-model="queryForm.searchKey" placeholder="请输入房间号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="query(1, pageSize)">查询</el-button>
                </el-form-item>
            </el-form>
        </el-header>
        <el-main>
            <el-table :data="numbers" style="width: 1000px" border>
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
        <el-footer>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 40]" background :page-size="10" layout="total, sizes, prev, pager, next, jumper"
                :total="itemTotalCount">
            </el-pagination>
        </el-footer>
    </el-container>
</template>
<script>

export default {
    name: 'edit',
    created(){
        this.query(this.pageNum,this.pageSize)
    },
    data() {
        return {
            queryForm: {
                searchKey: "",
            },
            pageNum: '1',
            pageSize: '10',
            itemTotalCount:0,
            numbers: []
        }
    },
    methods: {
        query(num, size) {
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
        },
        handleChange(file, fileList) {
            this.fileList = fileList
        },
        // 切换页码
        handleCurrentChange(val) {
            this.pageNum = val;
            this.query(val, this.pageSize)
        },
        // 修改条数
        handleSizeChange(val) {
            this.pageSize = val;
            this.query(this.pageNum, val)
        },
        select(val) {
            this.axios({
                method: 'post',
                url: 'updateNum',
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
                    this.query(this.pageNum, this.pageSize)
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
                        url: 'updateNum',
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
                            this.query(this.pageNum, this.pageSize)
                        } else {
                            this.$message.error('取消选择失败')
                        }
                    })
                })
        }
    }
}
</script>
<style scoped>

</style>