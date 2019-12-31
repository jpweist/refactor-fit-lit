import './css/base.scss';
import './css/styles.scss';
import variables from './css/_variables.scss';

import $ from 'jquery';

import userData from './data/users';
import activityData from './data/activity';
import sleepData from './data/sleep';
import hydrationData from './data/hydration';

import UserRepository from './UserRepository';
import User from './User';
import Activity from './Activity';
import Hydration from './Hydration';
import Sleep from './Sleep';


// can i wrap this whole section of new Classes and put that in the api call??
let userRepository = new UserRepository();
// console.log(userRepository);

userData.forEach(user => {
  user = new User(user);
  userRepository.users.push(user)
});

activityData.forEach(activity => {
  activity = new Activity(activity, userRepository);
});

hydrationData.forEach(hydration => {
  hydration = new Hydration(hydration, userRepository);
});

sleepData.forEach(sleep => {
  sleep = new Sleep(sleep, userRepository);
});
/// area for function? upt to comment

let user = userRepository.users[0];
let todayDate = "2019/09/22";
user.findFriendsNames(userRepository.users);
// a lot a varirables here can we make them $jQuery?
let dailyOz = document.querySelector('.daily-oz');
let $dropdownEmail = $('#dropdown-email');
let $dropdownFriendsStepsContainer = $('#dropdown-friends-steps-container');
let dropdownGoal = $('#dropdown-goal');
let $dropdownName = $('#dropdown-name');
let $headerName = $('#header-name');
let hydrationCalendarCard = document.querySelector('#hydration-calendar-card');
let $hydrationFriendOuncesToday = $('#hydration-friend-ounces-today');
let hydrationFriendsCard = document.querySelector('#hydration-friends-card');
let hydrationInfoCard = document.querySelector('#hydration-info-card');
let hydrationInfoGlassesToday = document.querySelector('#hydration-info-glasses-today');
let hydrationMainCard = document.querySelector('#hydration-main-card');
let hydrationUserOuncesToday = document.querySelector('#hydration-user-ounces-today');
let $mainPage = document.querySelector('main');
let $profileButton = $('#profile-button');
let sleepCalendarCard = document.querySelector('#sleep-calendar-card');
let $sleepCalendarHoursAverageWeekly = $('#sleep-calendar-hours-average-weekly');
let $sleepCalendarQualityAverageWeekly = $('#sleep-calendar-quality-average-weekly');
let sleepFriendLongestSleeper = document.querySelector('#sleep-friend-longest-sleeper');
let sleepFriendsCard = document.querySelector('#sleep-friends-card');
let sleepFriendWorstSleeper = document.querySelector('#sleep-friend-worst-sleeper');
let sleepInfoCard = document.querySelector('#sleep-info-card');
let $sleepInfoHoursAverageAlltime = $('#sleep-info-hours-average-alltime');
let $sleepInfoQualityAverageAlltime = $('#sleep-info-quality-average-alltime');
let sleepInfoQualityToday = document.querySelector('#sleep-info-quality-today');
let sleepMainCard = document.querySelector('#sleep-main-card');
let sleepUserHoursToday = document.querySelector('#sleep-user-hours-today');
let sortedHydrationDataByDate = user.ouncesRecord.sort((a, b) => {
  if (Object.keys(a)[0] > Object.keys(b)[0]) {
    return -1;
  }
  if (Object.keys(a)[0] < Object.keys(b)[0]) {
    return 1;
  }
  return 0;
});
let stairsCalendarCard = document.querySelector('#stairs-calendar-card');
let stairsCalendarFlightsAverageWeekly = $('#stairs-calendar-flights-average-weekly');
let stairsCalendarStairsAverageWeekly = document.querySelector('#stairs-calendar-stairs-average-weekly');
let stepsMainCard = $('#steps-main-card');
let stepsInfoCard = document.querySelector('#steps-info-card');
let stepsFriendsCard = document.querySelector('#steps-friends-card');
let stepsTrendingCard = document.querySelector('#steps-trending-card');
let stepsCalendarCard = document.querySelector('#steps-calendar-card');
let stairsFriendFlightsAverageToday = document.querySelector('#stairs-friend-flights-average-today');
let stairsFriendsCard = document.querySelector('#stairs-friends-card');
let stairsInfoCard = document.querySelector('#stairs-info-card');
let stairsInfoFlightsToday = document.querySelector('#stairs-info-flights-today');
let stairsMainCard = document.querySelector('#stairs-main-card');
let $stairsTrendingButton = $('.stairs-trending-button');
let stairsTrendingCard = document.querySelector('#stairs-trending-card');
let stairsUserStairsToday = document.querySelector('#stairs-user-stairs-today');
let stepsCalendarTotalActiveMinutesWeekly = document.querySelector('#steps-calendar-total-active-minutes-weekly');
let stepsCalendarTotalStepsWeekly = $('#steps-calendar-total-steps-weekly');
let stepsFriendAverageStepGoal = $('#steps-friend-average-step-goal');
let stepsInfoActiveMinutesToday = document.querySelector('#steps-info-active-minutes-today');
let stepsInfoMilesWalkedToday = document.querySelector('#steps-info-miles-walked-today');
let stepsFriendActiveMinutesAverageToday = $('#steps-friend-active-minutes-average-today');
let stepsFriendStepsAverageToday = $('#steps-friend-steps-average-today');
let $stepsTrendingButton = $('.steps-trending-button');
let stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
let $trendingStepsPhraseContainer = $('.trending-steps-phrase-container');
let $trendingStairsPhraseContainer = $('.trending-stairs-phrase-container');
let userInfoDropdown = document.querySelector('#user-info-dropdown');
// end of all the possible $jQuery variables.

$mainPage.addEventListener('click', showInfo);
$profileButton.on('click', showDropdown);
$stairsTrendingButton.on('click', updateTrendingStairsDays());
$stepsTrendingButton.on('click', updateTrendingStepDays());

function flipCard(cardToHide, cardToShow) {
  // cardToHide.classList.add('hide');
  // cardToShow.classList.remove('hide');
  cardToHide.addClass('hide');
  cardToShow.removeClass('hide');
}

function showDropdown() {
  userInfoDropdown.classList.toggle('hide');
}
// activity for the page filips over stuff
function showInfo() {
  if (event.target.classList.contains('steps-info-button')) {
    flipCard(stepsMainCard, stepsInfoCard);
  }
  if (event.target.classList.contains('steps-friends-button')) {
    flipCard(stepsMainCard, stepsFriendsCard);
  }
  if (event.target.classList.contains('steps-trending-button')) {
    flipCard(stepsMainCard, stepsTrendingCard);
  }
  if (event.target.classList.contains('steps-calendar-button')) {
    flipCard(stepsMainCard, stepsCalendarCard);
  }
  if (event.target.classList.contains('hydration-info-button')) {
    flipCard(hydrationMainCard, hydrationInfoCard);
  }
  if (event.target.classList.contains('hydration-friends-button')) {
    flipCard(hydrationMainCard, hydrationFriendsCard);
  }
  if (event.target.classList.contains('hydration-calendar-button')) {
    flipCard(hydrationMainCard, hydrationCalendarCard);
  }
  if (event.target.classList.contains('stairs-info-button')) {
    flipCard(stairsMainCard, stairsInfoCard);
  }
  if (event.target.classList.contains('stairs-friends-button')) {
    flipCard(stairsMainCard, stairsFriendsCard);
  }
  if (event.target.classList.contains('stairs-trending-button')) {
    flipCard(stairsMainCard, stairsTrendingCard);
  }
  if (event.target.classList.contains('stairs-calendar-button')) {
    flipCard(stairsMainCard, stairsCalendarCard);
  }
  if (event.target.classList.contains('sleep-info-button')) {
    flipCard(sleepMainCard, sleepInfoCard);
  }
  if (event.target.classList.contains('sleep-friends-button')) {
    flipCard(sleepMainCard, sleepFriendsCard);
  }
  if (event.target.classList.contains('sleep-calendar-button')) {
    flipCard(sleepMainCard, sleepCalendarCard);
  }
  if (event.target.classList.contains('steps-go-back-button')) {
    flipCard(event.target.parentNode, stepsMainCard);
  }
  if (event.target.classList.contains('hydration-go-back-button')) {
    flipCard(event.target.parentNode, hydrationMainCard);
  }
  if (event.target.classList.contains('stairs-go-back-button')) {
    flipCard(event.target.parentNode, stairsMainCard);
  }
  if (event.target.classList.contains('sleep-go-back-button')) {
    flipCard(event.target.parentNode, sleepMainCard);
  }
}

function updateTrendingStairsDays() {
  user.findTrendingStairsDays();
  // trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
  $trendingStairsPhraseContainer.html(`<p class='trend-line'>${user.trendingStairsDays[0]}</p>`);
}

function updateTrendingStepDays() {
  user.findTrendingStepDays();
  // trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
  $trendingStepsPhraseContainer.html(`<p class='trend-line'>${user.trendingStepDays[0]}</p>`);
}

for (var i = 0; i < dailyOz.length; i++) {
  dailyOz[i].innerText = user.addDailyOunces(Object.keys(sortedHydrationDataByDate[i])[0])
  // $dailyOz[i].text(user.addDailyOunces(Object.keys(sortedHydrationDataByDate[i])[0]));
}


// dropdownGoal.innerText = `DAILY STEP GOAL | ${user.dailyStepGoal}`;
// dropdownEmail.innerText = `EMAIL | ${user.email}`;
// dropdownName.innerText = user.name.toUpperCase();
// headerName.innerText = `${user.getFirstName()}'S `;

dropdownGoal.text(`DAILY STEP GOAL | ${user.dailyStepGoal}`);
$dropdownEmail.text(`EMAIL | ${user.email}`);
$dropdownName.text(user.name.toUpperCase());
$headerName.text(`${user.getFirstName()}'S `);



hydrationUserOuncesToday.innerText = hydrationData.find(hydration => {
  return hydration.userID === user.id && hydration.date === todayDate;
}).numOunces;

// hydrationFriendOuncesToday.innerText = userRepository.calculateAverageDailyWater(todayDate);
$hydrationFriendOuncesToday.text(userRepository.calculateAverageDailyWater(todayDate));

hydrationInfoGlassesToday.innerText = hydrationData.find(hydration => {
  return hydration.userID === user.id && hydration.date === todayDate;
}).numOunces / 8;

// sleepCalendarHoursAverageWeekly.innerText = user.calculateAverageHoursThisWeek(todayDate);
// sleepCalendarQualityAverageWeekly.innerText = user.calculateAverageQualityThisWeek(todayDate);

$sleepCalendarHoursAverageWeekly.text(user.calculateAverageHoursThisWeek(todayDate));
$sleepCalendarQualityAverageWeekly.text(user.calculateAverageQualityThisWeek(todayDate));


sleepFriendLongestSleeper.innerText = userRepository.users.find(user => {
  return user.id === userRepository.getLongestSleepers(todayDate)
}).getFirstName();

sleepFriendWorstSleeper.innerText = userRepository.users.find(user => {
  return user.id === userRepository.getWorstSleepers(todayDate)
}).getFirstName();

// sleepInfoHoursAverageAlltime.innerText = user.hoursSleptAverage;
$sleepInfoHoursAverageAlltime.text(user.hoursSleptAverage);

stepsInfoMilesWalkedToday.innerText = user.activityRecord.find(activity => {
  return (activity.date === todayDate && activity.userId === user.id)
}).calculateMiles(userRepository);

// sleepInfoQualityAverageAlltime.innerText = user.sleepQualityAverage;
$sleepInfoQualityAverageAlltime.text(user.sleepQualityAverage);

sleepInfoQualityToday.innerText = sleepData.find(sleep => {
  return sleep.userID === user.id && sleep.date === todayDate;
}).sleepQuality;

sleepUserHoursToday.innerText = sleepData.find(sleep => {
  return sleep.userID === user.id && sleep.date === todayDate;
}).hoursSlept;

// stairsCalendarFlightsAverageWeekly.innerText = user.calculateAverageFlightsThisWeek(todayDate);
stairsCalendarFlightsAverageWeekly.text(user.calculateAverageFlightsThisWeek(todayDate));

stairsCalendarStairsAverageWeekly.innerText = (user.calculateAverageFlightsThisWeek(todayDate) * 12).toFixed(0);

stairsFriendFlightsAverageToday.innerText = (userRepository.calculateAverageStairs(todayDate) / 12).toFixed(1);

stairsInfoFlightsToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).flightsOfStairs;

stairsUserStairsToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).flightsOfStairs * 12;

// stairsCalendarFlightsAverageWeekly.innerText = user.calculateAverageFlightsThisWeek(todayDate);

stairsCalendarStairsAverageWeekly.innerText = (user.calculateAverageFlightsThisWeek(todayDate) * 12).toFixed(0);

$stairsTrendingButton.on('click', function() {
  user.findTrendingStairsDays();
  // trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
  trendingStairsPhraseContainer.html(`<p class='trend-line'>${user.trendingStairsDays[0]}</p>`);
});

stepsCalendarTotalActiveMinutesWeekly.innerText = user.calculateAverageMinutesActiveThisWeek(todayDate);

// stepsCalendarTotalStepsWeekly.innerText = user.calculateAverageStepsThisWeek(todayDate);
stepsCalendarTotalStepsWeekly.text(user.calculateAverageStepsThisWeek(todayDate));

$stepsTrendingButton.on('click', function() {
  user.findTrendingStepDays();
  // trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
  trendingStepsPhraseContainer.html(`<p class='trend-line'>${user.trendingStepDays[0]}</p>`);
});

// stepsFriendActiveMinutesAverageToday.innerText = userRepository.calculateAverageMinutesActive(todayDate);
stepsFriendActiveMinutesAverageToday.text(userRepository.calculateAverageMinutesActive(todayDate));

// stepsFriendAverageStepGoal.innerText = `${userRepository.calculateAverageStepGoal()}`;
stepsFriendAverageStepGoal.text(`${userRepository.calculateAverageStepGoal()}`);

// stepsFriendStepsAverageToday.innerText = userRepository.calculateAverageSteps(todayDate);
stepsFriendStepsAverageToday.text(userRepository.calculateAverageSteps(todayDate));

stepsInfoActiveMinutesToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).minutesActive;

stepsUserStepsToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).numSteps;

user.findFriendsTotalStepsForWeek(userRepository.users, todayDate);

user.friendsActivityRecords.forEach(friend => {
  // dropdownFriendsStepsContainer.innerHTML += `
  // <p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>
  // `;
  $dropdownFriendsStepsContainer.append(`<p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>`);
});

let friendsStepsParagraphs = document.querySelectorAll('.friends-steps');

friendsStepsParagraphs.forEach(paragraph => {
  if (friendsStepsParagraphs[0] === paragraph) {
    paragraph.classList.add('green-text');
  }
  if (friendsStepsParagraphs[friendsStepsParagraphs.length - 1] === paragraph) {
    paragraph.classList.add('red-text');
  }
  if (paragraph.innerText.includes('YOU')) {
    paragraph.classList.add('yellow-text');
  }
});
