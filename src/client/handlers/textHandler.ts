import * as $ from 'jquery'
import 'jquery-ui'
import texts from '../misc/texts'

const textsParams = [
    {
        title: { style: { "top": "15%", "left":"50%" }, text: 'Sobre mim' },
        description: {},
        paragraph: { style: { "top": "50%", "right": "13%", "width": "35%" }, text: texts['about me'] },
    },
    {
        title: { style: { "top": "5%", "left": "50%" }, text: 'Projetos' },
        description: {},
        paragraph: { style: { "top": "50%", "right": "13%", "width": "35%" }, text: "" },
    },
    {
        title: { style: { "top": "15%", "left":"50%" }, text: '' },
        description: {},
        paragraph: { style: { "top": "50%", "right": "13%", "width": "35%" }, text: texts['about me'] },
    },
    {
        title: { style: { "top": "15%", "left":"50%" }, text: '' },
        description: {},
        paragraph: { style: { "top": "50%", "left": "13%", "width": "35%" }, text: texts['about me'] },
    },
    {
        title: { style: { "top": "15%", "left":"50%" }, text: '' },
        description: {},
        paragraph: { style: { "top": "50%", "right": "13%", "width": "35%" }, text: texts['about me'] },
    },
    {
        title: { style: { "top": "15%", "left":"50%" }, text: '' },
        description: {},
        paragraph: { style: { "top": "50%", "left": "13%", "width": "35%" }, text: texts['about me'] },
    },
    {
        title: { style: { "top": "15%", "left":"50%" }, text: '' },
        description: {},
        paragraph: { style: { "top": "50%", "Right": "13%", "width": "35%" }, text: texts['about me'] },
    },
]

class TextHandler {
    public title: JQuery<HTMLElement>
    public description: JQuery<HTMLElement>
    public paragraph: JQuery<HTMLElement>
    public textsParams: any = textsParams
    public dropValue: number
    public isAnimationRunning: boolean
    constructor() {
        this.title = $('#title-text')
        this.description = $('#description-text')
        this.paragraph = $('#paragraph-text')
        this.dropValue = 1.5
    }

    addAtributes(elem: JQuery<HTMLElement>, style: any) {
        elem.prop('style', '')
        elem.css(style)
        console.log(style)
        //elem.css('top', top-this.dropValue + '%')
        elem.css('opacity', 0)
    }

    fadeAnimation(elem: JQuery<HTMLElement>, isReversed: boolean = false) {
        if (isReversed) {
            //add ease in
            elem.animate({ opacity: 0, top: `+=${this.dropValue}%` }, 300, () => {})

            return
        }
        elem.animate({ opacity: 1, top: `-=${this.dropValue}%` }, 300, () => {})
    }

    fadeIn(index: number, isReversed: boolean = false) {
        if (isReversed) {
            index = index - 1
            if (index < 0) {
                return
            }
        }

        //console.log(this.textsParams[index].text)
        if ($.isEmptyObject(this.textsParams[index].title) == false) {
            this.addAtributes(
                this.title,
                
                this.textsParams[index].title.style
            )
            this.title.text(this.textsParams[index].title.text)
            this.fadeAnimation(this.title)
        }
        if ($.isEmptyObject(this.textsParams[index].description) == false) {
            //console.log("description")
            this.addAtributes(
                this.description,
                
                this.textsParams[index].description.style
            )
            this.description.text(this.textsParams[index].description.text)
            this.fadeAnimation(this.description)
        }
        if ($.isEmptyObject(this.textsParams[index].paragraph) == false) {
            this.addAtributes(
                this.paragraph,
                
                this.textsParams[index].paragraph.style
            )
            this.paragraph.text(this.textsParams[index].paragraph.text)
            this.fadeAnimation(this.paragraph)
        }
    }

    fadeOut(index: number) {
        if ($.isEmptyObject(this.textsParams[index].title) == false) {
            this.fadeAnimation(this.title, true)
        }
        if ($.isEmptyObject(this.textsParams[index].description) == false) {
            this.fadeAnimation(this.description, true)
        }
        if ($.isEmptyObject(this.textsParams[index].paragraph) == false) {
            this.fadeAnimation(this.paragraph, true)
        }
    }

    fadeAllOut() {
        this.fadeAnimation(this.title, true)
        this.fadeAnimation(this.description, true)
        this.fadeAnimation(this.paragraph, true)
        console.log('fade all out')
        console.log(window.global['isAnimationRunning'])
    }
}

export default TextHandler
