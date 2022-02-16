function solution(numbers) {
    var num=[1,2,3,4,5,6,7,8,9,0]
    var answer = 0;
    num.forEach((a,i)=>{
        if(!numbers.includes(a)){
          answer+=a;
        }
    })
    return answer;
}