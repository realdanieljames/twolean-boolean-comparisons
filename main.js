/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5(element) {
  return element > 5;
}

function topScore(element1, element2) {
  return element1 > element2;
}

function isInDanger(element) {
  return  element > 59 && element < 72;
}

function isCoasting(element) {
  return element > 71 &&  element < 84;
}

function isSucceeding(element) {
  return element > 83 && element < 93;
}

function isFailing(element) {
  return element < 60;
}

function isAcing(element) {
  return element > 92;
}

function isStudent(element) {
  return element === 'student';
}

function isTeacher(element) {
  return element === 'teacher';
}

function isAdmin(element) {
  return element === 'admin';
}

function isElementary(element) {
  return element === 'elementary';
}

function areDifferentPeople(element1, element2) {
  return element1 !== element2
}

function isMiddleSchoolTeacher(element1, element2) {
  return element1 === 'teacher' && element2 > 5 && element2 < 9;
}

function notAnElementarySchoolAdministrator(element1, element2) {
  return element1 !== 'elementary' || element2 !== 'admin';
}



/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  differentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
