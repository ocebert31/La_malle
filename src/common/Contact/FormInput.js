function FormInput({ label, name, register, rules, errors, type = "text", placeholder = "", options = []}) {

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