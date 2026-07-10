t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2339662043');});});
;

function waitForButton(selector, callback) {
  const button = document.querySelector(selector);
  if (button) {
    callback(button);
  } else {
    setTimeout(() => waitForButton(selector, callback), 100);
  }
}
waitForButton('.popup-enter', function(enterButton) {
  const audio = document.getElementById('invitation-audio');
  const audioControl = document.getElementById('audio-control');
  const iconPlay = document.getElementById('icon-play');
  const iconPause = document.getElementById('icon-pause');
  let opened = false;
  enterButton.addEventListener('click', function() {
    opened = true;
    audio.muted = false;
    audio.play().then(() => {
      iconPlay.style.display = 'none';
      iconPause.style.display = 'block';
    }).catch(err => console.log('Audio play failed:', err));
    audioControl.style.visibility = 'visible';
    audioControl.style.opacity = '1';
  });
  setTimeout(function() {
    if (!opened) {
      const target = enterButton.querySelector('.tn-atom') || enterButton;
      target.click();
    }
  }, 60000);
  audioControl.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      iconPlay.style.display = 'none';
      iconPause.style.display = 'block';
    } else {
      audio.pause();
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
    }
  });
});

;
(function(){var video=document.getElementById('fadeVideo');var canvas=document.getElementById('fadeCanvas');var ctx=canvas.getContext('2d');var drawing=false;function startVideo() {video.play().catch(function(){});}
video.addEventListener('loadedmetadata',function() {canvas.width=video.videoWidth;canvas.height=video.videoHeight;});function drawFrame() {if(!video.paused&&!video.ended) {ctx.drawImage(video,0,0,canvas.width,canvas.height);var gradient=ctx.createLinearGradient(0,canvas.height*0.8,0,canvas.height);gradient.addColorStop(0,'rgba(0,0,0,0)');gradient.addColorStop(1,'rgba(0,0,0,1)');ctx.globalCompositeOperation='destination-out';ctx.fillStyle=gradient;ctx.fillRect(0,canvas.height*0.8,canvas.width,canvas.height);ctx.globalCompositeOperation='source-over';}
requestAnimationFrame(drawFrame);}
video.addEventListener('canplay',function() {if(!drawing) {drawing=true;drawFrame();}
startVideo();});document.addEventListener('touchstart',function() {if(video.paused) startVideo();},{once:true});startVideo();})();
;
t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2339662063');});});
;
t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2339662083');});});
;
const eventLocal=new Date(2026,7,21,20,00,0);const interval=setInterval(()=>{const now=new Date();const distance=eventLocal - now;if(distance<0) {clearInterval(interval);document.getElementById("countdownContainer").innerHTML="EXPIRED";return;}
document.getElementById("days").textContent=String(Math.floor(distance/(1000*60*60*24))).padStart(2,'0');document.getElementById("hours").textContent=String(Math.floor((distance%(1000*60*60*24))/(1000*60*60))).padStart(2,'0');document.getElementById("minutes").textContent=String(Math.floor((distance%(1000*60*60))/(1000*60))).padStart(2,'0');document.getElementById("seconds").textContent=String(Math.floor((distance%(1000*60))/1000)).padStart(2,'0');},1000);
;
t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2339662093');});});
;
t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2355511493');});});
;
t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2339662113');});});
;
t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2355542373');});});
;
;
t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2339662123');});});
;
t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2339662133');});});
;
t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2339662153');});});
;
t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2339662163');});});
;
(function(){var v=document.getElementById('bgVideo');v.play().catch(function(){});document.addEventListener('touchstart',function() {if(v.paused) v.play().catch(function(){});},{once:true});})();
;
t_onFuncLoad('t396_initialScale',function() {t396_initialScale('2355506823');});t_onReady(function() {t_onFuncLoad('t396_init',function() {t396_init('2355506823');});});
;
t_onReady(function(){try{var name=new URLSearchParams(window.location.search).get('name');if(!name)return;name=name.trim();if(!name)return;var input=document.getElementById('in-1779545557677')||document.querySelector('input[name="Nom"]');if(input){input.value=name;input.dispatchEvent(new Event('input',{bubbles:true}));input.dispatchEvent(new Event('change',{bubbles:true}));}var g=document.getElementById('perso-greeting');if(g){g.textContent=name;g.style.display='block';g.style.fontWeight='bold';g.style.fontSize='xx-large';}if(typeof window.va==='function'){window.va('event',{name:'invitation_open',data:{guest:name}});}if(typeof window.gtag==='function'){window.gtag('event','invitation_open',{guest:name});}}catch(e){}});
