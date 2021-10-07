'hello'.slice(0,1);




function checkGender(birthInfo){
    a=birthInfo.substr(-7,1);
    if(a==2 | a==4)
    return '여자';
    else if (a==1 | a==3)
    return '남자';
}
// function checkGender(birthInfo){
//     a=birthInfo.substring(-7,1);
//     if(a==2 | a==4)
//     return '여자';
//     else if (a==1 | a==3)
//     return '남자';
// }

document.write(checkGender('880801-2478123'));