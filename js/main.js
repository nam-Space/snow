function hreflink() {
    var hrefs = document.querySelectorAll('a');

    Array.from(hrefs).forEach(function(href) {
        href.href = '#';
    })
}

var wheel = function () {
    const numberUp = document.querySelector('.body__slider-achieve');
    const nums = numberUp.querySelectorAll('.body__slider-achieve-item-num');
    const numbers = Array.from(nums);

    numberGo();
    
    function numberGo () {
        numbers.forEach(function(num) {
            const numInit = num.innerText;
            var i = 0;
            var interValNumber = setInterval(function() {
                num.innerText = i;
                i++;
                if (i > numInit) {
                    clearInterval(interValNumber);
                }
            }, 2000 / numInit);
    
            return;
        });
    }
    
}

// Chạy slide gần header
function changeSlide() {
    var slide = document.querySelector('.slider__list-img');
    var slideText = document.querySelector('.slider__list-text');
    var btnEngles = document.querySelectorAll('.js-angle-btn');
    var compare = true;
    
    setInterval(function () {
        compare = !compare;
        changeForSlide();
    } , 6000);

    Array.from(btnEngles).forEach(function (btnEngle) {
        btnEngle.addEventListener('click', function () {
            compare = !compare;
            changeForSlide();
        })
    });

    function changeForSlide() {
        if (compare) {
            slide.style.animation = 'slideUp linear 6s forwards, slideAppear linear 0.3s';
            slide.style.backgroundImage = 'url(https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
            slideText.style.animation = 'slideTextUp ease-in-out 0.8s forwards';
        } else {
            slide.style.animation = 'slideUp2 linear 6s forwards, slideAppear2 linear 0.3s';
            slide.style.backgroundImage = 'url(https://images.pexels.com/photos/352093/pexels-photo-352093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
            slideText.style.animation = 'slideTextUp2 ease-in-out 0.8s forwards';
        }
    }
}

// Chạy slide phần winter
function changeSlideWinter() {
    var checks = document.querySelectorAll('.check__winter');
    var labelChecks = document.querySelectorAll('.dot__container-icon');
    var count = 2;

    // Bấm vào nút đổi màu
    Array.from(checks).forEach(function (check) {
        check.onclick = function () {
            if (check.checked) {
                Array.from(labelChecks).forEach(function (labelCheck) {
                    if (check.id === labelCheck.getAttribute('for')) {
                        labelCheck.style.backgroundColor = 'var(--primary-color)';
                        count = labelCheck.getAttribute('number');
                    } else {
                        labelCheck.style.backgroundColor = '#9fe7e9';
                    }
                })
            }
        }
    });

    // Auto chạy slide winter
    const container = document.querySelector('.place__winter');

    setInterval(function () {

        document.getElementById("check__winter-" + count).checked = true;
        var check = document.getElementById("check__winter-" + count);
        Array.from(labelChecks).forEach(function (labelCheck) {
            if (check.id === labelCheck.getAttribute('for')) {
                labelCheck.style.backgroundColor = 'var(--primary-color)';
            } else {
                labelCheck.style.backgroundColor = '#9fe7e9';
            }
        })
        count++;
        if (container.offsetWidth >= 1024) {
            if (count >= 5) {
                count = 1;
            }
        } else if (container.offsetWidth < 740) {
            if (count >= 9) {
                count = 1;
            }
        }

        
    }, 5000);
}

// Chạy slide body user
function changeSlideBodyUser() {
    var container = document.querySelector('.body__part-user-container');
    var checks = document.querySelectorAll('.check__body-user-class');
    var labelChecks = document.querySelectorAll('.dot__container-three-icon');
    var count = 2;

    // Bấm vào nút đổi màu
    Array.from(checks).forEach(function (check) {
        check.onclick = function () {
            if (check.checked) {
                Array.from(labelChecks).forEach(function (labelCheck) {
                    if (check.id === labelCheck.getAttribute('for')) {
                        labelCheck.style.backgroundColor = 'var(--primary-color)';
                        count = labelCheck.getAttribute('number');
                    } else {
                        labelCheck.style.backgroundColor = '#9fe7e9';
                    }
                })
            }
        }
    })

    // Auto chạy slide body user
    setInterval(function () {
        document.getElementById('check__body-user-' + count).checked = true;
        var check = document.getElementById('check__body-user-' + count);
        Array.from(labelChecks).forEach(function (labelCheck) {
            if (check.id === labelCheck.getAttribute('for')) {
                labelCheck.style.backgroundColor = 'var(--primary-color)';
            } else {
                labelCheck.style.backgroundColor = '#9fe7e9';
            }
        })
        count++;
        if (container.offsetWidth >= 1024) {
            if (count >= 4) {
                count = 1;
            }
        } else if (container.offsetWidth >= 740 && container.offsetWidth < 1024) {
            if (count >= 6) {
                count = 1;
            }
        } else {
            if (count >= 10) {
                count = 1;
            }
        }
    }, 5000);
}

// Chạy slide body player (responsive)
function changeSlideBodyPlayer() {
    var checks = document.querySelectorAll('.check__body-player-class');
    var bodyContainPlayer = document.querySelector('.body__slider');
    var count = 2;
    setInterval(function () {
        document.getElementById('check__body-player-' + count).checked = true;
        count++;
        if (bodyContainPlayer.offsetWidth >= 740 && bodyContainPlayer.offsetWidth <= 1023) {
            if (count >= 4) {
                count = 1;
            }
        } else if (bodyContainPlayer.offsetWidth < 740) {
            if (count >= 5) {
                count = 1;
            }
        }
    }, 4000)
}

function forSearch() {
    var searchIcon = document.querySelector('.js-search');
    var modalSearch = document.querySelector('.container__search');
    var modalBody = document.querySelector('.container__search-body-contain');
        

    searchIcon.addEventListener('click', showModal);
    modalSearch.addEventListener('click', hideModal);
    modalBody.addEventListener('click', function(event) {
        
        // Ngăn chặn sự kiện nổi bột từ thẻ con cấp 2 của modal
        event.stopPropagation();
    });

    function showModal() {
        modalSearch.style.display = 'block';
    }

    function hideModal() {
        modalSearch.style.display = 'none';
    }
}

function buyHeader() {
    var productInfo = document.querySelector('.header-icon__button-info');
    productInfo.addEventListener('click', function(e) {
        e.preventDefault();
    })
}

// Res thanh bar header
function toggleBar() {
    var btn = document.querySelector('.header__res-bar');
    var check = btn.querySelector('#modal-res-header');
    var list = btn.querySelector('.header__res-list');
    var listItems = list.querySelectorAll('.header__res-list-item');

    check.checked = false;
    btn.addEventListener('click', function() {
        check.checked = !check.checked;
        if (check.checked) {
            Array.from(listItems).forEach(function (listItem) {
                listItem.style.height = '50px';
                listItem.style.opacity = '1'
                listItem.style.padding = '9px 0';
                listItem.style.borderBottom = '1px solid #ebebeb';
            })
        } else {
            Array.from(listItems).forEach(function (listItem) {
                listItem.style.height = '0';
                listItem.style.opacity = '0';
                listItem.style.padding = '0';
                listItem.style.borderBottom = '0';
            });
            var angleDowns = document.querySelectorAll('.header__rest-item-icon-down');
            var angleRights = document.querySelectorAll('.header__rest-item-icon');
            Array.from(angleDowns).forEach(function (angleDown) {
                if (angleDown.style.display === 'block') {
                    angleDown.style.display = 'none';
                    var liLv1 = angleDown.parentElement;
                    Array.from(listItems).forEach(function (listItem_each) {
                        if (parseInt(listItem_each.getAttribute('number')) === parseInt(liLv1.getAttribute('number')) + 1) {
                                var liLv1_beside = listItem_each;
                                liLv1_beside.style.marginTop = '0'
                        }
                    });

                    var liLv2s = liLv1.querySelectorAll('.header__res-list-lv2-item');
                    Array.from(liLv2s).forEach(function (liLv2) {
                        liLv2.style.height = '0';
                        liLv2.style.borderBottom = '0';
                        liLv2.style.opacity = '0'
                        var a_insideLv2 = document.querySelector('.header__res-list-lv2-item-link');
                        a_insideLv2.style.height = '0';
                    }) 
                }
            });
            Array.from(angleRights).forEach(function (angleRight) {
                angleRight.style.display = 'block';
            });

        }
        list.onclick = function () {
            check.checked = false;
        }
        
    })
}

function toggleBarLv2() {
    var listItem1s = document.querySelectorAll('.header__res-list-item');
    var count = 0;
    Array.from(listItem1s).forEach(function (listItem1) {
        //var lastItemDefault = document.querySelector('.header__res-list-lv2-item:last-child');

        listItem1.addEventListener('click', function () {
            count++;
            if (count >= 2) {
                Array.from(listItem1s).forEach(function (listItem1_before) {
                    var angleRight_before = listItem1_before.querySelector('.header__rest-item-icon');
                    var angleDown_before = listItem1_before.querySelector('.header__rest-item-icon-down');
                    if (angleDown_before.style.display === 'block') {
                        var itemsLv2_before = listItem1_before.querySelectorAll('.header__res-list-lv2-item');
                        var lastItemLv1 = document.querySelector('.header__res-list-item:last-child');
                        var itemLv2_current = listItem1.querySelectorAll('.header__res-list-lv2-item');
                        var ulLastListLv2 = lastItemLv1.querySelector('.header__res-list-lv2');

                        Array.from(itemsLv2_before).forEach(function (itemLv2_before) {
                            itemLv2_before.style.height = '0';
                            itemLv2_before.style.opacity = '0';
                        });

                        if (listItem1_before === lastItemLv1) {
                            ulLastListLv2.style.top = `calc(80px + ${listItem1s.length * 50}px + ${itemLv2_current.length * 50}px)`;
                            ulLastListLv2.style.display = 'none';
                        }

                        var listBeside_before = document.querySelector(`.header__res-list-item:nth-child(${parseInt(listItem1_before.getAttribute('number')) + 1})`);
                        if (listBeside_before) {
                            listBeside_before.style.marginTop = '0';
                        }

                        var itemLv1_before_last = document.querySelector('.header__res-list-item:last-child');
                        var itemsLv2_before_last = itemLv1_before_last.querySelectorAll('.header__res-list-lv2-item');
                        Array.from(itemsLv2_before_last).forEach(function (itemLv2_before_last) {
                            itemLv2_before_last.style.borderBottom = '0'
                        })

                        angleDown_before.style.display = 'none';
                        angleRight_before.style.display = 'block';
                        if (listItem1_before === listItem1) {
                            angleDown_before.style.display = 'block';
                            angleRight_before.style.display = 'none';
                        }

                        
                        if (ulLastListLv2 === listItem1.querySelector('.header__res-list-lv2')) {
                            ulLastListLv2.style.top = `calc(${listItem1s.length * 50}px + 80px)`
                        }
                    }
                    
                });
                listItem1.style.marginTop = '0';
            }
            //console.log(count);
            
            var angleRight = listItem1.querySelector('.header__rest-item-icon');
            var angleDown = listItem1.querySelector('.header__rest-item-icon-down');
            //angleRight.style.display = 'none';
            //angleDown.style.display = 'block';
            //angleRight.style.display = 'block';
            if (angleDown.style.display === 'none' || angleDown.style.display === '') {
                angleRight.style.display = 'none';
                angleDown.style.display = 'block';
                if (angleDown.style.display = 'block') {
                    var listBeside = document.querySelector(`.header__res-list-item:nth-child(${parseInt(listItem1.getAttribute('number')) + 1})`);
                    var listItem2s = listItem1.querySelectorAll('.header__res-list-lv2-item');
                    if (listBeside) {
                        var listItemLv2 = listItem1.querySelectorAll('.header__res-list-lv2-item');
                        listBeside.style.marginTop = `calc(${listItemLv2.length} * 50px)`;
                    } else {
                        var ulLastLv2 = listItem1.querySelector('.header__res-list-lv2');
                        var ulLastLv2Items = ulLastLv2.querySelectorAll('.header__res-list-lv2-item');
                        var ulLastLv2ItemLastChild = ulLastLv2.querySelector('.header__res-list-lv2-item:last-child');
                        var heightUl = document.querySelector('.header__res-list');

                        ulLastLv2.style.position = 'fixed';
                        
                        if (count == 1) {
                            ulLastLv2.style.top = `calc(80px + ${heightUl.offsetHeight}px)`;
                        }
                        ulLastLv2.style.left = '0';
                        ulLastLv2.style.right = '0';
                        ulLastLv2.style.borderTop = '0';
                        ulLastLv2.style.padding = '0'
                        ulLastLv2.style.display = 'flex';
                        ulLastLv2.style.flexDirection = 'column';
                        ulLastLv2.style.justifyContent = 'center';
                        ulLastLv2.style.alignItems = 'center'

                        Array.from(ulLastLv2Items).forEach(function (ulLastLv2Item) {
                            ulLastLv2Item.style.borderBottom = '1px solid #ebebeb';
                            ulLastLv2Item.style.width = `calc(${listItem1.offsetWidth}px - 40px)`;
                            //ulLastLv2Item.style.paddingLeft = '20px'
                        });
                        ulLastLv2ItemLastChild.style.borderBottom = '0'
                    }
                    Array.from(listItem2s).forEach(function (listItem2) {
                        listItem2.style.height = '50px';
                        listItem2.style.opacity = '1'
                    })
                }
            } else if (angleDown.style.display === 'block') {
                angleRight.style.display = 'block';
                angleDown.style.display = 'none';
                if (angleDown.style.display = 'none') {
                    var listBeside = document.querySelector(`.header__res-list-item:nth-child(${parseInt(listItem1.getAttribute('number')) + 1})`);
                    var listItem2s = listItem1.querySelectorAll('.header__res-list-lv2-item');
                    if (listBeside) {
                        listBeside.style.marginTop = `0px`;
                    } else {
                        var ulLastLv2 = listItem1.querySelector('.header__res-list-lv2');
                        var listItemsLastLv2 = ulLastLv2.querySelectorAll('.header__res-list-lv2-item');
                        Array.from(listItemsLastLv2).forEach(function (listItemLastLv2) {
                            listItemLastLv2.style.borderBottom = '0'
                        })
                        var heightUl = document.querySelector('.header__res-list');
                    }
                    Array.from(listItem2s).forEach(function (listItem2) {
                        listItem2.style.height = '0';
                        listItem2.style.opacity = '0'
                    })
                }
            }
        })
    })
}

function toggleLogin() {
    var check = document.getElementById('check__register');
    var modalContain = document.querySelector('.header__modal-member');

    var btnLogin = document.querySelector('.header__modal-header-login');
    var btnRegister = document.querySelector('.header__modal-header-register');
    var title = document.querySelector('.header__modal-body-title');
    var desc = document.querySelector('.header__modal-body-desc');

    var inputEmail = document.querySelector('label[name="input__login-2"]');
    var verifyPass = document.querySelector('label[name="input__login-4"]');

    var rememberCheck = document.querySelector('.header__modal-checkbox');
    var lostPass = document.querySelector('.header__modal-lost-pass');

    var btnSignIn_Verify = document.querySelector('.header__modal-register');
    var connectWith = document.querySelector('.header__modal-sign-with-end');

    var footer = document.querySelector('.header__modal-footer');
    
    modalContain.onclick = function (e) {
        check.checked = true;
    }

    btnLogin.onclick = function () {
        btnLogin.classList.remove('bold--primary');
        btnRegister.classList.add('bold--primary');
        title.textContent = 'Sign In Here!';
        desc.textContent = 'Log into your account in just a few simple steps.';
        inputEmail.style.display = 'none';
        verifyPass.style.display = 'none';
        verifyPass.style.marginBottom = '8px';
        rememberCheck.style.display = 'flex';
        lostPass.style.display = 'block';
        btnSignIn_Verify.textContent = 'SIGN IN';
        connectWith.style.display = 'block';
        footer.style.display = 'flex';
    }

    btnRegister.onclick = function () {
        btnLogin.classList.add('bold--primary');
        btnRegister.classList.remove('bold--primary');
        title.textContent = 'Register Now!';
        desc.textContent = 'Join the SetSail community today & set up a free account.';
        inputEmail.style.display = 'flex';
        verifyPass.style.display = 'flex';
        verifyPass.style.marginBottom = '30px';
        rememberCheck.style.display = 'none';
        lostPass.style.display = 'none';
        btnSignIn_Verify.textContent = 'REGISTER';
        connectWith.style.display = 'none';
        footer.style.display = 'none';
    }
    
}

function start() {
    hreflink();
    wheel();
    changeSlide();
    changeSlideWinter();
    changeSlideBodyUser();
    changeSlideBodyPlayer();
    forSearch();
    buyHeader();

    // Responsive
    toggleBar();
    toggleBarLv2();
    toggleLogin();
}

start();