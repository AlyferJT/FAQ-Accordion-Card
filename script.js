var questions = $('.faq-questions-item')

let clickStatus = 'noSelect';

questions.click(function(event) {
    let target = event.currentTarget.classList

    if (clickStatus === 'noSelect') {
        $('.' + target[1]).addClass('display')
        clickStatus = 'selected';

    } else if (target[2] === undefined) {
        questions.removeClass('display')
        $('.' + target[1]).addClass('display')
        
    } else {
        $('.' + target[1]).removeClass('display')
    }
})