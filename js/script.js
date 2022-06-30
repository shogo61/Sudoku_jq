$(function(){
    // スタート画面
    $(".task").hide();
    $(".btns").hide();

    $(".start button:first-child").click(function(){
        $(".start").hide();
        $(".task").show();
        $(".btns").show();

        // 問題が上書きされないようにクラス付与
        for(var i=0;i<81;i++){
            if(!$("td").eq(i).text()==""){
                $("table tr td").eq(i).addClass("done");
            }
        }
    $("td").click(function(){
        
        //クリックされた地点の背景を変更
        $("td").removeClass("target");
        if(!$(this).hasClass("done")){// doneとtargetが同時に存在しないように
            $(this).addClass("target");
        }
        
        // ボタンが押されたらその値をtdに入力
        $("button").click(function(){
            var btn=$(this).index();
            $(".target").html(btn);
        })
        $("html").keyup(function(e){
            switch(e.which){
                case 49:
                    $(".target").html(1)
                break;
                case 50:
                    $(".target").html(2)
                break;
                case 51:
                    $(".target").html(3)
                break;
                case 52:
                    $(".target").html(4)
                break;
                case 53:
                    $(".target").html(5)
                break;
                case 54:
                    $(".target").html(6)
                break;
                case 55:
                    $(".target").html(7)
                break;
                case 56:
                    $(".target").html(8)
                break;
                case 57:
                    $(".target").html(9)
                break;
                case 48:
                    $(".target").html(" ")
                break;
            }
            
        })

        //縦と横の値を毎回初期化
        for(var i=0;i<18;i++){
            $("th").eq(i).html(0);
        }
        
        //横の計算と二次元配列への格納を同時に
        var data=[];
        var tr=$("table tr");
        for(var i=0,l=tr.length;i<l;i++){
            var cells=tr.eq(i).children();
            var sum=0;
            for(var j=0,m=cells.length;j<m;j++){
                if(typeof data[i]=="undefined"){
                    data[i]=[];
                }
                data[i][j]=cells.eq(j).text();
                sum+=Number(data[i][j]);
            }
            $("th").eq(i).html(sum);
        }
        
        //縦の計算
        for(var i=0;i<9;i++){
            var sumy=0;
            for(var j=0;j<9;j++){
                if(typeof data[i]=="undefined"){
                    data[i]=[];
                }
                sumy+=Number(data[j][i]);
                
                $("th").eq(i+9).html(sumy);
            };
        };
        
        //3*3のブロックごとの計算
        var start_i=0;
        var stop_i=0;
        var b_cnt=0
        while(b_cnt<3){
            var sumb1=0;
            var sumb2=0;
            var sumb3=0;
            for(start_i;stop_i;start_i++){
                for(var j=0;j<3;j++){
                    sumb1+=Number(data[i][j]);
                }
                for(var j=3;j<6;j++){
                    sumb2+=Number(data[i][j]);
                }
                for(var j=6;j<9;j++){
                    sumb3+=Number(data[i][j]);
                }
            };
            $(".block th").eq(0).html(sumb1);
            $(".block th").eq(1).html(sumb2);
            $(".block th").eq(2).html(sumb3);
            b_cnt+=1;
        }
        
        //完了したかの判定
        var cnt=0;
        for(var i=0;i<18;i++){
            if(($("table th").eq(i).text())==45){
                cnt+=1;
            }
        }
        if(cnt==18){
            alert("おめ");
        }
        e.stopPropagation();
        
        return false;
    })
        
    });
});
