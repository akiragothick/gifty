const apiKey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa'



export default function getGifts({ keyword = 'morty' } = {}) {

    const urlApi =
        `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10`

    return fetch(urlApi)
        .then(res => res.json())
        .then(resp => {
            const { data } = resp
            const gifts = data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifts;
        })
}