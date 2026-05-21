<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { saveUser, findUserByPhone } from '@/utils/storage'
import { genCompanyChannelCode, genId } from '@/utils/codeGen'
import type { CompanyUser } from '@/types'

const router = useRouter()
const userStore = useUserStore()

const form = ref({ companyName: '', creditCode: '', contactName: '', contactPhone: '', address: '', password: '', confirmPassword: '' })
const error = ref('')
const loading = ref(false)

async function handleRegister() {
  error.value = ''
  const f = form.value
  if (!f.companyName || !f.creditCode || !f.contactName || !f.contactPhone || !f.address || !f.password || !f.confirmPassword) {
    error.value = '请完整填写所有信息'; return
  }
  if (f.password.length < 6) { error.value = '密码至少6位'; return }
  if (f.password !== f.confirmPassword) { error.value = '两次密码不一致'; return }
  if (findUserByPhone(f.contactPhone)) { error.value = '该手机号已注册'; return }
  loading.value = true
  await new Promise(r => setTimeout(r, 300))
  const user: CompanyUser = {
    id: genId(), role: 'company', companyName: f.companyName, creditCode: f.creditCode,
    contactName: f.contactName, contactPhone: f.contactPhone, password: f.password,
    address: f.address, channelCode: genCompanyChannelCode(), createdAt: Date.now()
  }
  saveUser(user)
  userStore.login(user)
  router.push('/dashboard')
}
</script>

<template>
  <div class="form">
    <div class="form-group">
      <label class="label">公司名称</label>
      <input v-model="form.companyName" class="input" placeholder="请输入公司全称" />
    </div>
    <div class="form-group">
      <label class="label">统一社会信用代码</label>
      <input v-model="form.creditCode" class="input" placeholder="18位信用代码" maxlength="18" />
    </div>
    <div class="row-2">
      <div class="form-group">
        <label class="label">联系人</label>
        <input v-model="form.contactName" class="input" placeholder="姓名" />
      </div>
      <div class="form-group">
        <label class="label">联系电话</label>
        <input v-model="form.contactPhone" class="input" type="tel" placeholder="手机号" maxlength="11" />
      </div>
    </div>
    <div class="form-group">
      <label class="label">公司地址</label>
      <input v-model="form.address" class="input" placeholder="请输入公司地址" />
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
  font-size: 12px; color: var(--color-danger);
  padding: 10px var(--space-md); background: var(--color-danger-bg);
  border-radius: var(--radius-sm); border: 1px solid rgba(224,82,82,0.25);
}
</style>
