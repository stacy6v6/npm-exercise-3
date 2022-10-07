This repository contains the following:

• **.gitignore** - files containing gitignore commands

• **index.js** - file that contains the main parser program.

• **README.md** - the current file that you are in which contains information about the repository files and how to use them.


The main program located in the file **index.js** is a infix to postfix parser program that takes in a postfix expression given by the user and converts it to postfix.
The program uses the estilles expression parser in order to parse an infix expression to postfix.
The program takes in one argument entered in the command line and uses the parser and toString functions of the module in order to parse the infix expression and display it as a string.

**Usage Instructions:**


1. Download and install all the packages and files in the repository to gain access to the necessary files and packages needed to run the program.

2. Open Visual Studio Code on your computer.

3. Open the **index.js** file in vscode and access the command line.

4. Run the program by calling **node index 'input-arg'** or **node index.js 'input-arg'** on the command line.

5. The parsed output will be shown as a string.


Here's an example of the expected input and output:

**input**: node index '9 + 8 * 7 / 6 '

**output**: '9 8 7 * 6 / +' 


**IMPORTANT NOTE:**  Do not forget to enclose the arguments in **' '** when inputting it in the command line.
