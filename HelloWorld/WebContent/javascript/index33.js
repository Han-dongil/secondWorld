//index3.js
let messages = ['Hello', 'Good Morning', 'Hi'];

let ulTag = document.createElement('ul'); // ul
// ulTag.innerHTML='<li>Hello</li>';
// for(let i=0 ; i<messages.length;i++){

//     let liTag=document.createElement('li'); //<li></li>
//     liTag.innerHTML= messages[i];
//     ulTag.appendChild(liTag);

// }

// class = show 에 자손으로 ulTag 붙여주기
// let divShow=document.getElementById('show');
// divShow.appendChild(ulTag);

// let fruits=[{
//     name : '사과',
//     price : 1000
// },{
//     name : '바나나',
//     price : 2000
// },{
//     name:'체리',price:3000
// }];

// for(let fruit of fruits)
// {
//     let li = document.createElement('li');
//     li.innerHTML=fruit.name +','+fruit.price;
//     ulTag.appendChild(li);
// }

// let divFruits=document.getElementById('fruits');
// divFruits.appendChild(ulTag);

let multi=document.getElementById('multi')
let table = document.createElement('table');
table.setAttribute('border', '1' );
for (k=2 ; k<10;k++)
{
    let trTag = document.createElement('tr');
    for (i = 2; i < 10; i++) {
        tdTag = document.createElement('td');
        tdTag.setAttribute('style','text-align: center;');
        tdTag.innerHTML = i + '*' + k + '=' + (k*i);
        trTag.appendChild(tdTag);
        table.appendChild(trTag);
    }
}
    multi.appendChild(table);
