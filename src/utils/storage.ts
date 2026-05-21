import type { User } from '@/types'

const USERS_KEY = 'bj81_users'
const SESSION_KEY = 'bj81_session'

export function getAllUsers(): User[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveUser(user: User): void {
  const users = getAllUsers()
  const idx = users.findIndex(u => u.id === user.id)
  if (idx >= 0) {
    users[idx] = user
  } else {
    users.push(user)
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function findUserByPhone(phone: string): User | undefined {
  return getAllUsers().find(u => {
    if (u.role === 'personal') return u.phone === phone
    if (u.role === 'company') return u.contactPhone === phone
    return false
  })
}

export function setSession(user: User): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user))
}

export function getSession(): User | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY)
}
