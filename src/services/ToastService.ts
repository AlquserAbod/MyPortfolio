import toast from 'react-hot-toast';


export default class ToastService {
    static promiseToast (promiseFunc: Promise<void>, props: {
        loadingText : string,
        successText: string,
        errorText: string
    }) {
        toast.promise(
            promiseFunc,
             {
                 loading: props.loadingText,
                 success: props.successText,
                 error: props.errorText
                 
             }
           );
    }
}