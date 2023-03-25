<template>
    <div>
        <div v-for="item in numberItem" class="num">
            <div v-if="item.isSelected == 1" style="background-color: brown; height: 100%;">
                <div class="text">{{item.number}}</div>
            </div>
            <div v-if="item.isSelected == 0" style="height: 100%;">
                <div class="text">{{item.number}}</div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'home',
    data() {
        return {
            webSock: null,
            numberItem: null
        }
    },
    created(){
        this.initWebSocket()
    },
    destroyed(){
        this.webSock.close()
    },
    methods: {
        initWebSocket(){
            const wsuri = "ws://121.36.7.55:8086/number"
            this.webSock = new WebSocket(wsuri)
            this.webSock.onmessage = this.webSocketOnMessage
            this.webSock.onopen = this.webSocketOnOpen
            this.webSock.onerror = this.webSocketOnError
            this.webSock.onclose = this.webSocketClose
        },
        webSocketOnOpen(){
            console.log('webSocket建立成功')
        },
        webSocketOnError(){
            // this.initWebSocket()
        },
        webSocketOnMessage(e){
            const redata = JSON.parse(e.data)
            this.numberItem = redata
            console.log(redata)
        },
        webSocketSend(data){
            this.webSock.send(data)
        },
        webSocketClose(e){
            console.log('断开连接',e)
        }
    }
}
</script>
<style scoped>
.num{
    float: left;
    width: 10%;
    margin: 2px;
    height: 40px;
    background-color: darkgrey;
    color: aliceblue;
}
.text{
    padding-top: 10px;
}
</style>