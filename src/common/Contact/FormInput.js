import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function FormInput({ label, name, register, rules, errors, type = "text", placeholder = "", options = [], value, onChange, step, min, accept = ".jpg,.jpeg,.png"}) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible(!visible);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const allowed = accept.replace(/\./g, "").split(",");
        const ext = file.name.split(".").pop().toLowerCase();
        if (!allowed.includes(ext)) return;
        onChange?.(file);
    };

    const baseClass = "p-[12px] rounded-[8px] border border-secondary w-full";

    return (
        <div className="flex flex-col gap-[5px]">
        {label && <label htmlFor={name}>{label}</label>}
        {type === "select" ? (
            <select {...(register ? register(name, rules) : {})} id={name} value={value} onChange={onChange} className={baseClass}>
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
            </select>
        ) : type === "textarea" ? (
            <textarea {...(register ? register(name, rules) : {})} id={name} placeholder={placeholder} rows={4} cols={50} className={baseClass}/>
        ) : type === "password" ? (
            <div className="relative">
            <input {...(register ? register(name, rules) : {})} id={name} type={visible ? "text" : "password"} placeholder={placeholder} className={`${baseClass} pr-10`}/>
            <button type="button" onClick={toggleVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
            </button>
            </div>
        ) : type === "file" ? (
            <input type="file" id={name} name={name} accept={accept} onChange={handleFileChange} className={`${baseClass} mt-1 shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}/>
        ) : (
            <input {...(register ? register(name, rules) : {})} id={name} type={type} placeholder={placeholder} step={step} min={min} className={baseClass}/>
        )}
        {errors?.[name] && (
            <span className="text-red-500 text-[0.9em]">{errors[name]?.message}</span>
        )}
        </div>
    );
}
