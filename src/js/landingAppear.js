document.addEventListener("DOMContentLoaded", function() {


    gsap.registerPlugin(SplitText);
    console.log(gsap)
    jQuery('.Page-title:not(.__scramble)');
    //console.log(gsap);
    let title = jQuery('.__scrambleHeadline');



    if((jQuery('.Page-title:not(.__scramble)')[0]) ||(jQuery('.Page-title:not(.__scrambleHeadline)')[0]) ) {
        jQuery('.Page-title').addClass('__scrambleHeadline');
        title = jQuery('.Page-title');

    }
    if (title.length > 0) {
        scrambleUppercase(title);
    }

    function scrambleUppercase(text){
        let mySplitText = new SplitText(text, {type:"words, chars", wordsClass:"Title--word" })
        let tl = gsap.timeline({repeat: 0});
        let numChars = mySplitText.chars.length
        let shuffled = mySplitText.chars.sort(() => 0.5 - Math.random());

        switch (true) {

            case (numChars>10):
                for (let i = 0; i < 3; i++) {
                    //random value used as position parameter
                    gsap.to(shuffled[i], {
                        textTransform: 'uppercase',
                    });
                };
                break;
            case (numChars>20):
                for (let i = 0; i < 4; i++) {
                    //random value used as position parameter
                    gsap.to(shuffled[i], {
                        textTransform: 'uppercase',
                    });
                };
                break;
            case (numChars>30):
                for (let i = 0; i < 5; i++) {
                    //random value used as position parameter
                    gsap.to(shuffled[i], {
                        textTransform: 'uppercase',
                    });
                };
                break;
            default :
                for (let i = 0; i < 2; i++) {
                    //random value used as position parameter
                    gsap.to(shuffled[i], {
                        textTransform: 'uppercase',
                    });
                };
                break;
        }

        for(var i = 0; i < numChars; i++){
            tl.to(text,{
                opacity:1
            })
            tl.from(mySplitText.chars[i], {
                opacity:0,
                top: 10 + (i*2),
                duration: .5,
            }, Math.random());
        }
    }
});