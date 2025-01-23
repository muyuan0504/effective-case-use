<template>
    <!-- 混合模式实现文字镂空波浪效果 -->
    <div class="text-container">
        <p class="text-content">THE GREAT AIDEN !</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<style lang="scss" scoped>
.text-container {
    .text-content {
        background: #fff;
        color: #000;
    }
}
</style>
