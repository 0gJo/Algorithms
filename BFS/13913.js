import Queue from '../DataStructure/Queue.js';



const main = function(start, end){
    const max = 100000;
    const q = new Queue();
    const check = new Array(max);
    const dist = new Array(max);
    const from = new Array(max);
    
    //시작
    q.enqueue(start);
    check[start] = true;
    dist[start] = 0; //dist[i] : 시작점으로부터의 i까지 거리 
    
    while(!q.isEmpty()){
      
      const now = q.dequeue();
    
      //연결된 노드를 큐에 넣기 
      
      if(now+1 <= max){
        const next = now+1;
        if(!check[next]){
          q.enqueue(next);
          check[next]=true;
          dist[next] = dist[now] + 1;
          from[next] = now;
        }
        
      }
      
      if(now*2 <= max){
        const next = now*2;
        if(!check[next]){
          q.enqueue(next);
          check[next]=true;
          dist[next] = dist[now] + 1;
          from[next] = now;
        }
      }
      
      if(now-1 >= 0){
        const next = now-1;
        if(!check[next]){
          q.enqueue(next);
          check[next]=true;
          dist[next] = dist[now] + 1;
          from[next] = now;
        }
      }
      
      
      //for(i=0; i<a[now].size(); i++){
      //  const next = a[now][i];
      //  if(check[next] == false){
      //  q.enqueue(next);
      //  check[next] = true;
      //}
      //}
      
      
    }
    
      console.log(dist[end]);
      print(start, end, from);
    
  }

  //start에서 end까지 거친 노드를 출력 
  const print = function(start, end, from){

    if(start!=end){
      print(start, from[end], from);
    }

    console.log(end);

  }
  
  main(5,17);