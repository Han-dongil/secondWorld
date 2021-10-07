function sum(a,b){
    let n1 =a;
    let n2 =b;
    return n1+n2;
}

console.log(sum(1,1));

function createObject(name,age,score){
    let obj = {
        name : name,
        age : age
    };
    obj.score =score;
    obj.pass= obj.score>=60 ? 'pass':'fail';

    return obj;
}

let newObj=createObject('유상우',23,55);
console.log('이름'+newObj.name+'나이'+newObj.age+'점수'+newObj.score+'합격'+newObj.pass);

// tr태그 생성연습.
function createTr(person){
    let tag ='<tr>';
    for(let field in person){
        tag+="<td>" + person[field]+"</td>";
    }
    if(person.score>=60){
        tag+="<td class='pass'>pass</td>";
    }
    else{
        tag+="<td class='fail'>fail</td>";
    }
    tag+="</tr>";
    return tag;

}
createTable();
