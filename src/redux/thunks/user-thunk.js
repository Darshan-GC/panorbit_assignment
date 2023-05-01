import { ManageUserActions } from '../reducers/userSlice'
import { toast} from 'react-toastify';


const getUserList = (axios) => {

    console.log('Calling')
    return async (dispatch) => {
        await axios.get('https://panorbit.in/api/users.json').then((res) => {
            dispatch(ManageUserActions.setuserList(res.data?.users))
        }).catch((err) => {
            toast('Failed to load the data')
            dispatch(ManageUserActions.setuserList([]))
        })

    }
}



export { getUserList }