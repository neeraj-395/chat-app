import type { ReactNode } from "react";
import { FormProvider } from "react-hook-form";

export interface RHFormProps { children: ReactNode; methods: any; onSubmit: (data: any) => void; }

const RHFormProvider = ({children, methods, onSubmit}: RHFormProps) => {
    return (
        <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    )
}

export default RHFormProvider;