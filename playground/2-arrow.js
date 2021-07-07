const event = {
    name:'party',
    guestList: ['adam','someone else'],
    print:  function(){
        console.log(this.name)

        // must be an arrow method in order to have access to 'this' which is the parent object
        this.guestList.forEach( (next)=>{
            console.log(next + ' is attdending ' + this.name)
        })

    }
}
 event.print()

console.log(event)


