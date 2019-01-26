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
adsRequest.adTagUrl = "https://developers.google.com/interactive-media-ads/docs/sdks/html5/vastinspector?tag=https%253A%252F%252Fpubads.g.doubleclick.net%252Fgampad%252Fads%253Fsz%253D640x480%2526iu%253D%252F124319096%252Fexternal%252Fsingle_ad_samples%2526ciu_szs%253D300x250%2526impl%253Ds%2526gdfp_req%253D1%2526env%253Dvp%2526output%253Dvast%2526unviewed_position_start%253D1%2526cust_params%253Ddeployment%25253Ddevsite%252526sample_ct%25253Dskippablelinear%2526correlator%253D", adsRequest.linearAdSlotWidth = 640, adsRequest.linearAdSlotHeight = 400, adsRequest.nonLinearAdSlotWidth = 640, adsRequest.nonLinearAdSlotHeight = 150;
