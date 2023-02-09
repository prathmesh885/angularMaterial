// export interface Icourse {
//     id: number,
//     description: string,
//     longDescription: string,
//     iconUrl: string,
//     category: string,
//     seqNo: number,
//     url: string,
//     price: number,
//     lessonsCount?: number,
//     promo?: boolean

// }

export interface Icourse {
    id: number,
    description: string,
    longDescription: string,
    iconUrl: string,
    courseListIcon?: string
    lessonsCount?: number,
    category: string,
    seqNo: number,
    url: string,
    price: number
    promo?: boolean
  }