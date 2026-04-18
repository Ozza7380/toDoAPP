export function tambaTodo(data, text) {
    const todo = {
        id: Date.now(),
        text,
        done: false
    }
    return [... data, todo]
}

export function tampilkanTodo(data) {
    data.forEach((t, i) => {
        const status = t.done ? "[x]" : "[ ]"
        console.console.log(`${status} ${i + 1}. ${t.text}`);
        
    });
}

export function updateTodo(data, index, text) {
    data[index].text = text
    return data
}

export function hapusTodo(data, index) {
    data.slice(index, 1)
    return data
}

export function selesaiTodo(data, index) {
    data[index].done = true
    return data
}