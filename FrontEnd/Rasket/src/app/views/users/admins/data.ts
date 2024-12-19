
export type DataTableItemsType = {
  id:number
  username: string
  phoneNumber: string
  email: string
  status:string
  ipAddress:string
  
}

export const DataTableItems: DataTableItemsType[] = [
  {
    username: 'aekim',
    email: 'aekim@gmail.com',
    status: 'active',
    phoneNumber: '+254789929292',
    id: 1,
    ipAddress: "10.20.20.34"
  },
  {
    username: 'aminzoazure',
    email: 'aminzoazure@gmail.com',
    status: 'pending',
    phoneNumber: '+2547299537292',
    id: 2,
    ipAddress: "192.168.2.1"
  },
  {
    username: 'mohaze',
    email: 'mohaze@gmail.com',
    status: 'disabled',
    phoneNumber: '+254719953292',
    id: 2,
    ipAddress: "192.168.2.3"
  },
  {
    username: 'issandro',
    email: 'issandro@gmail.com',
    status: 'active',
    phoneNumber: '+2547276753292',
    id: 2,
    ipAddress: "172.168.2.3"
  },
]

export const paginateData: DataTableItemsType[] = [
  {
    username: 'aekim',
    email: 'aekim@gmail.com',
    status: 'active',
    phoneNumber: '+254789929292',
    id: 1,
    ipAddress: "10.20.20.34"
  },
  {
    username: 'aminzoazure',
    email: 'aminzoazure@gmail.com',
    status: 'pending',
    phoneNumber: '+2547299537292',
    id: 2,
    ipAddress: "192.168.2.1"
  },
  {
    username: 'mohaze',
    email: 'mohaze@gmail.com',
    status: 'disabled',
    phoneNumber: '+254719953292',
    id: 2,
    ipAddress: "192.168.2.3"
  },
  {
    username: 'issandro',
    email: 'issandro@gmail.com',
    status: 'active',
    phoneNumber: '+2547276753292',
    id: 2,
    ipAddress: "172.168.2.3"
  },
]
