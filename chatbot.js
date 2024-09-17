 // Function to validate Gmail
function isValidGmail(email) {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return gmailRegex.test(email);
}

// Function to validate phone number (10 digits)
function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

// Function to get chatbot response based on user input
function getResponse(inputText) {
  inputText = inputText.toLowerCase(); // Convert input to lowercase for better matching

  if (inputText.includes("abroad")) {
      return "1. Research Your DestinationIdentify Interests: Decide what you want to study and where you’d like to study. Consider factors like language, culture, climate, and lifestyle.Research Schools: Look for universities or colleges that offer the programs you're interested in.2. Check Admission Requirements Eligibility: Verify the academic and language requirements for your chosen programs. Prerequisites: Make sure you meet the necessary qualifications and have the required documents.3. Prepare Financially Budgeting: Estimate the cost of tuition, living expenses, travel, and insurance.Scholarships and Grants: Look for scholarships, grants, or financial aid options available for international students. Savings Plan: Start saving money or consider student loans if necessary.4. Prepare Documents Academic Records: Gather transcripts, diplomas, and certificates.Language Tests: Prepare for and take any required language proficiency tests (e.g., TOEFL, IELTS).Letters of Recommendation: Request letters from teachers or professionals who know you well.5. Apply to Programs Application Forms: Complete and submit applications for your chosen programs.Personal Statement: Write a compelling personal statement or essay if required.Deadlines: Keep track of application deadlines and ensure all materials are submitted on time.6. Secure a Visa  Research Visa Requirements: Understand the student visa requirements for your chosen country. Apply for Visa: Gather necessary documents and apply for your student visa as early as possible. 7. Arrange Accommodation . Housing Options: Explore on-campus and off-campus housing options. Apply Early: Secure your accommodation in advance to avoid last-minute issues.Plan for Travel . Book Flights: Arrange your travel plans and book flights to your destination. Travel Insurance: Consider purchasing travel and health insurance for the duration of your stay.9. Prepare for Departure : Packing: Pack according to the climate and requirements of your destination. Health Check: Ensure you have any necessary vaccinations or health checks. 10. Adjust to Your New Environment Orientation: Attend any orientation programs offered by your university. Explore: Familiarize yourself with the local area, including public transportation, shopping, and other essential services. 11. Stay Connected  Emergency Contacts: Have a list of important contacts, including your university and local embassy Stay in Touch: Keep in contact with family and friends back home.";
  } else if (inputText.includes("courses") || inputText.includes("programs")) {
      return "We offer a variety of programs including Computer Science, Business Administration, and more.";
  } else if (inputText.includes("fees") || inputText.includes("tuition")) {
      return "The tuition fees vary by program. Please visit the fees section on our website for detailed information.";
  } else if (inputText.includes("contact") || inputText.includes("email")) {
      return "You can contact us via email at contact@university.com or call our helpline at +123456789.";
  } else if (inputText.includes("location") || inputText.includes("address")) {
      return "Our university is located at 123 University Road, City, Country.";
  } else if (inputText.includes("exit") || inputText.includes("bye")) {
      return "Goodbye! Feel free to ask more questions anytime.";
  } else {
      return "I'm sorry, I didn't understand your question. Can you please ask something else about admissions, courses, fees, or contact information?";
  }
}

// Function to append messages to the chat
function appendMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', sender === 'User' ? 'user-message' : 'bot-message');
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Variables to store user information
let userEmail = '';
let userPhone = '';
let userName = '';
let stage = 0; // 0: Awaiting Email, 1: Awaiting Phone, 2: Awaiting Name, 3: Chatting

// Function to handle user input and proceed through stages
function handleUserInput(inputText) {
  if (stage === 0) {
    if (isValidGmail(inputText)) {
      userEmail = inputText;
      appendMessage('Bot', 'Great! Please provide your phone number.');
      stage = 1;
    } else {
      appendMessage('Bot', 'Please enter a valid Gmail address.');
    }
  } else if (stage === 1) {
    if (isValidPhone(inputText)) {
      userPhone = inputText;
      appendMessage('Bot', 'Got it! What’s your name?');
      stage = 2;
    } else {
      appendMessage('Bot', 'Please enter a valid 10-digit phone number.');
    }
  } else if (stage === 2) {
    userName = inputText;
    appendMessage('Bot', `Nice to meet you, ${userName}! How can I assist you today?`);
    stage = 3;
  } else if (stage === 3) {
    const botResponse = getResponse(inputText);
    appendMessage('Bot', botResponse);
  }
}

// Event listener to capture user input and trigger chatbot logic
document.getElementById('user-input-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const userInput = document.getElementById('user-input').value;
  appendMessage('User', userInput);
  handleUserInput(userInput);
  document.getElementById('user-input').value = ''; // Clear input field
});
