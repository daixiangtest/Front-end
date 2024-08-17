<template>
    <h1>列表展示</h1>
    <div>
        <el-table :data="this.books" stripe style="width: 500px">
        <el-table-column prop="id" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="statua" label="Address" />
        </el-table>
        <el-button type="primary" plain @click="getBooks">获取列表数据</el-button>
        <el-button type="primary" plain @click="getBook">获取列表数据1</el-button>
        
    </div>
    
  
</template>
  
<script>
// 映入axios依赖库
import axios from 'axios'


export default{
    data(){
        return{
            tableData : [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }],
            books : []
        }
    },
    methods:{
        getBooks(){
            const res= axios.get('http://127.0.0.1:8000/book/')
            res.then(
                    response => {
                
                    this.books=response.data.data
                    console.log("这个是响应数据",response.data.data[0].statua)
                }   
            ).catch(erroe => {
                console.log('这是一个错误的响应',erroe.response.status)
            })
            // console.log("这是data数据",this.books)
        },
        getBook(){
            const config={
                'baseURL':'http://127.0.0.1:8000'
            }
            axios.get('/book/',config).then(
                response => {
                    console.log(response)
                }
                // 失败执行的方法
            ).catch(
                error => {
                    console.log(error)
                }
            ).finally(
                function ()  {
                    console.log('最后都会执行的方法')
                }
            )


        }
}
}


</script>