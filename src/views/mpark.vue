<template>
    <div>
        <div style="text-align: left; padding: 5px;">
            <el-button icon="el-icon-house" round @click="returnMain">返回主页</el-button>
            <span style="padding-left: 10px;">选车位</span>
        </div>
        <div v-for="item in parks">
            <div class="parkItem">
                <div v-if="item.isSelected == 0" style="padding: 10px 0 10px 0;">
                    {{ item.parkNumber }}
                </div>
                <div v-if="item.isSelected == 1" style="color: white; background-color: green; height: 100%; padding: 10px 0 10px 0;">
                    {{ item.parkNumber }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'mpark',
    data() {
        return {
            parks: [],
            intervalid: null
        }
    },
    created(){
        this.dataRefresh()
    },
    destroyed(){
        this.clear()
    },
    methods: {
        parkSel() {
            this.axios({
                method: 'get',
                url: 'park/getAllPark'
            }).then((resp) => {
                this.parks = resp.data.data;
            })
        },
        dataRefresh(){
            if(this.intervalid != null){
                return
            }
            this.intervalid = setInterval(() => {
                console.log("fresh:" + new Date())
                this.parkSel()
            },3000)
        },
        clear(){
            clearInterval(this.intervalid);
            this.intervalid = null;
        },
        returnMain() {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
    .parkItem{
        float: left;
        border: 1px;
        border-style: solid;
        border-color: rgb(0, 0, 0);
        width: 10%;
    }
</style>