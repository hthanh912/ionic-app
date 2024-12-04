export const BASE_API_URL = "https://wide-barracuda-hthanh912-c60d2cda.koyeb.app"

export const LIST_BOOK = (page: number) => `${BASE_API_URL}/books?page=${page}`
export const BOOK_DETAIL = (id: number) => `${BASE_API_URL}/books/${id}`