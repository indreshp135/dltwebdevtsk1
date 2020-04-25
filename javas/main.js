var val,NAMEI;
document.querySelector("#ok").onclick= function ()
{
  val=document.querySelector("#inp").value;
  if(val=="")
    document.querySelector("#inp").palceHolder="Name empty";
  else
    updat(val);
}
function oneout()
{
  document.querySelector(".audi").play();
    document.querySelector(".first").style.display="none";
    document.querySelector(".signup").style.display="block";
}
class player
{
  constructor(name,passwd)
  {
    this.name=name;
    this.passwd=passwd;
  }
}

var players=[];
document.querySelector("#oks").onclick= function ()
{
  var nAme=document.querySelector("#nm").value;
  var psd=document.querySelector("#pw").value;
  if(!(nAme==""))
  {
    const plys=new player (nAme,psd);
    players.push(plys);
    var str=JSON.stringify(players);
    localStorage.setItem("players",str);
    document.querySelector(".signup").style.display="none";
    document.querySelector(".second").style.display="block";
    NAMEI=nAme;
  }
}

function login()
{
  document.querySelector(".signup").style.display="none";
  document.querySelector(".login").style.display="block";
}
document.querySelector("#okl").onclick= function ()
{
  // document.write('hai');
  var nAme=document.querySelector("#nml").value;
  var psd=document.querySelector("#pwl").value;
  var fl=0;
  if(!(nAme==""))
  {
    for(var i=0;i<player.length;i++)
    {
      if(players[i].name==nAme)
      {
        if(players[i].passwd==psd)
        {
          document.querySelector(".login").style.display="none";
          document.querySelector(".second").style.display="block";
          NAMEI=nAme;
          fl=1;
        }
        else
          {fl=2;continue;}
        
        break;
      }
    }
    if(fl==0)
      document.querySelector(".quesl").innerHTML="Not found";
    if(fl==2)
    {
      document.querySelector(".quesl").innerHTML="Wrong password";
    }
  }
}
  class TextScramble 
  {
    constructor(el)
    {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) 
    {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) 
      {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
}
update() 
{
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}
const phrases = ['WELCOME TO THE GAME','Forty shades of grey','Delta Task 1',"Indresh P",'106119052'];

const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}
next()  
var v;

var division;
var p,q,st,no;
var stop=0;
var sec=0,min=0,u,tim;
function timer()
{
    sec++;
    if (sec == 60)
    {
      sec = 0;
      min = min + 1; 
    }
    if (sec<=9) 
    {
      sec = "0" + sec; 
    }
    u=((min<=9)?"0"+min : min) + ":" + sec;
    document.getElementById("clk").innerHTML =((min<=9)?"0"+min : min) + " : " + sec;
    document.getElementById("clk1").innerHTML =((min<=9)?"0"+min : min) + " : " + sec;
    setTimeout("timer();", 1000);
}
function countdown()
{
  document.querySelector(".game").style.fontSize="300px";
  if(v==0)
  {
    document.querySelector(".game").innerHTML="";
    sec=0;
    min=0;
    if(stop==0)
    timer();
  }
  else
  {
    document.querySelector(".game").innerHTML=v;
    setTimeout("countdown()",1000);
    v--;
  }
}
//hacker modes
function hacker()
{
  document.querySelector(".second").style.display="none";
  document.querySelector(".hacker").style.display="block";
}
//gameinitializer except hack++
function gameinit(x,y)
{
  p=x;
  q=y;
  document.querySelector(".second").style.display="none";
  document.querySelector(".hacker").style.display="none"
  document.querySelector(".gamen").style.display="block";
  v=3;
  countdown();
  setTimeout("gamestart()",3100);
}
//dom table creater except hack++
function gamestart()
{
  var wdt=window.innerWidth*0.8;
var hdt=window.innerHeight*0.75;
var o=parseInt(hdt);
var w=parseInt(wdt);
  for(b=[],i=0;i<p*q;++i)
    b[i]=i;
 var top=b.length,tmp, current;
  if(top) while(--top) 
  {
      current = Math.floor(Math.random() * (top + 1));
      tmp = b[current];
      b[current] = b[top];
      b[top] = tmp;
  }
  for(var a=[],i=0;i<p*q;++i)
    a[i]=i;
  top = a.length;
  if(top) while(--top) 
  {
      current = Math.floor(Math.random() * (top + 1));
      tmp = a[current];
      a[current] = a[top];
      a[top] = tmp;
  }
  o=o/parseInt(q);
  w=w/parseInt(p);
  division = document.querySelector(".game");
  var table = document.createElement("TABLE");
  table.id="tablenorm";
  for(var i=0;i<q;i++)
  {
    let tr = document.createElement("TR");
    for(var j=0;j<p;j++)
    {
      var k=i*p+j;
      let cr=(a[k]+1)/(p*q*2);
      let td = document.createElement("TD");
      td.id='n'+k;
      let txt = document.createTextNode(a[k]+1);
      td.style.width=w+"px";
      td.style.height=o+"px";
      if(p*q!=20)
      {
        td.style.backgroundColor="rgba(255,0,0,"+cr+")";
      }
      td.onclick=play;
      td.appendChild(txt);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  division.appendChild(table);
  st=1;
  document.querySelector("#delg").style.display="block";
  if(p*q==20)
  {
    if(norm.length>0)
    {
      document.querySelector("#bstscr").innerHTML="Best : "+norm[0].score;
    }
    else
    {
      document.querySelector("#bstscr").innerHTML="Best : NIL";
    }
  }
  if(p*q==16)
  {
    if(easy.length>0)
    {
      document.querySelector("#bstscr").innerHTML="Best : "+easy[0].score;
    }
    else
    {
      document.querySelector("#bstscr").innerHTML="Best : NIL";
    }
  }
  if(p*q==30)
  {
    if(hard.length>0)
    {
      document.querySelector("#bstscr").innerHTML="Best : "+hard[0].score;
    }
    else
    {
      document.querySelector("#bstscr").innerHTML="Best : NIL";
    }
  }
  if(p*q==48)
  {
    if(expert.length>0)
    {
      document.querySelector("#bstscr").innerHTML="Best : "+expert[0].score;
    }
    else
    {
      document.querySelector("#bstscr").innerHTML="Best : NIL";
    }
  }
  document.querySelector(".uppart").style.display="block";
}
var b;
//function to change values
var cr;
var play=function ()
{
  no=this.id;
  if(document.getElementById(no).innerHTML==st)
  {
    document.querySelector(".crt").play();
    if(st<=p*q)
      {
        document.getElementById(no).innerHTML=b[st-1]+p*q+1;
        cr=(b[st-1]+p*q+1)/(p*q*2);
        if(p*q!=20)
        {
          document.getElementById(no).style.backgroundColor="rgba(255,0,0,"+cr+")";
        }
      }
    else
    {
      document.getElementById(no).innerHTML=' ';
      document.getElementById(no).style.backgroundColor="rgba(255,0,0,0)";
    }
    st++;
  }
  else
    document.querySelector(".wrg").play();
  if(st==p*q*2+1)
  {
    tim=u;
    endgame();
  }
}

//audios
function pl()
{
  document.querySelector(".aud").play();
}
function ply()
{
  document.querySelector(".audi").play();
}

//hacker++alone
function hackerplus()
{
  document.querySelector(".second").style.display="none";
  document.querySelector(".gamen").style.display="block";
  v=3;
  countdown();
  setTimeout("hackstart()",3100);
}

function hackstart()
{
  document.querySelector(".hkp").style.display="block";
  document.querySelector(".gamen").style.display="none";
  p=5;
  q=5;
  st=1;
  for(b=[],i=0;i<p*q;++i)
    b[i]=i;
 var top=b.length,tmp, current;
  if(top) while(--top) 
  {
      current = Math.floor(Math.random() * (top + 1));
      tmp = b[current];
      b[current] = b[top];
      b[top] = tmp;
  }
  for(var a=[],i=0;i<p*q;++i)
    a[i]=i;
  var tmp, current, top = a.length;
  if(top) while(--top) 
  {
      current = Math.floor(Math.random() * (top + 1));
      tmp = a[current];
      a[current] = a[top];
      a[top] = tmp;
  }
  for(var i=0;i<25;i++)
  {
    var ii=i+25;
    document.querySelector("#h"+i).innerHTML=a[i]+1;
    document.querySelector("#h"+ii).innerHTML=a[i]+1;
    document.querySelector("#h"+ii).onclick=hackplplay; 
    document.querySelector("#h"+i).onclick=hackplplay; 
  }
  document.querySelector("#delg1").style.display="block";
  if(hpp.length>0)
  {
    document.querySelector("#bstscr1").innerHTML="Best : "+hpp[0].score;
  }
  else
  {
    document.querySelector("#bstscr1").innerHTML="Best : NIL";
  }
}
var one,two;
var hackplplay =function()
{
  no=this.id;
  if(no.length==3)
    one=no.substr(1,2);
  else
    one=no.substr(1,1);
  one=parseInt(one);
  one=one%25;
  two=one+25;
  if(document.getElementById(no).innerHTML==st)
  {
    document.querySelector(".crt").play();
    if(st<=p*q)
    {
      document.getElementById('h'+one).innerHTML=b[st-1]+1+p*q;
      document.getElementById('h'+two).innerHTML=b[st-1]+1+p*q;
    }
    else
    {
      document.getElementById('h'+one).innerHTML=' ';
      document.getElementById('h'+two).innerHTML=' ';
    }
    st++;
  }
  else
    document.querySelector(".wrg").play();
  if(st==p*q*2+1)
  {
    tim=u;
    endgame();
  } 
}

//aftergame
function endgame()
{
  stop=1;
  document.querySelector(".cong").play();
  document.querySelector(".gamen").style.display="none";
  document.querySelector(".hkp").style.display="none";
  document.querySelector(".uppart").style.display="none";
  document.querySelector(".congratulations").style.display="block";
  document.querySelector("#inp").value=NAMEI;
  document.querySelector("#score").innerHTML=tim;
}
var mn1 , sc1 , si , mn2 , sc2 , sj , ni , nj , lgt ;
function sort (arr)
{
  lgt=arr.length;
  for(var i=0;i<lgt;i++)
  {
    var iti=arr[i].score;
    mn1=parseInt(iti.substr(0,2));
    sc1=parseInt(iti.substr(3,2));
    for(var j=0;j<i;j++)
    {
      var itj=arr[j].score;
      mn2=parseInt(itj.substr(0,2));
      sc2=parseInt(itj.substr(3,2));
      if((mn1*60)+sc1<(mn2*60)+sc2)
      {
        ni=arr[i].name;
        nj=arr[j].name;
        arr[i].name=nj;
        arr[j].name=ni;
        arr[j].score=iti;
        arr[i].score=itj
      }
    }
  }
}
function updat(val)
{
  if(p*q==20)
  {
    const p=new scr(val,tim);
    norm.push(p);
    sort (norm);
    var str=JSON.stringify(norm);
    localStorage.setItem("norm",str);
  }
  if(p*q==16)
  {
    const p=new scr(val,tim);
    easy.push(p);
    sort (easy);
    var str=JSON.stringify(easy);
    localStorage.setItem("easy",str);
  }
  if(p*q==30)
  {
    const p=new scr(val,tim);
    hard.push(p);
    sort (hard);
    var str=JSON.stringify(hard);
    localStorage.setItem("hard",str);
  }
  if(p*q==48)
  {
    const p=new scr(val,tim);
    expert.push(p);
    sort (expert);
    var str=JSON.stringify(expert);
    localStorage.setItem("expert",str);
  }
  if(p*q==25)
  {
    const p=new scr(val,tim);
    hpp.push(p);
    sort (hpp);
    var str=JSON.stringify(hpp);
    localStorage.setItem("hpp",str);
  }
  listlist();
}
function listlist()
{
  document.querySelector(".congratulations").style.display="none";
  document.querySelector(".leaderboard").style.display="block";
  var hg = 5;
  if(p*q==20)
  {

    document.querySelector(".typeo").innerHTML="Normal";
    var listn=document.querySelector(".append");
    listn.innerHTML="";
    if(norm.length<hg)
      hg=norm.length;
    for(var i=0;i<hg;i++)
    {
      var nm=norm[i].name;
      var sr=norm[i].score;
      var node=document.createElement('p');
      node.innerHTML=i+1+". "+nm+" "+sr;
      listn.appendChild(node);
    }
  }
  if(p*q==16)
  {

    document.querySelector(".typeo").innerHTML="Easy";
    var listn=document.querySelector(".append");
    listn.innerHTML="";
    if(easy.length<hg)
      hg=easy.length;
    for(var i=0;i<hg;i++)
    {
      var nm=easy[i].name;
      var sr=easy[i].score;
      var node=document.createElement('p');
      node.innerHTML=i+1+". "+nm+" "+sr;
      listn.appendChild(node);
    }
  }
  if(p*q==30)
  {
    document.querySelector(".typeo").innerHTML="Hard";
    var listn=document.querySelector(".append");
    listn.innerHTML="";
    if(hard.length<hg)
      hg=hard.length;
    for(var i=0;i<hg;i++)
    {
      var nm=hard[i].name;
      var sr=hard[i].score;
      var node=document.createElement('p');
      node.innerHTML=i+1+". "+nm+" "+sr;
      listn.appendChild(node);
    }
  }
  if(p*q==48)
  {

    document.querySelector(".typeo").innerHTML="Expert";
    var listn=document.querySelector(".append");
    listn.innerHTML="";
    if(expert.length<hg)
      hg=expert.length;
    for(var i=0;i<hg;i++)
    {
      var nm=expert[i].name;
      var sr=expert[i].score;
      var node=document.createElement('p');
      node.innerHTML=i+1+". "+nm+" "+sr;
      listn.appendChild(node);
    }
  }
  if(p*q==25)
  {

    document.querySelector(".typeo").innerHTML="Hacker++";
    var listn=document.querySelector(".append");
    listn.innerHTML="";
    if(hpp.length<hg)
      hg=hpp.length;
    for(var i=0;i<hg;i++)
    {
      var nm=hpp[i].name;
      var sr=hpp[i].score;
      var node=document.createElement('p');
      node.innerHTML=i+1+". "+nm+" "+sr;
      listn.appendChild(node);
    }
  }
}
class scr 
{
  constructor(name,score)
  {
    this.name=name;
    this.score=score;
  }
}
var norm=[],easy=[],hard=[],expert=[],hpp=[];
window.onload
{
  getlist();
}
function getlist()
{
  players=JSON.parse(localStorage.getItem("players"));
  if(!players)
  {
    players=[];
  }
  norm=JSON.parse(localStorage.getItem("norm"));
  if(!norm)
  {
    norm=[];
  }
  easy=JSON.parse(localStorage.getItem("easy"));
  if(!easy)
  {
    easy=[];
  }
  hard=JSON.parse(localStorage.getItem("hard"));
  if(!hard)
  {
    hard=[];
  }
  expert=JSON.parse(localStorage.getItem("expert"));
  if(!expert)
  {
    expert=[];
  }
  hpp=JSON.parse(localStorage.getItem("hpp"));
  if(!hpp)
  {
    hpp=[];
  }
}
function exit()
{
  document.querySelector(".leaderboard").style.display="none";
  document.querySelector(".second").style.display="block";
}