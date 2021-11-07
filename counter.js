/*Build a Counter

Step 1: Define a variable called count with an initial value of 0. This will be
our global variable that our functions will have access to and with it the increase
and decrease of our count will be possible whenever our functions get executed.
Step 2: Create a function called increaseCount. In it we will increase the count 
of the count variable by one. We will then select the p element in our HTML page
and use the innerHTML property to will display the increment of our count variable
whenever this function gets executed.
Step 3: Create a function called decreaseCount. In it we will decrease the count 
of the count variable by one. We will then select the p element in our HTML page
and use the innerHTML property to will display the decrement of our count variable
whenever this function gets executed.
*/


let count = 0;

function increaseCount() {
	count++;
    document.getElementById("demo").innerHTML = count;  
};

function decreaseCount() {
	count--;
	document.getElementById("demo").innerHTML = count;
};


