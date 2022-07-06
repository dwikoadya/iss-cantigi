/**
 * used in:
 * - pages/index.tsx
 * - utils/landing-page-api.ts
 */

export type Genders = {
  male: number
  female: number
}

export type Banners = {
  active: boolean
  animation: string
  duration: string
  id: string
  img_url: string
}

export type Profile = {
  address: string
  slogan: string
  pic_phone: string
}
