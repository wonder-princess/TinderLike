function tinderLike() {
    const min = 5, max = 10;
    const rand_time = Math.floor(Math.random() * (max - min + 1) + min);
    const rand_flag = Math.floor(Math.random() * (max - min + 1) + min);
    const good_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a")[0];
    const bad_elem = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-nope):a")[0];
    let distance_str = document.getElementsByClassName("Us(t) Va(m) D(ib) My(2px) NetWidth(100%,20px) C($c-ds-text-primary-overlay) Ell")[0].innerText
    distance_str = distance_str.replace(' km 先')
    const distance_int = Number(distance_str)
    const omit_words = ['ine', 'らいん', 'ライン', 'セフレ', 'せふれ']
    
    try{
        const profile_text = document.getElementsByClassName("BreakWord Whs(pl) Fz($ms) Ta(start) LineClamp(5,118.125px)")[0].innerText

        const omit_flag = function () {
            for(const omit_word of omit_words){
                if(profile_text.indexOf(omit_word) != -1){
                    return false
                }else{
                    continue
                }
            }
            return true
        }

        if(omit_flag && distance_int<100){
            if(rand_flag>6){
                good_elem.click();
            }else{
                bad_elem.click();
            }
        }else{
            bad_elem.click();
        }
    }catch(e){
        if (e instanceof TypeError){
            if(rand_flag>6){
                good_elem.click();
            }else{
                bad_elem.click();
            }
        }else{
            console.log( e.message );
        }
    }
    setTimeout(tinderLike, rand_time * 1000);

}
    
tinderLike()