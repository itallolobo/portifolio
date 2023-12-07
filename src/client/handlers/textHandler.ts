import * as $ from 'jquery'
import 'jquery-ui'
import texts from '../misc/texts'



class TextHandler {
    public title: JQuery<HTMLElement>
    public paragraph: JQuery<HTMLElement>
    public dropValue: number
    public isAnimationRunning: boolean
    public textLanguage: number = 0
    public textIndex: number = 0
    constructor() {
        this.title = $('#title')
        this.paragraph = $('#paragraph')
        this.dropValue = 1.5


        //if browser language is diferent from portuguese, change language
        console.log(navigator.language)
        if (navigator.language != 'pt-BR') {
            $('.checkbox').prop('checked', true)
            this.textLanguage = 1

        }
        else {
            $('.checkbox').prop('checked', false)

            
        }
        //catch language change
        $('.checkbox').on('click', () => {
            this.changeLanguage($('.checkbox').prop('checked') ? 1 : 0)
        })
    }

    changeLanguage(language: number) {
        //fade out
        this.fadeAllOut()
        //wait for fade out
        setTimeout(() => {
            //change language
            this.textLanguage = language
            this.fadeIn(this.textIndex)

        }, 300)
        //change language

    }

    fadeAnimation(elem: JQuery<HTMLElement>, isReversed: boolean = false) {
        //get top

        
        if (isReversed) {
            //add ease in
            //set top value
           // elem.css('top', `+=${this.dropValue}%`)
            elem.animate({ opacity: 0}, 300, () => {}) // top: `+=${this.dropValue}%` 
            //remove top value
            return
        }

        elem.animate({ opacity: 1}, 300, () => {}) //, top: `-=${this.dropValue}%` 
    }

    fadeIn(index: number, isReversed: boolean = false) {
        
        if (isReversed) {
            index = index - 1
            if (index < 0) {
                return

            }
        }
        this.textIndex = index
        //console.log(this.textsParams[index].text)
        console.log(texts[this.textLanguage][0][index])

        if (texts[this.textLanguage][0][index] != "") { //0 for title, 1 for paragraph
            this.title.removeClass('title-projetos')
            console.log(index)
            if (index == 1){ //titulo projetos
                this.title.text(texts[this.textLanguage][0][index])
                this.title.addClass('title-projetos')
                
            }
            else
                this.title.text(texts[this.textLanguage][0][index])
                


            this.fadeAnimation(this.title)
        }
        if (texts[this.textLanguage][1][index] != "") {

            console.log(texts[2][index] + " " + index)
            if(texts[2][index] == 0)
            {
                this.paragraph.addClass('paragraph-left')
                this.paragraph.removeClass('paragraph-right')
            }
            else
            {
                this.paragraph.addClass('paragraph-right')
                this.paragraph.removeClass('paragraph-left')
            }
            this.paragraph.text(texts[this.textLanguage][1][index])
                this.fadeAnimation(this.paragraph)
            
        }
    }

    fadeOut(index: number) {
        if (texts[this.textLanguage][0][index] != "") {
            this.fadeAnimation(this.title, true)
        }
        if (texts[this.textLanguage][1][index] != "") {
            this.fadeAnimation(this.paragraph, true)
        }
    }

    fadeAllOut() {
        this.fadeAnimation(this.title, true)
        this.fadeAnimation(this.paragraph, true)
        console.log('fade all out')
        console.log(window.global['isAnimationRunning'])
    }
}

export default TextHandler
