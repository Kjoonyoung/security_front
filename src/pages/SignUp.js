import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { HiLockClosed } from 'react-icons/hi'
import { SignUpApi } from '../api/SignUp';
import { useDispatch } from 'react-redux';
import { SET_USER_SIGNUP } from '../store/UserSignUp';

import tw from 'twin.macro';


const Input = tw.input`
  appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
`;


function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useForm 사용을 위한 선언
    const { register, handleSubmit } = useForm();

    const onValid = async ({ name, email, password }) => {
        await SignUpApi({ name, email, password })
        .then((res) => {
            if (res.status === 200) {
                const userSignUp = { ...res.data }
                dispatch(SET_USER_SIGNUP(userSignUp))
                console.log(userSignUp)

                return navigate('/sign-in')
            }
        })
    };
    
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">회원가입 창</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onValid)}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    User NAME
                                </label>
                                <Input
                                    {...register("name", {required: "Please Enter Your name"})}
                                    type="text"
                                    placeholder="User name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    User Email
                                </label>
                                <Input
                                    {...register("email", {required: "Please Enter Your Email"})}
                                    type="email"
                                    placeholder="User Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <Input
                                    {...register("password", {required: "Please Enter Your Password"})}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                              <HiLockClosed className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                                회원가입
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;