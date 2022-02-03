const { exec } = require("child_process");

exec('git init && git config --global user.name "Christoph Kissmann" && git config --global user.email "kissmannchristoph@gmail.com" && mkdir .ssh && cd .ssh && touch config && touch privKey && echo "'+process.env.PRIV_KEY+'" > privKey && echo "Host github.com\n  HostName github.com\n IdentityFile ~/.ssh/privKey"', (error, stdout, stderr) => {
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
