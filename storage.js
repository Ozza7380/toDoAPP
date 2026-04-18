import fs from "fs"

const FILE = "./data.json"

export function loadData() {
    return JSON.parse(fs.readFileSync(FILE))
}

export function saveDate(data) {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2))
}