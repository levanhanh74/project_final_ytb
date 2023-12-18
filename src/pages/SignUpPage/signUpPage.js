import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserSignUpSerVice } from "../../services/UserService";
import { UseMutationHook } from "../../Hooks/UseMutationHook";
import { toast } from 'react-toastify';

function SignUpPage() {

    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validationErrEmail, setValidationErrEmail] = useState('');
    const [validationErrPass, setValidationErrPass] = useState('');
    const [validationErrConfirmPass, setValidationErrConfirmPass] = useState('');

    const mutation = UseMutationHook((data) => {
        return UserSignUpSerVice(data);
    })
    const navigate = useNavigate();
    const { data } = mutation;
    const handleOnclickSignup = (email, password, confirmPassword) => {
        const checkEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        // console.log(!checkEmail, !password.length <= 4);
        if (!checkEmail || password.length <= 4 || confirmPassword.length <= 4) {  // Check conditional false
            const validationEmail = !checkEmail ? "You have enter your email!" : "";
            const validationPass = password.length <= 4 ? "You have must enter enough your password start 5 character increase!" : "";
            const validationConfirmPass = password === confirmPassword ? "" : "Password re-enter not true!";

            console.log(validationErrEmail, validationErrPass, validationErrConfirmPass);
            setValidationErrEmail(validationEmail);
            setValidationErrPass(validationPass);
            setValidationErrConfirmPass(validationConfirmPass);
        } else {  // run complier conditional true
            const data = { password, email, confirmPassword }
            mutation.mutate(data)
        }
    }
    useEffect(() => {
        const isCheckSignUp = data?.status === "OK" ? data?.message : data?.message;

        if (data?.status === "OK") {
            console.log("Create SuccessFully");

            navigate('/login')
            toast.success(isCheckSignUp)
            setValidationErrEmail("");
            setValidationErrPass("");
            setValidationErrConfirmPass("")
            setEmail('')
            setPassword('')
            setConfirmPassword("")
        } else {
            if (data?.message === "This email already, please email difference!") {
                setValidationErrEmail(isCheckSignUp)
                setValidationErrConfirmPass('')
            }
            data?.message === "The input both password similar!" ? (toast.warning(isCheckSignUp)) && (setValidationErrConfirmPass(data?.message)) : toast.warning(isCheckSignUp) && setValidationErrEmail(isCheckSignUp) && setValidationErrConfirmPass("");
        }
    }, [data])
    return (<>
        <div className="container">
            <div className="row mt-5 rounded-3 border">
                <div className="col-8 flex-fill">
                    <div className="w-75 mt-3 p-3 m-auto">
                        <h3>Xin chào</h3>
                        <p className="mt-4">Đăng nhập hoặc Tạo tài khoản</p>
                        <form>
                            <div className="form-group mt-2">
                                {/* <label for="exampleInputEmail1">Email address</label> */}
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-danger">{validationErrEmail}</small>
                            </div>
                            <div className="form-group mt-2">
                                {/* <label for="exampleInputPassword1">Password</label> */}
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} />
                                <small id="emailHelp" className="form-text text-danger">{validationErrPass}</small>
                            </div>
                            <div className="form-group mt-2">
                                {/* <label for="exampleInputPassword1">Password</label> */}
                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Re-Password"
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)} />
                                <small id="emailHelp" className="form-text text-danger">{validationErrConfirmPass || validationErrPass}</small>
                            </div>

                            <button type="button" className="btn btn-danger text-light fs-5 w-100 mt-2" onClick={() => handleOnclickSignup(email, password, confirmPassword)}>Create Account</button>
                        </form>
                        <h6 className="mt-4">Ban da co tai khoan? <Link to="/login" className="text-decoration-none fw-normal">login</Link></h6>
                    </div>
                </div>
                <div className="col-4 bg-info">
                    <div className="d-block ">
                        <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="img" className="w-100 h-75 pt-5 ps-5 pe-5 " />
                        <div className="text-center pb-5 ">
                            <p className="p-0 m-0 text-dark fs-6 fw-bold">Mua sắm tại SHOPITPRICECHEAP
                            </p>
                            <p className="p-0 m-0 text-dark fs-6 fw-bold">Siêu ưu đãi mỗi ngày</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default SignUpPage;