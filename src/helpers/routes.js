const serverUrl = 'https://jsonplaceholder.typicode.com/posts/'

export const toDoItemsApiUrl = id =>
    id ? `${serverUrl}/todo_items/${id}` : `${serverUrl}/todo_items/`