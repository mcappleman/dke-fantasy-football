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
    url: "https://i.groupme.com/4032x2268.jpeg.3ff8b7525d2b4de1b588043ff25c7695",
    local: null,
    description: "Matt posing with Beer on Grill",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2331x3454.jpeg.ede6604c9fd647199979bc5053804a2d",
    local: null,
    description: "Basil Oppenheimer",
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
    url: "https://i.groupme.com/4000x3748.jpeg.800adbf4843642fb87a14c69fd685fbb",
    local: null,
    description: "Adian with Birthcake Surprise",
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
    url: "https://i.groupme.com/3438x3438.jpeg.8c3924c7e88343db97e5318e8584ddc2.large",
    local: null,
    description: "Sawyer looking left and Hunter lying down pose on top",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/3438x3438.jpeg.ede46135b7b24f349c20e353a71d99e9",
    local: null,
    description: "Sawyer studying that thicc ass tree",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/807x870.jpeg.47071ed465704495b6ba786c8ba4d47b.large",
    local: null,
    description: "Sawyer Creep at Chinese Buffet",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1040x557.jpeg.8ff8b55d3bca4e78bcd7f8bd0df98a50",
    local: null,
    description: "Sawyer I cannot take all that",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/480x270.gif.9133f78c5bdf4884bedc465a393370ba",
    local: null,
    description: "Majors you get nothing",
    type: "GIF",
  },
  {
    url: "https://i.groupme.com/354x200.gif.874126a3661a4e339ee48eecdb0e3d37",
    local: null,
    description: "Sawyer as Sheldon from Big Bang",
    type: "GIF",
  },
  {
    url: "https://i.groupme.com/918x1125.jpeg.08e1adf940f146fa8e1fc34126c43d10",
    local: null,
    description: "Sawyer as Sheldon from Big Bang",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/394x507.jpeg.61ec7c767f1c49c2a8e43c4ab6b46dc5.large",
    local: null,
    description: "Nut Head",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1472x1847.jpeg.811321176ec1430c90229fd3add8c20a",
    local: null,
    description: "Sawyer as Coach O",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/720x960.jpeg.8cece909f82c45249668bcd0aba5a2c7",
    local: null,
    description: "Hunter about to get pegged",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/3438x3438.jpeg.99a8f89c305e4e59ad6d1cb5f01c1444",
    local: null,
    description: "Sawyer, Hunter paint me like one of your French girls",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/3438x3438.jpeg.d76d0c6ee1524d12a068412ce74fb003",
    local: null,
    description: "Hunter paint me like one of your French girls",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/965x738.jpeg.9fddff5de4504b06bb74ebbdabfeabe6",
    local: null,
    description: "Majors as Hunter speedo photoshoot",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1336x1012.jpeg.d5ab814d89e94064b21fb4557d225b5d",
    local: null,
    description: "Sawyer as Hunter speedo photoshoot",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2256x1487.jpeg.c5faf42dd6284165a611db03eecaa101",
    local: null,
    description: "Hunter Game of Thrones",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/873x471.jpeg.f4129c43ef224296b444f33610ed1ac3",
    local: null,
    description: "Sawyer at the oscars",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/892x1339.jpeg.4bb0a51b496e4a128943eb676a1eee9a",
    local: null,
    description: "Basil Herbie Fully Loaded",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1512x2016.jpeg.ed4a25bf97084e0ca139d99ea165aa6b.large",
    local: null,
    description: "Hunter Speedo photoshoot some poser",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1512x2016.jpeg.87f729b75d2640c5b1818748a89832d0.large",
    local: null,
    description: "Hunter Speedo photoshoot rock on",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1512x2016.jpeg.65dde6b744b140f2a440a574379f6e5d.large",
    local: null,
    description: "Hunter Speedo photoshoot between the legs",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1512x2016.jpeg.22868ea4b71647aead00a2dcff9d3427.large",
    local: null,
    description: "Hunter Speedo photoshoot leg up",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2016x1512.jpeg.963f9aa7bb00450f86efb595177ccc18.large",
    local: null,
    description: "Hunter Speedo photoshoot lying down",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/3216x4663.jpeg.a7c6326b78854242b15f2b7d951240f7",
    local: null,
    description: "Wolverine Speedo",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2316x3088.jpeg.20bc1f140c0d4017b878bce164b0ce65.large",
    local: null,
    description: "Jared Speedo Front",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/4032x3024.jpeg.12a1ffda72014fc3ad5a6ccc6f5cb0db.large",
    local: null,
    description: "Jared Speedo Ass",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/500x500.gif.ec462cd4e9aa4b27935f0cc3f0e396f7",
    local: null,
    description: "Titties Zombie",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1024x576.jpeg.0fd24b303f064d6d991c60a4f9e5ab14",
    local: null,
    description: "Sawyer is a hot dog",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/500x500.jpeg.8f9a3eaf3205490fa80460a711db0c52",
    local: null,
    description: "Titties",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1170x1095.jpeg.13f0959db74a41f785655b84116c0d94",
    local: null,
    description: "Hunter is officially Hubter",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/2999x2999.jpeg.d9707c8b58ef4c5d9917bdf7ae52e936",
    local: null,
    description: "Matt is a super hero",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1400x1400.jpeg.c048488807eb434ba54c7202ee6cb1e9",
    local: null,
    description: "Sawyer is Joe Flacco",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/428x640.jpeg.bf0c3ba64b0c4a3eb7e59e85961d324b",
    local: null,
    description: "Sawyer rocking the speedo and I'm not sure what else",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1685x1962.jpeg.17f4d6a9efe74f6ea538f3d1b16d9c8d",
    local: null,
    description: "Sawyer cautioning us about carrying 30 packs",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1254x2097.jpeg.cb39ea2dfe7248ff81c744486c56451a",
    local: null,
    description: "Everyone in the Shitter with Windows",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1254x2097.jpeg.305c895a657d446ca8a1d02a71a8050a",
    local: null,
    description:
      "Basil, Chaz, Ean, Hunter, Majors, Matt & Sawyer, Jared, Ross, Trevor, Willis Shitter with Windows",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1254x2097.jpeg.8eccfa884e9143aa86586b1b52d62efc",
    local: null,
    description:
      "Basil, Chaz, Hunter, Majors, Matt & Sawyer Shitter with Windows",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1254x2097.jpeg.29bcf94781ff49efa2fd9597607506ef",
    local: null,
    description: "Basil, Hunter, Majors, Matt & Sawyer Shitter with Windows",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1254x2097.jpeg.f6e596fdebfe4a9f9730b0978e8be8f0",
    local: null,
    description: "Hunter, Majors, Matt & Sawyer Shitter with Windows",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1242x2077.jpeg.33d0360a6f4a419ea827ef1c528b3cb6",
    local: null,
    description: "Majors, Matt & Sawyer Shitter with Windows",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1242x2077.jpeg.e837ed30b88542df811d084aed178a16",
    local: null,
    description: "Matt & Sawyer Shitter with Windows",
    type: "IMAGE",
  },
  {
    url: "https://i.groupme.com/1242x2077.jpeg.d6e0f2a38f114540aa27c7a50aa7223e",
    local: null,
    description: "Matt Shitter with Windows",
    type: "IMAGE",
  },
  {
    url: "https://v.groupme.com/42274758/2023-05-04T20:17:09Z/3377a8d7.1920x1080r0.mp4",
    local: null,
    description: "Hunter Abortion Cup",
    type: "VIDEO",
  },
  {
    url: "https://i.groupme.com/1242x2119.jpeg.bf7115f62eb74627a38967637002e427",
    local: null,
    description: "Ean Milk Me if you can",
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
