
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=EY8m29In8cQjH52tIWguNst7JHzqa57V&limit=10`
    const resp = await fetch( url )
    const {data} = await resp.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })

    return gifs


}    
