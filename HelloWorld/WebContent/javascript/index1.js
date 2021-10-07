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

    let tag = '<table border="1">';
    tag += '<thead><tr><th>이름</th><th>나이</th><th>점수</th><th>합격여부</th></tr></thead>';
    tag += '<tbody>';
    for (let person of persons) {
    //     if (person.score >= 60) {
    //         tag += '<tr class="pass">';
    //     } else {
    //         tag += '<tr class="fail">';
    //     }
    //     for (let field in person) {
    //         tag += '<td>' + person[field] + '</td>';
    //     }
    //     if (person.score >= 60) {
    //         tag += '<td>Pass</td>';
    //     } else {
    //         tag += '<td>Fail</td>';
    //     }
    //     tag += '</tr>';
    // }
    // tag = tag + '</tbody></table>'
    // document.write(tag);
    tag+=createTr(person);
    }
    tag=tag+"</body></table>";
    document.write(tag);
}
// createTable();