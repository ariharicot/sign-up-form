const validation = (values) => {
    let errors = {};

    if (!values.fullname) {
        errors.fullname = "Nom complet requis."

    }
    if (!values.email) {
        errors.email = "Email requis"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email "
    }
    if (!values.password) {
        errors.password = "Un mot de passe est requis."
    } else if (values.password.length < 5) {
        errors.password = "Le mot de passe doit faire plus de cinq caractères"
    }
    return errors;
}

export default validation;