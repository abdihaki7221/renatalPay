// import { currency } from "@common/constants"

// export type StatType = {
//   title: string
//   icon: string
//   stat: string
//   change: string
//   variant: string
// }


// export const statData: StatType[] = [
//   {
//     title: 'Transactions',
//     icon: 'solar:dollar-line-duotone',
//     stat: '$1,364',
//     change: '2.3%',
//     variant: 'success',
//   },
//   {
//     title: 'Houses',
//     icon: 'material-symbols-light:house-outline',
//     stat: '9, 526',
//     change: '8.1%',
//     variant: 'success',
//   },
//   {
//     title: 'Tenants',
//     icon: 'carbon:person',
//     stat: '976',
//     change: '0.3%',
//     variant: 'danger',
//   },
//   {
//     title: 'Users',
//     icon: 'bi:people',
//     stat: `${currency}123.6k`,
//     change: '10.6%',
//     variant: 'danger',
//   },
// ]

// type BrowserType = {
//   name: string
//   percentage: number
//   amount: number
// }

// type CountryType = {
//   date: string
//   transactionId: string
//   amount: number
//   phoneNumber: string
//   name:String
//   tenantId:String
  
// }

// export const browserList: BrowserType[] = [
//   {
//     name: 'Hyat Golden',
//     percentage: 62.5,
//     amount: 5.06,
//   },
//   {
//     name: 'Decale Palace Hotel',
//     percentage: 12.3,
//     amount: 1.5,
//   },
//   {
//     name: 'Seven start hotel',
//     percentage: 9.86,
//     amount: 1.03,
//   },
//   {
//     name: 'Urban Masai',
//     percentage: 3.15,
//     amount: 0.3,
//   },
  
// ]

// export const countryList: CountryType[] = [
//   {
//     transactionId: 'S902003003',
//     name: "Abdihakim issa",
//     amount: 35300,
//     tenantId: 'TEN97382',
//     date: "09-08-2024",
//     phoneNumber: "+254789929292"
//   },
//   {
//     name: 'Iftan Somal',
//     phoneNumber: '254725699181',
//     amount: 35700,
//     tenantId: 'TEN89929',
//     date: "13-08-2024",
//     transactionId: "S832020020"
//   },
//   {
//     transactionId: 'P839993993',
//     phoneNumber: "+254725698833",
//     amount: 35000,
//     date: "13-8-2024",
//     name: "Yusuf Haji",
//     tenantId: "TEN8993"
//   },
//   {
//     transactionId: 'U839939993',
//     phoneNumber: '+254728288288',
//     amount: 35300,
//     date: "12-9-2023",
//     name: "Mohamed issa",
//     tenantId: "TEN82992"
//   },
// ]

// export const pageList = [
//   {
//     path: 'rasket/dashboard.html',
//     views: 4265,
//     time: '09m:45s',
//     rate: '20.4',
//     rateColor: 'danger',
//   },
//   {
//     path: 'rasket/chat.html',
//     views: 2584,
//     time: '05m:02s',
//     rate: '12.25',
//     rateColor: 'warning',
//   },
//   {
//     path: 'rasket/auth-login.html',
//     views: 3369,
//     time: '04m:25s',
//     rate: '5.2',
//     rateColor: 'success',
//   },
//   {
//     path: 'rasket/email.html',
//     views: 985,
//     time: '02m:03s',
//     rate: '64.2',
//     rateColor: 'danger',
//   },
//   {
//     path: 'rasket/social.html',
//     views: 653,
//     time: '15m:56s',
//     rate: '2.4',
//     rateColor: 'success',
//   },
// ]


export type DataTableItemsType = {
  id:number
  date: string | number | Date
  transactionId: string
  amount: number
  phoneNumber: string
  name:string
  tenantId:string
  payment:string
  
}

export const DataTableItems: DataTableItemsType[] = [
  {
    transactionId: 'S902003003',
    name: 'Abdihakim issa',
    amount: 35300,
    tenantId: 'TEN97382',
    date: '09-08-2024',
    phoneNumber: '+254789929292',
    id: 1,
    payment: "MPESA"
  },
      {
        name: 'Iftan Somal',
        phoneNumber: '254725699181',
        amount: 35700,
        tenantId: 'TEN89929',
        date: '11-08-2024',
        transactionId: 'S832020020',
        id: 2,
        payment: "CARD"
      },
      {
        transactionId: 'P839993993',
        phoneNumber: '+254725698833',
        amount: 35000,
        date: '07-8-2024',
        name: 'Yusuf Haji',
        tenantId: "TEN8993",
        id: 3,
        payment: "MPESA"
      },
      {
        transactionId: 'U839939993',
        phoneNumber: '+254728288288',
        amount: 35300,
        date: '12-9-2023',
        name: 'Mohamed issa',
        tenantId: 'TEN82992',
        id: 4,
        payment: "MPESA"
      },
]

export const paginateData: DataTableItemsType[] = [
  {
    transactionId: 'S902003003',
    name: 'Abdihakim issa',
    amount: 35300,
    tenantId: 'TEN97382',
    date: '09-08-2024',
    phoneNumber: "+254789929292",
    id: 1,
    payment: "CARD"
  },
      {
        name: 'Iftan Somal',
        phoneNumber: '254725699181',
        amount: 35700,
        tenantId: 'TEN89929',
        date: '01-08-2024',
        transactionId: 'S832020020',
        id: 2,
        payment: "MPESA"
      },
      {
        transactionId: 'P839993993',
        phoneNumber: '+254725698833',
        amount: 35000,
        date: '3-8-2024',
        name: 'Yusuf Haji',
        tenantId: 'TEN8993',
        id: 3,
        payment: "CARD"
      },
      {
        transactionId: 'U839939993',
        phoneNumber: '+254728288288',
        amount: 35300,
        date: '06-9-2023',
        name: 'Mohamed issa',
        tenantId: 'TEN82992',
        id: 4,
        payment: "MPESA"
      },
]
