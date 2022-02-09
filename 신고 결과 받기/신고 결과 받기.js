function solution(id_list, report, k) {
    const report_set=[...new Set(report)].map(a=>a.split(' '));
    
    let counts=new Map();
    for(var i of report_set){
        counts.set(i[1], counts.get(i[1])+1||1);
    }
    
    let mail=new Map();
    for(var i of report_set){
        if(counts.get(i[1])>=k){
            mail.set(i[0], mail.get(i[0])+1||1);
        }
    }
    
    
 let answer=id_list.map((a)=>mail.get(a)||0);
 return answer
} 