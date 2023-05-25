"use strict";

const body = document.getElementsByTagName("body");
const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".btn");

const getMtProtos = async (url) => {
  const req = await fetch(url);
  const json = await req.json();
  return json;
};

const addContent = async () => {
  const data = await getMtProtos(
    "https://raw.githubusercontent.com/hookzof/socks5_list/master/tg/mtproto.json"
  );

  let finalCards = "";

  data.forEach((element) => {
    const cardElement = `
                <div class="card">
                <div class="top-info">
                <div class="ping">
                <p class="title">ping:</p>
                <p class="text">${element.ping}</p>
                </div>
                <div class="down">
              <p class="title">down:</p>
              <p class="text">${element.down}</p>
              </div>
              <div class="up">
              <p class="title">up:</p>
              <p class="text">${element.up}</p>
              </div>
              <div class="country">
              <p class="title">country:</p>
              <p class="text">${element.country}</p>
              </div>
              </div>
              <div class="detail">
              <p class="title">uptime:</p>
              <p class="text">${element.uptime}</p>
              </div>
              <div class="detail">
              <p class="title">secret:</p>
              <p class="text">${element.secret.slice(0, 20)}...</p>
             <!-- <button class="copy" data-secret="${
               element.secret
             }">Copy</button> -->
              </div>
              <div class="detail">
              <p class="title">host:</p>
              <p class="text">${element.host}</p>
              </div>
              <div class="detail">
              <p class="title">port:</p>
              <p class="text">${element.port}</p>
              </div>
              <div>
              <button><a href="${
                "https://t.me/proxy?server=" +
                element.host +
                "&port=" +
                element.port +
                "&secret=" +
                element.secret
              }">CONNECT </a></button>
              </div>
              </div>
              `;

    finalCards += cardElement;
  });

  wrapper.insertAdjacentHTML("beforeend", finalCards);
};

window.addEventListener("load", () => {
  addContent();
  //   body.insertAdjacentHTML("beforeend", "<span>Total: 0</span>");
});

btn.addEventListener("click", async () => {
  addContent();
  //   const copyButton = document.querySelector(".copy");
  //   copyButton.addEventListener("click", () => {
  //     navigator.clipboard.writeText(copyButton.data.secret);
  //   });
  //body.insertAdjacentHTML("beforeend", `<span>Total: ${data.length}</span>`);
});
