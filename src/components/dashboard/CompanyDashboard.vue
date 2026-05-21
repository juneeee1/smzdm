<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const company = userStore.company!
const copied = ref(false)

async function copyCode() {
  await navigator.clipboard.writeText(company.channelCode)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1800)
}

function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })
}
</script>

<template>
  <div class="company-dash">
    <!-- 背景装饰 -->
    <div class="bg-glow" />

    <!-- 欢迎区 -->
    <div class="welcome">
      <div class="welcome-badge">ENTERPRISE</div>
      <div class="welcome-name">{{ company.companyName }}</div>
      <div class="welcome-sub">欢迎使用北京81销售体系内容分发系统</div>
    </div>

    <!-- 渠道号卡片 -->
    <div class="channel-card card">
      <div class="card-gold-line" />
      <div class="channel-label">企业专属渠道号 · CHANNEL CODE</div>
      <div class="channel-code">{{ company.channelCode }}</div>
      <button class="copy-btn" @click="copyCode">
        <svg v-if="!copied" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        {{ copied ? '✓ 已复制' : '复制渠道号' }}
      </button>
      <!-- 装饰角 -->
      <div class="corner corner-tl" />
      <div class="corner corner-tr" />
      <div class="corner corner-bl" />
      <div class="corner corner-br" />
    </div>

    <!-- 企业信息 -->
    <div class="info-card card">
      <div class="info-title">
        <span>企业信息</span>
        <div class="info-title-line" />
      </div>
      <div class="info-list">
        <div class="info-row" v-for="item in [
          { key: '公司名称', val: company.companyName },
          { key: '信用代码', val: company.creditCode, mono: true },
          { key: '联系人', val: company.contactName },
          { key: '联系电话', val: company.contactPhone, mono: true },
          { key: '公司地址', val: company.address },
          { key: '注册时间', val: formatDate(company.createdAt) }
        ]" :key="item.key">
          <span class="info-key">{{ item.key }}</span>
          <span class="info-val" :class="{ mono: item.mono }">{{ item.val }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-dash {
  min-height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xl);
  padding: var(--space-xl) var(--space-lg);
  max-width: 500px;
  margin: 0 auto;
  position: relative;
}

.bg-glow {
  position: fixed;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 600px; height: 400px;
  background: radial-gradient(circle, rgba(196,167,66,0.06) 0%, transparent 70%);
  pointer-events: none;
}

/* 欢迎区 */
.welcome { text-align: center; position: relative; z-index: 1; }
.welcome-badge {
  display: inline-block;
  font-size: 10px;
  color: var(--color-gold);
  border: 1px solid rgba(196,167,66,0.3);
  padding: 3px 14px;
  letter-spacing: 3px;
  margin-bottom: var(--space-md);
  background: var(--color-gold-dim);
}
.welcome-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 8px;
  letter-spacing: 1px;
}
.welcome-sub {
  font-size: 12px;
  color: var(--color-text-tertiary);
  letter-spacing: 1px;
}

/* 渠道号卡片 */
.channel-card {
  width: 100%;
  padding: var(--space-2xl) var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  position: relative;
  box-shadow: var(--shadow-lg), 0 0 40px rgba(196,167,66,0.06);
  overflow: hidden;
}
.card-gold-line {
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}
.channel-label {
  font-size: 10px;
  color: var(--color-text-tertiary);
  letter-spacing: 2.5px;
}
.channel-code {
  font-size: 48px;
  font-weight: 900;
  color: var(--color-gold);
  letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(196,167,66,0.4);
  line-height: 1;
}
.copy-btn {
  display: flex; align-items: center; gap: 8px;
  height: 38px; padding: 0 var(--space-lg);
  border-radius: 2px;
  font-size: 13px; letter-spacing: 1px;
  color: var(--color-gold);
  border: 1px solid rgba(196,167,66,0.3);
  background: var(--color-gold-dim);
  cursor: pointer; transition: all 0.2s;
}
.copy-btn:hover { background: rgba(196,167,66,0.2); }

/* 四角装饰 */
.corner {
  position: absolute; width: 16px; height: 16px;
  border-color: var(--color-gold); border-style: solid; opacity: 0.5;
}
.corner-tl { top: 12px; left: 12px; border-width: 1.5px 0 0 1.5px; }
.corner-tr { top: 12px; right: 12px; border-width: 1.5px 1.5px 0 0; }
.corner-bl { bottom: 12px; left: 12px; border-width: 0 0 1.5px 1.5px; }
.corner-br { bottom: 12px; right: 12px; border-width: 0 1.5px 1.5px 0; }

/* 企业信息卡片 */
.info-card { width: 100%; padding: var(--space-lg); }
.info-title {
  display: flex; align-items: center; gap: var(--space-sm);
  font-size: 11px; font-weight: 600; color: var(--color-text-tertiary);
  letter-spacing: 2px; text-transform: uppercase;
  margin-bottom: var(--space-md);
}
.info-title-line { flex: 1; height: 1px; background: var(--color-border); }
.info-list { display: flex; flex-direction: column; gap: 12px; }
.info-row {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: var(--space-md); font-size: 13px;
}
.info-key { color: var(--color-text-tertiary); white-space: nowrap; flex-shrink: 0; }
.info-val { color: var(--color-text-secondary); font-weight: 500; text-align: right; word-break: break-all; }
.mono { font-family: monospace; letter-spacing: 0.5px; font-size: 12px; }
</style>
