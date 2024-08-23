import image from '../../assets/image.png'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { UserProfileProps } from '../../types'
import { dispatch } from '../../store'
import { getUserInfo } from '../../store/reducers/auth'

const Login = () => {
    const [userData, setUserData] = useState<UserProfileProps>({
        email: "",
        password: "",
    });
    const [emailValidateMsg, setEmailValidateMsg] = useState(" ");
    const [passValidateMsg, setPassValidateMsg] = useState("");
    const navigate = useNavigate()

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prevData) => ({
            ...prevData,
            email: e.target.value,
        }));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prevData) => ({
            ...prevData,
            password: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission
        dispatch(() => getUserInfo(userData))
        navigate("/main");
    }
    useEffect(() => {
        // Email Validation

        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (userData.email == "") {
            setEmailValidateMsg("You should input email")
        } else if (!emailRegex.test(userData.email)) {
            setEmailValidateMsg("Error! you have entered invalid email.");
        } else {
            setEmailValidateMsg("");
        }
        // Password Validation
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (!userData.password.match(lowerCase)) {
            setPassValidateMsg("Password should contains lowercase letters!");
        } else if (!userData.password.match(upperCase)) {
            setPassValidateMsg("Password should contain uppercase letters!");
        } else if (!userData.password.match(numbers)) {
            setPassValidateMsg("Password should contains numbers also!");
        } else if (userData.password.length < 10) {
            setPassValidateMsg("Password length should be more than 10.");
        } else {
            setPassValidateMsg("Password is strong!");
        }
    },[])

    return (
        <div className='h-screen'>
            <form className="flex items-center justify-center h-[90vh] text-white font-montserrat" onSubmit={handleSubmit}>
                <div className=" flex flex-col justify-around w-80 h-96">
                    <div className="text-center text-5xl font-bold">
                        Sign in
                    </div>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="email" className='flex flex-col text-red-500'>
                            {emailValidateMsg}
                            <input name='email' className='text-white' type="email" placeholder="Email" onChange={handleEmailChange} />
                        </label>
                        <label htmlFor="password" className='flex flex-col text-red-500'>
                            {passValidateMsg}
                            <input name='password' className='text-white' type="password" placeholder="Password" onChange={handlePasswordChange} />
                        </label>
                        <label htmlFor="remember" className="flex gap-1 justify-center" >
                            <input name="remember" type="checkbox" />
                            Remember me
                        </label>
                        <button className="bg-primary py-3 text-center rounded-md" type='submit' >
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <img src={image} alt="" className='w-full absolute bottom-0' />
        </div>

    )
}

export default Login;