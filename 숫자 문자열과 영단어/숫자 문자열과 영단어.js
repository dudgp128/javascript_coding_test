function solution(s) {
    var answer = 0;
    const eng=['zero','one','two','three','four','five','six','seven','eight','nine'];
    var a=s;
    if((/[a-z]/g).test(s)){
    eng.forEach((e,i)=>{
        let b=e
        let pattern=new RegExp(b,"g");
        s=s.replace(pattern,i);
    })
    }
    answer = Number(s);
    return answer;
}