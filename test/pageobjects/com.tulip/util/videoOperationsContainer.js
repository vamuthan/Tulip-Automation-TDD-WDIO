const { browser } = require('@wdio/globals')
const { $, $$ }  = require('@wdio/globals')
const WebPage = require('../base/webPage.js')

class VideoOperationsContainer extends WebPage{

    get middleVideoPlayButton(){
        return $(`button[type='button']`)
    }

    get bottomLeftCornerVideoPlayButton(){
        return $(`button[title='Play Video']`)
    }

    get videoMuteButton(){
        return $(`button[title='Mute']`)
    }

    get videoUnMuteButton(){
        return $(`button[title='Unmute']`)
    }

    get timeStampTextContent(){
        return $(`div[class='w-playbar__time']`)
    }

    get videoSliderButton(){
        return $(`div[aria-label='Playbar'] > div:nth-child(2)`)
    }

    get volumeSliderButton(){
        return $(`div[class='w-volume-grabber'] > div`)
    }

    get hideSettingsButton(){
        return $(`button[title='Hide settings menu']`)
    }

    get showSettingsButton(){
        return $(`button[title='Show settings menu']`)
    }

    get videoPauseButton(){
        return $(`button[title='Pause']`)
    }

    get showCaptionsMenu(){
        return $(`button[title='Show captions menu']`)
    }

    get hideCaptionsMenu(){
        return $(`button[title='Hide captions menu']`)
    }

    get captionOptionSearchVideo(){
        return $(`button[title='Hide captions menu'] ~ div > div > div > div > div > button`)
    }

    get captionOptionOff(){
        return $(`button[title='Hide captions menu'] ~ div > div > div > div > div > fieldset > div:nth-child(2) > 
            label`)
    }

    get captionOptionEnglish(){
        return $(`button[title='Hide captions menu'] ~ div > div > div > div > div > fieldset > div:nth-child(3) > 
            label`)
    }

    get videoQualityMenu(){
        return $(`button[data-handle='quality']`)
    }

    get videoSpeedMenu(){
        return $(`button[data-handle='playbackRate']`)
    }

    get videoQualityContainer(){
        return $$(`button[data-handle='quality'] ~ div > fieldset > div > label`)
    }
    
    get videoSpeedContainer(){
        return $$(`button[data-handle='playbackRate'] ~ div > fieldset > div > label`)
    }

    get fullScreenButton(){
        return $(`button[title='Fullscreen']`)
    }

    get unFullScreenButton(){
        return $(`button[title='Unfullscreen']`)
    }

    get videoElement(){
        return $(`video`)
    }
}

module.exports = new VideoOperationsContainer();