export default function Input ({
    type = 'text', 
    placeholder = 'enter name', 
    value,
    onChange, 
    classname = '',
    label = false,
    labelClassName,
    containerClassName
    }) {
    return (
        <div className={`flex flex-col w-full ${containerClassName}`}>
            {label && <label className={labelClassName}>{label}</label>}
            <input 
                className={`border border-white rounded-sm bg-transparent text-white text-[0.85em] px-6 py-2 ${classname}`}
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} />
        </div>
    )
}