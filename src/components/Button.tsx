import clsx from 'clsx'

interface PropsType {
  text: string
  onClick?: () => void
  variant: string
  size?: string
}

const Button = (props: PropsType) => {
  return (
    <div
      onClick={props.onClick}
      className={clsx('btn cursor-pointer', {
        'border bg-transparent border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white hover:border-0':
          props.variant === 'secondary',
        'bg-amber-600 text-white border-0 hover:bg-amber-700':
          props.variant === 'primary',
        'btn-sm': props.size === 'small',
      })}
    >
      {props.text}
    </div>
  )
}

export default Button
