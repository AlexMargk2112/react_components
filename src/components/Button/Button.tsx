import { type ReactNode } from "react";

type Props = {
  label: string,
  theme?: 'primary' | 'secondary' | 'tertiary',
  icon?: ReactNode
};

const themes: Record<'primary' | 'secondary' | 'tertiary', string> = {
  'primary': 'bg-indigo-600 text-white',
  'secondary': 'bg-green-600 text-white',
  'tertiary': 'bg-teal-600 text-white',
}

const Button = ({ label, theme = 'primary', icon = undefined }: Props) => {
  return (
    <button
      className={`${themes[theme]} px-4 py-2 rounded-md flex gap-2 items-center`}
      type="button"
    >
      {icon}
      <span>
        {label}
      </span>
    </button>
  )
}

export default Button;