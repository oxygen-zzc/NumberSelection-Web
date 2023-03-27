<template>
    <el-container>
        <el-main>
            <div class="title">
                <el-button icon="el-icon-house" round @click="returnMain">返回主页</el-button>
                <span style="padding-left: 20px; font-size: 20px;">{{ building.buildingNo }}号楼 {{ building.area }}户型</span>
            </div>
            <div class="content">
                <span>楼层</span>
                <div v-for="item in unit1Room1" class="item">
                    <div class="text">
                        {{ item.floor }}
                    </div>
                </div>
            </div>
            <div class="content">
                <span>1单元1号</span>
                <div v-for="item in unit1Room1" class="item">
                    <div v-if="item.isSelected == 0" class="noSelected">
                        <div class="text">
                            {{ item.floor }}
                        </div>
                    </div>
                    <div v-if="item.isSelected == 1" class="isSelected">
                        <div class="text">
                            {{ item.floor }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <span>1单元2号</span>
                <div v-for="item in unit1Room2" class="item">
                    <div v-if="item.isSelected == 0" class="noSelected">
                        <div class="text">
                            {{ item.floor }}
                        </div>
                    </div>
                    <div v-if="item.isSelected == 1" class="isSelected">
                        <div class="text">
                            {{ item.floor }}
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="building.unitSum == 2">
                <div class="content">
                    <span>2单元1号</span>
                    <div v-for="item in unit2Room1" class="item">
                        <div v-if="item.isSelected == 0" class="noSelected">
                            <div class="text">
                                {{ item.floor }}
                            </div>
                        </div>
                        <div v-if="item.isSelected == 1" class="isSelected">
                            <div class="text">
                                {{ item.floor }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <span>2单元2号</span>
                    <div v-for="item in unit2Room2" class="item">
                        <div v-if="item.isSelected == 0" class="noSelected">
                            <div class="text">
                                {{ item.floor }}
                            </div>
                        </div>
                        <div v-if="item.isSelected == 1" class="isSelected">
                            <div class="text">
                                {{ item.floor }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-main>
    </el-container>
</template>
<script>

export default {
    name: 'mroom',
    created() {
        this.dataRefresh()
    },
    destroyed(){
        this.clear()
    },
    data() {
        return {
            unit1Room1: [],
            unit1Room2: [],
            unit2Room1: [],
            unit2Room2: [],
            building: null,
            intervalid: null
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
                this.$router.push('/')
            }
        },
        returnMain() {
            this.$router.push('/')
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
        dataRefresh(){
            if(this.intervalid != null){
                return
            }
            this.intervalid = setInterval(() => {
                console.log("fresh:" + new Date())
                this.init()
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
.title {
    text-align: left;
    padding-bottom: 10px;
}

.tableStyle {
    float: left;
}

.content {
    float: left;
}
.content span{
    padding-left: 3px;
    padding-right: 3px;
}

.item {
    border: 1px;
    border-style: solid;
    border-color: black;
    height: 10%;
}

.isSelected {
    background-color: #67C23A;
    color: #67C23A;
    height: 100%;
}

.noSelected {
    /* background-color: #67C23A; */
    color: white;
}

.text {
    padding-top: 6px;
    padding-bottom: 6px;
}
</style>