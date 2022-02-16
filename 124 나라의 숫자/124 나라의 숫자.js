function solution(n) {
    var answer = '';
    var array=[4,1,2]
    
    while(n){
        answer=array[n%3]+answer;
        n=Math.floor((n-1)/3);
    }
    return answer;
}