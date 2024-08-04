<template>
    <h1>动态路径获取页面</h1>
    <h2>这是路径1：{{ $route.params.id }}</h2>
    <h2>这是路径2：{{ $route.params.name }}</h2>
    <h2>这是url 的查询参数：{{ $route.query.key }}</h2>
    <h2>这是路由的原信息：{{ $route.meta }}</h2>
</template>
  
<script>
  
</script>