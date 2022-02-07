(function () {

    var Ketang = {
        //更改兴趣模块
        "Interest": function () {
            var ChangeInterestBtn = document.getElementsByClassName('Change-Interest-1')[0];
            var mask = document.getElementsByClassName('Mask')[0];
            var Interest = document.getElementsByClassName('Interest')[0];
            var InterestUlAllLi = document.getElementsByClassName('Interest-Ul')[0].children;
            var AllUl = document.getElementsByClassName('Interest-Content')[0].children;
            var AllLi = document.getElementsByClassName('Interest-Content')[0].getElementsByTagName('li');
            var InterestOl = document.getElementsByClassName('Interest-Chonse')[0];

            mask.style.transition = '0.5s';
            Interest.style.transition = '0.5s';
            mask.style.opacity = '0';
            Interest.style.opacity = '0';
            ChangeInterestBtn.onclick = function () {
                mask.style.display = 'block';
                Interest.style.display = 'block';
                setTimeout(() => {
                    mask.style.opacity = '1';
                    Interest.style.opacity = '1';
                }, 0);

                setTimeout(() => {
                    mask.style.transition = '0s';
                    Interest.style.transition = '0s';
                }, 500);
            };

            for (i = 0; i < InterestUlAllLi.length; i++) {
                InterestUlAllLi[i].index = i;
                InterestUlAllLi[i].onclick = function () {
                    for (k = 0; k < InterestUlAllLi.length; k++) {
                        AllUl[k].className = '';
                        InterestUlAllLi[k].className = '';
                    };

                    InterestUlAllLi[InterestUlAllLi.length - 1].className = 'No-Right';
                    this.className += ' Click';
                    AllUl[this.index].className = 'Show';
                };
            };

            InterestOl.onclick = function () {
                if (event.target.nodeName == 'IMG') {
                    for (i = 0; i < AllLi.length; i++) {
                        if (AllLi[i].innerText == event.target.parentNode.innerText) {
                            AllLi[i].className = '';
                            break;
                        };
                    };
                    InterestOl.removeChild(event.target.parentNode);
                    AllNum.innerText = InterestOl.children.length - 1;
                    Interest.style.marginTop = -Interest.offsetHeight / 2 + 'px';
                }
            };

            for (i = 0; i < AllLi.length; i++) {
                AllLi[i].onclick = function () {
                    if (this.className == 'Click') {
                        this.className = '';
                        for (var i = 0; i < InterestOl.children.length; i++) {
                            if (this.innerText == InterestOl.children[i].title) {
                                InterestOl.removeChild(InterestOl.children[i])
                                break;
                            };
                        };
                    } else {
                        this.className = 'Click';
                        var oLi = document.createElement('li');
                        oLi.title = this.innerText;
                        oLi.innerHTML = this.innerText + '<img src="image/colosd.gif" alt="">';
                        InterestOl.appendChild(oLi);
                    };
                    AllNum.innerText = InterestOl.children.length - 1;
                    Interest.style.marginTop = -Interest.offsetHeight / 2 + 'px';
                };

                AllLi[i].onmousedown = function () {
                    return false;
                };

                DOWN.onclick = Close.onclick = function () {
                    mask.style.transition = '0.5s';
                    Interest.style.transition = '0.5s';
                    setTimeout(() => {
                        mask.style.opacity = '0';
                        Interest.style.opacity = '0';
                    }, 0);

                    setTimeout(() => {
                        mask.style.display = 'none';
                        Interest.style.display = 'none';
                    }, 700);
                };

            };

        },

        //限时秒杀切换
        "Seckill": function () {
            var SeckillTopUl = document.getElementsByClassName('Seckill-Top-Ul')[0];
            var allLi = SeckillTopUl.children;
            var SeckillContent = document.getElementsByClassName('Seckill-Content')[0];
            var allUl = SeckillContent.children;

            for (i = 0; i < allLi.length; i++) {
                allLi[i].index = i;
                allLi[i].onmouseover = function () {
                    for (k = 0; k < allLi.length; k++) {
                        allLi[k].className = '';
                        allUl[k].style.display = 'none';
                    };
                    allLi[0].className = 'First';
                    allLi[allLi.length - 1].className = 'No-Right';
                    this.className += ' Click';
                    allUl[this.index].style.display = 'block';
                };
            };

        },

        //滚动事件
        "WindowScroll": function () {
            var TopNode = document.getElementsByClassName('TopNode')[0];
            var TopNodeCopy = document.getElementsByClassName('TopNode-Copy')[0];
            var WindowShow = document.getElementsByClassName('Window-Show')[0];
            var ShowT = document.getElementsByClassName('Show-T')[0];
            var timer = null;

            window.onscroll = function () {
                //查看滚动条位置
                // console.log(document.documentElement.scrollTop);
                if (document.documentElement.scrollTop >= 1) {
                    WindowShow.style.display = 'block';
                } else {
                    WindowShow.style.display = 'none';
                };

                if (document.documentElement.scrollTop >= 550) {
                    TopNode.style.position = 'fixed';
                    TopNodeCopy.style.display = 'block';
                } else {
                    TopNode.style.position = 'relative';
                    TopNodeCopy.style.display = 'none';
                }
            };

            ShowT.onclick = function () {
                clearInterval(timer);
                timer = setInterval(() => {
                    if (document.documentElement.scrollTop <= 0) {
                        clearInterval(timer);
                        return;
                    };
                    document.documentElement.scrollTop = document.documentElement.scrollTop - 100;
                }, 0);
            };
        },

        //下载按钮触碰事件
        "DownLoad": function () {
            var DownLoad = document.getElementsByClassName('DownLoad')[0];
            var DownLoadShow = document.getElementsByClassName('DownLoad-Show')[0];
            var timer = null;

            DownLoad.onmouseover = function () {
                clearTimeout(timer);
                if (DownLoadShow.style.display == 'block') return;
                DownLoadShow.style.transform = 'scale(0.9)';
                DownLoadShow.style.transition = '0.1s';
                DownLoadShow.style.display = 'block';
                timer = setTimeout(() => {
                    DownLoadShow.style.transform = 'scale(1)';
                }, 0);
            };

            DownLoad.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    DownLoadShow.style.display = 'none';

                }, 100);
            };

            DownLoadShow.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    DownLoadShow.style.display = 'none';

                }, 100);
            };
        },

        //我的学习触碰事件
        "MyLearningTouch": function () {
            var my = document.getElementsByClassName('TopBanner-My')[0];
            var myUl = document.getElementsByClassName('TopBanner-My-Content')[0];
            var timer = null;

            my.onmouseover = function () {
                clearTimeout(timer);
                if (myUl.style.display == 'block') return;
                myUl.style.transform = 'scale(0.9)';
                myUl.style.transition = '0.1s';
                myUl.style.display = 'block';
                timer = setTimeout(() => {
                    myUl.style.transform = 'scale(1)';
                }, 0);
            };

            my.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    myUl.style.display = 'none';

                }, 200);
            };

            myUl.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    myUl.style.display = 'none';

                }, 200);
            };

        },

        //用户头像点击
        "MySelfImageTouch": function () {
            var userImage = document.getElementsByClassName('Myself-Image')[0];
            var userUl = document.getElementsByClassName('Myself-Ul')[0];
            var myUl = document.getElementsByClassName('TopBanner-My-Content')[0];
            var timer = null;

            userImage.onmouseover = function () {
                if (userUl.style.display == 'block') return;
                myUl.style.display = 'none';
                clearTimeout(timer);
                userUl.style.display = 'block';
                // 缩小
                userUl.style.transform = 'scale(0.9)';
                userUl.style.transition = '0.1s';
                setTimeout(() => {
                    userUl.style.transform = 'scale(1)';
                }, 0);

            };

            userImage.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    userUl.style.display = 'none';

                }, 300);
            };

            userUl.onmouseover = function () {
                clearTimeout(timer);
            };

            userUl.onmouseout = function () {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    userUl.style.display = 'none';

                }, 300);
            };


        },

        //顶部搜索框
        "SearchEvent": function () {
            var searchLeftBtn = document.getElementsByClassName('Choice')[0];
            var ChoiceUl = document.getElementsByClassName('Choice-Ul')[0];
            var ChoiceUlAllNode = ChoiceUl.children;
            var SearchNodeOl = document.getElementsByClassName('SearchNode-Ol')[0];
            var SearchInput = document.getElementsByClassName('Input')[0];
            var ChoiceTitle = document.getElementsByClassName('Choice-Title')[0];
            var SearchNodeOlAllNode = SearchNodeOl.children;
            var Content = {
                'kc': ['摄影', '数据可视化', 'AI必学-Tensorflow', '产品经理', 'AE'],
                'wx': ['城市', '滨州医学院', '51', 'edufancy', '北京理工大学']
            }

            window.onclick = function () {
                SearchNodeOl.style.display = 'none';
            };

            ToOlContent('kc');
            function ToOlContent(text) {

                var SearchNodeOlAllNode = SearchNodeOl.children;
                SearchNodeOl.innerHTML = '<li class="First">' + "热门搜索" + '</li>';
                SearchNodeOlAllNode[0].onclick = function () {
                    event.cancelBubble = true;
                };


                for (i = 0; i < Content[text].length; i++) {
                    var OLi = document.createElement('li');
                    OLi.innerHTML = '<a href="#" >' + Content[text][i] + '</a>';
                    SearchNodeOl.appendChild(OLi);
                };


                for (i = 1; i < SearchNodeOlAllNode.length; i++) {
                    SearchNodeOlAllNode[i].onclick = function () {
                        event.cancelBubble = true;
                        SearchNodeOl.style.display = 'none';
                    };
                };

            };

            for (i = 0; i < ChoiceUlAllNode.length; i++) {
                ChoiceUlAllNode[i].onclick = function () {
                    event.cancelBubble = true;
                    for (i = 0; i < ChoiceUlAllNode.length; i++) {
                        ChoiceUlAllNode[i].className = '';
                    };
                    this.className = 'Active';
                    ChoiceUl.style.display = 'none';
                    ChoiceTitle.innerHTML = this.innerHTML;
                    OlShow();

                    if (this.innerHTML == '网校') {
                        SearchInput.placeholder = '搜索网校';
                        ToOlContent('wx')
                    }
                    else {
                        SearchInput.placeholder = '零基础学Python';
                        ToOlContent('kc')
                    };
                };
            }

            searchLeftBtn.onmouseenter = function () {
                ChoiceUl.style.display = 'block';
                SearchNodeOl.style.display = 'none';
            };

            searchLeftBtn.onmouseleave = function () {
                searchLeftBtn.className = 'Choice';
                ChoiceUl.style.display = 'none';

            };

            searchLeftBtn.onmouseover = function () {
                // console.log(event.target.nodeName); 用来检查模块名字
                if (event.target.nodeName == 'DIV' || event.target.nodeName == 'SPAN') {
                    searchLeftBtn.className = 'Choice Active';
                } else {
                    searchLeftBtn.className = 'Choice';
                }
            };


            function OlShow() {
                SearchNodeOl.style.display = 'block';
                SearchNodeOl.style.opacity = '0';
                SearchNodeOl.style.transition = '0.7s';
                setTimeout(() => {
                    SearchNodeOl.style.opacity = '1';
                }, 0);
            };

            SearchInput.onclick = function () {
                event.cancelBubble = true;
                OlShow();
            };

            //失去焦点 onblur  //获取焦点用 onfocus 
            // SearchInput.onfocus = OlShow;


        },

        //公开课移动事件
        "TeacherOpenShow": function () {
            var leftBtn = document.getElementsByClassName('T-Left')[0];
            var rightBtn = document.getElementsByClassName('T-Right')[0];
            var TeacherUl = document.getElementsByClassName('Teacher-Information-Card')[0];
            rightBtn.style.display = 'none';

            leftBtn.onclick = function () {
                this.style.display = 'none';
                rightBtn.style.display = 'block';
                TeacherUl.style.left = '-368px';
            };

            rightBtn.onclick = function () {
                this.style.display = 'none';
                leftBtn.style.display = 'block';
                TeacherUl.style.left = '10px';
            };

        },

        //二级菜单
        "SecondBanner": function () {
            var allLi = document.getElementsByClassName('Banner-a');
            var allShowOl = document.getElementsByClassName('Zc-Ol');
            var more = document.getElementsByClassName('More')[0];
            for (i = 0; i < allLi.length; i++) {
                allLi[i].onmouseover = function () {
                    for (var i = 0; i < allShowOl.length; i++) {
                        allShowOl[i].style.display = 'none';
                    }
                    if (this.parentNode.getElementsByClassName('Zc-Ol')[0]) {
                        this.parentNode.getElementsByClassName('Zc-Ol')[0].style.display = 'block';
                    }
                }
            }

            UL.onmouseleave = function () {
                for (var i = 0; i < allShowOl.length; i++) {
                    allShowOl[i].style.display = 'none';
                };

            };

            more.onmouseenter = function () {
                for (var i = 0; i < allShowOl.length; i++) {
                    allShowOl[i].style.display = 'none';
                };
            };

        },

        //轮播图
        "Picture": function () {
            var timer = null;
            var num = 0;
            var setLunbo = null;
            var allPictureChoice = document.getElementsByClassName('Picture-Choice')[0];
            var allPicture = document.getElementsByClassName('Picture')[0].children;
            var allLi = allPictureChoice.children;
            var colorArr = ['#f15c5a', '#f5a52c', '#f9a916', '#f64b3a', '#283042', '#0096ee', '#2b409b'];
            var allPictureRotation = document.getElementsByClassName('Picture-rotation')[0];
            allPicture[0].style.opacity = '1';
            for (var i = 0; i < allLi.length; i++) {
                allLi[i].index = i;
                allLi[i].onmouseover = function () {
                    clearInterval(timer);
                    timer = setTimeout(function () {
                        move(this);
                        go();
                    }.bind(this), 500)
                }
            }

            function move(_this) {
                num = _this.index;
                for (var i = 0; i < allLi.length; i++) {
                    allPicture[i].className = '';
                    allPicture[i].style.opacity = '0';
                    if (allLi[i].className.indexOf('First') != -1) {
                        allLi[i].className = 'First';
                    }
                    else {
                        allLi[i].className = '';
                    }
                }
                allPicture[_this.index].className = 'Chosen';
                setTimeout(function () {
                    allPicture[this.index].style.opacity = '1';
                }.bind(_this), 0);
                _this.className += ' Chosen';
                allPictureRotation.style.backgroundColor = colorArr[_this.index];
            };

            go();
            function go() {
                clearInterval(setLunbo);
                setLunbo = setInterval(function () {
                    num++;
                    if (num == allLi.length) num = 0;
                    for (var i = 0; i < allLi.length; i++) {
                        allPicture[i].className = '';
                        allPicture[i].style.opacity = '0';
                        if (allLi[i].className.indexOf('First') != -1) {
                            allLi[i].className = 'First';
                        }
                        else {
                            allLi[i].className = '';
                        }
                    }
                    allPicture[num].className = 'Chosen';
                    setTimeout(function () {
                        allPicture[num].style.opacity = '1';
                    }, 0);
                    allLi[num].className += ' Chosen';
                    allPictureRotation.style.backgroundColor = colorArr[num];

                }, 5000);

            }
        }
    };


    //更改兴趣模块
    Ketang.Interest();
    //限时秒杀切换
    Ketang.Seckill();
    //滚动事件
    Ketang.WindowScroll();
    //下载按钮触碰事件
    Ketang.DownLoad();
    //我的学习触碰事件
    Ketang.MyLearningTouch();
    //用户头像
    Ketang.MySelfImageTouch();
    //顶部搜索框
    Ketang.SearchEvent();
    //公开课移动事件
    Ketang.TeacherOpenShow();
    //轮播图
    Ketang.Picture();
    //次导航栏
    Ketang.SecondBanner();

})();