function getMessageHtml(message) {
  if (message.type === "VIDEO") {
    console.log(message);
    return `
      <div class="col-xs-12 col-md-6">
        <div class="pinned-message">
          <video controls>
            <source src="${message.url}">
          </video>
        </div>
      </div>
    `;
  }
  return `
    <div class="col-xs-12 col-md-6">
      <div class="pinned-message">
        <img src="${message.url}" alt="${message.description}" />
      </div>
    </div>
  `;
}

var pinnedMessages = [
  {
    url: "https://i.groupme.com/805x1030.jpeg.bd9d7abae24b4f27842f034deafc99ea",
    local: "/images/pinned_images/Sawyer Pole Dancing.png",
    description: "Sawyer Pole Dancing",
    type: "IMAGE",
  },
  {
    url: "https://v.groupme.com/42274758/2023-09-25T22:47:47Z/74aabfcb.1920x1080r0.mp4",
    local: "/images/pinned_images/Jared Chili Donut.mp4",
    description: "Jared eating Skyline Chili Donut for fun",
    type: "VIDEO",
  },
  {
    url: "https://v.groupme.com/42274758/2023-09-25T22:47:16Z/4acfe64.1920x1080r0.mp4",
    local: "/images/pinned_images/Jared Chili Donut prep.mp4",
    description: "Jared prepping a Skyline Chili Donut for fun",
    type: "VIDEO",
  },
  {
    url: "https://i.groupme.com/1577x2366.jpeg.f5abf34815524508934000712ebb8ae6",
    local: "/images/pinned_images/Sawyer Respect the Schmear.png",
    description: "Sawyer Respect the Schmear all cheeked up",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1920x1080.jpeg.6ac746cf05fe4b8d9745f06fda0fe309",
    local: "/images/pinned_images/Majors Dodgeball.png",
    description: "Majors as White Goodman",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2568x1445.jpeg.4425f10babe34798ac28120ac7637f70",
    local: "/images/pinned_images/Sawyer The Karate Kid.png",
    description: "Sawyer in the Napoleon Dynamite",
    type: "IMAGE",
  },
  {
    url: "https://v.groupme.com/42274758/2023-09-23T22:00:59Z/3787d1e5.1920x1080r0.mp4",
    local: "/images/pinned_images/Majors White Goodman.mp4",
    description: "Majors as White Goodman",
    type: "VIDEO",
  },
  {
    url: "https://i.groupme.com/1122x675.jpeg.9376d41cf6a34e3c9fdeef24de56389b",
    local: "/images/pinned_images/Jared and Willis Broke Back Mountain.png",
    description: "Jared and Willis in Broke Back Mountain",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1364x1554.jpeg.457ffabe90d646f3b27287e65bb74dfd",
    local: "/images/pinned_images/Sawyer Pooping Rhino.png",
    description: "Sawyer as Ace Ventura",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/696x1000.jpeg.d43e18ae699e4208a4ebeb1914686474",
    local: "/images/pinned_images/What we do in the shadows.png",
    description: "What we do in the shadows",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2121x1414.jpeg.91233b4a217c44f981c3345342caa7be",
    local: "/images/pinned_images/Basil Captain Basil.png",
    description: "Captain Basil",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2724x3633.jpeg.6de1a5907be84a118e64b0e8bd64874c",
    local: "/images/pinned_images/Hunter Bent Over Okra.png",
    description: "Hunter about to get pegged by Okra",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/245x330.gif.27e38d6420bc4179a99d41caa978175a",
    local: null,
    description: "Sawyer Bill Hader dancing meme",
    type: "GIF",
  },
  {
    url: "https://i.groupme.com/405x720.jpeg.205b1acaabbf442fa419553e22d4e693",
    local: "/images/pinned_images/Sawyer Creepy Doctor.png",
    description: "Sawyer bout to pound",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/857x870.jpeg.93ce87298d524ba691ce7f893e7c6473",
    local: "/images/pinned_images/Sawyer Creepy Sticker Chart.png",
    description: "Sawyer been a good boy",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2228x1081.jpeg.23f0f7e6028342a8b92ef6388f7cec93",
    local: "/images/pinned_images/Majors Sawyer Willis Court room.png",
    description: "Judge Majors, Attorney Willis, and then there's Sawyer",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/428x646.jpeg.7db86d94e06e4971aaa88f6e167b3479",
    local: "/images/pinned_images/Matt Speedo.png",
    description: "Matt Speedo",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/480x249.gif.8bcf69c6a23c438c822fb02f26cca616",
    local: null,
    description: "Sawyer turning on TV of Hubter",
    type: "GIF",
  },
  {
    url: "https://i.groupme.com/5199x2885.jpeg.f952b6164b074b54980509154bd1ae19",
    local: null,
    description: "Jared whisperings into Sawyer's cheeked up face",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2362x2361.jpeg.53f9784b41a048f481c3f55b7fa53a99",
    local: null,
    description: "Sawyer mask off",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/3238x2394.jpeg.e89227378794466ab637e6367d773cab",
    local: null,
    description: "Matt the super clogger",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/480x249.gif.8fe60c45bbbe4db9ac64dcd0101d244b",
    local: null,
    description: "Sawyer Gif Jif Inception",
    type: "GIF",
  },
  {
    url: "https://i.groupme.com/480x249.gif.98453b28898843428c86b8ca541e9d51",
    local: null,
    description: "Majors Gif Jif Brotherly Speedo Pic",
    type: "GIF",
  },
  {
    url: "https://i.groupme.com/1717x2289.jpeg.d342915a19594eca9e16f7b12790810f",
    local: null,
    description: "Jared and Basil in the water with Speedos",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/988x1481.jpeg.3c80d692f6c24d218418d26e5a1d74cf",
    local: null,
    description: "Majors Speedo Phone Holster",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2593x1473.jpeg.e110f93aa50b4ee58258df002c67d3ec",
    local: null,
    description: "Brotherly Speedo Pic",
    type: "IMAGE",
  },
  {
    url: "https://v.groupme.com/42274758/2023-08-19T05:33:58Z/1a53aed0.1920x1080r0.mp4",
    local: null,
    description: "Pensacola Night Out 1",
    type: "VIDEO",
  },
  {
    url: "https://v.groupme.com/42274758/2023-08-19T00:55:43Z/19b0835e.1920x1080r0.mp4",
    local: null,
    description: "Chaz with his belt",
    type: "VIDEO",
  },
  {
    url: "https://v.groupme.com/42274758/2023-08-19T00:55:23Z/54465e.1920x1080r0.mp4",
    local: null,
    description: "Basil giving Chaz the belt",
    type: "VIDEO",
  },
  {
    url: "https://i.groupme.com/1507x873.jpeg.84796a57d5b64a0b9148754045da445d",
    local: null,
    description: "Willis come as you are",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2536x1424.jpeg.91aa71e960fc4768bbc65e5acf65af3a",
    local: null,
    description: "Sawyer Dahmer",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1242x1530.jpeg.de02e1ed033b46c48d3394f9f6a2b387",
    local: null,
    description: "Sawyer Alabama Boat Brawl",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1242x639.jpeg.0b456f0aef6e48f5bd42979bcb8d97f8",
    local: null,
    description: "Majors Kiffin Krimson Korner",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/3438x3438.jpeg.ede46135b7b24f349c20e353a71d99e9",
    local: null,
    description: "Sawyer studying that thicc ass tree",
    type: "IMAGE",
  },
  {
    url: "https://v.groupme.com/42274758/2022-11-29T23:59:32Z/4989b719.1920x1080r0.mp4",
    local: null,
    description: "Majors Gets a Glizzy",
    type: "VIDEO",
  },
];

pinnedMessages.forEach((message) => {
  $("#messages-container").append(getMessageHtml(message));
});
