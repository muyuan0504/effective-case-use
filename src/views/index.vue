<template>
    <div class="home-wrapper">
        <div class="case-header">{{ headerTitle }}</div>
        <div class="case-list">
            <div v-for="caseItem in CASE_LIST" class="case-item flex-box" @click.stop="goItem(caseItem.routeName)">
                {{ caseItem.label }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { CASE_LIST } from '@/config/index'
const router = useRouter()
const route = useRoute()
const headerTitle = ref('实例类型')

console.error('---------- aiden --------------', CASE_LIST, route.name)
const goItem = (routeName) => routeName && router.push({ name: routeName })

/** 生命周期钩子 */
onMounted(() => console.log('page mounted'))
onUpdated((e) => console.log('page updated', e))
setTimeout(() => {
    headerTitle.value = '实例类型1'
}, 2000)
</script>

<style lang="scss" scoped>
.home-wrapper {
    .case-list {
        margin-top: 24px;
        display: flex;
        .case-item {
            width: 94px;
            height: 94px;
            border-radius: 8px;
            background: rgba(207, 231, 236);
            // color: rgba(197, 152, 215);
            color: #666;
            font-size: 16px;
            font-weight: bolder;
            transition: scale 0.3s;
            cursor: pointer;
            &:nth-child(n + 2) {
                margin-left: 12px;
            }
            &:hover {
                transform: scale(1.05);
            }
        }
    }
}
</style>
