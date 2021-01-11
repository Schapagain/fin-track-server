

const getServerAddress = () => {
    return process.env.NODE_ENV === "production"? "https://my-ftrack-app.herokuapp.com/":"http://localhost:5000";
}

export default {
    getServerAddress,
}