import{t}from"./toast-service.js";async function a(n){console.log("Vanilla App Bootstrapping")}async function i(n){const{domElement:o}=n;o.innerHTML=`
    <div style="padding: 1rem; border: 2px solid #d0bf4c; height: 100%; box-sizing: border-box;">
      <h2 style="color: #d0bf4c; margin-top: 0;">Vanilla JS App</h2>
      <p>I am a vanilla JS micro-frontend.</p>
      
      <button id="vanilla-toast-btn" style="
        padding: 10px 20px; 
        background: #d0bf4c;
        border: none; 
        border-radius: 4px; 
        cursor: pointer;
        font-weight: bold;
      ">
        Fire Singleton Toast
      </button>
    </div>
  `,document.getElementById("vanilla-toast-btn")?.addEventListener("click",()=>{t.add({message:"Hello from the Vanilla JS App!",type:"info"})})}async function r(n){const{domElement:o}=n;o.innerHTML=""}export{a as bootstrap,i as mount,r as unmount};
