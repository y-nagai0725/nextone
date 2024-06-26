// -----jsの記述---------------------------
document.addEventListener('DOMContentLoaded', function () {
  //ヘッダー高さ
  const headerHeight = document.getElementById('header').offsetHeight;

  //ビューポートの高さ
  const windowHeight = window.innerHeight;

  //スクロール調整用
  const scrollAdjust = 80;

  //topへ戻るボタン
  const backBtn = document.getElementById('footer__back-btn');

  //topへ戻るボタンスクロール処理
  backBtn.addEventListener('click', function () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });

  //ページ内リンクスムーススクロール
  const navLinkList = document.querySelectorAll('.gnav__link, .fnav__link, .fnav__contact-link');
  for (let i = 0; i < navLinkList.length; i++) {
    navLinkList[i].addEventListener('click', function (e) {
      e.preventDefault();
      const targetHref = this.getAttribute('href');
      const targetElement = document.getElementById(targetHref.replace('#', ''));
      const targetPos = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - scrollAdjust;
      window.scroll({
        top: targetPos,
        behavior: 'smooth',
      });
    });
  }

  //fadeクラス要素表示処理
  const fadeTargetList = document.querySelectorAll('.fade, .fadeUp, .fadeRight, .fadeLeft');
  function showElement() {
    const st = window.scrollY;
    for (let i = 0; i < fadeTargetList.length; i++) {
      const targetPos = fadeTargetList[i].getBoundingClientRect().top + st;
      if (st > targetPos - windowHeight * 0.5) {
        fadeTargetList[i].classList.add('showElement');
      }
    }
  }

  //スクロールイベント処理
  window.addEventListener('scroll', function () {
    showElement();
  });

  //ページ読み込み時に実行
  showElement();

}, false);
// -----ここまで-------------------------------

// // jQuery ver
// $(function () {
//   //ヘッダー高さ
//   const headerHeight = $('#header').innerHeight();

//   //ビューポートの高さ
//   const windowHeight = $(window).innerHeight();

//   //スクロール調整用
//   const scrollAdjust = 80;

//   //topへ戻るボタン処理
//   $('#footer__back-btn').on('click', function () {
//     $('html, body').animate({ scrollTop: 0 }, 500);
//   });

//   //スムーススクロール
//   $('.gnav__link, .fnav__link, .fnav__contact-link').on('click', function () {
//     const href = $(this).attr('href');
//     const targetPos = $(href).offset().top - headerHeight - scrollAdjust;
//     $('html, body').animate({ scrollTop: targetPos }, 500);
//     return false;
//   });

//   //fadeクラス要素表示処理
//   function showElement() {
//     const st = $(window).scrollTop();

//     $('.fade, .fadeUp, .fadeRight, .fadeLeft').each(function () {
//       const targetPos = $(this).offset().top;
//       if (st > targetPos - windowHeight * 0.5) {
//         $(this).addClass('showElement');
//       }
//     });
//   }

//   //スクロールイベント処理
//   $(window).on('scroll', function () {
//     showElement();
//   });

//   //ページ読み込み時に実行
//   showElement();
// });
// // -----ここまで-------------------------------