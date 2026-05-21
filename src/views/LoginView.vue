<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import RegisterPersonal from '@/components/auth/RegisterPersonal.vue'
import RegisterCompany from '@/components/auth/RegisterCompany.vue'

type Tab = 'login' | 'register'
type Role = 'personal' | 'company'

const tab = ref<Tab>('login')
const role = ref<Role>('personal')
</script>

<template>
  <div class="login-page">
    <!-- 背景装饰 -->
    <div class="bg-decoration">
      <div class="bg-line bg-line-1" />
      <div class="bg-line bg-line-2" />
      <div class="bg-glow" />
    </div>

    <!-- 顶部品牌 -->
    <div class="brand">
      <div class="brand-logo">
        <span class="brand-logo-text">81</span>
      </div>
      <div class="brand-text">
        <div class="brand-name">北京 <strong>81</strong></div>
        <div class="brand-sub">老兵版 · 内容分发系统</div>
      </div>
    </div>

    <!-- 卡片主体 -->
    <div class="auth-card card">
      <!-- Tab -->
      <div class="tabs">
        <button class="tab-btn" :class="{ active: tab === 'login' }" @click="tab = 'login'">
          登录
        </button>
        <button class="tab-btn" :class="{ active: tab === 'register' }" @click="tab = 'register'">
          注册
        </button>
        <div class="tab-indicator" :class="tab" />
      </div>

      <!-- 身份切换 -->
      <div class="role-switch">
        <button class="role-btn" :class="{ active: role === 'personal' }" @click="role = 'personal'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
          个人
        </button>
        <button class="role-btn" :class="{ active: role === 'company' }" @click="role = 'company'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
          </svg>
          公司
        </button>
      </div>

      <!-- 表单 -->
      <div class="form-area">
        <LoginForm v-if="tab === 'login'" :role="role" />
        <RegisterPersonal v-else-if="tab === 'register' && role === 'personal'" />
        <RegisterCompany v-else-if="tab === 'register' && role === 'company'" />
      </div>
    </div>

    <!-- 底部版权 -->
    <div class="footer">© 2025 北京81 · 仅限内部使用</div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg);
  background: var(--color-bg);
  position: relative;
  overflow: hidden;
}

/* 背景装饰 */
.bg-decoration {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.bg-line {
  position: absolute;
  height: 1px;
  width: 60%;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
  opacity: 0.12;
}
.bg-line-1 { top: 30%; left: -10%; transform: rotate(-8deg); }
.bg-line-2 { top: 65%; left: 30%; transform: rotate(-8deg); }
.bg-glow {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(196,167,66,0.06) 0%, transparent 70%);
}

/* 品牌区 */
.brand {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
  position: relative;
  z-index: 1;
}

.brand-logo {
  width: 56px;
  height: 56px;
  border: 2px solid var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.brand-logo::before {
  content: '';
  position: absolute;
  inset: 3px;
  border: 1px solid rgba(196,167,66,0.3);
}
.brand-logo-text {
  font-size: 22px;
  font-weight: 900;
  color: var(--color-gold);
  letter-spacing: -1px;
  font-style: italic;
}

.brand-name {
  font-size: 22px;
  font-weight: 400;
  color: var(--color-text-primary);
  letter-spacing: 3px;
  text-transform: uppercase;
}
.brand-name strong {
  font-weight: 900;
}
.brand-sub {
  font-size: 11px;
  color: var(--color-gold);
  letter-spacing: 2px;
  margin-top: 3px;
  opacity: 0.8;
}

/* 卡片 */
.auth-card {
  width: 100%;
  max-width: 400px;
  padding: var(--space-xl) var(--space-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  position: relative;
  z-index: 1;
  box-shadow: var(--shadow-lg), 0 0 60px rgba(196,167,66,0.04);
}
/* 卡片金色顶边 */
.auth-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}

/* Tabs */
.tabs {
  display: flex;
  position: relative;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--space-lg);
}
.tab-btn {
  flex: 1;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-tertiary);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
}
.tab-btn.active { color: var(--color-text-primary); }

.tab-indicator {
  position: absolute;
  bottom: -1px;
  height: 2px;
  width: 50%;
  background: var(--color-gold);
  transition: left 0.25s cubic-bezier(.4,0,.2,1);
  box-shadow: 0 0 8px rgba(196,167,66,0.6);
}
.tab-indicator.login    { left: 0; }
.tab-indicator.register { left: 50%; }

/* 身份切换 */
.role-switch {
  display: flex;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
}
.role-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 38px;
  border-radius: var(--radius-sm);
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-tertiary);
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.5px;
}
.role-btn.active {
  background: var(--color-gold-dim);
  color: var(--color-gold);
  border-color: rgba(196,167,66,0.4);
}

/* 底部 */
.footer {
  margin-top: var(--space-xl);
  font-size: 11px;
  color: var(--color-text-tertiary);
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
}
</style>
