export const isValidPassword = (password: string) => {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const isValid = regex.test(password);

    return isValid ? true : false;

}