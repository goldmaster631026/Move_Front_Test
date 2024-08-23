import { useNavigate } from "react-router"
import Button from "./Button"

interface SubmitFormProps {
    onClick?: () => void
}

const SubmitForm: React.FC<SubmitFormProps> = ({ onClick }) => {
    const navigate = useNavigate()
    return (
        <div className="flex gap-5 text-center">
            <Button text="Cancel" className="sm:px-14 px-10 py-3 font-bold border-2 border-white rounded-[10px]" onClick={() => navigate("/main") } />
            <Button text="Submit" className="sm:px-14 px-10 py-3 font-bold bg-primary border-2 border-primary rounded-[10px]" onClick={onClick} />
        </div>
    )
}

export default SubmitForm