export type MyWorkCardType = {
  name: string
  projectDate: string
  images: string[]
  technologies: string[]
  description: string
  sourceCode?: string
  webLink?: string
}

export type SkillCardType = {
  title: string
  subTitle: string
  description: string
  ring?: 'sky' | 'orange' | 'lime' | 'rose' 
  progressBar1Text: string
  progressBar1Value: number
  progressBar2Text?: string
  progressBar2Value?: number
  progressBar3Text?: string
  progressBar3Value?: number
  progressBar4Text?: string
  progressBar4Value?: number
  progressBar5Text?: string
  progressBar5Value?: number
}
