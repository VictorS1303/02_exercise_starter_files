### CHECK TIME EXERCISE ###

1.  Start by creating a variable with a suiting name that you decide and set it equal to **new Date()**. Log that value to see what it returns.

    const nameOfYourVariable = new Date()
    console.log(nameOfYourVariable)

    What you want to get is the time in hours. To get that, simply append the getHours() method to the **new Date()**.
    The whole thing should look like this:
    const nameOfYourVariable = **new Date().getHours()**.

---

2. Now, create a function that you give a suiting name of your choice. Do remember to call it, otherwise it won't work.

What the code should look like so far:

const nameOfYourVariable = **new Date().getHours()**

**function nameOfYourFunction(){}**

---

3. Here, the actual challenge starts. Inside the function made in step 2, we want to check certain conditions and print different things to the console based on the given conditions.

   I'm not going to tell you the actual code to write in the function, but I can give you the following clues (do remember that your variable returns a number between 1 and 24 based on the current hour):
   
   **If** the value of your variable is **greater than** 5 and **less than** 10 (meaning the time is somewhere between 5 o'clock (5 o'clock ***excluded***) and 10 o'clock), log 'Godmorgen' to the console.
   
   **Else if** the value of your variable is **greater than** or **equal to** 10 and **less than** 18 (meaning the time is somewhere between 10 o'clock (10 o'clock ***included***) and 18 o'clock (18 o'clock ***excluded***)), log 'Goddag' to the console.
   
   **Else if** the value of your variable is **equal to** or **greater than** 18 and **less than** 24, log 'God aften' to the console.
   
   **Else** log 'Godnat' to the console.
   (This else, if the code is written correctly, should only run, if the time is somewhere between midnight and 5 o'clock in the morning).
   
   ---
   ---
   Side Note:
   If you want to check if each code block is being run as intended, simply change the time settings of your computer, so that you can set it something else manually.
   
   
   **Windows Guide:**
   1. Go to Settings
   
   2. Search "Date & Time"
   
   3. Turn of "Set time automatically" and "Set time zone automatically".
   
   4. Now you can adjust the time zone so that you computer thinks you're somewhere where the time is something different from your current location
   
   **Mac Guide:** (I'm not a Mac user, so let me know if this is wrong):
   
   1. Select "System Preferences" from the Apple menu.
   
   2. Under the "Date and Time" option, select "Time Zone".
   
   3. Deselect the "Set Time Zone Automatically Using Current Location" and use the map to set the time zone manually.