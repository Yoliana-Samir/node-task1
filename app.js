
const notes = require('./data')
console.log(notes)

const yargs = require('yargs')

yargs.command({
    command:'add',
    describe:'add data',
    builder:{
        ID:{
            describe:'this is ID of student',
            type: 'number',
            demandOption:true
        },
        fName:{
            describe:'this is first name of student',
            type:"string",
            demandOption:true
        },
        degrees:{
            describe:'this is ID of student',
            type:"array",
            demandOption:true
        },
        Comment:{
            describe:'this is ID of student',
            type:"string",
        },
    },
    handler:(x)=>{
        notes.add(x.ID, x.fName , x.degrees , x.Comment)
    }
})

yargs.command({
    command:'delete',
    describe:'delete data',
    builder:{
        ID:{
            describe:'this is ID of student',
            type: 'number',
            demandOption:true}
    },
    handler:()=>{
        console.log('delete data')
    }
})

yargs.command({
    command:'read',
    describe:'read data',
    builder:{
        ID:{
            describe:'this is ID of student',
            type: 'number',
            demandOption:true}
    },
    handler:()=>{
        console.log('read data')
    }
})

yargs.command({
    command:'list',
    describe:'list data',
    handler:()=>{
        console.log('list data')
    }
})

console.log(yargs.argv)













