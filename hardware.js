/* Local, reusable CSS 3D illustrations. No CDNs, WebGL, or model downloads. */
(() => {
  const stage=document.getElementById('hardware-stage');
  const original=stage.querySelector('.board-float');
  const callout=stage.querySelector('.board-callout');
  const hint=stage.querySelector('.stage-label');
  const reset=document.getElementById('reset-view');
  const viewport=document.createElement('div');
  viewport.className='hardware-viewport'; stage.append(viewport);
  let mode='motion', selected={motion:0,sensor:0,system:0}, expanded=false;
  let turn={x:29,y:-13,z:-19},pointer=null;
  const boards=[
    ['discovery','STM32F4-DISCOVERY','STM32F407 · ST-LINK · onboard motion sensor','BARE-METAL / MOTION & CONTROL'],
    ['nucleo','STM32 Nucleo-F439ZI','Nucleo-144 · ST-LINK · Ethernet','FIRMWARE / CONNECTED CONTROLLERS'],
    ['pi','Raspberry Pi 3B+','Linux · GPIO · USB · Ethernet','EDGE COMPUTING / SYSTEM GATEWAY'],
    ['uno','Arduino UNO','ATmega328P · USB · digital & analog I/O','PROTOTYPING / INPUT & OUTPUT'],
    ['esp','ESP32','ESP32-WROOM · PCB antenna · Wi-Fi / Bluetooth','WIRELESS / CONNECTED DEVICES']
  ];
  const sensors=[
    ['bme','BME280','Temperature · humidity · pressure','ENVIRONMENT / I²C OR SPI'],
    ['pir','PIR Motion Sensor','HC-SR501-style module · Fresnel lens','PRESENCE / DIGITAL MOTION OUTPUT'],
    ['ultrasonic','HC-SR04','Twin ultrasonic transducers','DISTANCE / TRIGGER & ECHO'],
    ['imu','MPU6050','Accelerometer · gyroscope','MOTION / SIX-AXIS SENSING'],
    ['light','BH1750','Ambient light sensor · I²C breakout','LIGHT / ILLUMINANCE']
  ];
  const systems=[
    ['platform','Floating platform','Five boards · sensors · one connected system','SYSTEM / SENSOR-TO-DASHBOARD'],
    ['firmware','Firmware explode view','Click the board or use Enter to open the firmware layers','FIRMWARE / REAL-TIME TASKS'],
    ['orbit','Orbit system','Raspberry Pi gateway · four orbiting controllers','CONNECTED DEVICES / DATA PULSES'],
    ['journey','Data journey','Scroll inside the scene to follow the signal','SENSOR → PROCESS → SEND → DASHBOARD'],
    ['blueprint','Blueprint hologram','Hover or focus a board to reveal its solid model','HARDWARE / COMPONENT STUDY']
  ];
  const list=()=>mode==='motion'?boards:mode==='sensor'?sensors:systems;
  const part=(x,y,w,h,cls,text='')=>`<div class="hw-part ${cls}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px">${text}</div>`;
  const label=(x,y,text,cls='')=>`<span class="hw-silk ${cls}" style="left:${x}px;top:${y}px">${text}</span>`;
  function header(x,y,n,horizontal=false){return part(x,y,horizontal?n*9:16,horizontal?16:n*9,'hw-header',Array.from({length:n},()=>'<i></i>').join(''));}
  function chip(x,y,w,h,text){return part(x,y,w,h,'hw-chip',`<b>${text}</b>`);}
  function metal(x,y,w,h,text=''){return part(x,y,w,h,'hw-metal',text);}
  function button(x,y,color){return part(x,y,20,20,'hw-button',`<i style="background:${color}"></i>`);}
  function led(x,y,c){return part(x,y,5,7,'hw-led',`<i style="background:${c};box-shadow:0 0 7px ${c}"></i>`);}
  function traces(w,h){let t='';for(let i=0;i<24;i++){const x=20+(i*31)%(w-40),y=30+(i*47)%(h-60);t+=`<path d="M${x} ${y}h${14+i%20}l15 15v${16+i%25}"/>`;}return `<svg class="hw-circuit" viewBox="0 0 ${w} ${h}" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width=".7">${t}</g><path class="hw-flow" d="M20 ${h*.75}h70l35 -35h${w*.3}" fill="none" stroke="#d4ff70" stroke-width="2"/></svg>`;}
  function device(id){
    if(id==='discovery'){
      const copy=original.querySelector('.board').cloneNode(true);
      copy.removeAttribute('id');copy.style.transform='';copy.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
      return `<div class="hw-device hw-discovery" style="--dw:260px;--dh:390px">${copy.outerHTML}</div>`;
    }
    let w=300,h=250,color='#246b43',body='';
    if(id==='nucleo'){
      w=260;h=390;color='#d1d8c8';
      body=label(15,12,'NUCLEO-F439ZI')+label(184,18,'ST','hw-brand')+label(17,92,'ST-LINK / V2-1')+metal(102,-9,43,38,'USB')+chip(95,43,47,39,'ST-LINK')+header(13,115,28)+header(231,115,28)+header(45,135,13)+header(199,135,13)+chip(91,180,79,79,'ST<br>STM32F439')+button(70,128,'#2697d0')+button(167,128,'#111')+metal(149,330,79,65,'ETHERNET')+metal(70,352,32,40,'USB')+led(91,297,'#4dff6b')+led(104,297,'#ffbb49')+led(117,297,'#ed5151')+label(55,283,'ARM CORTEX-M4');
      body+='<div class="hw-divider"></div>';
    }else if(id==='pi'){
      w=340;h=225;
      body=header(25,9,28,true)+metal(298,31,47,62,'USB')+metal(298,103,47,62,'USB')+metal(275,171,72,55,'ETHERNET')+metal(12,202,29,28,'PWR')+metal(81,198,59,31,'HDMI')+chip(114,76,63,64,'BCM2837B0')+metal(34,81,51,47,'Wi-Fi')+part(190,186,25,31,'hw-audio','●')+part(190,55,12,62,'hw-ribbon')+part(71,142,61,12,'hw-ribbon')+label(25,164,'Raspberry Pi')+label(25,178,'3 Model B+')+label(217,54,'GPIO')+led(13,57,'#e96052')+led(22,57,'#74ff6b');
    }else if(id==='uno'){
      w=320;h=244;color='#146578';
      body=header(100,10,14,true)+header(100,218,14,true)+metal(-9,34,61,49,'USB-B')+part(-8,171,50,36,'hw-audio','●')+chip(135,143,139,35,'ATmega328P')+chip(73,71,31,32,'16U2')+metal(105,102,36,15)+button(42,18,'#d1d3c8')+label(160,64,'∞','hw-brand')+label(154,102,'ARDUINO UNO')+label(108,199,'ANALOG IN')+label(133,32,'DIGITAL PWM ~')+led(112,65,'#f4bb47')+led(112,80,'#9aff68');
      for(let i=0;i<14;i++)body+=part(135+i*10,136,4,7,'hw-pin')+part(135+i*10,178,4,7,'hw-pin');
    }else if(id==='esp'){
      w=165;h=340;color='#243330';
      body=header(6,23,31)+header(143,23,31)+metal(32,76,101,116,'ESPRESSIF<br>ESP32-WROOM')+part(32,10,101,60,'hw-antenna','<svg viewBox="0 0 100 60"><path d="M5 50V9h15v35h16V9h16v35h16V9h25v42" fill="none" stroke="#c1a765" stroke-width="5"/></svg>')+chip(59,222,42,30,'USB UART')+metal(60,307,43,39,'USB')+button(25,279,'#151b18')+button(121,279,'#151b18')+label(25,265,'EN')+label(117,265,'BOOT')+led(32,245,'#ff5c50');
    }else{
      w=id==='ultrasonic'?300:230;h=id==='pir'?230:190;color=id==='bme'?'#42529a':id==='imu'?'#1e627c':'#245d71';
      if(id==='bme')body=metal(88,58,58,49,'BME280')+part(112,72,5,5,'hw-vent')+header(43,165,6,true)+label(30,24,'BME280')+label(27,138,'VIN GND SCL SDA');
      if(id==='pir'){
        body=part(39,21,152,152,'hw-dome','<svg viewBox="0 0 160 160"><defs><radialGradient id="pirDome"><stop stop-color="#fffef2"/><stop offset=".7" stop-color="#d3dfcc"/><stop offset="1" stop-color="#839b83"/></radialGradient></defs><circle cx="80" cy="80" r="77" fill="url(#pirDome)"/><g fill="none" stroke="#99ad94" stroke-width=".7">'+Array.from({length:6},(_,i)=>`<circle cx="80" cy="80" r="${15+i*11}"/>`).join('')+Array.from({length:16},(_,i)=>`<path d="M80 80L${80+76*Math.cos(i*Math.PI/8)} ${80+76*Math.sin(i*Math.PI/8)}"/>`).join('')+'</g></svg>')+header(92,207,3,true)+part(25,177,31,25,'hw-trim','+')+part(172,177,31,25,'hw-trim','+')+label(65,190,'HC-SR501');
      }
      if(id==='ultrasonic')body=part(20,30,102,102,'hw-transducer','<i></i>')+part(178,30,102,102,'hw-transducer','<i></i>')+header(129,166,4,true)+label(111,140,'HC-SR04')+label(128,16,'TX / RX');
      if(id==='imu')body=chip(84,58,65,65,'MPU<br>6050')+header(47,164,8,true)+label(25,24,'GY-521 / MPU6050')+led(28,112,'#80ff76');
      if(id==='light')body=chip(92,65,46,40,'BH1750')+part(110,73,12,12,'hw-light-die')+header(56,164,5,true)+label(29,25,'BH1750 / GY-302')+label(53,136,'VCC SCL SDA ADDR GND');
    }
    for(let i=0;i<22;i++){const x=27+(i*43)%(w-54),y=30+(i*29)%(h-60);body+=part(x,y,6,3,'hw-smd');}
    const holes=[[10,10],[w-17,10],[10,h-17],[w-17,h-17]].map(([x,y])=>part(x,y,7,7,'hw-hole')).join('');
    return `<div class="hw-device hw-${id}" style="--dw:${w}px;--dh:${h}px;--pcb:${color}"><div class="hw-back"></div><div class="hw-face">${traces(w,h)}${body}${holes}</div></div>`;
  }
  function single(id){return `<div class="hw-center"><div class="hw-float"><div class="hw-rotator">${device(id)}</div></div></div>`;}
  function mini(id,x,y,name,scale=.29,cls=''){return `<div class="system-node ${cls}" style="left:${x}px;top:${y}px;--mini-scale:${scale}"><div class="mini-model">${device(id)}</div><span class="node-name">${name}</span></div>`;}
  function links(){return `<svg class="system-links" viewBox="0 0 600 430" aria-hidden="true">${[[115,115],[465,110],[100,295],[490,295]].map(([x,y])=>`<path d="M${x} ${y}L300 220"/><circle r="3"><animateMotion dur="${3+x/150}s" repeatCount="indefinite" path="M${x} ${y}L300 220"/></circle>`).join('')}</svg>`;}
  function dashboard(){return '<div class="system-dashboard"><span>LIVE SYSTEM / SIMULATED</span><div class="dash-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><small>SENSOR INPUT → EDGE INSIGHT</small></div>';}
  function world(content,cls=''){return `<div class="scene-fit"><div class="scene-world ${cls}">${content}</div></div>`;}
  function system(id){
    if(id==='platform')return world('<div class="system-platform"></div>'+links()+mini('pi',300,230,'Raspberry Pi 3B+',.37)+mini('discovery',115,115,'STM32F4-Discovery',.27)+mini('nucleo',465,110,'Nucleo-F439ZI',.27)+mini('esp',100,295,'ESP32',.28)+mini('uno',490,295,'Arduino UNO',.28)+mini('bme',178,295,'BME280',.16,'sensor-moon')+mini('pir',440,340,'PIR',.16,'sensor-moon')+dashboard(),'platform-scene');
    if(id==='firmware')return world(`<button class="firmware-stack ${expanded?'expanded':''}" id="firmware-stack" type="button" aria-expanded="${expanded}" aria-label="${expanded?'Close':'Open'} firmware layers"><span class="firmware-base">${device('discovery')}</span>${['Hardware','Drivers','RTOS','Tasks','Application'].map((name,i)=>`<span class="firmware-layer layer-${i}" style="--layer:${i}" title="${name}"><span>${name}</span>${i===3?'<span class="task-bars"><i>Sensor</i><i>UART</i><i>LED</i></span>':''}</span>`).join('')}</button><p class="scene-instruction">${expanded?'CLICK TO CLOSE LAYERS':'CLICK THE BOARD TO EXPLODE'}</p>`,'firmware-scene');
    if(id==='orbit')return world('<div class="orbit-grid"></div>'+mini('pi',300,218,'Raspberry Pi 3B+',.39)+boards.filter(b=>b[0]!=='pi').map((b,i)=>`<div class="system-orbit" style="--angle:${i*90}deg;--delay:${-i*12}s"><div class="orbit-carrier">${mini(b[0],0,0,b[1],.21)}${i<2?mini(i?'pir':'bme',55,24,i?'PIR':'BME280',.12,'sensor-moon'):''}</div></div>`).join('')+links()+Array.from({length:3},(_,i)=>`<i class="orbit-pulse" style="--delay:${-i*1.7}s" aria-hidden="true"></i>`).join(''),'orbit-scene');
    if(id==='journey')return `<div class="journey-scroll" tabindex="0" aria-label="Scroll through sensor data journey"><div class="journey-sticky">${world('<svg class="journey-path" viewBox="0 0 600 430" aria-hidden="true"><path d="M85 255Q180 170 250 250T450 250L540 200"/><circle class="journey-dot" r="5"/></svg>'+mini('bme',85,255,'01 / READ SENSOR',.28)+mini('discovery',250,250,'02 / PROCESS',.27)+mini('pi',420,250,'03 / SEND',.29)+'<div class="journey-dash"><b>04 / DASHBOARD</b><span>▁ ▃ ▂ ▆ ▄ ▇</span></div><p class="journey-focus" id="journey-focus">Read sensor</p>','journey-scene')}</div><div class="journey-distance"></div></div>`;
    return world('<div class="blueprint-grid"></div>'+boards.map((b,i)=>`<button type="button" class="blueprint-node" style="left:${[110,300,485,180,425][i]}px;top:${[140,135,140,305,305][i]}px" aria-label="Reveal ${b[1]}"><span class="blueprint-model">${device(b[0])}</span><span class="blueprint-name">${b[1]}</span><span class="blueprint-detail">${i===4?'ANTENNA':i===2?'SoC / GPIO':'MCU / HEADERS'}</span></button>`).join('')+'<div class="hologram-scan"></div>','blueprint-scene');
  }
  function fit(){const box=viewport.querySelector('.scene-fit');if(box)box.style.setProperty('--scene-scale',Math.min(stage.clientWidth/600,stage.clientHeight/430));}
  function freezeSmil(paused){viewport.querySelectorAll('svg').forEach(svg=>{if(paused&&svg.pauseAnimations)svg.pauseAnimations();else if(svg.unpauseAnimations)svg.unpauseAnimations();});}
  function render(){
    const row=list()[selected[mode]],isDiscovery=mode==='motion'&&selected.motion===0;
    stage.dataset.mode=mode;stage.dataset.slide=selected[mode];
    stage.setAttribute('aria-label',`Interactive 3D illustration: ${row[1]}`);
    original.hidden=!isDiscovery;callout.hidden=!isDiscovery;
    viewport.hidden=isDiscovery;viewport.innerHTML=isDiscovery?'':mode==='system'?system(row[0]):single(row[0]);
    hint.innerHTML=mode==='system'?(row[0]==='firmware'?'CLICK TO EXPLORE':row[0]==='blueprint'?'HOVER OR FOCUS TO REVEAL':row[0]==='journey'?'SCROLL WITHIN THE SCENE':'CONNECTED SYSTEM / SIMULATED'):'DRAG TO ROTATE <span aria-hidden="true">⤢</span>';
    reset.hidden=mode==='system';
    document.getElementById('hardware-title').textContent=row[1];
    document.getElementById('hardware-subtitle').textContent=row[2];
    document.getElementById('mode-label').textContent=row[3];
    document.getElementById('hardware-position').textContent=`${String(selected[mode]+1).padStart(2,'0')} / ${String(list().length).padStart(2,'0')}`;
    document.getElementById('hardware-prev').setAttribute('aria-label',`Previous ${mode==='motion'?'board':mode==='sensor'?'sensor':'system scene'}`);
    document.getElementById('hardware-next').setAttribute('aria-label',`Next ${mode==='motion'?'board':mode==='sensor'?'sensor':'system scene'}`);
    turn={x:29,y:-13,z:-19};fit();
    viewport.querySelector('#firmware-stack')?.addEventListener('click',()=>{expanded=!expanded;const stack=viewport.querySelector('#firmware-stack');stack.classList.toggle('expanded',expanded);stack.setAttribute('aria-expanded',String(expanded));stack.setAttribute('aria-label',`${expanded?'Close':'Open'} firmware layers`);viewport.querySelector('.scene-instruction').textContent=expanded?'CLICK TO CLOSE LAYERS':'CLICK THE BOARD TO EXPLODE';});
    const journey=viewport.querySelector('.journey-scroll');
    if(journey){const update=()=>{const progress=journey.scrollTop/(journey.scrollHeight-journey.clientHeight);viewport.style.setProperty('--journey-progress',progress);const focus=['Read sensor','Process on STM32','Send through Raspberry Pi','View on dashboard'][Math.min(3,Math.floor(progress*4))];viewport.querySelector('#journey-focus').textContent=focus;viewport.querySelector('.scene-world').style.setProperty('--camera-x',`${(0.5-progress)*100}px`);};journey.addEventListener('scroll',update,{passive:true});update();}
    freezeSmil(document.documentElement.classList.contains('paused')||matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  function move(n){selected[mode]=(selected[mode]+n+list().length)%list().length;render();}
  document.getElementById('hardware-prev').addEventListener('click',()=>move(-1));
  document.getElementById('hardware-next').addEventListener('click',()=>move(1));
  document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{mode=button.dataset.mode;document.querySelectorAll('[data-mode]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render();}));
  stage.parentElement.addEventListener('keydown',event=>{if(event.target.closest('.journey-scroll'))return;if(event.key==='ArrowRight'){event.preventDefault();move(1);}if(event.key==='ArrowLeft'){event.preventDefault();move(-1);}});
  stage.addEventListener('pointerdown',event=>{if(mode==='system'||!selected[mode]&&mode==='motion'||event.target.closest('button'))return;pointer={x:event.clientX,y:event.clientY,rx:turn.x,ry:turn.y};if(event.pointerType!=='touch')stage.setPointerCapture(event.pointerId);});
  stage.addEventListener('pointermove',event=>{if(!pointer)return;turn.x=Math.max(0,Math.min(65,pointer.rx-(event.clientY-pointer.y)*.25));turn.y=Math.max(-65,Math.min(65,pointer.ry+(event.clientX-pointer.x)*.35));viewport.querySelector('.hw-rotator')?.style.setProperty('transform',`rotateX(${turn.x}deg) rotateY(${turn.y}deg) rotateZ(${turn.z}deg) scale(.9)`);});
  window.addEventListener('pointerup',()=>pointer=null);stage.addEventListener('pointercancel',()=>pointer=null);stage.addEventListener('lostpointercapture',()=>pointer=null);
  reset.addEventListener('click',()=>{const model=viewport.querySelector('.hw-rotator');if(model)model.style.transform='';});
  new ResizeObserver(fit).observe(stage);
  new MutationObserver(()=>freezeSmil(document.documentElement.classList.contains('paused')||matchMedia('(prefers-reduced-motion: reduce)').matches)).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  render();
})();
