const { browser, $, $$ } = require("@wdio/globals")
const HomePage = require("../homeModule/homePage")
const videoOperationsContainer = require("../util/videoOperationsContainer")

class DemoVideosPage extends HomePage{
    
    get VIDEO_COUNT(){
        return 6;
    }

    get videoBlockContainer(){
        return $$(`article`)
    }

    get videoTitleContainer(){
        return $$(`article > div > h3 > a`)
    }
    
    async getVideoCount(){
        return (await this.videoBlockContainer).length === await this.VIDEO_COUNT ? await(this.videoBlockContainer).length : 0;
    }

    async readVideoTitle(videoTitleContainerInput){
        for(let i = 0 ; i < (await videoTitleContainerInput).length ; i++){
            const currentVideoTitle = await this.videoTitleContainer[i].getText();
            if(!await videoTitleContainerInput[i] === currentVideoTitle){
                return false;
            }
        }
        return true;
    }

    async accessTheVideo(){
        const RANDOM_NUMBER = Object.freeze(Math.floor(Math.random() * 6) + 1);
        let videoImageBlock = await $(`article:nth-child(${RANDOM_NUMBER}) > a > div > picture > img`);
        await videoImageBlock.scrollIntoView();
        await videoImageBlock.waitForClickable();
        await videoImageBlock.click();
        return await videoOperationsContainer.middleVideoPlayButton.isDisplayed() && 
            await videoOperationsContainer.bottomLeftCornerVideoPlayButton.isDisplayed();
    }

    async playTheVideo(){
        await videoOperationsContainer.bottomLeftCornerVideoPlayButton.scrollIntoView();
        await videoOperationsContainer.bottomLeftCornerVideoPlayButton.waitForClickable();
        await videoOperationsContainer.bottomLeftCornerVideoPlayButton.click();
        await videoOperationsContainer.videoPauseButton.waitForClickable();
        return await videoOperationsContainer.videoPauseButton.isDisplayed();
    }

    async pauseTheVideo(){
        await videoOperationsContainer.videoPauseButton.waitForClickable();
        await videoOperationsContainer.videoPauseButton.click();
        await videoOperationsContainer.bottomLeftCornerVideoPlayButton.waitForClickable();
        return await videoOperationsContainer.bottomLeftCornerVideoPlayButton.isDisplayed();
    }

    async changeVideoSubtitle(optionToBeSelected){
        try{
            await videoOperationsContainer.showCaptionsMenu.waitForClickable();
            await videoOperationsContainer.showCaptionsMenu.click();
            if(optionToBeSelected === "English"){
                await videoOperationsContainer.captionOptionEnglish.waitForClickable();
                await videoOperationsContainer.captionOptionEnglish.click();
                await videoOperationsContainer.showCaptionsMenu.waitForDisplayed();
                return await videoOperationsContainer.showCaptionsMenu.isDisplayed();
            }
            else if(optionToBeSelected === "Off"){
                await videoOperationsContainer.captionOptionOff.waitForClickable();
                await videoOperationsContainer.captionOptionOff.click();
                await videoOperationsContainer.showCaptionsMenu.waitForDisplayed();
                return videoOperationsContainer.showCaptionsMenu.isDisplayed();
            }
            return false;
        }
        catch(error){
            console.log(`There is not Caption option present for the video`);
            return true;
        }
    }

    async muteTheVideo(){
        await videoOperationsContainer.videoMuteButton.moveTo();
        await videoOperationsContainer.videoMuteButton.waitForClickable();
        await videoOperationsContainer.videoMuteButton.click();
        await videoOperationsContainer.videoUnMuteButton.waitForDisplayed();
        return await videoOperationsContainer.videoUnMuteButton.isDisplayed();
    }

    async unMuteTheVideo(){
        await videoOperationsContainer.videoUnMuteButton.waitForClickable();
        await videoOperationsContainer.videoUnMuteButton.click();
        await videoOperationsContainer.videoMuteButton.waitForClickable();
        return await videoOperationsContainer.videoMuteButton.isDisplayed();
    }

    async changeTheVideoQuality(qualityValue){
        await videoOperationsContainer.showSettingsButton.waitForClickable();
        await videoOperationsContainer.showSettingsButton.click();
        await videoOperationsContainer.videoQualityMenu.waitForClickable();
        await videoOperationsContainer.videoQualityMenu.click();
        for(let i = 0 ; i < (await videoOperationsContainer.videoQualityContainer).length ; i++){
            const currentQualityValue = await videoOperationsContainer.videoQualityContainer[i].getText();
            const currentElement = await videoOperationsContainer.videoQualityContainer[i];
            if(currentQualityValue === qualityValue){
                await currentElement.waitForClickable();
                await currentElement.click();
                await this.stopExecution(2);
                return await videoOperationsContainer.hideSettingsButton.isDisplayed();
            }
        }
        return false;
    }

    async changeTheVideoPlayBackRate(videoSpeedRate){
        await videoOperationsContainer.videoSpeedMenu.waitForClickable();
        await videoOperationsContainer.videoSpeedMenu.click();
        for(let i = 0 ; i < (await videoOperationsContainer.videoSpeedContainer).length ; i++){
            await videoOperationsContainer.videoSpeedContainer[i].waitForClickable();
            const currentElement = await videoOperationsContainer.videoSpeedContainer[i];
            const currentSpeedValue = await videoOperationsContainer.videoSpeedContainer[i].getText();
            if(currentSpeedValue === videoSpeedRate){
                await currentElement.waitForClickable();
                await currentElement.click();
                await videoOperationsContainer.hideSettingsButton.waitForDisplayed();
                return await videoOperationsContainer.hideSettingsButton.isDisplayed();
            }
        }
        return false;
    }

    async playTheVideoInFullScreen(){
        await videoOperationsContainer.fullScreenButton.waitForClickable();
        await videoOperationsContainer.fullScreenButton.click();
        await videoOperationsContainer.unFullScreenButton.waitForDisplayed();
        return videoOperationsContainer.unFullScreenButton.isDisplayed();
    }

    async playTheVideoInUnFullScreen(){
        await videoOperationsContainer.unFullScreenButton.waitForClickable();
        await videoOperationsContainer.unFullScreenButton.click();
        await videoOperationsContainer.fullScreenButton.moveTo();
        await videoOperationsContainer.fullScreenButton.waitForClickable();
        return await videoOperationsContainer.fullScreenButton.isClickable();
    }

    async scrubTheVideo(secondsToOffset){
        const currentTime = await browser.execute((video) => {
            return video.currentTime;
        }, await videoOperationsContainer.videoElement);
        if(secondsToOffset >= 0){
            const newTimeForward = currentTime + secondsToOffset;
            await browser.execute((video, time) => {
                video.currentTime = time;
            }, await videoOperationsContainer.videoElement, newTimeForward);
            await this.stopExecution(2);
            return true;
        }
        else{
            const newTimeBackward = currentTime - Math.abs(secondsToOffset);
            await browser.execute((video, time) => {
                video.currentTime = time;
            }, await videoOperationsContainer.videoElement, newTimeBackward);
            await this.stopExecution(2);
            return true;
        }
    }
}

module.exports = DemoVideosPage;