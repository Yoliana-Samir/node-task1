const fs = require('fs')


  
const add = (ID,fName,degrees) =>{
    const notes = loadNotes()
    let sum=0;
    degrees.forEach(degrees=>{
        sum+=degrees;
    })
    notes.push({
        ID,
        fName,
        degrees,
        sum
    })
    saveNotes(notes)
}

const loadNotes = () =>{
    try{
    const dataBuffer = fs.readFileSync('notes.json').toString()
    return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) =>{
     // console.log(notes)
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}


module.exports = {
    add
}


  
