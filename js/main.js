function handleStart() {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const body = document.body
    const bar = $('.header__res-bar')
    const checkNav = $('#modal-res-header')
    const headerThreeObject = $('.header__res-container')
    const navContainer = $('.header__nav-list')
    const formFooter = $('.footer__column-form')

    // Gán thuộc tính href="#" cho tất cả các thẻ a
    function hreflink() {
        var hrefs = document.querySelectorAll('a');

        Array.from(hrefs).forEach(function(href) {
            href.href = '#';
        })
    }

    // Xử lý thanh nav bar
    function navBar() {  
        const lis = navContainer.querySelectorAll('.header__nav-link')
        bar.onclick = function() {
            if (checkNav.checked == false) {
                const allLis = navContainer.querySelectorAll('li')
                Array.from(allLis).forEach(li => {
                    if (li.classList.contains('show')) {
                        li.classList.remove('show')
                    }
                })
            }
        }

        Array.from(lis).forEach(li => {
            if (body.offsetWidth <= 1023) {
                li.style.width = (headerThreeObject.offsetWidth - 60) + 'px'
                // Xử lý bật / tắt các sub-nav bên dưới
                li.addEventListener('click', () => {
                    li.classList.toggle('show')
                    const headerDropdown = li.querySelector('.header__dropdown');
                    if (headerDropdown) {
                        headerDropdown.addEventListener('click', (e) => {
                            e.stopPropagation()
                        })
                        // Đệ quy
                        subNavBar(headerDropdown, li)
                    }
                })
                
            } else {
                li.style.width = 'auto'
            }
        })

        // Đệ quy các thẻ nav-item bên dưới và xử lý các thao tác lặp lại của người dùng
        function subNavBar(elementDiv, elementLi) {
            let number = elementLi.getAttribute('lever')[elementLi.getAttribute('lever').length - 1]
            number++;
            const subLis = elementDiv.querySelectorAll(`li[lever='li-lv${number}']`)
            if (subLis) {
                Array.from(subLis).forEach(subLi => {
                    if (subLi) {
                        subLi.style.width = elementDiv.offsetWidth - 15 + 'px';
                        subLi.addEventListener('click', () => {
                            subLi.classList.toggle('show')
                            const headerDropdown = subLi.querySelector('.header__dropdown')
                            if (headerDropdown) {
                                headerDropdown.addEventListener('click', (e) => {
                                    e.stopPropagation()
                                })
                                // Đệ quy
                                subNavBar(headerDropdown, subLi)
                            }
                        })
                    }
                    
                })
            }
        }
    }

    // Đăng nhập / Đăng ký
    function toggleLogin() {
        var btnPersonal = document.querySelector('.header__res-personal')

        var modal = document.querySelector('.header__modal-res');
        var modalBody = document.querySelector('.header__modal-member');

        var btnLogin = document.querySelector('.header__modal-header-login');
        var btnRegister = document.querySelector('.header__modal-header-register');
        var title = document.querySelector('.header__modal-body-title');
        var desc = document.querySelector('.header__modal-body-desc');

        var formLogin = document.querySelector('.form-login')
        var formRegister = document.querySelector('.form-register')

        var btnSubmitLogin = document.querySelectorAll('.header__modal-login')
        var btnSubmitRegister = document.querySelectorAll('.header__modal-register')

        var footer = document.querySelector('.header__modal-footer');

        // Khi bật / tắt modal
        btnPersonal.onclick = function() {
            modal.classList.add('active-modal');
        }

        modal.onclick = function() {
            modal.classList.remove('active-modal')
        }

        modalBody.onclick = function(e) {
            e.stopPropagation()
        }

        // Khi bấm các nút login, register ở phía trên
        btnLogin.onclick = function () {
            btnLogin.classList.remove('bold--primary');
            btnRegister.classList.add('bold--primary');

            formRegister.classList.remove('form-active');
            formLogin.classList.add('form-active')

            title.textContent = 'Sign In Here!';
            desc.textContent = 'Log into your account in just a few simple steps.';
            
            footer.classList.remove('hide-auth-connect');
        }

        btnRegister.onclick = function () {
            btnLogin.classList.add('bold--primary');
            btnRegister.classList.remove('bold--primary');

            formLogin.classList.remove('form-active');
            formRegister.classList.add('form-active')

            title.textContent = 'Register Now!';
            desc.textContent = 'Join the SetSail community today & set up a free account.';

            footer.classList.add('hide-auth-connect');
        }

        // Ngăn chặn hành vi mặc định của form
        formLogin.onsubmit = function(e) {
            e.preventDefault()
        }

        formRegister.onsubmit = function(e) {
            e.preventDefault()
        }
    }

    // Công cụ search
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

    // Chạy slide gần header
    function changeSlide() {
        const slide = $('.slider__list-img');
        const slideText = $('.slider__list-text');
        const btnEngles = $$('.js-angle-btn');
        let compare = true;
        
        let id = setInterval(function () {
            compare = !compare;
            changeForSlide();
        } , 6000);


        Array.from(btnEngles).forEach(function (btnEngle) {
            btnEngle.addEventListener('click', function () {
                clearInterval(id)
                compare = !compare;
                changeForSlide();
                id = setInterval(function () {
                    compare = !compare;
                    changeForSlide();
                } , 6000);
            })
        });

        function changeForSlide() {
            if (compare) {
                slide.style.animation = 'slideUp linear 6s forwards, slideAppear linear 0.3s';
                slide.style.backgroundImage = 'url(https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/skiing-slider-img-1.jpg)'; 
                slideText.style.animation = 'slideTextUp ease-in-out 0.8s forwards';
            } else {
                slide.style.animation = 'slideUp2 linear 6s forwards, slideAppear2 linear 0.3s';
                slide.style.backgroundImage = 'url(https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
                slideText.style.animation = 'slideTextUp2 ease-in-out 0.8s forwards';
            }
        }
    }

    // Đăng nhập / Đăng ký footer
    function loginFooter() {
        formFooter.onsubmit = function(e) {
            e.preventDefault()
        }
    }

    // Thay đổi kích thước màn hình trình duyệt
    function handleResize() {
        body.onresize = function() {
            navBar()
        }
    }

    // Thư viện AOS
    function handleAOS() {
        AOS.init({
            offset: 150,
            duration: 500,
            easing: 'ease',
        });
    }

    // Thư viện Swiper
    function handleSwiper() {
        var swiper1 = new Swiper(".swiper__season-container", {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesPerGroup: 1,
            centerSlide: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".place__winter-swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                740: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                },
              },
        });

        var swiper2 = new Swiper(".body__part-user-container", {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            centerSlide: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".body__part-user-pagination",
                clickable: true,
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                740: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
              },
        });

        var swiper3 = new Swiper(".body__slider-container-img-player", {
            slidesPerView: 4,
            slidesPerGroup: 1,
            loop: true,
            centerSlide: 'true',
            fade: 'true',
            grabCursor: 'true',
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".body__slider-player-pagination",
                clickable: true,
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                740: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
              },
        });
    }
    
    function start() {
        hreflink()
        navBar()
        toggleLogin()
        forSearch()
        changeSlide()
        loginFooter()

        // Xử lý khi thay đổi màn hình Window
        handleResize()

        // Xử dụng các thư viện xịn xò
        handleAOS()
        handleSwiper()
    }
    start()
}

handleStart();