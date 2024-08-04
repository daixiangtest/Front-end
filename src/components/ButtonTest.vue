<template>
    <!-- type属性用于展示按钮不同的颜色 -->
    <el-button type="warning">Primary</el-button>
    <!-- plain用于设置按钮的颜色渐变  -->
    <el-button type="success" plain>Success</el-button>
    <!-- round属性用于设置按钮的圆角 -->
    <el-button type="warning" round>Warning</el-button>
    <!-- icon 用于添加按钮上的图标 -->
    <el-button type="primary" icon="Edit" circle />
    <!-- disablad 用于禁用图标 -->
    <el-button type="primary" disabled>Primary</el-button>
    <el-button type="danger" plain disabled>Danger</el-button>
    <div>
        <!-- link 属性 去除按钮的边框 -->
        <el-button v-for="button in buttons" :key="button.text" :type="button.type" link disabled>{{ button.text }}</el-button>
        <!-- text 属性 声明为文字按钮 bg 声明保留背景 -->
        <el-button v-for="button in buttons" :key="button.text" :type="button.type" text bg>{{ button.text }}</el-button>
    </div>
    <div>
        <!-- el-button-group 来规范一个图标组 -->
        <el-button-group>
            <el-button type="primary" icon="ArrowLeft">Previous Page</el-button>
            <el-button type="primary">
                <!-- el-icon 声明ArrowRight 图标 在图标的右侧默认在左侧  -->
                Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
        </el-button-group>

        <el-button-group>
            <el-button type="primary" icon="ArrowLeft">Previous Page</el-button>
            <el-button type="primary" icon="ArrowRight">Next Page</el-button>


        </el-button-group>

        <el-button-group>
            <el-button type="primary" icon="Edit" />
            <el-button type="primary" icon="Share" />
            <el-button type="primary" icon="Delete" />
        </el-button-group>
    </div>
    <div>
        <!-- loading 展示图标的加载状态 loading-icon展示按钮中的图标 -->
        <el-button type="primary" loading-icon="Eleme" loading>Loading</el-button>
    </div>
    <div>
        <!-- size调整按钮的大小,默认是中间的default -->
        <el-button size="large" icon="Search">Search</el-button>
        <el-button icon="Search">Search</el-button>
        <el-button size="small" icon="Search">Search</el-button>
    </div>
    <div>
        <el-button tag="div" role="button" tabindex="0">div1</el-button>
        <el-button tag="div" role="button" tabindex="1">div2</el-button>
        <el-button tag="a" type="primary" href="https://www.baidu.com" target="_blank" rel="noopener noreferrer" link>跳转按钮</el-button>
        <a href="https://www.baidu.com">百度</a>
    </div>
    <div>
        <el-button color="#626aef" :dark="isDark">Default</el-button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            buttons: [
                { type: '', text: 'plain' },
                { type: 'primary', text: 'primary' },
                { type: 'success', text: 'success' },
                { type: 'info', text: 'info' },
                { type: 'warning', text: 'warning' },
                { type: 'danger', text: 'danger' },]
            
            }
    }
    
}
</script>

<style scoped>

</style>