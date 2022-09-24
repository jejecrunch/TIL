<template>
    <div>
        <div class="titleContainer">
            <h1>매일 - 매주 - 매월
                <br>가볍게 적는 공간
            </h1>
    
            <div class="infoContainer">
                <div class="name">제제jeje</div>
                <ul>
                    <li>
                        <a href="https://dev-jejecrunch.tistory.com/" target="_blank">👩🏻‍💻 블로그</a>
                    </li>
                    <li>
                        <a href="https://blog.naver.com/de1et_" target="_blank">✈️ 블로그</a>
                    </li>
                    <li>
                        <a href="https://github.com/jejecrunch" target="_blank">📦 깃허브</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  </script>
  
  <style>
  @import "https://fonts.googleapis.com/css?family=Black+Han+Sans";
  
  .infoContainer {
    text-align: right;
  }

  h1 {
    font-family: "Black Han Sans", cursive;
    font-weight: 500;
    border-bottom: 17px solid #DD2E44;
    word-break: keep-all;
    font-size: 5rem;
  }

  .name {
    font-weight: 500;
    font-size: 1.5rem;
  }

  .infoContainer ul {
    list-style: none;
    line-height: 1.5rem;
  }
  
  @media (max-width: 550px) {
    h1 {
      font-size: 4.4rem;
    }
  
    .name {
      font-size: 1.2rem;
    }
  }
  
  @media (max-width: 430px) {
    h1 {
      font-size: 3.4rem;
    }
  }
  </style>