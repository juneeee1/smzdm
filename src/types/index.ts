// 用户身份
export type UserRole = 'personal' | 'company'

// 个人用户
export interface PersonalUser {
  id: string
  role: 'personal'
  name: string
  phone: string
  password: string
  store: string
  employeeId: string
  channelCode: string
  createdAt: number
}

// 公司用户
export interface CompanyUser {
  id: string
  role: 'company'
  companyName: string
  creditCode: string
  contactName: string
  contactPhone: string
  password: string
  address: string
  channelCode: string
  createdAt: number
}

export type User = PersonalUser | CompanyUser
