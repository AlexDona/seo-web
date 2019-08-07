$(function () {
    $('.content1').hover(function () {
        $(this).addClass('animated pulse normal');
    }, function () {
        $(this).removeClass('animated pulse normal');
    })

    $('.downloads-li').hover(function () {
        $(this).addClass('animated pulse normal');
    }, function () {
        $(this).removeClass('animated pulse normal');
    })

    $('[data-toggle="tooltip"]').tooltip()

    /*吸顶盒效果*/
    $(window).scroll(function(){
        if($(window).scrollTop() > 88){
            $(".bg").addClass("position-fixed");
            $(".bg").css({'width': window.clientWidth})
        }else{
            $(".bg").removeClass("position-fixed");
        }
    })


    /*点击列表下载*/
    $('.downloads-li').click(function () {
        var dataInfo = this.getAttribute('data-info');
        switch (dataInfo) {
            case 'ios': getIosUrl();
            break;
            case 'android': getAndroidUrl();
            break;
            case 'windows': popupWindows();
            break;
            case 'mac': getMacUrl();
        }
    })

    function getIosUrl() {
        window.location.href = 'https://fubt-3.oss-cn-hongkong.aliyuncs.com/FUBT3.3.5.ipa';
    }

    function getAndroidUrl() {
        window.location.href = 'https://fubt-3.oss-cn-hongkong.aliyuncs.com/FUBT3.3.5.apk';
    }

    function popupWindows() {

    }

    function getMacUrl() {
        window.location.href = '';
    }

    /*滾動觸發*/
    function handleScroll (div, cssname, offset) {
        var a, b, c, d;
        d = $('.banner2').offset().top;
        a = eval(d + offset);
        b = $(window).scrollTop();
        c = $(window).height();
        if(b + c > a){
            $(div).addClass((cssname));
        }else {
            $(div).removeClass((cssname));
        }

    }

    function showScrollTop () {
        var srollTop = $(window).scrollTop();
        if (srollTop > 100) {
            $('.scrollTop').fadeIn()
        }else $('.scrollTop').fadeOut()
    }

    $(window).scroll(function(){
        function* countAppleSales () {
            var textList = [1,2,3,4,5,6];
            for (var i = 0; i < textList.length; i++) {
                yield textList[i];
                switch (textList[i]) {
                    case 1: handleScroll('.banner2-p1', 'd-block animated fadeInDown fast', 360);
                    break;
                    case 2: handleScroll('.banner2-p2', 'd-block animated fadeInDown fast', 360);
                    break;
                    case 3: handleScroll('.banner2-p3', 'd-block animated fadeInDown fast', 360);
                    break;
                    case 4: handleScroll('.banner2-p4', 'd-block animated fadeInDown fast', 360);
                    break;
                    case 5: handleScroll('.banner2-p5', 'd-block animated fadeInDown fast', 360);
                    break;
                    case 6: handleScroll('.banner2-p6', 'd-block animated fadeInDown fast', 360);
                    break;
                }
            }
        }
        var handleScrolls = countAppleSales();
        handleScrolls.next()
        handleScrolls.next()
        handleScrolls.next()
        handleScrolls.next()
        handleScrolls.next()
        handleScrolls.next()
        handleScrolls.next()
        /*setTimeout(function () {
            handleScrolls.next()
           // handleScroll('.banner2-p1', 'd-block animated fadeInDown fast', 600)
        },200)
        setTimeout(function () {
            handleScrolls.next()
           // handleScroll('.banner2-p2', 'd-block animated fadeInDown fast', 600)
        },600)
        setTimeout(function () {
            handleScrolls.next()
           // handleScroll('.banner2-p3', 'd-block animated fadeInDown fast', 600)
        },900)
        setTimeout(function () {
            handleScrolls.next()
           // handleScroll('.banner2-p4', 'd-block animated fadeInDown fast', 600)
        },1100)
        setTimeout(function () {
            handleScrolls.next()
           // handleScroll('.banner2-p5', 'd-block animated fadeInDown fast', 600)
        },1400)
        setTimeout(function () {
            handleScrolls.next()
         //   handleScroll('.banner2-p6', 'd-block animated fadeInDown fast', 600)
        },1600)*/

        showScrollTop()
    })

    /*点击返回顶部*/
    $('.scrollTop').click(function () {
        var timer = null;
        var deltaH = 80;
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop > 0) {
                scrollTo(0, oTop - (+deltaH));
                timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(timer);
            }
        });
    })

    /*tab切换*/
    $('.tab-title2').click(function () {
        $('.golbal-map').fadeOut();
        $('.china-map').fadeIn();
        $('.tab-title1').css({'color': '#3c434f','background': 'rgba(240, 240, 240, 1)'})
        $(this).css({'color': '#fff','background': 'linear-gradient(90deg,rgba(34,102,255,1),rgba(134,169,255,1))'})

        $('.tab-content').addClass('d-none')
        $('.tab-content-china').addClass('d-block')

    })
    $('.tab-title1').click(function () {
        $('.golbal-map').fadeIn();
        $('.china-map').fadeOut();
        $('.tab-title2').css({'color': '#3c434f','background': 'rgba(240, 240, 240, 1)'})
        $(this).css({'color': '#fff','background': 'linear-gradient(90deg,rgba(34,102,255,1),rgba(134,169,255,1))'})

        $('.tab-content-china').removeClass('d-block')
        $('.tab-content').removeClass('d-none')
    })

    $('.wechat').hover(function () {
        $('.wechat-qrCode').fadeIn()
    },function () {
        $('.wechat-qrCode').fadeOut()
    })
    $('.qq').hover(function () {
        $('.qq-qrCode').fadeIn()
    },function () {
        $('.qq-qrCode').fadeOut()
    })

    $('.scrollTop').hover(function () {
        $('.scrollTopImg').css({'margin-top': '-78px'})
        $('.returnTop').css({'margin-top': '-24px'})
    },function () {
        $('.scrollTopImg').css({'margin-top': '0'})
        $('.returnTop').css({'margin-top': '0'})
    })
})
