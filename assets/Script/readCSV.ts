const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Button)
    readBtn:cc.Button=null;
    @property(cc.Button)
    deT:cc.Button=null;

    SN:Array<number>=[];
    resJson:String;
    delayTime=1;
    onLoad () {
        let self = this;
        cc.loader.loadRes("test",function(err,res){
            if(err){
                cc.error(err);
            }
            else{
                self.resJson = JSON.stringify(res);
                // resJson = res
                let resS = JSON.parse(<string>self.resJson);
                // let x = resJson.search("r");
                // console.log(x);
                // console.log(resJson);
                // console.log("res length: "+res.length);
                let RCount=0;
                for(let u=0;u<self.resJson.length;u++){
                    if(self.resJson[u]=="r"){
                        self.SN.push(u);
                        RCount++;
                        // console.log("SN Length: "+SN.length+"  r location "+u);
                    }
                }
                console.log("Rcount "+RCount);
            }
        });
    }

    start () {

    }

    // update (dt) {}

    read(){
        let self = this
        let contents:Array<String>=[];
        let Content:Array<String>=[];
        let y;
        for(let i=0;i<self.SN.length;i++){
            if(i==0){
                y = self.resJson.substring(0,self.SN[i]);
                y = y.substring(1,y.length-1);
                // console.log("y : "+y);
                Content.push(y);
            }
            else{
                y = self.resJson.substring(self.SN[i-1],self.SN[i]);
                y = y.substring(y.search("n"));
                y = y.substring(1,y.length-1);
                // console.log("y : "+y);
                Content.push(y);
            }
        }
        console.log(Content);
        console.log(this.delayTime);
    }
    ChangeTime(){
        this.delayTime-=0.1;   
    }
}
