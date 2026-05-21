<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import PersonalDashboard from '@/components/dashboard/PersonalDashboard.vue'
import CompanyDashboard from '@/components/dashboard/CompanyDashboard.vue'

const userStore = useUserStore()
const router = useRouter()

function handleLogout() {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="dashboard-page">
    <header class="top-nav">
      <div class="nav-brand">
        <div class="nav-mark">
          <span>81</span>
        </div>
        <div class="nav-titles">
          <span class="nav-title">北京 <strong>81</strong></span>
          <span class="nav-sub">内容分发系统</span>
        </div>
      </div>
      <button class="logout-btn" @click="handleLogout">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        退出
      </button>
    </header>

    <main class="main-content">
      <PersonalDashboard v-if="userStore.isPersonal" />
      <CompanyDashboard v-else-if="userStore.isCompany" />
    </main>
  </div>
</template>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-lg);
  height: 56px;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}
/* 顶部金线 */
.top-nav::after {
  content: '';
  position: absolute;
  bottom: -1px; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(196,167,66,0.4), transparent);
}

.nav-brand { display: flex; align-items: center; gap: var(--space-sm); }

.nav-mark {
  width: 36px;
  height: 36px;
  border: 1.5px solid var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-mark span {
  font-size: 14px;
  font-weight: 900;
  color: var(--color-gold);
  font-style: italic;
}

.nav-titles { display: flex; flex-direction: column; gap: 1px; }
.nav-title {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  color: var(--color-text-primary);
}
.nav-title strong { font-weight: 900; }
.nav-sub {
  font-size: 10px;
  color: var(--color-text-tertiary);
  letter-spacing: 1.5px;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--color-text-tertiary);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.5px;
}
.logout-btn:hover {
  color: var(--color-gold);
  border-color: rgba(196,167,66,0.3);
}

.main-content { flex: 1; overflow: hidden; }
</style>
