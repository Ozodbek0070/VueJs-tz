import {useField, useForm} from "vee-validate";
import * as yup from "yup";

export function useRequestForm(fn){

    const {handleSubmit, isSubmitting} = useForm({
        initialValues:{
            status: "active"
        }
    })

    const {value:fish, errorMessage:fError, handleBlur:fBlur} = useField('fish',
        yup
            .string()
            .trim()
            .required("F.I.SH.ni kiritish shart!")
    )

    const {value:phone, errorMessage:pError, handleBlur:pBlur} = useField('phone',
        yup
            .string()
            .required("Telefon raqamni kiritish shart!")
            .min(12,"Telefonni to'g'ri kiriting!")
            .max(13,"Telefonni to'g'ri kiriting!")
    )

    const {value:pochta, errorMessage:sError, handleBlur:sBlur} = useField('pochta',
        yup
            .string()
            .required("Elektron pochta kiritilishi shart!")
    )

    const {value:status,} = useField('status')

    const onSubmit = handleSubmit(fn)


    return{
        fish,
        fBlur,
        fError,
        phone,
        pError,
        pBlur,
        pochta,
        sError,
        sBlur,
        status,
        onSubmit,
        isSubmitting,
    }
}