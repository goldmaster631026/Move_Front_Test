import { BtnProps } from "../types";

const Button: React.FC<BtnProps> = ({ text, icon, className, onClick }) => {
    return (
        <div className={`cursor-pointer ${className}`} onClick={onClick}>
            {icon}
            {text}
        </div>
    )
}

export default Button;