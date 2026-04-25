import PromptSync from "prompt-sync";
import { loadData, saveData, } from "./storage.js";
import {
    tambaTodo,
    tampilkanTodo,
    updateTodo,
    hapusTodo,
    selesaiTodo
} from "./service.js"

const prompt = PromptSync()

while (true) {
    console.log("\n=== TODO APP ===")
    console.log("1. Tambah")
    console.log("2. LIhat")
    console.log("3. Update")
    console.log("4. Hapus")
    console.log("5. Selesai")
    console.log("0. Keluar")
    
    const pilih = prompt("Pilih: ")

    let data = loadData()

    if (pilih == "1") {
        const text = prompt("Masukkan todo: ")
        data = tambaTodo(data, text)
        saveData(data)
    }

    else if (pilih == "2") {
        tampilkanTodo(data)
    }

    else if (pilih == "3") {
        tampilkanTodo(data)
        const i = prompt("index: ") - 1
        const text = prompt("Update: ")
        data = updateTodo(data, i, text)
        saveData(data)
    }

    else if (pilih == "4") {
        tampilkanTodo(data)
        const i = prompt("Index: ") - 1
        data = hapusTodo(data, i)
        saveData(data)
    }

    else if (pilih == "5") {
        tampilkanTodo(data)
        const i = prompt("Index: ") - 1
        data = selesaiTodo(data, i)
        saveData(data)
    }
    
    else if (pilih == "0") {
        break
    }
}