
export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToListPage = (navigate) => {
    navigate("/trips/list")
}

export const goToTripsPage = (navigate) => {
    navigate("/trips/app")
}

export const goToLoginPage = (navigate) => {
    navigate("/login" )
}

export const goToAdminPage = (navigate) => {
    navigate("/admin/trips/list" )
}

export const goToCreatePage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToIDPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}