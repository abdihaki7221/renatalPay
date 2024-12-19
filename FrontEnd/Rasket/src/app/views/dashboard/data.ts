import { currency } from "@common/constants"

export type StatType = {
  title: string
  icon: string
  stat: string
  change: string
  variant: string
}


export const statData: StatType[] = [
  {
    title: 'Transactions',
    icon: 'solar:dollar-line-duotone',
    stat: '10.5k',
    change: '2.3%',
    variant: 'success',
  },
  {
    title: 'Houses',
    icon: 'material-symbols-light:house-outline',
    stat: '9, 526',
    change: '8.1%',
    variant: 'success',
  },
  {
    title: 'Tenants',
    icon: 'carbon:person',
    stat: '976',
    change: '0.3%',
    variant: 'danger',
  },
  {
    title: 'Users',
    icon: 'bi:people',
    stat: `123.6k`,
    change: '10.6%',
    variant: 'danger',
  },
]

type BrowserType = {
  name: string
  percentage: number
  amount: number
}

type CountryType = {
  icon: string
  name: string
  progressValue: number
  progressAmount: number
  progressType: string
}

export const browserList: BrowserType[] = [
  {
    name: 'Hyat Golden',
    percentage: 62.5,
    amount: 5.06,
  },
  {
    name: 'Decale Palace Hotel',
    percentage: 12.3,
    amount: 1.5,
  },
  {
    name: 'Seven start hotel',
    percentage: 9.86,
    amount: 1.03,
  },
  {
    name: 'Urban Masai',
    percentage: 3.15,
    amount: 0.3,
  },
  
]

export const countryList: CountryType[] = [
  {
    icon: 'circle-flags:us',
    name: 'United States',
    progressValue: 82.5,
    progressAmount: 659,
    progressType: 'secondary',
  },
  {
    icon: 'circle-flags:ru',
    name: 'Russia',
    progressValue: 70.5,
    progressAmount: 485,
    progressType: 'info',
  },
  {
    icon: 'circle-flags:cn',
    name: 'China',
    progressValue: 65.8,
    progressAmount: 355,
    progressType: 'warning',
  },
  {
    icon: 'circle-flags:ca',
    name: 'Canada',
    progressValue: 55.8,
    progressAmount: 204,
    progressType: 'success',
  },
]

export const pageList = [
  {
    path: 'rasket/dashboard.html',
    views: 4265,
    time: '09m:45s',
    rate: '20.4',
    rateColor: 'danger',
  },
  {
    path: 'rasket/chat.html',
    views: 2584,
    time: '05m:02s',
    rate: '12.25',
    rateColor: 'warning',
  },
  {
    path: 'rasket/auth-login.html',
    views: 3369,
    time: '04m:25s',
    rate: '5.2',
    rateColor: 'success',
  },
  {
    path: 'rasket/email.html',
    views: 985,
    time: '02m:03s',
    rate: '64.2',
    rateColor: 'danger',
  },
  {
    path: 'rasket/social.html',
    views: 653,
    time: '15m:56s',
    rate: '2.4',
    rateColor: 'success',
  },
]