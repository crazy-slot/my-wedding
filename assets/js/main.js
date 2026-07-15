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
  let autoScrollTimer = null;
  let hasUserScrolledAfterOpen = false;
  function markUserScrolledAfterOpen() {
    hasUserScrolledAfterOpen = true;
    if (autoScrollTimer) {
      clearTimeout(autoScrollTimer);
      autoScrollTimer = null;
    }
  }
  function scrollToInvitationDetails() {
    if (hasUserScrolledAfterOpen) return;
    const details = document.querySelector('[data-elem-id="1779624381838000001"]');
    if (details) {
      details.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
  enterButton.addEventListener('click', function() {
    opened = true;
    hasUserScrolledAfterOpen = false;
    if (autoScrollTimer) clearTimeout(autoScrollTimer);
    window.addEventListener('scroll', markUserScrolledAfterOpen, {once: true, passive: true});
    window.addEventListener('wheel', markUserScrolledAfterOpen, {once: true, passive: true});
    window.addEventListener('touchmove', markUserScrolledAfterOpen, {once: true, passive: true});
    autoScrollTimer = setTimeout(scrollToInvitationDetails, 30000);
    var greeting = document.getElementById('perso-greeting');
    if (greeting) greeting.style.display = 'none';
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
const eventLocal=new Date(2026,7,21,21,0,0);const interval=setInterval(()=>{const now=new Date();const distance=eventLocal - now;if(distance<0) {clearInterval(interval);document.getElementById("countdownContainer").innerHTML="EXPIRED";return;}
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
t_onReady(function(){
  var form=document.getElementById('form2339662123');
  if(!form)return;
  var endpoint='https://formspree.io/f/mykqrbaw';
  var inputsbox=form.querySelector('.t-form__inputsbox');
  var successbox=form.querySelector('.js-successbox');
  var qty=document.getElementById('in-1779545572716');
  if(qty){
    var clampQty=function(){var v=parseInt(qty.value,10);if(isNaN(v)||v<1)v=1;qty.value=v;};
    var stepQty=function(d){clampQty();qty.value=Math.max(1,parseInt(qty.value,10)+d);qty.dispatchEvent(new Event('input',{bubbles:true}));qty.dispatchEvent(new Event('change',{bubbles:true}));};
    var minus=form.querySelector('.js-qty-minus');
    var plus=form.querySelector('.js-qty-plus');
    if(minus)minus.addEventListener('click',function(){stepQty(-1);});
    if(plus)plus.addEventListener('click',function(){stepQty(1);});
    qty.addEventListener('blur',clampQty);
  }
  var qtyGroup=qty?qty.closest('.t-input-group'):null;
  function isPresentYes(){var c=form.querySelector('input[name="isPresent"]:checked');return !!c&&c.value.indexOf('Oui')===0;}
  function syncQtyVisibility(){var yes=isPresentYes();if(qtyGroup)qtyGroup.style.display=yes?'':'none';if(qty)qty.disabled=!yes;}
  Array.prototype.forEach.call(form.querySelectorAll('input[name="isPresent"]'),function(r){r.addEventListener('change',syncQtyVisibility);});
  syncQtyVisibility();
  function showError(msg){
    var boxes=form.querySelectorAll('.js-errorbox-all');
    Array.prototype.forEach.call(boxes,function(b){
      var t=b.querySelector('.js-rule-error-all');
      if(t)t.textContent=msg;
      b.style.display='block';
    });
  }
  function hideError(){
    Array.prototype.forEach.call(form.querySelectorAll('.js-errorbox-all'),function(b){b.style.display='none';});
  }
  form.addEventListener('submit',function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    hideError();
    var nom=form.querySelector('input[name="name"]');
    var nb=form.querySelector('input[name="nbOfGuests"]');
    var radios=form.querySelectorAll('input[name="isPresent"]');
    var radioChecked=Array.prototype.some.call(radios,function(r){return r.checked;});
    if(!nom||!nom.value.trim()||!radioChecked||(isPresentYes()&&(!nb||!nb.value.trim()))){
      showError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    var btn=form.querySelector('.t-submit');
    if(btn){btn.disabled=true;btn.classList.add('t-btn_sending');}
    fetch(endpoint,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}})
      .then(function(r){return r.json().then(function(j){return{ok:r.ok,j:j};});})
      .then(function(res){
        if(res.ok){
          if(inputsbox)inputsbox.style.display='none';
          if(successbox){successbox.innerHTML='Merci ! Votre réponse a bien été envoyée.';successbox.style.display='block';}
        }else{
          var msg=(res.j&&res.j.errors&&res.j.errors.map(function(x){return x.message;}).join(', '))||"Une erreur s'est produite. Veuillez réessayer.";
          showError(msg);
        }
      })
      .catch(function(){showError('Erreur réseau. Veuillez réessayer.');})
      .finally(function(){if(btn){btn.disabled=false;btn.classList.remove('t-btn_sending');}});
  },true);
});
;
t_onReady(function(){try{var name=new URLSearchParams(window.location.search).get('name');if(!name)return;name=name.trim();if(!name)return;var input=document.getElementById('in-1779545557677')||document.querySelector('input[name="name"]');if(input){input.value=name;input.dispatchEvent(new Event('input',{bubbles:true}));input.dispatchEvent(new Event('change',{bubbles:true}));}var g=document.getElementById('perso-greeting');if(g){g.textContent=name;g.style.display='block';g.style.fontWeight='bold';g.style.fontSize='xx-large';}if(typeof window.va==='function'){window.va('event',{name:'invitation_open',data:{guest:name}});}if(typeof window.gtag==='function'){window.gtag('event','invitation_open',{guest:name});}}catch(e){}});
