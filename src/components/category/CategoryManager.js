export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`
        }
    })
        .then(response => response.json())
}