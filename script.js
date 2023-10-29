function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./source/male0001.png
       ./source/male0002.png
       ./source/male0003.png
       ./source/male0004.png
       ./source/male0005.png
       ./source/male0006.png
       ./source/male0007.png
       ./source/male0008.png
       ./source/male0009.png
       ./source/male0010.png
       ./source/male0011.png
       ./source/male0012.png
       ./source/male0013.png
       ./source/male0014.png
       ./source/male0015.png
       ./source/male0016.png
       ./source/male0017.png
       ./source/male0018.png
       ./source/male0019.png
       ./source/male0020.png
       ./source/male0021.png
       ./source/male0022.png
       ./source/male0023.png
       ./source/male0024.png
       ./source/male0025.png
       ./source/male0026.png
       ./source/male0027.png
       ./source/male0028.png
       ./source/male0029.png
       ./source/male0030.png
       ./source/male0031.png
       ./source/male0032.png
       ./source/male0033.png
       ./source/male0034.png
       ./source/male0035.png
       ./source/male0036.png
       ./source/male0037.png
       ./source/male0038.png
       ./source/male0039.png
       ./source/male0040.png
       ./source/male0041.png
       ./source/male0042.png
       ./source/male0043.png
       ./source/male0044.png
       ./source/male0045.png
       ./source/male0046.png
       ./source/male0047.png
       ./source/male0048.png
       ./source/male0049.png
       ./source/male0050.png
       ./source/male0051.png
       ./source/male0052.png
       ./source/male0053.png
       ./source/male0054.png
       ./source/male0055.png
       ./source/male0056.png
       ./source/male0057.png
       ./source/male0058.png
       ./source/male0059.png
       ./source/male0060.png
       ./source/male0061.png
       ./source/male0062.png
       ./source/male0063.png
       ./source/male0064.png
       ./source/male0065.png
       ./source/male0066.png
       ./source/male0067.png
       ./source/male0068.png
       ./source/male0069.png
       ./source/male0070.png
       ./source/male0071.png
       ./source/male0072.png
       ./source/male0073.png
       ./source/male0074.png
       ./source/male0075.png
       ./source/male0076.png
       ./source/male0077.png
       ./source/male0078.png
       ./source/male0079.png
       ./source/male0080.png
       ./source/male0081.png
       ./source/male0082.png
       ./source/male0083.png
       ./source/male0084.png
       ./source/male0085.png
       ./source/male0086.png
       ./source/male0087.png
       ./source/male0088.png
       ./source/male0089.png
       ./source/male0090.png
       ./source/male0091.png
       ./source/male0092.png
       ./source/male0093.png
       ./source/male0094.png
       ./source/male0095.png
       ./source/male0096.png
       ./source/male0097.png
       ./source/male0098.png
       ./source/male0099.png
       ./source/male0100.png
       ./source/male0101.png
       ./source/male0102.png
       ./source/male0103.png
       ./source/male0104.png
       ./source/male0105.png
       ./source/male0106.png
       ./source/male0107.png
       ./source/male0108.png
       ./source/male0109.png
       ./source/male0110.png
       ./source/male0111.png
       ./source/male0112.png
       ./source/male0113.png
       ./source/male0114.png
       ./source/male0115.png
       ./source/male0116.png
       ./source/male0117.png
       ./source/male0118.png
       ./source/male0119.png
       ./source/male0120.png
       ./source/male0121.png
       ./source/male0122.png
       ./source/male0123.png
       ./source/male0124.png
       ./source/male0125.png
       ./source/male0126.png
       ./source/male0127.png
       ./source/male0128.png
       ./source/male0129.png
       ./source/male0130.png
       ./source/male0131.png
       ./source/male0132.png
       ./source/male0133.png
       ./source/male0134.png
       ./source/male0135.png
       ./source/male0136.png
       ./source/male0137.png
       ./source/male0138.png
       ./source/male0139.png
       ./source/male0140.png
       ./source/male0141.png
       ./source/male0142.png
       ./source/male0143.png
       ./source/male0144.png
       ./source/male0145.png
       ./source/male0146.png
       ./source/male0147.png
       ./source/male0148.png
       ./source/male0149.png
       ./source/male0150.png
       ./source/male0151.png
       ./source/male0152.png
       ./source/male0153.png
       ./source/male0154.png
       ./source/male0155.png
       ./source/male0156.png
       ./source/male0157.png
       ./source/male0158.png
       ./source/male0159.png
       ./source/male0160.png
       ./source/male0161.png
       ./source/male0162.png
       ./source/male0163.png
       ./source/male0164.png
       ./source/male0165.png
       ./source/male0166.png
       ./source/male0167.png
       ./source/male0168.png
       ./source/male0169.png
       ./source/male0170.png
       ./source/male0171.png
       ./source/male0172.png
       ./source/male0173.png
       ./source/male0174.png
       ./source/male0175.png
       ./source/male0176.png
       ./source/male0177.png
       ./source/male0178.png
       ./source/male0179.png
       ./source/male0180.png
       ./source/male0181.png
       ./source/male0182.png
       ./source/male0183.png
       ./source/male0184.png
       ./source/male0185.png
       ./source/male0186.png
       ./source/male0187.png
       ./source/male0188.png
       ./source/male0189.png
       ./source/male0190.png
       ./source/male0191.png
       ./source/male0192.png
       ./source/male0193.png
       ./source/male0194.png
       ./source/male0195.png
       ./source/male0196.png
       ./source/male0197.png
       ./source/male0198.png
       ./source/male0199.png
       ./source/male0200.png
       ./source/male0201.png
       ./source/male0202.png
       ./source/male0203.png
       ./source/male0204.png
       ./source/male0205.png
       ./source/male0206.png
       ./source/male0207.png
       ./source/male0208.png
       ./source/male0209.png
       ./source/male0210.png
       ./source/male0211.png
       ./source/male0212.png
       ./source/male0213.png
       ./source/male0214.png
       ./source/male0215.png
       ./source/male0216.png
       ./source/male0217.png
       ./source/male0218.png
       ./source/male0219.png
       ./source/male0220.png
       ./source/male0221.png
       ./source/male0222.png
       ./source/male0223.png
       ./source/male0224.png
       ./source/male0225.png
       ./source/male0226.png
       ./source/male0227.png
       ./source/male0228.png
       ./source/male0229.png
       ./source/male0230.png
       ./source/male0231.png
       ./source/male0232.png
       ./source/male0233.png
       ./source/male0234.png
       ./source/male0235.png
       ./source/male0236.png
       ./source/male0237.png
       ./source/male0238.png
       ./source/male0239.png
       ./source/male0240.png
       ./source/male0241.png
       ./source/male0242.png
       ./source/male0243.png
       ./source/male0244.png
       ./source/male0245.png
       ./source/male0246.png
       ./source/male0247.png
       ./source/male0248.png
       ./source/male0249.png
       ./source/male0250.png
       ./source/male0251.png
       ./source/male0252.png
       ./source/male0253.png
       ./source/male0254.png
       ./source/male0255.png
       ./source/male0256.png
       ./source/male0257.png
       ./source/male0258.png
       ./source/male0259.png
       ./source/male0260.png
       ./source/male0261.png
       ./source/male0262.png
       ./source/male0263.png
       ./source/male0264.png
       ./source/male0265.png
       ./source/male0266.png
       ./source/male0267.png
       ./source/male0268.png
       ./source/male0269.png
       ./source/male0270.png
       ./source/male0271.png
       ./source/male0272.png
       ./source/male0273.png
       ./source/male0274.png
       ./source/male0275.png
       ./source/male0276.png
       ./source/male0277.png
       ./source/male0278.png
       ./source/male0279.png
       ./source/male0280.png
       ./source/male0281.png
       ./source/male0282.png
       ./source/male0283.png
       ./source/male0284.png
       ./source/male0285.png
       ./source/male0286.png
       ./source/male0287.png
       ./source/male0288.png
       ./source/male0289.png
       ./source/male0290.png
       ./source/male0291.png
       ./source/male0292.png
       ./source/male0293.png
       ./source/male0294.png
       ./source/male0295.png
       ./source/male0296.png
       ./source/male0297.png
       ./source/male0298.png
       ./source/male0299.png
       ./source/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
})