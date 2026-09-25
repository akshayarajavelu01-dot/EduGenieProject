function fill(text){
  document.getElementById('question').value=text;
  document.getElementById('question').focus();
}

function setTopic(topic){
  fill(topic + ': ');
}

function ask(text){
  document.getElementById('question').value=text;
  send();
}

function addMessage(text,user=false){

  const box=document.getElementById('messages');

  const row=document.createElement('div');

  row.className='message'+(user?' user':'');

  row.innerHTML=
    `<div class="avatar">${user?'👤':'✦'}</div>
     <div class="bubble">${text}</div>`;

  box.appendChild(row);

  box.scrollTop=box.scrollHeight;
}

function send(){

  const input=document.getElementById('question');

  const q=input.value.trim();

  if(!q)return;

  addMessage(q,true);

  input.value='';

  setTimeout(()=>{

    let answer=`<b>EduGenie Demo Response ✨</b><br><br>
    I can explain <b>${q.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</b>
    in simple words, with examples and step-by-step points.<br><br>

    <b>For the full AI version:</b>
    connect this interface to your Flask backend and Google Gemini API.
    The API key should stay on the backend, not inside this HTML file.`;

    addMessage(answer,false);

  },500);
}