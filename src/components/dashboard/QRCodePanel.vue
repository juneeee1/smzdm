<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'
import type { PersonalUser } from '@/types'
import { genPromoUrl } from '@/utils/codeGen'

const props = defineProps<{ user: PersonalUser }>()

const qrCanvas = ref<HTMLCanvasElement | null>(null)
const promoUrl = genPromoUrl(props.user.channelCode)
const copied = ref(false)

onMounted(async () => {
  if (qrCanvas.value) {
    await QRCode.toCanvas(qrCanvas.value, promoUrl, {
      width: 200,
      margin: 2,
      color: { dark: '#1a1a1a', light: '#ffffff' }
    })
  }
})

async function copyCode() {
  await navigator.clipboard.writeText(props.user.channelCode)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1800)
}

function downloadQR() {
  if (!qrCanvas.value) return
  const link = document.createElement('a')
  link.download = `渠道二维码_${props.user.name}_${props.user.channelCode}.png`
  link.href = qrCanvas.value.toDataURL('image/png')
  link.click()
}
</script>

<template>
  <div class="qr-panel">
    <!-- 标题 -->
    <div class="panel-header">
      <div class="panel-eyebrow">CHANNEL QR CODE</div>
      <div class="panel-title">渠道二维码</div>
      <div class="panel-sub">专属推广码 · 扫码即追踪</div>
    </div>

    <!-- 主卡片 -->
    <div class="qr-card card">
      <!-- 顶部金线 -->
      <div class="card-gold-line" />

      <!-- 二维码 -->
      <div class="qr-wrap">
        <canvas ref="qrCanvas" />
      </div>

      <!-- 渠道号 -->
      <div class="channel-section">
        <div class="channel-label">个人渠道号 · CHANNEL CODE</div>
        <div class="channel-code">{{ user.channelCode }}</div>
        <button class="copy-btn" @click="copyCode">
          <svg v-if="!copied" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          {{ copied ? '✓ 已复制' : '复制' }}
        </button>
      </div>

      <!-- 推广链接 -->
      <div class="promo-url">
        <span class="url-label">PROMO URL</span>
        <span class="url-text">{{ promoUrl }}</span>
      </div>
    </div>

    <!-- 下载按钮 -->
    <button class="btn btn-primary download-btn" @click="downloadQR">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      下载二维码
    </button>
    <div class="tip-text">将二维码分享给客户，系统自动记录推广来源</div>
  </div>
</template>

<style scoped>
.qr-panel {
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.panel-header { text-align: center; }
.panel-eyebrow {
  font-size: 10px;
  color: var(--color-gold);
  letter-spacing: 3px;
  margin-bottom: 6px;
  opacity: 0.7;
}
.panel-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: 2px;
}
.panel-sub {
  font-size: 12px;
  color: var(--color-text-tertiary);
  margin-top: 4px;
  letter-spacing: 1px;
}

.qr-card {
  width: 100%;
  padding: var(--space-xl) var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
  position: relative;
  box-shadow: var(--shadow-md);
  overflow: hidden;
}
.card-gold-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}

.qr-wrap {
  padding: var(--space-md);
  background: #ffffff;
  border-radius: var(--radius-sm);
  box-shadow: 0 0 0 1px rgba(196,167,66,0.2), var(--shadow-gold);
}
.qr-wrap canvas { display: block; }

.channel-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.channel-label {
  font-size: 10px;
  color: var(--color-text-tertiary);
  letter-spacing: 2px;
}
.channel-code {
  font-size: 26px;
  font-weight: 800;
  color: var(--color-gold);
  letter-spacing: 3px;
  font-feature-settings: 'tnum';
  text-shadow: 0 0 20px rgba(196,167,66,0.3);
}
.copy-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 var(--space-md);
  border-radius: 2px;
  font-size: 12px;
  color: var(--color-gold);
  border: 1px solid rgba(196,167,66,0.3);
  background: var(--color-gold-dim);
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 1px;
}
.copy-btn:hover { background: rgba(196,167,66,0.25); }

.promo-url {
  width: 100%;
  padding: 10px var(--space-md);
  background: var(--color-surface-2);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  display: flex; flex-direction: column; gap: 4px;
}
.url-label { font-size: 9px; color: var(--color-text-tertiary); letter-spacing: 2px; }
.url-text { font-size: 11px; color: var(--color-text-secondary); word-break: break-all; line-height: 1.5; }

.download-btn { width: 100%; height: 48px; font-size: 14px; letter-spacing: 2px; }
.tip-text { font-size: 11px; color: var(--color-text-tertiary); text-align: center; letter-spacing: 0.5px; }
</style>
