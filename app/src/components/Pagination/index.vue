<template>
    <div class="pagination">
        <button :disabled="pageNo==1" @click="$emit('getpageNo',pageNo-1)">上一页</button>
        <button v-if="startNumAndEndNum.start>1" @click="$emit('getpageNo',1)">1</button>
        <button v-if="startNumAndEndNum.start>2">···</button>

        <button v-for="(item,index) in startNumAndEndNum.end" :key="index" v-show="item>=startNumAndEndNum.start" @click="$emit('getpageNo',item)">{{item}}</button>
        

        <button v-if="startNumAndEndNum.end<totalPage-1">···</button>
        <button v-if="startNumAndEndNum.end<totalPage" @click="$emit('getpageNo',totalPage)">{{totalPage}}</button>
        <button @click="$emit('getpageNo',pageNo+1)">下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
        <div>{{startNumAndEndNum}}===========当前页面{{pageNo}}</div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props:["pageNo","pageSize","total","continues"],
        computed:{
            totalPage(){
                return Math.ceil(this.total/this.pageSize)
            },
            startNumAndEndNum(){
                const {pageNo,total,continues} = this
                let start = 0,end = 0
                //异常情况  总数<连续页数
                if(continues>this.totalPage){
                    start = 1
                    end = this.totalPage
                }else{
                    //正常情况
                    start = pageNo - parseInt(continues/2)
                    end = pageNo + parseInt(continues/2)

                    //当前页数小于连续页数的一般时 或  大于一半
                    if(start <1){
                        start = 1
                        end = continues
                    }
                    if(end > this.totalPage){
                        end = this.totalPage
                        start = this.totalPage -continues +1
                    }
                }
                return {start,end}
            }
        }
    }
</script>

<style lang="less" scoped>
    .pagination {
        text-align: center;
        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>