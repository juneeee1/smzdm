// 生成个人渠道号：P + 时间戳后6位 + 随机3位大写字母
export function genPersonalChannelCode(): string {
  const ts = String(Date.now()).slice(-6)
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
  const rand = Array.from({ length: 3 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('')
  return `P${ts}${rand}`
}

// 生成公司渠道号：C + 时间戳后6位
export function genCompanyChannelCode(): string {
  const ts = String(Date.now()).slice(-6)
  return `C${ts}`
}

// 生成唯一 ID
export function genId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

// 生成推广链接
export function genPromoUrl(channelCode: string): string {
  return `https://www.smzdm.com?channel=${channelCode}`
}
