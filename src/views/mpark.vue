<template>
    <div>
        <div v-for="item in parks">
            <div class="parkItem">
                <div v-if="item.isSelected == 0" style="padding: 10px 0 10px 0;">
                    {{ item.parkNumber }}
                </div>
                <div v-if="item.isSelected == 1" style="background-color: brown; height: 100%; padding: 10px 0 10px 0;">
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
        }
    }
}
</script>
<style scoped>
    .parkItem{
        float: left;
        background-color: rgb(37, 117, 5);
        color: white;
        border: 1px;
        border-style: solid;
        border-color: rgb(0, 0, 0);
        width: 10%;
    }
</style>