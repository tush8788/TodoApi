export default (req) => {
    return req?.headers?._user?.id
} 