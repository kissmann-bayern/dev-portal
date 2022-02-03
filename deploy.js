const { exec } = require("child_process");

exec('git init && git config user.name "Christoph Kissmann" && git config user.email "kissmannchristoph@gmail.com" && git remote add origin git@github.com:kissmann-bayern/dev-portal.git && mkdir .ssh && cd .ssh && touch config && touch privKey && echo "'+process.env.PRIV_KEY+'" > privKey && echo "Host github.com\n  HostName github.com\n IdentityFile ~/.ssh/privKey" > config' , (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
exec("git add index.html", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

exec('git commit -m "deploy"', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

exec("git checkout -B _deploy && git push origin _deploy", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
