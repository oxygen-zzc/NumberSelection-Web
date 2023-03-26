<template>
    <div>
        <div class="title">
            车位选号
        </div>
        <div class="parkItem">
            <el-button type="primary" @click="selectPark()">选车位</el-button>
        </div>
        <div class="title">
            房间选号
        </div>
        <div v-for="item in buildings" class="buildingItem">
            <el-button type="primary" @click="selectBuilding(item)">{{ item.buildingNo }}号楼</el-button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'mobile',
    data() {
        return {
            buildings: []
        }
    },
    created(){
        this.buildingSel()
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
        selectPark(){
            this.$router.push('/mpark')
        },
        selectBuilding(val){
            this.$router.push({name:'mroom',params:{building:val}})
        }
    }
}
</script>
<style scoped>
    .title{
        background-color:rgb(226, 226, 226);
        text-align: left;
        padding: 3px;
    }
    .parkItem{
        text-align: left;
        padding: 10px;
    }
    .buildingItem{
        float: left;
        padding: 10px 0 0 10px;
    }
</style>