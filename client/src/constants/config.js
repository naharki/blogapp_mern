//API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded, Please wait..."
    },
    success: {
        title: "Success",
        message: "Data loaded successfully"
    },
    responseFailure: {
        title:"Error",
        message: "An error occoured while feteching response from the server, Please try again."
    },
    requestFailure: {
        title: "Error",
        message: "An error occoured while parsing request data..."
    },
    networkError: {
        title: "Error",
        message: "Unable to conneect to the server, Please check internet and try again later..."
    },


}

//Services URLS
export const SERVICE_URLS = {
    userSignup : {url: '/signup', method: 'POST'}
}