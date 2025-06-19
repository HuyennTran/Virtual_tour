//Menu button
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.getElementById('nav-items');
    const menuIcon = menuToggle.querySelector('span'); 
    
    menuToggle.addEventListener('click', () => {
        if (menuToggle.style.display !== 'block') {
            navItems.classList.toggle('show');
            if (navItems.classList.contains('show')) {
                menuIcon.classList.remove('material-icons');
                menuIcon.classList.add('material-icons-home');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('material-icons-home');
            }
        }
    });
  });
  
  let modal1 = document.getElementById('myInfor1');
  let openModalBtn1 = document.getElementById('openModalBtn1');
  let closeModalBtn1 = document.querySelector('.inforclose-btn1');
    openModalBtn1.addEventListener('click', () => {
        modal1.style.display = 'block'; 
    });
  
    closeModalBtn1.addEventListener('click', () => {
        modal1.style.display = 'none'; 
    });
  
    window.addEventListener('click', (event) => {
        if (event.target === modal1) {
            modal1.style.display = 'none'; 
        }
    });
  
  //Infor button
  let modal2 = document.getElementById('myInfor2');
  let openModalBtn2 = document.getElementById('openModalBtn2');
  let closeModalBtn2 = document.querySelector('.inforclose-btn2');
  
    openModalBtn2.addEventListener('click', () => {
        modal2.style.display = 'block'; 
    });
  
    closeModalBtn2.addEventListener('click', () => {
        modal2.style.display = 'none'; 
    });
  
    window.addEventListener('click', (event) => {
        if (event.target === modal2) {
            modal2.style.display = 'none'; 
        }
    });
  
  
  
  // Gallery
  
  let modal3 = document.getElementById('myInfor3');
  let openModalBtn3 = document.getElementById('openModalBtn3');
  let closeModalBtn3 = document.querySelector('.inforclose-btn3');
    openModalBtn3.addEventListener('click', () => {
        modal3.style.display = 'block'; 
    });
  
    closeModalBtn3.addEventListener('click', () => {
        modal3.style.display = 'none'; 
    });
  
    window.addEventListener('click', (event) => {
        if (event.target === modal3) {
            modal3.style.display = 'none'; 
        }
    });
  /// Gallery-thumbnail
  function changeImage(thumbnail) {
      const mainImage = document.getElementById('mainImage');
      const imageCaption = document.getElementById('imageCaption');
      mainImage.src = thumbnail.src; 
      imageCaption.textContent = thumbnail.getAttribute('data-caption'); 
  }
  function openLightbox() {
      const mainImage = document.getElementById('mainImage');
      const lightbox = document.getElementById('lightbox');
      const lightboxImage = document.getElementById('lightboxImage');
      
      lightboxImage.src = mainImage.src; 
      lightbox.style.display = 'flex'; 
    }

    function closeLightbox() {
      const lightbox = document.getElementById('lightbox');
      lightbox.style.display = 'none';
    }
  
  ///-------------------------------------------------------------------------------------------------------------------------------///
  
  let chatbotToggler = document.querySelector(".chatbot-toggler");
  let closeBtn = document.querySelector(".close-btn");
  let chatbox = document.querySelector(".chatbox");
  let chatInput = document.querySelector(".chat-input textarea");
  let sendChatBtn = document.querySelector(".chat-input span");
  
  let userMessage = null;
  const inputInitHeight = chatInput.scrollHeight;
  
  // Gemini API Configuration
  const GEMINI_API_KEY = "AIzaSyC3Th_BaGxIYvI86EvUN_dUtA7WiQk8kcc"; 
  const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
  
  
  const createChatLi = (message, className) => {
      const chatLi = document.createElement("li");
      chatLi.classList.add("chat", `${className}`);
      let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
      chatLi.innerHTML = chatContent;
      chatLi.querySelector("p").textContent = message;
      return chatLi;
  }
  
  // Function to fetch Gemini API Response
  
  const getGeminiResponse = async (userMessage) => {
      try {
        if (userMessage.includes("đây là web gì") || userMessage.includes("What is website about?")) {
            return "đây là một website  cho phép người dùng khám phá Đại học Bách Khoa, thông qua hình ảnh, video, hoặc công nghệ thực tế ảo (VR).";
        }
          const response = await fetch(GEMINI_API_URL + `?key=${GEMINI_API_KEY}`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  contents: [{ parts: [{ text: userMessage }] }],
              }),
          });
  
          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(`API Error: ${response.status} ${response.statusText} ${JSON.stringify(errorData)}`);
          }
  
          const data = await response.json();
  
          if (data && data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
              return data.candidates[0].content.parts[0].text.trim();
          }
  
          return "I'm having trouble generating a response right now.";
  
      } catch (error) {
          console.error("Gemini API error:", error);
          return "I'm having trouble generating a response right now.";
      }
  }
  
  
  const generateResponse = async (chatElement) => {
    const messageElement = chatElement.querySelector("p");
    messageElement.textContent = "Thinking..."; // Show "Thinking..." message
    const botResponse = await getGeminiResponse(userMessage);
    messageElement.textContent = botResponse;
    chatbox.scrollTo(0, chatbox.scrollHeight);
  };
  
  
  const handleChat = () => {
      userMessage = chatInput.value.trim();
      if(!userMessage) return;
      chatInput.value = "";
      chatInput.style.height = `${inputInitHeight}px`;
      chatbox.appendChild(createChatLi(userMessage, "outgoing"));
      chatbox.scrollTo(0, chatbox.scrollHeight);
  
  
      setTimeout(() => {
          // Display "Thinking..." message while waiting for the response
           const incomingChatLi = createChatLi("", "incoming");
          chatbox.appendChild(incomingChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
  
          generateResponse(incomingChatLi);
        }, 600);
  };
  
  
  chatInput.addEventListener("input", () => {
      chatInput.style.height = `${inputInitHeight}px`;
      chatInput.style.height = `${chatInput.scrollHeight}px`;
  });
  
  chatInput.addEventListener("keydown", (e) => {
      if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
          e.preventDefault();
          handleChat();
      }
  });
  
  sendChatBtn.addEventListener("click", handleChat);
  
  closeBtn.addEventListener("click", () => {
      document.body.classList.remove("show-chatbot")
  });
  window.addEventListener("click", (event) => {
      // Kiểm tra xem người dùng có nhấp vào ngoài chatbot không
      if (event.target !== chatbotToggler && event.target !== chatbox &&  event.target !== chatInput &&
          event.target !==  sendChatBtn) {
          document.body.classList.remove("show-chatbot"); // Ẩn chatbot
      }
  });
  
  chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));