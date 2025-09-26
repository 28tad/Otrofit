import { Constructor } from '@/features/Equipment/Constructor'
import { ColumnBlock } from '@/app/types/equipment'

interface Props {
  block: ColumnBlock
}

export const ColumnBlockComponent = ({ block }: Props) => {
  if (!block.right || (Array.isArray(block.right) && block.right.length === 0)) {
    return (
      <div className='flex flex-col justify-between gap-[30px]'>
        {block.left.map((b, i) => (
          <Constructor key={b.id || i} block={b} />
        ))}
      </div>
    )
  }
  return (
    <div className='my-[60px] flex flex-col gap-[60px] lg:flex-row'>
      <div className='flex flex-col justify-between gap-[30px]'>
        {block.left.map((b, i) => (
          <Constructor key={b.id || i} block={b} />
        ))}
      </div>
      <div className='flex flex-col justify-between'>
        {Array.isArray(block.right) ? (
          block.right.map((b, i) => <Constructor key={b.id || i} block={b} />)
        ) : (
          <Constructor block={block.right} />
        )}
      </div>
    </div>
  )
}
