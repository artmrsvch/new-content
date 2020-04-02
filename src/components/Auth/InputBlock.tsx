import React from "react";

export const InputBlock: React.FC<any> = ({ label, input, meta, placeholder }) => {
    return (
        <div className="input-wrapper">
            <label className="auth-form__label">{label}</label>
            <input className="auth-form__input" {...input} placeholder={placeholder} required />
            {meta.error && meta.visited && !meta.active && (
                <div className="auth-form__error">{meta.error}</div>
            )}
        </div>
    );
};
