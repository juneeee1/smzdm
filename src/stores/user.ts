import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, PersonalUser, CompanyUser } from '@/types'
import { getSession, setSession, clearSession } from '@/utils/storage'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref<User | null>(getSession())

  const isLoggedIn = computed(() => currentUser.value !== null)
  const isPersonal = computed(() => currentUser.value?.role === 'personal')
  const isCompany = computed(() => currentUser.value?.role === 'company')

  const personal = computed(() =>
    currentUser.value?.role === 'personal' ? (currentUser.value as PersonalUser) : null
  )
  const company = computed(() =>
    currentUser.value?.role === 'company' ? (currentUser.value as CompanyUser) : null
  )

  function login(user: User) {
    currentUser.value = user
    setSession(user)
  }

  function logout() {
    currentUser.value = null
    clearSession()
  }

  return { currentUser, isLoggedIn, isPersonal, isCompany, personal, company, login, logout }
})
