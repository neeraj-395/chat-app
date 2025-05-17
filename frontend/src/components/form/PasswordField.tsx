import { useState } from "react";
import RHFTextField from "./RHFTextField";
import { InputAdornment, IconButton } from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";

export interface PasswordFieldProps { name: string; label: string; }

const PasswordField = ({name, label}: PasswordFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <RHFTextField name={name} label={label}
            type={showPassword ? 'text' : 'password'}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? <Eye /> : <EyeSlash />}
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
        />
    )
}

export default PasswordField;