<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { findUserByPhone } from '@/utils/storage'
import type { UserRole } from '@/types'

const props = defineProps<{ role: UserRole }>()
const router = useRouter()
const userStore = useUserStore()

const phone = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function handleLogin() {
  error.value = ''
  if (!phone.value || !password.value) { error.value = '请填写手机号和密码'; return }
  loading.value = true
  await new Promise(r => setTimeout(r, 300))
  const user = findUserByPhone(phone.value)
  if (!user || user.password !== password.value) {
    error.value = '手机号或密码错误'; loading.value = false; return
  }
  if (user.role !== props.role) {
    error.value = `该账号为${user.role === 'personal' ? '个人' : '公司'}账号，请切换身份`
    loading.value = false; return
  }
  userStore.login(user)
  router.push('/dashboard')
}
</script>

<template>
  <div class="form">
    <div class="form-group">
      <label class="label">手机号</label>
      <input v-model="phone" class="input" type="tel" placeholder="请输入手机号" maxlength="11" @keyup.enter="handleLogin" />
    </div>
    <div class="form-group">
      <label class="label">密码</label>
      <input v-model="password" class="input" type="password" placeholder="请输入密码" @keyup.enter="handleLogin" />
    </div>
    <div v-if="error" class="error-msg">{{ error }}</div>
    <button class="btn btn-primary submit-btn" :disabled="loading" @click="handleLogin">
      {{ loading ? '验证中...' : '进入系统' }}
    </button>
  </div>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: var(--space-md); }
.form-group { display: flex; flex-direction: column; }
.submit-btn { width: 100%; height: 48px; font-size: 15px; margin-top: var(--space-sm); letter-spacing: 2px; }
.error-msg {
  font-size: 12px;
  color: var(--color-danger);
  padding: 10px var(--space-md);
  background: var(--color-danger-bg);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(224, 82, 82, 0.25);
  letter-spacing: 0.5px;
}
</style>
