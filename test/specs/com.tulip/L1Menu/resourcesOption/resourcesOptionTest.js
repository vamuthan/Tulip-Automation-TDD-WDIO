const { assert, expect } = require("chai");
const HomePage = require("../../../../pageobjects/com.tulip/homeModule/homePage");
const DemoVideosPage = require("../../../../pageobjects/com.tulip/resourcesModule/demoVideosPage");
const testData = require("../../../resources/testData.json")
const videoOperationsTestData = testData.videoOperationsTestData;

describe("DemoVideos Module", () => {
    videoOperationsTestData.forEach(({pageURLContent, videoTitleContainer, videoSubtitleValue, videoQualityValue, 
        videoPlaybackRate, secondsToOffsetTheVideo, videoCount}) => {
        it("should perform all the video operations in the DemoVideo module.", async() => {
            const homePage = new HomePage();
            assert((await homePage.navigateToDemoVideosPage()).includes(pageURLContent));
            const demoVideosPage = new DemoVideosPage();
            assert(await demoVideosPage.getVideoCount(), videoCount);
            assert(await demoVideosPage.readVideoTitle(videoTitleContainer), true);
            assert(await demoVideosPage.accessTheVideo(), true);
            assert(await demoVideosPage.playTheVideo(), true);
            assert(await demoVideosPage.pauseTheVideo(), true);
            assert(await demoVideosPage.playTheVideo(), true);
            assert(await demoVideosPage.changeVideoSubtitle(videoSubtitleValue), true);
            assert(await demoVideosPage.muteTheVideo(), true);
            assert(await demoVideosPage.unMuteTheVideo(), true);
            assert(await demoVideosPage.changeTheVideoQuality(videoQualityValue), true);
            assert(await demoVideosPage.changeTheVideoPlayBackRate(videoPlaybackRate), true);
            assert(await demoVideosPage.playTheVideoInFullScreen(), true);
            assert(await demoVideosPage.playTheVideoInUnFullScreen(), true);
            assert(await demoVideosPage.scrubTheVideo(secondsToOffsetTheVideo), true);
        })
    })
})