"use strict";

//ぼやかし
$(window).on("scroll", () => {
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  const target = document.getElementById("is-blur");

  if (scroll > windowHeight * 0.2) {
    target.style.filter = `blur(${scroll / 100}px)`;
  } else {
    target.style.filter = "blur(0px)";
  }
});

//フェードイン
$(window).on("scroll", () => {
  $(".fade-in").each(function () {
    var offset = $(this).offset().top;
    //左上を起点にfade-inクラスの縦の位置のみ取得

    var scroll = $(window).scrollTop();
    //スクロールされた位置を取得
    //画面リロード後に確認したら、既にスクロールされた値も残っている
    //ウィンドウのサイズよりもスクロール出来るので大きくなる
    //4ずつ値が大きくなっていた

    var windowHeight = $(window).height();
    //現在開いているウィンドウの高さ
    //ウィンドウのサイズを変更しない限り、サイズは変わらないs

    if (scroll > offset - windowHeight + 150) {
      $(this).addClass("scroll-in");
    }
  });
});

//ジャンプボタンの表示
$(window).on("scroll", () => {
  var offset = $("#test").offset().top;

  var scroll = $(window).scrollTop();
  let target = document.getElementById("jump-btn");

  if (scroll > offset) {
    target.style.display = "block";
  } else {
    target.style.display = "none";
  }
});

//ジャンプボタン
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(function () {
  $(".js-modal-open").on("click", function () {
    $(".js-modal").fadeIn();
    return false;
  });
  $(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();
    return false;
  });
});
