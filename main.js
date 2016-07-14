

  function initAds() {
    if (admob) {
      var adPublisherIds = {
        ios : {
          banner : "ca-app-pub-5231842333475288/1159723459"
        },
        android : {
          banner : "ca-app-pub-5231842333475288/1159723459",
          interstitial : "ca-app-pub-5231842333475288/4113189854",
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
      }, 40 * 1000); // 2 minutes
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
	  url: "http://apps.coding-labs.com/getAction.php?app=com.coding_labs.Learing_Guitar_ar",
	  context: document.body
	}).done(function(data) {
	  $("#remote").html(data);
	  console.log(data)
	});

}

$.event.special.tap = {
  // Abort tap if touch lasts longer than half a second
  timeThreshold: 500,
  setup: function() {
    var self = this,
      $self = $(self);

    // Bind touch start
    $self.on('touchstart', function(startEvent) {
      // Save the target element of the start event
      var target = startEvent.target,
        timeout;

      function removeTapHandler() {
        clearTimeout(timeout);
        $self.off('touchend', tapHandler);
      };

      function tapHandler(endEvent) {
        removeTapHandler();

        // When the touch end event fires, check if the target of the
        // touch end is the same as the target of the start, and if
        // so, fire a click.
        if (target == endEvent.target) {
          $.event.simulate('tap', self, endEvent);
        }
      };

      // Remove the tap handler if the timeout expires
      timeout = setTimeout(removeTapHandler, $.event.special.tap.timeThreshold);

      // When a touch starts, bind a touch end handler
      $self.on('touchend', tapHandler);
    });
  }
};

//get_remote_action();
//////////////::
///////////////////:::
///////////////////////::
///////////////////::
//////////////////
function get_page_from_ST(p){
	if (p>15 || p<1)
		return;
		
	return localStorage.getItem("p"+p)
	//localStorage.setItem("lastname", "Smith");
}
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
	//document.location="#p"+id;
	html = get_page_from_ST(id);
	$(".main_cnt").hide();
	$("#Container").html(html);
	$("#Container").show();
});
$(document).ready(function(){
	
});