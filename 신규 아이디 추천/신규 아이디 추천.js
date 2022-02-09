function solution(new_id) {
    var answer = '';
    var id=new_id.toLowerCase()
    .replace(/[^\w-.]/g,'') // [a-z0-9\_] === [\w]
    .replace(/\.{2,}/g,'.')
    .replace(/^\.|\.$/,'') // 첫글자, 마지막 글자 '.' 인 것 지우기
    .slice(0,15);
    
    if(id ===''){
        id='a';
    } 
    
    if(id.length >=16){
        id=id.slice(0,15)
    }

    if(id[(id.length-1)]=='.'){ 
       id=id.replace(/\.$/,'');
    }
    if(id.length<=2){
     let array=id.split('');
        while(array.length<3){
            array.push(array[(array.length-1)])
        }
        answer=array.join('');
    }
    else{
        answer=id;
    }
    console.log(answer);
    return answer;
}