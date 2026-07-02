function greet(name: string): void {
    console.log(`Hello ${name}`);
}

// ❌ SECURITY ERROR: SQL Injection vulnerability
function getUserData(userId: string): void {
    const query = "SELECT * FROM users WHERE id = " + userId;  // Vulnerable!
    console.log(query);
}

// ❌ SECURITY ERROR: Command Injection
function executeCommand(userInput: string): void {
    const cmd = "echo " + userInput;  // Vulnerable!
    require('child_process').exec(cmd);
}

// ❌ SECURITY ERROR: XSS vulnerability
function displayUserContent(content: string): void {
    const html = "<div>" + content + "</div>";  // Vulnerable!
    console.log(html);
}

greet("GitHub");
