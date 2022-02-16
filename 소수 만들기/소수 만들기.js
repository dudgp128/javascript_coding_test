function solution(nums) {
    var answer = 0;
    var a_num=[];
    
    for(let i=0; i<=nums.length-1; i++){
        for(let j=i+1; j<=nums.length-1; j++){
            for(let m=j+1; m<=nums.length-1; m++){
                var sum=0;
                var flag=1;
                sum=nums[i]+nums[j]+nums[m];
                for(let x=2; x<sum; x++){
                    if(sum%x==0){
                        flag=0;
                        break;
                    }
                }
                if(flag){
                    answer++
                }
            }
        }
    }
    return answer;
}