<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import StoreInfo from './StoreInfo.vue'
import QRCodePanel from './QRCodePanel.vue'
import PosterPanel from './PosterPanel.vue'

type TabKey = 'qrcode' | 'poster'

const userStore = useUserStore()
const activeTab = ref<TabKey>('qrcode')

const tabs: { key: TabKey; label: string }[] = [
  { key: 'qrcode', label: '渠道二维码申领' },
  { key: 'poster', label: '营销内容申领' }
]
</script>

<template>
  <div class="personal-dashboard">
    <!-- 左侧菜单 -->
    <aside class="sidebar">
      <StoreInfo :user="userStore.personal!" />
      <nav class="menu">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="menu-item"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          <span class="menu-dot" />
          {{ tab.label }}
        </button>
      </nav>
    </aside>

    <!-- 右侧内容 -->
    <main class="content-area">
      <QRCodePanel v-if="activeTab === 'qrcode'" :user="userStore.personal!" />
      <PosterPanel v-else-if="activeTab === 'poster'" :user="userStore.personal!" />
    </main>
  </div>
</template>

<style scoped>
.personal-dashboard {
  display: flex;
  height: calc(100vh - 56px);
}

.sidebar {
  width: 220px;
  flex-shrink: 0;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  padding: var(--space-lg) var(--space-md);
  gap: var(--space-lg);
  overflow-y: auto;
}

.menu { display: flex; flex-direction: column; gap: 4px; }

.menu-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  width: 100%;
  padding: 11px var(--space-md);
  border-radius: var(--radius-sm);
  font-size: 13px;
  color: var(--color-text-secondary);
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.15s;
  text-align: left;
  letter-spacing: 0.3px;
}
.menu-item:hover {
  background: var(--color-surface-2);
  color: var(--color-text-primary);
}
.menu-item.active {
  background: var(--color-gold-dim);
  color: var(--color-gold);
  border-color: rgba(196,167,66,0.2);
}

.menu-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.6;
  flex-shrink: 0;
}

.content-area {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-bg);
}

@media (max-width: 600px) {
  .personal-dashboard { flex-direction: column; height: auto; min-height: calc(100vh - 56px); }
  .sidebar {
    width: 100%; border-right: none; border-bottom: 1px solid var(--color-border);
    padding: var(--space-md); gap: var(--space-md);
  }
  .menu { flex-direction: row; }
  .menu-item { flex: 1; justify-content: center; font-size: 12px; padding: 8px var(--space-sm); gap: 4px; }
  .content-area { padding: var(--space-lg) var(--space-md); }
}
</style>
