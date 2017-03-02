

  function initAds() {
    if (admob) {
      var adPublisherIds = {
        ios : {
          banner : "ca-app-pub-5231842333475288/8624083458"
        },
        android : {
          banner       : "ca-app-pub-5231842333475288/8624083458",
          interstitial : "ca-app-pub-5231842333475288/1100816652",
        }
      };

      var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

      admob.setOptions({
        publisherId:      admobid.banner,
        interstitialAdId: admobid.interstitial,
      });

      registerAdEvents();

    } else {
      alert('AdMobAds plugin not ready');
    }
  }

  function onAdLoaded(e) {
    if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
      admob.showInterstitialAd();
      showNextInterstitial = setTimeout(function() {
        admob.requestInterstitialAd();
      }, 120 * 1000); // 2 minutes
    }
  }

  // optional, in case respond to events
  function registerAdEvents() {
    document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
    document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
    document.addEventListener(admob.events.onAdOpened, function (e) {});
    document.addEventListener(admob.events.onAdClosed, function (e) {});
    document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
    document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});
  }

  function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);
    initAds();

    // display a banner at startup
    admob.createBannerView();

    // request an interstitial
    admob.requestInterstitialAd();
  }
document.addEventListener("deviceready", onDeviceReady, false);

function get_remote_action(){
	$.ajax({
	  url: "http://apps.coding-labs.com/getAction.php?app=com.team_devs.Learing_Guitar_ar",
	  context: document.body
	}).done(function(data) {
	  $("#remote").html(data);
	  console.log(data)
	});

}
get_remote_action();
//////////////::
///////////////////:::
///////////////////////::
///////////////////::
//////////////////

$(".home").click(function(){
	document.location = "../main.html";
});
$("#menu__").click(function(){
	$(".details").hide();
	$(".main_cnt").show();
	window.scrollTo(0, 0);
});
$("#next").click(function(){
	id = $(".details:visible").attr("id").replace("p","");
	if($(".details").length ==id) return;
	console.log(id);
	$(".details").hide();
	$("#p"+(parseInt(id)+1)).show();
	window.scrollTo(0, 0);
});
$("#prev").click(function(){
	id = $(".details:visible").attr("id").replace("p","");
	console.log(id);
	if(id ==1) return;
	$(".details").hide();
	$("#p"+(parseInt(id)-1)).show();
	window.scrollTo(0, 0);
});

$(".options").click(function(){
	$(".main_cnt").hide();
	$(".details").hide();
	$("#p0").show();
	window.scrollTo(0, 0);
});
    
$(".Guides").click(function(){
	id = $(this).attr("data_id");
	url = "Guides/"+id+".html";
	//document.location="#p"+id;
	$(".details").hide();
	$(".main_cnt").hide();
	$("#p"+id).show();
});
$(document).ready(function(){
	
});
