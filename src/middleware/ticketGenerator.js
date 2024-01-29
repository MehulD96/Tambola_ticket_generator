export function tambolaGenerator (){

    
       // let data =[]
    for(let i=0; i<=3; i++){
        let gfg = [];
        let row = 3;
        let col = 9;
        
        for (let i = 0; i < row; i++) {
            gfg[i] = [];

            for (let j = 0; j < col; j++) {
                let l=j+1
                let k =10;
                const ran = Math.floor(Math.random()*(l*k)+1);
                if(ran>(l-1)*k){
                    gfg[i][j]=ran
                }else{
                    gfg[i][j]=0
                }
                
            }
        }
        return gfg
        }
        
    
    }
    
    