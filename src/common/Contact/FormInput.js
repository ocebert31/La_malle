import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function FormInput({ label, name, register, rules, errors, type = "text", placeholder = "", options = []}) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="flex flex-col gap-[5px]">
      {label && <label htmlFor={name}>{label}</label>}
      {type === "select" ? (
        <select {...register(name, rules)} id={name} className="p-[12px] rounded-[8px] border border-secondary w-full">
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
        ) : type === "textarea" ? (
            <textarea {...register(name, rules)} id={name} placeholder={placeholder} rows={4} className="p-[12px] rounded-[8px] border border-secondary w-full"/>
        ) : type === "password" ? (
            <div className="relative">
                <input {...register(name, rules)} id={name} type={visible ? "text" : "password"} placeholder={placeholder} className="p-[12px] rounded-[8px] border border-secondary w-full pr-10"/>
                <button type="button" onClick={toggleVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                    {visible ? (
                        <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                        <FontAwesomeIcon icon={faEye} />
                    )}
                </button>
            </div>
        ) : (
            <input {...register(name, rules)} id={name} type={type} placeholder={placeholder} className="p-[12px] rounded-[8px] border border-secondary w-full"/>
        )}

        {errors[name] && (
            <span className="text-red-500 text-[0.9em]">
                {errors[name]?.message}
            </span>
        )}
    </div>
  );
}

export default FormInput;
