
/**
 * Validates the product input fields.
 * 
 * @param {Object} product - The product object to be validated.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageURL - The URL of the product image.
 * @param {string} product.price - The price of the product.
 * 
 * @returns {Object} An object containing validation errors for each field.
 * @returns {string} returns.title - Error message for the title field, if any.
 * @returns {string} returns.description - Error message for the description field, if any.
 * @returns {string} returns.imageURL - Error message for the imageURL field, if any.
 * @returns {string} returns.price - Error message for the price field, if any.
 */

export const productValidation = (product : {title:string , description: string , imageURL:string , price:string,colors:string })=>{
    const errors:{title: string ,description: string ,imageURL:string ,price: string,colors:string} = {
        title: "",
        description: "",
        imageURL: "",
        price: "",
        colors: "",
    }

    const validURL = /\b(?:https?:\/\/)?(?:www\.)?[^\s]+\.(?:jpg|jpeg|png|gif|bmp|webp)\b/.test(product.imageURL)
    if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
        errors.title = "Product title must be between 10 and 80 characters!"
    }
    if (!product.description.trim() || product.description.length < 10 || product.description.length > 80) {
        errors.description = "Product description must be between 10 and 900 characters!"
    }
    if (!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = "Valid price is required"
    }
    if (!product.imageURL.trim() || !validURL) {
        errors.imageURL = "Please enter a valid url!"
    }
    if (!product.colors) {
        errors.imageURL = "You should choose one color at least!"
    }


    return errors
}