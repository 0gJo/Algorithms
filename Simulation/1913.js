

/**
 * 1. 가장 중앙점(rotateCnt,rotateCnt)에 1을 입력한다.
 * 2. 1번째 회오리의 시작점(rotateCnt-1, rotateCnt-1)을 잡는다.
 * 3. 범위를 벗어나면 방향을 바꾸어서 이동한다. 방향은 오른쪽, 아래, 왼쪽, 위 
 *    ( 방향 바꾸기 전까지는 계속 동일한 방향으로 이동함 )
 *    ( 범위는 rotateCnt-i ~ rotateCnt+i )
 * 4. 한바퀴 다돌면 (돌아온 위치가 시작점이면) 2번째 시작점 위치로 이동한다.
 * 5. 2부터 반복... 반복횟수는 회오리 수(rotateCnt)만큼
 */


const main = function (n) {
    const m = Array.from(Array(n), () => new Array(n));

    let num = 1;
   
    const rotateCnt = parseInt(n / 2);
   
    m[rotateCnt][rotateCnt] = num;


    const dr = [0,1,0,-1];
    const dc = [1,0, -1,0];

    for (let i = 1; i <= rotateCnt; i++) {
        let r = rotateCnt-i, c = rotateCnt-i;

        for (let j = 0; j < dr.length; j++) {ㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ
                m[r][c] = ++num;

                
            }
            
        }

        console.log(m);

    }

}

    main(5);
