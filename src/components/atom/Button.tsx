interface ButtonProps {
  children: React.ReactNode;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const Button = ({ children, type }: ButtonProps) => {
  return (
    <button
      className="bg-blue-400 text-white px-4 py-2 rounded-lg font-bold cursor-pointer"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
