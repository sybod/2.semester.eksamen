// IF segment 

// Get the card element
var card = document.getElementById('card');

// Variables to track swipe start and end positions
var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

// Add touch event listeners
card.addEventListener('touchstart', function(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
});

card.addEventListener('touchmove', function(event) {
  // Prevent scrolling while swiping
  event.preventDefault();
});

card.addEventListener('touchend', function(event) {
  endX = event.changedTouches[0].clientX;
  endY = event.changedTouches[0].clientY;

  // Calculate the distance swiped horizontally and vertically
  var deltaX = endX - startX;
  var deltaY = endY - startY;

  // Set a threshold to determine a valid swipe
  var minSwipeDistance = 50;

  // Check if the swipe is horizontal and meets the threshold
  if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaY) < minSwipeDistance) {
    if (deltaX > 0) {
      // Swiped right (e.g., like)
      swipeRight();
    } else {
      // Swiped left (e.g., dislike)
      swipeLeft();
    }
  }
});

function performSwipeRightAction(heartbutton) {
  console.log('Swiped right');
  // This function will be called when swiped right
}

function performSwipeLeftAction(cancel) {
  console.log('Swiped left');
  // This function will be called when swiped left
}

//Else segment

// Get the card element - card er swipeElementet
var card = document.getElementById('SwipeElement'); 

// Variables to track swipe start and end positions
var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

// touch event listeners
card.addEventListener('touchstart', function(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
});

card.addEventListener('touchmove', function(event) {
  // Prevent scrolling while swiping
  event.preventDefault();
});

card.addEventListener('touchend', function(event) {
  endX = event.changedTouches[0].clientX;
  endY = event.changedTouches[0].clientY;

  // Calculate the distance swiped horizontally and vertically
  var deltaX = endX - startX;
  var deltaY = endY - startY;

  // threshold to determine a valid swipe
  var minSwipeDistance = 50;

  // Check if the swipe is horizontal and meets the threshold
  if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaY) < minSwipeDistance) {
    if (deltaX > 0) {
      // Swiped right (e.g., like)
      console.log('Swiped right');
      // Add your logic here
    } else {
      // Swiped left (e.g., dislike)
      console.log('Swiped left');
      // Add your logic here
    }
  }
});

//Matching algorythm 

// Sample candidate profiles
const candidates = [
    {
      name: 'Candidate A',
      skills: ['JavaScript', 'HTML', 'CSS'],
      experience: 3
    },
    {
      name: 'Candidate B',
      skills: ['JavaScript', 'Python', 'Java'],
      experience: 5
    },
  ];
  
  // job requirements
  const requirements = {
    skills: ['JavaScript', 'HTML', 'CSS'],
    experience: 4,
  };
  
  // Function to calculate compatibility score
  function calculateCompatibility(candidate, requirements) {
    let score = 0;
  
    // Compare skills
    const skillsMatched = candidate.skills.filter((skill) =>
      requirements.skills.includes(skill)
    );
    score += skillsMatched.length;
  
    // Compare experience
    if (candidate.experience >= requirements.experience) {
      score += 1;
    }
    return score;
  }
  
  // Apply the algorithm and recommend profiles
  const recommendedProfiles = candidates
    .map((candidate) => ({
      candidate,
      score: calculateCompatibility(candidate, requirements),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);
  
  // Display of the recommended profiles
  recommendedProfiles.forEach((result) => {
    console.log(`Candidate: ${result.candidate.name}, Score: ${result.score}`);
  });

  //Private function 

  // Sample candidate profiles
const candidates = [
    {
      name: 'Candidate A',
      skills: ['JavaScript', 'HTML', 'CSS'],
      experience: 3,
      privateAccount: true
    },
    {
      name: 'Candidate B',
      skills: ['JavaScript', 'Python', 'Java'],
      experience: 5,
      privateAccount: true
    },
    // Add more candidate profiles here
  ];
  
  // Sample job requirements
  const requirements = {
    skills: ['JavaScript', 'HTML', 'CSS'],
    experience: 4,
  };
  
  // Function to calculate compatibility score
  function calculateCompatibility(candidate, requirements) {
    let score = 0;
  
    // Compare skills
    const skillsMatched = candidate.skills.filter((skill) =>
      requirements.skills.includes(skill)
    );
    score += skillsMatched.length;
  
    // Compare experience
    if (candidate.experience >= requirements.experience) {
      score += 1;
    }
  
    return score;
  }
  
  // Function to unlock private account
  function unlockPrivateAccount(candidate) {
    candidate.privateAccount = false;
  }
  
  // Apply the algorithm and unlock private accounts
  candidates.forEach((candidate) => {
    const compatibilityScore = calculateCompatibility(candidate, requirements);
  
    if (compatibilityScore >= 5) {
      // Adjust the threshold as needed
      unlockPrivateAccount(candidate);
    }
  });
  
  // Display the updated candidate profiles
  candidates.forEach((candidate) => {
    console.log(`Candidate: ${candidate.name}, Private Account: ${candidate.privateAccount ? 'Locked' : 'Unlocked'}`);
  });