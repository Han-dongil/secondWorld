const choi = {
    name: '최선영',
    age: 20,
    score: 90
}

const han = {
    name: '한동일',
    age: 25,
    score: 88
}

const yun = {
    name: '윤희성',
    age: 22,
    score: 50
}

const persons = [choi, han, yun];

function createTable() {

    // let tag = '<table border="1">';
    // tag += '<thead><tr><th>이름</th><th>나이</th><th>점수</th></tr></thead>';
    // tag += '<tbody>';
    // person="name";
    // console.log(persons.choi.name);
    for (let fields in persons) {
        console.log(persons[fields]); 

        // console.log(persons[choi][person]);
        for (let person of persons[fields]) {
        //     // tag += '<td>' + person + '</td>';
        //     // console.log(persons[choi][person]);
        } 
        // tag += '</tr>';
    }
    
    // tag = tag + '</tbody></table>'
    // document.write(tag);


    // for (let person of persons) {
    //     console.log(person);
    //     for (let field in person) {
    //         console.log(person[field]);
    //     }
    // }
}
createTable();