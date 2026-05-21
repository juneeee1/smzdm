<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'
import type { PersonalUser } from '@/types'
import { genPromoUrl } from '@/utils/codeGen'

const props = defineProps<{ user: PersonalUser }>()

const posterCanvas = ref<HTMLCanvasElement | null>(null)
const promoUrl = genPromoUrl(props.user.channelCode)
const generating = ref(false)

onMounted(() => { drawPoster() })

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

async function drawPoster() {
  const canvas = posterCanvas.value
  if (!canvas) return
  generating.value = true

  const W = 750, H = 1280
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!

  // ── 纯黑背景 ──
  ctx.fillStyle = '#060606'
  ctx.fillRect(0, 0, W, H)

  // ── 暗纹网格 ──
  ctx.strokeStyle = 'rgba(255,255,255,0.025)'
  ctx.lineWidth = 1
  for (let x = 0; x <= W; x += 60) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
  }
  for (let y = 0; y <= H; y += 60) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
  }

  // ── 顶部金色光晕 ──
  const glowGrad = ctx.createRadialGradient(W / 2, 0, 0, W / 2, 0, 420)
  glowGrad.addColorStop(0, 'rgba(196,167,66,0.14)')
  glowGrad.addColorStop(1, 'transparent')
  ctx.fillStyle = glowGrad
  ctx.fillRect(0, 0, W, H * 0.5)

  // ── 顶部金色横线 ──
  const topLine = ctx.createLinearGradient(0, 0, W, 0)
  topLine.addColorStop(0, 'transparent')
  topLine.addColorStop(0.3, '#C4A742')
  topLine.addColorStop(0.7, '#C4A742')
  topLine.addColorStop(1, 'transparent')
  ctx.fillStyle = topLine
  ctx.fillRect(0, 0, W, 2)

  // ── LOGO 区 ──
  const logoX = 60, logoY = 60
  // LOGO 框（正方形描边）
  ctx.strokeStyle = '#C4A742'
  ctx.lineWidth = 2
  ctx.strokeRect(logoX, logoY, 68, 68)
  // 内层细框
  ctx.strokeStyle = 'rgba(196,167,66,0.35)'
  ctx.lineWidth = 1
  ctx.strokeRect(logoX + 6, logoY + 6, 56, 56)
  // 81 文字
  ctx.fillStyle = '#C4A742'
  ctx.font = 'italic 900 30px -apple-system, Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('81', logoX + 34, logoY + 36)

  // 品牌文字
  ctx.fillStyle = '#ffffff'
  ctx.font = '300 30px -apple-system, PingFang SC, sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.letterSpacing = '4px'
  ctx.fillText('北  京', logoX + 84, logoY + 8)

  ctx.fillStyle = '#ffffff'
  ctx.font = '900 30px -apple-system, Arial, sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText('81', logoX + 84 + 88, logoY + 8)

  ctx.fillStyle = '#C4A742'
  ctx.font = '500 16px -apple-system, PingFang SC, sans-serif'
  ctx.letterSpacing = '3px'
  ctx.fillText('老  兵  版', logoX + 84, logoY + 48)

  ctx.letterSpacing = '0px'

  // ── 金色分隔线 ──
  const divGrad = ctx.createLinearGradient(0, 0, W, 0)
  divGrad.addColorStop(0, 'transparent')
  divGrad.addColorStop(0.15, '#C4A742')
  divGrad.addColorStop(0.85, '#C4A742')
  divGrad.addColorStop(1, 'transparent')
  ctx.fillStyle = divGrad
  ctx.globalAlpha = 0.4
  ctx.fillRect(60, 170, W - 120, 1)
  ctx.globalAlpha = 1

  // ── 主标题文案 ──
  ctx.fillStyle = 'rgba(196,167,66,0.6)'
  ctx.font = '400 18px -apple-system, PingFang SC, sans-serif'
  ctx.textAlign = 'center'
  ctx.letterSpacing = '5px'
  ctx.fillText('专 属 推 广 邀 请', W / 2, 210)
  ctx.letterSpacing = '0px'

  ctx.fillStyle = '#ffffff'
  ctx.font = '900 80px -apple-system, PingFang SC, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('扫码了解', W / 2, 310)
  ctx.fillText('更多好价', W / 2, 405)

  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.font = '400 22px -apple-system, PingFang SC, sans-serif'
  ctx.textAlign = 'center'
  ctx.letterSpacing = '2px'
  ctx.fillText('每天精选 · 最值得买的好物', W / 2, 470)
  ctx.letterSpacing = '0px'

  // ── 二维码区 ──
  const qrSize = 210
  const qrX = (W - qrSize) / 2
  const qrY = 530

  // 二维码外框（金色描边）
  ctx.strokeStyle = 'rgba(196,167,66,0.5)'
  ctx.lineWidth = 1.5
  const qrPad = 20
  ctx.strokeRect(qrX - qrPad, qrY - qrPad, qrSize + qrPad * 2, qrSize + qrPad * 2)
  // 二维码内层白底
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(qrX - 2, qrY - 2, qrSize + 4, qrSize + 4)

  // 生成二维码
  const qrCanvas2 = document.createElement('canvas')
  await QRCode.toCanvas(qrCanvas2, promoUrl, {
    width: qrSize,
    margin: 1,
    color: { dark: '#111111', light: '#ffffff' }
  })
  ctx.drawImage(qrCanvas2, qrX, qrY, qrSize, qrSize)

  // 四角金色装饰
  const corners = [
    [qrX - qrPad, qrY - qrPad],
    [qrX + qrSize + qrPad, qrY - qrPad],
    [qrX - qrPad, qrY + qrSize + qrPad],
    [qrX + qrSize + qrPad, qrY + qrSize + qrPad]
  ] as const
  ctx.strokeStyle = '#C4A742'
  ctx.lineWidth = 2
  const cLen = 18
  corners.forEach(([cx, cy], i) => {
    const sx = i % 2 === 0 ? 1 : -1
    const sy = i < 2 ? 1 : -1
    ctx.beginPath(); ctx.moveTo(cx, cy + sy * cLen); ctx.lineTo(cx, cy); ctx.lineTo(cx + sx * cLen, cy); ctx.stroke()
  })

  // ── 渠道号区 ──
  const boxY = qrY + qrSize + qrPad + 30
  roundRect(ctx, 60, boxY, W - 120, 100, 4)
  ctx.fillStyle = 'rgba(196,167,66,0.08)'
  ctx.fill()
  ctx.strokeStyle = 'rgba(196,167,66,0.25)'
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.fillStyle = 'rgba(196,167,66,0.6)'
  ctx.font = '400 13px -apple-system, PingFang SC, sans-serif'
  ctx.textAlign = 'center'
  ctx.letterSpacing = '3px'
  ctx.fillText('个  人  渠  道  号', W / 2, boxY + 28)
  ctx.letterSpacing = '0px'

  ctx.fillStyle = '#C4A742'
  ctx.font = '800 36px monospace'
  ctx.textAlign = 'center'
  ctx.letterSpacing = '4px'
  ctx.fillText(props.user.channelCode, W / 2, boxY + 76)
  ctx.letterSpacing = '0px'

  // ── 销售员信息 ──
  ctx.fillStyle = 'rgba(255,255,255,0.5)'
  ctx.font = '400 20px -apple-system, PingFang SC, sans-serif'
  ctx.textAlign = 'center'
  ctx.letterSpacing = '2px'
  ctx.fillText(`${props.user.name}  ·  ${props.user.store}`, W / 2, boxY + 145)
  ctx.letterSpacing = '0px'

  // ── 底部金线 ──
  const botLine = ctx.createLinearGradient(0, 0, W, 0)
  botLine.addColorStop(0, 'transparent')
  botLine.addColorStop(0.3, '#C4A742')
  botLine.addColorStop(0.7, '#C4A742')
  botLine.addColorStop(1, 'transparent')
  ctx.fillStyle = botLine
  ctx.globalAlpha = 0.35
  ctx.fillRect(60, H - 70, W - 120, 1)
  ctx.globalAlpha = 1

  ctx.fillStyle = 'rgba(255,255,255,0.2)'
  ctx.font = '400 15px -apple-system, PingFang SC, sans-serif'
  ctx.textAlign = 'center'
  ctx.letterSpacing = '2px'
  ctx.fillText('© 北京81 · 内容分发系统', W / 2, H - 36)

  generating.value = false
}

function downloadPoster() {
  const canvas = posterCanvas.value
  if (!canvas) return
  const link = document.createElement('a')
  link.download = `推广海报_${props.user.name}_${props.user.channelCode}.png`
  link.href = canvas.toDataURL('image/png')
  link.click()
}
</script>

<template>
  <div class="poster-panel">
    <div class="panel-header">
      <div class="panel-eyebrow">MARKETING POSTER</div>
      <div class="panel-title">推广海报</div>
      <div class="panel-sub">内含专属二维码 · 一键下载分享</div>
    </div>

    <div class="poster-wrap">
      <div v-if="generating" class="generating-mask">
        <div class="spinner" />
        <span>生成中...</span>
      </div>
      <canvas ref="posterCanvas" class="poster-canvas" :style="{ opacity: generating ? 0 : 1 }" />
    </div>

    <button class="btn btn-primary download-btn" @click="downloadPoster" :disabled="generating">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      下载海报
    </button>
    <div class="tip-text">海报已包含您的专属渠道号，可直接分享</div>
  </div>
</template>

<style scoped>
.poster-panel {
  width: 100%; max-width: 360px;
  display: flex; flex-direction: column; align-items: center; gap: var(--space-lg);
}
.panel-header { text-align: center; }
.panel-eyebrow { font-size: 10px; color: var(--color-gold); letter-spacing: 3px; margin-bottom: 6px; opacity: 0.7; }
.panel-title { font-size: 22px; font-weight: 700; color: var(--color-text-primary); letter-spacing: 2px; }
.panel-sub { font-size: 12px; color: var(--color-text-tertiary); margin-top: 4px; letter-spacing: 1px; }

.poster-wrap {
  width: 100%; position: relative;
  border-radius: var(--radius-sm);
  overflow: hidden;
  box-shadow: var(--shadow-lg), 0 0 30px rgba(196,167,66,0.08);
}
.poster-canvas { width: 100%; height: auto; display: block; transition: opacity 0.3s; }

.generating-mask {
  position: absolute; inset: 0;
  background: var(--color-surface);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: var(--space-md); font-size: 13px; color: var(--color-text-tertiary); letter-spacing: 1px;
}
.spinner {
  width: 22px; height: 22px;
  border: 2px solid var(--color-border);
  border-top-color: var(--color-gold);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.download-btn { width: 100%; height: 48px; font-size: 14px; letter-spacing: 2px; }
.tip-text { font-size: 11px; color: var(--color-text-tertiary); text-align: center; letter-spacing: 0.5px; }
</style>
