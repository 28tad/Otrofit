import { StaticImageData } from 'next/image'
import { ReactElement, ReactNode } from 'react'

type BLOCK_TYPES = 'paragraph' | 'slider' | 'story' | 'list' | 'configuration' | 'image' | 'video'

export interface SliderBlock extends BaseBlock {
  type: 'slider'
  images: {
    url: StaticImageData
    alt?: string
  }[]
  price: string
  story: StoryBlock
  list: ListBlock
}

interface BaseBlock {
  type: BLOCK_TYPES
  title?: string
  id?: string
}

interface ParagraphBlock extends BaseBlock {
  type: 'paragraph'
  content: ReactNode
}

interface StoryBlock extends BaseBlock {
  type: 'story'
  content: ReactNode
}

interface ListBlock extends BaseBlock {
  type: 'list'
  items: string[] | ReactNode[]
  listDecimal?: boolean
}
interface VideoBlock extends BaseBlock {
  type: 'video'
  videoLink?: string
}

export interface ImageBlock extends BaseBlock {
  type: 'image'
  src: StaticImageData
  alt?: string
  className?: string
}

export interface Configuration {
  title: string
  subTitle: string
  description: string | ReactElement
  price?: string
  img: {
    src: StaticImageData
    alt?: string
  }
}

export interface ConfigurationBlock extends BaseBlock {
  type: 'configuration'
  configurations: Configuration[]
}

export type Block =
  | ParagraphBlock
  | SliderBlock
  | StoryBlock
  | ListBlock
  | ConfigurationBlock
  | ImageBlock
  | VideoBlock

export interface Equipment {
  title: string
  blocks: Block[]
}
