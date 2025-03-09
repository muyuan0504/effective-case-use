<template>
    <div>
        <textarea v-model="markdown" placeholder="输入 Markdown"></textarea>
        <div class="markdown-body" v-html="renderedMarkdown"></div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css' // 选择合适的主题

const markdown = ref(`
# 代码高亮 & 复制功能

\`\`\`javascript
console.log("Hello, Vue 3!");
\`\`\`
`)

// 配置 Markdown 解析器
const md = new MarkdownIt({
    html: true,
    highlight: (code, lang) => {
        const validLang = hljs.getLanguage(lang) ? lang : 'plaintext'
        return `<pre class="hljs"><code>${hljs.highlight(code, { language: validLang }).value}</code></pre>`
    }
})

// 计算渲染后的 Markdown
const renderedMarkdown = computed(() => md.render(markdown.value))

// 处理代码块复制功能
const addCopyButtons = () => {
    nextTick(() => {
        document.querySelectorAll('pre.hljs').forEach((block) => {
            if (!block.querySelector('.copy-button')) {
                const button = document.createElement('button')
                button.innerText = '📋 复制'
                button.className = 'copy-button'
                button.addEventListener('click', () => {
                    const code = block.innerText
                    navigator.clipboard.writeText(code).then(() => {
                        button.innerText = '✅ 已复制'
                        setTimeout(() => (button.innerText = '📋 复制'), 2000)
                    })
                })
                block.style.position = 'relative'
                block.appendChild(button)
            }
        })
    })
}

// 监听 Markdown 变化，添加复制按钮
onMounted(() => {
    addCopyButtons()
})
</script>

<style scoped>
textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    font-family: monospace;
}

.markdown-body pre {
    position: relative;
    background: #282c34;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
}

.markdown-body code {
    font-family: monospace;
    font-size: 14px;
    color: #fff;
}

.copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    padding: 5px 10px;
    color: white;
    cursor: pointer;
    font-size: 12px;
    border-radius: 4px;
}

.copy-button:hover {
    background: rgba(255, 255, 255, 0.4);
}

pre {
    background: #282c34; /* 深色背景 */
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 14px;
}

code {
    font-family: 'Fira Code', monospace;
    color: #fff;
}
</style>
