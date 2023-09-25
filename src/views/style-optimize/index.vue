<template>
    <div>
        <div class="use-list">
            <div class="use-item">
                <span>点击按压效果：</span>
                <div class="use-show">
                    <button class="input-el">点击</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [],
    components: {},
    watch: {},
    data() {
        return {}
    },
    computed: {},
    created() {
        const schoolInfo = [1, 2, 3, 4, 5]
        const studentsInfo = { name: 'aiden', age: 27 }
		console.table(studentsInfo)
        console.table(schoolInfo)
    },
    methods: {}
}
</script>
<style lang="scss" scoped>
.use-list {
    overflow: hidden;
    .use-item {
        display: flex;
        align-items: center;
        .use-show {
            position: relative;
            width: 60px;
            height: 36px;
            .input-el {
                top: 0;
                left: 0;
                position: absolute;
                width: 60px;
                height: 36px;
                line-height: 36px;
                padding: 0;
                border-style: none;
                border-radius: 4px;
                overflow: hidden;
                background: #249bff;
                color: white;
                &:active {
                    padding-top: 30px;
                    background: #3491df;
                }
            }
        }
    }
}
</style>
