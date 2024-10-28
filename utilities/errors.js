// * Custom Error Class
class Unauthorized extends Error {
    constructor(message) {
        super(message)
        this.name = 'Unauthorized'
    }
}
class Forbidden extends Error {
    constructor(message) {
        super(message)
        this.name = 'Unauthorized'
    }
}
class NotFound extends Error {
    constructor(message) {
        super(message)
        this.name = 'Unauthorized'
    }
}

const logErrors = (error) => {
    console.log('\n**********\n');
    console.log(error.name);
    console.log('\n**********\n');
    console.log(error.errors ? JSON.parse(JSON.stringify(error.errors)): error.message);
    console.log('\n**********\n');
}

const showError = (error, res) => {
    logErrors(error)

    // * Validation
    if(error.name === 'ValidatorError') {
        return res.status(422).json({ fieldErrors: error.errors })
    }

    // * Unique Field
    if(error.code === 11000) {
        const [fieldName, fieldValue] = Object.entries(error.keyValue)[0]
        return res.status(400).json({ errorMessage: `${fieldName} "${fieldValue}" already in use.` })
    }

    //* Casting
    if(error.name === 'CastError') {
        return res.status(400).json({ errorMessage: error.message })
    }

    // * Unauthorised
    if(error.name === 'Unauthorized') {
        return res.status(401).json({ errorMessage: 'Unauthorised' })
    }

    // * Fordbidden
    if(error.name === 'Forbidden') {
        return res.status(401).json({ errorMessage: 'You are not authorised to access this resource' })
    }

    // * Not Found
    if(error.name === 'NotFound') {
        return res.status(401).json({ errorMessage: '404: Resource Not Found' })
    }

    // * Generic
    return res.status(500).json({ errorMessage: 'An unknown error has occurred' })
}

module.exports = { showError, Unauthorized, Forbidden, NotFound }