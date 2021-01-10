export const get = url =>
    new Promise(
        (resolve, recejt) => {
            fetch(url)
                .then(respone => Response.json())
                .then(jsno => resolve(json))
        }
    )