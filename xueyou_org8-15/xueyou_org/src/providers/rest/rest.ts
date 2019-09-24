import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers} from '@angular/http';
import { Observable } from "rxjs/Rx";
import { ToastController } from 'ionic-angular';
import { map,catchError } from "rxjs/operators";
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const severUrl = 'http://www.xuey.com/school';
// const severUrl = '';
// const severUrl = 'http://www.hongbao.com/api';
//-----------------------参数传递必须加上token--------------------
//支付接口
// const payApiUrl = 'https://api.qapple.io/v2/api/merchant/merchantcenter/pay/prePay';//青苹果支付接口
//http://paysrv.qapple.io/v2/api/merchant/merchantcenter/pay/prePay;//测试环境
// const payApiUrl = 'https://api.qapple.io/id?n=qwe33353'

// http://paysrv.qapple.io/v2/api/merchant/merchantcenter/pay/prePay
// https://paysrv.qapple.io/v2/api/merchant/merchantcenter/pay/prePay
//测试
// const GetIpUrl = severUrl+'/test/get_ip';


@Injectable()
export class RestProvider {

  constructor(public http: Http,
			  public toastCtrl: ToastController,
			) {
	}
	//****************系统接口************************
	// public GetIp(data){
  //   return this.postUrl(GetIpUrl,data);
	// }
	



	private postUrl(url:string, pramas:any,token:string=''): Observable<any>{
		let headers;
		if (token) {
			headers = new Headers({'Content-Type': 'application/json; charset=utf-8','token':token});
		}else{
			headers = new Headers({'Content-Type': 'application/json; charset=utf-8' });
		}
        let options = new RequestOptions({headers: headers});
			// console.log(options);
		  return this.http.post(url, pramas, options).pipe(
						map(this.extracData),
						catchError(this.handleError)
					)	
	}
	//方法不起作用
	public Toast(message:string){ 
		let toast = this.toastCtrl.create({
				message: message,
				duration: 3000
			});
		toast.present();
	}
	
	private extracData(res:Response)
	{
		let body = res.json();
		// if(body.code==100){ 
		// 	this.Toast(body.message);//监测到您的帐号在其他设备上登录,需重新登录!
		// }else if(body.code==101){ 
		// 	this.Toast(body.message);//登录失败,请重新登录!
		// }else if(body.code==102){ 
		// 	this.Toast(body.message);//帐号被禁用,请联系客服.
		// }else{ 
		return body;
		// }
	}

	private  handleError(error:Response | any)
	{
		let errMsg:string;

		if(error instanceof Response){
			const body = error.json() || '';
			const err = body.data;

			errMsg =`${error.status} - ${error.statusText || ''} ${err}`;
		}else{
			errMsg = error.message ? error.message : error.toString();
		}

		console.log(errMsg);

		return Observable.throw(errMsg);
	}
}
