/*==============================================

ローディング

==============================================*/
// function loadingStop() {
//   $('#loadingWrap').addClass('loadingNone');  // 'loadingNone' クラスを追加
//   // 1秒後に display: none; を設定
//   setTimeout(function() {
//       $('#loadingWrap').css('display', 'none');
//   }, 2500);
// }

//   $(window).on('load', function() {
//       loadingStop();
//   }); 
// const loading = document.getElementById('loading');

function animation() {
  loading.classList.add('loaded');
}
window.addEventListener('load', animation);
/*==============================================

ハンバーガーメニュー

==============================================*/
$(function () {
  $('#js-hamburger').click(toggleHamburgerMenu);
  
  // 新しく追加: メニューリンクがクリックされたときのイベントリスナー
  $('#js-global-menu a').click(toggleHamburgerMenu);
  function toggleHamburgerMenu() {
      $('body').toggleClass('is-drawerActive');

      if ($('#js-hamburger').attr('aria-expanded') == 'false') {
          $('#js-hamburger').attr('aria-expanded', true);
          $('#js-global-menu').css('visibility', 'visible');
          $('#js-global-menu').attr('aria-hidden', 'false');
      } else {
          $('#js-hamburger').attr('aria-expanded', false);
          $('#js-global-menu').css('visibility', 'hidden');
          $('#js-global-menu').attr('aria-hidden', 'true');
      }
      }
});

// $(function () {
//     $('a[href^="#"]').click(function (){
//         var href = $(this).attr("href");
//         var target = $(href == "#" || href == "" ? 'html' : href);
//         var position = target.offset().top;
//         var speed = 500;
  
//     $("html, body").animate({
//         scrollTop: position
//     }, speed, "swing");
  
//     return false;
//     });
// });


/*==============================================

ヘッダー　色変更

==============================================*/
$(function () {
  $(window).on('scroll', function () {
      if ($('.fv').height()  < $(this).scrollTop()) {
          $('.js-header').addClass('change-color');
      } else {
          $('.js-header').removeClass('change-color');
      }
  });
});

/*==============================================

ログイン画面　

==============================================*/
$(document).ready(function () {
  const $submitBtn = $('#js-signinin');
  $('.login-item input[type="text"], .login-item input[type="password"]').on('input', function () {
      const email = $('.login-item input[type="text"]').val();
      const password = $('.login-item input[type="password"]').val();

      if (name !== "" && email !== "" && phone !== "" && message !== "") {
          $submitBtn.prop('disabled', false);
          $('.signin-btn').css('color','#4E301B');
          $('signin-btn').css('background','#FED966');
      } else {
          $submitBtn.prop('disabled', true);
      }
  });
});


// /*==============================================

// スムーススクロール

// ==============================================*/


// $(function(){

//     let headerHeight = $('#header').outerHeight();
//     let speed = 600;

//     $('a[href^="#"]').click(function() {
//       let href= $(this).attr("href");
//       let target = $(href == "#" || href == "" ? 'html' : href);
//       let position = target.offset().top - headerHeight;
//       $('html, body').stop().animate({scrollTop:position}, speed, "swing");
//       return false;
//     });

//   });

/*==============================================

MicroModalページ

==============================================*/
MicroModal.init({
  openClass: 'is-open',
  disableScroll: true,
});


$(document).ready(function () {
  const $submitBtn1 = $('#js-signin-1');
  const $submitBtn2 = $('#js-signin-2');

  $('#emailInput-1, #passwordInput-1, #emailInput-2, #passwordInput-2').on('input', function () {
      const email1 = $('#emailInput-1').val();
      const password1 = $('#passwordInput-1').val();
      const email2 = $('#emailInput-2').val();
      const password2 = $('#passwordInput-2').val();

      if (email1 !== "" && password1 !== "") {
          $submitBtn1.prop('disabled', false); // ボタン有効
          $submitBtn1.addClass('active-signin-btn'); // クラスを追加
      } else {
          $submitBtn1.prop('disabled', true); // ボタン無効
          $submitBtn1.removeClass('active-signin-btn'); // クラスを削除
      }

      if (email2 !== "" && password2 !== "") {
          $submitBtn2.prop('disabled', false);
          $submitBtn2.addClass('active-signin-btn'); // クラスを追加
      } else {
          $submitBtn2.prop('disabled', true);
          $submitBtn2.removeClass('active-signin-btn'); // クラスを削除
      }
  });
});

/*==============================================

contactページ

==============================================*/
$(document).ready(function () {
  $('#form').submit(function (event) {
      var formData = $('#form').serialize();

      $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfSLfJH1QqB15DQfCSJGMj1Fuv05gT63hI3NkOnWMgeo5aRDA/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml"
      })
      .always(function() {
          // CORS制約によるエラーに関係なく、この処理が実行されます。
          window.location.href = "thanks.html";
      });

      event.preventDefault();
  });
});

$(document).ready(function () {
  const $submitBtn = $('#js-submit')
  // ↓入力したい内容をここに書く（入力必須でない項目はここに入れない）
  $('#form input,#form textarea[name="entry.1354156925"],#form textarea[name="entry.971925710"]').on('change', function () {
      if (
          $('#form input[type="text"]').val() !== "" &&
          $('#form input[type="email"]').val() !== "" &&
          $('#form textarea[name="entry.1354156925"]').val() !== "" &&
          $('#form textarea[name="entry.971925710"]').val() !== "" &&
          $('#form input[type="checkbox"]').val() !== "" &&
          $('#form #privacyCheck').prop('checked') === true
          // ↑入力したい内容をここに書く（入力必須でない項目はここに入れない）
          ) {
              // ボタンを有効にした場合
              $submitBtn.prop('disabled', false);
              $('.submit-btn').css('color','#fff');
              $('.submit-btn').css('background','#2196f3');
          } else {
              $submitBtn.prop('disabled', true);
          }
  });
});