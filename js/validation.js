/*
 * Copyright (c) 2021, Jaiden di Lanzo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * The \p isEmpty function determines whether the value supplied by the \p field
 * parameter is empty. The function returns \p true if the field is empty, and
 * \p false otherwise.
 * @param   field - The text field to check for emptiness.
 * @return  True if the field is empty, false otherwise.
 */
function isEmpty(field) {
  if (field.value == "" || field.value == null) {
    return true;
  }

  return false;
}

/**
 * The \p isValidName function determines whether the value supplied by the
 * \p name parameter is valid. A valid name must contain at least one character.
 * The function returns \p true if the name is valid, and \p false otherwise.
 * @param   name - The name value to check for validity.
 * @return  True if the name is valid, false otherwise.
 */
function isValidName(name) {
  if (!isEmpty(name)) {
    if (/[\W\w]+/.test(name.value)) {
      document.getElementById('errorName').innerText = "";
      return true;
    }
  }

  document.getElementById('errorName').innerText = "Not a valid name!";
  return false;
}

/**
 * The \p isValidPhoneNumber function determines whether the value supplied by
 * the \p number parameter is valid. A valid phone number must contain at least
 * one digit, and may contain the \p + special prefix. The function returns \p
 * true if the phone number is valid, and \p false otherwise.
 * @param   number - The phone number value to check for validity.
 * @return  True if the phone number is valid, false otherwise.
 */
function isValidPhoneNumber(number) {
  if (!isEmpty(number)) {
    if (/[\d]+/.test(number.value)) {
      document.getElementById('errorNumber').innerText = "";
      return true;
    }
  }

  document.getElementById('errorNumber').innerText = "Not a valid number!";
  return false;
}

/**
 * The \p isValidDay function determines whether the value supplied by the \p
 * day parameter is valid. A valid day lies within the range [1, 31]. This
 * function does not validate days of a particular month (see the \p isValidDate
 * function). The function returns \p true if the day is valid,
 * and \p false otherwise.
 * @param   day - The day value to check for validity.
 * @return  True if the day is valid, false otherwise.
 */
function isValidDay(day) {
  if (!isEmpty(day)) {
    if (0 < day.value && day.value < 32) {
      document.getElementById('errorDate').innerText = "";
      return true;
    }
  }

  document.getElementById('errorDate').innerText = "Not a valid day!";
  return false;
}

/**
 * The \p isValidMonth function determines whether the value supplied by the \p
 * month parameter is valid. A valid month lies within the range [1, 12]. The
 * function returns \p true if the day is valid, and \p false otherwise.
 * @param   month - The month value to check for validity.
 * @return  True if the month is valid, false otherwise.
 */
function isValidMonth(month) {
  if (!isEmpty(month)) {
    if (0 < month.value && month.value < 13) {
      document.getElementById('errorDate').innerText = "";
      return true;
    }
  }

  document.getElementById('errorDate').innerText = "Not a valid month!";
  return false;
}

/**
 * The \p isValidYear function determines whether the value supplied by the \p
 * year parameter is valid. A valid year is any non-negative year value
 * (including zero). The upper limit is unbounded. The function returns \p true
 * if the year is valid, and \p false otherwise.
 * @param   year - The year value to check for validity.
 * @return  True if the year is valid, false otherwise.
 */
function isValidYear(year) {
  if (!isEmpty(year)) {
    if (year.value > -1) {
      document.getElementById('errorDate').innerText = "";
      return true;
    }
  }

  document.getElementById('errorDate').innerText = "Not a valid year!";
  return false
}

/**
 * The \p isValidDate function determines whether a whole date is valid based on
 * the supplued \p day, \p month, and\p year parameters. This function validates
 * particular days of the month, and accounts for leap years. The function
 * returns \p true if the date is valid, and \p false otherwise.
 * @param   day - The day part of the whole date.
 * @param   month - The month part of the whole date.
 * @param   year - The year part of the whole date.
 * @return  True if the date is valid, false otherwise.
 */
function isValidDate(day, month, year) {
  if (month.value == 1 ||  // Months with 31 days.
      month.value == 3 || month.value == 5 || month.value == 7 || month.value ==
      8 || month.value == 10 || month.value == 12) {
    if (0 < day.value && day.value < 32) {
      document.getElementById('errorDate').innerText = "";
      return true;
    }
  } else if (month.value == 4 ||  // Months with 30 days.
             month.value == 6 || month.value == 9 || month.value == 11) {
    if (0 < day.value && day.value < 31) {
      document.getElementById('errorDate').innerText = "";
      return true;
    }
  } else if (month.value == 2) {  // February, the special case.
    if ((year.value % 4) != 0) {
      if (0 < day.value && day.value < 29) {
        document.getElementById('errorDate').innerText = "";
        return true;
      }
    } else if ((year.value % 100) != 0) {
      if (0 < day.value && day.value < 30) {
        document.getElementById('errorDate').innerText = "";
        return true;
      }
    } else if ((year.value % 400) != 0) {
      if (0 < day.value && day.value < 29) {
        document.getElementById('errorDate').innerText = "";
        return true;
      }
    } else {
      if (0 < day.value && day.value < 30) {
        document.getElementById('errorDate').innerText = "";
        return true;
      }
    }
  }

  document.getElementById('errorDate').innerText = "Not a valid date!";
  return false;
}

/**
 * The \p isValidPastime function determines whether the value supplied by the
 * \p pastime parameter is valid. A valid pastime is one of the following:
 * - Surfing the Web
 * - Playing Sport
 * - Listening to Music
 * - Watching TV
 * - Playing Games
 * - Community Service
 * - Daydreaming
 * - Reading
 * - Meditation
 * The function returns \p true if the day is valid, and \p false otherwise.
 * @param   pastime - The pastime value to check for validity.
 * @return  True if the pastime is valid, false otherwise.
 */
function isValidPastime(pastime) {
  if (!isEmpty(pastime)) {
    if (pastime.value == "Surfing the Web" || pastime.value ==
        "Playing Sport" || pastime.value == "Listening to Music" ||
        pastime.value == "Watching TV" || pastime.value == "Playing Games" ||
        pastime.value == "Community Service" || pastime.value ==
        "Daydreaming" || pastime.value == "Reading" || pastime.value ==
        "Meditation") {
      document.getElementById('errorPastime').innerText = "";
      return true;
    }
  }

  document.getElementById('errorPastime').innerText = "Not a valid pastime!";
  return false;
}

/**
 * The \p isValidForm function determines whether the entire form, as supplied
 * by the \p form parameter, is valid. This function performs individual
 * validation checks for each form element. A valid form is one which has each
 * field filled and validated correctly. The function returns \p true if the
 * whole form is valid, and \p false otherwise.
 * @param   form - The form to check for validity.
 * @return  True if the form is valid, false otherwise.
 */
function isValidForm(form) {
  if (isValidName(form.name) && isValidPhoneNumber(form.number) &&
      isValidDay(form.day) && isValidMonth(form.month) &&
      isValidYear(form.year) && isValidDate(form.day, form.month, form.year) &&
      isValidPastime(form.pastime)) {
    document.getElementById('errorForm').innerText = "";
    return true;
  }

  document.getElementById('errorForm').innerText =
      "Form is invalid or incomplete!";
  return false;
}
