var adsManager, videoContent = document.getElementById("contentElement"),
    adContent = document.getElementById("adContainer"),
    canvasGame = document.getElementById("gameCanvas"),
    adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById("adContainer"), videoContent),
    adsLoader = new google.ima.AdsLoader(adDisplayContainer);

    adDisplayContainer.initialize();
function onAdsManagerLoaded(e) {
    (adsManager = e.getAdsManager(videoContent)).addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError), adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested), adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, AdVideoComplete), adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResumeRequested);
    try {
        adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.NORMAL), adsManager.start()
    } catch (e) {
        console.log('error loading ads',e);
        videoContent.style.display = "none", adContent.style.display = "none"
    }
}

function onAdError(e) {
    console.log(e.getError()), console.log(" error in ad "), videoContent.style.display = "none", adContent.style.display = "none", adsManager && adsManager.destroy()
}
adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded, !1), adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, !1);
var contentEndedListener = function() {
        adsLoader.contentComplete(), console.log("ggg")
    },
    adsRequest = new google.ima.AdsRequest;

function onContentPauseRequested() {
}

function AdVideoComplete() {
    videoContent.style.display = "none";
    adContent.style.display = "none";
}

function onContentResumeRequested() {
    //console.log(" ad skipped ");
    videoContent.style.display = "none", adContent.style.display = "none"
}
adsRequest.adTagUrl = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=", adsRequest.linearAdSlotWidth = 640, adsRequest.linearAdSlotHeight = 400, adsRequest.nonLinearAdSlotWidth = 640, adsRequest.nonLinearAdSlotHeight = 150;
