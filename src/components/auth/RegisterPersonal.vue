<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { saveUser, findUserByPhone } from '@/utils/storage'
import { genPersonalChannelCode, genId } from '@/utils/codeGen'
import type { PersonalUser } from '@/types'

const router = useRouter()
const userStore = useUserStore()

const form = ref({ name: '', phone: '', employeeId: '', store: '', password: '', confirmPassword: '' })
const error = ref('')
const loading = ref(false)

async function handleRegister() {
  error.value = ''
  const f = form.value
  if (!f.name || !f.phone || !f.employeeId || !f.store || !f.password || !f.confirmPassword) {
    error.value = '请完整填写所有信息'; return
  }
  if (f.phone.length !== 11 || !/^\d+$/.test(f.phone)) { error.value = '手机号格式不正确'; return }
  if (f.password.length < 6) { error.value = '密码至少6位'; return }
  if (f.password !== f.confirmPassword) { error.value = '两次密码不一致'; return }
  if (findUserByPhone(f.phone)) { error.value = '该手机号已注册'; return }
  loading.value = true
  await new Promise(r => setTimeout(r, 300))
  const user: PersonalUser = {
    id: genId(), role: 'personal', name: f.name, phone: f.phone, password: f.password,
    store: f.store, employeeId: f.employeeId, channelCode: genPersonalChannelCode(), createdAt: Date.now()
  }
  saveUser(user)
  userStore.login(user)
  router.push('/dashboard')
}
</script>

<template>
  <div class="form">
    <div class="row-2">
      <div class="form-group">
        <label class="label">姓名</label>
        <input v-model="form.name" class="input" placeholder="姓名" />
      </div>
      <div class="form-group">
        <label class="label">工号</label>
        <input v-model="form.employeeId" class="input" placeholder="工号" />
      </div>
    </div>
    <div class="form-group">
      <label class="label">手机号</label>
      <input v-model="form.phone" class="input" type="tel" placeholder="请输入手机号" maxlength="11" />
    </div>
    <div class="form-group">
      <label class="label">所属门店</label>
      <input v-model="form.store" class="input" placeholder="请输入所属门店名称" />
    </div>
    <div class="form-group">
      <label class="label">密码</label>
      <input v-model="form.password" class="input" type="password" placeholder="至少6位" />
    </div>
    <div class="form-group">
      <label class="label">确认密码</label>
      <input v-model="form.confirmPassword" class="input" type="password" placeholder="再次输入密码" />
    </div>
    <div v-if="error" class="error-msg">{{ error }}</div>
    <button class="btn btn-primary submit-btn" :disabled="loading" @click="handleRegister">
      {{ loading ? '注册中...' : '立即注册' }}
    </button>
  </div>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: var(--space-md); }
.form-group { display: flex; flex-direction: column; }
.row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-sm); }
.submit-btn { width: 100%; height: 48px; font-size: 15px; margin-top: var(--space-sm); letter-spacing: 2px; }
.error-msg {
  font-size: 12px;
  color: var(--color-danger);
  padding: 10px var(--space-md);
  background: var(--color-danger-bg);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(224, 82, 82, 0.25);
}
</style>
