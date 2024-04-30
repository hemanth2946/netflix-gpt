
export const validateForm = (formFields, isSignInForm) => {
    const { name, email, password, confirmPassword } = formFields;

    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isSignInForm) {
        console.log("came", name, password, confirmPassword)
        if (name === "") return "Enter your Name";
        if (password !== confirmPassword) return "Enter Correct Passwords"
    }

    if (!isEmailValid) return "Invalid Email ID";
    if (!isPasswordValid) return "Invalid Password";

    return null;
}