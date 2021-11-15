const { exec } = require("child_process");
const fs = require('fs')
const args = process.argv
const newVersion = (args.length > 2) ? args[2] : "current";

exec("git log --oneline --decorate", (error, stdout, stderr) => {
    let lines = stdout.split("\n");
    let changelog = "# Changelog\n";
    lines.forEach(line => {
        line = line.slice(8).trim()
        let change;
        let version = "";
        if (line.startsWith("(tag:")) {
            let tmp = line.split(") ")
            change = tmp[1];
            version = tmp[0].slice(6);

        } else if (line.startsWith("(HEAD")) {
            let tmp = line.split(") ")
            change = tmp[1];
            if ((tmp[0].split(", ").length > 1)) {
                version = tmp[0].split(", ")[1];
                if (version.startsWith("origin")) {
                    version = newVersion;
                } else {
                    version = version.slice(5);
                }
            } else {
                version = newVersion;
            }
        } else {
            change = line
        }
        if (version != "")
            changelog += "## " + version + ":\n";
        if (change != "")
            changelog += "- " + change + "\n"
    });
    fs.writeFile('CHANGELOG.md', changelog, (error) => {
        if (error) throw error;
        if (newVersion != "current") {
            console.log("version bump")
        } else {
            console.log("old version")
        }
    })
})