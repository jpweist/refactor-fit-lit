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

// ########
let userDataApi, sleepDataApi, actDataApi, hydDataApi, hydrationDataApi, activityDataApi;
let userApi, sleepApi, actApi, hydApi;
let getCounter = 0;

function getApiData(ext, callback){
  fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/" + ext)
  .then(response => response.json())
  .then(data => {
    callback(data);
    // getCounter++;
    // getCheck()
  })
  .catch(error => console.log(error))

}

let userRepositoryApi;
function startInitalizer() {

  getApiData('users/userData', (data) => {
    // console.log(data);

    userDataApi = data.userData;
    userRepository = new UserRepository();
    user = new User(userDataApi[0]);
    userRepository.users.push(user)
    // console.log(user);
    // console.log(userRepository);
    // startUser(userApi, userRepository);

  })
  getApiData('sleep/sleepData', (data) => {
    console.log(data)
    sleepDataApi = data.sleepData;
    sleepApi = new Sleep(sleepDataApi, userRepository);
    console.log(sleepApi, userRepository);
    // startSleep();
  })
  getApiData('activity/activityData', (data) => {
    // console.log(data)
    activityDataApi = data.activityData;
    activityApi = new Activity(activityDataApi, userRepository);
    console.log(activityApi);
    // startActivity()
  })
  getApiData('hydration/hydrationData', (data) => {
    // console.log(data)
    hydrationDataApi = data.hydrationData;
    hydrationApi = new Hydration(hydrationDataApi, userRepository);
    console.log(userRepositoryApi);
    // startHydration();
  });
}

startInitalizer();



// ########
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
let dailyOz = $('.daily-oz');
let dropdownEmail = $('#dropdown-email');
let dropdownFriendsStepsContainer = $('#dropdown-friends-steps-container');
let dropdownGoal = $('#dropdown-goal');
let dropdownName = $('#dropdown-name');
let headerName = $('#header-name');
let hydrationCalendarCard = $('#hydration-calendar-card');
let hydrationFriendOuncesToday = $('#hydration-friend-ounces-today');
let hydrationFriendsCard = $('#hydration-friends-card');
let hydrationInfoCard = $('#hydration-info-card');
let hydrationInfoGlassesToday = $('#hydration-info-glasses-today');
let hydrationMainCard = $('#hydration-main-card');
let hydrationUserOuncesToday = $('#hydration-user-ounces-today');
let mainPage = $('main');
let profileButton = $('#profile-button');
let sleepCalendarCard = $('#sleep-calendar-card');
let sleepCalendarHoursAverageWeekly = $('#sleep-calendar-hours-average-weekly');
let sleepCalendarQualityAverageWeekly = $('#sleep-calendar-quality-average-weekly');
let sleepFriendLongestSleeper = $('#sleep-friend-longest-sleeper');
let sleepFriendsCard = $('#sleep-friends-card');
let sleepFriendWorstSleeper = $('#sleep-friend-worst-sleeper');
let sleepInfoCard = $('#sleep-info-card');
let sleepInfoHoursAverageAlltime = $('#sleep-info-hours-average-alltime');
let sleepInfoQualityAverageAlltime = $('#sleep-info-quality-average-alltime');
let sleepInfoQualityToday = $('#sleep-info-quality-today');
let sleepMainCard = $('#sleep-main-card');
let sleepUserHoursToday = $('#sleep-user-hours-today');
let sortedHydrationDataByDate = user.ouncesRecord.sort((a, b) => {
  if (Object.keys(a)[0] > Object.keys(b)[0]) {
    return -1;
  }
  if (Object.keys(a)[0] < Object.keys(b)[0]) {
    return 1;
  }
  return 0;
});
let stairsCalendarCard = $('#stairs-calendar-card');
let stairsCalendarFlightsAverageWeekly = $('#stairs-calendar-flights-average-weekly');
let stairsCalendarStairsAverageWeekly = $('#stairs-calendar-stairs-average-weekly');
let stepsMainCard = $('#steps-main-card');
let stepsInfoCard = $('#steps-info-card');
let stepsFriendsCard = $('#steps-friends-card');
let stepsTrendingCard = $('#steps-trending-card');
let stepsCalendarCard = $('#steps-calendar-card');
let stairsFriendFlightsAverageToday = $('#stairs-friend-flights-average-today');
let stairsFriendsCard = $('#stairs-friends-card');
let stairsInfoCard = $('#stairs-info-card');
let stairsInfoFlightsToday = $('#stairs-info-flights-today');
let stairsMainCard = $('#stairs-main-card');
let stairsTrendingButton = $('.stairs-trending-button');
let stairsTrendingCard = $('#stairs-trending-card');
let stairsUserStairsToday = $('#stairs-user-stairs-today');
let stepsCalendarTotalActiveMinutesWeekly = $('#steps-calendar-total-active-minutes-weekly');
let stepsCalendarTotalStepsWeekly = $('#steps-calendar-total-steps-weekly');
let stepsFriendAverageStepGoal = $('#steps-friend-average-step-goal');
let stepsInfoActiveMinutesToday = $('#steps-info-active-minutes-today');
let stepsInfoMilesWalkedToday = $('#steps-info-miles-walked-today');
let stepsFriendActiveMinutesAverageToday = $('#steps-friend-active-minutes-average-today');
let stepsFriendStepsAverageToday = $('#steps-friend-steps-average-today');
let stepsTrendingButton = $('.steps-trending-button');
let stepsUserStepsToday = $('#steps-user-steps-today');
let trendingStepsPhraseContainer = $('.trending-steps-phrase-container');
let trendingStairsPhraseContainer = $('.trending-stairs-phrase-container');
let userInfoDropdown = $('#user-info-dropdown');
// end of all the possible $jQuery variables.

$(mainPage).on('click', showInfo);
$(profileButton).on('click', showDropdown);
$(stairsTrendingButton).on('click', updateTrendingStairsDays());
$(stepsTrendingButton).on('click', updateTrendingStepDays());

function flipCard(cardToHide, cardToShow) {
  $(cardToHide).addClass('hide');
  $(cardToShow).removeClass('hide');
}

function showDropdown() {
  $(userInfoDropdown).toggle('hide');
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
  $(trendingStairsPhraseContainer).html(`<p class='trend-line'>${user.trendingStairsDays[0]}</p>`);
}

function updateTrendingStepDays() {
  user.findTrendingStepDays();
  $(trendingStepsPhraseContainer).html(`<p class='trend-line'>${user.trendingStepDays[0]}</p>`);
}

for (var i = 0; i < dailyOz.length; i++) {
  $(dailyOz[i]).text(user.addDailyOunces(Object.keys(sortedHydrationDataByDate[i])[0]));
}



$(dropdownGoal).text(`DAILY STEP GOAL | ${user.dailyStepGoal}`);
$(dropdownEmail).text(`EMAIL | ${user.email}`);
$(dropdownName).text(user.name.toUpperCase());
$(headerName).text(`${user.getFirstName()}'S `);




$(hydrationUserOuncesToday).text(hydrationData.find(hydration => {
  return hydration.userID === user.id && hydration.date === todayDate;
}).numOunces);

$(hydrationFriendOuncesToday).text(userRepository.calculateAverageDailyWater(todayDate));


$(hydrationInfoGlassesToday).text(hydrationData.find(hydration => {
  return hydration.userID === user.id && hydration.date === todayDate;
}).numOunces / 8);

$(sleepCalendarHoursAverageWeekly).text(user.calculateAverageHoursThisWeek(todayDate));
$(sleepCalendarQualityAverageWeekly).text(user.calculateAverageQualityThisWeek(todayDate));



$(sleepFriendLongestSleeper).text(userRepository.users.find(user => {
  return user.id === userRepository.getLongestSleepers(todayDate)
}).getFirstName());


$(sleepFriendWorstSleeper).text(userRepository.users.find(user => {
  return user.id === userRepository.getWorstSleepers(todayDate)
}).getFirstName());

$(sleepInfoHoursAverageAlltime).text(user.hoursSleptAverage);


$(stepsInfoMilesWalkedToday).text(user.activityRecord.find(activity => {
  return (activity.date === todayDate && activity.userId === user.id)
}).calculateMiles(userRepository));

$(sleepInfoQualityAverageAlltime).text(user.sleepQualityAverage);


$(sleepInfoQualityToday).text(sleepData.find(sleep => {
  return sleep.userID === user.id && sleep.date === todayDate;
}).sleepQuality);


$(sleepUserHoursToday).text(sleepData.find(sleep => {
  return sleep.userID === user.id && sleep.date === todayDate;
}).hoursSlept);

$(stairsCalendarFlightsAverageWeekly).text(user.calculateAverageFlightsThisWeek(todayDate));

$(stairsCalendarStairsAverageWeekly).text((user.calculateAverageFlightsThisWeek(todayDate) * 12).toFixed(0));

$(stairsFriendFlightsAverageToday).text((userRepository.calculateAverageStairs(todayDate) / 12).toFixed(1));


$(stairsInfoFlightsToday).text(activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).flightsOfStairs);


$(stairsUserStairsToday).text(activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).flightsOfStairs * 12);


$(stairsTrendingButton).on('click', function() {
  user.findTrendingStairsDays();
  trendingStairsPhraseContainer.html(`<p class='trend-line'>${user.trendingStairsDays[0]}</p>`);
});

$(stepsCalendarTotalActiveMinutesWeekly).text(user.calculateAverageMinutesActiveThisWeek(todayDate));

$(stepsCalendarTotalStepsWeekly).text(user.calculateAverageStepsThisWeek(todayDate));

$(stepsTrendingButton).on('click', function() {
  user.findTrendingStepDays();
  trendingStepsPhraseContainer.html(`<p class='trend-line'>${user.trendingStepDays[0]}</p>`);
});

$(stepsFriendActiveMinutesAverageToday).text(userRepository.calculateAverageMinutesActive(todayDate));

$(stepsFriendAverageStepGoal).text(`${userRepository.calculateAverageStepGoal()}`);

$(stepsFriendStepsAverageToday).text(userRepository.calculateAverageSteps(todayDate));


$(stepsInfoActiveMinutesToday).text(activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).minutesActive);


$(stepsUserStepsToday).text(activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).numSteps);

user.findFriendsTotalStepsForWeek(userRepository.users, todayDate);

user.friendsActivityRecords.forEach(friend => {
  $(dropdownFriendsStepsContainer).append(`<p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>`);
});

let friendsStepsParagraphs = $('.friends-steps:eq( 0 )');
let friendsStepsParagraphs2 = $('.friends-steps:eq( 1 )');
let friendsStepsParagraphs3 = $('.friends-steps:eq( 3 )');

$( friendsStepsParagraphs ).addClass('green-text');
$( friendsStepsParagraphs2 ).addClass('yellow-text');
$( friendsStepsParagraphs3 ).addClass('red-text');
