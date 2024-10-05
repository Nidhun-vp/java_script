
    const person={
        name:'ANN',
        yob:'2000',
        place:'calicut',
        age:function()
        {
            return new Date().getFullYear()-this.yob
        }
    }
    console.log(person.age(),person.name)
    console.log(person.age(),person.place)
    console.log(person)