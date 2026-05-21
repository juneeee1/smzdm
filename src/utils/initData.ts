import type { PersonalUser, CompanyUser } from '@/types'
import { getAllUsers, saveUser } from './storage'

const INIT_KEY = 'bj81_initialized'

export function initDefaultData() {
  // 已初始化过则跳过
  if (localStorage.getItem(INIT_KEY)) return

  const personalUsers: PersonalUser[] = [
    {
      id: 'init-p-001',
      role: 'personal',
      name: '张伟',
      phone: '13800000001',
      password: '123456',
      store: '朝阳旗舰店',
      employeeId: 'EMP001',
      channelCode: 'P001WEI',
      createdAt: Date.now()
    },
    {
      id: 'init-p-002',
      role: 'personal',
      name: '李娜',
      phone: '13800000002',
      password: '123456',
      store: '海淀体验店',
      employeeId: 'EMP002',
      channelCode: 'P002NAA',
      createdAt: Date.now()
    },
    {
      id: 'init-p-003',
      role: 'personal',
      name: '王强',
      phone: '13800000003',
      password: '123456',
      store: '西城直营店',
      employeeId: 'EMP003',
      channelCode: 'P003QNG',
      createdAt: Date.now()
    }
  ]

  const companyUsers: CompanyUser[] = [
    {
      id: 'init-c-001',
      role: 'company',
      companyName: '北京智慧零售科技有限公司',
      creditCode: '91110105MA0123456X',
      contactName: '赵经理',
      contactPhone: '13900000001',
      password: '123456',
      address: '北京市朝阳区建国路88号',
      channelCode: 'C001ZHI',
      createdAt: Date.now()
    },
    {
      id: 'init-c-002',
      role: 'company',
      companyName: '老兵车行（北京）有限公司',
      creditCode: '91110108MA0234567Y',
      contactName: '刘总',
      contactPhone: '13900000002',
      password: '123456',
      address: '北京市海淀区中关村大街1号',
      channelCode: 'C002LAO',
      createdAt: Date.now()
    }
  ]

  // 写入（不覆盖已有用户）
  const existing = getAllUsers()
  const existingPhones = new Set(existing.map(u =>
    u.role === 'personal' ? u.phone : u.contactPhone
  ))

  for (const u of [...personalUsers, ...companyUsers]) {
    const phone = u.role === 'personal' ? u.phone : u.contactPhone
    if (!existingPhones.has(phone)) saveUser(u)
  }

  localStorage.setItem(INIT_KEY, '1')
}
