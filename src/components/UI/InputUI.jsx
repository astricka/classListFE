function InputUI({ name, type, placeholder }) {
    return(
        <>
            <label htmlFor={name}>{name}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </>
    );
}

export default InputUI;