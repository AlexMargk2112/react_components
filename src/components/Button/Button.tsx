
type Props = {
  label: string,
  theme: 'primary' | 'secondary' | 'tertiary',
};

const Button = ({ label }: Props) => {
  return (
    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md" type="button">{label}</button>
  )
}

export default Button;