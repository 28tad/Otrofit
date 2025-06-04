import { Block } from '@/app/types/equipment'
import ImageBlock from '@/components/Blocks/ImageBlock'
import { List } from '@/components/Blocks/List'
import { Paragraph } from '@/components/Blocks/Paragraph'
import { SliderBlockComponent } from '@/components/Blocks/SliderBlockComponent'
import { Story } from '@/components/Blocks/Story'
import VideoBlock from '@/components/Blocks/VideoBlock'
import ConfigurationsBlock from '../../components/Blocks/ConfigurationsBlock'

export const Constructor: React.FC<{ block: Block }> = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <Paragraph title={block.title}>{block.content}</Paragraph>
    case 'list':
      return <List {...block} />
    case 'image':
      return <ImageBlock {...block} />
    case 'video':
      return <VideoBlock />
    case 'story':
      return <Story title={block.title}>{block.content}</Story>
    case 'slider':
      return <SliderBlockComponent {...block} />
    case 'configuration':
      return <ConfigurationsBlock {...block} />

    default:
      return null
  }
}
