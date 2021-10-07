let xhtp = new XMLHttpRequest();
xhtp.onload = function () {
    let data = JSON.parse(xhtp.responseText);

    showEmpList(data);

}
xhtp.open('get', '../empJsonServlet.json');
xhtp.send();

function showEmpList(data) {
    let table = document.createElement('table');
    table.setAttribute('border', '1');
    let tr, td, txt ,div,btn,bti;
    tr = document.createElement('tr');
    for (let title in data[0])
    {
        txt=document.createTextNode(title);
        td=document.createElement('th');
        td.appendChild(txt);
        tr.appendChild(td);
    }
    bti=document.createElement('th');
    bti.innerHTML='삭제';
    tr.appendChild(bti);
	    table.appendChild(tr);
    for (let obj of data) {  
        tr = document.createElement('tr');
        
        for (let field in obj) {
            td = document.createElement('td');
            txt = document.createTextNode(obj[field]);
            td.appendChild(txt);
            //   console.log(td);
            tr.appendChild(td);
            // tr.id=tr.firstChild.firstChild.nodeValue;
        }
        btn=document.createElement('button');
        // btn.onclick='btnClick(e)';
        btn.id=tr.firstChild.firstChild.nodeValue;
        console.log(document.getElementsByTagName('button'));
        btn.innerHTML='삭제';
        tr.appendChild(btn);
        table.appendChild(tr);

    }
    div=document.getElementById('show');
    div.appendChild(table);
    

    
}
