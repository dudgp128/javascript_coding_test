function solution(lottos, win_nums) {
    var count=0;
    var answer=[];
    if(lottos.includes(0)){
        
        var array=0;
        for (var i in lottos){
            if(lottos[i]==0){
                count++;
            }
            for( var j in win_nums){
                if(lottos[i]==win_nums[j]){
                    array++;
                }
            }
        }
        answer.push(lottos.length-array+1-count);//max
        
        if(count==6){
            answer.push(6);//min
        }
        else{
            var min=lottos.length-array+1
            if(min>6){
                min=6;
            }
            answer.push(min); //min
        }
    }
    else{
        var count=0;
        for(var i in lottos){
            if(win_nums.includes(lottos[i])){
                count++;
            }
        }
        var rank=lottos.length-count+1;
        if(rank>6){
            rank=6;
        }
        answer.push(rank);
        answer.push(rank);
    }
    return answer;
    
}