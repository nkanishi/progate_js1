// if文
cosnt level=12;
if(level>10){
 console.log("レベルが10より大きいです");
}
// 真偽値(1)
const age =24;
console.log(age>=20);
console.log(age<20);
if(age>=20){
    console.log("私は20歳以上です");
}
// 真偽値(2)
const password="ninjawanko";
if(password==="ninjawanko"){
    console.log("ログインに成功しました");
}
if(password !=="ninjawanko"){
    console.log("パスワードが間違っています");
}
// else
const  age=17;
if(age>=20){
    console.log("私は20歳以上です");
}else{
    console.log("私は20歳未満です");
}

// else if
const age=17;
if(age>=20){
    console.log("私は20歳以上です");
}else if(age>=10){
    console.log("私は20歳未満ですが、10歳以上です");
}else{
    console.log("私は10歳未満です");
}
// 複数条件式
const age=24;
if(age>=20 && age<30){
    console.log("私は20代です");
}
// swichi(1)
const rank=2;
switch(rank){
    case 1:
        console.log("金メダルです");
        break;
    case 2:
        console.log("銀メダルです");
        break;
    case 3:
        console.log("銅メダルです");
        break;
}
// switch(2)
const rank=5;
switch(rank){
    case 1:
        console.log("金メダルです");
        break;
    case 2:
        console.log("銀メダルです");
        break;
    case 3:
        console.log("銅メダルです");
        break;
　　default:
        console.log("メダルありません");
        break;
}