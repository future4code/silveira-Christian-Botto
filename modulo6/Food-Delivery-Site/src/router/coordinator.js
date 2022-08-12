export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/details/${id}`)
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToSignUpPage = (navigate) => {
    navigate("/signup")
}

export const goToProfilePage = (navigate) => {
    navigate("/profile")
}

export const goToCartPage = (navigate) => {
    navigate(`/cart`)
}

export const goToEditProfilePage= (navigate, id) => {
    navigate(`/profile/edit-profile/${id}`)
}

export const goToEditAddressPage = (navigate, id) => {
    navigate(`/profile/edit-address/${id}`)
}

export const goToRegisterPage = (navigate) => {
    navigate("/register")
}

export const goBack = (navigate) => {
    navigate(-1)
}