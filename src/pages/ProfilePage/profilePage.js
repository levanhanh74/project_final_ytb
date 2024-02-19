import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as LoginUser from '../../services/UserService'
import { UseMutationHook } from "../../Hooks/UseMutationHook";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slides/userSlices";

function ProfilePage() {
    const User = useSelector(state => state.user);
    // console.log("User: ", User);
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [avatar, setAvatar] = useState("")
    const [city, setCity] = useState("")

    const mutation = UseMutationHook(async (data) => {
        const { id, access_token, ...dataRest } = data;
        return await LoginUser.UserUpdateSerVice({ id, dataRest, access_token });
    })
    console.log("mutation: ", mutation);

    const [nameValidate, setNameValidate] = useState('You have enter info Name full')
    const [emailValidate, setEmailValidate] = useState('You have enter info Email full')
    const [phoneValidate, setPhoneValidate] = useState('You have enter info Phone full')
    const [addressValidate, setAddressValidate] = useState('You have enter info Address full')
    const [avatarValidate, setAvatarValidate] = useState('You have enter info Avatar full')
    const [cityValidate, setCityValidate] = useState('You have enter info City full')
    const [OverRalError, setOverRalError] = useState('')
    const [displayPhone, setDisPlayPhone] = useState(false)

    // After render interface then it will run function callback in useEffect.
    useEffect(() => {
        setName(User?.name);
        setEmail(User?.email);
        setPhone(User?.phone);
        setDisPlayPhone(!displayPhone)
        setAddress(User?.address);
        setAvatar(User?.avatar);
        setCity(User?.city);
    }, [User]);

    const handleName = (e) => {
        const value = e.target.value;
        setName(value)
        if (value.length > 0) {
            setNameValidate('')
        } else {
            setNameValidate('You have enter info Name full')
        }
    }
    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value)
        if (value.length > 0) {
            setEmailValidate('')
        } else {
            setEmailValidate('You have enter info Email full')
        }

    }
    const handleCity = (e) => {
        const value = e.target.value;
        setCity(value)
        if (value.length > 0) {
            setCityValidate('')
        } else {
            setCityValidate('You have enter info City full')
        }
    }
    const handlePhone = (e) => {
        const value = e.target.value;
        const checkPhone = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/i.test(value);
        setPhone(value)
        console.log("checkPhone: ", checkPhone);
        if (value.length > 0) {
            if (value.length === 10 && checkPhone === true) {
                setPhoneValidate('');
                // setDisPlayPhone(!displayPhone);
            } else if (value.length < 10) {
                setDisPlayPhone(!displayPhone)
                setPhoneValidate('You have to enter enough 10 number!. Please re-enter!')
            } else if (value.length > 10) {
                setDisPlayPhone(!displayPhone)
                setPhoneValidate('You have entered than 10 number!. Please re-enter!')
            }
        } else {
            setPhoneValidate('You have enter info Phone full')
        }
    }
    const handleAddress = (e) => {
        const value = e.target.value;
        setAddress(value)
        if (value.length > 0) {
            setAddressValidate('')
        } else {
            setAddressValidate('You have enter info Address full')
        }
    }
    const handleOnchangeAvatar = (e) => {
        const file = e.target.files['0']
        // console.log(file);
        const value = {
            url: URL.createObjectURL(file),
            name: file?.name
        }
        if (value.url.length > 0) {
            setAvatar(value);
            setAvatarValidate('')
        } else {
            setAvatarValidate('You have enter info Email full')
        }
    }


    const { isError, isSuccess, data } = mutation;

    // handle Update Information of user
    const handleUpdateInfo = (e) => {
        e.preventDefault();
        const access_token = User?.access_token;
        const id = User?._id
        if (!name || !email || !phone || !address || !avatar.url || !id || !access_token) {  // validation user 
            setOverRalError("Your info enter not fill. Please re-enter")
        } else { // update user
            const dataUser = {
                name, email, phone, address, id, city, access_token,
                avatar: {
                    url: avatar.url,
                    name: avatar.name
                }
            };
            mutation.mutate(dataUser)
            // console.log("Mutation: ", mutation);
            toast.success("Update Success")
            setOverRalError('')
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success(mutation)
            handleGetDetailUser(User?.id, User?.access_token)
        } else if (isError) {
            toast.error(mutation)
        }
    }, [isSuccess, isError]);

    // handleGetDetailUser
    const handleGetDetailUser = async (id, access_token) => {
        const res = await LoginUser.UserDetailSerVice(id, access_token);
        // console.log("getDetailUser: ", res);
        dispatch(updateUser({ ...res?.data?.dataNew, access_token }));
    }

    return (<div className="container">
        <h4 className="d-flex p-4 pt-5 text-uppercase fw-bold justify-content-center">Information of you</h4>
        {
            OverRalError ? <h4 className="d-flex p-5 pt-5 text-capitalize text-danger border rounded-1 justify-content-center">{OverRalError}</h4> : ""
        }
        <div className="row">
            <div className="col-lg-5">
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item"><b>Name</b>:{name ? name : nameValidate}</li>
                    <li className="list-group-item"><b>Email address</b>: {User.email ? email : emailValidate}</li>
                    <li className="list-group-item"><b>Phone</b>: {User.phone ? phone : phoneValidate}</li>
                    <li className="list-group-item"><b>Address</b>: {User.address ? address : addressValidate}</li>
                    <li className="list-group-item"><b>City</b>: {User.city ? city : cityValidate}</li>
                    <li className="list-group-item"><b>Avatar</b>: <br /><img src={avatar.url ? avatar?.url : avatarValidate} alt={avatar.url ? avatar?.name : avatarValidate} style={{ width: "200px", height: "200px", borderRadius: "10%" }} /></li>
                </ol>
            </div>
            <form className="w-10 mt-sm-3 mt-lg-0  m-auto border-1 border p-3 align-items-center rounded col-lg-6 col-sm-6 col-sm-12" >
                <div className="form-group mt-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={name}
                        onChange={handleName}
                        aria-describedby="namme" placeholder="Name" />
                    <small id="namme" className="form-text fw-fw-normal text-danger">{name?.length > 0 ? "" : nameValidate}</small>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1 " value={email}
                        onChange={handleEmail}
                        aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text fw-fw-normal text-danger">{email?.length > 0 ? "" : emailValidate}</small>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="Phone">Phone</label>
                    <input type="text" autoComplete="true" className="form-control" id="Phone" value={phone}
                        onChange={handlePhone}
                        placeholder="Phone" />
                    <small id="phone" className="form-text fw-fw-normal text-danger">{phone.length >= 0 && displayPhone ? "" : phoneValidate}</small>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="address">Address</label>
                    <input type="text" autoComplete="true" className="form-control" id="address" value={address}
                        onChange={handleAddress}
                        placeholder="Address" />
                    <small id="address" className="form-text fw-fw-normal text-danger">{address?.length > 0 ? "" : addressValidate}</small>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" className="form-control" id="avatar"
                        onChange={handleOnchangeAvatar}
                        placeholder="Avatar" />
                    <img src={avatar.url} alt={avatar.name} style={avatar?.url ? { width: "120px", height: "120px", borderRadius: "100%" } : { width: "", height: "", borderRadius: "" }} />
                    <small id="address" className="form-text fw-fw-normal text-danger">{avatar?.name?.length > 0 || avatar?.url?.length ? "" : avatarValidate}</small>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="city">City</label>
                    <input type="text" autoComplete="true" className="form-control" id="city" value={city}
                        onChange={handleCity}
                        placeholder="City" />
                    <small id="City" className="form-text fw-fw-normal text-danger">{city?.length > 0 ? "" : cityValidate}</small>
                </div>

                <button type="button" className="btn bg-primary text-light fs-5 w-100 mt-2" onClick={handleUpdateInfo} >Update Account</button>
            </form>
        </div>
    </div >);
}

export default ProfilePage;