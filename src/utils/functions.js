import { Buffer } from "buffer"

export const encodeBase64 = (data) => {
    return Buffer.from(data).toString('base64');
}
export const decodeBase64 = (data) => {
    return Buffer.from(data, 'base64').toString('ascii');
}

export const extractRequestDetails = params => {
    try {
        const details = decodeBase64(params)
        return JSON.parse(details)
    }
    catch (e) {
        return null
    }
}

export const formatAmount = amount => new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'NGN'
}).format(amount);


export const getTransactionRef = (groupId, amount, email) => {
    return encodeBase64(JSON.stringify(
        { group: groupId, amount, date: Date.now(), email }
    ))
}