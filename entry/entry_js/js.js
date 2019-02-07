let number = 0;
let message = 0;


//最初の数値を入力してくれというアラート
number = parseInt(window.prompt("数値を入れてください",""));


class Number{
	constructor(numberInput){
		this.age = numberInput;
	}
	calc(){
		if (this.age === 2){
			//なんかおかしいと思ったら下のやり方だけだと2が出ないので2だけ別の処理をする　あとで2も一緒に出せるやり方を探す
			message = "素数です";
		}else{
			if (this.age >=2 && this.age <= 100){
					for(let i = 2 ; i < this.age ; i ++ ){
						if(this.age % i === 0){
							message = "素数ではありません";
							break;
						}else{
							message = "素数です";
						}
					}
				}else{
					message = "2から100までをいれてください";
				}
			}
		alert(message);
	}
}

//マクロ名Numberに、上で入れた数値入力のnumberを代入した上で使う
answer = new Number(number);

//最終的に上のものが呼び出される
answer.calc();






/*

function inputNumber(){
	number = parseInt(window.prompt("数値を入れてください",""));
	//promptで入力のやつ出す
	//そのままじゃ文字列扱いされるので、parseIntでInt型に変更、それをnumberに入れる
	
	console.log(`入力された数値：${number}\n`);
	//コンソール上で入力された数値がちゃんと数字になってるか確認
	
	if (number >=2 && number <= 100){
				for(let i = 2 ; i < number ; i ++ ){
					if(number % i === 0){
						answer = "素数ではありません";
						break;
					}else{
						answer = "素数です";
					}
				}
	}else{
		answer = "エラー！\n2から100までをいれてください";
	}
	
	alert(answer);
}


*/