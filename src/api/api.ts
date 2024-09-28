const BaseUrl = "https://webdev-music-003b5b991590.herokuapp.com"

export const getTracks = async () => {
    const res = await fetch(BaseUrl + "/catalog/track/all/")
    if(!res.ok) {
        throw new Error ("Ошибка запроса")
    }
    return res.json().then((tracksData) => 
        tracksData.data
    )
}
