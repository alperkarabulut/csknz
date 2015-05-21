// JavaScript Document

/*function toplamaIslemi2(a,b,c,d){
	
	return false;

}

var toplamaIslemi = function(a,b,c){

	return true;

}


var toplamaIslemi3 = function (a,b){
	return arguments[0] + arguments[1];
}


*/
var okul = function(mOkulAdi){
	var okulAdi =  mOkulAdi;
	var ogrenciler = new Array();
	
	this.kayitEkle = function(mAd,mSoyad){
		ogrenciler.push( new ogrenci(mAd,mSoyad));
		alert( mAd + " öğrencisi eklendi" );
	};
	this.kayitEkle2 = function(){
		var mAd = document.getElementById("ad").value;
		var mSoyad = document.getElementById("soyadi").value;

		ogrenciler.push( new ogrenci(mAd,mSoyad));
		alert( mAd + " öğrencisi eklendi" );
	};
	
	this.kayitListele = function(){
		return ogrenciler;
	}
	this.getOkulAdi = function(){
		return okulAdi;
	}
	var kayitSil = function(){
		ogrenciler.pop(1);
	}
}


var ogrenci = function( mOgrenciAdi, mOgrenciSoyadi){
	var ad = mOgrenciAdi;
	var soyadi = mOgrenciSoyadi;
	this.ogrenciNo = "";
	
	this.getOgrenciAdi = function(){
		return ad;
	}
	this.getOgrenciSoyadi = function(){
		return soyadi;
	}
}
