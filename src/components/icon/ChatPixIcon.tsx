import clsx from 'clsx';
import { FaPix } from 'react-icons/fa6';

export default function ChatPixIcon(props: {
  customIconClass?: string;
  customContainerClass?: string;
}) {
  return (
    <div className={
      clsx(
        'flex items-center justify-center rounded-xl w-12 h-12 min-w-12 min-h-12 bg-gradient-to-br from-emerald-500 to-emerald-800 text-white relative rounded-bl-none',
        props.customContainerClass
      )
    }>
      <FaPix
        className={clsx(
          'text-2xl',
          props.customIconClass
        )}
      />
    </div>
  )
}