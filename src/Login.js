import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const   [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in...
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };
  return (
    <div className='login'>
        <div className='login__logo'>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAACUCAMAAAAUNB2QAAAAb1BMVEX///8Yd/IAYfAAZPEAcvIAa/ERdfIAXvDw9P4AcPJBgvPz9/75+/8AbfGvxvksefIAaPHf6f1jmfWYufe4zfrq8P3W4vzD1fq80fpek/TM3fufvfiKsPeErfdQj/SVtfhvoPVLivN/pPY2ffIAQu6J88eKAAAEP0lEQVR4nO2b63KqMBCApSTRcFOogEjFIn3/ZzxeSlsgySZnznTjnP1+Ks7kM7fNslmtCIIgCIIgCIIgCIIgCIIgCIIg/huSuCyrOmvbNqurvIwT7Aa5U9bZqQvCcLfjnO92YRh0p6zOsZvlQpwVfcAlC37CJA/6IouxG2dHkhdSMiGCJUIwKYvK/6G12TehVAh8I8Nuv8FupplDk5od7h5pc8BuqIGymc0FHUw2JXZjNcQZMJam48rPeZ4XqbXDjbTwcN09CvuO+BxW4ojd6Dktd3S4wVvsZk95c+2IB/INu+E/OXPVJgcj+Bm76d+c/mY4PeAn7MaPvKZ/1xP33khfsZv/4GDXE4Kxa3R185068z22wI0K7gghxTBEXVF0URQN21mkKCpshWv410NBh+DRKcvHQDbZVId28j3r8YNDcI2VvF1s0tvJEyn6eluFkES3/KfjqUUQIm/iyQDMCnlSnInmFmLAPTi1wHji76r2zS0ChhqK5JG5K1ik/JMXFiLCjG/P5q1CMPUiurAIMCORmJm7Ql7U431pIRjemandGSUCoTleLy2CHd7MALpCqGfFdWVbWgj5u03/pgYWKPk+/0V5rG8cgqW+xEqLXIDYYx7nlUU/bO8oHmYXHIm8B3a8cLp87tPrCBR3FA+LHmexrYFpEbxMpkU+mLuO4QwpMGGwdnocJ5UQF1BI/jJ5HtjmA1ZgbBmlYqExWQB7y3XGYCQ9cygmn1mEkHSIMb330J/rarHDOICfwbSso0WKERG+g+lAR4vlVv8LdOCrCkcL1iNYQGdVZwuxRbCA3xrNLMDnMcJaXVqTr0c+Js9/fH2+1qwL3B8LbhEOaXJYGBaaEcUz+KcXtQXGiNLMbguLTaP8B1Bmt2altbDQ5H9QVlrNrmdhcVT+MJDFL7R6jiYCsbDQvPBASTprokELi0xtgRINaiJzC4s3dS+iROaaUxJskRTKGYVzStKcWGGLWLNENShJzlY5MGCLjWYo4uQ4D8pMDm/jzci08Z/ER6WFQMrkaLJqQzSSTh4XX58rf4aVVdNkOMXILB/1YkgMBngZTjDb7HRKQss2r6S5YS4WeJl/6C2MiwViqRTwRszBAmfL+8T8dtLBArVOyvym2N4C903xqjVlQuwtcN/amysorC3EFrn0XB1OOFpgV7NoDwsuFil+7aChysvSgvUe1JzrK+4sLfwocdZWP9pZ+FH9qK9EtbHwphJVWxVsY+FPVbCuQhu2EBy98PEnyiw4bOFXtby6sgC04N7MiZGjWOwbgIX0Y4mdsrzRY7bw8kaP4naVyUKGrZe3q1a3m26MWVkw1nkQdWiZ3DrUWXh+63B1uwHafY0rtcUT3AC9klTjbdyFxf02bvMEt3HvfN6MnuYG1091M/pBXrenYfJJdGmf65b6g2SWM3+SgUQQBEEQBEEQBEEQBEEQBEEQBPEv+ANc2jeyJ9dU1wAAAABJRU5ErkJggg==' alt='a' />
            <img src='https://images.ctfassets.net/4lk297s1lzum/UWLA7xqLjDRlveXLXATPO/8e48e32703f29472c5defef88be6e7f2/Facebook-Branding-GIF.gif' alt='an' />
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}

export default Login
