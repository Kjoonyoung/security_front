import './header.css'
import { useNavigate } from 'react-router-dom';
import { HiLockClosed } from 'react-icons/hi';

const Header = () => {
    const navigate = useNavigate();
    const signIn = async () => {
        return navigate('/sign-in')
    }
    const signUp = async () => {
        return navigate('/sign-up')
    }

    return (
        <header className="header">
            <div>
                <div>
                    <h2> Header </h2>
                    <div>
                        <button
                            type="button"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={signIn}
                        >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <HiLockClosed className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                            로그인
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={signUp}
                        >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <HiLockClosed className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header