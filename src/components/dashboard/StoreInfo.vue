<script setup lang="ts">
import type { PersonalUser } from '@/types'
defineProps<{ user: PersonalUser }>()
function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })
}
</script>

<template>
  <div class="store-info">
    <div class="avatar">
      <span>{{ user.name.slice(0, 1) }}</span>
    </div>
    <div class="info-name">{{ user.name }}</div>
    <div class="info-badge">{{ user.employeeId }}</div>
    <div class="detail-list">
      <div class="detail-item">
        <span class="detail-key">门店</span>
        <span class="detail-val">{{ user.store }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-key">手机</span>
        <span class="detail-val">{{ user.phone }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-key">注册</span>
        <span class="detail-val">{{ formatDate(user.createdAt) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.store-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-md) 0 var(--space-lg);
  border-bottom: 1px solid var(--color-border);
}

.avatar {
  width: 52px;
  height: 52px;
  border: 1.5px solid var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-sm);
  position: relative;
}
.avatar::before {
  content: '';
  position: absolute;
  inset: 3px;
  border: 1px solid rgba(196,167,66,0.2);
}
.avatar span {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-gold);
  position: relative;
}

.info-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 6px;
  letter-spacing: 1px;
}

.info-badge {
  display: inline-block;
  font-size: 10px;
  color: var(--color-gold);
  background: var(--color-gold-dim);
  border: 1px solid rgba(196,167,66,0.25);
  border-radius: 2px;
  padding: 2px 10px;
  margin-bottom: var(--space-md);
  letter-spacing: 1.5px;
}

.detail-list { width: 100%; display: flex; flex-direction: column; gap: 8px; }
.detail-item { display: flex; justify-content: space-between; align-items: center; font-size: 11px; }
.detail-key { color: var(--color-text-tertiary); }
.detail-val { color: var(--color-text-secondary); font-weight: 500; max-width: 110px; text-align: right; word-break: break-all; }

@media (max-width: 600px) {
  .store-info {
    flex-direction: row; text-align: left; padding: 0;
    border-bottom: none; gap: var(--space-md); flex-wrap: wrap;
  }
  .avatar { width: 40px; height: 40px; margin-bottom: 0; }
  .avatar span { font-size: 16px; }
  .info-name { margin-bottom: 0; }
  .info-badge { margin-bottom: 0; }
  .detail-list { display: none; }
}
</style>
