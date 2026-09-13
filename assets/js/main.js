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
    const details = document.getElementById('rec2339662083');
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
  }, 30000);
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
const eventLocal=new Date(2026,9,17,19,0,0);const interval=setInterval(()=>{const now=new Date();const distance=eventLocal - now;if(distance<0) {clearInterval(interval);document.getElementById("countdownContainer").innerHTML=window.weddingI18n?window.weddingI18n.t('expired'):'Terminé';return;}
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
  var endpoint='https://formspree.io/f/mljeybrb';
  var inputsbox=form.querySelector('.t-form__inputsbox');
  var successbox=form.querySelector('.js-successbox');
  var qty=document.getElementById('in-1779545572716');
  var dietaryGroup=document.createElement('div');
  dietaryGroup.className='t-input-group t-input-group_tx dietary-restrictions-group';
  dietaryGroup.innerHTML='<label for="dietary-restrictions" class="t-input-title dietary-restrictions-label">Restrictions alimentaires (facultatif)</label><div class="t-input-block"><textarea id="dietary-restrictions" name="dietaryRestrictions" class="t-input t-input-inline-styles" rows="3" maxlength="500" placeholder="Allergies, intolérances, régimes particuliers…"></textarea></div>';
  var errorbox=inputsbox?inputsbox.querySelector('.t-form__errorbox-middle'):null;
  if(inputsbox)inputsbox.insertBefore(dietaryGroup,errorbox);
  var dietary=dietaryGroup.querySelector('textarea');
  var rsvpRecord=document.getElementById('rec2339662123');
  var maxGuests=null;
  try{
    var maxGuestsParam=new URLSearchParams(window.location.search).get('maxGuests');
    if(maxGuestsParam&&/^\d+$/.test(maxGuestsParam)){
      var parsedMaxGuests=parseInt(maxGuestsParam,10);
      if(parsedMaxGuests>=1)maxGuests=parsedMaxGuests;
    }
  }catch(e){}
  if(qty){
    var minus=form.querySelector('.js-qty-minus');
    var plus=form.querySelector('.js-qty-plus');
    if(maxGuests!==null){
      qty.max=String(maxGuests);
      qty.value=String(maxGuests);
      var qtyLabel=form.querySelector('label[for="'+qty.id+'"]');
      if(qtyLabel)qtyLabel.textContent=window.weddingI18n?window.weddingI18n.t('guestCount'):'Nombre de personnes';
      var maxField=document.createElement('input');
      maxField.type='hidden';
      maxField.name='invitationMaxGuests';
      maxField.value=String(maxGuests);
      form.appendChild(maxField);
    }
    var updateQtyButtons=function(){
      var v=parseInt(qty.value,10);
      if(minus)minus.disabled=!isNaN(v)&&v<=1;
      if(plus)plus.disabled=maxGuests!==null&&!isNaN(v)&&v>=maxGuests;
    };
    var clampQty=function(){
      var v=parseInt(qty.value,10);
      if(isNaN(v)||v<1)v=1;
      if(maxGuests!==null&&v>maxGuests)v=maxGuests;
      qty.value=v;
      updateQtyButtons();
    };
    var stepQty=function(d){
      clampQty();
      var next=Math.max(1,parseInt(qty.value,10)+d);
      if(maxGuests!==null)next=Math.min(maxGuests,next);
      qty.value=next;
      updateQtyButtons();
      qty.dispatchEvent(new Event('input',{bubbles:true}));
      qty.dispatchEvent(new Event('change',{bubbles:true}));
    };
    if(minus)minus.addEventListener('click',function(){stepQty(-1);});
    if(plus)plus.addEventListener('click',function(){stepQty(1);});
    qty.addEventListener('blur',clampQty);
    qty.addEventListener('change',clampQty);
    qty.addEventListener('input',updateQtyButtons);
    clampQty();
  }
  var qtyGroup=qty?qty.closest('.t-input-group'):null;
  function isPresentYes(){var c=form.querySelector('input[name="isPresent"]:checked');return !!c&&(c.dataset.attendance==='yes'||c.value.indexOf('Oui')===0);}
  function syncQtyVisibility(){var yes=isPresentYes();if(qtyGroup)qtyGroup.style.display=yes?'':'none';if(qty)qty.disabled=!yes;if(dietaryGroup)dietaryGroup.style.display=yes?'':'none';if(dietary)dietary.disabled=!yes;if(rsvpRecord)rsvpRecord.classList.toggle('rsvp-has-dietary',yes);}
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
      showError(window.weddingI18n?window.weddingI18n.t('requiredError'):'Veuillez remplir tous les champs obligatoires.');
      return;
    }
    if(isPresentYes()){
      var guestCount=parseInt(nb.value,10);
      if(isNaN(guestCount)||guestCount<1){
        showError(window.weddingI18n?window.weddingI18n.t('guestError'):'Veuillez saisir un nombre de personnes valide.');
        return;
      }
      if(maxGuests!==null&&guestCount>maxGuests){
        clampQty();
        var limitMessage=window.weddingI18n?window.weddingI18n.t('limitError',maxGuests):'Cette invitation est limitée à '+maxGuests+' personne'+(maxGuests>1?'s':'')+'.';
        showError(limitMessage);
        return;
      }
    }
    var btn=form.querySelector('.t-submit');
    if(btn){btn.disabled=true;btn.classList.add('t-btn_sending');}
    fetch(endpoint,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}})
      .then(function(r){return r.json().then(function(j){return{ok:r.ok,j:j};});})
      .then(function(res){
        if(res.ok){
          if(rsvpRecord)rsvpRecord.classList.remove('rsvp-has-dietary');
          if(inputsbox)inputsbox.style.display='none';
          if(successbox){successbox.innerHTML=window.weddingI18n?window.weddingI18n.t('success'):'Merci ! Votre réponse a bien été envoyée.';successbox.style.display='block';}
        }else{
          var msg=(res.j&&res.j.errors&&res.j.errors.map(function(x){return x.message;}).join(', '))||(window.weddingI18n?window.weddingI18n.t('sendError'):"Une erreur s'est produite. Veuillez réessayer.");
          showError(msg);
        }
      })
      .catch(function(){showError(window.weddingI18n?window.weddingI18n.t('networkError'):'Erreur réseau. Veuillez réessayer.');})
      .finally(function(){if(btn){btn.disabled=false;btn.classList.remove('t-btn_sending');}});
  },true);
});
;
t_onReady(function(){try{var name=new URLSearchParams(window.location.search).get('name');if(!name)return;name=name.trim();if(!name)return;var input=document.getElementById('in-1779545557677')||document.querySelector('input[name="name"]');if(input){input.value=name;input.dispatchEvent(new Event('input',{bubbles:true}));input.dispatchEvent(new Event('change',{bubbles:true}));}var g=document.getElementById('perso-greeting');if(g){g.textContent=name;g.style.display='block';g.style.fontWeight='bold';g.style.fontSize='xx-large';}}catch(e){}});

// Complete French/Spanish version of Juli's invitation.
t_onReady(function() {
  var translations = {
    fr: {
      title: 'Le quinceañero de Juli | 17 octobre 2026',
      description: 'Invitation au quinceañero de Juli, le samedi 17 octobre 2026 à Vauhallan.',
      languageLabel: 'Choisir la langue',
      open: 'Appuyez pour ouvrir',
      age: 'quinceañero',
      date: 'Samedi 17 octobre 2026',
      time: 'de 19 h à 2 h',
      invitation: '<strong>Belisario Robles<br>et Pilar Rincones</strong><br><br>ont le plaisir de vous inviter à célébrer<br><strong>le quinceañero de Juli</strong>.<br><br>Samedi 17 octobre 2026<br>de 19 h à 2 h<br><br>Salle Polyvalente de Vauhallan',
      countdown: 'La fête commence dans',
      countdownLabels: ['Jours', 'Heures', 'Minutes', 'Secondes'],
      expired: 'Événement commencé',
      schedule: "Chronologie de l'événement",
      scheduleItems: ["Accueil des invités", "Entrée de Juli", "Présentation de Juli", "Que la fête commence"],
      location: 'Lieu',
      dressCode: 'Code vestimentaire',
      dressCopy: "Nous vous invitons à porter une tenue élégante qui reflète le style et l'esprit de notre journée spéciale.",
      rsvp: 'Confirmez votre présence',
      deadline: 'Réponse souhaitée avant le 30 septembre 2026',
      name: 'Nom',
      attendance: 'Serez-vous présent·e ?',
      yes: 'Oui, je serai présent·e',
      no: 'Désolé·e, je ne pourrai pas être présent·e',
      guestCount: 'Nombre de personnes',
      dietaryRestrictions: 'Restrictions alimentaires (facultatif)',
      dietaryPlaceholder: 'Allergies, intolérances, régimes particuliers…',
      removeGuest: 'Enlever une personne',
      addGuest: 'Ajouter une personne',
      submit: 'Envoyer ma réponse',
      maps: 'Itinéraire Google Maps',
      closing: 'Au plaisir de célébrer avec vous !',
      requiredError: 'Veuillez remplir tous les champs obligatoires.',
      guestError: 'Veuillez saisir un nombre de personnes valide.',
      limitError: function(max) { return 'Cette invitation est limitée à ' + max + ' personne' + (max > 1 ? 's' : '') + '.'; },
      success: 'Merci ! Votre réponse a bien été envoyée.',
      sendError: "Une erreur s'est produite. Veuillez réessayer.",
      networkError: 'Erreur réseau. Veuillez réessayer.'
    },
    es: {
      title: 'El quinceañero de Juli | 17 de octubre de 2026',
      description: 'Invitación al quinceañero de Juli, el sábado 17 de octubre de 2026 en Vauhallan.',
      languageLabel: 'Elegir idioma',
      open: 'Pulsa para abrir',
      age: 'quinceañero',
      date: 'Sábado 17 de octubre de 2026',
      time: 'de 19:00 a 2:00',
      invitation: '<strong>Belisario Robles<br>y Pilar Rincones</strong><br><br>tienen el placer de invitarte a celebrar<br><strong>el quinceañero de Juli</strong>.<br><br>Sábado 17 de octubre de 2026<br>de 19:00 a 2:00<br><br>Salle Polyvalente de Vauhallan',
      countdown: 'La fiesta comienza en',
      countdownLabels: ['Días', 'Horas', 'Minutos', 'Segundos'],
      expired: 'El evento ha comenzado',
      schedule: 'Programa del evento',
      scheduleItems: ['Recepción de invitados', 'Entrada de la quinceañera', 'Presentación de la quinceañera', 'Que comience la fiesta'],
      location: 'Lugar',
      dressCode: 'Código de vestimenta',
      dressCopy: 'Te invitamos a llevar un atuendo elegante que refleje el estilo y el espíritu de nuestra celebración especial.',
      rsvp: 'Confirma tu asistencia',
      deadline: 'Confirma tu asistencia antes del 30 de septiembre de 2026',
      name: 'Nombre',
      attendance: '¿Asistirás?',
      yes: 'Sí, asistiré',
      no: 'Lo siento, no podré asistir',
      guestCount: 'Número de personas',
      dietaryRestrictions: 'Restricciones alimentarias (opcional)',
      dietaryPlaceholder: 'Alergias, intolerancias, dieta vegetariana…',
      removeGuest: 'Quitar una persona',
      addGuest: 'Añadir una persona',
      submit: 'Enviar mi respuesta',
      maps: 'Cómo llegar con Google Maps',
      closing: '¡Esperamos celebrar contigo!',
      requiredError: 'Completa todos los campos obligatorios.',
      guestError: 'Introduce un número de personas válido.',
      limitError: function(max) { return 'Esta invitación está limitada a ' + max + ' persona' + (max > 1 ? 's' : '') + '.'; },
      success: '¡Gracias! Tu respuesta se ha enviado correctamente.',
      sendError: 'Se ha producido un error. Inténtalo de nuevo.',
      networkError: 'Error de conexión. Inténtalo de nuevo.'
    }
  };

  function setText(recordId, elementId, html) {
    var atom = document.querySelector('#' + recordId + ' [data-elem-id="' + elementId + '"] .tn-atom');
    if (atom) atom.innerHTML = html;
    return atom;
  }

  function setMeta(selector, value) {
    var meta = document.querySelector(selector);
    if (meta) meta.content = value;
  }

  function getInitialLanguage() {
    try {
      var requested = new URLSearchParams(window.location.search).get('lang');
      if (requested === 'fr' || requested === 'es') return requested;
      var saved = localStorage.getItem('wedding-language');
      if (saved === 'fr' || saved === 'es') return saved;
    } catch (e) {}
    return 'fr';
  }

  var currentLanguage = getInitialLanguage();
  var switcher = document.createElement('nav');
  switcher.className = 'language-switcher';
  switcher.setAttribute('aria-label', translations[currentLanguage].languageLabel);
  switcher.innerHTML = '<button type="button" data-lang="fr" lang="fr" aria-label="Français" title="Français"><span aria-hidden="true">🇫🇷</span></button><span class="language-switcher__divider" aria-hidden="true"></span><button type="button" data-lang="es" lang="es" aria-label="Español" title="Español"><span aria-hidden="true">🇪🇸</span></button>';
  document.body.appendChild(switcher);

  function translateForm(copy) {
    var form = document.getElementById('form2339662123');
    if (!form) return;
    var nameLabel = form.querySelector('label[for="in-1779545557677"]');
    var attendanceTitle = form.querySelector('.t-input-group_rd .t-input-title');
    var qtyLabel = form.querySelector('label[for="in-1779545572716"]');
    var dietaryLabel = form.querySelector('.dietary-restrictions-label');
    var dietary = form.querySelector('textarea[name="dietaryRestrictions"]');
    var radios = form.querySelectorAll('input[name="isPresent"]');
    var radioLabels = form.querySelectorAll('.t-radio__control span');
    var minus = form.querySelector('.js-qty-minus');
    var plus = form.querySelector('.js-qty-plus');
    var submit = form.querySelector('.t-submit');
    if (nameLabel) nameLabel.textContent = copy.name;
    if (attendanceTitle) attendanceTitle.textContent = copy.attendance;
    if (qtyLabel) qtyLabel.textContent = copy.guestCount;
    if (dietaryLabel) dietaryLabel.textContent = copy.dietaryRestrictions;
    if (dietary) {
      dietary.placeholder = copy.dietaryPlaceholder;
      dietary.setAttribute('aria-label', copy.dietaryRestrictions);
    }
    if (radios[0]) { radios[0].dataset.attendance = 'yes'; radios[0].value = copy.yes; radios[0].setAttribute('aria-label', copy.attendance); }
    if (radios[1]) { radios[1].dataset.attendance = 'no'; radios[1].value = copy.no; radios[1].setAttribute('aria-label', copy.attendance); }
    if (radioLabels[0]) radioLabels[0].textContent = copy.yes;
    if (radioLabels[1]) radioLabels[1].textContent = copy.no;
    if (minus) minus.setAttribute('aria-label', copy.removeGuest);
    if (plus) plus.setAttribute('aria-label', copy.addGuest);
    if (submit) submit.textContent = copy.submit;
  }

  function applyLanguage(language, updateUrl) {
    currentLanguage = language === 'es' ? 'es' : 'fr';
    var copy = translations[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = copy.title;
    setMeta('meta[property="og:title"]', copy.title);
    setMeta('meta[property="og:description"]', copy.description);
    var description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = copy.description;

    switcher.setAttribute('aria-label', copy.languageLabel);
    Array.prototype.forEach.call(switcher.querySelectorAll('button'), function(button) {
      var active = button.dataset.lang === currentLanguage;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    setText('rec2339662043', '1777183175514000001', copy.open);
    setText('rec2339662063', '1779566247730000001', 'Juli<br><span class="hero-age">' + copy.age + '</span>');
    setText('rec2339662063', '1779566247730000003', copy.date);
    setText('rec2339662063', '1779626065755000001', copy.time);
    setText('rec2339662083', '1779624381838000001', copy.invitation);
    setText('rec2339662083', '1779472210551000005', 'Juli');
    setText('rec2339662093', '1771277026942000001', copy.countdown);
    Array.prototype.forEach.call(document.querySelectorAll('#countdownContainer .label'), function(label, index) {
      if (copy.countdownLabels[index]) label.textContent = copy.countdownLabels[index];
    });

    setText('rec2355511493', '1771277026942000001', copy.schedule);
    ['1780760554667000001', '1780760554667000003', '1780760554668000005', '1780760554668000007'].forEach(function(id, index) {
      setText('rec2355511493', id, copy.scheduleItems[index]);
    });
    setText('rec2339662113', '1771277026942000001', copy.location);
    setText('rec2339662113', '1779544773135', 'Salle Polyvalente de Vauhallan');
    setText('rec2339662113', '1779545032699000001', '3 allée des Écoles, 91430 Vauhallan');
    setText('rec2355542373', '1771277026942000001', copy.dressCode);
    setText('rec2355542373', '1779544773135', copy.dressCopy);
    setText('rec2339662123', '1771277026942000001', copy.rsvp);
    setText('rec2339662133', '1771277026942000001', copy.maps);
    setText('rec2339662163', '1763405219328', copy.closing);
    translateForm(copy);

    var deadline = document.querySelector('.rsvp-deadline');
    if (!deadline) {
      var rsvpArtboard = document.querySelector('#rec2339662123 .t396__artboard');
      if (rsvpArtboard) {
        deadline = document.createElement('p');
        deadline.className = 'rsvp-deadline';
        rsvpArtboard.appendChild(deadline);
      }
    }
    if (deadline) deadline.textContent = copy.deadline;

    var heroAmpersand = document.querySelector('#rec2339662063 [data-elem-id="1779566247730000004"]');
    if (heroAmpersand) heroAmpersand.hidden = true;
    var mapsLink = document.querySelector('#rec2339662133 [data-elem-id="1771277026942000001"] .tn-atom');
    if (mapsLink) mapsLink.href = 'https://www.google.com/maps/search/?api=1&query=Salle+Polyvalente+de+Vauhallan%2C+3+All%C3%A9e+des+%C3%89coles%2C+91430+Vauhallan';

    try {
      localStorage.setItem('wedding-language', currentLanguage);
      if (updateUrl && window.history && window.history.replaceState) {
        var url = new URL(window.location.href);
        url.searchParams.set('lang', currentLanguage);
        window.history.replaceState({}, '', url.pathname + url.search + url.hash);
      }
    } catch (e) {}
  }

  window.weddingI18n = {
    t: function(key, arg) {
      var value = translations[currentLanguage][key];
      return typeof value === 'function' ? value(arg) : value;
    },
    setLanguage: applyLanguage
  };

  switcher.addEventListener('click', function(event) {
    var button = event.target.closest('button[data-lang]');
    if (button) applyLanguage(button.dataset.lang, true);
  });
  applyLanguage(currentLanguage, false);
});
